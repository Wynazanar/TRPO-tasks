"use strict";

let words = [
    "парус", "мачта", "мечта",
    "ведро", "пакет", "живот",
    "пятак", "майор", "время",
    "ветер", "малыш", "почта",
    "пожар", "огонь", "метро",
    "плечо", "разум", "волос",
    "голос", "гольф", "волан",
    "балон", "батон", 'питон',
    "бровь", "синяк", "соска",
    "смесь", "водка", "лодка",
    "будка", 'порог', 'короб',
    'штора', 'вилка', 'ложка',
    'кошка', 'миска', 'плита',
    'набор', 'выбор', 'дозор',
    'лазер', 'козел', 'баран',
    'варан', 'драма', 'катер',
    'рупор', 'стезя', 'поход',
    'доход', 'завод', 'проба',
    'сдоба', 'булка', 'пирог',
    'пицца', 'сахар', 'какао',
    'тупик', 'порка', 'карта',
    'догма', 'барак', 'метан',
    'банка', 'рюмка', 'книга',
    'зебра', 'носок', 'рубин',
    'пачка', 'рубль', 'вклад',
    'паром', 'лилия', 'сосна',
    'круиз', 'тромб', 'брошь',
    'блеск', 'город', 'народ',
    'парик', 'скоба', 'мираж',
    'сумка', 'сетка', 'кость',
    'гарем', 'полет', 'кубок',
    'белок', 'леска', 'порез',
    'поезд', 'багет', 'песок',
    'голод', 'холод', 'моток',
    'каток', 'чулок', 'весна',
    'солод', 'купаж', 'трико',
    'грязь', 'балет', 'букет',
    'салат', 'метла', 'табло',
    'пчела', 'зефир', 'кефир',
    'лимон', 'уксус', 'рукав',
    'халат', 'мотор', 'забор',
    'базар', 'гелий', 'гений',
    'актер', 'потоп', 'ванна',
    'комод', 'крыша', 'лапша',
    'перец', 'кабан', 'фазан',
    'тубус', 'зомби', 'акула',
    'тепло', 'бетон', 'сушка',
    'насос', 'парад', 'магия',
    'почка', 'репка', 'редис',
    'тыква', 'гость', 'косяк',
    'банан', 'позор', 'ликер',
    'виски', 'угорь', 'окунь',
    'омуль', 'лампа', 'комар',
    'чехол', 'топор', 'буква',
    'слюна', 'синий', 'белый',
    'карма', 'жираф', 'масло',
    'кофта', 'кепка', 'шапка',
    'муфта', 'олень', 'доска',
    'парта', 'туфля', 'танец',
    'жених', 'маска', 'посол',
    'тапок', 'трава', 'мешок',
    'кешью', 'ствол', 'охота',
    'шприц', 'сосуд', 'принц',
    'князь', 'дубль', 'дупло',
    'алмаз', 'топаз', 'донос',
    'посох', 'сироп', 'ягода',
    'пушка', 'казнь', 'рынок',
    'мумия', 'лента', 'скотч',
    'клише', 'успех', 'линия',
    'ссора', 'пихта', 'школа',
    'пенал', 'бекон', 'канал',
    'слеза', 'купец', 'конец'
];

let word = GenerateWord();
console.log(word);

StartGame();

document.querySelector(".btn").addEventListener("click", function() {
    CheckWord();
});


function GenerateWord() {
    let index = Math.floor(Math.random() * words.length);

    return words[index].toLocaleLowerCase();
}

function StartGame() {
    let div = document.createElement('div');
    div.className = 'row';
    
    for(let i = 0; i < 5; i++) {
        let input = document.createElement('input');
        input.type = 'text';
        input.className = 'input';
        input.minLength = 1;
        input.maxLength = 1;
        
        div.appendChild(input);
    }
    
    let listRows = document.querySelector('#list-rows');
    listRows.appendChild(div);
}

function addNewRow() {
    let div = document.createElement('div');
    div.className = 'row';
    
    for(let i = 0; i < 5; i++) {
        let input = document.createElement('input');
        input.type = 'text';
        input.value = "";
        input.className = 'input';
        input.minLength = 1;
        input.maxLength = 1;
        
        div.appendChild(input);
    }
    
    let listRows = document.querySelector('#list-rows');
    listRows.appendChild(div);
}

function CheckWord() {
    let rows = document.querySelectorAll(".input");
    let pos = [];
    
    console.log(rows);

    for (let j = 0; j < rows.length; j++) {
        console.log(rows[j]);
        if (rows[j].value.toLowerCase() === word[j]) {
            rows[j].classList.add("true");
            pos.push(j);
        }
    }

    // console.log(pos);

    // for (let i = 4; i >= 0; i--) {
    //     if (!pos.includes(i)) {
    //         let index = word.indexOf(rows[i]);
    //         if (index > -1 && !pos.includes(index)) {
    //             rows[i].classList = "input practically";
    //         }
    //     }
    // }

    addNewRow();
}