(() => {
  const gallery = document.querySelector('[data-gallery]');
  const modal = document.querySelector('[data-modal]');
  const modalImg = document.querySelector('[data-modal-img]');
  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      modalImg.src = e.target.src;
      modal.style.display = 'flex';
    }
  });
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
})();

(() => {
  const tabsItems = document.querySelectorAll('.tab');
  const contentsItems = document.querySelectorAll('.tab-content');

  console.log(tabsItems);
  console.log(contentsItems);

  tabsItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      contentsItems.forEach((content) => {
        content.classList.remove('active');
      });
      contentsItems[index].classList.add('active');
    });
  });
})();
