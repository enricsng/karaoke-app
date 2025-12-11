# Mini Karaoke App 🎤

A lightweight, web-based karaoke application built with React for the frontend and Node.js for the backend. Play karaoke videos directly from YouTube on one device while controlling playback (play, pause, skip, etc.) from another device — perfect for home parties or remote sing-alongs!

## Features

- **YouTube Integration**: Search and play karaoke tracks directly from YouTube videos.
- **Dual-Device Control**: 
  - Open `/frontend.html` as the main player (e.g., on a TV or large screen).
  - Use `/controller.html` on your phone or tablet as a remote control.
- **Real-Time Sync**: Controls from the secondary device instantly update the player via WebSockets.
- **Simple & Lightweight**: No heavy dependencies — runs locally with minimal setup.

## Tech Stack

- **Frontend**: React (for dynamic UI components)
- **Backend**: Node.js (with Express and Socket.IO for real-time communication)
- **Video Playback**: Embedded YouTube player

## Prerequisites

- Node.js
- npm

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/enricsng/karaoke-app.git
   cd karaoke-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open in your browser:
   - **Player** (main screen for video): [http://localhost:3000/frontend.html](http://localhost:3000/frontend.html)
   - **Controller** (remote control from phone/tablet): [http://localhost:3000/controller.html](http://localhost:3000/controller.html)

   > Tip: Use your computer's local IP address (e.g., `http://192.168.1.100:3000/...`) on secondary devices if they're on the same network.

## Usage

- On the player screen: Launch the page and wait for songs to be added.
- On the controller: Add a YouTube video link to play on the player screen. Control play/pause on the player screen.

## Screenshots

![Player](/images/Controller.png?raw=true)

## Future Improvements

- Containerize with Docker for easier deployment.
- Add pitch shifting for voice effects.
- Automatically fetch and display video titles and lyrics.

## License

This project is open source and available under the [MIT License](LICENSE).

Enjoy singing! 🎉 If you like this project, give it a star ⭐

## Disclaimer
Portions of this project, including documentation and certain code sections, were generated with the assistance of artificial intelligence tools.

While I have thoroughly tested the application and believe it functions as intended, it is provided "as is" without any warranties of any kind, express or implied. Use at your own risk.