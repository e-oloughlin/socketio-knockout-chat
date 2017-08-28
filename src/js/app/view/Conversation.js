var ko     = require('knockout'),
    io     = require('socket.io-client'),
    config = require('../../config/app');

var socket = io.connect(location.origin);

module.exports = function conversation(messages) {
    var that = this;

    that.messages = ko.observableArray(messages);

    that.myUUID = config.uuid;

    socket.on('chat-message', function(message) {
        that.messages.push(message);
    });

    return that;
};