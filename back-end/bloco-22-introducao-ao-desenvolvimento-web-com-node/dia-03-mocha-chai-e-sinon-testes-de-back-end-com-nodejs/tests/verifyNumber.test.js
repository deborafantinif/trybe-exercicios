const { expect } = require("chai");
const verifyNumber = require("../verifyNumber");

describe("Verifica se o funcionamento da função verifyNumber", () => {
  it("se é uma função", () => {
    expect(verifyNumber).to.be.a("function");
  });

  it("se retorna 'posito' com número acima de 0", () => {
    expect(verifyNumber(5)).to.equals('positivo');
  });

  it("se retorna 'negativo' com número abaixo de 0", () => {
    expect(verifyNumber(-5)).to.equals('negativo');
  });

  it("se retorna 'neutro' com 0", () => {
    expect(verifyNumber(0)).to.equals('neutro');
  });

  it("se retorna 'inválido' com valores que não são inteiros", () => {
    expect(verifyNumber('test')).to.equals('invalido');
  });
});
