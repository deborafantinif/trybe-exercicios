const readline = require('readline-sync')

const calcularFatorial = (numeroFatorial) => {
  if (numeroFatorial <= 0) return 'P número deve ser positivo'
  let resultadoFatorial = 1

  for (let i = 1; i <= numeroFatorial; i++) {
    resultadoFatorial *= i
  }

  return resultadoFatorial
}

const main = () => {
  const numeroFatorial = readline.questionInt('Qual o número você quer saber o fatorial? ')

  console.log(calcularFatorial(numeroFatorial))
}

module.exports = main;