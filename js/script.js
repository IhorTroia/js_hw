(function () {
  const saveData = (key, data = null) => {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  };

  const getData = (key) => {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  };

  const restoreFromState = () => {
    const data = getLocalStore();
    const btns = document.querySelectorAll('[data-id]');
    btns.forEach((btn) => {
      const id = btn.getAttribute('data-id');
      if (data.hasOwnProperty(id)) {
        console.log(data);
        btn.classList.toggle('disabled');
      }
    });
  };

  const getLocalStore = () => {
    const result = localStorage.getItem('result');
    return result === null ? {} : JSON.parse(result);
  };

  const changingBtnsState = (event) => {
    const parentElement = event.target.parentNode;
    const btns = parentElement.querySelectorAll('.btn');
    btns.forEach((btn) => {
      btn.classList.toggle('disabled');
    });
  };

  const addBtnHandler = (event) => {
    const { target } = event;
    if (
      target.classList.contains('btn-success')
        || target.classList.contains('btn-danger')
    ) {
      const data = getLocalStore();
      const id = event.target.getAttribute('data-id');
      if (data.hasOwnProperty(id)) {
        for (const key in data) {
          if (id === key) {
            delete data[key];
          }
        }
      } else {
        data[id] = target.textContent;
      }
      changingBtnsState(event);
      localStorage.setItem('result', JSON.stringify(data));
    }
  };

  const changeBackground = (body) => {
    const data = getData('background');
    if (data === null) return;
    const { background } = data;
    body.classList.add(...background.split(' '));
  };

  const selectHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const {
      target: { value },
    } = event;
    const data = {};
    data.background = value;
    saveData('background', data);
  };
  const loadedHandler = (event) => {
    const select = document.querySelector('select');
    const body = document.querySelector('body');
    changeBackground(body);
    select.addEventListener('change', selectHandler);
    restoreFromState();
    const ul = document.querySelector('[data-list-group]');
    ul.addEventListener('click', addBtnHandler);
  };

  document.addEventListener('DOMContentLoaded', loadedHandler);
}());
