(function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function s(e,t){var s=n(e,t)?i:r;s(e,t)}var n,r,i;if("classList"in document.documentElement){n=function(e,t){return e.classList.contains(t)};r=function(e,t){e.classList.add(t)};i=function(e,t){e.classList.remove(t)}}else{n=function(e,n){return t(n).test(e.className)};r=function(e,t){if(!n(e,t)){e.className=e.className+" "+t}};i=function(e,n){e.className=e.className.replace(t(n)," ")}}var o={hasClass:n,addClass:r,removeClass:i,toggleClass:s,has:n,add:r,remove:i,toggle:s};if(typeof define==="function"&&define.amd){define(o)}else{e.classie=o}})(window);(function(e){"use strict";function t(e){this.el=e;this.el.style.strokeDasharray=this.el.style.strokeDashoffset=this.el.getTotalLength()}t.prototype._draw=function(e){this.el.style.strokeDashoffset=this.el.getTotalLength()*(1-e)};t.prototype.setProgress=function(e,t){this._draw(e);if(t&&typeof t==="function"){setTimeout(t,200)}};t.prototype.setProgressFn=function(e){if(typeof e==="function"){e(this)}};e.PathLoader=t})(window);(function(){function o(){var n=function(){if(e.animations){this.removeEventListener(s,n)}u()};window.addEventListener("scroll",a);classie.add(t,"loading");if(e.animations){t.addEventListener(s,n)}else{n()}}function u(){var i=function(r){var i=0,o=setInterval(function(){i=Math.min(i+Math.random()*.1,1);r.setProgress(i);if(i===1){classie.remove(t,"loading");classie.add(t,"loaded");clearInterval(o);var u=function(t){if(e.animations){if(t.target!==n)return;this.removeEventListener(s,u)}classie.add(document.body,"layout-switch");window.removeEventListener("scroll",a)};if(e.animations){n.addEventListener(s,u)}else{u()}}},80)};r.setProgressFn(i)}function a(){window.scrollTo(0,0)}var e={animations:Modernizr.cssanimations},t=document.getElementById("ip-container"),n=t.querySelector("header.ip-header"),r=new PathLoader(document.getElementById("ip-loader-circle")),i={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},s=i[Modernizr.prefixed("animation")];o()})()