// tab login signup
let x = document.getElementById('login');
let y = document.getElementById('signup');
let z = document.getElementById('btnBg');

function signup() {
	x.style.left = "-400px";
	y.style.left = "50px";
	z.style.left = "110px"; 
}
//validate username n' password login
$(document).ready(function () {
	$("#btnLogin").click(function (e) {
		$(".error").hide();
		let hasError = false;
		let passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
		let mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let userMail = $("#inputEmail").val();
		let pwdVal = $('#inputPassword').val();
		if (pwdVal == '' || userMail == '') {
			$("#inputEmail").after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Email không được để trống</span>`);
			$("#inputPassword").after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Mật khẩu không được để trống</span>`)
			hasError = true;
			$("#inputEmail").focus();
		}
		else if (!passReg.test(pwdVal) || !mailReg.test(userMail)) {
			$("#inputPassword").after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Mật khẩu không chính xác</span>`);
			$("#inputEmail").after(`<span class="error" style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Email không hợp lệ`);
			hasError = true;
		}
		if (hasError == true) {
			return false;
		}
	});
});
//validate password signup
$(document).ready(function () {
	$("#btnSignup").click(function (e) {
		$(".error").hide();
		let hasError = false;
		let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		let emailAdd = $('#formSignup-mail').val();
		let pwdVal = $('#formSignup-pass').val();
		let userName = $('#formUsername').val();
		if (emailAdd == '' || pwdVal == '' || userName == '') {
			$('#formSignup-mail').after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Vui lòng nhập email</span>`);
			$('#formSignup-pass').after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Vui lòng nhập mật khẩu</span>`);
			$('#formUsername').after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Vui lòng nhập tên người dùng</span>`);
			hasError = true;
		}
		else if (!emailReg.test(emailAdd)) {
			$("#formSignup-mail").after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Email không hợp lệ</span>`);
			hasError = true;
		}
		if (hasError == true) {
			return false;
		}
	});
	$("#formSignup-pass").keyup(function () {
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
	}).focus(function () {
		$('#psw-info').show();
	}).blur(function () {
		$('#psw-info').hide();
	});
});
// show-hide password
$('.fa-eye').on('click',
	function () {
		$(this).toggleClass("fa-eye-slash");
		let type = $("#inputPassword").attr("type");
		if (type == "text") {
			$('#inputPassword').attr("type", "password");
		} else {
			$('#inputPassword').attr("type", "text");
		}
		let typesingup = $("#formSignup-pass").attr("type");
		if (typesingup == "text") {
			$("#formSignup-pass").attr("type", "password");
		} else {
			$("#formSignup-pass").attr("type", "text");
		}
	});