# Telegram Web K - Project Structure Documentation

## Overview
Telegram Web K is a web-based Telegram client built with TypeScript, SolidJS, and Vite. It's based on Webogram and provides a full-featured Telegram experience in the browser. This document provides a comprehensive overview of the project structure and explains the purpose of each file and directory.

## Root Directory Files

### Configuration Files
- **`package.json`** - Main project configuration with dependencies, scripts, and metadata
- **`tsconfig.json`** - TypeScript compiler configuration
- **`vite.config.ts`** - Vite build tool configuration
- **`babel.config.js`** - Babel transpiler configuration
- **`eslint.config.mjs`** - ESLint code linting configuration
- **`.eslintrc.json`** - Additional ESLint rules
- **`.editorconfig`** - Editor configuration for consistent coding style
- **`.gitignore`** - Git ignore patterns
- **`.gitmodules`** - Git submodules configuration

### Build and Development Scripts
- **`build.js`** - Main build script that orchestrates the build process
- **`server.js`** - Development server for serving the built application
- **`git-serve.js`** - Git-based file serving utility
- **`git-serve-server.js`** - Server component for git-serve
- **`watch-lang.js`** - Language file watching and compilation script
- **`vite.proxy.js`** - Vite proxy configuration for development
- **`keepAsset.js`** - Asset preservation utility

### Documentation
- **`README.md`** - Main project documentation
- **`LICENSE`** - GPL v3 license file
- **`SECURITY.md`** - Security policy and reporting guidelines
- **`CHANGELOG.md`** - English changelog
- **`CHANGELOG_ru.md`** - Russian changelog
- **`MESSAGE_LOGS_README.md`** - Documentation for message logging features

### Docker and Deployment
- **`docker-compose.yaml`** - Docker Compose configuration for development and production
- **`.docker/`** - Docker-related files and configurations
- **`fff.code-workspace`** - VS Code workspace configuration

### Other Files
- **`index.html`** - Main HTML entry point
- **`sw.ts`** - Service worker entry point
- **`schema.js`** - Telegram API schema definitions
- **`@.txt`** - Temporary or configuration file

## Source Code Structure (`src/`)

### Core Application Files
- **`index.ts`** - Main application entry point
- **`types.d.ts`** - Global TypeScript type definitions
- **`global.d.ts`** - Global variable and interface declarations
- **`env.d.ts`** - Environment-specific type definitions
- **`layer.d.ts`** - Telegram API layer definitions (auto-generated)

### Language and Localization
- **`lang.ts`** - Main language file with all translations
- **`langSign.ts`** - Language signing utilities
- **`countries.ts`** - Country codes and phone number formats
- **`codeLanguages.ts`** - Programming language definitions for syntax highlighting

### Icons and Assets
- **`icons.ts`** - Icon definitions and mappings
- **`iconsReverse.ts`** - Reverse icon mappings
- **`materialize.scss`** - Material Design styles

### Configuration (`src/config/`)
- **`app.ts`** - Application configuration
- **`state.ts`** - Application state configuration
- **`modes.ts`** - Application modes (development, production, etc.)
- **`debug.ts`** - Debug configuration
- **`tld.ts`** - Top-level domain configuration
- **`font.ts`** - Font configuration
- **`emoji.ts`** - Emoji configuration and mappings
- **`currencies.ts`** - Currency definitions
- **`notifications.ts`** - Notification settings
- **`latinizeMap.ts`** - Character latinization mappings
- **`tabId.ts`** - Tab ID management
- **`databases/`** - Database configuration files

### Core Libraries (`src/lib/`)

