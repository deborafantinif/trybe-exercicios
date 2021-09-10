// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'manga', 'morango', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite condensado', 'mel'];

const fruitSalad = (fruit, additional) => {
  const myFruitSalad = [...fruit, ...additional];
  return myFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));