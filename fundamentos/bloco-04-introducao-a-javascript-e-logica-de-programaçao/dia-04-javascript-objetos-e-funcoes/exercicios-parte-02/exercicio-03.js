function menorValor(array) {
    let menor

    for(let i = 0; i < array.length; i =+ 1) {
        if(array[i] < array[i + 1]) {
            menor = i
        }
    }

    return menor
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))