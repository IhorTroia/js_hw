class Controller {
  #model = null;

  #view = null;

  #table = null;

  constructor(apiUrl, domSelectors, fieldsToOutput) {
    this.#model = new Model(apiUrl);
    this.#view = new View(domSelectors, fieldsToOutput);
    this.#table = document.querySelector(domSelectors.table);

    this.#setEvents();
  }

  #setEvents() {
    document.addEventListener('DOMContentLoaded', this.#loadedHandler);
    this.#table.addEventListener('click', this.#viewDataHandler);
  }

  #loadedHandler = async () => {
    try {
      const users = await this.#model.getUsers();
      this.#view.renderTableContent(users);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  #viewDataHandler = async ({ target }) => {
    const btn = target.closest('[data-btn-view]');
    if (!btn) return;

    const userId = btn.closest('tr[data-user-id]').getAttribute('data-user-id');

    console.log(userId);
    try {
      const user = await this.#model.getUserById(userId);

      this.#view.showModal('view');
      this.#view.prepareViewModal(user);
      // this.#view.renderTableContent(users);
    } catch (error) {
      console.log(error);
    }
  };
}
