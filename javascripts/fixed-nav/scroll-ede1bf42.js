/* =============================================================

  Smooth Scroll v4.4
  Animate scrolling to anchor links, by Chris Ferdinandi.
  http://gomakethings.com

  Additional contributors:
  https://github.com/cferdinandi/smooth-scroll#contributors

  Free to use under the MIT License.
  http://gomakethings.com/mit/

  p.s. This is a custom build for Fixed Nav, ask @adtileHQ for
  any changes made into this build

 * ============================================================= */
window.smoothScroll=function(e,t,n){"use strict";var r={speed:500,easing:"easeInOutCubic",updateURL:!1,callbackBefore:function(){},callbackAfter:function(){}},i=function(e,t){for(var n in t)e[n]=t[n];return e},s=function(e,t){return e=="easeInQuad"?t*t:e=="easeOutQuad"?t*(2-t):e=="easeInOutQuad"?t<.5?2*t*t:-1+(4-2*t)*t:e=="easeInCubic"?t*t*t:e=="easeOutCubic"?--t*t*t+1:e=="easeInOutCubic"?t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1:e=="easeInQuart"?t*t*t*t:e=="easeOutQuart"?1- --t*t*t*t:e=="easeInOutQuart"?t<.5?8*t*t*t*t:1-8*--t*t*t*t:e=="easeInQuint"?t*t*t*t*t:e=="easeOutQuint"?1+ --t*t*t*t*t:e=="easeInOutQuint"?t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t:t},o=function(e,t){var n=0;if(e.offsetParent)do n+=e.offsetTop,e=e.offsetParent;while(e);return n-=t,n>=0?n:0},u=function(e){if(e===null||e===n)return{};var t={};return e=e.split(";"),e.forEach(function(e){e=e.trim(),e!==""&&(e=e.split(":"),t[e[0]]=e[1].trim())}),t},a=function(e,t){(t===!0||t==="true")&&history.pushState&&history.pushState({pos:e.id},"",e)},f=function(n,f,l,c){l=i(r,l||{});var h=u(n?n.getAttribute("data-options"):null),p=h.speed||l.speed,d=h.easing||l.easing,v=h.updateURL||l.updateURL,m=55,g=e.pageYOffset,y=o(t.querySelector(f),m),b,w=y-g,E=0,S,x;n&&n.tagName==="A"&&c&&c.preventDefault(),a(f,v);var T=function(r,i,s){var o=e.pageYOffset;if(r==i||o==i||e.innerHeight+o>=t.body.scrollHeight)clearInterval(s),l.callbackAfter(n,f)},N=function(){E+=16,S=E/p,S=S>1?1:S,x=g+w*s(d,S),e.scrollTo(0,Math.floor(x)),T(x,y,b)},C=function(){l.callbackBefore(n,f),b=setInterval(N,16)};e.pageYOffset===0&&e.scrollTo(0,0),C()},l=function(n){if("querySelector"in t&&"addEventListener"in e&&Array.prototype.forEach){n=i(r,n||{});var s=t.querySelectorAll("[data-scroll]");Array.prototype.forEach.call(s,function(e,t){e.addEventListener("click",f.bind(null,e,e.getAttribute("href"),n),!1)})}};return{init:l,animateScroll:f}}(window,document);