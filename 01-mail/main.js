// - crea una lista di email di invitati ad una festa (array)
// - chiedi all’utente la sua email (promt)
// - controlla che sia nella lista di chi può accedere (con if ==)
// - stampa un messaggio appropriato sull’esito del controllo utilizzando un ciclo for
// - non è consentito usare nessun metodo proprio degli array (come includes, per esempio)
// - non è necessario provvedere alla validazione delle email


// creo un array contenente le mail degli invitati
let mail = ["valentino.rossi@mail.com",
    "fabio.cannavaro@mail.com",
    "giorgio.cognome@mail.com",
    "fabio.caressa@mail.com",
    "luca.toni@mail.com"
];

// chiedo all'utente di inserire la sua mail
let userMail = prompt("Inserisci di seguito la tua mail personale", "user@mail.com");

let mailCheck = 0;

// verifico per il numero di elementi nell'array se la mail inserita dall'utente è uguale a quelle presenti nell'array
for (let i = 0; i < mail.length; i++) {

    if (userMail === mail[i]) {
        mailCheck = 1;
    } else {
        
    }

}

// stampo un messaggio al termine della verifica
if (mailCheck) {
    console.log ("Sei nella lista degli invitati, puoi entrare!");
} else {
    console.log ("Non sei nella lista degli invitati, non puoi entrare!");
}