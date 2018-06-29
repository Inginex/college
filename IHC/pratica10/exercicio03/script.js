const ths = document.querySelectorAll("th");

ths.forEach((th) => {
    th.addEventListener("mouseover", function(){
        // SELECT DISCIPLINA
        if (th.id == 0) {
            const colW = document.getElementById("web")
            const colL = document.getElementById("logica")
            colW.className = "selected";
            colL.className = "selected";
            return
        }
        // SELECT ALL COLUMNS
        const cols = document.querySelectorAll("tr td:nth-child("+th.id+")")
        cols.forEach((col) => {
            if (col.id === "web" || col.id === "logica") { return }
            col.className = "selected"
        })
    })
    th.addEventListener("mouseout", function(){
        const cols = document.querySelectorAll("tr td.selected")
        cols.forEach((col) => {
            col.className = ""
        })
    })
})