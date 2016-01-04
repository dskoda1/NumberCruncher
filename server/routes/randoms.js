module.exports = (router) => {
    
    var util = require('../../shared/index')();
    var randomContr = require('../../shared/controllers/randoms');
    
    router.get('/api/randoms/array/:n', (req, res) => {
        res.json(randomContr.createRandomArray(req.params.n));
    })
    
    router.get('/api/randoms/ll/:n', (req, res) => {
        res.json(randomContr.createRandomLinkedList(req.params.n));
    })
    
    router.get('/api/randoms/bst/:n', (req, res) => {
        res.json(randomContr.createRandomBST(req.params.n));
    })
    
}