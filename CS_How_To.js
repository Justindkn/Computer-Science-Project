var x = document.getElementById("image");
var y = document.getElementById("image2");

submitBtn.addEventListener("click", function(){
	x.innerHTML = "<img src='https://t3.ftcdn.net/jpg/01/17/16/12/240_F_117161297_iipl1g1uZSWGvvuGuAp5ZoHh2Vw6cREB.jpg') height='40%' width='40%'><p>And now there is! You just added an image and this text to the html by clicking on that button.</p>"
})

submitBtn2.addEventListener("click", function(){
	y.innerHTML = "<img src='http://cdn.playbuzz.com/cdn/f2a23cad-edfc-422d-a7c6-212a26317721/47e1388d-9dbe-4a07-8992-09edbb3d047c.jpg') height='40%' width='40%'>"
})

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
