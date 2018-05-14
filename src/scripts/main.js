$(document).ready(function() {
    // header script
    $('header').scrollToFixed({
        zIndex: 1000,
    });

    if ($(window).width() < 1200) {
        $('header .menu').insertAfter('header .col-right');
        $('header .contact').insertAfter('.menu .menu-wrap');
    }

    $('.btn-showmenu').click(function() {
        $('.menu').addClass('open');
        $('.overlay').fadeIn(500);
    })
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
    })

    // BANNER
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        fade: true,
    });

    // Staff slide
    $('.staff-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
    });

    // Product slide
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    // SERVICE TOGGLE
    $('.feature .feature-name').click(function() {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active')
            $(this).parent().find('.feature-des').slideUp(500);
        } else {
            $('.feature').removeClass('active');
            $('.feature').find('.feature-des').slideUp(500);
            $(this).parent().addClass('active')
            $(this).parent().find('.feature-des').slideDown(500);
        }
    });
});