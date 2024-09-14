let carro = {
  marca: "Ford",
  modelo: "Fusion",
  ano: 2017,
  cor: "Branco",
};

for (const key in carro) {
  console.log(`A chave é: ${key} e o valor é: ${carro[key]}`);
}
