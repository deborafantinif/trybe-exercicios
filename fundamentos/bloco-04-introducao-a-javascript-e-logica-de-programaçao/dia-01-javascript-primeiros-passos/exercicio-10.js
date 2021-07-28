let valorCusto = 35
let valorVenda = 46

if(valorCusto < 0 || valorVenda < 0) {
    console.log('ERROR: valor inserido inválido!')
}
else {
    let valorCustoTotal = valorCusto + valorCusto * 0.2
    let lucro = valorVenda - valorCustoTotal
    console.log('O lucro da venda de mil produtos vendidos foi : R$' + (lucro * 1000))
}