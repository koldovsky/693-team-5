// 
(function (){
const slides = [
    "https://3000-koldovsky-693team5-s59emz63t2j.ws-eu46.gitpod.io/img/img_gallery/Image1.png",
    "https://3000-koldovsky-693team5-9x7qibni8u6.ws-eu46.gitpod.io/img/img_gallery/image2.png",
    "https://3000-koldovsky-693team5-s59emz63t2j.ws-eu46.gitpod.io/img/img_gallery/image3.png",
    "https://3000-koldovsky-693team5-s59emz63t2j.ws-eu46.gitpod.io/img/img_gallery/image4.png",
    "https://3000-koldovsky-693team5-s59emz63t2j.ws-eu46.gitpod.io/img/img_gallery/image5.png"
  ];
  
  let currentSlide;
  
  function next() {
    getCurrentSlide();
    currentSlide++;
    if (currentSlide === slides.length) {
        currentSlide =0;
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
    return currentSlide = slides.indexOf(document.querySelector(".modalimg").src);
  }
  
  function imgUpdate() {
    let img = document.querySelector(".modalimg");
    img.src = slides[currentSlide];
  }
  
  const buttonNext = document.querySelector(".next");
  const buttonPrev = document.querySelector(".prev");
  
  buttonNext.addEventListener("click", () => {
    next();
  });
  
  buttonPrev.addEventListener("click", () => {
    prev();
  });
})();