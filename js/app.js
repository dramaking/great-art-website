var main = function() {
	$('.nav-icon').click(function(event) {
		$(this).find('i').toggleClass('fa-times fa-bars');

		if ($('.site-wrapper').hasClass('display-nav')) {
			$('.site-wrapper').removeClass('display-nav');
		} else {
			$('.site-wrapper').addClass('display-nav');
		}
	});
};

$(document).ready(main);