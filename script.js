let slides = [];
for (let i = 1; i <= 33; i++) {
    slides.push(`${i}.png`);
}
let index = 0;

// Update slide function
function updateSlide() {
    let img = document.getElementById("slide");
    img.style.opacity = "0"; 

    setTimeout(() => {
        img.src = slides[index];
        img.style.opacity = "1";
        img.style.transform = "scale(1.05)";
        setTimeout(() => img.style.transform = "scale(1)", 300);
    }, 300); 

    highlightThumbnail();
}

// Next & Previous Slide Functions
function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
}

// Fullscreen Mode
function openFullscreen() {
    document.documentElement.requestFullscreen();
}

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Thumbnail Navigation
function loadThumbnails() {
    let container = document.getElementById("thumbnails");
    slides.forEach((slide, i) => {
        let thumb = document.createElement("img");
        thumb.src = slide;
        thumb.className = "thumb";
        thumb.onclick = () => {
            index = i;
            updateSlide();
        };
        container.appendChild(thumb);
    });
}

function highlightThumbnail() {
    document.querySelectorAll(".thumb").forEach((t, i) => {
        t.style.border = i === index ? "3px solid #ff6b6b" : "none";
    });
}

// Keyboard Navigation
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") prevSlide();
});

// Initialize
window.onload = () => {
    updateSlide();
    loadThumbnails();
};
