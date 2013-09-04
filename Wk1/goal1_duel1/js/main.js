//Damasio Eli Gerena IV
//Wed Sept. 4th, 2013
//Programing web applications
//Assignmnt:goal 1 assignment: duel 1
(function(){
	console.log("Fight!")
	//player name
	var p1Name="Kickass";
	var p2Name="YourMom";
	//player damage
	var p1Dmg=20;
	var p2Dmg=20;
	//player health
	var p1Hp=100;
	var p2Hp=100;
	//number of rounds
	var rndNum=1;
	function fight(){
		console.log("in the fight function")
		 alert(p1Name+":"+p1Hp+" *START* "+p2Name+":"+p2HP)
		for(var i=0;i<10;i++){
		//random number formula for a min of half damage-math.floor(Math.random()*(50-25)+25);
			console.log(i)
			var minDmg1=p1Dmg*.5;
			var minDmg2=p2Dmg*.5;
		}
		winnerCheck()
	};
	function winnerCheck(){
		console.log("win cond. checked.")
	};
	
	console.log("begining program")
	fight()
	
})();






console.log("working")