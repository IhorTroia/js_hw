(function () {
  const CONSTANTS = Object.freeze({
    todoFormSelector: '#todoForm',
    todoContainerSelector: '#todoItems',
    dataKey: 'formData',
  });

  const model = {
    currentId: 0,

    save(data) {
      this.currentId += 1;
      const dataCopy = { id: this.currentId, ...data };
      const savedData = this.get();
      savedData.push(dataCopy);

      try {
        localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(savedData));
        return this.get().at(-1);
      } catch (e) {
        return false;
      }
    },

    get() {
      const savedData = JSON.parse(localStorage.getItem(CONSTANTS.dataKey));
      return savedData || [];
    },

    removeElementById(todoId) {
      const savedElements = this.get();
      const index = savedElements.findIndex(({ id }) => todoId === id);
      const [removedElement] = savedElements.splice(index, 1);
      try {
        localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(savedElements));
        return removedElement;
      } catch (e) {
        console.error(`${removedElement} cannot be removed`);
        return false;
      }
    },

    initId() {
      const items = this.get();
      if (!items.length) return;
      this.currentId = +items.at(-1).id;
    },
  };

  const view = {
    renderElement(data) {
      const template = this.createTemplate(data);
      this.renderTodoItem(template);
    },

    renderTodoItem(elementToRender) {
      const todoContainer = document.querySelector('#todoItems');
      todoContainer.prepend(elementToRender);
      return elementToRender;
    },

    createTemplate(data) {
      const wrapper = document.createElement('div');
      wrapper.className = 'col-4';
      wrapper.setAttribute('data-todo-item', data.id);

      const taskWrapper = document.createElement('div');
      taskWrapper.className = 'taskWrapper';
      wrapper.appendChild(taskWrapper);

      const btnContainer = document.createElement('div');
      btnContainer.className = 'text-end';
      taskWrapper.appendChild(btnContainer);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-sm btn-danger';
      deleteBtn.innerText = 'X';
      deleteBtn.setAttribute('data-remove-btn', '');
      btnContainer.appendChild(deleteBtn);

      const taskHeading = document.createElement('div');
      taskHeading.className = 'taskHeading';
      taskHeading.innerHTML = data.title;
      taskWrapper.appendChild(taskHeading);

      const taskDescription = document.createElement('div');
      taskDescription.className = 'taskDescription';
      taskDescription.innerHTML = data.description;
      taskWrapper.appendChild(taskDescription);

      return wrapper;
    },
    resetForm() {
      document.querySelector(CONSTANTS.todoFormSelector).reset();
    },

    removeElement(todoId) {
      document.querySelector(`[data-todo-item="${todoId}"]`).remove();
    },
  };

  const controller = {
    formHandler(e) {
      e.preventDefault();
      e.stopPropagation();
      const { target } = e;
      const data = {};

      const inputs = target.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        if (input.value !== '') data[input.name] = input.value;
      });

      const savedData = model.save(data);

      if (savedData) {
        view.renderElement(savedData);
        view.resetForm();
      }
    },

    removeTodoItemHandler(e) {
      e.stopPropagation();
      const { target } = e;
      if (!target.hasAttribute('data-remove-btn')) return;
      const todoId = +target.closest('[data-todo-item]').getAttribute('data-todo-item');
      const removedElement = model.removeElementById(todoId);

      if (removedElement) {
        view.removeElement(todoId);
        return;
      }

      alert(`${removedElement.title} cannot be removed`);
    },

    loadedHandler() {
      model.initId();
      const form = document.querySelector(CONSTANTS.todoFormSelector);
      form.addEventListener('submit', this.formHandler);

      model.get().forEach((item) => view.renderElement(item));

      const todoContainer = document.querySelector(CONSTANTS.todoContainerSelector);
      todoContainer.addEventListener('click', this.removeTodoItemHandler);
    },

    init() {
      this.formHandler = this.formHandler.bind(this);
      this.removeTodoItemHandler = this.removeTodoItemHandler.bind(this);
      this.loadedHandler = this.loadedHandler.bind(this);

      document.addEventListener('DOMContentLoaded', this.loadedHandler);
    },
  };

  controller.init();
}());
