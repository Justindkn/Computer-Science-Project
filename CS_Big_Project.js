
var input2 = document.getElementById("input2");

var submitBtn = document.getElementById("submitBtn");

var tCtx = document.getElementById('textCanvas').getContext('2d'),
    imageElem = document.getElementById('output1');

var output1 = document.getElementById("output1");

var text1 = document.getElementById("text");


	
text1.addEventListener("keyup", checkKeyPressed, false);
		
		function checkKeyPressed(e) {
			
			if(e.keyCode === 32){
				output1.innerHTML += "<img height = \""+input2.value+"\"src = Spacebar.PNG>";
				} 
				
			else if(e.keyCode === 190){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "." + ".PNG>";}
			
			else if(e.keyCode === 191){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "Question" + ".PNG>";}
				
			else if(e.keyCode === 222){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "'" + ".PNG>";}
				
			else if(e.keyCode === 188){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "," + ".PNG>";}
				
			else if(e.keyCode === 65){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "A" + ".PNG>";}
			
			else if(e.keyCode === 66){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "B" + ".PNG>";}
			
			else if(e.keyCode === 67){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "C" + ".PNG>";}
			
			else if(e.keyCode === 68){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "D" + ".PNG>";}
			
			else if(e.keyCode === 69){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "E" + ".PNG>";}
			
			else if(e.keyCode === 70){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "F" + ".PNG>";}
			
			else if(e.keyCode === 71){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "G" + ".PNG>";}
			
			else if(e.keyCode === 72){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "H" + ".PNG>";}
			
			else if(e.keyCode === 73){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "I" + ".PNG>";}
			
			else if(e.keyCode === 74){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "J" + ".PNG>";}
			
			else if(e.keyCode === 75){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "K" + ".PNG>";}
			
			else if(e.keyCode === 76){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "L" + ".PNG>";}
			
			else if(e.keyCode === 77){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "M" + ".PNG>";}
			
			else if(e.keyCode === 78){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "N" + ".PNG>";}
			
			else if(e.keyCode === 79){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "O" + ".PNG>";}
			
			else if(e.keyCode === 80){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "P" + ".PNG>";}
			
			else if(e.keyCode === 81){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "Q" + ".PNG>";}
			
			else if(e.keyCode === 82){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "R" + ".PNG>";}
			
			else if(e.keyCode === 83){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "S" + ".PNG>";}
			
			else if(e.keyCode === 84){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "T" + ".PNG>";}
			
			else if(e.keyCode === 85){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "U" + ".PNG>";}
			
			else if(e.keyCode === 86){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "V" + ".PNG>";}
			
			else if(e.keyCode === 87){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "W" + ".PNG>";}
			
			else if(e.keyCode === 88){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "X" + ".PNG>";}
			
			else if(e.keyCode === 89){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "Y" + ".PNG>";}
			
			else if(e.keyCode === 90){
				output1.innerHTML += "<img height = \""+input2.value+"\" src = "+ dropDown.value + "_" + "Z" + ".PNG>";}

text1.addEventListener("keyup", checkKeyPressed, false);				

			if(e.keyCode === 8 && confirm("Are you sure? This will delete your text!") == true){
				output1.innerHTML = "";
				text.value = "";}
				
			else{
				
			}
		
	}




