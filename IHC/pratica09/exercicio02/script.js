const data = document.querySelector('input[name="input"]')
const btn = document.querySelector("button")
const out = document.querySelector("#result")

btn.onclick = ()=>{
    out.innerHTML = "";
    var value = data.value
    var result = "";
    for (i=0; i<value.length; i++) {
        result += value.charCodeAt(i).toString(16);
    }
    out.insertAdjacentHTML("afterbegin", `<p>NORMAL ${value} to HEX ${result}</p>`)
    var result = "";
    for (i=0; i<value.length; i++) {
        result += value.charCodeAt(i).toString(8);
    }
    out.insertAdjacentHTML("afterbegin", `<p>NORMAL ${value} to OCTAL ${result}</p>`)
    var result = "";
    for (i=0; i<value.length; i++) {
        result += value.charCodeAt(i).toString(2);
    }
    out.insertAdjacentHTML("afterbegin", `<p>NORMAL ${value} to BINARIO ${result}</p>`)

}
