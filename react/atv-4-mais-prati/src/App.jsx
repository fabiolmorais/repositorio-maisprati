import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contador from "./Components/Contador/Contador";
import AlterarCorDeFundo from "./Components/AlterarCorDeFundo/AlterarCorDeFundo";
import ListaDeTarefas from "./Components/ListaDeTarefas/ListaDeTarefas";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contador" element={<Contador/>} />
        <Route path="/alterar-cor" element={<AlterarCorDeFundo/>} />
        <Route path="/lista-tarefas" element={<ListaDeTarefas/>} />
      </Routes>
    </Router>
  );
}

export default App;
