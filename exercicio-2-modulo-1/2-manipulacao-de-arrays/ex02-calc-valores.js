let alunos = [
  {
    nome: "João",
    nota1: 10,
    nota2: 8.0,
  },
  {
    nome: "Maria",
    nota1: 9.0,
    nota2: 7,
  },
  {
    nome: "Pedro",
    nota1: 5.0,
    nota2: 7.0,
  },
];

for (let aluno of alunos) {
  let mediaAluno = (aluno.nota1 + aluno.nota2) / 2;
  console.log(`Aluno ${aluno.nome} ficou com média: ${mediaAluno.toFixed(2)}`);
}
