const readline = require('readline-sync')

const calculaFibonacci = (tamanhoFibonacci) => {
  let numeroAnterior = 0
  let numeroCorrente = 1
  let sequenciaFibonacci = [1]

  for (let i = 1; i < tamanhoFibonacci; i++) {
    let numeroAuxiliar = numeroAnterior
    numeroAnterior = numeroCorrente
    numeroCorrente += numeroAuxiliar
    sequenciaFibonacci.push(numeroCorrente)
  }

  return sequenciaFibonacci
}

const main = () => {
  const tamanhoFibonacci = readline.questionInt('Qual o tamanho da sequência de Fibonacci você deseja visualizar? ')

  console.log(calculaFibonacci(tamanhoFibonacci))
}

module.exports = main;