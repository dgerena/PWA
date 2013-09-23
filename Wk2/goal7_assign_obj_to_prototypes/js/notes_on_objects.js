//object notes

var Person={
	name:"eli",
	age:0,
	die:function(){
		console.log("6 feet under.");
	}
};

var student=Object.create(Person);

Student={
	badge:"orange",
	degree:"web",
	die:"Iam a dying student"
};
var Russel=Object.create(Student);