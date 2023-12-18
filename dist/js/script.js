(() => {
  const userName = prompt('Input your name');
  const age = prompt('Input your age');
  const greetings = (name) => {
    alert(`Hello ${name}, you are ${age} y.o.`);
  };

  greetings(userName);
})();
