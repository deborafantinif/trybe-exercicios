const arrayNumbers = new Promise((resolve, reject) => {
  const numbers = [];

  for (let i = 1; i <= 10; i += 1 ) {
    const number = Math.floor(Math.random() * 51);
    numbers.push(number);
  }
  const numbersSquare = numbers.map((number) => number * number)
    .reduce((total, number) => total + number);
  
  if (numbersSquare < 8000) {
    const restOfDiv = [2, 3, 5, 10].map((number) => numbersSquare / number);
    return resolve(restOfDiv);
  } else {
    reject();
  };

})
.then((number) => console.log(number))
.catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
