!function(a){"use strict";var b=a(".header").offset().top;a(window).scroll(function(){var c=a(".header");a(window).scrollTop()>=b?c.addClass("fixed"):c.removeClass("fixed")}),a(".menu_btn").on("click",function(){return a(this).toggleClass("open"),a(this).next().toggleClass("open"),a("body").toggleClass("menu_open"),!1}),a(window).scroll(function(){a(this).scrollTop()>=200?a(".m_scrollup").addClass("m_scrollup_visible"):a(".m_scrollup").removeClass("m_scrollup_visible")}),a(".m_scrollup").click(function(){a("body,html").animate({scrollTop:0},"slow")})}(jQuery);