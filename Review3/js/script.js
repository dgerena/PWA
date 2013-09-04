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
//calcForce(6,7);// the broswer wil not be able to find the function in a anonymouse function. Dost thou even hoist? no sir "anonymouse"

var calcForce = function(mass, acc){
	var force = mass*acc;
	console.log(force);
}
calcForce(6,7);