var ppt = ["pedra", "papel", "tesoura"]

document.getElementById("jogar").addEventListener('click', function(){
    let opc = document.getElementById("jogada").value
    let img1 = document.getElementById("img1")
    let img2 = document.getElementById("img2")
    let res = document.getElementById("res")

    if(opc != ""){
        let x = Math.floor(Math.random() * 3)

        if(x==0){
            img2.src = "imagens/pedra.png"
        }else if(x == 1){
            img2.src = "imagens/papel.png"
        }else{
            img2.src = "imagens/tesoura.png"
        }

        if(opc == "pedra"){
            img1.src = "imagens/pedra.png"
            if(x == 0){
                res.innerHTML = "Empate!"
            }else if(x == 1){
                res.innerHTML = "O computador venceu!"
            }else{
                res.innerHTML = "O jogador venceu!"
            }
        }else if(opc == "papel"){
            img1.src = "imagens/papel.png"
            if(x == 0){
                res.innerHTML = "O jogador venceu!"
            }else if(x == 1){
                res.innerHTML = "Empate!"
            }else{
                res.innerHTML = "O computador venceu!"
            }
        }else{
            img1.src = "imagens/tesoura.png"
            if(x == 0){
                res.innerHTML = "O computador venceu!"
            }else if(x == 1){
                res.innerHTML = "O jogador venceu!"
            }else{
                res.innerHTML = "Empate!"
            }
        }
    }else{
        alert("Jogada inválida.")
    }
})