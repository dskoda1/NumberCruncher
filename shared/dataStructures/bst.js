function bst () {
    this.root = null;
    
    this.insert = (val) => {
        var node = new Node(val);
        
        //Nothing in tree yet
        if(this.root === null){
            this.root = node;
        }else{
            //Search through tree to find spot to place in
            var temp = this.root;
            while(temp !== null){
                var curr = temp;
                //Value is less
                if(curr.data > val){
                    if(curr.left === null){
                        curr.left = node;
                        return node;
                    }else{
                        temp = curr.left;
                    }
                }else{//Value is right
                    if(curr.right === null){
                        curr.right = node;
                        return node;
                    }else{
                        temp = curr.right;
                    }
                }
            }
        }
        return node;
    }
}

function Node (val) {
    return {
        data: val,
        left: null,
        right: null
    }
    
}

module.exports = bst;