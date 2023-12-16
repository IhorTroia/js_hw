(() => {
  const theme = {
    bg: 'light',
  };
  const favItems = {};

  const saveTheme = () => {
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  const saveItems = () => {
    const ul = document.querySelector('ul');
    const buttons = ul.querySelectorAll('button');
    buttons.forEach((button) => {
      favItems[button.name] = button.className;
    });
    localStorage.setItem('items', JSON.stringify(favItems));
  };

  const prefillTheme = () => {
    const lightBtn = document.querySelector('#flexRadioDefault1');
    const darkBtn = document.querySelector('#flexRadioDefault2');
    const currentTheme = JSON.parse(localStorage.getItem('theme'));

    if (currentTheme.bg === 'dark') {
      lightBtn.removeAttribute('checked');
      darkBtn.setAttribute('checked', '');
      document.body.setAttribute('class', 'bg-dark');
    }
    if (currentTheme.bg === 'light') {
      darkBtn.removeAttribute('checked');
      lightBtn.setAttribute('checked', '');
    }
  };

  const prefillItems = () => {
    const currentItems = JSON.parse(localStorage.getItem('items'));
    const ul = document.querySelector('ul');
    const buttons = ul.querySelectorAll('button');
    for (const currentItemsKey in currentItems) {
      if (currentItems[currentItemsKey] === 'btn btn-danger') {
        console.log(currentItems[currentItemsKey]);
        buttons.forEach((item) => {
          if (item.name === currentItemsKey) {
            item.classList.remove('btn-success');
            item.classList.add('btn-danger');
            item.textContent = 'Remove from Fav';
          }
        });
      }
    }
  };

  const formHandler = (e) => {
    const { body } = document;
    const { target } = e;

    if (target.hasAttribute('data-dark')) {
      body.setAttribute('class', 'bg-dark');
      theme.bg = 'dark';
    }
    if (target.hasAttribute('data-light')) {
      body.removeAttribute('class');
      theme.bg = 'light';
    }
    saveTheme();
  };

  const ulHandler = (e) => {
    e.stopPropagation();
    const { target } = e;
    if (!target.classList.contains('btn-success') && !target.classList.contains('btn-danger')) return;

    if (target.classList.contains('btn-success')) {
      target.classList.remove('btn-success');
      target.classList.add('btn-danger');
      target.textContent = 'Remove from Fav';
    } else if (target.classList.contains('btn-danger')) {
      target.classList.remove('btn-danger');
      target.classList.add('btn-success');
      target.textContent = 'Add to Fav';
    }
    saveItems();
  };

  const loadedHandler = () => {
    prefillTheme();
    prefillItems();
    const form = document.querySelector('form');
    const ul = document.querySelector('ul');

    form.addEventListener('change', formHandler);
    ul.addEventListener('click', ulHandler);
  };
  document.addEventListener('DOMContentLoaded', loadedHandler);
})();
