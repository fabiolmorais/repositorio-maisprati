const prompt = require("prompt-sync")();
const funcionarios = [
  {
    nome: "Ana Silva",
    cargo: "Analista de Sistemas",
    salario: 7000,
  },
  {
    nome: "Carlos Souza",
    cargo: "Gerente de Projetos",
    salario: 12000,
  },
  {
    nome: "Fernanda Oliveira",
    cargo: "Desenvolvedora Front-end",
    salario: 8000,
  },
  {
    nome: "Roberto Lima",
    cargo: "Designer Gráfico",
    salario: 6000,
  },
  {
    nome: "Juliana Santos",
    cargo: "Coordenadora de Marketing",
    salario: 9500,
  },
];

let filtroSalario = Number(
  prompt("Digite o valor do salário que você queira filtrar:")
);

for (let funcionario of funcionarios) {
  if (funcionario.salario > filtroSalario) {
    console.log(`${funcionario.nome}: ${funcionario.salario}`);
  }
}
