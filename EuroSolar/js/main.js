$('.carousel').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 900,
        settings: {slidesToShow: 2}
    },
    {
        breakpoint: 425,
        settings: {slidesToShow: 1}
    }
    ]
});

$(document).ready(function () {
    if(window.matchMedia('(max-width: 425px)').matches) {
        $('.service').hover(
            function () {
                $(this).css("max-height", "354px");
            },
            function () {
                $(this).css("max-height", "106px");
            }
        )
    }
});
