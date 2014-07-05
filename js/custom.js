// Creates a rollover effect for the thumbnail_ class
// Used on the art page

var mouseOverEffect = function() {
    jQuery(this).stop().animate({boxShadow: '0 0 30px #fff'});
};

var mouseOutEffect = function() {
    jQuery(this).stop().animate({boxShadow: '0 0 10px #000'});
};

jQuery(".thumbnail_").mouseover(mouseOverEffect).mouseout(mouseOutEffect);