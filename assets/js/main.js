$(function() {
  // Cache the window object
  var $window = $(window);
  // Parallax BG effect
  $('section[data-type="background"]').each(function() {
    var $bgobj = $(this);
    
    $(window).scroll(function() {
      // scroll the bg at var speed
      // the yPos is a negative value because we're scrolling up
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // Final BG position
      var coords = '50% '+ yPos + 'px';

      // Move the BG
      $bgobj.css({ backgroundPosition: coords });
    });// end window scroll
  });
});