#### MTProto and Network (`src/lib/mtproto/`)
- **`networker.ts`** - Main MTProto network communication layer with **message handling and routing** (processMessage method)
- **`mtprotoworker.ts`** - Web Worker for MTProto operations
- **`mtproto.worker.ts`** - Additional MTProto worker implementation
- **`apiManager.ts`** - API method management and routing
- **`apiFileManager.ts`** - File upload/download management
- **`authorizer.ts`** - Authentication and authorization
- **`timeManager.ts`** - Time synchronization
- **`tl_utils.ts`** - Type Language utilities
- **`bin_utils.ts`** - Binary utilities
- **`schema.ts`** - Telegram API schema definitions
- **`api_methods.ts`** - API method definitions
- **`appConfig.d.ts`** - Application configuration types
- **`mtproto_config.ts`** - MTProto configuration
- **`networkerFactory.ts`** - Networker factory for creating connections
- **`dcConfigurator.ts`** - Data center configuration
- **`connectionStatus.ts`** - Connection status management
- **`networkStats.ts`** - Network statistics
- **`rsaKeysManager.ts`** - RSA key management
- **`passwordManager.ts`** - Password management
- **`referenceDatabase.ts`** - Reference database for MTProto
- **`repayRequestHandler.ts`** - Request replay handler
- **`singleInstance.ts`** - Single instance management
- **`superMessagePort.ts`** - Enhanced message port implementation with message processing
- **`mtprotoMessagePort.ts`** - MTProto message port
- **`telegramMeWebManager.ts`** - Telegram.me web integration
- **`webPushApiManager.ts`** - Web push API management
- **`useAutoLock.ts`** - Auto-lock functionality

#### Transport Layer (`src/lib/mtproto/transports/`)
- **`transport.ts`** - Base transport interface
- **`websocket.ts`** - WebSocket transport implementation
- **`tcpObfuscated.ts`** - TCP obfuscated transport
- **`http.ts`** - HTTP transport
- **`padded.ts`** - Padded transport
- **`socketProxied.ts`** - Proxied socket transport
- **`intermediate.ts`** - Intermediate transport
- **`abridged.ts`** - Abridged transport
- **`obfuscation.ts`** - Transport obfuscation
- **`controller.ts`** - Transport controller
- **`codec.ts`** - Transport codec

#### Application Managers (`src/lib/appManagers/`)
- **`appMessagesManager.ts`** - Message management and **message handling logic**
- **`appUsersManager.ts`** - User management
- **`appChatsManager.ts`** - Chat/group management
- **`appPeersManager.ts`** - Peer management
- **`appDocsManager.ts`** - Document/file management
- **`appPhotosManager.ts`** - Photo management
- **`appStickersManager.ts`** - Sticker management
- **`appWebPagesManager.ts`** - Web page preview management
- **`appPollsManager.ts`** - Poll management
- **`appNotificationsManager.ts`** - Notification management
- **`appSettingsManager.ts`** - Settings management
- **`appProfileManager.ts`** - User profile management
- **`apiUpdatesManager.ts`** - **Update processing and message routing** (processUpdateMessage method)

#### Storage (`src/lib/storages/`)
- **`storage.ts`** - Main storage interface
- **`localStorage.ts`** - Local storage implementation
- **`sessionStorage.ts`** - Session storage implementation
- **`encryptedStorageLayer.ts`** - Encrypted storage layer
- **`stateStorage.ts`** - State storage management
- **`commonStateStorage.ts`** - Common state storage
- **`searchIndex.ts`** - Search indexing

#### Crypto (`src/lib/crypto/`)
- **`crypto.ts`** - Cryptographic utilities
- **`aes.ts`** - AES encryption/decryption
- **`sha1.ts`** - SHA1 hashing
- **`sha256.ts`** - SHA256 hashing
- **`rsa.ts`** - RSA encryption
- **`dh.ts`** - Diffie-Hellman key exchange
- **`srp.ts`** - Secure Remote Password protocol

#### Media and Files (`src/lib/files/`)
- **`files.ts`** - File handling utilities
- **`fileManager.ts`** - File management
- **`fileUpload.ts`** - File upload functionality
- **`fileDownload.ts`** - File download functionality
- **`mediaManager.ts`** - Media management
- **`imageProcessor.ts`** - Image processing utilities

#### Calls (`src/lib/calls/`)
- **`callManager.ts`** - Voice/video call management
- **`webrtc.ts`** - WebRTC implementation
- **`callController.ts`** - Call controller
- **`callState.ts`** - Call state management

#### Service Worker (`src/lib/serviceWorker/`)
- **`serviceWorker.ts`** - Service worker implementation
- **`download.ts`** - Download management
- **`cache.ts`** - Cache management
- **`push.ts`** - Push notification handling

