(function () {
  const input = document.querySelector('[data-input]');
  const btnSearch = document.querySelector('[data-search-btn]');

  function renderPost(post) {
    const postItem = document.createElement('div');
    postItem.innerHTML = `<h1>${post.title}</h1>
      <p>${post.body}</p>
      <button data-comments-btn class="btn btn-outline-secondary">Get Comments</button> `;
    document.querySelector('.container').append(postItem);
  }

  async function searchHandler() {
    const id = input.value;
    if (id < 1 || id > 100) throw new Error('Invalid ID!');
    let postData = null;
    try {
      const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      postData = await request.json();
    } catch (e) {
      console.log(e);
    }
    console.log(postData);
    renderPost(postData);
  }

  btnSearch.addEventListener('click', searchHandler);
}());
