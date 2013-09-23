/* creating a utility file
fun 
damasio gerena */

window.utils={};
utils.getAreaTriangle=function(b,h){
	return .5*(b*h);
	
};
utils.rnd=function(f,l){
	if(l>f){
		return Math.floor(Math.random()*(l-f)+f);
	}
	return Math.floor(Math.random()*(f-l)+1);
};
	utils.rndmArray=function(arr){//random choice within a array
	return arr[~~(Math.random()*Array.length)];
};
utils.meanArr=function(arr){
	var total=0;
	for(var i=0; i<arr.length;i++){
		total+=arr[i];
	}
	return total/arr.length;
};
