const randomNumber = (bet, func) => {
  let number =  Math.floor((Math.random() * 5) + 1);

  return func(bet, number)
}

const message = (bet, number) => {
  if (bet === number) {
    return "Parabéns você ganhou"
  } else {
    return "Tente novamente";
  }
}

console.log(randomNumber(2, message));