const trf = document.querySelectorAll("tr td:first-child");
const trl = document.querySelectorAll("tr td:last-child");
const mensagem = document.getElementById("mensagem");

trf.forEach((td) => {
    td.title = "Nome do Aluno"
    td.onclick = function() {
        mensagem.style.display = "block";
        mensagem.innerHTML = "<p>Nome do Aluno!</p>"
    }
})
trl.forEach((td) => {
    td.title = "Nota total do Aluno";
    td.onclick = function() {
        mensagem.style.display = "block";
        mensagem.innerHTML = "<p>Nota total do aluno!</p>"
    }
})

