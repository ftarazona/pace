window.onload = function()	{	
	loadElements();
	showSlides(slideIndex);
};

window.onkeydown 	= function(gfg)	{
	if(gfg.keyCode == 37 && slideIndex > 1)	{ 
		showSlides(slideIndex -= 1); }
	if(gfg.keyCode == 39 && slideIndex < 6) { 
		showSlides(slideIndex += 1); }
};

