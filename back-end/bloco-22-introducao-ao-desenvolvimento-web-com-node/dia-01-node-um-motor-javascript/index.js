const readline = require('readline-sync')
const imc = require('./exercicios/imc')
const velocidade = require('./exercicios/velocidade')
const sorteio = require('./exercicios/sorteio')
const fatorial = require('./bonus/fatorial')
const fibonacci = require('./bonus/fibonacci')

const main = async () => {
  const listScript = ['imc', 'velocidade', 'sorteio', 'fatorial', 'fibonacci']
  const painelScripts = await readline.keyInSelect(listScript, 'Qual script você quer executar? ')
  console.log(listScript[painelScripts])
  switch (painelScripts) {
    case 0: 
      return imc();
    case 1: 
      return velocidade();
    case 2:
      return sorteio();
    case 3:
      return fatorial();
    case 4:
      return fibonacci();
  }
}

main()