(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".header-area").sticky({topSpacing: 0});
        
        //smooth-menu
        $('li.smooth-menu a').bind('click', function(event){
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"}, 1200, 'easeInOutExpo');
            
            event.preventDefault();
        });
        //jquery scroll pay
        $('body').scrollspy({
            target: '.navbar-collaspe',
            offset: 95
        });
        
        //parallax
       $('.parallax-bg').parallax("50%", 0.1);
       $('.parallax-bg-2').parallax("50%", 0.1);
    
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	