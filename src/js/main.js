jQuery(function() {
    'use strict';

    // open mobile menu and hamburger btn
    $(".mobile-nav--btn, .submenu-box__close--btn").on("click", function(e) {
        $(".submenu-box, .submenu-overlay").toggleClass("active");
    });

    $(".submenu-box__close--btn").on("click", function(e) {
        $(".submenu-box__item ul li, .feat-show, .auto-show").removeClass("active-state, show");
    });

    // open submenu from mobile menu
    $('.feat-show--btn').on("click", function(e) {
        $('ul.feat-show').toggleClass("show");
    });
    $('.auto-show--btn').on("click", function(e) {
        $('ul.auto-show').toggleClass("show");
    });

    $('nav.submenu-box__item ul li').on("click", function(){
        $(this).addClass("active-state").siblings().removeClass("active-state");
    });


    // slick slider 
    $('.slick-slider').slick({
        // centerMode: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        autoplaySpeed: 10000,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
              arrows: false
            }
          }
        ]
    });

    // custom slick arrows
    $('.left-nav-custom').on("click", function() {
    $('.slick-slider').slick('slickPrev');
    });

    $('.right-nav-custom').on("click", function() {
    $('.slick-slider').slick('slickNext');
    });

});
