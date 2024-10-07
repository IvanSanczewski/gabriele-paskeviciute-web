"use strict";

//Off canvas menu toggling
const menuSwitcher = document.querySelector('.menu-toggle');
const offCanvasMenu = document.getElementById('off-canvas-menu');
// const menuCloser = document.getElementsByClassName('close-menu');


menuSwitcher.addEventListener('click', function (){
    offCanvasMenu.classList.toggle('active'); //adds/removes the class passed as aparameter to the element
    menuSwitcher.classList.remove('menu-toggle');
    
    if (menuSwitcher.innerHTML === 'M') {
        menuSwitcher.innerHTML = 'X';
    } else {
        menuSwitcher.innerHTML = 'M';
    }
});


// Language menu toggling
const langSwitcher = document.getElementById('lang-toggle');
const ocmLangSwitcher = document.getElementById('ocm-lang-toggle');

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