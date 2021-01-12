	loadElements();
	showSlides(slideIndex);

window.onkeydown 	= function(gfg)	{
	if(gfg.keyCode == 37 && slideIndex > 1)	{ 
		showSlides(slideIndex -= 1); }
	if(gfg.keyCode == 39 && slideIndex < 6) { 
		showSlides(slideIndex += 1); }
};

window.onclick 		= function(event)	{
	for(var i = 0; i < boxNames.length; i++)
	{
		if(event.target == box[i])	{ close[i].onclick; }
	}
}
