function StringCalc() {
}

StringCalc.prototype.Add = function (operand1, operand2) {
    var result = '';
    var errResult = 'Err';
    var isSubtraction = false;
    var lengthOperand1 = operand1.length;
    var lengthOperand2 = operand2.length;
    var isResultNegative = false;
    var overflow = '';
    
    if (operand1.charAt(0) === "-") {
        operand1 = operand1.substr(1);
        isSubtraction = !isSubtraction;
        lengthOperand1--;
    }
    
    if (operand2.charAt(0) === "-") {
        operand2 = operand2.substr(1);
        isResultNegative = isSubtraction;
        isSubtraction = !isSubtraction;
        lengthOperand2--;
    }
    
    var longestNumberLength = lengthOperand1;
    if (lengthOperand2 > longestNumberLength)
        longestNumberLength = lengthOperand2;
        
    lengthOperand1--;
    lengthOperand2--;        
    for (var i = longestNumberLength - 1; i >= 0; i--) {
        var number1 = 0;
        if (lengthOperand1 >= 0) {  
            number1 = parseTheNextNumber(operand1, lengthOperand1, overflow);
            overflow = '';            
            if (isNaN(number1)) return errResult;                
        }
        
        var number2 = 0;
        if (lengthOperand2 >= 0) {  
            number2 = parseTheNextNumber(operand2, lengthOperand2, overflow);
            overflow = ''; 
            if (isNaN(number2)) return errResult;                
        }   
        
        var intermediateResult = 0;
        if (isSubtraction)
            intermediateResult = number1 - number2;
        else
            intermediateResult = number1 + number2;
        if (intermediateResult > 9) {
            var overflowResult = intermediateResult.toString();
            overflow = overflowResult.substring(0, 1);
            intermediateResult = parseInt(overflowResult.charAt(1), 10);
        }
        lengthOperand1--;
        lengthOperand2--;
        result = intermediateResult.toString() + result;
    }
    if (overflow.length > 0)
        result = overflow + result;
    if (isResultNegative)
        result = '-' + result;
    var isAllZeroesCheck = result.replace(/0/gi, '');
    if (isAllZeroesCheck.length === 0)
        result = '0';
    return result;
};
   
function parseTheNextNumber(operand, lengthOperand, overflow) {
    var number = 0;
    if (overflow.length > 0) 
        number = parseInt(overflow, 10) + parseInt(operand.charAt(lengthOperand), 10);
    else
        number = parseInt(operand.charAt(lengthOperand), 10);
    return number;
}
module.exports = StringCalc;