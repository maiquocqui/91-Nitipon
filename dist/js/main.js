'use strict';

$(document).ready(function () {
    // header script
    $('header').scrollToFixed({
        zIndex: 1000
    });

    if ($(window).width() < 1200) {
        // $('header .menu').insertAfter('header .col-right');
        // $('header .contact').insertAfter('.menu .menu-wrap');
    }

    $('.btn-showmenu').click(function () {
        $('.menu').slideToggle(500);
        // $('.overlay').fadeIn(500);
    });
    $('.overlay').click(function () {
        // $(this).fadeOut(500);
        $('.menu').removeClass('open');
    });

    $('.btn-showsub').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(500);
    });

    // search toggle
    $('.search-toggle').click(function () {
        $('.search-wrap').fadeToggle(300);
    });

    // BANNER
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        dots: true,
        fade: true,
        adaptiveHeight: true
    });

    // service slide
    $('.home-service .service-list , .service-other .service-list , .home-news .news-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        }]
    });

    // Staff slide
    $('.staff-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    // brand slide
    if ($(window).width() < 768) {
        $('.home-brand .brand-list .row').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000
        });
    }

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
    $('.feature .feature-name').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.feature-des').slideUp(500);
        } else {
            $('.feature').removeClass('active');
            $('.feature').find('.feature-des').slideUp(500);
            $(this).parent().addClass('active');
            $(this).parent().find('.feature-des').slideDown(500);
        }
    });

    // btn show service category
    $('.home-title.clone').text($('.service-cate li.active a').text());
    $('.btn-showcate').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.service-cate').slideToggle(300);
    });

    // mobile product detail name
    if ($(window).width() < 992) {
        $('.product-page .home-title').text($('.product-info .product-name').text());
    }

    // About viewmore
    $('.about-section .btn-viewmore').click(function () {
        $('.hidden-content').slideToggle(300);
        var viewmore = "Xem thêm";
        var viewmoreless = "Thu gọn";
        if (!$("body").hasClass("vi-vn")) {
            viewmore = "Read more";
            viewmoreless = "Show Less";
        }
        $(this).text() === viewmore ? $(this).text(viewmoreless) : $(this).text(viewmore);
    });
});