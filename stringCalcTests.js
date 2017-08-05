"use strict";

var assert = require('assert'); 
var StringCalc = require('./stringCalc.js');

// Potential to divide this up into Testcase Class per TestFixture.  It could get big nd unwieldy

describe("String Calculator Tests", function () {
    
    //1. Module Setup
    var stringCalc;
    
    //Shared Fixture for all tests
    before(function () {
        stringCalc = new StringCalc();
    });
    
    // Fresh Fixture per test.  
    beforeEach(function () {

    });
    
    // 2. Module Exercise
    
    it("'0' + '0' returns '0'", function (done) {
        // 1. Setup
        var expectedResult = '0';
        
        // 2. Exercise
        var result = stringCalc.Add('0', '0');
        
        // 3. Verify
        assert(result === expectedResult, 'Nothing defined yet');
        
        // 4. Cleanup & Finish
        done();
    });
    

});