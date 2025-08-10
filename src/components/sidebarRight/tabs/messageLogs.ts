/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import rootScope, {BroadcastEvents} from '../../../lib/rootScope';
import SidebarSlider, {SliderSuperTab} from '../../slider';
import Button from '../../button';
import ButtonIcon from '../../buttonIcon';
import I18n, {i18n} from '../../../lib/langPack';
import {attachClickEvent} from '../../../helpers/dom/clickEvent';
import Scrollable from '../../scrollable';
import {AppManagers} from '../../../lib/appManagers/managers';
import apiManagerProxy from '../../../lib/mtproto/mtprotoworker';
import {Message} from '../../../layer';

import formatNumber from '../../../helpers/number/formatNumber';
import tsNow from '../../../helpers/tsNow';

interface MessageLogEntry {
  timestamp: number;
  type: 'incoming' | 'outgoing' | 'api';
  peerId: PeerId;
  messageId: number;
  message: Message.message | Message.messageService | null;
  rawData?: any;
}

export default class AppMessageLogsTab extends SliderSuperTab {
  private logsContainer: HTMLElement;
  public scrollable: Scrollable;
  private logs: MessageLogEntry[] = [];
  private isCapturing = false;
  private captureBtn: HTMLElement;
  private clearBtn: HTMLElement;
  private exportBtn: HTMLElement;
  private logsCount: HTMLElement;

  constructor(options: any) {
    super(options);
    this.container.classList.add('message-logs-container');
  }

  public init() {
    this.init = null;

    // Create header
    const header = document.createElement('div');
    header.className = 'sidebar-header';
    
    const title = document.createElement('div');
    title.className = 'sidebar-header__title';
    title.textContent = 'Message Logs';
    
    const closeBtn = ButtonIcon('close', {noRipple: true});
    attachClickEvent(closeBtn, () => {
      this.close();
    });
    
    header.append(title, closeBtn);
    this.container.append(header);

    // Create controls
    const controls = document.createElement('div');
    controls.className = 'message-logs-controls';
    
    this.captureBtn = Button('btn btn-primary', {
      text: 'OK',
      noRipple: true
    });
    
    this.clearBtn = Button('btn btn-secondary', {
      text: 'Delete',
      noRipple: true
    });
    
    this.exportBtn = Button('btn btn-secondary', {
      text: 'OK',
      noRipple: true
    });
    
    this.logsCount = document.createElement('div');
    this.logsCount.className = 'message-logs-count';
    this.logsCount.textContent = '0 messages';
    
    controls.append(this.captureBtn, this.clearBtn, this.exportBtn, this.logsCount);
    this.container.append(controls);

    // Create logs container
    this.logsContainer = document.createElement('div');
    this.logsContainer.className = 'message-logs-list';
    
    this.scrollable = new Scrollable(this.logsContainer);
    this.container.append(this.scrollable.container);

    // Bind events
    attachClickEvent(this.captureBtn, () => {
      this.toggleCapture();
    });
    
    attachClickEvent(this.clearBtn, () => {
      this.clearLogs();
    });
    
    attachClickEvent(this.exportBtn, () => {
      this.exportLogs();
    });

    // Start capturing by default
    this.toggleCapture();
  }

  private toggleCapture() {
    this.isCapturing = !this.isCapturing;
    
    if(this.isCapturing) {
      this.captureBtn.textContent = 'Stop Capture';
      this.captureBtn.classList.add('btn-danger');
      this.startCapturing();
    } else {
      this.captureBtn.textContent = 'Start Capture';
      this.captureBtn.classList.remove('btn-danger');
      this.stopCapturing();
    }
  }

