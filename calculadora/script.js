var butt = document.getElementsByTagName("button")
var num = ""
var op = ""
var res = 0
var nv = false

for(let i=0; i<butt.length; i++){
    butt[i].addEventListener('click', function(){
        calc(this);
    });
}

function calc(elemento){
    let tela = document.getElementById("tela")

    if(nv){
        tela.innerHTML = op = ""
        res = num = 0
        nv = false
    }

    tela.innerHTML += elemento.innerHTML

    if (elemento.innerHTML >= "0" && elemento.innerHTML <= "9"){
        num += elemento.innerHTML
    }else if(elemento.innerHTML == "."){
        num += elemento.innerHTML
    }else if(elemento.innerHTML == '='){
        if(op != ""){
            if(op == "+"){
                res += parseFloat(num)
            }else if(op == "-"){
                res -= parseFloat(num)
            }else if(op == "x"){
                res *= parseFloat(num)
            }else{
                res /= parseFloat(num)
            }
            tela.innerHTML = res
            nv = true
        }
    }else{
        res += parseFloat(num)
        num = 0 
        op = elemento.innerHTML
    }
}

