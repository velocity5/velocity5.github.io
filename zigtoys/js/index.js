/* toggle menu */
$('.navbar-toggler, .backgroundOverlay').click(function() {
	$('.mobileMenu, .backgroundOverlay').toggleClass('slide');
	$('.animatedIcon, .backgroundOverlay').toggleClass('openIcon');
});

/* active class navmenu */
$(document).ready(function() {
	let url = window.location.href;
	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("?"));
	url = url.substr(url.lastIndexOf("/") + 1);
	if (url == "") {
		url = 'index.html';
	}
	$('.navbar-nav li').each(function() {
		let href = $(this).find('a').attr("href");
		if (url == href) {
			let parentClass = $(this).parent('ul').attr('class');
			if (parentClass == '.submenu') {
				$(this).addClass('subactive');
				$(this).parents('.navbar-nav li').addClass('active');
			} else {
				$(this).addClass("active");
			}
		}
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
 /*validate username n' password login*/
 $(document).ready(function() {
 	$("#btnLogin").click(function(e) {
		 $(".error").hide();
		 let hasError = false;
		 let passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

		let userName = $("#inputUser").val();
		let pwdVal = $('#inputPassword').val();
		if (pwdVal == '' || userName == '') {
			$("#inputUser").after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Tên người dùng không được để trống</span>`);
			$("#inputPassword").after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Mật khẩu không được để trống</span>`)
			hasError = true;
		}
		else if (!passReg.test(pwdVal)) {
			$("#inputPassword").after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Mật khẩu không chính xác</span>`);
			hasError = true;
		}
		if (hasError == true) {
			return false;
		}
 	});
 });
 //validate password signup
 $(document).ready(function() {
	$("#btnSignup").click(function(e) {
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
			$("#formSignup-mail").after (`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Email không hợp lệ</span>`);
			hasError = true;
		}
		if (hasError == true) {
			return false;
		}
	});
 	$("#formSignup-pass").keyup(function() {
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
 	});
 });
 // show-hide password
$('.fa-eye').on('click', 
	function() {
	$(this).toggleClass("fa-eye-slash");
	let type = $("#inputPassword").attr("type");
	if (type == "text") {
		$('#inputPassword').attr("type", "password");
	} else {
		$('#inputPassword').attr("type", "text");
	}
	let typesingup = $("#formSignup-pass").attr("type");
	if(typesingup == "text") {
		$("#formSignup-pass").attr("type", "password");
	} else {
		$("#formSignup-pass").attr("type", "text");
	}
});
// owl carousel
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
        margin:20,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
		autoplaySpeed: 1500,
		responsiveClass:true,
		responsive: {
			0:{
				items:1,
			},
			480:{
				items:2,
			},
			550:{
				items:3,
			},
			768:{
				items:4,
			}
		}
	});
  });
  // increment function
let increBtn = document.querySelector(".qty-incre");
let descBtn = document.querySelector(".qty-desc");
let input = document.querySelector("#qty");
let incartInput = document.querySelector("#quanty");
if(increBtn) {
	increBtn.addEventListener('click',(event) => {
		input.innerText = Number(input.innerText) + 1;
        return false;
	})
}
if(descBtn) {
	descBtn.addEventListener('click',(event) => {
        input.innerText = Number(input.innerText);
            if(input.innerText > 0) {
                input.innerText = Number(input.innerText) - 1;
            } if(input.innerText < 1) {
                input.innerText = 1;
            }
			return false;
	})
}   
// Add2cart function
let carts = document.querySelectorAll(".add-cart");
let products = [
	{
		id: "1",
		tag: "01-Figure",
		brand: "Bandai",
		name: "S.H.Figuarts <br /> Kamen Rider Zero One",
		size: "15",
		inCart: 0,
		price: 1000000
	},
	{
		id: "2",
		tag: "wolf-Figure",
		brand: "Bandai",
		name: "S.H.Figuarts <br /> Kamen Rider Vulcan",
		size: "15",
		price: 1000000,
		inCart: 0
	},
	{
		id: "3",
		tag: "geiz",
		brand: "Bandai",
		name: "S.H.Figuarts <br /> Kamen Rider Geiz",
		size: "15",
		price: 1200000,
		inCart: 0
	},
	{
		id: "4",
		tag: "thouser-fig",
		brand: "Bandai",
		name: "S.H.Figuarts <br /> Kamen Rider Thouser",
		size: "15",
		price: 1500000,
		inCart: 0
	},
	{
		id: "5",
		tag: "woz",
		brand: "Bandai",
		name: "S.H.Figuarts <br /> Kamen Rider Woz",
		size: "15",
		price: 1200000,
		inCart: 0
	},
	{
		id: "6",
		tag: "val",
		brand: "Bandai",
		name: "S.H.Figuarts <br /> Kamen Rider Valkyrie",
		size: "15",
		price: 1300000,
		inCart: 0
	},
	{
		id: "7",
		tag: "geiz_revive1",
		brand: "Bandai",
		name: "S.H.Figuarts <br /> Kamen Rider Geiz Revive",
		size: "15",
		price: 1500000,
		inCart: 0
	},
	{
		id: "8",
		tag: "gundam_metal_2",
		brand: "Bandai",
		name: "Mô Hình Gundam <br /> Astray Red Frame Kai",
		size: "18",
		price: 4500000,
		inCart: 0
	},
	{
		id: "9",
		tag: "red_beast",
		brand: "Bandai",
		name: "S.H.Figure <br /> Red Go-buster",
		size: "15",
		price: 1000000,
		inCart: 0
	}
]
for(let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		cartNumber(products[i]);
		totalCost(products[i]);
	})
}
function onLoadCartNumber() {
	let productNumber = localStorage.getItem('cartNumber');
	if(productNumber) {
		document.querySelector(".cart-icon span").textContent = productNumber;
		document.querySelector(".cart-iconMobile span").textContent = productNumber;
	}
}

function cartNumber(product) {
	let productNumber = localStorage.getItem('cartNumber');
	productNumber = parseInt(productNumber);
	if(productNumber) {
		localStorage.setItem('cartNumber', productNumber + 1);
		document.querySelector(".cart-icon span").textContent = productNumber + 1;
		document.querySelector(".cart-iconMobile span").textContent = productNumber + 1;
	} else {
		localStorage.setItem('cartNumber', 1);
		document.querySelector(".cart-icon span").textContent = 1;
		document.querySelector(".cart-iconMobile span").textContent = 1;
	}
	setItems(product);
}
	function setItems(product) {
		let cartItems = localStorage.getItem("productIncart");
		cartItems = JSON.parse(cartItems);
		if(cartItems != null) {
			if(cartItems[product.id] == undefined) {
				cartItems = {
					...cartItems,
					[product.id]: product
				}
			}
			cartItems[product.id].inCart += 1;
		} else {
			product.inCart = 1;
			cartItems = {
				[product.id]: product
			}
		}
		localStorage.setItem("productIncart", JSON.stringify(cartItems));
	}
	function totalCost(product) {
		let cartCost = localStorage.getItem("totalCost");
		if (cartCost != null) {
			cartCost = parseInt(cartCost);
			localStorage.setItem("totalCost", cartCost + product.price);
		} else {
			localStorage.setItem("totalCost", product.price);
		}	
	}
onLoadCartNumber();


$(function() {
	AOS.init();
});
/* filter function */
$('.reset').click(function() {
	$('input').prop('checked', false);
})

$('.product-section-header').children('span').addClass('isOpen');
$('.product-section-header').siblings().addClass('isOpen');
$('.product-section-header').click(function() {
	$(this).children('span').toggleClass('isOpen');
	$(this).siblings().toggleClass('isOpen');
});
/* responsive filter function */
$(window).on("load resize", () => {
	let width = $(this).width();
	console.log(width);
	if(width <= 991) {
		$("#product-filter").addClass("onMobile");
	} else $("#product-filter").removeClass("onMobile");
})
$('#product_filter-icon').click(function() {
	$("#product-filter").removeClass("isClose");
	$(".darkLayer").css("display","block");
});
$(" #product-close button").click(function() {
	$("#product-filter").addClass("isClose");
	$(".darkLayer").css("display","none");
});
$(".darkLayer").click(function() {
	$(this).css("display","none");
	$("#product-filter").addClass("isClose");
});
/* checkout radio button show/hide and active or not? */
$('input[type="radio"]').on('change' ,function() {
	$('.atms').toggle(this.value === "transfer" && this.checked);
	$('.digis').toggle(this.value === "digiwallet" && this.checked);
}).change();

/* live chat */
/*var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5f1b88f35e51983a11f5c2f7/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})(); */
/* background responsive */
