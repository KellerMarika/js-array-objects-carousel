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

/* contatore */
let counter = 0;


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

//creo slider label 
const sliderLabel_El = createElement("div","slider-label","position-absolute");
sliderLabel_El.classList.add("bottom-0");
sliderLabel_El.classList.add("end-0");
console.log(sliderLabel_El);

sliderContainer_El.append(sliderLabel_El);

const sliderTitle_El= createElement("h2","sliderTitle","title");
const sliderText_El= createElement("p","sliderText","subtitle");

sliderLabel_El.append(sliderTitle_El);
sliderLabel_El.append(sliderText_El);



/* 
questa volta voglio provarea stampare una sola immagine + label nello slider, a seconda della thums o del pulsante che viene premuto (correlazione tra indice dell'oggetto nell'array e dataset delle thumb)

counter=0

//creo slider label 
sliderLabel_El= createElement("div","sliderLabel","x")
sliderTitle_El= createElement("div","sliderTitle","x")
slidertext_El= createElement("div","sliderText","x")

appendo slider text e slider title a slider label
appendo il label in absolute a bottom 0 dello slider-container

cro un ciclo (for each perchè non deve ritornarmi nessun array){
    attraverso una f utilities creo le mie immagini.
    img.dataset.thumb=i+1________________________________________non mi avanzrà tempo ma devo davvero sapere come inserire questo passaggio in funzione generica 

    img la stampo in thumb-container

    thumbs.add event listner("click",funzione aggiornaCounter() );

    se i===0 allora  aggiungo classi active
}


funzione aggiornaCounter(){
    devo controllare il dataset dell'elemento cliccato (this.dataset.thumb?)__________________________

    registrare che il counter è === dataset dell'elemento cliccato
    aggiungere la classe active all'elemento cliccato

    ciclo for each
        
    eliminare la classe active da qualunque altro elemento con dataset differente (toggle(active, false));  

  trovare nell'array di immagini l'oggetto con indice corrispondente al dataset della thumb cliccata (occhio allo 0! (i-1)) e innerare(sostituzine) i valori delle sue proprietà nello slider (e nel label).

}

bottoni next e preview


btn-next add event listner{
    deve rilevare quale sia il counter 
    
    devo rimuovere active all'elemento con dataset === counter

    devo incrementare counter di 1
    counter ++
 
    counter non deve poter andare oltre al numero massimo delle immagini (images.lenght).
    SE counter>images.Lenght allora counter=0 (if)
    (nell'esercizio precedente mi dava errore e si sfalsava ma adesso che è legato al dataset dovrebbe funzionare);
    
    devo dare active all'elemento con tataset === counter

    trovare nell'array di immagini l'oggetto con indice corrispondente al dataset della thumb cliccata (occhio allo 0! (i-1)) e innerare(sostituzine) i valori delle sue proprietà nello slider (e nel label).
}

btn-prev add event listner{
    deve rilevare quale sia il counter 
    
    devo rimuovere active all'elemento con dataset === counter

    devo decrementare counter di 1
    counter --
 
    counter non deve poter andare sotto 0.
    SE counter<0 allora counter=images.lenght(if)
    (nell'esercizio precedente mi dava errore e si sfalsava ma adesso che è legato al dataset dovrebbe funzionare);
    
    devo dare active all'elemento con dataset === counter

    trovare nell'array di immagini l'oggetto con indice corrispondente al dataset della thumb cliccata (occhio allo 0! (i-1)) e innerare(sostituzine) i valori delle sue proprietà nello slider (e nel label).
}


che dio me la mandi buona!
*/




/* Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.






Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia indietro, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia avanti.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: */