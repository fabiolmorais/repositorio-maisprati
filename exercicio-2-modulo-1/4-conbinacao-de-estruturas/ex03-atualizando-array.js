const estoque = [
  {
    produto: "Laptop",
    quantidade: 50,
    minimo: 10,
  },
  {
    produto: "Smartphone",
    quantidade: 2,
    minimo: 5,
  },
  {
    produto: "Teclado",
    quantidade: 100,
    minimo: 20,
  },
  {
    produto: "Mouse",
    quantidade: 14,
    minimo: 15,
  },
  {
    produto: "Monitor",
    quantidade: 6,
    minimo: 8,
  },
];

estoque.forEach((produto) => {
  while (produto.quantidade < produto.minimo) {
    produto.quantidade *= 2;
  }
});

console.log(estoque);
