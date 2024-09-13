const titulo = document.getElementById("titulo");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const itemList = document.getElementById("itemList");


addItemBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(li);

  titulo.textContent = `Você adicionou ${itemList.children.length} item(s)!`;
  titulo.className = "verde";
});

removeItemBtn.addEventListener("click", () => {
  if (itemList.children.length > 0) {
    itemList.removeChild(itemList.lastChild);

    titulo.textContent = "Item removido!";
    titulo.className = "vermelho";
  } else {
    titulo.textContent = "Não tem mais item à remover!";
    titulo.className = "preto";
  }

  if (itemList.children.length === 0 || itemList.children.length < 0) {
    titulo.textContent = "Não tem mais item à remover!";
    titulo.className = "preto";
  }
});
