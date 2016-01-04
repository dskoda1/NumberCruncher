function ll() {

    this.head = null,
        this.tail = null,
        this.length = 0,
        this.addNode = (val) => {
            //Check for each case:
            //1. List is empty
            //2. List has 1 element
            //3. List has n elements
            var node = {
                data: val,
                next: null
            }
            if (this.head === null && this.tail === null) {

                this.head = this.tail = node;

            }
            else if (this.head === this.tail) {

                this.head.next = node;
                this.tail = node;
            }
            else {
                this.tail.next = node;
                this.tail = node;
            }
            this.length += 1
            return node;
        }
    this.containsVal = (val) => {
        //Traverse the list searching for an occurence of the value
        var node = this.head;
        while (node.next !== null) {
            if (node.data === val) {
                return node;
            }
            else {
                node = node.next
            }
        }

        return null;
    }

    this.removeNode = (node) => {
        //1. Node is the only one in the list
        var success = false;
        if (this.head === node && this.tail === node) {
            node.next = null;
            this.head = null;
            this.tail = null;
            success = true;
            //2. Node is the head
        }
        else if (node === this.head) {
            this.head = node.next;
            node.next = null
            success = true;
            //3. Node is the tail
        }
        else if (node === this.tail) {
            //Traverse the list until you find the node before the tail
            var temp = this.head;
            while (temp.next !== node) {
                temp = temp.next;
            }
            temp.next = null;
            this.tail = temp;
            node.next = null;
            success = true;
            //4. Node is something else
        }
        else {
            var temp = this.head;
            while (temp !== null && temp.next !== node) {
                temp = temp.next;
            }

            //Ensure the node was found
            if (temp !== null) {
                temp.next = node.next;
                node.next = null;
                success = true;
            }
            else {
                success = false;
            }

        }

        if (success) {
            this.length -= 1;
            return success;
        }
        else {
            return success;
        }

    }

    this.filter = (f) => {
        //Go through each element in the list
        //Deleting nodes if they fail
        var node = this.head;
        while (node !== null) {

            if (!f(node.data)) {
                var temp = node.next;
                this.removeNode(node);
                node = temp;
            }
            else {
                node = node.next;
            }
        }
    }

    this.map = (f) => {
        var node = this.head;
        while (node !== null) {
            var newVal = f(node.data);
            node.data = newVal;
            node = node.next;
        }
    }
}
module.exports = ll;