import React, { useState, useEffect } from "react";

const AlterarCorDeFundo = () => {
  const [color, setColor] = useState("#ffffff");

  const gerarCorAleatoria = () => {
    // Função criada para gerar a cor hexadecimal aleatória usando o random e depois convertendo para String
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  // O useEffect é o responsável por alterar a cor de fundo da página sempre que a variavel color mudar.
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Alterar Cor de Fundo</h1>
      <button
        onClick={() => setColor(gerarCorAleatoria())}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Mudar Cor
      </button>
      <p style={{ marginTop: "20px", fontSize: "20px" }}>
        Cor Atual: <strong>{color}</strong>
      </p>
    </div>
  );
};

export default AlterarCorDeFundo;
