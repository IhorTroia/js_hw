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

  #createAlbumTemplate(album) {
    const albumItem = document.createElement('a');
    albumItem.setAttribute('href', './photos.html');
    albumItem.setAttribute('target', '_blank');
    albumItem.setAttribute('data-album-id', album.id);
    albumItem.className = 'list-group-item list-group-item-action';
    albumItem.innerHTML = `ID: ${album.id} | Name: ${album.title}`;

    this.#renderAlbumTemplate(albumItem);
  }

  #createPhotosTemplate(photos) {
    const l = document.querySelector('[data-photos-list]');
    console.log(l);
  }

  #setEvents() {
    document.addEventListener('DOMContentLoaded', this.#loadedHandler);
    document.querySelector('[data-albums-list]').addEventListener('click', this.#loadPhotosHandler);
  }

  #loadPhotosHandler = async ({ target }) => {
    if (!target.getAttribute('data-album-id')) return;

    const albumId = target.getAttribute('data-album-id');
    const photos = await this.#getPhotosByAlbumId(albumId);
    await this.#createPhotosTemplate(photos);
  };

  #loadedHandler = async () => {
    const albums = await this.#getAlbums();
    await albums.forEach((album) => {
      this.#createAlbumTemplate(album);
    });
  };
}

const a = new Albums('https://jsonplaceholder.typicode.com/albums');
