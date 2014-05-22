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
    
<!--This is the div slide-down for upcoming events page -->	
	$(function() {
      $('a').ready(function() {
        $('.text_etc').hide().slideDown(1000);
      });
    });
	
<!--This makes images larger when you hover over them -->	

$(document).ready(function() {
	var cont_left = $("#container").position().left;
	$("a img").hover(function() {
		// hover in
		$(this).parent().parent().css("z-index", 1);
		$(this).animate({
			height: "140",
			width: "140",
			left: "-=10",
			top: "-=10"
		}, "fast");
	}, function() {
        // hover out
        $(this).parent().parent().css("z-index", 0);
        $(this).animate({
            height: "130",
            width: "130",
            left: "+=10",
            top: "+=10"
        }, "fast");
    });
        
    $(".img").each(function(index) {
    	var left = (index * 160) + cont_left;
        $(this).css("left", left + "px");
    });
});