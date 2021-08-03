let n = 227
let soma = 0


for(let i = 2; i < n; i += 1) {
    if(n % i === 0) {
        soma += 1
    }
}

if(soma === 0) {
    console.log('O número ' + n + ' é primo.')
} else {
    console.log('O número ' + n + ' não é primo.')
}






