var main = function() {
	$('.nav-icon').click(function(event) {
		$(this).find('i').toggleClass('fa-times fa-bars');

		if ($('.site-wrapper').hasClass('display-nav')) {
			$('.site-wrapper').removeClass('display-nav');
			$('body').css({"overflow":"scroll"});
			$('iframe').delay(1000).show(0);
		} else {
			$('.site-wrapper').addClass('display-nav');
			$('body').css({"overflow":"hidden"});
			$('iframe').hide();
		}
	});

	$(".blog-nav-mobile").html($(".blog-nav-container").html());

   
    $(window).click(function(event) {
    	if ($(".blog-nav-mobile ul").hasClass("expanded")) {
    		$(".blog-nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(".blog-nav-trigger span").removeClass("open");
            $(".blog-nav-trigger span").removeClass("update");
    	}

    });

     $(".blog-nav-trigger span").click(function(event){      
     	event.stopPropagation();  
        if ($(".blog-nav-mobile ul").hasClass("expanded")) {
            $(".blog-nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
            $(this).removeClass("update");
        } else {
            $(".blog-nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
            $(this).addClass("update");
        }
    });

    var moveUp = {
    	origin: 'bottom',
    	distance: '100%',
    	duration: 800,
    	scale: 1,
    	easing: 'ease'
    }

    var moveLeft = {
    	origin: 'right',
    	distance: '100%',
    	duration: 800,
    	scale: 1,
    	easing: 'ease'
    }

    var moveRight = {
    	origin: 'left',
    	distance: '100%',
    	duration: 800,
    	scale: 1,
    	easing: 'ease'
    }

    window.sr = ScrollReveal();
    sr.reveal('.reveal');
    sr.reveal('.moveUp', moveUp);
    sr.reveal('.in-wrapper p', moveUp);
    sr.reveal('.blog-content', moveUp);
    sr.reveal('.date-wrapper', moveRight);
    sr.reveal('.moveLeft', moveLeft);
    sr.reveal('.moveRight', moveRight);


};

$(document).ready(main);