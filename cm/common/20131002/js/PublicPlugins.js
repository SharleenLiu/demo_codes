/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
* Build: http://www.modernizr.com/download/#-applicationcache-canvas-canvastext-history-audio-video-localstorage-sessionstorage-webworkers-geolocation-shiv-cssclasses-load
*/
; window.Modernizr = function (a, b, c) { function u(a) { j.cssText = a } function v(a, b) { return u(prefixes.join(a + ";") + (b || "")) } function w(a, b) { return typeof a === b } function x(a, b) { return !! ~("" + a).indexOf(b) } function y(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : w(f, "function") ? f.bind(d || b) : f } return !1 } var d = "2.5.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = {}, n = {}, o = {}, p = [], q = p.slice, r, s = {}.hasOwnProperty, t; !w(s, "undefined") && !w(s.call, "undefined") ? t = function (a, b) { return s.call(a, b) } : t = function (a, b) { return b in a && w(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = q.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(q.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(q.call(arguments))) }; return e }), m.canvas = function () { var a = b.createElement("canvas"); return !!a.getContext && !!a.getContext("2d") }, m.canvastext = function () { return !!e.canvas && !!w(b.createElement("canvas").getContext("2d").fillText, "function") }, m.geolocation = function () { return !!navigator.geolocation }, m.history = function () { return !!a.history && !!history.pushState }, m.video = function () { var a = b.createElement("video"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") } catch (d) { } return c }, m.audio = function () { var a = b.createElement("audio"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "") } catch (d) { } return c }, m.localstorage = function () { try { return localStorage.setItem(h, h), localStorage.removeItem(h), !0 } catch (a) { return !1 } }, m.sessionstorage = function () { try { return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0 } catch (a) { return !1 } }, m.webworkers = function () { return !!a.Worker }, m.applicationcache = function () { return !!a.applicationCache }; for (var z in m) t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? "" : "no-") + r)); return u(""), i = k = null, function (a, b) { function g(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function h() { var a = k.elements; return typeof a == "string" ? a.split(" ") : a } function i(a) { var b = {}, c = a.createElement, e = a.createDocumentFragment, f = e(); a.createElement = function (a) { var e = (b[a] || (b[a] = c(a))).cloneNode(); return k.shivMethods && e.canHaveChildren && !d.test(a) ? f.appendChild(e) : e }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/\w+/g, function (a) { return b[a] = c(a), f.createElement(a), 'c("' + a + '")' }) + ");return n}")(k, f) } function j(a) { var b; return a.documentShived ? a : (k.shivCSS && !e && (b = !!g(a, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), f || (b = !i(a)), b && (a.documentShived = b), a) } var c = a.html5 || {}, d = /^<|^(?:button|form|map|select|textarea)$/i, e, f; (function () { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", e = "hidden" in a, f = a.childNodes.length == 1 || function () { try { b.createElement("a") } catch (a) { return !0 } var c = b.createDocumentFragment(); return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined" } () })(); var k = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: j }; a.html5 = k, j(b) } (this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + p.join(" ") : ""), e } (this, this.document), function (a, b, c) { function d(a) { return o.call(a) == "[object Function]" } function e(a) { return typeof a == "string" } function f() { } function g(a) { return !a || a == "loaded" || a == "complete" || a == "uninitialized" } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { (a.t == "c" ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { a != "img" && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = {}, o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; y[c] === 1 && (r = 1, y[c] = [], l = b.createElement(a)), a == "object" ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), a != "img" && (r || y[c] === 2 ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i(b == "c" ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), p.length == 1 && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && o.call(a.opera) == "[object Opera]", l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return o.call(a) == "[object Array]" }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c } function g(a, e, f, g, i) { var j = b(a), l = j.autoCallback; j.url.split(".").pop().split("?").shift(), j.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]] || h), j.instead ? j.instead(a, e, f, g, i) : (y[j.url] ? j.noexec = !0 : y[j.url] = 1, f.load(j.url, j.forceCSS || !j.forceJS && "css" == j.url.split(".").pop().split("?").shift() ? "c" : c, j.noexec, j.attrs, j.timeout), (d(e) || d(l)) && f.load(function () { k(), e && e(j.origUrl, i, g), l && l(j.origUrl, i, g), y[j.url] = 2 }))) } function i(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b } (), a) a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } } (k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var j, l, m = this.yepnope.loader; if (e(a)) g(a, 0, m, 0); else if (w(a)) for (j = 0; j < a.length; j++) l = a[j], e(l) ? g(l, 0, m, 0) : w(l) ? B(l) : Object(l) === l && i(l, m); else Object(a) === a && i(a, m) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } } (this, document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };


/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
* Licensed under the MIT License (LICENSE.txt).
*
* Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
* Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
* Thanks to: Seamus Leahy for adding deltaX and deltaY
*
* Version: 3.0.4
*
* Requires: 1.2.2+
*/

(function (d) {
    function g(a) { var b = a || window.event, i = [].slice.call(arguments, 1), c = 0, h = 0, e = 0; a = d.event.fix(b); a.type = "mousewheel"; if (a.wheelDelta) c = a.wheelDelta / 120; if (a.detail) c = -a.detail / 3; e = c; if (b.axis !== undefined && b.axis === b.HORIZONTAL_AXIS) { e = 0; h = -1 * c } if (b.wheelDeltaY !== undefined) e = b.wheelDeltaY / 120; if (b.wheelDeltaX !== undefined) h = -1 * b.wheelDeltaX / 120; i.unshift(a, c, h, e); return d.event.handle.apply(this, i) } var f = ["DOMMouseScroll", "mousewheel"]; d.event.special.mousewheel = { setup: function () {
        if (this.addEventListener) for (var a =
f.length; a; ) this.addEventListener(f[--a], g, false); else this.onmousewheel = g
    }, teardown: function () { if (this.removeEventListener) for (var a = f.length; a; ) this.removeEventListener(f[--a], g, false); else this.onmousewheel = null }
    }; d.fn.extend({ mousewheel: function (a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function (a) { return this.unbind("mousewheel", a) } })
})(jQuery);


/*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*
* Uses the built in easing capabilities added In jQuery 1.1
* to offer multiple easing options
*
* TERMS OF USE - jQuery Easing
* 
* Open source under the BSD License. 
* 
* Copyright © 2008 George McGinley Smith
* All rights reserved.
* 
* Redistribution and use in source and binary forms, with or without modification, 
* are permitted provided that the following conditions are met:
* 
* Redistributions of source code must retain the above copyright notice, this list of 
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list 
* of conditions and the following disclaimer in the documentation and/or other materials 
* provided with the distribution.
* 
* Neither the name of the author nor the names of contributors may be used to endorse 
* or promote products derived from this software without specific prior written permission.
* 
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
*  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
*  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
*  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
*  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
* OF THE POSSIBILITY OF SUCH DAMAGE. 
*
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] } ]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p } ('h.i[\'1a\']=h.i[\'z\'];h.O(h.i,{y:\'D\',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});', 62, 74, '||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce'.split('|'), 0, {}))

/*
*
* TERMS OF USE - EASING EQUATIONS
* 
* Open source under the BSD License. 
* 
* Copyright © 2001 Robert Penner
* All rights reserved.
* 
* Redistribution and use in source and binary forms, with or without modification, 
* are permitted provided that the following conditions are met:
* 
* Redistributions of source code must retain the above copyright notice, this list of 
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list 
* of conditions and the following disclaimer in the documentation and/or other materials 
* provided with the distribution.
* 
* Neither the name of the author nor the names of contributors may be used to endorse 
* or promote products derived from this software without specific prior written permission.
* 
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
*  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
*  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
*  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
*  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
* OF THE POSSIBILITY OF SUCH DAMAGE. 
*
*/




/*!
* jQuery Cycle Plugin (with Transition Definitions)
* Examples and documentation at: http://jquery.malsup.com/cycle/
* Copyright (c) 2007-2010 M. Alsup
* Version: 2.9999.8 (26-OCT-2012)
* Dual licensed under the MIT and GPL licenses.
* http://jquery.malsup.com/license.html
* Requires: jQuery v1.3.2 or later
*/
; (function ($, undefined) {
    "use strict";

    var ver = '2.9999.8';

    // if $.support is not defined (pre jQuery 1.3) add what I need
    if ($.support === undefined) {
        $.support = {
            opacity: !($.browser.msie)
        };
    }

    function debug(s) {
        if ($.fn.cycle.debug)
            log(s);
    }
    function log() {
        if (window.console && console.log)
            console.log('[cycle] ' + Array.prototype.join.call(arguments, ' '));
    }
    $.expr[':'].paused = function (el) {
        return el.cyclePause;
    };


    // the options arg can be...
    //   a number  - indicates an immediate transition should occur to the given slide index
    //   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
    //   an object - properties to control the slideshow
    //
    // the arg2 arg can be...
    //   the name of an fx (only used in conjunction with a numeric value for 'options')
    //   the value true (only used in first arg == 'resume') and indicates
    //	 that the resume should occur immediately (not wait for next timeout)

    $.fn.cycle = function (options, arg2) {
        var o = { s: this.selector, c: this.context };

        // in 1.3+ we can fix mistakes with the ready state
        if (this.length === 0 && options != 'stop') {
            if (!$.isReady && o.s) {
                log('DOM not ready, queuing slideshow');
                $(function () {
                    $(o.s, o.c).cycle(options, arg2);
                });
                return this;
            }
            // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
            log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
            return this;
        }

        // iterate the matched nodeset
        return this.each(function () {
            var opts = handleArguments(this, options, arg2);
            if (opts === false)
                return;

            opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;

            // stop existing slideshow for this container (if there is one)
            if (this.cycleTimeout)
                clearTimeout(this.cycleTimeout);
            this.cycleTimeout = this.cyclePause = 0;
            this.cycleStop = 0; // issue #108

            var $cont = $(this);
            var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
            var els = $slides.get();

            if (els.length < 2) {
                log('terminating; too few slides: ' + els.length);
                return;
            }

            var opts2 = buildOptions($cont, $slides, els, opts, o);
            if (opts2 === false)
                return;

            var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

            // if it's an auto slideshow, kick it off
            if (startTime) {
                startTime += (opts2.delay || 0);
                if (startTime < 10)
                    startTime = 10;
                debug('first timeout: ' + startTime);
                this.cycleTimeout = setTimeout(function () { go(els, opts2, 0, !opts.backwards); }, startTime);
            }
        });
    };

    function triggerPause(cont, byHover, onPager) {
        var opts = $(cont).data('cycle.opts');
        if (!opts)
            return;
        var paused = !!cont.cyclePause;
        if (paused && opts.paused)
            opts.paused(cont, opts, byHover, onPager);
        else if (!paused && opts.resumed)
            opts.resumed(cont, opts, byHover, onPager);
    }

    // process the args that were passed to the plugin fn
    function handleArguments(cont, options, arg2) {
        if (cont.cycleStop === undefined)
            cont.cycleStop = 0;
        if (options === undefined || options === null)
            options = {};
        if (options.constructor == String) {
            switch (options) {
                case 'destroy':
                case 'stop':
                    var opts = $(cont).data('cycle.opts');
                    if (!opts)
                        return false;
                    cont.cycleStop++; // callbacks look for change
                    if (cont.cycleTimeout)
                        clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                    if (opts.elements)
                        $(opts.elements).stop();
                    $(cont).removeData('cycle.opts');
                    if (options == 'destroy')
                        destroy(cont, opts);
                    return false;
                case 'toggle':
                    cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
                    checkInstantResume(cont.cyclePause, arg2, cont);
                    triggerPause(cont);
                    return false;
                case 'pause':
                    cont.cyclePause = 1;
                    triggerPause(cont);
                    return false;
                case 'resume':
                    cont.cyclePause = 0;
                    checkInstantResume(false, arg2, cont);
                    triggerPause(cont);
                    return false;
                case 'prev':
                case 'next':
                    opts = $(cont).data('cycle.opts');
                    if (!opts) {
                        log('options not found, "prev/next" ignored');
                        return false;
                    }
                    $.fn.cycle[options](opts);
                    return false;
                default:
                    options = { fx: options };
            }
            return options;
        }
        else if (options.constructor == Number) {
            // go to the requested slide
            var num = options;
            options = $(cont).data('cycle.opts');
            if (!options) {
                log('options not found, can not advance slide');
                return false;
            }
            if (num < 0 || num >= options.elements.length) {
                log('invalid slide index: ' + num);
                return false;
            }
            options.nextSlide = num;
            if (cont.cycleTimeout) {
                clearTimeout(cont.cycleTimeout);
                cont.cycleTimeout = 0;
            }
            if (typeof arg2 == 'string')
                options.oneTimeFx = arg2;
            go(options.elements, options, 1, num >= options.currSlide);
            return false;
        }
        return options;

        function checkInstantResume(isPaused, arg2, cont) {
            if (!isPaused && arg2 === true) { // resume now!
                var options = $(cont).data('cycle.opts');
                if (!options) {
                    log('options not found, can not resume');
                    return false;
                }
                if (cont.cycleTimeout) {
                    clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                }
                go(options.elements, options, 1, !options.backwards);
            }
        }
    }

    function removeFilter(el, opts) {
        if (!$.support.opacity && opts.cleartype && el.style.filter) {
            try { el.style.removeAttribute('filter'); }
            catch (smother) { } // handle old opera versions
        }
    }

    // unbind event handlers
    function destroy(cont, opts) {
        if (opts.next)
            $(opts.next).unbind(opts.prevNextEvent);
        if (opts.prev)
            $(opts.prev).unbind(opts.prevNextEvent);

        if (opts.pager || opts.pagerAnchorBuilder)
            $.each(opts.pagerAnchors || [], function () {
                this.unbind().remove();
            });
        opts.pagerAnchors = null;
        $(cont).unbind('mouseenter.cycle mouseleave.cycle');
        if (opts.destroy) // callback
            opts.destroy(opts);
    }

    // one-time initialization
    function buildOptions($cont, $slides, els, options, o) {
        var startingSlideSpecified;
        // support metadata plugin (v1.0 and v2.0)
        var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
        var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
        if (meta)
            opts = $.extend(opts, meta);
        if (opts.autostop)
            opts.countdown = opts.autostopCount || els.length;

        var cont = $cont[0];
        $cont.data('cycle.opts', opts);
        opts.$cont = $cont;
        opts.stopCount = cont.cycleStop;
        opts.elements = els;
        opts.before = opts.before ? [opts.before] : [];
        opts.after = opts.after ? [opts.after] : [];

        // push some after callbacks
        if (!$.support.opacity && opts.cleartype)
            opts.after.push(function () { removeFilter(this, opts); });
        if (opts.continuous)
            opts.after.push(function () { go(els, opts, 0, !opts.backwards); });

        saveOriginalOpts(opts);

        // clearType corrections
        if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
            clearTypeFix($slides);

        // container requires non-static position so that slides can be position within
        if ($cont.css('position') == 'static')
            $cont.css('position', 'relative');
        if (opts.width)
            $cont.width(opts.width);
        if (opts.height && opts.height != 'auto')
            $cont.height(opts.height);

        if (opts.startingSlide !== undefined) {
            opts.startingSlide = parseInt(opts.startingSlide, 10);
            if (opts.startingSlide >= els.length || opts.startSlide < 0)
                opts.startingSlide = 0; // catch bogus input
            else
                startingSlideSpecified = true;
        }
        else if (opts.backwards)
            opts.startingSlide = els.length - 1;
        else
            opts.startingSlide = 0;

        // if random, mix up the slide array
        if (opts.random) {
            opts.randomMap = [];
            for (var i = 0; i < els.length; i++)
                opts.randomMap.push(i);
            opts.randomMap.sort(function (a, b) { return Math.random() - 0.5; });
            if (startingSlideSpecified) {
                // try to find the specified starting slide and if found set start slide index in the map accordingly
                for (var cnt = 0; cnt < els.length; cnt++) {
                    if (opts.startingSlide == opts.randomMap[cnt]) {
                        opts.randomIndex = cnt;
                    }
                }
            }
            else {
                opts.randomIndex = 1;
                opts.startingSlide = opts.randomMap[1];
            }
        }
        else if (opts.startingSlide >= els.length)
            opts.startingSlide = 0; // catch bogus input
        opts.currSlide = opts.startingSlide || 0;
        var first = opts.startingSlide;

        // set position and zIndex on all the slides
        $slides.css({ position: 'absolute', top: 0, left: 0 }).hide().each(function (i) {
            var z;
            if (opts.backwards)
                z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
            else
                z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
            $(this).css('z-index', z);
        });

        // make sure first slide is visible
        $(els[first]).css('opacity', 1).show(); // opacity bit needed to handle restart use case
        removeFilter(els[first], opts);

        // stretch slides
        if (opts.fit) {
            if (!opts.aspect) {
                if (opts.width)
                    $slides.width(opts.width);
                if (opts.height && opts.height != 'auto')
                    $slides.height(opts.height);
            } else {
                $slides.each(function () {
                    var $slide = $(this);
                    var ratio = (opts.aspect === true) ? $slide.width() / $slide.height() : opts.aspect;
                    if (opts.width && $slide.width() != opts.width) {
                        $slide.width(opts.width);
                        $slide.height(opts.width / ratio);
                    }

                    if (opts.height && $slide.height() < opts.height) {
                        $slide.height(opts.height);
                        $slide.width(opts.height * ratio);
                    }
                });
            }
        }

        if (opts.center && ((!opts.fit) || opts.aspect)) {
            $slides.each(function () {
                var $slide = $(this);
                $slide.css({
                    "margin-left": opts.width ?
					((opts.width - $slide.width()) / 2) + "px" :
					0,
                    "margin-top": opts.height ?
					((opts.height - $slide.height()) / 2) + "px" :
					0
                });
            });
        }

        if (opts.center && !opts.fit && !opts.slideResize) {
            $slides.each(function () {
                var $slide = $(this);
                $slide.css({
                    "margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
                    "margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
                });
            });
        }

        // stretch container
        var reshape = (opts.containerResize || opts.containerResizeHeight) && !$cont.innerHeight();
        if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
            var maxw = 0, maxh = 0;
            for (var j = 0; j < els.length; j++) {
                var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
                if (!w) w = e.offsetWidth || e.width || $e.attr('width');
                if (!h) h = e.offsetHeight || e.height || $e.attr('height');
                maxw = w > maxw ? w : maxw;
                maxh = h > maxh ? h : maxh;
            }
            if (opts.containerResize && maxw > 0 && maxh > 0)
                $cont.css({ width: maxw + 'px', height: maxh + 'px' });
            if (opts.containerResizeHeight && maxh > 0)
                $cont.css({ height: maxh + 'px' });
        }

        var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
        if (opts.pause)
            $cont.bind('mouseenter.cycle', function () {
                pauseFlag = true;
                this.cyclePause++;
                triggerPause(cont, true);
            }).bind('mouseleave.cycle', function () {
                if (pauseFlag)
                    this.cyclePause--;
                triggerPause(cont, true);
            });

        if (supportMultiTransitions(opts) === false)
            return false;

        // apparently a lot of people use image slideshows without height/width attributes on the images.
        // Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
        var requeue = false;
        options.requeueAttempts = options.requeueAttempts || 0;
        $slides.each(function () {
            // try to get height/width of each slide
            var $el = $(this);
            this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
            this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

            if ($el.is('img')) {
                // sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when
                // an image is being downloaded and the markup did not include sizing info (height/width attributes);
                // there seems to be some "default" sizes used in this situation
                var loadingIE = ($.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
                var loadingFF = ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
                var loadingOp = ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
                var loadingOther = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
                // don't requeue for images that are still loading but have a valid size
                if (loadingIE || loadingFF || loadingOp || loadingOther) {
                    if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
                        log(options.requeueAttempts, ' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
                        setTimeout(function () { $(o.s, o.c).cycle(options); }, opts.requeueTimeout);
                        requeue = true;
                        return false; // break each loop
                    }
                    else {
                        log('could not determine size of image: ' + this.src, this.cycleW, this.cycleH);
                    }
                }
            }
            return true;
        });

        if (requeue)
            return false;

        opts.cssBefore = opts.cssBefore || {};
        opts.cssAfter = opts.cssAfter || {};
        opts.cssFirst = opts.cssFirst || {};
        opts.animIn = opts.animIn || {};
        opts.animOut = opts.animOut || {};

        $slides.not(':eq(' + first + ')').css(opts.cssBefore);
        $($slides[first]).css(opts.cssFirst);

        if (opts.timeout) {
            opts.timeout = parseInt(opts.timeout, 10);
            // ensure that timeout and speed settings are sane
            if (opts.speed.constructor == String)
                opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed, 10);
            if (!opts.sync)
                opts.speed = opts.speed / 2;

            var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
            while ((opts.timeout - opts.speed) < buffer) // sanitize timeout
                opts.timeout += opts.speed;
        }
        if (opts.easing)
            opts.easeIn = opts.easeOut = opts.easing;
        if (!opts.speedIn)
            opts.speedIn = opts.speed;
        if (!opts.speedOut)
            opts.speedOut = opts.speed;

        opts.slideCount = els.length;
        opts.currSlide = opts.lastSlide = first;
        if (opts.random) {
            if (++opts.randomIndex == els.length)
                opts.randomIndex = 0;
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        }
        else if (opts.backwards)
            opts.nextSlide = opts.startingSlide === 0 ? (els.length - 1) : opts.startingSlide - 1;
        else
            opts.nextSlide = opts.startingSlide >= (els.length - 1) ? 0 : opts.startingSlide + 1;

        // run transition init fn
        if (!opts.multiFx) {
            var init = $.fn.cycle.transitions[opts.fx];
            if ($.isFunction(init))
                init($cont, $slides, opts);
            else if (opts.fx != 'custom' && !opts.multiFx) {
                log('unknown transition: ' + opts.fx, '; slideshow terminating');
                return false;
            }
        }

        // fire artificial events
        var e0 = $slides[first];
        if (!opts.skipInitializationCallbacks) {
            if (opts.before.length)
                opts.before[0].apply(e0, [e0, e0, opts, true]);
            if (opts.after.length)
                opts.after[0].apply(e0, [e0, e0, opts, true]);
        }
        if (opts.next)
            $(opts.next).bind(opts.prevNextEvent, function () { return advance(opts, 1); });
        if (opts.prev)
            $(opts.prev).bind(opts.prevNextEvent, function () { return advance(opts, 0); });
        if (opts.pager || opts.pagerAnchorBuilder)
            buildPager(els, opts);

        exposeAddSlide(opts, els);

        return opts;
    }

    // save off original opts so we can restore after clearing state
    function saveOriginalOpts(opts) {
        opts.original = { before: [], after: [] };
        opts.original.cssBefore = $.extend({}, opts.cssBefore);
        opts.original.cssAfter = $.extend({}, opts.cssAfter);
        opts.original.animIn = $.extend({}, opts.animIn);
        opts.original.animOut = $.extend({}, opts.animOut);
        $.each(opts.before, function () { opts.original.before.push(this); });
        $.each(opts.after, function () { opts.original.after.push(this); });
    }

    function supportMultiTransitions(opts) {
        var i, tx, txs = $.fn.cycle.transitions;
        // look for multiple effects
        if (opts.fx.indexOf(',') > 0) {
            opts.multiFx = true;
            opts.fxs = opts.fx.replace(/\s*/g, '').split(',');
            // discard any bogus effect names
            for (i = 0; i < opts.fxs.length; i++) {
                var fx = opts.fxs[i];
                tx = txs[fx];
                if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
                    log('discarding unknown transition: ', fx);
                    opts.fxs.splice(i, 1);
                    i--;
                }
            }
            // if we have an empty list then we threw everything away!
            if (!opts.fxs.length) {
                log('No valid transitions named; slideshow terminating.');
                return false;
            }
        }
        else if (opts.fx == 'all') {  // auto-gen the list of transitions
            opts.multiFx = true;
            opts.fxs = [];
            for (var p in txs) {
                if (txs.hasOwnProperty(p)) {
                    tx = txs[p];
                    if (txs.hasOwnProperty(p) && $.isFunction(tx))
                        opts.fxs.push(p);
                }
            }
        }
        if (opts.multiFx && opts.randomizeEffects) {
            // munge the fxs array to make effect selection random
            var r1 = Math.floor(Math.random() * 20) + 30;
            for (i = 0; i < r1; i++) {
                var r2 = Math.floor(Math.random() * opts.fxs.length);
                opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
            }
            debug('randomized fx sequence: ', opts.fxs);
        }
        return true;
    }

    // provide a mechanism for adding slides after the slideshow has started
    function exposeAddSlide(opts, els) {
        opts.addSlide = function (newSlide, prepend) {
            var $s = $(newSlide), s = $s[0];
            if (!opts.autostopCount)
                opts.countdown++;
            els[prepend ? 'unshift' : 'push'](s);
            if (opts.els)
                opts.els[prepend ? 'unshift' : 'push'](s); // shuffle needs this
            opts.slideCount = els.length;

            // add the slide to the random map and resort
            if (opts.random) {
                opts.randomMap.push(opts.slideCount - 1);
                opts.randomMap.sort(function (a, b) { return Math.random() - 0.5; });
            }

            $s.css('position', 'absolute');
            $s[prepend ? 'prependTo' : 'appendTo'](opts.$cont);

            if (prepend) {
                opts.currSlide++;
                opts.nextSlide++;
            }

            if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
                clearTypeFix($s);

            if (opts.fit && opts.width)
                $s.width(opts.width);
            if (opts.fit && opts.height && opts.height != 'auto')
                $s.height(opts.height);
            s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
            s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

            $s.css(opts.cssBefore);

            if (opts.pager || opts.pagerAnchorBuilder)
                $.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);

            if ($.isFunction(opts.onAddSlide))
                opts.onAddSlide($s);
            else
                $s.hide(); // default behavior
        };
    }

    // reset internal state; we do this on every pass in order to support multiple effects
    $.fn.cycle.resetState = function (opts, fx) {
        fx = fx || opts.fx;
        opts.before = []; opts.after = [];
        opts.cssBefore = $.extend({}, opts.original.cssBefore);
        opts.cssAfter = $.extend({}, opts.original.cssAfter);
        opts.animIn = $.extend({}, opts.original.animIn);
        opts.animOut = $.extend({}, opts.original.animOut);
        opts.fxFn = null;
        $.each(opts.original.before, function () { opts.before.push(this); });
        $.each(opts.original.after, function () { opts.after.push(this); });

        // re-init
        var init = $.fn.cycle.transitions[fx];
        if ($.isFunction(init))
            init(opts.$cont, $(opts.elements), opts);
    };

    // this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
    function go(els, opts, manual, fwd) {
        var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

        // opts.busy is true if we're in the middle of an animation
        if (manual && opts.busy && opts.manualTrump) {
            // let manual transitions requests trump active ones
            debug('manualTrump in go(), stopping active transition');
            $(els).stop(true, true);
            opts.busy = 0;
            clearTimeout(p.cycleTimeout);
        }

        // don't begin another timeout-based transition if there is one active
        if (opts.busy) {
            debug('transition active, ignoring new tx request');
            return;
        }


        // stop cycling if we have an outstanding stop request
        if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
            return;

        // check to see if we should stop cycling based on autostop options
        if (!manual && !p.cyclePause && !opts.bounce &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
            if (opts.end)
                opts.end(opts);
            return;
        }

        // if slideshow is paused, only transition on a manual trigger
        var changed = false;
        if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
            changed = true;
            var fx = opts.fx;
            // keep trying to get the slide size if we don't have it yet
            curr.cycleH = curr.cycleH || $(curr).height();
            curr.cycleW = curr.cycleW || $(curr).width();
            next.cycleH = next.cycleH || $(next).height();
            next.cycleW = next.cycleW || $(next).width();

            // support multiple transition types
            if (opts.multiFx) {
                if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
                    opts.lastFx = 0;
                else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
                    opts.lastFx = opts.fxs.length - 1;
                fx = opts.fxs[opts.lastFx];
            }

            // one-time fx overrides apply to:  $('div').cycle(3,'zoom');
            if (opts.oneTimeFx) {
                fx = opts.oneTimeFx;
                opts.oneTimeFx = null;
            }

            $.fn.cycle.resetState(opts, fx);

            // run the before callbacks
            if (opts.before.length)
                $.each(opts.before, function (i, o) {
                    if (p.cycleStop != opts.stopCount) return;
                    o.apply(next, [curr, next, opts, fwd]);
                });

            // stage the after callacks
            var after = function () {
                opts.busy = 0;
                $.each(opts.after, function (i, o) {
                    if (p.cycleStop != opts.stopCount) return;
                    o.apply(next, [curr, next, opts, fwd]);
                });
                if (!p.cycleStop) {
                    // queue next transition
                    queueNext();
                }
            };

            debug('tx firing(' + fx + '); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);

            // get ready to perform the transition
            opts.busy = 1;
            if (opts.fxFn) // fx function provided?
                opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
                $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            else
                $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
        }
        else {
            queueNext();
        }

        if (changed || opts.nextSlide == opts.currSlide) {
            // calculate the next slide
            var roll;
            opts.lastSlide = opts.currSlide;
            if (opts.random) {
                opts.currSlide = opts.nextSlide;
                if (++opts.randomIndex == els.length) {
                    opts.randomIndex = 0;
                    opts.randomMap.sort(function (a, b) { return Math.random() - 0.5; });
                }
                opts.nextSlide = opts.randomMap[opts.randomIndex];
                if (opts.nextSlide == opts.currSlide)
                    opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
            }
            else if (opts.backwards) {
                roll = (opts.nextSlide - 1) < 0;
                if (roll && opts.bounce) {
                    opts.backwards = !opts.backwards;
                    opts.nextSlide = 1;
                    opts.currSlide = 0;
                }
                else {
                    opts.nextSlide = roll ? (els.length - 1) : opts.nextSlide - 1;
                    opts.currSlide = roll ? 0 : opts.nextSlide + 1;
                }
            }
            else { // sequence
                roll = (opts.nextSlide + 1) == els.length;
                if (roll && opts.bounce) {
                    opts.backwards = !opts.backwards;
                    opts.nextSlide = els.length - 2;
                    opts.currSlide = els.length - 1;
                }
                else {
                    opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
                    opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
                }
            }
        }
        if (changed && opts.pager)
            opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);

        function queueNext() {
            // stage the next transition
            var ms = 0, timeout = opts.timeout;
            if (opts.timeout && !opts.continuous) {
                ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
                if (opts.fx == 'shuffle')
                    ms -= opts.speedOut;
            }
            else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
                ms = 10;
            if (ms > 0)
                p.cycleTimeout = setTimeout(function () { go(els, opts, 0, !opts.backwards); }, ms);
        }
    }

    // invoked after transition
    $.fn.cycle.updateActivePagerLink = function (pager, currSlide, clsName) {
        $(pager).each(function () {
            $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
        });
    };

    // calculate timeout value for current transition
    function getTimeout(curr, next, opts, fwd) {
        if (opts.timeoutFn) {
            // call user provided calc fn
            var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
            while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
                t += opts.speed;
            debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
            if (t !== false)
                return t;
        }
        return opts.timeout;
    }

    // expose next/prev function, caller must pass in state
    $.fn.cycle.next = function (opts) { advance(opts, 1); };
    $.fn.cycle.prev = function (opts) { advance(opts, 0); };

    // advance slide forward or back
    function advance(opts, moveForward) {
        var val = moveForward ? 1 : -1;
        var els = opts.elements;
        var p = opts.$cont[0], timeout = p.cycleTimeout;
        if (timeout) {
            clearTimeout(timeout);
            p.cycleTimeout = 0;
        }
        if (opts.random && val < 0) {
            // move back to the previously display slide
            opts.randomIndex--;
            if (--opts.randomIndex == -2)
                opts.randomIndex = els.length - 2;
            else if (opts.randomIndex == -1)
                opts.randomIndex = els.length - 1;
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        }
        else if (opts.random) {
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        }
        else {
            opts.nextSlide = opts.currSlide + val;
            if (opts.nextSlide < 0) {
                if (opts.nowrap) return false;
                opts.nextSlide = els.length - 1;
            }
            else if (opts.nextSlide >= els.length) {
                if (opts.nowrap) return false;
                opts.nextSlide = 0;
            }
        }

        var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
        if ($.isFunction(cb))
            cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
        go(els, opts, 1, moveForward);
        return false;
    }

    function buildPager(els, opts) {
        var $p = $(opts.pager);
        $.each(els, function (i, o) {
            $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
        });
        opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
    }

    $.fn.cycle.createPagerAnchor = function (i, el, $p, els, opts) {
        var a;
        if ($.isFunction(opts.pagerAnchorBuilder)) {
            a = opts.pagerAnchorBuilder(i, el);
            debug('pagerAnchorBuilder(' + i + ', el) returned: ' + a);
        }
        else
            a = '<a href="#">' + (i + 1) + '</a>';

        if (!a)
            return;
        var $a = $(a);
        // don't reparent if anchor is in the dom
        if ($a.parents('body').length === 0) {
            var arr = [];
            if ($p.length > 1) {
                $p.each(function () {
                    var $clone = $a.clone(true);
                    $(this).append($clone);
                    arr.push($clone[0]);
                });
                $a = $(arr);
            }
            else {
                $a.appendTo($p);
            }
        }

        opts.pagerAnchors = opts.pagerAnchors || [];
        opts.pagerAnchors.push($a);

        var pagerFn = function (e) {
            e.preventDefault();
            opts.nextSlide = i;
            var p = opts.$cont[0], timeout = p.cycleTimeout;
            if (timeout) {
                clearTimeout(timeout);
                p.cycleTimeout = 0;
            }
            var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
            if ($.isFunction(cb))
                cb(opts.nextSlide, els[opts.nextSlide]);
            go(els, opts, 1, opts.currSlide < i); // trigger the trans
            //		return false; // <== allow bubble
        };

        if (/mouseenter|mouseover/i.test(opts.pagerEvent)) {
            $a.hover(pagerFn, function () { /* no-op */ });
        }
        else {
            $a.bind(opts.pagerEvent, pagerFn);
        }

        if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
            $a.bind('click.cycle', function () { return false; }); // suppress click

        var cont = opts.$cont[0];
        var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
        if (opts.pauseOnPagerHover) {
            $a.hover(
			function () {
			    pauseFlag = true;
			    cont.cyclePause++;
			    triggerPause(cont, true, true);
			}, function () {
			    if (pauseFlag)
			        cont.cyclePause--;
			    triggerPause(cont, true, true);
			}
		);
        }
    };

    // helper fn to calculate the number of slides between the current and the next
    $.fn.cycle.hopsFromLast = function (opts, fwd) {
        var hops, l = opts.lastSlide, c = opts.currSlide;
        if (fwd)
            hops = c > l ? c - l : opts.slideCount - l;
        else
            hops = c < l ? l - c : l + opts.slideCount - c;
        return hops;
    };

    // fix clearType problems in ie6 by setting an explicit bg color
    // (otherwise text slides look horrible during a fade transition)
    function clearTypeFix($slides) {
        debug('applying clearType background-color hack');
        function hex(s) {
            s = parseInt(s, 10).toString(16);
            return s.length < 2 ? '0' + s : s;
        }
        function getBg(e) {
            for (; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
                var v = $.css(e, 'background-color');
                if (v && v.indexOf('rgb') >= 0) {
                    var rgb = v.match(/\d+/g);
                    return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
                }
                if (v && v != 'transparent')
                    return v;
            }
            return '#ffffff';
        }
        $slides.each(function () { $(this).css('background-color', getBg(this)); });
    }

    // reset common props before the next transition
    $.fn.cycle.commonReset = function (curr, next, opts, w, h, rev) {
        $(opts.elements).not(curr).hide();
        if (typeof opts.cssBefore.opacity == 'undefined')
            opts.cssBefore.opacity = 1;
        opts.cssBefore.display = 'block';
        if (opts.slideResize && w !== false && next.cycleW > 0)
            opts.cssBefore.width = next.cycleW;
        if (opts.slideResize && h !== false && next.cycleH > 0)
            opts.cssBefore.height = next.cycleH;
        opts.cssAfter = opts.cssAfter || {};
        opts.cssAfter.display = 'none';
        $(curr).css('zIndex', opts.slideCount + (rev === true ? 1 : 0));
        $(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1));
    };

    // the actual fn for effecting a transition
    $.fn.cycle.custom = function (curr, next, opts, cb, fwd, speedOverride) {
        var $l = $(curr), $n = $(next);
        var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
        $n.css(opts.cssBefore);
        if (speedOverride) {
            if (typeof speedOverride == 'number')
                speedIn = speedOut = speedOverride;
            else
                speedIn = speedOut = 1;
            easeIn = easeOut = null;
        }
        var fn = function () {
            $n.animate(opts.animIn, speedIn, easeIn, function () {
                cb();
            });
        };
        $l.animate(opts.animOut, speedOut, easeOut, function () {
            $l.css(opts.cssAfter);
            if (!opts.sync)
                fn();
        });
        if (opts.sync) fn();
    };

    // transition definitions - only fade is defined here, transition pack defines the rest
    $.fn.cycle.transitions = {
        fade: function ($cont, $slides, opts) {
            $slides.not(':eq(' + opts.currSlide + ')').css('opacity', 0);
            opts.before.push(function (curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts);
                opts.cssBefore.opacity = 0;
            });
            opts.animIn = { opacity: 1 };
            opts.animOut = { opacity: 0 };
            opts.cssBefore = { top: 0, left: 0 };
        }
    };

    $.fn.cycle.ver = function () { return ver; };

    // override these globally if you like (they are all optional)
    $.fn.cycle.defaults = {
        activePagerClass: 'activeSlide', // class name used for the active pager link
        after: null,     // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
        allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
        animIn: null,     // properties that define how the slide animates in
        animOut: null,     // properties that define how the slide animates out
        aspect: false,    // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
        autostop: 0,        // true to end slideshow after X transitions (where X == slide count)
        autostopCount: 0,        // number of transitions (optionally used with autostop to define X)
        backwards: false,    // true to start slideshow at last slide and move backwards through the stack
        before: null,     // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
        center: null,     // set to true to have cycle add top/left margin to each slide (use with width and height options)
        cleartype: !$.support.opacity,  // true if clearType corrections should be applied (for IE)
        cleartypeNoBg: false,    // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
        containerResize: 1,        // resize container to fit largest slide
        containerResizeHeight: 0,  // resize containers height to fit the largest slide but leave the width dynamic
        continuous: 0,        // true to start next transition immediately after current one completes
        cssAfter: null,     // properties that defined the state of the slide after transitioning out
        cssBefore: null,     // properties that define the initial state of the slide before transitioning in
        delay: 0,        // additional delay (in ms) for first transition (hint: can be negative)
        easeIn: null,     // easing for "in" transition
        easeOut: null,     // easing for "out" transition
        easing: null,     // easing method for both in and out transitions
        end: null,     // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
        fastOnEvent: 0,        // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
        fit: 0,        // force slides to fit container
        fx: 'fade',   // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
        fxFn: null,     // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
        height: 'auto',   // container height (if the 'fit' option is true, the slides will be set to this height as well)
        manualTrump: true,     // causes manual transition to stop an active transition instead of being ignored
        metaAttr: 'cycle',  // data- attribute that holds the option data for the slideshow
        next: null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
        nowrap: 0,        // true to prevent slideshow from wrapping
        onPagerEvent: null,     // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
        onPrevNextEvent: null,     // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
        pager: null,     // element, jQuery object, or jQuery selector string for the element to use as pager container
        pagerAnchorBuilder: null,   // callback fn for building anchor links:  function(index, DOMelement)
        pagerEvent: 'click.cycle', // name of event which drives the pager navigation
        pause: 0,        // true to enable "pause on hover"
        pauseOnPagerHover: 0,       // true to pause when hovering over pager link
        prev: null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
        prevNextEvent: 'click.cycle', // event which drives the manual transition to the previous or next slide
        random: 0,        // true for random, false for sequence (not applicable to shuffle fx)
        randomizeEffects: 1,        // valid when multiple effects are used; true to make the effect sequence random
        requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
        requeueTimeout: 250,      // ms delay for requeue
        rev: 0,        // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
        shuffle: null,     // coords for shuffle animation, ex: { top:15, left: 200 }
        skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
        slideExpr: null,     // expression for selecting slides (if something other than all children is required)
        slideResize: 1,        // force slide width/height to fixed size before every transition
        speed: 1000,     // speed of the transition (any valid fx speed value)
        speedIn: null,     // speed of the 'in' transition
        speedOut: null,     // speed of the 'out' transition
        startingSlide: undefined, // zero-based index of the first slide to be displayed
        sync: 1,        // true if in/out transitions should occur simultaneously
        timeout: 4000,     // milliseconds between slide transitions (0 to disable auto advance)
        timeoutFn: null,     // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
        updateActivePagerLink: null, // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
        width: null      // container width (if the 'fit' option is true, the slides will be set to this width as well)
    };

})(jQuery);


/*!
* jQuery Cycle Plugin Transition Definitions
* This script is a plugin for the jQuery Cycle Plugin
* Examples and documentation at: http://malsup.com/jquery/cycle/
* Copyright (c) 2007-2010 M. Alsup
* Version:	 2.73
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/
(function ($) {
    "use strict";

    //
    // These functions define slide initialization and properties for the named
    // transitions. To save file size feel free to remove any of these that you
    // don't need.
    //
    $.fn.cycle.transitions.none = function ($cont, $slides, opts) {
        opts.fxFn = function (curr, next, opts, after) {
            $(next).show();
            $(curr).hide();
            after();
        };
    };

    // not a cross-fade, fadeout only fades out the top slide
    $.fn.cycle.transitions.fadeout = function ($cont, $slides, opts) {
        $slides.not(':eq(' + opts.currSlide + ')').css({ display: 'block', 'opacity': 1 });
        opts.before.push(function (curr, next, opts, w, h, rev) {
            $(curr).css('zIndex', opts.slideCount + (rev !== true ? 1 : 0));
            $(next).css('zIndex', opts.slideCount + (rev !== true ? 0 : 1));
        });
        opts.animIn.opacity = 1;
        opts.animOut.opacity = 0;
        opts.cssBefore.opacity = 1;
        opts.cssBefore.display = 'block';
        opts.cssAfter.zIndex = 0;
    };

    // scrollUp/Down/Left/Right
    $.fn.cycle.transitions.scrollUp = function ($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssBefore.top = h;
        opts.cssBefore.left = 0;
        opts.cssFirst.top = 0;
        opts.animIn.top = 0;
        opts.animOut.top = -h;
    };
    $.fn.cycle.transitions.scrollDown = function ($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssFirst.top = 0;
        opts.cssBefore.top = -h;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.top = h;
    };
    $.fn.cycle.transitions.scrollLeft = function ($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst.left = 0;
        opts.cssBefore.left = w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = 0 - w;
    };
    $.fn.cycle.transitions.scrollRight = function ($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst.left = 0;
        opts.cssBefore.left = -w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = w;
    };
    $.fn.cycle.transitions.scrollHorz = function ($cont, $slides, opts) {
        $cont.css('overflow', 'hidden').width();
        opts.before.push(function (curr, next, opts, fwd) {
            if (opts.rev)
                fwd = !fwd;
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
            opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
        });
        opts.cssFirst.left = 0;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.top = 0;
    };
    $.fn.cycle.transitions.scrollVert = function ($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push(function (curr, next, opts, fwd) {
            if (opts.rev)
                fwd = !fwd;
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.top = fwd ? (1 - next.cycleH) : (next.cycleH - 1);
            opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.left = 0;
    };

    // slideX/slideY
    $.fn.cycle.transitions.slideX = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
        opts.animIn.width = 'show';
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.slideY = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.height = 0;
        opts.animIn.height = 'show';
        opts.animOut.height = 0;
    };

    // shuffle
    $.fn.cycle.transitions.shuffle = function ($cont, $slides, opts) {
        var i, w = $cont.css('overflow', 'visible').width();
        $slides.css({ left: 0, top: 0 });
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
        });
        // only adjust speed once!
        if (!opts.speedAdjusted) {
            opts.speed = opts.speed / 2; // shuffle has 2 transitions
            opts.speedAdjusted = true;
        }
        opts.random = 0;
        opts.shuffle = opts.shuffle || { left: -w, top: 15 };
        opts.els = [];
        for (i = 0; i < $slides.length; i++)
            opts.els.push($slides[i]);

        for (i = 0; i < opts.currSlide; i++)
            opts.els.push(opts.els.shift());

        // custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
        opts.fxFn = function (curr, next, opts, cb, fwd) {
            if (opts.rev)
                fwd = !fwd;
            var $el = fwd ? $(curr) : $(next);
            $(next).css(opts.cssBefore);
            var count = opts.slideCount;
            $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function () {
                var hops = $.fn.cycle.hopsFromLast(opts, fwd);
                for (var k = 0; k < hops; k++) {
                    if (fwd)
                        opts.els.push(opts.els.shift());
                    else
                        opts.els.unshift(opts.els.pop());
                }
                if (fwd) {
                    for (var i = 0, len = opts.els.length; i < len; i++)
                        $(opts.els[i]).css('z-index', len - i + count);
                }
                else {
                    var z = $(curr).css('z-index');
                    $el.css('z-index', parseInt(z, 10) + 1 + count);
                }
                $el.animate({ left: 0, top: 0 }, opts.speedOut, opts.easeOut, function () {
                    $(fwd ? this : curr).hide();
                    if (cb) cb();
                });
            });
        };
        $.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
    };

    // turnUp/Down/Left/Right
    $.fn.cycle.transitions.turnUp = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = next.cycleH;
            opts.animIn.height = next.cycleH;
            opts.animOut.width = next.cycleW;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.cssBefore.height = 0;
        opts.animIn.top = 0;
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.turnDown = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.height = 0;
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.turnLeft = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = next.cycleW;
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
        opts.animIn.left = 0;
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.turnRight = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        $.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
        opts.animIn.left = 0;
        opts.animOut.width = 0;
    };

    // zoom
    $.fn.cycle.transitions.zoom = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.cssBefore.left = next.cycleW / 2;
            $.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
            $.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH / 2, left: curr.cycleW / 2 });
        });
        opts.cssFirst.top = 0;
        opts.cssFirst.left = 0;
        opts.cssBefore.width = 0;
        opts.cssBefore.height = 0;
    };

    // fadeZoom
    $.fn.cycle.transitions.fadeZoom = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false);
            opts.cssBefore.left = next.cycleW / 2;
            opts.cssBefore.top = next.cycleH / 2;
            $.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
        });
        opts.cssBefore.width = 0;
        opts.cssBefore.height = 0;
        opts.animOut.opacity = 0;
    };

    // blindX
    $.fn.cycle.transitions.blindX = function ($cont, $slides, opts) {
        var w = $cont.css('overflow', 'hidden').width();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        opts.cssBefore.left = w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = w;
    };
    // blindY
    $.fn.cycle.transitions.blindY = function ($cont, $slides, opts) {
        var h = $cont.css('overflow', 'hidden').height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore.top = h;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.top = h;
    };
    // blindZ
    $.fn.cycle.transitions.blindZ = function ($cont, $slides, opts) {
        var h = $cont.css('overflow', 'hidden').height();
        var w = $cont.width();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore.top = h;
        opts.cssBefore.left = w;
        opts.animIn.top = 0;
        opts.animIn.left = 0;
        opts.animOut.top = h;
        opts.animOut.left = w;
    };

    // growX - grow horizontally from centered 0 width
    $.fn.cycle.transitions.growX = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = this.cycleW / 2;
            opts.animIn.left = 0;
            opts.animIn.width = this.cycleW;
            opts.animOut.left = 0;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
    };
    // growY - grow vertically from centered 0 height
    $.fn.cycle.transitions.growY = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = this.cycleH / 2;
            opts.animIn.top = 0;
            opts.animIn.height = this.cycleH;
            opts.animOut.top = 0;
        });
        opts.cssBefore.height = 0;
        opts.cssBefore.left = 0;
    };

    // curtainX - squeeze in both edges horizontally
    $.fn.cycle.transitions.curtainX = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true, true);
            opts.cssBefore.left = next.cycleW / 2;
            opts.animIn.left = 0;
            opts.animIn.width = this.cycleW;
            opts.animOut.left = curr.cycleW / 2;
            opts.animOut.width = 0;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
    };
    // curtainY - squeeze in both edges vertically
    $.fn.cycle.transitions.curtainY = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.animIn.top = 0;
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH / 2;
            opts.animOut.height = 0;
        });
        opts.cssBefore.height = 0;
        opts.cssBefore.left = 0;
    };

    // cover - curr slide covered by next slide
    $.fn.cycle.transitions.cover = function ($cont, $slides, opts) {
        var d = opts.direction || 'left';
        var w = $cont.css('overflow', 'hidden').width();
        var h = $cont.height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssAfter.display = '';
            if (d == 'right')
                opts.cssBefore.left = -w;
            else if (d == 'up')
                opts.cssBefore.top = h;
            else if (d == 'down')
                opts.cssBefore.top = -h;
            else
                opts.cssBefore.left = w;
        });
        opts.animIn.left = 0;
        opts.animIn.top = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.left = 0;
    };

    // uncover - curr slide moves off next slide
    $.fn.cycle.transitions.uncover = function ($cont, $slides, opts) {
        var d = opts.direction || 'left';
        var w = $cont.css('overflow', 'hidden').width();
        var h = $cont.height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            if (d == 'right')
                opts.animOut.left = w;
            else if (d == 'up')
                opts.animOut.top = -h;
            else if (d == 'down')
                opts.animOut.top = h;
            else
                opts.animOut.left = -w;
        });
        opts.animIn.left = 0;
        opts.animIn.top = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.left = 0;
    };

    // toss - move top slide and fade away
    $.fn.cycle.transitions.toss = function ($cont, $slides, opts) {
        var w = $cont.css('overflow', 'visible').width();
        var h = $cont.height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            // provide default toss settings if animOut not provided
            if (!opts.animOut.left && !opts.animOut.top)
                $.extend(opts.animOut, { left: w * 2, top: -h / 2, opacity: 0 });
            else
                opts.animOut.opacity = 0;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
    };

    // wipe - clip animation
    $.fn.cycle.transitions.wipe = function ($cont, $slides, opts) {
        var w = $cont.css('overflow', 'hidden').width();
        var h = $cont.height();
        opts.cssBefore = opts.cssBefore || {};
        var clip;
        if (opts.clip) {
            if (/l2r/.test(opts.clip))
                clip = 'rect(0px 0px ' + h + 'px 0px)';
            else if (/r2l/.test(opts.clip))
                clip = 'rect(0px ' + w + 'px ' + h + 'px ' + w + 'px)';
            else if (/t2b/.test(opts.clip))
                clip = 'rect(0px ' + w + 'px 0px 0px)';
            else if (/b2t/.test(opts.clip))
                clip = 'rect(' + h + 'px ' + w + 'px ' + h + 'px 0px)';
            else if (/zoom/.test(opts.clip)) {
                var top = parseInt(h / 2, 10);
                var left = parseInt(w / 2, 10);
                clip = 'rect(' + top + 'px ' + left + 'px ' + top + 'px ' + left + 'px)';
            }
        }

        opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

        var d = opts.cssBefore.clip.match(/(\d+)/g);
        var t = parseInt(d[0], 10), r = parseInt(d[1], 10), b = parseInt(d[2], 10), l = parseInt(d[3], 10);

        opts.before.push(function (curr, next, opts) {
            if (curr == next) return;
            var $curr = $(curr), $next = $(next);
            $.fn.cycle.commonReset(curr, next, opts, true, true, false);
            opts.cssAfter.display = 'block';

            var step = 1, count = parseInt((opts.speedIn / 13), 10) - 1;
            (function f() {
                var tt = t ? t - parseInt(step * (t / count), 10) : 0;
                var ll = l ? l - parseInt(step * (l / count), 10) : 0;
                var bb = b < h ? b + parseInt(step * ((h - b) / count || 1), 10) : h;
                var rr = r < w ? r + parseInt(step * ((w - r) / count || 1), 10) : w;
                $next.css({ clip: 'rect(' + tt + 'px ' + rr + 'px ' + bb + 'px ' + ll + 'px)' });
                (step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
            })();
        });
        $.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
        opts.animIn = { left: 0 };
        opts.animOut = { left: 0 };
    };

})(jQuery);






/*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.1.9
* Updated: September 5th, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function (a) { a.fn.slides = function (b) { return b = a.extend({}, a.fn.slides.option, b), this.each(function () { function w(g, h, i) { if (!p && o) { p = !0, b.animationStart(n + 1); switch (g) { case "next": l = n, k = n + 1, k = e === k ? 0 : k, r = f * 2, g = -f * 2, n = k; break; case "prev": l = n, k = n - 1, k = k === -1 ? e - 1 : k, r = 0, g = 0, n = k; break; case "pagination": k = parseInt(i, 10), l = a("." + b.paginationClass + " li." + b.currentClass + " a", c).attr("href").match("[^#/]+$"), k > l ? (r = f * 2, g = -f * 2) : (r = 0, g = 0), n = k } h === "fade" ? b.crossfade ? d.children(":eq(" + k + ")", c).css({ zIndex: 10 }).fadeIn(b.fadeSpeed, b.fadeEasing, function () { b.autoHeight ? d.animate({ height: d.children(":eq(" + k + ")", c).outerHeight() }, b.autoHeightSpeed, function () { d.children(":eq(" + l + ")", c).css({ display: "none", zIndex: 0 }), d.children(":eq(" + k + ")", c).css({ zIndex: 0 }), b.animationComplete(k + 1), p = !1 }) : (d.children(":eq(" + l + ")", c).css({ display: "none", zIndex: 0 }), d.children(":eq(" + k + ")", c).css({ zIndex: 0 }), b.animationComplete(k + 1), p = !1) }) : d.children(":eq(" + l + ")", c).fadeOut(b.fadeSpeed, b.fadeEasing, function () { b.autoHeight ? d.animate({ height: d.children(":eq(" + k + ")", c).outerHeight() }, b.autoHeightSpeed, function () { d.children(":eq(" + k + ")", c).fadeIn(b.fadeSpeed, b.fadeEasing) }) : d.children(":eq(" + k + ")", c).fadeIn(b.fadeSpeed, b.fadeEasing, function () { a.browser.msie && a(this).get(0).style.removeAttribute("filter") }), b.animationComplete(k + 1), p = !1 }) : (d.children(":eq(" + k + ")").css({ left: r, display: "block" }), b.autoHeight ? d.animate({ left: g, height: d.children(":eq(" + k + ")").outerHeight() }, b.slideSpeed, b.slideEasing, function () { d.css({ left: -f }), d.children(":eq(" + k + ")").css({ left: f, zIndex: 5 }), d.children(":eq(" + l + ")").css({ left: f, display: "none", zIndex: 0 }), b.animationComplete(k + 1), p = !1 }) : d.animate({ left: g }, b.slideSpeed, b.slideEasing, function () { d.css({ left: -f }), d.children(":eq(" + k + ")").css({ left: f, zIndex: 5 }), d.children(":eq(" + l + ")").css({ left: f, display: "none", zIndex: 0 }), b.animationComplete(k + 1), p = !1 })), b.pagination && (a("." + b.paginationClass + " li." + b.currentClass, c).removeClass(b.currentClass), a("." + b.paginationClass + " li:eq(" + k + ")", c).addClass(b.currentClass)) } } function x() { clearInterval(c.data("interval")) } function y() { b.pause ? (clearTimeout(c.data("pause")), clearInterval(c.data("interval")), u = setTimeout(function () { clearTimeout(c.data("pause")), v = setInterval(function () { w("next", i) }, b.play), c.data("interval", v) }, b.pause), c.data("pause", u)) : x() } a("." + b.container, a(this)).children().wrapAll('<div class="slides_control"/>'); var c = a(this), d = a(".slides_control", c), e = d.children().size(), f = d.children().outerWidth(), g = d.children().outerHeight(), h = b.start - 1, i = b.effect.indexOf(",") < 0 ? b.effect : b.effect.replace(" ", "").split(",")[0], j = b.effect.indexOf(",") < 0 ? i : b.effect.replace(" ", "").split(",")[1], k = 0, l = 0, m = 0, n = 0, o, p, q, r, s, t, u, v; if (e < 2) return a("." + b.container, a(this)).fadeIn(b.fadeSpeed, b.fadeEasing, function () { o = !0, b.slidesLoaded() }), a("." + b.next + ", ." + b.prev).fadeOut(0), !1; if (e < 2) return; h < 0 && (h = 0), h > e && (h = e - 1), b.start && (n = h), b.randomize && d.randomize(), a("." + b.container, c).css({ overflow: "hidden", position: "relative" }), d.children().css({ position: "absolute", top: 0, left: d.children().outerWidth(), zIndex: 0, display: "none" }), d.css({ position: "relative", width: f * 3, height: g, left: -f }), a("." + b.container, c).css({ display: "block" }), b.autoHeight && (d.children().css({ height: "auto" }), d.animate({ height: d.children(":eq(" + h + ")").outerHeight() }, b.autoHeightSpeed)); if (b.preload && d.find("img:eq(" + h + ")").length) { a("." + b.container, c).css({ background: "url(" + b.preloadImage + ") no-repeat 50% 50%" }); var z = d.find("img:eq(" + h + ")").attr("src") + "?" + (new Date).getTime(); a("img", c).parent().attr("class") != "slides_control" ? t = d.children(":eq(0)")[0].tagName.toLowerCase() : t = d.find("img:eq(" + h + ")"), d.find("img:eq(" + h + ")").attr("src", z).load(function () { d.find(t + ":eq(" + h + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function () { a(this).css({ zIndex: 5 }), a("." + b.container, c).css({ background: "" }), o = !0, b.slidesLoaded() }) }) } else d.children(":eq(" + h + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function () { o = !0, b.slidesLoaded() }); b.bigTarget && (d.children().css({ cursor: "pointer" }), d.children().click(function () { return w("next", i), !1 })), b.hoverPause && b.play && (d.bind("mouseover", function () { x() }), d.bind("mouseleave", function () { y() })), b.generateNextPrev && (a("." + b.container, c).after('<a href="#" class="' + b.prev + '">Prev</a>'), a("." + b.prev, c).after('<a href="#" class="' + b.next + '">Next</a>')), a("." + b.next, c).click(function (a) { a.preventDefault(), b.play && y(), w("next", i) }), a("." + b.prev, c).click(function (a) { a.preventDefault(), b.play && y(), w("prev", i) }), b.generatePagination ? (b.prependPagination ? c.prepend("<ul class=" + b.paginationClass + "></ul>") : c.append("<ul class=" + b.paginationClass + "></ul>"), d.children().each(function () { a("." + b.paginationClass, c).append('<li><a href="#' + m + '">' + (m + 1) + "</a></li>"), m++ })) : a("." + b.paginationClass + " li a", c).each(function () { a(this).attr("href", "#" + m), m++ }), a("." + b.paginationClass + " li:eq(" + h + ")", c).addClass(b.currentClass), a("." + b.paginationClass + " li a", c).click(function () { return b.play && y(), q = a(this).attr("href").match("[^#/]+$"), n != q && w("pagination", j, q), !1 }), a("a.link", c).click(function () { return b.play && y(), q = a(this).attr("href").match("[^#/]+$") - 1, n != q && w("pagination", j, q), !1 }), b.play && (v = setInterval(function () { w("next", i) }, b.play), c.data("interval", v)) }) }, a.fn.slides.option = { preload: !1, preloadImage: "/img/loading.gif", container: "slides_container", generateNextPrev: !1, next: "next", prev: "prev", pagination: !0, generatePagination: !0, prependPagination: !1, paginationClass: "pagination", currentClass: "current", fadeSpeed: 350, fadeEasing: "", slideSpeed: 350, slideEasing: "", start: 1, effect: "slide", crossfade: !1, randomize: !1, play: 0, pause: 0, hoverPause: !1, autoHeight: !1, autoHeightSpeed: 350, bigTarget: !1, animationStart: function () { }, animationComplete: function () { }, slidesLoaded: function () { } }, a.fn.randomize = function (b) { function c() { return Math.round(Math.random()) - .5 } return a(this).each(function () { var d = a(this), e = d.children(), f = e.length; if (f > 1) { e.hide(); var g = []; for (i = 0; i < f; i++) g[g.length] = i; g = g.sort(c), a.each(g, function (a, c) { var f = e.eq(c), g = f.clone(!0); g.show().appendTo(d), b !== undefined && b(f, g), f.remove() }) } }) } })(jQuery)



/*!
* jQuery Cookie Plugin
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2011, Klaus Hartl
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/
; (function ($) {
    $.cookie = function (key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function (s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);

/**
* jQuery.ScrollTo - Easy element scrolling using jQuery.
* Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
* Dual licensed under MIT and GPL.
* Date: 5/25/2009
* @author Ariel Flesler
* @version 1.4.2
*
* http://flesler.blogspot.com/2007/10/jqueryscrollto.html
*/
; (function (d) { var k = d.scrollTo = function (a, i, e) { d(window).scrollTo(a, i, e) }; k.defaults = { axis: 'xy', duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1 }; k.window = function (a) { return d(window)._scrollable() }; d.fn._scrollable = function () { return this.map(function () { var a = this, i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1; if (!i) return a; var e = (a.contentWindow || a).document || a.ownerDocument || a; return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement }) }; d.fn.scrollTo = function (n, j, b) { if (typeof j == 'object') { b = j; j = 0 } if (typeof b == 'function') b = { onAfter: b }; if (n == 'max') n = 9e9; b = d.extend({}, k.defaults, b); j = j || b.speed || b.duration; b.queue = b.queue && b.axis.length > 1; if (b.queue) j /= 2; b.offset = p(b.offset); b.over = p(b.over); return this._scrollable().each(function () { var q = this, r = d(q), f = n, s, g = {}, u = r.is('html,body'); switch (typeof f) { case 'number': case 'string': if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) { f = p(f); break } f = d(f, this); case 'object': if (f.is || f.style) s = (f = d(f)).offset() } d.each(b.axis.split(''), function (a, i) { var e = i == 'x' ? 'Left' : 'Top', h = e.toLowerCase(), c = 'scroll' + e, l = q[c], m = k.max(q, i); if (s) { g[c] = s[h] + (u ? 0 : l - r.offset()[h]); if (b.margin) { g[c] -= parseInt(f.css('margin' + e)) || 0; g[c] -= parseInt(f.css('border' + e + 'Width')) || 0 } g[c] += b.offset[h] || 0; if (b.over[h]) g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h] } else { var o = f[h]; g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o } if (/^\d+$/.test(g[c])) g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m); if (!a && b.queue) { if (l != g[c]) t(b.onAfterFirst); delete g[c] } }); t(b.onAfter); function t(a) { r.animate(g, j, b.easing, a && function () { a.call(this, n, b) }) } }).end() }; k.max = function (a, i) { var e = i == 'x' ? 'Width' : 'Height', h = 'scroll' + e; if (!d(a).is('html,body')) return a[h] - d(a)[e.toLowerCase()](); var c = 'client' + e, l = a.ownerDocument.documentElement, m = a.ownerDocument.body; return Math.max(l[h], m[h]) - Math.min(l[c], m[c]) }; function p(a) { return typeof a == 'object' ? a : { top: a, left: a} } })(jQuery);



/************************************************************************************************************************************
*	fb.wall				Facebook Wall jQuery Plguin
*
*	@author:			Daniel Benkenstein / neosmart GmbH
*	@version:			1.2.7
*	@Last Update:		06.06.2011
*	@licence:			MIT (http://www.opensource.org/licenses/mit-license.php)
*						GPL	(http://www.gnu.org/licenses/gpl.html)
*	@documentation:		http://www.neosmart.de/social-media/facebook-wall
*	@feedback:			http://www.neosmart.de/blog/jquery-plugin-facebook-wall
*	
************************************************************************************************************************************/

; (function ($) {

    $.fn.fbWall = function (options) {

        var opts = $.extend({}, $.fn.fbWall.defaults, options);
        var meta = this;

        return meta.each(function () {
            $this = $(this);
            var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            var output = '';
            var avatarBaseURL;
            var baseData;
            var graphURL = "https://graph.facebook.com/";

            /******************************************************************************************************
            * Load base data
            ******************************************************************************************************/

            meta.addClass('fb-wall').addClass('loading').html('');

            jQuery.jsonp({
                url: Engine.Environment + "/data/facebook/" + o.id + "/" + o.accessToken,
                callbackParameter: "callback",
                success: function (data, s) {
                    initBase(data);
                }
            });

            /*
            $.ajax({
            url: graphURL + o.id + '?access_token=' + o.accessToken,
            dataType: "jsonp",
            success: function (data, textStatus, XMLHttpRequest) {
            initBase(data);
            }
            });
            */
            /******************************************************************************************************
            * Load feed data
            ******************************************************************************************************/

            var initBase = function (data) {
                baseData = data;

                if (data == false) {
                    meta.removeClass('loading').html('The alias you requested do not exist: ' + o.id);
                    return false;
                };

                if (data.error) {
                    meta.removeClass('loading').html("");
                    meta.append("<div class='hidden'>" + data.error.message + "</div>");
                    return false;
                };

                var type = (o.showGuestEntries == 'true' || o.showGuestEntries == true) ? 'feed' : 'posts';

                jQuery.jsonp({
                    url: Engine.Environment + "/data/facebook/" + o.id + "/" + o.accessToken + "/" + type + "/" + o.max,
                    callbackParameter: "callback",
                    success: function (data, s) {
                        meta.removeClass('loading');
                        initWall(data);
                    }
                });

                /*
                $.ajax({
                url: graphURL + o.id + "/" + type + "?limit=" + o.max + '&access_token=' + o.accessToken,
                dataType: "jsonp",
                success: function (data, textStatus, XMLHttpRequest) {
                meta.removeClass('loading');
                initWall(data);
                }
                });
            
                */
            }
            /******************************************************************************************************
            * Parse feed data / wall
            ******************************************************************************************************/

            var initWall = function (data) {

                data = data.data;

                var max = data.length;
                var thisAvatar, isBase, hasBaseLink, thisDesc;

                for (var k = 0; k < max; k++) {

                    // Shortcut ------------------------------------------------------------------------------------------------------------------------------
                    isBase = (data[k].from.id == baseData.id);
                    hasBaseLink = isBase && (exists(baseData.link));
                    if (!o.showGuestEntries && !isBase) continue;

                    // Box -----------------------------------------------------------------------------------------------------------------------------------
                    output += (k == 0) ? '<div class="fb-wall-box fb-wall-box-first">' : '<div class="fb-wall-box">';
                    output += '<a href="http://www.facebook.com/profile.php?id=' + data[k].from.id + '" target="_blank">';
                    output += '<img class="fb-wall-avatar" src="' + getAvatarURL(data[k].from.id) + '" />';
                    output += '</a>';
                    output += '<div class="fb-wall-data">';

                    output += '<span class="fb-wall-message">';
                    output += '<a href="http://www.facebook.com/profile.php?id=' + data[k].from.id + '" class="fb-wall-message-from" target="_blank">' + data[k].from.name + '</a> ';
                    if (exists(data[k].message)) output += modText(data[k].message);
                    output += '</span>';

                    // Media -----------------------------------------------------------------------------------------------------------------------------------
                    if (exists(data[k].picture) || exists(data[k].link) || exists(data[k].caption) || exists(data[k].description)) {
                        output += exists(data[k].picture) ? '<div class="fb-wall-media">' : '<div class="fb-wall-media fb-wall-border-left">';
                        if (exists(data[k].picture)) {
                            if (exists(data[k].link)) output += '<a href="' + data[k].link + '" target="_blank" class="fb-wall-media-link">';
                            output += '<img class="fb-wall-picture" src="' + data[k].picture + '" />';
                            if (exists(data[k].link)) output += '</a>';
                        }
                        output += '<div class="fb-wall-media-container">';
                        if (exists(data[k].name)) output += '<a class="fb-wall-name" href="' + data[k].link + '" target="_blank">' + data[k].name + '</a>';
                        if (exists(data[k].caption)) output += '<a class="fb-wall-caption" href="http://' + data[k].caption + '" target="_blank">' + data[k].caption + '</a>';
                        if (exists(data[k].properties)) {
                            for (var p = 0; p < data[k].properties.length; p++) output += (p == 0) ? '<div>' + formatDate(data[k].properties[p].text) + '</div>' : '<div>' + data[k].properties[p].text + '</div>';
                        }
                        if (exists(data[k].description)) {
                            thisDesc = modText(data[k].description);
                            if (thisDesc.length > 299) thisDesc = thisDesc.substr(0, thisDesc.lastIndexOf(' ')) + ' ...';
                            output += '<span class="fb-wall-description">' + thisDesc + '</span>';
                        }
                        output += '</div>';
                        output += '</div>';
                    }
                    output += '<span class="fb-wall-date">';
                    if (exists(data[k].icon)) output += '<img class="fb-wall-icon" src="' + data[k].icon + '" title="' + data[k].type + '" alt="" />';
                    output += formatDate(data[k].created_time) + '</span>';

                    // Likes -------------------------------------------------------------------------------------------------------------------------------
                    if (exists(data[k].likes)) {
                        if (parseInt(data[k].likes.count) == 1) {
                            output += '<div class="fb-wall-likes"><div><span>' + data[k].likes.data[0].name + '</span> ' + o.translateLikesThis + '</div> </div>';
                        } else {
                            output += '<div class="fb-wall-likes"><div><span>' + data[k].likes.count + ' ' + o.translatePeople + '</span> ' + o.translateLikeThis + '</div> </div>';
                        }
                    }

                    // Comments -------------------------------------------------------------------------------------------------------------------------------
                    if (exists(data[k].comments) && exists(data[k].comments.data) && (o.showComments == true || o.showComments == 'true')) {

                        output += '<div class="fb-wall-comments">';
                        for (var c = 0; c < data[k].comments.data.length; c++) {
                            output += '<span class="fb-wall-comment">';
                            output += '<a href="http://www.facebook.com/profile.php?id=' + data[k].comments.data[c].from.id + '" class="fb-wall-comment-avatar" target="_blank">';
                            output += '<img src="' + getAvatarURL(data[k].comments.data[c].from.id) + '" />';
                            output += '</a>';
                            output += '<span class="fb-wall-comment-message">';
                            output += '<a class="fb-wall-comment-from-name" href="http://www.facebook.com/profile.php?id=' + data[k].comments.data[c].from.id + '" target="_blank">' + data[k].comments.data[c].from.name + '</a> ';
                            output += modText(data[k].comments.data[c].message);
                            output += '<span class="fb-wall-comment-from-date">' + formatDate(data[k].comments.data[c].created_time) + '</span>';
                            output += '</span>';
                            output += '</span>';
                        }
                        output += '</div>';
                    }

                    output += '</div>';
                    output += '<div class="fb-wall-clean"></div>';
                    output += '</div>';
                }

                // No data found --------------------------------------------------------------------------------------------
                if (max == 0) {
                    output += '<div class="fb-wall-box-first">';
                    output += '<img class="fb-wall-avatar" src="' + getAvatarURL(baseData.id) + '" />';
                    output += '<div class="fb-wall-data">';
                    output += '<span class="fb-wall-message"><span class="fb-wall-message-from">' + baseData.name + '</span> ' + o.translateErrorNoData + '</span>';
                    output += '</div>';
                    output += '</div>';
                }
                meta.hide().html(output).fadeIn(700);
            }

            /******************************************************************************************************
            * Get Avatar URLs
            ******************************************************************************************************/

            function getAvatarURL(id) {
                var avatarURL;
                if (id == baseData.id) { avatarURL = (o.useAvatarAlternative) ? o.avatarAlternative : graphURL + id + '/picture?type=square'; }
                else { avatarURL = (o.useAvatarExternal) ? o.avatarExternal : graphURL + id + '/picture?type=square'; }
                return avatarURL;
            }

            /******************************************************************************************************
            * Parse dateStr as formatted date
            * @return: if dateStr can't be parsed as Date, return dateStr
            ******************************************************************************************************/

            function formatDate(dateStr) {
                var year, month, day, hour, minute, dateUTC, date, ampm, d, time;
                var iso = (dateStr.indexOf(' ') == -1 && dateStr.substr(4, 1) == '-' && dateStr.substr(7, 1) == '-' && dateStr.substr(10, 1) == 'T') ? true : false;

                if (iso) {
                    year = dateStr.substr(0, 4);
                    month = parseInt((dateStr.substr(5, 1) == '0') ? dateStr.substr(6, 1) : dateStr.substr(5, 2)) - 1;
                    day = dateStr.substr(8, 2);
                    hour = dateStr.substr(11, 2);
                    minute = dateStr.substr(14, 2);
                    dateUTC = Date.UTC(year, month, day, hour, minute);
                    date = new Date(dateUTC);
                } else {
                    d = dateStr.split(' ');
                    if (d.length != 6 || d[4] != 'at')
                        return dateStr;
                    time = d[5].split(':');
                    ampm = time[1].substr(2);
                    minute = time[1].substr(0, 2);
                    hour = parseInt(time[0]);
                    if (ampm == 'pm') hour += 12;
                    date = new Date(d[1] + ' ' + d[2] + ' ' + d[3] + ' ' + hour + ':' + minute);
                    date.setTime(date.getTime() - (1000 * 60 * 60 * 7));
                }
                day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
                month = date.getMonth() + 1;
                month = (month < 10) ? '0' + month : month;
                hour = date.getHours();
                minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
                if (o.timeConversion == 12) {
                    ampm = (hour < 12) ? 'am' : 'pm';
                    if (hour == 0) hour == 12;
                    else if (hour > 12) hour = hour - 12;
                    if (hour < 10) hour = '0' + hour;
                    return day + '.' + month + '.' + date.getFullYear() + ' at ' + hour + ':' + minute + ' ' + ampm;
                }
                return day + '.' + month + '.' + date.getFullYear() + ' ' + o.translateAt + ' ' + hour + ':' + minute;
            }

            /******************************************************************************************************
            * Helper Function
            ******************************************************************************************************/

            function exists(data) {
                if (!data || data == null || data == 'undefined' || typeof (data) == 'undefined') return false;
                else return true;
            }

            function modText(text) {
                return nl2br(autoLink(escapeTags(text)));
            }

            function escapeTags(str) {
                return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            }

            function nl2br(str) {
                return str.replace(/(\r\n)|(\n\r)|\r|\n/g, "<br>");
            }

            function autoLink(str) {
                return str.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1" target="_blank">$1</a>');
            }

        });
    };

    /******************************************************************************************************
    * Defaults 
    ******************************************************************************************************/

    $.fn.fbWall.defaults = {
        avatarAlternative: 'avatar-alternative.jpg',
        avatarExternal: 'avatar-external.jpg',
        id: 'neosmart.gmbh',
        max: 5,
        showComments: true,
        showGuestEntries: true,
        translateAt: 'at',
        translateLikeThis: 'like this',
        translateLikesThis: 'likes this',
        translateErrorNoData: 'has not shared any information.',
        translatePeople: 'people',
        timeConversion: 24,
        useAvatarAlternative: false,
        useAvatarExternal: false,
        accessToken: ''
    };

})(jQuery);


/*JW Player*/
; if (typeof jwplayer == "undefined") { var jwplayer = function (a) { if (jwplayer.api) { return jwplayer.api.selectPlayer(a) } }; var $jw = jwplayer; jwplayer.version = "5.7.1896 (Licensed version)"; jwplayer.vid = document.createElement("video"); jwplayer.audio = document.createElement("audio"); jwplayer.source = document.createElement("source"); (function (b) { b.utils = function () { }; b.utils.typeOf = function (d) { var c = typeof d; if (c === "object") { if (d) { if (d instanceof Array) { c = "array" } } else { c = "null" } } return c }; b.utils.extend = function () { var c = b.utils.extend["arguments"]; if (c.length > 1) { for (var e = 1; e < c.length; e++) { for (var d in c[e]) { c[0][d] = c[e][d] } } return c[0] } return null }; b.utils.clone = function (f) { var c; var d = b.utils.clone["arguments"]; if (d.length == 1) { switch (b.utils.typeOf(d[0])) { case "object": c = {}; for (var e in d[0]) { c[e] = b.utils.clone(d[0][e]) } break; case "array": c = []; for (var e in d[0]) { c[e] = b.utils.clone(d[0][e]) } break; default: return d[0]; break } } return c }; b.utils.extension = function (c) { if (!c) { return "" } c = c.substring(c.lastIndexOf("/") + 1, c.length); c = c.split("?")[0]; if (c.lastIndexOf(".") > -1) { return c.substr(c.lastIndexOf(".") + 1, c.length).toLowerCase() } return }; b.utils.html = function (c, d) { c.innerHTML = d }; b.utils.wrap = function (c, d) { if (c.parentNode) { c.parentNode.replaceChild(d, c) } d.appendChild(c) }; b.utils.ajax = function (g, f, c) { var e; if (window.XMLHttpRequest) { e = new XMLHttpRequest() } else { e = new ActiveXObject("Microsoft.XMLHTTP") } e.onreadystatechange = function () { if (e.readyState === 4) { if (e.status === 200) { if (f) { f(e) } } else { if (c) { c(g) } } } }; try { e.open("GET", g, true); e.send(null) } catch (d) { if (c) { c(g) } } return e }; b.utils.load = function (d, e, c) { d.onreadystatechange = function () { if (d.readyState === 4) { if (d.status === 200) { if (e) { e() } } else { if (c) { c() } } } } }; b.utils.find = function (d, c) { return d.getElementsByTagName(c) }; b.utils.append = function (c, d) { c.appendChild(d) }; b.utils.isIE = function () { return ((! +"\v1") || (typeof window.ActiveXObject != "undefined")) }; b.utils.isLegacyAndroid = function () { var c = navigator.userAgent.toLowerCase(); return (c.match(/android 2.[012]/i) !== null) }; b.utils.isIOS = function (d) { if (typeof d == "undefined") { d = /iP(hone|ad|od)/i } var c = navigator.userAgent.toLowerCase(); return (c.match(d) !== null) }; b.utils.isIPad = function () { return b.utils.isIOS(/iPad/i) }; b.utils.isIPod = function () { return b.utils.isIOS(/iP(hone|od)/i) }; b.utils.getFirstPlaylistItemFromConfig = function (c) { var d = {}; var e; if (c.playlist && c.playlist.length) { e = c.playlist[0] } else { e = c } d.file = e.file; d.levels = e.levels; d.streamer = e.streamer; d.playlistfile = e.playlistfile; d.provider = e.provider; if (!d.provider) { if (d.file && (d.file.toLowerCase().indexOf("youtube.com") > -1 || d.file.toLowerCase().indexOf("youtu.be") > -1)) { d.provider = "youtube" } if (d.streamer && d.streamer.toLowerCase().indexOf("rtmp://") == 0) { d.provider = "rtmp" } if (e.type) { d.provider = e.type.toLowerCase() } } if (d.provider == "audio") { d.provider = "sound" } return d }; b.utils.getOuterHTML = function (c) { if (c.outerHTML) { return c.outerHTML } else { try { return new XMLSerializer().serializeToString(c) } catch (d) { return "" } } }; b.utils.setOuterHTML = function (f, e) { if (f.outerHTML) { f.outerHTML = e } else { var g = document.createElement("div"); g.innerHTML = e; var c = document.createRange(); c.selectNodeContents(g); var d = c.extractContents(); f.parentNode.insertBefore(d, f); f.parentNode.removeChild(f) } }; b.utils.hasFlash = function () { if (typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] != "undefined") { return true } if (typeof window.ActiveXObject != "undefined") { try { new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); return true } catch (c) { } } return false }; b.utils.getPluginName = function (c) { if (c.lastIndexOf("/") >= 0) { c = c.substring(c.lastIndexOf("/") + 1, c.length) } if (c.lastIndexOf("-") >= 0) { c = c.substring(0, c.lastIndexOf("-")) } if (c.lastIndexOf(".swf") >= 0) { c = c.substring(0, c.lastIndexOf(".swf")) } if (c.lastIndexOf(".js") >= 0) { c = c.substring(0, c.lastIndexOf(".js")) } return c }; b.utils.getPluginVersion = function (c) { if (c.lastIndexOf("-") >= 0) { if (c.lastIndexOf(".js") >= 0) { return c.substring(c.lastIndexOf("-") + 1, c.lastIndexOf(".js")) } else { if (c.lastIndexOf(".swf") >= 0) { return c.substring(c.lastIndexOf("-") + 1, c.lastIndexOf(".swf")) } else { return c.substring(c.lastIndexOf("-") + 1) } } } return "" }; b.utils.getAbsolutePath = function (j, h) { if (!b.utils.exists(h)) { h = document.location.href } if (!b.utils.exists(j)) { return undefined } if (a(j)) { return j } var k = h.substring(0, h.indexOf("://") + 3); var g = h.substring(k.length, h.indexOf("/", k.length + 1)); var d; if (j.indexOf("/") === 0) { d = j.split("/") } else { var e = h.split("?")[0]; e = e.substring(k.length + g.length + 1, e.lastIndexOf("/")); d = e.split("/").concat(j.split("/")) } var c = []; for (var f = 0; f < d.length; f++) { if (!d[f] || !b.utils.exists(d[f]) || d[f] == ".") { continue } else { if (d[f] == "..") { c.pop() } else { c.push(d[f]) } } } return k + g + "/" + c.join("/") }; function a(d) { if (!b.utils.exists(d)) { return } var e = d.indexOf("://"); var c = d.indexOf("?"); return (e > 0 && (c < 0 || (c > e))) } b.utils.pluginPathType = { ABSOLUTE: "ABSOLUTE", RELATIVE: "RELATIVE", CDN: "CDN" }; b.utils.getPluginPathType = function (d) { if (typeof d != "string") { return } d = d.split("?")[0]; var e = d.indexOf("://"); if (e > 0) { return b.utils.pluginPathType.ABSOLUTE } var c = d.indexOf("/"); var f = b.utils.extension(d); if (e < 0 && c < 0 && (!f || !isNaN(f))) { return b.utils.pluginPathType.CDN } return b.utils.pluginPathType.RELATIVE }; b.utils.mapEmpty = function (c) { for (var d in c) { return false } return true }; b.utils.mapLength = function (d) { var c = 0; for (var e in d) { c++ } return c }; b.utils.log = function (d, c) { if (typeof console != "undefined" && typeof console.log != "undefined") { if (c) { console.log(d, c) } else { console.log(d) } } }; b.utils.css = function (d, g, c) { if (b.utils.exists(d)) { for (var e in g) { try { if (typeof g[e] === "undefined") { continue } else { if (typeof g[e] == "number" && !(e == "zIndex" || e == "opacity")) { if (isNaN(g[e])) { continue } if (e.match(/color/i)) { g[e] = "#" + b.utils.strings.pad(g[e].toString(16), 6) } else { g[e] = Math.ceil(g[e]) + "px" } } } d.style[e] = g[e] } catch (f) { } } } }; b.utils.isYouTube = function (c) { return (c.indexOf("youtube.com") > -1 || c.indexOf("youtu.be") > -1) }; b.utils.transform = function (c, d) { c.style.webkitTransform = d; c.style.MozTransform = d; c.style.OTransform = d }; b.utils.stretch = function (h, n, m, f, l, g) { if (typeof m == "undefined" || typeof f == "undefined" || typeof l == "undefined" || typeof g == "undefined") { return } var d = m / l; var e = f / g; var k = 0; var j = 0; n.style.overflow = "hidden"; b.utils.transform(n, ""); var c = {}; switch (h.toUpperCase()) { case b.utils.stretching.NONE: c.width = l; c.height = g; break; case b.utils.stretching.UNIFORM: if (d > e) { c.width = l * e; c.height = g * e } else { c.width = l * d; c.height = g * d } break; case b.utils.stretching.FILL: if (d > e) { c.width = l * d; c.height = g * d } else { c.width = l * e; c.height = g * e } break; case b.utils.stretching.EXACTFIT: b.utils.transform(n, ["scale(", d, ",", e, ")", " translate(0px,0px)"].join("")); c.width = l; c.height = g; break; default: break } c.top = (f - c.height) / 2; c.left = (m - c.width) / 2; b.utils.css(n, c) }; b.utils.stretching = { NONE: "NONE", FILL: "FILL", UNIFORM: "UNIFORM", EXACTFIT: "EXACTFIT" }; b.utils.deepReplaceKeyName = function (h, e, c) { switch (b.utils.typeOf(h)) { case "array": for (var g = 0; g < h.length; g++) { h[g] = b.utils.deepReplaceKeyName(h[g], e, c) } break; case "object": for (var f in h) { var d = f.replace(new RegExp(e, "g"), c); h[d] = b.utils.deepReplaceKeyName(h[f], e, c); if (f != d) { delete h[f] } } break } return h }; b.utils.isInArray = function (e, d) { if (!(e) || !(e instanceof Array)) { return false } for (var c = 0; c < e.length; c++) { if (d === e[c]) { return true } } return false }; b.utils.exists = function (c) { switch (typeof (c)) { case "string": return (c.length > 0); break; case "object": return (c !== null); case "undefined": return false } return true }; b.utils.empty = function (c) { if (typeof c.hasChildNodes == "function") { while (c.hasChildNodes()) { c.removeChild(c.firstChild) } } }; b.utils.parseDimension = function (c) { if (typeof c == "string") { if (c === "") { return 0 } else { if (c.lastIndexOf("%") > -1) { return c } else { return parseInt(c.replace("px", ""), 10) } } } return c }; b.utils.getDimensions = function (c) { if (c && c.style) { return { x: b.utils.parseDimension(c.style.left), y: b.utils.parseDimension(c.style.top), width: b.utils.parseDimension(c.style.width), height: b.utils.parseDimension(c.style.height)} } else { return {} } }; b.utils.timeFormat = function (c) { str = "00:00"; if (c > 0) { str = Math.floor(c / 60) < 10 ? "0" + Math.floor(c / 60) + ":" : Math.floor(c / 60) + ":"; str += Math.floor(c % 60) < 10 ? "0" + Math.floor(c % 60) : Math.floor(c % 60) } return str } })(jwplayer); (function (a) { a.events = function () { }; a.events.COMPLETE = "COMPLETE"; a.events.ERROR = "ERROR" })(jwplayer); (function (jwplayer) { jwplayer.events.eventdispatcher = function (debug) { var _debug = debug; var _listeners; var _globallisteners; this.resetEventListeners = function () { _listeners = {}; _globallisteners = [] }; this.resetEventListeners(); this.addEventListener = function (type, listener, count) { try { if (!jwplayer.utils.exists(_listeners[type])) { _listeners[type] = [] } if (typeof (listener) == "string") { eval("listener = " + listener) } _listeners[type].push({ listener: listener, count: count }) } catch (err) { jwplayer.utils.log("error", err) } return false }; this.removeEventListener = function (type, listener) { if (!_listeners[type]) { return } try { for (var listenerIndex = 0; listenerIndex < _listeners[type].length; listenerIndex++) { if (_listeners[type][listenerIndex].listener.toString() == listener.toString()) { _listeners[type].splice(listenerIndex, 1); break } } } catch (err) { jwplayer.utils.log("error", err) } return false }; this.addGlobalListener = function (listener, count) { try { if (typeof (listener) == "string") { eval("listener = " + listener) } _globallisteners.push({ listener: listener, count: count }) } catch (err) { jwplayer.utils.log("error", err) } return false }; this.removeGlobalListener = function (listener) { if (!_globallisteners[type]) { return } try { for (var globalListenerIndex = 0; globalListenerIndex < _globallisteners.length; globalListenerIndex++) { if (_globallisteners[globalListenerIndex].listener.toString() == listener.toString()) { _globallisteners.splice(globalListenerIndex, 1); break } } } catch (err) { jwplayer.utils.log("error", err) } return false }; this.sendEvent = function (type, data) { if (!jwplayer.utils.exists(data)) { data = {} } if (_debug) { jwplayer.utils.log(type, data) } if (typeof _listeners[type] != "undefined") { for (var listenerIndex = 0; listenerIndex < _listeners[type].length; listenerIndex++) { try { _listeners[type][listenerIndex].listener(data) } catch (err) { jwplayer.utils.log("There was an error while handling a listener: " + err.toString(), _listeners[type][listenerIndex].listener) } if (_listeners[type][listenerIndex]) { if (_listeners[type][listenerIndex].count === 1) { delete _listeners[type][listenerIndex] } else { if (_listeners[type][listenerIndex].count > 0) { _listeners[type][listenerIndex].count = _listeners[type][listenerIndex].count - 1 } } } } } for (var globalListenerIndex = 0; globalListenerIndex < _globallisteners.length; globalListenerIndex++) { try { _globallisteners[globalListenerIndex].listener(data) } catch (err) { jwplayer.utils.log("There was an error while handling a listener: " + err.toString(), _globallisteners[globalListenerIndex].listener) } if (_globallisteners[globalListenerIndex]) { if (_globallisteners[globalListenerIndex].count === 1) { delete _globallisteners[globalListenerIndex] } else { if (_globallisteners[globalListenerIndex].count > 0) { _globallisteners[globalListenerIndex].count = _globallisteners[globalListenerIndex].count - 1 } } } } } } })(jwplayer); (function (a) { var b = {}; a.utils.animations = function () { }; a.utils.animations.transform = function (c, d) { c.style.webkitTransform = d; c.style.MozTransform = d; c.style.OTransform = d; c.style.msTransform = d }; a.utils.animations.transformOrigin = function (c, d) { c.style.webkitTransformOrigin = d; c.style.MozTransformOrigin = d; c.style.OTransformOrigin = d; c.style.msTransformOrigin = d }; a.utils.animations.rotate = function (c, d) { a.utils.animations.transform(c, ["rotate(", d, "deg)"].join("")) }; a.utils.cancelAnimation = function (c) { delete b[c.id] }; a.utils.fadeTo = function (m, f, e, j, h, d) { if (b[m.id] != d && a.utils.exists(d)) { return } if (m.style.opacity == f) { return } var c = new Date().getTime(); if (d > c) { setTimeout(function () { a.utils.fadeTo(m, f, e, j, 0, d) }, d - c) } if (m.style.display == "none") { m.style.display = "block" } if (!a.utils.exists(j)) { j = m.style.opacity === "" ? 1 : m.style.opacity } if (m.style.opacity == f && m.style.opacity !== "" && a.utils.exists(d)) { if (f === 0) { m.style.display = "none" } return } if (!a.utils.exists(d)) { d = c; b[m.id] = d } if (!a.utils.exists(h)) { h = 0 } var k = (e > 0) ? ((c - d) / (e * 1000)) : 0; k = k > 1 ? 1 : k; var l = f - j; var g = j + (k * l); if (g > 1) { g = 1 } else { if (g < 0) { g = 0 } } m.style.opacity = g; if (h > 0) { b[m.id] = d + h * 1000; a.utils.fadeTo(m, f, e, j, 0, b[m.id]); return } setTimeout(function () { a.utils.fadeTo(m, f, e, j, 0, d) }, 10) } })(jwplayer); (function (a) { a.utils.arrays = function () { }; a.utils.arrays.indexOf = function (c, d) { for (var b = 0; b < c.length; b++) { if (c[b] == d) { return b } } return -1 }; a.utils.arrays.remove = function (c, d) { var b = a.utils.arrays.indexOf(c, d); if (b > -1) { c.splice(b, 1) } } })(jwplayer); (function (a) { a.utils.extensionmap = { "3gp": { html5: "video/3gpp", flash: "video" }, "3gpp": { html5: "video/3gpp" }, "3g2": { html5: "video/3gpp2", flash: "video" }, "3gpp2": { html5: "video/3gpp2" }, flv: { flash: "video" }, f4a: { html5: "audio/mp4" }, f4b: { html5: "audio/mp4", flash: "video" }, f4v: { html5: "video/mp4", flash: "video" }, mov: { html5: "video/quicktime", flash: "video" }, m4a: { html5: "audio/mp4", flash: "video" }, m4b: { html5: "audio/mp4" }, m4p: { html5: "audio/mp4" }, m4v: { html5: "video/mp4", flash: "video" }, mp4: { html5: "video/mp4", flash: "video" }, rbs: { flash: "sound" }, aac: { html5: "audio/aac", flash: "video" }, mp3: { html5: "audio/mp3", flash: "sound" }, ogg: { html5: "audio/ogg" }, oga: { html5: "audio/ogg" }, ogv: { html5: "video/ogg" }, webm: { html5: "video/webm" }, m3u8: { html5: "audio/x-mpegurl" }, gif: { flash: "image" }, jpeg: { flash: "image" }, jpg: { flash: "image" }, swf: { flash: "image" }, png: { flash: "image" }, wav: { html5: "audio/x-wav"}} })(jwplayer); (function (e) { e.utils.mediaparser = function () { }; var g = { element: { width: "width", height: "height", id: "id", "class": "className", name: "name" }, media: { src: "file", preload: "preload", autoplay: "autostart", loop: "repeat", controls: "controls" }, source: { src: "file", type: "type", media: "media", "data-jw-width": "width", "data-jw-bitrate": "bitrate" }, video: { poster: "image"} }; var f = {}; e.utils.mediaparser.parseMedia = function (j) { return d(j) }; function c(k, j) { if (!e.utils.exists(j)) { j = g[k] } else { e.utils.extend(j, g[k]) } return j } function d(n, j) { if (f[n.tagName.toLowerCase()] && !e.utils.exists(j)) { return f[n.tagName.toLowerCase()](n) } else { j = c("element", j); var o = {}; for (var k in j) { if (k != "length") { var m = n.getAttribute(k); if (e.utils.exists(m)) { o[j[k]] = m } } } var l = n.style["#background-color"]; if (l && !(l == "transparent" || l == "rgba(0, 0, 0, 0)")) { o.screencolor = l } return o } } function h(n, k) { k = c("media", k); var l = []; var j = e.utils.selectors("source", n); for (var m in j) { if (!isNaN(m)) { l.push(a(j[m])) } } var o = d(n, k); if (e.utils.exists(o.file)) { l[0] = { file: o.file} } o.levels = l; return o } function a(l, k) { k = c("source", k); var j = d(l, k); j.width = j.width ? j.width : 0; j.bitrate = j.bitrate ? j.bitrate : 0; return j } function b(l, k) { k = c("video", k); var j = h(l, k); return j } f.media = h; f.audio = h; f.source = a; f.video = b })(jwplayer); (function (a) { a.utils.loaderstatus = { NEW: "NEW", LOADING: "LOADING", ERROR: "ERROR", COMPLETE: "COMPLETE" }; a.utils.scriptloader = function (c) { var d = a.utils.loaderstatus.NEW; var b = new a.events.eventdispatcher(); a.utils.extend(this, b); this.load = function () { if (d == a.utils.loaderstatus.NEW) { d = a.utils.loaderstatus.LOADING; var e = document.createElement("script"); e.onload = function (f) { d = a.utils.loaderstatus.COMPLETE; b.sendEvent(a.events.COMPLETE) }; e.onerror = function (f) { d = a.utils.loaderstatus.ERROR; b.sendEvent(a.events.ERROR) }; e.onreadystatechange = function () { if (e.readyState == "loaded" || e.readyState == "complete") { d = a.utils.loaderstatus.COMPLETE; b.sendEvent(a.events.COMPLETE) } }; document.getElementsByTagName("head")[0].appendChild(e); e.src = c } }; this.getStatus = function () { return d } } })(jwplayer); (function (a) { a.utils.selectors = function (b, e) { if (!a.utils.exists(e)) { e = document } b = a.utils.strings.trim(b); var c = b.charAt(0); if (c == "#") { return e.getElementById(b.substr(1)) } else { if (c == ".") { if (e.getElementsByClassName) { return e.getElementsByClassName(b.substr(1)) } else { return a.utils.selectors.getElementsByTagAndClass("*", b.substr(1)) } } else { if (b.indexOf(".") > 0) { var d = b.split("."); return a.utils.selectors.getElementsByTagAndClass(d[0], d[1]) } else { return e.getElementsByTagName(b) } } } return null }; a.utils.selectors.getElementsByTagAndClass = function (e, h, g) { var j = []; if (!a.utils.exists(g)) { g = document } var f = g.getElementsByTagName(e); for (var d = 0; d < f.length; d++) { if (a.utils.exists(f[d].className)) { var c = f[d].className.split(" "); for (var b = 0; b < c.length; b++) { if (c[b] == h) { j.push(f[d]) } } } } return j } })(jwplayer); (function (a) { a.utils.strings = function () { }; a.utils.strings.trim = function (b) { return b.replace(/^\s*/, "").replace(/\s*$/, "") }; a.utils.strings.pad = function (c, d, b) { if (!b) { b = "0" } while (c.length < d) { c = b + c } return c }; a.utils.strings.serialize = function (b) { if (b == null) { return null } else { if (b == "true") { return true } else { if (b == "false") { return false } else { if (isNaN(Number(b)) || b.length > 5 || b.length == 0) { return b } else { return Number(b) } } } } }; a.utils.strings.seconds = function (d) { d = d.replace(",", "."); var b = d.split(":"); var c = 0; if (d.substr(-1) == "s") { c = Number(d.substr(0, d.length - 1)) } else { if (d.substr(-1) == "m") { c = Number(d.substr(0, d.length - 1)) * 60 } else { if (d.substr(-1) == "h") { c = Number(d.substr(0, d.length - 1)) * 3600 } else { if (b.length > 1) { c = Number(b[b.length - 1]); c += Number(b[b.length - 2]) * 60; if (b.length == 3) { c += Number(b[b.length - 3]) * 3600 } } else { c = Number(d) } } } } return c }; a.utils.strings.xmlAttribute = function (b, c) { for (var d = 0; d < b.attributes.length; d++) { if (b.attributes[d].name && b.attributes[d].name.toLowerCase() == c.toLowerCase()) { return b.attributes[d].value.toString() } } return "" }; a.utils.strings.jsonToString = function (f) { var h = h || {}; if (h && h.stringify) { return h.stringify(f) } var c = typeof (f); if (c != "object" || f === null) { if (c == "string") { f = '"' + f + '"' } else { return String(f) } } else { var g = [], b = (f && f.constructor == Array); for (var d in f) { var e = f[d]; switch (typeof (e)) { case "string": e = '"' + e + '"'; break; case "object": if (a.utils.exists(e)) { e = a.utils.strings.jsonToString(e) } break } if (b) { if (typeof (e) != "function") { g.push(String(e)) } } else { if (typeof (e) != "function") { g.push('"' + d + '":' + String(e)) } } } if (b) { return "[" + String(g) + "]" } else { return "{" + String(g) + "}" } } } })(jwplayer); (function (c) { var d = new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/); c.utils.typechecker = function (g, f) { f = !c.utils.exists(f) ? b(g) : f; return e(g, f) }; function b(f) { var g = ["true", "false", "t", "f"]; if (g.toString().indexOf(f.toLowerCase().replace(" ", "")) >= 0) { return "boolean" } else { if (d.test(f)) { return "color" } else { if (!isNaN(parseInt(f, 10)) && parseInt(f, 10).toString().length == f.length) { return "integer" } else { if (!isNaN(parseFloat(f)) && parseFloat(f).toString().length == f.length) { return "float" } } } } return "string" } function e(g, f) { if (!c.utils.exists(f)) { return g } switch (f) { case "color": if (g.length > 0) { return a(g) } return null; case "integer": return parseInt(g, 10); case "float": return parseFloat(g); case "boolean": if (g.toLowerCase() == "true") { return true } else { if (g == "1") { return true } } return false } return g } function a(f) { switch (f.toLowerCase()) { case "blue": return parseInt("0000FF", 16); case "green": return parseInt("00FF00", 16); case "red": return parseInt("FF0000", 16); case "cyan": return parseInt("00FFFF", 16); case "magenta": return parseInt("FF00FF", 16); case "yellow": return parseInt("FFFF00", 16); case "black": return parseInt("000000", 16); case "white": return parseInt("FFFFFF", 16); default: f = f.replace(/(#|0x)?([0-9A-F]{3,6})$/gi, "$2"); if (f.length == 3) { f = f.charAt(0) + f.charAt(0) + f.charAt(1) + f.charAt(1) + f.charAt(2) + f.charAt(2) } return parseInt(f, 16) } return parseInt("000000", 16) } })(jwplayer); (function (a) { a.utils.parsers = function () { }; a.utils.parsers.localName = function (b) { if (!b) { return "" } else { if (b.localName) { return b.localName } else { if (b.baseName) { return b.baseName } else { return "" } } } }; a.utils.parsers.textContent = function (b) { if (!b) { return "" } else { if (b.textContent) { return b.textContent } else { if (b.text) { return b.text } else { return "" } } } } })(jwplayer); (function (a) { a.utils.parsers.jwparser = function () { }; a.utils.parsers.jwparser.PREFIX = "jwplayer"; a.utils.parsers.jwparser.parseEntry = function (c, d) { for (var b = 0; b < c.childNodes.length; b++) { if (c.childNodes[b].prefix == a.utils.parsers.jwparser.PREFIX) { d[a.utils.parsers.localName(c.childNodes[b])] = a.utils.strings.serialize(a.utils.parsers.textContent(c.childNodes[b])) } if (!d.file && String(d.link).toLowerCase().indexOf("youtube") > -1) { d.file = d.link } } return d }; a.utils.parsers.jwparser.getProvider = function (c) { if (c.type) { return c.type } else { if (c.file.indexOf("youtube.com/w") > -1 || c.file.indexOf("youtube.com/v") > -1 || c.file.indexOf("youtu.be/") > -1) { return "youtube" } else { if (c.streamer && c.streamer.indexOf("rtmp") == 0) { return "rtmp" } else { if (c.streamer && c.streamer.indexOf("http") == 0) { return "http" } else { var b = a.utils.strings.extension(c.file); if (extensions.hasOwnProperty(b)) { return extensions[b] } } } } } return "" } })(jwplayer); (function (a) { a.utils.parsers.mediaparser = function () { }; a.utils.parsers.mediaparser.PREFIX = "media"; a.utils.parsers.mediaparser.parseGroup = function (d, f) { var e = false; for (var c = 0; c < d.childNodes.length; c++) { if (d.childNodes[c].prefix == a.utils.parsers.mediaparser.PREFIX) { if (!a.utils.parsers.localName(d.childNodes[c])) { continue } switch (a.utils.parsers.localName(d.childNodes[c]).toLowerCase()) { case "content": if (!e) { f.file = a.utils.strings.xmlAttribute(d.childNodes[c], "url") } if (a.utils.strings.xmlAttribute(d.childNodes[c], "duration")) { f.duration = a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c], "duration")) } if (a.utils.strings.xmlAttribute(d.childNodes[c], "start")) { f.start = a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c], "start")) } if (d.childNodes[c].childNodes && d.childNodes[c].childNodes.length > 0) { f = a.utils.parsers.mediaparser.parseGroup(d.childNodes[c], f) } if (a.utils.strings.xmlAttribute(d.childNodes[c], "width") || a.utils.strings.xmlAttribute(d.childNodes[c], "bitrate") || a.utils.strings.xmlAttribute(d.childNodes[c], "url")) { if (!f.levels) { f.levels = [] } f.levels.push({ width: a.utils.strings.xmlAttribute(d.childNodes[c], "width"), bitrate: a.utils.strings.xmlAttribute(d.childNodes[c], "bitrate"), file: a.utils.strings.xmlAttribute(d.childNodes[c], "url") }) } break; case "title": f.title = a.utils.parsers.textContent(d.childNodes[c]); break; case "description": f.description = a.utils.parsers.textContent(d.childNodes[c]); break; case "keywords": f.tags = a.utils.parsers.textContent(d.childNodes[c]); break; case "thumbnail": f.image = a.utils.strings.xmlAttribute(d.childNodes[c], "url"); break; case "credit": f.author = a.utils.parsers.textContent(d.childNodes[c]); break; case "player": var b = d.childNodes[c].url; if (b.indexOf("youtube.com") >= 0 || b.indexOf("youtu.be") >= 0) { e = true; f.file = a.utils.strings.xmlAttribute(d.childNodes[c], "url") } break; case "group": a.utils.parsers.mediaparser.parseGroup(d.childNodes[c], f); break } } } return f } })(jwplayer); (function (b) { b.utils.parsers.rssparser = function () { }; b.utils.parsers.rssparser.parse = function (f) { var c = []; for (var e = 0; e < f.childNodes.length; e++) { if (b.utils.parsers.localName(f.childNodes[e]).toLowerCase() == "channel") { for (var d = 0; d < f.childNodes[e].childNodes.length; d++) { if (b.utils.parsers.localName(f.childNodes[e].childNodes[d]).toLowerCase() == "item") { c.push(a(f.childNodes[e].childNodes[d])) } } } } return c }; function a(d) { var e = {}; for (var c = 0; c < d.childNodes.length; c++) { if (!b.utils.parsers.localName(d.childNodes[c])) { continue } switch (b.utils.parsers.localName(d.childNodes[c]).toLowerCase()) { case "enclosure": e.file = b.utils.strings.xmlAttribute(d.childNodes[c], "url"); break; case "title": e.title = b.utils.parsers.textContent(d.childNodes[c]); break; case "pubdate": e.date = b.utils.parsers.textContent(d.childNodes[c]); break; case "description": e.description = b.utils.parsers.textContent(d.childNodes[c]); break; case "link": e.link = b.utils.parsers.textContent(d.childNodes[c]); break; case "category": if (e.tags) { e.tags += b.utils.parsers.textContent(d.childNodes[c]) } else { e.tags = b.utils.parsers.textContent(d.childNodes[c]) } break } } e = b.utils.parsers.mediaparser.parseGroup(d, e); e = b.utils.parsers.jwparser.parseEntry(d, e); return new b.html5.playlistitem(e) } })(jwplayer); (function (a) { var c = {}; var b = {}; a.plugins = function () { }; a.plugins.loadPlugins = function (e, d) { b[e] = new a.plugins.pluginloader(new a.plugins.model(c), d); return b[e] }; a.plugins.registerPlugin = function (h, f, e) { var d = a.utils.getPluginName(h); if (c[d]) { c[d].registerPlugin(h, f, e) } else { a.utils.log("A plugin (" + h + ") was registered with the player that was not loaded. Please check your configuration."); for (var g in b) { b[g].pluginFailed() } } } })(jwplayer); (function (a) { a.plugins.model = function (b) { this.addPlugin = function (c) { var d = a.utils.getPluginName(c); if (!b[d]) { b[d] = new a.plugins.plugin(c) } return b[d] } } })(jwplayer); (function (a) { a.plugins.pluginmodes = { FLASH: "FLASH", JAVASCRIPT: "JAVASCRIPT", HYBRID: "HYBRID" }; a.plugins.plugin = function (b) { var d = "http://lp.longtailvideo.com"; var j = a.utils.loaderstatus.NEW; var k; var h; var l; var c = new a.events.eventdispatcher(); a.utils.extend(this, c); function e() { switch (a.utils.getPluginPathType(b)) { case a.utils.pluginPathType.ABSOLUTE: return b; case a.utils.pluginPathType.RELATIVE: return a.utils.getAbsolutePath(b, window.location.href); case a.utils.pluginPathType.CDN: var n = a.utils.getPluginName(b); var m = a.utils.getPluginVersion(b); return d + "/" + a.version.split(".")[0] + "/" + n + "/" + n + (m !== "" ? ("-" + m) : "") + ".js" } } function g(m) { l = setTimeout(function () { j = a.utils.loaderstatus.COMPLETE; c.sendEvent(a.events.COMPLETE) }, 1000) } function f(m) { j = a.utils.loaderstatus.ERROR; c.sendEvent(a.events.ERROR) } this.load = function () { if (j == a.utils.loaderstatus.NEW) { if (b.lastIndexOf(".swf") > 0) { k = b; j = a.utils.loaderstatus.COMPLETE; c.sendEvent(a.events.COMPLETE); return } j = a.utils.loaderstatus.LOADING; var m = new a.utils.scriptloader(e()); m.addEventListener(a.events.COMPLETE, g); m.addEventListener(a.events.ERROR, f); m.load() } }; this.registerPlugin = function (o, n, m) { if (l) { clearTimeout(l); l = undefined } if (n && m) { k = m; h = n } else { if (typeof n == "string") { k = n } else { if (typeof n == "function") { h = n } else { if (!n && !m) { k = o } } } } j = a.utils.loaderstatus.COMPLETE; c.sendEvent(a.events.COMPLETE) }; this.getStatus = function () { return j }; this.getPluginName = function () { return a.utils.getPluginName(b) }; this.getFlashPath = function () { if (k) { switch (a.utils.getPluginPathType(k)) { case a.utils.pluginPathType.ABSOLUTE: return k; case a.utils.pluginPathType.RELATIVE: if (b.lastIndexOf(".swf") > 0) { return a.utils.getAbsolutePath(k, window.location.href) } return a.utils.getAbsolutePath(k, e()); case a.utils.pluginPathType.CDN: if (k.indexOf("-") > -1) { return k + "h" } return k + "-h" } } return null }; this.getJS = function () { return h }; this.getPluginmode = function () { if (typeof k != "undefined" && typeof h != "undefined") { return a.plugins.pluginmodes.HYBRID } else { if (typeof k != "undefined") { return a.plugins.pluginmodes.FLASH } else { if (typeof h != "undefined") { return a.plugins.pluginmodes.JAVASCRIPT } } } }; this.getNewInstance = function (n, m, o) { return new h(n, m, o) }; this.getURL = function () { return b } } })(jwplayer); (function (a) { a.plugins.pluginloader = function (h, e) { var g = {}; var k = a.utils.loaderstatus.NEW; var d = false; var b = false; var c = new a.events.eventdispatcher(); a.utils.extend(this, c); function f() { if (!b) { b = true; k = a.utils.loaderstatus.COMPLETE; c.sendEvent(a.events.COMPLETE) } } function j() { if (!b) { var m = 0; for (plugin in g) { var l = g[plugin].getStatus(); if (l == a.utils.loaderstatus.LOADING || l == a.utils.loaderstatus.NEW) { m++ } } if (m == 0) { f() } } } this.setupPlugins = function (n, l, s) { var m = { length: 0, plugins: {} }; var p = { length: 0, plugins: {} }; for (var o in g) { var q = g[o].getPluginName(); if (g[o].getFlashPath()) { m.plugins[g[o].getFlashPath()] = l.plugins[o]; m.plugins[g[o].getFlashPath()].pluginmode = g[o].getPluginmode(); m.length++ } if (g[o].getJS()) { var r = document.createElement("div"); r.id = n.id + "_" + q; r.style.position = "absolute"; r.style.zIndex = p.length + 10; p.plugins[q] = g[o].getNewInstance(n, l.plugins[o], r); p.length++; if (typeof p.plugins[q].resize != "undefined") { n.onReady(s(p.plugins[q], r, true)); n.onResize(s(p.plugins[q], r)) } } } n.plugins = p.plugins; return m }; this.load = function () { k = a.utils.loaderstatus.LOADING; d = true; for (var l in e) { if (a.utils.exists(l)) { g[l] = h.addPlugin(l); g[l].addEventListener(a.events.COMPLETE, j); g[l].addEventListener(a.events.ERROR, j) } } for (l in g) { g[l].load() } d = false; j() }; this.pluginFailed = function () { f() }; this.getStatus = function () { return k } } })(jwplayer); (function (b) { var a = []; b.api = function (d) { this.container = d; this.id = d.id; var n = {}; var s = {}; var q = {}; var c = []; var h = undefined; var l = false; var j = []; var p = b.utils.getOuterHTML(d); var r = {}; var k = {}; this.getBuffer = function () { return this.callInternal("jwGetBuffer") }; this.getContainer = function () { return this.container }; function e(u, t) { return function (z, v, w, x) { if (u.renderingMode == "flash" || u.renderingMode == "html5") { var y; if (v) { k[z] = v; y = "jwplayer('" + u.id + "').callback('" + z + "')" } else { if (!v && k[z]) { delete k[z] } } h.jwDockSetButton(z, y, w, x) } return t } } this.getPlugin = function (t) { var v = this; var u = {}; if (t == "dock") { return b.utils.extend(u, { setButton: e(v, u), show: function () { v.callInternal("jwDockShow"); return u }, hide: function () { v.callInternal("jwDockHide"); return u }, onShow: function (w) { v.componentListener("dock", b.api.events.JWPLAYER_COMPONENT_SHOW, w); return u }, onHide: function (w) { v.componentListener("dock", b.api.events.JWPLAYER_COMPONENT_HIDE, w); return u } }) } else { if (t == "controlbar") { return b.utils.extend(u, { show: function () { v.callInternal("jwControlbarShow"); return u }, hide: function () { v.callInternal("jwControlbarHide"); return u }, onShow: function (w) { v.componentListener("controlbar", b.api.events.JWPLAYER_COMPONENT_SHOW, w); return u }, onHide: function (w) { v.componentListener("controlbar", b.api.events.JWPLAYER_COMPONENT_HIDE, w); return u } }) } else { if (t == "display") { return b.utils.extend(u, { show: function () { v.callInternal("jwDisplayShow"); return u }, hide: function () { v.callInternal("jwDisplayHide"); return u }, onShow: function (w) { v.componentListener("display", b.api.events.JWPLAYER_COMPONENT_SHOW, w); return u }, onHide: function (w) { v.componentListener("display", b.api.events.JWPLAYER_COMPONENT_HIDE, w); return u } }) } else { return this.plugins[t] } } } }; this.callback = function (t) { if (k[t]) { return k[t]() } }; this.getDuration = function () { return this.callInternal("jwGetDuration") }; this.getFullscreen = function () { return this.callInternal("jwGetFullscreen") }; this.getHeight = function () { return this.callInternal("jwGetHeight") }; this.getLockState = function () { return this.callInternal("jwGetLockState") }; this.getMeta = function () { return this.getItemMeta() }; this.getMute = function () { return this.callInternal("jwGetMute") }; this.getPlaylist = function () { var u = this.callInternal("jwGetPlaylist"); if (this.renderingMode == "flash") { b.utils.deepReplaceKeyName(u, "__dot__", ".") } for (var t = 0; t < u.length; t++) { if (!b.utils.exists(u[t].index)) { u[t].index = t } } return u }; this.getPlaylistItem = function (t) { if (!b.utils.exists(t)) { t = this.getCurrentItem() } return this.getPlaylist()[t] }; this.getPosition = function () { return this.callInternal("jwGetPosition") }; this.getRenderingMode = function () { return this.renderingMode }; this.getState = function () { return this.callInternal("jwGetState") }; this.getVolume = function () { return this.callInternal("jwGetVolume") }; this.getWidth = function () { return this.callInternal("jwGetWidth") }; this.setFullscreen = function (t) { if (!b.utils.exists(t)) { this.callInternal("jwSetFullscreen", !this.callInternal("jwGetFullscreen")) } else { this.callInternal("jwSetFullscreen", t) } return this }; this.setMute = function (t) { if (!b.utils.exists(t)) { this.callInternal("jwSetMute", !this.callInternal("jwGetMute")) } else { this.callInternal("jwSetMute", t) } return this }; this.lock = function () { return this }; this.unlock = function () { return this }; this.load = function (t) { this.callInternal("jwLoad", t); return this }; this.playlistItem = function (t) { this.callInternal("jwPlaylistItem", t); return this }; this.playlistPrev = function () { this.callInternal("jwPlaylistPrev"); return this }; this.playlistNext = function () { this.callInternal("jwPlaylistNext"); return this }; this.resize = function (u, t) { if (this.renderingMode == "html5") { h.jwResize(u, t) } else { this.container.width = u; this.container.height = t } return this }; this.play = function (t) { if (typeof t == "undefined") { t = this.getState(); if (t == b.api.events.state.PLAYING || t == b.api.events.state.BUFFERING) { this.callInternal("jwPause") } else { this.callInternal("jwPlay") } } else { this.callInternal("jwPlay", t) } return this }; this.pause = function (t) { if (typeof t == "undefined") { t = this.getState(); if (t == b.api.events.state.PLAYING || t == b.api.events.state.BUFFERING) { this.callInternal("jwPause") } else { this.callInternal("jwPlay") } } else { this.callInternal("jwPause", t) } return this }; this.stop = function () { this.callInternal("jwStop"); return this }; this.seek = function (t) { this.callInternal("jwSeek", t); return this }; this.setVolume = function (t) { this.callInternal("jwSetVolume", t); return this }; this.onBufferChange = function (t) { return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER, t) }; this.onBufferFull = function (t) { return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL, t) }; this.onError = function (t) { return this.eventListener(b.api.events.JWPLAYER_ERROR, t) }; this.onFullscreen = function (t) { return this.eventListener(b.api.events.JWPLAYER_FULLSCREEN, t) }; this.onMeta = function (t) { return this.eventListener(b.api.events.JWPLAYER_MEDIA_META, t) }; this.onMute = function (t) { return this.eventListener(b.api.events.JWPLAYER_MEDIA_MUTE, t) }; this.onPlaylist = function (t) { return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED, t) }; this.onPlaylistItem = function (t) { return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM, t) }; this.onReady = function (t) { return this.eventListener(b.api.events.API_READY, t) }; this.onResize = function (t) { return this.eventListener(b.api.events.JWPLAYER_RESIZE, t) }; this.onComplete = function (t) { return this.eventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE, t) }; this.onSeek = function (t) { return this.eventListener(b.api.events.JWPLAYER_MEDIA_SEEK, t) }; this.onTime = function (t) { return this.eventListener(b.api.events.JWPLAYER_MEDIA_TIME, t) }; this.onVolume = function (t) { return this.eventListener(b.api.events.JWPLAYER_MEDIA_VOLUME, t) }; this.onBuffer = function (t) { return this.stateListener(b.api.events.state.BUFFERING, t) }; this.onPause = function (t) { return this.stateListener(b.api.events.state.PAUSED, t) }; this.onPlay = function (t) { return this.stateListener(b.api.events.state.PLAYING, t) }; this.onIdle = function (t) { return this.stateListener(b.api.events.state.IDLE, t) }; this.remove = function () { n = {}; j = []; if (b.utils.getOuterHTML(this.container) != p) { b.api.destroyPlayer(this.id, p) } }; this.setup = function (u) { if (b.embed) { var t = this.id; this.remove(); var v = b(t); v.config = u; return new b.embed(v) } return this }; this.registerPlugin = function (v, u, t) { b.plugins.registerPlugin(v, u, t) }; this.setPlayer = function (t, u) { h = t; this.renderingMode = u }; this.stateListener = function (t, u) { if (!s[t]) { s[t] = []; this.eventListener(b.api.events.JWPLAYER_PLAYER_STATE, g(t)) } s[t].push(u); return this }; function g(t) { return function (v) { var u = v.newstate, x = v.oldstate; if (u == t) { var w = s[u]; if (w) { for (var y = 0; y < w.length; y++) { if (typeof w[y] == "function") { w[y].call(this, { oldstate: x, newstate: u }) } } } } } } this.componentListener = function (t, u, v) { if (!q[t]) { q[t] = {} } if (!q[t][u]) { q[t][u] = []; this.eventListener(u, m(t, u)) } q[t][u].push(v); return this }; function m(t, u) { return function (w) { if (t == w.component) { var v = q[t][u]; if (v) { for (var x = 0; x < v.length; x++) { if (typeof v[x] == "function") { v[x].call(this, w) } } } } } } this.addInternalListener = function (t, u) { t.jwAddEventListener(u, 'function(dat) { jwplayer("' + this.id + '").dispatchEvent("' + u + '", dat); }') }; this.eventListener = function (t, u) { if (!n[t]) { n[t] = []; if (h && l) { this.addInternalListener(h, t) } } n[t].push(u); return this }; this.dispatchEvent = function (v) { if (n[v]) { var u = f(v, arguments[1]); for (var t = 0; t < n[v].length; t++) { if (typeof n[v][t] == "function") { n[v][t].call(this, u) } } } }; function f(v, t) { var x = b.utils.extend({}, t); if (v == b.api.events.JWPLAYER_FULLSCREEN && !x.fullscreen) { x.fullscreen = x.message == "true" ? true : false; delete x.message } else { if (typeof x.data == "object") { x = b.utils.extend(x, x.data); delete x.data } } var u = ["position", "duration", "offset"]; for (var w in u) { if (x[u[w]]) { x[u[w]] = Math.round(x[u[w]] * 1000) / 1000 } } return x } this.callInternal = function (u, t) { if (l) { if (typeof h != "undefined" && typeof h[u] == "function") { if (b.utils.exists(t)) { return (h[u])(t) } else { return (h[u])() } } return null } else { j.push({ method: u, parameters: t }) } }; this.playerReady = function (v) { l = true; if (!h) { this.setPlayer(document.getElementById(v.id)) } this.container = document.getElementById(this.id); for (var t in n) { this.addInternalListener(h, t) } this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM, function (w) { r = {} }); this.eventListener(b.api.events.JWPLAYER_MEDIA_META, function (w) { b.utils.extend(r, w.metadata) }); this.dispatchEvent(b.api.events.API_READY); while (j.length > 0) { var u = j.shift(); this.callInternal(u.method, u.parameters) } }; this.getItemMeta = function () { return r }; this.getCurrentItem = function () { return this.callInternal("jwGetPlaylistIndex") }; function o(v, x, w) { var t = []; if (!x) { x = 0 } if (!w) { w = v.length - 1 } for (var u = x; u <= w; u++) { t.push(v[u]) } return t } return this }; b.api.selectPlayer = function (d) { var c; if (!b.utils.exists(d)) { d = 0 } if (d.nodeType) { c = d } else { if (typeof d == "string") { c = document.getElementById(d) } } if (c) { var e = b.api.playerById(c.id); if (e) { return e } else { return b.api.addPlayer(new b.api(c)) } } else { if (typeof d == "number") { return b.getPlayers()[d] } } return null }; b.api.events = { API_READY: "jwplayerAPIReady", JWPLAYER_READY: "jwplayerReady", JWPLAYER_FULLSCREEN: "jwplayerFullscreen", JWPLAYER_RESIZE: "jwplayerResize", JWPLAYER_ERROR: "jwplayerError", JWPLAYER_COMPONENT_SHOW: "jwplayerComponentShow", JWPLAYER_COMPONENT_HIDE: "jwplayerComponentHide", JWPLAYER_MEDIA_BUFFER: "jwplayerMediaBuffer", JWPLAYER_MEDIA_BUFFER_FULL: "jwplayerMediaBufferFull", JWPLAYER_MEDIA_ERROR: "jwplayerMediaError", JWPLAYER_MEDIA_LOADED: "jwplayerMediaLoaded", JWPLAYER_MEDIA_COMPLETE: "jwplayerMediaComplete", JWPLAYER_MEDIA_SEEK: "jwplayerMediaSeek", JWPLAYER_MEDIA_TIME: "jwplayerMediaTime", JWPLAYER_MEDIA_VOLUME: "jwplayerMediaVolume", JWPLAYER_MEDIA_META: "jwplayerMediaMeta", JWPLAYER_MEDIA_MUTE: "jwplayerMediaMute", JWPLAYER_PLAYER_STATE: "jwplayerPlayerState", JWPLAYER_PLAYLIST_LOADED: "jwplayerPlaylistLoaded", JWPLAYER_PLAYLIST_ITEM: "jwplayerPlaylistItem" }; b.api.events.state = { BUFFERING: "BUFFERING", IDLE: "IDLE", PAUSED: "PAUSED", PLAYING: "PLAYING" }; b.api.playerById = function (d) { for (var c = 0; c < a.length; c++) { if (a[c].id == d) { return a[c] } } return null }; b.api.addPlayer = function (c) { for (var d = 0; d < a.length; d++) { if (a[d] == c) { return c } } a.push(c); return c }; b.api.destroyPlayer = function (g, d) { var f = -1; for (var j = 0; j < a.length; j++) { if (a[j].id == g) { f = j; continue } } if (f >= 0) { var c = document.getElementById(a[f].id); if (document.getElementById(a[f].id + "_wrapper")) { c = document.getElementById(a[f].id + "_wrapper") } if (c) { if (d) { b.utils.setOuterHTML(c, d) } else { var h = document.createElement("div"); var e = c.id; if (c.id.indexOf("_wrapper") == c.id.length - 8) { newID = c.id.substring(0, c.id.length - 8) } h.setAttribute("id", e); c.parentNode.replaceChild(h, c) } } a.splice(f, 1) } return null }; b.getPlayers = function () { return a.slice(0) } })(jwplayer); var _userPlayerReady = (typeof playerReady == "function") ? playerReady : undefined; playerReady = function (b) { var a = jwplayer.api.playerById(b.id); if (a) { a.playerReady(b) } else { jwplayer.api.selectPlayer(b.id).playerReady(b) } if (_userPlayerReady) { _userPlayerReady.call(this, b) } }; (function (a) { a.embed = function (g) { var j = { width: 400, height: 300, components: { controlbar: { position: "over"}} }; var f = a.utils.mediaparser.parseMedia(g.container); var e = new a.embed.config(a.utils.extend(j, f, g.config), this); var h = a.plugins.loadPlugins(g.id, e.plugins); function c(m, l) { for (var k in l) { if (typeof m[k] == "function") { (m[k]).call(m, l[k]) } } } function d() { if (h.getStatus() == a.utils.loaderstatus.COMPLETE) { for (var m = 0; m < e.modes.length; m++) { if (e.modes[m].type && a.embed[e.modes[m].type]) { var k = e; if (e.modes[m].config) { k = a.utils.extend(a.utils.clone(e), e.modes[m].config) } var l = new a.embed[e.modes[m].type](document.getElementById(g.id), e.modes[m], k, h, g); if (l.supportsConfig()) { l.embed(); c(g, e.events); return g } } } a.utils.log("No suitable players found"); new a.embed.logo(a.utils.extend({ hide: true }, e.components.logo), "none", g.id) } } h.addEventListener(a.events.COMPLETE, d); h.addEventListener(a.events.ERROR, d); h.load(); return g }; function b() { if (!document.body) { return setTimeout(b, 15) } var c = a.utils.selectors.getElementsByTagAndClass("video", "jwplayer"); for (var d = 0; d < c.length; d++) { var e = c[d]; a(e.id).setup({}) } } b() })(jwplayer); (function (e) { function h() { return [{ type: "flash", src: "/jwplayer/player.swf" }, { type: "html5" }, { type: "download"}] } var a = { players: "modes", autoplay: "autostart" }; function b(n) { var m = n.toLowerCase(); var l = ["left", "right", "top", "bottom"]; for (var k = 0; k < l.length; k++) { if (m == l[k]) { return true } } return false } function c(l) { var k = false; k = (l instanceof Array) || (typeof l == "object" && !l.position && !l.size); return k } function j(k) { if (typeof k == "string") { if (parseInt(k).toString() == k || k.toLowerCase().indexOf("px") > -1) { return parseInt(k) } } return k } var g = ["playlist", "dock", "controlbar", "logo", "display"]; function f(k) { var n = {}; switch (e.utils.typeOf(k.plugins)) { case "object": for (var m in k.plugins) { n[e.utils.getPluginName(m)] = m } break; case "string": var o = k.plugins.split(","); for (var l = 0; l < o.length; l++) { n[e.utils.getPluginName(o[l])] = o[l] } break } return n } function d(o, n, m, k) { if (e.utils.typeOf(o[n]) != "object") { o[n] = {} } var l = o[n][m]; if (e.utils.typeOf(l) != "object") { o[n][m] = l = {} } if (k) { if (n == "plugins") { var p = e.utils.getPluginName(m); l[k] = o[p + "." + k]; delete o[p + "." + k] } else { l[k] = o[m + "." + k]; delete o[m + "." + k] } } } e.embed.deserialize = function (l) { var m = f(l); for (var k in m) { d(l, "plugins", m[k]) } for (var p in l) { if (p.indexOf(".") > -1) { var o = p.split("."); var n = o[0]; var p = o[1]; if (e.utils.isInArray(g, n)) { d(l, "components", n, p) } else { if (m[n]) { d(l, "plugins", m[n], p) } } } } return l }; e.embed.config = function (k, u) { var t = e.utils.extend({}, k); var r; if (c(t.playlist)) { r = t.playlist; delete t.playlist } t = e.embed.deserialize(t); t.height = j(t.height); t.width = j(t.width); if (typeof t.plugins == "string") { var l = t.plugins.split(","); if (typeof t.plugins != "object") { t.plugins = {} } for (var p = 0; p < l.length; p++) { var q = e.utils.getPluginName(l[p]); if (typeof t[q] == "object") { t.plugins[l[p]] = t[q]; delete t[q] } else { t.plugins[l[p]] = {} } } } for (var s = 0; s < g.length; s++) { var o = g[s]; if (e.utils.exists(t[o])) { if (typeof t[o] != "object") { if (!t.components[o]) { t.components[o] = {} } if (o == "logo") { t.components[o].file = t[o] } else { t.components[o].position = t[o] } delete t[o] } else { if (!t.components[o]) { t.components[o] = {} } e.utils.extend(t.components[o], t[o]); delete t[o] } } if (typeof t[o + "size"] != "undefined") { if (!t.components[o]) { t.components[o] = {} } t.components[o].size = t[o + "size"]; delete t[o + "size"] } } if (typeof t.icons != "undefined") { if (!t.components.display) { t.components.display = {} } t.components.display.icons = t.icons; delete t.icons } for (var n in a) { if (t[n]) { if (!t[a[n]]) { t[a[n]] = t[n] } delete t[n] } } var m; if (t.flashplayer && !t.modes) { m = h(); m[0].src = t.flashplayer; delete t.flashplayer } else { if (t.modes) { if (typeof t.modes == "string") { m = h(); m[0].src = t.modes } else { if (t.modes instanceof Array) { m = t.modes } else { if (typeof t.modes == "object" && t.modes.type) { m = [t.modes] } } } delete t.modes } else { m = h() } } t.modes = m; if (r) { t.playlist = r } return t } })(jwplayer); (function (a) { a.embed.download = function (c, g, b, d, f) { this.embed = function () { var k = a.utils.extend({}, b); var q = {}; var j = b.width ? b.width : 480; if (typeof j != "number") { j = parseInt(j, 10) } var m = b.height ? b.height : 320; if (typeof m != "number") { m = parseInt(m, 10) } var u, o, n; var s = {}; if (b.playlist && b.playlist.length) { s.file = b.playlist[0].file; o = b.playlist[0].image; s.levels = b.playlist[0].levels } else { s.file = b.file; o = b.image; s.levels = b.levels } if (s.file) { u = s.file } else { if (s.levels && s.levels.length) { u = s.levels[0].file } } n = u ? "pointer" : "auto"; var l = { display: { style: { cursor: n, width: j, height: m, backgroundColor: "#000", position: "relative", textDecoration: "none", border: "none", display: "block"} }, display_icon: { style: { cursor: n, position: "absolute", display: u ? "block" : "none", top: 0, left: 0, border: 0, margin: 0, padding: 0, zIndex: 3, width: 50, height: 50, backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"} }, display_iconBackground: { style: { cursor: n, position: "absolute", display: u ? "block" : "none", top: ((m - 50) / 2), left: ((j - 50) / 2), border: 0, width: 50, height: 50, margin: 0, padding: 0, zIndex: 2, backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"} }, display_image: { style: { width: j, height: m, display: o ? "block" : "none", position: "absolute", cursor: n, left: 0, top: 0, margin: 0, padding: 0, textDecoration: "none", zIndex: 1, border: "none"}} }; var h = function (v, x, y) { var w = document.createElement(v); if (y) { w.id = y } else { w.id = c.id + "_jwplayer_" + x } a.utils.css(w, l[x].style); return w }; q.display = h("a", "display", c.id); if (u) { q.display.setAttribute("href", a.utils.getAbsolutePath(u)) } q.display_image = h("img", "display_image"); q.display_image.setAttribute("alt", "Click to download..."); if (o) { q.display_image.setAttribute("src", a.utils.getAbsolutePath(o)) } if (true) { q.display_icon = h("div", "display_icon"); q.display_iconBackground = h("div", "display_iconBackground"); q.display.appendChild(q.display_image); q.display_iconBackground.appendChild(q.display_icon); q.display.appendChild(q.display_iconBackground) } _css = a.utils.css; _hide = function (v) { _css(v, { display: "none" }) }; function r(v) { _imageWidth = q.display_image.naturalWidth; _imageHeight = q.display_image.naturalHeight; t() } function t() { a.utils.stretch(a.utils.stretching.UNIFORM, q.display_image, j, m, _imageWidth, _imageHeight) } q.display_image.onerror = function (v) { _hide(q.display_image) }; q.display_image.onload = r; c.parentNode.replaceChild(q.display, c); var p = (b.plugins && b.plugins.logo) ? b.plugins.logo : {}; q.display.appendChild(new a.embed.logo(b.components.logo, "download", c.id)); f.container = document.getElementById(f.id); f.setPlayer(q.display, "download") }; this.supportsConfig = function () { if (b) { var j = a.utils.getFirstPlaylistItemFromConfig(b); if (typeof j.file == "undefined" && typeof j.levels == "undefined") { return true } else { if (j.file) { return e(j.file, j.provider, j.playlistfile) } else { if (j.levels && j.levels.length) { for (var h = 0; h < j.levels.length; h++) { if (j.levels[h].file && e(j.levels[h].file, j.provider, j.playlistfile)) { return true } } } } } } else { return true } }; function e(j, l, h) { if (h) { return false } var k = ["image", "sound", "youtube", "http"]; if (l && (k.toString().indexOf(l) > -1)) { return true } if (!l || (l && l == "video")) { var m = a.utils.extension(j); if (m && a.utils.extensionmap[m]) { return true } } return false } } })(jwplayer); (function (a) { a.embed.flash = function (f, g, l, e, j) { function m(o, n, p) { var q = document.createElement("param"); q.setAttribute("name", n); q.setAttribute("value", p); o.appendChild(q) } function k(o, p, n) { return function (q) { if (n) { document.getElementById(j.id + "_wrapper").appendChild(p) } var s = document.getElementById(j.id).getPluginConfig("display"); o.resize(s.width, s.height); var r = { left: s.x, top: s.y }; a.utils.css(p, r) } } function d(p) { if (!p) { return {} } var r = {}; for (var o in p) { var n = p[o]; for (var q in n) { r[o + "." + q] = n[q] } } return r } function h(q, p) { if (q[p]) { var s = q[p]; for (var o in s) { var n = s[o]; if (typeof n == "string") { if (!q[o]) { q[o] = n } } else { for (var r in n) { if (!q[o + "." + r]) { q[o + "." + r] = n[r] } } } } delete q[p] } } function b(q) { if (!q) { return {} } var t = {}, s = []; for (var n in q) { var p = a.utils.getPluginName(n); var o = q[n]; s.push(n); for (var r in o) { t[p + "." + r] = o[r] } } t.plugins = s.join(","); return t } function c(p) { var n = p.netstreambasepath ? "" : "netstreambasepath=" + encodeURIComponent(window.location.href.split("#")[0]) + "&"; for (var o in p) { if (typeof (p[o]) == "object") { n += o + "=" + encodeURIComponent("[[JSON]]" + a.utils.strings.jsonToString(p[o])) + "&" } else { n += o + "=" + encodeURIComponent(p[o]) + "&" } } return n.substring(0, n.length - 1) } this.embed = function () { l.id = j.id; var y; var q = a.utils.extend({}, l); var n = q.width; var w = q.height; if (f.id + "_wrapper" == f.parentNode.id) { y = document.getElementById(f.id + "_wrapper") } else { y = document.createElement("div"); y.id = f.id + "_wrapper"; a.utils.wrap(f, y); a.utils.css(y, { position: "relative", width: n, height: w }) } var o = e.setupPlugins(j, q, k); if (o.length > 0) { a.utils.extend(q, b(o.plugins)) } else { delete q.plugins } var r = ["height", "width", "modes", "events"]; for (var u = 0; u < r.length; u++) { delete q[r[u]] } var p = "opaque"; if (q.wmode) { p = q.wmode } h(q, "components"); h(q, "providers"); if (typeof q["dock.position"] != "undefined") { if (q["dock.position"].toString().toLowerCase() == "false") { q.dock = q["dock.position"]; delete q["dock.position"] } } var x = "#000000"; var t; if (a.utils.isIE()) { var v = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="' + x + '" width="100%" height="100%" id="' + f.id + '" name="' + f.id + '" tabindex=0"">'; v += '<param name="movie" value="' + g.src + '">'; v += '<param name="allowfullscreen" value="true">'; v += '<param name="allowscriptaccess" value="always">'; v += '<param name="seamlesstabbing" value="true">'; v += '<param name="wmode" value="' + p + '">'; v += '<param name="flashvars" value="' + c(q) + '">'; v += "</object>"; a.utils.setOuterHTML(f, v); t = document.getElementById(f.id) } else { var s = document.createElement("object"); s.setAttribute("type", "application/x-shockwave-flash"); s.setAttribute("data", g.src); s.setAttribute("width", "100%"); s.setAttribute("height", "100%"); s.setAttribute("bgcolor", "#000000"); s.setAttribute("id", f.id); s.setAttribute("name", f.id); s.setAttribute("tabindex", 0); m(s, "allowfullscreen", "true"); m(s, "allowscriptaccess", "always"); m(s, "seamlesstabbing", "true"); m(s, "wmode", p); m(s, "flashvars", c(q)); f.parentNode.replaceChild(s, f); t = s } j.container = t; j.setPlayer(t, "flash") }; this.supportsConfig = function () { if (a.utils.hasFlash()) { if (l) { var o = a.utils.getFirstPlaylistItemFromConfig(l); if (typeof o.file == "undefined" && typeof o.levels == "undefined") { return true } else { if (o.file) { return flashCanPlay(o.file, o.provider) } else { if (o.levels && o.levels.length) { for (var n = 0; n < o.levels.length; n++) { if (o.levels[n].file && flashCanPlay(o.levels[n].file, o.provider)) { return true } } } } } } else { return true } } return false }; flashCanPlay = function (n, p) { var o = ["video", "http", "sound", "image"]; if (p && (o.toString().indexOf(p < 0))) { return true } var q = a.utils.extension(n); if (!q) { return true } if (a.utils.exists(a.utils.extensionmap[q]) && !a.utils.exists(a.utils.extensionmap[q].flash)) { return false } return true } } })(jwplayer); (function (a) { a.embed.html5 = function (c, g, b, d, f) { function e(j, k, h) { return function (l) { var m = document.getElementById(c.id + "_displayarea"); if (h) { m.appendChild(k) } var n = m.style; j.resize(parseInt(n.width.replace("px", "")), parseInt(n.height.replace("px", ""))); k.left = n.left; k.top = n.top } } this.embed = function () { if (a.html5) { d.setupPlugins(f, b, e); c.innerHTML = ""; var j = a.utils.extend({ screencolor: "0x000000" }, b); var h = ["plugins", "modes", "events"]; for (var k = 0; k < h.length; k++) { delete j[h[k]] } if (j.levels && !j.sources) { j.sources = b.levels } if (j.skin && j.skin.toLowerCase().indexOf(".zip") > 0) { j.skin = j.skin.replace(/\.zip/i, ".xml") } var l = new (a.html5(c)).setup(j); f.container = document.getElementById(f.id); f.setPlayer(l, "html5") } else { return null } }; this.supportsConfig = function () { if (!!a.vid.canPlayType) { if (b) { var j = a.utils.getFirstPlaylistItemFromConfig(b); if (typeof j.file == "undefined" && typeof j.levels == "undefined") { return true } else { if (j.file) { return html5CanPlay(a.vid, j.file, j.provider, j.playlistfile) } else { if (j.levels && j.levels.length) { for (var h = 0; h < j.levels.length; h++) { if (j.levels[h].file && html5CanPlay(a.vid, j.levels[h].file, j.provider, j.playlistfile)) { return true } } } } } } else { return true } } return false }; html5CanPlay = function (k, j, l, h) { if (h) { return false } if (l && l == "youtube") { return true } if (l && l != "video" && l != "http" && l != "sound") { return false } var m = a.utils.extension(j); if (!a.utils.exists(m) || !a.utils.exists(a.utils.extensionmap[m])) { return true } if (!a.utils.exists(a.utils.extensionmap[m].html5)) { return false } if (a.utils.isLegacyAndroid() && m.match(/m4v|mp4/)) { return true } return browserCanPlay(k, a.utils.extensionmap[m].html5) }; browserCanPlay = function (j, h) { if (!h) { return true } if (j.canPlayType(h)) { return true } else { if (h == "audio/mp3" && navigator.userAgent.match(/safari/i)) { return j.canPlayType("audio/mpeg") } else { return false } } } } })(jwplayer); (function (a) { a.embed.logo = function (m, l, d) { var j = { prefix: "http://l.longtailvideo.com/" + l + "/", file: "", link: "", margin: 8, out: 0.5, over: 1, timeout: 5, hide: false, position: "bottom-left" }; _css = a.utils.css; var b; var h; k(); function k() { o(); c(); f() } function o() { if (j.prefix) { var q = a.version.split(/\W/).splice(0, 2).join("/"); if (j.prefix.indexOf(q) < 0) { j.prefix += q + "/" } } h = a.utils.extend({}, j, m) } function p() { var s = { border: "none", textDecoration: "none", position: "absolute", cursor: "pointer", zIndex: 10 }; s.display = h.hide ? "none" : "block"; var r = h.position.toLowerCase().split("-"); for (var q in r) { s[r[q]] = h.margin } return s } function c() { b = document.createElement("img"); b.id = d + "_jwplayer_logo"; b.style.display = "none"; b.onload = function (q) { _css(b, p()); e() }; if (!h.file) { return } if (h.file.indexOf("http://") === 0) { b.src = h.file } else { b.src = h.prefix + h.file } } if (!h.file) { return } function f() { if (h.link) { b.onmouseover = g; b.onmouseout = e; b.onclick = n } else { this.mouseEnabled = false } } function n(q) { if (typeof q != "undefined") { q.preventDefault(); q.stopPropagation() } if (h.link) { window.open(h.link, "_blank") } return } function e(q) { if (h.link) { b.style.opacity = h.out } return } function g(q) { if (h.hide) { b.style.opacity = h.over } return } return b } })(jwplayer); (function (a) { a.html5 = function (b) { var c = b; this.setup = function (d) { a.utils.extend(this, new a.html5.api(c, d)); return this }; return this } })(jwplayer); (function (b) { var d = b.utils; var c = d.css; b.html5.view = function (r, q, f) { var u = r; var n = q; var x = f; var w; var g; var C; var s; var D; var p; var A; function z() { w = document.createElement("div"); w.id = n.id; w.className = n.className; _videowrapper = document.createElement("div"); _videowrapper.id = w.id + "_video_wrapper"; n.id = w.id + "_video"; c(w, { position: "relative", height: x.height, width: x.width, padding: 0, backgroundColor: E(), zIndex: 0 }); function E() { if (u.skin.getComponentSettings("display") && u.skin.getComponentSettings("display").backgroundcolor) { return u.skin.getComponentSettings("display").backgroundcolor } return parseInt("000000", 16) } c(n, { width: x.width, height: x.height, top: 0, left: 0, zIndex: 1, margin: "auto", display: "block" }); c(_videowrapper, { overflow: "hidden", position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }); d.wrap(n, w); d.wrap(n, _videowrapper); s = document.createElement("div"); s.id = w.id + "_displayarea"; w.appendChild(s) } function k() { for (var E = 0; E < x.plugins.order.length; E++) { var F = x.plugins.order[E]; if (d.exists(x.plugins.object[F].getDisplayElement)) { x.plugins.object[F].height = d.parseDimension(x.plugins.object[F].getDisplayElement().style.height); x.plugins.object[F].width = d.parseDimension(x.plugins.object[F].getDisplayElement().style.width); x.plugins.config[F].currentPosition = x.plugins.config[F].position } } v() } function m(E) { c(s, { display: x.getMedia().hasChrome() ? "none" : "block" }) } function v(F) { var H = x.getMedia() ? x.getMedia().getDisplayElement() : null; if (d.exists(H)) { if (A != H) { if (A && A.parentNode) { A.parentNode.replaceChild(H, A) } A = H } for (var E = 0; E < x.plugins.order.length; E++) { var G = x.plugins.order[E]; if (d.exists(x.plugins.object[G].getDisplayElement)) { x.plugins.config[G].currentPosition = x.plugins.config[G].position } } } j(x.width, x.height) } this.setup = function () { if (x && x.getMedia()) { n = x.getMedia().getDisplayElement() } z(); k(); u.jwAddEventListener(b.api.events.JWPLAYER_PLAYER_STATE, m); u.jwAddEventListener(b.api.events.JWPLAYER_MEDIA_LOADED, v); u.jwAddEventListener(b.api.events.JWPLAYER_MEDIA_META, function () { y() }); var E; if (d.exists(window.onresize)) { E = window.onresize } window.onresize = function (F) { if (d.exists(E)) { try { E(F) } catch (H) { } } if (u.jwGetFullscreen()) { var G = document.body.getBoundingClientRect(); x.width = Math.abs(G.left) + Math.abs(G.right); x.height = window.innerHeight } j(x.width, x.height) } }; function h(E) { switch (E.keyCode) { case 27: if (u.jwGetFullscreen()) { u.jwSetFullscreen(false) } break; case 32: if (u.jwGetState() != b.api.events.state.IDLE && u.jwGetState() != b.api.events.state.PAUSED) { u.jwPause() } else { u.jwPlay() } break } } function j(H, E) { if (w.style.display == "none") { return } var G = [].concat(x.plugins.order); G.reverse(); D = G.length + 2; if (!x.fullscreen) { x.width = H; x.height = E; g = H; C = E; c(s, { top: 0, bottom: 0, left: 0, right: 0, width: H, height: E, position: "relative" }); c(w, { height: C, width: g }); var F = o(t, G); if (F.length > 0) { D += F.length; var J = F.indexOf("playlist"), I = F.indexOf("controlbar"); if (J >= 0 && I >= 0) { F[J] = F.splice(I, 1, F[J])[0] } o(l, F, true) } } else { if (!(navigator && navigator.vendor && navigator.vendor.indexOf("Apple") == 0)) { o(B, G, true) } } y() } function o(J, G, H) { var F = []; for (var E = 0; E < G.length; E++) { var K = G[E]; if (d.exists(x.plugins.object[K].getDisplayElement)) { if (x.plugins.config[K].currentPosition != b.html5.view.positions.NONE) { var I = J(K, D--); if (!I) { F.push(K) } else { x.plugins.object[K].resize(I.width, I.height); if (H) { delete I.width; delete I.height } c(x.plugins.object[K].getDisplayElement(), I) } } else { c(x.plugins.object[K].getDisplayElement(), { display: "none" }) } } } return F } function t(F, G) { if (d.exists(x.plugins.object[F].getDisplayElement)) { if (x.plugins.config[F].position && a(x.plugins.config[F].position)) { if (!d.exists(x.plugins.object[F].getDisplayElement().parentNode)) { w.appendChild(x.plugins.object[F].getDisplayElement()) } var E = e(F); E.zIndex = G; return E } } return false } function l(G, H) { if (!d.exists(x.plugins.object[G].getDisplayElement().parentNode)) { s.appendChild(x.plugins.object[G].getDisplayElement()) } var E = x.width, F = x.height; if (typeof x.width == "string" && x.width.lastIndexOf("%") > -1) { percentage = parseFloat(x.width.substring(0, x.width.lastIndexOf("%"))) / 100; E = Math.round(window.innerWidth * percentage) } if (typeof x.height == "string" && x.height.lastIndexOf("%") > -1) { percentage = parseFloat(x.height.substring(0, x.height.lastIndexOf("%"))) / 100; F = Math.round(window.innerHeight * percentage) } return { position: "absolute", width: (E - d.parseDimension(s.style.left) - d.parseDimension(s.style.right)), height: (F - d.parseDimension(s.style.top) - d.parseDimension(s.style.bottom)), zIndex: H} } function B(E, F) { return { position: "fixed", width: x.width, height: x.height, zIndex: F} } function y() { if (!d.exists(x.getMedia())) { return } s.style.position = "absolute"; var H = x.getMedia().getDisplayElement(); if (H && H.tagName.toLowerCase() == "video") { H.style.position = "absolute"; var E, I; if (s.style.width.toString().lastIndexOf("%") > -1 || s.style.width.toString().lastIndexOf("%") > -1) { var F = s.getBoundingClientRect(); E = Math.abs(F.left) + Math.abs(F.right); I = Math.abs(F.top) + Math.abs(F.bottom) } else { E = d.parseDimension(s.style.width); I = d.parseDimension(s.style.height) } if (H.parentNode) { H.parentNode.style.left = s.style.left; H.parentNode.style.top = s.style.top } d.stretch(u.jwGetStretching(), H, E, I, H.videoWidth ? H.videoWidth : 400, H.videoHeight ? H.videoHeight : 300) } else { var G = x.plugins.object.display.getDisplayElement(); if (G) { x.getMedia().resize(d.parseDimension(G.style.width), d.parseDimension(G.style.height)) } else { x.getMedia().resize(d.parseDimension(s.style.width), d.parseDimension(s.style.height)) } } } function e(F) { var G = { position: "absolute", margin: 0, padding: 0, top: null }; var E = x.plugins.config[F].currentPosition.toLowerCase(); switch (E.toUpperCase()) { case b.html5.view.positions.TOP: G.top = d.parseDimension(s.style.top); G.left = d.parseDimension(s.style.left); G.width = g - d.parseDimension(s.style.left) - d.parseDimension(s.style.right); G.height = x.plugins.object[F].height; s.style[E] = d.parseDimension(s.style[E]) + x.plugins.object[F].height + "px"; s.style.height = d.parseDimension(s.style.height) - G.height + "px"; break; case b.html5.view.positions.RIGHT: G.top = d.parseDimension(s.style.top); G.right = d.parseDimension(s.style.right); G.width = x.plugins.object[F].width; G.height = C - d.parseDimension(s.style.top) - d.parseDimension(s.style.bottom); s.style[E] = d.parseDimension(s.style[E]) + x.plugins.object[F].width + "px"; s.style.width = d.parseDimension(s.style.width) - G.width + "px"; break; case b.html5.view.positions.BOTTOM: G.bottom = d.parseDimension(s.style.bottom); G.left = d.parseDimension(s.style.left); G.width = g - d.parseDimension(s.style.left) - d.parseDimension(s.style.right); G.height = x.plugins.object[F].height; s.style[E] = d.parseDimension(s.style[E]) + x.plugins.object[F].height + "px"; s.style.height = d.parseDimension(s.style.height) - G.height + "px"; break; case b.html5.view.positions.LEFT: G.top = d.parseDimension(s.style.top); G.left = d.parseDimension(s.style.left); G.width = x.plugins.object[F].width; G.height = C - d.parseDimension(s.style.top) - d.parseDimension(s.style.bottom); s.style[E] = d.parseDimension(s.style[E]) + x.plugins.object[F].width + "px"; s.style.width = d.parseDimension(s.style.width) - G.width + "px"; break; default: break } return G } this.resize = j; this.fullscreen = function (H) { if (navigator && navigator.vendor && navigator.vendor.indexOf("Apple") === 0) { if (x.getMedia().getDisplayElement().webkitSupportsFullscreen) { if (H) { try { x.getMedia().getDisplayElement().webkitEnterFullscreen() } catch (G) { } } else { try { x.getMedia().getDisplayElement().webkitExitFullscreen() } catch (G) { } } } } else { if (H) { document.onkeydown = h; clearInterval(p); var F = document.body.getBoundingClientRect(); x.width = Math.abs(F.left) + Math.abs(F.right); x.height = window.innerHeight; var E = { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: 2147483000 }; c(w, E); E.zIndex = 1; if (x.getMedia() && x.getMedia().getDisplayElement()) { c(x.getMedia().getDisplayElement(), E) } E.zIndex = 2; c(s, E) } else { document.onkeydown = ""; x.width = g; x.height = C; c(w, { position: "relative", height: x.height, width: x.width, zIndex: 0 }) } j(x.width, x.height) } } }; function a(e) { return ([b.html5.view.positions.TOP, b.html5.view.positions.RIGHT, b.html5.view.positions.BOTTOM, b.html5.view.positions.LEFT].toString().indexOf(e.toUpperCase()) > -1) } b.html5.view.positions = { TOP: "TOP", RIGHT: "RIGHT", BOTTOM: "BOTTOM", LEFT: "LEFT", OVER: "OVER", NONE: "NONE"} })(jwplayer); (function (a) { var b = { backgroundcolor: "", margin: 10, font: "Arial,sans-serif", fontsize: 10, fontcolor: parseInt("000000", 16), fontstyle: "normal", fontweight: "bold", buttoncolor: parseInt("ffffff", 16), position: a.html5.view.positions.BOTTOM, idlehide: false, layout: { left: { position: "left", elements: [{ name: "play", type: "button" }, { name: "divider", type: "divider" }, { name: "prev", type: "button" }, { name: "divider", type: "divider" }, { name: "next", type: "button" }, { name: "divider", type: "divider" }, { name: "elapsed", type: "text"}] }, center: { position: "center", elements: [{ name: "time", type: "slider"}] }, right: { position: "right", elements: [{ name: "duration", type: "text" }, { name: "blank", type: "button" }, { name: "divider", type: "divider" }, { name: "mute", type: "button" }, { name: "volume", type: "slider" }, { name: "divider", type: "divider" }, { name: "fullscreen", type: "button"}]}} }; _utils = a.utils; _css = _utils.css; _hide = function (c) { _css(c, { display: "none" }) }; _show = function (c) { _css(c, { display: "block" }) }; a.html5.controlbar = function (l, V) { var k = l; var D = _utils.extend({}, b, k.skin.getComponentSettings("controlbar"), V); if (D.position == a.html5.view.positions.NONE || typeof a.html5.view.positions[D.position] == "undefined") { return } if (_utils.mapLength(k.skin.getComponentLayout("controlbar")) > 0) { D.layout = k.skin.getComponentLayout("controlbar") } var ac; var P; var ab; var E; var v = "none"; var g; var j; var ad; var f; var e; var y; var Q = {}; var p = false; var c = {}; var Y; var h = false; var o; var d; var S = false; var G = false; var W = new a.html5.eventdispatcher(); _utils.extend(this, W); function J() { if (!Y) { Y = k.skin.getSkinElement("controlbar", "background"); if (!Y) { Y = { width: 0, height: 0, src: null} } } return Y } function N() { ab = 0; E = 0; P = 0; if (!p) { var ak = { height: J().height, backgroundColor: D.backgroundcolor }; ac = document.createElement("div"); ac.id = k.id + "_jwplayer_controlbar"; _css(ac, ak) } var aj = (k.skin.getSkinElement("controlbar", "capLeft")); var ai = (k.skin.getSkinElement("controlbar", "capRight")); if (aj) { x("capLeft", "left", false, ac) } var al = { position: "absolute", height: J().height, left: (aj ? aj.width : 0), zIndex: 0 }; Z("background", ac, al, "img"); if (J().src) { Q.background.src = J().src } al.zIndex = 1; Z("elements", ac, al); if (ai) { x("capRight", "right", false, ac) } } this.getDisplayElement = function () { return ac }; this.resize = function (ak, ai) { _utils.cancelAnimation(ac); document.getElementById(k.id).onmousemove = A; e = ak; y = ai; if (G != k.jwGetFullscreen()) { G = k.jwGetFullscreen(); d = undefined } var aj = w(); A(); I({ id: k.id, duration: ad, position: j }); u({ id: k.id, bufferPercent: f }); return aj }; this.show = function () { if (h) { h = false; _show(ac); T() } }; this.hide = function () { if (!h) { h = true; _hide(ac); aa() } }; function q() { var aj = ["timeSlider", "volumeSlider", "timeSliderRail", "volumeSliderRail"]; for (var ak in aj) { var ai = aj[ak]; if (typeof Q[ai] != "undefined") { c[ai] = Q[ai].getBoundingClientRect() } } } function A(ai) { if (h) { return } if (D.position == a.html5.view.positions.OVER || k.jwGetFullscreen()) { clearTimeout(o); switch (k.jwGetState()) { case a.api.events.state.PAUSED: case a.api.events.state.IDLE: if (!D.idlehide || _utils.exists(ai)) { U() } if (D.idlehide) { o = setTimeout(function () { z() }, 2000) } break; default: if (ai) { U() } o = setTimeout(function () { z() }, 2000); break } } } function z(ai) { aa(); _utils.cancelAnimation(ac); _utils.fadeTo(ac, 0, 0.1, 1, 0) } function U() { T(); _utils.cancelAnimation(ac); _utils.fadeTo(ac, 1, 0, 1, 0) } function H(ai) { return function () { if (S && d != ai) { d = ai; W.sendEvent(ai, { component: "controlbar", boundingRect: O() }) } } } var T = H(a.api.events.JWPLAYER_COMPONENT_SHOW); var aa = H(a.api.events.JWPLAYER_COMPONENT_HIDE); function O() { if (D.position == a.html5.view.positions.OVER || k.jwGetFullscreen()) { return _utils.getDimensions(ac) } else { return { x: 0, y: 0, width: 0, height: 0} } } function Z(am, al, ak, ai) { var aj; if (!p) { if (!ai) { ai = "div" } aj = document.createElement(ai); Q[am] = aj; aj.id = ac.id + "_" + am; al.appendChild(aj) } else { aj = document.getElementById(ac.id + "_" + am) } if (_utils.exists(ak)) { _css(aj, ak) } return aj } function M() { ah(D.layout.left); ah(D.layout.right, -1); ah(D.layout.center) } function ah(al, ai) { var am = al.position == "right" ? "right" : "left"; var ak = _utils.extend([], al.elements); if (_utils.exists(ai)) { ak.reverse() } for (var aj = 0; aj < ak.length; aj++) { C(ak[aj], am) } } function K() { return P++ } function C(am, ao) { var al, aj, ak, ai, aq; if (am.type == "divider") { x("divider" + K(), ao, true, undefined, undefined, am.width, am.element); return } switch (am.name) { case "play": x("playButton", ao, false); x("pauseButton", ao, true); R("playButton", "jwPlay"); R("pauseButton", "jwPause"); break; case "prev": x("prevButton", ao, true); R("prevButton", "jwPlaylistPrev"); break; case "stop": x("stopButton", ao, true); R("stopButton", "jwStop"); break; case "next": x("nextButton", ao, true); R("nextButton", "jwPlaylistNext"); break; case "elapsed": x("elapsedText", ao, true); break; case "time": aj = !_utils.exists(k.skin.getSkinElement("controlbar", "timeSliderCapLeft")) ? 0 : k.skin.getSkinElement("controlbar", "timeSliderCapLeft").width; ak = !_utils.exists(k.skin.getSkinElement("controlbar", "timeSliderCapRight")) ? 0 : k.skin.getSkinElement("controlbar", "timeSliderCapRight").width; al = ao == "left" ? aj : ak; ai = k.skin.getSkinElement("controlbar", "timeSliderRail").width + aj + ak; aq = { height: J().height, position: "absolute", top: 0, width: ai }; aq[ao] = ao == "left" ? ab : E; var an = Z("timeSlider", Q.elements, aq); x("timeSliderCapLeft", ao, true, an, ao == "left" ? 0 : al); x("timeSliderRail", ao, false, an, al); x("timeSliderBuffer", ao, false, an, al); x("timeSliderProgress", ao, false, an, al); x("timeSliderThumb", ao, false, an, al); x("timeSliderCapRight", ao, true, an, ao == "right" ? 0 : al); X("time"); break; case "fullscreen": x("fullscreenButton", ao, false); x("normalscreenButton", ao, true); R("fullscreenButton", "jwSetFullscreen", true); R("normalscreenButton", "jwSetFullscreen", false); break; case "volume": aj = !_utils.exists(k.skin.getSkinElement("controlbar", "volumeSliderCapLeft")) ? 0 : k.skin.getSkinElement("controlbar", "volumeSliderCapLeft").width; ak = !_utils.exists(k.skin.getSkinElement("controlbar", "volumeSliderCapRight")) ? 0 : k.skin.getSkinElement("controlbar", "volumeSliderCapRight").width; al = ao == "left" ? aj : ak; ai = k.skin.getSkinElement("controlbar", "volumeSliderRail").width + aj + ak; aq = { height: J().height, position: "absolute", top: 0, width: ai }; aq[ao] = ao == "left" ? ab : E; var ap = Z("volumeSlider", Q.elements, aq); x("volumeSliderCapLeft", ao, true, ap, ao == "left" ? 0 : al); x("volumeSliderRail", ao, true, ap, al); x("volumeSliderProgress", ao, false, ap, al); x("volumeSliderCapRight", ao, true, ap, ao == "right" ? 0 : al); X("volume"); break; case "mute": x("muteButton", ao, false); x("unmuteButton", ao, true); R("muteButton", "jwSetMute", true); R("unmuteButton", "jwSetMute", false); break; case "duration": x("durationText", ao, true); break } } function x(al, ao, aj, ar, am, ai, ak) { if (_utils.exists(k.skin.getSkinElement("controlbar", al)) || al.indexOf("Text") > 0 || al.indexOf("divider") === 0) { var an = { height: J().height, position: "absolute", display: "block", top: 0 }; if ((al.indexOf("next") === 0 || al.indexOf("prev") === 0) && k.jwGetPlaylist().length < 2) { aj = false; an.display = "none" } var at; if (al.indexOf("Text") > 0) { al.innerhtml = "00:00"; an.font = D.fontsize + "px/" + (J().height + 1) + "px " + D.font; an.color = D.fontcolor; an.textAlign = "center"; an.fontWeight = D.fontweight; an.fontStyle = D.fontstyle; an.cursor = "default"; at = 14 + 3 * D.fontsize } else { if (al.indexOf("divider") === 0) { if (ai) { if (!isNaN(parseInt(ai))) { at = parseInt(ai) } } else { if (ak) { var ap = k.skin.getSkinElement("controlbar", ak); if (ap) { an.background = "url(" + ap.src + ") repeat-x center left"; at = ap.width } } else { an.background = "url(" + k.skin.getSkinElement("controlbar", "divider").src + ") repeat-x center left"; at = k.skin.getSkinElement("controlbar", "divider").width } } } else { an.background = "url(" + k.skin.getSkinElement("controlbar", al).src + ") repeat-x center left"; at = k.skin.getSkinElement("controlbar", al).width } } if (ao == "left") { an.left = isNaN(am) ? ab : am; if (aj) { ab += at } } else { if (ao == "right") { an.right = isNaN(am) ? E : am; if (aj) { E += at } } } if (_utils.typeOf(ar) == "undefined") { ar = Q.elements } an.width = at; if (p) { _css(Q[al], an) } else { var aq = Z(al, ar, an); if (_utils.exists(k.skin.getSkinElement("controlbar", al + "Over"))) { aq.onmouseover = function (au) { aq.style.backgroundImage = ["url(", k.skin.getSkinElement("controlbar", al + "Over").src, ")"].join("") }; aq.onmouseout = function (au) { aq.style.backgroundImage = ["url(", k.skin.getSkinElement("controlbar", al).src, ")"].join("") } } } } } function F() { k.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, B); k.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM, s); k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_BUFFER, u); k.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, r); k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_TIME, I); k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE, ag); k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_VOLUME, m); k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_COMPLETE, L) } function B() { N(); M(); w(); ae() } function s(ai) { ad = k.jwGetPlaylist()[ai.index].duration; I({ id: k.id, duration: ad, position: 0 }); u({ id: k.id, bufferProgress: 0 }) } function ae() { I({ id: k.id, duration: k.jwGetDuration(), position: 0 }); u({ id: k.id, bufferProgress: 0 }); ag({ id: k.id, mute: k.jwGetMute() }); r({ id: k.id, newstate: a.api.events.state.IDLE }); m({ id: k.id, volume: k.jwGetVolume() }) } function R(ak, al, aj) { if (p) { return } if (_utils.exists(k.skin.getSkinElement("controlbar", ak))) { var ai = Q[ak]; if (_utils.exists(ai)) { _css(ai, { cursor: "pointer" }); if (al == "fullscreen") { ai.onmouseup = function (am) { am.stopPropagation(); k.jwSetFullscreen(!k.jwGetFullscreen()) } } else { ai.onmouseup = function (am) { am.stopPropagation(); if (_utils.exists(aj)) { k[al](aj) } else { k[al]() } } } } } } function X(ai) { if (p) { return } var aj = Q[ai + "Slider"]; _css(Q.elements, { cursor: "pointer" }); _css(aj, { cursor: "pointer" }); aj.onmousedown = function (ak) { v = ai }; aj.onmouseup = function (ak) { ak.stopPropagation(); af(ak.pageX) }; aj.onmousemove = function (ak) { if (v == "time") { g = true; var al = ak.pageX - c[ai + "Slider"].left - window.pageXOffset; _css(Q.timeSliderThumb, { left: al }) } } } function af(aj) { g = false; var ai; if (v == "time") { ai = aj - c.timeSliderRail.left + window.pageXOffset; var al = ai / c.timeSliderRail.width * ad; if (al < 0) { al = 0 } else { if (al > ad) { al = ad - 3 } } if (k.jwGetState() == a.api.events.state.PAUSED || k.jwGetState() == a.api.events.state.IDLE) { k.jwPlay() } k.jwSeek(al) } else { if (v == "volume") { ai = aj - c.volumeSliderRail.left - window.pageXOffset; var ak = Math.round(ai / c.volumeSliderRail.width * 100); if (ak < 0) { ak = 0 } else { if (ak > 100) { ak = 100 } } if (k.jwGetMute()) { k.jwSetMute(false) } k.jwSetVolume(ak) } } v = "none" } function u(aj) { if (_utils.exists(aj.bufferPercent)) { f = aj.bufferPercent } if (c.timeSliderRail) { var ak = c.timeSliderRail.width; var ai = isNaN(Math.round(ak * f / 100)) ? 0 : Math.round(ak * f / 100); _css(Q.timeSliderBuffer, { width: ai }) } } function ag(ai) { if (ai.mute) { _hide(Q.muteButton); _show(Q.unmuteButton); _hide(Q.volumeSliderProgress) } else { _show(Q.muteButton); _hide(Q.unmuteButton); _show(Q.volumeSliderProgress) } } function r(ai) { if (ai.newstate == a.api.events.state.BUFFERING || ai.newstate == a.api.events.state.PLAYING) { _show(Q.pauseButton); _hide(Q.playButton) } else { _hide(Q.pauseButton); _show(Q.playButton) } A(); if (ai.newstate == a.api.events.state.IDLE) { _hide(Q.timeSliderBuffer); _hide(Q.timeSliderProgress); _hide(Q.timeSliderThumb); I({ id: k.id, duration: k.jwGetDuration(), position: 0 }) } else { _show(Q.timeSliderBuffer); if (ai.newstate != a.api.events.state.BUFFERING) { _show(Q.timeSliderProgress); _show(Q.timeSliderThumb) } } } function L(ai) { u({ bufferPercent: 0 }); I(_utils.extend(ai, { position: 0, duration: ad })) } function I(al) { if (_utils.exists(al.position)) { j = al.position } if (_utils.exists(al.duration)) { ad = al.duration } var aj = (j === ad === 0) ? 0 : j / ad; var am = c.timeSliderRail; if (am) { var ai = isNaN(Math.round(am.width * aj)) ? 0 : Math.round(am.width * aj); var ak = ai; if (Q.timeSliderProgress) { Q.timeSliderProgress.style.width = ai + "px"; if (!g) { if (Q.timeSliderThumb) { Q.timeSliderThumb.style.left = ak + "px" } } } } if (Q.durationText) { Q.durationText.innerHTML = _utils.timeFormat(ad) } if (Q.elapsedText) { Q.elapsedText.innerHTML = _utils.timeFormat(j) } } function n() { var am, aj; var ak = document.getElementById(ac.id + "_elements"); if (!ak) { return } var al = ak.childNodes; for (var ai in ak.childNodes) { if (isNaN(parseInt(ai, 10))) { continue } if (al[ai].id.indexOf(ac.id + "_divider") === 0 && aj && aj.id.indexOf(ac.id + "_divider") === 0 && al[ai].style.backgroundImage == aj.style.backgroundImage) { al[ai].style.display = "none" } else { if (al[ai].id.indexOf(ac.id + "_divider") === 0 && am && am.style.display != "none") { al[ai].style.display = "block" } } if (al[ai].style.display != "none") { aj = al[ai] } am = al[ai] } } function w() { n(); if (k.jwGetFullscreen()) { _show(Q.normalscreenButton); _hide(Q.fullscreenButton) } else { _hide(Q.normalscreenButton); _show(Q.fullscreenButton) } var aj = { width: e }; var ai = {}; if (D.position == a.html5.view.positions.OVER || k.jwGetFullscreen()) { aj.left = D.margin; aj.width -= 2 * D.margin; aj.top = y - J().height - D.margin; aj.height = J().height } var al = k.skin.getSkinElement("controlbar", "capLeft"); var ak = k.skin.getSkinElement("controlbar", "capRight"); ai.left = al ? al.width : 0; ai.width = aj.width - ai.left - (ak ? ak.width : 0); var am = !_utils.exists(k.skin.getSkinElement("controlbar", "timeSliderCapLeft")) ? 0 : k.skin.getSkinElement("controlbar", "timeSliderCapLeft").width; _css(Q.timeSliderRail, { width: (ai.width - ab - E), left: am }); if (_utils.exists(Q.timeSliderCapRight)) { _css(Q.timeSliderCapRight, { left: am + (ai.width - ab - E) }) } _css(ac, aj); _css(Q.elements, ai); _css(Q.background, ai); q(); return aj } function m(am) { if (_utils.exists(Q.volumeSliderRail)) { var ak = isNaN(am.volume / 100) ? 1 : am.volume / 100; var al = _utils.parseDimension(Q.volumeSliderRail.style.width); var ai = isNaN(Math.round(al * ak)) ? 0 : Math.round(al * ak); var an = _utils.parseDimension(Q.volumeSliderRail.style.right); var aj = (!_utils.exists(k.skin.getSkinElement("controlbar", "volumeSliderCapLeft"))) ? 0 : k.skin.getSkinElement("controlbar", "volumeSliderCapLeft").width; _css(Q.volumeSliderProgress, { width: ai, left: aj }); if (_utils.exists(Q.volumeSliderCapLeft)) { _css(Q.volumeSliderCapLeft, { left: 0 }) } } } function t() { N(); M(); q(); p = true; F(); D.idlehide = (D.idlehide.toString().toLowerCase() == "true"); if (D.position == a.html5.view.positions.OVER && D.idlehide) { ac.style.opacity = 0; S = true } else { setTimeout((function () { S = true; T() }), 1) } ae() } t(); return this } })(jwplayer); (function (b) { var a = ["width", "height", "state", "playlist", "item", "position", "buffer", "duration", "volume", "mute", "fullscreen"]; var c = b.utils; b.html5.controller = function (z, w, h, v) { var C = z; var G = h; var g = v; var o = w; var J = true; var e = -1; var A = c.exists(G.config.debug) && (G.config.debug.toString().toLowerCase() == "console"); var m = new b.html5.eventdispatcher(o.id, A); c.extend(this, m); var E = []; var d = false; function r(M) { if (d) { m.sendEvent(M.type, M) } else { E.push(M) } } function K(M) { if (!d) { m.sendEvent(b.api.events.JWPLAYER_READY, M); if (b.utils.exists(window.playerReady)) { playerReady(M) } if (b.utils.exists(window[h.config.playerReady])) { window[h.config.playerReady](M) } while (E.length > 0) { var O = E.shift(); m.sendEvent(O.type, O) } if (h.config.autostart && !b.utils.isIOS()) { t(G.item) } while (p.length > 0) { var N = p.shift(); x(N.method, N.arguments) } d = true } } G.addGlobalListener(r); G.addEventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL, function () { G.getMedia().play() }); G.addEventListener(b.api.events.JWPLAYER_MEDIA_TIME, function (M) { if (M.position >= G.playlist[G.item].start && e >= 0) { G.playlist[G.item].start = e; e = -1 } }); G.addEventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE, function (M) { setTimeout(s, 25) }); function u() { try { f(G.item); if (G.playlist[G.item].levels[0].file.length > 0) { if (J || G.state == b.api.events.state.IDLE) { G.getMedia().load(G.playlist[G.item]); J = false } else { if (G.state == b.api.events.state.PAUSED) { G.getMedia().play() } } } return true } catch (M) { m.sendEvent(b.api.events.JWPLAYER_ERROR, M) } return false } function I() { try { if (G.playlist[G.item].levels[0].file.length > 0) { switch (G.state) { case b.api.events.state.PLAYING: case b.api.events.state.BUFFERING: G.getMedia().pause(); break } } return true } catch (M) { m.sendEvent(b.api.events.JWPLAYER_ERROR, M) } return false } function D(M) { try { if (G.playlist[G.item].levels[0].file.length > 0) { if (typeof M != "number") { M = parseFloat(M) } switch (G.state) { case b.api.events.state.IDLE: if (e < 0) { e = G.playlist[G.item].start; G.playlist[G.item].start = M } u(); break; case b.api.events.state.PLAYING: case b.api.events.state.PAUSED: case b.api.events.state.BUFFERING: G.seek(M); break } } return true } catch (N) { m.sendEvent(b.api.events.JWPLAYER_ERROR, N) } return false } function n(M) { if (!c.exists(M)) { M = true } try { G.getMedia().stop(M); return true } catch (N) { m.sendEvent(b.api.events.JWPLAYER_ERROR, N) } return false } function k() { try { if (G.playlist[G.item].levels[0].file.length > 0) { if (G.config.shuffle) { f(y()) } else { if (G.item + 1 == G.playlist.length) { f(0) } else { f(G.item + 1) } } } if (G.state != b.api.events.state.IDLE) { var N = G.state; G.state = b.api.events.state.IDLE; m.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE, { oldstate: N, newstate: b.api.events.state.IDLE }) } u(); return true } catch (M) { m.sendEvent(b.api.events.JWPLAYER_ERROR, M) } return false } function j() { try { if (G.playlist[G.item].levels[0].file.length > 0) { if (G.config.shuffle) { f(y()) } else { if (G.item === 0) { f(G.playlist.length - 1) } else { f(G.item - 1) } } } if (G.state != b.api.events.state.IDLE) { var N = G.state; G.state = b.api.events.state.IDLE; m.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE, { oldstate: N, newstate: b.api.events.state.IDLE }) } u(); return true } catch (M) { m.sendEvent(b.api.events.JWPLAYER_ERROR, M) } return false } function y() { var M = null; if (G.playlist.length > 1) { while (!c.exists(M)) { M = Math.floor(Math.random() * G.playlist.length); if (M == G.item) { M = null } } } else { M = 0 } return M } function t(N) { if (!G.playlist || !G.playlist[N]) { return false } try { if (G.playlist[N].levels[0].file.length > 0) { var O = G.state; if (O !== b.api.events.state.IDLE) { if (G.playlist[G.item].provider == G.playlist[N].provider) { n(false) } else { n() } } f(N); u() } return true } catch (M) { m.sendEvent(b.api.events.JWPLAYER_ERROR, M) } return false } function f(M) { if (!G.playlist[M]) { return } G.setActiveMediaProvider(G.playlist[M]); if (G.item != M) { G.item = M; J = true; m.sendEvent(b.api.events.JWPLAYER_PLAYLIST_ITEM, { index: M }) } } function H(N) { try { f(G.item); var O = G.getMedia(); switch (typeof (N)) { case "number": O.volume(N); break; case "string": O.volume(parseInt(N, 10)); break } return true } catch (M) { m.sendEvent(b.api.events.JWPLAYER_ERROR, M) } return false } function q(N) { try { f(G.item); var O = G.getMedia(); if (typeof N == "undefined") { O.mute(!G.mute) } else { if (N.toString().toLowerCase() == "true") { O.mute(true) } else { O.mute(false) } } return true } catch (M) { m.sendEvent(b.api.events.JWPLAYER_ERROR, M) } return false } function l(N, M) { try { G.width = N; G.height = M; g.resize(N, M); m.sendEvent(b.api.events.JWPLAYER_RESIZE, { width: G.width, height: G.height }); return true } catch (O) { m.sendEvent(b.api.events.JWPLAYER_ERROR, O) } return false } function B(N) { try { if (typeof N == "undefined") { G.fullscreen = !G.fullscreen; g.fullscreen(!G.fullscreen) } else { if (N.toString().toLowerCase() == "true") { G.fullscreen = true; g.fullscreen(true) } else { G.fullscreen = false; g.fullscreen(false) } } m.sendEvent(b.api.events.JWPLAYER_RESIZE, { width: G.width, height: G.height }); m.sendEvent(b.api.events.JWPLAYER_FULLSCREEN, { fullscreen: N }); return true } catch (M) { m.sendEvent(b.api.events.JWPLAYER_ERROR, M) } return false } function L(M) { try { n(); G.loadPlaylist(M); f(G.item); return true } catch (N) { m.sendEvent(b.api.events.JWPLAYER_ERROR, N) } return false } b.html5.controller.repeatoptions = { LIST: "LIST", ALWAYS: "ALWAYS", SINGLE: "SINGLE", NONE: "NONE" }; function s() { switch (G.config.repeat.toUpperCase()) { case b.html5.controller.repeatoptions.SINGLE: u(); break; case b.html5.controller.repeatoptions.ALWAYS: if (G.item == G.playlist.length - 1 && !G.config.shuffle) { t(0) } else { k() } break; case b.html5.controller.repeatoptions.LIST: if (G.item == G.playlist.length - 1 && !G.config.shuffle) { n(); f(0) } else { k() } break; default: n(); break } } var p = []; function F(M) { return function () { if (d) { x(M, arguments) } else { p.push({ method: M, arguments: arguments }) } } } function x(O, N) { var M = []; for (i = 0; i < N.length; i++) { M.push(N[i]) } O.apply(this, M) } this.play = F(u); this.pause = F(I); this.seek = F(D); this.stop = F(n); this.next = F(k); this.prev = F(j); this.item = F(t); this.setVolume = F(H); this.setMute = F(q); this.resize = F(l); this.setFullscreen = F(B); this.load = F(L); this.playerReady = K } })(jwplayer); (function (a) { a.html5.defaultSkin = function () { this.text = '<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.0"><settings><setting name="backcolor" value="0xFFFFFF"/><setting name="frontcolor" value="0x000000"/><setting name="lightcolor" value="0x000000"/><setting name="screencolor" value="0x000000"/></settings><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/></settings><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFJJREFUeNrslLENwAAIwxLU/09j5AiOgD5hVQzNAVY8JK4qEfHMIKBnd2+BQlBINaiRtL/aV2rdzYBsM6CIONbI1NZENTr3RwdB2PlnJgJ6BRgA4hwu5Qg5iswAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEhJREFUeNpiYqABYBo1dNRQ+hr6H4jvA3E8NS39j4SpZvh/LJig4YxEGEqy3kET+w+AOGFQRhTJhrEQkGcczfujhg4CQwECDADpTRWU/B3wHQAAAABJRU5ErkJggg=="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiYBgFo2DwA0YC8v/R1P4nRu+ooaOGUtnQUTAKhgIACDAAFCwQCfAJ4gwAAAAASUVORK5CYII="/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEtJREFUeNpiYBgFo2Dog/9QDAPyQHweTYwiQ/2B+D0Wi8g2tB+JTdBQRiIMJVkvEy0iglhDF9Aq9uOpHVEwoE+NJDUKRsFgAAABBgDe2hqZcNNL0AAAAABJRU5ErkJggg=="/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUeNpiYBgFo2Dog/9AfB6I5dHE/lNqKAi/B2J/ahsKw/3EGMpIhKEk66WJoaR6fz61IyqemhEFSlL61ExSo2AUDAYAEGAAiG4hj+5t7M8AAAAASUVORK5CYII="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADxJREFUeNpiYBgFo2AU0Bwwzluw+D8tLWARFhKiqQ9YuLg4aWsBGxs7bS1gZ6e5BWyjSX0UjIKhDgACDABlYQOGh5pYywAAAABJRU5ErkJggg=="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpiYBgFo2AU0Bww1jc0/aelBSz8/Pw09QELOzs7bS1gY2OjrQWsrKy09gHraFIfBaNgqAOAAAMAvy0DChXHsZMAAAAASUVORK5CYII="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAClJREFUeNpiYBgFo2AU0BwwAvF/WlrARGsfjFow8BaMglEwCugAAAIMAOHfAQunR+XzAAAAAElFTkSuQmCC"/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpiZICA/yCCiQEJUJcDEGAAY0gBD1/m7Q0AAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiYBgFIw3MB+L/5Gj8j6yRiRTFyICJXHfTXyMLAXlGati4YDRFDj8AEGAABk8GSqqS4CoAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpiYBgFgxz8p7bm+cQa+h8LHy7GhEcjIz4bmAjYykiun/8j0fakGPIfTfPgiSr6aB4FVAcAAQYAWdwR1G1Wd2gAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGpJREFUeNpi/P//PwM9ABMDncCoRYPfIqqDZcuW1UPp/6AUDcNM1DQYKtRAlaAj1mCSLSLXYIIWUctgDItoZfDA5aOoqKhGEANIM9LVR7SymGDQUctikuOIXkFNdhHEOFrDjlpEd4sAAgwAriRMub95fu8AAAAASUVORK5CYII="/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFtJREFUeNpi/P//PwM9ABMDncCoRYPfIlqAeij9H5SiYZiqBqPTlFqE02BKLSLaYFItIttgQhZRzWB8FjENiuRJ7aAbsMQwYMl7wDIsWUUQ42gNO2oR3S0CCDAAKhKq6MLLn8oAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUeNpiYBgFo2DQA0YC8v/xqP1PjDlMRDrEgUgxkgHIlfZoriVGjmzLsLFHAW2D6D8eA/9Tw7L/BAwgJE90PvhPpNgoGAVDEQAEGAAMdhTyXcPKcAAAAABJRU5ErkJggg=="/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEZJREFUeNpiYBgFo2DIg/9UUkOUAf8JiFFsyX88fJyAkcQgYMQjNkzBoAgiezyRbE+tFGSPxQJ7auYBmma0UTAKBhgABBgAJAEY6zON61sAAAAASUVORK5CYII="/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC"/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg=="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNrs1jEOgCAMBVAg7t5/8qaoIy4uoobyXsLCxA+0NCUAAADGUWvdQoQ41x4ixNBB2hBvBskdD3w5ZCkl3+33VqI0kjBBlh9rp+uTcyOP33TnolfsU85XX3yIRpQph8ZQY3wTZtU5AACASA4BBgDHoVuY1/fvOQAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWlJREFUeNrsl+1twjAQhsHq/7BBYQLYIBmBDcoGMAIjtBPQTcII2SDtBDBBwrU6pGsUO7YbO470PtKJkz9iH++d4ywWAAAAAABgljRNsyWr2bZzDuJG1rLdZhcMbTjrBCGDyUKsqQLFciJb9bSvuG/WagRVRUVUI6gqy5HVeKWfSgRyJruKIU//TrZTSn2nmlaXThrloi/v9F2STC1W4+Aw5cBzkquRc09bofFNc6YLxEON0VUZS5FPTftO49vMjRsIF3RhOGr7/D/pJw+FKU+q0vDyq8W42jCunDqI3LC5XxNj2wHLU1XjaRnb0Lhykhqhhd8MtSF5J9tbjCv4mXGvKJz/65FF/qJryyaaIvzP2QRxZTX2nTuXjvV/VPFSwyLnW7mpH99yTh1FEVro6JBSd40/pMrRdV8vPtcKl28T2pT8TnFZ4yNosct3Q0io6JfBiz1FlGdqVQH3VHnepAEAAAAAADDzEGAAcTwB10jWgxcAAAAASUVORK5CYII="/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuhJREFUeNrsWr9rU1EUznuNGqvFQh1ULOhiBx0KDtIuioO4pJuik3FxFfUPaAV1FTdx0Q5d2g4FFxehTnEpZHFoBy20tCIWtGq0TZP4HfkeHB5N8m6Sl/sa74XDybvv3vvOd8/Pe4lXrVZT3dD8VJc0B8QBcUAcEAfESktHGeR5XtMfqFQq/f92zPe/NbtGlKTdCY30kuxrpMGO94BlQCXs+rbh3ONgA6BlzP1p20d80gEI5hmA2A92Qua1Q2PtAFISM+bvjMG8U+Q7oA3rQGASwrYCU6WpNdLGYbA+Pq5jjXIiwi8EEa2UDbQSaKOIuV+SlkcCrfjY8XTI9EpKGwP0C2kru2hLtHqa4zoXtZRWyvi4CLwv9Opr6Hkn6A9HKgEANsQ1iqC3Ub/vRUk2JgmRkatK36kVrnt0qObunwUdUUMXMWYpakJsO5Am8tAw2GBIgwWA+G2S2dMpiw0gDioQRQJoKhRb1QiDwlHZUABYbaXWsm5ae6loTE4ZDxN4CZar8foVzOJ2iyZ2kWF3t7YIevffaMT5yJ70kQb2fQ1sE5SHr2wazs2wgMxgbsEKEAgxAvZUJbQLBGTSBMgNrncJbA6AljtS/eKDJ0Ez+DmrQEzXS2h1Ck25kAg0IZcUOaydCy4sYnN2fOA+2AP16gNoHALlQ+fwH7XO4CxLenUpgj4xr6ugY2roPMbMx+Xs18m/E8CVEIhxsNeg83XWOAN6grG3lGbk8uE5fr4B/WH3cJw+co/l9nTYsSGYCJ/lY5/qv0thn6nrIWmjeJcPSnWOeY++AkF8tpJHIMAUs/MaBBpj3znZfQo5psY+ZrG4gv5HickjEOymKjEeRpgyST6IuZcTcWbnjcgdPi5ghxciRKsl1lDSsgwA1i8fssonJgzmTSqfGUkCENndNdAL7PS6QQ7ZYISTo+1qq0LEWjTWcvY4isa4z+yfQB+7ooyHVg5RI7/i1Ijn/vnggDggDogD4oC00P4KMACd/juEHOrS4AAAAABJRU5ErkJggg=="/></elements></component><component name="dock"><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFBJREFUeNrs0cEJACAQA8Eofu0fu/W6EM5ZSAFDRpKTBs00CQQEBAQEBAQEBAQEBAQEBATkK8iqbY+AgICAgICAgICAgICAgICAgIC86QowAG5PAQzEJ0lKAAAAAElFTkSuQmCC"/></elements></component><component name="playlist"><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNrs2NEJwCAMBcBYuv/CFuIE9VN47WWCR7iocXR3pdWdGPqqwIoMjYfQeAiNh9B4JHc6MHQVHnjggQceeOCBBx77TifyeOY0iHi8DqIdEY8dD5cL094eePzINB5CO/LwcOTptNB4CP25L4TIbZzpU7UEGAA5wz1uF5rF9AAAAABJRU5ErkJggg=="/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAIAAADpFA0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUeNrsy6ENACAMAMHClp2wYxZLAg5Fcu9e3OjuOKqqfTMzbs14CIZhGIZhGIZhGP4VLwEGAK/BBnVFpB0oAAAAAElFTkSuQmCC"/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAIAAADpFA0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNrsy7ENACAMBLE8++8caFFKKiRffU53112SGs3ttOohGIZhGIZhGIZh+Fe8BRgAiaUGde6NOSEAAAAASUVORK5CYII="/></elements></component></components></skin>'; this.xml = null; if (window.DOMParser) { parser = new DOMParser(); this.xml = parser.parseFromString(this.text, "text/xml") } else { this.xml = new ActiveXObject("Microsoft.XMLDOM"); this.xml.async = "false"; this.xml.loadXML(this.text) } return this } })(jwplayer); (function (a) { _utils = a.utils; _css = _utils.css; _hide = function (b) { _css(b, { display: "none" }) }; _show = function (b) { _css(b, { display: "block" }) }; a.html5.display = function (k, G) { var j = { icons: true, showmute: false }; var Q = _utils.extend({}, j, G); var h = k; var P = {}; var e; var u; var w; var N; var s; var I; var A; var J = !_utils.exists(h.skin.getComponentSettings("display").bufferrotation) ? 15 : parseInt(h.skin.getComponentSettings("display").bufferrotation, 10); var q = !_utils.exists(h.skin.getComponentSettings("display").bufferinterval) ? 100 : parseInt(h.skin.getComponentSettings("display").bufferinterval, 10); var z = -1; var t = ""; var K = true; var d; var g = false; var n = false; var H = new a.html5.eventdispatcher(); _utils.extend(this, H); var D = { display: { style: { cursor: "pointer", top: 0, left: 0, overflow: "hidden" }, click: m }, display_icon: { style: { cursor: "pointer", position: "absolute", top: ((h.skin.getSkinElement("display", "background").height - h.skin.getSkinElement("display", "playIcon").height) / 2), left: ((h.skin.getSkinElement("display", "background").width - h.skin.getSkinElement("display", "playIcon").width) / 2), border: 0, margin: 0, padding: 0, zIndex: 3, display: "none"} }, display_iconBackground: { style: { cursor: "pointer", position: "absolute", top: ((u - h.skin.getSkinElement("display", "background").height) / 2), left: ((e - h.skin.getSkinElement("display", "background").width) / 2), border: 0, backgroundImage: (["url(", h.skin.getSkinElement("display", "background").src, ")"]).join(""), width: h.skin.getSkinElement("display", "background").width, height: h.skin.getSkinElement("display", "background").height, margin: 0, padding: 0, zIndex: 2, display: "none"} }, display_image: { style: { display: "none", width: e, height: u, position: "absolute", cursor: "pointer", left: 0, top: 0, margin: 0, padding: 0, textDecoration: "none", zIndex: 1} }, display_text: { style: { zIndex: 4, position: "relative", opacity: 0.8, backgroundColor: parseInt("000000", 16), color: parseInt("ffffff", 16), textAlign: "center", fontFamily: "Arial,sans-serif", padding: "0 5px", fontSize: 14}} }; h.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, p); h.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE, p); h.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM, p); h.jwAddEventListener(a.api.events.JWPLAYER_ERROR, o); L(); function L() { P.display = C("div", "display"); P.display_text = C("div", "display_text"); P.display.appendChild(P.display_text); P.display_image = C("img", "display_image"); P.display_image.onerror = function (R) { _hide(P.display_image) }; P.display_image.onload = y; P.display_icon = C("div", "display_icon"); P.display_iconBackground = C("div", "display_iconBackground"); P.display.appendChild(P.display_image); P.display_iconBackground.appendChild(P.display_icon); P.display.appendChild(P.display_iconBackground); f(); setTimeout((function () { n = true; if (Q.icons.toString() == "true") { F() } }), 1) } this.getDisplayElement = function () { return P.display }; this.resize = function (S, R) { _css(P.display, { width: S, height: R }); _css(P.display_text, { width: (S - 10), top: ((R - P.display_text.getBoundingClientRect().height) / 2) }); _css(P.display_iconBackground, { top: ((R - h.skin.getSkinElement("display", "background").height) / 2), left: ((S - h.skin.getSkinElement("display", "background").width) / 2) }); if (e != S || u != R) { e = S; u = R; d = undefined; F() } c(); p({}) }; this.show = function () { if (g) { g = false; r(h.jwGetState()) } }; this.hide = function () { if (!g) { B(); g = true } }; function y(R) { w = P.display_image.naturalWidth; N = P.display_image.naturalHeight; c() } function c() { _utils.stretch(h.jwGetStretching(), P.display_image, e, u, w, N) } function C(R, T) { var S = document.createElement(R); S.id = h.id + "_jwplayer_" + T; _css(S, D[T].style); return S } function f() { for (var R in P) { if (_utils.exists(D[R].click)) { P[R].onclick = D[R].click } } } function m(R) { if (typeof R.preventDefault != "undefined") { R.preventDefault() } else { R.returnValue = false } if (h.jwGetState() != a.api.events.state.PLAYING) { h.jwPlay() } else { h.jwPause() } } function O(R) { if (A) { B(); return } P.display_icon.style.backgroundImage = (["url(", h.skin.getSkinElement("display", R).src, ")"]).join(""); _css(P.display_icon, { width: h.skin.getSkinElement("display", R).width, height: h.skin.getSkinElement("display", R).height, top: (h.skin.getSkinElement("display", "background").height - h.skin.getSkinElement("display", R).height) / 2, left: (h.skin.getSkinElement("display", "background").width - h.skin.getSkinElement("display", R).width) / 2 }); b(); if (_utils.exists(h.skin.getSkinElement("display", R + "Over"))) { P.display_icon.onmouseover = function (S) { P.display_icon.style.backgroundImage = ["url(", h.skin.getSkinElement("display", R + "Over").src, ")"].join("") }; P.display_icon.onmouseout = function (S) { P.display_icon.style.backgroundImage = ["url(", h.skin.getSkinElement("display", R).src, ")"].join("") } } else { P.display_icon.onmouseover = null; P.display_icon.onmouseout = null } } function B() { if (Q.icons.toString() == "true") { _hide(P.display_icon); _hide(P.display_iconBackground); M() } } function b() { if (!g && Q.icons.toString() == "true") { _show(P.display_icon); _show(P.display_iconBackground); F() } } function o(R) { A = true; B(); P.display_text.innerHTML = R.error; _show(P.display_text); P.display_text.style.top = ((u - P.display_text.getBoundingClientRect().height) / 2) + "px" } function E() { P.display_image.style.display = "none" } function p(R) { if ((R.type == a.api.events.JWPLAYER_PLAYER_STATE || R.type == a.api.events.JWPLAYER_PLAYLIST_ITEM) && A) { A = false; _hide(P.display_text) } var S = h.jwGetState(); if (S == t) { return } t = S; if (z >= 0) { clearTimeout(z) } if (K || h.jwGetState() == a.api.events.state.PLAYING || h.jwGetState() == a.api.events.state.PAUSED) { r(h.jwGetState()) } else { z = setTimeout(l(h.jwGetState()), 500) } } function l(R) { return (function () { r(R) }) } function r(R) { if (_utils.exists(I)) { clearInterval(I); I = null; _utils.animations.rotate(P.display_icon, 0) } switch (R) { case a.api.events.state.BUFFERING: if (_utils.isIOS()) { E(); B() } else { if (h.jwGetPlaylist()[h.jwGetItem()].provider == "sound") { v() } s = 0; I = setInterval(function () { s += J; _utils.animations.rotate(P.display_icon, s % 360) }, q); O("bufferIcon"); K = true } break; case a.api.events.state.PAUSED: if (!_utils.isIOS()) { if (h.jwGetPlaylist()[h.jwGetItem()].provider != "sound") { _css(P.display_image, { background: "transparent no-repeat center center" }) } O("playIcon"); K = true } break; case a.api.events.state.IDLE: if (h.jwGetPlaylist()[h.jwGetItem()] && h.jwGetPlaylist()[h.jwGetItem()].image) { v() } else { E() } O("playIcon"); K = true; break; default: if (h.jwGetPlaylist()[h.jwGetItem()] && h.jwGetPlaylist()[h.jwGetItem()].provider == "sound") { if (_utils.isIOS()) { E(); K = false } else { v() } } else { E(); K = false } if (h.jwGetMute() && Q.showmute) { O("muteIcon") } else { B() } break } z = -1 } function v() { if (h.jwGetPlaylist()[h.jwGetItem()] && h.jwGetPlaylist()[h.jwGetItem()].image) { _css(P.display_image, { display: "block" }); P.display_image.src = _utils.getAbsolutePath(h.jwGetPlaylist()[h.jwGetItem()].image) } } function x(R) { return function () { if (!n) { return } if (!g && d != R) { d = R; H.sendEvent(R, { component: "display", boundingRect: _utils.getDimensions(P.display_iconBackground) }) } } } var F = x(a.api.events.JWPLAYER_COMPONENT_SHOW); var M = x(a.api.events.JWPLAYER_COMPONENT_HIDE); return this } })(jwplayer); (function (a) { _css = a.utils.css; a.html5.dock = function (p, u) { function q() { return { align: a.html5.view.positions.RIGHT} } var k = a.utils.extend({}, q(), u); if (k.align == "FALSE") { return } var f = {}; var s = []; var g; var v; var d = false; var t = false; var e = { x: 0, y: 0, width: 0, height: 0 }; var r; var j = new a.html5.eventdispatcher(); _utils.extend(this, j); var m = document.createElement("div"); m.id = p.id + "_jwplayer_dock"; p.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, l); this.getDisplayElement = function () { return m }; this.setButton = function (A, x, y, z) { if (!x && f[A]) { a.utils.arrays.remove(s, A); m.removeChild(f[A].div); delete f[A] } else { if (x) { if (!f[A]) { f[A] = {} } f[A].handler = x; f[A].outGraphic = y; f[A].overGraphic = z; if (!f[A].div) { s.push(A); f[A].div = document.createElement("div"); f[A].div.style.position = "relative"; m.appendChild(f[A].div); f[A].div.appendChild(document.createElement("img")); f[A].div.childNodes[0].style.position = "absolute"; f[A].div.childNodes[0].style.left = 0; f[A].div.childNodes[0].style.top = 0; f[A].div.childNodes[0].style.zIndex = 10; f[A].div.childNodes[0].style.cursor = "pointer"; f[A].div.appendChild(document.createElement("img")); f[A].div.childNodes[1].style.position = "absolute"; f[A].div.childNodes[1].style.left = 0; f[A].div.childNodes[1].style.top = 0; if (p.skin.getSkinElement("dock", "button")) { f[A].div.childNodes[1].src = p.skin.getSkinElement("dock", "button").src } f[A].div.childNodes[1].style.zIndex = 9; f[A].div.childNodes[1].style.cursor = "pointer"; f[A].div.onmouseover = function () { if (f[A].overGraphic) { f[A].div.childNodes[0].src = f[A].overGraphic } if (p.skin.getSkinElement("dock", "buttonOver")) { f[A].div.childNodes[1].src = p.skin.getSkinElement("dock", "buttonOver").src } }; f[A].div.onmouseout = function () { if (f[A].outGraphic) { f[A].div.childNodes[0].src = f[A].outGraphic } if (p.skin.getSkinElement("dock", "button")) { f[A].div.childNodes[1].src = p.skin.getSkinElement("dock", "button").src } }; if (f[A].overGraphic) { f[A].div.childNodes[0].src = f[A].overGraphic } if (f[A].outGraphic) { f[A].div.childNodes[0].src = f[A].outGraphic } if (p.skin.getSkinElement("dock", "button")) { f[A].div.childNodes[1].src = p.skin.getSkinElement("dock", "button").src } } if (x) { f[A].div.onclick = function (B) { B.preventDefault(); a(p.id).callback(A); if (f[A].overGraphic) { f[A].div.childNodes[0].src = f[A].overGraphic } if (p.skin.getSkinElement("dock", "button")) { f[A].div.childNodes[1].src = p.skin.getSkinElement("dock", "button").src } } } } } h(g, v) }; function h(x, J) { if (s.length > 0) { var y = 10; var I = y; var F = -1; var G = p.skin.getSkinElement("dock", "button").height; var E = p.skin.getSkinElement("dock", "button").width; var C = x - E - y; var H, B; if (k.align == a.html5.view.positions.LEFT) { F = 1; C = y } for (var z = 0; z < s.length; z++) { var K = Math.floor(I / J); if ((I + G + y) > ((K + 1) * J)) { I = ((K + 1) * J) + y; K = Math.floor(I / J) } var A = f[s[z]].div; A.style.top = (I % J) + "px"; A.style.left = (C + (p.skin.getSkinElement("dock", "button").width + y) * K * F) + "px"; var D = { x: a.utils.parseDimension(A.style.left), y: a.utils.parseDimension(A.style.top), width: E, height: G }; if (!H || (D.x <= H.x && D.y <= H.y)) { H = D } if (!B || (D.x >= B.x && D.y >= B.y)) { B = D } I += p.skin.getSkinElement("dock", "button").height + y } e = { x: H.x, y: H.y, width: B.x - H.x + B.width, height: H.y - B.y + B.height} } if (t != p.jwGetFullscreen() || g != x || v != J) { g = x; v = J; t = p.jwGetFullscreen(); r = undefined; setTimeout(n, 1) } } function b(x) { return function () { if (!d && r != x && s.length > 0) { r = x; j.sendEvent(x, { component: "dock", boundingRect: e }) } } } function l(x) { if (a.utils.isIOS()) { switch (x.newstate) { case a.api.events.state.IDLE: o(); break; default: c(); break } } } var n = b(a.api.events.JWPLAYER_COMPONENT_SHOW); var w = b(a.api.events.JWPLAYER_COMPONENT_HIDE); this.resize = h; var o = function () { _css(m, { display: "block" }); if (d) { d = false; n() } }; var c = function () { _css(m, { display: "none" }); if (!d) { w(); d = true } }; this.hide = c; this.show = o; return this } })(jwplayer); (function (a) { a.html5.eventdispatcher = function (d, b) { var c = new a.events.eventdispatcher(b); a.utils.extend(this, c); this.sendEvent = function (e, f) { if (!a.utils.exists(f)) { f = {} } a.utils.extend(f, { id: d, version: a.version, type: e }); c.sendEvent(e, f) } } })(jwplayer); (function (a) { var b = { prefix: "", file: "", link: "", margin: 8, out: 0.5, over: 1, timeout: 5, hide: true, position: "bottom-left" }; _css = a.utils.css; a.html5.logo = function (n, r) { var q = n; var u; var d; var t; var h = false; g(); function g() { o(); c(); l() } function o() { if (b.prefix) { var v = n.version.split(/\W/).splice(0, 2).join("/"); if (b.prefix.indexOf(v) < 0) { b.prefix += v + "/" } } if (r.position == a.html5.view.positions.OVER) { r.position = b.position } d = a.utils.extend({}, b, r) } function c() { t = document.createElement("img"); t.id = q.id + "_jwplayer_logo"; t.style.display = "none"; t.onload = function (v) { _css(t, k()); q.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, j); p() }; if (!d.file) { return } if (d.file.indexOf("http://") === 0) { t.src = d.file } else { t.src = d.prefix + d.file } } if (!d.file) { return } this.resize = function (w, v) { }; this.getDisplayElement = function () { return t }; function l() { if (d.link) { t.onmouseover = f; t.onmouseout = p; t.onclick = s } else { this.mouseEnabled = false } } function s(v) { if (typeof v != "undefined") { v.stopPropagation() } if (!h) { return } q.jwPause(); q.jwSetFullscreen(false); if (d.link) { window.open(d.link, "_top") } return } function p(v) { if (d.link && h) { t.style.opacity = d.out } return } function f(v) { if (d.hide.toString() == "true" && h) { t.style.opacity = d.over } return } function k() { var x = { textDecoration: "none", position: "absolute", cursor: "pointer" }; x.display = (d.hide.toString() == "true") ? "none" : "block"; var w = d.position.toLowerCase().split("-"); for (var v in w) { x[w[v]] = d.margin } return x } function m() { if (d.hide.toString() == "true") { t.style.display = "block"; t.style.opacity = 0; a.utils.fadeTo(t, d.out, 0.1, parseFloat(t.style.opacity)); u = setTimeout(function () { e() }, d.timeout * 1000) } h = true } function e() { h = false; if (d.hide.toString() == "true") { a.utils.fadeTo(t, 0, 0.1, parseFloat(t.style.opacity)) } } function j(v) { if (v.newstate == a.api.events.state.BUFFERING) { clearTimeout(u); m() } } return this } })(jwplayer); (function (a) { var c = { ended: a.api.events.state.IDLE, playing: a.api.events.state.PLAYING, pause: a.api.events.state.PAUSED, buffering: a.api.events.state.BUFFERING }; var e = a.utils; var b = e.css; var d = e.isIOS(); a.html5.mediavideo = function (h, s) { var r = { abort: n, canplay: k, canplaythrough: k, durationchange: G, emptied: n, ended: k, error: u, loadeddata: G, loadedmetadata: G, loadstart: k, pause: k, play: n, playing: k, progress: v, ratechange: n, seeked: k, seeking: k, stalled: k, suspend: k, timeupdate: D, volumechange: n, waiting: k, canshowcurrentframe: n, dataunavailable: n, empty: n, load: z, loadedfirstframe: n }; var j = new a.html5.eventdispatcher(); e.extend(this, j); var y = h, l = s, m, B, A, x, f, H = false, C, p, q; o(); this.load = function (J, K) { if (typeof K == "undefined") { K = true } x = J; e.empty(m); q = 0; if (J.levels && J.levels.length > 0) { if (J.levels.length == 1) { m.src = J.levels[0].file } else { if (m.src) { m.removeAttribute("src") } for (var I = 0; I < J.levels.length; I++) { var L = m.ownerDocument.createElement("source"); L.src = J.levels[I].file; m.appendChild(L); q++ } } } else { m.src = J.file } if (d) { if (J.image) { m.poster = J.image } m.controls = "controls"; m.style.display = "block" } C = p = A = false; y.buffer = 0; if (!e.exists(J.start)) { J.start = 0 } y.duration = J.duration; j.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED); if ((!d && J.levels.length == 1) || !H) { m.load() } H = false; if (K) { E(a.api.events.state.BUFFERING); j.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER, { bufferPercent: 0 }); this.play() } }; this.play = function () { if (B != a.api.events.state.PLAYING) { t(); if (p) { E(a.api.events.state.PLAYING) } else { E(a.api.events.state.BUFFERING) } m.play() } }; this.pause = function () { m.pause(); E(a.api.events.state.PAUSED) }; this.seek = function (I) { if (!(y.duration <= 0 || isNaN(y.duration)) && !(y.position <= 0 || isNaN(y.position))) { m.currentTime = I; m.play() } }; _stop = this.stop = function (I) { if (!e.exists(I)) { I = true } g(); if (I) { m.style.display = "none"; p = false; var J = navigator.userAgent; if (J.match(/chrome/i)) { m.src = undefined } else { if (J.match(/safari/i)) { m.removeAttribute("src") } else { m.src = "" } } m.removeAttribute("controls"); m.removeAttribute("poster"); e.empty(m); m.load(); H = true; if (m.webkitSupportsFullscreen) { try { m.webkitExitFullscreen() } catch (K) { } } } E(a.api.events.state.IDLE) }; this.fullscreen = function (I) { if (I === true) { this.resize("100%", "100%") } else { this.resize(y.config.width, y.config.height) } }; this.resize = function (J, I) { if (false) { b(l, { width: J, height: I }) } j.sendEvent(a.api.events.JWPLAYER_MEDIA_RESIZE, { fullscreen: y.fullscreen, width: J, hieght: I }) }; this.volume = function (I) { if (!d) { m.volume = I / 100; y.volume = I; j.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME, { volume: Math.round(I) }) } }; this.mute = function (I) { if (!d) { m.muted = I; y.mute = I; j.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE, { mute: I }) } }; this.getDisplayElement = function () { return m }; this.hasChrome = function () { return false }; function o() { m = document.createElement("video"); B = a.api.events.state.IDLE; for (var I in r) { m.addEventListener(I, function (J) { if (e.exists(J.target.parentNode)) { r[J.type](J) } }, true) } m.setAttribute("x-webkit-airplay", "allow"); if (l.parentNode) { l.parentNode.replaceChild(m, l) } if (!m.id) { m.id = l.id } } function E(I) { if (I == a.api.events.state.PAUSED && B == a.api.events.state.IDLE) { return } if (B != I) { var J = B; y.state = B = I; j.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE, { oldstate: J, newstate: I }) } } function n(I) { } function v(K) { var J; if (e.exists(K) && K.lengthComputable && K.total) { J = K.loaded / K.total * 100 } else { if (e.exists(m.buffered) && (m.buffered.length > 0)) { var I = m.buffered.length - 1; if (I >= 0) { J = m.buffered.end(I) / m.duration * 100 } } } if (p === false && B == a.api.events.state.BUFFERING) { j.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL); p = true } if (!C) { if (J == 100) { C = true } if (e.exists(J) && (J > y.buffer)) { y.buffer = Math.round(J); j.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER, { bufferPercent: Math.round(J) }) } } } function D(J) { if (e.exists(J) && e.exists(J.target)) { if (!isNaN(J.target.duration) && (isNaN(y.duration) || y.duration < 1)) { if (J.target.duration == Infinity) { y.duration = 0 } else { y.duration = Math.round(J.target.duration * 10) / 10 } } if (!A && m.readyState > 0) { m.style.display = "block"; E(a.api.events.state.PLAYING) } if (B == a.api.events.state.PLAYING) { if (!A && m.readyState > 0) { A = true; try { if (m.currentTime < x.start) { m.currentTime = x.start } } catch (I) { } m.volume = y.volume / 100; m.muted = y.mute } y.position = y.duration > 0 ? (Math.round(J.target.currentTime * 10) / 10) : 0; j.sendEvent(a.api.events.JWPLAYER_MEDIA_TIME, { position: y.position, duration: y.duration }); if (y.position >= y.duration && (y.position > 0 || y.duration > 0)) { w() } } } v(J) } function z(I) { } function k(I) { if (c[I.type]) { if (I.type == "ended") { w() } else { E(c[I.type]) } } } function G(I) { var J = { height: I.target.videoHeight, width: I.target.videoWidth, duration: Math.round(I.target.duration * 10) / 10 }; if ((y.duration === 0 || isNaN(y.duration)) && I.target.duration != Infinity) { y.duration = Math.round(I.target.duration * 10) / 10 } j.sendEvent(a.api.events.JWPLAYER_MEDIA_META, { metadata: J }) } function u(K) { if (B == a.api.events.state.IDLE) { return } var J = "There was an error: "; if ((K.target.error && K.target.tagName.toLowerCase() == "video") || K.target.parentNode.error && K.target.parentNode.tagName.toLowerCase() == "video") { var I = !e.exists(K.target.error) ? K.target.parentNode.error : K.target.error; switch (I.code) { case I.MEDIA_ERR_ABORTED: J = "You aborted the video playback: "; break; case I.MEDIA_ERR_NETWORK: J = "A network error caused the video download to fail part-way: "; break; case I.MEDIA_ERR_DECODE: J = "The video playback was aborted due to a corruption problem or because the video used features your browser did not support: "; break; case I.MEDIA_ERR_SRC_NOT_SUPPORTED: J = "The video could not be loaded, either because the server or network failed or because the format is not supported: "; break; default: J = "An unknown error occurred: "; break } } else { if (K.target.tagName.toLowerCase() == "source") { q--; if (q > 0) { return } J = "The video could not be loaded, either because the server or network failed or because the format is not supported: " } else { e.log("An unknown error occurred.  Continuing..."); return } } _stop(false); J += F(); _error = true; j.sendEvent(a.api.events.JWPLAYER_ERROR, { error: J }); return } function F() { var K = ""; for (var J in x.levels) { var I = x.levels[J]; var L = l.ownerDocument.createElement("source"); K += a.utils.getAbsolutePath(I.file); if (J < (x.levels.length - 1)) { K += ", " } } return K } function t() { if (!e.exists(f)) { f = setInterval(function () { v() }, 100) } } function g() { clearInterval(f); f = null } function w() { if (B != a.api.events.state.IDLE) { _stop(false); j.sendEvent(a.api.events.JWPLAYER_MEDIA_COMPLETE) } } } })(jwplayer); (function (a) { var c = { ended: a.api.events.state.IDLE, playing: a.api.events.state.PLAYING, pause: a.api.events.state.PAUSED, buffering: a.api.events.state.BUFFERING }; var b = a.utils.css; a.html5.mediayoutube = function (j, e) { var f = new a.html5.eventdispatcher(); a.utils.extend(this, f); var l = j; var h = document.getElementById(e.id); var g = a.api.events.state.IDLE; var n, m; function k(p) { if (g != p) { var q = g; l.state = p; g = p; f.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE, { oldstate: q, newstate: p }) } } this.getDisplayElement = function () { return h }; this.play = function () { if (g == a.api.events.state.IDLE) { f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER, { bufferPercent: 100 }); f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL); k(a.api.events.state.PLAYING) } else { if (g == a.api.events.state.PAUSED) { k(a.api.events.state.PLAYING) } } }; this.pause = function () { k(a.api.events.state.PAUSED) }; this.seek = function (p) { }; this.stop = function (p) { if (!_utils.exists(p)) { p = true } l.position = 0; k(a.api.events.state.IDLE); if (p) { b(h, { display: "none" }) } }; this.volume = function (p) { l.volume = p; f.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME, { volume: Math.round(p) }) }; this.mute = function (p) { h.muted = p; l.mute = p; f.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE, { mute: p }) }; this.resize = function (q, p) { if (q * p > 0 && n) { n.width = m.width = q; n.height = m.height = p } f.sendEvent(a.api.events.JWPLAYER_MEDIA_RESIZE, { fullscreen: l.fullscreen, width: q, height: p }) }; this.fullscreen = function (p) { if (p === true) { this.resize("100%", "100%") } else { this.resize(l.config.width, l.config.height) } }; this.load = function (p) { o(p); b(n, { display: "block" }); k(a.api.events.state.BUFFERING); f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER, { bufferPercent: 0 }); f.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED); this.play() }; this.hasChrome = function () { return (g != a.api.events.state.IDLE) }; function o(v) { var s = v.levels[0].file; s = ["http://www.youtube.com/v/", d(s), "&amp;hl=en_US&amp;fs=1&autoplay=1"].join(""); n = document.createElement("object"); n.id = h.id; n.style.position = "absolute"; var u = { movie: s, allowfullscreen: "true", allowscriptaccess: "always" }; for (var p in u) { var t = document.createElement("param"); t.name = p; t.value = u[p]; n.appendChild(t) } m = document.createElement("embed"); n.appendChild(m); var q = { src: s, type: "application/x-shockwave-flash", allowfullscreen: "true", allowscriptaccess: "always", width: n.width, height: n.height }; for (var r in q) { m.setAttribute(r, q[r]) } n.appendChild(m); n.style.zIndex = 2147483000; if (h != n && h.parentNode) { h.parentNode.replaceChild(n, h) } h = n } function d(q) { var p = q.split(/\?|\#\!/); var s = ""; for (var r = 0; r < p.length; r++) { if (p[r].substr(0, 2) == "v=") { s = p[r].substr(2) } } if (s == "") { if (q.indexOf("/v/") >= 0) { s = q.substr(q.indexOf("/v/") + 3) } else { if (q.indexOf("youtu.be") >= 0) { s = q.substr(q.indexOf("youtu.be/") + 9) } else { s = q } } } if (s.indexOf("?") > -1) { s = s.substr(0, s.indexOf("?")) } if (s.indexOf("&") > -1) { s = s.substr(0, s.indexOf("&")) } return s } this.embed = m; return this } })(jwplayer); (function (jwplayer) { var _configurableStateVariables = ["width", "height", "start", "duration", "volume", "mute", "fullscreen", "item", "plugins", "stretching"]; jwplayer.html5.model = function (api, container, options) { var _api = api; var _container = container; var _model = { id: _container.id, playlist: [], state: jwplayer.api.events.state.IDLE, position: 0, buffer: 0, config: { width: 480, height: 320, item: -1, skin: undefined, file: undefined, image: undefined, start: 0, duration: 0, bufferlength: 5, volume: 90, mute: false, fullscreen: false, repeat: "", stretching: jwplayer.utils.stretching.UNIFORM, autostart: false, debug: undefined, screencolor: undefined} }; var _media; var _eventDispatcher = new jwplayer.html5.eventdispatcher(); var _components = ["display", "logo", "controlbar", "playlist", "dock"]; jwplayer.utils.extend(_model, _eventDispatcher); for (var option in options) { if (typeof options[option] == "string") { var type = /color$/.test(option) ? "color" : null; options[option] = jwplayer.utils.typechecker(options[option], type) } var config = _model.config; var path = option.split("."); for (var edge in path) { if (edge == path.length - 1) { config[path[edge]] = options[option] } else { if (!jwplayer.utils.exists(config[path[edge]])) { config[path[edge]] = {} } config = config[path[edge]] } } } for (var index in _configurableStateVariables) { var configurableStateVariable = _configurableStateVariables[index]; _model[configurableStateVariable] = _model.config[configurableStateVariable] } var pluginorder = _components.concat([]); if (jwplayer.utils.exists(_model.plugins)) { if (typeof _model.plugins == "string") { var userplugins = _model.plugins.split(","); for (var userplugin in userplugins) { if (typeof userplugins[userplugin] == "string") { pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g, "")) } } } } if (jwplayer.utils.isIOS()) { pluginorder = ["display", "logo", "dock", "playlist"]; if (!jwplayer.utils.exists(_model.config.repeat)) { _model.config.repeat = "list" } } else { if (_model.config.chromeless) { pluginorder = ["logo", "dock", "playlist"]; if (!jwplayer.utils.exists(_model.config.repeat)) { _model.config.repeat = "list" } } } _model.plugins = { order: pluginorder, config: {}, object: {} }; if (typeof _model.config.components != "undefined") { for (var component in _model.config.components) { _model.plugins.config[component] = _model.config.components[component] } } for (var pluginIndex in _model.plugins.order) { var pluginName = _model.plugins.order[pluginIndex]; var pluginConfig = !jwplayer.utils.exists(_model.plugins.config[pluginName]) ? {} : _model.plugins.config[pluginName]; _model.plugins.config[pluginName] = !jwplayer.utils.exists(_model.plugins.config[pluginName]) ? pluginConfig : jwplayer.utils.extend(_model.plugins.config[pluginName], pluginConfig); if (!jwplayer.utils.exists(_model.plugins.config[pluginName].position)) { if (pluginName == "playlist") { _model.plugins.config[pluginName].position = jwplayer.html5.view.positions.NONE } else { _model.plugins.config[pluginName].position = jwplayer.html5.view.positions.OVER } } else { _model.plugins.config[pluginName].position = _model.plugins.config[pluginName].position.toString().toUpperCase() } } if (typeof _model.plugins.config.dock != "undefined") { if (typeof _model.plugins.config.dock != "object") { var position = _model.plugins.config.dock.toString().toUpperCase(); _model.plugins.config.dock = { position: position} } if (typeof _model.plugins.config.dock.position != "undefined") { _model.plugins.config.dock.align = _model.plugins.config.dock.position; _model.plugins.config.dock.position = jwplayer.html5.view.positions.OVER } } function _loadExternal(playlistfile) { var loader = new jwplayer.html5.playlistloader(); loader.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, function (evt) { _model.playlist = new jwplayer.html5.playlist(evt); _loadComplete(true) }); loader.addEventListener(jwplayer.api.events.JWPLAYER_ERROR, function (evt) { _model.playlist = new jwplayer.html5.playlist({ playlist: [] }); _loadComplete(false) }); loader.load(playlistfile) } function _loadComplete() { if (_model.config.shuffle) { _model.item = _getShuffleItem() } else { if (_model.config.item >= _model.playlist.length) { _model.config.item = _model.playlist.length - 1 } else { if (_model.config.item < 0) { _model.config.item = 0 } } _model.item = _model.config.item } _eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, { playlist: _model.playlist }); _eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM, { index: _model.item }) } _model.loadPlaylist = function (arg) { var input; if (typeof arg == "string") { if (arg.indexOf("[") == 0 || arg.indexOf("{") == "0") { try { input = eval(arg) } catch (err) { input = arg } } else { input = arg } } else { input = arg } var config; switch (jwplayer.utils.typeOf(input)) { case "object": config = input; break; case "array": config = { playlist: input }; break; default: _loadExternal(input); return; break } _model.playlist = new jwplayer.html5.playlist(config); if (jwplayer.utils.extension(_model.playlist[0].file) == "xml") { _loadExternal(_model.playlist[0].file) } else { _loadComplete() } }; function _getShuffleItem() { var result = null; if (_model.playlist.length > 1) { while (!jwplayer.utils.exists(result)) { result = Math.floor(Math.random() * _model.playlist.length); if (result == _model.item) { result = null } } } else { result = 0 } return result } function forward(evt) { if (evt.type == jwplayer.api.events.JWPLAYER_MEDIA_LOADED) { _container = _media.getDisplayElement() } _eventDispatcher.sendEvent(evt.type, evt) } var _mediaProviders = {}; _model.setActiveMediaProvider = function (playlistItem) { if (playlistItem.provider == "audio") { playlistItem.provider = "sound" } var provider = playlistItem.provider; var current = _media ? _media.getDisplayElement() : null; if (provider == "sound" || provider == "http" || provider == "") { provider = "video" } if (!jwplayer.utils.exists(_mediaProviders[provider])) { switch (provider) { case "video": _media = new jwplayer.html5.mediavideo(_model, current ? current : _container); break; case "youtube": _media = new jwplayer.html5.mediayoutube(_model, current ? current : _container); break } if (!jwplayer.utils.exists(_media)) { return false } _media.addGlobalListener(forward); _mediaProviders[provider] = _media } else { if (_media != _mediaProviders[provider]) { if (_media) { _media.stop() } _media = _mediaProviders[provider] } } return true }; _model.getMedia = function () { return _media }; _model.seek = function (pos) { _eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_SEEK, { position: _model.position, offset: pos }); return _media.seek(pos) }; _model.setupPlugins = function () { if (!jwplayer.utils.exists(_model.plugins) || !jwplayer.utils.exists(_model.plugins.order) || _model.plugins.order.length == 0) { jwplayer.utils.log("No plugins to set up"); return _model } for (var i = 0; i < _model.plugins.order.length; i++) { try { var pluginName = _model.plugins.order[i]; if (jwplayer.utils.exists(jwplayer.html5[pluginName])) { if (pluginName == "playlist") { _model.plugins.object[pluginName] = new jwplayer.html5.playlistcomponent(_api, _model.plugins.config[pluginName]) } else { _model.plugins.object[pluginName] = new jwplayer.html5[pluginName](_api, _model.plugins.config[pluginName]) } } else { _model.plugins.order.splice(plugin, plugin + 1) } if (typeof _model.plugins.object[pluginName].addGlobalListener == "function") { _model.plugins.object[pluginName].addGlobalListener(forward) } } catch (err) { jwplayer.utils.log("Could not setup " + pluginName) } } }; return _model } })(jwplayer); (function (a) { a.html5.playlist = function (b) { var d = []; if (b.playlist && b.playlist instanceof Array && b.playlist.length > 0) { for (var c in b.playlist) { if (!isNaN(parseInt(c))) { d.push(new a.html5.playlistitem(b.playlist[c])) } } } else { d.push(new a.html5.playlistitem(b)) } return d } })(jwplayer); (function (a) { var c = { size: 180, position: a.html5.view.positions.NONE, itemheight: 60, thumbs: true, fontcolor: "#000000", overcolor: "", activecolor: "", backgroundcolor: "#f8f8f8", font: "_sans", fontsize: "", fontstyle: "", fontweight: "" }; var b = { _sans: "Arial, Helvetica, sans-serif", _serif: "Times, Times New Roman, serif", _typewriter: "Courier New, Courier, monospace" }; _utils = a.utils; _css = _utils.css; _hide = function (d) { _css(d, { display: "none" }) }; _show = function (d) { _css(d, { display: "block" }) }; a.html5.playlistcomponent = function (r, B) { var w = r; var e = a.utils.extend({}, c, w.skin.getComponentSettings("playlist"), B); if (e.position == a.html5.view.positions.NONE || typeof a.html5.view.positions[e.position] == "undefined") { return } var x; var l; var C; var d; var g; var f; var k = -1; var h = { background: undefined, item: undefined, itemOver: undefined, itemImage: undefined, itemActive: undefined }; this.getDisplayElement = function () { return x }; this.resize = function (F, D) { l = F; C = D; if (w.jwGetFullscreen()) { _hide(x) } else { var E = { display: "block", width: l, height: C }; _css(x, E) } }; this.show = function () { _show(x) }; this.hide = function () { _hide(x) }; function j() { x = document.createElement("div"); x.id = w.id + "_jwplayer_playlistcomponent"; switch (e.position) { case a.html5.view.positions.RIGHT: case a.html5.view.positions.LEFT: x.style.width = e.size + "px"; break; case a.html5.view.positions.TOP: case a.html5.view.positions.BOTTOM: x.style.height = e.size + "px"; break } A(); if (h.item) { e.itemheight = h.item.height } x.style.backgroundColor = "#C6C6C6"; w.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, s); w.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM, u); w.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, m) } function p() { var D = document.createElement("ul"); _css(D, { width: x.style.width, minWidth: x.style.width, height: x.style.height, backgroundColor: e.backgroundcolor, backgroundImage: h.background ? "url(" + h.background.src + ")" : "", color: e.fontcolor, listStyle: "none", margin: 0, padding: 0, fontFamily: b[e.font] ? b[e.font] : b._sans, fontSize: (e.fontsize ? e.fontsize : 11) + "px", fontStyle: e.fontstyle, fontWeight: e.fontweight, overflowY: "auto" }); return D } function y(D) { return function () { var E = f.getElementsByClassName("item")[D]; var F = e.fontcolor; var G = h.item ? "url(" + h.item.src + ")" : ""; if (D == w.jwGetPlaylistIndex()) { if (e.activecolor !== "") { F = e.activecolor } if (h.itemActive) { G = "url(" + h.itemActive.src + ")" } } _css(E, { color: e.overcolor !== "" ? e.overcolor : F, backgroundImage: h.itemOver ? "url(" + h.itemOver.src + ")" : G }) } } function o(D) { return function () { var E = f.getElementsByClassName("item")[D]; var F = e.fontcolor; var G = h.item ? "url(" + h.item.src + ")" : ""; if (D == w.jwGetPlaylistIndex()) { if (e.activecolor !== "") { F = e.activecolor } if (h.itemActive) { G = "url(" + h.itemActive.src + ")" } } _css(E, { color: F, backgroundImage: G }) } } function q(I) { var P = d[I]; var O = document.createElement("li"); O.className = "item"; _css(O, { height: e.itemheight, display: "block", cursor: "pointer", backgroundImage: h.item ? "url(" + h.item.src + ")" : "", backgroundSize: "100% " + e.itemheight + "px" }); O.onmouseover = y(I); O.onmouseout = o(I); var J = document.createElement("div"); var F = new Image(); var K = 0; var L = 0; var M = 0; if (v() && (P.image || P["playlist.image"] || h.itemImage)) { F.className = "image"; if (h.itemImage) { K = (e.itemheight - h.itemImage.height) / 2; L = h.itemImage.width; M = h.itemImage.height } else { L = e.itemheight * 4 / 3; M = e.itemheight } _css(J, { height: M, width: L, "float": "left", styleFloat: "left", cssFloat: "left", margin: "0 5px 0 0", background: "black", overflow: "hidden", margin: K + "px", position: "relative" }); _css(F, { position: "relative" }); J.appendChild(F); F.onload = function () { a.utils.stretch(a.utils.stretching.FILL, F, L, M, this.naturalWidth, this.naturalHeight) }; if (P["playlist.image"]) { F.src = P["playlist.image"] } else { if (P.image) { F.src = P.image } else { if (h.itemImage) { F.src = h.itemImage.src } } } O.appendChild(J) } var E = l - L - K * 2; if (C < e.itemheight * d.length) { E -= 15 } var D = document.createElement("div"); _css(D, { position: "relative", height: "100%", overflow: "hidden" }); var G = document.createElement("span"); if (P.duration > 0) { G.className = "duration"; _css(G, { fontSize: (e.fontsize ? e.fontsize : 11) + "px", fontWeight: (e.fontweight ? e.fontweight : "bold"), width: "40px", height: e.fontsize ? e.fontsize + 10 : 20, lineHeight: 24, "float": "right", styleFloat: "right", cssFloat: "right" }); G.innerHTML = _utils.timeFormat(P.duration); D.appendChild(G) } var N = document.createElement("span"); N.className = "title"; _css(N, { padding: "5px 5px 0 " + (K ? 0 : "5px"), height: e.fontsize ? e.fontsize + 10 : 20, lineHeight: e.fontsize ? e.fontsize + 10 : 20, overflow: "hidden", "float": "left", styleFloat: "left", cssFloat: "left", width: ((P.duration > 0) ? E - 50 : E) - 10 + "px", fontSize: (e.fontsize ? e.fontsize : 13) + "px", fontWeight: (e.fontweight ? e.fontweight : "bold") }); N.innerHTML = P ? P.title : ""; D.appendChild(N); if (P.description) { var H = document.createElement("span"); H.className = "description"; _css(H, { display: "block", "float": "left", styleFloat: "left", cssFloat: "left", margin: 0, paddingLeft: N.style.paddingLeft, paddingRight: N.style.paddingRight, lineHeight: (e.fontsize ? e.fontsize + 4 : 16) + "px", overflow: "hidden", position: "relative" }); H.innerHTML = P.description; D.appendChild(H) } O.appendChild(D); return O } function s(E) { x.innerHTML = ""; d = w.jwGetPlaylist(); if (!d) { return } items = []; f = p(); for (var F = 0; F < d.length; F++) { var D = q(F); D.onclick = z(F); f.appendChild(D); items.push(D) } k = w.jwGetPlaylistIndex(); o(k)(); x.appendChild(f); if (_utils.isIOS() && window.iScroll) { f.style.height = e.itemheight * d.length + "px"; var G = new iScroll(x.id) } } function z(D) { return function () { w.jwPlaylistItem(D); w.jwPlay(true) } } function n() { f.scrollTop = w.jwGetPlaylistIndex() * e.itemheight } function v() { return e.thumbs.toString().toLowerCase() == "true" } function u(D) { if (k >= 0) { o(k)(); k = D.index } o(D.index)(); n() } function m() { if (e.position == a.html5.view.positions.OVER) { switch (w.jwGetState()) { case a.api.events.state.IDLE: _show(x); break; default: _hide(x); break } } } function A() { for (var D in h) { h[D] = t(D) } } function t(D) { return w.skin.getSkinElement("playlist", D) } j(); return this } })(jwplayer); (function (b) { b.html5.playlistitem = function (d) { var e = { author: "", date: "", description: "", image: "", link: "", mediaid: "", tags: "", title: "", provider: "", file: "", streamer: "", duration: -1, start: 0, currentLevel: -1, levels: [] }; var c = b.utils.extend({}, e, d); if (c.type) { c.provider = c.type; delete c.type } if (c.levels.length === 0) { c.levels[0] = new b.html5.playlistitemlevel(c) } if (!c.provider) { c.provider = a(c.levels[0]) } else { c.provider = c.provider.toLowerCase() } return c }; function a(e) { if (b.utils.isYouTube(e.file)) { return "youtube" } else { var f = b.utils.extension(e.file); var c; if (f && b.utils.extensionmap[f]) { if (f == "m3u8") { return "video" } c = b.utils.extensionmap[f].html5 } else { if (e.type) { c = e.type } } if (c) { var d = c.split("/")[0]; if (d == "audio") { return "sound" } else { if (d == "video") { return d } } } } return "" } })(jwplayer); (function (a) { a.html5.playlistitemlevel = function (b) { var d = { file: "", streamer: "", bitrate: 0, width: 0 }; for (var c in d) { if (a.utils.exists(b[c])) { d[c] = b[c] } } return d } })(jwplayer); (function (a) { a.html5.playlistloader = function () { var c = new a.html5.eventdispatcher(); a.utils.extend(this, c); this.load = function (e) { a.utils.ajax(e, d, b) }; function d(g) { var f = []; try { var f = a.utils.parsers.rssparser.parse(g.responseXML.firstChild); c.sendEvent(a.api.events.JWPLAYER_PLAYLIST_LOADED, { playlist: new a.html5.playlist({ playlist: f }) }) } catch (h) { b("Could not parse the playlist") } } function b(e) { c.sendEvent(a.api.events.JWPLAYER_ERROR, { error: e ? e : "could not load playlist for whatever reason.  too bad" }) } } })(jwplayer); (function (a) { a.html5.skin = function () { var b = {}; var c = false; this.load = function (d, e) { new a.html5.skinloader(d, function (f) { c = true; b = f; e() }, function () { new a.html5.skinloader("", function (f) { c = true; b = f; e() }) }) }; this.getSkinElement = function (d, e) { if (c) { try { return b[d].elements[e] } catch (f) { a.utils.log("No such skin component / element: ", [d, e]) } } return null }; this.getComponentSettings = function (d) { if (c) { return b[d].settings } return null }; this.getComponentLayout = function (d) { if (c) { return b[d].layout } return null } } })(jwplayer); (function (a) { a.html5.skinloader = function (f, p, k) { var o = {}; var c = p; var l = k; var e = true; var j; var n = f; var s = false; function m() { if (typeof n != "string" || n === "") { d(a.html5.defaultSkin().xml) } else { a.utils.ajax(a.utils.getAbsolutePath(n), function (t) { try { if (a.utils.exists(t.responseXML)) { d(t.responseXML); return } } catch (u) { h() } d(a.html5.defaultSkin().xml) }, function (t) { d(a.html5.defaultSkin().xml) }) } } function d(y) { var E = y.getElementsByTagName("component"); if (E.length === 0) { return } for (var H = 0; H < E.length; H++) { var C = E[H].getAttribute("name"); var B = { settings: {}, elements: {}, layout: {} }; o[C] = B; var G = E[H].getElementsByTagName("elements")[0].getElementsByTagName("element"); for (var F = 0; F < G.length; F++) { b(G[F], C) } var z = E[H].getElementsByTagName("settings")[0]; if (z && z.childNodes.length > 0) { var K = z.getElementsByTagName("setting"); for (var P = 0; P < K.length; P++) { var Q = K[P].getAttribute("name"); var I = K[P].getAttribute("value"); var x = /color$/.test(Q) ? "color" : null; o[C].settings[Q] = a.utils.typechecker(I, x) } } var L = E[H].getElementsByTagName("layout")[0]; if (L && L.childNodes.length > 0) { var M = L.getElementsByTagName("group"); for (var w = 0; w < M.length; w++) { var A = M[w]; o[C].layout[A.getAttribute("position")] = { elements: [] }; for (var O = 0; O < A.attributes.length; O++) { var D = A.attributes[O]; o[C].layout[A.getAttribute("position")][D.name] = D.value } var N = A.getElementsByTagName("*"); for (var v = 0; v < N.length; v++) { var t = N[v]; o[C].layout[A.getAttribute("position")].elements.push({ type: t.tagName }); for (var u = 0; u < t.attributes.length; u++) { var J = t.attributes[u]; o[C].layout[A.getAttribute("position")].elements[v][J.name] = J.value } if (!a.utils.exists(o[C].layout[A.getAttribute("position")].elements[v].name)) { o[C].layout[A.getAttribute("position")].elements[v].name = t.tagName } } } } e = false; r() } } function r() { clearInterval(j); if (!s) { j = setInterval(function () { q() }, 100) } } function b(y, x) { var w = new Image(); var t = y.getAttribute("name"); var v = y.getAttribute("src"); var A; if (v.indexOf("data:image/png;base64,") === 0) { A = v } else { var u = a.utils.getAbsolutePath(n); var z = u.substr(0, u.lastIndexOf("/")); A = [z, x, v].join("/") } o[x].elements[t] = { height: 0, width: 0, src: "", ready: false, image: w }; w.onload = function (B) { g(w, t, x) }; w.onerror = function (B) { s = true; r(); l() }; w.src = A } function h() { for (var u in o) { var w = o[u]; for (var t in w.elements) { var x = w.elements[t]; var v = x.image; v.onload = null; v.onerror = null; delete x.image; delete w.elements[t] } delete o[u] } } function q() { for (var t in o) { if (t != "properties") { for (var u in o[t].elements) { if (!o[t].elements[u].ready) { return } } } } if (e === false) { clearInterval(j); c(o) } } function g(t, v, u) { if (o[u] && o[u].elements[v]) { o[u].elements[v].height = t.height; o[u].elements[v].width = t.width; o[u].elements[v].src = t.src; o[u].elements[v].ready = true; r() } else { a.utils.log("Loaded an image for a missing element: " + u + "." + v) } } m() } })(jwplayer); (function (a) { a.html5.api = function (c, n) { var m = {}; var f = document.createElement("div"); c.parentNode.replaceChild(f, c); f.id = c.id; m.version = a.version; m.id = f.id; var l = new a.html5.model(m, f, n); var j = new a.html5.view(m, f, l); var k = new a.html5.controller(m, f, l, j); m.skin = new a.html5.skin(); m.jwPlay = function (o) { if (typeof o == "undefined") { e() } else { if (o.toString().toLowerCase() == "true") { k.play() } else { k.pause() } } }; m.jwPause = function (o) { if (typeof o == "undefined") { e() } else { if (o.toString().toLowerCase() == "true") { k.pause() } else { k.play() } } }; function e() { if (l.state == a.api.events.state.PLAYING || l.state == a.api.events.state.BUFFERING) { k.pause() } else { k.play() } } m.jwStop = k.stop; m.jwSeek = k.seek; m.jwPlaylistItem = k.item; m.jwPlaylistNext = k.next; m.jwPlaylistPrev = k.prev; m.jwResize = k.resize; m.jwLoad = k.load; function h(o) { return function () { return l[o] } } function d(o, q, p) { return function () { var r = l.plugins.object[o]; if (r && r[q] && typeof r[q] == "function") { r[q].apply(r, p) } } } m.jwGetItem = h("item"); m.jwGetPosition = h("position"); m.jwGetDuration = h("duration"); m.jwGetBuffer = h("buffer"); m.jwGetWidth = h("width"); m.jwGetHeight = h("height"); m.jwGetFullscreen = h("fullscreen"); m.jwSetFullscreen = k.setFullscreen; m.jwGetVolume = h("volume"); m.jwSetVolume = k.setVolume; m.jwGetMute = h("mute"); m.jwSetMute = k.setMute; m.jwGetStretching = h("stretching"); m.jwGetState = h("state"); m.jwGetVersion = function () { return m.version }; m.jwGetPlaylist = function () { return l.playlist }; m.jwGetPlaylistIndex = m.jwGetItem; m.jwAddEventListener = k.addEventListener; m.jwRemoveEventListener = k.removeEventListener; m.jwSendEvent = k.sendEvent; m.jwDockSetButton = function (r, o, p, q) { if (l.plugins.object.dock && l.plugins.object.dock.setButton) { l.plugins.object.dock.setButton(r, o, p, q) } }; m.jwControlbarShow = d("controlbar", "show"); m.jwControlbarHide = d("controlbar", "hide"); m.jwDockShow = d("dock", "show"); m.jwDockHide = d("dock", "hide"); m.jwDisplayShow = d("display", "show"); m.jwDisplayHide = d("display", "hide"); m.jwGetLevel = function () { }; m.jwGetBandwidth = function () { }; m.jwGetLockState = function () { }; m.jwLock = function () { }; m.jwUnlock = function () { }; function b() { if (l.config.playlistfile) { l.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, g); l.loadPlaylist(l.config.playlistfile) } else { if (typeof l.config.playlist == "string") { l.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, g); l.loadPlaylist(l.config.playlist) } else { l.loadPlaylist(l.config); setTimeout(g, 25) } } } function g(o) { l.removeEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, g); l.setupPlugins(); j.setup(); var o = { id: m.id, version: m.version }; k.playerReady(o) } if (l.config.chromeless && !a.utils.isIOS()) { b() } else { m.skin.load(l.config.skin, b) } return m } })(jwplayer) };





/*
* jQuery Tooltip plugin 1.3
*
* http://bassistance.de/jquery-plugins/jquery-plugin-tooltip/
* http://docs.jquery.com/Plugins/Tooltip
*
* Copyright (c) 2006 - 2008 Jörn Zaefferer
*
* $Id: jquery.tooltip.js 5741 2008-06-21 15:22:16Z joern.zaefferer $
* 
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/
; (function ($) {
    var helper = {}, current, title, tID, IE = $.browser.msie && /MSIE\s(5\.5|6\.)/.test(navigator.userAgent), track = false; $.tooltipex = { blocked: false, defaults: { delay: 200, fade: false, showURL: true, extraClass: "", top: 15, left: 15, id: "tooltip" }, block: function () { $.tooltipex.blocked = !$.tooltipex.blocked; } }; $.fn.extend({ tooltipex: function (settings) { settings = $.extend({}, $.tooltipex.defaults, settings); createHelper(settings); return this.each(function () { $.data(this, "tooltip", settings); this.tOpacity = helper.parent.css("opacity"); this.tooltipexText = this.title; $(this).removeAttr("title"); this.alt = ""; }).mouseover(save).mouseout(hide).click(hide); }, fixPNG: IE ? function () { return this.each(function () { var image = $(this).css('backgroundImage'); if (image.match(/^url\(["']?(.*\.png)["']?\)$/i)) { image = RegExp.$1; $(this).css({ 'backgroundImage': 'none', 'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + image + "')" }).each(function () { var position = $(this).css('position'); if (position != 'absolute' && position != 'relative') $(this).css('position', 'relative'); }); } }); } : function () { return this; }, unfixPNG: IE ? function () { return this.each(function () { $(this).css({ 'filter': '', backgroundImage: '' }); }); } : function () { return this; }, hideWhenEmpty: function () { return this.each(function () { $(this)[$(this).html() ? "show" : "hide"](); }); }, url: function () { return this.attr('href') || this.attr('src'); } }); function createHelper(settings) { if (helper.parent) return; helper.parent = $('<div id="' + settings.id + '"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide(); if ($.fn.bgiframe) helper.parent.bgiframe(); helper.title = $('h3', helper.parent); helper.body = $('div.body', helper.parent); helper.url = $('div.url', helper.parent); } function settings(element) { return $.data(element, "tooltip"); } function handle(event) {
        if (settings(this).delay) tID = setTimeout(show, settings(this).delay); else
            show(); track = !!settings(this).track; $(document.body).bind('mousemove', update); update(event);
    } function save() {
        if ($.tooltipex.blocked || this == current || (!this.tooltipText && !settings(this).bodyHandler)) return; current = this; title = this.tooltipText; if (settings(this).bodyHandler) { helper.title.hide(); var bodyContent = settings(this).bodyHandler.call(this); if (bodyContent.nodeType || bodyContent.jquery) { helper.body.empty().append(bodyContent) } else { helper.body.html(bodyContent); } helper.body.show(); } else if (settings(this).showBody) { var parts = title.split(settings(this).showBody); helper.title.html(parts.shift()).show(); helper.body.empty(); for (var i = 0, part; (part = parts[i]); i++) { if (i > 0) helper.body.append("<br/>"); helper.body.append(part); } helper.body.hideWhenEmpty(); } else { helper.title.html(title).show(); helper.body.hide(); } if (settings(this).showURL && $(this).url()) helper.url.html($(this).url().replace('http://', '')).show(); else
            helper.url.hide(); helper.parent.addClass(settings(this).extraClass); if (settings(this).fixPNG) helper.parent.fixPNG(); handle.apply(this, arguments);
    } function show() {
        tID = null; if ((!IE || !$.fn.bgiframe) && settings(current).fade) {
            if (helper.parent.is(":animated")) helper.parent.stop().show().fadeTo(settings(current).fade, current.tOpacity); else
                helper.parent.is(':visible') ? helper.parent.fadeTo(settings(current).fade, current.tOpacity) : helper.parent.fadeIn(settings(current).fade);
        } else { helper.parent.show(); } update();
    } function update(event) { if ($.tooltipex.blocked) return; if (event && event.target.tagName == "OPTION") { return; } if (!track && helper.parent.is(":visible")) { $(document.body).unbind('mousemove', update) } if (current == null) { $(document.body).unbind('mousemove', update); return; } helper.parent.removeClass("viewport-right").removeClass("viewport-bottom"); var left = helper.parent[0].offsetLeft; var top = helper.parent[0].offsetTop; if (event) { left = event.pageX + settings(current).left; top = event.pageY + settings(current).top; var right = 'auto'; if (settings(current).positionLeft) { right = $(window).width() - left; left = 'auto'; } helper.parent.css({ left: left, right: right, top: top }); } var v = viewport(), h = helper.parent[0]; if (v.x + v.cx < h.offsetLeft + h.offsetWidth) { left -= h.offsetWidth + 20 + settings(current).left; helper.parent.css({ left: left + 'px' }).addClass("viewport-right"); } if (v.y + v.cy < h.offsetTop + h.offsetHeight) { top -= h.offsetHeight + 20 + settings(current).top; helper.parent.css({ top: top + 'px' }).addClass("viewport-bottom"); } } function viewport() { return { x: $(window).scrollLeft(), y: $(window).scrollTop(), cx: $(window).width(), cy: $(window).height() }; } function hide(event) {
        if ($.tooltipex.blocked) return; if (tID) clearTimeout(tID); current = null; var tsettings = settings(this); function complete() { helper.parent.removeClass(tsettings.extraClass).hide().css("opacity", ""); } if ((!IE || !$.fn.bgiframe) && tsettings.fade) {
            if (helper.parent.is(':animated')) helper.parent.stop().fadeTo(tsettings.fade, 0, complete); else
                helper.parent.stop().fadeOut(tsettings.fade, complete);
        } else
            complete(); if (settings(this).fixPNG) helper.parent.unfixPNG();
    }
})(jQuery);


/*	
 *	jQuery carouFredSel 5.6.1
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *	
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H($){8($.1P.1J)J;$.1P.1J=H(y,z){8(1g.V==0){1e(M,\'5s 4q 6u 1m "\'+1g.3U+\'".\');J 1g}8(1g.V>1){J 1g.1K(H(){$(1g).1J(y,z)})}F A=1g,$19=1g[0];8(A.1r(\'4r\')){F B=A.1D(\'34\',\'3v\');A.X(\'34\',[\'5t\',M])}Q{F B=O}A.3V=H(o,b,c){o=3W($19,o);F e=[\'G\',\'1n\',\'T\',\'17\',\'1a\',\'1b\'];1m(F a=0,l=e.V;a<l;a++){o[e[a]]=3W($19,o[e[a]])}8(K o.1n==\'13\'){8(o.1n<=50)o.1n={\'G\':o.1n};Q o.1n={\'1j\':o.1n}}Q{8(K o.1n==\'1k\')o.1n={\'1G\':o.1n}}8(K o.G==\'13\')o.G={\'P\':o.G};Q 8(o.G==\'1d\')o.G={\'P\':o.G,\'S\':o.G,\'1l\':o.G};8(K o.G!=\'1o\')o.G={};8(b)2u=$.25(M,{},$.1P.1J.4s,o);7=$.25(M,{},$.1P.1J.4s,o);8(K 7.G.12!=\'1o\')7.G.12={};8(7.G.2I==0&&K c==\'13\'){7.G.2I=c}C.4t=(7.2J);C.2k=(7.2k==\'4u\'||7.2k==\'1t\')?\'1a\':\'17\';F f=[[\'S\',\'35\',\'26\',\'1l\',\'5u\',\'2K\',\'1t\',\'2L\',\'1E\',0,1,2,3],[\'1l\',\'5u\',\'2K\',\'S\',\'35\',\'26\',\'2L\',\'1t\',\'3X\',3,2,1,0]];F g=f[0].V,5v=(7.2k==\'2M\'||7.2k==\'1t\')?0:1;7.d={};1m(F d=0;d<g;d++){7.d[f[0][d]]=f[5v][d]}F h=A.Z();1x(K 7.G.P){W\'1o\':7.G.12.2N=7.G.P.2N;7.G.12.27=7.G.P.27;7.G.P=O;18;W\'1k\':8(7.G.P==\'1d\'){7.G.12.1d=M}Q{7.G.12.2l=7.G.P}7.G.P=O;18;W\'H\':7.G.12.2l=7.G.P;7.G.P=O;18}8(K 7.G.1v==\'1y\'){7.G.1v=(h.1v(\':2O\').V>0)?\':P\':\'*\'}8(7[7.d[\'S\']]==\'T\'){7[7.d[\'S\']]=3w(h,7,\'26\')}8(3Y(7[7.d[\'S\']])&&!7.2J){7[7.d[\'S\']]=3Z(36($1A.3a(),7,\'35\'),7[7.d[\'S\']]);C.4t=M}8(7[7.d[\'1l\']]==\'T\'){7[7.d[\'1l\']]=3w(h,7,\'2K\')}8(!7.G[7.d[\'S\']]){8(7.2J){1e(M,\'5w a \'+7.d[\'S\']+\' 1m 6v G!\');7.G[7.d[\'S\']]=3w(h,7,\'26\')}Q{7.G[7.d[\'S\']]=(4v(h,7,\'26\'))?\'1d\':h[7.d[\'26\']](M)}}8(!7.G[7.d[\'1l\']]){7.G[7.d[\'1l\']]=(4v(h,7,\'2K\'))?\'1d\':h[7.d[\'2K\']](M)}8(!7[7.d[\'1l\']]){7[7.d[\'1l\']]=7.G[7.d[\'1l\']]}8(!7.G.P&&!7.2J){8(7.G[7.d[\'S\']]==\'1d\'){7.G.12.1d=M}8(!7.G.12.1d){8(K 7[7.d[\'S\']]==\'13\'){7.G.P=1L.3x(7[7.d[\'S\']]/7.G[7.d[\'S\']])}Q{F i=36($1A.3a(),7,\'35\');7.G.P=1L.3x(i/7.G[7.d[\'S\']]);7[7.d[\'S\']]=7.G.P*7.G[7.d[\'S\']];8(!7.G.12.2l)7.1B=O}8(7.G.P==\'6w\'||7.G.P<1){1e(M,\'28 a 4w 13 3y P G: 5w 41 "1d".\');7.G.12.1d=M}}}8(!7[7.d[\'S\']]){7[7.d[\'S\']]=\'1d\';8(!7.2J&&7.G.1v==\'*\'&&!7.G.12.1d&&7.G[7.d[\'S\']]!=\'1d\'){7[7.d[\'S\']]=7.G.P*7.G[7.d[\'S\']];7.1B=O}}8(7.G.12.1d){7.3z=(7[7.d[\'S\']]==\'1d\')?36($1A.3a(),7,\'35\'):7[7.d[\'S\']];8(7.1B===O){7[7.d[\'S\']]=\'1d\'}7.G.P=2P(h,7,0)}Q 8(7.G.1v!=\'*\'){7.G.12.42=7.G.P;7.G.P=3A(h,7,0)}8(K 7.1B==\'1y\'){7.1B=(7[7.d[\'S\']]==\'1d\')?O:\'4x\'}7.G.P=2Q(7.G.P,7,7.G.12.2l,$19);7.G.12.2m=7.G.P;7.1u=O;8(7.2J){8(!7.G.12.2N)7.G.12.2N=7.G.P;8(!7.G.12.27)7.G.12.27=7.G.P;7.1B=O;7.1i=[0,0,0,0];F j=$1A.1W(\':P\');8(j)$1A.3b();F k=3Z(36($1A.3a(),7,\'35\'),7[7.d[\'S\']]);8(K 7[7.d[\'S\']]==\'13\'&&k<7[7.d[\'S\']]){k=7[7.d[\'S\']]}8(j)$1A.3c();F m=4y(1L.2v(k/7.G[7.d[\'S\']]),7.G.12);8(m>h.V){m=h.V}F n=1L.3x(k/m),4z=7[7.d[\'1l\']],5x=3Y(4z);h.1K(H(){F a=$(1g),4A=n-5y(a,7,\'6x\');a[7.d[\'S\']](4A);8(5x){a[7.d[\'1l\']](3Z(4A,4z))}});7.G.P=m;7.G[7.d[\'S\']]=n;7[7.d[\'S\']]=m*n}Q{7.1i=5z(7.1i);8(7.1B==\'2L\')7.1B=\'1t\';8(7.1B==\'4B\')7.1B=\'2M\';1x(7.1B){W\'4x\':W\'1t\':W\'2M\':8(7[7.d[\'S\']]!=\'1d\'){F p=43(3d(h,7),7);7.1u=M;7.1i[7.d[1]]=p[1];7.1i[7.d[3]]=p[0]}18;2w:7.1B=O;7.1u=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?O:M;18}}8(K 7.2n==\'1s\'&&7.2n)7.2n=\'6y\'+A.6z(\'6A\');8(K 7.G.3e!=\'13\')7.G.3e=7.G.P;8(K 7.1n.1j!=\'13\')7.1n.1j=5A;8(K 7.1n.G==\'1y\')7.1n.G=(7.G.12.1d||7.G.1v!=\'*\')?\'P\':7.G.P;7.T=3B($19,7.T,\'T\');7.17=3B($19,7.17);7.1a=3B($19,7.1a);7.1b=3B($19,7.1b,\'1b\');7.T=$.25(M,{},7.1n,7.T);7.17=$.25(M,{},7.1n,7.17);7.1a=$.25(M,{},7.1n,7.1a);7.1b=$.25(M,{},7.1n,7.1b);8(K 7.1b.44!=\'1s\')7.1b.44=O;8(K 7.1b.3f!=\'H\'&&7.1b.3f!==O)7.1b.3f=$.1P.1J.5B;8(K 7.T.1H!=\'1s\')7.T.1H=M;8(K 7.T.4C!=\'13\')7.T.4C=0;8(K 7.T.45==\'1y\')7.T.45=M;8(K 7.T.4D!=\'1s\')7.T.4D=M;8(K 7.T.3g!=\'13\')7.T.3g=(7.T.1j<10)?6B:7.T.1j*5;8(7.29){7.29=4E(7.29)}8(I.1e){1e(I,\'3h S: \'+7.S);1e(I,\'3h 1l: \'+7.1l);8(7.3z)1e(I,\'6C \'+7.d[\'S\']+\': \'+7.3z);1e(I,\'5C 6D: \'+7.G.S);1e(I,\'5C 6E: \'+7.G.1l);1e(I,\'46 3y G P: \'+7.G.P);8(7.T.1H)1e(I,\'46 3y G 4F 6F: \'+7.T.G);8(7.17.Y)1e(I,\'46 3y G 4F 4G: \'+7.17.G);8(7.1a.Y)1e(I,\'46 3y G 4F 5D: \'+7.1a.G)}};A.5E=H(){A.1r(\'4r\',M);F a={\'4H\':A.16(\'4H\'),\'4I\':A.16(\'4I\'),\'3C\':A.16(\'3C\'),\'2L\':A.16(\'2L\'),\'2M\':A.16(\'2M\'),\'4B\':A.16(\'4B\'),\'1t\':A.16(\'1t\'),\'S\':A.16(\'S\'),\'1l\':A.16(\'1l\'),\'4J\':A.16(\'4J\'),\'1E\':A.16(\'1E\'),\'3X\':A.16(\'3X\'),\'4K\':A.16(\'4K\')};1x(a.3C){W\'4L\':F b=\'4L\';18;W\'5F\':F b=\'5F\';18;2w:F b=\'6G\'}$1A.16(a).16({\'6H\':\'2O\',\'3C\':b});A.1r(\'5G\',a).16({\'4H\':\'1t\',\'4I\':\'47\',\'3C\':\'4L\',\'2L\':0,\'1t\':0,\'4J\':0,\'1E\':0,\'3X\':0,\'4K\':0});8(7.1u){A.Z().1K(H(){F m=2o($(1g).16(7.d[\'1E\']));8(2p(m))m=0;$(1g).1r(\'1R\',m)})}};A.5H=H(){A.4M();A.14(L(\'4N\',I),H(e,a){e.1h();8(!C.1Z){8(7.T.Y){7.T.Y.2R(2q(\'48\',I))}}C.1Z=M;8(7.T.1H){7.T.1H=O;A.X(L(\'2S\',I),a)}J M});A.14(L(\'4O\',I),H(e){e.1h();8(C.1S){3D(R)}J M});A.14(L(\'2S\',I),H(e,a,b){e.1h();1F=3i(1F);8(a&&C.1S){R.1Z=M;F c=2x()-R.2T;R.1j-=c;8(R.1p)R.1p.1j-=c;8(R.1Q)R.1Q.1j-=c;3D(R,O)}8(!C.1X&&!C.1S){8(b)1F.3E+=2x()-1F.2T}8(!C.1X){8(7.T.Y){7.T.Y.2R(2q(\'5I\',I))}}C.1X=M;8(7.T.5J){F d=7.T.3g-1F.3E,3F=3G-1L.2v(d*3G/7.T.3g);7.T.5J.1z($19,3F,d)}J M});A.14(L(\'1H\',I),H(e,b,c,d){e.1h();1F=3i(1F);F v=[b,c,d],t=[\'1k\',\'13\',\'1s\'],a=2U(v,t);F b=a[0],c=a[1],d=a[2];8(b!=\'17\'&&b!=\'1a\')b=C.2k;8(K c!=\'13\')c=0;8(K d!=\'1s\')d=O;8(d){C.1Z=O;7.T.1H=M}8(!7.T.1H){e.20();J 1e(I,\'3h 48: 28 2V.\')}8(C.1X){8(7.T.Y){7.T.Y.2y(2q(\'48\',I));7.T.Y.2y(2q(\'5I\',I))}}C.1X=O;1F.2T=2x();F f=7.T.3g+c;3H=f-1F.3E;3F=3G-1L.2v(3H*3G/f);1F.T=6I(H(){8(7.T.5K){7.T.5K.1z($19,3F,3H)}8(C.1S){A.X(L(\'1H\',I),b)}Q{A.X(L(b,I),7.T)}},3H);8(7.T.5L){7.T.5L.1z($19,3F,3H)}J M});A.14(L(\'2W\',I),H(e){e.1h();8(R.1Z){R.1Z=O;C.1X=O;C.1S=M;R.2T=2x();2a(R)}Q{A.X(L(\'1H\',I))}J M});A.14(L(\'17\',I)+\' \'+L(\'1a\',I),H(e,b,f,g){e.1h();8(C.1Z||A.1W(\':2O\')){e.20();J 1e(I,\'3h 48 6J 2O: 28 2V.\')}8(7.G.3e>=N.U){e.20();J 1e(I,\'28 5M G (\'+N.U+\', \'+7.G.3e+\' 5N): 28 2V.\')}F v=[b,f,g],t=[\'1o\',\'13/1k\',\'H\'],a=2U(v,t);F b=a[0],f=a[1],g=a[2];F h=e.4P.1c(I.3j.3I.V);8(K b!=\'1o\'||b==2b)b=7[h];8(K g==\'H\')b.21=g;8(K f!=\'13\'){8(7.G.1v!=\'*\'){f=\'P\'}Q{F i=[f,b.G,7[h].G];1m(F a=0,l=i.V;a<l;a++){8(K i[a]==\'13\'||i[a]==\'5O\'||i[a]==\'P\'){f=i[a];18}}}1x(f){W\'5O\':e.20();J A.1D(h+\'6K\',[b,g]);18;W\'P\':8(!7.G.12.1d&&7.G.1v==\'*\'){f=7.G.P}18}}8(R.1Z){A.X(L(\'2W\',I));A.X(L(\'3k\',I),[h,[b,f,g]]);e.20();J 1e(I,\'3h 6L 2V.\')}8(b.1j>0){8(C.1S){8(b.3k)A.X(L(\'3k\',I),[h,[b,f,g]]);e.20();J 1e(I,\'3h 6M 2V.\')}}8(b.4Q&&!b.4Q.1z($19)){e.20();J 1e(I,\'6N "4Q" 6O O.\')}1F.3E=0;A.X(\'34\',[\'5P\'+h,[b,f]]);8(7.29){F s=7.29,c=[b,f];1m(F j=0,l=s.V;j<l;j++){F d=h;8(!s[j][1])c[0]=s[j][0].1D(\'34\',[\'5Q\',d]);8(!s[j][2])d=(d==\'17\')?\'1a\':\'17\';c[1]=f+s[j][3];s[j][0].X(\'34\',[\'5P\'+d,c])}}J M});A.14(L(\'6P\',I),H(e,f,g){e.1h();F h=A.Z();8(!7.1M){8(N.11==0){8(7.3l){A.X(L(\'1a\',I),N.U-1)}J e.20()}}8(7.1u)1N(h,7);8(K g!=\'13\'){8(7.G.12.1d){g=4a(h,7,N.U-1)}Q 8(7.G.1v!=\'*\'){F i=(K f.G==\'13\')?f.G:4R(A,7);g=5R(h,7,N.U-1,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}8(!7.1M){8(N.U-g<N.11){g=N.U-N.11}}7.G.12.2m=7.G.P;8(7.G.12.1d){F j=2P(h,7,N.U-g);8(7.G.P+g<=j&&g<N.U){g++;j=2P(h,7,N.U-g)}7.G.P=2Q(j,7,7.G.12.2l,$19)}Q 8(7.G.1v!=\'*\'){F j=3A(h,7,N.U-g);7.G.P=2Q(j,7,7.G.12.2l,$19)}8(7.1u)1N(h,7,M);8(g==0){e.20();J 1e(I,\'0 G 41 1n: 28 2V.\')}1e(I,\'5S \'+g+\' G 4G.\');N.11+=g;22(N.11>=N.U){N.11-=N.U}8(!7.1M){8(N.11==0&&f.4c)f.4c.1z($19);8(!7.3l)2X(7,N.11,I)}A.Z().1c(N.U-g,N.U).6Q(A);8(N.U<7.G.P+g){A.Z().1c(0,(7.G.P+g)-N.U).4d(M).3J(A)}F h=A.Z(),2r=5T(h,7,g),1T=5U(h,7),2c=h.1O(g-1),2d=2r.2Y(),2z=1T.2Y();8(7.1u)1N(h,7);8(7.1B){F p=43(1T,7),k=p[0],2s=p[1]}Q{F k=0,2s=0}F l=(k<0)?7.1i[7.d[3]]:0;8(f.1I==\'5V\'&&7.G.P<g){F m=h.1c(7.G.12.2m,g),4e=7.G[7.d[\'S\']];m.1K(H(){F a=$(1g);a.1r(\'4f\',a.1W(\':2O\')).3b()});7.G[7.d[\'S\']]=\'1d\'}Q{F m=O}F n=3m(h.1c(0,g),7,\'S\'),2e=4g(2A(1T,7,M),7,!7.1u);8(m)7.G[7.d[\'S\']]=4e;8(7.1u){1N(h,7,M);8(2s>=0){1N(2d,7,7.1i[7.d[1]])}1N(2c,7,7.1i[7.d[3]])}8(7.1B){7.1i[7.d[1]]=2s;7.1i[7.d[3]]=k}F o={},1w=f.1j;8(f.1I==\'47\')1w=0;Q 8(1w==\'T\')1w=7.1n.1j/7.1n.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=23(1w,f.1G);8(7[7.d[\'S\']]==\'1d\'||7[7.d[\'1l\']]==\'1d\'){R.1f.1q([$1A,2e])}8(7.1u){F q=7.1i[7.d[3]];8(2z.4S(2c).V){F r={};r[7.d[\'1E\']]=2c.1r(\'1R\');8(k<0)2c.16(r);Q R.1f.1q([2c,r])}8(2z.4S(2d).V){F s={};s[7.d[\'1E\']]=2d.1r(\'1R\');R.1f.1q([2d,s])}8(2s>=0){F t={};t[7.d[\'1E\']]=2z.1r(\'1R\')+7.1i[7.d[1]];R.1f.1q([2z,t])}}Q{F q=0}o[7.d[\'1t\']]=q;F u=[2r,1T,2e,1w];8(f.2f)f.2f.3K($19,u);1Y.2f=3L(1Y.2f,$19,u);1x(f.1I){W\'2B\':W\'2g\':W\'2C\':W\'2h\':R.1p=23(R.1j,R.1G);R.1Q=23(R.1j,R.1G);R.1j=0;18}1x(f.1I){W\'2g\':W\'2C\':W\'2h\':F v=A.4d().3J($1A);18}1x(f.1I){W\'2h\':v.Z().1c(0,g).1U();W\'2g\':W\'2C\':v.Z().1c(7.G.P).1U();18}1x(f.1I){W\'2B\':R.1p.1f.1q([A,{\'2i\':0}]);18;W\'2g\':v.16({\'2i\':0});R.1p.1f.1q([A,{\'S\':\'+=0\'},H(){v.1U()}]);R.1Q.1f.1q([v,{\'2i\':1}]);18;W\'2C\':R=4T(R,A,v,7,M);18;W\'2h\':R=4U(R,A,v,7,M,g);18}F w=H(){F b=7.G.P+g-N.U;8(b>0){A.Z().1c(N.U).1U();2r=$(A.Z().1c(N.U-(7.G.P-b)).4h().5W(A.Z().1c(0,b).4h()))}8(m){m.1K(H(){F a=$(1g);8(!a.1r(\'4f\'))a.3c()})}8(7.1u){F c=A.Z().1O(7.G.P+g-1);c.16(7.d[\'1E\'],c.1r(\'1R\'))}R.1f=[];8(R.1p)R.1p=23(R.4V,R.1G);F d=H(){1x(f.1I){W\'2B\':W\'2g\':A.16(\'1v\',\'\');18}R.1Q=23(0,2b);C.1S=O;F a=[2r,1T,2e];8(f.21)f.21.3K($19,a);1Y.21=3L(1Y.21,$19,a);8(1V.V){A.X(L(1V[0][0],I),1V[0][1]);1V.5X()}8(!C.1X)A.X(L(\'1H\',I))};1x(f.1I){W\'2B\':R.1p.1f.1q([A,{\'2i\':1},d]);2a(R.1p);18;W\'2h\':R.1p.1f.1q([A,{\'S\':\'+=0\'},d]);2a(R.1p);18;2w:d();18}};R.1f.1q([A,o,w]);C.1S=M;A.16(7.d[\'1t\'],-(n-l));1F=3i(1F);2a(R);4W(7.2n,A.1D(L(\'3v\',I)));A.X(L(\'2D\',I),[O,2e]);J M});A.14(L(\'6R\',I),H(e,f,g){e.1h();F h=A.Z();8(!7.1M){8(N.11==7.G.P){8(7.3l){A.X(L(\'17\',I),N.U-1)}J e.20()}}8(7.1u)1N(h,7);8(K g!=\'13\'){8(7.G.1v!=\'*\'){F i=(K f.G==\'13\')?f.G:4R(A,7);g=5Y(h,7,0,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}F j=(N.11==0)?N.U:N.11;8(!7.1M){8(7.G.12.1d){F k=2P(h,7,g),i=4a(h,7,j-1)}Q{F k=7.G.P,i=7.G.P}8(g+k>j){g=j-i}}7.G.12.2m=7.G.P;8(7.G.12.1d){F k=4X(h,7,g,j);22(7.G.P-g>=k&&g<N.U){g++;k=4X(h,7,g,j)}7.G.P=2Q(k,7,7.G.12.2l,$19)}Q 8(7.G.1v!=\'*\'){F k=3A(h,7,g);7.G.P=2Q(k,7,7.G.12.2l,$19)}8(7.1u)1N(h,7,M);8(g==0){e.20();J 1e(I,\'0 G 41 1n: 28 2V.\')}1e(I,\'5S \'+g+\' G 5D.\');N.11-=g;22(N.11<0){N.11+=N.U}8(!7.1M){8(N.11==7.G.P&&f.4c)f.4c.1z($19);8(!7.3l)2X(7,N.11,I)}8(N.U<7.G.P+g){A.Z().1c(0,(7.G.P+g)-N.U).4d(M).3J(A)}F h=A.Z(),2r=4Y(h,7),1T=4Z(h,7,g),2c=h.1O(g-1),2d=2r.2Y(),2z=1T.2Y();8(7.1u)1N(h,7);8(7.1B){F p=43(1T,7),l=p[0],2s=p[1]}Q{F l=0,2s=0}8(f.1I==\'5V\'&&7.G.12.2m<g){F m=h.1c(7.G.12.2m,g),4e=7.G[7.d[\'S\']];m.1K(H(){F a=$(1g);a.1r(\'4f\',a.1W(\':2O\')).3b()});7.G[7.d[\'S\']]=\'1d\'}Q{F m=O}F n=3m(h.1c(0,g),7,\'S\'),2e=4g(2A(1T,7,M),7,!7.1u);8(m)7.G[7.d[\'S\']]=4e;8(7.1B){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}8(7.1u){1N(h,7,M);1N(2d,7,7.1i[7.d[1]])}8(7.1B){7.1i[7.d[1]]=2s;7.1i[7.d[3]]=l}F o={},1w=f.1j;8(f.1I==\'47\')1w=0;Q 8(1w==\'T\')1w=7.1n.1j/7.1n.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=23(1w,f.1G);8(7[7.d[\'S\']]==\'1d\'||7[7.d[\'1l\']]==\'1d\'){R.1f.1q([$1A,2e])}8(7.1u){F q=2z.1r(\'1R\');8(2s>=0){q+=7.1i[7.d[1]]}2z.16(7.d[\'1E\'],q);8(2c.4S(2d).V){F r={};r[7.d[\'1E\']]=2d.1r(\'1R\');R.1f.1q([2d,r])}F s=2c.1r(\'1R\');8(l>=0){s+=7.1i[7.d[3]]}F t={};t[7.d[\'1E\']]=s;R.1f.1q([2c,t])}o[7.d[\'1t\']]=-n;8(l<0){o[7.d[\'1t\']]+=l}F u=[2r,1T,2e,1w];8(f.2f)f.2f.3K($19,u);1Y.2f=3L(1Y.2f,$19,u);1x(f.1I){W\'2B\':W\'2g\':W\'2C\':W\'2h\':R.1p=23(R.1j,R.1G);R.1Q=23(R.1j,R.1G);R.1j=0;18}1x(f.1I){W\'2g\':W\'2C\':W\'2h\':F v=A.4d().3J($1A);18}1x(f.1I){W\'2h\':v.Z().1c(7.G.12.2m).1U();18;W\'2g\':W\'2C\':v.Z().1c(0,g).1U();v.Z().1c(7.G.P).1U();18}1x(f.1I){W\'2B\':R.1p.1f.1q([A,{\'2i\':0}]);18;W\'2g\':v.16({\'2i\':0});R.1p.1f.1q([A,{\'S\':\'+=0\'},H(){v.1U()}]);R.1Q.1f.1q([v,{\'2i\':1}]);18;W\'2C\':R=4T(R,A,v,7,O);18;W\'2h\':R=4U(R,A,v,7,O,g);18}F w=H(){F b=7.G.P+g-N.U,5Z=(7.1u)?7.1i[7.d[3]]:0;A.16(7.d[\'1t\'],5Z);8(b>0){A.Z().1c(N.U).1U()}F c=A.Z().1c(0,g).3J(A).2Y();8(b>0){1T=3d(h,7)}8(m){m.1K(H(){F a=$(1g);8(!a.1r(\'4f\'))a.3c()})}8(7.1u){8(N.U<7.G.P+g){F d=A.Z().1O(7.G.P-1);d.16(7.d[\'1E\'],d.1r(\'1R\')+7.1i[7.d[3]])}c.16(7.d[\'1E\'],c.1r(\'1R\'))}R.1f=[];8(R.1p)R.1p=23(R.4V,R.1G);F e=H(){1x(f.1I){W\'2B\':W\'2g\':A.16(\'1v\',\'\');18}R.1Q=23(0,2b);C.1S=O;F a=[2r,1T,2e];8(f.21)f.21.3K($19,a);1Y.21=3L(1Y.21,$19,a);8(1V.V){A.X(L(1V[0][0],I),1V[0][1]);1V.5X()}8(!C.1X)A.X(L(\'1H\',I))};1x(f.1I){W\'2B\':R.1p.1f.1q([A,{\'2i\':1},e]);2a(R.1p);18;W\'2h\':R.1p.1f.1q([A,{\'S\':\'+=0\'},e]);2a(R.1p);18;2w:e();18}};R.1f.1q([A,o,w]);C.1S=M;1F=3i(1F);2a(R);4W(7.2n,A.1D(L(\'3v\',I)));A.X(L(\'2D\',I),[O,2e]);J M});A.14(L(\'2Z\',I),H(e,b,c,d,f,g,h){e.1h();F v=[b,c,d,f,g,h],t=[\'1k/13/1o\',\'13\',\'1s\',\'1o\',\'1k\',\'H\'],a=2U(v,t);F f=a[3],g=a[4],h=a[5];b=3n(a[0],a[1],a[2],N,A);8(b==0)J;8(K f!=\'1o\')f=O;8(C.1S){8(K f!=\'1o\'||f.1j>0)J O}8(g!=\'17\'&&g!=\'1a\'){8(7.1M){8(b<=N.U/2)g=\'1a\';Q g=\'17\'}Q{8(N.11==0||N.11>b)g=\'1a\';Q g=\'17\'}}8(g==\'17\')b=N.U-b;A.X(L(g,I),[f,b,h]);J M});A.14(L(\'6S\',I),H(e,a,b){e.1h();F c=A.1D(L(\'3M\',I));J A.1D(L(\'51\',I),[c-1,a,\'17\',b])});A.14(L(\'6T\',I),H(e,a,b){e.1h();F c=A.1D(L(\'3M\',I));J A.1D(L(\'51\',I),[c+1,a,\'1a\',b])});A.14(L(\'51\',I),H(e,a,b,c,d){e.1h();8(K a!=\'13\')a=A.1D(L(\'3M\',I));F f=7.1b.G||7.G.P,27=1L.2v(N.U/f)-1;8(a<0)a=27;8(a>27)a=0;J A.1D(L(\'2Z\',I),[a*f,0,M,b,c,d])});A.14(L(\'60\',I),H(e,s){e.1h();8(s)s=3n(s,0,M,N,A);Q s=0;s+=N.11;8(s!=0){22(s>N.U)s-=N.U;A.6U(A.Z().1c(s,N.U))}J M});A.14(L(\'29\',I),H(e,s){e.1h();8(s)s=4E(s);Q 8(7.29)s=7.29;Q J 1e(I,\'5s 6V 41 29.\');F n=A.1D(L(\'3v\',I)),x=M;1m(F j=0,l=s.V;j<l;j++){8(!s[j][0].1D(L(\'2Z\',I),[n,s[j][3],M])){x=O}}J x});A.14(L(\'3k\',I),H(e,a,b){e.1h();8(K a==\'H\'){a.1z($19,1V)}Q 8(31(a)){1V=a}Q 8(K a!=\'1y\'){1V.1q([a,b])}J 1V});A.14(L(\'6W\',I),H(e,b,c,d,f){e.1h();F v=[b,c,d,f],t=[\'1k/1o\',\'1k/13/1o\',\'1s\',\'13\'],a=2U(v,t);F b=a[0],c=a[1],d=a[2],f=a[3];8(K b==\'1o\'&&K b.3o==\'1y\')b=$(b);8(K b==\'1k\')b=$(b);8(K b!=\'1o\'||K b.3o==\'1y\'||b.V==0)J 1e(I,\'28 a 4w 1o.\');8(K c==\'1y\')c=\'4i\';8(7.1u){b.1K(H(){F m=2o($(1g).16(7.d[\'1E\']));8(2p(m))m=0;$(1g).1r(\'1R\',m)})}F g=c,3N=\'3N\';8(c==\'4i\'){8(d){8(N.11==0){c=N.U-1;3N=\'61\'}Q{c=N.11;N.11+=b.V}8(c<0)c=0}Q{c=N.U-1;3N=\'61\'}}Q{c=3n(c,f,d,N,A)}8(g!=\'4i\'&&!d){8(c<N.11)N.11+=b.V}8(N.11>=N.U)N.11-=N.U;F h=A.Z().1O(c);8(h.V){h[3N](b)}Q{A.62(b)}N.U=A.Z().V;F i=A.1D(\'52\');3O(7,N.U,I);2X(7,N.11,I);A.X(L(\'53\',I));A.X(L(\'2D\',I),[M,i]);J M});A.14(L(\'63\',I),H(e,c,d,f){e.1h();F v=[c,d,f],t=[\'1k/13/1o\',\'1s\',\'13\'],a=2U(v,t);c=a[0];d=a[1];f=a[2];F g=O;8(c 64 $&&c.V>1){h=$();c.1K(H(i,a){F b=A.X(L(\'63\',I),[$(1g),d,f]);8(b)h=h.6X(b)});J h}8(K c==\'1y\'||c==\'4i\'){h=A.Z().2Y()}Q{c=3n(c,f,d,N,A);F h=A.Z().1O(c);8(h.V){8(c<N.11)N.11-=h.V}}8(h&&h.V){h.6Y();N.U=A.Z().V;F j=A.1D(\'52\');3O(7,N.U,I);2X(7,N.11,I);A.X(L(\'2D\',I),[M,j])}J h});A.14(L(\'2f\',I)+\' \'+L(\'21\',I),H(e,a){e.1h();F b=e.4P.1c(I.3j.3I.V);8(31(a))1Y[b]=a;8(K a==\'H\')1Y[b].1q(a);J 1Y[b]});A.14(L(\'3v\',I),H(e,a){e.1h();8(N.11==0)F b=0;Q F b=N.U-N.11;8(K a==\'H\')a.1z($19,b);J b});A.14(L(\'3M\',I),H(e,a){e.1h();F b=7.1b.G||7.G.P;F c=1L.2v(N.U/b-1);8(N.11==0)F d=0;Q 8(N.11<N.U%b)F d=0;Q 8(N.11==b&&!7.1M)F d=c;Q F d=1L.6Z((N.U-N.11)/b);8(d<0)d=0;8(d>c)d=c;8(K a==\'H\')a.1z($19,d);J d});A.14(L(\'70\',I),H(e,a){e.1h();$i=3d(A.Z(),7);8(K a==\'H\')a.1z($19,$i);J $i});A.14(L(\'1c\',I),H(e,f,l,b){e.1h();8(N.U==0)J O;F v=[f,l,b],t=[\'13\',\'13\',\'H\'],a=2U(v,t);f=(K a[0]==\'13\')?a[0]:0;l=(K a[1]==\'13\')?a[1]:N.U;b=a[2];f+=N.11;l+=N.11;22(f>N.U){f-=N.U}22(l>N.U){l-=N.U}22(f<0){f+=N.U}22(l<0){l+=N.U}F c=A.Z();8(l>f){F d=c.1c(f,l)}Q{F d=$(c.1c(f,N.U).4h().5W(c.1c(0,l).4h()))}8(K b==\'H\')b.1z($19,d);J d});A.14(L(\'1X\',I)+\' \'+L(\'1Z\',I)+\' \'+L(\'1S\',I),H(e,a){e.1h();F b=e.4P.1c(I.3j.3I.V);8(K a==\'H\')a.1z($19,C[b]);J C[b]});A.14(L(\'5Q\',I),H(e,a,b,c){e.1h();F d=O;8(K a==\'H\'){a.1z($19,7)}Q 8(K a==\'1o\'){2u=$.25(M,{},2u,a);8(b!==O)d=M;Q 7=$.25(M,{},7,a)}Q 8(K a!=\'1y\'){8(K b==\'H\'){F f=4j(\'7.\'+a);8(K f==\'1y\')f=\'\';b.1z($19,f)}Q 8(K b!=\'1y\'){8(K c!==\'1s\')c=M;4j(\'2u.\'+a+\' = b\');8(c!==O)d=M;Q 4j(\'7.\'+a+\' = b\')}Q{J 4j(\'7.\'+a)}}8(d){1N(A.Z(),7);A.3V(2u);A.54();F g=3P(A,7,O);A.X(L(\'2D\',I),[M,g])}J 7});A.14(L(\'53\',I),H(e,a,b){e.1h();8(K a==\'1y\'||a.V==0)a=$(\'71\');Q 8(K a==\'1k\')a=$(a);8(K a!=\'1o\')J 1e(I,\'28 a 4w 1o.\');8(K b!=\'1k\'||b.V==0)b=\'a.65\';a.72(b).1K(H(){F h=1g.66||\'\';8(h.V>0&&A.Z().68($(h))!=-1){$(1g).24(\'55\').55(H(e){e.2j();A.X(L(\'2Z\',I),h)})}});J M});A.14(L(\'2D\',I),H(e,b,c){e.1h();8(!7.1b.1C)J;8(b){F d=7.1b.G||7.G.P,l=1L.2v(N.U/d);8(7.1b.3f){7.1b.1C.Z().1U();7.1b.1C.1K(H(){1m(F a=0;a<l;a++){F i=A.Z().1O(3n(a*d,0,M,N,A));$(1g).62(7.1b.3f(a+1,i))}})}7.1b.1C.1K(H(){$(1g).Z().24(7.1b.3p).1K(H(a){$(1g).14(7.1b.3p,H(e){e.2j();A.X(L(\'2Z\',I),[a*d,0,M,7.1b])})})})}7.1b.1C.1K(H(){$(1g).Z().2y(2q(\'69\',I)).1O(A.1D(L(\'3M\',I))).2R(2q(\'69\',I))});J M});A.14(L(\'52\',I),H(e){F a=A.Z(),3Q=7.G.P;8(7.G.12.1d)3Q=2P(a,7,0);Q 8(7.G.1v!=\'*\')3Q=3A(a,7,0);8(!7.1M&&N.11!=0&&3Q>N.11){8(7.G.12.1d){F b=4a(a,7,N.11)-N.11}Q 8(7.G.1v!=\'*\'){F b=6a(a,7,N.11)-N.11}Q{b=7.G.P-N.11}1e(I,\'73 74-1M: 75 \'+b+\' G 4G.\');A.X(\'17\',b)}7.G.P=2Q(3Q,7,7.G.12.2l,$19);J 3P(A,7)});A.14(L(\'5t\',I),H(e,a){e.1h();1F=3i(1F);A.1r(\'4r\',O);A.X(L(\'4O\',I));8(a){A.X(L(\'60\',I))}8(7.1u){1N(A.Z(),7)}A.16(A.1r(\'5G\'));A.4M();A.56();$1A.76(A);J M});A.14(\'34\',H(e,n,o){e.1h();J A.1D(L(n,I),o)})};A.4M=H(){A.24(L(\'\',I));A.24(L(\'\',I,O))};A.54=H(){A.56();3O(7,N.U,I);2X(7,N.11,I);8(7.T.2t){F c=3q(7.T.2t);$1A.14(L(\'4k\',I,O),H(){A.X(L(\'2S\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2W\',I))})}8(7.T.Y){7.T.Y.14(L(7.T.3p,I,O),H(e){e.2j();F a=O,c=2b;8(C.1X){a=\'1H\'}Q 8(7.T.45){a=\'2S\';c=3q(7.T.45)}8(a){A.X(L(a,I),c)}})}8(7.17.Y){7.17.Y.14(L(7.17.3p,I,O),H(e){e.2j();A.X(L(\'17\',I))});8(7.17.2t){F c=3q(7.17.2t);7.17.Y.14(L(\'4k\',I,O),H(){A.X(L(\'2S\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2W\',I))})}}8(7.1a.Y){7.1a.Y.14(L(7.1a.3p,I,O),H(e){e.2j();A.X(L(\'1a\',I))});8(7.1a.2t){F c=3q(7.1a.2t);7.1a.Y.14(L(\'4k\',I,O),H(){A.X(L(\'2S\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2W\',I))})}}8($.1P.2E){8(7.17.2E){8(!C.57){C.57=M;$1A.2E(H(e,a){8(a>0){e.2j();F b=59(7.17.2E);A.X(L(\'17\',I),b)}})}}8(7.1a.2E){8(!C.5a){C.5a=M;$1A.2E(H(e,a){8(a<0){e.2j();F b=59(7.1a.2E);A.X(L(\'1a\',I),b)}})}}}8($.1P.3R){F d=(7.17.5b)?H(){A.X(L(\'17\',I))}:2b,3S=(7.1a.5b)?H(){A.X(L(\'1a\',I))}:2b;8(3S||3S){8(!C.3R){C.3R=M;F f={\'77\':30,\'78\':30,\'79\':M};1x(7.2k){W\'4u\':W\'6b\':f.7a=d;f.7b=3S;18;2w:f.7c=3S;f.7d=d}$1A.3R(f)}}}8(7.1b.1C){8(7.1b.2t){F c=3q(7.1b.2t);7.1b.1C.14(L(\'4k\',I,O),H(){A.X(L(\'2S\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2W\',I))})}}8(7.17.2F||7.1a.2F){$(3T).14(L(\'6c\',I,O,M,M),H(e){F k=e.6d;8(k==7.1a.2F){e.2j();A.X(L(\'1a\',I))}8(k==7.17.2F){e.2j();A.X(L(\'17\',I))}})}8(7.1b.44){$(3T).14(L(\'6c\',I,O,M,M),H(e){F k=e.6d;8(k>=49&&k<58){k=(k-49)*7.G.P;8(k<=N.U){e.2j();A.X(L(\'2Z\',I),[k,0,M,7.1b])}}})}8(7.T.1H){A.X(L(\'1H\',I),7.T.4C)}8(C.4t){F g=$(3r),5c=g.S(),5d=g.1l();g.14(L(\'7e\',I,O,M,M),H(e){8(g.S()!=5c||g.1l()!=5d){A.X(L(\'4O\',I));8(7.T.4D&&!C.1X){A.X(L(\'1H\',I))}1N(A.Z(),7);A.3V(2u);F a=3P(A,7,O);A.X(L(\'2D\',I),[M,a]);5c=g.S();5d=g.1l()}})}};A.56=H(){F a=L(\'\',I),3s=L(\'\',I,O);5e=L(\'\',I,O,M,M);$(3T).24(5e);$(3r).24(5e);$1A.24(3s);8(7.T.Y)7.T.Y.24(3s);8(7.17.Y)7.17.Y.24(3s);8(7.1a.Y)7.1a.Y.24(3s);8(7.1b.1C){7.1b.1C.24(3s);8(7.1b.3f){7.1b.1C.Z().1U()}}3O(7,\'3b\',I);2X(7,\'2y\',I)};F C={\'2k\':\'1a\',\'1X\':M,\'1S\':O,\'1Z\':O,\'5a\':O,\'57\':O,\'3R\':O},N={\'U\':A.Z().V,\'11\':0},1F={\'7f\':2b,\'T\':2b,\'3k\':2b,\'2T\':2x(),\'3E\':0},R={\'1Z\':O,\'1j\':0,\'2T\':0,\'1G\':\'\',\'1f\':[]},1Y={\'2f\':[],\'21\':[]},1V=[],I=$.25(M,{},$.1P.1J.6e,z),7={},2u=y,$1A=A.7g(\'<\'+I.5f.4q+\' 7h="\'+I.5f.6f+\'" />\').3a();I.3U=A.3U;I.4m=$.1P.1J.4m++;A.3V(2u,M,B);A.5E();A.5H();A.54();8(31(7.G.2I)){F D=7.G.2I}Q{F D=[];8(7.G.2I!=0){D.1q(7.G.2I)}}8(7.2n){D.7i(6g(7.2n))}8(D.V>0){1m(F a=0,l=D.V;a<l;a++){F s=D[a];8(s==0){5g}8(s===M){s=3r.7j.66;8(s.V<1){5g}}Q 8(s===\'6h\'){s=1L.3x(1L.6h()*N.U)}8(A.1D(L(\'2Z\',I),[s,0,M,{1I:\'47\'}])){18}}}F E=3P(A,7,O),6i=3d(A.Z(),7);8(7.6j){7.6j.1z($19,6i,E)}A.X(L(\'2D\',I),[M,E]);A.X(L(\'53\',I));J A};$.1P.1J.4m=1;$.1P.1J.4s={\'29\':O,\'3l\':M,\'1M\':M,\'2J\':O,\'2k\':\'1t\',\'G\':{\'2I\':0},\'1n\':{\'1G\':\'7k\',\'1j\':5A,\'2t\':O,\'2E\':O,\'5b\':O,\'3p\':\'55\',\'3k\':O}};$.1P.1J.6e={\'1e\':O,\'3j\':{\'3I\':\'\',\'6k\':\'7l\'},\'5f\':{\'4q\':\'7m\',\'6f\':\'7n\'},\'5h\':{}};$.1P.1J.5B=H(a,b){J\'<a 7o="#"><6l>\'+a+\'</6l></a>\'};H 23(d,e){J{1f:[],1j:d,4V:d,1G:e,2T:2x()}}H 2a(s){8(K s.1p==\'1o\'){2a(s.1p)}1m(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];8(!b)5g;8(b[3])b[0].4N();b[0].6m(b[1],{6n:b[2],1j:s.1j,1G:s.1G})}8(K s.1Q==\'1o\'){2a(s.1Q)}}H 3D(s,c){8(K c!=\'1s\')c=M;8(K s.1p==\'1o\'){3D(s.1p,c)}1m(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];b[0].4N(M);8(c){b[0].16(b[1]);8(K b[2]==\'H\')b[2]()}}8(K s.1Q==\'1o\'){3D(s.1Q,c)}}H 3i(t){8(t.T)7p(t.T);J t}H 3L(b,t,c){8(b.V){1m(F a=0,l=b.V;a<l;a++){b[a].3K(t,c)}}J[]}H 7q(a,c,x,d,f){F o={\'1j\':d,\'1G\':a.1G};8(K f==\'H\')o.6n=f;c.6m({2i:x},o)}H 4T(a,b,c,o,d){F e=2A(4Y(b.Z(),o),o,M)[0],5i=2A(c.Z(),o,M)[0],4n=(d)?-5i:e,2G={},3t={};2G[o.d[\'S\']]=5i;2G[o.d[\'1t\']]=4n;3t[o.d[\'1t\']]=0;a.1p.1f.1q([b,{\'2i\':1}]);a.1Q.1f.1q([c,3t,H(){$(1g).1U()}]);c.16(2G);J a}H 4U(a,b,c,o,d,n){F e=2A(4Z(b.Z(),o,n),o,M)[0],5j=2A(c.Z(),o,M)[0],4n=(d)?-5j:e,2G={},3t={};2G[o.d[\'S\']]=5j;2G[o.d[\'1t\']]=0;3t[o.d[\'1t\']]=4n;a.1Q.1f.1q([c,3t,H(){$(1g).1U()}]);c.16(2G);J a}H 3O(o,t,c){8(t==\'3c\'||t==\'3b\'){F f=t}Q 8(o.G.3e>=t){1e(c,\'28 5M G: 7r 7s (\'+t+\' G, \'+o.G.3e+\' 5N).\');F f=\'3b\'}Q{F f=\'3c\'}F s=(f==\'3c\')?\'2y\':\'2R\',h=2q(\'2O\',c);8(o.T.Y)o.T.Y[f]()[s](h);8(o.17.Y)o.17.Y[f]()[s](h);8(o.1a.Y)o.1a.Y[f]()[s](h);8(o.1b.1C)o.1b.1C[f]()[s](h)}H 2X(o,f,c){8(o.1M||o.3l)J;F a=(f==\'2y\'||f==\'2R\')?f:O,4o=2q(\'7t\',c);8(o.T.Y&&a){o.T.Y[a](4o)}8(o.17.Y){F b=a||(f==0)?\'2R\':\'2y\';o.17.Y[b](4o)}8(o.1a.Y){F b=a||(f==o.G.P)?\'2R\':\'2y\';o.1a.Y[b](4o)}}H 3W(a,b){8(K b==\'H\')b=b.1z(a);8(K b==\'1y\')b={};J b}H 3B(a,b,c){8(K c!=\'1k\')c=\'\';b=3W(a,b);8(K b==\'1k\'){F d=5k(b);8(d==-1)b=$(b);Q b=d}8(c==\'1b\'){8(K b==\'1s\')b={\'44\':b};8(K b.3o!=\'1y\')b={\'1C\':b};8(K b.1C==\'H\')b.1C=b.1C.1z(a);8(K b.1C==\'1k\')b.1C=$(b.1C);8(K b.G!=\'13\')b.G=O}Q 8(c==\'T\'){8(K b.3o!=\'1y\')b={\'Y\':b};8(K b==\'1s\')b={\'1H\':b};8(K b==\'13\')b={\'3g\':b};8(K b.Y==\'H\')b.Y=b.Y.1z(a);8(K b.Y==\'1k\')b.Y=$(b.Y)}Q{8(K b.3o!=\'1y\')b={\'Y\':b};8(K b==\'13\')b={\'2F\':b};8(K b.Y==\'H\')b.Y=b.Y.1z(a);8(K b.Y==\'1k\')b.Y=$(b.Y);8(K b.2F==\'1k\')b.2F=5k(b.2F)}J b}H 3n(a,b,c,d,e){8(K a==\'1k\'){8(2p(a))a=$(a);Q a=2o(a)}8(K a==\'1o\'){8(K a.3o==\'1y\')a=$(a);a=e.Z().68(a);8(a==-1)a=0;8(K c!=\'1s\')c=O}Q{8(K c!=\'1s\')c=M}8(2p(a))a=0;Q a=2o(a);8(2p(b))b=0;Q b=2o(b);8(c){a+=d.11}a+=b;8(d.U>0){22(a>=d.U){a-=d.U}22(a<0){a+=d.U}}J a}H 4a(i,o,s){F t=0,x=0;1m(F a=s;a>=0;a--){F j=i.1O(a);t+=(j.1W(\':P\'))?j[o.d[\'26\']](M):0;8(t>o.3z)J x;8(a==0)a=i.V;x++}}H 6a(i,o,s){J 5l(i,o.G.1v,o.G.12.42,s)}H 5R(i,o,s,m){J 5l(i,o.G.1v,m,s)}H 5l(i,f,m,s){F t=0,x=0;1m(F a=s,l=i.V;a>=0;a--){x++;8(x==l)J x;F j=i.1O(a);8(j.1W(f)){t++;8(t==m)J x}8(a==0)a=l}}H 4R(a,o){J o.G.12.42||a.Z().1c(0,o.G.P).1v(o.G.1v).V}H 2P(i,o,s){F t=0,x=0;1m(F a=s,l=i.V-1;a<=l;a++){F j=i.1O(a);t+=(j.1W(\':P\'))?j[o.d[\'26\']](M):0;8(t>o.3z)J x;x++;8(x==l+1)J x;8(a==l)a=-1}}H 4X(i,o,s,l){F v=2P(i,o,s);8(!o.1M){8(s+v>l)v=l-s}J v}H 3A(i,o,s){J 5m(i,o.G.1v,o.G.12.42,s,o.1M)}H 5Y(i,o,s,m){J 5m(i,o.G.1v,m+1,s,o.1M)-1}H 5m(i,f,m,s,c){F t=0,x=0;1m(F a=s,l=i.V-1;a<=l;a++){x++;8(x==l)J x;F j=i.1O(a);8(j.1W(f)){t++;8(t==m)J x}8(a==l)a=-1}}H 3d(i,o){J i.1c(0,o.G.P)}H 5T(i,o,n){J i.1c(n,o.G.12.2m+n)}H 5U(i,o){J i.1c(0,o.G.P)}H 4Y(i,o){J i.1c(0,o.G.12.2m)}H 4Z(i,o,n){J i.1c(n,o.G.P+n)}H 1N(i,o,m){F x=(K m==\'1s\')?m:O;8(K m!=\'13\')m=0;i.1K(H(){F j=$(1g);F t=2o(j.16(o.d[\'1E\']));8(2p(t))t=0;j.1r(\'6o\',t);j.16(o.d[\'1E\'],((x)?j.1r(\'6o\'):m+j.1r(\'1R\')))})}H 3P(a,o,p){F b=a.3a(),$i=a.Z(),$v=3d($i,o),4p=4g(2A($v,o,M),o,p);b.16(4p);8(o.1u){F p=o.1i,r=p[o.d[1]];8(o.1B){8(r<0)r=0}F c=$v.2Y();c.16(o.d[\'1E\'],c.1r(\'1R\')+r);a.16(o.d[\'2L\'],p[o.d[0]]);a.16(o.d[\'1t\'],p[o.d[3]])}a.16(o.d[\'S\'],4p[o.d[\'S\']]+(3m($i,o,\'S\')*2));a.16(o.d[\'1l\'],5n($i,o,\'1l\'));J 4p}H 2A(i,o,a){F b=3m(i,o,\'S\',a),6p=5n(i,o,\'1l\',a);J[b,6p]}H 5n(i,o,a,b){8(K b!=\'1s\')b=O;8(K o[o.d[a]]==\'13\'&&b)J o[o.d[a]];8(K o.G[o.d[a]]==\'13\')J o.G[o.d[a]];F c=(a.5o().32(\'S\')>-1)?\'26\':\'2K\';J 3w(i,o,c)}H 3w(i,o,b){F s=0;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);F m=(j.1W(\':P\'))?j[o.d[b]](M):0;8(s<m)s=m}J s}H 36(b,o,c){8(!b.1W(\':P\'))J 0;F d=b[o.d[c]](),5p=(o.d[c].5o().32(\'S\')>-1)?[\'7u\',\'7v\']:[\'7w\',\'7x\'];1m(F a=0,l=5p.V;a<l;a++){F m=2o(b.16(5p[a]));d-=(2p(m))?0:m}J d}H 3m(i,o,b,c){8(K c!=\'1s\')c=O;8(K o[o.d[b]]==\'13\'&&c)J o[o.d[b]];8(K o.G[o.d[b]]==\'13\')J o.G[o.d[b]]*i.V;F d=(b.5o().32(\'S\')>-1)?\'26\':\'2K\',s=0;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);s+=(j.1W(\':P\'))?j[o.d[d]](M):0}J s}H 4v(i,o,b){F s=O,v=O;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);F c=(j.1W(\':P\'))?j[o.d[b]](M):0;8(s===O)s=c;Q 8(s!=c)v=M;8(s==0)v=M}J v}H 5y(i,o,d){J i[o.d[\'7y\'+d]](M)-36(i,o,\'7z\'+d)}H 3Y(x){J(K x==\'1k\'&&x.1c(-1)==\'%\')}H 3Z(s,o){8(3Y(o)){o=o.1c(0,-1);8(2p(o))J s;s*=o/3G}J s}H L(n,c,a,b,d){8(K a!=\'1s\')a=M;8(K b!=\'1s\')b=M;8(K d!=\'1s\')d=O;8(a)n=c.3j.3I+n;8(b)n=n+\'.\'+c.3j.6k;8(b&&d)n+=c.4m;J n}H 2q(n,c){J(K c.5h[n]==\'1k\')?c.5h[n]:n}H 4g(a,o,p){8(K p!=\'1s\')p=M;F b=(o.1u&&p)?o.1i:[0,0,0,0];F c={};c[o.d[\'S\']]=a[0]+b[1]+b[3];c[o.d[\'1l\']]=a[1]+b[0]+b[2];J c}H 2U(c,d){F e=[];1m(F a=0,6q=c.V;a<6q;a++){1m(F b=0,6r=d.V;b<6r;b++){8(d[b].32(K c[a])>-1&&K e[b]==\'1y\'){e[b]=c[a];18}}}J e}H 5z(p){8(K p==\'1y\')J[0,0,0,0];8(K p==\'13\')J[p,p,p,p];Q 8(K p==\'1k\')p=p.3u(\'7A\').6s(\'\').3u(\'7B\').6s(\'\').3u(\' \');8(!31(p)){J[0,0,0,0]}1m(F i=0;i<4;i++){p[i]=2o(p[i])}1x(p.V){W 0:J[0,0,0,0];W 1:J[p[0],p[0],p[0],p[0]];W 2:J[p[0],p[1],p[0],p[1]];W 3:J[p[0],p[1],p[2],p[1]];2w:J[p[0],p[1],p[2],p[3]]}}H 43(a,o){F x=(K o[o.d[\'S\']]==\'13\')?1L.2v(o[o.d[\'S\']]-3m(a,o,\'S\')):0;1x(o.1B){W\'1t\':J[0,x];W\'2M\':J[x,0];W\'4x\':2w:J[1L.2v(x/2),1L.3x(x/2)]}}H 4b(x,o,a,b){F v=x;8(K a==\'H\'){v=a.1z(b,v)}Q 8(K a==\'1k\'){F p=a.3u(\'+\'),m=a.3u(\'-\');8(m.V>p.V){F c=M,5q=m[0],2H=m[1]}Q{F c=O,5q=p[0],2H=p[1]}1x(5q){W\'7C\':v=(x%2==1)?x-1:x;18;W\'7D\':v=(x%2==0)?x-1:x;18;2w:v=x;18}2H=2o(2H);8(!2p(2H)){8(c)2H=-2H;v+=2H}}8(K v!=\'13\')v=1;8(v<1)v=1;J v}H 2Q(x,o,a,b){J 4y(4b(x,o,a,b),o.G.12)}H 4y(v,i){8(K i.2N==\'13\'&&v<i.2N)v=i.2N;8(K i.27==\'13\'&&v>i.27)v=i.27;8(v<1)v=1;J v}H 4E(s){8(!31(s))s=[[s]];8(!31(s[0]))s=[s];1m(F j=0,l=s.V;j<l;j++){8(K s[j][0]==\'1k\')s[j][0]=$(s[j][0]);8(K s[j][1]!=\'1s\')s[j][1]=M;8(K s[j][2]!=\'1s\')s[j][2]=M;8(K s[j][3]!=\'13\')s[j][3]=0}J s}H 5k(k){8(k==\'2M\')J 39;8(k==\'1t\')J 37;8(k==\'4u\')J 38;8(k==\'6b\')J 40;J-1}H 4W(n,v){8(n)3T.2n=n+\'=\'+v+\'; 7E=/\'}H 6g(n){n+=\'=\';F b=3T.2n.3u(\';\');1m(F a=0,l=b.V;a<l;a++){F c=b[a];22(c.7F(0)==\' \'){c=c.1c(1)}8(c.32(n)==0){J c.1c(n.V)}}J 0}H 3q(p){8(p&&K p==\'1k\'){F i=(p.32(\'7G\')>-1)?M:O,r=(p.32(\'2W\')>-1)?M:O}Q{F i=r=O}J[i,r]}H 59(a){J(K a==\'13\')?a:2b}H 31(a){J K(a)==\'1o\'&&(a 64 7H)}H 2x(){J 7I 7J().2x()}H 1e(d,m){8(K d==\'1o\'){F s=\' (\'+d.3U+\')\';d=d.1e}Q{F s=\'\'}8(!d)J O;8(K m==\'1k\')m=\'1J\'+s+\': \'+m;Q m=[\'1J\'+s+\':\',m];8(3r.5r&&3r.5r.6t)3r.5r.6t(m);J O}$.1P.65=H(o,c){J 1g.1J(o,c)};$.25($.1G,{\'7K\':H(t){F a=t*t;J t*(-a*t+4*a-6*t+4)},\'7L\':H(t){J t*(4*t*t-9*t+6)},\'7M\':H(t){F a=t*t;J t*(33*a*a-7N*a*t+7O*a-67*t+15)}})})(7P);',62,486,'|||||||opts|if|||||||||||||||||||||||||||||||||var|items|function|conf|return|typeof|cf_e|true|itms|false|visible|else|scrl|width|auto|total|length|case|trigger|button|children||first|visibleConf|number|bind||css|prev|break|tt0|next|pagination|slice|variable|debug|anims|this|stopPropagation|padding|duration|string|height|for|scroll|object|pre|push|data|boolean|left|usePadding|filter|a_dur|switch|undefined|call|wrp|align|container|triggerHandler|marginRight|tmrs|easing|play|fx|carouFredSel|each|Math|circular|sz_resetMargin|eq|fn|post|cfs_origCssMargin|isScrolling|c_new|remove|queu|is|isPaused|clbk|isStopped|stopImmediatePropagation|onAfter|while|sc_setScroll|unbind|extend|outerWidth|max|Not|synchronise|sc_startScroll|null|l_cur|l_old|w_siz|onBefore|crossfade|uncover|opacity|preventDefault|direction|adjust|old|cookie|parseInt|isNaN|cf_c|c_old|pR|pauseOnHover|opts_orig|ceil|default|getTime|removeClass|l_new|ms_getSizes|fade|cover|updatePageStatus|mousewheel|key|css_o|adj|start|responsive|outerHeight|top|right|min|hidden|gn_getVisibleItemsNext|cf_getItemsAdjust|addClass|pause|startTime|cf_sortParams|scrolling|resume|nv_enableNavi|last|slideTo||is_array|indexOf||_cfs_triggerEvent|innerWidth|ms_getTrueInnerSize||||parent|hide|show|gi_getCurrentItems|minimum|anchorBuilder|pauseDuration|Carousel|sc_clearTimers|events|queue|infinite|ms_getTotalSize|gn_getItemIndex|jquery|event|bt_pauseOnHoverConfig|window|ns2|ani_o|split|currentPosition|ms_getTrueLargestSize|floor|of|maxDimention|gn_getVisibleItemsNextFilter|go_getNaviObject|position|sc_stopScroll|timePassed|perc|100|dur2|prefix|appendTo|apply|sc_callCallbacks|currentPage|before|nv_showNavi|sz_setSizes|vI|touchwipe|wN|document|selector|_cfs_init|go_getObject|marginBottom|ms_isPercentage|ms_getPercentage||to|org|cf_getAlignPadding|keys|pauseOnEvent|Number|none|stopped||gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|orgW|isHidden|cf_mapWrapperSizes|get|end|eval|mouseenter|mouseleave|serialNumber|cur_l|di|sz|element|cfs_isCarousel|defaults|upDateOnWindowResize|up|ms_hasVariableSizes|valid|center|cf_getItemAdjustMinMax|seco|nw|bottom|delay|pauseOnResize|cf_getSynchArr|scrolled|backward|textAlign|float|marginTop|marginLeft|absolute|_cfs_unbind_events|stop|finish|type|conditions|gn_getVisibleOrg|not|fx_cover|fx_uncover|orgDuration|cf_setCookie|gn_getVisibleItemsNextTestCircular|gi_getOldItemsNext|gi_getNewItemsNext||slideToPage|updateSizes|linkAnchors|_cfs_bind_buttons|click|_cfs_unbind_buttons|mousewheelPrev||bt_mousesheelNumber|mousewheelNext|wipe|_windowWidth|_windowHeight|ns3|wrapper|continue|classnames|new_w|old_w|cf_getKeyCode|gn_getItemsPrevFilter|gn_getItemsNextFilter|ms_getLargestSize|toLowerCase|arr|sta|console|No|destroy|innerHeight|dx|Set|secp|ms_getPaddingBorderMargin|cf_getPadding|500|pageAnchorBuilder|Item|forward|_cfs_build|fixed|cfs_origCss|_cfs_bind_events|paused|onPausePause|onPauseEnd|onPauseStart|enough|needed|page|slide_|configuration|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|shift|gn_getScrollItemsNextFilter|new_m|jumpToStart|after|append|removeItem|instanceof|caroufredsel|hash||index|selected|gn_getVisibleItemsPrevFilter|down|keyup|keyCode|configs|classname|cf_readCookie|random|itm|onCreate|namespace|span|animate|complete|cfs_tempCssMargin|s2|l1|l2|join|log|found|the|Infinity|Width|caroufredsel_cookie_|attr|id|2500|Available|widths|heights|automatically|relative|overflow|setTimeout|or|Page|resumed|currently|Callback|returned|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|add|detach|round|currentVisible|body|find|Preventing|non|sliding|replaceWith|min_move_x|min_move_y|preventDefaultEvents|wipeUp|wipeDown|wipeLeft|wipeRight|resize|timer|wrap|class|unshift|location|swing|cfs|div|caroufredsel_wrapper|href|clearTimeout|fx_fade|hiding|navigation|disabled|paddingLeft|paddingRight|paddingTop|paddingBottom|outer|inner|px|em|even|odd|path|charAt|immediate|Array|new|Date|quadratic|cubic|elastic|106|126|jQuery'.split('|'),0,{}))





/*
* waitForImages 1.4
* -----------------
* Provides a callback when all images have loaded in your given selector.
* http://www.alexanderdickson.com/
*
*
* Copyright (c) 2011 Alex Dickson
* Licensed under the MIT licenses.
* See website for more info.
*
*/

; (function ($) {
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // CSS properties which contain references to images. 
    $.waitForImages = {
        hasImageProperties: [
        'backgroundImage',
        'listStyleImage',
        'borderImage',
        'borderCornerImage'
        ]
    };

    // Custom selector to find `img` elements that have a valid `src` attribute and have not already loaded.
    $.expr[':'].uncached = function (obj) {
        // Ensure we are dealing with an `img` element with a valid `src` attribute.
        if (!$(obj).is('img[src!=""]')) {
            return false;
        }

        // Firefox's `complete` property will always be`true` even if the image has not been downloaded.
        // Doing it this way works in Firefox.
        var img = document.createElement('img');
        img.src = obj.src;
        return !img.complete;
    };

    $.fn.waitForImages = function (finishedCallback, eachCallback, waitForAll) {

        // Handle options object.
        if ($.isPlainObject(arguments[0])) {
            eachCallback = finishedCallback.each;
            waitForAll = finishedCallback.waitForAll;
            finishedCallback = finishedCallback.finished;
        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !!waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        };

        return this.each(function () {
            // Build a list of all imgs, dependent on what images will be considered.
            var obj = $(this),
                allImgs = [];

            if (waitForAll) {
                // CSS properties which may contain an image.
                var hasImgProperties = $.waitForImages.hasImageProperties || [],
                    matchUrl = /url\((['"]?)(.*?)\1\)/g;

                // Get all elements, as any one of them could have a background image.
                obj.find('*').each(function () {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in case it has a background image too.
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        // If it doesn't contain this property, skip.
                        if (!propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        var match;
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        };
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj
                 .find('img:uncached')
                 .each(function () {
                     allImgs.push({
                         src: this.src,
                         element: this
                     });
                 });
            };

            var allImgsLength = allImgs.length,
                allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength == 0) {
                finishedCallback.call(obj[0]);
            };

            $.each(allImgs, function (i, img) {

                var image = new Image;

                // Handle the image loading and error with the same callback.
                $(image).bind('load.' + eventNamespace + ' error.' + eventNamespace, function (event) {
                    allImgsLoaded++;

                    // If an error occurred with loading the image, set the third argument accordingly.
                    eachCallback.call(img.element, allImgsLoaded, allImgsLength, event.type == 'load');

                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        return false;
                    };

                });

                image.src = img.src;
            });
        });
    };
})(jQuery);




// ------------------------ jScrollPane ------------------------ //
/*
 * jScrollPane - v2.0.0beta12 - 2012-09-27
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var ay,Q=this,Y,aj,v,al,T,Z,y,q,az,aE,au,i,I,h,j,aa,U,ap,X,t,A,aq,af,am,G,l,at,ax,x,av,aH,f,L,ai=true,P=true,aG=false,k=false,ao=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aH=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function ar(aQ){var aL,aN,aM,aJ,aI,aP,aO=false,aK=false;ay=aQ;if(Y===c){aI=D.scrollTop();aP=D.scrollLeft();D.css({overflow:"hidden",padding:0});aj=D.innerWidth()+f;v=D.innerHeight();D.width(aj);Y=b('<div class="jspPane" />').css("padding",aH).append(D.children());al=b('<div class="jspContainer" />').css({width:aj+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aO=ay.stickToBottom&&K();aK=ay.stickToRight&&B();aJ=D.innerWidth()+f!=aj||D.outerHeight()!=v;if(aJ){aj=D.innerWidth()+f;v=D.innerHeight();al.css({width:aj+"px",height:v+"px"})}if(!aJ&&L==T&&Y.outerHeight()==Z){D.width(aj);return}L=T;Y.css("width","");D.width(aj);al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aQ.contentWidth){T=aQ.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/aj;q=Z/v;az=q>1;aE=y>1;if(!(aE||az)){D.removeClass("jspScrollable");Y.css({top:0,width:al.width()-f});n();E();R();w()}else{D.addClass("jspScrollable");aL=ay.maintainPosition&&(I||aa);if(aL){aN=aC();aM=aA()}aF();z();F();if(aL){N(aK?(T-aj):aN,false);M(aO?(Z-v):aM,false)}J();ag();an();if(ay.enableKeyboardNavigation){S()}if(ay.clickOnTrack){p()}C();if(ay.hijackInternalLinks){m()}}if(ay.autoReinitialise&&!av){av=setInterval(function(){ar(ay)},ay.autoReinitialiseDelay)}else{if(!ay.autoReinitialise&&av){clearInterval(av)}}aI&&D.scrollTop(0)&&M(aI,false);aP&&D.scrollLeft(0)&&N(aP,false);D.trigger("jsp-initialised",[aE||az])}function aF(){if(az){al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=al.find(">.jspVerticalBar");ap=U.find(">.jspTrack");au=ap.find(">.jspDrag");if(ay.showArrows){aq=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aD(0,-1)).bind("click.jsp",aB);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aD(0,1)).bind("click.jsp",aB);if(ay.arrowScrollOnHover){aq.bind("mouseover.jsp",aD(0,-1,aq));af.bind("mouseover.jsp",aD(0,1,af))}ak(ap,ay.verticalArrowPositions,aq,af)}t=v;al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});au.hover(function(){au.addClass("jspHover")},function(){au.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);au.addClass("jspActive");var s=aI.pageY-au.position().top;b("html").bind("mousemove.jsp",function(aJ){V(aJ.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});o()}}function o(){ap.height(t+"px");I=0;X=ay.verticalGutter+ap.outerWidth();Y.width(aj-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aE){al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));am=al.find(">.jspHorizontalBar");G=am.find(">.jspTrack");h=G.find(">.jspDrag");if(ay.showArrows){ax=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aD(-1,0)).bind("click.jsp",aB);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aD(1,0)).bind("click.jsp",aB);
if(ay.arrowScrollOnHover){ax.bind("mouseover.jsp",aD(-1,0,ax));x.bind("mouseover.jsp",aD(1,0,x))}ak(G,ay.horizontalArrowPositions,ax,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);h.addClass("jspActive");var s=aI.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aJ){W(aJ.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});l=al.innerWidth();ah()}}function ah(){al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aE&&az){var aI=G.outerHeight(),s=ap.outerWidth();t-=aI;b(am).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;aj-=aI;G.parent().append(b('<div class="jspCorner" />').css("width",aI+"px"));o();ah()}if(aE){Y.width((al.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aE){at=Math.ceil(1/y*l);if(at>ay.horizontalDragMaxWidth){at=ay.horizontalDragMaxWidth}else{if(at<ay.horizontalDragMinWidth){at=ay.horizontalDragMinWidth}}h.width(at+"px");j=l-at;ae(aa)}if(az){A=Math.ceil(1/q*t);if(A>ay.verticalDragMaxHeight){A=ay.verticalDragMaxHeight}else{if(A<ay.verticalDragMinHeight){A=ay.verticalDragMinHeight}}au.height(A+"px");i=t-A;ad(I)}}function ak(aJ,aL,aI,s){var aN="before",aK="after",aM;if(aL=="os"){aL=/Mac/.test(navigator.platform)?"after":"split"}if(aL==aN){aK=aL}else{if(aL==aK){aN=aL;aM=aI;aI=s;s=aM}}aJ[aN](aI)[aK](s)}function aD(aI,s,aJ){return function(){H(aI,s,this,aJ);this.blur();return false}}function H(aL,aK,aO,aN){aO=b(aO).addClass("jspActive");var aM,aJ,aI=true,s=function(){if(aL!==0){Q.scrollByX(aL*ay.arrowButtonSpeed)}if(aK!==0){Q.scrollByY(aK*ay.arrowButtonSpeed)}aJ=setTimeout(s,aI?ay.initialDelay:ay.arrowRepeatFreq);aI=false};s();aM=aN?"mouseout.jsp":"mouseup.jsp";aN=aN||b("html");aN.bind(aM,function(){aO.removeClass("jspActive");aJ&&clearTimeout(aJ);aJ=null;aN.unbind(aM)})}function p(){w();if(az){ap.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageY-aO.top-I,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageY-aR.top-A/2,aP=v*ay.scrollPagePercent,aQ=i*aP/(Z-v);if(aM<0){if(I-aQ>aS){Q.scrollByY(-aP)}else{V(aS)}}else{if(aM>0){if(I+aQ<aS){Q.scrollByY(aP)}else{V(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}if(aE){G.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageX-aO.left-aa,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageX-aR.left-at/2,aP=aj*ay.scrollPagePercent,aQ=j*aP/(T-aj);if(aM<0){if(aa-aQ>aS){Q.scrollByX(-aP)}else{W(aS)}}else{if(aM>0){if(aa+aQ<aS){Q.scrollByX(aP)}else{W(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(ap){ap.unbind("mousedown.jsp")}}function aw(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(au){au.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aI){if(!az){return}if(s<0){s=0}else{if(s>i){s=i}}if(aI===c){aI=ay.animateScroll}if(aI){Q.animate(au,"top",s,ad)}else{au.css("top",s);ad(s)}}function ad(aI){if(aI===c){aI=au.position().top}al.scrollTop(0);I=aI;var aL=I===0,aJ=I==i,aK=aI/i,s=-aK*(Z-v);if(ai!=aL||aG!=aJ){ai=aL;aG=aJ;D.trigger("jsp-arrow-change",[ai,aG,P,k])}u(aL,aJ);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aL,aJ]).trigger("scroll")}function W(aI,s){if(!aE){return}if(aI<0){aI=0}else{if(aI>j){aI=j}}if(s===c){s=ay.animateScroll}if(s){Q.animate(h,"left",aI,ae)
}else{h.css("left",aI);ae(aI)}}function ae(aI){if(aI===c){aI=h.position().left}al.scrollTop(0);aa=aI;var aL=aa===0,aK=aa==j,aJ=aI/j,s=-aJ*(T-aj);if(P!=aL||k!=aK){P=aL;k=aK;D.trigger("jsp-arrow-change",[ai,aG,P,k])}r(aL,aK);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aL,aK]).trigger("scroll")}function u(aI,s){if(ay.showArrows){aq[aI?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aI,s){if(ay.showArrows){ax[aI?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aI){var aJ=s/(Z-v);V(aJ*i,aI)}function N(aI,s){var aJ=aI/(T-aj);W(aJ*j,s)}function ab(aV,aQ,aJ){var aN,aK,aL,s=0,aU=0,aI,aP,aO,aS,aR,aT;try{aN=b(aV)}catch(aM){return}aK=aN.outerHeight();aL=aN.outerWidth();al.scrollTop(0);al.scrollLeft(0);while(!aN.is(".jspPane")){s+=aN.position().top;aU+=aN.position().left;aN=aN.offsetParent();if(/^body|html$/i.test(aN[0].nodeName)){return}}aI=aA();aO=aI+v;if(s<aI||aQ){aR=s-ay.verticalGutter}else{if(s+aK>aO){aR=s-v+aK+ay.verticalGutter}}if(aR){M(aR,aJ)}aP=aC();aS=aP+aj;if(aU<aP||aQ){aT=aU-ay.horizontalGutter}else{if(aU+aL>aS){aT=aU-aj+aL+ay.horizontalGutter}}if(aT){N(aT,aJ)}}function aC(){return -Y.position().left}function aA(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aA()<10)}function B(){var s=T-aj;return(s>20)&&(s-aC()<10)}function ag(){al.unbind(ac).bind(ac,function(aL,aM,aK,aI){var aJ=aa,s=I;Q.scrollBy(aK*ay.mouseWheelSpeed,-aI*ay.mouseWheelSpeed,false);return aJ==aa&&s==I})}function n(){al.unbind(ac)}function aB(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aI,aK=[];aE&&aK.push(am[0]);az&&aK.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aN){if(aN.target!==this&&!(aK.length&&b(aN.target).closest(aK).length)){return}var aM=aa,aL=I;switch(aN.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aN.keyCode;aJ();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aI=aN.keyCode==s&&aM!=aa||aL!=I;return !aI}).bind("keypress.jsp",function(aL){if(aL.keyCode==s){aJ()}return !aI});if(ay.hideFocus){D.css("outline","none");if("hideFocus" in al[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in al[0]){D.attr("hideFocus",false)}}function aJ(){var aM=aa,aL=I;switch(s){case 40:Q.scrollByY(ay.keyboardSpeed,false);break;case 38:Q.scrollByY(-ay.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*ay.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*ay.scrollPagePercent,false);break;case 39:Q.scrollByX(ay.keyboardSpeed,false);break;case 37:Q.scrollByX(-ay.keyboardSpeed,false);break}aI=aM!=aa||aL!=I;return aI}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aK,aI,aJ=escape(location.hash.substr(1));try{aK=b("#"+aJ+', a[name="'+aJ+'"]')}catch(s){return}if(aK.length&&Y.find(aJ)){if(al.scrollTop()===0){aI=setInterval(function(){if(al.scrollTop()>0){ab(aK,true);b(document).scrollTop(al.position().top);clearInterval(aI)}},50)}else{ab(aK,true);b(document).scrollTop(al.position().top)}}}}function m(){if(b(document.body).data("jspHijack")){return}b(document.body).data("jspHijack",true);b(document.body).delegate("a[href*=#]","click",function(s){var aI=this.href.substr(0,this.href.indexOf("#")),aK=location.href,aO,aP,aJ,aM,aL,aN;if(location.href.indexOf("#")!==-1){aK=location.href.substr(0,location.href.indexOf("#"))}if(aI!==aK){return}aO=escape(this.href.substr(this.href.indexOf("#")+1));aP;try{aP=b("#"+aO+', a[name="'+aO+'"]')}catch(aQ){return}if(!aP.length){return}aJ=aP.closest(".jspScrollable");aM=aJ.data("jsp");aM.scrollToElement(aP,true);if(aJ[0].scrollIntoView){aL=b(a).scrollTop();aN=aP.offset().top;if(aN<aL||aN>aL+b(a).height()){aJ[0].scrollIntoView()}}s.preventDefault()
})
} function an() { var aJ, aI, aL, aK, aM, s = false; al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (aN) { var aO = aN.originalEvent.touches[0]; aJ = aC(); aI = aA(); aL = aO.pageX; aK = aO.pageY; aM = false; s = true }).bind("touchmove.jsp", function (aQ) { if (!s) { return } var aP = aQ.originalEvent.touches[0], aO = aa, aN = I; Q.scrollTo(aJ + aL - aP.pageX, aI + aK - aP.pageY); aM = aM || Math.abs(aL - aP.pageX) > 5 || Math.abs(aK - aP.pageY) > 5; return aO == aa && aN == I }).bind("touchend.jsp", function (aN) { s = false }).bind("click.jsp-touchclick", function (aN) { if (aM) { aM = false; return false } }) } function g() { var s = aA(), aI = aC(); D.removeClass("jspScrollable").unbind(".jsp"); D.replaceWith(ao.append(Y.children())); ao.scrollTop(s); ao.scrollLeft(aI); if (av) { clearInterval(av) } } b.extend(Q, { reinitialise: function (aI) { aI = b.extend({}, ay, aI); ar(aI) }, scrollToElement: function (aJ, aI, s) { ab(aJ, aI, s) }, scrollTo: function (aJ, s, aI) { N(aJ, aI); M(s, aI) }, scrollToX: function (aI, s) { N(aI, s) }, scrollToY: function (s, aI) { M(s, aI) }, scrollToPercentX: function (aI, s) { N(aI * (T - aj), s) }, scrollToPercentY: function (aI, s) { M(aI * (Z - v), s) }, scrollBy: function (aI, s, aJ) { Q.scrollByX(aI, aJ); Q.scrollByY(s, aJ) }, scrollByX: function (s, aJ) { var aI = aC() + Math[s < 0 ? "floor" : "ceil"](s), aK = aI / (T - aj); W(aK * j, aJ) }, scrollByY: function (s, aJ) { var aI = aA() + Math[s < 0 ? "floor" : "ceil"](s), aK = aI / (Z - v); V(aK * i, aJ) }, positionDragX: function (s, aI) { W(s, aI) }, positionDragY: function (aI, s) { V(aI, s) }, animate: function (aI, aL, s, aK) { var aJ = {}; aJ[aL] = s; aI.animate(aJ, { duration: ay.animateDuration, easing: ay.animateEase, queue: false, step: aK }) }, getContentPositionX: function () { return aC() }, getContentPositionY: function () { return aA() }, getContentWidth: function () { return T }, getContentHeight: function () { return Z }, getPercentScrolledX: function () { return aC() / (T - aj) }, getPercentScrolledY: function () { return aA() / (Z - v) }, getIsScrollableH: function () { return aE }, getIsScrollableV: function () { return az }, getContentPane: function () { return Y }, scrollToBottom: function (s) { V(i, s) }, hijackInternalLinks: b.noop, destroy: function () { g() } }); ar(O)
} e = b.extend({}, b.fn.jScrollPane.defaults, e); b.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () { e[this] = e[this] || e.speed }); return this.each(function () { var f = b(this), g = f.data("jsp"); if (g) { g.reinitialise(e) } else { b("script", f).filter('[type="text/javascript"],:not([type])').remove(); g = new d(f, e); f.data("jsp", g) } })
}; b.fn.jScrollPane.defaults = { showArrows: false, maintainPosition: true, stickToBottom: false, stickToRight: false, clickOnTrack: true, autoReinitialise: false, autoReinitialiseDelay: 500, verticalDragMinHeight: 0, verticalDragMaxHeight: 99999, horizontalDragMinWidth: 0, horizontalDragMaxWidth: 99999, contentWidth: c, animateScroll: false, animateDuration: 300, animateEase: "linear", hijackInternalLinks: false, verticalGutter: 4, horizontalGutter: 4, mouseWheelSpeed: 0, arrowButtonSpeed: 0, arrowRepeatFreq: 50, arrowScrollOnHover: false, trackClickSpeed: 0, trackClickRepeatFreq: 70, verticalArrowPositions: "split", horizontalArrowPositions: "split", enableKeyboardNavigation: true, hideFocus: false, keyboardSpeed: 0, initialDelay: 300, speed: 30, scrollPagePercent: 0.8}
})(jQuery, this);

/*!
 * iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(window, doc){
var m = Math,
	dummyStyle = doc.createElement('div').style,
	vendor = (function () {
		var vendors = 'webkitT,MozT,msT,OT,t'.split(','), //Quick fix for FF16+ bug
			t,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			t = vendors[i] + 'ransform';
			if ( t in dummyStyle ) {
				return vendors[i].substr(0, vendors[i].length - 1);
			}
		}

		return false;
	})(),
	cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '',

	// Style properties
	transform = prefixStyle('transform'),
	transitionProperty = prefixStyle('transitionProperty'),
	transitionDuration = prefixStyle('transitionDuration'),
	transformOrigin = prefixStyle('transformOrigin'),
	transitionTimingFunction = prefixStyle('transitionTimingFunction'),
	transitionDelay = prefixStyle('transitionDelay'),

    // Browser capabilities
	isAndroid = (/android/gi).test(navigator.appVersion),
	isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
	isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

    has3d = prefixStyle('perspective') in dummyStyle,
    hasTouch = 'ontouchstart' in window && !isTouchPad,
    hasTransform = vendor !== false,
    hasTransitionEnd = prefixStyle('transition') in dummyStyle,

	RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
	START_EV = hasTouch ? 'touchstart' : 'mousedown',
	MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
	END_EV = hasTouch ? 'touchend' : 'mouseup',
	CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
	TRNEND_EV = (function () {
		if ( vendor === false ) return false;

		var transitionEnd = {
				''			: 'transitionend',
				'webkit'	: 'webkitTransitionEnd',
				'Moz'		: 'transitionend',
				'O'			: 'otransitionend',
				'ms'		: 'MSTransitionEnd'
			};

		return transitionEnd[vendor];
	})(),

	nextFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) { return setTimeout(callback, 1); };
	})(),
	cancelFrame = (function () {
		return window.cancelRequestAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelRequestAnimationFrame ||
			window.oCancelRequestAnimationFrame ||
			window.msCancelRequestAnimationFrame ||
			clearTimeout;
	})(),

	// Helpers
	translateZ = has3d ? ' translateZ(0)' : '',

	// Constructor
	iScroll = function (el, options) {
		var that = this,
			i;

		that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
		that.wrapper.style.overflow = 'hidden';
		that.scroller = that.wrapper.children[0];

		// Default options
		that.options = {
			hScroll: true,
			vScroll: true,
			x: 0,
			y: 0,
			bounce: true,
			bounceLock: false,
			momentum: true,
			lockDirection: true,
			useTransform: true,
			useTransition: false,
			topOffset: 0,
			checkDOMChanges: false,		// Experimental
			handleClick: true,

			// Scrollbar
			hScrollbar: true,
			vScrollbar: true,
			fixedScrollbar: isAndroid,
			hideScrollbar: isIDevice,
			fadeScrollbar: isIDevice && has3d,
			scrollbarClass: '',
			draggableScrollbars: false,

			// Zoom
			zoom: false,
			zoomMin: 1,
			zoomMax: 4,
			doubleTapZoom: 2,
			wheelAction: 'scroll',

			// Snap
			snap: false,
			snapThreshold: 1,

			// Events
			onRefresh: null,
			onBeforeScrollStart: function (e) { e.preventDefault(); },
			onScrollStart: null,
			onBeforeScrollMove: null,
			onScrollMove: null,
			onBeforeScrollEnd: null,
			onScrollEnd: null,
			onTouchEnd: null,
			onDestroy: null,
			onZoomStart: null,
			onZoom: null,
			onZoomEnd: null
		};

		// User defined options
		for (i in options) that.options[i] = options[i];

		// Set starting position
		that.x = that.options.x;
		that.y = that.options.y;

		// Normalize options
		that.options.useTransform = hasTransform && that.options.useTransform;
		that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
		that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
		that.options.zoom = that.options.useTransform && that.options.zoom;
		that.options.useTransition = hasTransitionEnd && that.options.useTransition;

		// Helpers FIX ANDROID BUG!
		// translate3d and scale doesn't work together!
		// Ignoring 3d ONLY WHEN YOU SET that.options.zoom
		if ( that.options.zoom && isAndroid ){
			translateZ = '';
		}

		// Scrollbar should be functional only on desktop browsers.
		if (that.options.draggableScrollbars && hasTouch) {
			that.options.draggableScrollbars = false;
		}

		// Set some default styles
		that.scroller.style[transitionProperty] = that.options.useTransform ? cssVendor + 'transform' : 'top left';
		that.scroller.style[transitionDuration] = '0';
		that.scroller.style[transformOrigin] = '0 0';
		if (that.options.useTransition) that.scroller.style[transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';

		if (that.options.useTransform) that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px)' + translateZ;
		else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

		if (that.options.useTransition) that.options.fixedScrollbar = true;

		that.refresh();

		that._bind(RESIZE_EV, window);
		that._bind(START_EV);
		if (!hasTouch) {
			if (that.options.wheelAction != 'none') {
				that._bind('DOMMouseScroll');
				that._bind('mousewheel');
			}
		}



		if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
			that._checkDOMChanges();
		}, 500);

	};

// Prototype
iScroll.prototype = {
	enabled: true,
	x: 0,
	y: 0,
	steps: [],
	scale: 1,
	currPageX: 0, currPageY: 0,
	pagesX: [], pagesY: [],
	aniTime: null,
	wheelZoomCount: 0,
	isScrollbarDragged: false,

	handleEvent: function (e) {
		var that = this;
		switch(e.type) {
			case START_EV:
				if (!hasTouch && e.button !== 0) return;
				that._start(e);
				break;
			case MOVE_EV: that._move(e); break;
			case END_EV:
			case CANCEL_EV: that._end(e); break;
			case RESIZE_EV: that._resize(); break;
			case 'DOMMouseScroll': case 'mousewheel': that._wheel(e); break;
			case TRNEND_EV: that._transitionEnd(e); break;
		}
	},

	_checkDOMChanges: function () {
		if (this.moved || this.zoomed || this.animating ||
			(this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;

		this.refresh();
	},

	_scrollbar: function (dir) {
		var that = this,
			bar;

		if (!that[dir + 'Scrollbar']) {

			if (that[dir + 'ScrollbarWrapper']) {

				//Remove scrollbar event listeners
				if (that.options.draggableScrollbars) {
					if (that.vScrollbar) that._unbind(START_EV, that.vScrollbarIndicator);
					if (that.hScrollbar) that._unbind(START_EV, that.hScrollbarIndicator);
				}

				if (hasTransform) that[dir + 'ScrollbarIndicator'].style[transform] = '';
				that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
				that[dir + 'ScrollbarWrapper'] = null;
				that[dir + 'ScrollbarIndicator'] = null;
			}

			return;
		}

		if (!that[dir + 'ScrollbarWrapper']) {
			// Create the scrollbar wrapper
			bar = doc.createElement('div');

			if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
			else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

			bar.style.cssText += ';' + (that.options.draggableScrollbars ? '' : 'pointer-events:none;') + cssVendor + 'transition-property:opacity;' + cssVendor + 'transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

			that.wrapper.appendChild(bar);
			that[dir + 'ScrollbarWrapper'] = bar;

			// Create the scrollbar indicator
			bar = doc.createElement('div');
			if (!that.options.scrollbarClass) {
				bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' + cssVendor + 'background-clip:padding-box;' + cssVendor + 'box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';' + cssVendor + 'border-radius:3px;border-radius:3px';
			}
			bar.style.cssText += ';' + (that.options.draggableScrollbars ? '' : 'pointer-events:none;') + cssVendor + 'transition-property:' + cssVendor + 'transform;' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' + cssVendor + 'transition-duration:0;' + cssVendor + 'transform: translate(0,0)' + translateZ;
			if (that.options.useTransition) bar.style.cssText += ';' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

			// Helper attribute so that we can easily tell if current target is scrollbar or not.
			bar.setAttribute('data-scrollbarindicator', true);

			that[dir + 'ScrollbarWrapper'].appendChild(bar);
			that[dir + 'ScrollbarIndicator'] = bar;

			//Add scrollbar event listeners
			if (that.options.draggableScrollbars) {
				if (that.vScrollbar) that._bind(START_EV, that.vScrollbarIndicator);
				if (that.hScrollbar) that._bind(START_EV, that.hScrollbarIndicator);
			}
		}

		if (dir == 'h') {
			that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
			that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
			that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
			that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
			that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
		} else {
			that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
			that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
			that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
			that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
			that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
		}

		// Reset position
		that._scrollbarPos(dir, true);
	},

	_resize: function () {
		var that = this;
		setTimeout(function () { that.refresh(); }, isAndroid ? 200 : 0);
	},

	_pos: function (x, y) {
		if (this.zoomed) return;

		x = this.hScroll ? x : 0;
		y = this.vScroll ? y : 0;

		if (this.options.useTransform) {
			this.scroller.style[transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ')' + translateZ;
		} else {
			x = m.round(x);
			y = m.round(y);
			this.scroller.style.left = x + 'px';
			this.scroller.style.top = y + 'px';
		}

		this.x = x;
		this.y = y;

		this._scrollbarPos('h');
		this._scrollbarPos('v');
	},

	_scrollbarPos: function (dir, hidden) {
		var that = this,
			pos = dir == 'h' ? that.x : that.y,
			size;

		if (!that[dir + 'Scrollbar']) return;

		pos = that[dir + 'ScrollbarProp'] * pos;

		if (pos < 0) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
			}
			pos = 0;
		} else if (pos > that[dir + 'ScrollbarMaxScroll']) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
				pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
			} else {
				pos = that[dir + 'ScrollbarMaxScroll'];
			}
		}

		that[dir + 'ScrollbarWrapper'].style[transitionDelay] = '0';
		that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
		that[dir + 'ScrollbarIndicator'].style[transform] = 'translate(' + (dir == 'h' ? pos + 'px,0)' : '0,' + pos + 'px)') + translateZ;
	},

	_start: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			matrix, x, y,
			c1, c2;

		if (!that.enabled) return;

		if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

		if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

		// If scrollbar is dragged, we need to handle events differently.
		if (that.options.draggableScrollbars) {
			that.isScrollbarDragged = (point.target.getAttribute('data-scrollbarindicator')) ? true : false;
		}

		that.moved = false;
		that.animating = false;
		that.zoomed = false;
		that.distX = 0;
		that.distY = 0;
		that.absDistX = 0;
		that.absDistY = 0;
		that.dirX = 0;
		that.dirY = 0;

		// Gesture start
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX-e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY-e.touches[1].pageY);
			that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

			that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
			that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

			if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
		}

		if (that.options.momentum) {
			if (that.options.useTransform) {
				// Very lame general purpose alternative to CSSMatrix
				matrix = getComputedStyle(that.scroller, null)[transform].replace(/[^0-9\-.,]/g, '').split(',');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '');
				y = +getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '');
			}

			if (x != that.x || y != that.y) {
				if (that.options.useTransition) that._unbind(TRNEND_EV);
				else cancelFrame(that.aniTime);
				that.steps = [];
				that._pos(x, y);
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);
			}
		}

		that.absStartX = that.x;	// Needed by snap threshold
		that.absStartY = that.y;

		that.startX = that.x;
		that.startY = that.y;
		that.pointX = point.pageX;
		that.pointY = point.pageY;

		that.startTime = e.timeStamp || Date.now();

		if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

		that._bind(MOVE_EV, window);
		that._bind(END_EV, window);
		that._bind(CANCEL_EV, window);
	},

	_move: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			// If we're dragging a scrollbar and if draggableScrollbars is set to true, we need to reverse the direction
			// and speed up the scroll to be in sync with the scrollbar/wrapper size ratio.
			deltaX = that.isScrollbarDragged ? -(point.pageX - that.pointX) * (that.scrollerW / that.wrapperW) : point.pageX - that.pointX,
			deltaY = that.isScrollbarDragged ? -(point.pageY - that.pointY) * (that.scrollerH / that.wrapperH) : point.pageY - that.pointY,
			newX = that.x + deltaX,
			newY = that.y + deltaY,
			c1, c2, scale,
			timestamp = e.timeStamp || Date.now();

		if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

		// Zoom
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
			that.touchesDist = m.sqrt(c1*c1+c2*c2);

			that.zoomed = true;

			scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

			if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);
			else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

			that.lastScale = scale / this.scale;

			newX = this.originX - this.originX * that.lastScale + this.x,
			newY = this.originY - this.originY * that.lastScale + this.y;

			this.scroller.style[transform] = 'translate(' + newX + 'px,' + newY + 'px) scale(' + scale + ')' + translateZ;

			if (that.options.onZoom) that.options.onZoom.call(that, e);
			return;
		}

		that.pointX = point.pageX;
		that.pointY = point.pageY;

		// Slow down if outside of the boundaries
		if (newX > 0 || newX < that.maxScrollX) {
			newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
		}
		if (newY > that.minScrollY || newY < that.maxScrollY) {
			newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
		}

		that.distX += deltaX;
		that.distY += deltaY;
		that.absDistX = m.abs(that.distX);
		that.absDistY = m.abs(that.distY);

		if (that.absDistX < 6 && that.absDistY < 6) {
			return;
		}

		// Lock direction
		if (that.options.lockDirection) {
			if (that.absDistX > that.absDistY + 5) {
				newY = that.y;
				deltaY = 0;
			} else if (that.absDistY > that.absDistX + 5) {
				newX = that.x;
				deltaX = 0;
			}
		}

		that.moved = true;
		that._pos(newX, newY);
		that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if (timestamp - that.startTime > 300) {
			that.startTime = timestamp;
			that.startX = that.x;
			that.startY = that.y;
		}

		if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
	},

	_end: function (e) {
		if (hasTouch && e.touches.length !== 0) return;

		var that = this,
			point = hasTouch ? e.changedTouches[0] : e,
			target, ev,
			momentumX = { dist:0, time:0 },
			momentumY = { dist:0, time:0 },
			duration = (e.timeStamp || Date.now()) - that.startTime,
			newPosX = that.x,
			newPosY = that.y,
			distX, distY,
			newDuration,
			snap,
			scale;

		that._unbind(MOVE_EV, window);
		that._unbind(END_EV, window);
		that._unbind(CANCEL_EV, window);

		if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

		if (that.zoomed) {
			scale = that.scale * that.lastScale;
			scale = Math.max(that.options.zoomMin, scale);
			scale = Math.min(that.options.zoomMax, scale);
			that.lastScale = scale / that.scale;
			that.scale = scale;

			that.x = that.originX - that.originX * that.lastScale + that.x;
			that.y = that.originY - that.originY * that.lastScale + that.y;

			that.scroller.style[transitionDuration] = '200ms';
			that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + that.scale + ')' + translateZ;

			that.zoomed = false;
			that.refresh();

			if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
			return;
		}

		if (!that.moved) {
			if (hasTouch) {
				if (that.doubleTapTimer && that.options.zoom) {
					// Double tapped
					clearTimeout(that.doubleTapTimer);
					that.doubleTapTimer = null;
					if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
					that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
					if (that.options.onZoomEnd) {
						setTimeout(function() {
							that.options.onZoomEnd.call(that, e);
						}, 200); // 200 is default zoom duration
					}
				} else if (this.options.handleClick) {
					that.doubleTapTimer = setTimeout(function () {
						that.doubleTapTimer = null;

						// Find the last touched element
						target = point.target;
						while (target.nodeType != 1) target = target.parentNode;

						if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
							ev = doc.createEvent('MouseEvents');
							ev.initMouseEvent('click', true, true, e.view, 1,
								point.screenX, point.screenY, point.clientX, point.clientY,
								e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
								0, null);
							ev._fake = true;
							target.dispatchEvent(ev);
						}
					}, that.options.zoom ? 250 : 0);
				}
			}

			that._resetPos(400);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		if (duration < 300 && that.options.momentum) {
			momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
			momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

			newPosX = that.x + momentumX.dist;
			newPosY = that.y + momentumY.dist;

			if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
			if ((that.y > that.minScrollY && newPosY > that.minScrollY) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
		}

		if (momentumX.dist || momentumY.dist) {
			newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

			// Do we need to snap?
			if (that.options.snap) {
				distX = newPosX - that.absStartX;
				distY = newPosY - that.absStartY;
				if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) { that.scrollTo(that.absStartX, that.absStartY, 200); }
				else {
					snap = that._snap(newPosX, newPosY);
					newPosX = snap.x;
					newPosY = snap.y;
					newDuration = m.max(snap.time, newDuration);
				}
			}

			that.scrollTo(m.round(newPosX), m.round(newPosY), newDuration);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		// Do we need to snap?
		if (that.options.snap) {
			distX = newPosX - that.absStartX;
			distY = newPosY - that.absStartY;
			if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
			else {
				snap = that._snap(that.x, that.y);
				if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
			}

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		that._resetPos(200);
		if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
	},

	_resetPos: function (time) {
		var that = this,
			resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
			resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		if (resetX == that.x && resetY == that.y) {
			if (that.moved) {
				that.moved = false;
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);		// Execute custom code on scroll end
			}

			if (that.hScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.hScrollbarWrapper.style[transitionDelay] = '300ms';
				that.hScrollbarWrapper.style.opacity = '0';
			}
			if (that.vScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.vScrollbarWrapper.style[transitionDelay] = '300ms';
				that.vScrollbarWrapper.style.opacity = '0';
			}

			return;
		}

		that.scrollTo(resetX, resetY, time || 0);
	},

	_wheel: function (e) {
		var that = this,
			wheelDeltaX, wheelDeltaY,
			deltaX, deltaY,
			deltaScale;

		if ('wheelDeltaX' in e) {
			wheelDeltaX = e.wheelDeltaX / 12;
			wheelDeltaY = e.wheelDeltaY / 12;
		} else if('wheelDelta' in e) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
		} else if ('detail' in e) {
			wheelDeltaX = wheelDeltaY = -e.detail * 3;
		} else {
			return;
		}

		if (that.options.wheelAction == 'zoom') {
			deltaScale = that.scale * Math.pow(2, 1/3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
			if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
			if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;

			if (deltaScale != that.scale) {
				if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
				that.wheelZoomCount++;

				that.zoom(e.pageX, e.pageY, deltaScale, 400);

				setTimeout(function() {
					that.wheelZoomCount--;
					if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
				}, 400);
			}

			return;
		}

		deltaX = that.x + wheelDeltaX;
		deltaY = that.y + wheelDeltaY;

		if (deltaX > 0) deltaX = 0;
		else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

		if (deltaY > that.minScrollY) deltaY = that.minScrollY;
		else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;

		if (that.maxScrollY < 0) {
			that.scrollTo(deltaX, deltaY, 0);
		}
	},

	_transitionEnd: function (e) {
		var that = this;

		if (e.target != that.scroller) return;

		that._unbind(TRNEND_EV);

		that._startAni();
	},


	/**
	*
	* Utilities
	*
	*/
	_startAni: function () {
		var that = this,
			startX = that.x, startY = that.y,
			startTime = Date.now(),
			step, easeOut,
			animate;

		if (that.animating) return;

		if (!that.steps.length) {
			that._resetPos(400);
			return;
		}

		step = that.steps.shift();

		if (step.x == startX && step.y == startY) step.time = 0;

		that.animating = true;
		that.moved = true;

		if (that.options.useTransition) {
			that._transitionTime(step.time);
			that._pos(step.x, step.y);
			that.animating = false;
			if (step.time) that._bind(TRNEND_EV);
			else that._resetPos(0);
			return;
		}

		animate = function () {
			var now = Date.now(),
				newX, newY;

			if (now >= startTime + step.time) {
				that._pos(step.x, step.y);
				that.animating = false;
				if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);			// Execute custom code on animation end
				that._startAni();
				return;
			}

			now = (now - startTime) / step.time - 1;
			easeOut = m.sqrt(1 - now * now);
			newX = (step.x - startX) * easeOut + startX;
			newY = (step.y - startY) * easeOut + startY;
			that._pos(newX, newY);
			if (that.animating) that.aniTime = nextFrame(animate);
		};

		animate();
	},

	_transitionTime: function (time) {
		time += 'ms';
		this.scroller.style[transitionDuration] = time;
		if (this.hScrollbar) this.hScrollbarIndicator.style[transitionDuration] = time;
		if (this.vScrollbar) this.vScrollbarIndicator.style[transitionDuration] = time;
	},

	_momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
		var deceleration = 0.0006,
			speed = m.abs(dist) / time,
			newDist = (speed * speed) / (2 * deceleration),
			newTime = 0, outsideDist = 0;

		// Proportinally reduce speed if we are outside of the boundaries
		if (dist > 0 && newDist > maxDistUpper) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistUpper = maxDistUpper + outsideDist;
			speed = speed * maxDistUpper / newDist;
			newDist = maxDistUpper;
		} else if (dist < 0 && newDist > maxDistLower) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistLower = maxDistLower + outsideDist;
			speed = speed * maxDistLower / newDist;
			newDist = maxDistLower;
		}

		newDist = newDist * (dist < 0 ? -1 : 1);
		newTime = speed / deceleration;

		return { dist: newDist, time: m.round(newTime) };
	},

	_offset: function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}

		if (el != this.wrapper) {
			left *= this.scale;
			top *= this.scale;
		}

		return { left: left, top: top };
	},

	_snap: function (x, y) {
		var that = this,
			i, l,
			page, time,
			sizeX, sizeY;

		// Check page X
		page = that.pagesX.length - 1;
		for (i=0, l=that.pagesX.length; i<l; i++) {
			if (x >= that.pagesX[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
		x = that.pagesX[page];
		sizeX = m.abs(x - that.pagesX[that.currPageX]);
		sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
		that.currPageX = page;

		// Check page Y
		page = that.pagesY.length-1;
		for (i=0; i<page; i++) {
			if (y >= that.pagesY[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
		y = that.pagesY[page];
		sizeY = m.abs(y - that.pagesY[that.currPageY]);
		sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
		that.currPageY = page;

		// Snap with constant speed (proportional duration)
		time = m.round(m.max(sizeX, sizeY)) || 200;

		return { x: x, y: y, time: time };
	},

_bind: function (type, el, bubble) {
        if (!(el || this.scroller).addEventListener) {
            (el || this.scroller).attachEvent(type, this, !!bubble);
        }
        else {
            (el || this.scroller).addEventListener(type, this, !!bubble);
        }
	},

	_unbind: function (type, el, bubble) {
	    if (!(el || this.scroller).removeEventListener) {
	        (el || this.scroller).detachEvent(type, this, !!bubble);
	    }
	    else {
	        (el || this.scroller).removeEventListener(type, this, !!bubble);
	    }
	},


	/**
	*
	* Public methods
	*
	*/
	destroy: function () {
		var that = this;

		that.scroller.style[transform] = '';

		// Remove the event listeners
		that._unbind(RESIZE_EV, window);
		that._unbind(START_EV);
		that._unbind(MOVE_EV, window);
		that._unbind(END_EV, window);
		that._unbind(CANCEL_EV, window);

		if (!that.options.hasTouch) {
			that._unbind('DOMMouseScroll');
			that._unbind('mousewheel');
		}

		if (that.options.useTransition) that._unbind(TRNEND_EV);

		if (that.options.draggableScrollbars) {
			if (that.hScrollbar) that._unbind(START_EV, that.hScrollbarIndicator);
			if (that.vScrollbar) that._unbind(START_EV, that.vScrollbarIndicator);
		}

		if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);

		if (that.options.onDestroy) that.options.onDestroy.call(that);

		// Remove the scrollbars
		that.hScrollbar = false;
		that.vScrollbar = false;
		that._scrollbar('h');
		that._scrollbar('v');

	},

	refresh: function () {
		var that = this,
			offset,
			i, l,
			els,
			pos = 0,
			page = 0;

		if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
		that.wrapperW = that.wrapper.clientWidth || 1;
		that.wrapperH = that.wrapper.clientHeight || 1;

		that.minScrollY = -that.options.topOffset || 0;
		that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
		that.scrollerH = m.round((that.scroller.offsetHeight + that.minScrollY) * that.scale);
		that.maxScrollX = that.wrapperW - that.scrollerW;
		that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
		that.dirX = 0;
		that.dirY = 0;

		if (that.options.onRefresh) that.options.onRefresh.call(that);

		that.hScroll = that.options.hScroll && that.maxScrollX < 0;
		that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

		that.hScrollbar = that.hScroll && that.options.hScrollbar;
		that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

		offset = that._offset(that.wrapper);
		that.wrapperOffsetLeft = -offset.left;
		that.wrapperOffsetTop = -offset.top;

		// Prepare snap
		if (typeof that.options.snap == 'string') {
			that.pagesX = [];
			that.pagesY = [];
			els = that.scroller.querySelectorAll(that.options.snap);
			for (i=0, l=els.length; i<l; i++) {
				pos = that._offset(els[i]);
				pos.left += that.wrapperOffsetLeft;
				pos.top += that.wrapperOffsetTop;
				that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
				that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
			}
		} else if (that.options.snap) {
			that.pagesX = [];
			while (pos >= that.maxScrollX) {
				that.pagesX[page] = pos;
				pos = pos - that.wrapperW;
				page++;
			}
			if (that.maxScrollX%that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length-1] + that.pagesX[that.pagesX.length-1];

			pos = 0;
			page = 0;
			that.pagesY = [];
			while (pos >= that.maxScrollY) {
				that.pagesY[page] = pos;
				pos = pos - that.wrapperH;
				page++;
			}
			if (that.maxScrollY%that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length-1] + that.pagesY[that.pagesY.length-1];
		}

		// Prepare the scrollbars
		that._scrollbar('h');
		that._scrollbar('v');

		if (!that.zoomed) {
			that.scroller.style[transitionDuration] = '0';
			that._resetPos(400);
		}
	},

	scrollTo: function (x, y, time, relative) {
		var that = this,
			step = x,
			i, l;

		that.stop();

		if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];

		for (i=0, l=step.length; i<l; i++) {
			if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
			that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
		}

		that._startAni();
	},

	scrollToElement: function (el, time) {
		var that = this, pos;
		el = el.nodeType ? el : that.scroller.querySelector(el);
		if (!el) return;

		pos = that._offset(el);
		pos.left += that.wrapperOffsetLeft;
		pos.top += that.wrapperOffsetTop;

		pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
		pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
		time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;

		that.scrollTo(pos.left, pos.top, time);
	},

	scrollToPage: function (pageX, pageY, time) {
		var that = this, x, y;

		time = time === undefined ? 400 : time;

		if (that.options.onScrollStart) that.options.onScrollStart.call(that);

		if (that.options.snap) {
			pageX = pageX == 'next' ? that.currPageX+1 : pageX == 'prev' ? that.currPageX-1 : pageX;
			pageY = pageY == 'next' ? that.currPageY+1 : pageY == 'prev' ? that.currPageY-1 : pageY;

			pageX = pageX < 0 ? 0 : pageX > that.pagesX.length-1 ? that.pagesX.length-1 : pageX;
			pageY = pageY < 0 ? 0 : pageY > that.pagesY.length-1 ? that.pagesY.length-1 : pageY;

			that.currPageX = pageX;
			that.currPageY = pageY;
			x = that.pagesX[pageX];
			y = that.pagesY[pageY];
		} else {
			x = -that.wrapperW * pageX;
			y = -that.wrapperH * pageY;
			if (x < that.maxScrollX) x = that.maxScrollX;
			if (y < that.maxScrollY) y = that.maxScrollY;
		}

		that.scrollTo(x, y, time);
	},

	disable: function () {
		this.stop();
		this._resetPos(0);
		this.enabled = false;

		// If disabled after touchstart we make sure that there are no left over events
		this._unbind(MOVE_EV, window);
		this._unbind(END_EV, window);
		this._unbind(CANCEL_EV, window);
	},

	enable: function () {
		this.enabled = true;
	},

	stop: function () {
		if (this.options.useTransition) this._unbind(TRNEND_EV);
		else cancelFrame(this.aniTime);
		this.steps = [];
		this.moved = false;
		this.animating = false;
	},

	zoom: function (x, y, scale, time) {
		var that = this,
			relScale = scale / that.scale;

		if (!that.options.useTransform) return;

		that.zoomed = true;
		time = time === undefined ? 200 : time;
		x = x - that.wrapperOffsetLeft - that.x;
		y = y - that.wrapperOffsetTop - that.y;
		that.x = x - x * relScale + that.x;
		that.y = y - y * relScale + that.y;

		that.scale = scale;
		that.refresh();

		that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
		that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		that.scroller.style[transitionDuration] = time + 'ms';
		that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + scale + ')' + translateZ;
		that.zoomed = false;
	},

	isReady: function () {
		return !this.moved && !this.zoomed && !this.animating;
	}

};

function prefixStyle (style) {
	if ( vendor === '' ) return style;

	style = style.charAt(0).toUpperCase() + style.substr(1);
	return vendor + style;
}

dummyStyle = null;	// for the sake of it

if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;

})(window, document);
