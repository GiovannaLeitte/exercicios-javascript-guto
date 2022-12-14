function calcularIdade() {
    var idade = parseInt(document.getElementById("idade").value);
    var resposta = document.getElementById ('resposta');

    if (idade >= 18) {
resposta.innerHTML = 'Usuario maior de idade';
    } else {
        resposta.innerHTML = 'Usuario menor de idade';
    }
}