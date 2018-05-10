// Initial Values
const app = document.getElementById("app");
const ul = document.createElement("ul");
const call = document.getElementById("callback");
const btn = document.getElementById("start");
const rst = document.getElementById("reset")
const res = document.getElementById("result");
const options = 100;
let needToReset = false;
let selected = new Array();

// Initialize game
(function initializeGame() {
    for (var i = 0; i < options; i++) {
        ul.insertAdjacentHTML("beforeend", `<li>${i + 1}</li>`)
    }
    app.appendChild(ul);
})();

// Set event listener for every li
(function setEventListener() {
    const lis = document.querySelectorAll("li");
    lis.forEach((li) => {
        li.addEventListener("click", function (e) {
            if (selected.length > 5){return;}
            if (selected.length == 5) {
                callRaffle();
                return;
            }
            selected.includes(parseInt(this.innerText)) ? null : selected.push(parseInt(this.innerText));
            this.className = "selected";
            return;
        })
    })
})();

function callRaffle() {
    call.style.display = "flex";
    btn.addEventListener("click", () => {
        shuffle();
    })
}
function shuffle() {
    if(needToReset){return;}
    const pick = new Array();
    selected.forEach(function (value, n) {
        pick[n] = pickNumber(pick);
    });
    // Disable result button
    btn.disabled = true;
    // Check if users won
    checkWinner(pick);
}
function pickNumber(pick) {
    const picked = randomIntFromInterval(1, 100);
    return pick.includes(picked) ? pickNumber(pick) : picked;
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function checkWinner(pick) {
    let matchs = "";
    let count = 0;
    selected.forEach(n => {
        pick.includes(n) ? count++ : null;
    });
    switch (count) {
        case 3:
            matchs = "50%";
            break;
        case 4:
            matchs = "75%";
            break;
        case 5:
            matchs = "100%";
            break;
        default:
            matchs = "0%";
    }
    showResult(matchs, pick);
}
function showResult(matchs, pick) {
    res.style.display = "flex";
    res.insertAdjacentHTML("afterbegin", `<h1>Você ganhou ${matchs} da premiação.</h1><h3>Resultado:</h3><p>Seus numeros: ${selected}</p><p>Numeros Sorteados: ${pick}</p>`);
    // Show reset option
    rst.style.display = "block";
    rst.addEventListener("click", ()=>{
        resetGame();
    })
    needToReset = true;
}

function resetGame(){
    selected = [];
    const lis = document.querySelectorAll("li");
    lis.forEach((li) => {
        li.className = "";
    });
    res.innerHTML = "";
    res.style.display = "none";
    rst.style.display = "none";
    btn.disabled = false;
    call.style.display = "none";
    needToReset = false;
}