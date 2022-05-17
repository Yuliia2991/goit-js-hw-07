import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) =>
            `<li><a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a></li>`
        )
        .join('');
}
const markup = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

gallery.on('show.simplelightbox', function () {});




