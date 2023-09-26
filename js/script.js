'use strict';

const calc = prompt('select add, sub, mult or div');
const firstOperand = +prompt('select first operand');
const  secondOperand = +prompt('select second one');

function promptCalc() {
    if(calc === 'add') {
        const addResult = firstOperand + secondOperand;
        return alert(`${firstOperand} + ${secondOperand} = ${addResult}`);
    } else if(calc === 'sub') {
        const subResult = firstOperand - secondOperand;
        return alert(`${firstOperand} - ${secondOperand} = ${subResult}`);
    } else if(calc === 'mult') {
        const multResult = firstOperand * secondOperand;
        return alert(`${firstOperand} * ${secondOperand} = ${multResult}`);
    } else if(calc === 'div') {
        const divResult = firstOperand / secondOperand;
        return alert(`${firstOperand} / ${secondOperand} = ${divResult}`);
    } else {
        return alert('enter number please');
    }
}

promptCalc();