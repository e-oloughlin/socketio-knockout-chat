var ko = require('knockout');

module.exports = function conversation(messages) {
    this.messages = ko.observableArray(messages);

    return this;
};