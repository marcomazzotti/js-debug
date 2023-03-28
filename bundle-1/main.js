/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

//CORREZIONE ESERCIZIO 1
// 1. Questo codice controlla l'età
// 2. La variabile "message" deve essere Let perch può cambiare; non c'è return
// 3. myAge dovrebbe essere fuori dalla funzione


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

//CORREZIONE ESERCIZIO 2
// 1. controlla il numero di colori presenti nell'array
// 2. errore in colors.length
// 3. no errori logici


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

//CORREZIONE ESERCIZIO 3
// 1. Funzione che aggiunge 12 a un numero scelto dall'utente e stampa in console
// 2. No errori si sintassi
// 3. No errori logici


// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

//CORREZIONE ESERCIZIO 4
//1. Funzione controlla che la mail inserita dall'utente sia autorizzata          all'accesso
//2. Si, grantAccess è definito come stringa e non come variabile
//3. no errori logici