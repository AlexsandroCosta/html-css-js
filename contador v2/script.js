var num = document.getElementById("num")
var inc = document.getElementById("inc")
var dec = document.getElementById("dec")
var intervalo

document.getElementById("reset").addEventListener('click', function(){
    num.innerHTML = 0
    num.style.color = "black"
})

inc.addEventListener('mousedown', function(){
    intervalo = setInterval(function(){
        let x = parseInt(num.innerHTML)
        num.innerHTML = x+1
        if(x+1 > 0){
            num.style.color = "green"
        }else if(x+1 == 0){
            num.style.color = "black"
        }
    }, 100)
})

inc.addEventListener('mouseup', function(){
    clearInterval(intervalo)
})

dec.addEventListener('mousedown', function(){
    intervalo = setInterval(function(){
        let x = parseInt(num.innerHTML)
        num.innerHTML = x-1
        if(x-1 < 0){
            num.style.color = "red"
        }else if(x-1 == 0){
            num.style.color = "black"
        }
    }, 100)
})

dec.addEventListener('mouseup', function(){
    clearInterval(intervalo)
})


