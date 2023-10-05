'use strict'

let numOrStrHW = prompt(`input number or string`);
console.log(numOrStrHW);

switch (true) {
    case (numOrStrHW === null):
        console.log('ви скасували');
        break;
    case (numOrStrHW.trim() === ''):
        console.log('Empty String');
        break;
    case (isNaN(+numOrStrHW)):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}