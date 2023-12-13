(() => {
  const createTemplate = (data) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.setAttribute('data-todo-item', '');

    const taskWrapper = document.createElement('div');
    taskWrapper.className = 'taskWrapper';
    wrapper.appendChild(taskWrapper);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger';
    deleteBtn.textContent = 'x';
    deleteBtn.setAttribute('data-remove-btn', '');
    taskWrapper.appendChild(deleteBtn);

    const taskHead = document.createElement('div');
    taskHead.className = 'taskHeading';
    taskHead.textContent = data.title;
    taskWrapper.appendChild(taskHead);

    const taskDesc = document.createElement('div');
    taskDesc.className = 'taskDescription';
    taskDesc.textContent = data.description;
    taskWrapper.appendChild(taskDesc);

    return wrapper;
  };

  const renderTodoItem = (elementToRender) => {
    const todoContainer = document.querySelector('#todoItems');
    todoContainer.prepend(elementToRender);

    return elementToRender;
  };

  const formHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;

    const inputData = {};

    const inputs = target.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      if (input.value !== '') inputData[input.name] = input.value;
    });

    const HTMLTemplate = createTemplate(inputData);
    renderTodoItem(HTMLTemplate);
    target.reset();
  };

  const removeTodoItemHandler = (e) => {
    e.stopPropagation();
    const { target } = e;

    if (!target.hasAttribute('data-remove-btn')) return;

    const removedEl = target.closest('[data-todo-item]');
    removedEl.remove();
  };

  const loadedHandler = () => {
    const form = document.querySelector('#todoForm');
    const todoContainer = document.querySelector('#todoItems');

    form.addEventListener('submit', formHandler);
    todoContainer.addEventListener('click', removeTodoItemHandler);
  };

  document.addEventListener('DOMContentLoaded', loadedHandler);
})();
