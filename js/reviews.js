document.addEventListener('DOMContentLoaded', function () {
      const slider = new reviewSlider ('.slider__item', {
        loop: true,
        autoplay: true,
        interval: 1000,
        refresh: true,
      });
    });