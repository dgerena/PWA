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
	var guess=0;//to hold the guess
	var guessRemain=3;
	var domCharChar={
		outPut:document.getElementById("Output"),//output
		btn:document.querySelector("#button"),//btn
		input:document.querySelector("#input")//input field
	};
	
	console.log(domCharChar);
	domCharChar.btn.addEventListener("click",onClick,false);
	
	function onClick(e){
		console.log(guessRemain);
		validIn();
	};
	
	function onKeyDown(e){
		if(e.keycode===13){
			validIn();
		}
		console.log(guessRemain);
	};
	
	var validIn=function(){
		var playr=parseInt(input.value);
		if(isNaN(playr)){
			domCharChar.output.innerHTML="Please enter a number.";
		}else if(playr<1 || playr>10){
			domCharChar.output.innerHTML="Enter a number between 1-10."
		}else{
			play();
		};
		
	};
	
	var play=function(){
		guessRemain--;
		guess++;
		var curEval="Guess: "+ guess+", Guess Left: "+guessRemain;
		playr=parseInt(input.value);
	};
	
	function winCheck(){
		if(playr>conNum){
			domChar.output.innerHTML="Too High";				
		}else if(playr<conNum){
			domChar.output.innerHTML="Too Low";	
		}else if(playr===conNum){
			gameEnd(true);
		};
		if(guessRemain<1){
			console.log("You lose");
			gameEnd(false);
		}
	};
	
	var gameEnd=function(){
		if(true){
			domChar.output.innerHTML="You won "+playr+" was the number."+" It only took you "+guessRemain+" guesses.";
		}else{
			domChar.output.innerHTML="You lost "+conNum+" was the number.";
		}
	};
	
	console.log(String(input.placeholder.value));// this is how i can see and hopefully get the input from the user.
	console.log(input);
	domCharChar.btn.addEventListener("click",onClick,false);
	window.addEventListener("keydown",onKeyDown,false);
})();