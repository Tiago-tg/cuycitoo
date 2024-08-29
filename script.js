let stage = 1;

function handleYes() {
    if (stage === 1) {
        document.getElementById('question').textContent = "¿Me amas?";
        stage++;
    } else if (stage === 2) {
        window.location.href = "secuencia.html";
    }
}

function handleNo() {
    const container = document.querySelector('.button-container');

    if (container.style.flexDirection === 'row-reverse') {
        container.style.flexDirection = 'row';
    } else {
        container.style.flexDirection = 'row-reverse';
    }
}
