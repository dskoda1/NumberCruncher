var expect = require('chai').expect;

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
                        expect(tree.size).to.equal(2);
                    })
                    it('Should place larger val to right', () => {
                        var tree = new bst();
                        var node = tree.insert(8);
                        var newNode = tree.insert(11);
                        expect(node.right).to.deep.equal(newNode);
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