const readline = require('readline-sync')
const imc = require('./imc')

const main = async () => {
  const listScript = ['imc', 'velocidade', 'sorteio']
  const painelScripts = await readline.keyInSelect(listScript, 'Qual script você quer executar? ')
  console.log(painelScripts)
  switch(painelScripts) {
    case 1:
      console.log('aaaaaaa')
      imc.main()
    }
}

main()