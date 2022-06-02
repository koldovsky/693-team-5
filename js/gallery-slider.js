(function () {
  const buttonNext = document.querySelector(".next");
  const buttonPrev = document.querySelector(".prev");
  buttonNext.addEventListener("click", () => {
    next();
  });


  
  let slides = [];
  imgs.forEach(img => {
    slides.push(img.src);
  });

  let currentSlide;

  function next() {
    getCurrentSlide();
    currentSlide++;
    if (currentSlide === slides.length) {
      currentSlide = 0;
    }
    imgUpdate();
  }

  function prev() {
    getCurrentSlide();
    currentSlide--;
    if (currentSlide === -1) {
      currentSlide = slides.length - 1;
    }
    imgUpdate();
  }

  function getCurrentSlide() {
    currentSlide = slides.indexOf(document.querySelector(".modal-img").src);
  }

  function imgUpdate() {
    let img = document.querySelector(".modal-img");
    img.src = slides[currentSlide];
  }
})();