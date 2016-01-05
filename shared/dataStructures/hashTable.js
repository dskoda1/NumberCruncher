var ll = require('./linkedList');
function hashTable(size, hashFunction) {

    this.size = 0;
    this.hashFunction = function() {};

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
    
    //Should actually lazily do this
    //Now set each bucket to be a linked list
    this.buckets = [];
    for(var m = 0; m < this.size; m++){
        this.buckets.push(new ll());
    }

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
    
    
    
    this.insert = (val) => {
        if(typeof(val) === 'number'){
            var bucketToPutIn = this.hashFunction(val);
            this.buckets[bucketToPutIn].addNode(val);
            return val
        }else{
            return undefined;
        }
    }





}

function defaultHash(val){
    return val % this.size;
}

module.exports = hashTable;