#### Rich Text Processing (`src/lib/richTextProcessor/`)
- **`richTextProcessor.ts`** - Rich text processing
- **`markdown.ts`** - Markdown parsing
- **`html.ts`** - HTML processing
- **`entities.ts`** - Text entity processing

#### RLottie (`src/lib/rlottie/`)
- **`rlottie.ts`** - Lottie animation support
- **`rlottieWorker.ts`** - RLottie Web Worker

#### HLS (`src/lib/hls/`)
- **`hls.ts`** - HTTP Live Streaming support
- **`hlsPlayer.ts`** - HLS player implementation

#### Media Player (`src/lib/mediaPlayer/`)
- **`mediaPlayer.ts`** - Media player implementation
- **`videoPlayer.ts`** - Video player
- **`audioPlayer.ts`** - Audio player

#### RTMP (`src/lib/rtmp/`)
- **`rtmp.ts`** - RTMP streaming support
- **`rtmpPlayer.ts`** - RTMP player

#### WebP (`src/lib/webp/`)
- **`webp.ts`** - WebP image format support
- **`webpDecoder.ts`** - WebP decoder

#### TinyLD (`src/lib/tinyld/`)
- **`tinyld.ts`** - Language detection library

#### TChart (`src/lib/tchart/`)
- **`tchart.ts`** - Charting library
- **`chartTypes.ts`** - Chart type definitions

#### SolidJS (`src/lib/solidjs/`)
- **`solid.ts`** - SolidJS utilities
- **`components.ts`** - Reusable SolidJS components

#### Accounts (`src/lib/accounts/`)
- **`accountManager.ts`** - Account management
- **`auth.ts`** - Authentication
- **`session.ts`** - Session management

#### Other Core Files
- **`logger.ts`** - Logging system
- **`langPack.ts`** - Language pack management
- **`rootScope.ts`** - Root scope for global state
- **`polyfill.ts`** - Browser polyfills
- **`pluralPolyfill.ts`** - Pluralization polyfill
- **`opusDecodeController.ts`** - Opus audio decoding
- **`cropper.ts`** - Image cropping utilities
- **`chatBackgroundStore.ts`** - Chat background management

### Components (`src/components/`)

#### UI Components
- **`webApp.tsx`** - Main web app component
- **`icon.ts`** - Icon component
- **`iconTsx.tsx`** - Icon component (TSX version)
- **`button.ts`** - Button component
- **`inputField.ts`** - Input field component
- **`inputFieldTsx.tsx`** - Input field component (TSX version)
- **`tooltip.tsx`** - Tooltip component
- **`toast.ts`** - Toast notification component
- **`loader.ts`** - Loading spinner component
- **`preloader.ts`** - Preloader component
- **`table.tsx`** - Table component
- **`section.tsx`** - Section component
- **`space.tsx`** - Spacing component

#### Chat Components
- **`chat/`** - Chat-related components
  - **`chat.ts`** - Main chat component
  - **`message.ts`** - Message component
  - **`messageBubble.ts`** - Message bubble component
  - **`chatInput.ts`** - Chat input component
  - **`chatHeader.ts`** - Chat header component
  - **`chatList.ts`** - Chat list component
  - **`chatItem.ts`** - Individual chat item component
  - **`bubbles.ts`** - **Message bubble rendering and message handling**

#### Media Components
- **`mediaEditor/`** - Media editing components
- **`mediaProgressLine.ts`** - Media progress indicator
- **`lottieAnimation.tsx`** - Lottie animation component
- **`stickerViewer.ts`** - Sticker viewer component
- **`imageViewer.ts`** - Image viewer component
- **`videoPlayer.ts`** - Video player component
- **`audioPlayer.ts`** - Audio player component

#### Navigation Components
- **`sidebarLeft/`** - Left sidebar components
- **`sidebarRight/`** - Right sidebar components
- **`topbar.ts`** - Top navigation bar
- **`topbarCall.ts`** - Call topbar component
- **`topbarWeave.ts`** - Weave topbar component

