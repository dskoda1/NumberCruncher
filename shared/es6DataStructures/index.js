'use strict';
module.exports = () => {
    var llConstructor = require('./SinglyLinkedList');
    var nodeConstructor = require('./Node');
    return {
        ll: llConstructor,
        node: nodeConstructor
    };
};
