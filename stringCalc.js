function StringCalc() {
}

StringCalc.prototype.Add = function (operand1, operand2) {
    var result;
    var errResult = 'Err';
    var number1 = parseInt(operand1, 10);
    if (isNaN(number1)) return errResult;
    var number2 = parseInt(operand2, 10);
    if (isNaN(number2)) return errResult;
    result = number1 + number2;
    return result.toString();
};
    
module.exports = StringCalc;