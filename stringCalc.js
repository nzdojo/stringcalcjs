function StringCalc() {
}

StringCalc.prototype.Add = function (operand1, operand2) {
    var result = '';
    var errResult = 'Err';

    var lengthOperand1 = operand1.length;
    for (var i = 0; i < lengthOperand1; i++) {
        var number1 = parseInt(operand1.charAt(i), 10);
        if (isNaN(number1)) return errResult;
        var number2 = parseInt(operand2.charAt(i), 10);
        if (isNaN(number2)) return errResult;        
        var intermediateResult = number1 + number2;
        result = intermediateResult.toString() + result;
    }
    return result;
};
    
module.exports = StringCalc;