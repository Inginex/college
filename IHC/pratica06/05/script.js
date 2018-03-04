const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');

let htmlContent;
let keyword;
let count = [];

form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    count = [];
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    count = keyword.split(/(?:,| )+/).map(Number);  
    makeCalc();
});

function makeCalc() {
    let calc = 0;
    let min = Math.min(count[0], count[1]), max = Math.max(count[0], count[1]);
    
    while(max >= min) {
        calc = calc + min;
        min++;
    }

    htmlContent = `Total is: ${calc}`;
    showResult.insertAdjacentHTML('afterbegin', htmlContent);
}