/**
 * Created by Bodicj on 29.10.2017.
 */
$(document).ready(function () {
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);
        console.log($(target));

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
