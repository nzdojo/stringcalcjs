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
    
    function exerciseAndVerify(operand1, operand2, expectedResult) {
        var result = stringCalc.Add(operand1, operand2);
        assert(result === expectedResult, 'Expecting to get ' + expectedResult + ' but got ' + result);
    }
    
    // 2. Module Exercise
    
    it("'0' + '0' returns '0'", function (done) {
        exerciseAndVerify('0', '0', '0');
        done();
    });
    
    it("'1' + '1' returns '2'", function (done) {
        exerciseAndVerify('1', '1', '2');
        done();
    });
    
    it("It's a string calculator and therefore it needs to return a string result", function (done) {
        // 1. Setup
        
        // 2. Exercise
        var result = stringCalc.Add('0', '0');
        
        // 3. Verify
        assert(typeof result == 'string', 'Should be a string');
        
        // 4. Cleanup & Finish
        done();
    });
    
    // it("Adding two very large numbers, one number is neagtive of the other and therefore the result is zero", function (done) {
    //     // 1. Setup
    //     var expectedResult = '0';
    //     var extremelyLargeNumber = '189769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001';
        
    //     // 2. Exercise
    //     var result = stringCalc.Add(extremelyLargeNumber, '-' + extremelyLargeNumber);
        
    //     // 3. Verify
    //     assert(result == expectedResult, 'Expecting to get ' + expectedResult + ' but got ' + result);
        
    //     // 4. Cleanup & Finish
    //     done();
    // });
    
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
    
    it("The second operand needs to be a number, if it's not then return 'Err'.  No exceptions used in this implementation", function (done) {
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