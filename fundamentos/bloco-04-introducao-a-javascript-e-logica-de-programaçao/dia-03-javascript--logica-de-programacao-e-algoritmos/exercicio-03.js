let n = 5
let linha = ''
let teste = '    *'
let segundo = '   **'

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



