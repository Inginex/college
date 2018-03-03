const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');
const showText = 'Your number is: ';

let htmlContent;
let keyword;

form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    showResult.innerHTML = '';
    keyword = inputKeyword.value;

    htmlContent = keyword % 2 == 0 ? `${showText} Even` : `${showText} Odd`;

    showResult.insertAdjacentHTML('afterbegin', htmlContent);
});