import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const icon = galleryItems
    .map(image => 
        `<a class="gallery__item" href="${image.original}">
            <img 
            class="gallery__image" 
            src="${image.preview}" 
            alt="${image.description}" 
            />
        </a>`)
    .join('');
gallery.insertAdjacentHTML('afterbegin', icon);

const lightbox = new SimpleLightbox('.gallery a', {
    
});

console.log('<h3 class="attireTitleType3">Custom content</h3>');
