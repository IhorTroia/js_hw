'use strict';

const firstOperand = +prompt('Enter first number');
const secondOperand = +prompt('Enter second one');

function addCalc() {
    const addResult = firstOperand + secondOperand;
    return console.log(`Result: ${firstOperand}+${secondOperand}=${addResult}`);
}
function subtractCalc() {
    const subResult = firstOperand - secondOperand;
    return console.log(`Result: ${firstOperand}-${secondOperand}=${subResult}`);
}
function multiplyCalc() {
    const multResult = firstOperand * secondOperand;
    return console.log(`Result: ${firstOperand}*${secondOperand}=${multResult}`);
}
function divisionCalc() {
    const divResult = firstOperand / secondOperand;
    return console.log(`Result: ${firstOperand}/${secondOperand}=${divResult}`);
}

addCalc();
subtractCalc();
multiplyCalc();
divisionCalc();





