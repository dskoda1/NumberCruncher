var expect = require('chai').expect;

var randomGen = require('../shared/randomGen');
//Shared Directory
describe("/Shared", () => {
    //Random Array Generator utility
    describe("randomGen(n)", () => {
        it("Should return an array", () => {
            var results = randomGen(10);
            expect(results).to.be.instanceof(Array);
        });
        it("Should return array of length passed to it: 78", () => {
            var results = randomGen(78);
            expect(results).to.have.length(78)
        });
    })
    //Shared/Controllers Directory
    describe("/Controllers",  () =>{
        
        var controllers = require('../shared/controllers/index')();
        //random.js module
        describe("randoms.js", () => {
            
            var randoms = controllers.randoms;
            //Create random array controller
            describe("createRandomArray(n)", () =>{
                it("Should return an object with keys time, nums", () =>{
                    var ret = randoms.createRandomArray(50);
                    expect(ret).to.have.all.keys({time: 40, nums: [2,3,4]})
                });
                it("Should return a nums array as a key", () =>{
                   var ret = randoms.createRandomArray(50);
                   expect(ret.nums).to.be.instanceof(Array);
                });
            });
            describe("createRandomLinkedList(n)", () =>{
                it("Should return an object with keys time, nums", () =>{
                    var ret = randoms.createRandomLinkedList(50);
                    expect(ret).to.have.all.keys({time: 40, nums: {}})
                });
                it("Should return a list object with keys head, tail, length called nums", () =>{
                    var ret = randoms.createRandomLinkedList(50);
                    expect(ret.nums).to.have.any.keys({head: {}, tail: {}, length: 0})
                })
            })
            describe('createRandomBST(n)', () => {
                it("Should return an object with keys time, nums", () =>{
                    var ret = randoms.createRandomBST(50);
                    expect(ret).to.have.all.keys({time: 40, nums: {}})
                });
                it("Should return a tree object with key root", () =>{
                    var ret = randoms.createRandomBST(50);
                    expect(ret.nums).to.have.any.keys({root: {}})
                })
            })
        });
       
        
    })
})