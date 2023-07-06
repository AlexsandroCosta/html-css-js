document.getElementById("formul").addEventListener('submit', function(event){
    event.preventDefault()

    lista = document.getElementById("lista")
    num = parseInt(document.getElementById("num").value)
    
    lista.innerHTML = ""
    lista.size = "10"

    for(let i=1; i<=10; i++){
        x = document.createElement("option")
        x.text = `${num} x ${i} = ${num*i}`
        lista.appendChild(x)
    }
})