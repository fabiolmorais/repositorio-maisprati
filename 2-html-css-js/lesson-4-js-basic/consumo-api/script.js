let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let bairro = document.querySelector("#bairro");
let cidade = document.querySelector("#cidade");
let estado = document.querySelector("#estado");

function checkChar(e) {
  let char = String.fromCharCode(e.keyCode);

  let regex = "[0-9]";

  if (char.match(regex)) {
    return true;
  }
}

cep.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

function limpa_form() {
  cep.value = "";
  rua.value = "";
  bairro.value = "";
  cidade.value = "";
  estado.value = "";
}

function cep_inexistente(conteudo) {
  if ("erro" in conteudo) {
    alert("Cep inexistente!");
    limpa_form();
  }
}

cep.addEventListener("focusout", async () => {
  let validaCep = /^[0-9]{8}$/;

  if (cep.value !== "" && validaCep.test(cep.value)) {
    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

    const responseCep = await response.json();

    rua.value = responseCep.logradouro;
    bairro.value = responseCep.bairro;
    cidade.value = responseCep.localidade;
    estado.value = responseCep.estado;

    cep_inexistente(responseCep);
  } else {
    alert(
      "O cep digitado está invalido, o correto é 8 números!\nExemplo: 11234654"
    );
    limpa_form();
  }
});
