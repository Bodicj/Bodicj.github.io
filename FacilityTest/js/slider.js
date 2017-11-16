$(document).ready(function(){
    $('.full-slider').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.small-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});