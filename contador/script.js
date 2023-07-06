document.getElementById("formul").addEventListener('submit', function(event){
    event.preventDefault()

    let i = parseInt(document.getElementById("inicio").value)
    let f = parseInt(document.getElementById("fim").value)
    let p = parseInt(document.getElementById("passo").value)
    let c = document.getElementById("contagem")

    c.innerHTML = ""

    for(i; i!=f; i+=p){
        c.innerHTML+= `${i} => `
    }

    c.innerHTML += "Fim!"
})