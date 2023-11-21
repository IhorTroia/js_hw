const createTable = () => {
  const table = document.createElement('table');

  let counter = 1;
  for (let i = 0; i < 10; i++) {
    const row = table.insertRow();

    for (let j = 0; j < 10; j++) {
      const cell = row.insertCell();
      cell.textContent = counter++;
    }
  }
  document.body.appendChild(table);
};
createTable();
