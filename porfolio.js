
$(function() {
  // Masonry Grid
  $('.grid').isotope({
    filter: '*',
    // itemSelector: '.grid-item',
    masonry: {
      fitWidth: true, // When enabled, you can center the container with CSS.
      gutter: 5
    }
    // layoutMode: 'fitRows'
  });

  $('.filter a').click(function(){
    $('.filter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).data('filter');
    $('.grid').isotope({
      filter: selector
    });
    return false;
  });

  // Fancybox
  $('.fancybox').fancybox({
    helpers: {
      overlay: { locked: false }
    }
  });
});
