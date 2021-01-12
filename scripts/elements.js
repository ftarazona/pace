var boxNames 	= [
	"about", 
	"bibliography", 
	"dark" 
/*	"future", 
	"interstellar", 
	"machine", 
	"monkeys", 
	"tenet", 
	"voyageur"*/
];

var box		= null;
var trigger	= null;
var close	= null;

var page 	= null;
var slides	= null;
var prev 	= null;
var next 	= null;
var dots	= null;

function setTrigger(i, j)
{
	trigger[i][j].onclick	= function()	{
		setPageVisible(false);
		setBoxVisible(true, i);
	}
}

function setClose(i)
{
	close[i].onclick	= function()	{
		setPageVisible(true);
		setBoxVisible(false, i);
	}
}

function loadElements()
{
	page 	= document.getElementById("page-content");
	slides 	= document.getElementsByClassName("slide");
	prev	= document.getElementById("prev");
	next	= document.getElementById("next");
	dots	= document.getElementsByClassName("dot");

	box	= new Array(boxNames.length);
	trigger	= new Array(boxNames.length);
	close	= new Array(boxNames.length);

	for(var i = 0; i < boxNames.length; i++)
	{
		var n = boxNames[i];
		box[i] = 
			document.getElementById(n);
		trigger[i] = 
			document.getElementsByClassName(n + "-btn");
		close[i] = 
			document.getElementById(n + "-close");
		
		for(var j = 0; j < trigger[i].length; j++)
		{
			setTrigger(i, j);
		}
		setClose(i);
	}
}
