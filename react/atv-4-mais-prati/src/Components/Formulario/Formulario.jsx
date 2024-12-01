import React, { useState } from "react";

function BoasVindas({ nome, email }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Bem-vindo, {nome}!</h2>
      <p>Seu e-mail registrado é: {email}</p>
    </div>
  );
}

function FormularioRegistro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.length < 2) {
      setErro("O nome deve ter pelo menos 2 caracteres.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }

    const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!senhaRegex.test(senha)) {
      setErro(
        "A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula e um caractere especial (!@#$%^&*)."
      );
      return;
    }

    setErro("");
    setEnviado(true);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "50px" }}>
      {enviado ? (
        <BoasVindas nome={nome} email={email} />
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2>Formulário de Registro</h2>

          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={estiloInput}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={estiloInput}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={estiloInput}
          />

          {erro && <p style={{ color: "red", fontSize: "14px" }}>{erro}</p>}

          <button type="submit" style={estiloBotao}>
            Registrar
          </button>
        </form>
      )}
    </div>
  );
}

const estiloInput = {
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const estiloBotao = {
  padding: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default FormularioRegistro;
