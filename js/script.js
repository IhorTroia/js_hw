'use strict';

const calc = prompt('select add, sub, mult or div');
const firstOperand = +prompt('select first operand');
const  secondOperand = +prompt('select second one');

function promptCalc() {
    if(calc === 'add') {
        alert(firstOperand + secondOperand);
    } else if(calc === 'sub') {
        alert(firstOperand - secondOperand);
    } else if(calc === 'mult') {
        alert(firstOperand * secondOperand);
    } else if(calc === 'div') {
        alert(firstOperand / secondOperand);
    } else {
        alert('enter number please')
    }
}

promptCalc();