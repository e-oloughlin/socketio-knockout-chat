# Socket io module.
# Place all socket emissions here.
socketio = require('socket.io')

module.exports.listen = (app) ->
    io = socketio.listen(app);

    io.on 'connection', (socket) ->
        socket.on 'chat-message', (message) ->
            io.emit 'chat-message', message

    return io