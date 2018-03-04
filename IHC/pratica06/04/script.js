const form = document.querySelector('#search-form');
const inputKeyword = document.querySelector('#search-keyword');
const showResult = document.querySelector('#result');
const operation = prompt(`
    Which one operation do you need ?
    1- Rectangle's area. (Insira 2 numeros.)
    2- Triangle's area. (Insira 2 numeros.)
    3- Circle's area. (Insira 1 numero.)
    4- Trapezio's area. (Insira 3 numeros.)
    Ex: Selecione 4. Depois insira na página 3 numeros separados por virgulas: 2(Base maior), 3(Base menor), 4(Altura).
    O resultado aparecerá na própria página.
`);

let htmlContent;
let keyword;
let count = [];
let result;

form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    count = [];
    showResult.innerHTML = '';
    keyword = inputKeyword.value;
    
    count = keyword.split(/(?:,| )+/).map(Number);  
    makeCalc();
});

function makeCalc() {
    if (operation) {
        let math = 0;
        switch (operation) {
            case '1':
                math = count[0] * count[1];
                result = `Area do retangulo: ${math}`;
                break;
            case '2':
                math = (count[0] * count[1]) / 2;
                result = `Area do triangulo: ${math}`;
                break;
            case '3':
                math = 3.14 * (Math.pow(count[0], 2));
                result = `Area do circulo: ${math}`;
                break;
            case '4':
                math = [(count[0] + count[1]) * count[2]] / 2;
                result = `Area do trapezio: ${math}`;
                break;
            default:
                result = "Invalid operation number";
        }
    } else {
        result = "Invalid operation number";
    }

    htmlContent = result;
    showResult.insertAdjacentHTML('afterbegin', htmlContent);
}