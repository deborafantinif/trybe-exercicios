// Exercicio 01
const factorial = number => number <= 1 ? 1 : number * factorial(number - 1);

console.log(factorial(6));

// 2 Crie uma função que receba uma frase e retorne qual a maior palavra.

const logestWord = string => {
  const words = string.split(' ');
  let bigWord = '';

  for (let i = 0; i < words.length; i += 1) { 
    if (words[i].length > bigWord.length) {
      bigWord = words[i];
    }
  }
  return bigWord;
}

console.log(logestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

// Exercício 3
window.onload = () => {
  const button = document.querySelector('button');
  const span = document.querySelector('span');
  let times = 0;

  button.addEventListener('click', () => {
    times += 1;
    const insertP = (times <= 1) ? span.innerText = `${times} vez!` : span.innerText = `${times} vezes!`;
    return insertP;
  })
}

// Exercício 4
let phrase = "Tryber x aqui!";

const findX = string => {
  let newPhrase = phrase.replace('x', string);
  return newPhrase;
}

console.log(findX('Vitoria'));

const skills = ['JavaScript', 'CSS', 'HTML', 'BASH', 'GIT'];

const orderSkills = functionX => `${functionX} Minhas cinco principais habilidades são:\n${skills.sort().join('; \n')} #goTrybe`;

console.log(orderSkills(findX('Debora')));


