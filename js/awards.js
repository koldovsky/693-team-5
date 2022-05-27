(function () {
    const slidesAward = [
      '<div class="slideAward"> <img class="awards_one_img" src="img/awards/awards.png" alt="awards_one"><p class="awards_text_one">Best Wedding Dress Contest - 1st Place (2018)</p></div>',
      '<div class="slideAward"><img class="awards_two_img" src="img/awards/awards_2.png" alt="awards_two"><p class="awards_text_two">Best Conventional Wedding Dress Design (2017)</p></div>',
      '<div class="slideAward"><img class="awards_three_img" src="img/awards/awards_one-17x0.png" alt="awards_three"><p class="awards_text_three">Best Wedding Dress Boutique (2016)</p></div>',
    ];
  
    let actualSlide = 0;
  
    function reviveCarousel() {
      const carouselContainer = document.querySelector('.carousel_awards');
      carouselContainer.innerHTML = slidesAward[actualSlide];
      if(window.innerWidth > 600) {
        const secondSlide = actualSlide +1 >= slidesAward.length ? 0 : actualSlide +1;
        carouselContainer.innerHTML += slidesAward[secondSlide];
        if(window.innerWidth > 1000) {
            const thirdSlide = secondSlide +1 >= slidesAward.length ? 0 : secondSlide +1;
        carouselContainer.innerHTML += slidesAward[thirdSlide];
        }
     }
    }
    function followingSlide() {
      actualSlide =
        actualSlide + 1 >= slidesAward.length ? 0 : actualSlide + 1;
      reviveCarousel();
    }
    setInterval(followingSlide, 4000);
    reviveCarousel();
    window.addEventListener('resize', reviveCarousel);
  });