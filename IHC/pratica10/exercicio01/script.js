const trf = document.querySelectorAll("tr td:first-child");
const trl = document.querySelectorAll("tr td:last-child");
const trn = document.querySelectorAll("tr td:nth-child(5)");
const mensagem = document.getElementById("mensagem");

trf.forEach((td) => {
    td.onclick = function() {
        mensagem.style.display = "block";
        mensagem.innerHTML = "<p>Nome do Aluno!</p>"
    }
})
trn.forEach((td) => {
    td.onclick = function() {
        mensagem.style.display = "block";
        mensagem.innerHTML = "<p>Nota total do aluno!</p>"
    }
})
trl.forEach((td) => {
    td.onclick = function() {
        mensagem.style.display = "block";
        mensagem.innerHTML = "<p>Quantidade de faltas!</p>"
    }
})

