const empresa = {
  departamentos: [
    {
      nome: "Recursos Humanos",
      funcionarios: [
        { nome: "Ana Silva", cargo: "Gerente de RH" },
        { nome: "Carlos Souza", cargo: "Analista de RH" },
      ],
    },
    {
      nome: "Desenvolvimento",
      funcionarios: [
        { nome: "Maria Oliveira", cargo: "Desenvolvedora Frontend" },
        { nome: "Roberto Lima", cargo: "Desenvolvedor Backend" },
        { nome: "Juliana Costa", cargo: "Arquiteta de Software" },
      ],
    },
    {
      nome: "Marketing",
      funcionarios: [
        { nome: "Fernanda Santos", cargo: "Coordenadora de Marketing" },
        { nome: "Lucas Pereira", cargo: "Analista de Marketing" },
      ],
    },
  ],
};

for (const key in empresa.departamentos) {
  let departamento = empresa.departamentos[key];

  for (const funcionario of departamento.funcionarios) {
    console.log(
      `Funcionário: ${funcionario.nome}, Departamento: ${departamento.nome}`
    );
  }
}
