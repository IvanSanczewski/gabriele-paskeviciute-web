"use strict";

//Off canvas menu toggling
const menuToggle = document.querySelectorAll('.menu-toggle');
const offCanvasMenu = document.getElementById('off-canvas-menu');

function toggleMenu() {
    offCanvasMenu.classList.toggle('active'); // adds/remove .active from selected element
}

menuToggle.forEach(toggle => {
    toggle.addEventListener('click', toggleMenu);
});


// Language menu toggling
let currentLang = 'ENG'
const mainLangSwitcher = document.getElementById('main-lang-toggle');
const ocmLangSwitcher = document.getElementById('ocm-lang-toggle');

function switchLang() {
    currentLang = (currentLang === 'ENG') ? 'LT' : 'ENG';

    mainLangSwitcher.innerHTML = currentLang;
    ocmLangSwitcher.innerHTML = currentLang;
};

mainLangSwitcher.addEventListener('click', switchLang);
ocmLangSwitcher.addEventListener('click', switchLang);


// menuCloser.addEventListener('click', function() {
//     offCanvasMenu.classList.toggle('active');
// })