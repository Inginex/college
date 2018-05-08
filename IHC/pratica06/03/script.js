const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');

let htmlContent;
let keyword;
let count = [];
let calc = 0;

form.addEventListener('submit', function(e) {  
    e.preventDefault();
    count = [];
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    count = keyword.split(/(?:,| )+/);  
    makeCalc();
});

function makeCalc() {
    count.map(Number);
    count.forEach(function(n){ if(n <= 0){ 
        calc = "Invalido";
        return;
    }});

    if(calc != 0) {
        showResult.insertAdjacentHTML('afterbegin', "Número Inválido.");
        return;
    }
    calc = Math.round( Math.log(count[0])/Math.log(count[1]));
    showResult.insertAdjacentHTML('afterbegin', calc);
}