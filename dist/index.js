/*!
 * core-math
 * Version: 1.1.8
 * Build Date: 2020-06-23T12:39:17.263Z
 * License: MIT
 * Homepage: https://www.sibvrv.com
 * Repository: git+https://github.com/sibvrv/webpack-typescript-library-boilerplate.git
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["core-math"]=e():t["core-math"]=e()}(global,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vector2=void 0;var r=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this},t.prototype.set=function(t,e){return this.x=t,this.y=e,this},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y},t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.mul=function(t){return this.x*=t.x,this.y*=t.y,this},t.prototype.divf=function(t){return this.x/=t,this.y/=t,this},t.prototype.mulf=function(t){return this.x*=t,this.y*=t,this},t.prototype.mid=function(e){return new t(.5*(this.x+e.x),.5*(this.y+e.y))},t.prototype.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},t.prototype.abs=function(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this},t.prototype.equal=function(t){return this.x===t.x&&this.y===t.y},t.prototype.crossVector=function(){var t=this.x;return this.x=-this.y,this.y=t,this},t.prototype.cross=function(t){return this.x*t.y-this.y*t.x},t.prototype.normalize=function(){var t=this.x*this.x+this.y*this.y;return t=0===t?1:Math.sqrt(t),this.x/=t,this.y/=t,this},t.prototype.length=function(){var t=this.x,e=this.y;return Math.sqrt(t*t+e*e)},t.prototype.lengthSq=function(){var t=this.x,e=this.y;return t*t+e*e},t.prototype.distance=function(t){var e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)},t.prototype.distanceSq=function(t){var e=this.x-t.x,n=this.y-t.y;return e*e+n*n},t.prototype.fromAngle=function(t){return this.x=Math.cos(t),this.y=Math.sin(t),this},t.prototype.toAngle=function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},t.prototype.rotate=function(t){var e=Math.cos(t),n=Math.sin(t),r=this.x,o=this.y;return this.x=r*e-o*n,this.y=r*n+o*e,this},t.prototype.rotateAround=function(t,e){var n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,i=this.y-t.y;return this.x=o*n-i*r+t.x,this.y=o*r+i*n+t.y,this},t}();e.Vector2=r},function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||r(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.MATH_VERSION=void 0,e.MATH_VERSION={build:"1.1.8",date:"2020-06-23T12:39:17.263Z",stamp:1592915957},o(n(4),e),o(n(5),e),o(n(0),e),o(n(6),e),o(n(8),e),o(n(2),e),o(n(13),e),o(n(14),e),o(n(15),e),o(n(16),e)},function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||r(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),o(n(3),e),o(n(9),e),o(n(10),e),o(n(11),e),o(n(12),e)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.polygonArea=void 0,e.polygonArea=function(t){for(var e=0,n=t.length,r=void 0,o=0;o<n;o++)e+=t[r=(o+1)%n].x*t[o].y,e-=t[o].x*t[r].y;return e/2}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LN2_INV=e.SQRT2_INV=e.SQRT3=e.PI2_INV=e.PI_INV=e.PI_HALVES=e.PI_SQR=e.PI4=e.PI2=e.DEGREES_TO_RADIANS=e.RADIANS_TO_DEGREES=void 0;var r=Math.PI;e.RADIANS_TO_DEGREES=180/r,e.DEGREES_TO_RADIANS=r/180,e.PI2=2*r,e.PI4=4*r,e.PI_SQR=r*r,e.PI_HALVES=.5*r,e.PI_INV=1/r,e.PI2_INV=.5/r,e.SQRT3=Math.sqrt(3),e.SQRT2_INV=1/Math.SQRT2,e.LN2_INV=1/Math.LN2},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.smoothStep=e.lerp=e.clamp=e.floorPowerOfTwo=e.ceilPowerOfTwo=e.isPowerOfTwo=void 0,e.isPowerOfTwo=function(t){return 0==(t&t-1)&&0!==t},e.ceilPowerOfTwo=function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},e.floorPowerOfTwo=function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},e.clamp=function(t,e,n){return Math.max(e,Math.min(n,t))},e.lerp=function(t,e,n){return(1-n)*t+n*e},e.smoothStep=function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Vector2Array=void 0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(n(7).ArrayContainer);e.Vector2Array=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ArrayContainer=void 0;var r=function(){function t(){this.items=[]}return t.prototype.clear=function(){this.items.length=0},t.prototype.empty=function(){return 0===this.items.length},t.prototype.push=function(t){this.items.push(t)},t.prototype.pop=function(){this.items.pop()},t.prototype.get=function(t){return t>=0&&t<this.items.length?this.items[t]:void 0},t.prototype.size=function(){return this.items.length},t.prototype.reverse=function(){this.items.reverse()},t.prototype.insert=function(t,e){this.items.splice(t,0,e)},t.prototype.delete=function(t){this.items.splice(t,1)},t}();e.ArrayContainer=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Line2=void 0;var r=n(0),o=function(){function t(t,e){void 0===t&&(t=new r.Vector2),void 0===e&&(e=new r.Vector2),this.start=t,this.end=e}return t.directedLine=function(e,n){return new t(e,e.clone().add(n))},t.prototype.set=function(t,e){return this.start.copy(t),this.end.copy(e),this},t.prototype.clone=function(){return new t(this.start,this.end)},t.prototype.copy=function(t){return this.start.copy(t.start),this.end.copy(t.end),this},t.prototype.getCenter=function(){var t=this.start,e=this.end;return new r.Vector2(.5*(t.x+e.x),.5*(t.y+e.y))},t.prototype.delta=function(){var t=this.start,e=this.end;return new r.Vector2(e.x-t.x,e.y-t.y)},t.prototype.at=function(t){return this.delta().mulf(t).add(this.start)},t.prototype.squareLength=function(){return this.start.distanceSq(this.end)},t.prototype.length=function(){return this.start.distance(this.end)},t.prototype.equal=function(t){return t.start.equal(this.start)&&t.end.equal(this.end)},t.prototype.reverse=function(){var t;t=[this.end,this.start],this.start=t[0],this.end=t[1]},t.prototype.extrude=function(t){var e=this.start,n=this.end;return[e.clone(),e.clone().add(t),n.clone().add(t),n.clone()]},t}();e.Line2=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isClockwise=void 0;var r=n(3);e.isClockwise=function(t){return r.polygonArea(t)>0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.polygonOffset=void 0;var r=n(2),o=n(1);e.polygonOffset=function(t,e){r.isClockwise(t)&&t.reverse();for(var n=[],i=t.length,u=i;--u>=0;){var s=t[u],c=t[(u+1)%i];n[u]=c.clone().sub(s).crossVector().normalize().mulf(e)}var a=[];for(u=i;--u>=0;){s=t[u];var h=t[(u+1)%i],f=n[(i+u-1)%i],p=n[u],y=f.clone().add(p).normalize(),l=o.LineLineIntersection(s.x-y.x,s.y-y.y,s.x+y.x,s.y+y.y,s.x+p.x,s.y+p.y,h.x+p.x,h.y+p.y);a[u]=l?l.point:s.clone().add(p)}return a}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isPointInPoly=void 0,e.isPointInPoly=function(t,e,n){for(var r=!1,o=0,i=n.length-1;o<n.length;i=o++){var u=n[o].x,s=n[o].y,c=n[i].x,a=n[i].y;s>e!=a>e&&t<(c-u)*(e-s)/(a-s)+u&&(r=!r)}return r}},function(t,e,n){"use strict";var r=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],u=0,s=i.length;u<s;u++,o++)r[o]=i[u];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.convexHull2=void 0;var o=function(t,e){return t.x!==e.x?t.x-e.x:t.y-e.y};e.convexHull2=function(t){for(var e,n,i,u,s,c=r(t).sort(o),a=c.length,h=[],f=0;f<2*a;f++){for(var p=f<a?f:2*a-1-f;h.length>=2&&(e=h[h.length-2],n=h[h.length-1],i=c[p],u=void 0,s=void 0,u=(e.x-n.x)*(i.y-n.y)-(e.y-n.y)*(i.x-n.x),s=(e.x-n.x)*(i.x-n.x)+(e.y-n.y)*(i.y-n.y),u<0||0===u&&s<=0);)h.pop();h.push(c[p])}return h.pop(),h}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AABB2=void 0;var r=n(0),o=function(){function t(t,e){void 0===t&&(t=new r.Vector2(0,0)),void 0===e&&(e=new r.Vector2(0,0)),this.lower=t,this.upper=e}return t.isOverlap=function(t,e){var n=t.lower.clone().sub(e.upper);if(n.x>0||n.y>0)return!1;var r=e.lower.clone().sub(t.upper);return!(r.x>0||r.y>0)},t}();e.AABB2=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.OBB2=void 0;var r=n(0),o=function(){function t(t,e,n){void 0===t&&(t=new r.Vector2(0,0)),void 0===e&&(e=new r.Vector2(0,0)),void 0===n&&(n=0),this.pivot=t,this.size=e,this.rotation=n}return t.isOverlap=function(t,e){for(var n=[new r.Vector2(Math.cos(t.rotation),Math.sin(t.rotation)),new r.Vector2(-Math.sin(t.rotation),Math.cos(t.rotation)),new r.Vector2(Math.cos(e.rotation),Math.sin(e.rotation)),new r.Vector2(-Math.sin(e.rotation),Math.cos(e.rotation))],o=t.local2World(),i=e.local2World(),u=0;u<n.length;++u){for(var s=Number.MAX_VALUE,c=-Number.MAX_VALUE,a=void 0,h=0;h<o.length;++h)s=s>(a=o[h].dot(n[u]))?a:s,c=c<a?a:c;var f=Number.MAX_VALUE,p=-Number.MAX_VALUE,y=void 0;for(h=0;h<i.length;++h)f=f>(y=i[h].dot(n[u]))?y:f,p=p<y?y:p;if(c-s+(p-f)<=(c>p?c:p)-(s<f?s:f))return!1}return!0},t.prototype.local2World=function(){for(var t=[new r.Vector2(.5*-this.size.x,.5*-this.size.y),new r.Vector2(.5*this.size.x,.5*-this.size.y),new r.Vector2(.5*this.size.x,.5*this.size.y),new r.Vector2(.5*-this.size.x,.5*this.size.y)],e=t.length;--e>=0;)t[e].rotate(this.rotation).add(this.pivot);return t},t}();e.OBB2=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LineLineIntersection=void 0;var r=n(0);e.LineLineIntersection=function(t,e,n,o,i,u,s,c){var a=(c-u)*(n-t)-(s-i)*(o-e);if(0===a)return!1;var h=e-u,f=t-i,p=(n-t)*h-(o-e)*f;return h=((s-i)*h-(c-u)*f)/a,f=p/a,{point:new r.Vector2(t+h*(n-t),e+h*(o-e)),onLine1:h>0&&h<1,onLine2:f>0&&f<1}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.easeInOutQuint=e.easeOutQuint=e.easeInQuint=e.easeInOutQuart=e.easeOutQuart=e.easeInQuart=e.easeInOutCubic=e.easeOutCubic=e.easeInCubic=e.easeInOutQuad=e.easeOutQuad=e.easeInQuad=e.linear=void 0,e.linear=function(t){return t},e.easeInQuad=function(t){return t*t},e.easeOutQuad=function(t){return t*(2-t)},e.easeInOutQuad=function(t){return t<.5?2*t*t:2*(2-t)*t-1},e.easeInCubic=function(t){return t*t*t},e.easeOutCubic=function(t){return--t*t*t+1},e.easeInOutCubic=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},e.easeInQuart=function(t){return t*t*t*t},e.easeOutQuart=function(t){return 1- --t*t*t*t},e.easeInOutQuart=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},e.easeInQuint=function(t){return t*t*t*t*t},e.easeOutQuint=function(t){return 1+--t*t*t*t*t},e.easeInOutQuint=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}])}));