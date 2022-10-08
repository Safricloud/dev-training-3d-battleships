const { Server } = require("socket.io");

const io = new Server({
  serveClient: false
});

module.exports = io;