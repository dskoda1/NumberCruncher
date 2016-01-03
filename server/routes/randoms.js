module.exports = (router) => {
    
    var util = require('../../shared/index')();
    var randomContr = require('../../shared/controllers/randoms');
    
    router.get('/api/randoms/:n', (req, res) => {
        res.send(randomContr.createRandomArray(req.params.n));
    })
    
}