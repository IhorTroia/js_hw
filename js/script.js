const arrayEx = [1, 2, 3, 4];

const indexOfFoo = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
};
const indexSearch = indexOfFoo(arrayEx, 3);
console.log(indexSearch);

const lastIndexOfFoo = (arr, elem) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
};
const lastIndexSearch = lastIndexOfFoo(arrayEx, 2);
console.log(lastIndexSearch);

const findFoo = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};
const elemToFind = findFoo(arrayEx, (elem) => elem === 2);
console.log(elemToFind);

const findIndexFoo = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
};
const indexToFind = findIndexFoo(arrayEx, (elem) => elem === 6);
console.log(indexToFind);

const includesFoo = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return true;
    }
  }
  return false;
};
console.log(includesFoo(arrayEx, 2));

const everyFoo = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
};
const test = everyFoo(arrayEx, (elem) => elem > 0 && elem < 5);
console.log(test);

const someFoo = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
};
const test2 = someFoo(arrayEx, (elem) => elem > 2 && elem < 4);
console.log(test2);
