'use strict';

let i = 20;
const arr= []
for (; i <= 30; i += 0.5) {
    arr.push(i);
}
alert(arr);

let i2 = 10;
const arr2 = [];
for (; i2 <= 100; i2 += 10) {
    arr2.push(i2 * 27);
}
alert(arr2);

let i3 = 1;
const someN = 300;
const arr3 = [];
for (; i3 <= 100; i3++) {
    if (i3 ** 2 < someN) {
        arr3.push(i3);
    }
}
alert(arr3);

let someNum = 6;
let primeNum = true;
for (let i4 = 2; i4 < someNum; i4++) {
    if (someNum % i4 === 0) {
        primeNum = false;
        break;
    }
}
if (primeNum) {
    alert(`${someNum} простое число`);
} else {
    alert(`${someNum} не простое число`);
}

const someNumber = 81;
for (let i5 = 1; i5 < someNumber; i5++) {
    for (let j = 1; j <= someNumber; j++) {
        if (i5 ** j === someNumber) {
            alert(`если ${i5} возвести в степень ${j} то получим ${someNumber}`);
        }
    }
}