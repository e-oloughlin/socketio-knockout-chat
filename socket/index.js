/**
 * Socket io module.
 * Place all socket emissions here.
 */
const socketio = require('socket.io');

let io;

module.exports.listen = function(app) {
    io = socketio.listen(app);

    io.on('connection', function(socket){
        socket.on('chat-message', function(message){
            io.emit('chat-message', message);
        });
    });

    return io;
}