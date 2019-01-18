document.getElementById("p2").innerHTML="JAVA SCRIPT";

function func() {
	document.getElementById("p2").innerHTML="JAVA JAVA";
	document.getElementById("p2").style.color="red";
	document.getElementById("p2").style.fontSize="30px"
}

function clearInputData(){
	var form = document.forms["myform"];
	form.firstname.value = "";
	form.lastname.value = "";
	form.email.value = "";
	//alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");	
}

