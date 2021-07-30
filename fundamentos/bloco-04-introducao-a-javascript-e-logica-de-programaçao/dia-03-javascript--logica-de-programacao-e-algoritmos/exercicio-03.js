let n = 20
let linha = ''

for(i = 1; i <= n; i += 1) {
    linha = ''
    for(ind = n; ind > 0; ind -= 1) {
        if(i >= ind) {
            linha += '*'
        }else {
            linha += ' '
        }
    }
    console.log(linha)
}



