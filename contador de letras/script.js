document.getElementById("formu").addEventListener('submit', function(event){
    event.preventDefault()

    let texto = (document.getElementById("texto").value).replace(/\s/g, "")
    let res = document.getElementById("res")

    res.innerHTML = `Total de letras = ${texto.length}`
})