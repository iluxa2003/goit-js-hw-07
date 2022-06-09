import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
// var lightbox = $('.gallery a').simpleLightbox();
const images = galleryItems.map(
    (item) => ` 
    
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`
    );
    for (const image of images) {
        gallery.insertAdjacentHTML("afterbegin", image);
    }
    var lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay:250 });
    console.log(galleryItems);
const prevent = (event) => {
    event.preventDefault();
  };
gallery.addEventListener("click", prevent);
