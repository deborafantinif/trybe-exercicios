// 1. Modifique a função utilizando => arrow function e template literals
// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const escopo = false;
const testingScope = (escopo === true) ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`;

console.log(testingScope);


// 2. Ordene os elementos em ordem crescente
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numbersOrdered = (array) => `Os números ${array.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`

console.log(numbersOrdered(oddsAndEvens));