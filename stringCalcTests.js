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
    
    it("'11' + '1' returns '12' - this is demonstrating addition on varying length strings", function (done) {
        exerciseAndVerify('11', '1', '12');
        done();
    });
    
    it("'1' + '11' returns '12' - this is demonstrating addition on varying length strings, where the second number has more digits than the first", function (done) {
        exerciseAndVerify('1', '11', '12');
        done();
    });
    
    it("'11' + '11' returns '22' - two digit numbers addition", function (done) {
        exerciseAndVerify('11', '11', '22');
        done();
    });
    
    it("'5' + '9' returns '14' - checking addition overflow with single digit numbers", function (done) {
        exerciseAndVerify('5', '9', '14');
        done();
    });
    
    it("'15' + '9' returns '24' - checking addition overflow with double digit number first number and single digit number", function (done) {
        exerciseAndVerify('15', '9', '24');
        done();
    });
    
    it("'115' + '9' returns '124' - checking addition overflow with three digit number first number and single digit number", function (done) {
        exerciseAndVerify('115', '9', '124');
        done();
    });
    
    it("'9' + '115' returns '124' - checking addition overflow with one digit  number and three digit number", function (done) {
        exerciseAndVerify('9', '115', '124');
        done();
    });
    
    it("'19' + '115' returns '134' - checking addition overflow with two digit number and three digit number", function (done) {
        exerciseAndVerify('19', '115', '134');
        done();
    });
    
    it("'119' + '115' returns '234' - checking addition overflow with three digit number and three digit number", function (done) {
        exerciseAndVerify('119', '115', '234');
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