
    function mostrar () {
        let nome = document.getElementById("nome").value
        let altura = document.getElementById("altura").value
        let idade = document.getElementById("idade").value
        
        document.getElementById("resposta").innerHTML = "O nome é " + nome + " a altura " + altura + " a idade " + idade       
    }

    function limpar () {
        document.getElementById("nome").value = nome
        document.getElementById("altura").value= altura
        document.getElementById("idade").value = idade

        document.getElementById("resposta").innerHTML = resposta
    }
