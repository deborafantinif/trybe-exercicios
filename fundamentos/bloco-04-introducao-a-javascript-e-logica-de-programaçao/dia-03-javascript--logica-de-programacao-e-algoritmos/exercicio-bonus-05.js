let n = 11
let linha = ''
let centro = ((n - 1) / 2) + 1

for(let i = 0; i < centro; i += 1) {
    linha = ''
    
    for(ind = 1; ind <= n; ind += 1) {
        if((i + 1) === centro) {
            linha += '*'
        } else if(ind === centro - i) {
            linha += '*'
        } else if(ind === centro + i) {
            linha += '*'
        } else {
            linha += ' '
        }
    }
    console.log(linha)
}