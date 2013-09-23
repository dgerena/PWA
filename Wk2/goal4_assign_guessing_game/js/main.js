/**
 * GUESSING GAME:
 *
 * Created By: 
 * Date: 
 * 
 * GUESSING GAME
 */


//Game variables
(function (){
	//i need a randomChar number generator for 1-10
	var conNum=Math.round(Math.random()*(10-1)+1);//the randomChar
	var numCatch=conNum;// store the #
	var guessRemain=3;
	var dom={
		outPut:document.getElementById("output"),//output
		btn:document.querySelector("#button"),//btn
		input:document.querySelector("#input")//input field
	};
	dom.btn.addEventListener("click",onClick,false);
	
	function onClick(e){
		console.log(guessRemain);
		if(guessRemain>1){
			var guess =dom.input.value;
		 	console.log(guess);
			if( guess==""){
				console.log("nothing");
				dom.outPut.innerHTML="Guess my magic number between 1-10 <br/> You Have "+guessRemain+" Guess'. Please input a guess.";
				return false;
				guessRemain++;
			}else if(guess>10||guess>conNum){
				guessRemain--;
				console.log("go lower");
				dom.outPut.innerHTML="Guess my magic number between 1-10 <br/> You Have Guess "+guessRemain+" Guess'. Your current guess is over my number. Please input a guess between 1-10.";
			}else if(guess<1||guess<conNum){
				guessRemain--;
				console.log("go higher");
				dom.outPut.innerHTML="Guess my magic number between 1-10 <br/> You Have Guess "+guessRemain+" Guess'. Your current guess is below my number. Please input a guess between 1-10.";
			}else{
			console.log("correct");
			dom.outPut.innerHTML="Correct, you guessed the correct number!";
			dom.btn.innerHTML="Reset";
			dom.btn.onclick=function reset(){
				window.location.reload;
			};
			};
		}else{
			dom.outPut.innerHTML="You lose, good day sir!";
			dom.btn.innerHTML="Reset";
			dom.btn.onclick=function reset(){
				dom
			};
		};
	};
		console.log("got here");
})();