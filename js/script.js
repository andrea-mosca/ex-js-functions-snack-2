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
// const creaContatoreAutomatico = (intervallo) => {
//   let count = 0;
//   return () => {
//     setInterval(() => {
//       count++;
//       console.log(count);
//     }, intervallo);
//   };
// };
// const contatore = creaContatoreAutomatico(1000);
// contatore();

// * SNACK 7
// Crea una funzione che ferma un timer dopo un certo tempo:
//  Scrivi una funzione eseguiEferma che accetta un messaggio,
// un tempo di avvio e un tempo di stop.
// Il messaggio deve essere stampato a intervalli regolari,
//  ma si deve fermare dopo il tempo di stop.
// function eseguiEferma(messaggio, avvio, stop) {
//   const intervalId = setInterval(() => {
//     console.log(messaggio);
//   }, avvio);

//   setTimeout(() => {
//     clearInterval(intervalId);
//   }, stop);
// }
// eseguiEferma("ciao", 2000, 10000);

// SNACK 8
// Crea una funzione che simula un conto alla rovescia:
//  Scrivi una funzione contoAllaRovescia che accetta
// un numero n e stampa il conto alla rovescia da n a 0,
// con un intervallo di 1 secondo tra ogni numero.
// Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer

// function contoAllaRovescia(n) {
//   const intervallo = setInterval(() => {
//     console.log(n);
//     n = n - 1;
//   }, 1000);
//   setTimeout(() => {
//     clearInterval(intervallo);
//     console.log("Tempo scaduto!");
//   }, n * 1000);
// }
// contoAllaRovescia(5);

// * SNACK 9
// Creare una funzione che esegue una sequenza di operazioni con ritardi:
//  Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni
//  (funzioni) e un tempo di intervallo.
// Ogni operazione deve essere eseguita in sequenza
//  con un ritardo uguale al tempo di intervallo.

// function sequenzaOperazioni(operazioni, intervallo) {
//   let i = 0;
//   const ritardo = setInterval(() => {
//     operazioni[i]();
//     i++;
//     if (i >= operazioni.length) {
//       clearInterval(ritardo);
//     }
//   }, intervallo);
// }

// sequenzaOperazioni(
//   [
//     () => console.log("somma"),
//     () => console.log("moltiplicazione"),
//     () => console.log("divisione"),
//   ],
//   2000
// );

// *SNACK 10
// Creare un throttler per limitare l’esecuzione di una funzione:
//  Scrivi una funzione creaThrottler che accetta una funzione
// e un tempo limite.
// Restituisce una nuova funzione che, quando chiamata ripetutamente,
// esegue l'operazione originale al massimo una volta ogni n millisecondi.
function creaThrottler(funzione, limite) {
  let pronto = true;
  return function () {
    if (!pronto) return;

    funzione();
    pronto = false;
    setTimeout(() => {
      pronto = true;
    }, limite);
  };
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 500);
throttledLog();
throttledLog();
throttledLog();
throttledLog();
throttledLog();
throttledLog();
setTimeout(throttledLog, 500);
