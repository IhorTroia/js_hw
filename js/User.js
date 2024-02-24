class User {
  #id = null;

  name = null;

  phone = null;

  email = null;

  website = null;

  constructor({
    id, name, phone, email, website,
  }) {
    // put data to fields
  }

  static isUser(obj) {
    // check if obj is User instance
  }

  get id() {
    return this.#id;
  }

  // your methods
}
