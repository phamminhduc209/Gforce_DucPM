(function($){
	"use strict";

    // Fixed header
	var stickyOffset = $('.header').offset().top;
	$(window).scroll(function(){
	  var sticky = $('.header'),
	      scroll = $(window).scrollTop();
	  if (scroll >= stickyOffset) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});

    // Open menu
    $('.menu_btn').on('click', function(){
        $(this).toggleClass('open');
        $(this).next().toggleClass('open');
        $('body').toggleClass('menu_open');
        return false;
    });


    // ===== Back to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('.m_scrollup').addClass('m_scrollup_visible');
        } else {
            $('.m_scrollup').removeClass('m_scrollup_visible');
        }
    });
    $('.m_scrollup').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 'slow');
    });

})(jQuery); // End of use strict