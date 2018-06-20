const btns = document.querySelectorAll(".botao")

function GetInfo(local) {
    switch (local) {
        case "Rio de Janeiro":
            return info = {
                destino: local,
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Parque Nacional da Chapada dos Veadeiros":
            return info = {
                header: "Pacote possui: 4 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Termas del Arapey":
            return info = {
                header: "Pacote possui: 3 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "570",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Parque Estadual do Jalapão":
            return info = {
                header: "Pacote possui: 3 diarias, café da manhã e quarto solteiro.",
                opcoes: {
                    0: "820",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Punta del Leste":
            return info = {
                header: "Pacote possui: 4 diarias e quarto casal.",
                opcoes: {
                    0: "2100",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Termas del Dayman":
            return info = {
                header: "Pacote possui: 6 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "980",
                    1: ["2x 490", "4x 245", "12x 81,60"]
                }
            }
        case "Bento Gonçalves":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Montevideo":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Lagoa do Peri":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Parque Nacional de Aparados da Serra":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Colonia del Sacramento":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "São Paulo":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Serra do Rio do Rastro":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Buenos Aires":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Curitiba":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Pomerode":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Bonito":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        case "Foz do Iguaçu":
            return info = {
                header: "Pacote possui: 5 diarias, café da manhã e quarto casal.",
                opcoes: {
                    0: "1920",
                    1: ["2x 960", "4x 480", "12x 160"]
                }
            }
        default:
            // Destino não existe!
            return false;
    }
}

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault()
        // SELECIONA ELEMENTO ARTICLE DO BOTÃO
        const article = btn.parentElement;
        // VERIFICA SE CONTENT JA FOI CRIADO
        if (article.lastChild.style !== undefined) {
            if (article.lastChild.style.display === "block") {
                article.lastChild.style.display = "none";
            } else {
                article.lastChild.style.display = "block";
            }
        } else {
            // VERIFICA SE EXISTE INFORMAÇÃO SOBRE ARTICLE
            info = GetInfo(article.innerText.split(",")[0])
            if (info !== false) {
                // CRIA UMA NOVA DIV COM AS INFORMAÇÕES RECEBIDAS
                const content = document.createElement("div")
                content.innerHTML = `
                <p>${info.header}</p>
                <span>
                    <p>A vista: ${info.opcoes[0]}R$ + <b>10%</b> de Desconto.</p>
                    <p>ou Parcelado: ${info.opcoes[1]}
                </span>`
                article.insertAdjacentElement("beforeend", content)
                content.style.display = "block";
            }
        }
    })
})
