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

 //validate password
 $(document).ready(function() {
 	$('input[type=password]').keyup(function() {
 		let psw = $(this).val();
 		//validate the length
 		if (psw.length < 8) {
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
 });
 // show-hide password
$('.glyphicon-eye-open').on('click', 
	function() {
	$(this).toggleClass("glyphicon-eye-close");
	let type = $("#inputPassword").attr("type");
	if (type == "text") {
		$('#inputPassword').attr("type", "password");
	} else {
		$('#inputPassword').attr("type", "text");
	}
});
// click menu ra
$('.nutmenu').click(function() {
	$('.menuphai').addClass('out');
	return false;
})
//click menu vao
$('.tat').click(function() {
	$('.menuphai').removeClass('out');
	return false;
})