"use strict";

let letter = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮйцукенгшщзхъфывапролджэячсмитьбю";
let number = "0123456789";
let symbol = "!@#$%^&*()_+-=[]'./{}|<>";

let len_pass = document.querySelector("#len-pass");

let amount_letter = document.querySelector("#amount-letter");
let amount_number = document.querySelector("#amount-number");
let amount_symbol = document.querySelector("#amount-symbol");

amount_letter.addEventListener("blur", function () {
    amount_symbol.value = len_pass.value - (Number(amount_letter.value) + Number(amount_number.value));
    if (amount_letter.value == len_pass.value) {
        amount_number.value = 0;
        amount_symbol.value = 0;
    }
});

amount_number.addEventListener("blur", function () {
    amount_symbol.value = len_pass.value - (Number(amount_letter.value) + Number(amount_number.value));
    if (amount_letter.value == len_pass.value) {
        amount_number.value = 0;
        amount_symbol.value = 0;
    }
});

let button = document.querySelector("#btn").addEventListener("click", function () {
    let amount_pass = document.querySelector("#amount-pass");

    let _letter = Number(amount_letter.value);
    let _number = Number(amount_number.value);
    let _symbol = Number(amount_symbol.value);

    if (len_pass.value != "" || amount_pass.value != "" || amount_letter.value != "" || amount_number.value != "" || amount_symbol.value != "") {

        let list = document.querySelector("#pass-list");
        list.innerHTML = "";

        let _pass = "";
        
        for (let i = 0; i < amount_pass.value; i++) {
            console.log(i);
            for (let j = 0; j < _letter; j++) {
                _pass += GenerateRandom(letter);
            }
            for (let k = 0; k < _number; k++) {
                _pass += GenerateRandom(number);
            }
            for (let l = 0; l < _symbol; l++) {
                _pass += GenerateRandom(symbol);
            }
            console.log(_pass.split(""));
            _pass = shuffleArray(_pass.split(""));
            list.innerHTML += `<h4>${i+1}. ${_pass}</h4>`;
            _pass = "";
        }


    }
});

function GenerateRandom(char) {
    return char.charAt(Math.floor(Math.random() * char.length));
}

function shuffleArray(array) {
    let index = array.length;
    
    while (index > 0) {
        let i = Math.floor(Math.random() * index);
        index--;
        let temp = array[index];
        array[index] = array[i];
        array[i] = temp;
    }
    return array.join("");
}