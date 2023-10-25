const arr = [];

while (true) {
  const element = prompt('Enter array element or click on Cancel if you want to stop');
  if (element === null || element === '') {
    break;
  }
  arr.push(element);
}
alert(arr);

arr.sort((a, b) => a - b);

alert(arr);

arr.splice(1, 3);

alert(arr);
