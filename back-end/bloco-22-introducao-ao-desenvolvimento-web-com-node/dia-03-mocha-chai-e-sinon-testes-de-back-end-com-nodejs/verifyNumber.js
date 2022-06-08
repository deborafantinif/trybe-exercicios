module.exports = (number) => {
  if (number > 0) {
    return "positivo";
  } else if (number < 0) {
    return "negativo";
  } else if (number === 0) {
    return "neutro";
  } else {
    return "o valor deve ser um número";
  }
};
