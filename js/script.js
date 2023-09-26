'use strict';

const firstOperand = +prompt('Enter first number');
const secondOperand = +prompt('Enter second one');

function addCalc() {
    return firstOperand + secondOperand;
}
function subCalc() {
    return firstOperand - secondOperand;
}
function multCalc() {
    return firstOperand * secondOperand;
}
function divCalc() {
    return firstOperand / secondOperand;
}

console.log(`Result: ${firstOperand} + ${secondOperand} = ${addCalc()}`);
console.log(`Result: ${firstOperand} - ${secondOperand} = ${subCalc()}`);
console.log(`Result: ${firstOperand} * ${secondOperand} = ${multCalc()}`);
console.log(`Result: ${firstOperand} / ${secondOperand} = ${divCalc()}`);






