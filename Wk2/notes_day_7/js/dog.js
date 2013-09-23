//dog class file created in function for javascript
(function(){
	function Dog(c,n){
		this.color=c;
		this.name=n;
	};
	Dog.prototype.bark=function(){
		var self=this;
		openMouth()
		function openMouth(){
			console.log("i opened my mouth");
			chew()
		};
		function chew(){
			console.log(self.name,"is chewing");
		};
	};
	window.Dog=Dog;
})()