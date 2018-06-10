const btns = document.querySelectorAll(".botao")

btns.forEach((btn) => {
    btn.addEventListener("click", function() {
        var article = btn.parentElement
        console.log(article.innerText)
    })
})