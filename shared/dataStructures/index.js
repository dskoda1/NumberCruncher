module.exports = () => {
    var llConstructor = require('./linkedList');
    var bstConstructor = require('./bst');
    var hashConstructor = require('./hashTable');
    var x = 0;
    return {

        ll: llConstructor,
        bst: bstConstructor,
        hashTable: hashConstructor

    }
}
