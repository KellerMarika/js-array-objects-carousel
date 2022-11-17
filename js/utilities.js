/**** FUNZIONE GENERICA CREAZIONE ELEMENTO  *************************************/
/**createElement
 * 
 * @param {string} tagEl deve contenere un tag html valido, es:"div","span","hn","p","section" ecc..
 * @param {string} class1 deve essere una stringa con "" che racchiude una classe priva di spazi
 * @param {string} class2 deve essere una stringa con "" che racchiude una classe priva di spazi
 * @returns crea un elemento di tipo tagEl con due classi. è imperativo che le classi da aggiungere all'elemento siano 2
 */
function createElement(tagEl, class1, class2) {

    const created_El = document.createElement(tagEl);
    created_El.classList.add(class1);
    created_El.classList.add(class2);
    return created_El
}

/****  FUNZIONE CREA IMMAGINI *************************************/
/**crea un elemento di tipo Img per cui bisogna specificare src alt e classe Css
 * 
 * @param {string} srcURL dovrebbe essere l'indirizzo URL assoluto o relativo dell'immagine
 * @param {string} altDescription dovrebbe essere la descrizione dell'immagine (disabilità-- SEO++)
 * @param {string} class1 una classe CSS
 *@returns <img src=srcURL alt=altDescription class=class1>
 */
function createImage(srcURL, altDescription, class1) {

    const created_Img = document.createElement("img");
    created_Img.src = srcURL;
    created_Img.alt = altDescription;
    created_Img.classList.add(class1);
    return created_Img
}


/****  FUNZIONE CREA BOTTONI *************************************/
/** crea un elemento di tipo button per cui bisogna specificare type, name e 2 classi
 * 
 * @param {string} type dovrebbe essere button || menu || reset || submit
 * @param {string} name nome bottone
 * @param {string} class1 una classe css
 * @param {string} class2  una seconda classe css
 * @returns    <button type=@type name=@name class= @class1 @class2></button>
 */
function createBtn(type,name,class1,class2) {
    const created_Btn = document.createElement("button");
    created_Btn.setAttribute('type', type);
    created_Btn.name = name
    created_Btn.classList.add(class1);
    created_Btn.classList.add(class2);
    return created_Btn
};
