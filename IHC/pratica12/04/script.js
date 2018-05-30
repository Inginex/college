function validarNome() {
    var msgNome = document.getElementById("msg_nome");
    //Verificação de preenchimento de nome.
    if (document.getElementById("nome").value == "") {
        msgNome.innerHTML = "Informe o nome!";
        msgNome.className = "erro";
        document.getElementById("btn").disabled = true;
    } else {
        msgNome.innerHTML = "Nome informado!";
        msgNome.className = "ok";
        document.getElementById("btn").disabled = false;
    }
}
function validarEmail() {
    var msgEmail = document.getElementById("msg_email");
    //Verificação de preenchimento de email.
    if (document.getElementById("email").value == "") {
        msgEmail.innerHTML = "Informe o e-mail!";
        msgEmail.className = "erro";
        document.getElementById("btn").disabled = true;
    } else {
        msgEmail.innerHTML = "E-mail informado!";
        msgEmail.className = "ok";
        document.getElementById("btn").disabled = false;
    }
}
function validarMensagem() {
    var msgMensagem = document.getElementById("msg_mensagem");
    //Verificação de preenchimento de email.
    if (document.getElementById("mensagem").value == "") {
        msgMensagem.innerHTML = "Informe a mensagem!";
        msgMensagem.className = "erro";
        document.getElementById("btn").disabled = true;
    } else {
        msgMensagem.innerHTML = "Mensagem informado!";
        msgMensagem.className = "ok";
        document.getElementById("btn").disabled = false;
    }
}
function validar() {
    validarNome();
    validarEmail();
    validarEmail();
}
function limpar() {
    msg_nome.innerHTML = "";
    msg_email.innerHTML = "";
    msg_mensagem.innerHTML = "";
}