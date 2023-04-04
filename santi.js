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

var emailField = document.getElementById("emailField");
const Validar = document.getElementById("buttonValidar")

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

Validar.addEventListener("click", function () {
    const email = emailField.value;
    if (validateEmail(email)) {
        alert( 'Gacias por tu suscripción!! 👌');
    } else {
        alert( '"' + emailField.value + '"' +'No corresponde a un email real 😥');
    }
});

const edadUser = document.getElementById("edad");
const button = document.getElementById("button");
const respuesta = document.getElementById("response");
button.addEventListener("click", function () {
 const edadUser = edad.value;
 if (edadUser>=65) {
    respuesta.innerHTML = "Igual ya no eres tan joven... 😥 Pero tu experiencia enseñará a muchas personas";
    } else if (edadUser>26) {
    respuesta.innerHTML = "Aún te puedes comer el mundo y demostrar de lo que vales ❤️";
    } else {
    respuesta.innerHTML = "Pero qué joven!! Si aún pagas el abono transporte joven 😊";
 }
});