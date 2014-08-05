function resizeRowColumnsToIdenticalHeights() {
    var maxHeight = 0;
    var children = null;

    jQuery(".height-adjust").each(function () {
        maxHeight = 0;
        children = jQuery(this).children(".equal-height").find(".equal-height-content");
        children.each(function () {
            maxHeight = Math.max(maxHeight, jQuery(this).height());

        });

        children.css({ "min-height": maxHeight + "px" });
    });
}




$(document).ready(function () {
 
    //resizeRowColumnsToIdenticalHeights();  
	
	var highestCol = Math.max($('.home-snippet-left').height(),$('.home-snippet-right').height());
	$('.home-snippet-left, .home-snippet-right').height(highestCol);
});