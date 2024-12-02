import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [abaAtiva, setAbaAtiva] = useState("sobre");

  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case "sobre":
        return (
          <p>
            Aba Sobre! Aqui estão informações gerais sobre o site.
          </p>
        );
      case "contato":
        return <p>Aba Contato! Aqui estão as informações para entrar em contato</p>;
      default:
        return null;
    }
  };
  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={abaAtiva === 'sobre' ? 'tab ativa' : 'tab'}
          onClick={() => setAbaAtiva('sobre')}
        >
          Sobre
        </button>
        <button
          className={abaAtiva === 'contato' ? 'tab ativa' : 'tab'}
          onClick={() => setAbaAtiva('contato')}
        >
          Contato
        </button>
      </div>
      <div className="conteudo">
        {renderizarConteudo()}
      </div>
    </div>
  );
}

export default Tabs
