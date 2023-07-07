var cores = ["red", "blue", "green", "white", "yellow", "orange", "pink", "purple", "magenta"]

document.getElementById("mudar").addEventListener('click', function(){
    let x = Math.floor(Math.random() * 8)
    
    document.getElementById("cor").innerHTML = cores[x]
    document.body.style.backgroundColor = cores[x]

})