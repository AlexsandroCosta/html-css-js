document.getElementById("exec").addEventListener('click', function(){
    let movs = JSON.parse(document.getElementById("movs").value)
    let cursor = document.getElementById("cursor")
    let val = window.getComputedStyle(cursor)
    let y = parseInt(val.marginTop.split("px", 1))
    let x = parseInt(val.marginLeft.split("px", 1))

    movs.forEach((element, i) => {
        let addx = parseInt(element[0])
        let addy = parseInt(element[1])

        setTimeout(() => {
            if(x+addx >= 0 && x+addx <= 396){
                cursor.style.marginLeft = (x+=addx) + "px";
            }
            if(y-addy >= 0 && y-addy <= 250){
                cursor.style.marginTop = (y-=addy) + "px";
            }
        }, i*100);
    });
})