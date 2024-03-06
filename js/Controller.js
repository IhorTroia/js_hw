class Controller {
  #model = null;

  #view = null;

  #table = null;

  #editBtn = null;

  #deleteBtn = null;

  constructor(apiUrl, domSelectors, fieldsToOutput) {
    this.#model = new Model(apiUrl);
    this.#view = new View(domSelectors, fieldsToOutput);
    this.#table = document.querySelector(domSelectors.table);

    this.#setEvents();
  }

  #setEvents() {
    document.addEventListener('DOMContentLoaded', this.#loadedHandler);
    this.#table.addEventListener('click', this.#viewDataHandler);
    this.#table.addEventListener('click', this.#showEditModalHandler);
    this.#table.addEventListener('click', this.#showDeleteModalHandler);
    document.querySelector('[data-modal-btn-edit]').addEventListener('click', this.#editUserHandler);
    document.querySelector('[data-modal-btn-delete]').addEventListener('click', this.#deleteUserHandler);
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

    try {
      const user = await this.#model.getUserById(userId);

      this.#view.showModal('view');
      this.#view.prepareViewModal(user);
    } catch (error) {
      console.log(error);
    }
  };

  #showEditModalHandler = ({ target }) => {
    this.#editBtn = target.closest('[data-btn-edit]');
    if (!this.#editBtn) return;

    this.#view.showModal('edit');
  };

  #editUserHandler = async () => {
    const currentRow = this.#editBtn.closest('tr[data-user-id]');
    const userId = currentRow.getAttribute('data-user-id');

    const updatedData = await this.#model.updateUser(userId);

    document.querySelector('[data-edit-form]').reset();

    await this.#view.updateTableRow(updatedData, currentRow);
  };

  #showDeleteModalHandler = ({ target }) => {
    this.#deleteBtn = target.closest('[data-btn-delete]');
    if (!this.#deleteBtn) return;

    this.#view.showModal('delete');
  };

  #deleteUserHandler = async () => {
    const currentRow = this.#deleteBtn.closest('tr[data-user-id]');
    const userId = currentRow.getAttribute('data-user-id');

    await this.#model.deleteUser(userId);
    currentRow.remove();
  };
}
