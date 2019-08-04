(function($){
	"use strict";

	var stickyOffset = $('.header').offset().top;

	$(window).scroll(function(){
	  var sticky = $('.header'),
	      scroll = $(window).scrollTop();
	  if (scroll >= stickyOffset) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});

})(jQuery); // End of use strict