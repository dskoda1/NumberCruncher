module.exports = () => {
    
    var randomsController = require('./randoms');
    var llController = require('./linkedList.js');
    
    return {
        
        randoms: randomsController,
        ll: llController
        
    }
    
    
}