var nounInput = document.getElementById("noun"),
    adjectiveInput = document.getElementById("adjective"),
    nameInput = document.getElementById("name"),
    libButton = document.getElementById("lib-button");


function validateInput(value) {
  if (value == null || value == "") { 
    return false;  
  }
  else {
    return true;
  }
}

function check(elem) {
	if (validateInput(elem.value)) {
		return true;
	} else {
		elem.style.borderColor = "red";
		return false;
	}
}

libButton.addEventListener("click", function() {
  var noun = nounInput.value,
      adjective = adjectiveInput.value,
      name = nameInput.value;
    
    var nounOk = validateInput(noun);
        adjOk = validateInput(adjective);
        nameOk = validateInput(name);
     
    if (!nounOk || !adjOk || !nameOk) {
    
      var item = document.createElement("div");
      item.textContent = "Please enter text into all fields.";
      story.appendChild(item);
      
      var items = document.querySelectorAll('input'), i;

      for (i = 0; i < items.length; ++i) {
      	check(items[i])
       }
    } else {
      var storyItem = document.createElement("div");
      storyItem.textContent = "The " + noun + " woke up one day and decided to go to the " + adjective + " cave under the sea. Here, " + name + " could be found.";
      story.appendChild(storyItem);
    
      // make boder gray again
      var inputBorder = document.querySelectorAll('li input'), i;
      for (i = 0; i < inputBorder.length; ++i) {
        inputBorder[i].style.borderColor = "#ccc";
      } 

    }

});

function oneResponse() {
  var list = document.getElementById('story');
  // remove  first child node
  
  while(list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  }
}




