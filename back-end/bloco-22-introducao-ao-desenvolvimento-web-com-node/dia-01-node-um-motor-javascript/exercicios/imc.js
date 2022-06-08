const readline = require('readline-sync')


const calculaImc = (altura, peso) => {
  const imcResult = parseInt(peso / (altura * altura))

  if (imcResult < 18.5) {
    return 'Abaixo do peso (magreza)'
  } else if (imcResult < 24.9) {
    return 'Peso normal'
  } else if (imcResult < 29.9) {
    return 'Acima do peso (sobrepeso)'
  } else if (imcResult < 34.9) {
    return 'Obesidade grau I'
  } else if (imcResult < 39.9) {
    return 'Obesidade grau II'
  }
  return 'Obesidade graus III e IV'
}

const main = () => {
  const altura = readline.questionFloat('Qual a sua altura? ');
  const peso = readline.questionFloat('Qual o seu peso? ');

  console.log(calculaImc(altura, peso))
}

main()

module.exports = main

