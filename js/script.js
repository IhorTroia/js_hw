(() => {
  const FORM_DATA = 'formData';

  const saveData = (key, data = null) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const prefillForm = (form, key) => {
    const data = JSON.parse(localStorage.getItem(key));

    if (data === null) return;

    form
      .querySelectorAll('input, textarea, select')
      .forEach((input) => {
        input.value = data[input.name];
      });
  };

  const formHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { target } = e;
    const data = {};

    target
      .querySelectorAll('input, textarea, select')
      .forEach((input) => {
        data[input.name] = input.value;
      });
    saveData(FORM_DATA, data);
    target.reset();

    return target;
  };

  const loadedHandler = () => {
    const form = document.querySelector('#form');
    prefillForm(form, FORM_DATA);
    form.addEventListener('submit', formHandler);
  };

  document.addEventListener('DOMContentLoaded', loadedHandler);
})();
