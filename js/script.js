'use strict';

const a = null;

const b = null;

let ex1 = a === 0 ? 'right' : 'wrong';

let ex2 = a > 0 ? 'right' : 'wrong';

let ex3 = a < 0 ? 'right' : 'wrong';

let ex4 = a >= 0 ? 'right' : 'wrong';

let ex5 = a <= 0 ? 'right' : 'wrong';

let ex6 = a !== 0 ? 'right' : 'wrong';

let ex7 = a === 'test' ? 'right' : 'wrong';

let ex8 = a === '1' && typeof a === typeof '1' ? 'right' : 'wrong';

let ex9 = a > 0 && a < 5 ? 'right' : 'wrong';

let ex10 = a === 0 || a === 2 ? a + 7 : a / 10;
alert(ex10);

let ex11 = a <= 1 && b >= 3 ? a + b : a - b;

let ex12 = a > 2 && a < 11 || b >= 6 && b < 14 ? 'right' : 'wrong';

let num = null;
let result;

switch (num) {
    case 1:
        result = 'winter';
        break;
    case 2:
        result = 'spring';
        break;
    case 3:
        result = 'summer';
        break;
    case 4:
        result = 'autumn';
        break;
    default:
        result = 'wrong number'
}

console.log(result);


console.log(ex1);
console.log(ex2);
console.log(ex3);
console.log(ex4);
console.log(ex5);
console.log(ex6);
console.log(ex7);
console.log(ex8);
console.log(ex9);
console.log(ex10);
console.log(ex11);
console.log(ex12);
