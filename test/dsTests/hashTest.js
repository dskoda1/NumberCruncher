var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('/Shared/dataStructures', () => {

  describe('hashTable.js', () => {
    var ds = require('../../shared/dataStructures/index')();
    var hashTable = ds.hashTable;
    var bst = ds.bst;
    describe('Hash Table Constructor: hashTable(options:{opt:size, opt:hashFunction, opt:key})', () => {
      it('Should return an object with members buckets, hashFunction', () => {
        var hash = new hashTable();
        expect(hash).to.have.any.keys('buckets');
        expect(hash).to.have.any.keys('hashFunction');
        expect(hash).to.have.any.keys('size');
      })
      it('Should also have a member "key" if options object passed has "key"', () => {
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
        describe('Insert a number', () => {
          var hash = new hashTable();
          it('should return the value if inserted successfully', () => {

            expect(hash.insert(78)).to.equal(78);
          })

          it('should return undefined if not a number', () => {
            expect(hash.insert('string')).to.be.a('undefined');

          })
        })

        describe('Insert an object', () => {
          var hash = new hashTable({
            'key': 'key'
          });
          it('should return the object if inserted successfully', () => {
            var obj = {
              'key': 18,
              'val2': 'word'
            }
            expect(hash.insert(obj)).to.deep.equal(obj);
          })
          it('should return undefined if not an object', () => {
            expect(hash.insert('string')).to.be.a('undefined');

          })
        });

      })

      describe('search(val)', () => {
        describe('Search for a number', () => {
          it('Should return undefined if not passed a number argument', () => {
            var hash = new hashTable();
            expect(hash.search('waldo')).to.be.a('undefined')
          })
          it('Should return false if not found', () => {
            var hash = new hashTable();
            assert.isFalse(hash.search(8));
          });
          it('Should return the value searched for if found', () => {
            var hash = new hashTable();
            hash.insert(6);
            hash.insert(56);
            expect(hash.search(6)).to.equal(6);
          })

        })

        describe('Search for an object', () => {
          var hash = new hashTable({'key': 'key'});
          var vals = [20, 70, 120, 68, 220, 130, 119]
          var nodes = []
          for (var i = 0; i < vals.length; i++) {
            nodes.push({
              'key': vals[i],
              'otherVal': vals[i] + 6
            });
            hash.insert(nodes[i]);
          }
          it('Should return undefined if not passed a number or object', () => {

            expect(hash.search('waldo')).to.be.a('undefined');

          })
          describe('Search for object by number', () => {
            it('Should return first object with matching key if found', () => {

              expect(hash.search(70)).to.deep.equal(nodes[1]);
            })
            it('Should return false if object not found', () => {
              assert.isFalse(hash.search(90));
            })

          })
          describe('Search for object by object', () => {
            it('Should return the exact object if found a match', () => {
              expect(hash.search(nodes[1])).to.deep.equal(nodes[1]);
            })
            it('Should return false if object not found', () => {
              var poser = {'key': 70,
              'otherVal': 76,
              'tricky': 'I exist. Find me'};
              assert.isFalse(hash.search(poser));
              //expect(hash.search(poser)).to.deep.equal(nodes[1]);
            })
          })
        })

      })

      describe('getLoadFactor()', () => {
        it('Should accurately return the load factor of table', () => {

          var hash = new hashTable({size: 10});
          for(var i = 0; i < 100; i++){
            hash.insert(i);
          }
          expect(hash.getLoadFactor()).to.equal(10);

          var hash100 = new hashTable({size: 100});
          for(var i = 0; i < 100; i++){
            hash100.insert(i);
          }
          expect(hash100.getLoadFactor()).to.equal(1);
          var giantHash = new hashTable();
          for(var i = 0; i < 5000; i++){
            giantHash.insert(Math.floor(Math.random()*10000));
          }
          expect(giantHash.getLoadFactor()).to.equal(100)
        })
      })





    })


  })
})

function hashMe(val) {
  return function(x) {
    return x % val;
  }
}
