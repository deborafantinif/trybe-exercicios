let valor1 = 0
let valor2 = 1
let valor3 = 3

if(valor1 > valor2 && valor1 > valor3) {
    console.log(valor1 + ' é o maior valor!')
}
else if(valor2 > valor1 && valor2 > valor3) {
    console.log(valor2 + ' é o maior valor!')
}
else if(valor3 > valor2 && valor3 > valor1) {
    console.log(valor3 + ' é o maior valor!')
}
else {
    console.log('os valores maiores são iguais!')
}