function Somar () {
    let n1 = document.getElementById("numero1").value
    let n2 = document.getElementById("numero2").value
    let n3 = document.getElementById("numero3").value
    let n4 = document.getElementById("numero4").value
    let n5 = document.getElementById("numero5").value
    let total1 = n1*2
    let total2 = n2*2
    let total3 = n3*2
    let total4 = n4*2
    let total5 =  n5*2
    document.getElementById("resposta").innerHTML = (total1) + " " + (total2) + " " + (total3) + " " + (total4) + " " + (total5) 
    }