// JavaScript Document


$(document).ready(function() {
	$(".cols-top").equalHeights();
	$(".cols-bottom").equalHeights();
	
//enable an active link on top nav items
	$('.dropdown-toggle').click(function() {
		var location = $(this).attr('href');
		window.location.href = location;
		return false;
	});

});