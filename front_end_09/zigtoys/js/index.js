/* click menu out */
/*$(document).on('click', function() {
	$('.collapse').collapse('hide');
}); */
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
 /*validate email*/
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
	}
}
function cartNumber(product) {
	let productNumber = localStorage.getItem('cartNumber');
	productNumber = parseInt(productNumber);
	if(productNumber) {
		localStorage.setItem('cartNumber', productNumber + 1);
		document.querySelector(".cart-icon span").textContent = productNumber + 1;
	} else {
		localStorage.setItem('cartNumber', 1);
		document.querySelector(".cart-icon span").textContent = 1;
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
	function displayCart() {
		let cartCost = localStorage.getItem("totalCost");
		let cartItems = localStorage.getItem("productIncart");
		cartItems = JSON.parse(cartItems);
		let cartFrame = document.querySelector(".product-content");
		if (cartItems && cartFrame) {
			cartFrame.innerHTML = '';
			Object.values(cartItems).map(item =>{
				cartFrame.innerHTML += `
				<div class="productInCart">
					<img src="images/product_images/${item.tag}.jpg" class="img-fluid">
					<span>${item.name}</span>
						<i class="far fa-times-circle" type="button"></i>
				</div>
				<div class="priceQuantity">
					<div class="priceInCart">${item.price}đ</div>
					<div class="quantityInCart">
						<button class="qtyDesc">-</button>
						<span>${item.inCart}</span>
						<button class="qtyIncre">+</button>
					</div>
					<div class="totalInCart">
						${item.inCart * item.price}đ
					</div>	
				</div>	` 
			});
			cartFrame.innerHTML += `
				<div class="basketTotal">
					<h4 class="basketTotalTitle">
						TỔNG TIỀN
					</h4>
					<h5 class="totalPrice">
						${cartCost}đ
					</h5>
				</div>
			`
		}
	}
onLoadCartNumber();
displayCart();
