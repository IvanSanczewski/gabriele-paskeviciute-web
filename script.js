const toggleImage = document.getElementById('close');
const imageDimmer = document.getElementById('image');

console.log(toggleImage);
console.log(imageDimmer);

toggleImage.addEventListener('click', dimImage);

function dimImage() {
    imageDimmer.classList.toggle('dimmed');
}
