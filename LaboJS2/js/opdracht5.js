const aanpassen = () => {
    let pElement=document.getElementById("txtOutput"); pElement.innerHTML="Welkom!";
}

const setup = () => {
    let btn=document.getElementById("btn");
    btn.addEventListener("click", aanpassen);
}

window.addEventListener("load", setup);