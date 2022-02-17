const verifyMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
      return reject("Informe apenas números");

    const total = (a + b) * c;

    if (total < 50) return reject("Valor muito baixo");

    resolve(total);
  });
};

verifyMath(2, 94, "e")
.then((total) => console.log(total))
.catch((err) => console.log(err));

verifyMath(2, 4, 3)
.then((total) => console.log(total))
.catch((err) => console.log(err));

verifyMath(2, 94, 7)
.then((total) => console.log(total))
.catch((err) => console.log(err));

module.exports = verifyMath;
