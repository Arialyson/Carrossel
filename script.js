const imgs = window.document.getElementById("img")
const img = window.document.querySelectorAll("#img img")

let idx = 0

function carrossel() {
    idx++

    if(idx > img.length -1){
        idx = 0
    }
    
    imgs.style.transform = `translateX(${-idx * 500}px)`
}
setInterval(carrossel, 1800)