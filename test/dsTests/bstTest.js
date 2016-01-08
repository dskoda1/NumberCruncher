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

            describe('insert(val)', () => {
                it("Should return a node with data, left, and right keys", () => {
                    var tree = new bst();
                    var node = tree.insert(8);
                    expect(node).to.have.any.keys('data');
                    expect(node).to.have.any.keys('left');
                    expect(node).to.have.any.keys('right');
                    //expect(node).to.have.any.keys('parent');
                });

                describe('Insert into an empty tree', () => {
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
                describe('Insert into a non-empty tree', () => {
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
                describe('Insert into a multi-level non-empty tree', () => {
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

                describe('Delete node with both children', () => {
                    var tree = new bst();
                    var root = tree.insert(10);
                    var rootLeft = tree.insert(6);
                    var rootRight = tree.insert(14);
                    var rootLeftLeft = tree.insert(4);
                    var rootLeftRight = tree.insert(8);
                    var rootRightLeft = tree.insert(12);
                    var rootRightRight = tree.insert(16);
                    var rootLeftLeftLeft = tree.insert(2);
                    var rootLeftLeftRight = tree.insert(5);

                    //Delete rootleft
                    tree.delete(6);
                    //expect(root.left).to.deep.equal(rootLeftLeft);
                    //expect(rootLeftLeft.right).to.deep.equal(rootLeftRight);
                })


                describe('Delete root of tree', () => {
                    var tree = new bst();
                    var root = tree.insert(10);
                    var rootLeft = tree.insert(6);
                    var rootRight = tree.insert(14);
                    var rootLeftLeft = tree.insert(4);
                    var rootLeftRight = tree.insert(8);
                    var rootRightLeft = tree.insert(12);
                    var rootRightRight = tree.insert(16);

                    //Delete root

                })

                describe('Delete node with no children', () => {
                    var tree = new bst();
                    var root = tree.insert(10);
                    var rootLeft = tree.insert(6);
                    var rootRight = tree.insert(14);
                    var rootLeftLeft = tree.insert(4);
                    var rootLeftRight = tree.insert(8);
                    var rootRightLeft = tree.insert(12);
                    var rootRightRight = tree.insert(16);

                    it('Should set parents pointer to null for right side only', () => {
                        tree.delete(8);
                        expect(rootLeft.right).to.be.a('null');
                        expect(rootLeft.left).to.deep.equal(rootLeftLeft);
                    })
                    it('Should set parents pointer to null for left side only', () => {
                        tree.delete(16);
                        expect(rootRight.right).to.be.a('null');
                        expect(rootRight.left).to.deep.equal(rootRightLeft);

                    })


                })

                describe('Delete node with only left child', () => {
                    var tree = new bst();
                    var root = tree.insert(10);
                    var rootLeft = tree.insert(6);
                    var rootRight = tree.insert(14);
                    var rootLeftLeft = tree.insert(4);
                    //var rootLeftRight = tree.insert(8);
                    var rootRightLeft = tree.insert(12);
                    var rootRightRight = tree.insert(16);

                    //Delete rootLeft
                    it('Should make nodes parent->left now point to nodes left child', () => {
                        tree.delete(6);
                        expect(root.left).to.deep.equal(rootLeftLeft);
                        expect(tree.findParent(rootLeftLeft)).to.deep.equal(root);

                    })

                })

                describe('Delete node with only right child', () => {
                    var tree = new bst();
                    var root = tree.insert(10);
                    var rootLeft = tree.insert(6);
                    var rootRight = tree.insert(14);
                    //var rootLeftLeft = tree.insert(4);
                    var rootLeftRight = tree.insert(8);
                    var rootRightLeft = tree.insert(12);
                    var rootRightRight = tree.insert(16);

                    //Delete delete rootLeft
                    it('Should make nodes parent->right now point to nodes right child', () => {
                        tree.delete(6);
                        expect(root.left).to.deep.equal(rootLeftRight);
                        expect(tree.findParent(rootLeftRight)).to.deep.equal(root);

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