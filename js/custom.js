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
      console.log("reading function" + newid);
      // add repeat code when Type error is resolved
      console.log("Welcome to my site. If you have questions, you can email me at cordial.emily@gmail.com")
      var oldtitle = document.getElementById(newid).getElementsByClassName("webtitle")[0].innerHTML;
      var x = document.getElementById("plansModalLabel").innerHTML = oldtitle;
      var olddescr = document.getElementById(newid).getElementsByClassName("site-description")[0].innerHTML;
      var newdescr = document.getElementById("modalBody").innerHTML = olddescr;
    }


    if (newid == "b1") {
      testOutIds();
      //console.log(oldtitle);
      //console.log(x[0]);
      // console.log("Welcome to my site. If you have questions, you can email me at cordial.emily@gmail.com")
      // var oldtitle = document.getElementById(newid).getElementsByClassName("webtitle")[0].innerHTML;
      // var x = document.getElementById("plansModalLabel").innerHTML = oldtitle;
      // var olddescr = document.getElementById(newid).getElementsByClassName("site-description")[0].innerHTML;
      // var newdescr = document.getElementById("modalBody").innerHTML = olddescr;
    }
    if (newid == "b2") {
      testOutIds();
      // var oldtitle = document.getElementById(newid).getElementsByClassName("webtitle")[0].innerHTML;
      // var x = document.getElementById("plansModalLabel").innerHTML = oldtitle;
      // var olddescr = document.getElementById(newid).getElementsByClassName("site-description")[0].innerHTML;
      // var newdescr = document.getElementById("modalBody").innerHTML = olddescr;
    }
    if (newid == "b3") {
      var oldtitle = document.getElementById(newid).getElementsByClassName("webtitle")[0].innerHTML;
      var x = document.getElementById("plansModalLabel").innerHTML = oldtitle;
      var olddescr = document.getElementById(newid).getElementsByClassName("site-description")[0].innerHTML;
      var newdescr = document.getElementById("modalBody").innerHTML = olddescr;
    }

}
document.getElementById('b1').onclick = reply_click;
document.getElementById('b2').onclick = reply_click;
document.getElementById('b3').onclick = reply_click;
