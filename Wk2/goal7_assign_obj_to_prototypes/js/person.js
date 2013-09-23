/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 *///coments are working as a follow up
(function(){
 	function Person(n){
 		this.name=n;
 		this.job=["student","teacher","architect","student","student"];
 		this.actions=["sleeping","eating","farting","dieting"];
 		console.log(this.name+" created.");
 	};
 	person.prototype.name=function(){
 		var self=this;
 		var ppl=[];
 		nmeRndm();
 		function nmeRmdm(){
	 		for(i=0;i<3; i++){
		 		ppl.push(self.name[~~(Math.random()*5)]);
		 		};	
	 		clm1();
	 	};
 		function clm1(){
	 		document.getElementById("r1c1").innerHTML=people[0];
			document.getElementById("r2c1").innerHTML=people[1];
			document.getElementById("r3c1").innerHTML=people[2];
 		};
 	};
 	person.prototype.job=function(){
		var self=this;
		var specJob=[];
		rndmJob();
		function rndmJob(){
			
		};
 	};
 	
 	window.Person=Person;

 	
 })();
