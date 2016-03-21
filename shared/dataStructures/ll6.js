'use strict';
let Node = require('./Node');
class ll {

    constructor() {
        this.head = null;
        this.tail = null;
        // length second class data member
        this.length = 0;
    }

    insert(val) {
        //Different cases
        //No elements: head == null && tail == null
        //1 element: tail == head
        //more than 1 element: head != null && tail != null
        var newNode = new Node(val);
        
        // if there's no nodes currently in the list
        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        //If theres only 1 node in the list
        else if (this.head == this.tail) {
            this.head.next = newNode;
            // inserting at end of ll
            this.tail = newNode;
        }else{
            // prior to this, this.tail.next == null
            //Change this.tail.next to be equal to the new tail
            this.tail.next = newNode;
            // inserting node at end of ll
            //Set this linked list tail to be equal to new node
            this.tail = newNode;
        }

                    
        return 0;
        
    }





}
module.exports = ll;