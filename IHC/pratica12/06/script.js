let checkN, checkE, checkP;

function validarNome() {
    var msgNome = document.getElementById("msg_nome");
    if (document.getElementById("nome").value == "") {
        msgNome.innerHTML = "Informe seu login!";
        msgNome.className = "erro";
        checkN = false;
    } else {
        msgNome.innerHTML = "Login informado!";
        msgNome.className = "ok";
        checkN = true;
        validarCampos();
    }
}
function validarEmail() {
    var msgEmail = document.getElementById("msg_email");
    if (document.getElementById("email").value == "") {
        msgEmail.innerHTML = "Informe o e-mail!";
        msgEmail.className = "erro";
        checkE = false;
    } else {
        msgEmail.innerHTML = "E-mail informado!";
        msgEmail.className = "ok";
        checkE = true;
        validarCampos();
    }
}
function validarPassword() {
    var msgMensagem = document.getElementById("msg_pass");
    if (document.getElementById("password").value == "") {
        msgMensagem.innerHTML = "Informe a senha!";
        msgMensagem.className = "erro";
        checkP = false;
    } else if(document.getElementById("password").value !== document.getElementById("password2").value){
        msgMensagem.innerHTML = "Senhas não conferem!";
        msgMensagem.className = "erro";
        checkP = false;
    } else {
        msgMensagem.innerHTML = "Senha informada!";
        msgMensagem.className = "ok";
        checkP = true;
        validarCampos();
    }
}
function validarCidade() {
    var msgEmail = document.getElementById("msg_cidade");
    if (document.getElementById("cidade").value == "") {
        msgEmail.innerHTML = "Informe sua cidade!";
        msgEmail.className = "erro";
        checkC = false;
    } else {
        msgEmail.innerHTML = "Cidade informada!";
        msgEmail.className = "ok";
        checkC = true;
        validarCampos();
    }
}
function validarSite() {
    var msgEmail = document.getElementById("msg_site");
    if (document.getElementById("site").value == "" || document.getElementById("site").value == "http://" || document.getElementById("site").value == "https://") {
        msgEmail.innerHTML = "Informe o site!";
        msgEmail.className = "erro";
        checkS = false;
    } else {
        msgEmail.innerHTML = "Site informado!";
        msgEmail.className = "ok";
        checkS = true;
        validarCampos();
    }
}
function validarCampos() {
    if (checkN && checkE && checkP && checkC && checkS) {document.getElementById("btn").disabled = false;}
}
function validar() {
    validarNome();
    validarEmail();
    validarPassword();
}
function limpar() {
    msg_nome.innerHTML = "";
    msg_email.innerHTML = "";
    msg_pass.innerHTML = "";
}
window.onload = ()=>(document.getElementById("btn").disabled = true)