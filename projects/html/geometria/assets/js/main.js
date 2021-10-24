(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".show-menu").on("click",function(){
          $(".offvcanvus-menu").addClass("active");  
          $(".offcanvus-overlay").addClass("active");  
        });
        
        $(".close-menu, .offcanvus-overlay").on("click", function(){
            $(".offvcanvus-menu").removeClass("active");
            $(".offcanvus-overlay").removeClass("active");
        });
        //partner-carousel
        $(".partner-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            mouseDrag: false,
            touchDrag: false,
            margin: 100,
            responsive: {
                0 : {
                    items : 2
                },
                768 : {
                    items : 4
                },
                992 : {
                    items : 6
                }
            }
        });
        
        

        
        //wow-animation
        new WOW().init();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	