const carrinho = {
  itens: [
    {
      nome: "Laptop",
      quantidade: 1,
      precoUnitario: 3000.0,
    },
    {
      nome: "Smartphone",
      quantidade: 2,
      precoUnitario: 1200.0,
    },
    {
      nome: "Teclado",
      quantidade: 1,
      precoUnitario: 150.0,
    },
    {
      nome: "Mouse",
      quantidade: 3,
      precoUnitario: 80.0,
    },
    {
      nome: "Monitor",
      quantidade: 1,
      precoUnitario: 600.0,
    },
  ],
};

let valorTotalCarrinho = 0;

carrinho.itens.forEach((item) => {
  valorTotalCarrinho += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$${valorTotalCarrinho.toFixed(2)}`);
