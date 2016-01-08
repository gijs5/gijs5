$(function() {
	$("#phone > label").hide();

	$("#phone").hover(
		function() {
			$("#phone > label").fadeIn();
		}, function() {
			$("#phone > label").hide();
		}
	);
});