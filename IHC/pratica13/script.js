const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const form = document.querySelector("form");
const err = document.getElementById("error")

function validaCampos(campo){
    let value = campo.value;
    err.style.display = "block";
    return (
        (value === "") ? `${campo.id} está vazio.` :
        (value.length < 4) ? `${campo.id} é muito pequeno` : null
    )
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    if (validaCampos(nome) != null){
        err.innerHTML = `<p>${validaCampos(nome)}</p>`
        return
    }
    if (validaCampos(email) != null) {
        err.innerHTML = `<p>${validaCampos(email)}</p>`
        return
    }
    if (validaCampos(mensagem) != null) {
        err.innerHTML = `<p>${validaCampos(mensagem)}</p>`
        return
    }
    alert("Mensagem enviada");
})