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

            image.classList.remove('dimmed');
            title.classList.remove('hidden');
            title.classList.add('visible');
        } else {
            // Show clicked overlay & hide the rest
            hideAllOverlays();
            showOverlay(targetOverlay);

            // Dim background & hide title
            if (!image.classList.contains('dimmed')) {
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
    image.classList.add('dimmed');
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
        // title.classList.remove('hidden');
        // title.classList.add('visible');
        toggleTitle();
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
        toggleTitle();
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










// S L I D E R S //
// S L I D E R S //

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



// C A R D S //
// C A R D S //

const pastWorkshops = [
    {
        id:"25_1",
        location: "Kazio Varnelio namai-muziejus",
        date: "March 24",
        city: "Vilnius",
        image: "/assets/ISP_KOKEDAMA_test.jpg",
        caption: "Workshop image"
    },
    {
        id:"25_2",
        location: "Booking.com",
        date: "October 24",
        city: "Vilnius",
        image: "/assets/ISP_KOKEDAMA_3.png",
        caption: "Workshop image"
    },
    {
        id:"25_3",
        location: "Hostinger",
        date: "March 25",
        city: "Kaunas",
        image: "/assets/ISP_KOKEDAMA_WSP_405.jpg",
        caption: "Workshop image"
    },
    {
        id:"25_4",
        location: "Artoteka",
        date: "March 25",
        city: "Vilnius",
        image: "/assets/Gabriele-portrait-1.jpg",
        caption: "Workshop image"
    },
    {
        id:"25_5",
        location: "Midene",
        date: "March 25",
        city: "Panevezys",
        image: "/assets/Gabriele-portrait-2.JPG",
        caption: "Workshop image"
    },
    {
        id:"25_6",
        location: "Midene",
        date: "March 25",
        city: "Panevezys",
        image: "/assets/ISP_KOKEDAMA_WSP_389.jpg",
        caption: "Workshop image"
    },
    {
        id:"25_7",
        location: "SOC",
        date: "March 25",
        city: "Ukmerge",
        image: "/assets/KOKEDAMA_GRAIN_1500.jpg",
        caption: "Workshop image"
    }
];
const pastWorkshopsContainer = document.querySelector('.workshops-past-cards-container');

pastWorkshops.forEach(card => {
    const divCard = document.createElement('div');
    divCard.classList.add('workshop-card');

    const img = document.createElement('img');
    img.classList.add('workshop-card__image');
    img.src = card.image;
    img.alt = card.caption;

    const divCardInfo = document.createElement('div');
    divCardInfo.classList.add('workshop-card__info');

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('workshop-card__location');
    cardTitle.textContent = card.location;

    const divCardDetails = document.createElement('div');
    divCardDetails.classList.add('workshop-card__details');

    const cardCity = document.createElement('p');
    cardCity.classList.add('workshop-card__city');
    cardCity.textContent = card.city;

    const cardDate = document.createElement('p');
    cardDate.classList.add('workshop-card__date');
    cardDate.textContent = card.date;

    divCardDetails.appendChild(cardCity);
    divCardDetails.appendChild(cardDate);

    divCardInfo.appendChild(cardTitle);
    divCardInfo.appendChild(divCardDetails);

    divCard.appendChild(img);
    divCard.appendChild(divCardInfo);

    pastWorkshopsContainer.appendChild(divCard);
});




// O F F - C A N V A S   M E N U //
// O F F - C A N V A S   M E N U //

const toggleMenuIcon = document.querySelector('.menu-toggle');
const offCanvasMenu = document.querySelector('.off-canvas-menu');
const offCanvasMenuItems = document.querySelectorAll('.ocm-item a');

// Toggle menu on burger/X click
toggleMenuIcon.addEventListener('click', () =>{
    if (title.classList.contains('hidden')){
        hideAllOverlays();
        title.classList.remove('hidden');
        image.classList.remove('dimmed');
    }
    
    toggleMenuIcon.classList.toggle('active');
    offCanvasMenu.classList.toggle('active');
});

// Close menu when clicking on a menu item
offCanvasMenuItems.forEach(item => {
    item.addEventListener('click', (event)=>{
        event.preventDefault();
        const menuText = item.textContent;

        // Close the off-canvas menu
        toggleMenuIcon.classList.remove('active');
        offCanvasMenu.classList.remove('active');

        // Map menu item to overlay names
        const menuMap = {
            'about & contact': 'contact',
            'what is kokedama': 'kokedama',
            'organise a workshop': 'form',
            'workshops': 'workshops'
        };

        const targetOverlay = menuMap[menuText];
        console.log(targetOverlay);

        if (!targetOverlay) return;

        // Show the correspnding overlay
        hideAllOverlays();
        showOverlay(targetOverlay);

        // Dim background & hide title
        // title.classList.remove('visible');
        toggleTitle();
        image.classList.add('dimmed');
        // image.classList.add('hidden');
    });
});