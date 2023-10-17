const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, character) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * character.length);
    result += character[randomValue];
  }
  return result;
}

const key = generateKey(16, characters);
console.log(key);
