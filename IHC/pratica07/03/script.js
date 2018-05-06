let aluno = new Object();
aluno.curso = {};

const body = document.querySelector("#aluno-info");
const app = document.createElement("div");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => { 
    input.addEventListener("blur", () => {
        if (input.value === "") { 
            input.insertAdjacentHTML("beforebegin", `<p class="warning-message"> Field is required. </p>`);
            const messages = document.querySelectorAll(".warning-message");
            setTimeout(()=>{
                
                messages.forEach((message) => { 
                    message.style.display = "hidden";
                })
            }, 200)
            console.log("blur on");
        }
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    aluno.nome = form["aluno-nome"].value;
    aluno.telefone = form["aluno-telefone"].value
    aluno.matricula = form["aluno-matricula"].value
    aluno.curso.nome = form["curso-nome"].value;
    aluno.curso.campus = form["curso-campus"].value
    aluno.curso.turno = form["curso-turno"].value

    let content = `
    <h1>${aluno.nome}</h1>
    <p>Telefone: ${aluno.telefone}<br> Matricula: ${aluno.matricula}</p>
    <h2>${aluno.curso.nome}</h2>
    <ul>
        <li>Campus: ${aluno.curso.campus}</li>
        <li>Turno: ${aluno.curso.turno}</li>
    </ul>
    `;

    body.insertAdjacentHTML('beforebegin',content);
})
