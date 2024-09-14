const clientes = [
  {
    nome: "Ana Silva",
    idade: 28,
    cidade: "São Paulo",
  },
  {
    nome: "Carlos Souza",
    idade: 35,
    cidade: "Rio de Janeiro",
  },
  {
    nome: "Maria Oliveira",
    idade: 42,
    cidade: "Belo Horizonte",
  },
  {
    nome: "Roberto Lima",
    idade: 31,
    cidade: "Curitiba",
  },
  {
    nome: "Juliana Costa",
    idade: 27,
    cidade: "Porto Alegre",
  },
];

let contador = 0;

clientes.forEach((cliente) => {
  if (cliente.idade > 30) {
    contador++;
  }
});

console.log(`A quantidade de clientes que tem mais de 30 anos é: ${contador}`);
