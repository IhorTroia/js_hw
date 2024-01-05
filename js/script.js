'use strict';
(function () {
  const array = [1, 2, 3, 4, 5];
  const reverseItr = (arr) => {
    const reverseArr = arr.reverse();
    const itr = reverseArr[Symbol.iterator]();
    return itr;
  };
  const itrArr = reverseItr(array);
  while (true) {
    const result = itrArr.next();
    if (result.done) {
      break;
    }
    console.log(result.value);
  }
  //---------------------------------
  function* fibGen() {
    let a = 0;
    let b = 1;

    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  const gen = fibGen();
  for (let i = 0; i < 20; i++) {
    console.log(gen.next().value);
  }
  //---------------------------------
  const user = {
    firstName: 'Ihor',
    lastName: 'Troia',
    age: 21,
  };

  const objItr = (obj) => {
    const iterObj = Object.keys(obj);
    const itr = iterObj[Symbol.iterator]();

    while (true) {
      const result = itr.next();
      if (result.done) {
        break;
      }
      console.log(result.value);
    }
  };
  objItr(user);
}());
