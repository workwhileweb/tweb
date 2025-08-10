# Telegram Message Logs Feature

This feature adds a comprehensive message logging system to the Telegram Web client, allowing users to monitor and debug all incoming and outgoing messages in real-time.

## Features

### Message Logs Panel
- **Real-time Capture**: Automatically captures all incoming and outgoing messages
- **JSON Export**: Export all logs as JSON files for analysis
- **Live Monitoring**: View message details including timestamps, peer IDs, and message IDs
- **Expandable JSON**: Click "Show JSON" to view the complete message data structure
- **Memory Management**: Automatically limits logs to 1000 entries to prevent memory issues

### Access Methods

1. **Left Sidebar Menu**: 
   - Click the three-dot menu (⋮) in the left sidebar
   - Select "Report Bug" (which opens the message logs)

2. **Keyboard Shortcut**:
   - Press `Ctrl+L` (Windows/Linux) or `Cmd+L` (Mac) to open message logs

3. **Right Sidebar**:
   - Open the right sidebar (usually by clicking on a chat's profile)
   - Use the tab navigation to switch between "Shared Media" and "Message Logs"

### Message Types Captured

- **Incoming Messages**: Messages received from other users
- **Outgoing Messages**: Messages sent by the current user
- **Message Edits**: When messages are edited
- **Message Deletions**: When messages are deleted
- **Message Forwards**: When messages are forwarded
- **Message Replies**: When messages are replied to

### Controls

- **Start/Stop Capture**: Toggle message capture on/off
- **Clear Logs**: Remove all captured messages from memory
- **Export JSON**: Download all logs as a JSON file with timestamp

### Technical Details

The message logs feature is implemented as a new tab in the right sidebar (`AppMessageLogsTab`) that:

1. **Listens to Events**: Captures various Telegram events through the `rootScope` event system
2. **Real-time Updates**: Displays messages as they arrive in real-time
3. **JSON Format**: Stores complete message data in JSON format for debugging
4. **Memory Efficient**: Automatically manages memory by limiting log entries
5. **Exportable**: Allows downloading logs for external analysis

### File Structure

- `src/components/sidebarRight/tabs/messageLogs.ts` - Main message logs component
- `src/components/sidebarRight/index.ts` - Right sidebar with tab navigation
- `src/components/sidebarLeft/index.ts` - Left sidebar with access button
- `src/scss/partials/_rightSidebar.scss` - Styling for the message logs panel

### Usage

1. Open the message logs panel using any of the access methods above
2. The panel will automatically start capturing messages
3. View incoming and outgoing messages in real-time
4. Click "Show JSON" on any message to see the complete data structure
5. Use "Export JSON" to download all logs for analysis
6. Use "Clear Logs" to reset the log display

### Debugging

The message logs are particularly useful for:
- Debugging message delivery issues
- Analyzing message structure and content
- Monitoring API calls and responses
- Understanding Telegram's message flow
- Development and testing of new features

This feature provides developers and power users with comprehensive visibility into the Telegram messaging system while maintaining a clean and intuitive user interface.
