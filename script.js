const image = document.querySelector('.slides-container');
const title = document.querySelector('.title');

const contact = document.querySelector('.contact');
const workshops = document.querySelector('.workshops')
const form = document.querySelector('.form')

const menuItemList = document.querySelectorAll('.menu-item');

menuItemList.forEach( item => {
    item.addEventListener('click', () => {
            const menuItem = item.textContent;
            console.log(menuItem); 


            switch (menuItem) {
                case ('contact'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        console.log('ON CONTACT');
                        toggleTitle();
                        toggleContact();
                        break;
                    }
                    
                    if ((image.classList.contains('dimmed')) && (
                        (workshops.classList.contains('hidden')) &&
                        (form.classList.contains('hidden')))) {
                        console.log('OFF CONTACT');
                        image.classList.remove('dimmed');
                        toggleTitle();  
                        toggleContact();
                        break;
                    }
                    
                    if ((image.classList.contains('dimmed')) && (
                        (!workshops.classList.contains('hidden')) ||
                        (!form.classList.contains('hidden')))) {
                        console.log('OTHER(S) REMAINS');
                        toggleContact();
                        }
                        break;
                        
                case ('workshops'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        toggleTitle();  
                        toggleWorkshops();
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (contact.classList.contains('hidden')) &&
                        (form.classList.contains('hidden')))) {
                        image.classList.remove('dimmed');
                        toggleTitle();
                        toggleWorkshops();
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (!contact.classList.contains('hidden')) ||
                        (!form.classList.contains('hidden')))) {
                        toggleWorkshops();
                    }
                    break;

                case ('organise a workshop'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        toggleTitle();
                        toggleForm();
                        break;
                    }
                    
                    if ((image.classList.contains('dimmed')) && (
                        (contact.classList.contains('hidden')) &&
                        (workshops.classList.contains('hidden')))) {
                        image.classList.remove('dimmed');
                        toggleTitle();
                        toggleForm();
                        break;
                    }
                        
                    if ((image.classList.contains('dimmed')) && (
                        (!contact.classList.contains('hidden')) ||
                        (!workshops.classList.contains('hidden')))) {
                        toggleForm();
                    }
            }
        })
})


document.querySelector('.close-contact').addEventListener('click', ()=>{
    if ((workshops.classList.contains('hidden')) &&
        (form.classList.contains('hidden'))){
        image.classList.remove('dimmed');               
        toggleTitle();
        toggleContact();
    } 

    if ((!workshops.classList.contains('hidden')) ||
        (!form.classList.contains('hidden'))){
        toggleContact();
    }
});


document.querySelector('.close-workshops').addEventListener('click', ()=>{
    if ((contact.classList.contains('hidden')) &&
        (form.classList.contains('hidden'))){
        image.classList.remove('dimmed');               
        toggleTitle();
        toggleWorkshops();
    }
    
    if ((!contact.classList.contains('hidden')) ||
        (!form.classList.contains('hidden'))){
        toggleWorkshops();
    } 
});


document.querySelector('.close-form').addEventListener('click', ()=>{
    if ((contact.classList.contains('hidden')) &&
        (workshops.classList.contains('hidden'))){
        image.classList.remove('dimmed');               
        toggleTitle();
        toggleForm();
    } 

    if ((!contact.classList.contains('hidden')) ||
        (!form.classList.contains('hidden'))){
        toggleForm();
    }
});



function toggleTitle (){
    title.classList.toggle('hidden');
    title.classList.toggle('visible');    
}

function toggleContact (){
    contact.classList.toggle('hidden');
    contact.classList.toggle('visible');    
}

function toggleWorkshops (){
    workshops.classList.toggle('hidden');
    workshops.classList.toggle('visible');    
}

function toggleForm (){
    form.classList.toggle('hidden');
    form.classList.toggle('visible');    
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
    autoSlideInterval = setInterval(nextSlide, 7500);
};

const resetInterval = () => {
    clearInterval(autoSlideInterval);
    startInterval();
};

startInterval();

document.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape') {
        image.classList.remove('dimmed');
        title.classList.remove('visible');
        title.classList.add('hidden');
        contact.classList.remove('visible');
        contact.classList.add('hidden');
        workshops.classList.remove('visible');
        workshops.classList.add('hidden');
        form.classList.remove('visible');
        form.classList.add('hidden');
    } 
})