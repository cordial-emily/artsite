function raiseTab(id,jsarray) {
  clearServiceList();
  highlightServiceList(jsarray);
}

function lowerTab(id) {
  clearServiceList();
  resetServiceList();
}

function clearServiceList() {
  var myArray = $('service_menu').immediateDescendants();
  for (var index = 0; index < myArray.length; ++index) {
    myArray[index].className = 'service_menu_off';
  }
}
function resetServiceList() {
  var myArray = $('service_menu').immediateDescendants();
  for (var index = 0; index < myArray.length; ++index) {
    myArray[index].className = sm_default[index];
  }
}
function highlightServiceList(jsarray) {
  var myArray = $('service_menu').immediateDescendants();
  for (var index = 0; index < myArray.length; ++index) {
    //myArray[index].removeClassName('service_menu_selected');
    //myArray[index].removeClassName('service_menu_off');
    //myArray[index].addClassName(jsarray[index]);
    //
    myArray[index].className = jsarray[index];
  }
}
