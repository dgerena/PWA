//Damasio Eli Gerena IV
//Wed Sept. 4th, 2013
//Programing web applications
//Assignmnt:goal 1 assignment: duel 1
(function(){
	//console.log("Fight!")
	//array literal
	var ftr1=["Kickass",20,100];
	var ftr2=["Your Mom",20,100];
	//player name
	var p1Name="Kickass";
	var p2Name="Your Mom";
	//player damage
	var p1Dmg=20;
	var p2Dmg=20;
	//player health
	var p1Hp=100;
	var p2Hp=100;
	console.log(ftr1[0],ftr1[1],ftr1[2]);
	//number of rounds
	var rndNum=0;
	function fight(){
		//console.log("in the fight function")
		alert(ftr1[0]+":"+ftr1[2]+" *START* "+ftr2[0]+":"+ftr2[2])
		for(var i=0;i<10;i++){
		//random number formula for a min of half damage-math.floor(Math.random()*(50-25)+25);
			console.log(i)
			var minDmg1=ftr1[1]*.5;
			var minDmg2=ftr2[1]*.5;
			var f1=Math.floor(Math.random()*(ftr1[1]-minDmg1)+minDmg1)
			var f2=Math.floor(Math.random()*(ftr2[1]-minDmg2)+minDmg2)
			//dmg done
			ftr1[2]-=f1;
			ftr2[2]-=f2;
			console.log(ftr1[0]+":"+ftr1[2]+" "+ftr2[0]+":"+ftr2[2]);
			var results=winnerCheck();
			console.log(results)
			if(results==="No Winner"){
				rndNum++;
				alert(ftr1[0]+":"+ftr1[2]+"*Round "+rndNum+" Over*"+ftr2[0]+":"+ftr2[2])
			}else{
				alert(results);
				break;
			};
			//else if
		};
	/*function fight(){
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
		};*/
	};
	function winnerCheck(){
	//console.log("checked")
		var result="No Winner";
		if(ftr1[2]<1 && ftr2[2]<1){
			result="You Both Die";	
		}else if(ftr1[2]<1){
			result=ftr2[0]+" Wins!!!";
		}else if(p2Hp<1){
			result=ftr1[0]+" Wins!!!";
		};
		return result
		//console.log("win cond. checked.")
	};
	
	//console.log("begining program")
	fight()
	
})();
//console.log("working");