const image = document.getElementById('image');
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
                        console.log('CONTACT 1');
                        image.classList.add('dimmed');
                        title.classList.toggle('hidden');
                        contact.classList.toggle('hidden');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (workshops.classList.contains('hidden')) &&
                        (form.classList.contains('hidden')))) {
                        console.log('FORM 2');
                        image.classList.remove('dimmed');
                        title.classList.toggle('hidden');
                        contact.classList.toggle('hidden');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (!workshops.classList.contains('hidden')) ||
                        (!form.classList.contains('hidden')))) {
                        console.log('FORM 3');
                        contact.classList.toggle('hidden');
                    }
                    break;

                case ('workshops'):
                    if (!image.classList.contains('dimmed')) {
                        console.log('WORKSHOPS 1');
                        image.classList.add('dimmed');
                        title.classList.toggle('hidden');
                        workshops.classList.toggle('hidden');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (contact.classList.contains('hidden')) &&
                        (form.classList.contains('hidden')))) {
                        console.log('WORKSHOPS 2');
                        image.classList.remove('dimmed');
                        title.classList.toggle('hidden');
                        workshops.classList.toggle('hidden');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (!contact.classList.contains('hidden')) ||
                        (!form.classList.contains('hidden')))) {
                        console.log('WORKSHOPS 3');
                        workshops.classList.toggle('hidden');
                    }
                    break;

                case ('organise a workshop'):
                    if (!image.classList.contains('dimmed')) {
                        console.log('FORM 1');
                        image.classList.add('dimmed');
                        title.classList.toggle('hidden');
                        form.classList.toggle('hidden');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (contact.classList.contains('hidden')) &&
                        (workshops.classList.contains('hidden')))) {
                        console.log('FORM 2');
                        image.classList.remove('dimmed');
                        title.classList.toggle('hidden');
                        form.classList.toggle('hidden');
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (!contact.classList.contains('hidden')) ||
                        (!workshops.classList.contains('hidden')))) {
                        console.log('FORM 3');
                        form.classList.toggle('hidden');
                    }
            }
        })
})