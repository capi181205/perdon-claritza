const btnRandom = document.querySelector("#btn-random");

function moverBoton() {
    const width = window.innerWidth - btnRandom.offsetWidth;
    const height = window.innerHeight - btnRandom.offsetHeight;

    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);

    btnRandom.style.left = `${randomX}px`;
    btnRandom.style.top = `${randomY}px`;
}

btnRandom.addEventListener("mouseenter", moverBoton);
btnRandom.addEventListener("touchstart", moverBoton);