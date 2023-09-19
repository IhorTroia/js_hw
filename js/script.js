'use strict';

const firstOperand = +prompt('Enter first number');
const secondOperand = +prompt('Enter second one');

function sumCalc() {
    return console.log(firstOperand + secondOperand);
}
function subtractCalc() {
    return console.log(firstOperand - secondOperand);
}
function multiplyCalc() {
    return console.log(firstOperand * secondOperand);
}
function divisionCalc() {
    return console.log(firstOperand / secondOperand);
}

sumCalc();
subtractCalc();
multiplyCalc();
divisionCalc();





