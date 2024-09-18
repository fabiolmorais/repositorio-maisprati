let addTarefaBtn = document.getElementById("addTarefaBtn");
let listaTarefas = document.getElementById("listaTarefas");
let todasBtn = document.getElementById("todasBtn");
let concluidasBtn = document.getElementById("concluidasBtn");
let naoConcluidasBtn = document.getElementById("naoConcluidasBtn");

addTarefaBtn.addEventListener("click", function () {
  let addTarefas = document.getElementById("addTarefas");
  let textoTarefa = addTarefas.value;

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = textoTarefa;

  li.appendChild(span);
  listaTarefas.appendChild(li);
  addTarefas.value = "";

  span.addEventListener("click", function () {
    span.classList.toggle("concluida");
  });

  let removerBtn = document.createElement("button");
  removerBtn.textContent = "Remover";
  removerBtn.classList.add("botoes-tarefas");
  removerBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removerBtn);

  let editarBtn = document.createElement("button");
  editarBtn.textContent = "Editar";
  editarBtn.classList.add("botoes-tarefas");
  editarBtn.addEventListener("click", function () {
    let inputEditar = document.createElement("input");
    inputEditar.value = span.textContent;

    const salvarBtn = document.createElement("button");
    salvarBtn.textContent = "Salvar";
    salvarBtn.classList.add("botoes-tarefas");
    salvarBtn.addEventListener("click", function () {
      span.textContent = inputEditar.value;
      li.replaceChild(span, inputEditar);
      li.replaceChild(editarBtn, salvarBtn);
    });

    li.replaceChild(inputEditar, span);
    li.replaceChild(salvarBtn, editarBtn);
  });

  li.appendChild(editarBtn);
});

todasBtn.addEventListener("click", function () {
  let tarefas = document.querySelectorAll("li");
  tarefas.forEach((tarefa) => {
    tarefa.style.display = "list-item";
  });
});

concluidasBtn.addEventListener("click", function () {
  let tarefas = document.querySelectorAll("li");
  tarefas.forEach((tarefa) => {
    let span = tarefa.querySelector("span");
    if (span.classList.contains("concluida")) {
      tarefa.style.display = "list-item";
    } else {
      tarefa.style.display = "none";
    }
  });
});

naoConcluidasBtn.addEventListener("click", function() {
  let tarefas = document.querySelectorAll("li");
  tarefas.forEach((tarefa) => {
    let span = tarefa.querySelector("span");
    if (!span.classList.contains("concluida")) {
      tarefa.style.display = "list-item";
    } else {
      tarefa.style.display = "none";
    }
  });
})
