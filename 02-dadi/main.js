// - generare un numero random da 1 a 6 (Math.random()*6)+1, sia per il giocatore sia per il computer
// - stabilire il vincitore, in base a chi fa il punteggio più alto

// generatore numeri random per il giocatore
let numberPlayer = ((Math.random()*5)+1).toFixed(0);
console.log (parseInt(numberPlayer));

// generatore numeri random per il computer
let numberComputer = ((Math.random()*5)+1).toFixed(0);
console.log (parseInt(numberComputer));

// condizione if per determinare il vincitore
if (numberPlayer == numberComputer) {
    console.log (`Pari, il numero di entrambi i giocatori è uguale`)
} else if (numberPlayer > numberComputer) {
    console.log (`Il vincitore è il giocatore con il numero ${numberPlayer}`)
} else {
    console.log (`Il vincitore è il computer con il numero ${numberComputer}`)
}