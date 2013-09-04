//Damasio Eli Gerena IV
//Wed Sept. 4th, 2013
//Programing web applications
//Assignmnt:goal 1 assignment: duel 1
(function(){
	//console.log("Fight!")
	//player name
	var p1Name="Kickass";
	var p2Name="Your Mom";
	//player damage
	var p1Dmg=20;
	var p2Dmg=20;
	//player health
	var p1Hp=100;
	var p2Hp=100;
	//number of rounds
	var rndNum=0;
	function fight(){
		//console.log("in the fight function")
		 alert(p1Name+":"+p1Hp+" *START* "+p2Name+":"+p2Hp)
		for(var i=0;i<10;i++){
		//random number formula for a min of half damage-math.floor(Math.random()*(50-25)+25);
			console.log(i)
			var minDmg1=p1Dmg*.5;
			var minDmg2=p2Dmg*.5;
			var f1=Math.floor(Math.random()*(p1Dmg-minDmg1)+minDmg1)
			var f2=Math.floor(Math.random()*(p2Dmg-minDmg2)+minDmg2)
			//dmg done
			p1Hp-=f1;
			p2Hp-=f2;
			console.log(p1Name+":"+p1Hp+" "+p2Name+":"+p2Hp);
			var results=winnerCheck();
			console.log(results)
			if(results==="No Winner"){
				rndNum++;
				alert(p1Name+":"+p1Hp+"*Round "+rndNum+" Over*"+p2Name+":"+p2Hp)
			}else{
				alert(results);
				break;
			};
			//else if
		};
	} ;
	function winnerCheck(){
	//console.log("checked")
		var result="No Winner";
		if(p1Hp<1 && p2Hp<1){
			result="You Both Die";	
		}else if(p1Hp<1){
			result=p2Name+" Wins!!!";
		}else if(p2Hp<1){
			result=p1Name+" Wins!!!";
		};
		return result
		//console.log("win cond. checked.")
	};
	
	//console.log("begining program")
	fight()
	
})();
//console.log("working")