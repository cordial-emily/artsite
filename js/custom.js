// Creates a rollover effect for the thumbnail_ class
// Used on the art page

var mouseOverEffect = function() {
    jQuery(this).stop().animate({boxShadow: '0 0 30px #fff'});
};

var mouseOutEffect = function() {
    jQuery(this).stop().animate({boxShadow: '0 0 10px #000'});
};

jQuery(".thumbnail_").mouseover(mouseOverEffect).mouseout(mouseOutEffect);


/* On CV page, modal pop-ups for Web portfolio ************************/

var reply_click = function()
{
    //alert(this.id+" "); //+ this.innerHTML
    var newid = this.id;

    function testOutIds () {

      // add repeat code when Type error is resolved
      var oldtitle = document.getElementById(newid).getElementsByClassName("webtitle")[0].innerHTML;
      var x = document.getElementById("plansModalLabel").innerHTML = oldtitle;
      // unique description for modal body
      var olddescr = document.getElementById(newid).getElementsByClassName("site-description")[0].innerHTML;
      var newdescr = document.getElementById("modalBody").innerHTML = olddescr;
      // unique hrefs for 'learn more button'
      var learnbtnlink = document.getElementById(newid).getElementsByClassName("learnbtnlink")[0];
      var combobtn = '<a href="' + learnbtnlink.innerHTML + '" ><button type="button" class="btn btn-primary">Visit the site</button></a>';

      document.getElementById("learnmore").innerHTML = combobtn;
    }

    testOutIds();

}

/* Cycle through each class clicked and run the function 'reply_click' */
var elems = document.getElementsByClassName("web");
for(var i = 0; i<elems.length; i++ ){
  elems[i].onclick = reply_click;
}
