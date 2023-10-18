const mainFoo = (callback) => {
  const firstNum = prompt('enter some number');
  const secondNum = prompt('enter power for num');
  callback(firstNum, secondNum);
};

const exponentiationFoo = (a, b) => {
  const res = a ** b;
  alert(res);
};

const multiplyFoo = (a, b) => {
  const res = a * b;
  alert(res);
};

const divisionFoo = (a, b) => {
  const res = a / b;
  alert(res);
};

const moduloFoo = (a, b) => {
  const res = a % b;
  alert(res);
};

mainFoo(exponentiationFoo);
mainFoo(multiplyFoo);
mainFoo(divisionFoo);
mainFoo(moduloFoo);
