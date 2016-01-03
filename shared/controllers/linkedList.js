exports = module.exports = {}


exports.List = () => {

    return function() {
        this.head = null,
            this.tail = null,
            this.addNode = (val) => {
                return {
                    data: val,
                    next: null
                }
            }
    };


}