let sem = document.querySelectorAll("div")
let info = document.querySelector("#info")

sem.forEach(element => {
    element.addEventListener('click', function(){
        limpar()
        info.innerHTML = ""
        info.style.color = this.id
        if(this.id == "green"){
            this.style.backgroundColor = "rgba(0, 255, 0)"
            info.innerHTML = "Passe"
        }else{
            this.style.backgroundColor = this.id

            if(this.id == "red"){
                info.innerHTML = "Pare"
            }else{
                info.innerHTML = "Atenção"
            }
        }
    })
});

function limpar(){
    sem.forEach(element => {
        if(element.id == "red"){
            element.style.backgroundColor = "rgba(255, 0, 0, 0.5)"
        }else if(element.id == "yellow"){
            element.style.backgroundColor = "rgba(255, 255, 0, 0.5)"
        }else{
            element.style.backgroundColor = "rgba(0, 128, 0, 0.5)"
        }
    })
}
