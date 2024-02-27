function analyzeText(string) {
  const arrOfWords = string.replace(/[.,?!;:]/g, '').toLowerCase().split(' ');
  console.log(arrOfWords);

  const uniqueWordsSet = new Set(arrOfWords);
  console.log(uniqueWordsSet);

  const uniqueWordsArray = Array.from(uniqueWordsSet);

  return {
    uniqueWordsCount: uniqueWordsArray.length,
    uniqueWords: uniqueWordsArray,
  };
}

console.log(analyzeText('Створіть функцію `analyzeText`, функцію тексту як аргумент і використовує тексту'));
