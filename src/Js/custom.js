(function($){
    'use strict'
    
    // code starts!
    
    $('.menu-icon i').on('click', function(){
        $('.menu').slideToggle();
    })
    
    
    
    $(window).resize( function(){
       var screenSize = $(window).width();
        
        if(screenSize > 991) {
           $('.menu').removeAttr('style');
           }
    } )
    
    $(window).scroll( function(){
        var durotto = $(window).scrollTop();
        if (durotto > 350) {
            $('.topatop').fadeIn();
            }
        else{
            $('.topatop').fadeOut();
        }
    } );
    
    $('.topatop').on('click', function(){
        $('html').animate({ scrollTop : 0 }, 2000)
    })
    
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
    
    
}) (jQuery);