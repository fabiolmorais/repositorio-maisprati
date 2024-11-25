import React, { useState } from "react";


const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [mostrarPendentes, setMostrarPendentes] = useState(false);

  // Adiciona nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    const nova = { id: Date.now(), texto: novaTarefa, concluida: false };
    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  };

  // Remove tarefa pelo ID
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  // Marca ou desmarca como concluída
  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  // Filtra tarefas
  const tarefasFiltradas = mostrarPendentes
    ? tarefas.filter((tarefa) => !tarefa.concluida)
    : tarefas;

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <h1>Lista de Tarefas</h1>

      {/* Input para nova tarefa */}
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        style={{
          padding: "10px",
          width: "50%",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={adicionarTarefa}
        style={{ marginLeft: "10px", padding: "10px" }}
      >
        Adicionar
      </button>

      {/* Botão para alternar filtro */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setMostrarPendentes(!mostrarPendentes)}>
          {mostrarPendentes ? "Mostrar Todas" : "Mostrar Pendentes"}
        </button>
      </div>

      {/* Lista de tarefas */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tarefasFiltradas.length > 0 ? (
          tarefasFiltradas.map((tarefa) => (
            <li
              key={tarefa.id}
              style={{
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: tarefa.concluida ? "#d4edda" : "#f8d7da",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                onClick={() => alternarConclusao(tarefa.id)}
                style={{
                  textDecoration: tarefa.concluida ? "line-through" : "none",
                  cursor: "pointer",
                  flex: 1,
                  textAlign: "left",
                }}
              >
                {tarefa.texto}
              </span>
              <button
                onClick={() => removerTarefa(tarefa.id)}
                style={{ marginLeft: "10px" }}
              >
                Remover
              </button>
            </li>
          ))
        ) : (
          <li style={{ color: "gray" }}>
            Nenhuma tarefa {mostrarPendentes ? "pendente" : "adicionada"}
          </li>
        )}
      </ul>
    </div>
  );
};

export default ListaDeTarefas;
