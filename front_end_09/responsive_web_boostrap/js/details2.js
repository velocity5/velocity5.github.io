// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });
/*responsive click*/
$(document).ready(function() {
	
	$('.a0').click(function() {
		$('html, body').animate({scrollTop:$('#product').offset().top});
		return false;

	})
	$('.a1').click(function() {
		$('html, body').animate({scrollTop:$('#about').offset().top});
		return false;
	})
	$('.a2').click(function() {
		$('html, body').animate({scrollTop:$('#service').offset().top});
		return false;
	})
	$('.a3').click(function() {
		$('html, body').animate({scrollTop:$('#footer').offset().top});
		return false;
	})
	$('.find').click(function() {
		$('html, body').stop(true, true).delay(300).animate({scrollTop:$('#product').offset().top}, "slow");
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