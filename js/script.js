function getFactorial(a) {
  return (a !== 1) ? a * getFactorial(a - 1) : 1;
}
console.log(getFactorial(3));

function pow(num, degree) {
  return (degree === 1) ? num : (num * pow(num, degree - 1));
}
console.log(pow(2, 2));

function sum(a, b) {
  return b === 0 ? a : sum(a + 1, b - 1);
}

console.log(sum(4, 6));
