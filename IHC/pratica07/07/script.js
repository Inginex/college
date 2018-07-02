const marca = document.querySelector('input[name="marca"]');
const ano = document.querySelector('input[name="ano"]');
const preco = document.querySelector('input[name="preco"]');
const form = document.querySelector("form");
const result = document.getElementById("result");
const ul = document.createElement("ul");

result.appendChild(ul);

const database = new Array(); 

function createObj(mc, an, pc) {
    let obj = new Object;
    // TODO: Check fields before return obj
    obj.marca = mc;
    obj.ano = an;
    obj.preco = pc;

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
    li.innerHTML = `<p>marca: ${obj.marca}, ano: ${obj.ano}, preco: ${obj.preco}</p>`; 
    ul.appendChild(li)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Make obj of data
    obj = createObj(marca.value, ano.value, preco.value)
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