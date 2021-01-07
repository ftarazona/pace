var backgrounds = ['img/newbg1.jpg',
	'img/newbg2.jpg',
	'img/newbg3.jpg',
	'img/newbg4.jpg',
	'img/newbg5.jpg',
	'img/newbg6.jpg'
];

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)	{
	showSlides(slideIndex += n);
}

function currentSlide(n)	{
	showSlides(slideIndex = n);
}

function showSlides(n)	{
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");

	if (n > 6)	{ slideIndex = 1; }
	if (n < 1)	{ slideIndex = slides.length; }

	if(slideIndex <= 1)	{ prev.style.display = "none"; }
	else			{ prev.style.display = "block"; }

	if(slideIndex >= 6)	{next.style.display = "none"; }
	else			{next.style.display = "block"; }

	for (i = 0; i < slides.length; i++)	{
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++)	{
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	document.body.style.backgroundImage = "url(" + backgrounds[slideIndex - 1] + ")";
}

window.onkeydown = function(gfg)	{
	if(gfg.keyCode == 37 && slideIndex > 1)	{ 
		showSlides(slideIndex -= 1); }
	if(gfg.keyCode == 39 && slideIndex < 6) { 
		showSlides(slideIndex += 1); }
};
