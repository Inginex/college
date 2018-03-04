const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');

let htmlContent;
let keyword;
let result;

form.addEventListener('submit', function(e) {

    e.preventDefault();
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    matrizTemp = keyword.split(/(?:,| )+/);
    makeCalc();
    htmlContent = result;
    showResult.insertAdjacentHTML('afterbegin', htmlContent);
});

function makeCalc(){
    // (4 * 3,14 * n^3) / 3
    if (matrizTemp){
        let num = matrizTemp[0];

        result = (4 * 3.14 * Math.pow(num, 3)) / 3;
    } else {
        result = "Invalid number";
    }
    
}
