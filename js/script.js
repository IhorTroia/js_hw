(() => {
  const theme = {
    bg: 'light',
  };

  const favItems = {};

  const saveTheme = () => {
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  const saveItems = () => {
    const buttons = document.querySelectorAll('ul button');
    buttons.forEach((button) => {
      favItems[button.name] = button.classList.contains('btn-danger') ? 'btn btn-danger' : 'btn btn-success';
    });
    localStorage.setItem('items', JSON.stringify(favItems));
  };

  const prefillTheme = () => {
    const lightBtn = document.querySelector('#flexRadioDefault1');
    const darkBtn = document.querySelector('#flexRadioDefault2');
    const currentTheme = JSON.parse(localStorage.getItem('theme'));

    lightBtn.checked = currentTheme.bg !== 'dark';
    darkBtn.checked = currentTheme.bg === 'dark';
    document.body.classList.toggle('bg-dark', currentTheme.bg === 'dark');
  };

  const prefillItems = () => {
    const currentItems = JSON.parse(localStorage.getItem('items'));
    const buttons = document.querySelectorAll('ul button');

    buttons.forEach((item) => {
      const isDanger = currentItems[item.name] === 'btn btn-danger';
      item.classList.toggle('btn-success', !isDanger);
      item.classList.toggle('btn-danger', isDanger);
      item.textContent = isDanger ? 'Remove from Fav' : 'Add to Fav';
    });
  };

  const formHandler = ({ target }) => {
    const { body } = document;
    body.classList.toggle('bg-dark', target.hasAttribute('data-dark'));
    theme.bg = target.hasAttribute('data-dark') ? 'dark' : 'light';
    saveTheme();
  };

  const ulHandler = (e) => {
    e.stopPropagation();
    const { target } = e;

    if (target.classList.contains('btn-success') || target.classList.contains('btn-danger')) {
      target.classList.toggle('btn-success');
      target.classList.toggle('btn-danger');
      target.textContent = target.classList.contains('btn-danger') ? 'Remove from Fav' : 'Add to Fav';
      saveItems();
    }
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
