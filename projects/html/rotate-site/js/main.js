(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        
        
        jQuery(".slider").owlCarousel({
            items: 1,
            
        });
        
        
        jQuery(".items").mixItUp();
      



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	