const transacoes = [
  {
    tipo: "entrada",
    valor: 1500.0,
  },
  {
    tipo: "saída",
    valor: 500.0,
  },
  {
    tipo: "entrada",
    valor: 2000.0,
  },
  {
    tipo: "saída",
    valor: 300.0,
  },
  {
    tipo: "entrada",
    valor: 1200.0,
  },
  {
    tipo: "saída",
    valor: 700.0,
  },
];

let saldoFinal = 0;

transacoes.forEach((transacao) => {
  if (transacao.tipo === "entrada") {
    saldoFinal += transacao.valor;
  }
  if (transacao.tipo === "saída") {
    saldoFinal -= transacao.valor;
  }
});

console.log(`Saldo final: R$${saldoFinal.toFixed(2)}`);
