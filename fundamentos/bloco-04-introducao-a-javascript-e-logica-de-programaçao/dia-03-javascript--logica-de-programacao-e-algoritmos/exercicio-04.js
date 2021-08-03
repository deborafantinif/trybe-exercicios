let n = 5
let linha = ''
let centro = ((n - 1) / 2) + 1

for(i = 0; i <= centro; i += 1) {
    linha = ''
    for(ind = 1; ind <= n; ind += 1) {
        if(centro - i == ind || centro + i == ind) {
            for(inx = (centro - i); inx <= (centro + i); inx += 1) {
                linha += '*'
            }
            break
        }
        else {
            linha += ' '
        }
    }
    console.log(linha)

}