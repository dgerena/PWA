//PWA 2013 september 16
//Damaiso ELi Gerena IV
//Midterm Programming
(function(){
	//VAr's
	var domEdit={
			nme:document.querySelector("#name"),
			adr:document.querySelector("#address"),
			gpa:document.querySelector("#gpa"),			
			dte:document.querySelector("#date"),
			avg:document.querySelector("#gpaavg"),
			phn:document.querySelector("#phone"),
			btn:document.querySelector(".buttonred")	
			};
	var studentA=[
			{
			Name:"jbond",
			Address:"street:3300 University Blvd, Winter Park FL",
			Gpa:[2.5,3.5,4.0]},
			{
			Name:"Alex",
			Address:"street:543543 University Blvd, Windfgfdyer Park FL",
			Gpa:[2.5,2.8,3.9]
			}
		];
		//student array end
		function addStudent(n,a,arr)
			{
			studentA.push({Name:n,Address:a,Gpa:arr})	
			};
		addStudent("mike","somewhere america",[2.5,3.0,3.0]);
		domEdit.btn.addEventListener("click",onClick,true);
		var date=new Date();
		var stuNum=0;

		function onClick(e){
		var month=date.getUTCMonth();
		var day=date.getUTCDate();
		var year=date.getUTCFullYear();
		var dte=month+"/"+day+"/"+year;
		var curStu=studentA[stuNum];
			domEdit.nme.innerHTML="Name: "+curStu.Name;
			domEdit.adr.innerHTML="Address: "+curStu.Address;
			domEdit.gpa.innerHTML="GPA: "+curStu.Gpa;
			domEdit.dte.innerHTML="Date: "+dte;
			domEdit.avg.innerHTML="Average: "+avgNumbers(curStu.Gpa).toFixed(2);
			stuNum=stuNum+1;
			if(stuNum==studentA.length){
			domEdit.btn.removeEventListener("click",onClick,true);
			domEdit.btn.innerHTML="Done";
			};
			console.log(studentA.length);
			console.log(stuNum)
		};
		var avgNumbers = function(arr){
		    var nums=arr;
		    var numInA=nums.length;
		    var sumAr=0;
		    for(var i=0;i<numInA;i++){
		    	sumAr+=nums[i]
		    	};
			var avgNum=sumAr/numInA
			return avgNum;
		};
		//function for avrage
		//button click event
		for(var o in studentA)
			{
			for(var i in studentA[o])
				{
			console.log(i+":"+studentA[o][i])
				};
			console.log(avgNumbers(studentA[o].Gpa).toFixed(2))
			};
		var validGpa=function(value){
			var valid = true;
		if (value.length >= 4){
				valid = false;
				console.log("Error invalid Gpa");
		}else {
			var numS = value.split('.');
			var domain = parts[1];
			if (domain.indexOf('.') == -1)
			{	
				valid = false;
				console.log("Error invalid Gpa");
				};
       };
       return valid;
    };	
})()