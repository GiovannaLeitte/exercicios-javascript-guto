function Mostrar () { 
    let data = document.getElementById('data').value
    let newData = new Date(data);
    document.getElementById('resposta').innerHTML = 'Dia: {newData.getDate ()}, Mês: {newData.getMonth ()+1} , Ano: {newData.getFullYear}';
}