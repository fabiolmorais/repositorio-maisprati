import React, {useState, useEffect } from 'react'

const Temporizador = () => {
  const [tempo, setTempo] = useState(0);
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    let intervalo;
    if (ativo) {
      intervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [ativo]);

  const reiniciarTemporizador = () => {
    setTempo(0);
    setAtivo(false);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <h1>Temporizador</h1>
      <h2>{tempo} segundos</h2>

      <button onClick={() => setAtivo(!ativo)} style={botaoEstilo}>
        {ativo ? "Pausar" : "Iniciar"}
      </button>
      <button onClick={reiniciarTemporizador} style={botaoEstilo}>
        Reiniciar
      </button>
    </div>
  );
}

const botaoEstilo = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Temporizador
