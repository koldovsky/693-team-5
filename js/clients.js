(function(){
    const slides = [
                '<div class="slide"><img src="img/clients_img/hard_rock_logo.svg" alt="hard rock hotel label"></div>',
                '<div class="slide"><img src="img/clients_img/barcelo_logo.svg" alt="barcelo hotel label"></div>',
                '<div class="slide"><img src="img/clients_img/big_boy_logo.svg" alt="big boy restaurant label"></div>',
                '<div class="slide"><img src="img/clients_img/friendlys_logo.svg" alt="friendlys label"></div>'
                
    ];
    const images = [
        'img/clients_img/hard_rock_logo.svg',
        'img/clients_img/barcelo_logo.svg',
        'img/clients_img/big_boy_logo.svg',
        'img/clients_img/friendlys_logo.svg'
    ];

    function showModal() {
        const modal = document.querySelector('.logo_modal');
        const img = document.querySelector('.modal_img');
        modal.setAttribute('class', 'logo_modal appear');
        img.setAttribute('src','img/clients_img/hard_rock_logo.svg');
    }

    function addEventListenerToNext() {
        const next = document.querySelector('.logo_next');
        const img = document.querySelector('.modal_img');
        let index = 0;
        next.addEventListener('click',()=>{
            if(index<images.length){
             img.setAttribute('src',images[index++])   
            }else{
                index = 0
            }

        })
    }

    function addEventListenerToPrev() {
        const next = document.querySelector('.logo_prev');
        const img = document.querySelector('.modal_img');
        let index = 3;
        next.addEventListener('click',()=>{
            if(index>=0){
             img.setAttribute('src',images[index--])   
            }else{
                index = 3
            }

        })
    }

    function closeModal() {
        const modal = document.querySelector('.logo_modal.appear');
        modal.setAttribute('class','logo_modal');
    }

    function  addEventListenersToIllustration() {
        const illustration = document.querySelector('.logo_carousel');
        illustration.addEventListener('click', () => showModal());
    }

    function  addEventListenersToClose() {
        const close = document.querySelector('.logo_close');
        close.addEventListener('click',()=>closeModal());
    }



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
        setInterval(nextSlide, 3000);
    renderCarousel();
        window.addEventListener('resize', renderCarousel);
        addEventListenersToPoints(slides);
        addEventListenersToIllustration();
        addEventListenersToClose();
        addEventListenerToNext();
        addEventListenerToPrev();

})();

