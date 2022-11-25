import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const createGalleryMarkup = galleryItems
    .map(({ preview, original, description}) => `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`)
    .join("");

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup);


const galleryLightbox = new SimpleLightbox('.gallery a', {  captionsData: 'alt', captionDelay: 250 });
galleryLightbox.on('show.simplelightbox', function () {}); 