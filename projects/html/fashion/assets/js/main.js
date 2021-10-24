(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        //masonary
        $(".product-list").masonry();
        
        //home-slider
        $(".homepage-slides").owlCarousel({
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'>", "<i class='fa fa-long-arrow-right'>"],
            loop: true,
            items: 1,
            autoplay: true,
            dots: false,
            mouseDrag: false,
            touchDrag: false
        });
        
        
        //bottom-carousel
        $(".product-promotions").owlCarousel({
            nav: false,
            loop: true,
            items: 1,
            autoplay: true,
            dots: true,
            mouseDrag: false,
            touchDrag: false
        });
        
        //Off-canvas
        $(".menu-trigger").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });
        
        $(".menu-close, .off-canvas-overlay").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });
        
        //search-trigger
        $(".search-trigger").on("click", function() {
            $(".search-bar, .search-close").addClass("active");
            $(this).hide();
            return false;
        });
        $(".search-close").on("click", function() {
            $(".search-bar, .search-close").removeClass("active");
            $(".search-trigger").show();
            return false;
        });

        
        //home-slider text animation
        $(".homepage-slides").on("translate.owl.carousel",function(){
            
            $(".single-slide-item p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single-slide-item p:nth-child(2)").removeClass("animated zoomIn").css("opacity", "0");
            $(".slide-alternative-color").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        $(".homepage-slides").on("translated.owl.carousel", function(){
            
            $(".single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
            $(".single-slide-item p:nth-child(2)").addClass("animated zoomIn").css("opacity", "1");
            $(".slide-alternative-color").addClass("animated fadeInUp").css("opacity", "1");
        });
        
        //bottom-slider text animation
        $(".product-promotions").on("translate.owl.carousel",function(){
            
            $(".promo-bg").removeClass("animated fadeInUp").css("opacity", "0");
            $(".boxed-btn").removeClass("animated tada").css("opacity", "0");
            $(".promo-content p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".promo-title").removeClass("animated fadeInRight").css("opacity", "0");
        });
        
        $(".product-promotions").on("translated.owl.carousel", function(){
            
            $(".promo-bg").addClass("animated fadeInUp").css("opacity", "1");
           $(".boxed-btn").addClass("animated tada").css("opacity", "1");
            $(".promo-content p").addClass("animated fadeInUp").css("opacity", "1");
            $(".promo-title").addClass("animated fadeInRight").css("opacity", "1");
        });
        
        // wow-aniamtion
        new WOW().init();
        
        //custom scroll-Bar
         $("body").niceScroll({
            cursorwidth: 10,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: '#558fde',
            autohidemode: false,
            horizrailenabled: false,
            cursorfixedheight: 150,
            zindex: 9999
        });
        
//------------------------------------------------------------
         //Window-Scroll funtion
        $(window).scroll(function(){
            if($(this).scrollTop()>800){
                $(".gotoup").fadeIn();
            }
            else{
                $(".gotoup").fadeOut();
            }
        });
        //Scroll When click
          $(".gotoup").on("click", function(){
                $("html, body").animate({scrollTop:0}, 800);
            });
        
    }); //End Window ready function
   
        //Start Window Load function
    jQuery(window).load(function(){

        jQuery(".fashion-slide-preloader-wrap").fadeOut(2000);
        
    });


}(jQuery));	