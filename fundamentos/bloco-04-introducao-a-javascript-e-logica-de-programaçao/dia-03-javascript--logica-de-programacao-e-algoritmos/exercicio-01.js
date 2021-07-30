let n = 10
let linha = ''

for(i = 0; i < n; i += 1) {
    linha = ''
    for(ind = 0; ind < n; ind += 1) {
        linha += '*'
    }
    console.log(linha)
}

