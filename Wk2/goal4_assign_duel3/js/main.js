//Damasio Eli Gerena IV
//Wed Sept. 4th, 2013
//Programing web applications
//Assignmnt:goal 1 assignment: duel 1
(function(){
	console.log("Fight!");
	//array literal
	var fighters=[{
		ftr1:["Kickass",20,100],
		ftr2:["Your Mom",20,100]
		}];
	var rndNum=0;
	var domEdit={
		btn:document.querySelector(".buttonblue"),
		krapos:document.querySelector("#kratos p"),
		kabel:document.querySelector("#kabal p"),
		circle:document.querySelector("#round_number input")
		};
			var onClick=function(e){
			console.log("I click");
			fight();
		};
		domEdit.btn.addEventListener("click",onClick,false);
	function fight(){
		console.log(domEdit.circle);
/* 			var p1Head=kratos.p.innerHTML); */
			domEdit.kabel.innerHTML = fighters[0].ftr1[0]+" : "+fighters[0].ftr1[2];
			domEdit.krapos.innerHTML = fighters[0].ftr2[0]+" : "+fighters[0].ftr2[2];
			domEdit.circle.value= "Round "+rndNum;
			var minDmg1=fighters[0].ftr1[1]*.5;
			var minDmg2=fighters[0].ftr2[1]*.5;
			var f1=Math.floor(Math.random()*(fighters[0].ftr1[1]-minDmg1)+minDmg1)
			var f2=Math.floor(Math.random()*(fighters[0].ftr2[1]-minDmg2)+minDmg2)
			//dmg done
			fighters[0].ftr1[2]-=f1;
			fighters[0].ftr2[2]-=f2;
			console.log(fighters[0].ftr1[0]+":"+fighters[0].ftr1[2]+" "+fighters[0].ftr2[0]+":"+fighters[0].ftr2[2]);
			var results=winnerCheck();
			console.log(results)
			if(results==="No Winner"){
				rndNum++;
			}else{
			};};
	function winnerCheck(){
		var result="No Winner";
		if(fighters[0].ftr1[2]<1 && fighters[0].ftr2[2]<1){
			result="You Both Die";
			fighters[0].ftr1[2]=100;
			fighters[0].ftr2[2]=100;
			rndNum=0;
			domEdit.circle.value= "You Both Die";
		}else if(fighters[0].ftr1[2]<1){
			domEdit.circle.value=fighters[0].ftr2[0]+" Wins!!!";
			result=fighters[0].ftr2[0]+" Wins!!!";
			fighters[0].ftr1[2]=100;
			fighters[0].ftr2[2]=100;
			rndNum=0;
		}else if(fighters[0].ftr2[2]<1){
		domEdit.circle.value=fighters[0].ftr1[0]+" Wins!!!";
			result=fighters[0].ftr1[0]+" Wins!!!";
			fighters[0].ftr1[2]=100;
			fighters[0].ftr2[2]=100;
			rndNum=0;
		};
		
		return result                          
	};
	fight()
})();
