import React, { useState } from "react";

function ListaNomes() {
  const [filtro, setFiltro] = useState("");
  const nomes = [
    "Fabio",
    "Carlos",
    "Bruna",
    "Diego",
    "Amanda",
    "Fernando",
    "Mariana",
    "Juliano",
  ];

  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <h1>Lista de Nomes</h1>

      <input
        type="text"
        placeholder="Filtrar nomes..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{
          padding: "10px",
          width: "50%",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {nomesFiltrados.length > 0 ? (
          nomesFiltrados.map((nome, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                marginBottom: "5px",
                borderRadius: "5px",
              }}
            >
              {nome}
            </li>
          ))
        ) : (
          <li style={{ color: "gray" }}>Nenhum nome encontrado</li>
        )}
      </ul>
    </div>
  );
}

export default ListaNomes;
