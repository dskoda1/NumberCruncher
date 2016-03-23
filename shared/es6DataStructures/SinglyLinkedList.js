'use strict';
let Node = require('./Node');
class ll {


    constructor() {
        this.head = null;
        // length second class data member
        this.length = 0;
    }

    insert(val) {
        var newNode = new Node(val);

        // if there's no nodes currently in the list
        if (this.head == null) {
            this.head = newNode;
        }
        //If theres an existing node in the list
        else {
            //Need to set newNode next pointer
            newNode.next = this.head;

            //need to set the head pointer
            this.head = newNode;
        }
        this.length += 1;
    }
    
    insertNode(node){
         // if there's no nodes currently in the list
        if (this.head == null) {
            this.head = node;
        }
        //If theres an existing node in the list
        else {
            //Need to set newNode next pointer
            node.next = this.head;

            //need to set the head pointer
            this.head = node;
        }
        this.length += 1;
    }

    contains(val) {
        var temp = this.head;
        //Want to iterate through the list
        //break out when temp != null
        while (temp) {

            //Compare if temp.val == val
            if (val == temp.val) {
                return true;
            }
            //Move the temp pointer along
            temp = temp.next;
        }
        //Did not find the appropriate value, return false
        return false;

    }

    containsObj(key, value) {
        var temp = this.head;
        //Want to iterate through the list
        //break out when temp != null
        while (temp) {
            //Compare if temp.val == val
            if (temp.val[key] == value) {
                return temp;
            }
            //Move the temp pointer along
            temp = temp.next;
        }
        //Did not find the appropriate value, return false
        return false;
    }
}
module.exports = ll;