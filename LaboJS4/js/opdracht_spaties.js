
const setup = () => {
    let btn = document.getElementById("btn")
    btn.addEventListener("click", voegToe);
}
const voegToe = () => {
    let text = document.getElementById("text").value
    let result = ""
    for (let i = 0; i < text.length; i++) {
        result += text.charAt(i) + " "
    }
    console.log(result.substring(0,result.length-1))
}


window.addEventListener("load", setup);