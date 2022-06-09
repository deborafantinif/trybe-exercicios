const readline = require('readline-sync')


const medirVelocidadeMedia = (distancia, tempo) => {
  return parseFloat(distancia / tempo);
}

const main = () => {
  const distancia = readline.questionInt('Qual a distância percorrida (em metros)? ')
  const tempo = readline.questionInt('Qual foi o tempo gasto no percurso (em segundos)? ')
  
  console.log(medirVelocidadeMedia(distancia, tempo))
}

module.exports = main;