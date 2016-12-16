
var input1 = document.getElementById("input1");

var dropDown = document.getElementById("dropDown");

var input2 = document.getElementById("input2");

var answer = document.getElementById("answer");

var submitBtn = document.getElementById("submitBtn");


submitBtn.addEventListener("click", function(){

var operator =  dropDown.value;
var value1 = input1.value;
var value2 = input2.value;
	
	if (operator === "Add"){
		alert(Math.floor(value1) + Math.floor(value2));
	}
	
	if (operator === "Subtract"){
		alert(value1 - value2);
	}
	
	if (operator === "Multiply"){
		alert(value1 * value2);
	}
	
	if (operator === "Divide"){
		alert(value1 / value2);
	}
	
	if (operator === "Exponent"){
		alert(Math.pow(value1, value2));
	}
	
	if (operator === "Root"){
		alert(Math.pow(value1, 1/value2));
	}

})

getElementById("submitBtn").style.textAlign = "center";

