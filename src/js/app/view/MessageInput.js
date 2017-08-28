var ko = require('knockout');

module.exports = function() {
    this.newMessage = ko.observable('');

    this.sendMessage = function() {
        if(this.newMessage() !== '') {
            // Socket IO message here
            // clear field
            this.newMessage('');
        }
    }.bind(this);

    return this;
};