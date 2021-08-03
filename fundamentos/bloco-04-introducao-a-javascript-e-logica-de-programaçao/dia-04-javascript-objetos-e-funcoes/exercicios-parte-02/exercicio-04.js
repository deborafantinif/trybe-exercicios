function maiorNome(array) {
    let maior = array[0]

    for(valor of array) {
        if(valor.length > maior.length) {
            maior = valor
        }
    }

    return maior
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))