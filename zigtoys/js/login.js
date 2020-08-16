// tab login signup
let x = document.getElementById('login');
let y = document.getElementById('signup');
let z = document.getElementById('btnCover');

function signup() {
	x.style.left = "-400px";
	y.style.left = "50px";
	z.style.left = "100px"; 
}
function login() {
	x.style.left = "50px";
	y.style.left = "400px";
	z.style.left = "0px"; 
}
// show-hide password
$('.fa-eye').on('click',
	function () {
		$(this).toggleClass("fa-eye-slash");
		let type = $(".inputPass").attr("type");
		if (type == "text") {
			$('.inputPass').attr("type", "password");
		} else {
			$('.inputPass').attr("type", "text");
		}
	});