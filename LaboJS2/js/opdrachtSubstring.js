const sub = () => {
    let woord = document.getElementById("woord").value
    let links = document.getElementById("links").value
    let rechts = document.getElementById("rechts").value
    document.getElementById("output").innerText = woord.substring(links,rechts)
}
const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", sub);
}

window.addEventListener("load", setup);