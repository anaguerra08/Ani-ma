let currentIndex = 0;

document.querySelector('.next').addEventListener('click', function() {
    const carrusel = document.querySelector('.carrusel ul');
    const slides = document.querySelectorAll('.carrusel li');
    const maxIndex = slides.length / 4 - 1; 
    
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    
    carrusel.style.marginLeft = `-${currentIndex * 100}%`;
});

