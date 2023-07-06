var lista = []
var pilha = document.getElementById("pilha")

document.getElementById("formul").addEventListener('submit', function(event){
    event.preventDefault()

    let task = document.getElementById("task").value

    if(task != ""){
        lista.push(task)

        let x = document.createElement("button")
        x.innerHTML = task
        x.value = lista.length-1
        x.addEventListener('click', function(){
            remover(this);
        });

        pilha.appendChild(x)
    }else{
        alert("Você precisa informar a tarefa.")
    }
})

var botoes = document.getElementsByTagName("button")

function remover(elemento){
    lista.splice(elemento.value, 1)
    pilha.removeChild(elemento)
}
