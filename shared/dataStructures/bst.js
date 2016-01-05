function bst () {
    this.root = null;
    this.size = 0;
    
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
                        break;
                    }else{
                        temp = curr.left;
                    }
                }else{//Value is right
                    if(curr.right === null){
                        curr.right = node;
                        break;
                    }else{
                        temp = curr.right;
                    }
                }
            }
        }
        this.size += 1;
        return node;
    }
    
    this.delete = (val) => {
        
        var node = this.search(val);
        if(node){
            //Rearrange tree here
            
            
            node.left = null;
            node.right = null;
            return node;
        }else{
            return null;
        }
        
    }
    
    this.search = (val) => {
        //Search the tree
        var curr = this.root;
        while(curr !== null){
            if(curr.data === val){
                return curr;
            }else{
                if(curr.data > val){
                    curr = curr.left;
                }else{
                    curr = curr.right;
                }
            }
        }
        return curr;
    }
    
    this.printInOrder = () => {
        
          //Need to create a stack data type to do this
    
    }
    
    this.deleteVal = () => {
        
        //TODO
    }
    
    this.deleteNode = () => {
        
        //TODO
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