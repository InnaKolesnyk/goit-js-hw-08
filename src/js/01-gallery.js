// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const createImg = galleryItems
  .map(
    element =>
      `<li class = "gallery__item">
      <a href ="${element.original}" class ="gallery__link">
      <img class="gallery__image" src="${element.preview}" alt="${element.description}" data-source = "${element.original}">
      </a>
      </li>`
  )
  .join('');
  
    gallery.insertAdjacentHTML('beforeend', createImg);

let galleryImg = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});