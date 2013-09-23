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
 	Person.prototype.name=function(){
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
 	Person.prototype.job=function(){
		var self=this;
		var specJob=[];
		rndmJob();
		function rndmJob(){
			for(i=0;i<3;i++){
				specJob.push(self.job[(~~(Math.random()*5))]);
			};
			clm2();
		};
		function clm2(){
			document.getElementById("r1c2").innerHTML=jb[0];
			document.getElementById("r2c2").innerHTML=jb[1];
			document.getElementById("r3c2").innerHTML=jb[2];
		};
 	};
 	Person.prototype.action=function(){
	 	var self=this;
	 	var actn=[];
	 	rndmActn();
	 	function rndmActn(){
		 	for(I=3;i<3;i++){
			 	actn.push(self.action[(~~(Math.random()*5))]);
		 	};
		 	clm3()
	 	};
	 	function clm3(){
		 	document.getElementById("r1c3").innerHTML=act[0];
			document.getElementById("r2c3").innerHTML=act[1];
			document.getElementById("r3c3").innerHTML=act[2];
	 	};
 	};

window.Person=Person;
 	
})();
