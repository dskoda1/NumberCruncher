module.exports = (router) => {
    
    var gen = require('../../shared/index')();
    
    
    router.get('/api/randoms/:n', (req, res) => {
        var amount = req.params.n;
        var start = gen.timer.start();
        var nums = gen.randomGen(amount).sort((a, b) => a - b);
        var time = gen.timer.stop(start);
        
        res.send({
            time: time,
            nums: nums
        })
    })
    
    router.post('/api/sort/standard', (req, res) => {
        console.log(req.body);
    })
    
    
    
}