#### Form Components
- **`inputField.ts`** - Input field component
- **`passwordInputField.ts`** - Password input component
- **`telInputField.ts`** - Telephone input component
- **`usernameInputField.ts`** - Username input component
- **`radioField.ts`** - Radio button component
- **`checkboxField.ts`** - Checkbox component
- **`slider.ts`** - Slider component
- **`rangeSelector.ts`** - Range selector component

#### Popup Components
- **`popups/`** - Popup dialog components
  - **`popup.ts`** - Base popup component
  - **`confirmPopup.ts`** - Confirmation popup
  - **`alertPopup.ts`** - Alert popup
  - **`menuPopup.ts`** - Menu popup

#### Animation Components
- **`transition.ts`** - Transition animations
- **`transitionTsx.tsx`** - Transition component (TSX)
- **`singleTransition.ts`** - Single transition
- **`ripple.ts`** - Ripple effect
- **`rippleTsx.tsx`** - Ripple effect (TSX)

#### Utility Components
- **`wrappers/`** - Component wrappers
- **`skeleton/`** - Loading skeleton components
- **`stories/`** - Story components
- **`premium/`** - Premium features components
- **`passcodeLock/`** - Passcode lock components
- **`monkeys/`** - Monkey animation components
- **`messageSpoilerOverlay/`** - Message spoiler overlay
- **`stargifts/`** - Star gift components
- **`rtmp/`** - RTMP streaming components

#### Specialized Components
- **`poll.ts`** - Poll component
- **`peerProfile.ts`** - Peer profile component
- **`peerTitle.ts`** - Peer title component
- **`stackedAvatars.ts`** - Stacked avatar component
- **`sortedUserList.ts`** - Sorted user list
- **`sortedDialogList.ts`** - Sorted dialog list
- **`groupedLayout.ts`** - Grouped layout component
- **`verticalVirtualList.tsx`** - Virtual scrolling list
- **`scrollable.ts`** - Scrollable container
- **`scrollable2.tsx`** - Scrollable container (TSX)
- **`swipeHandler.ts`** - Swipe gesture handler
- **`movableElement.ts`** - Movable element component

### Pages (`src/pages/`)
- **`page.ts`** - Main page component
- **`loginPage.ts`** - Login page
- **`pageAuthCode.ts`** - Authentication code page
- **`pageSignIn.ts`** - Sign in page
- **`pageSignUp.ts`** - Sign up page
- **`pagePassword.ts`** - Password page
- **`pageSignQR.ts`** - QR code sign in page
- **`pageSignImport.ts`** - Import account page

### Helpers (`src/helpers/`)
- **`array/`** - Array utility functions
- **`string/`** - String utility functions
- **`number/`** - Number utility functions
- **`object/`** - Object utility functions
- **`date/`** - Date utility functions
- **`dom/`** - DOM manipulation utilities
- **`canvas/`** - Canvas utilities
- **`blob/`** - Blob utilities
- **`bytes/`** - Byte manipulation utilities
- **`files/`** - File utilities
- **`animation.ts`** - Animation utilities
- **`easing/`** - Easing functions
- **`schedulers/`** - Scheduler utilities

### Hooks (`src/hooks/`)
- **`useCurrentChat.ts`** - Current chat hook
- **`useElementSize.ts`** - Element size hook
- **`useCollapsable.ts`** - Collapsible hook

### Stores (`src/stores/`)
- **`appState.ts`** - Application state store
- **`appSettings.ts`** - Application settings store
- **`foldersSidebar.ts`** - Folders sidebar store

