/***********************************************************************/
//                          CICLI
/***********************************************************************/


/**
 * Funzione che cicla su un dato array, 
 * e ad ogni ciclo, deve invocare una callback function
 * 
 * non contempla il return
 * è comunque possibile aggiornare al suo interno il valore di variabili dichiarate globalmente
 * 
 * La callbackFunction riceve a sua volta 3 argomenti:
 * 1° - elemento dell'array all'indice i
 * 2° - indice i dell'array
 * 3° - array sul quale stiamo ciclando
 * 
 * @param {Array} Array
 * @param {Function} fnCallback
 */
 function forEach(incomingArray, fnCallback) {

    // ciclo su ogni elemento dell'array
    for (let i = 0; i < Array.length; i++) {
        const element = Array[i];

        // cosa fare ad ogni ciclo lo voglio specifiare esternamente
        fnCallback(element, i, Array);
    }

}


const numbersList = [34, 56, 12, 72, 120];
const newArray = [];

numbersList.forEach(function (element) {
    newArray.push(element * 2);
});
numbersList.forEach((element) => {
    newArray.push(element * 2);
});

/**
 * Funzione che cicla su un dato array, 
 * e ad ogni ciclo, deve invocare una callback function
 * 
 * Il return del .map deve essere sempre salvato in una variabile 
 * e sarà sempre un array della stessa lunghezza dell'originale.
 * 
 * La callbackFunction deve sempre ritornare un valore. Questo verrà pushato nell'array finale. 
 * 
 * è comunque possibile aggiornare al suo interno il valore di variabili dichiarate globalmente 
 * 
 * La callbackFunction riceve a sua volta 3 argomenti:
 * 1° - elemento dell'array all'indice i
 * 2° - indice i dell'array
 * 3° - array sul quale stiamo ciclando
 * 
 * @param {Array} Array
 * @param {Function} fnCallback
 */
function map(incomingArray, fnCallback) {
    const toReturn = [];

    // ciclo su ogni elemento dell'array
    for (let i = 0; i < Array.length; i++) {
        const element = Array[i];

        // cosa fare ad ogni ciclo lo voglio specifiare esternamente
        toReturn.push(fnCallback(element, i, Array));
    }

    return toReturn;
}

// numbersList.map(element => element * 2)

/**
 * Funzione che cicla su un dato array, 
 * e ritorna un nuovo array con solo gli elementi filtrati di lunghezza variabile
 * è comunque possibile aggiornare al suo interno il valore di variabili dichiarate globalmente
 * 
 * La callbackFunction riceve a sua volta 3 argomenti:
 * 1° - elemento dell'array all'indice i
 * 2° - indice i dell'array
 * 3° - array sul quale stiamo ciclando
 * 
 * @param {Array} Array
 * @param {Function} fnCallback
 */
function filter(incomingArray, fnCallback) {
    const toReturn = [];

    // ciclo su ogni elemento dell'array
    for (let i = 0; i < Array.length; i++) {
        const element = Array[i];

        // cosa fare ad ogni ciclo lo voglio specifiare esternamente
        const result = fnCallback(element, i, Array);

        if (result === true) {
            toReturn.push(element);
        }
    }

    return toReturn;
}
