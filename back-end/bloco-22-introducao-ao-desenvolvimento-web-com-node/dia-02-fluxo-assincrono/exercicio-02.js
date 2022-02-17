const verifyMath = require("./exercicio-01");

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const callVerifyMath = () => {
  const randomNumbersArray = Array.from({length: 3}).map(getRandomNumber);
  verifyMath(...randomNumbersArray)
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error.message));
}

callVerifyMath();