### Environment (`src/environment/`)
- **`appleMx.ts`** - Apple Mail Exchange
- **`audioMimeTypeSupport.ts`** - Audio MIME type support
- **`callSupport.ts`** - Call support detection
- **`webpSupport.ts`** - WebP support detection
- **`webCodecsSupport.ts`** - Web Codecs support
- **`webAssemblySupport.ts`** - WebAssembly support
- **`serviceWorkerSupport.ts`** - Service Worker support
- **`indexedDbSupport.ts`** - IndexedDB support
- **`localStorageSupport.ts`** - LocalStorage support
- **`sessionStorageSupport.ts`** - SessionStorage support
- **`webRtcSupport.ts`** - WebRTC support
- **`webGLSupport.ts`** - WebGL support
- **`canvasSupport.ts`** - Canvas support
- **`videoSupport.ts`** - Video support
- **`audioSupport.ts`** - Audio support
- **`touchSupport.ts`** - Touch support
- **`pointerSupport.ts`** - Pointer support
- **`gestureSupport.ts`** - Gesture support
- **`vibrationSupport.ts`** - Vibration support
- **`notificationSupport.ts`** - Notification support
- **`pushSupport.ts`** - Push notification support
- **`bluetoothSupport.ts`** - Bluetooth support
- **`nfcSupport.ts`** - NFC support
- **`usbSupport.ts`** - USB support
- **`serialSupport.ts`** - Serial support
- **`hidSupport.ts`** - HID support
- **`gamepadSupport.ts`** - Gamepad support
- **`midiSupport.ts`** - MIDI support
- **`speechSupport.ts`** - Speech recognition support
- **`mediaDevicesSupport.ts`** - Media devices support
- **`permissionsSupport.ts`** - Permissions API support
- **`geolocationSupport.ts`** - Geolocation support
- **`batterySupport.ts`** - Battery API support
- **`networkSupport.ts`** - Network information support
- **`deviceMemorySupport.ts`** - Device memory support
- **`hardwareConcurrencySupport.ts`** - Hardware concurrency support
- **`platformSupport.ts`** - Platform detection

### Scripts (`src/scripts/`)
- **`generate_mtproto_types.js`** - Generate MTProto TypeScript types
- **`generate_changelog.js`** - Generate changelog files
- **`build_solid.js`** - Build SolidJS components
- **`change_version.js`** - Change version numbers
- **`apply_new_lang.js`** - Apply new language files
- **`format_lang.js`** - Format language files
- **`format_jsons.js`** - Format JSON files
- **`format_schema.js`** - Format schema files
- **`emoji_compile_regex.js`** - Compile emoji regex patterns
- **`format_emoji_regex.js`** - Format emoji regex
- **`split_emoji_versions.js`** - Split emoji versions
- **`transfer_indexeddb.js`** - Transfer IndexedDB data
- **`icomoon/`** - Icon generation scripts
- **`in/`** - Input files for scripts
- **`out/`** - Output files from scripts

### Tests (`src/tests/`)
- **`cards.test.ts`** - Card component tests
- **`crypto_methods.test.ts`** - Crypto method tests
- **`fixSdp.test.ts`** - SDP fix tests
- **`scroll_saving.test.ts`** - Scroll saving tests
- **`cache_and_local_storage_speed.test.ts`** - Cache and storage speed tests
- **`indexeddb_getAll.test.ts`** - IndexedDB getAll tests
- **`webk_auth_migration.test.ts`** - Auth migration tests

### Mock (`src/mock/`)
- **`srp_original.ts`** - Original SRP implementation
- **`srp.ts`** - SRP implementation
- **`webrtc/`** - WebRTC mock implementations

### Vendor (`src/vendor/`)
- **`bezierEasing.ts`** - Bezier easing functions
- **`cleanHTML.js`** - HTML cleaning utility
- **`convertPunycode.js`** - Punycode conversion
- **`emoji/`** - Emoji utilities
- **`opus/`** - Opus audio codec
- **`solid/`** - SolidJS vendor files
- **`solid-transition-group/`** - SolidJS transition group

### Solid (`src/solid/`)
- **`packages/`** - SolidJS packages
- **`documentation/`** - SolidJS documentation
- **`CHANGELOG.md`** - SolidJS changelog
- **`CODE_OF_CONDUCT.md`** - Code of conduct
- **`banner.png`** - SolidJS banner
- **`assets/`** - SolidJS assets

### Opus Recorder (`src/opus-recorder/`)
- **`dist-unminified/`** - Unminified distribution files
- **`example/`** - Example usage
- **`opus/`** - Opus codec implementation
- **`speexdsp/`** - Speex DSP library
- **`src/`** - Source files
- **`test/`** - Test files

## Public Directory (`public/`)

