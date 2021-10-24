(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        //home Slider
        var homepageSlides = $(".homepage-slides");

        homepageSlides.owlCarousel({
            items:1,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            loop: true,
            autoplay: true,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
        });

        //slider text animation

        homepageSlides.on("translate.owl.carousel",function(){
            
            $(".single-slide-item h2, .single-slide-item p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single-slide-item .slide-btn").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        homepageSlides.on("translated.owl.carousel", function(){
            
            $(".single-slide-item h2, .single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
            $(".single-slide-item .slide-btn").addClass("animated fadeInUp").css("opacity", "1");
        });
        

        //Indusrtrial Testimonial 
        $(".indusrtrial-testimonial").owlCarousel({
            items:1,
            loop: true,
            nav: false,
            autoplay: true,
            dots: true,
            mouseDrag: false,
            touchDrag: false,
        });
        
        // Magnific poupup vdo
        $(".video-btn").magnificPopup({
            type: 'video'
        });
        
        //------ SlickNav Mobile-menu
        $("#mobile-menu").slicknav({
            prependTo: '#mobile-menu-wrap'
        });


        //wow-animation
        new WOW().init();

         //Window-Scroll funtion
        $(window).scroll(function(){
            if($(this).scrollTop()>400){
                $(".gotoup").fadeIn();
            }
            else{
                $(".gotoup").fadeOut();
            }
        });
        //Scroll When click
         $(".gotoup").click(function(){
                $("html, body").animate({scrollTop:0}, 800);
            });


    });


    jQuery(window).load(function(){

        jQuery(".preloader-wrap").fadeOut(2000);
    });


}(jQuery));	