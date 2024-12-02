import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contador from "./Components/Contador/Contador";
import AlterarCorDeFundo from "./Components/AlterarCorDeFundo/AlterarCorDeFundo";
import ListaDeTarefas from "./Components/ListaDeTarefas/ListaDeTarefas";
import Home from "./Pages/Home";
import Temporizador from "./Components/Temporizador/Temporizador";
import FiltroLista from "./Components/FiltroLista/FiltroLista";
import Formulario from "./Components/Formulario/Formulario";
import RequisicaoJson from "./Components/RequisicaoJson/RequisicaoJson";
import GaleriaImagens from "./Components/GaleriaImagens/GaleriaImagens";
import Timer from "./Components/Timer/Timer";
import Tabs from "./Components/Tabs/Tabs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contador" element={<Contador/>} />
        <Route path="/alterar-cor" element={<AlterarCorDeFundo/>} />
        <Route path="/lista-tarefas" element={<ListaDeTarefas/>} />
        <Route path="/temporizador" element={<Temporizador/>} />
        <Route path="/filtro-lista" element={<FiltroLista/>} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/requisicao" element={<RequisicaoJson/>} />
        <Route path="/galeria-imagens" element={<GaleriaImagens/>} />
        <Route path="/timer" element={<Timer/>} />
        <Route path="/tabs" element={<Tabs/>} />
      </Routes>
    </Router>
  );
}

export default App;
