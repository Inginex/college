const fcurso = document.getElementById("form-curso");
const faluno = document.getElementById("form-aluno");
const data = document.getElementById("aluno-info");

let aluno = new Object();
aluno.curso = {};

const forms = document.querySelectorAll("form")

function checkFields(field, value) {
    return (
        (value === "") ? `${field} is empty.` :
        (value < 5) ? `${field} is too short` : null
    )
}

function showMessage(field, message) {
    console.log(message)
}

function callOtherForm(caller) {
    if (caller === "form-curso") {
        faluno.style.display = "block";
        fcurso.style.display = "none";
    } else if (caller === "form-aluno") {
        fcurso.style.display = "block";
        faluno.style.display = "none";
    } else {
        return;
    }
}

function showObj() {
    const dataText = `
        <h2>${aluno.nome}</h2>
        <p>Telefone: ${aluno.telefone}<p>
        <p>Matricula: ${aluno.matricula}<p>
        <br>
        <h2>${aluno.curso.nome}</h2>
        <p>Campus: ${aluno.curso.campus}</p>
        <p>Turno: ${aluno.curso.turno}</p>
    `;

    data.insertAdjacentHTML("afterbegin", dataText);
}

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if(form.id === "form-aluno") {
            nome = form["nome"].value;
            telefone = form["telefone"].value;
            matricula = form["matricula"].value;
            
            // Validate form
            if (checkFields("Nome", nome) !== null) { showMessage(form, checkFields("Nome", nome)); return}
            if (checkFields("Telefone", telefone) !== null) {showMessage(form, checkFields("Telefone", telefone)); return}
            else if (/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/.test("+55"+telefone) === false) { showMessage(form, "Telefone is invalid."); return}
            if (checkFields("Matricula", matricula) !== null) { showMessage(form, checkFields("Matricula", matricula)); return}
            else if (/^[0-9]$/.test(matricula) !== false) { showMessage(form, "Matricula is invalid."); return}

            // Set data
            aluno.nome = nome;
            aluno.telefone = telefone; 
            aluno.matricula = matricula;

            // Call form-curso
            callOtherForm("form-aluno");

        } else if(form.id === "form-curso"){
            nome = form["nome"].value;
            campus = form["campus"].value;
            turno = form["turno"].value;

            // Validate form
            if (checkFields("Nome", nome) !== null) { showMessage(form, checkFields("Nome", nome)); return}
            if (checkFields("Campus", campus) !== null) {showMessage(form, checkFields("Campus", campus)); return}
            if (checkFields("Turno", turno) !== null) { showMessage(form, checkFields("Turno", turno)); return}

            // Set data
            aluno.curso.nome = nome;
            aluno.curso.campus = campus;
            aluno.curso.matricula = matricula;
            console.log(aluno.curso);

            // Show data
            showObj()
        } else {
            return;
        }
    })
})