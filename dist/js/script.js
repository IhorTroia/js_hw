(() => {
  const userName = prompt('Input your name');
  const greetings = (name) => {
    alert(`Hello ${name}`);
  };

  greetings(userName);
})();
