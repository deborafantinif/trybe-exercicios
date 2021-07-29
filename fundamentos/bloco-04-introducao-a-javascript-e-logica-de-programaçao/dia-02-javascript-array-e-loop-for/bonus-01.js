let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for(index = 0; index < numbers.length; index += 1) {
    for(indexSecond = 0; indexSecond < numbers.length; indexSecond += 1){
        if(numbers[indexSecond] > numbers[index]) {
            let auxiliar = numbers[index]
            numbers[index] = numbers[indexSecond]
            numbers[indexSecond] = auxiliar
        }
    }
}

console.log(numbers)