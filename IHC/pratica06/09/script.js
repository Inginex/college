const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');

let htmlContent;
let keyword;
let result;
let matrizTemp = [];

form.addEventListener('submit', function(e) {

    e.preventDefault();
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    matrizTemp = keyword.split(/(?:,| )+/);
    convertTemp();
    htmlContent = result;
    showResult.insertAdjacentHTML('afterbegin', htmlContent);
});

function convertTemp(){
    // C = (5 / 9) * ( F – 32).
    let calc;
    if (matrizTemp){
        let num = matrizTemp[0];
        calc = (5 / 9) * (num - 32);
        result = `Converted to Celcius => ${Math.floor(calc)}ºC`;
    } else {
        result = "Invalid number";
    }
    
}
