module.exports = () => {
    var llConstructor = require('./linkedList');
    var bstConstructor = require('./bst');
    var hashConstructor = require('./hashTable');
    return {
        
        ll: llConstructor,
        bst: bstConstructor,
        hashTable: hashConstructor
        
    }
}