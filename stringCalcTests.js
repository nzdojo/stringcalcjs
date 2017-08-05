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
    
    it("'1' + '1' returns '2'", function (done) {
        // 1. Setup
        var expectedResult = '2';
        
        // 2. Exercise
        var result = stringCalc.Add('1', '1');
        
        // 3. Verify
        assert(result === expectedResult, 'Nothing defined yet');
        
        // 4. Cleanup & Finish
        done();
    });
    
    it("It's a string calculator and therefore it needs to return a string result", function (done) {
        // 1. Setup
        
        // 2. Exercise
        var result = stringCalc.Add('0', '0');
        
        // 3. Verify
        assert(typeof result == 'string', 'Nothing defined yet');
        
        // 4. Cleanup & Finish
        done();
    });
    
    it("The first operand needs to be a number, if it's not then return 'Err'.  No exceptions used in this implementation", function (done) {
        // 1. Setup
        var expectedResult = 'Err';
        
        // 2. Exercise
        var result = stringCalc.Add('Z', '0');
        
        // 3. Verify
        assert(result == expectedResult, "We expect to have an error string 'Err'");
        
        // 4. Cleanup & Finish
        done();
    });
    
    it("The first operand needs to be a number, if it's not then return 'Err'.  No exceptions used in this implementation", function (done) {
        // 1. Setup
        var expectedResult = 'Err';
        
        // 2. Exercise
        var result = stringCalc.Add('0', 'Z');
        
        // 3. Verify
        assert(result == expectedResult, "We expect to have an error string 'Err'");
        
        // 4. Cleanup & Finish
        done();
    });
    
});