### Built Assets
- **`index.html`** - Main HTML file
- **`index-*.js`** - Main JavaScript bundles
- **`index-*.css`** - Main CSS bundles
- **`index-*.js.map`** - Source maps for JavaScript
- **`index-*.css.map`** - Source maps for CSS

### Workers
- **`mtproto.worker-*.js`** - MTProto Web Worker
- **`rlottie.worker-*.js`** - RLottie Web Worker
- **`webp.worker-*.js`** - WebP Web Worker
- **`tinyld.worker-*.js`** - TinyLD Web Worker
- **`hls-*.js`** - HLS Web Worker

### Assets
- **`assets/`** - Static assets (images, fonts, audio, etc.)
  - **`img/`** - Images and icons
  - **`fonts/`** - Font files
  - **`audio/`** - Audio files
  - **`tgs/`** - Telegram sticker files

### Changelogs
- **`changelogs/`** - Generated changelog files for each version

### Web App Manifests
- **`site.webmanifest`** - Web app manifest
- **`site_apple.webmanifest`** - Apple-specific web app manifest

### Other Files
- **`version`** - Current version file
- **`favicon.ico`** - Favicon
- **`robots.txt`** - Search engine robots file

## Other Directories

### Snapshot Server (`snapshot-server/`)
- **`index.js`** - Snapshot server entry point
- **`package.json`** - Snapshot server dependencies
- **`public/`** - Snapshot server static files
- **`README.md`** - Snapshot server documentation

### RLottie (`rlottie_with_printf/`)
- **`rlottie-wasm.js`** - RLottie WebAssembly JavaScript wrapper
- **`rlottie-wasm.wasm`** - RLottie WebAssembly binary

### Handlebars Helpers (`handlebarsHelpers/`)
- **`contains.js`** - Handlebars helper for array contains

### Design Assets (`tweb-design/`)
- **`JS_3/`** - JavaScript 3 design assets
- **`March 2021/`** - March 2021 design assets
- **`Multiselect/`** - Multiselect design assets
- **`Payments/`** - Payment design assets
- **`Tour6/`** - Tour 6 design assets
- **`WebDesign_v0.1/`** - Web design version 0.1
- **`WebDesign_v0.2/`** - Web design version 0.2

### GitHub (`.github/`)
- **`workflows/`** - GitHub Actions workflows
- **`ISSUE_TEMPLATE/`** - Issue templates
- **`PULL_REQUEST_TEMPLATE.md`** - Pull request template

### VS Code (`.vscode/`)
- **`settings.json`** - VS Code settings
- **`extensions.json`** - Recommended extensions
- **`launch.json`** - Debug configurations

### Docker (`.docker/`)
- **`Dockerfile_development`** - Development Dockerfile
- **`Dockerfile_production`** - Production Dockerfile
- **`nginx.conf`** - Nginx configuration

## Build Process

The project uses a sophisticated build process:

1. **Development**: `pnpm start` - Starts Vite dev server with hot reload
2. **Production**: `node build` - Builds optimized production bundle
3. **Docker**: `docker-compose up` - Runs in Docker containers

## Key Technologies

- **TypeScript** - Type-safe JavaScript
- **SolidJS** - Reactive UI framework
- **Vite** - Fast build tool and dev server
- **MTProto** - Telegram's protocol
- **WebRTC** - Real-time communication
- **WebAssembly** - High-performance code execution
- **Service Workers** - Offline functionality
- **IndexedDB** - Client-side database
- **WebP/WebM** - Modern media formats
- **Opus** - Audio codec
- **RLottie** - Lottie animation support

## Architecture Overview

The application follows a modular architecture:

1. **MTProto Layer** - Handles all Telegram protocol communication
2. **Application Managers** - Manage different aspects of the app (users, chats, messages, etc.)
3. **UI Components** - Reusable SolidJS components
4. **State Management** - Reactive state management with SolidJS
5. **Storage Layer** - Local and encrypted storage
6. **Media Processing** - Image, video, and audio processing
7. **Service Workers** - Background processing and caching

This structure provides a robust, scalable, and maintainable codebase for the Telegram Web K client.
