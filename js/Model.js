class Model {
  #apiUrl = null;

  constructor(apiUrl) {
    this.#apiUrl = apiUrl;
  }

  async getUsers(queryParams = null) {
    const data = await fetch(this.#apiUrl, { method: 'GET' });
    return await data.json();
  }

  async getUserById(id) {
    const data = await fetch(`${this.#apiUrl}/${id}`, { method: 'GET' });
    return await data.json();
  }
}
