/*responsive click*/
$(document).ready(function() {
	
	$('.click-about').click(function() {
		$('html, body').animate({scrollTop:$('#about').offset().top}, "slow");
		return false;

	})
	$('.click-product').click(function() {
		$('html, body').animate({scrollTop:$('#product').offset().top}, "slow");
		return false;
	})
	$('.click-service').click(function() {
		$('html, body').animate({scrollTop:$('#service').offset().top}, "slow");
		return false;
	})
	$('.click-contact').click(function() {
		$('html, body').animate({scrollTop:$('#contact').offset().top}, "slow");
		return false;
	})
})

/*Scroll to top when arrow up clicked*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
/* click menu ra */
$(document).on('click', function() {
	$('.collapse').collapse('hide');
});