class View {
  #tableSelector = null;

  #fieldsToRender = null;

  #loaderSelector = null;

  #contentSelector = null;

  #viewModalSelector = null;

  #table = null;

  #viewModal = null;

  #editModal = null;

  #deleteModal = null;

  #modals = null;

  constructor(selectors, dataFieldsToRender) {
    this.#tableSelector = selectors.table;
    this.#loaderSelector = selectors.loader;
    this.#contentSelector = selectors.tableContent;
    this.#fieldsToRender = dataFieldsToRender;
    this.#table = document.querySelector(this.#tableSelector);
    this.#viewModalSelector = document.querySelector(selectors.viewModalSelector);
    this.#viewModal = new bootstrap.Modal(this.#viewModalSelector);
    // this.#editModal = new bootstrap.Modal(selectors.editModalSelector);
    // this.#deleteModal = new bootstrap.Modal(selectors.deleteModalSelector);
    this.#modals = {
      view: this.#viewModal,
      edit: this.#editModal,
      delete: this.#deleteModal,
    };
  }

  renderTableContent(data) {
    const tableBody = this.createTableBody(data);
    this.#table.querySelector('tbody').replaceWith(tableBody);

    document.querySelector(this.#loaderSelector).classList.add('d-none');
    document.querySelector(this.#contentSelector).classList.remove('d-none');
  }

  createTableBody(users) {
    const tableBody = document.createElement('tbody');

    for (const user of users) {
      const tableRow = this.createTableRow(user);
      tableBody.append(tableRow);
    }

    return tableBody;
  }

  createTableRow(data) {
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('data-user-id', data.id);

    for (const key of this.#fieldsToRender) {
      const td = document.createElement('td');
      td.innerHTML = data[key];
      tableRow.append(td);
    }

    tableRow.append(this.#createTableActions());
    return tableRow;
  }

  #createTableActions() {
    const td = document.createElement('td');
    td.innerHTML = `
                  <button data-btn-view type="button" class="btn btn-primary">
                    <i class="bi bi-eye"></i>
                  </button>
                  <button data-btn-edit type="button" class="btn btn-warning">
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button data-btn-delete type="button" class="btn btn-danger">
                    <i class="bi bi-trash"></i>
                  </button>`;
    return td;
  }

  prepareViewModal(data) {
    const wrapper = `<code>${JSON.stringify(data)}</code>>`;

    const modalBody = this.#viewModalSelector.querySelector('.modal-body:not(.loader)');
    const modalBodyLoader = this.#viewModalSelector.querySelector('.loader');

    modalBody.innerHTML = wrapper;

    modalBody.classList.remove('d-none');
    modalBodyLoader.classList.add('d-none');
  }

  showModal(mode = 'view') {
    this.#modals[mode].show();
  }
}
