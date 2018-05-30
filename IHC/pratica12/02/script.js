function boasVindas() {
    alert("Bem vindo a esta página de cadastro!");
}
function mascaraData(objeto, evento) {
    /* O keyCode não é compatível com todos navegadores.
    1) Keycode 8: backspace.
    2) Key code 46: delete.
    */
    if (evento.keyCode == 8 || evento.keyCode == 46) {
        return true;
    }
    //Key code entre 48 e 57: 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9.
    if (evento.keyCode < 48 || evento.keyCode > 57) {
        alert("Informe apenas números!");
        return false;
    }
    //Impede a inserção de novos caracteres quando o string alcança o tamanho
    //de 10 caracteres.
    if (objeto.value.length == 10) {
        return false;
    }
    if ((objeto.value.length == 2) || (objeto.value.length == 5)) {
        objeto.value = objeto.value + '/';
    }
    return true;
}
function mascaraCPF(CPF) {
    var evt = window.event;
    kcode=evt.keyCode;
    if (kcode == 8) return; // backspace
    if (CPF.value.length == 3) { CPF.value = CPF.value + '.'; }
    if (CPF.value.length == 7) { CPF.value = CPF.value + '.'; }
    if (CPF.value.length == 11) { CPF.value = CPF.value + '-'; }
    if (CPF.value.length > 13) { CPF.value = ""; }
}
function verificarFormulario() {
    var mensagemErro = "";
    if (document.getElementById("login").value == "") {
        mensagemErro = "Informe o login.";
    }
    if (document.getElementById("email").value == "") {
        mensagemErro += "\nInforme o email.";
    }
    if (document.getElementById("datanasc").value == "") {
        mensagemErro += "\nInforme a data de nascimento.";
    }
    if (document.getElementById("cpf").value == "") {
        mensagemErro += "\nInforme o cpf.";
    }
    if (document.getElementById("escolaridade").value == "") {
        mensagemErro += "\nInforme a escolaridade.";
    }
    var opcoesSexo = document.getElementsByName("campoSexo");
    var sexoPreenchido = false;
    for (var i = 0; i < opcoesSexo.length; i++) {
        if (opcoesSexo[i].checked) {
            sexoPreenchido = true;
        }
    }
    if (!sexoPreenchido) {
        mensagemErro += "\nInforme o sexo.";
    }
    if (mensagemErro == "") {
        return true;
    } else {
        alert(mensagemErro);
        return false;
    }
}