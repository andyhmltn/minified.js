var j=!0,s=null,u=!1;if(/^u/.test(typeof define)){var I={};this.define=function(t,l){I[t]=l()};this.require=function(t){return I[t]}}define("minified",function(){function t(a){return"string"==typeof a}function l(a){return"function"==typeof a&&!a.item}function z(a){return a&&a.nodeType}function v(a){return a&&a.length!=s&&!t(a)&&!z(a)&&!l(a)}function w(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function f(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function H(a,b){var c=[];f(a,function(a,e){b(a,e)&&c.push(a)});return c}function A(a,b){var c=[];f(a,function(a,e){v(a=b(a,e))?f(a,function(a){c.push(a)}):a!=s&&c.push(a)});return c}function m(a,b,c){return(a!=s?""+a:"").replace(b,c||"")}function x(a){return parseFloat(m(a,/^[^\d-]+/))}function J(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:s},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function K(a){a()}function L(a){D?D.push(a):p.setTimeout(a,0)}function E(){function a(a,e){b==s&&(b=a,c=e,p.setTimeout(function(){f(d,K)},0))}var b,c=[],d=[],e=a.then=function(a,e){function g(){try{var d=b?a:e;if(l(d)){var g=d.apply(s,c);g&&l(g.then)?g.then(function(a){k(j,[a])},function(a){k(u,[a])}):k(j,[g])}else k(b,c)}catch(f){k(u,[f])}}var k=E();b!=s?p.setTimeout(g,0):d.push(g);return k};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function y(a,b,c){return l(a)?L(a):new B(F(a,b,c))}function F(a,b,c){function d(a){a=function g(a){return v(a)?A(a,g):a}(a);return e?H(a,function(a){for(;a=a.parentNode;){if(a===e)return j;if(c)return u}}):a}var e;if(b&&1!=(b=F(b)).length)return A(b,function(b){return F(a,b)});e=b&&b[0];if(!t(a))return d(v(a)?a:[a]);b=(e||r).querySelectorAll(a);return e?d(b):b}function B(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var p=this,r=document,G={},D=[],C=[],M=A(["msR","webkitR","mozR","r"],function(a){return p[a+"equestAnimationFrame"]})[0]||function(a){p.setTimeout(a,33)};w({each:function(a){return f(this,a)},filter:function(a){return new B(H(this,a))},collect:function(a){return new B(A(this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return new B(H(this,function(a,b){return b>=c&&b<d}))},find:function(a){for(var b,c=l(a)?a:function(b,c){if(a===b)return c},d=0;d<this.length;d++)if((b=c(this[d],d))!=s)return b},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:s})},remove:function(){f(this,function(a){a.parentNode.removeChild(a)})},get:function(a,b){var c=this,d=c[0];if(d){if(t(a)){var e=m(a,/^[$@]/),q;q="$"==a?d.className:"$$"==a?d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(q=x(d.style.opacity))?1:q:"$$slide"==a?d.offsetHeight+"px":/^\$/.test(a)?p.getComputedStyle(d,s).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^@/.test(a)?d.getAttribute(e):d[e];return b?x(q):q}var h={};(v(a)?f:w)(a,function(a){h[a]=c.get(a,b)});return h}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=x(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?{$opacity:d}:{$height:/px$/.test(b)?b:function(a,b,c){return d*(d&&J(y(c)))+"px"},$overflow:"hidden"}):f(c,function(c,d){var h=m(a,/^[@$]/),g=c.className||"",k=/^\$/.test(a)?c.style:c,n=l(b)?b(y(c).get(a),d,c):b;"$"==a?n!=s&&(f(n.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=g;g=m(g,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=m(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?n!=s?c.setAttribute("style",n):c.removeAttribute("style"):/^@/.test(a)?n!=s?k.setAttribute(h,n):k.removeAttribute(h):k[h]=n}):t(a)||l(a)?c.set("$",a):w(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return f(this,function(c,d){var e;(function h(a){v(a)?f(a,h):l(a)?h(a(c,d)):a!=s&&(a=z(a)?a:r.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(z(a)&&d?s:a)})},fill:function(a){return f(this,function(a){y(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(){return new B(A(this,function(a){var b=z(a);if(1==b){var c={};f(a.attributes,function(a){var b=a.name;"id"!=b&&(c["@"+b]=a.value)});return G.EE(a.tagName,c,y(a.childNodes).clone())}return 5>b?a.data:s}))},animate:function(a,b,c,d){var e=this,q=[],h=/-?[\d.]+/,g,k=E(),n=l(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){g();k(u)};b=b||500;c=c||0;f(e,function(b){var c={a:y(b),c:{}};w(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*J(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?m(e.substr(2),h,x(d)+x(m(e,/\+?=/))):e});q.push(c)});g=G.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(f(q,function(a){a.a.set(a.c)}),g(),d.time=s,k(j,[e])):f(q,function(d){w(d.b,function(e,g){var f="rgb(",k=d.c[e],q=a/b;if(/^#|rgb\(/.test(k))for(var l=0;3>l;l++)f+=Math.round(n(c(g,l),c(k,l),q))+(2>l?",":")");else f=n(x(g),x(k),q),f=m(k,h,f!=s?""+f:"");d.a.set(e,f)})})});return k},toggle:function(a,b,c,d){var e=this,f={},h=u,g=/\b(?=\w)/g;return!b?e.toggle(m(a,g,"-"),m(a,g,"+")):e.set(a)&&function(g){g!==h&&(h=g===j||g===u?g:!h,c?e.animate(h?b:a,f.stop?f.stop()||f.time:c,d,f):e.set(h?b:a))}},on:function(a,b,c,d){return f(this,function(e,f){function h(a){a=a||p.event;if(!b.apply(d?c:a.target,d||c||[a,f])||d)a.preventDefault(),a.stopPropagation()}(b.M=b.M||[]).push({e:e,h:h,n:a});e.addEventListener(a,h,j)})}},function(a,b){B.prototype[a]=b});w({$:y,$$:function(a){return F(a)[0]},EE:function(a,b,c,d){return function(){var e=r.documentElement.namespaceURI,e=y(e?r.createElementNS(e,a):r.createElement(a));v(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}},request:function(a,b,c,d,e,l){var h,g=c,k=0,n=E();try{h=new XMLHttpRequest;if(c!=s){d=d||{};if(!t(c)&&!z(c)){var m=function N(a,b){return v(b)?A(b,function(b){return N(a,b)}):encodeURIComponent(a)+(b!=s?"="+encodeURIComponent(b):"")},p=[];w(c,function(a,b){v(a=m(a,b))?f(a,function(a){p.push(a)}):a!=s&&p.push(a)});g=p.join("&")}/post/i.test(a)?!z(c)&&!t(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+g,g=s)}h.open(a,b,j,e,l);w(d,function(a,b){h.setRequestHeader(a,b)});h.onreadystatechange=function(){4==h.readyState&&!k++&&(200==h.status?n(j,[h.responseText,h.responseXML]):n(u,[h.status,h.statusText,h.responseText]))};h.send(g);return n}catch(r){k||n(u,[0,s,r!=s?""+r:""])}},toJSON:p.JSON&&JSON.stringify,parseJSON:p.JSON&&JSON.parse,ready:L,setCookie:function(a,b,c,d,e,f){r.cookie=a+"="+(f?b:escape(b))+(c?"; expires="+("object"==typeof c?c:new Date((new Date).getTime()+864e5*c)).toUTCString():"")+"; path="+(d?escapeURI(d):"/")+(e?"; domain="+escape(e):"")},getCookie:function(a,b){var c,d=(c=RegExp("(^|;)\\s*"+a+"=([^;]*)").exec(r.cookie))&&c[2];return b?d:d&&unescape(d)},loop:function(a){var b={d:a,f:(new Date).getTime(),b:function(){for(var a=0;a<C.length;a++)C[a]===b&&C.splice(a--,1)}};2>C.push(b)&&function d(){f(C,function(a){a.d(Math.max(0,(new Date).getTime()-a.f),a.b)}).length&&M(d)}();return b.b},off:function(a){f(a.M,function(a){a.e.removeEventListener(a.n,a.h,j)});a.M=s},wait:function(a){var b=E();p.setTimeout(function(){b(j,[a])},a||0);return b}},function(a,b){G[a]=b});r.addEventListener("DOMContentLoaded",function(){f(D,K);D=s},u);return G});