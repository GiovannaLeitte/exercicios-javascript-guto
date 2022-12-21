function calcularNumero() {
    var number = parseInt(document.getElementById("number").value);
    var resposta = document.getElementById("resposta");
  
    if (number > 0) {
      resposta.innerHTML = "Numero maior que 0";
    } else if (number < 0 ) {
      resposta.innerHTML = "Numero menor que 0";
    } else {
      resposta.innerHTML = "Numero e 0";
    }
  }