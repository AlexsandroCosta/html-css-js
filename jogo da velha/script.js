var matriz = [0,0,0,0,0,0,0,0,0]
var vez = 1
var ganhou = false
var quadro = document.getElementsByTagName("div")

document.getElementById("iniciar").addEventListener('click', function(){
    for(let i=0; i<9; i++){
        quadro[i].addEventListener('click', function(){
            jogou(this)
        })
    }
})

document.getElementById("reset").addEventListener('click', function(){
    ganhou = false
    vez = 1
    for(let i=0; i<9; i++){
        matriz[i] = 0
        quadro[i].style.backgroundColor = "white"
    }
})

function jogou(element){
    if(!ganhou){
        if(matriz[element.id] == 0){
            matriz[element.id] = vez
            verificar()
            if(vez == 1){
                element.style.backgroundColor = "red"
                vez = -1
            }else{
                element.style.backgroundColor = "green"
                vez = 1
            }
        }else{
            alert("Jogada inválida.")
        }
    }

}

function verificar(){
    let j=0

    for(let i=0; i<9; i+=3){
        if(matriz[i] != 0 && matriz[i] == matriz[i+1] && matriz[i] == matriz[i+2]){
            ganhou = true
            destaque(i, i+1, i+2)
        }
    }

    for(let i=0; i<3; i++){
        if(matriz[i] != 0 && matriz[i] == matriz[i+3] && matriz[i] == matriz[i+6]){
            ganhou = true
            destaque(i, i+3, i+6)
        }
    }

    if(matriz[0] != 0 && matriz[0] == matriz[4] && matriz[0] == matriz[8]){
        ganhou = true
        destaque(0, 4, 8)
    }

    if(matriz[2] != 0 && matriz[2] == matriz[4] && matriz[2] == matriz[6]){
        ganhou = true
        destaque(2, 4, 6)
    }
}

function destaque(n1, n2, n3){
    for(let i=0; i<9; i++){
        if(i != n1 && i != n2 && i != n3){
            if(matriz[i] == 1){
                quadro[i].style.backgroundColor = "rgba(255, 0, 0, 0.493)"
            }else if(matriz[i] == -1){
                quadro[i].style.backgroundColor = "rgba(0, 128, 0, 0.493)"
            }
        }
    }
}