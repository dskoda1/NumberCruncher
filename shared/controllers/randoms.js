exports = module.exports = {}
var util = require('../index')();
var ll = require('./linkedList');


exports.createRandomArray = (n) => {
    
    var startTime = util.timer.start();
    var arr = util.randomGen(n);
    var time = util.timer.stop(startTime);
    return {
        time: time,
        nums: arr
    }
}

exports.createRandomLinkedList = (n) => {
    
    //TODO: Do this shit
    var list = {}
    
    for (var i=1;i<=n;i++) {
		arr.push(Math.floor(Math.random()*10000));
	}
	return arr;
    
}