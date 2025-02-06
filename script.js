let slides = [];
for (let i = 1; i <= 33; i++) {
    slides.push(`${i}.png`);
}
let index = 0;

// Start Presentation
function startPresentation() {
    document.getElementById("cover").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("cover").style.display = "none";
        document.getElementById("presentation").style.display = "flex";
    }, 1000);
}

// Update slide
function updateSlide() {
    let img = document.getElementById("slide");
    img.style.opacity = "0";
    setTimeout(() => {
        img.src = slides[index];
        img.style.opacity = "1";
    }, 300);
}

// Next & Previous Slide
function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
}

// Fullscreen Mode Toggle
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Keyboard Shortcuts
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") prevSlide();
});

// Initialize
window.onload = updateSlide;
