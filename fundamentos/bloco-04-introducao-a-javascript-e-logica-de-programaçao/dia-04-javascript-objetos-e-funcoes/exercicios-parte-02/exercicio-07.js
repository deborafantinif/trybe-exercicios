function inverterPalavra(palavra) {
    //processo de inverter a palavra
    let separaValores = palavra.split("")
    let inverteValores = separaValores.reverse()
    let juntaValores = inverteValores.join("")

    return juntaValores
}


function trechoDentro(palavra, trecho) {
    let novaPalavra = inverterPalavra(palavra)
    let novoTrecho = inverterPalavra(trecho)

    for(let i = 0; i < novoTrecho.length; i += 1) {
        if(novaPalavra[i] === novoTrecho[i]) {

        } else {
            return false
        }
    }

    return true
}

console.log(trechoDentro('joaofernando', 'fernan'))

