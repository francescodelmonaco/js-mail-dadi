// - crea una lista di email di invitati ad una festa (array)
// - chiedi all’utente la sua email (promt)
// - controlla che sia nella lista di chi può accedere (con if ==)
// - stampa un messaggio appropriato sull’esito del controllo utilizzando un ciclo for
// - non è consentito usare nessun metodo proprio degli array (come includes, per esempio)
// - non è necessario provvedere alla validazione delle email

let mail = ["valentino.rossi@mail.com",
    "fabio.cannavaro@mail.com",
    "giorgio.cognome@mail.com",
    "fabio.caressa@mail.com",
    "luca.toni@mail.com"
];

let userMail = prompt("Inserisci di seguito la tua mail personale", "user@mail.com");

let mailCheck = 0;

for (let i = 0; i < mail.length; i++) {

    if (userMail === mail[i]) {
        mailCheck = 1;
    } else {
        
    }

}

if (mailCheck) {
    console.log ("Sei nella lista degli invitati, puoi entrare!");
} else {
    console.log ("Non sei nella lista degli invitati, non puoi entrare!");
}