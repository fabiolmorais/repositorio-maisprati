import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [tempo, setTempo] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(0);
  const [ativo, setAtivo] = useState(false);

  const iniciarPausarTimer = () => {
    if (tempo > 0) {
      setAtivo(!ativo);
    } else {
      alert("Defina um tempo maior que zero!");
    }
  };

  const reiniciarTimer = () => {
    setAtivo(false);
    setTempoRestante(tempo);
  };

  useEffect(() => {
    let intervalo;
    if (ativo && tempoRestante > 0) {
      intervalo = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tempoRestante === 0 && ativo) {
      alert("O tempo acabou!");
      setAtivo(false);
    }
    return () => clearInterval(intervalo);
  }, [ativo, tempoRestante]);

  const handleChange = (e) => {
    const valor = parseInt(e.target.value, 10);
    setTempo(isNaN(valor) ? 0 : valor);
    setTempoRestante(isNaN(valor) ? 0 : valor);
  };

  return (
    <div className="timer-container">
      <h1>Contagem Regressiva</h1>
      <input
        type="number"
        min="1"
        value={tempo}
        onChange={handleChange}
        placeholder="Digite os segundos"
        disabled={ativo}
      />
      <div className="botoes">
        <button onClick={iniciarPausarTimer}>
          {ativo ? "Pausar" : "Iniciar"}
        </button>
        <button
          onClick={reiniciarTimer}
          disabled={!ativo && tempoRestante === tempo}
        >
          Reiniciar
        </button>
      </div>
      <h2>Tempo Restante: {tempoRestante} segundos</h2>
    </div>
  );
};

export default Timer;
