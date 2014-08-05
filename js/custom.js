// JavaScript Document


$(document).ready(function() {
	
	//keep the featured content boxes on the homepage the same height
	$(".cols-top").equalHeights();
	$(".cols-bottom").equalHeights();
	
    //enable an active link on top nav items
	$('.dropdown-toggle').click(function() {
		var location = $(this).attr('href');
		window.location.href = location;
		return false;
	});

});