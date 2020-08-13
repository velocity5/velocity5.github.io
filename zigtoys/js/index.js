/* toggle menu */
$('.navbar-toggler, .backgroundOverlay').click(function () {
	$('.mobileMenu, .backgroundOverlay').toggleClass('slide');
	$('.animatedIcon, .backgroundOverlay').toggleClass('openIcon');
});

/* active class navmenu */
$(document).ready(function () {
	let url = window.location.href;
	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("?"));
	url = url.substr(url.lastIndexOf("/") + 1);
	if (url == "") {
		url = 'index.html';
	}
	$('.navbar-nav li').each(function () {
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
$(window).scroll(function () {
	var height = $(window).scrollTop();
	if (height > 100) {
		$('#back2Top').fadeIn();
	} else {
		$('#back2Top').fadeOut();
	}
});
$(document).ready(function () {
	$("#back2Top").click(function (event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

});
/*validate username n' password login*/
$(document).ready(function () {
	$("#btnLogin").click(function (e) {
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
// slick carousel brand and relate product
$(document).ready(function () {
	$(".brand-slick").slick({
		dots: false,
		autoplay: true,
		infinite: true,
	  	speed: 300,
		cssEase: "linear",
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			}
		  ]
	});
	$("#relate-product").owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		navText: ["<i class='fas fa-chevron-circle-left fa-2x'></i>", "<i class='fa fa-chevron-circle-right fa-2x'></i>"],
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 1500,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			550: {
				items: 3,
			}
		}
	});
});
// slick slider banner
$(document).ready(function(){
	$('.slideBanner').slick({
		dots: false,
		autoplay: true,
		infinite: true,
	  	speed: 300,
		cssEase: "linear",
		arrows: true,
		fade: true,
	});
	$(".slick-arrow.slick-next")
		.text('')
		.append(`<i class="fas fa-chevron-right"></i>`);
	$(".slick-arrow.slick-prev")
		.text('')
		.append(`<i class="fas fa-chevron-left"></i>`);
  });
// Add2cart function
let carts = document.querySelectorAll(".add-cart");
let products = [
	{
		id: "1",
		tag: "01-Figure",
		name: "S.H.Figuarts <br /> Kamen Rider Zero One",
		url: "./images/product_images/01-Figure.jpg",
		price: 1000000,
		inCart: 0
		
	},
	{
		id: "2",
		tag: "wolf-Figure",
		name: "S.H.Figuarts <br /> Kamen Rider Vulcan",
		url: "./images/product_images/wolf-Figure.jpg",
		price: 1000000,
		inCart: 0
	},
	{
		id: "3",
		tag: "geiz",
		name: "S.H.Figuarts <br /> Kamen Rider Geiz",
		url: "./images/product_images/geiz.jpg",
		price: 1200000,
		inCart: 0
	}
]
for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		cartNumber(products[i]);
		totalCost(products[i]);
	})
}
function onLoadCartNumber() {
	let productNumber = localStorage.getItem('cartNumber');
	if (productNumber) {
		document.querySelector(".cart-icon span").textContent = productNumber;
		document.querySelector(".cart-iconMobile span").textContent = productNumber;
	}
}
function cartNumber(product) {
	let productNumber = localStorage.getItem('cartNumber');
	productNumber = parseInt(productNumber);
	if (productNumber) {
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
	if (cartItems != null) {
		if (cartItems[product.id] == undefined) {
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

/* create cart table */
let table = $('#cart-table');
function generateTable(arr) {
	let tHead = `<tr>
		<th></th>
		<th class="cart-name">Tên Sản Phẩm</th>
		<th class="cart-price">Đơn Giá</th>
		<th class="cart-quanty">Số Lượng</th>
		<th class="cart-sum">Tổng Giá</th>
		<th class="cart-del"></th>
	</tr>
	`;
	let tData = arr.map((obj) => {
		return `
		<tr class="cart-row" data-id="${obj.id}">
			<td>
				<div class="cart-img-product">
					<img src="${obj.url}" alt="${obj.name}"/>
				</div>
			</td>
			<td class="cart-name">
				<a href="product_detail.html">${obj.name}</a>
			</td>
			<td class="cart-price">
				${obj.price}
			</td>
			<td class="product-qty">
				<div class="cart-qty">
					<button class="qty-minus">
						<i class="fas fa-minus"></i>
					</button>
					<input type="text" value="1" class="numberInCart">
					<button class="qty-plus">
						<i class="fas fa-plus"></i>
					</button>
				</div>
			</td>
			<td class="cart-sum"></td>
			<td>
				<button class="delItem">
					<i class="far fa-trash-alt"></i>
				</button>
			</td>
		</tr>
		`;
	});
	table.html(tHead + tData.join(""));
}
generateTable(products);
/* cart del function */
var delBtn = document.getElementsByClassName("fa-trash-alt");
for (i = 0; i < delBtn.length; i++) {
	var button = delBtn[i];
	button.addEventListener('click', (e) => {
		var btnClicked = e.target
		btnClicked.closest(".cart-row").remove();
		updateCartTotal();
	})
}
/* incre vs desc function in product detail */
let increBtn = document.querySelector(".qty-incre");
let descBtn = document.querySelector(".qty-desc");
let input = document.querySelector("#qty");
let incartInput = document.querySelector("#quanty");
if (increBtn) {
	increBtn.addEventListener('click', (event) => {
		input.innerText = Number(input.innerText) + 1;
		return false;
	})
}
if (descBtn) {
	descBtn.addEventListener('click', (event) => {
		input.innerText = Number(input.innerText);
		if (input.innerText > 0) {
			input.innerText = Number(input.innerText) - 1;
		} if (input.innerText < 1) {
			input.innerText = 1;
		}
		return false;
	})
}
/* quantity button function in cart */
$('.qty-minus').each(function () {
	$(this).on('click', () => {
		let updateQty = Number($(this).next('input').attr('value'));
		if (updateQty > 1) {
			updateQty--;
		}
		$(this).next('input').attr('value', updateQty);
		$(this).next('input').val(updateQty);
		updateCartSum(this, updateQty);
		updateCartTotal();
	});
})
$('.qty-plus').each(function () {
	$(this).on('click', () => {
		let updateQty = Number($(this).prev('input').attr('value'));
		updateQty++;
		$(this).prev('input').attr('value', updateQty);
		$(this).prev('input').val(updateQty);
		updateCartSum(this, updateQty);
		updateCartTotal();
	});
})

$('.cart-qty input').each(function () {
	$(this).change(function () {
		let currentQty = $(this).val();
		$(this).attr('value', currentQty);
		updateCartSum(this, currentQty);
		updateCartTotal();
	});
});
/* update cart total */
let sum = 0, total, discount, discountRate = 0;
function updateCartTotal() {
	sum = 0;
	$('td.cart-sum').each(function () {
		sum += Number($(this).text().replace(/\./g, ""));
	});
	discount = sum * discountRate / 100;
	total = sum - discount;
	$('.bill-detail span:last-child').text(sum.toLocaleString('vi'));
	$('.bill-detail span:last-child').text(discount.toLocaleString('vi'));
	$('.previewSum span:last-child').text(total.toLocaleString('vi'));
}
/* update price */
$('td.cart-price').each(function () {
	let item = $(this).text();
	sum += Number($(this).text());
	discount = sum * discountRate / 100;
	total = sum - discount;
	let qty = $(this).next('td').find('input').attr('value');
	let cartSum = (Number(item) * Number(qty)).toLocaleString('vi');
	let numb = Number(item).toLocaleString('vi');
	$(this).text(numb);
	$(this).siblings('.cart-sum').text(cartSum);
	$('.bill-detail span:last-child').text(sum.toLocaleString('vi'));
	$('.previewSum span:last-child').text(total.toLocaleString('vi'));
});
/* update cart sum */
function updateCartSum(currentItem, currentQty) {
	let item = $(currentItem).parents('.product-qty').siblings('.cart-price').text().replace(/\./g, "");
	let cartSum = (Number(item) * currentQty).toLocaleString('vi');
	$(currentItem).parents('.product-qty').siblings('.cart-sum').text(cartSum);
}
/* apply coupon */
$('.applyCoupon').on('click', () => {
	discountRate = $(this).prev('input').val();
	$('.discount span.discount-rate').text(discountRate + '%');
	$('.discount p:last-child').text(discount.toLocaleString('vi'));
	updateCartTotal();
})
/* end apply coupon */
$(function () {
	AOS.init();
});
/* filter function */
$('.reset').click(function () {
	$('input').prop('checked', false);
})

$('.product-section-header').children('span').addClass('isOpen');
$('.product-section-header').siblings().addClass('isOpen');
$('.product-section-header').click(function () {
	$(this).children('span').toggleClass('isOpen');
	$(this).siblings().toggleClass('isOpen');
});
/* responsive filter function */
$(window).on("load resize", () => {
	let width = $(this).width();
	console.log(width);
	if (width <= 991) {
		$("#product-filter").addClass("onMobile");
	} else $("#product-filter").removeClass("onMobile");
})
$('#product_filter-icon').click(function () {
	$("#product-filter").removeClass("isClose");
	$(".darkLayer").css("display", "block");
});
$(" #product-close button").click(function () {
	$("#product-filter").addClass("isClose");
	$(".darkLayer").css("display", "none");
});
$(".darkLayer").click(function () {
	$(this).css("display", "none");
	$("#product-filter").addClass("isClose");
});
/* checkout radio button show/hide and active or not? */
$('input[type="radio"]').on('change', function () {
	$('.atms').toggle(this.value === "transfer" && this.checked);
	$('.digis').toggle(this.value === "digiwallet" && this.checked);
}).change();
/* address selector */
$('#input-user-city-province').change(selectProvince);
function selectProvince() {
	let outputDistrict = "<option value='0'>&nbspChọn Quận/Huyện</option>";
	let outputCommune = "<option value='0'>&nbspChọn Phường/Xã</option>";
	let idProvince = $('#input-user-city-province > option').filter(':selected').val();
	for (let i = 0; i < listDistrict.length; i++) {
		if (listDistrict[i].idProvince == idProvince) {
			outputDistrict += `<option value='${listDistrict[i].idDistrict}'>&nbsp${listDistrict[i].name}</option>`;
		}
	}
	$('#input-user-commune').html(outputCommune);
	$('#input-user-district').html(outputDistrict);
}
$('#input-user-district').change(selectDistrict);
function selectDistrict() {
	let outputCommune = "<option value='0'>&nbspChọn Phường/Xã...</option>";
	let idDistrict = $('#input-user-district > option').filter(':selected').val();
	for (let i = 0; i < listCommune.length; i++) {
		if (listCommune[i].idDistrict == idDistrict) {
			outputCommune += `<option>&nbsp${listCommune[i].name}</option>`;
		}
	}
	$('#input-user-commune').html(outputCommune);
}
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
/* redirect button */
$(".checkOut").click(function () {
	location.href = "checkout.html";
});
$("#orderNow").click(function() {
	location.href = "products.html"; 
});