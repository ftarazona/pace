var bg 		= [
	"img/newbg1.jpg",
	"img/newbg2.jpg",
	"img/newbg3.jpg",
	"img/newbg4.jpg",
	"img/newbg5.jpg",
	"img/newbg6.jpg",
];
var slideIndex 	= 0;

function setPageVisible(v)
{
	var val = v ? "block" : "none";

	page.style.display		= val;
	trigger[0][0].style.display	= val;
	trigger[1][0].style.display	= val;

	if(v)
	{
		if(slideIndex > 1)	{ prev.style.display = val; }
		if(slideIndex < 6)	{ next.style.display = val; }
	}
	else
	{
		prev.style.display = val;
		next.style.display = val;
	}
}

function setBoxVisible(v, i)
{
	console.log("box : " + i);
	var val = v ? "block" : "none";
	box[i].style.display	= val;
}

function plusSlides(n)
{
	showSlides(slideIndex += n);
}

function currentSlide(n)
{
	showSlides(slideIndex = n);
}

function showSlides(n)
{
	if(n > 5)	{ slideIndex = 5; }
	if(n < 0)	{ slideIndex = 0; }

	if(slideIndex <= 0)	{ prev.style.display = "none"; }
	else			{ prev.style.display = "block"; }
	if(slideIndex >= 5)	{ next.style.display = "none"; }
	else			{ next.style.display = "block"; }

	for(var i = 0; i < slides.length; i++)	{
		slides[i].style.display = "none";
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex].style.display = "block";
	dots[slideIndex].className += " active";
	document.body.style.backgroundImage = "url(" + bg[slideIndex] + ")";
}
