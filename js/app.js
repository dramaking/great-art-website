var main = function() {
	$('.nav-icon').click(function(event) {
		$(this).find('i').toggleClass('fa-times fa-bars');

		if ($('.site-wrapper').hasClass('display-nav')) {
			$('.site-wrapper').removeClass('display-nav');
		} else {
			$('.site-wrapper').addClass('display-nav');
		}
	});

	// $('.lightbox').click(function(event) {
	// 	$('#lightgallery').lightGallery({
	// 		fullScreen: true,
	// 		zoom: true,
	// 		download: false
	// 	});
	// });

	// $('#lightgallery').lightGallery({
	// 	fullScreen: true,
	// 	zoom: true,
	// 	download: false
	// });
	// var movementStrength = 25;
	// var height = movementStrength / $(window).height();
	// var width = movementStrength / $(window).width();
	// $(".full-section").mousemove(function(e){
 //          var pageX = e.pageX - ($(window).width() / 2);
 //          var pageY = e.pageY - ($(window).height() / 2);
 //          var newvalueX = width * pageX * -1 - 25;
 //          var newvalueY = height * pageY * -1 - 50;
 //          $('.full-section').css("background-position", newvalueX+"px     "+newvalueY+"px");
	// });
};

$(document).ready(main);