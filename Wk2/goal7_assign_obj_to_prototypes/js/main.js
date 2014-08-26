/**
 * Created by Damasio Gerena
 * Class: PWA
 * Goal: Goal7
 */
(function(){
	var time=setInterval(update, 1000/1);
	var people=["jim","jam","jom","jib","rob"];
	var job=["student","teacher","architect","student","student"];
 	var actions=["sleeping","eating","farting","dieting","shitting"];
	var person=new Person(people,job,actions);
	update();
	function update(){//find a random person in the array, then display there job.
		person.name();
		person.job();
		person.action();
	};
})();
