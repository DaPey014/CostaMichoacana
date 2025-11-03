// carousel.js
// Rota imágenes de fondo dentro de #bg-carousel con efecto crossfade

(function(){
    'use strict';

    const images = [
        'img/fondo_web.jpg',
        '../carrusel/tdm.jpg',
        '../carrusel/atardecer1.jpg',
        '../carrusel/atardecer2.jpg',
        '../carrusel/atardecer3.jpg',
        '../carrusel/atardecer4.jpg',
        '../carrusel/atardecer5.jpg',
    ];

    const interval = 5000; // ms por slide
    const container = document.getElementById('bg-carousel');
    if(!container) return;

    let current = 0;
    const slides = [];

    function createSlides(){
        images.forEach((src, i) => {
            const div = document.createElement('div');
            div.className = 'slide';
            div.style.backgroundImage = `url(${src})`;
            if(i === 0) div.classList.add('show');
            container.appendChild(div);
            slides.push(div);
        });
    }

    function next(){
        slides[current].classList.remove('show');
        current = (current + 1) % slides.length;
        slides[current].classList.add('show');
    }

    function init(){
        createSlides();
        setInterval(next, interval);
    }

    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
