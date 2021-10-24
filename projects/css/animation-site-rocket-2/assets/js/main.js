(function ($) {
    "use strict";
    // header_top_area
    var langIcon = $('.romana_header_top .language_option'),
        lang = $('.romana_header_top .lang');
    langIcon.on('click', function () {
        lang.toggleClass('clicked');
    });
    $('.romana_header_top .lang li').on('click', function () {
        lang.removeClass('clicked');
    });
    $('.romana_header_top .lang').on('mouseleave', function () {
        lang.removeClass('clicked');
    });
    //this code is for submenu
    jQuery(document).ready(function () {
        var window_width = $(window).width();
        // submenu parent add class
        $('.dropdown-menu').each(function () {
            $(this).closest('li').addClass('dropdown');
        });
        $('.mega-menu').each(function () {
            $(this).closest('li').addClass('static');
        });
        if (window_width < 768) {
            $('.dropdown a').on('click', function () {
                $(this).siblings('ul').slideToggle();
                $(this).toggleClass('active');
                $(this).closest('li').toggleClass('mb-none');
            });
        }
        if (window_width > 767) {
            $('.dropdown').on('mouseenter', function () {
                $(this).addClass('open');
            });
            $('.dropdown').on('mouseleave', function () {
                $(this).removeClass('open');
            });
        }
        //This code is for owl Carousel
        if ($.fn.owlCarousel) {
            //Hero_Slider_crsl
            $('.hero_slider').owlCarousel({
                nav: false,
                dots: true,
                autoplay: true,
                loop: true,
                items: 1,
                mouseDrag: false,
                touchDrag: false,
                animation: true,
                navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            });
            //tihs code is for slider effect
            $(".hero_slider").on('translate.owl.carousel', function () {
                $('.hero_text ol').removeClass('slideInDown animated').hide();
                $('.hero_text h1').removeClass('zoomIn animated').hide();
                $('.hero_text p').removeClass('zoomIn animated').hide();
                $('.hero_text .hero_btn').removeClass('fadeInUp animated').hide();
                $('.hero_img').removeClass('slideInRight animated').hide();
            });
            $(".hero_slider").on('translated.owl.carousel', function () {
                $('.owl-item.active .hero_text ol').addClass('slideInDown animated').show();
                $('.owl-item.active .hero_text h1').addClass('zoomIn animated').show();
                $('.owl-item.active .hero_text p').addClass('zoomIn animated').show();
                $('.owl-item.active .hero_text .hero_btn').addClass('fadeInUp animated').show();
                $('.owl-item.active .hero_img').addClass('slideInRight animated').show();
            });
            
//            //client_crsl
//            $('.romana_client_crsl').owlCarousel({
//                nav: true,
//                dots: false,
//                autoplay: false,
//                loop: true,
//                margin: 10,
//                smartSpeed: 1000,
//                mouseDrag: false,
//                touchDrag: false,
//                items: 3,
//                navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
//                responsiveClass: true,
//                responsive: {
//                    300: {
//                        items: 1,
//                    },
//                    480: {
//                        items: 1,
//                    },
//                    768: {
//                        items: 2,
//                    },
//                    1170: {
//                        items: 3,
//                    },
//                }
//            });
        }
//        //this code is for input label
//        $('.field input, .field textarea, .field textarea').each(function () {
//            $(this).focus(function () {
//                $(this).siblings('label').hide();
//            });
//            $(this).focusout(function () {
//                $('label').show();
//            });
//        });
//        //scrollTop
//        jQuery('#scrollTop').on('click', function(){
//            jQuery("html, body").animate({ scrollTop: 0 }, 600);
//            return false;
//        });
//        //faq toggle stuff 
//        $('.togglefaq').on('click', function (e) {
//            $('.single-acordion').removeClass('display-block');
//            e.preventDefault();
//            var notthis = $('.active-item').not(this);
//            notthis.find('.fa fa-simple-down').addClass('fa fa-simple-right').removeClass('fa fa-simple-down');
//            notthis.toggleClass('active-item').next('.faqanswer').slideToggle(300);
//            $(this).toggleClass('active-item').next().slideToggle("fast");
//            $(this).children('i').toggleClass('fa fa-simple-right fa fa-simple-down');
//        });
//        //Preloder
//        $('#preloader').fadeOut(); // will first fade out the loading animation
//        $('.preloader_spinner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
//        $("body").removeClass("preloader_active");
    });
})(jQuery);