  private startCapturing() {
    // Listen for sent messages
    rootScope.addEventListener('message_sent', (data: BroadcastEvents['message_sent']) => {
      if(!this.isCapturing) return;
      
      this.addLogEntry({
        timestamp: tsNow(true),
        type: 'outgoing',
        peerId: data.message.peerId,
        messageId: data.mid,
        message: data.message,
        rawData: data
      });
    });

    // Listen for message updates
    rootScope.addEventListener('message_edit', (data: BroadcastEvents['message_edit']) => {
      if(!this.isCapturing) return;
      
      this.addLogEntry({
        timestamp: tsNow(true),
        type: 'incoming',
        peerId: data.peerId,
        messageId: data.mid,
        message: data.message,
        rawData: {type: 'edit', data}
      });
    });

    // Listen for message deletions
    rootScope.addEventListener('history_delete', (data: BroadcastEvents['history_delete']) => {
      if(!this.isCapturing) return;
      
      data.msgs.forEach((mid) => {
        this.addLogEntry({
          timestamp: tsNow(true),
          type: 'incoming',
          peerId: data.peerId,
          messageId: mid,
          message: null,
          rawData: {type: 'delete', peerId: data.peerId, mid}
        });
      });
    });

    // Listen for history multiappend (new messages)
    rootScope.addEventListener('history_multiappend', (message: Message.message | Message.messageService) => {
      if(!this.isCapturing) return;
      
      this.addLogEntry({
        timestamp: tsNow(true),
        type: 'incoming',
        peerId: message.peerId,
        messageId: message.mid,
        message: message,
        rawData: message
      });
    });
  }

  private stopCapturing() {
    // Remove event listeners if needed
    // For now, we'll just check isCapturing in the event handlers
  }

  private addLogEntry(entry: MessageLogEntry) {
    this.logs.push(entry);
    this.renderLogEntry(entry);
    this.updateLogsCount();
    
    // Keep only last 1000 entries to prevent memory issues
    if(this.logs.length > 1000) {
      this.logs.shift();
      const firstChild = this.logsContainer.firstElementChild;
      if(firstChild) {
        firstChild.remove();
      }
    }
  }

  private renderLogEntry(entry: MessageLogEntry) {
    const logEntry = document.createElement('div');
    logEntry.className = `message-log-entry message-log-entry-${entry.type}`;
    
    const timestamp = new Date(entry.timestamp * 1000).toLocaleTimeString();
    const peerId = entry.peerId.toString();
    const messageId = entry.messageId ? entry.messageId.toString() : 'N/A';
    
    const header = document.createElement('div');
    header.className = 'message-log-header';
    header.innerHTML = `
      <span class="message-log-timestamp">${timestamp}</span>
      <span class="message-log-type">${entry.type.toUpperCase()}</span>
      <span class="message-log-peer">Peer: ${peerId}</span>
      <span class="message-log-id">ID: ${messageId}</span>
    `;
    
    const content = document.createElement('div');
    content.className = 'message-log-content';
    
    // Create expandable JSON view
    const jsonToggle = document.createElement('button');
    jsonToggle.className = 'message-log-json-toggle';
    jsonToggle.textContent = 'Show JSON';
    
    const jsonContent = document.createElement('pre');
    jsonContent.className = 'message-log-json';
    jsonContent.style.display = 'none';
    jsonContent.textContent = JSON.stringify(entry.rawData, null, 2);
    
    attachClickEvent(jsonToggle, () => {
      const isVisible = jsonContent.style.display !== 'none';
      jsonContent.style.display = isVisible ? 'none' : 'block';
      jsonToggle.textContent = isVisible ? 'Show JSON' : 'Hide JSON';
    });
    
    content.append(jsonToggle, jsonContent);
    
    logEntry.append(header, content);
    this.logsContainer.append(logEntry);
  }

  private updateLogsCount() {
    this.logsCount.textContent = `${formatNumber(this.logs.length, 1)} messages`;
  }

  private clearLogs() {
    this.logs = [];
    this.logsContainer.innerHTML = '';
    this.updateLogsCount();
  }

  private exportLogs() {
    const dataStr = JSON.stringify(this.logs, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `telegram-message-logs-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.json`;
    link.click();
    
    URL.revokeObjectURL(link.href);
  }


}

