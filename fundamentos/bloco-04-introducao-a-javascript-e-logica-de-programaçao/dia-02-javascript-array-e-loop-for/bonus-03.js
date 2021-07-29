let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let newNumbers = []

for(index = 0; index < numbers.length; index += 1) {
    if(index < numbers.length - 1) {
        let newNumber = numbers[index] * numbers[index +1]
        newNumbers.push(newNumber)
    }
    else {
        newNumbers.push(numbers[index] * 2)
    }
}

console.log(newNumbers)
