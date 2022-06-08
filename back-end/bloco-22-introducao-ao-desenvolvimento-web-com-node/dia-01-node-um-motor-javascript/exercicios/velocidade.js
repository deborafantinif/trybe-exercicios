const readline = require('readline-sync')

const distancia = readline.questionInt('Qual a distância percorrida (em metros)? ')
const tempo = readline.questionInt('Qual foi o tempo gasto no percurso (em segundos)? ')

const medirVelocidadeMedia = (distancia, tempo) => {
  return parseFloat(distancia / tempo);
}

console.log(medirVelocidadeMedia(distancia, tempo))