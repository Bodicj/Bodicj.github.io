/**
 * Created by Bodicj on 29.10.2017.
 */
$(document).ready(function () {
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        if ($('header').css('height') != '80px') {
            $('header').css('height', '80px');
            $('nav').css('display', 'none');
            $('.hamburger-menu').css('display', 'block');
            $('.close').css('display', 'none');
        }

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-93
        }, 900, 'swing', function () {
            window.location.hash = target - 93;
        });
    });
    $('.hamburger-menu').click(function (e){
        e.preventDefault();
        if ($('header').css('height') == '80px'){
            $('header').css('height', '2075px');
            $('nav').css('display', 'flex');
            $('.hamburger-menu').css('display', 'none');
            $('.close').css('display', 'block');
        }
        else{
        }
    });
    $('.close').click(function (e) {
        e.preventDefault();
        console.log($('header').css('height'));
        if ($('header').css('height') != '80px') {
            $('header').css('height', '80px');
            $('nav').css('display', 'none');
            $('.hamburger-menu').css('display', 'block');
            $('.close').css('display', 'none');
        }
    });
});
