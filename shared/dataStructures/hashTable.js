var bst = require('./bst');

function hashTable(opt) {
    if (opt) {
        if (opt.hasOwnProperty('size')) {
            var size = opt.size;
            if (size) {
                if (typeof(size) === 'number') {
                    this.size = size;
                }
                else {
                    //console.log('buckets must be a number.')
                    this.size = 50;
                }
            }
            else {
                this.size = 50;
            }

        }else{
            this.size = 50;
        }
        if (opt.hasOwnProperty('hashFunction')) {
            var hashFunction = opt.hashFunction;
            if (hashFunction) {
                if (typeof(hashFunction) === 'function') {
                    this.hashFunction = hashFunction;
                }
                else {
                    //console.log('hashFunction must be a function.');
                    this.hashFunction = defaultHash;
                }
            }
            else {
                this.hashFunction = defaultHash;
            }

        }else{
            this.hashFunction = defaultHash;
        }
        if (opt.hasOwnProperty('key')) {
            var key = opt.key;
            this.key = key;

        }
    }
    else {
        this.size = 50;
        this.hashFunction = defaultHash;
    }





    //Should actually lazily do this
    //Now set each bucket to be a linked list
    //Check if hashing objects or not
    this.buckets = [];
    if (this.key) {
        for (var m = 0; m < this.size; m++) {
            this.buckets.push(new bst(key));
        }
    }
    else {
        for (var m = 0; m < this.size; m++) {
            this.buckets.push(new bst());
        }
    }






    this.insert = (val) => {
        if (typeof(val) === 'number') {
            var bucketToPutIn = this.hashFunction(val);
            this.buckets[bucketToPutIn].insert(val);
            return true
        }
        else if(typeof(val) === 'object'){
            var bucketToPutIn = this.hashFunction(val[this.key]);
            this.buckets[bucketToPutIn].insert(val);
            return true 
        }
        else {
            return undefined;
        }
    }





}

function defaultHash(val) {
    return val % this.size;
}

module.exports = hashTable;