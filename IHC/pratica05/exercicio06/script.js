function listar() {
    var i, vetor = document.getElementsByName("cidade");
    for (i = 0; vetor.length; i++)
        document.getElementById("resposta").innerHTML += "Valor: " + vetor[i].value + ", " + "Tag HTML: " + vetor[i].tagName + ", " +"Tamanho visível: "+ vetor[i].size + ", " +"Número máximo de caracteres do string informado: " + vetor[i].maxLength + ", " +"Placeholder: " + vetor[i].placeholder + "<br>";
}