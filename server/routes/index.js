module.exports = (router) => {
    
    var gen = require('../../shared/index')();
    
    var randoms = require('./randoms')(router);
    
    
    router.post('/api/sort/standard', (req, res) => {
        console.log(req.body);
    })
    
    
    
}