const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');
const showText = 'Your number is: ';

let htmlContent;
let keyword;

let count = [];

form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    count = [];
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    while (keyword > 0){
        if (keyword % 2 == 0)
            count.push(keyword);

        keyword--;
    }

    htmlContent = count;

    showResult.insertAdjacentHTML('afterbegin', htmlContent);
});