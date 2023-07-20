document.getElementById("formul").addEventListener("submit", function(event){
    event.preventDefault()
    
    let res = document.getElementById("res")
    let nome = document.getElementById("nome").value
    let alt = parseFloat(document.getElementById("alt").value)
    let peso = parseFloat(document.getElementById("peso").value)
    let imc = (peso/Math.pow(alt,2)).toFixed(1)

    res.innerHTML = `${nome} seu IMC é ${imc}`

})