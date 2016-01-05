module.exports = () => {
    var llConstructor = require('./linkedList');
    var bstConstructor = require('./bst');
    return {
        
        ll: llConstructor,
        bst: bstConstructor
        
    }
}