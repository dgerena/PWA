/*created on day 4 of pwa*/

console.log("Guess Loaded");

(function(){
/* // part one on objects

	var soundSpec="";
	var movies={
		aliens:[{//now in a array 
			director:"James",//this is a object
			raitng:"R",// as is this, both are inside an array 
			cast:["bob","dave"]
		}],
		raiders:[{
			director:"James",
			raitng:"R"
		}]
	};
	var movie={
		title:"Star Wars",
		rating:"PG",
		cast:["ford","Mark","Fischer"],
		sound:function(){
			console.log("sound");
			return "THX";	
		}
	};
	console.log(movie.title);
	console.log(movie.rating);
	console.log(movie.cast);
	soundSpec=(movie.sound());
	
	for (var key in movie){
		console.log(key);
		console.log(movie[key]);
	};

	console.log(movies.aliens[0].cast[0]);
*/
//Part 2 DOM -----------------------

/*
	var test=document.getElementById("taco");//.innerHTML="I am super Hangry!";
/* 	test.innerHTML="I am Hangry";// individual way 
	var t2=document.querySelector("h1");
	t2.innerHTML="Beer is good, beer is great... and stuff!";
	var testA=document.getElementsByTag(h1);
	console.log(testA)
	
*///Dom stuff end of dom section
	var domStuff={
		btn:document.querySelector("button"),
		somethingElse:""
		};
		domStuff.btn.addEventListener("click",onClick,false);
		var onClick=function(e){
			console.log("We click");
		};
		function onClick(e){
		console.log("fasdfa");
		};
})();