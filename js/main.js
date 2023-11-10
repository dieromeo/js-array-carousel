'use strict';

const imageArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']; // array con immagini
const divItems = document.querySelector('.items'); // div items
let contatoreImmagini = 0; // contatore
const prev = document.querySelector('.prev');  // elemento prev
const next = document.querySelector('.next'); // elemento next

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

    if (i === contatoreImmagini) {  // assegno la classe active al primo elemento
        imageContainer.classList.add('active');
    }
}

const selectAllItem = document.querySelectorAll('.item'); // simil array che contiene tutti i div con le immagini


prev.addEventListener('click', function () { // tolgo active e la assegno al precedente
    if (contatoreImmagini > 0) {

        selectAllItem[contatoreImmagini].classList.remove('active');

        contatoreImmagini--;

        selectAllItem[contatoreImmagini].classList.add('active');
    }
})


next.addEventListener('click', function () { // tolgo active e la assegno al successivo
    if (contatoreImmagini < selectAllItem.length - 1) {

        selectAllItem[contatoreImmagini].classList.remove('active');

        contatoreImmagini++;

        selectAllItem[contatoreImmagini].classList.add('active');
    }
})
