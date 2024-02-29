(function () {
  const input = document.querySelector('[data-input]');
  const btnSearch = document.querySelector('[data-search-btn]');

  async function getCommentHandler({ target }) {
    let commentData = null;
    const currentPost = target.closest('[data-post-id]');
    const id = currentPost.getAttribute('data-post-id');
    try {
      const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      commentData = await request.json();
    } catch (e) {
      console.log(e);
    }

    const ul = document.createElement('ul');

    commentData.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<h4>${item.name}</h4>
    <p>${item.body}</p>`;
      ul.append(li);
    });

    currentPost.append(ul);
  }

  async function postHandler() {
    const id = input.value;
    if (id < 1 || id > 100) throw new Error('Invalid ID!');
    let postData = null;

    try {
      const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      postData = await request.json();
    } catch (e) {
      console.log(e);
    }

    const postItem = document.createElement('div');
    postItem.setAttribute('data-post-id', postData.id);
    postItem.innerHTML = `<h1>${postData.title}</h1>
      <p>${postData.body}</p>
      <button data-comments-btn class="btn btn-outline-secondary">Get Comments</button> `;

    document.querySelector('.container').append(postItem);
    const commentBtn = document.querySelector('[data-comments-btn]');
    commentBtn.addEventListener('click', getCommentHandler);
  }

  btnSearch.addEventListener('click', postHandler);
}());
