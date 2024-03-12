class Albums {
  #apiUrl = null;

  constructor(apiUrl) {
    this.#apiUrl = apiUrl;
    this.#setEvents();
  }

  async #getAlbums() {
    const albums = await fetch(this.#apiUrl);
    return await albums.json();
  }

  async #getPhotosByAlbumId(id) {
    const photos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    return await photos.json();
  }

  #renderAlbumTemplate(album) {
    const albumContainer = document.querySelector('[data-albums-list]');
    const hr = document.createElement('hr');
    albumContainer.append(album);
    albumContainer.append(hr);
  }

  #renderPhotoTemplate(photo) {
    const albumContainer = document.querySelector('[data-albums-list]');
    albumContainer.append(photo);
  }

  #createAlbumTemplate(album) {
    const albumItem = document.createElement('div');
    albumItem.setAttribute('data-album-id', album.id);
    albumItem.innerHTML = `ID: ${album.id} | Name: ${album.title}`;

    this.#renderAlbumTemplate(albumItem);
  }

  #createPhotoTemplate(photo) {
    const img = document.createElement('img');
    img.className = 'rounded mb-3';
    img.setAttribute('src', photo.url);
    img.style.maxWidth = '200px';
    img.style.maxHeight = '200px';

    this.#renderPhotoTemplate(img);
  }

  #setEvents() {
    document.addEventListener('DOMContentLoaded', this.#loadedHandler);
    document.querySelector('[data-albums-list]').addEventListener('click', this.#loadPhotosHandler);
  }

  #loadPhotosHandler = async ({ target }) => {
    if (!target.getAttribute('data-album-id')) return;

    const albumId = target.getAttribute('data-album-id');
    const photos = await this.#getPhotosByAlbumId(albumId);
    console.log(photos);
    const albumContainer = document.querySelector('[data-albums-list]');
    albumContainer.innerHTML = '';
    await photos.forEach((photo) => {
      this.#createPhotoTemplate(photo);
    });
  };

  #loadedHandler = async () => {
    const albums = await this.#getAlbums();
    await albums.forEach((album) => {
      this.#createAlbumTemplate(album);
    });
  };
}

const a = new Albums('https://jsonplaceholder.typicode.com/albums');
