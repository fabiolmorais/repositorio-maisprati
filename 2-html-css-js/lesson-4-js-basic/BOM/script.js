let myWindow;

function openWin() {
  myWindow = window.open("", "myWindow", "width=200, height=100");
  myWindow.document.write("<p>Nova Janela Aberta!</p>");
}

function closeWin() {
  if (myWindow) {
    myWindow.close();
  }
}

let height = window.screen.availHeight;
let width = window.screen.availWidth;

document.write("Altura do navegador: " + height + "px<br>");
document.write("Largura do navegador: " + width + "px<br>");

// window.setTimeout(() => {
//   document.write("Olá mundo!<br>");
// }, 10000);

// let i = 10;

// let j = window.setInterval(() => {
//   document.write(i + "<br>")
//   i--
//   if (i === 0) {
//     clearInterval(j);
//     document.write("Contagem finalizada!<br>");
//   }
// }, 2000);

function redirectTo(url) {
  window.location.href = url;
}
