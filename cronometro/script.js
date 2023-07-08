var hora = document.getElementById("hora")
var min = document.getElementById("min")
var seg = document.getElementById("seg")
var sen = document.getElementById("sen")
var x = parseInt(sen.innerHTML)
var interval

document.getElementById("start").addEventListener('click', function(){
    
    interval = setInterval(function(){
        x++
        if(x < 10){
            sen.innerHTML = `0${x}`
        }else{
            sen.innerHTML = x
        }
        
        if(x == 99){
            x = 0
            if(parseInt(seg.innerHTML)+1 < 10){
                seg.innerHTML = `0${seg.innerHTML = parseInt(seg.innerHTML)+1}`
            }else{
                seg.innerHTML = parseInt(seg.innerHTML)+1
            }
            if(seg.innerHTML == "59"){
                seg.innerHTML = "00"
                if(parseInt(min.innerHTML)+1 < 10){
                    min.innerHTML = `0${min.innerHTML = parseInt(min.innerHTML)+1}`
                }else{
                    min.innerHTML = parseInt(min.innerHTML)+1
                }
                if(min.innerHTML == "59"){
                    min.innerHTML = "00"
                    if(parseInt(hora.innerHTML)+1 < 10){
                        hora.innerHTML = `0${hora.innerHTML = parseInt(hora.innerHTML)+1}`
                    }else{
                        hora.innerHTML = parseInt(hora.innerHTML)+1
                    }
                }
            }
        }
    }, 10)

})

document.getElementById("stop").addEventListener('click', function(){
    clearInterval(interval)
})

document.getElementById("reset").addEventListener('click', function(){
    hora.innerHTML = "00"
    min.innerHTML = "00"
    seg.innerHTML = "00"
    sen.innerHTML = "00"
})