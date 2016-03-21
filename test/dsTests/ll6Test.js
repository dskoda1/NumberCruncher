'use strict';

let chai = require('chai');
let expect = chai.expect;
let assert = chai.assert;

describe('/Shared/dataStructures/ll6Test.js', () => {

    let ll = require('../../shared/dataStructures/index')().ll6;
    describe("List Constructor: ll()", () => {
        it('Should return an object with head, tail, and length data members', () => {
            var list = new ll();
            expect(list).to.have.any.keys('head');
            expect(list).to.have.any.keys("tail");
            expect(list).to.have.any.keys('length');
        });
    });

    describe('insert(val)', () => {
        it('Should properly set the head&tail elements when empty', () => {
            var list = new ll();
            list.insert(5);
            expect(list.head.val).to.equal(5);
            expect(list.tail.val).to.equal(5);
        });

        it('Should add to end of list when only one element', () => {
            var list = new ll();
            list.insert(5);

            //Testing this
            list.insert(10);
            expect(list.head.val).to.equal(5);
            expect(list.head.next.val).to.equal(10);
            //expect(list.tail.prev.val).to.equal(5);
            expect(list.tail.val).to.equal(10);
        });

        it('Should add to end of list when multiple elements', () => {
            var list = new ll();
            list.insert(5);
            list.insert(10);
            list.insert(7);
            expect(list.head.val).to.equal(5);
            expect(list.head.next.val).to.equal(10);
            expect(list.head.next.next.val).to.equal(7);
            expect(list.tail.val).to.equal(7);

            list.insert(8);
            expect(list.tail.val).to.equal(8);           
            list.insert(15);
            expect(list.tail.val).to.equal(15);
            list.insert(2);
            expect(list.tail.val).to.equal(2);

        });

    });
});