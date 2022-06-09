import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
let instance = Object;

const images = galleryItems.map(
  (item) => ` 
     <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a> 
  </div>`
);
for (const image of images) {
  gallery.insertAdjacentHTML("afterbegin", image);
}

const lupa = (event) => {
  event.preventDefault();
  if(event.target.nodeName!==("IMG")){ 
    return; 
  } 
  const but = event.target;
  instance = basicLightbox.create(`
    <img
    class="gallery__image_special"
    src="${but.getAttribute("data-source")}"
    />
`);
    instance.show();
}

const escClick = (event) => {
    const but = event.target;
    console.log(event.key)
    if(event.key == 'Escape'){
        instance.close(); 
    }
  };
  gallery.addEventListener("keydown", escClick);
  gallery.addEventListener("click", lupa);