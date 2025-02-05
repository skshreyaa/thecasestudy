let slides = [];
for (let i = 1; i <= 33; i++) {
    slides.push(`${i}.png`);
}
let index = 0;

function updateSlide() {
    let img = document.getElementById("slide");
    img.style.opacity = "0"; 
    setTimeout(() => {
        img.src = slides[index];
        img.style.opacity = "1";
    }, 300); 
}

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
}

function openFullscreen() {
    document.documentElement.requestFullscreen();
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") prevSlide();
});

setInterval(nextSlide, 3000);
