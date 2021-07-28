let notaPorcentagem = -5
let notaConceito

if(notaPorcentagem >= 90 && notaPorcentagem <= 100) {
    notaConceito = 'A'
}
else if(notaPorcentagem < 90 && notaPorcentagem >= 80) {
    notaConceito = 'B'
}
else if(notaPorcentagem < 80 && notaPorcentagem >= 70) {
    notaConceito = 'C'
}
else if(notaPorcentagem < 70 && notaPorcentagem >= 60) {
    notaConceito = 'D'
}
else if(notaPorcentagem < 60 && notaPorcentagem >= 50) {
    notaConceito = 'E'
}
else if(notaPorcentagem < 50 && notaConceito >= 0) {
    notaConceito = 'F'
}
else {
    console.log('Valor inserido inválido!!')
}

console.log(notaConceito)


