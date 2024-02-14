(function () {
  const CONSTANTS = Object.freeze({
    formSelector: '#todoForm',
    todoContainerSelector: '#todoItems',
    todoItemAttr: 'data-todo-item',
    btnRemoveAttr: 'data-remove-btn',
    dataKey: 'formData',
  });

  const model = {
    currentId: 0,

    get data() {
      return JSON.parse(localStorage.getItem(CONSTANTS.dataKey)) || [];
    },

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

    removeElementById(todoId) {
      const savedData = this.get();
      const index = savedData.findIndex(({ id }) => todoId === id);

      const [removedElement] = savedData.splice(index, 1);

      try {
        localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(savedData));
        return removedElement;
      } catch (e) {
        console.log('Cannot remove element', removedElement);
        return false;
      }
    },

    get() {
      const savedData = JSON.parse(localStorage.getItem(CONSTANTS.dataKey));

      return savedData || [];
    },

    initId() {
      const data = this.get();
      if (!data.length) return;
      this.currentId = +data.at(-1).id;
    },
  };

  console.log(model.data);

  const view = {
    renderElement(data) {
      const template = this.createTemplate(data);
      this.renderTodoItem(template);
    },

    renderTodoItem(elementToRender) {
      const todoContainer = document.querySelector(CONSTANTS.todoContainerSelector);
      todoContainer.prepend(elementToRender);
      return elementToRender;
    },

    createTemplate(data) {
      const wrapper = document.createElement('div');
      wrapper.className = 'col-4';
      wrapper.setAttribute(CONSTANTS.todoItemAttr, data.id);
      wrapper.innerHTML = `<div class="taskWrapper">
                              <div class="taskHeading">${data.title}</div>
                              <div class="taskDescription">${data.description}</div>
                              <button data-remove-btn class="btn btn-sm btn-danger">X</button>
                           </div>`;

      return wrapper;
    },

    resetForm() {
      document.querySelector(CONSTANTS.formSelector).reset();
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

    loadedHandler() {
      model.initId();

      const form = document.querySelector(CONSTANTS.formSelector);
      const todoContainer = document.querySelector(CONSTANTS.todoContainerSelector);

      form.addEventListener('submit', this.formHandler.bind(this));
      todoContainer.addEventListener('click', this.removeHandler.bind(this));

      model.get().forEach((item) => view.renderElement(item));
    },

    removeHandler(e) {
      e.stopPropagation();
      const { target } = e;
      if (!target.hasAttribute(CONSTANTS.btnRemoveAttr)) return;

      const todoId = +target.closest('[data-todo-item]').getAttribute(CONSTANTS.todoItemAttr);
      const removedElement = model.removeElementById(todoId);

      if (removedElement) {
        view.removeElement(todoId);
        return;
      }
      alert('Cannot remove element');
    },

    init() {
      document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this));
    },
  };

  controller.init();
}());
