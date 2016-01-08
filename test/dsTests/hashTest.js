var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('/Shared/dataStructures', () => {

    describe('hashTable.js', () => {
        var ds = require('../../shared/dataStructures/index')();
        var hashTable = ds.hashTable;
        var bst = ds.bst;
        describe('Hash Table Constructor: hashTable(buckets, hashFunction)', () => {
            it('Should return an object with keys buckets, hashFunction', () => {
                var hash = new hashTable();
                expect(hash).to.have.any.keys('buckets');
                expect(hash).to.have.any.keys('hashFunction');
                expect(hash).to.have.any.keys('size');
            })
            it('Should also have a key "key" if passed an object key', () => {
                var hash = new hashTable({
                    'key': 'key'
                })
                expect(hash).to.have.any.keys('key');

            })
            it('Size should default to 50', () => {
                var hash = new hashTable({
                    'size': 100
                })
                expect(hash.size).to.equal(100);

                var hash2 = new hashTable();
                expect(hash2.size).to.equal(50);
            })

            function hashMe(val) {
                return function(x) {
                    return x % val;
                }
            }
            it('hashFunction should default to be val % size', () => {
                var hash = new hashTable({
                    'size': 50
                });
                var shouldBeEqual = hashMe(50);
                var hash2 = new hashTable({
                    'size': 123
                });
                var shouldEqualAgain = hashMe(123);
                var hashDefault = new hashTable({
                    'size': 500,
                    'hashFunction': 'this will cause default'
                });
                var hash500 = hashMe(500);

                for (var i = 5; i < 10000; i++) {
                    expect(shouldBeEqual(i)).to.equal(hash.hashFunction(i));
                    expect(shouldEqualAgain(i)).to.equal(hash2.hashFunction(i));
                    expect(hash500(i)).to.equal(hashDefault.hashFunction(i));
                }
            })
            it('Should have as many bst\'s as size', () => {
                var hash = new hashTable();
                expect(hash.buckets.length).to.equal(hash.size);
                for (var i = 0; i < hash.buckets.length; i++) {
                    assert.isTrue(hash.buckets[i] instanceof bst);
                }
            })

            describe('insert(val)', () => {
                var hash = new hashTable();
                it('should return the value if inserted successfully', () => {

                    assert.isTrue(hash.insert(78));
                })
                it('should return undefined if not a number', () => {
                    expect(hash.insert('string')).to.be.a('undefined');

                })
            })

            describe('insert(obj)', () => {
                var hash = new hashTable({
                    'key': 'key'
                });
                it('should return the value if inserted successfully', () => {

                    assert.isTrue(hash.insert({
                        'key': 18
                    }));
                })
                it('should return undefined if not a number', () => {
                    expect(hash.insert('string')).to.be.a('undefined');

                })
            });






        })


    })



})