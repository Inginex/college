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
    
    matrizTemp = keyword.split(/(?:,| )+/).map(Number);
    getAverage();
    htmlContent = result;
    showResult.insertAdjacentHTML('afterbegin', htmlContent);
});

function getAverage(){
    let calc;
    if (matrizTemp.length !== 0){
        [md1, md2, md3] = matrizTemp
        calc = (md1 + md2 + md3) / matrizTemp.length;
        result = `Average => ${calc}`;
    } else {
        result = "Invalid numbers";
    }
    
}
