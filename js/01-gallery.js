import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const icon = galleryItems
    .map(image => 
        `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
                />
            </a>
        </div>`)
    .join('');
gallery.insertAdjacentHTML('afterbegin', icon);

function bigImage(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}">
    </div>
    `)
    instance.show()
}

gallery.addEventListener('click', bigImage);
