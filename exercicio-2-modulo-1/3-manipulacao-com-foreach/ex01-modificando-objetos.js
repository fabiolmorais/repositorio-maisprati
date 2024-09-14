const produtos = [
  {
    nome: "Notebook",
    preco: 3000,
    desconto: 10,
  },
  {
    nome: "Smartphone",
    preco: 1500,
    desconto: 5,
  },
  {
    nome: "Headphones",
    preco: 250,
    desconto: 15,
  },
  {
    nome: "Cadeira Ergonômica",
    preco: 800,
    desconto: 20,
  },
  {
    nome: "Teclado Mecânico",
    preco: 400,
    desconto: 8,
  },
];

produtos.forEach((produto) => {
  let precoFinal = produto.preco - produto.preco * 0.1;
  console.log(
    `Produto: ${produto.nome},
     Preço inicial: R$${produto.preco},
     Preço Final: R$${precoFinal.toFixed(2)},
     Total de desconto: R$${produto.preco * 0.1}`
  );
});
