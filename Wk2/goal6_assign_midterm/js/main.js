//PWA 2013 september 16
//Damaiso ELi Gerena IV
//Midterm Programming
(function(){
	//VAr's
    var stuNum=0;
    function StudentCreator(n,a,g){
        this.Name=n;
        this.Address=a;
        this.Gpa=g;
        this.avgGpa=this.avgNumbers();

    };
    StudentCreator.prototype.avgNumbers = function(){
//        var nums=arr;
        var numInA=this.Gpa.length;
        console.log(numInA+"wtf");
        var sumAr=0;
        for(var i=0;i<numInA;i++){
            sumAr=sumAr+this.Gpa[i];
            console.log(sumAr);
        };
        var avgNum=sumAr/numInA;
//        students[stuNum].avgGpa=avgNum;
//         this.avgGpa=avgNum;
        return avgNum;
    };
    var date=new Date();
    var students=[new StudentCreator("Mike","fak it",[3.0,2.4,2.8]),new StudentCreator("tim","shight it",[2.0,2.4,2.8])];
    console.log(students[0]);
    students[0].avgNumbers(students[0].Gpa);
    var domEdit={
			nme:document.querySelector("#name"),
			adr:document.querySelector("#address"),
			gpa:document.querySelector("#gpa"),
			dte:document.querySelector("#date"),
			avg:document.querySelector("#gpaavg"),
			phn:document.querySelector("#phone"),
			btn:document.querySelector(".buttonred")
	};
    editDom();
    add();

    function add(){
    students.push(new StudentCreator("russa","fakka lit",[3.0,2.9,2.8]));
    };
    domEdit.btn.addEventListener("click",onClick,true);
    function onClick(e){
        if(stuNum<students.length){
            console.log(students);
            editDom();
        }else if(stuNum==students.length){
            domEdit.btn.removeEventListener("click",onClick,true);
            domEdit.btn.innerHTML="Done";
        };
    };//button click event
    function editDom(){
        domEdit.nme.innerHTML="Name: "+students[stuNum].Name;
        domEdit.adr.innerHTML="Address: "+students[stuNum].Address;
        domEdit.gpa.innerHTML="GPA: "+students[stuNum].Gpa;
        domEdit.dte.innerHTML="Date: "+dte();
        domEdit.avg.innerHTML="Average: "+students[stuNum].avgGpa.toFixed(2);
        stuNum++;
    };
    function dte(){
        var month=date.getUTCMonth()+1;
        var day=date.getUTCDate();
        var year=date.getUTCFullYear();
        var dte=month+"/"+day+"/"+year;
        return dte;
    };
    for(var o in students){
        for(var i in students[o])
            {
        console.log(i+":"+students[o][i])
        };
        console.log(students[stuNum].avgGpa.toFixed(2)+"\n"+dte())
     };
    var validGpa=function(value){
        var valid = true;
        if (value.length >= 4){
            valid = false;
            console.log("Error invalid Gpa");
        }else {
        var numS = value.split('.');
        var domain = parts[1];
        if (domain.indexOf('.') == -1){
            valid = false;
            console.log("Error invalid Gpa");
            };
        };
    //function for avrage
    return valid;
    };
})();