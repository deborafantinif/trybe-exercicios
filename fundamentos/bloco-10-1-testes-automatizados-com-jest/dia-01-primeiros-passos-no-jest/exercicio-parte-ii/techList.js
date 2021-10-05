function techList(array, name) {
  if (array.length < 1) return 'Vazio!';
  return array.sort().map((item) => ({name, tech: item}));
}

module.exports = techList;
