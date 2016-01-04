var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('/Shared/dataStructures', () => {
    describe("linkedList.js", () => {
        var ds = require('../../shared/dataStructures/index')();
        var ll = ds.ll;
        describe("List Constructor: ll()", () => {
            it("Should return an object with head and tail references", () => {
                var list = new ll();

                expect(list).to.have.any.keys('head');
                expect(list).to.have.any.keys("tail");

            });
            it('Should have a length:number key', () => {
                var list = new ll();
                expect(list).to.have.any.keys('length')
                assert.isFalse(isNaN(list.length), "Length of list should be a number")
            })

            describe("addNode(val)", () => {
                it("Should return a node with keys data=val, next=null", () => {
                    var list = new ll();
                    var node = list.addNode(4);

                    expect(node).to.have.any.keys('data');
                    expect(node.data).to.equal(4);
                    expect(node).to.have.any.keys("next");
                    expect(node.next).to.be.a('null');
                })
                it("Should increment list count by 1", () => {
                        var list = new ll();
                        expect(list.length).to.equal(0);
                        list.addNode(8);
                        expect(list.length).to.equal(1);
                        list.addNode(15);
                        expect(list.length).to.equal(2);
                        list.addNode(10);
                        expect(list.length).to.equal(3);
                    })
                    //Empty list

                describe("Adding a node to empty list", () => {
                        it('Should set head and tail to the node returned', () => {
                            var list = new ll();
                            expect(list.head).to.be.a('null');
                            expect(list.tail).to.be.a('null');
                            var node = list.addNode(5);
                            expect(list.head).to.deep.equal(node);
                            expect(list.tail).to.deep.equal(node);
                        });
                        it('Should set new node to have null next reference', () => {
                            var list = new ll();
                            var node = list.addNode(5);
                            expect(node.next).to.be.a('null');
                        })
                    })
                    //List with 1 element
                describe('Adding a node to a list with 1 element', () => {
                    var list = new ll();
                    list.addNode(5);

                    var node = list.addNode(8);

                    it('Should set head\'s next to the new node', () => {

                        expect(list.head.next).to.deep.equal(node);

                    })
                    it('Should set tail to the new node', () => {

                        expect(list.tail).to.deep.equal(node);
                    })
                });
                //List with n elements
                describe('Adding a node to a list with n elements', () => {
                    var list = new ll();
                    var head = list.addNode(8);
                    var oldTail = list.addNode(15);
                    var newTail = list.addNode(10);
                    it('Should set old tail\'s next to new node', () => {
                        expect(oldTail.next).to.deep.equal(newTail);
                    });
                    it('Should set list tail to be new node', () => {
                        expect(list.tail).to.deep.equal(newTail);
                    })
                    it('Should set new node to have null next reference', () => {

                        expect(newTail.next).to.be.a('null');
                    })
                })
            })

            //Contains value in list
            describe('containsVal(val)', () => {
                var list = new ll();
                list.addNode(6);
                list.addNode(8);
                var foundNode = list.addNode(10);
                list.addNode(5);
                list.addNode(15);

                it('Should return the first node with val passed if val is in list', () => {
                    var node = list.containsVal(10);
                    expect(node).to.deep.equal(foundNode);

                })
                it('Should return null if val passed is not in list', () => {
                    var node = list.containsVal(9);
                    expect(node).to.be.a('null')
                })
            })

            //Delete a node from the list
            describe('deleteNode(node)', () => {
                it('Should return true for a successful delete', () => {
                    var list = new ll();
                    list.addNode(8);
                    var n1 = list.addNode(10);
                    list.addNode(8);
                    assert.isTrue(list.removeNode(n1), 'Removal should return true, successfaul');
                    expect(list.containsVal(n1.data)).to.be.a('null');
                    
                    
                })
                it('Should return false for a failed delete', () => {
                    var list = new ll();
                    list.addNode(8);
                    var n1 = list.addNode(10);
                    list.addNode(8);
                    
                    var l2 = new ll();
                    l2.addNode(9);
                    l2.addNode(15);
                    
                    assert.isFalse(l2.removeNode(n1), 'Removal should return false, not successful');
                })
                it("Should decrement list count by 1", () => {
                    var list = new ll();
                    list.addNode(8);
                    var n1 = list.addNode(10);
                    var n2 = list.addNode(8);
                    expect(list.length).to.equal(3);
                    list.removeNode(n1)
                    expect(list.length).to.equal(2);
                    list.removeNode(n2)
                    expect(list.length).to.equal(1);
                });

                describe('Delete the only node in the list', () => {
                    var list = new ll();
                    var onlyNode = list.addNode(6);

                    it('Should set head and tail to be null', () => {
                        list.removeNode(onlyNode);

                        expect(list.head).to.be.a('null');
                        expect(list.tail).to.be.a('null');
                    })

                });

                describe('Delete the head of the list', () => {

                    var list = new ll();
                    var oldHead = list.addNode(6);
                    list.addNode(8);
                    var newHead = oldHead.next;
                    list.removeNode(list.head);
                    //Or .. list.removeNode(oldHead) works too

                    it('Should set the head of the list to be next of the deleted node', () => {
                        expect(list.head).to.deep.equal(newHead);

                    });
                    it('Should null the deleted node\'s next ref', () => {
                        expect(oldHead.next).to.be.a('null');

                    })

                })
                describe('Delete the tail of the list', () => {

                    var list = new ll();
                    list.addNode(5);
                    list.addNode(17);
                    var newTail = list.addNode(10);
                    var oldTail = list.addNode(8);
                    list.removeNode(list.tail);
                    //Or.. list.remove(oldTail) works

                    it('Should set the tail to be one node before the old tail', () => {
                        expect(list.tail).to.deep.equal(newTail);
                    });
                    it('Should null the deleted node\'s next ref', () => {
                        expect(oldTail.next).to.be.a('null');

                    });
                    it('Should null the new tail\'s next ref', () => {
                        expect(list.tail.next).to.be.a('null');
                    });
                })
                describe('Delete some middle node in the list', () => {
                    var list = new ll();
                    list.addNode(5);
                    var nodeBefore = list.addNode(17);
                    var deleteNode = list.addNode(13);
                    var nodeAfter = list.addNode(18);
                    list.addNode(6);

                    list.removeNode(deleteNode);

                    it('Should set the node before\'s next to be the node after', () => {
                        expect(nodeBefore.next).to.deep.equal(nodeAfter);
                    })
                    it('Should null the deleted nodes next ref', () => {
                        expect(deleteNode.next).to.be.a('null');
                    });
                    //Not contains?
                })
            })

            //Filter list 
            describe('filterList(func)', () => {
                var list = new ll();
                list.addNode(5);
                list.addNode(17);
                list.addNode(13);
                list.addNode(18);
                list.addNode(6);

                var afterList = new ll();
                afterList.addNode(17);
                afterList.addNode(13);
                afterList.addNode(18);
                var func = (x) => x > 10;
                list.filter(func);
                it("Should take a variable of function type", () => {
                    expect(func).to.be.instanceof(Function);
                })
                it('Should filter a linked list by a comparison function to be called on each node in the list', () => {
                    var node1 = list.head;
                    var node2 = afterList.head;
                    while (node1 !== null && node2 !== null) {
                        expect(node1).to.deep.equal(node2);
                        node1 = node1.next;
                        node2 = node2.next;
                    }
                    expect(node1).to.deep.equal(node2);
                    expect(node1).to.be.a('null');
                    expect(node2).to.be.a('null');
                })
                it('Should reflect the change in length to the list', () =>{
                    expect(list.length).to.equal(afterList.length);
                })
            });

            //Map list
            describe('mapList(func)', () => {
                var list = new ll();
                list.addNode(5);
                list.addNode(17);
                list.addNode(6);

                var afterList = new ll()
                afterList.addNode(50);
                afterList.addNode(170);
                afterList.addNode(60);

                var func = (x) => x * 10;
                list.map(func);
                it("Should take a variable of function type", () => {
                    expect(func).to.be.instanceof(Function);
                })
                it('Should map a function onto each node of a list', () => {
                    var node1 = list.head;
                    var node2 = afterList.head;
                    while (node1 !== null && node2 !== null) {
                        expect(node1).to.deep.equal(node2);
                        node1 = node1.next;
                        node2 = node2.next;
                    }
                    expect(node1).to.deep.equal(node2);
                    expect(node1).to.be.a('null');
                    expect(node2).to.be.a('null');
                })
            })
        })
    })
})
