(() => {
  const currentImage = Math.floor(Math.random() * 9 + 1);
  document.querySelector('[data-img]').src = `./images/${currentImage}.jpg`;
})();
