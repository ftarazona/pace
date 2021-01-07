var biblio = document.getElementById("bibliography");
var apropos = document.getElementById("about");

var biblioBtn = document.getElementById("bibliography-btn");
var aproposBtn = document.getElementById("about-btn");

var biblioSpan = document.getElementById("bibliography-close");
var aproposSpan = document.getElementById("about-close");

var page = document.getElementsByClassName("page-wrapper");
var next = document.getElementById("next");
var prev = document.getElementById("prev");

function showPage()	{
	page[0].style.display = "block";
	next.style.display = "block";
	prev.style.display = "block";
	biblioBtn.style.display = "block";
	aproposBtn.style.display = "block";
}

function hidePage()	{
	page[0].style.display = "none";
	next.style.display = "none";
	prev.style.display = "none";
	biblioBtn.style.display = "none";
	aproposBtn.style.display = "none";
}

function showBiblio()	{
	biblio.style.display = "block";
	hidePage();
}

function hideBiblio()	{
	biblio.style.display = "none";
	showPage();
}

function showApropos()	{
	apropos.style.display = "block";
	hidePage();
}

function hideApropos()	{
	apropos.style.display = "none";
	showPage();
}

biblioBtn.onclick = function()	{ showBiblio(); }

biblioSpan.onclick = function()	{ hideBiblio(); }

aproposBtn.onclick = function()	{ showApropos(); }

aproposSpan.onclick = function()	{ hideApropos(); }

window.onclick = function(event)	{
	if(event.target == apropos)	{ hideApropos(); }
	if(event.target == biblio)	{ hideBiblio(); }
}
