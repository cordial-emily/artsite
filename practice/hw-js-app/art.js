// Art search
////////////////////////////////////////////////////////////////////////////////

// declare variables

var listTemplate = document.getElementById("list_template").innerHTML,
    detailsTemplate = document.getElementById("details_template").innerHTML,
    searchText = document.getElementById("search_text"),
    listDiv = document.getElementById("list"),
    detailsDiv = document.getElementById("details"),
    elem = document.getElementById("elem"),
    searchBtn = document.getElementById("search_button");


// button trigger search
searchBtn.addEventListener("click", function() {
    var title = searchText.value;
    $.get("https://www.rijksmuseum.nl/api/en/collection?q=" + title + "&key=yGAS14PA&format=json", null, null, "json")
       .done(onSearchResult)
       .fail(onSearchFail);
});

// when connected
function onSearchResult(data) {

// lists search results in html page
    var html = Mustache.render(listTemplate, data);
    listDiv.innerHTML = html;


// make listed items links, add click event to each item
    var items = listDiv.getElementsByTagName("a");
    for(var i = 0; i < items.length; i++) {
        var item =  items[i];
        item.addEventListener("click", getDetails);
        item.addEventListener("click", testChanges);
    }
}

// when fails to connect
function onSearchFail() {
    alert("connection failed");
}

// when list items are clicked, show details
function getDetails(event) {
    var id = event.target.id;
    var newid = id.substring(3, id.length);
    $.get("https://www.rijksmuseum.nl/api/en/collection?q=" + newid + "&key=yGAS14PA&format=json", null, null, "json")
        // nl-SK-C-1368
        .done(onDetailsResult)
        .fail(onSearchFail);
}

function onDetailsResult(data) {
    var html = Mustache.render(detailsTemplate, data);
    console.log(data);
    detailsDiv.innerHTML = html;

}

///////////// SMALL SCREEN feature

// test width of screen
function testChanges() {

  if (matchMedia) {
    var mq = window.matchMedia( "(max-width: 720px)" );

    mq.addEventListener(makeChange);
    makeChange(mq);

  }

}

// Eventually add smooth scroll feature.  Currently jquery smooth scroll is not working.
//

// If small screen detected, add hrefs that point to description section

function makeChange(mq) {
  // make changes to links
  var change = function(event) {
    //
    function changeLinks() {
      //or grab element by tagname
      var x = document.getElementsByClassName("itemm");
      var i;
      // iterate through list
      for(i=0; i< x.length; i++) {
        x[i].setAttribute("href", "#elem");
        //console.log(x[i]);
      }

      return true;
    }

    var msg = (mq.matches ? changeLinks() : " ") ;
    //var msg = (mq.matches ? "less" : "more") + " than 720 pixels";

  };

  // select list
  change();


}
