const filmes = [
  {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    anoLancamento: 1972,
  },
  {
    titulo: "A Lista de Schindler",
    diretor: "Steven Spielberg",
    anoLancamento: 1993,
  },
  {
    titulo: "Pulp Fiction",
    diretor: "Quentin Tarantino",
    anoLancamento: 1994,
  },
  {
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    diretor: "Peter Jackson",
    anoLancamento: 2001,
  },
  {
    titulo: "A Origem",
    diretor: "Christopher Nolan",
    anoLancamento: 2010,
  },
];

const titulosFilmes = [];

filmes.forEach((filme) => {
  titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes);
