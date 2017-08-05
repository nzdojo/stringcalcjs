function StringCalc() {
}

StringCalc.prototype.Add = function (operand1, operand2) {
    var result;
    var number1 = parseInt(operand1, 10);
    var number2 = parseInt(operand2, 10);
    result = number1 + number2;
    
    return result.toString();
};
    
module.exports = StringCalc;