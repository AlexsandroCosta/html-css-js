var cores = ["green", "red", "yellow", "blue"]
var seq = []
var x
var cont = 0
var divs = document.getElementsByTagName("div")
var btn = document.getElementById("iniciar")

btn.addEventListener('click', mostraCores)

function mostraCores(){

    btn.disabled = true
    x = Math.floor(Math.random()*4)
    seq.push(x)

    let i = 0;
    var interval = setInterval(function() {

        if (i >= seq.length) {
            clearInterval(interval);
            alert("Sua vez.")
            for(let i=0; i<divs.length; i++){
                divs[i].addEventListener('click', jogada)
            }
            //return;
        }

        divs[seq[i]].style.backgroundColor = cores[seq[i]];

        setTimeout(function() {
            if (seq[i] == 0) {
                divs[seq[i]].style.backgroundColor = "rgba(0, 128, 0, 0.5)";
            } else if (seq[i] == 1) {
                divs[seq[i]].style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            } else if (seq[i] == 2) {
                divs[seq[i]].style.backgroundColor = "rgba(255, 255, 0, 0.5)";
            } else {
                divs[seq[i]].style.backgroundColor = "rgba(0, 0, 255, 0.5)";
            }
            i++;
        }, 1000);
    }, 1500);
}

function jogada(){
    if(this.id == cores[seq[cont]]){
        cont++
        if(cont == seq.length){
            cont = 0
            mostraCores()
        }
    }else{
        alert(`Errou!\nSua pontuação: ${seq.length-1}`)
        seq = []
        btn.disabled = false
        cont = 0
    }
}