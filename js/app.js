var main = function() {
	$('.nav-icon').click(function(event) {
		$('.slide-menu').animate({
			left: "0px"
		}, 200);

	$('body').animate({
		left: "18rem"
	}, 200);
	});
};

$(document).ready(main);