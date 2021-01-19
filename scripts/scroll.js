const lat = 120;
const sht = 160;
const positions = [
	[[80, 480], [580, 1150], [1260, 2100], [2100, 3000]],
	[],
	[],
[[80, 660], [790, 1570], [1690, 3000]],
	[],
	[]
];

window.onscroll = function()	{ setOpacities(); }

function setOpacities()	
{
	for(var i = 0; i < positions[slideIndex].length; i++)
	{
		var par = document.getElementById("p" + (i+1) + "-" + (slideIndex+1));
		var sc = window.scrollY;
		var p1 = positions[slideIndex][i][0];
		var p2 = positions[slideIndex][i][1];
		var e1 = sc - (p1 - sht - lat);
		var e2 = -sc + (p2 - sht + lat);
		if(p1 - sht < sc && sc < p2 - sht)	{ par.style.opacity = 1; }
		else if(p1 - sht - lat < sc && sc <= p1 - sht)	{ par.style.opacity = e1 / lat; }
		else if(p2 - sht + lat > sc && sc >= p2 - sht)	{ par.style.opacity = e2 / lat; }
		else			{ par.style.opacity = 0; }
	}
}
