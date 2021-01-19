window.onload = function()	{	
	loadElements();
	showSlides(slideIndex);
};

window.onkeydown 	= function(gfg)	{
	if(gfg.keyCode == 37)	{ 
		plusSlides(-1); }
	if(gfg.keyCode == 39) { 
		plusSlides(+1); }
};

