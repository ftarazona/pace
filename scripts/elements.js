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
	prev.onclick = function()	{ plusSlides(-1); window.scrollTo(0, 0); }
	next	= document.getElementById("next");
	next.onclick = function()	{ plusSlides(1); window.scrollTo(0, 0); }
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
			if(what == "trigger")	{
				lastScroll = window.scrollY;
				document.getElementById(id+"-modal").classList.remove("hide");
				setPageVisible(false);
				window.scrollTo(0, 0);
			}
			else if(what == "close" || what == "modal")	{
				setOpacities();
				document.getElementById(id+"-modal").classList.add("hide");
				setPageVisible(true);
				window.scrollTo(0, lastScroll);
			}
		}
	});
}
