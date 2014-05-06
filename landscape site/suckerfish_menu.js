/* CODE WITHOUT DELAY
sfHover = function() {
	var sfEls = document.getElementById("nav").getElementsByTagName("li");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);
*/

/* CODE WITH DELAY */
sfHover = function() {
	var sfEls = document.getElementById("editor_menu").getElementsByTagName("li");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.timer = new Timer(this);
			this.timer.setTimeout("out",300);
		}
		sfEls[i].out=function() {
			this.className=this.className.replace(new RegExp("\\bsfhover\\b"), "");
		}
	}
}

if (window.attachEvent) window.attachEvent("onload", sfHover);
if (window.addEventListener) window.addEventListener( "load", sfHover, false );

// JavaScript Document