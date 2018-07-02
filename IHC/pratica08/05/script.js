const app = document.getElementById("app");
const ul = document.createElement("ul");
let images = new Array();

// PEGA IMAGENS DA API
function getImages() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://thecatapi.com/api/images/get?format=xml&results_per_page=20");
    xhr.send();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const receive = xhr.responseXML;
            const list = receive.getElementsByTagName("images")[0];
            for(var i = 0; i < 20; i++) {
                const node = list.getElementsByTagName("url")[i];
                images.push(node.childNodes[0].nodeValue)
            }
            updateDOM();
        } else if (xhr.readyState === 4 && xhr.status === 500) {
            console.log("Something went wrong.");
        }
    });
}

// INSERI IMAGENS NO DOM
function updateDOM() {
    ul.innerHTML = "Carregando novas images...";
    let output = "";
    let i = 0;
    images.forEach(url => {
        i++;
        output += ` <li>
                        <p><img src="${url}" alt="${url}" width="230px"></p>
                        <span>
                        <b>Image ${i < 10 ? "0"+i : i}</b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </li>`;
    });
    ul.innerHTML = output;

    setEventListener();
}

// ADICIONA EVENT LISTENER AS LI'S
function setEventListener() {
    const lis = document.querySelectorAll("li");
    lis.forEach((li) => {
        li.addEventListener("click", function() {
            const span = this.children[1];
            if (span.style.display === "flex") {
                span.style.display = "none";
            } else {
                span.style.display = "flex";
            }
        })
    })
}

// CRIA ELEMENTO UL E CARREGA NOVAS IMAGENS
app.appendChild(ul);
getImages();

