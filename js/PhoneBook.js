class PhoneBook {
  #contacts = [];

  #searchedUsers = [];

  #usersListSelector = null;

  #removeAttr = null;

  #callAttr = null;

  #modal = null;

  #callControllerInstance = null;

  constructor(users, usersListSelector, removeSelector = null, callSelector = null, modalSelector = null) {
    if (!PhoneBook.validateSelector(usersListSelector)) throw new Error('Selector is not exist on page!');
    this.#usersListSelector = document.querySelector(usersListSelector);

    if (!PhoneBook.validateSelector(modalSelector)) throw new Error('modalSelector is not exist on page!');
    this.#modal = new bootstrap.Modal(modalSelector);

    if (!removeSelector) throw new Error('removedSelector is not defined');
    this.#removeAttr = removeSelector;
    if (!callSelector) throw new Error('callSelector is not defined');
    this.#callAttr = callSelector;

    this.#callControllerInstance = new CallController();

    users.forEach((user) => {
      this.addContact(user);
    });

    this.#setEvents();
  }

  addContact(user) {
    if (!PhoneBook.validateContact(user)) return null;

    this.#contacts.push(user);
    this.renderContact(this.#contacts.at(-1));
  }

  call(contactId) {
    // find contact in this.#contacts and make a call
  }

  removeContact(contactId) {
    // will remove contact from this.#contacts
  }

  search() {
    // will search contact by: name, phone, email
  }

  #setEvents() {
    Call.addChangeCallStatusListener(this.#changeCallStatusHandler);
    document.querySelector('[data-end-call]').addEventListener('click', this.#endCallHandler);
    this.#usersListSelector.addEventListener('click', this.#removeHandler);
    this.#usersListSelector.addEventListener('click', this.#callHandler);
  }

  #changeCallStatusHandler = (callStatus) => {
    document.querySelector('[data-call-body]').innerHTML = callStatus;

    if (callStatus === Call.CALL_STATUSES.disconnected || callStatus === Call.CALL_STATUSES.rejected) this.#modal.hide();
  };

  #endCallHandler = () => {
    this.#callControllerInstance.endCallByCaller();
  };

  #removeHandler = ({ target }) => {
    const currentClickedBtn = target.closest(`[${this.#removeAttr}]`);
    if (!currentClickedBtn) return null;

    const contactTemplate = currentClickedBtn.closest('[data-user-id]');
    const contactId = +contactTemplate.getAttribute('data-user-id');
    const index = this.#contacts.findIndex((item) => item.id === contactId);
    this.#contacts.splice(index, 1);
    contactTemplate.remove();
  };

  #callHandler = ({ target }) => {
    const currentClickedBtn = target.closest(`[${this.#callAttr}]`);
    if (!currentClickedBtn) return null;

    const contactTemplate = currentClickedBtn.closest('[data-user-id]');
    const contactId = +contactTemplate.getAttribute('data-user-id');
    const index = this.#contacts.findIndex((item) => item.id === contactId);
    const currentContact = this.#contacts[index];

    document.querySelector('[data-abonent-name]').innerHTML = currentContact.name;

    this.#callControllerInstance.startCall(currentContact.phone);

    this.#modal.show();
  };

  renderContact(user) {
    const isUserInContacts = this.#contacts.some((item) => item.id === user.id);
    if (!isUserInContacts) return null;

    const template = this.#createTemplate(user);
    this.#usersListSelector.appendChild(template);
  }

  #createTemplate({ id, name }) {
    const template = document.createElement('li');
    template.className = 'list-group-item d-flex justify-content-between align-items-center';
    template.setAttribute('data-user-id', id);
    template.innerHTML = `<span class="contacts__contact">${name}</span>
                  <div>
                    <button data-call type="button" class="btn btn-success">
                      <i class="bi bi-telephone"></i>
                    </button>

                    <button data-remove type="button" class="btn btn-danger">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>`;

    return template;
  }

  static validateContact(user) {
    return !!user.id;
  }

  static validateSelector(selector) {
    return !!document.querySelector(selector);
  }
}

const phoneBook = new PhoneBook(
  users,
  '.contacts__list ul',
  'data-remove',
  'data-call',
  '#exampleModal',
);
console.log(phoneBook);
