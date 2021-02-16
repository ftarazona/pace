const lat = 150;
const sht = 180;

window.onscroll = function()	{ setOpacities(); }
window.onresize = function()	{ setOpacities(); }

function setOpacities()	{
	var pars = document.getElementsByClassName("content");
	for(var i = 0; i < pars.length; i++)
	{
		var par = pars[i];
		var offsets = par.getBoundingClientRect();
		var sc = window.scrollY;
		var p1 = offsets.top + window.scrollY + 60;
		var p2 = offsets.bottom + window.scrollY - 130;
		var e1 = sc - (p1 - sht - lat);
		var e2 = -sc + (p2 - sht + lat);
		if(p1 - sht < sc && sc < p2 - sht)	{ par.style.opacity = 1; }
		else if(p1 - sht - lat < sc && sc <= p1 - sht)	{ par.style.opacity = e1 / lat; }
		else if(p2 - sht + lat > sc && sc >= p2 - sht)	{ par.style.opacity = e2 / lat; }
		else			{ par.style.opacity = 0; }
	}
}
