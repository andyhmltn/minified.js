var k=!0,p=null,s=!1;if(/^u/.test(typeof define)){var K={};this.define=function(x,u){K[x]=u()};this.require=function(x){return K[x]}}define("minified",function(){function x(a){return a!=p?""+a:""}function u(a){return"string"==typeof a}function v(a){return"function"==typeof a&&!a.item}function C(a){return a&&a.nodeType}function w(a){return a&&a.length!=p&&!u(a)&&!C(a)&&!v(a)}function y(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function j(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function H(a,b){var c=[];j(a,function(a,e){b(a,e)&&c.push(a)});return c}function z(a,b){var c=[];j(a,function(a,e){w(a=b(a,e))?j(a,function(a){c.push(a)}):a!=p&&c.push(a)});return c}function L(a,b){var c=[];y(a,function(a,e){w(a=b(a,e))?j(a,function(a){c.push(a)}):a!=p&&c.push(a)});return c}function m(a,b,c){return x(a).replace(b,c||"")}function A(a){return parseFloat(m(a,/^[^\d-]+/))}function M(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:p},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function N(a){a()}function O(){j(E,N);E=p}function P(a){E?E.push(a):n.setTimeout(a,0)}function I(){function a(a,e){b==p&&(b=a,c=e,n.setTimeout(function(){j(d,N)},0))}var b,c=[],d=[],e=a.then=function(a,e){function g(){try{var d=b?a:e;if(v(d)){var g=d.apply(p,c);g&&v(g.then)?g.then(function(a){l(k,[a])},function(a){l(s,[a])}):l(k,[g])}else l(b,c)}catch(J){l(s,[J])}}var l=I();b!=p?n.setTimeout(g,0):d.push(g);return l};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function Q(a){return S[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function t(a,b,c){return v(a)?P(a):new D(B(a,b,c))}function B(a,b,c){function d(a){a=function J(a){return w(a)?z(a,J):a}(a);return e?H(a,function(a){for(;a=a.parentNode;){if(a===e)return k;if(c)return s}}):a}var e,h,f,g,l;if(b&&1!=(b=B(b)).length)return z(b,function(b){return B(a,b)});e=b&&b[0];if(!u(a))return d(w(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return z(b,function(a){return B(a,e)});if(b=/(\S+)\s+(.+)$/.exec(a))return B(b[2],B(b[1],e));if(a!=(b=m(a,/^#/)))return d([r.getElementById(b)]);e=e||r;h=(b=/([^.]*)\.?([^.]*)/.exec(a))[1];g=b[2];b=(f=e.getElementsByClassName&&g)?e.getElementsByClassName(g):e.getElementsByTagName(h||"*");if(h=f?h:g)l=RegExp("\\b"+h+"\\b","i"),b=H(b,function(a){return l.test(a[f?"nodeName":"className"])});return e?d(b):b}function D(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var n=this,r=document,E=[],F=[],T=z(["msR","webkitR","mozR","r"],function(a){return n[a+"equestAnimationFrame"]})[0]||function(a){n.setTimeout(a,33)},G=!!r.all&&!E.map,S={"	":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};y({each:function(a){return j(this,a)},filter:function(a){return new D(H(this,a))},collect:function(a){return new D(z(this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return new D(H(this,function(a,b){return b>=c&&b<d}))},find:function(a){for(var b,c=v(a)?a:function(b,c){if(a===b)return c},d=0;d<this.length;d++)if((b=c(this[d],d))!=p)return b},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:p})},remove:function(){j(this,function(a){a.parentNode.removeChild(a)})},get:function(a,b){var c=this,d=c[0];if(d){if(u(a)){var e=m(a,/^[$@]/),h;h="$"==a?d.className:"$$"==a?G?d.style.cssText:d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(h=G?A(d.style.filter)/100:A(d.style.opacity))?1:h:"$$slide"==a?d.offsetHeight+"px":/^\$/.test(a)?n.getComputedStyle?n.getComputedStyle(d,p).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(d.currentStyle||d.style)[e]:/^@/.test(a)?d.getAttribute(e):d[e];return b?A(h):h}var f={};(w(a)?j:y)(a,function(a){f[a]=c.get(a,b)});return f}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=A(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?G?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$opacity:d}:{$height:/px$/.test(b)?b:function(a,b,c){return d*(d&&M(t(c)))+"px"},$overflow:"hidden"}):j(c,function(c,d){var f=m(a,/^[@$]/),g=c.className||"",l=/^\$/.test(a)?c.style:c,q=v(b)?b(t(c).get(a),d,c):b;"$"==a?q!=p&&(j(q.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=g;g=m(g,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=m(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?G?l.cssText=q:q!=p?c.setAttribute("style",q):c.removeAttribute("style"):/^@/.test(a)?q!=p?l.setAttribute(f,q):l.removeAttribute(f):l[f]=q}):u(a)||v(a)?c.set("$",a):y(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return j(this,function(c,d){var e;(function f(a){w(a)?j(a,f):v(a)?f(a(c,d)):a!=p&&(a=C(a)?a:r.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(C(a)&&d?p:a)})},fill:function(a){return j(this,function(a){t(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(){return new D(z(this,function(a){var b=C(a);if(1==b){var c={$:a.className||p,$$:G?a.style.cssText:a.getAttribute("style")};j(a.attributes,function(b){var e=b.name;"id"!=e&&"style"!=e&&"class"!=e&&a.getAttribute(e)&&(c["@"+e]=b.value)});return t.EE(a.tagName,c,t(a.childNodes).clone())}return 5>b?a.data:p}))},animate:function(a,b,c,d){var e=this,h=[],f=/-?[\d.]+/,g,l=I(),q=v(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){g();l(s)};b=b||500;c=c||0;j(e,function(b){var c={a:t(b),c:{}};y(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*M(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?m(e.substr(2),f,A(d)+A(m(e,/\+?=/))):e});h.push(c)});g=t.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(j(h,function(a){a.a.set(a.c)}),g(),d.time=p,l(k,[e])):j(h,function(d){y(d.b,function(e,g){var h="rgb(",l=d.c[e],j=a/b;if(/^#|rgb\(/.test(l))for(var n=0;3>n;n++)h+=Math.round(q(c(g,n),c(l,n),j))+(2>n?",":")");else h=m(l,f,x(q(A(g),A(l),j)));d.a.set(e,h)})})});return l},toggle:function(a,b,c,d){var e=this,h={},f=s,g=/\b(?=\w)/g;return!b?e.toggle(m(a,g,"-"),m(a,g,"+")):e.set(a)&&function(g){g!==f&&(f=g===k||g===s?g:!f,c?e.animate(f?b:a,h.stop?h.stop()||h.time:c,d,h):e.set(f?b:a))}},on:function(a,b,c,d){return j(this,function(e,h){function f(a){a=a||n.event;if(!b.apply(d?c:a.target,d||c||[a,h])||d)a.stopPropagation&&(a.preventDefault(),a.stopPropagation()),a.returnValue=s,a.cancelBubble=k}(b.M=b.M||[]).push({e:e,h:f,n:a});e.addEventListener?e.addEventListener(a,f,k):e.attachEvent("on"+a,f)})}},function(a,b){D.prototype[a]=b});y({$$:function(a){return B(a)[0]},EE:function(a,b,c,d){return function(){var e=r.documentElement.namespaceURI,e=t(e?r.createElementNS(e,a):r.createElement(a));w(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}},request:function(a,b,c,d,e,h){var f,g=c,l=0,j=I();try{return f=n.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),c!=p&&(d=d||{},!u(c)&&!C(c)&&(g=L(c,function R(a,b){return w(b)?z(b,function(b){return R(a,b)}):encodeURIComponent(a)+(b!=p?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?!C(c)&&!u(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+g,g=p)),f.open(a,b,k,e,h),y(d,function(a,b){f.setRequestHeader(a,b)}),f.onreadystatechange=function(){4==f.readyState&&!l++&&(200==f.status?j(k,[f.responseText,f.responseXML]):j(s,[f.status,f.statusText,f.responseText]))},f.send(g),j}catch(m){l||j(s,[0,p,x(m)])}},toJSON:function b(c){return c==p?""+c:u(c=c.valueOf())?'"'+m(c,/[\\\"\x00-\x1f\x22\x5c]/g,Q)+'"':w(c)?"["+z(c,b).join()+"]":"object"==typeof c?"{"+L(c,function(c,e){return b(c)+":"+b(e)}).join()+"}":x(c)},parseJSON:n.JSON?n.JSON.parse:function(b){b=m(b,/[\x00\xad\u0600-\uffff]/g,Q);if(/^[[\],:{}\s]*$/.test(m(m(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:P,setCookie:function(b,c,d,e,h,f){r.cookie=b+"="+(f?c:escape(c))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864e5*d)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(h?"; domain="+escape(h):"")},getCookie:function(b,c){var d,e=(d=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(r.cookie))&&d[2];return c?e:e&&unescape(e)},loop:function(b){var c={d:b,f:(new Date).getTime(),b:function(){for(var b=0;b<F.length;b++)F[b]===c&&F.splice(b--,1)}};2>F.push(c)&&function e(){j(F,function(b){b.d(Math.max(0,(new Date).getTime()-b.f),b.b)}).length&&T(e)}();return c.b},off:function(b){j(b.M,function(b){b.e.addEventListener?b.e.removeEventListener(b.n,b.h,k):b.e.detachEvent("on"+b.n,b.h)});b.M=p},wait:function(b){var c=I();n.setTimeout(function(){c(k,[b])},b||0);return c}},function(b,c){t[b]=c});n.onload=O;r.addEventListener&&r.addEventListener("DOMContentLoaded",O,s);return{$:t}});