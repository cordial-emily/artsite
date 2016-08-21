function setImageSrc(id, image_src) {
  $(id).src = image_src;
}

function openWindow(url,name,width,height) {
  if (!name) name='_blank';
  if (!width) width='350';
  if (!height) height='350';
  argstring = "noscrollbars,width=" + width + ",height=" + height + ",menubar=false,toolbar=false,left=20,screenX=20,top=20,screenY=20,resizable=yes";
  popupWin = window.open(url, name, argstring);
  popupWin.focus();
}


function addLoadEvent(func, arg) {
  var oldOnload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func(arg);
  }
  else {
    window.onload = function() {
      oldOnload();
      func(arg);
    }
  }
}


function eregReplace(search, replace, subject) {
  return subject.replace(new RegExp(search,'g'), replace);
}

// addLoadEvent(imceStartBrowser);

var imceSelectedRow = null;

Event.observe(window, 'load', imceStartBrowser);
function imceStartBrowser() {

  if (!document.getElementById('bodytable')) return;

  var row, rows = $('bodytable').getElementsByTagName('tr');

  var path;
//  if ($('latest_file').value) {
//    path = $('latest_file').value;
//  }
//  else if (readCookie('selected_image')) {
//    path = readCookie('selected_image');
//  }
//  else if (window.opener && !$('imagepreview').innerHTML) {
//    path = window.opener.imceRefererURL;
//  }
//  else {
    path = null;
//  }

  for (var i=0; row = rows[i]; i++) {
    if (path && path==row.getAttribute('ipath')) {
      imceHighlight(row, 1);
    }
    row.onmouseover = function() {Element.addClassName(this, 'rover')};
    row.onmouseout = function() {Element.removeClassName(this, 'rover')};
    row.onclick = function() {imceHighlight(this, 0, 'project')};
  }

}

function imceHighlight(row, append, form) {

  if (imceSelectedRow) {
    Element.removeClassName(imceSelectedRow, 'rsel');
  }
  if (imceSelectedRow==row) {
    imceSelectedRow = null;
    $('imagepreview').innerHTML = '';
    $('label').value = '';
    $('alt').value = '';
    $('id').value = '';
    $('upload').value = "Add Image/Folder";
    createCookie('selected_image', '')
  }
  else if (ifolder=row.getAttribute('ifolder')) {
    window.location.href = '/app_folders/pick/' + ifolder;
  }
  else {
    var w = parseInt(row.getAttribute('iw'));
    var h = parseInt(row.getAttribute('ih'));
    var path = '/img/' +  row.getAttribute('ipath');
    var id = row.getAttribute('iid');
    Element.addClassName(row, 'rsel');
    imceSelectedRow = row;
    $('imagepreview').innerHTML = (append ? $('imagepreview').innerHTML : '') + (w&&h ? '<a href="javascript: imceFinitor(' + id + ', \'' + form + '\')"><img src="'+ path +'" /></a>' : '');
    $('label').value = row.getAttribute('ilabel');
    $('alt').value = row.getAttribute('ialt');
    $('id').value = id;
    $('upload').value = "Edit Image";
    createCookie('selected_image', path)
  }
}

function imceFinitor(id, form) {

  if (!window.opener || !id) return;

  d = window.opener.document;

  i = d.getElementById(form + '_image');
  i.src = '/img/managed/Image/'+id+'/file.jpg';

  bs = "<a href=\"javascript: void(0)\" onclick=\"$('" + form + "_image').src='/img/managed/Image/"+id+"/large_file.jpg';$('" + form + "_info').innerHTML='IMAGE DESCRIPTION'\" onfocus=\"$('" + form + "_image').src='/img/managed/Image/"+id+"/large_file.jpg';$('" + form + "_info').innerHTML='IMAGE DESCRIPTION'\"><img src=\"/img/managed/Image/"+id+"/thumb1_file.jpg\" alt=\"IMAGE DESCRIPTION\"></a><br><input name=\"data[Image][Image]["+id+"]'\" value=\""+id+"\" type=\"hidden\"><input name=\"remove["+id+"]\" id=\"remove_"+id+"\" type=\"checkbox\"><label for=\"remove_"+id+"\">Unlink</label>";

  li = document.createElement("LI");
  li.class = form + '_image_off'
  li.innerHTML = bs;

  list = d.getElementById(form + '_image_list');
  list.appendChild(li);

  f = d.getElementById(form + 'EditForm');

  hi = document.createElement("input");
  hi.type = 'hidden';
  hi.id = 'add_image_' + id;
  hi.name = 'add_image['+id+']';
  hi.value = id;

  f.appendChild(hi);

}



