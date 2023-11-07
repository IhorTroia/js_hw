function counter(number = 0) {
  let count = number;
  let increaseCount = 0;
  let decreaseCount = 0;
  let getCount = 0;

  const increase = () => {
    count++;
    increaseCount++;
  };

  const decrease = () => {
    count--;
    decreaseCount++;
  };

  const value = () => {
    getCount++;
    return count;
  };

  const getStatistic = () => ({
    increase: increaseCount,
    decrease: decreaseCount,
    get: getCount,
  });

  const reset = () => {
    count = 0;
    increaseCount = 0;
    decreaseCount = 0;
    getCount = 0;
  };

  return {
    increase,
    decrease,
    value,
    getStatistic,
    reset,
  };
}

const myCounter = counter(5);

myCounter.increase();
myCounter.increase();
myCounter.decrease();
console.log(myCounter.value());

console.log(myCounter.getStatistic());
