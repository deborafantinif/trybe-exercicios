function arrayOfNumbers(array) {
    let newArray = []
    for(let value of array) {
        for(let number of value) {
            if(number % 2 === 0) {
                newArray.push(number)
            }
        }
    }

    return(newArray)
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]]

console.log(arrayOfNumbers(vector))