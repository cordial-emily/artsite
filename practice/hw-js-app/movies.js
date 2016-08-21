// Make movie info appear by searching

// create variables 
// .innerHTML creates strings that will go into html page
var listTemplate = document.getElementById("list_template").innerHTML,
    detailsTemplate = document.getElementById("details_template").innerHTML,
    searchText = document.getElementById("search_text"),
    listDiv = document.getElementById("list"),
    detailsDiv = document.getElementById("details"),
    searchBtn = document.getElementById("search_button");
  
// create eventListeners  
searchBtn.addEventListener("click", function() {
	var title = searchText.value;
	$.get("https://www.rijksmuseum.nl/api/en/collection/sk-c-5?key=yGAS14PA&format=json" + title, null, null, "json")
		.done(onSearchResult)
		.fail(onSearchFail);
});

// above $.done and $.fail calls these functions
function onSearchResult(data) {
    var html = Mustache.render(listTemplate, data);
    listDiv.innerHTML = html; 
     
    var items = listDiv.getElementsByTagName("a");
    
    // error message is homework assignment #2 
	if (data.Error) {
			detailsDiv.innerHTML += "<h2>Sorry, this movie is not in this database.</h2>";
		} else {
			for(var i = 0; i < items.length; i++) {
				var item = items[i];
				item.addEventListener("click", getDetails);
		    }
	    }
}
function onSearchFail() {
    alert("There was a problem connecting to the server.");
    
}

function getDetails(event) {
	var id = event.target.id;
	$.get("https://www.rijksmuseum.nl/api/en/collection/sk-c-5?key=yGAS14PA&format=json" + id, null, null, "json")
		.done(onDetailsResult)
		.fail(onSearchFail);
}

function onDetailsResult(data) {
	var html = Mustache.render(detailsTemplate, data);
	detailsDiv.innerHTML = html;
	console.log(data);
}


