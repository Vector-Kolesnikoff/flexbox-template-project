(function ($) {  

  $(document).ready(function() {  
      $('body').niceScroll();
  });

  $('.header-menu__burger').click(function() {
  // $('.header-menu__burger').on('ckick', function() {
    $(this).toggleClass('active');
    $('.header-menu__list').toggleClass('active');
  });

})(jQuery);