import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox';
const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) =>
(`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
)).join('');

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onClick);

function onClick(evt) {
  const target = evt.target;
  evt.preventDefault();
      if (!target.classList.contains("gallery__image")) {
        return;
  }; 
  const galleryItHref = target.dataset.source;
  
  const instance = basicLightbox.create(`
    <img src="${galleryItHref}" width="800" height="600">
`)

instance.show()

};

