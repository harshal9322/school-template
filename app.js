// Get all sliders on the page
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const slides = Array.from(slider.querySelectorAll('img')).filter(img => img.src); // only images with src

    if (slides.length > 1) { // scroll only if more than 1 valid image
        let index = 0;
        slider.style.transition = "transform 0.5s ease-in-out";

        setInterval(() => {
            index = (index + 1) % slides.length;
            slider.style.transform = `translateX(${-index * 100}%)`;
        }, 3000);
    }
});