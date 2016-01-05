var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var sorts = require('../../shared/sorts/index')();

var randoms = require('../../shared/controllers/index')().randoms

describe('/Shared/sorts', () => {
    describe("insertionSort.js", () => {
        var insertionSort = sorts.insertionSort;

        it("Should return null if not passed an array", () => {
            var obj = {
                'sdfkjs': 23,
                'sdf': 231
            };
            //Test object, number, string
            expect(insertionSort(obj)).to.be.a('null');
            expect(insertionSort(9)).to.be.a('null');
            expect(insertionSort('sdlkfjsldfks')).to.be.a('null');
        })

        it('Should return an object of type array', () => {

            expect(insertionSort([5, 2, 6, 7, 3])).to.be.a('Array');

        })

        it("Should sort an array of size 3k correctly", () => {
            var arr = randoms.createRandomArray(3000).nums;

            var shouldBeCorrect = insertionSort(arr);

            for (var i = 1; i < shouldBeCorrect.length; i++) {
                assert.isTrue(shouldBeCorrect[i - 1] <= shouldBeCorrect[i]);
            }

        })

    })
    describe('quickSort.js', () => {
        var quickSort = sorts.quickSort;
        it("Should return null if not passed an array", () => {
            var obj = {
                'sdfkjs': 23,
                'sdf': 231
            };
            //Test object, number, string
            expect(quickSort(obj)).to.be.a('null');
            expect(quickSort(9)).to.be.a('null');
            expect(quickSort('sdlkfjsldfks')).to.be.a('null');
        })

        it('Should return an object of type array', () => {

            expect(quickSort([5, 2, 6, 7, 3])).to.be.a('Array');

        })
        
         it("Should sort an array of size 500k correctly", () => {
            var arr = randoms.createRandomArray(500000).nums;

            var shouldBeCorrect = quickSort(arr);
            for (var i = 1; i < shouldBeCorrect.length; i++) {
                assert.isTrue(shouldBeCorrect[i - 1] <= shouldBeCorrect[i]);
            }

        })

    })
    describe('mergeSort.js', () => {
        var mergeSort = sorts.mergeSort;
        it("Should return null if not passed an array", () => {
            var obj = {
                'sdfkjs': 23,
                'sdf': 231
            };
            //Test object, number, string
            expect(mergeSort(obj)).to.be.a('null');
            expect(mergeSort(9)).to.be.a('null');
            expect(mergeSort('sdlkfjsldfks')).to.be.a('null');
        })

        it('Should return an object of type array', () => {

            expect(mergeSort([5, 2, 6, 7, 3])).to.be.a('Array');

        })

    })
    describe('heapsort.js', () => {

    })
});
