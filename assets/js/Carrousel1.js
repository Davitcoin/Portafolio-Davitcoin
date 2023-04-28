var carousel = document.querySelector('.carousel');
var slides = document.querySelectorAll('.slide');
var currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    var offset = i - currentIndex;
    slide.style.transform = 'translateX(' + (offset * 100) + '%) rotateY(' + (offset * -90) + 'deg) translateZ(' + (offset * -175) + 'px)';
  }
}

carousel.addEventListener('mouseenter', function() {
  updateCarousel();
});

carousel.addEventListener('mouseleave', function() {
  for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    slide.style.transform = 'translateX(' + (i * 100) + '%) rotateY(0deg) translateZ(0)';
  }
});

setInterval(nextSlide, 5000);
