import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryItems(items) {
    return items
    .map(({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}" data-lightbox='gallery'>
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`)
    .join('');
}

const markup = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', onGalleryImagesClick);

function onGalleryImagesClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        onEscKeyClose(e);
        return;
    }
    const originalImageUrl = e.target.dataset.source;

    const lightBoxModal = basicLightbox.create(`
    <img src="${originalImageUrl}" width="800" height="600">
`)

    lightBoxModal.show();
    
    window.addEventListener('keydown', onEscKeyClose); 

    function onEscKeyClose(e) {
        if (e.code === 'Escape') {
            lightBoxModal.close()
        }
    }

}



