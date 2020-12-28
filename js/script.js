$(document).ready(function() {
	$('#slides').superslides({
		animation:'fade',
		play:5000,
		/*setting pagination to false  remove the 3 dotes buttons*/
		pagination:false
	});
	var typed = new Typed(".typed", {
		strings: ["Java developer ", "Software engineer", "Ethical Hacker."],
		typeSpeed: 70,
		loop: true,
		startDelay:1000,
		showCursor:false
	});
});