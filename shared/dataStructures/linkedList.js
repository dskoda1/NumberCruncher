function ll () {
    this.head = null,
            this.tail = null,
            this.addNode = (val) => {
                return {
                    data: val,
                    next: null
                }
            }
}

module.exports = ll;