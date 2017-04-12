// Creates a rollover effect for the thumbnail_ class
// Used on the art page **********************************************/

var mouseOverEffect = function() {
    jQuery(this).stop().animate({boxShadow: '0 0 30px #fff'});
};

var mouseOutEffect = function() {
    jQuery(this).stop().animate({boxShadow: '0 0 10px #000'});
};

jQuery(".thumbnail_").mouseover(mouseOverEffect).mouseout(mouseOutEffect);


/* On CV page, Modal Pop-ups for Web portfolio ************************/

// This function funnels text from html to bootstrap's modal,
// ...making it so that I can type out bootstrap's modal once instead of 14 times.
var reply_click = function()
{
    // Each button has a numerical id like "b1, b2", etc.
    // When a button is clicked, its id is stored in this variable.
    var newid = this.id;

    function testOutIds () {

      // This section selects elements, taking the webtitle element's innerHTML and inserting it into plansModalLabel.
      var oldtitle = document.getElementById(newid).getElementsByClassName("webtitle")[0].innerHTML;
      var x = document.getElementById("plansModalLabel").innerHTML = oldtitle;

      // This section selects elements, taking the site-description element's innerHTML and inserting it into modalBody.
      var olddescr = document.getElementById(newid).getElementsByClassName("site-description")[0].innerHTML;
      var newdescr = document.getElementById("modalBody").innerHTML = olddescr;

      // This section selects the 'learn more button'.
      var learnbtnlink = document.getElementById(newid).getElementsByClassName("learnbtnlink")[0];

      // This adds a link to the 'learn more button'.
      var combobtn = '<a href="' + learnbtnlink.innerHTML + '" ><button type="button" class="btn btn-primary">Visit the site</button></a>';

      document.getElementById("learnmore").innerHTML = combobtn;
    }

    testOutIds();

}

var elems = document.getElementsByClassName("web");

/* Assigning the 'reply_click' function as an event handler. */
for(var i = 0; i<elems.length; i++ ){
  elems[i].onclick = reply_click;
}

/* This print a hello message in the console. (Don't forget to check. :) ) ************************************************/

function sayHelloInTheConsole() {
    console.log("Hey there!\nThanks for checking my console.\n\nIf you'd like to see some JS I've written, go to: http://cordial-emily.com/js/custom.js. \n\nPlease contact me with questions, comments, and work opportunities. Thanks! \n\nEmail: Cordial.Emily@gmail.com");
}
sayHelloInTheConsole();
