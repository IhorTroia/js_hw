(() => {
  const text = document.querySelector('[data-input]');

  text.addEventListener('focus', () => {
    document.querySelector('[data-msg-error]').style.display = 'inline-block';
  });
  text.addEventListener('blur', () => {
    document.querySelector('[data-msg-error]').style.display = 'none';
  });
})();
