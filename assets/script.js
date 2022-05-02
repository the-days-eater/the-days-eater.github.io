$(document).ready(function() {
    $("#banner-img").delay(500).fadeTo(1000,1);
    $("h1").delay(1500).fadeTo(1000,1);
    $("#frame1").delay(1800).fadeTo(1000,1);
    $("#frame2").delay(2100).fadeTo(1000,1);
    $("#h2-1").delay(2000).fadeTo(1000,1);
    $("#p-1").delay(2400).fadeTo(1000,1);
    $("#nft1").delay(2700).fadeTo(1000,1);

});

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + ($(this).innerHeight() * .2);
      $(".fadein").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight() /2;
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });