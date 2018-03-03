const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');

let htmlContent;
let keyword;
let count = [];
let calc;

form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    count = [];
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    count = keyword.split(/(?:,| )+/);  
    makeCalc();
});

function makeCalc() {
    calc = parseInt(count[0]);
    count.forEach(function(n){ if(n <= 0){ calc = "Invalid number";} });

    while (count[1] > 1 && typeof(calc) != "string") {
        calc = calc * count[0];
        count[1]--;
    }

    htmlContent = calc;
    showResult.insertAdjacentHTML('afterbegin', htmlContent);
}