// app/components/carousel.js
export const initializeCarousel = () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carouselContainer = document.querySelector('.flex.overflow-x-auto');

  if (prevButton && nextButton && carouselContainer) {
    prevButton.addEventListener('click', () => {
      carouselContainer.scrollLeft -= 300;
    });

    nextButton.addEventListener('click', () => {
      carouselContainer.scrollLeft += 300;
    });
  }
};
