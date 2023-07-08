document.addEventListener('DOMContentLoaded', function(){
    let hora = document.getElementById("hora")
    let min = document.getElementById("min")
    let seg = document.getElementById("seg")
    
    setInterval(function(){
        let data = new Date()

        hora.innerHTML = data.getHours()
        min.innerHTML = data.getMinutes()
        seg.innerHTML = data.getSeconds()
    }, 1000)
})
