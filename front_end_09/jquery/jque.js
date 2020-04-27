$(document).ready(function() {
			$("a").click(function(event) {
				alert("This link no longer took you to w3school");
				event.preventDefault();
				$(this).hide('slow', function() {
					alert("Now it was hidden!");
				});
			});
			$("a").addClass("test");
		});