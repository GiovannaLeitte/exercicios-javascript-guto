function calcularPeriodo() {
    var periodo = document.getElementById("periodo").value;
    var resposta = document.getElementById("resposta");
  
    if (periodo === "V") {
      resposta.innerHTML = "Boa tarde!";
    } else if (periodo === "M") {
      resposta.innerHTML = "Bom dia!";
    } else if (periodo === "N") {
      resposta.innerHTML = "Boa noite!";
    } else {
      resposta.innerHTML = "Valor incorreto";
    }
  }