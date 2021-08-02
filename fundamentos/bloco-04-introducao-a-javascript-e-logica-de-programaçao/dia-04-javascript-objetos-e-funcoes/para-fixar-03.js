function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

function mod(a, b) {
    return a % b
}

function highValueTwo(a, b) {
    if(a > b) {
        console.log(a + ' é o maior valor!')
    }
    else if(b > a) {
        console.log(b + ' é o maior valor!')
    }
    else if(a == b) {
        console.log('Os valores são iguais!')
    }
}

function highVAlueThree(a, b, c) {
    if(a > b && a > c) {
        console.log(a + ' é o maior valor!')
    }
    else if(b > a && b > c) {
        console.log(b + ' é o maior valor!')
    }
    else if(c > b && c > a) {
        console.log(c + ' é o maior valor!')
    }
    else {
        console.log('os valores maiores são iguais!')
    }
}

function positiveNegative(a) {
    if(a > 0) {
        console.log('positive')
    }
    else if(a < 0) {
        console.log('negative')
    }
    else {
        console.log('zero')
    }
}

function triangle(a, b, c) {
    let anguloSoma = a + b + c

    if(anguloSoma == 180) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}