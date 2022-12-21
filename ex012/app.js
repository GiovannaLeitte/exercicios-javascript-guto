function tabuada() {
    var resposta = document.getElementById("resposta");
    var tabuada = "";
  
    for (var count = 1; count <= 10; count++)
      tabuada += 8 + " x " + count + " = " + 8 * count + "<br />";
      resposta.innerHTML = tabuada;
  }