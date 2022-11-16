/********************************************
                ELEMENTI
********************************************/

/* SLIDER CONTAINER */

const sliderContainer_El = document.getElementById("slider-container");

/* THUMBNAILS CONTAINER */
const thumbnailsContainer_El = document.querySelector("#thumbnails-container");
//console.log(thumbnailsContainer_El);

/****** BOTTONI *******************************/

/* btn prev */
const btnPrev = document.querySelector(".btn-preview");
//console.log(btnPrev);

/* btn next */
const btnNext = document.querySelector(".btn-next");
//console.log(btnNext);
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


/****** LET *******************************/
/* contatore */
let dataCounter;
let sliderImg_El;
let urlImg;
let titleImg;
let textImg;

let activeThumbnail
let unactiveThumbnails = []


/***** FUNZIONI NOMINALI ****************************************/


function disactiveOldThumbnails() {
    //recupero tutte le thumbs a parte quella cliccata e li colloco in un array

    //#che belli i selettori avanzati <3
    unactiveThumbnails = document.querySelectorAll(`[data-thumbnail]:not([data-thumbnail= "${dataCounter}" ])`);

    //ciclo sull'arrat delle thumbs da disattivare
    unactiveThumbnails.forEach((element, i) => {
        unactiveThumbnails[i].classList.toggle("active", false);
        //console.log(unactiveThumbnails[i]);
    });
    //console.log("recupero tramite dataCounter= ", document.querySelector(`[data-thumbnail= "${dataCounter}" ]`));
    //console.log("recupero solo dataset senza counter= ", document.querySelectorAll(`[data-thumbnail]`));
    //console.log("recupero solo dataset senza counter= ", document.querySelectorAll(`[data-thumbnail]:not([data-thumbnail= "${dataCounter}" ])`));
}

function replaceSlide() {

    //cambio il testo e l'immagine dello slider con i valori delle proprietà dell'oggetto che nell'arry images ha indice === datacounter
    //recupero i valori delle proprietà da innerare
    urlImg = images[dataCounter].image;
    titleImg = images[dataCounter].title;
    textImg = images[dataCounter].text;
    //console.log(images[dataCounter]);

    //stampo

    //cambio i valori dell'immagine
    sliderImg_El.src = urlImg;
    sliderImg_El.alt = titleImg;
    //console.log(sliderImg_El);

    //stampo nel label
    sliderTitle_El.innerHTML = titleImg
    sliderText_El.innerHTML = textImg
}

/* CREAZIONE ELEMENTI ***************************/
 

/* slider label */

const sliderLabel_El = createElement("div", "slider-label", "position-absolute");
sliderLabel_El.classList.add("bottom-0");
sliderLabel_El.classList.add("end-0");
console.log(sliderLabel_El);

sliderContainer_El.append(sliderLabel_El);
//innerHtml del valore della proprietà title 
const sliderTitle_El = createElement("h2", "sliderTitle", "title");
//innerHtml del valore della proprietà text
const sliderText_El = createElement("p", "sliderText", "subtitle");

sliderLabel_El.append(sliderTitle_El);
sliderLabel_El.append(sliderText_El);

//HO BISOGNO DI UN ARRAY DELLE THUMBS???? proviamo senza
//uso forEach(per il momento)

//voglio sfruttare le mie f Utilities() ma non posso farlo invocandole come argomento el forEach, perchè non sarebbe in grado di recuperare da essa gli argomenti necessari al suo corretto funzionamento.
//per questo motivo invoco una arrowfunction x che ha lo scopo di definire gli argomenti necessari a far partire correttamente la mia function utilities invocata al suo interno.

/* thumbnails e slide */
images.forEach((element, i) => {

    urlImg = images[i].image;
    titleImg = images[i].title;
    textImg = images[i].text;

    const thumbnail_El = createImage(urlImg, titleImg, "thumbnail-img");
    //questa piccola stringa è al centro di tutto il progetto
    thumbnail_El.dataset.thumbnail = i;

    thumbnail_El.addEventListener("click", selectSlide);
    //solo la prima di default deve essere active
    if (i === 0) {
        dataCounter = 0
        thumbnail_El.classList.add("active");

        sliderImg_El = createImage(urlImg, titleImg, "slider-img");

        sliderTitle_El.append(titleImg);
        sliderText_El.append(textImg);
        sliderContainer_El.append(sliderImg_El);
    }

    thumbnailsContainer_El.append(thumbnail_El);
    //console.log(thumbnail_El);
});


function selectSlide() {
    //aggiorno data counter
    dataCounter = +this.dataset.thumbnail;
    console.log("dataCounter = ", dataCounter);
    //aggiungo classe alla thumb cliccata
    this.classList.add("active");

    //disattiva tutte le thumbnail con dataset diverso da quello della thumb appena cliccata
    disactiveOldThumbnails()

    //sostituzione slide
    replaceSlide()
}



/* INIZIO FUNZIONE NEXT  ***************************************/
btnNext.addEventListener("click", nextSlide);

function nextSlide() {

    // a ogni cick incremento il counter di 1
    dataCounter++
    console.log("btnNext click", dataCounter);

    //lenght è =5 ma il counter parte da 0 quindi l'ultimo valore disponibile è lenght -1
    //se il contatore del bottone è maggiore dlla lenght di images 
    if (dataCounter > (images.length - 1)) {
        // console.log("counter if=", counter, images.length);
        // ricomincia d'accapo
        dataCounter = 0
            ; console.log("btnNext click", dataCounter);
    }

    //recupero la thumbnail corrispondente alla posizione dopo il click (+1)

    activeThumbnail = document.querySelector(`[data-thumbnail= "${dataCounter}" ]`);
    //console.log(activeThumbnail);

    activeThumbnail.classList.add("active");
    //disattiva tutte le thumbnail con dataset diverso da quello della thumb appena cliccata
    disactiveOldThumbnails();
    //sostituzione slide
    replaceSlide()
};

/* INIZIO FUNZIONE PREVIEW  ***************************************/

btnPrev.addEventListener("click", prevSlide);

function prevSlide() {

    // a ogni cick decremento il counter di 1
    dataCounter--
    console.log("btnPrev click", dataCounter);

    //lenght è =5 ma il counter parte da 0 quindi l'ultimo valore disponibile è lenght -1
    //se il contatore del bottone è maggiore dlla lenght di images 
    if (dataCounter < 0) {
        // console.log("counter if=", counter, images.length);
        // ricomincia d'accapo
        dataCounter = images.length - 1
            ; console.log("btnNext click", dataCounter);
    }

    //recupero la thumbnail corrispondente alla posizione dopo il click (+1)

    activeThumbnail = document.querySelector(`[data-thumbnail= "${dataCounter}" ]`);
    //console.log(activeThumbnail);

    activeThumbnail.classList.add("active");
    
    //disattiva tutte le thumbnail con dataset diverso da quello della thumb appena cliccata
    disactiveOldThumbnails();
    //sostituzione slide
    replaceSlide()
};




/* BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva. */

setInterval(nextSlide,3000);



/* BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: */ 









