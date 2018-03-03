const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');

let htmlContent;
let keyword;
let result;
let count = [];

form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    count = [];
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    count = keyword.split(/(?:,| )+/);  
    makeCalc();

});

function makeCalc(){
    if(count.length == 5) {
        count.forEach(function(n, i){
            count[i] = n - ((n * 10) / 100);
        });
        result = `Numbers with 10% discount: ${count}`;
    } else {
        result = 'Invalid numbers. > 4 && < 6';
    }

    htmlContent = result;
    showResult.insertAdjacentHTML('afterbegin', htmlContent);
}