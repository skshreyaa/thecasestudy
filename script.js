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
        img.style.transform = "scale(1.1)"; 
        setTimeout(() => img.style.transform = "scale(1)", 300);
    }, 300); 

    // Update progress bar
    document.getElementById("progress").style.width = ((index + 1) / slides.length) * 100 + "%";
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

// Toggle Light/Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") prevSlide();
});

// Auto-slideshow (every 3 seconds)
setInterval(nextSlide, 3000);

// Initial fade-in effect
setTimeout(() => document.getElementById("slide").style.opacity = "1", 300);
