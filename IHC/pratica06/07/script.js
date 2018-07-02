const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');

let htmlContent;
let keyword;
let result;
let matx = [];
let maty = [];
let bMatriz;

form.addEventListener('submit', function(e) {

    e.preventDefault();
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    bMatriz = createMatriz() ? makeCalc() : false;
    htmlContent = result;
    showResult.insertAdjacentHTML('afterbegin', htmlContent);
});

function makeCalc(){
    result = `MatrizX: ${matx[0] + matx[1]} - MatrizY: ${maty[0] + maty[1]}`;
}

function createMatriz(){
    let matrizTemp = [];
    
    matrizTemp = keyword.split(/(?:,| )+/).map(Number);
    if (matrizTemp.length == 4){
        [matx[0], matx[1]] = [matrizTemp[0], matrizTemp[1]];
        [maty[0], maty[1]] = [matrizTemp[2], matrizTemp[3]];
        return true;
    } else {
        result = "Invalid amount of numbers";
        return false;
    }
}   