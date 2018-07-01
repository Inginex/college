class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    setTelefone(numero) {
        this.telefone = numero;
    }
    setCompra(valor) {
        this.valor = valor;
    }
    setMetodos(metodos) {
        this.metodos = metodos;
    }
    getTelefone() {
        return this.telefone;
    }
    getCompra() {
        return this.valor;
    }
    getMetodos() {
        return this.metodos;
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, cpf, metodos) {
        super(nome);
        this.cpf = cpf;
        this.metodos = metodos;
    }

    getNome() {
        return this.nome;
    }
    getMetodos() {
        return this.metodos;
    }
    getTelefone() {
        return this.telefone;
    }
    getValor() {
        return this.valor;
    }
    getUID() {
        return this.cpf;
    }
}

class PessoaJuridica extends Pessoa {
    constructor(nome, cnpj, metodos) {
        super(nome);
        this.cnpj = cnpj;
        this.metodos = metodos;
    }

    getNome() {
        return this.nome;
    }
    getMetodos() {
        return this.metodos;
    }
    getTelefone() {
        return this.telefone;
    }
    getValor() {
        return this.valor;
    }
    getUID() {
        return this.cnpj;
    }
}

class PessoaEstrangeira extends Pessoa {
    constructor(nome, passaporte, metodos) {
        super(nome);
        this.passaporte = passaporte;
        this.metodos = metodos;
    }

    getNome() {
        return this.nome;
    }
    getMetodos() {
        return this.metodos;
    }
    getTelefone() {
        return this.telefone;
    }
    getValor() {
        return this.valor;
    }
    getUID() {
        return this.passaporte;
    }
}

let pessoas = [];

function Cadastrar(pessoa) {
    pessoas.push(pessoa)
    return true
}

function Delete(id) {
    console.log("Excluido ID: ", id)
    pessoas.splice(id, 1);
    const btID = document.getElementById(id)
    btID.parentElement.parentElement.remove()
}

function QueryName(nome) {
    pessoas.forEach((pessoa) => {
        if (pessoa.nome == nome) {
            return pessoa
        }
        return null
    })
}

function QueryCPF(cpf) {
    pessoas.forEach((pessoa) => {
        if (pessoa.cpf == cpf) {
            return pessoa
        }
    })
    return null
}

function QueryCNPJ(cnpj) {
    pessoas.forEach((pessoa) => {
        if (pessoa.cnpj == cnpj) {
            return pessoa
        }
    })
    return null
}

function QueryPass(passaporte) {
    pessoas.forEach((pessoa) => {
        if (pessoa.passaporte == passaporte) {
            return pessoa
        }
    })
    return null
}
/* 
 ########## FINAL CLASSE PESSOA ###########
*/

const btn = document.getElementById("btn");
const buscar = document.getElementById("buscar");
const calcular = document.getElementById("calcular");

const nome = document.querySelector("input[name='nome']")
const telefone = document.querySelector("input[name='telefone']")
const valor = document.querySelector("input[name='valor']")
const cpf = document.querySelector("input[name='cpf']")
const cnpj = document.querySelector("input[name='cnpj']")
const pass = document.querySelector("input[name='pass']")

const tableContent = document.querySelector("table")

let countPessoas = 0;

function cadastraCPF() {
    const pf = new PessoaFisica(nome.value, cpf.value)
    pf.setTelefone(telefone.value)
    pf.setCompra(valor.value)
    Cadastrar(pf)
    atualizaDOM(pf)
    console.log("DB Updated: \n", pessoas) 
}

function cadastraCNPJ() {
    const pj = new PessoaJuridica(nome.value, cnpj.value)
    pj.setTelefone(telefone.value)
    pj.setCompra(valor.value)
    Cadastrar(pj)
    atualizaDOM(pj)
    console.log("DB Updated: \n", pessoas)
}

function cadastraPass() {
    const pe = new PessoaEstrangeira(nome.value, pass.value)
    pe.setTelefone(telefone.value)
    pe.setCompra(valor.value)
    Cadastrar(pe)
    atualizaDOM(pe)
    console.log("DB Updated: \n", pessoas)
}

function atualizaDOM(pessoa) {
    let dados = `<tr class="pessoa">
        <td>${pessoa.getNome()}</td>
        <td>${pessoa.getTelefone()}</td>
        <td class="valor">${pessoa.getValor()}</td>
        <td class="uid">${pessoa.getUID()}</td>
        <td><button id="${countPessoas}" onclick="Delete(${countPessoas})">Excluir</button></td>
        </tr>`;
    tableContent.insertAdjacentHTML("beforeend", dados)
    countPessoas++;
}

btn.onclick = function () {
    if(cpf.value != ""){
        cadastraCPF()
        return
    }
    if(cnpj.value != ""){
        cadastraCNPJ()
        return
    }
    if(pass.value != ""){
        cadastraPass()
        return
    }
}

buscar.onclick = function(){
    const inpBuscar = document.getElementById("pesquisa").value;
    const ps = document.querySelectorAll("tr.pessoa");
    if (inpBuscar == "") {
        ps.forEach((p) => {
            p.style.display = "table-row";
        })
        return
    } 

    ps.forEach((p) => {
        // SELECIONA NOME
        if (p.firstElementChild.textContent === inpBuscar) {
            p.style.display = "table-row";
            return
        }
        // SELECIONA IDENTIFICADOR
        const uid = p.getElementsByClassName("uid")[0];
        if (uid.textContent === inpBuscar){
            uid.style.display = "table-row";
            return
        }
        p.style.display = "none";
    })
}

calcular.onclick = function() {
    let tot = 0;
    const calculo = document.getElementById("calculo");
    const ps = document.querySelectorAll("tr.pessoa td.valor");
    ps.forEach((p) => {
        val = parseInt(p.textContent)
        tot += val;
    })
    calculo.innerText = "Total de vendas: "+tot+"R$";
}
