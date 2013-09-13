/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){
	var domFields={name:document.getElementById("#f_username"),
		mail:document.getElementById("#f_email"),
		phone:document.getElementById("#f_phone"),
		pass:document.getElementById("#f_password"),
		social:document.getElementById("#f_ssn")
	};
    
    myform.onsubmit = function(e){
	    validateField(domFields.name);
	    validateField(domFields.mail);
	    validateField(domFields.phone);
		validateField(domFields.pass);
		validateField(domFields.social);

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        e.preventDefault();
        return false;
    };
    var validateField = function(inputName){
        if (inputName.name === 'f_username'){
            var pattern = /^([1-zA-Z0-1@.\s]{1,255})$/;
        }else if (inputName.name === 'f_email'){
            var pattern = /^([1-zA-Z0-1@.\s]{1,255})$/;
        }else if (inputName.name === 'f_phone'){
            var pattern = /^([0-9a-fA-F]){8}$/;
        }else if (inputName.name === 'f_password'){
            var pattern = /^([1-zA-Z0-1@.\s]{1,255})$/;
        }else if (inputName.name === 'f_ssn'){
            var pattern = /^\d{3}-\d{2}-\d{4}$/;
        };
            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.
        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



