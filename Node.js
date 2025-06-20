// Server (Node.js)
const express = require("express");
const socketIo = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("sendMessage", (message) => {
    io.emit("newMessage", message); // Broadcast to all users
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
