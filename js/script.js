(() => {
  const theme = {
    bg: 'light',
  };

  const saveTheme = () => {
    localStorage.setItem('theme', JSON.stringify(theme));
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
    if (!target.hasAttribute('data-btn-add') && !target.hasAttribute('data-btn-remove')) return;

    if (target.hasAttribute('data-btn-add')) {
      target.classList.remove('btn-success');
      target.classList.add('btn-danger');
      target.removeAttribute('data-btn-add');
      target.setAttribute('data-btn-remove', '');
      target.textContent = 'Remove from Fav';
      // элемент сконвертировать в строку, запушить в массив и дальше хз
    } else if (target.hasAttribute('data-btn-remove')) {
      target.classList.remove('btn-danger');
      target.classList.add('btn-success');
      target.removeAttribute('data-btn-remove');
      target.setAttribute('data-btn-add', '');
      target.textContent = 'Add to Fav';
    }
  };

  const loadedHandler = () => {
    prefillTheme();
    const form = document.querySelector('form');
    const ul = document.querySelector('ul');

    form.addEventListener('change', formHandler);
    ul.addEventListener('click', ulHandler);
  };
  document.addEventListener('DOMContentLoaded', loadedHandler);
})();
