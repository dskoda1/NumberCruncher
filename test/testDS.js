var expect = require('chai').expect;


describe('/Shared/dataStructures', () => {
   describe("linkedList.js", () =>{
            var ds = require('../shared/dataStructures/index')();
            var ll = ds.ll;
            describe("List()", () => {
                it("Should return an object with head and tail references", () =>{
                    var list = new ll();
                    
                    expect(list).to.have.any.keys('head');
                    expect(list).to.have.any.keys("tail");
                    
                });
                //TODO: Cases for add node 
                it("Should have an addNode(val) function which returns a node with keys data=val, next", () =>{
                    var list = new ll();
                    var node = list.addNode(4);
                    
                    expect(node).to.have.any.keys('data');
                    expect(node).to.have.any.keys("next");
                })
            })
            
        })
    
})
