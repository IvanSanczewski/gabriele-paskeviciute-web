"use strict";

const menuSwitcher = document.getElementById('menu-toggle');
const menuCloser = document.getElementById('close-menu');
const offCanvasMenu = document.getElementById('off-canvas-menu');

menuSwitcher.addEventListener('click', function (){
    offCanvasMenu.classList.toggle('active'); //adds/removes a class to the element

    if (menuSwitcher.innerHTML === 'M') {
        menuSwitcher.innerHTML = 'X';
    } else {
        menuSwitcher.innerHTML = 'M';
    }
});

menuCloser.addEventListener('click', function() {
    offCanvasMenu.classList.toggle('active');
})