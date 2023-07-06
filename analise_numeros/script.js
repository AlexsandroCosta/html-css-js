var lista = []
var maior = menor = cont = soma = 0

var res = document.getElementById("res")

function verifica(n){
    if(lista.length == 0){
        return true
    }
    if(n >= 1 && n <= 100){
        if(lista.indexOf(n) == -1){
            return true;
        }
    }
    return false;
}

document.getElementById("formul").addEventListener('submit', function(event){
    event.preventDefault()

    num = document.getElementById("num").value
    pilha = document.getElementById("pilha")

    if(num != "" && verifica(parseInt(num))){
        res.innerHTML = ""
        num = parseInt(num)
        lista.push(num)

        let x = document.createElement("option")
        x.text = `Valor ${num} adicionado.`

        pilha.size += 1
        pilha.appendChild(x)

        soma += num

        if(cont == 0){
            maior = menor = num
            cont++
        }else{
            if(num > maior){
                maior = num
            }
            if(num < menor){
                menor = num
            }
        }
    }else{
        alert("Valor é inválido ou já encontrado na lista.")
    }

})

document.getElementById("finaliza").addEventListener('click', function(){
    if(lista.length > 0){
        let total = document.createElement("p")
        let ma = document.createElement("p")
        let me = document.createElement("p")
        let sum = document.createElement("p")
        let media = document.createElement("p")

        total.innerHTML = `Ao todo temos ${lista.length} números adicionado.`
        ma.innerHTML = `O maior número adicionado foi ${maior}`
        me.innerHTML = `O menor número adicionado foi ${menor}`
        sum.innerHTML = `Somando todos os valores teremos ${soma}`
        media.innerHTML = `A média dos valores digitados é ${soma/lista.length}`

        res.appendChild(total)
        res.appendChild(ma)
        res.appendChild(me)
        res.appendChild(sum)
        res.appendChild(media)
    }else{
        alert("Adicione valores antes de finilizar.")
    }
})

