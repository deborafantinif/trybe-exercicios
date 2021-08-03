function maiorValor(array) {
    let maior
    
    for(let i = 0; i < array.length; i += 1) {
        if(array[i] > array[i + 1]) {
            maior = i
        }
    }

    return maior
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]))