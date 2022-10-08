const { Server } = require('socket.io');

module.exports = function (httpServer: any) {
    const io = new Server(httpServer, {
        /* options */
        serveClient: false,
    });

    io.on('connection', (socket: any) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });



    return io;
}
