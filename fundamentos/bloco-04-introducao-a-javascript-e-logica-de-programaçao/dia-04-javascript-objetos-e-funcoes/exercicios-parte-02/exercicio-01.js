function vereficaPalindrome(palavra) {
    //processo de inverter a palavra
    let separaValores = palavra.split("")
    let inverteValores = separaValores.reverse()
    let juntaValores = inverteValores.join("")

    //verificação do palíndromo
    if(palavra === juntaValores) {
        return true
    } else {
        return false
    }

}

console.log(vereficaPalindrome('pedro'))