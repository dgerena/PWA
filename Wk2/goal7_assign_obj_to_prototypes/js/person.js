/*damasio gerena
 *///coments are working as a follow up
(function(){
 	function Person(n,f,a){
 		this.names=n;
 		this.jobs=f;
 		this.actions=a;
 		console.log(this.names+" created.");
 	};
 	Person.prototype.name=function(){
 		var self=this;
 		var ppl=[];
 		nmeRndm();
 		function nmeRndm(){
	 		for(i=0;i<3; i++){
		 		ppl.push(self.names[~~(Math.random()*5)]);
		 		};	
	 		clm1();
	 	};
 		function clm1(){
	 		document.getElementById("r1c1").innerHTML=ppl[0];
			document.getElementById("r2c1").innerHTML=ppl[1];
			document.getElementById("r3c1").innerHTML=ppl[2];
 		};
 	};
 	Person.prototype.job=function(){
		var self=this;
		var jobs=[];
		rndmJob();
		function rndmJob(){
			for(i=0;i<3;i++){
				jobs.push(self.jobs[(~~(Math.random()*5))]);
			};
			clm2();
		};
		function clm2(){
			document.getElementById("r1c2").innerHTML=jobs[0];
			document.getElementById("r2c2").innerHTML=jobs[1];
			document.getElementById("r3c2").innerHTML=jobs[2];
		};
 	};
 	Person.prototype.action=function(){
		var self=this;
		var action=[];
		rndmAction();
		function rndmAction(){
			for(i=0;i<3;i++){
				action.push(self.actions[(~~(Math.random()*5))]);
			};
			clm3();
		};
		function clm3(){
			document.getElementById("r1c3").innerHTML=action[0];
			document.getElementById("r2c3").innerHTML=action[1];
			document.getElementById("r3c3").innerHTML=action[2];
		};
 	};
window.Person=Person;
})();
