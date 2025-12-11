const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname));

let videoQueue = [];
let currentVideo = null;

function broadcastQueue() {
    io.emit('queue_update', {
        queue: [...videoQueue],
        current: currentVideo
    });
}

io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Send current queue to new client
    broadcastQueue();
    
    if (currentVideo) {
        socket.emit('set_video', currentVideo);
    }
    
    socket.on('add_video', (data) => {
        const { videoId, requestor } = data;
        videoQueue.push({ videoId, requestor: requestor || 'Anonymous' });
        
        if (!currentVideo) {
            currentVideo = videoQueue.shift();
            io.emit('set_video', currentVideo.videoId);
            io.emit('play');
        }
        
        broadcastQueue();
    });
    
    socket.on('play', () => io.emit('play'));
    socket.on('pause', () => io.emit('pause'));
    
    socket.on('video_ended', () => {
        if (videoQueue.length > 0) {
            currentVideo = videoQueue.shift();
            io.emit('set_video', currentVideo.videoId);
            io.emit('play');
        } else {
            currentVideo = null;
        }
        broadcastQueue();
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});