var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
describe('/Shared/dataStructures', () => {

    describe('bst.js', () => {
        var ds = require('../../shared/dataStructures/index')();
        var bst = ds.bst;

        describe('BST Constructor: bst()', () => {
            it('Should return an object with root, size properties', () => {
                var tree = new bst();
                expect(tree).to.have.any.keys("root");
                expect(tree).to.have.any.keys("size");

            })
            describe('BST for objects constructor: bst(key)', () => {
                it('Should return an object that also has key property', () => {
                    var tree = new bst('key');
                    expect(tree).to.have.any.keys("key");

                })
                it('Should return regular tree if key is not a string', () => {
                    var tree = new bst(234);
                    expect(tree).to.have.any.keys("root");
                    expect(tree).to.have.any.keys("size");
                    expect(tree).to.have.any.keys("root");
                    expect(tree).to.not.have.any.keys("key");

                })
            })

            describe('insert(val)', () => {
                it("Should return a node with data, object, left, and right keys", () => {
                    var tree = new bst();
                    var node = tree.insert(8);
                    expect(node).to.have.any.keys('data');
                    expect(node).to.have.any.keys('object');
                    expect(node).to.have.any.keys('left');
                    expect(node).to.have.any.keys('right');
                    //expect(node).to.have.any.keys('parent');
                });

                describe('Insert a primitive into an empty tree', () => {
                    var tree = new bst();
                    var len = tree.size;
                    var node = tree.insert(8);

                    it('Should set the root to be the new node', () => {

                        expect(node).to.deep.equal(tree.root);

                    })
                    it('Should increase the size of the tree by 1', () => {
                        expect(tree.size).to.equal(len + 1);
                    })
                })

                describe('Insert an object into an empty tree', () => {
                    var tree = new bst('key');
                    var len = tree.size;
                    var obj = {
                        'key': 15,
                        'Key2': 'blah'
                    };
                    var node = tree.insert(obj);

                    it('Should set the root to be the new node', () => {
                        expect(node).to.deep.equal(tree.root);
                    })
                    it('Should return a node with a reference to original object', () => {
                        expect(node.object).to.deep.equal(obj);
                    })
                    it('Should index the object by the tree\'s key data member', () => {
                        expect(node.object[tree.key]).to.equal(obj[tree.key]);
                    })
                    it('Should increase the size of the tree by 1', () => {
                        expect(tree.size).to.equal(len + 1);
                    })
                })
                describe('Insert a primitive into a non-empty tree', () => {
                    it('Should place smaller val to left', () => {
                        var tree = new bst();
                        var node = tree.insert(8);
                        var newNode = tree.insert(5);
                        expect(node.left).to.deep.equal(newNode);
                        //expect(newNode.parent).to.deep.equal(node);
                        expect(tree.size).to.equal(2);
                    })
                    it('Should place larger val to right', () => {
                        var tree = new bst();
                        var node = tree.insert(8);
                        var newNode = tree.insert(11);
                        //expect(newNode.parent).to.deep.equal(node);
                        expect(node.right).to.deep.equal(newNode);
                    })
                    it('Should make the root be new nodes parent: Deprecated', () => {
                        var tree = new bst();
                        var node = tree.insert(8);
                        var newNode = tree.insert(11);
                        //expect(node).to.deep.equal(newNode.parent);
                    })
                })

                describe('Insert an object into a non-empty tree', () => {
                    it('Should place smaller val to left', () => {
                        var tree = new bst('key');
                        var larger = {
                            'key': 15,
                            'Key2': 'blah'
                        };
                        var smaller = {
                            'key': 10,
                            'Key2': 'blah'
                        };
                        var node = tree.insert(larger);
                        var newNode = tree.insert(smaller);
                        expect(node.left).to.deep.equal(newNode);
                        //expect(newNode.parent).to.deep.equal(node);
                        expect(tree.size).to.equal(2);
                    })
                    it('Should place larger val to right', () => {
                        var tree = new bst('key');
                        var larger = {
                            'key': 15,
                            'Key2': 'blah'
                        };
                        var smaller = {
                            'key': 10,
                            'Key2': 'blah'
                        };
                        var node = tree.insert(smaller);
                        var newNode = tree.insert(larger);
                        //expect(newNode.parent).to.deep.equal(node);
                        expect(node.right).to.deep.equal(newNode);
                    })
                })
                describe('Insert a primitive into a multi-level non-empty tree', () => {
                    var tree = new bst();
                    var root = tree.insert(10);
                    var rootLeft = tree.insert(6);
                    var rootRight = tree.insert(14);
                    var rootLeftLeft = tree.insert(4);
                    var rootLeftRight = tree.insert(8);
                    var rootRightLeft = tree.insert(12);
                    var rootRightRight = tree.insert(16);
                    it('Should insert to the left of the root correctly', () => {
                        expect(rootLeft.left).to.deep.equal(rootLeftLeft);
                        expect(rootLeft.right).to.deep.equal(rootLeftRight);
                    });
                    it('Should insert to the right of the root correctly', () => {
                        expect(rootRight.left).to.deep.equal(rootRightLeft);
                        expect(rootRight.right).to.deep.equal(rootRightRight);
                    })
                })

                describe('Insert an object into a multi-level non-empty tree', () => {
                    var tree = new bst('key');
                    var root = tree.insert({
                        'key': 10,
                    });
                    var rootLeft = tree.insert({
                        'key': 6,
                    });
                    var rootRight = tree.insert({
                        'key': 14,
                    });
                    var rootLeftLeft = tree.insert({
                        'key': 4,
                    });
                    var rootLeftRight = tree.insert({
                        'key': 8,
                    });
                    var rootRightLeft = tree.insert({
                        'key': 12,
                    });
                    var rootRightRight = tree.insert({
                        'key': 16,
                    });
                    it('Should insert to the left of the root correctly', () => {
                        expect(rootLeft.left).to.deep.equal(rootLeftLeft);
                        expect(rootLeft.right).to.deep.equal(rootLeftRight);
                    });
                    it('Should insert to the right of the root correctly', () => {
                        expect(rootRight.left).to.deep.equal(rootRightLeft);
                        expect(rootRight.right).to.deep.equal(rootRightRight);
                    })
                })
            })

            describe('delete(val)', () => {
                it("Should return true if successful", () => {
                    var tree = new bst();
                    tree.insert(6);
                    tree.insert(14);
                    tree.insert(4);
                    tree.insert(8);
                    tree.insert(12);
                    assert.isTrue(tree.delete(8), 'Deleting a value should return true.');

                });

                it("Should return false if unsuccessful", () => {
                    var tree = new bst();
                    tree.insert(6);
                    tree.insert(14);
                    tree.insert(4);
                    tree.insert(8);
                    tree.insert(12);
                    assert.isFalse(tree.delete(7), 'Failed delete should return false.');

                });

                it('Should return null if not passed a number or an object', () => {
                    var tree = new bst();
                    expect(tree.delete('string')).to.be.a('null')

                })

                describe('Delete node of primitives with no children', () => {
                    var tree = new bst();
                    var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                    var nodes = []
                    for (var i = 0; i < vals.length; i++) {
                        nodes.push(tree.insert(vals[i]));
                    }

                    it('Should set parents pointer to null for right side only', () => {
                        tree.delete(17);
                        expect(nodes[4].right).to.be.a('null');
                        expect(nodes[4].left).to.deep.equal(nodes[8]);
                    })
                    it('Should set parents pointer to null for left side only', () => {
                        tree.delete(27);
                        expect(nodes[5].right).to.be.a('null');
                        expect(nodes[5].left).to.deep.equal(nodes[10]);

                    })
                })

                describe('Delete node of object with no children', () => {
                    var tree = new bst('key');
                    var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                    var nodes = []
                    for (var i = 0; i < vals.length; i++) {
                        nodes.push(tree.insert({
                            'key': vals[i]
                        }));
                    }

                    it('Should set parents pointer to null for right side only', () => {
                        tree.delete({
                            'key': 17
                        });
                        expect(nodes[4].right).to.be.a('null');
                        expect(nodes[4].left).to.deep.equal(nodes[8]);
                    })
                    it('Should set parents pointer to null for left side only', () => {
                        tree.delete({
                            'key': 27
                        });
                        expect(nodes[5].right).to.be.a('null');
                        expect(nodes[5].left).to.deep.equal(nodes[10]);

                    })
                })

                describe('Delete node of primitive with only left child', () => {

                    //Delete rootLeft
                    it('Should make node->parent->right now point to node->left', () => {

                        var tree = new bst();
                        var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                        var nodes = []
                        for (var i = 0; i < vals.length; i++) {
                            nodes.push(tree.insert(vals[i]));
                        }
                        tree.delete(35);
                        expect(nodes[2].right).to.deep.equal(nodes[12]);
                        expect(tree.findParent(nodes[12])).to.deep.equal(nodes[2]);
                    })
                })
                describe('Delete node of object with only left child', () => {

                    //Delete rootLeft
                    it('Should make node->parent->right now point to node->left', () => {

                        var tree = new bst('key');
                        var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                        var nodes = []
                        for (var i = 0; i < vals.length; i++) {
                            nodes.push(tree.insert({
                                'key': vals[i]
                            }));
                        }
                        tree.delete({
                            'key': 35
                        });
                        expect(nodes[2].right).to.deep.equal(nodes[12]);
                        expect(tree.findParent(nodes[12])).to.deep.equal(nodes[2]);
                    })
                })

                describe('Delete node of primitive with only right child', () => {

                    //Delete delete rootLeft
                    it('Should make node->parent->left now point to node->right', () => {
                        var tree = new bst();
                        var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                        var nodes = []
                        for (var i = 0; i < vals.length; i++) {
                            nodes.push(tree.insert(vals[i]));
                        }

                        tree.delete(5);
                        expect(nodes[1].left).to.deep.equal(nodes[7]);
                        expect(tree.findParent(nodes[7])).to.deep.equal(nodes[1]);

                    })
                })

                describe('Delete node of object with only right child', () => {

                    //Delete delete rootLeft
                    it('Should make node->parent->left now point to node->right', () => {
                        var tree = new bst('key');
                        var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                        var nodes = []
                        for (var i = 0; i < vals.length; i++) {
                            nodes.push(tree.insert({
                                'key': vals[i]
                            }));
                        }

                        tree.delete({
                            'key': 5
                        });
                        expect(nodes[1].left).to.deep.equal(nodes[7]);
                        expect(tree.findParent(nodes[7])).to.deep.equal(nodes[1]);

                    })
                })




                describe('Delete node of primitive with both children', () => {


                    it('Should set it\'s value to be successor', () => {
                        var tree = new bst();
                        var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                        var nodes = []
                        for (var i = 0; i < vals.length; i++) {
                            nodes.push(tree.insert(vals[i]));
                        }
                        var succVal = tree.findSuccessor(nodes[1]).data;
                        tree.delete(10);
                        expect(nodes[1].data).to.equal(12);

                    })

                    it('Should then remove that successor node', () => {

                        var tree = new bst();
                        var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                        var nodes = []
                        for (var i = 0; i < vals.length; i++) {
                            nodes.push(tree.insert(vals[i]));
                        }

                        var succ = tree.findSuccessor(nodes[1]);
                        tree.delete(10);
                        expect(nodes[4].left).to.be.a('null');
                    })

                })

                describe('Delete node of object with both children', () => {


                    it('Should set it\'s value to be successor', () => {
                        var tree = new bst('key');
                        var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                        var nodes = []
                        for (var i = 0; i < vals.length; i++) {
                            nodes.push(tree.insert({
                                'key': vals[i]
                            }));
                        }
                        var succVal = tree.findSuccessor(nodes[1]).data;
                        tree.delete({
                            'key': 10
                        });
                        expect(nodes[1].data).to.equal(12);

                    })

                    it('Should then remove that successor node', () => {

                        var tree = new bst('key');
                        var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                        var nodes = []
                        for (var i = 0; i < vals.length; i++) {
                            nodes.push(tree.insert({
                                'key': vals[i]
                            }));
                        }
                        var succ = tree.findSuccessor(nodes[1]);
                        tree.delete({
                            'key': 10
                        });
                        expect(nodes[4].left).to.be.a('null');
                    })

                })


                describe('Delete root primitive of tree', () => {

                    var tree = new bst();
                    var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                    var nodes = []
                    for (var i = 0; i < vals.length; i++) {
                        nodes.push(tree.insert(vals[i]));
                    }
                    it('Should set root to be successor of current root', () => {
                        var succ = tree.findSuccessor(nodes[0]);
                        tree.delete(20);
                        expect(tree.root).to.deep.equal(nodes[10]);
                    })

                })

                describe('Delete root object of tree', () => {

                    var tree = new bst('key');
                    var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                    var nodes = []
                    for (var i = 0; i < vals.length; i++) {
                            nodes.push(tree.insert({
                                'key': vals[i]
                            }));
                        }
                    it('Should set root to be successor of current root', () => {
                        var succ = tree.findSuccessor(nodes[0]);
                        tree.delete({'key': 20});
                        expect(tree.root).to.deep.equal(nodes[10]);
                    })
                    it('Should also transfer over the object to new node', () => {
                        expect(tree.root.object).to.deep.equal(nodes[10].object);
                    })

                })







            })

            describe('findSuccessor(node)', () => {
                var tree = new bst();
                var vals = [20, 10, 30, 5, 15, 25, 35, 7, 12, 17, 22, 27, 32]
                var nodes = []
                for (var i = 0; i < vals.length; i++) {
                    nodes.push(tree.insert(vals[i]));
                }

                it('Should return null if passed null', () => {
                    expect(tree.findSuccessor(null)).to.be.a('null');
                })
                it('Should return minimum in right subtree if node has a right subtree', () => {
                    expect(tree.findSuccessor(nodes[1])).to.deep.equal(nodes[8])
                    expect(tree.findSuccessor(nodes[4])).to.deep.equal(nodes[9])
                    expect(tree.findSuccessor(nodes[3])).to.deep.equal(nodes[7])
                    expect(tree.findSuccessor(nodes[5])).to.deep.equal(nodes[11])
                    expect(tree.findSuccessor(nodes[0])).to.deep.equal(nodes[10])
                })
                it('Should return parent if node is a left leaf', () => {
                    expect(tree.findSuccessor(nodes[12])).to.deep.equal(nodes[6]);
                    expect(tree.findSuccessor(nodes[8])).to.deep.equal(nodes[4]);
                    expect(tree.findSuccessor(nodes[10])).to.deep.equal(nodes[5]);
                    expect(tree.findSuccessor(nodes[12])).to.deep.equal(nodes[6]);
                })
                it('Should return smallest ancestor greater than itself if node is a right leaf', () => {
                    expect(tree.findSuccessor(nodes[7])).to.deep.equal(nodes[1]);
                    expect(tree.findSuccessor(nodes[11])).to.deep.equal(nodes[2]);
                    expect(tree.findSuccessor(nodes[9])).to.deep.equal(nodes[0]);
                })
                it('Should return null for the max value in the tree', () => {
                    expect(tree.findSuccessor(nodes[6])).to.be.a('null');
                })

            })

            describe('findParent(node)', () => {
                var tree = new bst();
                var root = tree.insert(10);
                var rootLeft = tree.insert(6);
                var rootLeftLeft = tree.insert(5);
                var rootRight = tree.insert(14);
                it("Should return the correct parent", () => {

                    expect(tree.findParent(rootLeft)).to.deep.equal(root);
                    expect(tree.findParent(rootRight)).to.deep.equal(root);
                    expect(tree.findParent(rootLeftLeft)).to.deep.equal(rootLeft);

                })
                it('Should return null if no parent', () => {
                    expect(tree.findParent(root)).to.be.a('null');
                })
            })

            describe('search(val)', () => {
                var tree = new bst();
                var root = tree.insert(10);
                var rootLeft = tree.insert(6);
                var rootRight = tree.insert(14);
                var rootLeftLeft = tree.insert(4);
                var rootLeftRight = tree.insert(8);
                var rootRightLeft = tree.insert(12);
                var rootRightRight = tree.insert(16);
                it('Should return the first node if found', () => {
                    var foundNode = tree.search(8);
                    expect(foundNode).to.deep.equal(rootLeftRight);
                })

                it("Should return null if value not found", () => {
                    var notFound = tree.search(19);
                    expect(notFound).to.be.a('null');
                })
            })

        })
    })
})