const image = document.querySelector('.slides-container');
console.log(image);
const title = document.querySelector('.title');

const contact = document.querySelector('.contact');
const workshops = document.querySelector('.workshops')
const form = document.querySelector('.form')

const imageDimmerList = document.querySelectorAll('.dimmer');

imageDimmerList.forEach( imageDimmer => {
    imageDimmer.addEventListener('click', () => {
            const menuItem = imageDimmer.textContent;
            console.log(menuItem);


            switch (menuItem) {
                case ('contact'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        title.classList.toggle('hidden');
                        title.classList.toggle('visible');
                        contact.classList.toggle('hidden');
                        contact.classList.toggle('visible');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (workshops.classList.contains('hidden')) &&
                        (form.classList.contains('hidden')))) {
                        image.classList.remove('dimmed');
                        title.classList.toggle('hidden');
                        title.classList.toggle('visible');
                        contact.classList.toggle('hidden');
                        contact.classList.toggle('visible');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (!workshops.classList.contains('hidden')) ||
                        (!form.classList.contains('hidden')))) {
                        contact.classList.toggle('hidden');
                        contact.classList.toggle('visible');
                    }
                    break;

                case ('workshops'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        title.classList.toggle('hidden');
                        title.classList.toggle('visible');
                        workshops.classList.toggle('hidden');
                        workshops.classList.toggle('visible');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (contact.classList.contains('hidden')) &&
                        (form.classList.contains('hidden')))) {
                        image.classList.remove('dimmed');
                        title.classList.toggle('hidden');
                        title.classList.toggle('visible');
                        workshops.classList.toggle('hidden');
                        workshops.classList.toggle('visible');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (!contact.classList.contains('hidden')) ||
                        (!form.classList.contains('hidden')))) {
                        workshops.classList.toggle('hidden');
                        workshops.classList.toggle('visible');
                    }
                    break;

                case ('organise a workshop'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        title.classList.toggle('hidden');
                        title.classList.toggle('visible');
                        form.classList.toggle('hidden');
                        form.classList.toggle('visible');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (contact.classList.contains('hidden')) &&
                        (workshops.classList.contains('hidden')))) {
                        image.classList.remove('dimmed');
                        title.classList.toggle('hidden');
                        title.classList.toggle('visible');
                        form.classList.toggle('hidden');
                        form.classList.toggle('visible');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (!contact.classList.contains('hidden')) ||
                        (!workshops.classList.contains('hidden')))) {
                        form.classList.toggle('hidden');
                        form.classList.toggle('visible');
                    }
            }
        })
})



// S L I D E R S

const slides = [
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
    autoSlideInterval = setInterval(nextSlide, 5000);
};

const resetInterval = () => {
    clearInterval(autoSlideInterval);
    startInterval();
};;


startInterval();

