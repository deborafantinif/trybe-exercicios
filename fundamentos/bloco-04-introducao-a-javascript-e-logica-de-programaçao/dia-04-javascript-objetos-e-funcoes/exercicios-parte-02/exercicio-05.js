function repeteMais(array) {
    let valor = 0
    let repete = 0
    let analise = 0

    for(i = 0; i < array.length; i += 1) {
        analise = 0
        for(ind = 0; ind < array.length; ind += 1) {
            if(array[i] === array[ind]) {
                analise += 1
            }

            if(analise > repete) {
                repete = analise
                valor = array[ind]
            }
        }
    }

    console.log('O valor ' + valor + ' é o que mais repete no array, sendo: ' + repete + ' vezes.')
}

repeteMais([2, 3, 2, 5, 8, 2, 3])