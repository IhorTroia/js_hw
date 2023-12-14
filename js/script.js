(() => {
  const creator = (data) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'todoContainer';
    wrapper.setAttribute('data-wrapper', '');

    const title = document.createElement('div');
    title.className = 'title';
    wrapper.appendChild(title);
    title.textContent = data.head;

    const desc = document.createElement('div');
    desc.className = 'desc';
    wrapper.appendChild(desc);
    desc.textContent = data.desc;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'removeBtn';
    removeBtn.textContent = 'x';
    removeBtn.setAttribute('data-btn', '');
    wrapper.appendChild(removeBtn);

    return wrapper;
  };

  const render = (template) => {
    const container = document.querySelector('.right');
    container.prepend(template);
  };

  const removeHandler = (e) => {
    e.stopPropagation();
    const { target } = e;
    if (target.hasAttribute('data-btn')) {
      target.closest('[data-wrapper]').remove();
    }
  };

  const formHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { target } = e;
    const data = {};
    const inputs = target.querySelectorAll('input, textarea');

    inputs.forEach((item) => {
      if (item.value !== '') data[item.name] = item.value;
    });

    const HTMLTemplate = creator(data);
    render(HTMLTemplate);
    target.reset();
  };

  const loadedHandler = () => {
    const form = document.querySelector('#TodoItems');
    const container = document.querySelector('.right');

    form.addEventListener('submit', formHandler);
    container.addEventListener('click', removeHandler);
  };

  document.addEventListener('DOMContentLoaded', loadedHandler);
})();
