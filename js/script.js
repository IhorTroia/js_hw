let i = 10;
const arr = [];
for (; i <= 20; i++) {
  arr.push(i);
}
alert(arr);

let j = 10;
const arr2 = [];
for (; j <= 20; j++) {
  arr2.push(j ** 2);
}
alert(arr2);

let i2 = 1;
const arr3 = [];
for (; i2 <= 10; i2++) {
  arr3.push(i2 * 7);
}
alert(arr3);

let i3 = 1;
let sum = null;
for (; i3 <= 15; i3++) {
  sum += i3;
}
alert(sum);

let i4 = 15;
let sum2 = 1;
for (; i4 <= 35; i4++) {
  sum2 *= i4;
}
alert(sum2);

let i5 = 1;
let sum3 = null;
let average = null;
for (; i5 <= 500; i5++) {
  sum3 += i5;
  average = sum3 / 500;
}
alert(average);

let i6 = 30;
let sum4 = null;
for (; i6 <= 80; i6++) {
  if (i6 % 2 === 0) {
    sum4 += i6;
  }
}
alert(sum4);

let i7 = 100;
const arr4 = [];
for (; i7 <= 200; i7++) {
  if (i7 % 3 === 0) {
    arr4.push(i7);
  }
}
alert(arr4);

const naturalNum = 100;
let i8 = 1;
const arr5 = [];
for (; i8 <= naturalNum; i8++) {
  if (naturalNum % i8 === 0) {
    arr5.push(i8);
  }
}
alert(arr5);

const naturalNum2 = 100;
let i9 = 1;
const arr6 = [];
for (; i9 <= naturalNum2; i9++) {
  if (naturalNum2 % i9 === 0) {
    if (i9 % 2 === 0) {
      arr6.push(i9++);
    }
  }
}
alert(arr6);

const naturalNum3 = 100;
let i10 = 1;
let sum5 = null;
for (; i10 <= naturalNum3; i10++) {
  if (naturalNum3 % i10 === 0) {
    if (i10 % 2 === 0) {
      sum5 += i10;
    }
  }
}
alert(sum5);

let i11 = 1;
const arr7 = [['Таблица умножения на 1'],
  ['Таблица умножения на 2'],
  ['Таблица умножения на 3'],
  ['Таблица умножения на 4'],
  ['Таблица умножения на 5'],
  ['Таблица умножения на 6'],
  ['Таблица умножения на 7'],
  ['Таблица умножения на 8'],
  ['Таблица умножения на 9'],
  ['Таблица умножения на 10']];
for (; i11 <= 10; i11++) {
  arr7[0].push(1 * i11);
  arr7[1].push(2 * i11);
  arr7[2].push(3 * i11);
  arr7[3].push(4 * i11);
  arr7[4].push(5 * i11);
  arr7[5].push(6 * i11);
  arr7[6].push(7 * i11);
  arr7[7].push(8 * i11);
  arr7[8].push(9 * i11);
  arr7[9].push(10 * i11);
}
console.log(arr7);
