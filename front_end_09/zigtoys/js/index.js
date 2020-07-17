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
		brand: "Bandai",
		name: "S.H.Figuarts Kamen Rider Zero One",
		size: "15",
		price: 1000000,
		inCart: 0
	},
	{
		id: "2",
		brand: "Bandai",
		name: "S.H.Figuarts Kamen Rider Vulcan",
		size: "15",
		price: 1000000,
		inCart: 0
	},
	{
		id: "3",
		brand: "Bandai",
		name: "S.H.Figuarts Kamen Rider Geiz",
		size: "15",
		price: 1200000,
		inCart: 0
	},
	{
		id: "4",
		brand: "Bandai",
		name: "S.H.Figuarts Kamen Rider Thouser",
		size: "15",
		price: 1500000,
		inCart: 0
	},
	{
		id: "5",
		brand: "Bandai",
		name: "S.H.Figuarts Kamen Rider Woz",
		size: "15",
		price: 1200000,
		inCart: 0
	},
	{
		id: "6",
		brand: "Bandai",
		name: "S.H.Figuarts Kamen Rider Valkyrie",
		size: "15",
		price: 1300000,
		inCart: 0
	},
	{
		id: "7",
		brand: "Bandai",
		name: "S.H.Figuarts Kamen Rider Geiz Revive",
		size: "15",
		price: 1500000,
		inCart: 0
	},
	{
		id: "8",
		brand: "Bandai",
		name: "Metal Build Gundam Astray Red Frame Kai",
		size: "18",
		price: 4500000,
		inCart: 0
	},
	{
		id: "9",
		brand: "Bandai",
		name: "S.H.Figure Red Go-buster",
		size: "15",
		price: 1000000,
		inCart: 0
	}
]
for(let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		cartNumber(products[i]);
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

onLoadCartNumber();