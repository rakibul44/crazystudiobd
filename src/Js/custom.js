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
    
   
    
    
}) (jQuery);