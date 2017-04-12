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

var reply_click = function()
{
    // each button has a numerical id like "b1, b2", etc
    // when a button is clicked, the id is stored in this variable
    var newid = this.id;

    // here is a function funnels text from my html to bootstrap's modal once,
    // making it so that I can type out bootstrap's modal once instead of 14 times.
    function testOutIds () {

      // this selects elements, taking the elements' text contents and attaching them to ids
      var oldtitle = document.getElementById(newid).getElementsByClassName("webtitle")[0].innerHTML;
      var x = document.getElementById("plansModalLabel").innerHTML = oldtitle;
      // same for the modal body
      var olddescr = document.getElementById(newid).getElementsByClassName("site-description")[0].innerHTML;
      var newdescr = document.getElementById("modalBody").innerHTML = olddescr;
      // same for the 'learn more button'
      var learnbtnlink = document.getElementById(newid).getElementsByClassName("learnbtnlink")[0];
      // this adds a live link to the 'learn more button'
      var combobtn = '<a href="' + learnbtnlink.innerHTML + '" ><button type="button" class="btn btn-primary">Visit the site</button></a>';

      document.getElementById("learnmore").innerHTML = combobtn;
    }

    testOutIds();

}

/* This forloop cycles through each class clicked and runs the function 'reply_click' */
var elems = document.getElementsByClassName("web");
for(var i = 0; i<elems.length; i++ ){
  elems[i].onclick = reply_click;
}

/* Print a hello message in the console ************************************************/
function sayHelloInTheConsole() {
    console.log("Hey there!\nThanks for checking my console.\n\nIf you'd like to see some JS I've written, go to: http://cordial-emily.com/js/custom.js. \n\nPlease contact me with questions, comments, and work opportunities. Thanks! \n\nEmail: Cordial.Emily@gmail.com");
}
sayHelloInTheConsole();
