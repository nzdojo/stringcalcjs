function StringCalc() {
}

function OperationCharacteristics(operand1, operand2) {
  this.operand1 = operand1;
  this.operand2 = operand2;
}

StringCalc.prototype.Add = function (operand1, operand2) {
    var result = '';
    var errResult = 'Err';
    var operationCharacteristics = new OperationCharacteristics(operand1, operand2);
    operationCharacteristics.isSubtraction = false;
    operationCharacteristics.lengthOperand1 = operand1.length;
    operationCharacteristics.lengthOperand2 = operand2.length;
    operationCharacteristics.isResultNegative = false;
    operationCharacteristics.overflow = '';
    
    if (operationCharacteristics.operand1.charAt(0) === "-") {
        operand1 = operand1.substr(1);
        operationCharacteristics.isSubtraction = !operationCharacteristics.isSubtraction;
        operationCharacteristics.lengthOperand1--;
    }
    
    if (operand2.charAt(0) === "-") {
        operand2 = operand2.substr(1);
        operationCharacteristics.isResultNegative = operationCharacteristics.isSubtraction;
        operationCharacteristics.isSubtraction = !operationCharacteristics.isSubtraction;
        operationCharacteristics.lengthOperand2--;
    }
    
    var longestNumberLength = operationCharacteristics.lengthOperand1;
    if (operationCharacteristics.lengthOperand2 > longestNumberLength)
        longestNumberLength = operationCharacteristics.lengthOperand2;
        
    operationCharacteristics.lengthOperand1--;
    operationCharacteristics.lengthOperand2--;        
    for (var i = longestNumberLength - 1; i >= 0; i--) {
        var number1 = 0;
        if (operationCharacteristics.lengthOperand1 >= 0) {  
            number1 = parseTheNextNumber(operand1, operationCharacteristics.lengthOperand1, operationCharacteristics.overflow);
            operationCharacteristics.overflow = '';            
            if (isNaN(number1)) return errResult;                
        }
        
        var number2 = 0;
        if (operationCharacteristics.lengthOperand2 >= 0) {  
            number2 = parseTheNextNumber(operand2, operationCharacteristics.lengthOperand2, operationCharacteristics.overflow);
            operationCharacteristics.overflow = ''; 
            if (isNaN(number2)) return errResult;                
        }   
        
        var intermediateResult = 0;
        if (operationCharacteristics.isSubtraction)
            intermediateResult = number1 - number2;
        else
            intermediateResult = number1 + number2;
        if (intermediateResult > 9) {
            var overflowResult = intermediateResult.toString();
            operationCharacteristics.overflow = overflowResult.substring(0, 1);
            intermediateResult = parseInt(overflowResult.charAt(1), 10);
        }
        operationCharacteristics.lengthOperand1--;
        operationCharacteristics.lengthOperand2--;
        result = intermediateResult.toString() + result;
    }
    if (operationCharacteristics.overflow.length > 0)
        result = operationCharacteristics.overflow + result;
    if (operationCharacteristics.isResultNegative)
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