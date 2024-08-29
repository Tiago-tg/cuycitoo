let currentSlide = 0;
const phrases = [
    "Quizá nos topamos muchas veces antes",
    "Tu dormías en clases",
    "Algunas veces te quedabas",
    "Hasta que te pude conocer",
    "Comenzamos a hablar",
    "Y un día salimos...",
    "...",
    "...",
    "...",
    "Eres muy linda",
    "Y volvimos a salir",
    "...",
    "...",
    "Y comenzamos a salir",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",



];
const imagePaths = [
    "cuy0.jpeg",
    "cuy2.jpeg",
    "cuy3.jpeg",
    "cuy4.jpeg",
    "cuy5.jpeg",
    "cuy6.jpeg",
    "cuy7.jpeg",
    "cuy8.jpeg",
    "cuy9.jpeg",
    "cuy10.jpeg",
    "cuy11.jpeg",
    "cuy12.jpeg",
    "cuy13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",

];

function nextSlide() {
    if (currentSlide < phrases.length - 1) {
        currentSlide++;
        document.getElementById('phrase').textContent = phrases[currentSlide];
        document.querySelector('.sequence-image').src = imagePaths[currentSlide];
    } else {
        showFinalSlide();
    }
}

function showFinalSlide() {
    document.body.innerHTML = `
        <div class="final-container">
            <h1>Me gustas mucho cuycito</h1>
            <div class="final-images">
                <img src="cuy.png" class="final-image" alt="Imagen final">
            </div>
        </div>
    `;
}
