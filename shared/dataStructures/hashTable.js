var bst = require('./bst');

function hashTable(opt) {
    //Parse the options object
    if (opt) {
        //Parse size
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
          //Default to 50
            this.size = 50;
        }

        //Parse hash function
        if (opt.hasOwnProperty('hashFunction')) {
            var hashFunction = opt.hashFunction;
            if (hashFunction) {
                if (typeof(hashFunction) === 'function') {
                    this.hashFunction = hashFunction;
                }
                else {
                    this.hashFunction = defaultHash;
                }
            }
            else {
              //Default to size % 50
                this.hashFunction = defaultHash;
            }

        }else{
            this.hashFunction = defaultHash;
        }
        if (opt.hasOwnProperty('key')) {
            var key = opt.key;
            this.key = key;
        }else{
          this.key = null;
        }
    }
    else {
        this.size = 50;
        this.hashFunction = defaultHash;
        this.key = null;
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
            return val;
        }
        else if(typeof(val) === 'object'){
            var bucketToPutIn = this.hashFunction(val[this.key]);
            this.buckets[bucketToPutIn].insert(val);
            return val;
        }
        else {
            return undefined;
        }
    }

    this.search = (val) => {
      //Check if searching for object or not
      var ret = false;
      if(this.key){
        //Searching for object
        if(typeof(val) === 'number'){
          var bucketItMightBeIn = this.hashFunction(val);
          var found = this.buckets[bucketItMightBeIn].search(val);
          if(found){
            ret = found.object;
          }else{
            ret = false;
          }
        }else if(typeof(val) === 'object'){
          var key = val[this.key];
          var bucketItMightBeIn = this.hashFunction(key);
          var found = this.buckets[bucketItMightBeIn].search(key);

          if(found){
            ret = found.object;
            //Now check if it's an exact match
            if(ret !== val){
              ret = false;
            }

          }else{
            ret = false;
          }

        }else{
          ret = undefined;
        }


      }else{
        //Searching for primitive
        if(typeof(val) === 'number'){
          //Argument is number
            var bucketItMightBeIn = this.hashFunction(val);
            var found = this.buckets[bucketItMightBeIn].search(val);
            if(found){
              ret = found.data;
            }else{
              ret = false;
            }

        }else{
          ret = undefined;
        }
      }
      return ret;

    }

    this.getLoadFactor = () => {
      var vals = 0;
      for(var x in this.buckets){
        vals += this.buckets[x].size;
      }
      return vals/this.size;
    }





}

function defaultHash(val) {
    return val % this.size;
}

module.exports = hashTable;