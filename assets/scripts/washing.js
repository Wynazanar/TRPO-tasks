"use strict";

function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
      ev.dataTransfer.dropEffect = "copy";

}

window.addEventListener("DOMContentLoaded", () => {
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