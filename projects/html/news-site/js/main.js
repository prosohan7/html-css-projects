(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        //main slider
        $(".slider").owlCarousel({
            items:5,
            dots: true,
            loop: true
        });
        
        //carousel-post
        $(".carousel-post").owlCarousel({
            items:3,
            dots: true,
            margin: 15,
            loop: true
        });
        
        //slider-posts
        $(".slider-posts").owlCarousel({
            items:1,
            nav: true,
            navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],     
            loop: true
        });
        
        //news-in-pic height set
        var npth = $(".news-pic-thumb").height();
        
        $(".news-in-pic .post").height( npth - 15);


        //entertainment height set
        
        var enthumb = $(".entertainment-thumb").height();
        
        $(".entertainment .post img").height(enthumb - 10);



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	