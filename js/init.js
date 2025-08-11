$(document).ready(function(){
    $("#background-layer").delay(1000).animate({opacity: 1}, 500)
    
    $("#haricotcoma").css({opacity: 0}).delay(500).animate({opacity: 1}, 10).animate({opacity: 0}, 10).animate({opacity: 0.75}, 200).animate({opacity: 1}, 250);
    $("#im").css({opacity: 0}).delay(300).animate({opacity: 1}, 100)
    
    $(".content-divider-start").delay(500).animate({opacity: 1}, 300)
    $(".main-content").delay(800).animate({opacity: 1}, 300)
    $(".content-divider-end").delay(1100).animate({opacity: 1}, 300)
    
    $("#xtra").css({opacity: 0}).delay(1400).animate({opacity: 1}, 250)
  });

