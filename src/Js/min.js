(function($){
    'use strict'
    
     //owlcarousel
     $('.slide-contant').owlCarousel({
        loop:true,
           autoplay:true,
           autoplayTimeout:3000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        } })
    
    
    
    
})(jQuery);