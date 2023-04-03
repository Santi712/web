window.addEventListener('load', function(){
        new Glider(document.querySelector('.carrusel_lista'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '.carrusel_indicadores',
            arrows: {
            prev: '.carrusel_anterior',
            next: '.carrusel_siguiente'
            },
            responsive: [
                {
                  // screens greater than >= 775px
                  breakpoint: 800,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '2',
                    slidesToScroll: '2',
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    }
                }
            ]      
        });
    });