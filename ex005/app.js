function Somar () {
    let n1 = document.getElementById("numero1").value
    let n2 = document.getElementById("numero2").value
    let n3 = document.getElementById("numero3").value
    let n4 = document.getElementById("numero4").value
    let n5 = document.getElementById("numero5").value
    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat (n5))/ 5
    document.getElementById("resposta").innerHTML = media
    }