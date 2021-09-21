function hydrate(bebidas) {
  let copos = 0;
  const regex = /\d+/g;
  const matches = bebidas.match(regex);

  matches.forEach((cup) => copos += parseInt(cup));

  if (copos > 1) return `${copos} copos de água`;
  return `${copos} copo de água`;
}

module.exports = hydrate;
