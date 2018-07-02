const nome = document.querySelector('input[name="nome"]');
const telefone = document.querySelector('input[name="telefone"]');
const cnpj = document.querySelector('input[name="cnpj"]');
const form = document.querySelector("form");
const result = document.getElementById("result");
const ul = document.createElement("ul");

result.appendChild(ul);

const database = new Array(); 

function createObj(nm, tf, cj) {
    let obj = new Object;
    // TODO: Check fields before return obj
    obj.nome = nm;
    obj.telefone = tf;
    obj.cnpj = cj;

    return obj;
}

function addToDB(obj) {
    const dbl = database.length;
    // TODO: Check obj before push it
    database.push(obj);

    if (dbl >= database.length) {
        // Obj was not pushed
        console.log(database.length);
        return "addToDB Error: Object was not pushed";
    }

    updateDOM(obj);
    return null;
}

function updateDOM(obj) { 
    const li = document.createElement("li");
    li.innerHTML = `<p>Nome: ${obj.nome}, Telefone: ${obj.telefone}, CNPJ: ${obj.cnpj}</p>`; 
    ul.appendChild(li)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Make obj of data
    obj = createObj(nome.value, telefone.value, cnpj.value)
    if (obj === null) {
        // Object was not created
        console.log("createObj Error: Object was not created");
        return;
    }

    // Insert data into database
    const result = addToDB(obj);
    if (result != null) {
        console.log(result);
    }
});