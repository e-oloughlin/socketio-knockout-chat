var $            = require('jquery'),
    ko           = require('knockout'),
    Conversation = require('./app/view/Conversation'),
    MessageInput = require('./app/view/MessageInput'),
    messages     = require('./mock/data').messages;

var conversation = new Conversation(messages);

var messageInput = new MessageInput();

$(function() {
    ko.applyBindings(conversation, $('.chat-messages')[0]);

    ko.applyBindings(messageInput, $('.chat-message-input')[0]);
});