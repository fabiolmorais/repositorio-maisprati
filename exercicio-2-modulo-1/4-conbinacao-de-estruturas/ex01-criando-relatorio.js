const vendas = [
  {
    produto: "Laptop",
    quantidade: 5,
    valor: 3000.0, // 15000
  },
  {
    produto: "Smartphone",
    quantidade: 10,
    valor: 1200.0, // 12000
  },
  {
    produto: "Teclado",
    quantidade: 15,
    valor: 150.0, //2250
  },
  {
    produto: "Mouse",
    quantidade: 20,
    valor: 80.0, //1600
  },
  {
    produto: "Monitor",
    quantidade: 8,
    valor: 600.0, //4800
  },
];

let totalVendas = 0;

vendas.forEach((venda) => {
  totalVendas += venda.quantidade * venda.valor;
});

console.log(`Total de vendas: R$${totalVendas.toFixed(2)}`);
