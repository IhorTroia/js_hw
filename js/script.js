const someNum = prompt('Enter some num');
const powerNum = prompt('Enter power for num');

function powerFoo(num, pow = 2) {
  if (isNaN(pow) || isNaN(num)) {
    return 'some error';
  }
  if (pow === null || powerNum === null) {
    return 'you canceled';
  }
  return num ** pow;
}

alert(powerFoo(someNum, +powerNum));
