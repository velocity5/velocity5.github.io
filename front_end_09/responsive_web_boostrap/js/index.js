
/*responsive click*/
$(document).ready(function() {
	$('.click-home').click(function() {
		$('html, body').animate({scrollTop:0});
		return false;

	})
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
		$('html, body').animate({scrollTop:$('#footer').offset().top}, "slow");
		return false;
	})
	$('.find').click(function() {
		$('html, body').stop(true, true).delay(300).animate({scrollTop:$('#about').offset().top}, "slow");
		return false;
	})
})
/* function scroll */
$(function() {
	$(window).scroll(function() {
		currentPostion = $('html,body').scrollTop();
		if (currentPostion > 200) {
			$('.navbar-fixed-top').addClass('squeeze');
		} else {
			$('.navbar-fixed-top').removeClass('squeeze');
		}
	})
});
/* responsive on mobile */
$(function() {
	let docao = $(window).height(); 
	$('.background_top').css({'height':docao});

	$(window).resize(function() {
		let docao = $(window).height(); 
		$('.background_top').css({'height':docao});
	});
})
/* click menu ra */
$(document).on('click', function() {
	$('.collapse').collapse('hide');
});
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

 /*Scroll to top when arrow up clicked END*/
 /*validate email*/
/*
 $(document).ready(function() {
 	$('#inputEmail').change(function() {
 		let sEmail = $('#inputEmail').val();
 		let filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 		if (!filter.test(sEmail)) {
 			$("#error_email").text(sEmail+" is not valid email");
 			sEmail.focus;
 		} else {
 			$("#error_email").text("");
 		}
 	});
 	$("#btn-login").click(function(e) {
 		let focusSet = false;
 		let sEmail = $('#inputEmail').val();
 		let filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 		if (!sEmail) {
 		if ($("#inputEmail").parent().next(".validation").length == '') //only add if nothing input
 			{
 				$("#inputEmail").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter email address</div>");
 			} 
 			e.preventDefault();
 			$("#inputEmail").focus();
 			focusSet = true;
 		} else {
 			$("#inputEmail").parent().next(".validation").remove();
 		}
 		let psw = $('#inputPassword').val();
 		if (!psw) {
 			if ($("#inputPassword").parent().next(".validation").length == '') //only add if nothing input
 			{
 				$("#inputPassword").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter password</div>");
 			} 
 			e.preventDefault();
 			if (!focusSet) {
 				$("#inputPassword").focus();
 			}
 		} else {
 			$("#inputPassword").parent().next(".validation").remove();
 		}
 	});
 });
*/
 //validate password
/* $(document).ready(function() {
 	$('input[type=password]').keyup(function() {
 		let psw = $(this).val();*/
 		//validate the length
 		/*if (psw.length < 8) {
 			$('#length').removeClass('valid').addClass('invalid');
 		} else {
 			$('#length').removeClass('invalid').addClass('valid');
 		}
 		//validate letter
 		if (psw.match(/[A-z]/)) {
 			$('#letter').removeClass('invalid').addClass('valid');
 		} else {
 			$('#letter').removeClass('valid').addClass('invalid');
 		}
 		//validate capital
 		if (psw.match(/[A-Z]/)) {
 			$('#capital').removeClass('invalid').addClass('valid');
 		} else {
 			$('#capital').removeClass('valid').addClass('invalid');
 		}
 		//validate number
 		if (psw.match(/\d/)) {
 			$('#number').removeClass('invalid').addClass('valid');
 		} else {
 			$('#number').removeClass('valid').addClass('invalid');
 		}
 	}).focus(function() {
 		$('#psw-info').show();
 	}).blur(function() {
 		$('#psw-info').hide();
 	})
 });*/
 // show-hide password
/*$('.glyphicon-eye-open').on('click', 
	function() {
	$(this).toggleClass("glyphicon-eye-close");
	let type = $("#inputPassword").attr("type");
	if (type == "text") {
		$('#inputPassword').attr("type", "password");
	} else {
		$('#inputPassword').attr("type", "text");
	}
});*/

// click menu ra
/*$(".menu-btn").click(function() {
	$(".menu-left").addClass("out");
	return false;
})*/
// click menu vao
/*$(".close-btn").click(function() {
	$(".menu-left").removeClass("out");
	return false;
})
$("body").click(function() {
	$(".menu-left").removeClass("out");
	return false;
})*/