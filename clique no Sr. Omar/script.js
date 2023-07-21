let omar = document.getElementById("omar")
let valBody = window.getComputedStyle(document.body)

omar.addEventListener('mouseenter', enter) 
omar.addEventListener('mousedown', down)

function enter(){
    let x = Math.floor(Math.random()*parseInt(valBody.width))-30
    let y = Math.floor(Math.random()*parseInt(valBody.height))-30

    omar.style.marginLeft = `${x}px`
    omar.style.marginTop = `${y}px`
}

function down(){
    omar.removeEventListener('mouseenter', enter)
    
    omar.src = "tragico.jpg"
    omar.style.marginTop = "250px"
    omar.style.height = "400px"
    omar.style.width = "400px"

    alert("Parabéns! Você consegui clicar no Sr. Omar.")
}