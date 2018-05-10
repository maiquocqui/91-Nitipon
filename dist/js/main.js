'use strict';

$(document).ready(function () {
    // BANNER
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        fade: true
    });

    // Staff slide
    $('.staff-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
        // autoplay: true,
        // autoplaySpeed: 5000,
    });
});