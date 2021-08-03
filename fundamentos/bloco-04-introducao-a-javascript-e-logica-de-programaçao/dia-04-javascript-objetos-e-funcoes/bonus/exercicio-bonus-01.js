function translateRoman(roman) {
    const numberRoman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let cardinal = 0
    
    for(let i = 0; i < roman.length; i += 1) {
    
        if(numberRoman[roman[i]] < numberRoman[roman[i + 1]]) {
            cardinal += - numberRoman[roman[i]]
        } else {
            cardinal += numberRoman[roman[i]]
        } 
    }

    return cardinal
}

let roman = 'CDXXVII'


console.log(translateRoman(roman))


