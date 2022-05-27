(function(){
    const slides = [
                '<div class="slide"><img src="img/clients_img/hard_rock_logo.svg" alt="hard rock hotel label"></div>',
                '<div class="slide"><img src="img/clients_img/barcelo_logo.svg" alt="barcelo hotel label"></div>',
                '<div class="slide"><img src="img/clients_img/big_boy_logo.svg" alt="big boy restaurant label"></div>',
                '<div class="slide"><img src="img/clients_img/friendlys_logo.svg" alt="friendlys label"></div>'
    ];
    
     let currentSlide = 0;
    
    function renderCarousel() {
        const slideContainer = document.querySelector('.logo_carousel');
        slideContainer.innerHTML = slides[currentSlide];
        if(window.innerWidth >= 600) {
            const secondSlide = currentSlide +1 >= slides.length ? 0 : currentSlide +1;
            slideContainer.innerHTML += slides[secondSlide];
            if(window.innerWidth >= 1000) {
                const thirdSlide = secondSlide +1 >= slides.length ? 0 : secondSlide +1;
            slideContainer.innerHTML += slides[thirdSlide];
            }
         }
         }
         function nextSlide () {
            currentSlide = currentSlide +1 >= slides.length ? 0 : currentSlide +1;
            renderCarousel();
         }
        setInterval(nextSlide, 4000);
     renderCarousel();
        window.addEventListener('resize', renderCarousel);
    })();
    











    