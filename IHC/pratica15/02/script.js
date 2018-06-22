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
    pessoas = pessoas.filter(pessoa => pessoa !== id)
}

function QueryName(nome) {
    pessoas.forEach((pessoa) => {
        if (pessoa.nome == nome) {
            return pessoa
        }
    })
}

function QueryCPF(cpf) {
    pessoas.forEach((pessoa) => {
        if (pessoa.cpf == cpf) {
            return pessoa
        }
    })
}

function QueryCNPJ(cnpj) {
    pessoas.forEach((pessoa) => {
        if (pessoa.cnpj == cnpj) {
            return pessoa
        }
    })
}

function QueryPass(passaporte) {
    pessoas.forEach((pessoa) => {
        if (pessoa.passaporte == passaporte) {
            return pessoa
        }
    })
}
/* 
 ########## FINAL CLASSE PESSOA ###########
*/

const btnCPF = document.getElementById("btn-cpf");
const btnCNPJ = document.getElementById("btn-cnpj");
const btnPass = document.getElementById("btn-pass");

const nome = document.querySelector("input[name='nome']")
const telefone = document.querySelector("input[name='telefone']")
const valor = document.querySelector("input[name='valor']")
const cpf = document.querySelector("input[name='cpf']")
const cnpj = document.querySelector("input[name='cnpj']")
const pass = document.querySelector("input[name='pass']")

const tableContent = document.querySelector("table")

function VerificaCampos() {
    return true
}

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
    let dados = "";
    dados = `<tr>
        <td>${pessoa.getNome()}</td>
        <td>${pessoa.getTelefone()}</td>
        <td>${pessoa.getValor()}</td>
        <td>${pessoa.getUID()}</td>
        </tr>`;
    tableContent.insertAdjacentHTML("beforeend", dados)
}

btnCPF.onclick = function () {
    if (!VerificaCampos()) {
        // a verificação falhou
        console.log("Validação falhou.")
    }
    cadastraCPF()
}

btnCNPJ.onclick = function () {
    if (!VerificaCampos()) {
        // a verificação falhou
        console.log("Validação falhou.")
    }
    cadastraCNPJ()
}

btnPass.onclick = function () {
    if (!VerificaCampos()) {
        // a verificação falhou
        console.log("Validação falhou.")
    }
    cadastraPass()
}

