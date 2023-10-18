const padString = (str, length, symbol, right = true) => {
  if (typeof str !== 'string') throw new Error('str is not in string type');
  if (typeof length !== 'number') throw new Error('length is not in number type');

  if (str.length > length) return str.substring(0, length);

  if (typeof symbol !== 'string' || symbol.length !== 1) throw new Error('symbol is not in string type or not 1 length');
  if (typeof right !== 'boolean') throw new Error('right is not in boolean type');

  const symbols = symbol.repeat(length - str.length);
  return right ? str + symbols : symbols + str;
};

console.log(padString('hello', 8, '*', false));
