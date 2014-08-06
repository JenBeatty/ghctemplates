// JavaScript Document

$(document).ready(function() {
	
    //enable an active link on top nav items
	//$('.dropdown-toggle').click(function() {
	//	var location = $(this).attr('href');
	//	window.location.href = location;
	//	return false;
	//});
	
	$(function() {
		$('.cols-top').matchHeight();
	});
	
	$(function() {
		$('.cols-bottom').matchHeight();
	});

});