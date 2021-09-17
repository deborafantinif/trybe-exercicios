const arrayNumbers = new Promise((resolve, reject) => {
  const numbers = [];

  for (let i = 1; i <= 10; i += 1 ) {
    const number = Math.random() * 51;
    numbers.push(number);
  }
  const numbersSquare = numbers.map((number) => number * number)
    .reduce((total, number) => total + number);
  
  (numbersSquare < 8000) ? resolve() : reject();

})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));
