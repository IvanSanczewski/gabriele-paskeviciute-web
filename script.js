const image = document.querySelector('.slides-container');
const title = document.querySelector('.title');

const overlays = {    
    contact: document.querySelector('.contact'),
    kokedama: document.querySelector('.kokedama'),
    form: document.querySelector('.form'),
    workshops: document.querySelector('.workshops')
}

const menuItemList = document.querySelectorAll('.menu-item');

// Helper function to hide all overlays
function hideAllOverlays () {
    Object.values(overlays).forEach(overlay => {
        overlay.classList.remove('visible');
        overlay.classList.add('hidden');
    })
}

// Helper function to show only one overlay
function showOverlay (targetOverlay) {
    overlays[targetOverlay].classList.remove('hidden');
    overlays[targetOverlay].classList.add('visible');
}

// Check if specific overlay is visible
function isAnyOverlayVisible () {
    return Object.values(overlays).some(overlay =>
        !overlay.classList.contains('hidden')
    );
}

// Click menu item
menuItemList.forEach( item => {
    item.addEventListener('click', () => {
        const menuItem = item.textContent;
        
        // Map menu item to overlay names
        const menuMap = {
            'about & contact': 'contact',
            'what is kokedama': 'kokedama',
            'organise a workshop': 'form',
            'workshops': 'workshops' 
        };
        
        const targetOverlay = menuMap[menuItem];
        console.log('item', item);
        console.log(menuItem); 
        console.log('menuItem', menuMap[menuItem]);
        console.log('targetOverlay', targetOverlay);
        console.log('menuMap', menuMap);

        if (!targetOverlay) return;

        const isTargetVisible = !overlays[targetOverlay].classList.contains('hidden');
        console.log(isTargetVisible);

        if (isTargetVisible) {
            // Click the same item to hide it
            hideAllOverlays();
            console.log('IF');

            image.classList.remove('dimmed');
            title.classList.remove('hidden');
            title.classList.add('visible');
        } else {
            // Show clicked overlay & hide the rest
            console.log('ELSE');
            hideAllOverlays();
            showOverlay(targetOverlay);
            
            // Dim background & hide title
            if (!image.classList.contains('dimmed')) {
                console.log('IF - IF');
                title.classList.remove('visible');
                image.classList.add('dimmed');
                title.classList.add('hidden');
            }
        }
    });
});

// Handler for home CTA
document.querySelector('.btn-next-workshop').addEventListener('click', ()=> {
    hideAllOverlays();
    title.classList.remove('visible');
    title.classList.add('hidden');
    showOverlay('workshops');

})

// Close button handlers
document.querySelector('.close-contact').addEventListener('click', ()=>{
    overlays.contact.classList.remove('visible');
    overlays.contact.classList.add('hidden');
    
    if (!isAnyOverlayVisible()){
        image.classList.remove('dimmed');               
        title.classList.remove('hidden');
        title.classList.add('visible');
    }
});

document.querySelector('.close-kokedama').addEventListener('click', ()=>{
    overlays.kokedama.classList.remove('visible');
    overlays.kokedama.classList.add('hidden');
    
    if (!isAnyOverlayVisible()){
        image.classList.remove('dimmed');               
        title.classList.remove('hidden');
        title.classList.add('visible');
    }
});

document.querySelector('.close-form').addEventListener('click', ()=>{
    overlays.form.classList.remove('visible');
    overlays.form.classList.add('hidden');
    
    if (!isAnyOverlayVisible()){
        image.classList.remove('dimmed');               
        title.classList.remove('hidden');
        title.classList.add('visible');
    }
});

document.querySelector('.close-workshops').addEventListener('click', ()=>{
    overlays.workshops.classList.remove('visible');
    overlays.workshops.classList.add('hidden');
    
    if (!isAnyOverlayVisible()){
        image.classList.remove('dimmed');               
        // title.classList.remove('hidden');
        // title.classList.add('visible');
        toggleTitle();
    }
});


// Escape key handler
document.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape') {
        hideAllOverlays();
        image.classList.remove('dimmed');
        title.classList.remove('visible');
        title.classList.add('hidden');
        // contact.classList.remove('visible');
        // contact.classList.add('hidden');
        // workshops.classList.remove('visible');
        // workshops.classList.add('hidden');
        // form.classList.remove('visible');
        // form.classList.add('hidden');
    } 
})

function toggleTitle (){
    title.classList.toggle('hidden');
    title.classList.toggle('visible');    
}

function toggleContact (){
    contact.classList.toggle('hidden');
    contact.classList.toggle('visible');    
}

function toggleAbout (){
    about.classList.toggle('hidden');
    about.classList.toggle('visible');    
}

function toggleForm (){
    form.classList.toggle('hidden');
    form.classList.toggle('visible');    
}

function toggleWorkshops (){
    workshops.classList.toggle('hidden');
    workshops.classList.toggle('visible');    
}










// S L I D E R S

const slides = [
    '/assets/ISP_KOKEDAMA_3.png',
    '/assets/ISP_KOKEDAMA_test.jpg',
    '/assets/ISP_KOKEDAMA_WSP_389.jpg',
    '/assets/ISP_KOKEDAMA_WSP_394.jpg',
    '/assets/ISP_KOKEDAMA_WSP_405.jpg'
];

let currentSlide = 0;
let autoSlideInterval;

const slidesContainer = document.querySelector('.slides-container');

slides.forEach((src, index) =>{
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Kokedama ${index + 1}`;
    img.classList.add('slide');

    if (index === 0) img.classList.add('active');
    slidesContainer.appendChild(img);
});


const displaySlide = (index) => {
    const slides = document.querySelectorAll('.slide');

    // Hides actual active slide
    slides[currentSlide].classList.remove('active');

    // Finds out next index using module to control an infinite loop
    currentSlide = (index + slides.length) % slides.length;

    // Displays new slider
    slides[currentSlide].classList.add('active');
};

const nextSlide = () => displaySlide(currentSlide + 1);
const prevSlide = () => displaySlide(currentSlide - 1);


// Slide control with icon arrows
document.querySelector('.left').addEventListener('click', () => {
    prevSlide();
    resetInterval();
})

document.querySelector('.right').addEventListener('click', () => {
    nextSlide();
    resetInterval();
})


// Slide control with arrows keys
document.addEventListener('keydown', (e) =>{
    if(e.key === 'ArrowLeft') prevSlide();
    if(e.key === 'ArrowRight') nextSlide();
    resetInterval();
});


// Automatic slides
const startInterval = () => {
    autoSlideInterval = setInterval(nextSlide, 75000);
};

const resetInterval = () => {
    clearInterval(autoSlideInterval);
    startInterval();
};

startInterval();

