var lastScroll = 0;

var page 	= null;
var slides	= null;
var prev 	= null;
var next 	= null;
var dots	= null;

function linkDot(i)	{
	dots[i].onclick = function()	{ currentSlide(i); }
}

function loadElements()
{
	page 	= document.getElementById("page-content");
	slides 	= document.getElementsByClassName("slide");
	prev	= document.getElementById("prev");
	next	= document.getElementById("next");
	dots	= document.getElementsByClassName("dot");
	for(var i = 0; i < dots.length; i++)	{ linkDot(i); }

	document.addEventListener('click', function(e)	
	{
		const tgt = e.target;

		if(tgt.classList.contains("box"))
		{
			e.preventDefault();
			const [id, what] = tgt.id.split("-");
			console.log(id);
			if(what == "trigger" || what == "video")	{
				lastScroll = window.scrollY;
				document.getElementById(id+"-modal").classList.remove("hide");
				window.scrollTo(0, 0);
				setPageVisible(false);
			}
			else if(what == "close" || what == "modal")	{
				var videos = document.getElementsByTagName("IFRAME");
				for(var k = 0; k < videos.length; k++)	{
					videos[k].src = videos[k].src;
				}
				document.getElementById(id+"-modal").classList.add("hide");
				setPageVisible(true);
				window.scrollTo(0, lastScroll);
				setOpacities();
			}
		}
	});	
}

function linkAllThisShit()	{

	var links1 = document.getElementsByClassName("link1");
	for(var i = 0; i < links1.length; i++)	{
		links1[i].setAttribute("href", "www.jstor.org/stable/41704303");
	}
	var links2 = document.getElementsByClassName("link2");
	for(var i = 0; i < links2.length; i++)	{
		links2[i].setAttribute("href", "www.jstor.org/stable/10.5621/sciefictstud.43.3.0553");
	}
	var links3 = document.getElementsByClassName("link3");
	for(var i = 0; i < links3.length; i++)	{
		links3[i].setAttribute("href", "www.jstor.org/stable/228574");
	}
	var links4 = document.getElementsByClassName("link4");
	for(var i = 0; i < links4.length; i++)	{
		links4[i].setAttribute("href", "www.jstor.org/stable/24942627");
	}
	var links5 = document.getElementsByClassName("link5");
	for(var i = 0; i < links5.length; i++)	{
		links5[i].setAttribute("href", "www.jstor.org/stable/1261141");
	}
	var links6 = document.getElementsByClassName("link6");
	console.log(links6.length);
	for(var i = 0; i < links6.length; i++)	{
		console.log("aa");
		links6[i].setAttribute("href", "https://www.jstor.org/stable/24396072");
	}
}
