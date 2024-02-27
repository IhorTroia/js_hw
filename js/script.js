const processedObjects = new WeakSet();
function trackObjects(obj) {
  if (processedObjects.has(obj)) {
    return true;
  }

  processedObjects.add(obj);

  return false;
}

const obj1 = { name: 'Ihor' };

console.log(trackObjects(obj1));
console.log(trackObjects(obj1));
