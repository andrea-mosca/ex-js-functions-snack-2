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
const somma = (numOne, numTwo) => numOne + numTwo;
console.log(somma(7, 10));

// * SNACK 2
// funzione che restituisce il quadrato di un numero
const quadrato = (n) => n * n;
console.log(quadrato(6));
