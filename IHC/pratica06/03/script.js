const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');

let htmlContent;
let keyword;
let nums = [];
let calc = 0;

form.addEventListener('submit', function(e) {  
    e.preventDefault();
    nums = [];
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    nums = keyword.split(/(?:,| )+/);  
    makeCalc();
});

function makeCalc() {
    nums.map(Number);
    nums.forEach(function(n){ if(n <= 0 || n === 0){ 
        alert("Numero Invalido")
        return;
    }});

    calc = Math.round(Math.log(nums[0])/Math.log(nums[1]));
    showResult.insertAdjacentHTML('afterbegin', calc);
}