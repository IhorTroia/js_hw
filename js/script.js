function cacheComplexCalculations() {
  const cache = new WeakMap();

  return (obj, calcFunc) => {
    if (cache.has(obj)) {
      console.log('Result from cache');
      return cache.get(obj);
    }

    const result = calcFunc(obj);

    cache.set(obj, result);

    return result;
  };
}

const complexCalculation = (obj) => obj.value * 2;

const cachedFunction = cacheComplexCalculations();
const obj1 = { value: 5 };
const obj2 = { value: 10 };

console.log(cachedFunction(obj1, complexCalculation));
console.log(cachedFunction(obj1, complexCalculation));

console.log(cachedFunction(obj2, complexCalculation));
console.log(cachedFunction(obj2, complexCalculation));
