const gallery = document.getElementById('imageGallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

gallery.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    modalImage.src = event.target.src;
    modal.style.display = 'flex';
  }
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

const showTab = (tabId) => {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach((tab) => {
    if (tab.id === `${tabId}Content`) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
};