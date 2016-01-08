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
                        //node.parent = curr;
                        curr.left = node;
                        break;
                        
                    }else{
                        temp = curr.left;
                    }
                }else{//Value is right
                
                    if(curr.right === null){
                        //node.parent = curr;
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
            //Has two children
            if(node.left && node.right){
                //TODO
            //Check for Successor
                if(node.left.right){
                    //Exists
                }
            }
            //Has one child
            else if(node.left || node.right){
                //TODO
                if(node.left && !node.right){
                    var parent = this.findParent(node);
                    if(parent.left === node){
                        parent.left = node.left;
                    }else if(parent.right === node){
                        parent.right = node.left;
                    }
                }else if(node.right && !node.left){
                    var parent = this.findParent(node);
                    if(parent.left === node){
                        parent.left = node.right;
                    }else if(parent.right === node){
                        parent.right = node.right;
                    }
                }
                
            }
            //Has no children
            else{
                //Simply delete its reference from parent
                var parent = this.findParent(node);
                if(parent.left === node){
                    parent.left = null;
                }else if(parent.right === node){
                    parent.right = null;
                }
            }
            
            
            node.left = null;
            node.right = null;
            return true;
        }else{
            return false;
        }
        
    }
    
    this.findSuccessor = (node) => {
        
        var ret = null;
        if(node){
            if(node.right){
                var curr = node.right;
                while(curr.left !== null){
                    curr = curr.left
                }
                ret = curr;
            }else{
                var parent = this.findParent(node);
                if(node === parent.left){
                    ret = parent;
                }else{
                    var nextUp = this.findParent(parent);
                    while(nextUp !== null && nextUp.left !== parent){
                        parent = nextUp;
                        nextUp = this.findParent(parent);
                    }
                    if(nextUp && nextUp.left === parent){
                        ret = nextUp
                    }else{
                        ret = null;
                    }
                }
            }
            
        }else{
            ret = null;
        }
        return ret;
    }
    
    this.findParent = (node) => {
        var ret = null;
        //Search the tree
        if(node === this.root){
            return ret;
        }
        var curr = this.root;
        while(curr !== null && curr.left !== node && curr.right !== node){
            if(curr.data > node.data){
                curr = curr.left;
            }else{
                curr = curr.right;
            }
        }
        //Sanity check
        if(curr){
            if(node === curr.left){
                ret = curr;
            }else if(node === curr.right){
                ret = curr;
            }else{
                ret = null;
            }
        }
            
            return ret;        
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
    
}

function Node (val) {
    return {
        data: val,
        left: null,
        right: null,
        //parent: null
    }
    
}

module.exports = bst;