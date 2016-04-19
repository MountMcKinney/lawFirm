$(document).ready(function () {
    $('.menuBtn').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.mobileMenu');
    	var slideoutMenuWidth = $('.mobileMenu').width();

    	// toggle open class
    	slideoutMenu.toggleClass("open");

    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	left: "0px"
	    	});
    	} else {
	    	slideoutMenu.animate({
		    	left: -slideoutMenuWidth
	    	}, 250);
    	}
    });
});
