const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  const fiveLetter = array.find((word) => word.length === 5);
  return fiveLetter;
}

console.log(findNameWithFiveLetters(names));