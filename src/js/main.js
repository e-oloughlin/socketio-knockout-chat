var $            = require('jquery'),
    ko           = require('knockout'),
    Conversation = require('./app/view/Conversation'),
    MessageInput = require('./app/view/MessageInput');

var conversation = new Conversation([]);

var messageInput = new MessageInput();

$(function() {
    ko.applyBindings(conversation, $('.chat-messages')[0]);

    ko.applyBindings(messageInput, $('.chat-message-input')[0]);
});