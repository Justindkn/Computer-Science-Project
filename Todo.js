var input1 = document.getElementById("input1");

var input2 = document.getElementById("input2");

var submitBtn = document.getElementById("submitBtn");

var parent = document.getElementById("parent");

var c = document.getElementById("child");

var dropDown = document.getElementById("dropDown");

var dropDown2 = document.getElementById("dropDown2");

var checkList = document.getElementById("checkList");

var potato = document.getElementById("potato");



creation.addEventListener("click", function(){
    
	var container = document.createElement("div");
    
	container.innerHTML = "<br><span><input type='checkbox' value='' /></span> <span><input type='text' value='' size='30' style='padding: 5px; font-size:25px;'/></span><br>";
    
	document.getElementById("theform_div").appendChild(container); 
})


function delete_fields() {
	if (confirm("Are you sure? This will delete your entire checklist.") == true) {
	theform_div.innerHTML = "<br><span><input type='checkbox' value='' /></span> <span> <input type='text' value='' size='30' style='padding: 5px; font-size:25px;'/></span><br>";}
	else {
    }
}

    

submitBtn.addEventListener("click", function(){
	parent.style.backgroundColor = input1.value;
})

submitBackBtn.addEventListener("click",function(){
	document.body.style.backgroundColor = input2.value;
})

submitBorderBtn.addEventListener("click", function(){

var operator = dropDown.value;

	if (operator === "None"){
		parent.style.border = "12px hidden #ffffff";
	}
	
	if (operator === "Pink"){
		parent.style.border = "12px solid #ff1aff";
	}
	
	if (operator === "Red"){
		parent.style.border = "12px solid #ff0000";
	}
	
	if (operator === "Orange"){
		parent.style.border = "12px solid #ff9900";
	}
	
	if (operator === "Yellow"){
		parent.style.border = "12px solid #ffff00";
	}
	
	if (operator === "Green"){
		parent.style.border = "12px solid #00ff00";
	}
	
	if (operator === "Blue"){
		parent.style.border = "12px solid #0000cc";
	}
	
	if (operator === "Purple"){
		parent.style.border = "12px solid #9900cc";
	}
	
	if (operator === "Black"){
		parent.style.border = "12px solid #000000";
	}
	
	if (operator === "White"){
		parent.style.border = "12px solid #ffffff";
	}
})

submitFontBtn.addEventListener("click", function(){

var operator2 = dropDown2.value;

	if (operator2 === "None"){
		checkList.style.color = "#000000";
	}
	
	if (operator2 === "Pink"){
		checkList.style.color = "#ff1aff";
	}
	
	if (operator2 === "Red"){
		checkList.style.color = "#ff0000";
	}
	
	if (operator2 === "Orange"){
		checkList.style.color = "#ff9900";
	}
	
	if (operator2 === "Yellow"){
		checkList.style.color = "#ffff00";
	}
	
	if (operator2 === "Green"){
		checkList.style.color = "#00ff00";
	}
	
	if (operator2 === "Blue"){
		checkList.style.color = "#0000cc";
	}
	
	if (operator2 === "Purple"){
		checkList.style.color = "#9900cc";
	}
	
	if (operator2 === "White"){
		checkList.style.color = "#ffffff";
	}
})






