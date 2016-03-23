'use strict';

let chai = require('chai');
let expect = chai.expect;
let assert = chai.assert;

describe('/Shared/es6DataStructures/SinglyLinkedList.js', () => {
    let es6ds = require('../../shared/es6DataStructures/index')();
    let ll = es6ds.ll;
    let Node = es6ds.node;
    describe("List Constructor: ll()", () => {
        it('Should return an object with head, tail, and length data members', () => {
            var list = new ll();
            expect(list).to.have.any.keys('head');
            expect(list).to.have.any.keys('length');
        });
    });

    describe('insert(val)', () => {
        it('Should properly set the head element when empty', () => {
            var list = new ll();
            list.insert(5);
            expect(list.head.val).to.equal(5);
        });

        it('Should add to front of list always', () => {
            var list = new ll();
            list.insert(5);
            expect(list.head.val).to.equal(5);

            //Testing this
            list.insert(10);
            expect(list.head.val).to.equal(10);
            expect(list.head.next.val).to.equal(5);

            list.insert(12);
            expect(list.head.val).to.equal(12);
            expect(list.head.next.val).to.equal(10);
            expect(list.head.next.next.val).to.equal(5);

        });

        it('Should insert objects correctly', () => {
            var list = new ll();
            var objs = [];
            for (var i = 0; i < 3; ++i) {
                objs.push({
                    foo: i,
                    bar: {
                        deepVal: i + 10
                    }
                })
            }

            list.insert(objs[0]);
            expect(list.head.val).to.deep.equal(objs[0]);
            expect(list.length).to.equal(1);

            //Testing this
            list.insert(objs[1]);
            expect(list.head.val).to.deep.equal(objs[1]);
            expect(list.head.next.val).to.deep.equal(objs[0]);
            expect(list.length).to.equal(2);

            list.insert(objs[2]);
            expect(list.head.val).to.deep.equal(objs[2]);
            expect(list.head.next.val).to.deep.equal(objs[1]);
            expect(list.head.next.next.val).to.deep.equal(objs[0]);
            expect(list.length).to.equal(3);

        });
    });
    
    describe('insertNode(node)', () => {
        it('Should properly set the head element when empty', () => {
            var list = new ll();
            var node = new Node(5);
            list.insertNode(node);
            expect(list.head.val).to.equal(5);
        });

        it('Should add to front of list always', () => {
            var list = new ll();
            
            var fiveNode = new Node(5);
            list.insertNode(fiveNode);
            expect(list.head.val).to.equal(5);

            var tenNode = new Node(10);
            list.insertNode(tenNode);
            expect(list.head.val).to.equal(10);
            expect(list.head.next.val).to.equal(5);

            var twelveNode = new Node(12);
            list.insertNode(twelveNode);
            expect(list.head.val).to.equal(12);
            expect(list.head.next.val).to.equal(10);
            expect(list.head.next.next.val).to.equal(5);

        });

        it('Should insert objects correctly', () => {
            var list = new ll();
            var objs = [];
            for (var i = 0; i < 3; ++i) {
                objs.push({
                    foo: i,
                    bar: {
                        deepVal: i + 10
                    }
                })
            }

            list.insert(objs[0]);
            expect(list.head.val).to.deep.equal(objs[0]);
            expect(list.length).to.equal(1);

            //Testing this
            list.insert(objs[1]);
            expect(list.head.val).to.deep.equal(objs[1]);
            expect(list.head.next.val).to.deep.equal(objs[0]);
            expect(list.length).to.equal(2);

            list.insert(objs[2]);
            expect(list.head.val).to.deep.equal(objs[2]);
            expect(list.head.next.val).to.deep.equal(objs[1]);
            expect(list.head.next.next.val).to.deep.equal(objs[0]);
            expect(list.length).to.equal(3);

        });
    });

    describe('contains(val)', () => {
        it('should find the val if in the list', () => {
            var list = new ll();
            list.insert(5);
            list.insert(10);
            list.insert(12);
            list.insert(18);
            list.insert(9);


            assert.isOk(list.contains(12));
            assert.isNotOk(list.contains(27));
        });
    });

    describe('containsObj(key, value)', () => {
        
        var list = new ll();
        var objs = [];
        var nodes = [];
        for (var i = 0; i < 3; ++i) {
            nodes.push(new Node({
                a: i,
                b: 'hello'
            }));
            list.insertNode(nodes[i]);
        }

        var value = 1;
        var key = 'a';
        expect(list.containsObj(key, value)).to.deep.equal(nodes[1]);
    });
});