////// sorting code /////

/* SORTTABLE
  based on http://webfx.eae.net/dhtml/sortabletable/sortabletable.html
  added/removed some functionality.
*/

addLoadEvent(sortables_init);

var COL_INDEX = parseInt(readCookie('column')||0);

function sortables_init() {

  if (!$('headertable')) return;

  var header = $('headertable').rows[0];
  var sortable = 'bodytable';
  for (var i=0;i<header.cells.length-1;i++) {
    var sortdir = COL_INDEX == i ? ' sortdir="'+readCookie('sortdir')+'"' : '';
    header.cells[i].innerHTML = '<a href="javascript:ts_resortTable('+ i +', \''+ sortable +'\');" id="sortlink'+i +'" class="sortheader">' + ts_getInnerText(header.cells[i]) + '<span id="sortspan'+i +'" class="sortarrow"'+ sortdir +'></span></a>';
  }
  ts_resortTable(COL_INDEX, sortable);

}

function ts_resortTable(column, tid) {
  var table = $(tid);
  if (table.rows.length <= 1) return;
  var lnk = $('sortlink'+column);
  var span = $('sortspan'+column);
  var old_index = COL_INDEX;
  COL_INDEX = column;
  var sortfn;
  switch (column*1) {
    case 1: sortfn = ts_sort_size; break;//size
    case 2: sortfn = ts_sort_numeric; break;//dimensions
    case 3: sortfn = ts_sort_date; break;//date
    default: sortfn = ts_sort_caseinsensitive;
  }
  var newRows = new Array();
  for (var i=0;i<table.rows.length;i++) {
    newRows[i] = table.rows[i];
  }
  newRows.sort(sortfn);
  $('sortspan'+old_index).innerHTML = '';
  if (span.getAttribute("sortdir") == 'down') {
    newRows.reverse();
    span.innerHTML = '&uarr;';
    span.setAttribute('sortdir','up');
    createCookie('sortdir', 'down')
  }
  else {
    span.innerHTML = '&darr;';
    span.setAttribute('sortdir','down');
    createCookie('sortdir', 'up')
  }
  for (var i=0;i<newRows.length;i++) {
    table.tBodies[0].appendChild(newRows[i]);
  }
  Element.removeClassName($('sortlink'+old_index), 'error');
  Element.addClassName(lnk, 'error');
  createCookie('column', column);
}

function ts_sort_numeric(a,b) {
  aa = parseFloat(ts_getInnerText(a.cells[COL_INDEX]));
  if (isNaN(aa)) aa = 0;
  bb = parseFloat(ts_getInnerText(b.cells[COL_INDEX])); 
  if (isNaN(bb)) bb = 0;
  return aa-bb;
}

function ts_sort_date(a,b) {
  aa = parseInt(a.cells[COL_INDEX].getAttribute('timestamp'));
  if (isNaN(aa)) aa = 0;
  bb = parseInt(b.cells[COL_INDEX].getAttribute('timestamp')); 
  if (isNaN(bb)) bb = 0;
  return aa-bb;
}

function ts_sort_size(a,b) {
  aa = parseInt(a.cells[COL_INDEX].getAttribute('bytesize'));
  if (isNaN(aa)) aa = 0;
  bb = parseInt(b.cells[COL_INDEX].getAttribute('bytesize')); 
  if (isNaN(bb)) bb = 0;
  return aa-bb;
}

function ts_sort_caseinsensitive(a,b) {
  aa = ts_getInnerText(a.cells[COL_INDEX]).toLowerCase();
  bb = ts_getInnerText(b.cells[COL_INDEX]).toLowerCase();
  if (aa==bb) return 0;
  if (aa<bb) return -1;
  return 1;
}

function ts_getInnerText(el) {
  if (typeof el == "string") return el;
  if (typeof el == "undefined") { return el };
  if (el.innerText) return el.innerText;
  var str = "";
  var cs = el.childNodes;
  var l = cs.length;
  for (var i = 0; i < l; i++) {
    switch (cs[i].nodeType) {
      case 1: //ELEMENT_NODE
        str += ts_getInnerText(cs[i]);
        break;
      case 3:  //TEXT_NODE
        str += cs[i].nodeValue;
        break;
    }
  }
  return str;
}

//quirksmode.org cookie functions
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

