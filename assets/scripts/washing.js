"use strict";

let cloth = ["t-short", "shoe", "shorts"];

function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

window.addEventListener("DOMContentLoaded", () => {

    let randomCloth = Math.floor(Math.random() * (15 - 4 + 1) + 4);
    console.log(randomCloth);

    let basket = document.querySelector("#basket");
    basket.innerHTML = "";

    for (let i = 0; i <= randomCloth; i++) {
        basket.innerHTML += `<img id="item" draggable="true" src="assets/image/${cloth[Math.floor(Math.random() * cloth.length)]}.png">`;
    }

    const elements = document.querySelectorAll("#item");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("dragstart", dragstart_handler);
    }
});

function dragover_handler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    document.querySelector("#washingMachine").src = "assets/image/washingMachine_open.png";
}

function drop_handler(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text/plain");
    document.getElementById(data).remove();
    document.querySelector("#washingMachine").src = "assets/image/washingMachine_close.png";
}