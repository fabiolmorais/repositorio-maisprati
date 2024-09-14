let livro = {
  titulo: "Harry Potter e o Cálice de Fogo",
  autor: "J. K. Rowlling",
  anoPublicacao: 2000,
  genero: "Fantasia",
};

if (!livro.hasOwnProperty("editora")) {
  livro.editora = "Rocco";
  console.log("Propriedade adicionada com sucesso!");
} else {
  console.log("A propriedade já existe!");
}

console.table(livro);
