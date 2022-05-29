(function(){
    const slides = [
                '<div class="slide"><img src="img/clients_img/hard_rock_logo.svg" alt="hard rock hotel label"></div>',
                '<div class="slide"><img src="img/clients_img/barcelo_logo.svg" alt="barcelo hotel label"></div>',
                '<div class="slide"><img src="img/clients_img/big_boy_logo.svg" alt="big boy restaurant label"></div>',
                '<div class="slide"><img src="img/clients_img/friendlys_logo.svg" alt="friendlys label"></div>'
    ];

    function  addEventListenersToPoints(params) {
        const pointsContainer = document.querySelector('.dots');
        pointsContainer.style.cursor = 'pointer'; 
        const points = document.querySelectorAll('.dot');
        for (let i = 0; i < slides.length; i++) {
            points[i].addEventListener('click', () => showSlide(i));
        }
    }
    
     let currentSlide = 0;

     function showSlide(idx) {
        currentSlide = idx;
        renderCarousel();
    }

<<<<<<< HEAD
=======
    let currentSlide = 0;
>>>>>>> 841659b616737111f738ca8eff0570667c9de035
    
    function renderCarousel() {
        const slideContainer = document.querySelector('.logo_carousel');
        const dotsContainer = document.querySelectorAll('.dot');
        const dots = document.getElementsByClassName("dot");
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" mactive", "");
        }
        dots[currentSlide].className += " mactive";
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
<<<<<<< HEAD
        addEventListenersToPoints(slides);
    })();
=======
})();
>>>>>>> 841659b616737111f738ca8eff0570667c9de035
(function () {
    const logo_carousel = document.querySelectorAll(".logo_carousel img");
    const modal = document.querySelector(".modal");
    const modalimg = document.querySelector(".modal-img");
    const close = document.querySelector(".close");

    logo_carousel.forEach(image => {
        image.addEventListener("click", () => {
            modalimg.src = image.src;
            modal.classList.add("appear");
            close.addEventListener("click", () => {
                modal.classList.remove("appear");
            });
        });
    });
<<<<<<< HEAD
})();
    



    






    
=======
})();
>>>>>>> 841659b616737111f738ca8eff0570667c9de035
