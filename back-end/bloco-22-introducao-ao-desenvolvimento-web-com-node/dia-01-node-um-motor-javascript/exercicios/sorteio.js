const readline = require('readline-sync')


const verificaNumeroApostado = (numeroApostado) => {
  const numeroSorteado = Math.floor(Math.random() * 11);
  
  if (numeroSorteado == numeroApostado) return 'Parabéns, número correto!' 
  return `Opa, não foi dessa vez. O número era ${numeroSorteado}`
}

const main = () => {
  const numeroApostado = readline.questionInt('Adivinhe qual é o número de 0 á 10: ')

  console.log(verificaNumeroApostado(numeroApostado))
}

module.exports = main;