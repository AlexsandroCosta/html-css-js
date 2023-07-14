

document.getElementById("gerar").addEventListener('click', function(){
    let senha = ""

    for(let i=0; i<8; i++){
        if(Math.floor(Math.random()*2+1)==1){
            senha += Math.floor(Math.random()*10)
        }else{
            let x = String.fromCharCode(Math.floor(Math.random()*26+1)+64)

            if(Math.floor(Math.random()*2+1)==1){
                senha += x.toLowerCase()
            }else{
                senha += x
            }
        }
    }
    let res = document.getElementById("res")
    res.style.padding = "10px"
    res.innerHTML = senha
})