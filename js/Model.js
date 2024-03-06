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

  async updateUser(id) {
    const name = document.querySelector('#editName').value;
    if (name.trim() === '') throw new Error('Name should be filled');
    const email = document.querySelector('#editEmail').value;
    if (email.trim() === '') throw new Error('Email should be filled');
    const phone = document.querySelector('#editPhone').value;
    if (phone.trim() === '') throw new Error('Phone should be filled');
    const website = document.querySelector('#editWebsite').value;
    if (website.trim() === '') throw new Error('Website should be filled');

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name,
        email,
        phone,
        website,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return await data.json();
  }

  async deleteUser(id) {
    const a = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    return await a.json();
  }
}
