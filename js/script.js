// * SNACK 1
// somma dichiarativa
// function somma(numOne, numTwo) {
//   console.log(numOne + numTwo);
// }
// somma(2, 6);

// funzione somma anonima assegnata ad una variabile
// const somma = function (numOne, numTwo) {
//   console.log(numOne + numTwo);
// };
// somma(3, 6);

// funzione somma con arrow function
// const somma = (numOne, numTwo) => numOne + numTwo;
// console.log(somma(7, 10));

// * SNACK 2
// funzione che restituisce il quadrato di un numero
// const quadrato = (n) => n * n;
// console.log(quadrato(6));

// * SNACK 3
// Definisci una funzione eseguiOperazione che accetta tre parametri:
// due numeri e una funzione operatore (callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.
// const eseguiOperazione = (a, b, operazione) => operazione(a, b);
// console.log(eseguiOperazione(4, 5, somma));

// *SNACK 4
// Scrivi una funzione creaTimer che accetta un tempo (in ms)
// e restituisce una nuova funzione che avvia un setTimeout
// per stampare "Tempo scaduto!".
// const creaTimer = (ms) => {
//   setTimeout(() => {
//     console.log("tempo scaduto");
//   }, ms);
// };
// creaTimer(2000);

// * SNACK 5
// Definisci una funzione che accetta un messaggio
//  e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito.
//  Interrompilo manualmente o usa clearInterval() in un altro script.

// const stampaOgniSecondo = (messaggio) => {
//   setInterval(() => {
//     console.log(messaggio);
//   }, 1000);
// };
// stampaOgniSecondo("ciao");

// * SNACK 6
// Crea un contatore automatico con setInterval:
//  Definisci una funzione creaContatoreAutomatico
// che accetta un intervallo di tempo e restituisce una funzione
//  che avvia un setInterval, incrementando un contatore e stampandolo.
const creaContatoreAutomatico = (intervallo) => {
  let count = 0;
  return () => {
    setInterval(() => {
      count++;
      console.log(count);
    }, intervallo);
  };
};
const contatore = creaContatoreAutomatico(1000);
contatore();
