var expect = require('chai').expect;

describe('/Shared/dataStructures', () => {

    describe('bst.js', () => {
        var ds = require('../../shared/dataStructures/index')();
        var bst = ds.bst;

        describe('BST Constructor: bst()', () => {
            it('Should return an object with a root property', () => {
                var tree = new bst();
                expect(tree).to.have.any.keys("root");
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
                    it('Should set the root to be the new node', () => {
                        var tree = new bst();
                        var node = tree.insert(8);
                        expect(node).to.deep.equal(tree.root);

                    })
                })
                describe('Insert into a non-empty tree', () => {
                    it('Should place smaller val to left', () => {
                        var tree = new bst();
                        var node = tree.insert(8);
                        var newNode = tree.insert(5);
                        expect(node.left).to.deep.equal(newNode);
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

        })
    })
})