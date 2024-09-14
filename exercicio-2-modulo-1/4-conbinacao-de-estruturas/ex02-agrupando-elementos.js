const pedidos = [
  {
    cliente: "Ana Silva",
    produto: "Laptop",
    quantidade: 1,
  },
  {
    cliente: "Carlos Souza",
    produto: "Smartphone",
    quantidade: 2,
  },
  {
    cliente: "Maria Oliveira",
    produto: "Teclado",
    quantidade: 3,
  },
  {
    cliente: "Roberto Lima",
    produto: "Mouse",
    quantidade: 1,
  },
  {
    cliente: "Juliana Costa",
    produto: "Monitor",
    quantidade: 2,
  },
  {
    cliente: "Ana Silva",
    produto: "Tablet",
    quantidade: 1,
  },
  {
    cliente: "Carlos Souza",
    produto: "Fone de Ouvido",
    quantidade: 4,
  },
  {
    cliente: "Maria Oliveira",
    produto: "Cadeira Ergonômica",
    quantidade: 2,
  },
  {
    cliente: "Roberto Lima",
    produto: "Impressora",
    quantidade: 1,
  },
  {
    cliente: "Juliana Costa",
    produto: "Webcam",
    quantidade: 3,
  },
];

let totalProdutosPorClientes = [];

pedidos.forEach((pedido) => {
  let { cliente, quantidade } = pedido;
  if (totalProdutosPorClientes[cliente]) {
    totalProdutosPorClientes[cliente] += quantidade;
  } else {
    totalProdutosPorClientes[cliente] = quantidade;
  }
});

console.log(totalProdutosPorClientes);
