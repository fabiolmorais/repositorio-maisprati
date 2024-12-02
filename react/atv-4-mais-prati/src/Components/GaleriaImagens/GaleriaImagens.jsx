import React, { useState } from "react";
import "./GaleriaImagens.css"; 

const imagens = [
  "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1452457750107-cd084dce177d?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const GaleriaImagens = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [indiceAtual, setIndiceAtual] = useState(0);

  const abrirModal = (indice) => {
    setIndiceAtual(indice);
    setImagemSelecionada(imagens[indice]);
  };

  const fecharModal = () => {
    setImagemSelecionada(null);
  };

  const proximaImagem = () => {
    const novoIndice = (indiceAtual + 1) % imagens.length;
    setIndiceAtual(novoIndice);
    setImagemSelecionada(imagens[novoIndice]);
  };

  const imagemAnterior = () => {
    const novoIndice = (indiceAtual - 1 + imagens.length) % imagens.length;
    setIndiceAtual(novoIndice);
    setImagemSelecionada(imagens[novoIndice]);
  };

  return (
    <div className="galeria-container">
      <h1>Galeria de Imagens</h1>
      <div className="galeria">
        {imagens.map((imagem, indice) => (
          <img
            key={indice}
            src={imagem}
            alt={`Imagem ${indice + 1}`}
            className="miniatura"
            onClick={() => abrirModal(indice)}
          />
        ))}
      </div>

      {imagemSelecionada && (
        <div className="modal">
          <button className="fechar" onClick={fecharModal}>
            ✖
          </button>
          <img
            src={imagemSelecionada}
            alt="Imagem ampliada"
            className="imagem-ampliada"
          />
          <button className="navegacao esquerda" onClick={imagemAnterior}>
            ◀
          </button>
          <button className="navegacao direita" onClick={proximaImagem}>
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default GaleriaImagens
