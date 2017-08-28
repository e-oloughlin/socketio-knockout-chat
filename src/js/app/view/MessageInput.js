var ko     = require('knockout'),
    io     = require('socket.io-client'),
    config = require('../../config/app');

var socket = io.connect(location.origin);

module.exports = function() {
    this.newMessage = ko.observable('');

    this.sendMessage = function() {
        if(this.newMessage() !== '') {
            // Socket IO message here
            socket.emit('chat-message', {
                uuid: config.uuid,
                text: this.newMessage()
            });

            // clear field
            this.newMessage('');
        }
    }.bind(this);

    return this;
};