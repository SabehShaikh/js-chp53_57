let images = document.querySelectorAll('.image-container img');
let modal = document.getElementById('myModal');
let modalImage = document.getElementById('modalImage');
let closeBtn = document.querySelector('.close');
let overlay = document.getElementById('overlay');

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
        overlay.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

/* QUESTION 02 
2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
On each click on “zoom in”(+) , add 10px in font size of paragraph.
And on each click on “zoom out”(-) , minus 10px in font size of paragraph. */

const paragraph = document.getElementById('zoom-paragraph');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

zoomInButton.addEventListener('click', () => {
    changeFontSize(10);
});

zoomOutButton.addEventListener('click', () => {
    changeFontSize(-10);
});

function changeFontSize(changeAmount) {
    const currentFontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    const newFontSize = Math.max(currentFontSize + changeAmount, 10); // Ensure minimum font size

    paragraph.style.fontSize = `${newFontSize}px`;
}

