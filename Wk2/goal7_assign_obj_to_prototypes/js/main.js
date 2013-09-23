/**
 * Created by Damasio Gerena
 * Class: PWA
 * Goal: Goal7
 */
(function(){
	var time=setInterval(update, 1000/1);
	var people=["jim","jam","jom","jib"];
	var prsn=new Person(name);
	prsn.name();
	prsn.job();
	prsn.action();
	//people.push(person1,person2,person3,person4);
/*
	// example of cleaner way to creat objects and put them into the array *people.push(new Person("dfds","asfdaf"));*
	for(var i=0;i<people.length;i++){
		console.log(people[i].job);
	};
*/
	function update(){//find a random person in the array, then display there job.
		prsn.name();
		prsn.job();
		prsn.action();
	};
})();
