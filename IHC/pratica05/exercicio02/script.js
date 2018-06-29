function somar() {
    var n1 = document.getElementById("primeiroNumero").value;
    var n2 = document.getElementById("segundoNumero").value;
    var soma = parseInt(n1) + parseInt(n2);
    document.getElementById("soma").innerHTML = soma;
}