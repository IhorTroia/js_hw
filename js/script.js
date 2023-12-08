(() => {
  document.querySelector('[data-input]').addEventListener('focus', () => {
    document.querySelector('[data-gd]').style.display = 'inline-block';
  });

  document.querySelector('[data-input]').addEventListener('blur', () => {
    document.querySelector('[data-gd]').style.display = 'none';
  });
})();
