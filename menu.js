"use strict";

const menuSwitcher = document.querySelector('.menu-toggle');
const offCanvasMenu = document.getElementById('off-canvas-menu');
// const menuCloser = document.getElementsByClassName('close-menu');

const langSwitcher = document.getElementById('lang-toggle');

menuSwitcher.addEventListener('click', function (){
    offCanvasMenu.classList.toggle('active'); //adds/removes a class to the element

    if (menuSwitcher.innerHTML === 'M') {
        menuSwitcher.innerHTML = 'X';
    } else {
        menuSwitcher.innerHTML = 'M';
    }
});

langSwitcher.addEventListener('click', function () {

    if (langSwitcher.innerHTML === 'ENG') {
        langSwitcher.innerHTML = 'LT';
    } else {
        langSwitcher.innerHTML = 'ENG';
    }
});



// menuCloser.addEventListener('click', function() {
//     offCanvasMenu.classList.toggle('active');
// })