/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

//CORREZIONE ESERCIZIO 1
// 1. Ciclo for da 0 a 4
// 2. Nel ciclo for i deve essere minore di 5
// 3. No errori logici



// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

//CORREZIONE ESERCIZIO 2
// 1. Funzione che aggiunge 5 al numero se è pari
// 2. Condizione impostata come assegnazione e non come ugualianza 
// 3. No errori logici



// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

//CORREZIONE ESERCIZIO 3
// 1. Funzione che crea ciclo for per 5 volte e stampa i in console
// 2. Nel ciclo for va usato ; non ,
// 3. No errori logici



// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // [2,4,6,8]

//CORREZIONE ESERCIZIO 4
// 1. Dato un array, ne crea un altro con numeri pari
// 2.   -  ; di troppo nel ciclo for
//      -  === mancante nell'if
//      -  mancante numbers[i]
//      - va pushato numbers[i] non i
//      - return fuori dal ciclo for
//      - array dovrebbero essere const 
//      - non va il ; dopo if
//      - in if non va lenght - 1
//3. No errori logici