(function () {
  const createTemplate = (data) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.setAttribute('data-todo-item', '');

    const taskWrapper = document.createElement('div');
    taskWrapper.className = 'taskWrapper';
    wrapper.appendChild(taskWrapper);

    const taskHeading = document.createElement('div');
    taskHeading.className = 'taskHeading';
    taskHeading.innerHTML = data.title;
    taskWrapper.appendChild(taskHeading);

    const taskDescription = document.createElement('div');
    taskDescription.className = 'taskDescription';
    taskDescription.innerHTML = data.description;
    taskWrapper.appendChild(taskDescription);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger';
    deleteBtn.innerText = 'X';
    deleteBtn.setAttribute('data-remove-btn', '');
    taskWrapper.appendChild(deleteBtn);

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
    const data = Array.from(target.querySelectorAll('input, textarea'))
      .reduce((acc, item) => {
        acc[item.name] = item.value;
        return acc;
      }, {});

    const HTMLTemplate = createTemplate(data);
    renderTodoItem(HTMLTemplate);
    target.reset();
  };

  const removeTodoItemHandler = (e) => {
    e.stopPropagation();
    const { target } = e;
    if (!target.hasAttribute('data-remove-btn')) return;
    const removedEl = target.closest('[data-todo-item]');
    removedEl.remove();
    return removedEl;
  };

  const loadedHandler = () => {
    const form = document.querySelector('#todoForm');
    const todoContainer = document.querySelector('#todoItems');

    form.addEventListener('submit', formHandler);
    todoContainer.addEventListener('click', removeTodoItemHandler);
  };

  document.addEventListener('DOMContentLoaded', loadedHandler);
}());
