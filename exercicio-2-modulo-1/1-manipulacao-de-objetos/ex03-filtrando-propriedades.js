const prompt = require("prompt-sync")();

let produto = {
  nome: "Smartwatch",
  preco: 350,
  quantidadeEmEstoque: 20,
  quantidadeVendas: 123,
};

let valorReferencia = Number(
  prompt("Digite o valor de referência para filtro:")
);

function filtrarPropriedades(produto, valorReferencia) {
  let novoObjeto = {};

  for (const propriedade in produto) {
    if (produto.hasOwnProperty(propriedade)) {
      if (
        typeof produto[propriedade] === "number" &&
        produto[propriedade] > valorReferencia
      ) {
        novoObjeto[propriedade] = produto[propriedade];
      }
    }
  }

  return novoObjeto;
}

console.log(filtrarPropriedades(produto, valorReferencia));
