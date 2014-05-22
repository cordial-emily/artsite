// JavaScript Document


<!-- this jquery slides in the contentVideo div  -->

	$(function() {
	  $('a').ready(function() {
		$('#contentVideoo').hide().slideDown(1000);
	  });
	});

	$(function() {
	  $('a').ready(function() {
		$('#contentVideo').hide().slideDown(1000);
	  });
	});
					   
    
<!-- this javascript makes all links with classname "newWin" open in a new window -->				   
						   					   
window.onload = newWinLinks;

	function newWinLinks() {
	  for (var i=0; i<document.links.length; i++) {
		if (document.links[i].className =="newWin") {
		  document.links[i].onclick =newWindow;
		}
	  }
	}
	
	function newWindow() {
	  var nWindow = window.open("http://teks.no/?page_id=137&lang=en", "nWin", "resizable=yes,width=500,height=500");
	  return false;
	}						   
							   
    
<!--This is the div slide-down for upcoming events page -->	
	$(function() {
      $('a').ready(function() {
        $('.text_etc').hide().slideDown(1000);
      });
    });
