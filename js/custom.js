(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
      $('.color-mode-icon').toggleClass('active');
      $('body').toggleClass('dark-mode');

      // Update project images based on dark mode
      $('.project-info img').each(function() {
          var originalSrc = $(this).attr('src');
          var darkModeSrc = originalSrc.replace('images/project/', 'images/project-dark/');
          var lightModeSrc = originalSrc.replace('images/project-dark/', 'images/project/');
          $(this).attr('src', $('body').hasClass('dark-mode') ? darkModeSrc : lightModeSrc);
      });
  });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
