var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var reset=document.querySelector("#reset");
var spandis=document.querySelector("#correct");
var displayres=document.querySelector("#text-display");
var header1=document.querySelector(".header");

easy.addEventListener("click", selected);
hard.addEventListener("click", selected);
var mode=hard.textContent;
hard.style.background="#06BBE8";


reset.addEventListener("click", resetfunc);


var col=document.querySelectorAll(".square");



function selected(){

	easy.style.background="#12777F";
	hard.style.background="#12777F";
	this.style.background="#06BBE8";
	mode=this.textContent;
	
	generatecolor();
	

}


var n;
var picked;

function generatecolor(){

	


	if(mode=="Easy"){ n=3;
		col[n].style.background="none";
		col[n+1].style.background="none";
		col[n+2].style.background="none";
		picked = Math.floor(Math.random() * n);

	}
	else
		{n=6;
		picked = Math.floor(Math.random() * n);

		}	

	

	for(var i=0;i<n;i++){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	var c="rgb("+r+", "+g+", "+b+")";
	col[i].style.background=c;
	console.log(c);
	}

	spandis.textContent=col[picked].style.background;

	header1.style.background="#06BBE8";
	displayres.textContent="";
	


}

generatecolor();

for(var i=0;i<n;i++){
col[i].addEventListener("click", evaluate);
}
function evaluate(){

if(spandis.textContent!=this.style.background){
this.style.background="none";
displayres.textContent="Try Again!";
}
else
{
	for(var i=0;i<n;i++){
	col[i].style.background=spandis.textContent;
	header1.style.background=spandis.textContent;
	displayres.textContent="Correct!";
}	
}

}

function resetfunc(){


generatecolor();
header1.style.background="#06BBE8";
displayres.textContent="";

}


