const container = document.getElementById("container");
const rulesToSuccess = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

function test() {
  for (rule of rulesToSuccess) {
    let caixasElements = [];

    for (caixa of rule) {
      caixasElements.push(document.getElementById(`caixa${caixa}`).innerHTML);
    }

    if (caixasElements.join("") === "OOO") {
      alert("(O) GANHOU");
      limpa();
    } else if (caixasElements.join("") === "XXX") {
      alert("(X) GANHOU");
      limpa();
    }
  }
}

function limpa() {
  const caixas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  caixas.map(
    (caixa) => (document.getElementById(`caixa${caixa}`).innerHTML = "")
  );
}

letra = "X";
function joga(element) {
  click = element.innerHTML;
  if (click) {
    alert("Opa, este quadrado já foi escolhido!");
  } else {
    element.innerHTML = letra;
    if (letra == "X") {
      letra = "O";
    } else {
      letra = "X";
    }

    test();
  }
}
