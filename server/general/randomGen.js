module.exports = (n) => {
    var arr = []
    for (var i=1;i<=n;i++) {
		arr.push(Math.floor(Math.random()*100));
	}
	return arr;
}