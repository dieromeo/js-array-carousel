'use strict';

/* <div class="item active">
        <img src="./img/01.jpg" alt="" />
      </div> */

const imageArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']; // array con immagini
const divItems = document.querySelector('.items'); // div items
let contatoreImmagini = 0; // contatore

for (let i = 0; i <= imageArray.length - 1; i++) {

    // div contenitore per le immagini
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('item');

    // immagini
    const image = document.createElement('img');
    image.src = `/img/${imageArray[i]}`;
    image.alt = `paesaggio${i}`;

    imageContainer.append(image);
    divItems.append(imageContainer);

    if (i === contatoreImmagini) {
        imageContainer.classList.add('active');
    }
}
