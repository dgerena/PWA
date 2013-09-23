//Damasio Gerena 
/*
console.log("created");

(function(){
	var ships=[];
	function Ship(spd,nme){
			this.speed=spd;
			this.name=nme;
			var speed=21;
			console.log(this);
			moveShip();
			console.log("ship created ",this.speed,this.name);

			function moveShip(){
				this.x+=this.speed;
				console.log(this);
			};
	};
	Ship.prototype.move=function(){
		var self=this;
		initEngines();
		checkFuel();
		function initEngines(){
			console.log("init speed "+self.speed);
		};
		function checkFuel(){
			console.log("check Fuel");
		};
		console.log(this);
	};
	var eli=new Ship(5,"Eli");
	eli.move();
/*
	var myShip=new Ship(-4,"Mike");
	var russel=new Ship(50,"Russel");
	ships.push("Eli","Russel","Mike")
/////
Array.prototype.eat=function(){
	console.log("eating pizza");
};
var myArray=[];
	myArray.eat();
	
})();
*/
/////notes part 2

console.log("created");

(function(){
/*	removed to its own js file.
	function Dog(c,n){
		this.color=c;
		this.name=n;
	};
	Dog.prototype.bark=function(){
		var self=this;
		function openMouth(){
			console.log("i opened my mouth");
			chew()
		};
		function chew(){
			console.log(self.name,"is chewing");
		};
	};
*/
	var interval=setInterval(update, 1000/1);	
	var max=new Dog("black","Max");
	var bandit=new Dog("Brown","Bandit");
	max.bark();
	function update(){
		var dice=~~(Math.random()*6+1);
		var dom=document.querySelector("#stuff");
		dom.innerHTML=dice;
	};
	//to stop use clear interval
	if(
	
})()