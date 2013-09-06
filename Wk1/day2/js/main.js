/*damasio Gerena
day 2 
*/
/*var fName="eli";
var lName="gerena";
var fullN=fName+" "+lName;
var cp=fullN.indexOf(" ");
fullN.splice(cp, 1);
console.log(fullN);
var first3=fullN.substr(0, 3);
var anotherfirst3=fullN.substring(0,3);

var total=0;
var test=[1,12,14,13,15,61,11]
test.forEach(function(e){

	total=+e;
})
var avg=total/test.length;

console.log("total",total);

important .syntax 
charat
charcodeat
concat
indexof
length
substr
split
for arrays
arrays
push
pop
splice
sort
indexof
foreach
*/

var hello="hello";
console.log(hello);
//self executing functions
//improper
/*
hello()
function hello(){
	var greeting="hello";
	console.log(greeting);
}*/
//propper
(function(){
	var greeting="hello";
	console.log(greeting);
})();