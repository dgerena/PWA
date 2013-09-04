//functions'


//basic
var a = calcArea(5,6);

function calcArea(height, width){
	var area=height*width;
	return area;
}
//var info = prompt("your name")
//console.log(a);

//Anonymouse Funciton --------------------------------------
calcForce(6,7);

var calcForce = function(mass, acc){
	var force = mass*acc;
	console.log(force);
}
