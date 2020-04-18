$(document).ready(function() {
	$('.navbar-right li:nth-child(1) a')
	.click(function() {
		$("html, body").animate({scrollTop: 600}, "slow");
		return false;
	})
	$('.navbar-right li:nth-child(2) a')
	.click(function() {
		$("html, body").animate({scrollTop: 980}, "slow");
		return false;
	})
	$('.navbar-right li:nth-child(3) a')
	.click(function() {
		$("html, body").animate({scrollTop: 1300}, "slow");
		return false;
	})
})




/*Scroll to top when arrow up clicked BEGIN*/
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
 /*Scroll to top when arrow up clicked END*/