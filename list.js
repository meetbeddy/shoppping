var button= document.getElementById ("my-button");
var input= document.getElementById("user-input");
var ul= document.querySelector("ul");


function createitem(){
	//create list item
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

	//create button to go with list item
	var listButton= document.createElement("button");
	listButton.classList.add("list-btn")//adds css class to the button
	listButton.appendChild(document.createTextNode("X"));
 	li.appendChild(listButton);
 	listButton.addEventListener("click",removeListItem);

 	//removeListItem function
 	function removeListItem(){
 		li.classList.add("hide");
	 }
	 
  	li.addEventListener("click", crossThroughItems);
 	//cross through function
 	function crossThroughItems(){
 		li.classList.toggle("done");
 	}
}

function inputlenght(){
	return input.value.lenght;
}
// function for addList after buttonpress
function addAfterButtonPress(){
if (inputlenght()>0){
	createitem();
}
}
//funtion for adding after click
function addAfterClick(){
	if ( inputlenght > 0){
		createitem();
	}
}
//function for buttonpress
input.addEventListener("keypress", addAfterButtonPress);
function addAfterButtonPress (event){
	if (lenght.value.lenght > 0 && event.keycode === 13){
	createitem();
}
}

button.addEventListener("click", createitem);
input.addEventListener("keypress", addAfterButtonPress);





