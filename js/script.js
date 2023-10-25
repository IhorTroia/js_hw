const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const positiveArr = arr.filter((a) => a > 0);
console.log(positiveArr, positiveArr.length);

console.log(positiveArr.reduce((sum, current) => sum + current, 0));

console.log(Math.min.apply(null, arr));

console.log(arr.indexOf(-63));

console.log(Math.max.apply(null, arr));

console.log(arr.indexOf(76));

const negativeArr = arr.filter((a) => a < 0);
console.log(negativeArr, negativeArr.length);

const oddArr = arr.filter((a) => a > 0 && a % 2 !== 0);
console.log(oddArr, oddArr.length);

const evenArr = arr.filter((a) => a > 0 && a % 2 === 0);
console.log(evenArr, evenArr.length);

console.log(evenArr.reduce((sum, current) => sum + current, 0));

console.log(oddArr.reduce((sum, current) => sum + current, 0));

console.log(positiveArr.reduce((sum, current) => sum * current));

const maxNum = Math.max.apply(null, arr);

arr.forEach((element, index) => {
  if (element !== maxNum) {
    arr[index] = 0;
  }
});

console.log(arr);
