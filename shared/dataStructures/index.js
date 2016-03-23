'use strict';


module.exports = () => {
    var llConstructor = require('./linkedList');
    var bstConstructor = require('./bst');
    var hashConstructor = require('./hashTable');
    var ll6 = require('./ll6');
    return {
        ll: llConstructor,
        bst: bstConstructor,
        hashTable: hashConstructor,
        ll6: ll6
    };
};
