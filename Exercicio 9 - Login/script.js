const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
 
    slides[currentSlide].style.display = 'block';
}
function nextSlide() {
    showSlide(currentSlide + 1);
}
function prevSlide() {
    showSlide(currentSlide - 1);
}
setInterval(nextSlide, 5000);
showSlide(currentSlide);