function somaNumeros(valor) {
    let soma = 0

    for(i = 1; i <= valor; i += 1) {
        soma += i
    }

    return soma
}


console.log(somaNumeros(5))