import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Menu de Desafios</h1>
      <ul>
        <li>
          <Link to="/contador">Contador</Link>
        </li>
        <li>
          <Link to="/alterar-cor">Alterar cor de fundo</Link>
        </li>
        <li>
          <Link to="/lista-tarefas">Lista de tarefas</Link>
        </li>
        <li>
          <Link to="/temporizador">Temporizador</Link>
        </li>
        <li>
          <Link to="/filtro-lista">Filtro de lista</Link>
        </li>
        <li>
          <Link to="/formulario">Formulário de Registro Simples</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
