function dom() {
  const liItems = document.getElementById('ulId').children;

  for (const item of liItems) {
    console.log(item);
  }

  console.log(liItems.length);

  const itemsArr = Array.from(liItems).map(
    (item) => item.textContent,
  );

  console.log(itemsArr);
}
dom();
