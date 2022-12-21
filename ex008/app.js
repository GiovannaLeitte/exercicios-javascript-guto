function Calcular (){
    let raio = document.getElementById('raio').value 
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    document.getElementById('resposta').innerHTML = `Area: ${area}, Perimetro: ${perimetro}`;
  }