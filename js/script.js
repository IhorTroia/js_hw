const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

for (const key in menu) {
  if (typeof menu[key] === 'number') {
    menu[key] *= 2;
  }
}

console.log(menu);
