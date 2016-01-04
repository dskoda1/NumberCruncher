exports = module.exports = {}
var util = require('../index')();
var ds = require('../dataStructures/index')();

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
    
    var startTime = util.timer.start();
    var list = new ds.ll();

    for (var i=1;i<=n;i++) {
		list.addNode(Math.floor(Math.random()*10000));
	}
	var time = util.timer.stop(startTime);
    return {
        time: time,
        nums: list
    }
}
exports.createRandomBST = (n) => {
    var startTime = util.timer.start();
    var tree = new ds.bst();
    
    for (var i=1;i<=n;i++) {
		tree.insert(Math.floor(Math.random()*10000));
	}
	var time = util.timer.stop(startTime);
	return {
	    time: time,
	    nums: tree
	}
}