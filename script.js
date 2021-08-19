'use strict';

let book1 = document.getElementsByClassName('book')[1];
let book2 = document.getElementsByClassName('book')[0];
let book3 = document.getElementsByClassName('book')[4];
let book4 = document.getElementsByClassName('book')[3];
let book5 = document.getElementsByClassName('book')[5];
let book6 = document.getElementsByClassName('book')[2];

book1.remove();
book2.insertAdjacentElement('beforebegin', book1);

book6.remove();
book5.insertAdjacentElement('afterend', book6);

book4.remove();
book3.insertAdjacentElement('afterend', book4);

let body = document.querySelector('body');
body.setAttribute('style', 'background-image: url("./image/you-dont-know-js.jpg")');

book3.querySelector('a').text = "Книга 3. this и Прототипы Объектов";

document.getElementsByClassName('adv')[0].remove();

let chpt3 = book2.getElementsByTagName('li')[8];
let chpt4 = book2.getElementsByTagName('li')[4];
let chpt5 = book2.getElementsByTagName('li')[5];
let additionC = book2.getElementsByTagName('li')[2];
let additionB = book2.getElementsByTagName('li')[9];
let additionA = book2.getElementsByTagName('li')[7];

chpt4.remove();
chpt3.insertAdjacentElement('afterend', chpt4);

chpt5.remove();
chpt4.insertAdjacentElement('afterend', chpt5);

additionC.remove();
additionB.insertAdjacentElement('afterend', additionC);

additionA.remove();
additionB.insertAdjacentElement('beforebegin', additionA);

let chp1 = book5.getElementsByTagName('li')[9];
let chp2 = book5.getElementsByTagName('li')[3];
let chp3 = book5.getElementsByTagName('li')[4];
let chp4 = book5.getElementsByTagName('li')[2];
let chp6 = book5.getElementsByTagName('li')[7];
let additioA = book5.getElementsByTagName('li')[5];

chp1.remove();
chp2.insertAdjacentElement('beforebegin', chp1);

chp4.remove();
chp3.insertAdjacentElement('afterend', chp4);

additioA.remove();
chp6.insertAdjacentElement('afterend', additioA);

book6.getElementsByTagName('li')[8].insertAdjacentHTML('afterend', "<li>Глава 8: За пределами ES6</li>");