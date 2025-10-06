"use strict";

let cloth = ["backpack", "bag", "dress_blue", "dress_red",
    "hat_blue", "hat_orange", "jacket", "shirt_blue", "shirt_orange",
    "shorts_green", "shorts", "skirt", "undershirt_pink"
];
let randomCloth = 0;
let spawnCloth = 0;
let basket = document.querySelector("#basket");

function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

window.addEventListener("DOMContentLoaded", () => {

    randomCloth = Math.floor(Math.random() * (15 - 4 + 1) + 4);
    console.log(randomCloth);
    console.log(spawnCloth);

    basket.innerHTML = "";

    NextCloth();
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
    NextCloth();
    document.querySelector("#washingMachine").src = "assets/image/washingMachine_close.png";
}

function NextCloth() {
    
    if (spawnCloth < randomCloth) {
        basket.innerHTML += `<img id="item" draggable="true" src="assets/image/cloth/${cloth[Math.floor(Math.random() * cloth.length)]}.png">`;
        document.querySelector("#counter").textContent = `Загружено: ${spawnCloth}/${randomCloth}`;
        spawnCloth++;
        console.log(spawnCloth);
    } else {
        document.querySelector("#counter").textContent = `Загружено: ${spawnCloth+1}/${randomCloth}`;
    }
    
    
    const elements = document.querySelectorAll("#item");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("dragstart", dragstart_handler);
    }
}