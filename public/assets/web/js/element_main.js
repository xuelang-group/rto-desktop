;(function() {
    var aa = '" style="background-image:url('
      , ba = "-disabled"
      , da = "-document.getElementById('"
      , ea = "/translate_a/t"
      , fa = "/translate_suggestion?client="
      , ha = '</button></div></div></td></tr><tr id="'
      , ia = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="'
      , ja = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="'
      , ka = "Component already rendered"
      , g = "DIV"
      , la = "Edge"
      , ma = "Google Website Translator"
      , na = "IFRAME"
      , oa = "INPUT"
      , pa = "INTERNAL_SERVER_ERROR"
      , qa = "OPTION"
      , ra = "Opera"
      , sa = "POST"
      , ta = "SCRIPT"
      , ua = "SPAN"
      , va = "TEXTAREA"
      , wa = "TITLE"
      , xa = "Unable to set parent component"
      , ya = "[goog.net.IframeIo] Unable to send, already active."
      , za = "about:invalid#zClosurez"
      , Aa = "about:invalid#zSoyz"
      , Ba = "absolute"
      , Ca = "action"
      , Da = "activedescendant"
      , Ea = "activity-form-container"
      , Fa = "alt-edited"
      , Ga = "array"
      , Ha = "auto"
      , Ia = "backgroundImage"
      , Ja = "backgroundPosition"
      , Ka = "blur"
      , La = "border-box"
      , Ma = "button"
      , Na = "cancelled"
      , Oa = "change"
      , Pa = "character"
      , Qa = "checked"
      , Ra = "chg_tgt_lang"
      , Sa = "click"
      , Ta = "clk_no_ap_site"
      , Ua = "complete"
      , Va = "container"
      , Wa = "contextmenu"
      , Xa = "dblclick"
      , Ya = "direction"
      , Za = "div"
      , $a = "finish"
      , ab = "finishSourceLang"
      , bb = "finishTargetLang"
      , cb = "focus"
      , db = "focusin"
      , eb = "focusout"
      , p = "function"
      , fb = "goog-float-bottom"
      , gb = "goog-float-top"
      , hb = "goog-inline-block "
      , ib = "goog-menuheader"
      , jb = "goog-menuseparator"
      , kb = "goog-option"
      , lb = "goog-option-selected"
      , mb = "goog-te-menu-value"
      , nb = "goog-te-menu2-item-selected"
      , ob = "goog-te-spinner-animation-show"
      , pb = "goog-te-spinner-pos-show"
      , qb = "hidden"
      , rb = "hide"
      , sb = "horizontal"
      , ub = "https://translate.google.com"
      , vb = "https://www.google.com/images/cleardot.gif"
      , wb = "javascript:void(0)"
      , xb = "keydown"
      , yb = "keypress"
      , zb = "load"
      , Ab = "mousedown"
      , Bb = "mousemove"
      , Cb = "mouseout"
      , Db = "mouseover"
      , Eb = "move_offscreen"
      , q = "none"
      , Fb = "number"
      , Gb = "object"
      , Hb = "opacity 1s linear"
      , Ib = "paddingLeft"
      , Jb = "paddingRight"
      , Kb = "position"
      , Lb = "progressSection"
      , Mb = "promptSourceLang"
      , Nb = "promptTargetLang"
      , Ob = "ready"
      , Pb = "readystatechange"
      , Qb = "rtl"
      , Rb = "selected"
      , Sb = "skiptranslate"
      , Tb = "status-message"
      , Ub = "string"
      , Vb = "submitted"
      , Wb = "targetLanguage"
      , Xb = "textarea-placeholder-input"
      , Yb = "toggle_display"
      , Zb = "trans-target-empty"
      , $b = "trans-target-highlight"
      , ac = "transition"
      , bc = "translate"
      , cc = "vertical"
      , dc = "visible"
      , ec = "withCredentials";
    function fc() {
        return function() {}
    }
    function gc(a) {
        return function(b) {
            this[a] = b
        }
    }
    function t(a) {
        return function() {
            return this[a]
        }
    }
    function u(a) {
        return function() {
            return a
        }
    }
    var v, hc = typeof Object.create == p ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , ic;
    if (typeof Object.setPrototypeOf == p)
        ic = Object.setPrototypeOf;
    else {
        var jc;
        a: {
            var kc = {
                Dh: !0
            }
              , lc = {};
            try {
                lc.__proto__ = kc;
                jc = lc.Dh;
                break a
            } catch (a) {}
            jc = !1
        }
        ic = jc ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var mc = ic;
    function nc(a, b) {
        a.prototype = hc(b.prototype);
        a.prototype.constructor = a;
        if (mc)
            mc(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.m = b.prototype
    }
    var oc = oc || {}
      , x = this || self;
    function pc(a) {
        return void 0 !== a
    }
    function y(a) {
        return typeof a == Ub
    }
    function qc(a) {
        return typeof a == Fb
    }
    var rc = /^[\w+/_-]+[=]{0,2}$/
      , sc = null;
    function z() {}
    function tc(a) {
        a.Te = void 0;
        a.X = function() {
            return a.Te ? a.Te : a.Te = new a
        }
    }
    function A(a) {
        var b = typeof a;
        if (b == Gb)
            if (a) {
                if (a instanceof Array)
                    return Ga;
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return Gb;
                if ("[object Array]" == c || typeof a.length == Fb && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return Ga;
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return p
            } else
                return "null";
        else if (b == p && "undefined" == typeof a.call)
            return Gb;
        return b
    }
    function B(a) {
        return A(a) == Ga
    }
    function uc(a) {
        var b = A(a);
        return b == Ga || b == Gb && typeof a.length == Fb
    }
    function vc(a) {
        return A(a) == p
    }
    function wc(a) {
        var b = typeof a;
        return b == Gb && null != a || b == p
    }
    function xc(a) {
        return a[yc] || (a[yc] = ++zc)
    }
    var yc = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , zc = 0;
    function Ac(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function Bc(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function C(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? C = Ac : C = Bc;
        return C.apply(null, arguments)
    }
    function Cc(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    var D = Date.now || function() {
        return +new Date
    }
    ;
    function Dc(a, b) {
        a = a.split(".");
        var c = x;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function G(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.m = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    ;function Ec(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Ec);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    G(Ec, Error);
    Ec.prototype.name = "CustomError";
    var Fc, Gc = {
        Tj: 1,
        Ij: 2,
        nk: 3,
        Lj: 4,
        Vj: 5,
        Uj: 6,
        fk: 7,
        Nj: 8,
        Oj: 9,
        Qj: 10,
        Pj: 11,
        ck: 12
    };
    function Hc(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        Ec.call(this, c + a[d])
    }
    G(Hc, Ec);
    Hc.prototype.name = "AssertionError";
    function Ic(a) {
        return a[a.length - 1]
    }
    var Jc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (y(a))
            return y(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , Kc = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = y(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , Lc = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = y(a) ? a.split("") : a, h = 0; h < c; h++)
            if (h in f) {
                var k = f[h];
                b.call(void 0, k, h, a) && (d[e++] = k)
            }
        return d
    }
      , Mc = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = Array(c), e = y(a) ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
      , Nc = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
      , Oc = Array.prototype.every ? function(a, b) {
        return Array.prototype.every.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a))
                return !1;
        return !0
    }
    ;
    function Pc(a, b) {
        a: {
            for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : y(a) ? a.charAt(b) : a[b]
    }
    function Qc(a, b) {
        return 0 <= Jc(a, b)
    }
    function Rc(a, b) {
        b = Jc(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    function Sc(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Tc(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Uc(a, b, c, d) {
        Array.prototype.splice.apply(a, Vc(arguments, 1))
    }
    function Vc(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    ;function Wc(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;function Xc(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Yc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    function Zc(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function $c(a, b) {
        return null !== a && b in a
    }
    function ad() {
        var a = bd, b;
        for (b in a)
            return !1;
        return !0
    }
    function cd(a, b, c) {
        if (null !== a && b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }
    function dd(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    var ed = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function fd(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < ed.length; f++)
                c = ed[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    function gd(a) {
        var b = arguments.length;
        if (1 == b && B(arguments[0]))
            return gd.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    }
    ;var hd = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    function id(a, b) {
        this.a = a === jd && b || "";
        this.b = kd
    }
    id.prototype.gb = !0;
    id.prototype.La = t("a");
    function ld(a) {
        return a instanceof id && a.constructor === id && a.b === kd ? a.a : "type_error:Const"
    }
    var kd = {}
      , jd = {}
      , md = new id(jd,"");
    var nd = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    function od(a, b, c) {
        this.b = a === pd && b || "";
        this.c = a === pd && c || null;
        this.f = qd
    }
    od.prototype.gb = !0;
    od.prototype.La = function() {
        return this.b.toString()
    }
    ;
    od.prototype.Qe = !0;
    od.prototype.a = u(1);
    function rd(a) {
        if (a instanceof od && a.constructor === od && a.f === qd)
            return a.b;
        A(a);
        return "type_error:TrustedResourceUrl"
    }
    var sd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , qd = {};
    function td(a, b, c) {
        if (null == c)
            return b;
        if (y(c))
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = B(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                null != h && (b || (b = a),
                b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
            }
        }
        return b
    }
    var pd = {};
    var ud = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    ;
    function vd(a, b) {
        if (b)
            a = a.replace(wd, "&amp;").replace(xd, "&lt;").replace(yd, "&gt;").replace(zd, "&quot;").replace(Ad, "&#39;").replace(Bd, "&#0;");
        else {
            if (!Cd.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(wd, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(xd, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(yd, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(zd, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Ad, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Bd, "&#0;"))
        }
        return a
    }
    var wd = /&/g
      , xd = /</g
      , yd = />/g
      , zd = /"/g
      , Ad = /'/g
      , Bd = /\x00/g
      , Cd = /[\x00&<>"']/;
    function Dd(a, b) {
        var c = 0;
        a = ud(String(a)).split(".");
        b = ud(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length)
                    break;
                c = Ed(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ed(0 == f[2].length, 0 == h[2].length) || Ed(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }
    function Ed(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;function Fd(a, b) {
        this.b = a === Gd && b || "";
        this.c = Hd
    }
    Fd.prototype.gb = !0;
    Fd.prototype.La = function() {
        return this.b.toString()
    }
    ;
    Fd.prototype.Qe = !0;
    Fd.prototype.a = u(1);
    function Id(a) {
        if (a instanceof Fd && a.constructor === Fd && a.c === Hd)
            return a.b;
        A(a);
        return "type_error:SafeUrl"
    }
    var Jd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Kd(a) {
        if (a instanceof Fd)
            return a;
        a = typeof a == Gb && a.gb ? a.La() : String(a);
        Jd.test(a) || (a = za);
        return new Fd(Gd,a)
    }
    var Hd = {}
      , Gd = {};
    function Ld() {
        this.a = "";
        this.b = Md
    }
    Ld.prototype.gb = !0;
    var Md = {};
    Ld.prototype.La = t("a");
    function Nd(a) {
        if (a instanceof Ld && a.constructor === Ld && a.b === Md)
            return a.a;
        A(a);
        return "type_error:SafeStyle"
    }
    function Od(a) {
        var b = new Ld;
        b.a = a;
        return b
    }
    var Pd = Od("");
    function Qd(a) {
        if (a instanceof Fd)
            return 'url("' + Id(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof id)
            a = ld(a);
        else {
            a = String(a);
            var b = a.replace(Rd, "$1").replace(Rd, "$1").replace(Sd, "url");
            if (Td.test(b)) {
                if (b = !Ud.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Vd(a)
                }
                a = b ? Wd(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new Hc("Value does not allow [{;}], got: %s.",[a]);
        return a
    }
    function Vd(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }
    var Td = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/
      , Sd = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
      , Rd = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g
      , Ud = /\/\*/;
    function Wd(a) {
        return a.replace(Sd, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(h, k, l) {
                f = k;
                return l
            });
            b = Kd(d).La();
            return c + f + b + f + e
        })
    }
    ;function Xd() {
        this.a = "";
        this.b = Yd
    }
    Xd.prototype.gb = !0;
    var Yd = {};
    Xd.prototype.La = t("a");
    function Zd(a) {
        if (a instanceof Xd && a.constructor === Xd && a.b === Yd)
            return a.a;
        A(a);
        return "type_error:SafeStyleSheet"
    }
    function $d(a) {
        var b = new Xd;
        b.a = a;
        return b
    }
    $d("");
    var ae;
    a: {
        var be = x.navigator;
        if (be) {
            var ce = be.userAgent;
            if (ce) {
                ae = ce;
                break a
            }
        }
        ae = ""
    }
    function H(a) {
        return -1 != ae.indexOf(a)
    }
    function de(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
            c.push([d[1], d[2], d[3] || void 0]);
        return c
    }
    ;function ee() {
        return H("Trident") || H("MSIE")
    }
    function fe() {
        return H("Firefox") || H("FxiOS")
    }
    function ge() {
        return (H("Chrome") || H("CriOS")) && !H(la)
    }
    function he() {
        function a(e) {
            e = Pc(e, d);
            return c[e] || ""
        }
        var b = ae;
        if (!ee()) {
            b = de(b);
            var c = {};
            Kc(b, function(e) {
                c[e[0]] = e[1]
            });
            var d = Cc($c, c);
            H(ra) ? a(["Version", ra]) : H(la) ? a([la]) : H("Edg/") ? a(["Edg"]) : ge() && a(["Chrome", "CriOS"])
        }
    }
    ;function ie() {
        this.b = "";
        this.f = je;
        this.c = null
    }
    ie.prototype.Qe = !0;
    ie.prototype.a = t("c");
    ie.prototype.gb = !0;
    ie.prototype.La = function() {
        return this.b.toString()
    }
    ;
    function ke(a) {
        if (a instanceof ie && a.constructor === ie && a.f === je)
            return a.b;
        A(a);
        return "type_error:SafeHtml"
    }
    function le(a) {
        if (a instanceof ie)
            return a;
        var b = typeof a == Gb
          , c = null;
        b && a.Qe && (c = a.a());
        return me(vd(b && a.gb ? a.La() : String(a)), c)
    }
    var ne = /^[a-zA-Z0-9-]+$/
      , oe = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , pe = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    function qe(a, b) {
        var c = String(a);
        if (!ne.test(c))
            throw Error("");
        if (c.toUpperCase()in pe)
            throw Error("");
        a = String(a);
        c = null;
        var d = "<" + a
          , e = "";
        if (b)
            for (n in b) {
                if (!ne.test(n))
                    throw Error("");
                var f = b[n];
                if (null != f) {
                    var h = n;
                    var k = f;
                    if (k instanceof id)
                        k = ld(k);
                    else if ("style" == h.toLowerCase()) {
                        f = void 0;
                        if (!wc(k))
                            throw Error("");
                        if (!(k instanceof Ld)) {
                            var l = "";
                            for (f in k) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(f))
                                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + f);
                                var m = k[f];
                                null != m && (m = B(m) ? Mc(m, Qd).join(" ") : Qd(m),
                                l += f + ":" + m + ";")
                            }
                            k = l ? Od(l) : Pd
                        }
                        k = Nd(k)
                    } else {
                        if (/^on/i.test(h))
                            throw Error("");
                        if (h.toLowerCase()in oe)
                            if (k instanceof od)
                                k = rd(k).toString();
                            else if (k instanceof Fd)
                                k = Id(k).toString();
                            else if (y(k))
                                k = Kd(k).La();
                            else
                                throw Error("");
                    }
                    k.gb && (k = k.La());
                    h = h + '="' + vd(String(k)) + '"';
                    e += " " + h
                }
            }
        var n = d + e;
        d = void 0;
        null != d ? B(d) || (d = [d]) : d = [];
        !0 === hd[a.toLowerCase()] ? n += ">" : (c = re(d),
        n += ">" + ke(c).toString() + "</" + a + ">",
        c = c.a());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        return se(n, c)
    }
    function te(a) {
        function b(f) {
            B(f) ? Kc(f, b) : (f = le(f),
            e.push(ke(f).toString()),
            f = f.a(),
            0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = le(ue)
          , d = c.a()
          , e = [];
        Kc(a, b);
        return me(e.join(ke(c).toString()), d)
    }
    function re(a) {
        return te(Array.prototype.slice.call(arguments))
    }
    var je = {};
    function me(a, b) {
        return se(a, b)
    }
    function se(a, b) {
        var c = new ie;
        c.b = a;
        c.c = b;
        return c
    }
    se("<!DOCTYPE html>", 0);
    var ue = se("", 0)
      , ve = se("<br>", 0);
    var we = Wc(function() {
        var a = document.createElement(Za)
          , b = document.createElement(Za);
        b.appendChild(document.createElement(Za));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ke(ue);
        return !b.parentElement
    });
    function xe(a, b) {
        if (we())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = ke(b)
    }
    function ye(a, b) {
        b instanceof Fd || b instanceof Fd || (b = typeof b == Gb && b.gb ? b.La() : String(b),
        Jd.test(b) || (b = za),
        b = new Fd(Gd,b));
        a.action = Id(b)
    }
    function ze(a) {
        var b = new od(pd,ld(md),null);
        a.src = b.c ? b.c : rd(b).toString()
    }
    function Ae(a, b) {
        a.src = rd(b);
        if (null === sc)
            b: {
                b = x.document;
                if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && rc.test(b)) {
                    sc = b;
                    break b
                }
                sc = ""
            }
        b = sc;
        b && a.setAttribute("nonce", b)
    }
    ;function Be(a) {
        return a.replace(/\xa0|[ \t]+/g, " ")
    }
    function Ce(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }
    function De(a) {
        return a.replace(/^[\s\xa0]+/, "")
    }
    function Ee(a) {
        return a.replace(/[\s\xa0]+$/, "")
    }
    function Fe(a) {
        return encodeURIComponent(String(a))
    }
    function Ge(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
    function He(a) {
        return a = vd(a, void 0)
    }
    function Ie(a) {
        return -1 != a.indexOf("&") ? "document"in x ? Je(a) : Ke(a) : a
    }
    function Je(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var c = x.document.createElement(Za);
        return a.replace(Le, function(d, e) {
            var f = b[d];
            if (f)
                return f;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)),
            isNaN(e) || (f = String.fromCharCode(e)));
            f || (f = se(d + " ", null),
            xe(c, f),
            f = c.firstChild.nodeValue.slice(0, -1));
            return b[d] = f
        })
    }
    function Ke(a) {
        return a.replace(/&([^;]+);/g, function(b, c) {
            switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
                isNaN(c)) ? b : String.fromCharCode(c)
            }
        })
    }
    var Le = /&([^;\s<&]+);?/g;
    function Me(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function Ne(a) {
        var b = y(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(c, d, e) {
            return d + e.toUpperCase()
        })
    }
    ;function Oe() {
        return H("iPhone") && !H("iPod") && !H("iPad")
    }
    function Pe() {
        return Oe() || H("iPad") || H("iPod")
    }
    ;function Qe(a) {
        Qe[" "](a);
        return a
    }
    Qe[" "] = z;
    function Re(a, b) {
        try {
            return Qe(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    function Se(a, b, c) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
    }
    ;var Te = H(ra)
      , I = ee()
      , Ue = H(la)
      , Ve = Ue || I
      , J = H("Gecko") && !(-1 != ae.toLowerCase().indexOf("webkit") && !H(la)) && !(H("Trident") || H("MSIE")) && !H(la)
      , K = -1 != ae.toLowerCase().indexOf("webkit") && !H(la)
      , We = K && H("Mobile")
      , Xe = H("Macintosh")
      , Ye = H("Windows")
      , Ze = H("Android")
      , $e = Oe()
      , af = H("iPad")
      , bf = H("iPod")
      , cf = Pe();
    function df() {
        var a = x.document;
        return a ? a.documentMode : void 0
    }
    var ef;
    a: {
        var ff = ""
          , gf = function() {
            var a = ae;
            if (J)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Ue)
                return /Edge\/([\d\.]+)/.exec(a);
            if (I)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (K)
                return /WebKit\/(\S+)/.exec(a);
            if (Te)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        gf && (ff = gf ? gf[1] : "");
        if (I) {
            var jf = df();
            if (null != jf && jf > parseFloat(ff)) {
                ef = String(jf);
                break a
            }
        }
        ef = ff
    }
    var kf = ef
      , lf = {};
    function L(a) {
        return Se(lf, a, function() {
            return 0 <= Dd(kf, a)
        })
    }
    function mf(a) {
        return Number(nf) >= a
    }
    var of;
    of = x.document && I ? df() : void 0;
    var nf = of;
    var pf = fe()
      , qf = Oe() || H("iPod")
      , rf = H("iPad")
      , sf = H("Android") && !(ge() || fe() || H(ra) || H("Silk"))
      , tf = ge()
      , uf = H("Safari") && !(ge() || H("Coast") || H(ra) || H(la) || H("Edg/") || H("OPR") || fe() || H("Silk") || H("Android")) && !Pe();
    var vf = null
      , wf = J || K && !uf || Te || !uf && !I && typeof x.atob == p;
    function xf(a) {
        if (wf)
            return x.atob(a);
        var b = "";
        yf(a, function(c) {
            b += String.fromCharCode(c)
        });
        return b
    }
    function yf(a, b) {
        function c(l) {
            for (; d < a.length; ) {
                var m = a.charAt(d++)
                  , n = vf[m];
                if (null != n)
                    return n;
                if (!/^[\s\xa0]*$/.test(m))
                    throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        zf();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , h = c(64)
              , k = c(64);
            if (64 === k && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2),
            64 != k && b(h << 6 & 192 | k))
        }
    }
    function zf() {
        if (!vf) {
            vf = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === vf[f] && (vf[f] = e)
                }
        }
    }
    ;function Af() {}
    var Bf = typeof Uint8Array == p;
    function Cf(a, b, c) {
        a.a = null;
        b || (b = []);
        a.l = void 0;
        a.f = -1;
        a.b = b;
        a: {
            if (b = a.b.length) {
                --b;
                var d = a.b[b];
                if (!(null === d || typeof d != Gb || B(d) || Bf && d instanceof Uint8Array)) {
                    a.g = b - a.f;
                    a.c = d;
                    break a
                }
            }
            a.g = Number.MAX_VALUE
        }
        a.h = {};
        if (c)
            for (b = 0; b < c.length; b++)
                d = c[b],
                d < a.g ? (d += a.f,
                a.b[d] = a.b[d] || Df) : (Ef(a),
                a.c[d] = a.c[d] || Df)
    }
    var Df = [];
    function Ef(a) {
        var b = a.g + a.f;
        a.b[b] || (a.c = a.b[b] = {})
    }
    function Ff(a, b) {
        if (b < a.g) {
            b += a.f;
            var c = a.b[b];
            return c === Df ? a.b[b] = [] : c
        }
        if (a.c)
            return c = a.c[b],
            c === Df ? a.c[b] = [] : c
    }
    function Gf(a, b, c) {
        b < a.g ? a.b[b + a.f] = c : (Ef(a),
        a.c[b] = c);
        return a
    }
    function Hf(a, b, c) {
        a.a || (a.a = {});
        var d = c ? c.Fb() : c;
        a.a[b] = c;
        Gf(a, b, d)
    }
    function If(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[b]) {
            for (var d = Ff(a, b), e = [], f = 0; f < d.length; f++)
                e[f] = new c(d[f]);
            a.a[b] = e
        }
        (d = a.a[b]) || (d = a.a[b] = []);
        c = new c;
        a = Ff(a, b);
        d.push(c);
        a.push(c.Fb());
        return c
    }
    function Jf(a) {
        if (a.a)
            for (var b in a.a) {
                var c = a.a[b];
                if (B(c))
                    for (var d = 0; d < c.length; d++)
                        c[d] && c[d].Fb();
                else
                    c && c.Fb()
            }
    }
    Af.prototype.Fb = function() {
        Jf(this);
        return this.b
    }
    ;
    Af.prototype.toString = function() {
        Jf(this);
        return this.b.toString()
    }
    ;
    function Kf(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return y(a) && a.match(/\S+/g) || []
    }
    function Lf(a, b) {
        return a.classList ? a.classList.contains(b) : Qc(Kf(a), b)
    }
    function M(a, b) {
        a.classList ? a.classList.add(b) : Lf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    function Mf(a, b) {
        if (a.classList)
            Kc(b, function(e) {
                M(a, e)
            });
        else {
            var c = {};
            Kc(Kf(a), function(e) {
                c[e] = !0
            });
            Kc(b, function(e) {
                c[e] = !0
            });
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    }
    function Nf(a, b) {
        a.classList ? a.classList.remove(b) : Lf(a, b) && (a.className = Lc(Kf(a), function(c) {
            return c != b
        }).join(" "))
    }
    function Of(a, b) {
        a.classList ? Kc(b, function(c) {
            Nf(a, c)
        }) : a.className = Lc(Kf(a), function(c) {
            return !Qc(b, c)
        }).join(" ")
    }
    ;var Pf = !I || mf(9)
      , Qf = !J && !I || I && mf(9) || J && L("1.9.1")
      , Rf = I && !L("9")
      , Sf = I || Te || K
      , Tf = I && !mf(9);
    function N(a, b) {
        this.x = pc(a) ? a : 0;
        this.y = pc(b) ? b : 0
    }
    function Uf(a) {
        return new N(a.x,a.y)
    }
    function Vf(a, b) {
        return new N(a.x - b.x,a.y - b.y)
    }
    N.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    N.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    N.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    N.prototype.translate = function(a, b) {
        a instanceof N ? (this.x += a.x,
        this.y += a.y) : (this.x += Number(a),
        qc(b) && (this.y += b));
        return this
    }
    ;
    function Wf(a, b) {
        this.width = a;
        this.height = b
    }
    Wf.prototype.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    Wf.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    Wf.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    Wf.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    function Xf(a) {
        return a ? new Yf(O(a)) : Fc || (Fc = new Yf)
    }
    function Zf(a, b) {
        return y(b) ? a.getElementById(b) : b
    }
    function $f(a, b) {
        return (b || document).getElementsByTagName(String(a))
    }
    function ag() {
        var a = document;
        return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : bg(document, "*", Fa, void 0)
    }
    function cg(a, b) {
        var c = b || document;
        if (c.getElementsByClassName)
            a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : bg(c, "*", a, b)[0] || null
        }
        return a || null
    }
    function bg(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++)
                    b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++)
                b = h.className,
                typeof b.split == p && Qc(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }
    function dg(a, b) {
        Xc(b, function(c, d) {
            c && typeof c == Gb && c.gb && (c = c.La());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : eg.hasOwnProperty(d) ? a.setAttribute(eg[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var eg = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function fg(a) {
        a = a.document;
        a = gg(a) ? a.documentElement : a.body;
        return new Wf(a.clientWidth,a.clientHeight)
    }
    function hg(a) {
        var b = ig(a);
        a = a.parentWindow || a.defaultView;
        return I && L("10") && a.pageYOffset != b.scrollTop ? new N(b.scrollLeft,b.scrollTop) : new N(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function ig(a) {
        return a.scrollingElement ? a.scrollingElement : !K && gg(a) ? a.documentElement : a.body || a.documentElement
    }
    function jg(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    function kg(a, b, c) {
        return lg(document, arguments)
    }
    function lg(a, b) {
        var c = String(b[0])
          , d = b[1];
        if (!Pf && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', He(d.name), '"');
            if (d.type) {
                c.push(' type="', He(d.type), '"');
                var e = {};
                fd(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (y(d) ? c.className = d : B(d) ? c.className = d.join(" ") : dg(c, d));
        2 < b.length && mg(a, c, b, 2);
        return c
    }
    function mg(a, b, c, d) {
        function e(h) {
            h && b.appendChild(y(h) ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !uc(f) || wc(f) && 0 < f.nodeType ? e(f) : Kc(ng(f) ? Tc(f) : f, e)
        }
    }
    function og() {
        var a = qe("WBR")
          , b = document
          , c = b.createElement(g);
        I ? (a = re(ve, a),
        xe(c, a),
        c.removeChild(c.firstChild)) : xe(c, a);
        if (1 == c.childNodes.length)
            c = c.removeChild(c.firstChild);
        else {
            for (b = b.createDocumentFragment(); c.firstChild; )
                b.appendChild(c.firstChild);
            c = b
        }
        return c
    }
    function gg(a) {
        return "CSS1Compat" == a.compatMode
    }
    function pg(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case oa:
        case na:
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case ta:
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    function qg(a, b) {
        mg(O(a), a, arguments, 1)
    }
    function rg(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function sg(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    function tg(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    function ug(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    function vg(a) {
        return Qf && void 0 != a.children ? a.children : Lc(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    }
    function wg(a) {
        return pc(a.firstElementChild) ? a.firstElementChild : xg(a.firstChild, !0)
    }
    function xg(a, b) {
        for (; a && 1 != a.nodeType; )
            a = b ? a.nextSibling : a.previousSibling;
        return a
    }
    function yg(a) {
        return wc(a) && 1 == a.nodeType
    }
    function zg(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    function Ag(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (I && !mf(9)) {
            if (9 == a.nodeType)
                return -1;
            if (9 == b.nodeType)
                return 1
        }
        if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
            var c = 1 == a.nodeType
              , d = 1 == b.nodeType;
            if (c && d)
                return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode
              , f = b.parentNode;
            return e == f ? Bg(a, b) : !c && zg(e, b) ? -1 * Cg(a, b) : !d && zg(f, a) ? Cg(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = O(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(x.Range.START_TO_END, a)
    }
    function Cg(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (; b.parentNode != c; )
            b = b.parentNode;
        return Bg(b, a)
    }
    function Bg(a, b) {
        for (; b = b.previousSibling; )
            if (b == a)
                return -1;
        return 1
    }
    function Dg(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], h = arguments[b]; h; )
                f.unshift(h),
                h = h.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var k = 1; k < c; k++)
                if (h != d[k][b])
                    return f;
            f = h
        }
        return f
    }
    function O(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function Eg(a) {
        return a.contentDocument || a.contentWindow.document
    }
    function Fg(a) {
        try {
            return a.contentWindow || (a.contentDocument ? jg(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
    function Gg(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else
            rg(a),
            a.appendChild(O(a).createTextNode(String(b)))
    }
    var Hg = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , Ig = {
        IMG: " ",
        BR: "\n"
    };
    function Jg(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1,
        a.removeAttribute("tabIndex"))
    }
    function Kg(a) {
        return I && !L("9") ? (a = a.getAttributeNode("tabindex"),
        null != a && a.specified) : a.hasAttribute("tabindex")
    }
    function Lg(a) {
        a = a.tabIndex;
        return qc(a) && 0 <= a && 32768 > a
    }
    function Mg(a) {
        if (Rf && null !== a && "innerText"in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Ng(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Rf || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    function Og(a) {
        var b = [];
        Ng(a, b, !1);
        return b.join("")
    }
    function Ng(a, b, c) {
        if (!(a.nodeName in Hg))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Ig)
                b.push(Ig[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Ng(a, b, c),
                    a = a.nextSibling
    }
    function ng(a) {
        if (a && typeof a.length == Fb) {
            if (wc(a))
                return typeof a.item == p || typeof a.item == Ub;
            if (vc(a))
                return typeof a.item == p
        }
        return !1
    }
    function Yf(a) {
        this.a = a || x.document || document
    }
    v = Yf.prototype;
    v.j = function(a) {
        return Zf(this.a, a)
    }
    ;
    v.D = function(a, b, c) {
        return lg(this.a, arguments)
    }
    ;
    function Pg(a, b) {
        return a.a.createElement(String(b))
    }
    function Qg(a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    }
    v.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    v.Qc = rg;
    v.Rh = vg;
    v.bg = wg;
    v.contains = zg;
    v.ib = Gg;
    v.dg = Mg;
    function Rg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    v = Rg.prototype;
    v.contains = function(a) {
        return this && a ? a instanceof Rg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    v.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    v.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    v.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    v.translate = function(a, b) {
        a instanceof N ? (this.left += a.x,
        this.right += a.x,
        this.top += a.y,
        this.bottom += a.y) : (this.left += a,
        this.right += a,
        qc(b) && (this.top += b,
        this.bottom += b));
        return this
    }
    ;
    function Sg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    v = Sg.prototype;
    v.contains = function(a) {
        return a instanceof N ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    v.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    v.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    v.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    v.translate = function(a, b) {
        a instanceof N ? (this.left += a.x,
        this.top += a.y) : (this.left += a,
        qc(b) && (this.top += b));
        return this
    }
    ;
    function P(a, b, c) {
        if (y(b))
            (b = Tg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = Tg(c, d);
                f && (c.style[f] = e)
            }
    }
    var Ug = {};
    function Tg(a, b) {
        var c = Ug[b];
        if (!c) {
            var d = Me(b);
            c = d;
            void 0 === a.style[d] && (d = (K ? "Webkit" : J ? "Moz" : I ? "ms" : Te ? "O" : null) + Ne(d),
            void 0 !== a.style[d] && (c = d));
            Ug[b] = c
        }
        return c
    }
    function Vg(a, b) {
        var c = O(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    function Wg(a, b) {
        return Vg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function Xg(a, b, c) {
        if (b instanceof N) {
            var d = b.x;
            b = b.y
        } else
            d = b,
            b = c;
        a.style.left = Yg(d);
        a.style.top = Yg(b)
    }
    function Zg(a) {
        a = a ? O(a) : document;
        return !I || mf(9) || gg(Xf(a).a) ? a.documentElement : a.body
    }
    function $g(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        I && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function ah(a) {
        if (I && !mf(8))
            return a.offsetParent;
        var b = O(a)
          , c = Wg(a, Kb)
          , d = "fixed" == c || c == Ba;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = Wg(a, Kb),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Ba || "relative" == c))
                return a;
        return null
    }
    function bh(a) {
        for (var b = new Rg(0,Infinity,Infinity,0), c = Xf(a), d = c.a.body, e = c.a.documentElement, f = ig(c.a); a = ah(a); )
            if (!(I && 0 == a.clientWidth || K && 0 == a.clientHeight && a == d) && a != d && a != e && Wg(a, "overflow") != dc) {
                var h = ch(a)
                  , k = new N(a.clientLeft,a.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = fg(Qg(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }
    function ch(a) {
        var b = O(a)
          , c = new N(0,0)
          , d = Zg(b);
        if (a == d)
            return c;
        a = $g(a);
        b = hg(Xf(b).a);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function dh(a, b) {
        var c = new N(0,0)
          , d = jg(O(a));
        if (!Re(d, "parent"))
            return c;
        do {
            if (d == b)
                var e = ch(a);
            else
                e = $g(a),
                e = new N(e.left,e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));return c
    }
    function Yg(a) {
        typeof a == Fb && (a += "px");
        return a
    }
    function eh(a) {
        var b = fh;
        if (Wg(a, "display") != q)
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = qb;
        c.position = Ba;
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    function fh(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = K && !b && !c;
        return pc(b) && !d || !a.getBoundingClientRect ? new Wf(b,c) : (a = $g(a),
        new Wf(a.right - a.left,a.bottom - a.top))
    }
    function Q(a, b) {
        a.style.display = b ? "" : q
    }
    function gh(a, b) {
        b = Xf(b);
        var c = b.a;
        if (I && c.createStyleSheet)
            b = c.createStyleSheet(),
            hh(b, a);
        else {
            c = bg(b.a, "HEAD", void 0, void 0)[0];
            if (!c) {
                var d = bg(b.a, "BODY", void 0, void 0)[0];
                c = b.D("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.D("STYLE");
            hh(d, a);
            b.appendChild(c, d)
        }
    }
    function hh(a, b) {
        b = Zd(b);
        I && pc(a.cssText) ? a.cssText = b : a.innerHTML = b
    }
    function ih(a) {
        return Qb == Wg(a, Ya)
    }
    var jh = J ? "MozUserSelect" : K || Ue ? "WebkitUserSelect" : null;
    function kh(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (jh) {
            if (b = b ? q : "",
            a.style && (a.style[jh] = b),
            c) {
                a = 0;
                for (var d; d = c[a]; a++)
                    d.style && (d.style[jh] = b)
            }
        } else if (I || Te)
            if (b = b ? "on" : "",
            a.setAttribute("unselectable", b),
            c)
                for (a = 0; d = c[a]; a++)
                    d.setAttribute("unselectable", b)
    }
    function lh(a) {
        return new Wf(a.offsetWidth,a.offsetHeight)
    }
    function mh(a, b) {
        var c = gg(Xf(O(a)).a);
        if (!I || L("10") || c && L("8"))
            nh(a, b, "content-box");
        else {
            var d = a.style;
            c ? (d.pixelWidth = b.width,
            d.pixelHeight = b.height) : (c = oh(a),
            a = ph(a),
            d.pixelWidth = b.width + a.left + c.left + c.right + a.right,
            d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
        }
    }
    function nh(a, b, c) {
        a = a.style;
        J ? a.MozBoxSizing = c : K ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px"
    }
    function qh(a, b, c, d) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var e = a.style[c]
          , f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return +b
    }
    function rh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? qh(a, b, "left", "pixelLeft") : 0
    }
    function oh(a) {
        if (I) {
            var b = rh(a, Ib)
              , c = rh(a, Jb)
              , d = rh(a, "paddingTop");
            a = rh(a, "paddingBottom");
            return new Rg(d,c,a,b)
        }
        b = Vg(a, Ib);
        c = Vg(a, Jb);
        d = Vg(a, "paddingTop");
        a = Vg(a, "paddingBottom");
        return new Rg(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    }
    var sh = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    function th(a, b) {
        if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == q)
            return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in sh ? sh[b] : qh(a, b, "left", "pixelLeft")
    }
    function ph(a) {
        if (I && !mf(9)) {
            var b = th(a, "borderLeft")
              , c = th(a, "borderRight")
              , d = th(a, "borderTop");
            a = th(a, "borderBottom");
            return new Rg(d,c,a,b)
        }
        b = Vg(a, "borderLeftWidth");
        c = Vg(a, "borderRightWidth");
        d = Vg(a, "borderTopWidth");
        a = Vg(a, "borderBottomWidth");
        return new Rg(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    }
    ;var uh;
    gd(["A", "AREA", "BUTTON", "HEAD", oa, "LINK", "MENU", "META", "OPTGROUP", qa, "PROGRESS", "STYLE", "SELECT", "SOURCE", va, wa, "TRACK"]);
    function vh(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }
    function wh(a, b, c) {
        B(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (uh || (uh = {
            atomic: !1,
            autocomplete: q,
            dropeffect: q,
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: cc,
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: q,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }),
        c = uh,
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    }
    ;function R() {
        this.ub = this.ub;
        this.wa = this.wa
    }
    R.prototype.ub = !1;
    R.prototype.M = function() {
        this.ub || (this.ub = !0,
        this.F())
    }
    ;
    function xh(a, b) {
        a.ub ? pc(void 0) ? b.call(void 0) : b() : (a.wa || (a.wa = []),
        a.wa.push(pc(void 0) ? C(b, void 0) : b))
    }
    R.prototype.F = function() {
        if (this.wa)
            for (; this.wa.length; )
                this.wa.shift()()
    }
    ;
    function yh(a) {
        a && typeof a.M == p && a.M()
    }
    ;var zh = !I || mf(9)
      , Ah = !I || mf(9)
      , Bh = I && !L("9")
      , Ch = function() {
        if (!x.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            x.addEventListener("test", z, b),
            x.removeEventListener("test", z, b)
        } catch (c) {}
        return a
    }();
    function Dh(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.c = !1;
        this.Tg = !0
    }
    Dh.prototype.stopPropagation = function() {
        this.c = !0
    }
    ;
    Dh.prototype.b = function() {
        this.Tg = !1
    }
    ;
    var Eh = {
        Wb: Ab,
        Xb: "mouseup",
        qc: "mousecancel",
        $j: Bb,
        bk: Db,
        ak: Cb,
        Yj: "mouseenter",
        Zj: "mouseleave"
    };
    function Fh(a, b) {
        Dh.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.f = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.a = null;
        if (a) {
            var c = this.type = a.type
              , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ? J && (Re(b, "nodeName") || (b = null)) : c == Db ? b = a.fromElement : c == Cb && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
            this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
            this.screenX = d.screenX || 0,
            this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
            this.screenX = a.screenX || 0,
            this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.f = Xe ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = y(a.pointerType) ? a.pointerType : Gh[a.pointerType] || "";
            this.a = a;
            a.defaultPrevented && this.b()
        }
    }
    G(Fh, Dh);
    var Hh = [1, 4, 2]
      , Gh = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    function Ih(a) {
        return zh ? 0 == a.a.button : a.type == Sa ? !0 : !!(a.a.button & Hh[0])
    }
    Fh.prototype.stopPropagation = function() {
        Fh.m.stopPropagation.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    }
    ;
    Fh.prototype.b = function() {
        Fh.m.b.call(this);
        var a = this.a;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        Bh)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var Jh = "closure_listenable_" + (1E6 * Math.random() | 0);
    function Kh(a) {
        return !(!a || !a[Jh])
    }
    var Lh = 0;
    function Mh(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Hd = e;
        this.key = ++Lh;
        this.oc = this.dd = !1
    }
    function Nh(a) {
        a.oc = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.Hd = null
    }
    ;function Oh(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    Oh.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [],
        this.b++);
        var h = Ph(a, b, d, e);
        -1 < h ? (b = a[h],
        c || (b.dd = !1)) : (b = new Mh(b,this.src,f,!!d,e),
        b.dd = c,
        a.push(b));
        return b
    }
    ;
    Oh.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a))
            return !1;
        var e = this.a[a];
        b = Ph(e, b, c, d);
        return -1 < b ? (Nh(e[b]),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.a[a],
        this.b--),
        !0) : !1
    }
    ;
    function Qh(a, b) {
        var c = b.type;
        if (!(c in a.a))
            return !1;
        var d = Rc(a.a[c], b);
        d && (Nh(b),
        0 == a.a[c].length && (delete a.a[c],
        a.b--));
        return d
    }
    function Rh(a, b) {
        b = b && b.toString();
        var c = 0, d;
        for (d in a.a)
            if (!b || d == b) {
                for (var e = a.a[d], f = 0; f < e.length; f++)
                    ++c,
                    Nh(e[f]);
                delete a.a[d];
                a.b--
            }
        return c
    }
    Oh.prototype.Ec = function(a, b, c, d) {
        a = this.a[a.toString()];
        var e = -1;
        a && (e = Ph(a, b, c, d));
        return -1 < e ? a[e] : null
    }
    ;
    Oh.prototype.hasListener = function(a, b) {
        var c = pc(a)
          , d = c ? a.toString() : ""
          , e = pc(b);
        return Yc(this.a, function(f) {
            for (var h = 0; h < f.length; ++h)
                if (!(c && f[h].type != d || e && f[h].capture != b))
                    return !0;
            return !1
        })
    }
    ;
    function Ph(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.oc && f.listener == b && f.capture == !!c && f.Hd == d)
                return e
        }
        return -1
    }
    ;var Sh = "closure_lm_" + (1E6 * Math.random() | 0)
      , Th = {}
      , Uh = 0;
    function S(a, b, c, d, e) {
        if (d && d.once)
            return Vh(a, b, c, d, e);
        if (B(b)) {
            for (var f = 0; f < b.length; f++)
                S(a, b[f], c, d, e);
            return null
        }
        c = Wh(c);
        return Kh(a) ? a.w(b, c, wc(d) ? !!d.capture : !!d, e) : Xh(a, b, c, !1, d, e)
    }
    function Xh(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var h = wc(e) ? !!e.capture : !!e
          , k = Yh(a);
        k || (a[Sh] = k = new Oh(a));
        c = k.add(b, c, d, h, f);
        if (c.a)
            return c;
        d = Zh();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            Ch || (e = h),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent($h(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        Uh++;
        return c
    }
    function Zh() {
        var a = ai
          , b = Ah ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    function Vh(a, b, c, d, e) {
        if (B(b)) {
            for (var f = 0; f < b.length; f++)
                Vh(a, b[f], c, d, e);
            return null
        }
        c = Wh(c);
        return Kh(a) ? a.Ab(b, c, wc(d) ? !!d.capture : !!d, e) : Xh(a, b, c, !0, d, e)
    }
    function bi(a, b, c, d, e) {
        if (B(b))
            for (var f = 0; f < b.length; f++)
                bi(a, b[f], c, d, e);
        else
            d = wc(d) ? !!d.capture : !!d,
            c = Wh(c),
            Kh(a) ? a.ba(b, c, d, e) : a && (a = Yh(a)) && (b = a.Ec(b, c, d, e)) && ci(b)
    }
    function ci(a) {
        if (qc(a) || !a || a.oc)
            return !1;
        var b = a.src;
        if (Kh(b))
            return Qh(b.Ka, a);
        var c = a.type
          , d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent($h(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Uh--;
        (c = Yh(b)) ? (Qh(c, a),
        0 == c.b && (c.src = null,
        b[Sh] = null)) : Nh(a);
        return !0
    }
    function di(a, b) {
        if (!a)
            return 0;
        if (Kh(a))
            return a.Ka ? Rh(a.Ka, b) : 0;
        a = Yh(a);
        if (!a)
            return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a)
            if (!b || d == b)
                for (var e = a.a[d].concat(), f = 0; f < e.length; ++f)
                    ci(e[f]) && ++c;
        return c
    }
    function $h(a) {
        return a in Th ? Th[a] : Th[a] = "on" + a
    }
    function ei(a, b, c, d) {
        var e = !0;
        if (a = Yh(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.oc && (f = fi(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
    function fi(a, b) {
        var c = a.listener
          , d = a.Hd || a.src;
        a.dd && ci(a);
        return c.call(d, b)
    }
    function ai(a, b) {
        if (a.oc)
            return !0;
        if (!Ah) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var c = x, d = 0; d < b.length; d++)
                        if (c = c[b[d]],
                        null == c) {
                            b = null;
                            break a
                        }
                    b = c
                }
            d = b;
            b = new Fh(d,this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode)
                        try {
                            d.keyCode = -1;
                            break a
                        } catch (h) {
                            e = !0
                        }
                    if (e || void 0 == d.returnValue)
                        d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode)
                    d.push(e);
                a = a.type;
                for (e = d.length - 1; !b.c && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = ei(d[e], a, !0, b);
                    c = c && f
                }
                for (e = 0; !b.c && e < d.length; e++)
                    b.currentTarget = d[e],
                    f = ei(d[e], a, !1, b),
                    c = c && f
            }
            return c
        }
        return fi(a, new Fh(b,this))
    }
    function Yh(a) {
        a = a[Sh];
        return a instanceof Oh ? a : null
    }
    var gi = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Wh(a) {
        if (vc(a))
            return a;
        a[gi] || (a[gi] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[gi]
    }
    ;function hi(a) {
        R.call(this);
        this.b = a;
        this.a = {}
    }
    G(hi, R);
    var ii = [];
    v = hi.prototype;
    v.w = function(a, b, c, d) {
        return ji(this, a, b, c, d)
    }
    ;
    function ki(a, b, c, d) {
        ji(a, b, Sa, c, !1, d)
    }
    function ji(a, b, c, d, e, f) {
        B(c) || (c && (ii[0] = c.toString()),
        c = ii);
        for (var h = 0; h < c.length; h++) {
            var k = S(b, c[h], d || a.handleEvent, e || !1, f || a.b || a);
            if (!k)
                break;
            a.a[k.key] = k
        }
        return a
    }
    v.Ab = function(a, b, c, d) {
        return li(this, a, b, c, d)
    }
    ;
    function li(a, b, c, d, e, f) {
        if (B(c))
            for (var h = 0; h < c.length; h++)
                li(a, b, c[h], d, e, f);
        else {
            b = Vh(b, c, d || a.handleEvent, e, f || a.b || a);
            if (!b)
                return a;
            a.a[b.key] = b
        }
        return a
    }
    v.ba = function(a, b, c, d, e) {
        if (B(b))
            for (var f = 0; f < b.length; f++)
                this.ba(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            d = wc(d) ? !!d.capture : !!d,
            e = e || this.b || this,
            c = Wh(c),
            d = !!d,
            b = Kh(a) ? a.Ec(b, c, d, e) : a ? (a = Yh(a)) ? a.Ec(b, c, d, e) : null : null,
            b && (ci(b),
            delete this.a[b.key]);
        return this
    }
    ;
    function mi(a) {
        Xc(a.a, function(b, c) {
            this.a.hasOwnProperty(c) && ci(b)
        }, a);
        a.a = {}
    }
    v.F = function() {
        hi.m.F.call(this);
        mi(this)
    }
    ;
    v.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    function ni() {
        R.call(this);
        this.Ka = new Oh(this);
        this.Fh = this;
        this.lf = null
    }
    G(ni, R);
    ni.prototype[Jh] = !0;
    v = ni.prototype;
    v.md = t("lf");
    v.uf = gc("lf");
    v.addEventListener = function(a, b, c, d) {
        S(this, a, b, c, d)
    }
    ;
    v.removeEventListener = function(a, b, c, d) {
        bi(this, a, b, c, d)
    }
    ;
    v.dispatchEvent = function(a) {
        var b = this.md();
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.md())
                c.push(b),
                ++d
        }
        b = this.Fh;
        d = a.type || a;
        if (y(a))
            a = new Dh(a,b);
        else if (a instanceof Dh)
            a.target = a.target || b;
        else {
            var e = a;
            a = new Dh(d,b);
            fd(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.c && 0 <= f; f--) {
                var h = a.currentTarget = c[f];
                e = oi(h, d, !0, a) && e
            }
        a.c || (h = a.currentTarget = b,
        e = oi(h, d, !0, a) && e,
        a.c || (e = oi(h, d, !1, a) && e));
        if (c)
            for (f = 0; !a.c && f < c.length; f++)
                h = a.currentTarget = c[f],
                e = oi(h, d, !1, a) && e;
        return e
    }
    ;
    v.F = function() {
        ni.m.F.call(this);
        this.Ka && Rh(this.Ka, void 0);
        this.lf = null
    }
    ;
    v.w = function(a, b, c, d) {
        return this.Ka.add(String(a), b, !1, c, d)
    }
    ;
    v.Ab = function(a, b, c, d) {
        return this.Ka.add(String(a), b, !0, c, d)
    }
    ;
    v.ba = function(a, b, c, d) {
        return this.Ka.remove(String(a), b, c, d)
    }
    ;
    function oi(a, b, c, d) {
        b = a.Ka.a[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.oc && h.capture == c) {
                var k = h.listener
                  , l = h.Hd || h.src;
                h.dd && Qh(a.Ka, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Tg
    }
    v.Ec = function(a, b, c, d) {
        return this.Ka.Ec(String(a), b, c, d)
    }
    ;
    v.hasListener = function(a, b) {
        return this.Ka.hasListener(pc(a) ? String(a) : void 0, b)
    }
    ;
    function pi() {}
    tc(pi);
    pi.prototype.a = 0;
    function T(a) {
        ni.call(this);
        this.b = a || Xf();
        this.la = qi;
        this.ia = null;
        this.U = !1;
        this.A = null;
        this.K = void 0;
        this.G = this.s = this.B = this.ra = null;
        this.jb = !1
    }
    G(T, ni);
    T.prototype.tb = pi.X();
    var qi = null;
    function ri(a, b) {
        switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? cb : Ka;
        case 64:
            return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }
    function si(a) {
        return a.ia || (a.ia = ":" + (a.tb.a++).toString(36))
    }
    function ti(a, b) {
        if (a.B && a.B.G) {
            var c = a.B.G
              , d = a.ia;
            d in c && delete c[d];
            cd(a.B.G, b, a)
        }
        a.ia = b
    }
    v = T.prototype;
    v.j = t("A");
    function ui(a, b) {
        return a.A ? cg(b, a.A || a.b.a) : null
    }
    function U(a) {
        a.K || (a.K = new hi(a));
        return a.K
    }
    function vi(a, b) {
        if (a == b)
            throw Error(xa);
        if (b && a.B && a.ia && wi(a.B, a.ia) && a.B != b)
            throw Error(xa);
        a.B = b;
        T.m.uf.call(a, b)
    }
    v.wb = t("B");
    v.uf = function(a) {
        if (this.B && this.B != a)
            throw Error("Method not supported");
        T.m.uf.call(this, a)
    }
    ;
    v.D = function() {
        this.A = Pg(this.b, g)
    }
    ;
    v.fa = function(a) {
        xi(this, a)
    }
    ;
    function xi(a, b, c) {
        if (a.U)
            throw Error(ka);
        a.A || a.D();
        b ? b.insertBefore(a.A, c || null) : a.b.a.body.appendChild(a.A);
        a.B && !a.B.U || a.O()
    }
    function yi(a, b) {
        if (a.U)
            throw Error(ka);
        if (b && a.Be(b)) {
            a.jb = !0;
            var c = O(b);
            a.b && a.b.a == c || (a.b = Xf(b));
            a.S(b);
            a.O()
        } else
            throw Error("Invalid element to decorate");
    }
    v.Be = u(!0);
    v.S = gc("A");
    v.O = function() {
        this.U = !0;
        zi(this, function(a) {
            !a.U && a.j() && a.O()
        })
    }
    ;
    v.Z = function() {
        zi(this, function(a) {
            a.U && a.Z()
        });
        this.K && mi(this.K);
        this.U = !1
    }
    ;
    v.F = function() {
        this.U && this.Z();
        this.K && (this.K.M(),
        delete this.K);
        zi(this, function(a) {
            a.M()
        });
        !this.jb && this.A && ug(this.A);
        this.B = this.ra = this.A = this.G = this.s = null;
        T.m.F.call(this)
    }
    ;
    function V(a, b) {
        return si(a) + "." + b
    }
    v.rc = function(a, b) {
        this.he(a, Ai(this), b)
    }
    ;
    v.he = function(a, b, c) {
        if (a.U && (c || !this.U))
            throw Error(ka);
        if (0 > b || b > Ai(this))
            throw Error("Child component index out of bounds");
        this.G && this.s || (this.G = {},
        this.s = []);
        if (a.wb() == this) {
            var d = si(a);
            this.G[d] = a;
            Rc(this.s, a)
        } else
            cd(this.G, si(a), a);
        vi(a, this);
        Uc(this.s, b, 0, a);
        a.U && this.U && a.wb() == this ? (c = this.td(),
        b = c.childNodes[b] || null,
        b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.A || this.D(),
        b = Bi(this, b + 1),
        xi(a, this.td(), b ? b.A : null)) : this.U && !a.U && a.A && a.A.parentNode && 1 == a.A.parentNode.nodeType && a.O()
    }
    ;
    v.td = t("A");
    function Ci(a) {
        null == a.la && (a.la = ih(a.U ? a.A : a.b.a.body));
        return a.la
    }
    function Ai(a) {
        return a.s ? a.s.length : 0
    }
    function wi(a, b) {
        a.G && b ? (a = a.G,
        b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    }
    function Bi(a, b) {
        return a.s ? a.s[b] || null : null
    }
    function zi(a, b, c) {
        a.s && Kc(a.s, b, c)
    }
    function Di(a, b) {
        return a.s && b ? Jc(a.s, b) : -1
    }
    v.removeChild = function(a, b) {
        if (a) {
            var c = y(a) ? a : si(a);
            a = wi(this, c);
            if (c && a) {
                var d = this.G;
                c in d && delete d[c];
                Rc(this.s, a);
                b && (a.Z(),
                a.A && ug(a.A));
                vi(a, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    }
    ;
    v.Qc = function(a) {
        for (var b = []; this.s && 0 != this.s.length; )
            b.push(this.removeChild(Bi(this, 0), a));
        return b
    }
    ;
    function Ei() {}
    var Fi;
    tc(Ei);
    var Gi = {
        button: "pressed",
        checkbox: Qa,
        menuitem: Rb,
        menuitemcheckbox: Qa,
        menuitemradio: Qa,
        radio: Qa,
        tab: Rb,
        treeitem: Rb
    };
    v = Ei.prototype;
    v.$b = fc();
    v.D = function(a) {
        return a.b.D(g, Hi(this, a).join(" "), a.ea())
    }
    ;
    v.zb = function(a) {
        return a
    }
    ;
    function Ii(a, b, c) {
        if (a = a.j ? a.j() : a) {
            var d = [b];
            I && !L("7") && (d = Ji(Kf(a), b),
            d.push(b));
            (c ? Mf : Of)(a, d)
        }
    }
    v.wd = u(!0);
    v.Oa = function(a, b) {
        b.id && ti(a, b.id);
        var c = this.zb(b);
        c && c.firstChild ? Ki(a, c.firstChild.nextSibling ? Tc(c.childNodes) : c.firstChild) : a.Mb = null;
        var d = 0
          , e = this.da()
          , f = this.da()
          , h = !1
          , k = !1
          , l = !1
          , m = Tc(Kf(b));
        Kc(m, function(r) {
            h || r != e ? k || r != f ? d |= this.od(r) : k = !0 : (h = !0,
            f == e && (k = !0));
            1 == this.od(r) && Kg(c) && Lg(c) && Jg(c, !1)
        }, this);
        a.V = d;
        h || (m.push(e),
        f == e && (k = !0));
        k || m.push(f);
        (a = a.ue) && m.push.apply(m, a);
        if (I && !L("7")) {
            var n = Ji(m);
            0 < n.length && (m.push.apply(m, n),
            l = !0)
        }
        if (!h || !k || a || l)
            b.className = m.join(" ");
        return b
    }
    ;
    v.gg = function(a) {
        Ci(a) && this.Ge(a.j(), !0);
        a.isEnabled() && this.ac(a, a.isVisible())
    }
    ;
    function Li(a, b, c) {
        if (a = c || a.$b())
            c = b.getAttribute("role") || null,
            a != c && vh(b, a)
    }
    function Ni(a, b, c) {
        b.isVisible() || wh(c, qb, !b.isVisible());
        b.isEnabled() || a.Wa(c, 1, !b.isEnabled());
        b.aa & 8 && a.Wa(c, 8, !!(b.V & 8));
        b.aa & 16 && a.Wa(c, 16, !!(b.V & 16));
        b.aa & 64 && a.Wa(c, 64, !!(b.V & 64))
    }
    v.xd = function(a, b) {
        kh(a, !b, !I && !Te)
    }
    ;
    v.Ge = function(a, b) {
        Ii(a, this.da() + "-rtl", b)
    }
    ;
    v.Fe = function(a) {
        var b;
        return a.aa & 32 && (b = a.j()) ? Kg(b) && Lg(b) : !1
    }
    ;
    v.ac = function(a, b) {
        var c;
        if (a.aa & 32 && (c = a.j())) {
            if (!b && a.V & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.V & 32 && a.hg(null)
            }
            (Kg(c) && Lg(c)) != b && Jg(c, b)
        }
    }
    ;
    v.I = function(a, b) {
        Q(a, b);
        a && wh(a, qb, !b)
    }
    ;
    v.Jc = function(a, b, c) {
        var d = a.j();
        if (d) {
            var e = this.Dc(b);
            e && Ii(a, e, c);
            this.Wa(d, b, c)
        }
    }
    ;
    v.Wa = function(a, b, c) {
        Fi || (Fi = {
            1: "disabled",
            8: Rb,
            16: Qa,
            64: "expanded"
        });
        b = Fi[b];
        var d = a.getAttribute("role") || null;
        d && (d = Gi[d] || b,
        b = b == Qa || b == Rb ? d : b);
        b && wh(a, b, c)
    }
    ;
    v.Ic = function(a, b) {
        var c = this.zb(a);
        c && (rg(c),
        b && (y(b) ? Gg(c, b) : (a = function(d) {
            if (d) {
                var e = O(c);
                c.appendChild(y(d) ? e.createTextNode(d) : d)
            }
        }
        ,
        B(b) ? Kc(b, a) : !uc(b) || "nodeType"in b ? a(b) : Kc(Tc(b), a))))
    }
    ;
    v.da = u("goog-control");
    function Hi(a, b) {
        var c = a.da()
          , d = [c]
          , e = a.da();
        e != c && d.push(e);
        c = b.V;
        for (e = []; c; ) {
            var f = c & -c;
            e.push(a.Dc(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (a = b.ue) && d.push.apply(d, a);
        I && !L("7") && d.push.apply(d, Ji(d));
        return d
    }
    function Ji(a, b) {
        var c = [];
        b && (a = Sc(a, [b]));
        Kc([], function(d) {
            !Oc(d, Cc(Qc, a)) || b && !Qc(d, b) || c.push(d.join("_"))
        });
        return c
    }
    v.Dc = function(a) {
        this.a || Oi(this);
        return this.a[a]
    }
    ;
    v.od = function(a) {
        if (!this.c) {
            this.a || Oi(this);
            var b = this.a, c = {}, d;
            for (d in b)
                c[b[d]] = d;
            this.c = c
        }
        a = parseInt(this.c[a], 10);
        return isNaN(a) ? 0 : a
    }
    ;
    function Oi(a) {
        var b = a.da();
        b.replace(/\xa0|\s/g, " ");
        a.a = {
            1: b + ba,
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    ;function Pi() {}
    G(Pi, Ei);
    tc(Pi);
    v = Pi.prototype;
    v.$b = u(Ma);
    v.Wa = function(a, b, c) {
        switch (b) {
        case 8:
        case 16:
            wh(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            Pi.m.Wa.call(this, a, b, c)
        }
    }
    ;
    v.D = function(a) {
        var b = Pi.m.D.call(this, a)
          , c = a.l;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.Aa()) && this.ya(b, c);
        a.aa & 16 && this.Wa(b, 16, !!(a.V & 16));
        return b
    }
    ;
    v.Oa = function(a, b) {
        b = Pi.m.Oa.call(this, a, b);
        var c = this.Aa(b);
        a.g = c;
        a.l = b.title;
        a.aa & 16 && this.Wa(b, 16, !!(a.V & 16));
        return b
    }
    ;
    v.Aa = z;
    v.ya = z;
    v.da = u("goog-button");
    function Qi(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
            return !1;
        if (Ri(a.keyCode))
            return !0;
        switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
            return !1;
        case 0:
            return !J;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
        }
    }
    function Si(a, b, c, d, e, f) {
        if (K && !L("525"))
            return !0;
        if (Xe && e)
            return Ri(a);
        if (e && !d)
            return !1;
        if (!J) {
            qc(b) && (b = Ti(b));
            var h = 17 == b || 18 == b || Xe && 91 == b;
            if ((!c || Xe) && h || Xe && 16 == b && (d || f))
                return !1
        }
        if ((K || Ue) && d && c)
            switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
            }
        if (I && d && b == a)
            return !1;
        switch (a) {
        case 13:
            return J ? f || e ? !1 : !(c && d) : !0;
        case 27:
            return !(K || Ue || J)
        }
        return J && (d || e || f) ? !1 : Ri(a)
    }
    function Ri(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (K || Ue) && 0 == a)
            return !0;
        switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
            return !0;
        case 173:
            return J;
        default:
            return !1
        }
    }
    function Ti(a) {
        if (J)
            a = Ui(a);
        else if (Xe && K)
            switch (a) {
            case 93:
                a = 91
            }
        return a
    }
    function Ui(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    }
    ;function Vi(a, b) {
        ni.call(this);
        a && Wi(this, a, b)
    }
    G(Vi, ni);
    v = Vi.prototype;
    v.A = null;
    v.Md = null;
    v.Ve = null;
    v.Nd = null;
    v.Fa = -1;
    v.hb = -1;
    v.ke = !1;
    var Xi = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }
      , Yi = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }
      , Zi = !K || L("525")
      , $i = Xe && J;
    v = Vi.prototype;
    v.ki = function(a) {
        if (K || Ue)
            if (17 == this.Fa && !a.ctrlKey || 18 == this.Fa && !a.altKey || Xe && 91 == this.Fa && !a.metaKey)
                this.hb = this.Fa = -1;
        -1 == this.Fa && (a.ctrlKey && 17 != a.keyCode ? this.Fa = 17 : a.altKey && 18 != a.keyCode ? this.Fa = 18 : a.metaKey && 91 != a.keyCode && (this.Fa = 91));
        Zi && !Si(a.keyCode, this.Fa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.hb = Ti(a.keyCode),
        $i && (this.ke = a.altKey))
    }
    ;
    v.li = function(a) {
        this.hb = this.Fa = -1;
        this.ke = a.altKey
    }
    ;
    v.handleEvent = function(a) {
        var b = a.a
          , c = b.altKey;
        if (I && a.type == yb) {
            var d = this.hb;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else
            (K || Ue) && a.type == yb ? (d = this.hb,
            e = 0 <= b.charCode && 63232 > b.charCode && Ri(d) ? b.charCode : 0) : Te && !K ? (d = this.hb,
            e = Ri(d) ? b.keyCode : 0) : (a.type == yb ? ($i && (c = this.ke),
            b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode,
            e = 0) : (d = this.hb,
            e = b.charCode) : (d = b.keyCode || this.hb,
            e = b.charCode || 0)) : (d = b.keyCode || this.hb,
            e = b.charCode || 0),
            Xe && 63 == e && 224 == d && (d = 191));
        var f = d = Ti(d);
        d ? 63232 <= d && d in Xi ? f = Xi[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Yi && (f = Yi[b.keyIdentifier]);
        J && Zi && a.type == yb && !Si(f, this.Fa, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Fa,
        this.Fa = f,
        b = new aj(f,e,a,b),
        b.altKey = c,
        this.dispatchEvent(b))
    }
    ;
    v.j = t("A");
    function Wi(a, b, c) {
        a.Nd && bj(a);
        a.A = b;
        a.Md = S(a.A, yb, a, c);
        a.Ve = S(a.A, xb, a.ki, c, a);
        a.Nd = S(a.A, "keyup", a.li, c, a)
    }
    function bj(a) {
        a.Md && (ci(a.Md),
        ci(a.Ve),
        ci(a.Nd),
        a.Md = null,
        a.Ve = null,
        a.Nd = null);
        a.A = null;
        a.Fa = -1;
        a.hb = -1
    }
    v.F = function() {
        Vi.m.F.call(this);
        bj(this)
    }
    ;
    function aj(a, b, c, d) {
        Fh.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c
    }
    G(aj, Fh);
    function cj(a, b) {
        if (!a)
            throw Error("Invalid class name " + a);
        if (!vc(b))
            throw Error("Invalid decorator function " + b);
        dj[a] = b
    }
    var ej = {}
      , dj = {};
    function W(a, b, c) {
        T.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b; ) {
                d = xc(b);
                if (d = ej[d])
                    break;
                b = b.m ? b.m.constructor : null
            }
            b = d ? vc(d.X) ? d.X() : new d : null
        }
        this.a = b;
        this.Mb = pc(a) ? a : null
    }
    G(W, T);
    v = W.prototype;
    v.Mb = null;
    v.V = 0;
    v.aa = 39;
    v.kb = 255;
    v.Uc = 0;
    v.ga = !0;
    v.ue = null;
    v.Ne = !0;
    v.$c = !1;
    function fj(a, b) {
        a.U && b != a.Ne && gj(a, b);
        a.Ne = b
    }
    v.D = function() {
        var a = this.a.D(this);
        this.A = a;
        Li(this.a, a, this.Fc());
        this.$c || this.a.xd(a, !1);
        this.isVisible() || this.a.I(a, !1)
    }
    ;
    v.Fc = u(null);
    v.td = function() {
        return this.a.zb(this.j())
    }
    ;
    v.Be = function(a) {
        return this.a.wd(a)
    }
    ;
    v.S = function(a) {
        this.A = a = this.a.Oa(this, a);
        Li(this.a, a, this.Fc());
        this.$c || this.a.xd(a, !1);
        this.ga = a.style.display != q
    }
    ;
    v.O = function() {
        W.m.O.call(this);
        Ni(this.a, this, this.A);
        this.a.gg(this);
        if (this.aa & -2 && (this.Ne && gj(this, !0),
        this.aa & 32)) {
            var a = this.j();
            if (a) {
                var b = this.f || (this.f = new Vi);
                Wi(b, a);
                U(this).w(b, "key", this.Ga).w(a, cb, this.Vh).w(a, Ka, this.hg)
            }
        }
    }
    ;
    function gj(a, b) {
        var c = U(a)
          , d = a.j();
        b ? (c.w(d, Eh.Wb, a.Lc).w(d, [Eh.Xb, Eh.qc], a.dc).w(d, Db, a.He).w(d, Cb, a.Oe),
        a.Nc != z && c.w(d, Wa, a.Nc),
        I && (L(9) || c.w(d, Xa, a.lg),
        a.h || (a.h = new hj(a),
        xh(a, Cc(yh, a.h))))) : (c.ba(d, Eh.Wb, a.Lc).ba(d, [Eh.Xb, Eh.qc], a.dc).ba(d, Db, a.He).ba(d, Cb, a.Oe),
        a.Nc != z && c.ba(d, Wa, a.Nc),
        I && (L(9) || c.ba(d, Xa, a.lg),
        yh(a.h),
        a.h = null))
    }
    v.Z = function() {
        W.m.Z.call(this);
        this.f && bj(this.f);
        this.isVisible() && this.isEnabled() && this.a.ac(this, !1)
    }
    ;
    v.F = function() {
        W.m.F.call(this);
        this.f && (this.f.M(),
        delete this.f);
        delete this.a;
        this.h = this.ue = this.Mb = null
    }
    ;
    v.ea = t("Mb");
    v.Nb = function(a) {
        this.a.Ic(this.j(), a);
        this.Mb = a
    }
    ;
    function Ki(a, b) {
        a.Mb = b
    }
    v.bb = function() {
        var a = this.ea();
        if (!a)
            return "";
        a = y(a) ? a : B(a) ? Mc(a, Og).join("") : Mg(a);
        return Ce(a)
    }
    ;
    v.Wg = function(a) {
        this.Nb(a)
    }
    ;
    v.isVisible = t("ga");
    v.I = function(a, b) {
        return b || this.ga != a && this.dispatchEvent(a ? "show" : rb) ? ((b = this.j()) && this.a.I(b, a),
        this.isEnabled() && this.a.ac(this, a),
        this.ga = a,
        !0) : !1
    }
    ;
    v.isEnabled = function() {
        return !(this.V & 1)
    }
    ;
    v.ka = function(a) {
        var b = this.wb();
        b && typeof b.isEnabled == p && !b.isEnabled() || !ij(this, 1, !a) || (a || (jj(this, !1),
        kj(this, !1)),
        this.isVisible() && this.a.ac(this, a),
        lj(this, 1, !a, !0))
    }
    ;
    function kj(a, b) {
        ij(a, 2, b) && lj(a, 2, b)
    }
    v.fc = function() {
        return !!(this.V & 4)
    }
    ;
    function jj(a, b) {
        ij(a, 4, b) && lj(a, 4, b)
    }
    function mj(a, b) {
        ij(a, 64, b) && lj(a, 64, b)
    }
    function lj(a, b, c, d) {
        d || 1 != b ? a.aa & b && c != !!(a.V & b) && (a.a.Jc(a, b, c),
        a.V = c ? a.V | b : a.V & ~b) : a.ka(!c)
    }
    v.sa = function(a, b) {
        if (this.U && this.V & a && !b)
            throw Error(ka);
        !b && this.V & a && lj(this, a, !1);
        this.aa = b ? this.aa | a : this.aa & ~a
    }
    ;
    function nj(a, b) {
        return !!(a.kb & b) && !!(a.aa & b)
    }
    function ij(a, b, c) {
        return !!(a.aa & b) && !!(a.V & b) != c && (!(a.Uc & b) || a.dispatchEvent(ri(b, c))) && !a.ub
    }
    v.He = function(a) {
        (!a.relatedTarget || !zg(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && nj(this, 2) && kj(this, !0)
    }
    ;
    v.Oe = function(a) {
        a.relatedTarget && zg(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (nj(this, 4) && jj(this, !1),
        nj(this, 2) && kj(this, !1))
    }
    ;
    v.Nc = z;
    v.Lc = function(a) {
        this.isEnabled() && (nj(this, 2) && kj(this, !0),
        !Ih(a) || K && Xe && a.ctrlKey || (nj(this, 4) && jj(this, !0),
        this.a && this.a.Fe(this) && this.j().focus()));
        this.$c || !Ih(a) || K && Xe && a.ctrlKey || a.b()
    }
    ;
    v.dc = function(a) {
        this.isEnabled() && (nj(this, 2) && kj(this, !0),
        this.fc() && this.mc(a) && nj(this, 4) && jj(this, !1))
    }
    ;
    v.lg = function(a) {
        this.isEnabled() && this.mc(a)
    }
    ;
    v.mc = function(a) {
        if (nj(this, 16)) {
            var b = !(this.V & 16);
            ij(this, 16, b) && lj(this, 16, b)
        }
        nj(this, 8) && ij(this, 8, !0) && lj(this, 8, !0);
        nj(this, 64) && mj(this, !(this.V & 64));
        b = new Dh(Ca,this);
        a && (b.altKey = a.altKey,
        b.ctrlKey = a.ctrlKey,
        b.metaKey = a.metaKey,
        b.shiftKey = a.shiftKey,
        b.f = a.f);
        return this.dispatchEvent(b)
    }
    ;
    v.Vh = function() {
        nj(this, 32) && ij(this, 32, !0) && lj(this, 32, !0)
    }
    ;
    v.hg = function() {
        nj(this, 4) && jj(this, !1);
        nj(this, 32) && ij(this, 32, !1) && lj(this, 32, !1)
    }
    ;
    v.Ga = function(a) {
        return this.isVisible() && this.isEnabled() && this.Kc(a) ? (a.b(),
        a.stopPropagation(),
        !0) : !1
    }
    ;
    v.Kc = function(a) {
        return 13 == a.keyCode && this.mc(a)
    }
    ;
    if (!vc(W))
        throw Error("Invalid component class " + W);
    if (!vc(Ei))
        throw Error("Invalid renderer class " + Ei);
    var oj = xc(W);
    ej[oj] = Ei;
    cj("goog-control", function() {
        return new W(null)
    });
    function hj(a) {
        R.call(this);
        this.b = a;
        this.a = !1;
        this.c = new hi(this);
        xh(this, Cc(yh, this.c));
        a = this.b.A;
        this.c.w(a, Eh.Wb, this.g).w(a, Eh.Xb, this.h).w(a, Sa, this.f)
    }
    G(hj, R);
    var pj = !I || mf(9);
    hj.prototype.g = function() {
        this.a = !1
    }
    ;
    hj.prototype.h = function() {
        this.a = !0
    }
    ;
    function qj(a, b) {
        if (!pj)
            return a.button = 0,
            a.type = b,
            a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    }
    hj.prototype.f = function(a) {
        if (this.a)
            this.a = !1;
        else {
            var b = a.a
              , c = b.button
              , d = b.type
              , e = qj(b, Ab);
            this.b.Lc(new Fh(e,a.currentTarget));
            e = qj(b, "mouseup");
            this.b.dc(new Fh(e,a.currentTarget));
            pj || (b.button = c,
            b.type = d)
        }
    }
    ;
    hj.prototype.F = function() {
        this.b = null;
        hj.m.F.call(this)
    }
    ;
    function rj() {}
    G(rj, Pi);
    tc(rj);
    v = rj.prototype;
    v.$b = fc();
    v.D = function(a) {
        fj(a, !1);
        a.kb &= -256;
        a.sa(32, !1);
        return a.b.D("BUTTON", {
            "class": Hi(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.l || "",
            value: a.Aa() || ""
        }, a.bb() || "")
    }
    ;
    v.wd = function(a) {
        return "BUTTON" == a.tagName || a.tagName == oa && (a.type == Ma || "submit" == a.type || "reset" == a.type)
    }
    ;
    v.Oa = function(a, b) {
        fj(a, !1);
        a.kb &= -256;
        a.sa(32, !1);
        if (b.disabled) {
            var c = this.Dc(1);
            M(b, c)
        }
        return rj.m.Oa.call(this, a, b)
    }
    ;
    v.gg = function(a) {
        U(a).w(a.j(), Sa, a.mc)
    }
    ;
    v.xd = z;
    v.Ge = z;
    v.Fe = function(a) {
        return a.isEnabled()
    }
    ;
    v.ac = z;
    v.Jc = function(a, b, c) {
        rj.m.Jc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    }
    ;
    v.Aa = function(a) {
        return a.value
    }
    ;
    v.ya = function(a, b) {
        a && (a.value = b)
    }
    ;
    v.Wa = z;
    function sj(a, b, c) {
        W.call(this, a, b || rj.X(), c)
    }
    G(sj, W);
    v = sj.prototype;
    v.Aa = t("g");
    v.ya = function(a) {
        this.g = a;
        this.a.ya(this.j(), a)
    }
    ;
    v.F = function() {
        sj.m.F.call(this);
        delete this.g;
        delete this.l
    }
    ;
    v.O = function() {
        sj.m.O.call(this);
        if (this.aa & 32) {
            var a = this.j();
            a && U(this).w(a, "keyup", this.Kc)
        }
    }
    ;
    v.Kc = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.mc(a) : 32 == a.keyCode
    }
    ;
    cj("goog-button", function() {
        return new sj(null)
    });
    function tj() {}
    G(tj, Pi);
    tc(tj);
    v = tj.prototype;
    v.D = function(a) {
        var b = Hi(this, a);
        b = a.b.D(g, hb + b.join(" "), uj(this, a.ea(), a.b));
        a = a.l;
        b && (a ? b.title = a : b.removeAttribute("title"));
        return b
    }
    ;
    v.$b = u(Ma);
    v.zb = function(a) {
        return a && a.firstChild && a.firstChild.firstChild
    }
    ;
    function uj(a, b, c) {
        return c.D(g, hb + (a.da() + "-outer-box"), c.D(g, hb + (a.da() + "-inner-box"), b))
    }
    v.wd = function(a) {
        return a.tagName == g
    }
    ;
    v.Oa = function(a, b) {
        vj(b, !0);
        vj(b, !1);
        a: {
            var c = a.b.bg(b);
            var d = this.da() + "-outer-box";
            if (c && Lf(c, d) && (c = a.b.bg(c),
            d = this.da() + "-inner-box",
            c && Lf(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(uj(this, b.childNodes, a.b));
        Mf(b, ["goog-inline-block", this.da()]);
        return tj.m.Oa.call(this, a, b)
    }
    ;
    v.da = u("goog-custom-button");
    function vj(a, b) {
        if (a)
            for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a; ) {
                d = b ? c.nextSibling : c.previousSibling;
                if (3 == c.nodeType) {
                    var e = c.nodeValue;
                    if ("" == ud(e))
                        a.removeChild(c);
                    else {
                        c.nodeValue = b ? De(e) : Ee(e);
                        break
                    }
                } else
                    break;
                c = d
            }
    }
    ;function wj(a, b, c) {
        sj.call(this, a, b || tj.X(), c);
        this.sa(16, !0)
    }
    G(wj, sj);
    cj("goog-toggle-button", function() {
        return new wj(null)
    });
    var xj = "StopIteration"in x ? x.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    function yj() {}
    yj.prototype.next = function() {
        throw xj;
    }
    ;
    yj.prototype.Ja = function() {
        return this
    }
    ;
    function zj(a) {
        if (a instanceof yj)
            return a;
        if (typeof a.Ja == p)
            return a.Ja(!1);
        if (uc(a)) {
            var b = 0
              , c = new yj;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw xj;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function Aj(a, b, c) {
        a = zj(a);
        try {
            for (; b.call(c, a.next(), void 0, a); )
                ;
        } catch (d) {
            if (d !== xj)
                throw d;
        }
    }
    ;function Bj(a, b) {
        this.b = {};
        this.a = [];
        this.f = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Bj)
                for (c = a.Ra(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    }
    v = Bj.prototype;
    v.Da = function() {
        Cj(this);
        for (var a = [], b = 0; b < this.a.length; b++)
            a.push(this.b[this.a[b]]);
        return a
    }
    ;
    v.Ra = function() {
        Cj(this);
        return this.a.concat()
    }
    ;
    function Dj(a, b) {
        return Ej(a.b, b)
    }
    function Fj(a) {
        a.b = {};
        a.a.length = 0;
        a.c = 0;
        a.f = 0
    }
    v.remove = function(a) {
        return Ej(this.b, a) ? (delete this.b[a],
        this.c--,
        this.f++,
        this.a.length > 2 * this.c && Cj(this),
        !0) : !1
    }
    ;
    function Cj(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length; ) {
                var d = a.a[b];
                Ej(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length; )
                d = a.a[b],
                Ej(e, d) || (a.a[c++] = d,
                e[d] = 1),
                b++;
            a.a.length = c
        }
    }
    v.get = function(a, b) {
        return Ej(this.b, a) ? this.b[a] : b
    }
    ;
    v.set = function(a, b) {
        Ej(this.b, a) || (this.c++,
        this.a.push(a),
        this.f++);
        this.b[a] = b
    }
    ;
    v.forEach = function(a, b) {
        for (var c = this.Ra(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    v.Ja = function(a) {
        Cj(this);
        var b = 0
          , c = this.f
          , d = this
          , e = new yj;
        e.next = function() {
            if (c != d.f)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length)
                throw xj;
            var f = d.a[b++];
            return a ? f : d.b[f]
        }
        ;
        return e
    }
    ;
    function Ej(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function Gj(a) {
        if (a.Da && typeof a.Da == p)
            return a.Da();
        if (y(a))
            return a.split("");
        if (uc(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Hj(a, b, c) {
        if (a.forEach && typeof a.forEach == p)
            a.forEach(b, c);
        else if (uc(a) || y(a))
            Kc(a, b, c);
        else {
            if (a.Ra && typeof a.Ra == p)
                var d = a.Ra();
            else if (a.Da && typeof a.Da == p)
                d = void 0;
            else if (uc(a) || y(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)
                    d.push(f)
            } else
                d = Zc(a);
            e = Gj(a);
            f = e.length;
            for (var h = 0; h < f; h++)
                b.call(c, e[h], d && d[h], a)
        }
    }
    ;var Ij = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function Jj(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? Ge(e) : "")
            }
        }
    }
    ;function Kj(a) {
        this.f = this.s = this.c = "";
        this.l = null;
        this.g = this.h = "";
        this.b = !1;
        if (a instanceof Kj) {
            this.b = pc(void 0) ? void 0 : a.b;
            Lj(this, a.c);
            this.s = a.s;
            this.f = a.f;
            Mj(this, a.l);
            this.h = a.h;
            var b = a.a;
            var c = new Nj;
            c.c = b.c;
            b.a && (c.a = new Bj(b.a),
            c.b = b.b);
            Oj(this, c);
            this.g = a.g
        } else
            a && (b = String(a).match(Ij)) ? (this.b = !1,
            Lj(this, b[1] || "", !0),
            this.s = Pj(b[2] || ""),
            this.f = Pj(b[3] || "", !0),
            Mj(this, b[4]),
            this.h = Pj(b[5] || "", !0),
            Oj(this, b[6] || "", !0),
            this.g = Pj(b[7] || "")) : (this.b = !1,
            this.a = new Nj(null,this.b))
    }
    Kj.prototype.toString = function() {
        var a = []
          , b = this.c;
        b && a.push(Qj(b, Rj, !0), ":");
        var c = this.f;
        if (c || "file" == b)
            a.push("//"),
            (b = this.s) && a.push(Qj(b, Rj, !0), "@"),
            a.push(Fe(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.l,
            null != c && a.push(":", String(c));
        if (c = this.h)
            this.f && "/" != c.charAt(0) && a.push("/"),
            a.push(Qj(c, "/" == c.charAt(0) ? Sj : Tj, !0));
        (c = this.a.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", Qj(c, Uj));
        return a.join("")
    }
    ;
    function Lj(a, b, c) {
        a.c = c ? Pj(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    }
    function Mj(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.l = b
        } else
            a.l = null
    }
    function Oj(a, b, c) {
        b instanceof Nj ? (a.a = b,
        Vj(a.a, a.b)) : (c || (b = Qj(b, Wj)),
        a.a = new Nj(b,a.b))
    }
    function Pj(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
    function Qj(a, b, c) {
        return y(a) ? (a = encodeURI(a).replace(b, Xj),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
    function Xj(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Rj = /[#\/\?@]/g
      , Tj = /[#\?:]/g
      , Sj = /[#\?]/g
      , Wj = /[#\?@]/g
      , Uj = /#/g;
    function Nj(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.f = !!b
    }
    function Yj(a) {
        a.a || (a.a = new Bj,
        a.b = 0,
        a.c && Jj(a.c, function(b, c) {
            a.add(Ge(b), c)
        }))
    }
    v = Nj.prototype;
    v.add = function(a, b) {
        Yj(this);
        this.c = null;
        a = Zj(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = this.b + 1;
        return this
    }
    ;
    v.remove = function(a) {
        Yj(this);
        a = Zj(this, a);
        return Dj(this.a, a) ? (this.c = null,
        this.b = this.b - this.a.get(a).length,
        this.a.remove(a)) : !1
    }
    ;
    function ak(a, b) {
        Yj(a);
        b = Zj(a, b);
        return Dj(a.a, b)
    }
    v.forEach = function(a, b) {
        Yj(this);
        this.a.forEach(function(c, d) {
            Kc(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    v.Ra = function() {
        Yj(this);
        for (var a = this.a.Da(), b = this.a.Ra(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    v.Da = function(a) {
        Yj(this);
        var b = [];
        if (y(a))
            ak(this, a) && (b = Sc(b, this.a.get(Zj(this, a))));
        else {
            a = this.a.Da();
            for (var c = 0; c < a.length; c++)
                b = Sc(b, a[c])
        }
        return b
    }
    ;
    v.set = function(a, b) {
        Yj(this);
        this.c = null;
        a = Zj(this, a);
        ak(this, a) && (this.b = this.b - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = this.b + 1;
        return this
    }
    ;
    v.get = function(a, b) {
        if (!a)
            return b;
        a = this.Da(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    function bk(a, b, c) {
        a.remove(b);
        0 < c.length && (a.c = null,
        a.a.set(Zj(a, b), Tc(c)),
        a.b = a.b + c.length)
    }
    v.toString = function() {
        if (this.c)
            return this.c;
        if (!this.a)
            return "";
        for (var a = [], b = this.a.Ra(), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = Fe(d);
            d = this.Da(d);
            for (var f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + Fe(d[f]));
                a.push(h)
            }
        }
        return this.c = a.join("&")
    }
    ;
    function Zj(a, b) {
        b = String(b);
        a.f && (b = b.toLowerCase());
        return b
    }
    function Vj(a, b) {
        b && !a.f && (Yj(a),
        a.c = null,
        a.a.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d),
            bk(this, e, c))
        }, a));
        a.f = b
    }
    v.cg = function(a) {
        for (var b = 0; b < arguments.length; b++)
            Hj(arguments[b], function(c, d) {
                this.add(d, c)
            }, this)
    }
    ;
    var ck = {}
      , dk = {}
      , ek = {}
      , fk = {};
    function gk() {
        throw Error("Do not instantiate directly");
    }
    gk.prototype.ed = null;
    gk.prototype.ea = t("a");
    gk.prototype.toString = t("a");
    function hk(a) {
        if (a.Ib !== ck)
            throw Error("Sanitized content was not of kind HTML.");
        return se(a.toString(), a.ed || null)
    }
    function ik() {
        gk.call(this)
    }
    G(ik, gk);
    ik.prototype.Ib = ck;
    function jk() {
        gk.call(this)
    }
    G(jk, gk);
    jk.prototype.Ib = fk;
    jk.prototype.ed = 1;
    function kk(a, b) {
        b = a(b || lk, void 0, void 0);
        a = Pg(Xf(), g);
        b = wc(b) ? b instanceof gk ? hk(b) : le("zSoyz") : le(String(b));
        xe(a, b);
        1 == a.childNodes.length && (b = a.firstChild,
        1 == b.nodeType && (a = b));
        return a
    }
    var lk = {};
    function mk(a, b) {
        return null != a && a.Ib === b
    }
    ;function nk(a) {
        if (null != a)
            switch (a.ed) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    }
    function ok(a) {
        return mk(a, ck) ? a : a instanceof ie ? pk(ke(a).toString(), a.a()) : pk(He(String(String(a))), nk(a))
    }
    var pk = function(a) {
        function b(c) {
            this.a = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.ed = d);
            return c
        }
    }(ik)
      , qk = function(a) {
        function b(c) {
            this.a = c
        }
        b.prototype = a.prototype;
        return function(c) {
            return new b(String(c))
        }
    }(jk);
    function rk(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }
    function X(a) {
        return mk(a, ck) ? String(String(a.ea()).replace(sk, "").replace(tk, "&lt;")).replace(uk, vk) : He(String(a))
    }
    function wk(a) {
        mk(a, dk) || mk(a, ek) ? a = xk(a) : a instanceof Fd ? a = xk(Id(a).toString()) : a instanceof od ? a = xk(rd(a).toString()) : (a = String(a),
        a = yk.test(a) ? a.replace(zk, Ak) : Aa);
        return a
    }
    function Bk(a) {
        mk(a, dk) || mk(a, ek) ? a = xk(a) : a instanceof Fd ? a = xk(Id(a).toString()) : a instanceof od ? a = xk(rd(a).toString()) : (a = String(a),
        a = Ck.test(a) ? a.replace(zk, Ak) : Aa);
        return a
    }
    function Dk(a) {
        return mk(a, ek) ? a.ea() : a instanceof od ? rd(a).toString() : Aa
    }
    function Ek(a) {
        mk(a, fk) ? a = rk(a.ea()) : null == a ? a = "" : a instanceof Ld ? a = rk(Nd(a)) : a instanceof Xd ? a = rk(Zd(a)) : (a = String(a),
        a = Fk.test(a) ? a : "zSoyz");
        return a
    }
    var Gk = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };
    function vk(a) {
        return Gk[a]
    }
    var Hk = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\x0B": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };
    function Ik(a) {
        return Hk[a]
    }
    var Jk = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };
    function Ak(a) {
        return Jk[a]
    }
    var uk = /[\x00\x22\x27\x3c\x3e]/g
      , Kk = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g
      , zk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , Fk = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i
      , yk = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i
      , Ck = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
    function xk(a) {
        return String(a).replace(zk, Ak)
    }
    var sk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
      , tk = /</g;
    function Lk(a, b) {
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null
    }
    Lk.prototype.get = function() {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else
            a = this.c();
        return a
    }
    ;
    function Mk(a, b) {
        a.f(b);
        100 > a.b && (a.b++,
        b.next = a.a,
        a.a = b)
    }
    ;function Nk(a) {
        x.setTimeout(function() {
            throw a;
        }, 0)
    }
    var Ok;
    function Pk() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !H("Presto") && (a = function() {
            var e = document.createElement(na);
            e.style.display = q;
            ze(e);
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(ke(ue));
            e.close();
            var h = "callImmediate" + Math.random()
              , k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = C(function(l) {
                if (("*" == k || l.origin == k) && l.data == h)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(h, k)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !ee()) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (pc(c.next)) {
                    c = c.next;
                    var e = c.Rf;
                    c.Rf = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    Rf: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange"in document.createElement(ta) ? function(e) {
            var f = document.createElement(ta);
            f.onreadystatechange = function() {
                f.onreadystatechange = null;
                f.parentNode.removeChild(f);
                f = null;
                e();
                e = null
            }
            ;
            document.documentElement.appendChild(f)
        }
        : function(e) {
            x.setTimeout(e, 0)
        }
    }
    ;function Qk() {
        this.b = this.a = null
    }
    var Sk = new Lk(function() {
        return new Rk
    }
    ,function(a) {
        a.reset()
    }
    );
    Qk.prototype.add = function(a, b) {
        var c = Sk.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c
    }
    ;
    Qk.prototype.remove = function() {
        var a = null;
        this.a && (a = this.a,
        this.a = this.a.next,
        this.a || (this.b = null),
        a.next = null);
        return a
    }
    ;
    function Rk() {
        this.next = this.b = this.a = null
    }
    Rk.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    }
    ;
    Rk.prototype.reset = function() {
        this.next = this.b = this.a = null
    }
    ;
    function Tk(a, b) {
        Uk || Vk();
        Wk || (Uk(),
        Wk = !0);
        Xk.add(a, b)
    }
    var Uk;
    function Vk() {
        if (x.Promise && x.Promise.resolve) {
            var a = x.Promise.resolve(void 0);
            Uk = function() {
                a.then(Yk)
            }
        } else
            Uk = function() {
                var b = Yk;
                !vc(x.setImmediate) || x.Window && x.Window.prototype && !H(la) && x.Window.prototype.setImmediate == x.setImmediate ? (Ok || (Ok = Pk()),
                Ok(b)) : x.setImmediate(b)
            }
    }
    var Wk = !1
      , Xk = new Qk;
    function Yk() {
        for (var a; a = Xk.remove(); ) {
            try {
                a.a.call(a.b)
            } catch (b) {
                Nk(b)
            }
            Mk(Sk, a)
        }
        Wk = !1
    }
    ;function Zk(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    }
    ;function $k(a, b) {
        this.a = 0;
        this.l = void 0;
        this.f = this.b = this.c = null;
        this.g = this.h = !1;
        if (a != z)
            try {
                var c = this;
                a.call(b, function(d) {
                    al(c, 2, d)
                }, function(d) {
                    al(c, 3, d)
                })
            } catch (d) {
                al(this, 3, d)
            }
    }
    function bl() {
        this.next = this.c = this.b = this.f = this.a = null;
        this.g = !1
    }
    bl.prototype.reset = function() {
        this.c = this.b = this.f = this.a = null;
        this.g = !1
    }
    ;
    var cl = new Lk(function() {
        return new bl
    }
    ,function(a) {
        a.reset()
    }
    );
    function dl(a, b, c) {
        var d = cl.get();
        d.f = a;
        d.b = b;
        d.c = c;
        return d
    }
    function el(a) {
        if (a instanceof $k)
            return a;
        var b = new $k(z);
        al(b, 2, a);
        return b
    }
    function fl() {
        var a = gl[5];
        return new $k(function(b, c) {
            c(a)
        }
        )
    }
    $k.prototype.then = function(a, b, c) {
        return hl(this, vc(a) ? a : null, vc(b) ? b : null, c)
    }
    ;
    $k.prototype.$goog_Thenable = !0;
    $k.prototype.cancel = function(a) {
        0 == this.a && Tk(function() {
            var b = new il(a);
            jl(this, b)
        }, this)
    }
    ;
    function jl(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, h = c.b; h && (h.g || (d++,
                    h.a == a && (e = h),
                    !(e && 1 < d))); h = h.next)
                        e || (f = h);
                    e && (0 == c.a && 1 == d ? jl(c, b) : (f ? (d = f,
                    d.next == c.f && (c.f = d),
                    d.next = d.next.next) : kl(c),
                    ll(c, e, 3, b)))
                }
                a.c = null
            } else
                al(a, 3, b)
    }
    function ml(a, b) {
        a.b || 2 != a.a && 3 != a.a || nl(a);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }
    function hl(a, b, c, d) {
        var e = dl(null, null, null);
        e.a = new $k(function(f, h) {
            e.f = b ? function(k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    h(m)
                }
            }
            : f;
            e.b = c ? function(k) {
                try {
                    var l = c.call(d, k);
                    !pc(l) && k instanceof il ? h(k) : f(l)
                } catch (m) {
                    h(m)
                }
            }
            : h
        }
        );
        e.a.c = a;
        ml(a, e);
        return e.a
    }
    $k.prototype.o = function(a) {
        this.a = 0;
        al(this, 2, a)
    }
    ;
    $k.prototype.B = function(a) {
        this.a = 0;
        al(this, 3, a)
    }
    ;
    function al(a, b, c) {
        if (0 == a.a) {
            a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            a: {
                var d = c
                  , e = a.o
                  , f = a.B;
                if (d instanceof $k) {
                    ml(d, dl(e || z, f || null, a));
                    var h = !0
                } else if (Zk(d))
                    d.then(e, f, a),
                    h = !0;
                else {
                    if (wc(d))
                        try {
                            var k = d.then;
                            if (vc(k)) {
                                ol(d, k, e, f, a);
                                h = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(a, l);
                            h = !0;
                            break a
                        }
                    h = !1
                }
            }
            h || (a.l = c,
            a.a = b,
            a.c = null,
            nl(a),
            3 != b || c instanceof il || pl(a, c))
        }
    }
    function ol(a, b, c, d, e) {
        function f(l) {
            k || (k = !0,
            d.call(e, l))
        }
        function h(l) {
            k || (k = !0,
            c.call(e, l))
        }
        var k = !1;
        try {
            b.call(a, h, f)
        } catch (l) {
            f(l)
        }
    }
    function nl(a) {
        a.h || (a.h = !0,
        Tk(a.s, a))
    }
    function kl(a) {
        var b = null;
        a.b && (b = a.b,
        a.b = b.next,
        b.next = null);
        a.b || (a.f = null);
        return b
    }
    $k.prototype.s = function() {
        for (var a; a = kl(this); )
            ll(this, a, this.a, this.l);
        this.h = !1
    }
    ;
    function ll(a, b, c, d) {
        if (3 == c && b.b && !b.g)
            for (; a && a.g; a = a.c)
                a.g = !1;
        if (b.a)
            b.a.c = null,
            ql(b, c, d);
        else
            try {
                b.g ? b.f.call(b.c) : ql(b, c, d)
            } catch (e) {
                rl.call(null, e)
            }
        Mk(cl, b)
    }
    function ql(a, b, c) {
        2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
    }
    function pl(a, b) {
        a.g = !0;
        Tk(function() {
            a.g && rl.call(null, b)
        })
    }
    var rl = Nk;
    function il(a) {
        Ec.call(this, a)
    }
    G(il, Ec);
    il.prototype.name = "cancel";
    function sl(a, b, c) {
        if (vc(a))
            c && (a = C(a, c));
        else if (a && typeof a.handleEvent == p)
            a = C(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
    }
    function tl(a) {
        x.clearTimeout(a)
    }
    ;function ul(a, b, c) {
        R.call(this);
        this.b = a;
        this.f = b || 0;
        this.c = c;
        this.a = C(this.Th, this)
    }
    G(ul, R);
    v = ul.prototype;
    v.ia = 0;
    v.F = function() {
        ul.m.F.call(this);
        this.stop();
        delete this.b;
        delete this.c
    }
    ;
    v.start = function(a) {
        this.stop();
        this.ia = sl(this.a, pc(a) ? a : this.f)
    }
    ;
    v.stop = function() {
        this.fc() && tl(this.ia);
        this.ia = 0
    }
    ;
    v.fc = function() {
        return 0 != this.ia
    }
    ;
    v.Th = function() {
        this.ia = 0;
        this.b && this.b.call(this.c)
    }
    ;
    var vl = function() {
        if (Ye) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(ae)) ? a[1] : "0"
        }
        return Xe ? (a = /10[_.][0-9_.]+/,
        (a = a.exec(ae)) ? a[0].replace(/_/g, ".") : "10") : Ze ? (a = /Android\s+([^\);]+)(\)|;)/,
        (a = a.exec(ae)) ? a[1] : "") : $e || af || bf ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
        (a = a.exec(ae)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    function wl(a) {
        return (a = a.exec(ae)) ? a[1] : ""
    }
    var xl = function() {
        if (pf)
            return wl(/Firefox\/([0-9.]+)/);
        if (I || Ue || Te)
            return kf;
        if (tf)
            return Pe() ? wl(/CriOS\/([0-9.]+)/) : wl(/Chrome\/([0-9.]+)/);
        if (uf && !Pe())
            return wl(/Version\/([0-9.]+)/);
        if (qf || rf) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ae);
            if (a)
                return a[1] + "." + a[2]
        } else if (sf)
            return (a = wl(/Android\s+([0-9.]+)/)) ? a : wl(/Version\/([0-9.]+)/);
        return ""
    }();
    function yl(a, b, c, d, e, f, h, k, l) {
        var m = zl(c);
        var n = ch(a);
        var r = eh(a);
        n = new Sg(n.x,n.y,r.width,r.height);
        if (r = bh(a)) {
            var w = new Sg(r.left,r.top,r.right - r.left,r.bottom - r.top);
            r = Math.max(n.left, w.left);
            var F = Math.min(n.left + n.width, w.left + w.width);
            if (r <= F) {
                var E = Math.max(n.top, w.top);
                w = Math.min(n.top + n.height, w.top + w.height);
                E <= w && (n.left = r,
                n.top = E,
                n.width = F - r,
                n.height = w - E)
            }
        }
        r = Xf(a);
        E = Xf(c);
        r.a != E.a && (F = r.a.body,
        E = dh(F, Qg(E)),
        E = Vf(E, ch(F)),
        !I || mf(9) || gg(r.a) || (E = Vf(E, hg(r.a))),
        n.left += E.x,
        n.top += E.y);
        a = Al(a, b);
        b = n.left;
        a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
        b = new N(b,n.top + (a & 1 ? n.height : 0));
        b = Vf(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x,
        b.y += (a & 1 ? -1 : 1) * e.y);
        if (h)
            if (l)
                var ca = l;
            else if (ca = bh(c))
                ca.top -= m.y,
                ca.right -= m.x,
                ca.bottom -= m.y,
                ca.left -= m.x;
        return Bl(b, c, d, f, ca, h, k)
    }
    function zl(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Wg(a, Kb)) {
                var c = ch(a);
                if (!b) {
                    b = ih(a);
                    var d;
                    if (d = b) {
                        d = uf && 0 <= Dd(xl, 10);
                        var e;
                        if (e = cf)
                            e = 0 <= Dd(vl, 10);
                        d = J || d || e
                    }
                    b = d ? -a.scrollLeft : !b || Ve && L("8") || Wg(a, "overflowX") == dc ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = Vf(c, new N(b,a.scrollTop))
                }
            }
        }
        return c || new N
    }
    function Bl(a, b, c, d, e, f, h) {
        a = Uf(a);
        var k = Al(b, c);
        c = eh(b);
        h = h ? new Wf(h.width,h.height) : new Wf(c.width,c.height);
        a = Uf(a);
        h = new Wf(h.width,h.height);
        var l = 0;
        if (d || 0 != k)
            k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left),
            k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                k = h;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left,
                l |= 1);
                if (f & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left,
                    l |= 4);
                    d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left),
                    k.width = Math.max(k.width, 0),
                    l |= 4)
                }
                d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left),
                l |= 1);
                f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top,
                l |= 2);
                f & 32 && (m = d.y,
                d.y < e.top && (d.y = e.top,
                l |= 8),
                d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top),
                k.height = Math.max(k.height, 0),
                l |= 8));
                d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top),
                l |= 2);
                f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                e = l
            } else
                e = 256;
            l = e
        }
        f = new Sg(0,0,0,0);
        f.left = a.x;
        f.top = a.y;
        f.width = h.width;
        f.height = h.height;
        e = l;
        if (e & 496)
            return e;
        Xg(b, new N(f.left,f.top));
        h = new Wf(f.width,f.height);
        c == h || c && h && c.width == h.width && c.height == h.height || (c = h,
        a = gg(Xf(O(b)).a),
        !I || L("10") || a && L("8") ? nh(b, c, La) : (h = b.style,
        a ? (a = oh(b),
        b = ph(b),
        h.pixelWidth = c.width - b.left - a.left - a.right - b.right,
        h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width,
        h.pixelHeight = c.height)));
        return e
    }
    function Al(a, b) {
        return (b & 8 && ih(a) ? b ^ 4 : b) & -9
    }
    ;function Cl() {}
    Cl.prototype.b = fc();
    function Dl() {}
    Dl.prototype.a = null;
    function El(a) {
        var b;
        (b = a.a) || (b = {},
        Fl(a) && (b[0] = !0,
        b[1] = !0),
        b = a.a = b);
        return b
    }
    ;var Gl;
    function Hl() {}
    G(Hl, Dl);
    function Il(a) {
        return (a = Fl(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
    function Fl(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }
    Gl = new Hl;
    function Jl(a) {
        ni.call(this);
        this.headers = new Bj;
        this.fe = a || null;
        this.ma = !1;
        this.ee = this.N = null;
        this.rb = "";
        this.Ha = 0;
        this.Od = "";
        this.Qb = this.Re = this.Jd = this.se = !1;
        this.Vc = 0;
        this.be = null;
        this.Sg = "";
        this.Df = this.lh = !1
    }
    G(Jl, ni);
    Jl.prototype.va = null;
    var Kl = /^https?$/i
      , Ll = [sa, "PUT"]
      , Ml = [];
    function Nl(a, b, c, d, e) {
        var f = new Jl;
        Ml.push(f);
        b && f.w(Ua, b);
        f.Ab(Ob, f.Ih);
        e && (f.Vc = Math.max(0, e));
        f.send(a, c, d, void 0)
    }
    v = Jl.prototype;
    v.Ih = function() {
        this.M();
        Rc(Ml, this)
    }
    ;
    v.send = function(a, b, c, d) {
        if (this.N)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.rb + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.rb = a;
        this.Od = "";
        this.Ha = 0;
        this.se = !1;
        this.ma = !0;
        this.N = this.fe ? Il(this.fe) : Il(Gl);
        this.ee = this.fe ? El(this.fe) : El(Gl);
        this.N.onreadystatechange = C(this.Kg, this);
        try {
            this.xa(),
            this.Re = !0,
            this.N.open(b, String(a), !0),
            this.Re = !1
        } catch (f) {
            this.xa();
            this.jd(5, f);
            return
        }
        a = c || "";
        var e = new Bj(this.headers);
        d && Hj(d, function(f, h) {
            e.set(h, f)
        });
        d = Pc(e.Ra(), Ol);
        c = x.FormData && a instanceof x.FormData;
        !Qc(Ll, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, h) {
            this.N.setRequestHeader(h, f)
        }, this);
        this.Sg && (this.N.responseType = this.Sg);
        ec in this.N && this.N.withCredentials !== this.lh && (this.N.withCredentials = this.lh);
        try {
            Pl(this),
            0 < this.Vc && (this.Df = Ql(this.N),
            this.xa(),
            this.Df ? (this.N.timeout = this.Vc,
            this.N.ontimeout = C(this.Eb, this)) : this.be = sl(this.Eb, this.Vc, this)),
            this.xa(),
            this.Jd = !0,
            this.N.send(a),
            this.Jd = !1
        } catch (f) {
            this.xa(),
            this.jd(5, f)
        }
    }
    ;
    function Ql(a) {
        return I && L(9) && qc(a.timeout) && pc(a.ontimeout)
    }
    function Ol(a) {
        return "content-type" == a.toLowerCase()
    }
    v.Eb = function() {
        "undefined" != typeof oc && this.N && (this.Od = "Timed out after " + this.Vc + "ms, aborting",
        this.Ha = 8,
        this.xa(),
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    v.jd = function(a, b) {
        this.ma = !1;
        this.N && (this.Qb = !0,
        this.N.abort(),
        this.Qb = !1);
        this.Od = b;
        this.Ha = a;
        Rl(this);
        Sl(this)
    }
    ;
    function Rl(a) {
        a.se || (a.se = !0,
        a.dispatchEvent(Ua),
        a.dispatchEvent("error"))
    }
    v.abort = function(a) {
        this.N && this.ma && (this.xa(),
        this.ma = !1,
        this.Qb = !0,
        this.N.abort(),
        this.Qb = !1,
        this.Ha = a || 7,
        this.dispatchEvent(Ua),
        this.dispatchEvent("abort"),
        Sl(this))
    }
    ;
    v.F = function() {
        this.N && (this.ma && (this.ma = !1,
        this.Qb = !0,
        this.N.abort(),
        this.Qb = !1),
        Sl(this, !0));
        Jl.m.F.call(this)
    }
    ;
    v.Kg = function() {
        this.ub || (this.Re || this.Jd || this.Qb ? Tl(this) : this.Zi())
    }
    ;
    v.Zi = function() {
        Tl(this)
    }
    ;
    function Tl(a) {
        if (a.ma && "undefined" != typeof oc)
            if (a.ee[1] && 4 == Ul(a) && 2 == a.xa())
                a.xa();
            else if (a.Jd && 4 == Ul(a))
                sl(a.Kg, 0, a);
            else if (a.dispatchEvent(Pb),
            a.Ld()) {
                a.xa();
                a.ma = !1;
                try {
                    if (a.Pc())
                        a.dispatchEvent(Ua),
                        a.dispatchEvent("success");
                    else {
                        a.Ha = 6;
                        try {
                            var b = 2 < Ul(a) ? a.N.statusText : ""
                        } catch (c) {
                            b = ""
                        }
                        a.Od = b + " [" + a.xa() + "]";
                        Rl(a)
                    }
                } finally {
                    Sl(a)
                }
            }
    }
    function Sl(a, b) {
        if (a.N) {
            Pl(a);
            var c = a.N
              , d = a.ee[0] ? z : null;
            a.N = null;
            a.ee = null;
            b || a.dispatchEvent(Ob);
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
    function Pl(a) {
        a.N && a.Df && (a.N.ontimeout = null);
        a.be && (tl(a.be),
        a.be = null)
    }
    v.fc = function() {
        return !!this.N
    }
    ;
    v.Ld = function() {
        return 4 == Ul(this)
    }
    ;
    v.Pc = function() {
        var a = this.xa();
        a: switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            var b = !0;
            break a;
        default:
            b = !1
        }
        if (!b) {
            if (a = 0 === a)
                a = String(this.rb).match(Ij)[1] || null,
                !a && x.self && x.self.location && (a = x.self.location.protocol,
                a = a.substr(0, a.length - 1)),
                a = !Kl.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    }
    ;
    function Ul(a) {
        return a.N ? a.N.readyState : 0
    }
    v.xa = function() {
        try {
            return 2 < Ul(this) ? this.N.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    v.ze = function() {
        return String(this.rb)
    }
    ;
    v.Lb = function() {
        try {
            return this.N ? this.N.responseText : ""
        } catch (a) {
            return ""
        }
    }
    ;
    v.getResponseHeader = function(a) {
        if (this.N && this.Ld())
            return a = this.N.getResponseHeader(a),
            null === a ? void 0 : a
    }
    ;
    v.getAllResponseHeaders = function() {
        return this.N && this.Ld() ? this.N.getAllResponseHeaders() || "" : ""
    }
    ;
    v.ye = t("Ha");
    function Vl() {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.B = 1;
        this.g = {};
        this.f = null;
        this.s = "";
        S(window, "beforeunload", this.o, !1, this)
    }
    tc(Vl);
    function Wl(a, b, c) {
        if (null == b)
            return "1";
        switch (A(b)) {
        case Ub:
            return a = b,
            64 < a.length && (null == c || !c) && (a = a.substr(0, 64)),
            Fe(a);
        case Fb:
            return "" + b;
        case "boolean":
            return b ? "1" : "0";
        case Ga:
            var d = [], e;
            for (e in b)
                d.push(Wl(a, b[e], c));
            return d.join(",");
        case Gb:
            d = [];
            for (e in b)
                d.push(Xl(a, e, b[e], c));
            return d.join(",");
        default:
            return ""
        }
    }
    function Xl(a, b, c, d) {
        return [Fe(b), Wl(a, c, d || "smtalt" == b)].join("=")
    }
    Vl.prototype.log = function(a, b) {
        this.b.push([a, b]);
        this.c || (this.c = !0,
        sl(this.h, 0, this))
    }
    ;
    Vl.prototype.h = function() {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            Yl(this, b[0], b[1])
        }
        this.b = [];
        this.c = !1
    }
    ;
    function Yl(a, b, c) {
        Zl(a, a.s + "/gen204?" + (a.f ? ["client=", a.f, "&"].join("") : "") + Xl(a, b, c))
    }
    function Zl(a, b) {
        var c = new Image
          , d = a.B++;
        a.g[d] = c;
        c.onload = c.onerror = function() {
            delete Vl.X().g[d]
        }
        ;
        c.src = b;
        c = null
    }
    function am(a, b) {
        var c = 0
          , d = null;
        b in a.a && (d = a.a[b],
        c = d[0],
        d = d[1]);
        if (A(1) == Gb) {
            A(d) != Gb && (d = {});
            for (var e in 1)
                d[e] = bm(e in d ? d[e] : null, 1[e])
        } else
            d = bm(d, 1);
        a.a[b] = [c, d];
        tl(a.a[b][0]);
        c = sl(C(a.l, a, b), 2E3);
        a.a[b][0] = c
    }
    Vl.prototype.l = function(a) {
        Yl(this, a, this.a[a][1]);
        a in this.a && (tl(this.a[a][0]),
        delete this.a[a])
    }
    ;
    function bm(a, b) {
        null == b && (b = 1);
        isNaN(a) && (a = parseInt(a, 10));
        isNaN(b) && (b = parseInt(b, 10));
        return a + b
    }
    Vl.prototype.o = function() {
        this.h();
        for (var a in this.a)
            0 != this.a[a] && this.l(a)
    }
    ;
    function cm() {}
    tc(cm);
    function dm(a) {
        Cf(this, a, null)
    }
    G(dm, Af);
    function em(a) {
        Cf(this, a, fm)
    }
    G(em, Af);
    var fm = [3, 4];
    function gm(a) {
        Cf(this, a, hm)
    }
    G(gm, Af);
    var hm = [3];
    function im(a) {
        Cf(this, a, jm)
    }
    G(im, Af);
    var jm = [2];
    function km(a) {
        Cf(this, a, lm)
    }
    G(km, Af);
    var lm = [26, 80];
    km.prototype.cb = function() {
        return Ff(this, 16)
    }
    ;
    km.prototype.Tb = function(a) {
        Gf(this, 16, a)
    }
    ;
    km.prototype.oa = function() {
        return Ff(this, 1)
    }
    ;
    km.prototype.ta = function(a) {
        Gf(this, 1, a)
    }
    ;
    function mm() {
        this.c = this.a = "";
        cm.X()
    }
    tc(mm);
    mm.prototype.Tb = gc("a");
    mm.prototype.ta = gc("c");
    mm.prototype.store = function(a) {
        Gf(a, 65, 0);
        a.Tb(this.a);
        Gf(a, 14, "");
        a.ta(this.c);
        Gf(a, 50, "");
        Gf(a, 52, "");
        Gf(a, 32, 0)
    }
    ;
    new ArrayBuffer(0);
    function nm(a, b) {
        var c = a[b - 1];
        if (null == c || om(c))
            a = a[a.length - 1],
            om(a) && (c = a[b]);
        return c
    }
    function om(a) {
        return wc(a) && !uc(a)
    }
    ;function pm(a, b) {
        return a === b ? !0 : Oc(a, function(c, d) {
            if (om(c)) {
                d = c;
                for (var e in d) {
                    c = d[e];
                    var f = nm(b, +e);
                    if (!qm(c, f))
                        return !1
                }
                return !0
            }
            e = nm(b, d + 1);
            return qm(c, e)
        }) && Oc(b, function(c, d) {
            if (om(c)) {
                for (var e in c)
                    if (null == nm(a, +e))
                        return !1;
                return !0
            }
            return null == c == (null == nm(a, d + 1))
        })
    }
    function qm(a, b) {
        return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : B(a) && B(b) ? pm(a, b) : !1
    }
    ;function rm() {}
    function sm(a, b, c) {
        a = a.Ea = b = b || [];
        if (a.length) {
            var d = a.length - 1;
            b = a[d];
            if (om(b) && (delete a[d],
            d < c)) {
                d = 0;
                for (var e in b) {
                    var f = +e;
                    f <= c ? (a[f - 1] = b[e],
                    delete b[e]) : d++
                }
                d && (a[c] = b)
            }
        }
    }
    function tm(a, b, c) {
        a = a.Ea[b];
        return null != a ? a : c
    }
    function um(a, b) {
        return !!tm(a, b, void 0)
    }
    function vm(a, b) {
        return tm(a, b, 0)
    }
    function wm(a, b) {
        return tm(a, b, "")
    }
    function xm(a, b, c) {
        a = a.Ea;
        a[b] || (a[b] = []);
        return a[b][c]
    }
    function Y(a, b) {
        return a.Ea[b] ? a.Ea[b].length : 0
    }
    rm.prototype.Fb = t("Ea");
    rm.prototype.sj = function(a) {
        var b = this.Ea;
        this.Ea = a.Ea;
        a.Ea = b
    }
    ;
    function ym(a) {
        sm(this, a, 9)
    }
    G(ym, rm);
    function zm() {
        this.b = mm.X()
    }
    G(zm, R);
    tc(zm);
    zm.prototype.a = function() {
        Am(this, 25)
    }
    ;
    function Am(a, b) {
        var c = new km;
        a.b.store(c);
        Gf(c, 31, b);
        return c
    }
    ;function Bm() {
        this.a = []
    }
    Bm.prototype.add = function(a) {
        this.a.push(a)
    }
    ;
    function Cm() {
        this.a = []
    }
    G(Cm, Bm);
    tc(Cm);
    Cm.prototype.add = function(a) {
        if (a)
            for (; a(); )
                ;
    }
    ;
    function Dm(a) {
        this.a = [];
        this.b = .5;
        Em(this, a);
        this.f = 0;
        this.c = !0;
        this.g = C(this.h, this)
    }
    G(Dm, Bm);
    function Em(a, b) {
        1 < b ? a.b = 1 : .001 > b ? a.b = .001 : b && (a.b = b)
    }
    Dm.prototype.add = function(a) {
        Dm.m.add.call(this, a);
        this.c && Fm(this)
    }
    ;
    function Fm(a) {
        a.c = !1;
        window.setTimeout(a.g, Math.min(a.f, 5E3))
    }
    Dm.prototype.h = function() {
        var a = (new Date).getTime();
        do {
            this.a.length && (this.a[0] && this.a[0]() || this.a.shift());
            var b = !!this.a.length;
            var c = 95 * this.b + 5;
            var d = (new Date).getTime() - a
        } while (b && d < c);this.f = Math.ceil(d * (1 / this.b - 1)) + 1;
        b ? Fm(this) : this.c = !0
    }
    ;
    function Gm(a, b) {
        this.o = a || null;
        this.C = b || Cm.X();
        this.l = this.h = this.G = null;
        this.f = this.c = !1;
        this.g = null;
        this.a = [];
        this.b = 0
    }
    function Hm() {}
    function Im() {}
    function Jm(a, b) {
        a.c || (a.G = b)
    }
    function Km(a, b, c) {
        a.h = c ? C(b, c) : b
    }
    function Lm(a, b, c) {
        a.l = c ? C(b, c) : b
    }
    function Mm(a, b) {
        a.c || (a.c = !0,
        a.B = b,
        a.b++,
        a.g = a.G,
        a.s())
    }
    Gm.prototype.stop = function() {
        this.b++;
        this.c = !1;
        this.a = []
    }
    ;
    function Nm(a) {
        if (!a.c)
            return null;
        for (var b = !1, c = 0; c < a.a.length; ++c)
            if (a.a[c].target === a) {
                a.a[c].ready = !1;
                a.a[c].jh = a.b + 1;
                b = !0;
                break
            }
        b || a.a.push({
            target: a,
            ready: !1,
            jh: a.b + 1
        });
        return C(a.s, a, a, a.b + 1)
    }
    function Om(a) {
        if (!a.c)
            return !0;
        for (var b = 0; b < a.a.length; ++b)
            if (a.a[b].target === a && a.a[b].jh == a.b)
                return a.a[b].ready;
        return !0
    }
    Gm.prototype.s = function(a, b) {
        if (this.c) {
            if (a)
                for (var c = 0; c < this.a.length; ++c)
                    if (this.a[c].target === a) {
                        this.a[c].ready = !0;
                        break
                    }
            this.f || this.C.add(C(this.K, this, b || this.b))
        }
    }
    ;
    Gm.prototype.K = function(a) {
        if (this.b != a)
            return !1;
        a = this.g;
        if (a == Im)
            return this.stop(),
            this.h && this.h.call(this.o, this, this.B),
            !1;
        this.f = !0;
        try {
            var b = a.call(this.o, this, this.B);
            if (!b)
                throw Error();
        } catch (c) {
            this.stop();
            a = c;
            if (this.l)
                this.l.call(this.o, a, this, this.B);
            else
                throw a;
            return !1
        } finally {
            this.f = !1
        }
        b != Hm && (this.g = b,
        this.b++,
        this.s());
        return !1
    }
    ;
    function Pm() {
        ni.call(this);
        this.a = 0;
        this.endTime = this.b = null
    }
    G(Pm, ni);
    Pm.prototype.c = function() {
        this.Qa("begin")
    }
    ;
    Pm.prototype.f = function() {
        this.Qa("end")
    }
    ;
    Pm.prototype.Bb = function() {
        this.Qa("stop")
    }
    ;
    Pm.prototype.Qa = function(a) {
        this.dispatchEvent(a)
    }
    ;
    function Qm(a, b) {
        B(b) || (b = [b]);
        b = Mc(b, function(c) {
            return y(c) ? c : c.Ck + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        P(a, ac, b.join(","))
    }
    var Rm = Wc(function() {
        if (I)
            return L("10.0");
        var a = document.createElement(g)
          , b = K ? "-webkit" : J ? "-moz" : I ? "-ms" : Te ? "-o" : null
          , c = {
            transition: Hb
        };
        b && (c[b + "-transition"] = Hb);
        b = qe(Za, {
            style: c
        });
        xe(a, b);
        a = a.firstChild;
        b = a.style[Me(ac)];
        return "" != ("undefined" !== typeof b ? b : a.style[Tg(a, ac)] || "")
    });
    function Sm(a, b, c, d, e) {
        Pm.call(this);
        this.A = a;
        this.l = b;
        this.s = c;
        this.g = d;
        this.o = B(e) ? e : [e]
    }
    G(Sm, Pm);
    v = Sm.prototype;
    v.play = function() {
        if (1 == this.a)
            return !1;
        this.c();
        this.Qa("play");
        this.b = D();
        this.a = 1;
        if (Rm())
            return P(this.A, this.s),
            this.h = sl(this.ej, void 0, this),
            !0;
        this.Af(!1);
        return !1
    }
    ;
    v.ej = function() {
        eh(this.A);
        Qm(this.A, this.o);
        P(this.A, this.g);
        this.h = sl(C(this.Af, this, !1), 1E3 * this.l)
    }
    ;
    v.stop = function() {
        1 == this.a && this.Af(!0)
    }
    ;
    v.Af = function(a) {
        P(this.A, ac, "");
        tl(this.h);
        P(this.A, this.g);
        this.endTime = D();
        this.a = 0;
        a ? this.Bb() : this.Qa($a);
        this.f()
    }
    ;
    v.F = function() {
        this.stop();
        Sm.m.F.call(this)
    }
    ;
    function Tm(a, b) {
        ni.call(this);
        this.h = new hi(this);
        this.bc(a || null);
        b && (this.pc = b)
    }
    G(Tm, ni);
    v = Tm.prototype;
    v.A = null;
    v.sc = !0;
    v.Pf = null;
    v.hc = !1;
    v.Xe = -1;
    v.pc = Yb;
    v.j = t("A");
    v.bc = function(a) {
        Um(this);
        this.A = a
    }
    ;
    v.Sc = function(a) {
        Um(this);
        this.sc = a
    }
    ;
    function Um(a) {
        if (a.hc)
            throw Error("Can not change this state of the popup while showing.");
    }
    v.isVisible = t("hc");
    v.I = function(a) {
        this.ua && this.ua.stop();
        this.qa && this.qa.stop();
        if (a) {
            if (!this.hc && this.Ie()) {
                if (!this.A)
                    throw Error("Caller must call setElement before trying to show the popup");
                this.ob();
                a = O(this.A);
                if (this.sc)
                    if (this.h.w(a, Ab, this.gf, !0),
                    I) {
                        try {
                            var b = a.activeElement
                        } catch (d) {}
                        for (; b && b.nodeName == na; ) {
                            try {
                                var c = Eg(b)
                            } catch (d) {
                                break
                            }
                            a = c;
                            b = a.activeElement
                        }
                        this.h.w(a, Ab, this.gf, !0);
                        this.h.w(a, "deactivate", this.Jg)
                    } else
                        this.h.w(a, Ka, this.Jg);
                this.pc == Yb ? (this.A.style.visibility = dc,
                Q(this.A, !0)) : this.pc == Eb && this.ob();
                this.hc = !0;
                this.Xe = D();
                this.ua ? (Vh(this.ua, "end", this.Lg, !1, this),
                this.ua.play()) : this.Lg()
            }
        } else
            Vm(this)
    }
    ;
    v.ob = z;
    function Vm(a, b) {
        a.hc && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.h && mi(a.h),
        a.hc = !1,
        D(),
        a.qa ? (Vh(a.qa, "end", Cc(a.Sf, b), !1, a),
        a.qa.play()) : a.Sf(b))
    }
    v.Sf = function(a) {
        this.pc == Yb ? this.Di() : this.pc == Eb && (this.A.style.top = "-10000px");
        this.hf(a)
    }
    ;
    v.Di = function() {
        this.A.style.visibility = qb;
        Q(this.A, !1)
    }
    ;
    v.Ie = function() {
        return this.dispatchEvent("beforeshow")
    }
    ;
    v.Lg = function() {
        this.dispatchEvent("show")
    }
    ;
    v.hf = function(a) {
        this.dispatchEvent({
            type: rb,
            target: a
        })
    }
    ;
    v.gf = function(a) {
        a = a.target;
        zg(this.A, a) || Wm(this, a) || 150 > D() - this.Xe || Vm(this, a)
    }
    ;
    v.Jg = function(a) {
        var b = O(this.A);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement,
            !a || zg(this.A, a) || "BODY" == a.tagName)
                return
        } else if (a.target != b)
            return;
        150 > D() - this.Xe || Vm(this)
    }
    ;
    function Wm(a, b) {
        return Nc(a.Pf || [], function(c) {
            return b === c || zg(c, b)
        })
    }
    v.F = function() {
        Tm.m.F.call(this);
        this.h.M();
        yh(this.ua);
        yh(this.qa);
        delete this.A;
        delete this.h;
        delete this.Pf
    }
    ;
    function Xm(a, b) {
        this.s = b || void 0;
        Tm.call(this, a)
    }
    G(Xm, Tm);
    Xm.prototype.ob = function() {
        if (this.s) {
            var a = !this.isVisible() && this.pc != Eb
              , b = this.j();
            a && (b.style.visibility = qb,
            Q(b, !0));
            this.s.b(b, 8, this.$e);
            a && Q(b, !1)
        }
    }
    ;
    function Ym(a, b) {
        Xm.call(this, a);
        this.c = b;
        this.a = 0;
        this.b = null;
        this.f = 0;
        this.I(!0);
        this.I(!1);
        M(this.j(), "round-trip-popup");
        M(this.c, "round-trip-content")
    }
    G(Ym, Xm);
    Ym.prototype.o = function() {
        tl(this.f);
        1 == this.a ? Vh(this.b, $a, C(this.o, this)) : 0 == this.a && (this.f = sl(C(this.l, this, -1), 200))
    }
    ;
    Ym.prototype.l = function(a) {
        if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
            var b = this.isVisible();
            this.I(!0);
            var c = -Math.ceil(eh(this.c).width);
            ih(this.j()) && (c = -c);
            var d = 1 == a ? c : 0;
            c = 1 == a ? 0 : c;
            this.I(b);
            if (Rm()) {
                b = .2;
                if (0 != this.a) {
                    var e = parseInt(Vg(this.c, "left"), 10);
                    this.g();
                    b *= (c - e) / (c - d);
                    d = e
                }
                this.a = a;
                this.b = new Sm(this.c,b,{
                    left: d + "px"
                },{
                    left: c + "px"
                },"left " + b + "s");
                this.b.play();
                Vh(this.b, $a, C(this.g, this));
                -1 == a ? Vh(this.b, $a, C(this.I, this, !1)) : this.I(!0)
            } else
                P(this.c, "left", c + "px"),
                this.I(1 == a ? !0 : !1)
        }
    }
    ;
    Ym.prototype.g = function() {
        0 != this.a && (this.b.stop(),
        sl(C(di, this, this.b)),
        this.a = 0,
        this.b = null)
    }
    ;
    function Zm(a) {
        sm(this, a, 4)
    }
    G(Zm, rm);
    function $m(a) {
        sm(this, a, 2)
    }
    G($m, rm);
    function an(a) {
        sm(this, a, 7)
    }
    G(an, rm);
    function bn(a, b) {
        return new Zm(xm(a, 2, b))
    }
    ;function cn(a) {
        sm(this, a, 19)
    }
    G(cn, rm);
    function dn(a, b) {
        return new an(xm(a, 5, b))
    }
    ;function en() {
        this.A = null;
        this.a = kg(g, "gt-hl-layer", document.createTextNode(""));
        this.b = null;
        this.A && (sg(this.a, this.A),
        fn(this))
    }
    function gn(a, b, c, d, e) {
        var f = d || "gt-hl-text";
        d = a.A && (a.A.value || Mg(a.A));
        fn(a);
        rg(a.a);
        if (b != c || e) {
            if (0 < b) {
                var h = d.substring(0, b);
                hn(a.a, h, 0, e)
            }
            b < c && (h = d.substring(b, c),
            f = kg(ua, f),
            hn(f, h, b, e),
            a.a.appendChild(f));
            c < d.length && (h = d.substring(c),
            hn(a.a, h, c, e))
        }
    }
    function fn(a) {
        var b = a.A;
        var c = O(b)
          , d = I && b.currentStyle;
        d && gg(Xf(c).a) && d.width != Ha && d.height != Ha && !d.boxSizing ? (c = qh(b, d.width, "width", "pixelWidth"),
        b = qh(b, d.height, "height", "pixelHeight"),
        b = new Wf(c,b)) : (d = lh(b),
        c = oh(b),
        b = ph(b),
        b = new Wf(d.width - b.left - c.left - c.right - b.right,d.height - b.top - c.top - c.bottom - b.bottom));
        mh(a.a, b);
        c = ch(a.A);
        b = a.a;
        d = c.x;
        c = c.y;
        var e = ch(b);
        d instanceof N && (c = d.y,
        d = d.x);
        Xg(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
        b = oh(a.A);
        P(a.a, Ib, b.left + "px");
        P(a.a, Jb, b.right + "px");
        a.a.dir = a.A.dir
    }
    function hn(a, b, c, d) {
        d = d || [];
        for (var e = 0, f; f = d[e]; e++)
            if (!(0 > f.Bc - c)) {
                if (f.Bc - c >= b.length)
                    break;
                if (0 < f.Bc - c) {
                    var h = b.substring(0, f.Bc - c);
                    jn(a, h)
                }
                var k = f.className || "gt-hl-text";
                h = b.substring(f.Bc - c, f.Bf - c);
                k = kg(ua, k);
                jn(k, h);
                a.appendChild(k);
                b = b.substring(f.Bf - c);
                c = f.Bf
            }
        b && jn(a, b)
    }
    function jn(a, b) {
        b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
        for (var c = 0, d = b.length; c < d; c++) {
            if (0 < c) {
                var e = kg("BR");
                a.appendChild(e)
            }
            a.appendChild(document.createTextNode(String(b[c])))
        }
    }
    ;function kn(a, b, c, d, e) {
        this.f = !!b;
        this.node = null;
        this.c = 0;
        this.o = !1;
        this.C = !c;
        a && ln(this, a, d);
        this.depth = void 0 != e ? e : this.c || 0;
        this.f && (this.depth *= -1)
    }
    G(kn, yj);
    function ln(a, b, c, d) {
        if (a.node = b)
            a.c = qc(c) ? c : 1 != a.node.nodeType ? 0 : a.f ? -1 : 1;
        qc(d) && (a.depth = d)
    }
    kn.prototype.g = function() {
        var a = this.f ? -1 : 1;
        this.c == a && (this.c = -1 * a,
        this.depth += this.c * (this.f ? -1 : 1))
    }
    ;
    kn.prototype.next = function() {
        if (this.o) {
            if (!this.node || this.C && 0 == this.depth)
                throw xj;
            var a = this.node;
            var b = this.f ? -1 : 1;
            if (this.c == b) {
                var c = this.f ? a.lastChild : a.firstChild;
                c ? ln(this, c) : ln(this, a, -1 * b)
            } else
                (c = this.f ? a.previousSibling : a.nextSibling) ? ln(this, c) : ln(this, a.parentNode, -1 * b);
            this.depth += this.c * (this.f ? -1 : 1)
        } else
            this.o = !0;
        a = this.node;
        if (!this.node)
            throw xj;
        return a
    }
    ;
    kn.prototype.splice = function(a) {
        var b = this.node
          , c = this.f ? 1 : -1;
        this.c == c && (this.c = -1 * c,
        this.depth += this.c * (this.f ? -1 : 1));
        this.f = !this.f;
        kn.prototype.next.call(this);
        this.f = !this.f;
        c = uc(arguments[0]) ? arguments[0] : arguments;
        for (var d = c.length - 1; 0 <= d; d--)
            tg(c[d], b);
        ug(b)
    }
    ;
    function mn() {}
    function nn(a) {
        if (a.getSelection)
            return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a)
                        return null
                } else if (!c.length || c.item(0).document != a)
                    return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    }
    function on(a) {
        for (var b = [], c = 0, d = a.Gc(); c < d; c++)
            b.push(a.Zb(c));
        return b
    }
    function pn(a) {
        return a.Ue() ? a.Ma() : a.eb()
    }
    mn.prototype.Ue = u(!1);
    function qn(a, b) {
        kn.call(this, a, b, !0)
    }
    G(qn, kn);
    function rn(a, b, c, d, e) {
        this.b = this.a = null;
        this.B = this.G = 0;
        this.h = !!e;
        if (a) {
            this.a = a;
            this.G = b;
            this.b = c;
            this.B = d;
            if (1 == a.nodeType && "BR" != a.tagName)
                if (a = a.childNodes,
                b = a[b])
                    this.a = b,
                    this.G = 0;
                else {
                    a.length && (this.a = Ic(a));
                    var f = !0
                }
            1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.B = 0 : this.b = c)
        }
        kn.call(this, this.h ? this.b : this.a, this.h, !0);
        if (f)
            try {
                this.next()
            } catch (h) {
                if (h != xj)
                    throw h;
            }
    }
    G(rn, qn);
    rn.prototype.s = t("a");
    rn.prototype.l = function() {
        return this.o && (this.node != (this.h ? this.a : this.b) ? !1 : this.h ? this.G ? -1 != this.c : 1 == this.c : !this.B || 1 != this.c)
    }
    ;
    rn.prototype.next = function() {
        if (this.l())
            throw xj;
        return rn.m.next.call(this)
    }
    ;
    rn.prototype.g = function() {
        rn.m.g.apply(this);
        if (zg(this.node, this.h ? this.a : this.b))
            throw xj;
    }
    ;
    function sn() {}
    function tn(a, b) {
        b = b.Cc();
        try {
            return 0 <= a.ab(b, 0, 0) && 0 >= a.ab(b, 1, 1)
        } catch (c) {
            if (!I)
                throw c;
            return !1
        }
    }
    sn.prototype.Ja = function() {
        return new rn(this.Sa(),this.nb(),this.mb(),this.vb())
    }
    ;
    function un(a) {
        this.a = a
    }
    G(un, sn);
    function vn(a) {
        var b = O(a).createRange();
        if (3 == a.nodeType)
            b.setStart(a, 0),
            b.setEnd(a, a.length);
        else if (wn(a)) {
            for (var c, d = a; (c = d.firstChild) && wn(c); )
                d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && wn(c); )
                d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else
            c = a.parentNode,
            a = Jc(c.childNodes, a),
            b.setStart(c, a),
            b.setEnd(c, a + 1);
        return b
    }
    function xn(a, b, c, d) {
        var e = O(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    }
    v = un.prototype;
    v.Cc = t("a");
    v.Ae = function() {
        return this.a.commonAncestorContainer
    }
    ;
    v.Sa = function() {
        return this.a.startContainer
    }
    ;
    v.nb = function() {
        return this.a.startOffset
    }
    ;
    v.mb = function() {
        return this.a.endContainer
    }
    ;
    v.vb = function() {
        return this.a.endOffset
    }
    ;
    v.ab = function(a, b, c) {
        return this.a.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.START_TO_END : 1 == b ? x.Range.END_TO_START : x.Range.END_TO_END, a)
    }
    ;
    v.Ta = function() {
        return this.a.collapsed
    }
    ;
    v.eg = function() {
        return this.a.toString()
    }
    ;
    v.select = function(a) {
        var b = jg(O(this.Sa()));
        this.Rc(b.getSelection(), a)
    }
    ;
    v.Rc = function(a) {
        a.removeAllRanges();
        a.addRange(this.a)
    }
    ;
    function yn(a) {
        this.a = a
    }
    G(yn, un);
    yn.prototype.Rc = function(a, b) {
        !b || this.Ta() ? yn.m.Rc.call(this, a, b) : (a.collapse(this.mb(), this.vb()),
        a.extend(this.Sa(), this.nb()))
    }
    ;
    function zn(a) {
        this.b = this.a = this.h = null;
        this.g = this.f = -1;
        this.c = a
    }
    G(zn, sn);
    function An(a) {
        var b = O(a).body.createTextRange();
        if (1 == a.nodeType)
            b.moveToElementText(a),
            wn(a) && !a.childNodes.length && b.collapse(!1);
        else {
            for (var c = 0, d = a; d = d.previousSibling; ) {
                var e = d.nodeType;
                if (3 == e)
                    c += d.length;
                else if (1 == e) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move(Pa, c);
            b.moveEnd(Pa, a.length)
        }
        return b
    }
    v = zn.prototype;
    v.Cc = t("c");
    v.Ae = function() {
        if (!this.h) {
            var a = this.c.text
              , b = this.c.duplicate()
              , c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd(Pa, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.Ta() && 0 < b)
                return this.h = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length; )
                c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == Bn(c.firstChild) && wn(c.firstChild); )
                c = c.firstChild;
            0 == a.length && (c = Cn(this, c));
            this.h = c
        }
        return this.h
    }
    ;
    function Cn(a, b) {
        for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            if (wn(f)) {
                var h = An(f)
                  , k = h.htmlText != f.outerHTML;
                if (a.Ta() && k ? 0 <= a.ab(h, 1, 1) && 0 >= a.ab(h, 1, 0) : a.c.inRange(h))
                    return Cn(a, f)
            }
        }
        return b
    }
    v.Sa = function() {
        this.a || (this.a = Dn(this, 1),
        this.Ta() && (this.b = this.a));
        return this.a
    }
    ;
    v.nb = function() {
        0 > this.f && (this.f = En(this, 1),
        this.Ta() && (this.g = this.f));
        return this.f
    }
    ;
    v.mb = function() {
        if (this.Ta())
            return this.Sa();
        this.b || (this.b = Dn(this, 0));
        return this.b
    }
    ;
    v.vb = function() {
        if (this.Ta())
            return this.nb();
        0 > this.g && (this.g = En(this, 0),
        this.Ta() && (this.f = this.g));
        return this.g
    }
    ;
    v.ab = function(a, b, c) {
        return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    }
    ;
    function Dn(a, b, c) {
        c = c || a.Ae();
        if (!c || !c.firstChild)
            return c;
        for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
            var h = d ? e : f - e - 1
              , k = c.childNodes[h];
            try {
                var l = Fn(k)
            } catch (n) {
                continue
            }
            var m = l.Cc();
            if (a.Ta())
                if (!wn(k)) {
                    if (0 == a.ab(m, 1, 1)) {
                        a.f = a.g = h;
                        break
                    }
                } else {
                    if (tn(l, a))
                        return Dn(a, b, k)
                }
            else {
                if (tn(a, l)) {
                    if (!wn(k)) {
                        d ? a.f = h : a.g = h + 1;
                        break
                    }
                    return Dn(a, b, k)
                }
                if (0 > a.ab(m, 1, 0) && 0 < a.ab(m, 0, 1))
                    return Dn(a, b, k)
            }
        }
        return c
    }
    function En(a, b) {
        var c = 1 == b
          , d = c ? a.Sa() : a.mb();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e = d.length, f = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += f) {
                var k = d[h];
                if (!wn(k) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Fn(k).Cc()))
                    return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        a = a.c.duplicate();
        b = An(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    }
    function Bn(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    }
    v.Ta = function() {
        return 0 == this.c.compareEndPoints("StartToEnd", this.c)
    }
    ;
    v.eg = function() {
        return this.c.text
    }
    ;
    v.select = function() {
        this.c.select()
    }
    ;
    function Gn(a) {
        this.a = a
    }
    G(Gn, un);
    Gn.prototype.Rc = function(a) {
        a.collapse(this.Sa(), this.nb());
        this.mb() == this.Sa() && this.vb() == this.nb() || a.extend(this.mb(), this.vb());
        0 == a.rangeCount && a.addRange(this.a)
    }
    ;
    function Hn(a) {
        this.a = a
    }
    G(Hn, un);
    Hn.prototype.ab = function(a, b, c) {
        return L("528") ? Hn.m.ab.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.END_TO_START : 1 == b ? x.Range.START_TO_END : x.Range.END_TO_END, a)
    }
    ;
    Hn.prototype.Rc = function(a, b) {
        b ? a.setBaseAndExtent(this.mb(), this.vb(), this.Sa(), this.nb()) : a.setBaseAndExtent(this.Sa(), this.nb(), this.mb(), this.vb())
    }
    ;
    function In(a) {
        return Tf ? new zn(a,O(a.parentElement())) : K ? new Hn(a) : J ? new yn(a) : Te ? new Gn(a) : new un(a)
    }
    function Fn(a) {
        if (I && !mf(9)) {
            var b = new zn(An(a),O(a));
            if (wn(a)) {
                for (var c, d = a; (c = d.firstChild) && wn(c); )
                    d = c;
                b.a = d;
                b.f = 0;
                for (d = a; (c = d.lastChild) && wn(c); )
                    d = c;
                b.b = d;
                b.g = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.h = a
            } else
                b.a = b.b = b.h = a.parentNode,
                b.f = Jc(b.h.childNodes, a),
                b.g = b.f + 1;
            a = b
        } else
            a = K ? new Hn(vn(a)) : J ? new yn(vn(a)) : Te ? new Gn(vn(a)) : new un(vn(a));
        return a
    }
    function wn(a) {
        return pg(a) || 3 == a.nodeType
    }
    ;function Jn() {
        this.c = this.b = this.g = this.a = this.h = null;
        this.f = !1
    }
    G(Jn, mn);
    function Kn(a, b) {
        var c = new Jn;
        c.h = a;
        c.f = !!b;
        return c
    }
    v = Jn.prototype;
    v.we = function() {
        return Ln(this).Cc()
    }
    ;
    v.Gc = u(1);
    v.Zb = function() {
        return this
    }
    ;
    function Ln(a) {
        var b;
        if (!(b = a.h)) {
            b = a.Ma();
            var c = a.Na()
              , d = a.eb()
              , e = a.fb();
            if (I && !mf(9)) {
                var f = b
                  , h = c
                  , k = d
                  , l = e
                  , m = !1;
                1 == f.nodeType && (h = f.childNodes[h],
                m = !h,
                f = h || f.lastChild || f,
                h = 0);
                var n = An(f);
                h && n.move(Pa, h);
                f == k && h == l ? n.collapse(!0) : (m && n.collapse(!1),
                m = !1,
                1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k,
                l = 0,
                m = !h),
                f = An(k),
                f.collapse(!m),
                l && f.moveEnd(Pa, l),
                n.setEndPoint("EndToEnd", f));
                l = new zn(n,O(b));
                l.a = b;
                l.f = c;
                l.b = d;
                l.g = e;
                b = l
            } else
                b = K ? new Hn(xn(b, c, d, e)) : J ? new yn(xn(b, c, d, e)) : Te ? new Gn(xn(b, c, d, e)) : new un(xn(b, c, d, e));
            b = a.h = b
        }
        return b
    }
    v.qd = function() {
        return Ln(this).Ae()
    }
    ;
    v.Ma = function() {
        return this.a || (this.a = Ln(this).Sa())
    }
    ;
    v.Na = function() {
        return null != this.g ? this.g : this.g = Ln(this).nb()
    }
    ;
    v.eb = function() {
        return this.b || (this.b = Ln(this).mb())
    }
    ;
    v.fb = function() {
        return null != this.c ? this.c : this.c = Ln(this).vb()
    }
    ;
    v.Ue = t("f");
    v.sd = function() {
        return Ln(this).Ta()
    }
    ;
    v.rd = function() {
        return Ln(this).eg()
    }
    ;
    v.Ja = function() {
        return new rn(this.Ma(),this.Na(),this.eb(),this.fb())
    }
    ;
    v.select = function() {
        Ln(this).select(this.f)
    }
    ;
    function Mn() {}
    G(Mn, mn);
    function Nn() {
        this.c = this.b = this.a = null
    }
    G(Nn, Mn);
    v = Nn.prototype;
    v.we = function() {
        return this.a || document.body.createControlRange()
    }
    ;
    v.Gc = function() {
        return this.a ? this.a.length : 0
    }
    ;
    v.Zb = function(a) {
        a = this.a.item(a);
        return Kn(Fn(a), void 0)
    }
    ;
    v.qd = function() {
        return Dg.apply(null, On(this))
    }
    ;
    v.Ma = function() {
        return Pn(this)[0]
    }
    ;
    v.Na = u(0);
    v.eb = function() {
        var a = Pn(this)
          , b = Ic(a);
        return Pc(a, function(c) {
            return zg(c, b)
        })
    }
    ;
    v.fb = function() {
        return this.eb().childNodes.length
    }
    ;
    function On(a) {
        if (!a.b && (a.b = [],
        a.a))
            for (var b = 0; b < a.a.length; b++)
                a.b.push(a.a.item(b));
        return a.b
    }
    function Pn(a) {
        a.c || (a.c = On(a).concat(),
        a.c.sort(function(b, c) {
            return b.sourceIndex - c.sourceIndex
        }));
        return a.c
    }
    v.sd = function() {
        return !this.a || !this.a.length
    }
    ;
    v.rd = u("");
    v.Ja = function() {
        return new Qn(this)
    }
    ;
    v.select = function() {
        this.a && this.a.select()
    }
    ;
    function Qn(a) {
        this.h = this.b = this.a = null;
        a && (this.h = Pn(a),
        this.a = this.h.shift(),
        this.b = Ic(this.h) || this.a);
        kn.call(this, this.a, !1, !0)
    }
    G(Qn, qn);
    Qn.prototype.s = t("a");
    Qn.prototype.l = function() {
        return !this.depth && !this.h.length
    }
    ;
    Qn.prototype.next = function() {
        if (this.l())
            throw xj;
        if (!this.depth) {
            var a = this.h.shift();
            ln(this, a, 1, 1);
            return a
        }
        return Qn.m.next.call(this)
    }
    ;
    function Rn() {
        this.va = null;
        this.a = [];
        this.f = [];
        this.c = this.b = null
    }
    G(Rn, Mn);
    v = Rn.prototype;
    v.we = function() {
        return this.a[0]
    }
    ;
    v.Gc = function() {
        return this.a.length
    }
    ;
    v.Zb = function(a) {
        this.f[a] || (this.f[a] = Kn(In(this.a[a]), void 0));
        return this.f[a]
    }
    ;
    v.qd = function() {
        if (!this.c) {
            for (var a = [], b = 0, c = this.Gc(); b < c; b++)
                a.push(this.Zb(b).qd());
            this.c = Dg.apply(null, a)
        }
        return this.c
    }
    ;
    function Sn(a) {
        a.b || (a.b = on(a),
        a.b.sort(function(b, c) {
            var d = b.Ma();
            b = b.Na();
            var e = c.Ma();
            c = c.Na();
            return d == e && b == c ? 0 : Tn(d, b, e, c) ? 1 : -1
        }));
        return a.b
    }
    v.Ma = function() {
        return Sn(this)[0].Ma()
    }
    ;
    v.Na = function() {
        return Sn(this)[0].Na()
    }
    ;
    v.eb = function() {
        return Ic(Sn(this)).eb()
    }
    ;
    v.fb = function() {
        return Ic(Sn(this)).fb()
    }
    ;
    v.sd = function() {
        return 0 == this.a.length || 1 == this.a.length && this.Zb(0).sd()
    }
    ;
    v.rd = function() {
        return Mc(on(this), function(a) {
            return a.rd()
        }).join("")
    }
    ;
    v.Ja = function() {
        return new Un(this)
    }
    ;
    v.select = function() {
        var a = nn(jg(O(I ? this.qd() : this.Ma())));
        a.removeAllRanges();
        for (var b = 0, c = this.Gc(); b < c; b++)
            a.addRange(this.Zb(b).we())
    }
    ;
    function Un(a) {
        this.a = null;
        this.b = 0;
        a && (this.a = Mc(Sn(a), function(b) {
            return zj(b)
        }));
        kn.call(this, a ? this.s() : null, !1, !0)
    }
    G(Un, qn);
    Un.prototype.s = function() {
        return this.a[0].s()
    }
    ;
    Un.prototype.l = function() {
        return this.a[this.b].l()
    }
    ;
    Un.prototype.next = function() {
        try {
            var a = this.a[this.b]
              , b = a.next();
            ln(this, a.node, a.c, a.depth);
            return b
        } catch (c) {
            if (c !== xj || this.a.length - 1 == this.b)
                throw c;
            this.b++;
            return this.next()
        }
    }
    ;
    function Vn() {
        var a = nn(window);
        return a && Wn(a)
    }
    function Wn(a) {
        var b = !1;
        if (a.createRange)
            try {
                var c = a.createRange()
            } catch (e) {
                return null
            }
        else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new Rn;
                c = 0;
                for (var d = a.rangeCount; c < d; c++)
                    b.a.push(a.getRangeAt(c));
                return b
            }
            c = a.getRangeAt(0);
            b = Tn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else
            return null;
        (a = c) && a.addElement ? (b = new Nn,
        b.a = a,
        a = b) : a = Kn(In(a), b);
        return a
    }
    function Tn(a, b, c, d) {
        if (a == c)
            return d < b;
        var e;
        if (1 == a.nodeType && b)
            if (e = a.childNodes[b])
                a = e,
                b = 0;
            else if (zg(a, c))
                return !0;
        if (1 == c.nodeType && d)
            if (e = c.childNodes[d])
                c = e,
                d = 0;
            else if (zg(c, a))
                return !1;
        return 0 < (Ag(a, c) || b - d)
    }
    ;function Xn() {
        var a = Vn();
        return null != a && !a.sd() && 0 < a.rd().length
    }
    ;function Yn() {
        this.b = []
    }
    G(Yn, Ei);
    tc(Yn);
    function Zn(a, b) {
        var c = a.b[b];
        if (!c) {
            switch (b) {
            case 0:
                c = a.da() + "-highlight";
                break;
            case 1:
                c = a.da() + "-checkbox";
                break;
            case 2:
                c = a.da() + "-content"
            }
            a.b[b] = c
        }
        return c
    }
    v = Yn.prototype;
    v.$b = u("menuitem");
    v.D = function(a) {
        var b = a.b.D(g, Hi(this, a).join(" "), $n(this, a.ea(), a.b));
        ao(this, a, b, !!(a.aa & 8) || !!(a.aa & 16));
        return b
    }
    ;
    v.zb = function(a) {
        return a && a.firstChild
    }
    ;
    v.Oa = function(a, b) {
        var c = wg(b)
          , d = Zn(this, 2);
        c && Lf(c, d) || b.appendChild($n(this, b.childNodes, a.b));
        Lf(b, kb) && (a.sa(16, !0),
        a && b && ao(this, a, b, !0));
        return Yn.m.Oa.call(this, a, b)
    }
    ;
    v.Ic = function(a, b) {
        var c = this.zb(a)
          , d = bo(this, a) ? c.firstChild : null;
        Yn.m.Ic.call(this, a, b);
        d && !bo(this, a) && c.insertBefore(d, c.firstChild || null)
    }
    ;
    function $n(a, b, c) {
        a = Zn(a, 2);
        return c.D(g, a, b)
    }
    function bo(a, b) {
        return (b = a.zb(b)) ? (b = b.firstChild,
        a = Zn(a, 1),
        !!b && yg(b) && Lf(b, a)) : !1
    }
    function ao(a, b, c, d) {
        Li(a, c, b.Fc());
        Ni(a, b, c);
        d != bo(a, c) && (d ? M(c, kb) : Nf(c, kb),
        c = a.zb(c),
        d ? (a = Zn(a, 1),
        c.insertBefore(b.b.D(g, a), c.firstChild || null)) : c.removeChild(c.firstChild))
    }
    v.Dc = function(a) {
        switch (a) {
        case 2:
            return Zn(this, 0);
        case 16:
        case 8:
            return lb;
        default:
            return Yn.m.Dc.call(this, a)
        }
    }
    ;
    v.od = function(a) {
        var b = Zn(this, 0);
        switch (a) {
        case lb:
            return 16;
        case b:
            return 2;
        default:
            return Yn.m.od.call(this, a)
        }
    }
    ;
    v.da = u("goog-menuitem");
    function co(a, b, c, d) {
        W.call(this, a, d || Yn.X(), c);
        this.ya(b)
    }
    G(co, W);
    v = co.prototype;
    v.Aa = function() {
        var a = this.ra;
        return null != a ? a : this.bb()
    }
    ;
    v.ya = gc("ra");
    v.sa = function(a, b) {
        co.m.sa.call(this, a, b);
        switch (a) {
        case 8:
            this.V & 16 && !b && ij(this, 16, !1) && lj(this, 16, !1);
            (a = this.j()) && this && a && ao(this.a, this, a, b);
            break;
        case 16:
            (a = this.j()) && this && a && ao(this.a, this, a, b)
        }
    }
    ;
    v.bb = function() {
        var a = this.ea();
        return B(a) ? (a = Mc(a, function(b) {
            return yg(b) && (Lf(b, "goog-menuitem-accel") || Lf(b, "goog-menuitem-mnemonic-separator")) ? "" : Og(b)
        }).join(""),
        Ce(a)) : co.m.bb.call(this)
    }
    ;
    v.dc = function(a) {
        var b = this.wb();
        if (b) {
            var c = b.J;
            b.J = null;
            if (b = c && qc(a.clientX))
                b = new N(a.clientX,a.clientY),
                b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b)
                return
        }
        co.m.dc.call(this, a)
    }
    ;
    v.Kc = function(a) {
        return a.keyCode == this.Hg && this.mc(a) ? !0 : co.m.Kc.call(this, a)
    }
    ;
    v.Sh = t("Hg");
    cj("goog-menuitem", function() {
        return new co(null)
    });
    co.prototype.Fc = function() {
        return this.aa & 16 ? "menuitemcheckbox" : this.aa & 8 ? "menuitemradio" : co.m.Fc.call(this)
    }
    ;
    co.prototype.wb = function() {
        return W.prototype.wb.call(this)
    }
    ;
    co.prototype.md = function() {
        return W.prototype.md.call(this)
    }
    ;
    function eo(a) {
        this.a = a
    }
    tc(eo);
    function fo(a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    }
    v = eo.prototype;
    v.D = function(a) {
        return a.b.D(g, go(this, a).join(" "))
    }
    ;
    v.Ce = function(a) {
        return a.tagName == g
    }
    ;
    function ho(a, b, c) {
        c.id && ti(b, c.id);
        var d = a.ud()
          , e = !1
          , f = Kf(c);
        f && Kc(f, function(h) {
            h == d ? e = !0 : h && (h == d + ba ? b.ka(!1) : h == d + "-horizontal" ? io(b, sb) : h == d + "-vertical" && io(b, cc))
        }, a);
        e || M(c, d);
        jo(a, b, c);
        return c
    }
    function jo(a, b, c) {
        if (c)
            for (var d = c.firstChild, e; d && d.parentNode == c; ) {
                e = d.nextSibling;
                if (1 == d.nodeType) {
                    var f = a.xe(d);
                    f && (f.A = d,
                    b.isEnabled() || f.ka(!1),
                    b.rc(f),
                    yi(f, d))
                } else
                    d.nodeValue && "" != ud(d.nodeValue) || c.removeChild(d);
                d = e
            }
    }
    v.xe = function(a) {
        a: {
            a = Kf(a);
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                if (d = d in dj ? dj[d]() : null) {
                    a = d;
                    break a
                }
            }
            a = null
        }
        return a
    }
    ;
    v.De = function(a) {
        a = a.j();
        kh(a, !0, J);
        I && (a.hideFocus = !0);
        var b = this.a;
        b && vh(a, b)
    }
    ;
    v.ud = u("goog-container");
    function go(a, b) {
        a = a.ud();
        var c = [a, b.Sb == sb ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + ba);
        return c
    }
    ;function ko() {}
    G(ko, Ei);
    tc(ko);
    ko.prototype.D = function(a) {
        return a.b.D(g, this.da())
    }
    ;
    ko.prototype.Oa = function(a, b) {
        b.id && ti(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.D(a);
            sg(b, c);
            ug(c)
        } else
            M(b, this.da());
        return b
    }
    ;
    ko.prototype.Ic = fc();
    ko.prototype.da = u(jb);
    function lo(a, b) {
        W.call(this, null, a || ko.X(), b);
        this.sa(1, !1);
        this.sa(2, !1);
        this.sa(4, !1);
        this.sa(32, !1);
        this.V = 1
    }
    G(lo, W);
    lo.prototype.O = function() {
        lo.m.O.call(this);
        vh(this.j(), "separator")
    }
    ;
    cj(jb, function() {
        return new lo
    });
    function mo(a) {
        this.a = a || "menu"
    }
    G(mo, eo);
    tc(mo);
    v = mo.prototype;
    v.Ce = function(a) {
        return "UL" == a.tagName || mo.m.Ce.call(this, a)
    }
    ;
    v.xe = function(a) {
        return "HR" == a.tagName ? new lo : mo.m.xe.call(this, a)
    }
    ;
    v.xc = function(a, b) {
        return zg(a.j(), b)
    }
    ;
    v.ud = u("goog-menu");
    v.De = function(a) {
        mo.m.De.call(this, a);
        wh(a.j(), "haspopup", "true")
    }
    ;
    function no(a, b, c) {
        this.c = a;
        this.f = b;
        this.s = c
    }
    G(no, Cl);
    no.prototype.b = function(a, b, c) {
        yl(this.c, this.f, a, b, void 0, c, this.s)
    }
    ;
    function oo(a, b, c, d) {
        no.call(this, a, b);
        this.l = c ? 5 : 0;
        this.g = d || void 0
    }
    G(oo, no);
    oo.prototype.h = gc("l");
    oo.prototype.b = function(a, b, c) {
        var d = yl(this.c, this.f, a, b, null, c, 10, void 0, this.g);
        if (d & 496) {
            var e = po(d, this.f);
            b = po(d, b);
            d = yl(this.c, e, a, b, null, c, 10, void 0, this.g);
            d & 496 && (e = po(d, e),
            b = po(d, b),
            yl(this.c, e, a, b, null, c, this.l, void 0, this.g))
        }
    }
    ;
    function po(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    }
    ;function qo(a, b) {
        this.a = a instanceof N ? a : new N(a,b)
    }
    G(qo, Cl);
    qo.prototype.b = function(a, b, c) {
        var d = O(a);
        var e = d.body;
        d = d.documentElement;
        d = new N(e.scrollLeft || d.scrollLeft,e.scrollTop || d.scrollTop);
        e = this.a.x + d.x;
        d = this.a.y + d.y;
        var f = zl(a);
        e -= f.x;
        d -= f.y;
        Bl(new N(e,d), a, b, c, null, null, void 0)
    }
    ;
    function ro(a, b) {
        qo.call(this, a, b)
    }
    G(ro, qo);
    ro.prototype.c = 0;
    ro.prototype.h = gc("c");
    ro.prototype.b = function(a, b, c) {
        var d = Zg(a);
        d = bh(d);
        var e = ig(Xf(a).a);
        e = new N(this.a.x + e.scrollLeft,this.a.y + e.scrollTop);
        var f = b
          , h = Bl(e, a, f, c, d, 10, void 0);
        if (0 != (h & 496)) {
            if (h & 16 || h & 32)
                f ^= 4;
            if (h & 64 || h & 128)
                f ^= 1;
            h = Bl(e, a, f, c, d, 10, void 0);
            0 != (h & 496) && Bl(e, a, b, c, d, this.c, void 0)
        }
    }
    ;
    function so(a, b, c) {
        T.call(this, c);
        this.yb = b || eo.X();
        this.Sb = a || cc
    }
    G(so, T);
    v = so.prototype;
    v.ic = null;
    v.Hc = null;
    v.yb = null;
    v.Sb = null;
    v.ga = !0;
    v.xb = !0;
    v.Jb = !0;
    v.ha = -1;
    v.pa = null;
    v.jc = !1;
    v.lb = null;
    function to(a) {
        return a.ic || a.j()
    }
    function uo(a, b) {
        if (a.Jb) {
            var c = to(a)
              , d = a.U;
            a.ic = b;
            var e = to(a);
            d && (a.ic = c,
            vo(a, !1),
            a.ic = b,
            Wi(wo(a), e),
            vo(a, !0))
        } else
            throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    }
    function wo(a) {
        return a.Hc || (a.Hc = new Vi(to(a)))
    }
    v.D = function() {
        this.A = this.yb.D(this)
    }
    ;
    v.td = function() {
        return this.j()
    }
    ;
    v.Be = function(a) {
        return this.yb.Ce(a)
    }
    ;
    v.S = function(a) {
        this.A = ho(this.yb, this, a);
        a.style.display == q && (this.ga = !1)
    }
    ;
    v.O = function() {
        so.m.O.call(this);
        zi(this, function(b) {
            b.U && xo(this, b)
        }, this);
        var a = this.j();
        this.yb.De(this);
        this.I(this.ga, !0);
        U(this).w(this, "enter", this.Le).w(this, "highlight", this.Oc).w(this, "unhighlight", this.Pe).w(this, "open", this.oi).w(this, "close", this.ci).w(a, Eh.Wb, this.Uh).w(O(a), [Eh.Xb, Eh.qc], this.ei).w(a, [Eh.Wb, Eh.Xb, Eh.qc, Db, Cb, Wa], this.ai);
        this.Jb && vo(this, !0)
    }
    ;
    function vo(a, b) {
        var c = U(a)
          , d = to(a);
        b ? c.w(d, cb, a.fg).w(d, Ka, a.vd).w(wo(a), "key", a.Ga) : c.ba(d, cb, a.fg).ba(d, Ka, a.vd).ba(wo(a), "key", a.Ga)
    }
    v.Z = function() {
        this.Cb(-1);
        this.pa && mj(this.pa, !1);
        this.jc = !1;
        so.m.Z.call(this)
    }
    ;
    v.F = function() {
        so.m.F.call(this);
        this.Hc && (this.Hc.M(),
        this.Hc = null);
        this.yb = this.pa = this.lb = this.ic = null
    }
    ;
    v.Le = u(!0);
    v.Oc = function(a) {
        var b = Di(this, a.target);
        if (-1 < b && b != this.ha) {
            var c = yo(this);
            c && kj(c, !1);
            this.ha = b;
            c = yo(this);
            this.jc && jj(c, !0);
            this.pa && c != this.pa && (c.aa & 64 ? mj(c, !0) : mj(this.pa, !1))
        }
        b = this.j();
        null != a.target.j() && wh(b, Da, a.target.j().id)
    }
    ;
    v.Pe = function(a) {
        a.target == yo(this) && (this.ha = -1);
        this.j().removeAttribute("aria-activedescendant")
    }
    ;
    v.oi = function(a) {
        (a = a.target) && a != this.pa && a.wb() == this && (this.pa && mj(this.pa, !1),
        this.pa = a)
    }
    ;
    v.ci = function(a) {
        a.target == this.pa && (this.pa = null);
        var b = this.j()
          , c = a.target.j();
        b && a.target.V & 2 && c && (a = "",
        c && (a = c.id),
        wh(b, Da, a))
    }
    ;
    v.Uh = function(a) {
        this.xb && (this.jc = !0);
        var b = to(this);
        b && Kg(b) && Lg(b) ? b.focus() : a.b()
    }
    ;
    v.ei = function() {
        this.jc = !1
    }
    ;
    v.ai = function(a) {
        a: {
            var b = a.target;
            if (this.lb)
                for (var c = this.j(); b && b !== c; ) {
                    var d = b.id;
                    if (d in this.lb) {
                        b = this.lb[d];
                        break a
                    }
                    b = b.parentNode
                }
            b = null
        }
        if (b)
            switch (a.type) {
            case Eh.Wb:
                b.Lc(a);
                break;
            case Eh.Xb:
            case Eh.qc:
                b.dc(a);
                break;
            case Db:
                b.He(a);
                break;
            case Cb:
                b.Oe(a);
                break;
            case Wa:
                b.Nc(a)
            }
    }
    ;
    v.fg = fc();
    v.vd = function() {
        this.Cb(-1);
        this.jc = !1;
        this.pa && mj(this.pa, !1)
    }
    ;
    v.Ga = function(a) {
        return this.isEnabled() && this.isVisible() && (0 != Ai(this) || this.ic) && this.Ee(a) ? (a.b(),
        a.stopPropagation(),
        !0) : !1
    }
    ;
    v.Ee = function(a) {
        var b = yo(this);
        if (b && typeof b.Ga == p && b.Ga(a) || this.pa && this.pa != b && typeof this.pa.Ga == p && this.pa.Ga(a))
            return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
            return !1;
        switch (a.keyCode) {
        case 27:
            if (this.Jb)
                to(this).blur();
            else
                return !1;
            break;
        case 36:
            zo(this);
            break;
        case 35:
            Ao(this);
            break;
        case 38:
            if (this.Sb == cc)
                Bo(this);
            else
                return !1;
            break;
        case 37:
            if (this.Sb == sb)
                Ci(this) ? Co(this) : Bo(this);
            else
                return !1;
            break;
        case 40:
            if (this.Sb == cc)
                Co(this);
            else
                return !1;
            break;
        case 39:
            if (this.Sb == sb)
                Ci(this) ? Bo(this) : Co(this);
            else
                return !1;
            break;
        default:
            return !1
        }
        return !0
    }
    ;
    function xo(a, b) {
        var c = b.j();
        c = c.id || (c.id = si(b));
        a.lb || (a.lb = {});
        a.lb[c] = b
    }
    v.rc = function(a, b) {
        so.m.rc.call(this, a, b)
    }
    ;
    v.he = function(a, b, c) {
        a.Uc |= 2;
        a.Uc |= 64;
        a.sa(32, !1);
        fj(a, !1);
        var d = a.wb() == this ? Di(this, a) : -1;
        so.m.he.call(this, a, b, c);
        a.U && this.U && xo(this, a);
        a = d;
        -1 == a && (a = Ai(this));
        a == this.ha ? this.ha = Math.min(Ai(this) - 1, b) : a > this.ha && b <= this.ha ? this.ha++ : a < this.ha && b > this.ha && this.ha--
    }
    ;
    v.removeChild = function(a, b) {
        if (a = y(a) ? wi(this, a) : a) {
            var c = Di(this, a);
            -1 != c && (c == this.ha ? (kj(a, !1),
            this.ha = -1) : c < this.ha && this.ha--);
            var d = a.j();
            d && d.id && this.lb && (c = this.lb,
            d = d.id,
            d in c && delete c[d])
        }
        a = so.m.removeChild.call(this, a, b);
        fj(a, !0);
        return a
    }
    ;
    function io(a, b) {
        if (a.j())
            throw Error(ka);
        a.Sb = b
    }
    v.isVisible = t("ga");
    v.I = function(a, b) {
        if (b || this.ga != a && this.dispatchEvent(a ? "show" : rb)) {
            this.ga = a;
            var c = this.j();
            c && (Q(c, a),
            this.Jb && fo(to(this), this.xb && this.ga),
            b || this.dispatchEvent(this.ga ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    }
    ;
    v.isEnabled = t("xb");
    v.ka = function(a) {
        this.xb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.xb = !0,
        zi(this, function(b) {
            b.kh ? delete b.kh : b.ka(!0)
        })) : (zi(this, function(b) {
            b.isEnabled() ? b.ka(!1) : b.kh = !0
        }),
        this.jc = this.xb = !1),
        this.Jb && fo(to(this), a && this.ga))
    }
    ;
    function Do(a, b) {
        b != a.Jb && a.U && vo(a, b);
        a.Jb = b;
        a.xb && a.ga && fo(to(a), b)
    }
    v.Cb = function(a) {
        (a = Bi(this, a)) ? kj(a, !0) : -1 < this.ha && kj(yo(this), !1)
    }
    ;
    function yo(a) {
        return Bi(a, a.ha)
    }
    function zo(a) {
        Eo(a, function(b, c) {
            return (b + 1) % c
        }, Ai(a) - 1)
    }
    function Ao(a) {
        Eo(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, 0)
    }
    function Co(a) {
        Eo(a, function(b, c) {
            return (b + 1) % c
        }, a.ha)
    }
    function Bo(a) {
        Eo(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, a.ha)
    }
    function Eo(a, b, c) {
        c = 0 > c ? Di(a, a.pa) : c;
        var d = Ai(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d; ) {
            var f = Bi(a, c);
            if (f && a.Qf(f)) {
                a.Cb(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    }
    v.Qf = function(a) {
        return a.isVisible() && a.isEnabled() && !!(a.aa & 2)
    }
    ;
    function Fo() {}
    G(Fo, Ei);
    tc(Fo);
    Fo.prototype.da = u(ib);
    function Go(a, b, c) {
        W.call(this, a, c || Fo.X(), b);
        this.sa(1, !1);
        this.sa(2, !1);
        this.sa(4, !1);
        this.sa(32, !1);
        this.V = 1
    }
    G(Go, W);
    cj(ib, function() {
        return new Go(null)
    });
    cj(jb, function() {
        return new lo
    });
    function Ho(a, b) {
        so.call(this, cc, b || mo.X(), a);
        Do(this, !1)
    }
    G(Ho, so);
    v = Ho.prototype;
    v.ie = !0;
    v.xc = function(a) {
        if (this.yb.xc(this, a))
            return !0;
        for (var b = 0, c = Ai(this); b < c; b++) {
            var d = Bi(this, b);
            if (typeof d.xc == p && d.xc(a))
                return !0
        }
        return !1
    }
    ;
    v.I = function(a, b, c) {
        (b = Ho.m.I.call(this, a, b)) && a && this.U && this.ie && to(this).focus();
        a && c && qc(c.clientX) ? this.J = new N(c.clientX,c.clientY) : this.J = null;
        return b
    }
    ;
    v.Le = function(a) {
        this.ie && to(this).focus();
        return Ho.m.Le.call(this, a)
    }
    ;
    v.Qf = function(a) {
        return a.isEnabled() && a.isVisible() && !!(a.aa & 2)
    }
    ;
    v.S = function(a) {
        for (var b = this.yb, c = bg(this.b.a, g, b.ud() + "-content", a), d = c.length, e = 0; e < d; e++)
            jo(b, this, c[e]);
        Ho.m.S.call(this, a)
    }
    ;
    v.Ee = function(a) {
        var b = Ho.m.Ee.call(this, a);
        b || zi(this, function(c) {
            !b && c.Sh && c.Hg == a.keyCode && (this.isEnabled() && this.Cb(Di(this, c)),
            b = c.Ga(a))
        }, this);
        return b
    }
    ;
    v.Cb = function(a) {
        Ho.m.Cb.call(this, a);
        var b = Bi(this, a);
        if (b) {
            a = this.j() || ig(document);
            var c = b.j();
            b = a || ig(document);
            var d = ch(c)
              , e = ch(b)
              , f = ph(b);
            if (b == ig(document)) {
                var h = d.x - b.scrollLeft;
                d = d.y - b.scrollTop;
                I && !mf(10) && (h += f.left,
                d += f.top)
            } else
                h = d.x - e.x - f.left,
                d = d.y - e.y - f.top;
            c = fh(c);
            f = b.clientHeight - c.height;
            e = b.scrollLeft;
            var k = b.scrollTop;
            e += Math.min(h, Math.max(h - (b.clientWidth - c.width), 0));
            k += Math.min(d, Math.max(d - f, 0));
            b = new N(e,k);
            a.scrollLeft = b.x;
            a.scrollTop = b.y
        }
    }
    ;
    function Io(a, b) {
        Ho.call(this, a, b);
        this.ie = !0;
        Do(this, !0);
        this.I(!1, !0);
        this.a = new Bj
    }
    G(Io, Ho);
    v = Io.prototype;
    v.ih = !1;
    v.Bg = 0;
    v.Ca = null;
    v.S = function(a) {
        Io.m.S.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && Jo(this, this.b.j(a), 1)
    }
    ;
    v.O = function() {
        Io.m.O.call(this);
        this.a.forEach(this.ad, this);
        var a = U(this);
        a.w(this, Ca, this.ef);
        a.w(this.b.a, Ab, this.Xi, !0)
    }
    ;
    function Jo(a, b, c, d, e, f) {
        b && Dj(a.a, xc(b)) || (c = a.pe(b, c, d, e, f),
        a.U && a.ad(c),
        b = Cc(a.Yi, b),
        a.j() && U(a).w(a.j(), xb, b))
    }
    v.Yi = function(a, b) {
        if (27 == b.keyCode)
            a.focus();
        else if (a = Bi(this, this.ha)) {
            a = a.j();
            var c = new Fh(b.a,a);
            c.target = a;
            if (32 == b.keyCode || 13 == b.keyCode)
                Kh(a) ? oi(a, xb, !1, c) : ei(a, xb, !1, c);
            32 == b.keyCode && this.pb()
        }
    }
    ;
    v.pe = function(a, b, c, d, e) {
        if (!a)
            return null;
        b = {
            A: a,
            bh: b,
            Ui: c,
            Ac: d ? Wa : Ab,
            $e: e
        };
        this.a.set(xc(a), b);
        return b
    }
    ;
    v.ad = function(a) {
        U(this).w(a.A, a.Ac, this.Ud);
        a.Ac != Wa && U(this).w(a.A, xb, this.aj)
    }
    ;
    v.gd = function() {
        if (this.U)
            for (var a = this.a.Ra(), b = 0; b < a.length; b++)
                this.re(this.a.get(a[b]));
        Fj(this.a)
    }
    ;
    v.re = function(a) {
        U(this).ba(a.A, a.Ac, this.Ud)
    }
    ;
    v.yd = function(a, b, c) {
        b = pc(a.bh) ? new oo(a.A,a.bh,!0) : new ro(b,c);
        b.h && b.h(5);
        var d = a.Ui;
        c = a.$e;
        var e = a.A;
        a = this.isVisible();
        var f;
        (f = this.isVisible()) || (f = 150 > D() - this.Bg);
        f && this.ih ? this.pb() : (this.Ca = e || null,
        this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8,
        a || (this.j().style.visibility = qb),
        Q(this.j(), !0),
        b.b(this.j(), d, c),
        a || (this.j().style.visibility = dc),
        this.Cb(-1),
        this.I(!0)))
    }
    ;
    v.pb = function() {
        this.isVisible() && (this.I(!1),
        this.isVisible() || (this.Bg = D(),
        this.Ca = null))
    }
    ;
    v.ef = function() {
        this.pb()
    }
    ;
    v.Ud = function(a) {
        Ko(this, a)
    }
    ;
    v.aj = function(a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Ko(this, a);
        40 == a.keyCode && zo(this)
    }
    ;
    function Ko(a, b) {
        for (var c = a.a.Ra(), d = 0; d < c.length; d++) {
            var e = a.a.get(c[d]);
            if (e.A == b.currentTarget) {
                a.yd(e, b.clientX, b.clientY);
                b.b();
                b.stopPropagation();
                break
            }
        }
    }
    v.Xi = function(a) {
        this.isVisible() && !this.xc(a.target) && this.pb()
    }
    ;
    v.vd = function(a) {
        Io.m.vd.call(this, a);
        this.pb()
    }
    ;
    v.F = function() {
        Io.m.F.call(this);
        this.a && (Fj(this.a),
        delete this.a)
    }
    ;
    function Lo(a) {
        ni.call(this);
        this.A = a;
        a = I ? eb : Ka;
        this.a = S(this.A, I ? db : cb, this, !I);
        this.b = S(this.A, a, this, !I)
    }
    G(Lo, ni);
    Lo.prototype.handleEvent = function(a) {
        var b = new Fh(a.a);
        b.type = a.type == db || a.type == cb ? db : eb;
        this.dispatchEvent(b)
    }
    ;
    Lo.prototype.F = function() {
        Lo.m.F.call(this);
        ci(this.a);
        ci(this.b);
        delete this.A
    }
    ;
    function Mo(a, b) {
        this.a = a instanceof N ? a : new N(a,b)
    }
    G(Mo, Cl);
    Mo.prototype.b = function(a, b, c) {
        yl(Zg(a), 0, a, b, this.a, c, null, void 0)
    }
    ;
    function No() {
        this.a = new Bj
    }
    function Oo(a) {
        var b = typeof a;
        return b == Gb && a || b == p ? "o" + xc(a) : b.substr(0, 1) + a
    }
    v = No.prototype;
    v.add = function(a) {
        this.a.set(Oo(a), a)
    }
    ;
    v.remove = function(a) {
        return this.a.remove(Oo(a))
    }
    ;
    v.contains = function(a) {
        return Dj(this.a, Oo(a))
    }
    ;
    v.Da = function() {
        return this.a.Da()
    }
    ;
    v.Ja = function() {
        return this.a.Ja(!1)
    }
    ;
    function Po(a, b, c) {
        this.ca = c || (a ? Xf(Zf(document, a)) : Xf());
        Xm.call(this, this.ca.D(g, {
            style: "position:absolute;display:none;"
        }));
        this.Gb = new N(1,1);
        this.B = new No;
        this.G = null;
        a && Qo(this, a);
        null != b && this.Pa(b)
    }
    G(Po, Xm);
    var Ro = [];
    v = Po.prototype;
    v.za = null;
    v.className = "goog-tooltip";
    v.Zg = 500;
    v.yg = 0;
    function Qo(a, b) {
        b = Zf(document, b);
        a.B.add(b);
        S(b, Db, a.Je, !1, a);
        S(b, Cb, a.cc, !1, a);
        S(b, Bb, a.pg, !1, a);
        S(b, cb, a.ig, !1, a);
        S(b, Ka, a.cc, !1, a)
    }
    function So(a, b) {
        if (b)
            b = Zf(document, b),
            To(a, b),
            a.B.remove(b);
        else {
            for (var c = a.B.Da(), d = 0; b = c[d]; d++)
                To(a, b);
            Fj(a.B.a)
        }
    }
    function To(a, b) {
        bi(b, Db, a.Je, !1, a);
        bi(b, Cb, a.cc, !1, a);
        bi(b, Bb, a.pg, !1, a);
        bi(b, cb, a.ig, !1, a);
        bi(b, Ka, a.cc, !1, a)
    }
    v.Pa = function(a) {
        Gg(this.j(), a)
    }
    ;
    v.bc = function(a) {
        var b = this.j();
        b && ug(b);
        Po.m.bc.call(this, a);
        a ? (b = this.ca.a.body,
        b.insertBefore(a, b.lastChild),
        yh(this.G),
        this.G = new Lo(this.j()),
        xh(this, Cc(yh, this.G)),
        S(this.G, db, this.Yb, void 0, this),
        S(this.G, eb, this.Yd, void 0, this)) : (yh(this.G),
        this.G = null)
    }
    ;
    v.Mc = function() {
        return Mg(this.j())
    }
    ;
    function Uo(a) {
        return a.L ? a.isVisible() ? 4 : 1 : a.la ? 3 : a.isVisible() ? 2 : 0
    }
    v.Ie = function() {
        if (!Tm.prototype.Ie.call(this))
            return !1;
        if (this.b)
            for (var a, b = 0; a = Ro[b]; b++)
                zg(a.j(), this.b) || a.I(!1);
        Qc(Ro, this) || Ro.push(this);
        a = this.j();
        a.className = this.className;
        this.Yb();
        S(a, Db, this.Gd, !1, this);
        S(a, Cb, this.Fd, !1, this);
        Vo(this);
        return !0
    }
    ;
    v.hf = function() {
        Rc(Ro, this);
        for (var a = this.j(), b, c = 0; b = Ro[c]; c++)
            b.b && zg(a, b.b) && b.I(!1);
        this.Zc && this.Zc.Yd();
        bi(a, Db, this.Gd, !1, this);
        bi(a, Cb, this.Fd, !1, this);
        this.b = void 0;
        0 == Uo(this) && (this.Ia = !1);
        Tm.prototype.hf.call(this)
    }
    ;
    v.cf = function(a, b) {
        this.b == a && this.B.contains(this.b) && (this.Ia || !this.Mf ? (this.I(!1),
        this.isVisible() || (this.b = a,
        this.s = b || new Wo(Uf(this.Gb)),
        this.isVisible() && this.ob(),
        this.I(!0))) : this.b = void 0);
        this.L = void 0
    }
    ;
    v.Ti = function(a) {
        this.la = void 0;
        if (a == this.b) {
            a = this.ca;
            var b = a.a;
            try {
                var c = b && b.activeElement;
                var d = c && c.nodeName ? c : null
            } catch (e) {
                d = null
            }
            d = d && this.j() && a.contains(this.j(), d);
            null != this.za && (this.za == this.j() || this.B.contains(this.za)) || d || this.Yc && this.Yc.za || this.I(!1)
        }
    }
    ;
    function Xo(a, b) {
        var c = hg(a.ca.a);
        a.Gb.x = b.clientX + c.x;
        a.Gb.y = b.clientY + c.y
    }
    v.Je = function(a) {
        var b = Yo(this, a.target);
        this.za = b;
        this.Yb();
        b != this.b && (this.b = b,
        Zo(this, b),
        $o(this),
        Xo(this, a))
    }
    ;
    function Yo(a, b) {
        try {
            for (; b && !a.B.contains(b); )
                b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    }
    v.pg = function(a) {
        Xo(this, a);
        this.Ia = !0
    }
    ;
    v.ig = function(a) {
        this.za = a = Yo(this, a.target);
        this.Ia = !0;
        if (this.b != a) {
            this.b = a;
            var b = new ap(this.za);
            this.Yb();
            Zo(this, a, b);
            $o(this)
        }
    }
    ;
    function $o(a) {
        if (a.b)
            for (var b, c = 0; b = Ro[c]; c++)
                zg(b.j(), a.b) && (b.Yc = a,
                a.Zc = b)
    }
    v.cc = function(a) {
        var b = Yo(this, a.target)
          , c = Yo(this, a.relatedTarget);
        b != c && (b == this.za && (this.za = null),
        Vo(this),
        this.Ia = !1,
        !this.isVisible() || a.relatedTarget && zg(this.j(), a.relatedTarget) ? this.b = void 0 : this.Yd())
    }
    ;
    v.Gd = function() {
        var a = this.j();
        this.za != a && (this.Yb(),
        this.za = a)
    }
    ;
    v.Fd = function(a) {
        var b = this.j();
        this.za != b || a.relatedTarget && zg(b, a.relatedTarget) || (this.za = null,
        this.Yd())
    }
    ;
    function Zo(a, b, c) {
        a.L || (a.L = sl(C(a.cf, a, b, c), a.Zg))
    }
    function Vo(a) {
        a.L && (tl(a.L),
        a.L = void 0)
    }
    v.Yd = function() {
        2 == Uo(this) && (this.la = sl(C(this.Ti, this, this.b), this.yg))
    }
    ;
    v.Yb = function() {
        this.la && (tl(this.la),
        this.la = void 0)
    }
    ;
    v.F = function() {
        this.I(!1);
        Vo(this);
        So(this);
        this.j() && ug(this.j());
        this.za = null;
        delete this.ca;
        Po.m.F.call(this)
    }
    ;
    function Wo(a, b) {
        Mo.call(this, a, b)
    }
    G(Wo, Mo);
    Wo.prototype.b = function(a, b, c) {
        b = Zg(a);
        b = bh(b);
        c = c ? new Rg(c.top + 10,c.right,c.bottom,c.left + 10) : new Rg(10,0,0,10);
        Bl(this.a, a, 8, c, b, 9) & 496 && Bl(this.a, a, 8, c, b, 5)
    }
    ;
    function ap(a) {
        no.call(this, a, 5)
    }
    G(ap, no);
    ap.prototype.b = function(a, b, c) {
        var d = new N(10,0);
        yl(this.c, this.f, a, b, d, c, 9) & 496 && yl(this.c, 4, a, 1, d, c, 5)
    }
    ;
    function bp(a, b, c) {
        Io.call(this, b, c);
        this.h = new Bj;
        this.f = a || 5;
        this.l = null;
        this.o = !1;
        this.g = Array(this.f);
        this.H = Array(this.f);
        this.C = Vl.X();
        this.va = zm.X();
        this.L = null;
        this.ih = !0
    }
    G(bp, Io);
    var cp = "";
    v = bp.prototype;
    v.D = function() {
        bp.m.D.call(this);
        for (var a = 0; a < this.f; ++a)
            this.rc(new co(""), !0)
    }
    ;
    v.fa = function(a) {
        bp.m.fa.call(this, a);
        M(this.j(), "alt-menu")
    }
    ;
    v.wf = function(a) {
        a = this.h.get(xc(a));
        for (var b = 0; b < Y(a, 2) && b < this.f; ++b) {
            var c = Bi(this, b);
            c.Nb(wm(bn(a, b), 0));
            c.ya(b);
            c.I(!0, !0)
        }
        for (; b < this.f; ++b)
            Bi(this, b).I(!1)
    }
    ;
    function dp(a, b, c) {
        a.h.set(xc(b), c);
        Jo(a, b, 9, 8, !1, new Rg(-2,1,-2,1))
    }
    v.gd = function() {
        bp.m.gd.call(this);
        Fj(this.h)
    }
    ;
    v.I = function(a, b) {
        var c = this.Ca;
        this.L = c;
        a && null != c ? (ep(this, c),
        am(this.C, "altshow"),
        Am(this.va, 207)) : null != this.l && gn(this.l, 0, 0);
        null != c && (a ? this.qe(c) : this.ne(c));
        b = bp.m.I.call(this, a, b);
        a && null != this.j() && kh(this.j(), !1);
        return b
    }
    ;
    v.bb = function() {
        if (null != this.L) {
            var a = Mg(this.L);
            if (null != a)
                return a
        }
        return ""
    }
    ;
    v.pb = function() {
        bp.m.pb.call(this);
        if (this.o)
            for (var a = 0; a < this.g.length; a++) {
                var b = this.g[a];
                tl(b.f);
                b.g();
                b.l(-1);
                b.g();
                b.I(!1)
            }
    }
    ;
    v.qe = function(a) {
        M(a, "trans-target");
        a.title = ""
    }
    ;
    v.ne = function(a) {
        Nf(a, "trans-target");
        a.title = cp
    }
    ;
    v.Ga = function(a) {
        if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode)
            return !1;
        var b = bp.m.Ga.call(this, a);
        if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
            var c = ih(this.Ca.parentNode.parentNode)
              , d = null;
            if (!c && 37 == a.keyCode || c && 39 == a.keyCode)
                d = !1;
            if (!c && 39 == a.keyCode || c && 37 == a.keyCode)
                d = !0;
            if (this.je(d) && (c = this.Ca,
            (c = d ? pc(c.nextElementSibling) ? c.nextElementSibling : xg(c.nextSibling, !0) : pc(c.previousElementSibling) ? c.previousElementSibling : xg(c.previousSibling, !1)) && c != this.Ca))
                return this.pb(),
                this.Yg(d),
                this.yd(c ? this.a.get(xc(c)) : null, 0, 0),
                fp(this),
                a.b(),
                a.stopPropagation(),
                !0
        }
        return b
    }
    ;
    v.yd = function(a, b, c) {
        ih((a.A || this.Ca).parentNode.parentNode) ? P(this.j(), Ya, Qb) : P(this.j(), Ya, "");
        if (this.o)
            for (var d = 0; d < this.g.length; d++)
                gp(this, d),
                Gg(this.g[d].c, "...");
        this.wf(a.A);
        bp.m.yd.call(this, a, b, c)
    }
    ;
    function hp(a, b, c) {
        !a.o || b >= a.f || "" == c || (Gg(a.g[b].c, c),
        gp(a, b))
    }
    function gp(a, b) {
        yl(Bi(a, b).j(), 12, a.g[b].j(), 8, new N(1,0))
    }
    v.Oc = function(a) {
        bp.m.Oc.call(this, a);
        var b = this.Ca;
        null != b && (am(this.C, "altmenuhl"),
        Am(this.va, 209),
        ep(this, b),
        a = this.nd(a.target),
        -1 != a && a != this.f && (tl(this.H[a]),
        this.H[a] = sl(this.Ri, 300, this),
        this.o && (b = this.g[a],
        ih(this.Ca.parentNode.parentNode) ? (M(b.j(), Qb),
        P(b.j(), Ya, Qb)) : (Nf(b.j(), Qb),
        P(b.j(), Ya, "")),
        gp(this, a),
        tl(b.f),
        0 == b.a ? b.f = sl(C(b.l, b, 1), 300) : b.l(1))))
    }
    ;
    v.Ri = function() {
        am(this.C, "altmenuhold");
        Am(this.va, 208)
    }
    ;
    v.Pe = function(a) {
        bp.m.Pe.call(this, a);
        a = this.nd(a.target);
        -1 != a && a != this.f && (tl(this.H[a]),
        this.o && this.g[a].o())
    }
    ;
    v.nd = function(a) {
        return Di(this, a)
    }
    ;
    v.je = u(!0);
    v.Yg = fc();
    v.pe = function(a, b, c, d, e) {
        (a = bp.m.pe.call(this, a, b, c, d, e)) && a.Ac == Ab && (a.Ac = Sa);
        return a
    }
    ;
    v.ad = function(a) {
        bp.m.ad.call(this, a);
        U(this).w(a.A, Db, this.ug);
        U(this).w(a.A, Cb, this.Dd);
        U(this).w(a.A, Wa, this.sg);
        U(this).w(a.A, Bb, this.tg)
    }
    ;
    v.re = function(a) {
        bp.m.re.call(this, a);
        U(this).ba(a.A, Db, this.ug);
        U(this).ba(a.A, Cb, this.Dd);
        U(this).ba(a.A, Wa, this.sg);
        U(this).ba(a.A, Bb, this.tg)
    }
    ;
    function ep(a, b) {
        if (null != a.l && (b = a.h.get(xc(b))) && (a = a.l,
        a.b))
            for (var c = a.A && (a.A.value || Mg(a.A)), d = -1, e = -1, f = !1, h = 0; h < Y(a.b, 5); h++) {
                var k = dn(a.b, h);
                if (0 != Y(k, 2) && (0 == vm(k, 5) && (f = c.indexOf(wm(k, 4), e + 1),
                0 <= f ? (d = f,
                e = d + wm(k, 4).length,
                f = !0) : f = !1),
                dn(a.b, h).Fb() == b.Fb())) {
                    if (f) {
                        c = [];
                        for (e = 0; e < Y(b, 3); ++e)
                            c.push({
                                Bc: d + vm(new $m(xm(b, 3, e)), 0),
                                Bf: d + vm(new $m(xm(b, 3, e)), 1)
                            });
                        gn(a, 0, 0, void 0, c)
                    } else
                        d = c.indexOf(wm(b, 0)),
                        0 <= d && gn(a, d, d + wm(b, 0).length);
                    break
                }
            }
    }
    function ip(a, b) {
        b ? Aj(a.a.Ja(!1), function(c) {
            "" == this.b.dg(c.A) && (M(c.A, Zb),
            this.b.ib(c.A, "_"));
            return !0
        }, a) : Aj(a.a.Ja(!1), function(c) {
            Lf(c.A, Zb) && (Nf(c.A, Zb),
            this.b.ib(c.A, ""));
            return !0
        }, a)
    }
    v.ug = function(a) {
        !Xn() && this.isEnabled() && (M(a.target, $b),
        ep(this, a.target),
        ip(this, !0),
        am(this.C, "althighlight"),
        Am(this.va, 206))
    }
    ;
    v.Dd = function(a) {
        Nf(a.target, $b);
        null == this.l || this.isVisible() || gn(this.l, 0, 0);
        ip(this, !1)
    }
    ;
    v.tg = function(a) {
        Xn() && this.Dd(a)
    }
    ;
    v.sg = function(a) {
        Xn() || (this.Dd(a),
        Kn(Fn(a.target), void 0).select())
    }
    ;
    function fp(a) {
        Aj(a.a.Ja(!1), function(b) {
            Nf(b.A, $b);
            return !0
        }, a)
    }
    v.ef = function(a) {
        a && a.currentTarget && a.currentTarget.Ca && (a.g = a.currentTarget.Ca);
        bp.m.ef.call(this, a)
    }
    ;
    v.Ud = function(a) {
        Xn() ? fp(this) : this.xb && bp.m.Ud.call(this, a)
    }
    ;
    function jp(a, b, c) {
        this.P = this.c = null;
        bp.call(this, a, b, c)
    }
    G(jp, bp);
    v = jp.prototype;
    v.Yg = gc("c");
    v.I = function(a, b) {
        b = jp.m.I.call(this, a, b);
        this.c = null;
        a ? this.P = this.bb() : null != this.P && this.P != this.bb() && this.dispatchEvent(new Dh(Ca,this));
        return b
    }
    ;
    v.qe = function(a) {
        jp.m.qe.call(this, a);
        M(a, "trans-edit");
        a.contentEditable = !0;
        uo(this, a);
        to(this).focus();
        Jg(to(this), !0);
        U(this).w(a, xb, this.mg);
        U(this).w(a, Cb, this.Ed);
        U(this).w(a, Db, this.Ed);
        if (null != this.c) {
            a = Kn(Fn(a), void 0);
            var b = this.c ? a.Na() : a.fb()
              , c = pn(a);
            a = c;
            var d = b
              , e = new Jn;
            e.f = Tn(a, d, c, b);
            if (yg(a) && !pg(a)) {
                var f = a.parentNode;
                d = Jc(f.childNodes, a);
                a = f
            }
            yg(c) && !pg(c) && (f = c.parentNode,
            b = Jc(f.childNodes, c),
            c = f);
            e.f ? (e.a = c,
            e.g = b,
            e.b = a,
            e.c = d) : (e.a = a,
            e.g = d,
            e.b = c,
            e.c = b);
            e.select()
        }
    }
    ;
    v.ne = function(a) {
        jp.m.ne.call(this, a);
        Nf(a, "trans-edit");
        a.contentEditable = !1;
        to(this) && Jg(to(this), !1);
        U(this).ba(a, xb, this.mg);
        U(this).ba(a, Cb, this.Ed);
        U(this).ba(a, Db, this.Ed)
    }
    ;
    v.Ed = function() {
        var a = Vn();
        null == a || a.Ma() == a.eb() && a.Na() == a.fb() || this.I(a.Ma() == a.eb())
    }
    ;
    v.mg = function(a) {
        for (var b = 0; b < this.f; ++b)
            Bi(this, b).I(!1);
        if (13 == a.keyCode || 3 == a.keyCode)
            return null === yo(this) ? (this.pb(),
            a.stopPropagation(),
            a.b(),
            !0) : !1;
        null === yo(this) || !Qi(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Ca.focus(),
        this.Cb(Di(this, null)));
        return !1
    }
    ;
    v.je = function(a) {
        var b = Vn();
        if (b.Ma() == b.eb() && b.Na() == b.fb()) {
            var c = b.Ue() ? b.Na() : b.fb();
            b = Kn(Fn(pn(b)), void 0);
            if (!a && c == b.Na() || a && c == b.fb())
                return !0
        }
        return !1
    }
    ;
    function kp(a, b, c) {
        bp.call(this, a, b, c);
        this.c = null
    }
    G(kp, bp);
    v = kp.prototype;
    v.fa = function(a) {
        kp.m.fa.call(this, a);
        this.c = new lp("");
        this.rc(this.c, !0)
    }
    ;
    v.wf = function(a) {
        kp.m.wf.call(this, a);
        this.c.j().firstChild.value = this.b.dg(a)
    }
    ;
    v.I = function(a, b) {
        b = kp.m.I.call(this, a, b);
        a && null != this.j() && (to(this) == this.c.j().firstChild || to(this) == this.c.j().firstChild.nextSibling) && kj(this.c, !0);
        return b
    }
    ;
    v.Oc = function(a) {
        kp.m.Oc.call(this, a);
        a.target == this.c ? uo(this, this.c.j().firstChild) : uo(this, this.j());
        to(this).focus();
        to(this).tabIndex = 0
    }
    ;
    v.nd = function(a) {
        return a == this.c ? -1 : kp.m.nd.call(this, a)
    }
    ;
    v.Ga = function(a) {
        return 9 == a.keyCode ? (this.c.V & 2 ? (to(this) == this.c.j().firstChild ? uo(this, this.c.j().firstChild.nextSibling) : uo(this, this.c.j().firstChild),
        to(this).focus(),
        to(this).tabIndex = 0) : kj(this.c, !0),
        a.b(),
        a.stopPropagation(),
        !0) : kp.m.Ga.call(this, a)
    }
    ;
    v.je = function() {
        return null === yo(this) || !(yo(this)instanceof lp)
    }
    ;
    function lp(a, b, c) {
        W.call(this, a, c || mp.X(), b);
        this.sa(4, !1)
    }
    G(lp, W);
    lp.prototype.Lc = function(a) {
        a.target == this.j().firstChild.nextSibling && this.dispatchEvent(Ca)
    }
    ;
    lp.prototype.O = function() {
        lp.m.O.call(this);
        U(this).w(this.j().firstChild, xb, function(a) {
            32 == a.keyCode && a.stopPropagation()
        })
    }
    ;
    lp.prototype.bb = function() {
        return this.j().firstChild.value
    }
    ;
    function mp() {}
    G(mp, Ei);
    tc(mp);
    var np = "";
    mp.prototype.D = function(a) {
        var b = a.b.D(oa, {
            value: a.ea(),
            id: "alt-input-text",
            type: "text"
        })
          , c = a.b.D(oa, {
            value: np,
            id: "alt-input-submit",
            "class": "",
            type: Ma
        });
        return a.b.D(g, {
            id: "alt-input"
        }, b, c)
    }
    ;
    function op() {}
    G(op, Ei);
    tc(op);
    v = op.prototype;
    v.$b = fc();
    v.Oa = function(a, b) {
        fj(a, !1);
        a.kb &= -256;
        a.sa(32, !1);
        op.m.Oa.call(this, a, b);
        a.Nb(b.value);
        return b
    }
    ;
    v.D = function(a) {
        fj(a, !1);
        a.kb &= -256;
        a.sa(32, !1);
        return a.b.D(va, {
            "class": Hi(this, a).join(" "),
            disabled: !a.isEnabled()
        }, a.ea() || "")
    }
    ;
    v.wd = function(a) {
        return a.tagName == va
    }
    ;
    v.Ge = z;
    v.Fe = function(a) {
        return a.isEnabled()
    }
    ;
    v.ac = z;
    v.Jc = function(a, b, c) {
        op.m.Jc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    }
    ;
    v.Wa = z;
    v.Ic = function(a, b) {
        a && (a.value = b)
    }
    ;
    v.da = u("goog-textarea");
    function pp(a, b, c) {
        W.call(this, a, b || op.X(), c);
        fj(this, !1);
        this.$c = !0;
        (b = this.j()) && this.a.xd(b, !0);
        this.ec = "" != a;
        a || (this.Mb = "")
    }
    G(pp, W);
    var qp = !(I && !mf(11));
    v = pp.prototype;
    v.gc = !1;
    v.Id = !1;
    v.ec = !1;
    v.qb = 0;
    v.Fg = 0;
    v.df = 0;
    v.xg = !1;
    v.Sd = !1;
    v.sf = !1;
    v.rf = !1;
    v.nc = "";
    function rp(a) {
        return a.c.top + a.c.bottom + a.o.top + a.o.bottom
    }
    function sp(a) {
        var b = a.df
          , c = a.j();
        b && c && a.Sd && (b -= rp(a));
        return b
    }
    function tp(a) {
        a.df = 50;
        up(a)
    }
    function vp(a) {
        a.Fg = 50;
        up(a)
    }
    v.ya = function(a) {
        this.Nb(String(a))
    }
    ;
    v.Aa = function() {
        return this.j().value != this.nc || wp(this) || this.ec ? this.j().value : ""
    }
    ;
    v.Nb = function(a) {
        pp.m.Nb.call(this, a);
        this.ec = "" != a;
        up(this)
    }
    ;
    v.ka = function(a) {
        pp.m.ka.call(this, a);
        this.j().disabled = !a
    }
    ;
    function up(a) {
        a.j() && a.zd()
    }
    function wp(a) {
        return "placeholder"in a.j()
    }
    function xp(a) {
        a.nc && (wp(a) ? a.j().placeholder = a.nc : !a.j() || a.ec || a.Id || (M(a.j(), Xb),
        a.j().value = a.nc))
    }
    v.O = function() {
        pp.m.O.call(this);
        var a = this.j();
        P(a, {
            overflowY: qb,
            overflowX: Ha,
            boxSizing: La,
            MsBoxSizing: La,
            WebkitBoxSizing: La,
            MozBoxSizing: La
        });
        this.c = oh(a);
        this.o = ph(a);
        U(this).w(a, "scroll", this.zd).w(a, cb, this.zd).w(a, "keyup", this.zd).w(a, "mouseup", this.Vi).w(a, Ka, this.Hh);
        xp(this);
        up(this)
    }
    ;
    function yp(a) {
        if (!a.xg) {
            var b = a.j().cloneNode(!1);
            P(b, {
                position: Ba,
                height: Ha,
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: qb
            });
            a.b.a.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.sf = d > c;
            b.style.borderWidth = "10px";
            a.rf = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Sd = !0);
            ug(b);
            a.xg = !0
        }
        b = a.j();
        isNaN(a.c.top) && (a.c = oh(b),
        a.o = ph(b));
        c = a.j().scrollHeight;
        var e = a.j();
        d = e.offsetHeight - e.clientHeight;
        if (!a.sf) {
            var f = a.c;
            d -= f.top + f.bottom
        }
        a.rf || (e = ph(e),
        d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Sd ? c -= rp(a) : (a.sf || (d = a.c,
        c += d.top + d.bottom),
        a.rf || (a = ph(b),
        c += a.top + a.bottom));
        return c
    }
    function zp(a, b) {
        a.qb != b && (a.qb = b,
        a.j().style.height = b + "px")
    }
    function Ap(a) {
        var b = a.j();
        b.style.height = Ha;
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.qb = 0
    }
    v.Hh = function() {
        wp(this) || (this.Id = !1,
        "" == this.j().value && (this.ec = !1,
        xp(this)))
    }
    ;
    v.zd = function(a) {
        if (!this.gc) {
            var b = this.j();
            !wp(this) && a && a.type == cb && (b.value == this.nc && this.nc && !this.Id && (Nf(b, Xb),
            b.value = ""),
            this.Id = !0,
            this.ec = "" != b.value);
            var c = !1;
            this.gc = !0;
            a = this.qb;
            if (b.scrollHeight) {
                var d = !1
                  , e = !1
                  , f = yp(this)
                  , h = b.offsetHeight
                  , k = sp(this);
                var l = this.Fg;
                var m = this.j();
                l && m && this.Sd && (l -= rp(this));
                k && f < k ? (zp(this, k),
                d = !0) : l && f > l ? (zp(this, l),
                b.style.overflowY = "",
                e = !0) : h != f ? zp(this, f) : this.qb || (this.qb = f);
                d || e || !qp || (c = !0)
            } else
                Ap(this);
            this.gc = !1;
            c && (b = this.j(),
            this.gc || (this.gc = !0,
            (e = b.scrollHeight) ? (f = yp(this),
            c = sp(this),
            c && f <= c || (d = this.c,
            b.style.paddingBottom = d.bottom + 1 + "px",
            yp(this) == f && (b.style.paddingBottom = d.bottom + e + "px",
            b.scrollTop = 0,
            e = yp(this) - e,
            e >= c ? zp(this, e) : zp(this, c)),
            b.style.paddingBottom = d.bottom + "px")) : Ap(this),
            this.gc = !1));
            a != this.qb && this.dispatchEvent("resize")
        }
    }
    ;
    v.Vi = function() {
        var a = this.j()
          , b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
        b != this.qb && (this.qb = this.df = b)
    }
    ;
    function Bp(a) {
        return function() {
            return a
        }
    }
    function Cp(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    }
    function Dp(a, b) {
        var c = b.split(".");
        b = Number(c[0]) || 0;
        for (var d = [], e = 0, f = 0; f < a.length; f++) {
            var h = a.charCodeAt(f);
            128 > h ? d[e++] = h : (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++f) & 1023),
            d[e++] = h >> 18 | 240,
            d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224,
            d[e++] = h >> 6 & 63 | 128),
            d[e++] = h & 63 | 128)
        }
        a = b;
        for (e = 0; e < d.length; e++)
            a += d[e],
            a = Cp(a, "+-a^+6");
        a = Cp(a, "+-3^+b+-f");
        a ^= Number(c[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        c = a % 1E6;
        return c.toString() + "." + (c ^ b)
    }
    var Ep = null;
    function Fp() {
        var a = Bp(String.fromCharCode(116))
          , b = Bp(String.fromCharCode(107));
        a = [a(), a()];
        a[1] = b();
        return a.join("")
    }
    ;function Gp() {
        this.a = 0;
        this.va = zm.X()
    }
    function Hp(a) {
        a = a.Da("q").join("");
        if (null !== Ep)
            var b = Ep;
        else {
            var c = Bp(String.fromCharCode(84));
            b = Bp(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            b = (Ep = window[c.join(b())] || "") || ""
        }
        return "&" + Fp() + "=" + Dp(a, b)
    }
    function Ip(a, b, c, d, e) {
        c = c.toString();
        c += Hp(d);
        d = d.toString();
        var f = sa;
        b += "?" + c;
        2E3 > b.length + d.length && (f = "GET",
        b += "&" + d,
        d = "");
        ++a.a;
        Nl(b, function(h) {
            --a.a;
            e(h)
        }, f, d, void 0)
    }
    Gp.prototype.b = function(a, b, c) {
        c = c.target;
        !c.Pc() || "[" != c.Lb()[0] && "{" != c.Lb()[0] ? (Jp(this, c),
        b && b(c.xa())) : (b = Kp(c, "handleSingleResult_"),
        B(b) && (b = new cn(b)),
        a(b))
    }
    ;
    Gp.prototype.c = function(a, b, c) {
        c = c.target;
        if (c.Pc()) {
            c = Kp(c, "handleTextResult_");
            var d = [];
            if (a)
                d.push(B(c) ? c[0] : c);
            else if (B(c))
                for (a = 0; a < c.length; ++a)
                    d.push(B(c[a]) ? c[a][0] : c[a]);
            b(d)
        } else
            Jp(this, c),
            b(null, c.ye())
    }
    ;
    function Kp(a, b) {
        var c = a.Lb();
        a = {
            "class": "trans.common.TranslationAPI",
            func: b,
            url: a.ze()
        };
        try {
            var d = JSON.parse(c)
        } catch (e) {
            throw d = Vl.X(),
            a.js = c,
            a.error = e.message,
            d.log("jsonParseErr", a),
            e;
        }
        return d
    }
    var Lp = {}
      , Mp = (Lp[1] = 15,
    Lp[2] = 16,
    Lp[3] = 17,
    Lp[4] = 18,
    Lp[5] = 19,
    Lp[6] = 20,
    Lp[7] = 21,
    Lp[8] = 22,
    Lp[9] = 23,
    Lp);
    function Jp(a, b) {
        var c = b.ye();
        c = c in Mp ? Mp[c] : 0;
        a = Am(a.va, 148);
        var d = new dm;
        d = Gf(d, 1, 156);
        c && Gf(d, 5, c);
        Hf(a, 63, d);
        c = Vl.X();
        a = b.ze();
        b = b.Lb();
        c.log("invalidResponse", {
            q: a.substring(0, 500),
            ql: a.length,
            r: b.substring(0, 500),
            rl: b.length
        })
    }
    ;function Np(a, b) {
        this.b = b;
        for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
            var f = a[e] | 0;
            d && f == b || (c[e] = f,
            d = !1)
        }
        this.a = c
    }
    var Op = {};
    function Pp(a) {
        return -128 <= a && 128 > a ? Se(Op, a, function(b) {
            return new Np([b | 0],0 > b ? -1 : 0)
        }) : new Np([a | 0],0 > a ? -1 : 0)
    }
    function Qp(a) {
        if (isNaN(a) || !isFinite(a))
            return Rp;
        if (0 > a)
            return Sp(Qp(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++)
            b[d] = a / c | 0,
            c *= 4294967296;
        return new Np(b,0)
    }
    var Rp = Pp(0)
      , Tp = Pp(1)
      , Up = Pp(16777216);
    function Vp(a) {
        if (-1 == a.b)
            return -Vp(Sp(a));
        for (var b = 0, c = 1, d = 0; d < a.a.length; d++) {
            var e = Wp(a, d);
            b += (0 <= e ? e : 4294967296 + e) * c;
            c *= 4294967296
        }
        return b
    }
    v = Np.prototype;
    v.toString = function(a) {
        a = a || 10;
        if (2 > a || 36 < a)
            throw Error("radix out of range: " + a);
        if (Xp(this))
            return "0";
        if (-1 == this.b)
            return "-" + Sp(this).toString(a);
        for (var b = Qp(Math.pow(a, 6)), c = this, d = ""; ; ) {
            var e = Yp(c, b).a;
            c = Zp(c, $p(e, b));
            var f = ((0 < c.a.length ? c.a[0] : c.b) >>> 0).toString(a);
            c = e;
            if (Xp(c))
                return f + d;
            for (; 6 > f.length; )
                f = "0" + f;
            d = "" + f + d
        }
    }
    ;
    function Wp(a, b) {
        return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b
    }
    function Xp(a) {
        if (0 != a.b)
            return !1;
        for (var b = 0; b < a.a.length; b++)
            if (0 != a.a[b])
                return !1;
        return !0
    }
    function aq(a, b) {
        a = Zp(a, b);
        return -1 == a.b ? -1 : Xp(a) ? 0 : 1
    }
    function Sp(a) {
        for (var b = a.a.length, c = [], d = 0; d < b; d++)
            c[d] = ~a.a[d];
        return (new Np(c,~a.b)).add(Tp)
    }
    v.abs = function() {
        return -1 == this.b ? Sp(this) : this
    }
    ;
    v.add = function(a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0, e = 0; e <= b; e++) {
            var f = d + (Wp(this, e) & 65535) + (Wp(a, e) & 65535)
              , h = (f >>> 16) + (Wp(this, e) >>> 16) + (Wp(a, e) >>> 16);
            d = h >>> 16;
            f &= 65535;
            h &= 65535;
            c[e] = h << 16 | f
        }
        return new Np(c,c[c.length - 1] & -2147483648 ? -1 : 0)
    }
    ;
    function Zp(a, b) {
        return a.add(Sp(b))
    }
    function $p(a, b) {
        if (Xp(a) || Xp(b))
            return Rp;
        if (-1 == a.b)
            return -1 == b.b ? $p(Sp(a), Sp(b)) : Sp($p(Sp(a), b));
        if (-1 == b.b)
            return Sp($p(a, Sp(b)));
        if (0 > aq(a, Up) && 0 > aq(b, Up))
            return Qp(Vp(a) * Vp(b));
        for (var c = a.a.length + b.a.length, d = [], e = 0; e < 2 * c; e++)
            d[e] = 0;
        for (e = 0; e < a.a.length; e++)
            for (var f = 0; f < b.a.length; f++) {
                var h = Wp(a, e) >>> 16
                  , k = Wp(a, e) & 65535
                  , l = Wp(b, f) >>> 16
                  , m = Wp(b, f) & 65535;
                d[2 * e + 2 * f] += k * m;
                bq(d, 2 * e + 2 * f);
                d[2 * e + 2 * f + 1] += h * m;
                bq(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 1] += k * l;
                bq(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 2] += h * l;
                bq(d, 2 * e + 2 * f + 2)
            }
        for (e = 0; e < c; e++)
            d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++)
            d[e] = 0;
        return new Np(d,0)
    }
    function bq(a, b) {
        for (; (a[b] & 65535) != a[b]; )
            a[b + 1] += a[b] >>> 16,
            a[b] &= 65535,
            b++
    }
    function cq(a, b) {
        this.a = a;
        this.b = b
    }
    function Yp(a, b) {
        if (Xp(b))
            throw Error("division by zero");
        if (Xp(a))
            return new cq(Rp,Rp);
        if (-1 == a.b)
            return b = Yp(Sp(a), b),
            new cq(Sp(b.a),Sp(b.b));
        if (-1 == b.b)
            return b = Yp(a, Sp(b)),
            new cq(Sp(b.a),b.b);
        if (30 < a.a.length) {
            if (-1 == a.b || -1 == b.b)
                throw Error("slowDivide_ only works with positive integers.");
            for (var c = Tp, d = b; 0 >= aq(d, a); )
                c = dq(c, 1),
                d = dq(d, 1);
            var e = eq(c, 1)
              , f = eq(d, 1);
            d = eq(d, 2);
            for (c = eq(c, 2); !Xp(d); ) {
                var h = f.add(d);
                0 >= aq(h, a) && (e = e.add(c),
                f = h);
                d = eq(d, 1);
                c = eq(c, 1)
            }
            b = Zp(a, $p(e, b));
            return new cq(e,b)
        }
        for (e = Rp; 0 <= aq(a, b); ) {
            c = Math.max(1, Math.floor(Vp(a) / Vp(b)));
            d = Math.ceil(Math.log(c) / Math.LN2);
            d = 48 >= d ? 1 : Math.pow(2, d - 48);
            f = Qp(c);
            for (h = $p(f, b); -1 == h.b || 0 < aq(h, a); )
                c -= d,
                f = Qp(c),
                h = $p(f, b);
            Xp(f) && (f = Tp);
            e = e.add(f);
            a = Zp(a, h)
        }
        return new cq(e,a)
    }
    v.and = function(a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++)
            c[d] = Wp(this, d) & Wp(a, d);
        return new Np(c,this.b & a.b)
    }
    ;
    v.or = function(a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++)
            c[d] = Wp(this, d) | Wp(a, d);
        return new Np(c,this.b | a.b)
    }
    ;
    v.xor = function(a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++)
            c[d] = Wp(this, d) ^ Wp(a, d);
        return new Np(c,this.b ^ a.b)
    }
    ;
    function dq(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++)
            e[f] = 0 < b ? Wp(a, f - c) << b | Wp(a, f - c - 1) >>> 32 - b : Wp(a, f - c);
        return new Np(e,a.b)
    }
    function eq(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length - c, e = [], f = 0; f < d; f++)
            e[f] = 0 < b ? Wp(a, f + c) >>> b | Wp(a, f + c + 1) << 32 - b : Wp(a, f + c);
        return new Np(e,a.b)
    }
    ;Zp(dq(Tp, 32), Tp);
    Zp(dq(Tp, 128), Tp);
    var fq = I || K || Te || Ue || !1;
    tf && 0 <= Dd(xl, "4") || uf && L("533") || J && L("2.0") || I && L("10") || Te && he();
    function gq(a, b, c, d, e, f, h, k, l) {
        T.call(this, a);
        this.g = h || null;
        null != this.g && this.g.h(C(this.fi, this));
        this.l = null;
        this.a = Ha;
        this.ca = this.c = "";
        this.Za = new Gp;
        this.Gb = !!b && fq && !I;
        this.J = null != e ? e : 0;
        this.f = null;
        this.Gb ? this.f = new jp : this.f = new kp;
        l && this.f.ka(!1);
        if (0 < this.J)
            for (a = this.f,
            a.o = !0,
            b = 0; b < a.f; b++)
                h = kg(g, "goog-menu", ""),
                e = kg(g, null, h),
                h = new Ym(e,h),
                a.g[b] = h,
                document.body.appendChild(e);
        this.f.fa(c);
        this.h = k || null;
        this.Ia = null != d ? d : -1;
        this.L = Vl.X();
        this.C = new Bj;
        this.H = null;
        this.Ya = "t";
        this.P = this.W = null;
        this.o = f || null;
        this.qa = !1;
        null != this.o && (this.o.c(C(this.kj, this)),
        this.o.a(C(this.bi, this)));
        this.ua = null;
        this.va = zm.X()
    }
    G(gq, T);
    function hq(a, b) {
        a.ua = b;
        a.f.l = b
    }
    function iq(a) {
        a.H = ub;
        a.f.C.s = a.H || ""
    }
    function jq(a) {
        var b = kq;
        a.L.f = b;
        a.Ya = b
    }
    function lq(a, b) {
        null != a.o && a.o.f();
        b && (a.l = new cn(b),
        a.P = null);
        mq(a) && (a.g.b(),
        null != a.h && a.h.a(!1));
        if (a.l) {
            b = 0 != ag().length;
            a.b.Qc(a.j());
            a.f.gd();
            a.ua && (a.ua.b = a.l);
            for (var c = "", d = 0, e = 0; e < Y(a.l, 5); e++)
                nq(a.l, e) && (c += " "),
                c += oq(a.l, e),
                d += Y(dn(a.l, e), 2);
            if (0 != d) {
                c = [];
                d = !1;
                e = a.l;
                for (var f = "", h = 0; h < Y(e, 5); h++) {
                    var k = dn(e, h);
                    null != k.Ea[4] && 0 < wm(k, 4).length ? f = wm(k, 4) : (new an(k.Fb())).Ea[4] = f
                }
                for (e = 0; e < Y(a.l, 5); e++) {
                    f = dn(a.l, e);
                    h = bn(f, 0);
                    nq(a.l, e) ? a.b.appendChild(a.j(), a.b.a.createTextNode(" ")) : ("km" == a.c || "lo" == a.c) && a.b.appendChild(a.j(), K ? og() : Te ? document.createTextNode("&shy;") : I ? document.createTextNode("&#8203;") : og());
                    null != f.Ea[4] && 0 < wm(f, 4).length && 0 == vm(f, 5) && c.push(wm(f, 4));
                    var l;
                    k = oq(a.l, e);
                    /^[\s\xa0]*$/.test(k) ? 0 == k.length || (l = pq(k)) : (l = a.b.D(ua, null, k),
                    h = vm(h, 1),
                    0 <= a.Ia && h < a.Ia && M(l, "alt-low-conf"),
                    Dj(a.C, a.a + "." + a.c + "." + wm(f, 0)) && (h = a.C.get(a.a + "." + a.c + "." + wm(f, 0)),
                    h != qq(f, 0) && (a.b.ib(l, h),
                    M(l, Fa),
                    d = !0,
                    rq(a, !0))),
                    l.title = cp,
                    dp(a.f, l, f));
                    l && a.b.appendChild(a.j(), l)
                }
                if (null != a.g) {
                    l = a.a + "." + a.c;
                    for (e = 0; e < c.length; ++e)
                        l += "." + c[e];
                    Dj(a.C, l) && (sq(a, !1),
                    d = !0,
                    tq(a, a.C.get(l)),
                    null != a.h && a.h.a(!1),
                    rq(a, !0))
                }
                d || (rq(a, !1),
                sq(a, !1));
                (d || b) && a.dispatchEvent(Ca)
            }
        } else
            rq(a, !1),
            sq(a, !1)
    }
    function pq(a) {
        a = He(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
        var b = document.createDocumentFragment()
          , c = 0;
        Kc(a, function(d) {
            0 != c && b.appendChild(kg("BR"));
            c++;
            "" != d && b.appendChild(document.createTextNode(String(Ie(d))))
        });
        return b
    }
    function uq(a, b) {
        if (mq(a))
            return a.g.a();
        var c = [];
        if (a.j() && a.j().childNodes)
            for (var d = 0; d < a.j().childNodes.length; ++d) {
                var e = a.j().childNodes[d];
                c[d] = b && "BR" == e.tagName ? "\n" : Mg(e)
            }
        return c.join("")
    }
    function vq(a, b, c, d) {
        for (a = 0; a < Y(b, 5); a++) {
            var e = dn(b, a);
            if ((e = e && e) && pm(c.Ea, e.Ea)) {
                c = b;
                b = a;
                e = -1;
                a = Y(c, 5);
                for (var f = b; 0 <= f; f--)
                    if (0 == vm(dn(c, f), 5)) {
                        e = f;
                        break
                    }
                for (f = b + 1; f <= Y(c, 5); f++)
                    if (0 == vm(dn(c, f), 5)) {
                        a = f;
                        break
                    }
                if (null != d && d)
                    b = wq(c, e, a);
                else if (d = c,
                c = e,
                d) {
                    e = b + 1;
                    f = b;
                    for (b = oq(d, b).length; 64 > b && (e != a || f != c); )
                        e < a && (b += oq(d, e++).length + 1),
                        64 > b && f > c && (b += oq(d, --f).length + 1);
                    b = wq(d, f, e)
                } else
                    b = "";
                return b
            }
        }
        return ""
    }
    function wq(a, b, c) {
        var d = [];
        d.push(oq(a, b));
        for (b += 1; b < c; b++)
            nq(a, b) && d.push(" "),
            d.push(oq(a, b));
        return d.join("")
    }
    function nq(a, b) {
        if (0 == b)
            return !1;
        var c = dn(a, b)
          , d = dn(a, b - 1);
        if (c = um(bn(c, 0), 2) && !um(bn(d, 0), 3))
            a = oq(a, b - 1),
            b = a.length - 1,
            c = !(0 <= b && a.indexOf("\n", b) == b);
        return c
    }
    v = gq.prototype;
    v.cb = t("a");
    v.oa = t("c");
    v.D = function() {
        this.S(Pg(this.b, "span"))
    }
    ;
    v.S = function(a) {
        gq.m.S.call(this, a);
        lq(this)
    }
    ;
    v.O = function() {
        gq.m.O.call(this);
        U(this).w(this.f, Ca, this.si);
        null != this.h && null != this.h.b && (U(this).w(this.h.b, Sa, this.wi),
        ki(U(this), this.h.b, this.va.a, this.va));
        U(this).w(this.f, "show", this.ri);
        this.j() && U(this).w(this.j(), xb, function(a) {
            32 == a.keyCode && a.stopPropagation()
        }, !0)
    }
    ;
    v.F = function() {
        gq.m.F.call(this);
        this.f.M()
    }
    ;
    v.fi = function() {
        this.o.ka(this.g.c());
        rq(this, this.g.c())
    }
    ;
    v.si = function(a) {
        if (a.type != rb || a.target == this.f)
            if (null == a.target && null != this.g)
                this.L.log("editpopupclk"),
                Am(this.va, 233),
                null != this.h && this.h.a(!0),
                this.g.l(uq(this)),
                this.qa = this.o.j().style.display != q,
                this.o.reset(),
                null != this.h ? this.o.ka(this.h.b.style.display != q) : this.o.ka(!1),
                rq(this, !1);
            else {
                var b = a.g;
                null == b && null != a.currentTarget && (b = a.currentTarget.Ca);
                var c = a.target.bb();
                if (null != b && null != a.target) {
                    var d = b
                      , e = this.f.h.get(xc(d));
                    this.b.ib(d, c);
                    c == qq(e, 0) ? (Nf(d, Fa),
                    0 == ag().length && (rq(this, !1),
                    sq(this, !1))) : (M(d, Fa),
                    rq(this, !0),
                    sq(this, !0));
                    null != this.C && this.C.set(this.a + "." + this.c + "." + wm(e, 0), c);
                    e = this.f.h.get(xc(b));
                    null != this.C && this.C.set(this.a + "." + this.c + "." + wm(e, 0), c);
                    d = qq(e, 0);
                    b = Di(this.f, a.target);
                    d = {
                        sl: this.a,
                        tl: this.c,
                        utrans: c,
                        gtrans: d,
                        index: b,
                        ophrase: wm(e, 0),
                        osentence: wm(e, 4),
                        tsentence: vq(this, this.l, e)
                    };
                    0 < Y(e, 2) && (d.confidence = vm(bn(e, 0), 1));
                    if (a.target instanceof lp || -1 == b)
                        d.manual = 1,
                        Am(this.va, 240);
                    else {
                        a = Am(this.va, 239);
                        e = new im;
                        var f = If(If(e, 2, gm), 3, em);
                        Gf(f, 1, b);
                        Hf(a, 27, e)
                    }
                    for (var h in d)
                        typeof d[h] === Ub && 64 < d[h].length && (d.tr = 1,
                        d[h] = d[h].substr(0, 64));
                    this.L.log("usealt", d, this.H);
                    h = new Dh("usealt");
                    h.text = c;
                    this.dispatchEvent(h);
                    this.dispatchEvent(Ca)
                }
            }
    }
    ;
    function tq(a, b) {
        if (a.j()) {
            null == a.W && (a.P = Tc(a.b.Rh(a.j())));
            a.W = b;
            var c;
            if (c = a.j().childNodes && 0 < a.j().childNodes.length)
                c = (c = a.j().childNodes[0]) ? Dj(a.f.a, xc(c)) : !1;
            c ? (a.b.Qc(a.j()),
            a.f.gd(),
            b = a.b.D(ua, Fa, a.W),
            a.b.appendChild(a.j(), b),
            dp(a.f, b, new an)) : a.j().innerHTML = He(b).replace(/(\r\n|\r|\n)/g, "<br>")
        }
    }
    v.wi = function() {
        null != this.g && mq(this) ? this.g.g() : xq(this);
        this.L.log("clkundo", void 0, this.H)
    }
    ;
    v.bi = function() {
        mq(this) && (this.g.c() && (tq(this, this.g.a()),
        this.qa = !0),
        this.g.b(),
        null != this.h && this.h.a(!1),
        this.g.c() && rq(this, !0),
        this.o.ka(!0),
        Q(this.o.j(), this.qa),
        this.dispatchEvent(Ca));
        Am(this.va, 215);
        this.L.log("clkcancel", void 0, this.H)
    }
    ;
    v.ri = function() {
        var a = this.f.h.get(xc(this.f.Ca));
        if (a) {
            if (0 < this.J) {
                var b = new Nj("source=baf");
                if (1 == this.J) {
                    for (var c = [], d = 0, e = Y(a, 2); d < e; d++)
                        c.push(qq(a, d));
                    d = this.Za;
                    var f = this.c
                      , h = this.a
                      , k = yq(this)
                      , l = C(this.mj, this);
                    e = new Nj;
                    var m = new Nj;
                    e.set("client", "mt");
                    e.set("sl", f);
                    e.set("tl", h);
                    e.set("hl", k);
                    e.set("v", "1.0");
                    b && e.cg(b);
                    (b = !B(c) || B(c) && 1 == c.length) ? m.set("q", c) : bk(m, "q", c);
                    b = C(d.c, d, b, l);
                    Ip(d, ea, e, m, b)
                } else
                    for (d = 0,
                    e = Y(a, 2); d < e; d++) {
                        h = qq(a, d);
                        c = this.Za;
                        m = this.c;
                        l = this.a;
                        f = yq(this);
                        k = C(this.nj, this, d);
                        var n = b
                          , r = new Nj
                          , w = new Nj;
                        r.set("client", "mt");
                        r.set("sl", m);
                        r.set("tl", l);
                        r.set("hl", f);
                        bk(r, "dt", ["at", "t"]);
                        n && r.cg(n);
                        w.set("q", h);
                        Ip(c, "/translate_a/single", r, w, C(c.b, c, k, void 0))
                    }
            }
            b = new Dh(Sa);
            b.text = this.f.bb();
            b.h = Y(this.l, 5);
            this.dispatchEvent(b);
            b = {};
            b.confidence = vm(bn(a, 0), 1);
            this.a && this.c && this.ca && (b.segments = Y(this.l, 5),
            b.sl = this.a,
            b.tl = this.c,
            b.hl = this.ca);
            Am(this.va, 238);
            this.L.log("phrsclk", b, this.H)
        }
    }
    ;
    v.nj = function(a, b) {
        if (1 == this.J || 1 < Y(b, 5)) {
            var c = wm(new ym(xm(b, 0, 0)), 0);
            var d = 1;
            for (var e = Y(b, 0); d < e; d++)
                c += " " + wm(new ym(xm(b, 0, d)), 0);
            d = c
        } else if (1 == Y(b, 5)) {
            c = [];
            b = dn(b, 0);
            d = 0;
            for (e = Math.min(this.J, Y(b, 2)); d < e; d++)
                c.push(qq(b, d));
            d = c.join(", ")
        } else
            d = "...";
        hp(this.f, a, d)
    }
    ;
    v.mj = function(a) {
        for (var b = 0; b < a.length; b++)
            hp(this.f, b, a[b])
    }
    ;
    function xq(a) {
        mq(a) && (null != a.h && a.h.a(!1),
        a.g.b());
        Fj(a.C);
        a.W = null;
        lq(a);
        a.dispatchEvent(Ca)
    }
    function rq(a, b) {
        null != a.h && null != a.h.b && Q(a.h.b, b)
    }
    function sq(a, b) {
        null != a.o && (b && a.o.reset(),
        Q(a.o.j(), b))
    }
    v.kj = function() {
        var a = [], b;
        null != this.P ? b = this.P : b = vg(this.j());
        for (var c = {
            segment: []
        }, d = null, e = 0, f = 0; f < b.length; f++) {
            var h = dn(this.l, f);
            if (null != h) {
                var k = Mg(b[f]);
                a: {
                    var l = k;
                    var m = h;
                    if (0 == Y(m, 2))
                        l = 0;
                    else {
                        for (var n = 0; n < Y(m, 2); ++n)
                            if (l == qq(m, n)) {
                                l = n;
                                break a
                            }
                        l = -1
                    }
                }
                m = ud(wm(h, 4));
                n = vq(this, this.l, h, !0);
                if (0 != m.length) {
                    if (0 == a.length || m != a[a.length - 1])
                        a.push(m),
                        d = zq(this, a.length - 1),
                        e = 0,
                        d = {
                            source: m,
                            original_target: n,
                            segment_source: d,
                            phrase_correction: []
                        },
                        c.segment.push(d);
                    if (0 != l)
                        for (m = qq(h, 0).length,
                        l = {
                            alternative_index: l,
                            edited_phrase: k,
                            source_span: [],
                            target_span: [{
                                start: e,
                                end: e + m
                            }]
                        },
                        d.phrase_correction.push(l),
                        m = 0; m < Y(h, 3); ++m)
                            n = new $m(xm(h, 3, m)),
                            l.source_span.push({
                                start: vm(n, 0),
                                end: vm(n, 1)
                            });
                    e += k.length;
                    um(bn(h, 0), 2) && e++
                }
            }
        }
        if (mq(this)) {
            this.dispatchEvent(Ca);
            this.g.b();
            null != this.h && this.h.a(!1);
            rq(this, !0);
            this.g.a() != uq(this) && tq(this, this.g.a());
            b = this.a + "." + this.c;
            for (f = 0; f < a.length; ++f)
                b += "." + a[f];
            a = this.g.a();
            this.C.set(b, a);
            c.contains_full_edit = !0
        }
        c.edited_target = uq(this, !0);
        a = new Nj;
        a.set("ue", JSON.stringify(c));
        a.set("sl", this.a);
        a.set("tl", this.c);
        Nl(fa + this.Ya, void 0, sa, a.toString(), 1E4)
    }
    ;
    function zq(a, b) {
        if (b < Y(a.l, 0))
            switch (tm(new ym(xm(a.l, 0, b)), 4, 0)) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
            }
        return 0
    }
    function mq(a) {
        return null != a.g && a.g.f()
    }
    function oq(a, b) {
        a = dn(a, b);
        return 0 == Y(a, 2) ? wm(a, 0) : qq(a, 0)
    }
    function qq(a, b) {
        return wm(bn(a, b), 0)
    }
    function yq(a) {
        a = a.ca;
        0 === a.length && null != Zf(document, "hl") && (a = Zf(document, "hl").value);
        return a
    }
    ;var Aq = window.google && google.translate && google.translate._const;
    Aq || (Aq = {
        _cac: "",
        _cam: "",
        _cest: new Date,
        _cjlc: "",
        _cl: "",
        _cuc: "",
        _cnad: !1,
        _cnal: {},
        wk: "",
        _pah: "",
        _pas: "",
        _pbi: "",
        _pci: "",
        _phf: "",
        _pli: "",
        _plla: "",
        _pmi: "",
        _ps: "",
        _pta: "",
        _puh: ""
    });
    var Bq = window.google && window.google.translate && window.google.translate.v || ""
      , Cq = Aq._cl || "en"
      , Dq = Aq._cuc
      , Eq = Aq._cnad
      , Fq = Aq._cest
      , Gq = Aq._cnal || {}
      , Hq = "lib" == Aq._cam ? 1 : 0
      , Iq = (Aq._cac || "te") + (1 == Hq ? "_lib" : "")
      , Jq = function() {
        function a(d) {
            return function() {
                return d
            }
        }
        var b = String.fromCharCode(107)
          , c = a(String.fromCharCode(116));
        b = a(b);
        c = [c(), c()];
        c[1] = b();
        return Aq["_c" + c.join(b())] || ""
    }()
      , Kq = Aq._pah || ""
      , Lq = Aq._pas || "https://"
      , Mq = Aq._pbi || ""
      , Nq = Aq._pci || ""
      , Oq = Aq._plla || ""
      , Pq = Aq._pli || ""
      , Qq = Aq._ps || ""
      , Rq = Aq._puh || ""
      , Sq = "//" + Rq + fa + Iq
      , Tq = "https://www.google.com/support/translate" + ("en" == Cq ? "" : "#googtrans/en/" + Cq);
    function Uq(a) {
        for (var b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = !0;
        return b
    }
    function Vq(a) {
        this.b = a ? [a] : [];
        this.a = [0];
        this.c = !1
    }
    Vq.prototype.register = function(a) {
        if (this.c)
            return a || z;
        this.a.push(0);
        var b = this.a.length - 1;
        return C(function() {
            this.a[b]++;
            a && a.apply(null, arguments);
            Wq(this)
        }, this)
    }
    ;
    Vq.prototype.delay = function(a) {
        return this.c ? a : C(function() {
            if (this.c)
                a.apply(null, arguments);
            else {
                var b = arguments;
                this.b.push(function() {
                    a.apply(null, b)
                })
            }
        }, this)
    }
    ;
    Vq.prototype.finish = function() {
        this.a[0] = 1;
        Wq(this)
    }
    ;
    function Wq(a) {
        for (var b = 0; b < a.a.length; ++b)
            if (0 == a.a[b])
                return;
        a.c = !0;
        for (b = 0; b < a.b.length; ++b) {
            var c = a.b[b];
            a.b[b] = null;
            c.call()
        }
        a.b = [];
        a.a = []
    }
    function Xq(a) {
        this.c = a;
        this.b = this.a = !1
    }
    function Yq(a, b) {
        return C(function() {
            b && b.apply(null, arguments);
            this.b ? this.a || (this.c.call(),
            this.a = !0) : this.a = !0
        }, a)
    }
    Xq.prototype.finish = function() {
        this.b || (this.b = !0,
        this.a && this.c.call())
    }
    ;
    function Zq(a, b, c) {
        this.a = b;
        this.h = a;
        this.l = c || 0;
        this.b = this.c = !1
    }
    function $q(a) {
        a.c || a.g()
    }
    Zq.prototype.g = function() {
        (this.c = (this.b = !!this.h.call()) || 0 >= --this.l) ? (this.a.call(null, this.b),
        this.f = 0) : this.f = window.setTimeout(C(this.g, this), 30)
    }
    ;
    Zq.prototype.cancel = function() {
        this.f && window.clearTimeout(this.f);
        this.c = !0;
        this.a.call(null, this.b)
    }
    ;
    function ar(a, b) {
        return function() {
            a.dispatchEvent(b)
        }
    }
    function br(a) {
        a = ud(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a)
            return "zh-CN";
        if ("zh-tw" == a)
            return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a
    }
    function cr(a) {
        var b = [], c;
        for (c in a)
            if (a[c] !== Object.prototype[c]) {
                var d = Fe(c);
                if (A(a[c]) == Ga)
                    for (var e = 0; e < a[c].length; ++e)
                        b.push(d + "=" + Fe(a[c][e]));
                else
                    b.push(d + "=" + Fe(a[c]))
            }
        return b.join("&")
    }
    function dr(a, b) {
        b = b || {};
        b.nca = a;
        b.client = Iq;
        Bq && (b.logld = "v" + Bq);
        var c = new Image;
        c.src = "//" + Rq + "/gen204?" + cr(b);
        c.onload = function() {
            c.onload = null
        }
    }
    function er(a, b) {
        if ((I || Te) && window.location.hostname != document.domain) {
            fr = fr ? fr + 1 : 1;
            var c = "f" + fr + "_" + D().toString(36);
            window[c] = function() {
                window[c] = void 0;
                a.src = wb;
                b && window.setTimeout(function() {
                    b()
                }, 0)
            }
            ;
            a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
        } else
            b && b()
    }
    var fr;
    function gr() {
        var a = {};
        try {
            for (var b in Object.prototype) {
                var c = Object.prototype[b];
                delete Object.prototype[b];
                a[b] = c
            }
        } catch (d) {
            return {}
        }
        return a
    }
    function hr(a) {
        for (var b in a)
            Object.prototype[b] = a[b]
    }
    function ir(a) {
        for (var b in a)
            if (a[b] !== Object.prototype[b])
                return !1;
        return !0
    }
    function jr(a, b) {
        return a != Ha && "zh-CN" != a && a == b
    }
    ;var kr, lr, mr;
    (function() {
        function a(d, e, f) {
            var h = Array.prototype.slice.call(arguments);
            h.splice(0, 2);
            h = "l" + d.toString(16) + "i" + e.toString(16) + (h.length ? "-" + h.join("_") : "");
            b ? b.push(h) : dr(h)
        }
        var b = null
          , c = null;
        kr = function(d, e, f) {
            for (var h in f)
                f[h] !== Object.prototype[h] && (e[h] = vc(f[h]) ? f[h] : Cc(a, d, Number(f[h])))
        }
        ;
        lr = function() {
            b && mr();
            b = [];
            c = S(window, "unload", function() {
                mr()
            })
        }
        ;
        mr = function() {
            c && (ci(c),
            c = null);
            b && b.length && dr(b.join(""));
            b = null
        }
    }
    )();
    function nr(a) {
        or();
        return se(a, null)
    }
    function pr(a) {
        or();
        return new od(pd,a,null)
    }
    var or = z;
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function qr(a) {
        var b = rr;
        this.g = [];
        this.C = b;
        this.G = a || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.o = this.K = this.l = !1;
        this.h = 0;
        this.b = null;
        this.s = 0
    }
    qr.prototype.cancel = function(a) {
        if (this.a)
            this.c instanceof qr && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.s--,
                0 >= b.s && b.cancel())
            }
            this.C ? this.C.call(this.G, this) : this.o = !0;
            this.a || (a = new sr(this),
            tr(this),
            ur(this, !1, a))
        }
    }
    ;
    qr.prototype.B = function(a, b) {
        this.l = !1;
        ur(this, a, b)
    }
    ;
    function ur(a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        vr(a)
    }
    function tr(a) {
        if (a.a) {
            if (!a.o)
                throw new wr(a);
            a.o = !1
        }
    }
    function xr(a, b, c, d) {
        a.g.push([b, c, d]);
        a.a && vr(a)
    }
    qr.prototype.then = function(a, b, c) {
        var d, e, f = new $k(function(h, k) {
            d = h;
            e = k
        }
        );
        xr(this, d, function(h) {
            h instanceof sr ? f.cancel() : e(h)
        });
        return f.then(a, b, c)
    }
    ;
    qr.prototype.$goog_Thenable = !0;
    function yr(a) {
        return Nc(a.g, function(b) {
            return vc(b[1])
        })
    }
    function vr(a) {
        if (a.h && a.a && yr(a)) {
            var b = a.h
              , c = zr[b];
            c && (x.clearTimeout(c.ia),
            delete zr[b]);
            a.h = 0
        }
        a.b && (a.b.s--,
        delete a.b);
        b = a.c;
        for (var d = c = !1; a.g.length && !a.l; ) {
            var e = a.g.shift()
              , f = e[0]
              , h = e[1];
            e = e[2];
            if (f = a.f ? h : f)
                try {
                    var k = f.call(e || a.G, b);
                    void 0 !== k && (a.f = a.f && (k == b || k instanceof Error),
                    a.c = b = k);
                    if (Zk(b) || typeof x.Promise === p && b instanceof x.Promise)
                        d = !0,
                        a.l = !0
                } catch (l) {
                    b = l,
                    a.f = !0,
                    yr(a) || (c = !0)
                }
        }
        a.c = b;
        d && (k = C(a.B, a, !0),
        d = C(a.B, a, !1),
        b instanceof qr ? (xr(b, k, d),
        b.K = !0) : b.then(k, d));
        c && (b = new Ar(b),
        zr[b.ia] = b,
        a.h = b.ia)
    }
    function wr() {
        Ec.call(this)
    }
    G(wr, Ec);
    wr.prototype.message = "Deferred has already fired";
    wr.prototype.name = "AlreadyCalledError";
    function sr() {
        Ec.call(this)
    }
    G(sr, Ec);
    sr.prototype.message = "Deferred was canceled";
    sr.prototype.name = "CanceledError";
    function Ar(a) {
        this.ia = x.setTimeout(C(this.a, this), 0);
        this.jd = a
    }
    Ar.prototype.a = function() {
        delete zr[this.ia];
        throw this.jd;
    }
    ;
    var zr = {};
    function Br(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = rd(a).toString()
          , e = document.createElement(ta)
          , f = {
            Vg: e,
            Eb: void 0
        }
          , h = new qr(f)
          , k = null
          , l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (k = window.setTimeout(function() {
            Cr(e, !0);
            var m = new Dr(1,"Timeout reached for loading script " + d);
            tr(h);
            ur(h, !1, m)
        }, l),
        f.Eb = k);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && e.readyState != Ua || (Cr(e, c.Jh || !1, k),
            tr(h),
            ur(h, !0, null))
        }
        ;
        e.onerror = function() {
            Cr(e, !0, k);
            var m = new Dr(0,"Error while loading script " + d);
            tr(h);
            ur(h, !1, m)
        }
        ;
        f = c.attributes || {};
        fd(f, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        dg(e, f);
        Ae(e, a);
        Er(b).appendChild(e);
        return h
    }
    function Er(a) {
        var b = $f("HEAD", a);
        return b && 0 != b.length ? b[0] : a.documentElement
    }
    function rr() {
        if (this && this.Vg) {
            var a = this.Vg;
            a && a.tagName == ta && Cr(a, !0, this.Eb)
        }
    }
    function Cr(a, b, c) {
        null != c && x.clearTimeout(c);
        a.onload = z;
        a.onerror = z;
        a.onreadystatechange = z;
        b && window.setTimeout(function() {
            ug(a)
        }, 0)
    }
    function Dr(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Ec.call(this, c);
        this.code = a
    }
    G(Dr, Ec);
    function Fr(a, b) {
        this.b = a;
        this.a = b ? b : "callback";
        this.Eb = 5E3
    }
    var Gr = 0;
    Fr.prototype.send = function(a, b, c, d) {
        a = a ? dd(a) : {};
        d = d || "_" + (Gr++).toString(36) + D().toString(36);
        var e = "_callbacks___" + d;
        b && (x[e] = Hr(d, b),
        a[this.a] = e);
        b = {
            timeout: this.Eb,
            Jh: !0
        };
        e = rd(this.b).toString();
        e = sd.exec(e);
        var f = e[3] || "";
        e = new od(pd,e[1] + td("?", e[2] || "", a) + td("#", f, void 0),null);
        b = Br(e, b);
        xr(b, null, Ir(d, a, c), void 0);
        return {
            ia: d,
            Tf: b
        }
    }
    ;
    Fr.prototype.cancel = function(a) {
        a && (a.Tf && a.Tf.cancel(),
        a.ia && Jr(a.ia, !1))
    }
    ;
    function Ir(a, b, c) {
        return function() {
            Jr(a, !1);
            c && c(b)
        }
    }
    function Hr(a, b) {
        return function(c) {
            Jr(a, !0);
            b.apply(void 0, arguments)
        }
    }
    function Jr(a, b) {
        a = "_callbacks___" + a;
        if (x[a])
            if (b)
                try {
                    delete x[a]
                } catch (c) {
                    x[a] = void 0
                }
            else
                x[a] = z
    }
    ;function Kr(a, b) {
        R.call(this);
        this.a = new Kj(a);
        if (b)
            for (var c in b)
                b[c] !== Object.prototype[c] && this.a.a.set(c, b[c])
    }
    G(Kr, R);
    Kr.prototype.c = u(!0);
    Kr.prototype.Ua = function() {
        return this.c()
    }
    ;
    Kr.prototype.send = u(null);
    Kr.prototype.cancel = fc();
    function Lr(a, b, c, d) {
        Kr.call(this, a, b);
        this.f = null == d || !!d;
        this.b = new Fr(pr(this.a.toString()),c)
    }
    G(Lr, Kr);
    Lr.prototype.c = t("f");
    Lr.prototype.send = function(a, b) {
        this.b.Eb = -1;
        return this.b.send(a, b)
    }
    ;
    Lr.prototype.cancel = function(a) {
        this.b.cancel(a)
    }
    ;
    function Mr(a, b) {
        Kr.call(this, a, b);
        this.f = {};
        this.b = this.g = 0;
        window.XMLHttpRequest && ec in new XMLHttpRequest && (this.b = 1);
        !this.b && window.XDomainRequest && "file:" != window.location.protocol && (this.b = 2,
        this.a.a.set("u", window.location.href))
    }
    G(Mr, Kr);
    kr(17170, Mr.prototype, {
        Eg: 1,
        Dg: 2
    });
    Mr.prototype.c = function() {
        return !!this.b
    }
    ;
    Mr.prototype.send = function(a, b) {
        var c = gr()
          , d = ++this.g
          , e = {}
          , f = {};
        "q"in a && (f.q = a.q,
        delete a.q);
        a.mode = this.b;
        1 == this.b ? (e.sb = new Jl,
        S(e.sb, Ua, C(function() {
            e.uc || (e.sb.Pc() ? b(e.sb.Lb()) : (this.Dg(),
            b(null, e.sb.Lb() || null)),
            Nr(this, d))
        }, this)),
        S(e.sb, "timeout", C(function() {
            e.uc || (this.Eg(),
            Nr(this, d))
        }, this)),
        // e.sb.send(this.a.toString() + "&" + cr(a), sa, cr(f), {
        e.sb.send("/translate_a/t?anno=3&client=te&format=html&v=1.0&key&logld=vTE_20190916_00" + "&" + cr(a), sa, cr(f), {
            "Content-Type": "application/x-www-form-urlencoded"
        })) : (e.Xa = new XDomainRequest,
        e.Xa.timeout = 2E4,
        e.Xa.onload = C(function() {
            e.uc || (b(e.Xa.responseText),
            Nr(this, d))
        }, this),
        e.Xa.onerror = C(function() {
            e.uc || (this.Dg(),
            b(null),
            Nr(this, d))
        }, this),
        e.Xa.ontimeout = C(function() {
            e.uc || (this.Eg(),
            b(null),
            Nr(this, d))
        }, this),
        e.Xa.open(sa, this.a.toString() + "&" + cr(a)),
        e.Xa.send(cr(f)));
        this.f[d] = e;
        hr(c);
        return d
    }
    ;
    Mr.prototype.cancel = function(a) {
        var b = this.f[a];
        b && (b.uc = !0,
        b.Xa && b.Xa.abort(),
        Nr(this, a))
    }
    ;
    function Nr(a, b) {
        var c = a.f[b];
        c && (c.sb ? (c.sb.M(),
        c.sb = null) : c.Xa && (c.Xa = null),
        delete a.f[b])
    }
    Mr.prototype.F = function() {
        Mr.m.F.call(this);
        for (var a in this.f)
            this.cancel(a)
    }
    ;
    function Or(a, b, c) {
        Kr.call(this, a, c);
        this.f = b.proxyIsSupported;
        this.g = b.proxySend;
        this.b = b.proxyCancel
    }
    G(Or, Kr);
    Or.prototype.c = function() {
        return this.f()
    }
    ;
    Or.prototype.send = function(a, b) {
        return this.g(this.a.toString(), a, b)
    }
    ;
    Or.prototype.cancel = function(a) {
        this.b(a)
    }
    ;
    function Pr(a, b) {
        R.call(this);
        this.c = !0;
        this.b = a;
        this.a = b ? b : null
    }
    G(Pr, R);
    kr(47504, Pr.prototype, {
        Ii: function() {
            dr("te_afbr")
        }
    });
    function Qr(a, b) {
        if (!a.c)
            return b;
        if (A(b) != Ga)
            a = [[b, 200]];
        else if (2 == b.length && A(b[0]) != Ga && A(b[1]) != Ga)
            a = [[b[0], 200, b[1]], [b[1], 200, b[1]]];
        else {
            a = [];
            for (var c = 0; c < b.length; ++c)
                A(b[c]) != Ga ? a[c] = [b[c], 200] : a[c] = [b[c][0], 200, b[c][1]]
        }
        return a
    }
    Pr.prototype.g = function(a) {
        var b = this;
        return function(c) {
            if (c)
                try {
                    var d = c.indexOf("\x00");
                    0 <= d && (c = c.substr(0, d));
                    var e = JSON.parse(c)
                } catch (f) {
                    e = null,
                    b.Ii()
                }
            e ? a(Qr(b, e), 200) : a([], 500)
        }
    }
    ;
    Pr.prototype.f = function(a) {
        var b = this;
        return function(c) {
            c ? a(Qr(b, c), 200) : a([], 500)
        }
    }
    ;
    Pr.prototype.F = function() {
        Pr.m.F.call(this)
    }
    ;
    var gl = {
        0: "NO_ERROR",
        1: "UNKNOWN_ERROR",
        2: "JWT_TOKEN_CANNOT_PARSE",
        3: "JWT_TOKEN_MISS_PARAM",
        4: "JWT_TOKEN_INVALID_ISS",
        5: "JWT_TOKEN_INVALID",
        6: pa,
        7: "OUT_OF_QUOTA",
        8: pa
    };
    function Rr() {}
    Rr.prototype.b = fc();
    function Sr(a) {
        a = a.split(".");
        if (3 !== a.length)
            return !1;
        a = JSON.parse(xf(a[1]));
        return null == a || !a.exp || 1E3 * a.exp < D() ? !1 : !0
    }
    function Tr(a) {
        this.a = a
    }
    nc(Tr, Rr);
    Tr.prototype.b = function() {
        return Sr(this.a) ? el(this.a) : fl()
    }
    ;
    function Ur(a) {
        this.a = null;
        this.c = a
    }
    nc(Ur, Rr);
    Ur.prototype.b = function() {
        if (null != this.a && Sr(this.a))
            return el(this.a);
        this.a = null;
        return new $k(function(a, b) {
            var c = this;
            this.c(function(d) {
                c.a = d;
                Sr(c.a) ? a(d) : b(gl[5])
            }, b)
        }
        ,this)
    }
    ;
    function Vr(a, b, c, d, e, f) {
        R.call(this);
        var h;
        b ? h = {
            client: b
        } : h = {
            anno: 3,
            client: Iq,
            format: "html",
            v: "1.0"
        };
        c && (h.sp = c);
        h.key = a;
        Bq && (h.logld = "v" + Bq);
        this.s = d || null;
        this.Vb = e || null;
        this.a = null;
        this.b = {
            vc: C(this.G, this),
            Gg: 300
        };
        this.h = h;
        a = this.f = new Pr(h,f);
        b = Lq + Oq;
        this.g = a.a ? new Or(b,a.a,{
            client: Iq
        }) : new Lr(b,{
            client: Iq
        },"cb");
        a = this.f;
        if (a.a) {
            if (!a.a)
                throw Error("this.remoteApiProxyHandlers_ is null");
            a = [{
                na: new Or(Lq + Kq + ea,a.a,a.b),
                vc: C(a.f, a),
                Rd: 1900,
                bf: 4294967295,
                af: -1,
                tf: 0,
                hd: !1
            }]
        } else
            b = Lq + Kq,
            a = [{
                na: new Mr(b + ea,a.b),
                vc: C(a.g, a),
                Rd: 30720,
                bf: 4294967295,
                af: -1,
                tf: 0,
                hd: !1
            }, {
                na: new Lr(b + ea,a.b,"cb",I && 7 >= kf),
                vc: C(a.f, a),
                Rd: 1900,
                bf: 4294967295,
                af: -1,
                tf: 3,
                hd: !0
            }];
        this.o = new Wr(a);
        this.c = !1;
        for (b = 0; b < a.length; ++b)
            this.c = this.c || a[b].na.c();
        this.c || this.Ji()
    }
    G(Vr, R);
    kr(7361, Vr.prototype, {
        Ji: function() {
            dr("te_au")
        }
    });
    Vr.prototype.G = function(a) {
        return function(b) {
            if (b)
                try {
                    var c = JSON.parse(b)
                } catch (d) {
                    c = null
                }
            a(c && c[1] || void 0)
        }
    }
    ;
    function Wr(a) {
        this.b = a
    }
    Wr.prototype.start = function(a) {
        this.a = a;
        this.c = 0;
        Xr(this)
    }
    ;
    function Xr(a) {
        if (a.c >= a.b.length)
            a.a(null);
        else {
            var b = a.b[a.c++];
            b.fj ? $q(new Zq(C(b.na.Ua, b.na),C(function(c) {
                c ? this.a(b) : Xr(this)
            }, a),b.fj)) : b.na.Ua() ? a.a(b) : Xr(a)
        }
    }
    Vr.prototype.l = function(a) {
        this.B || (this.B = !0,
        this.o.start(C(function(b) {
            b && (this.a = b,
            this.b.na = b.na);
            a()
        }, this)))
    }
    ;
    Vr.prototype.Ua = function() {
        return null !== this.a && null !== this.a.na && this.a.na.Ua()
    }
    ;
    Vr.prototype.translate = function(a, b, c, d, e, f, h, k) {
        var l = this
          , m = this.a.vc(a)
          , n = {
            q: b,
            sl: c,
            tl: d
        };
        this.h.sp && 0 == this.h.sp.indexOf("nmt") || (n.sp = "nmt");
        n.tc = e;
        f && (n.ctt = 1);
        h && (n.dom = 1);
        k && (n.sr = 1);
        n[Fp()] = Dp(b.join(""), Jq);
        return this.s ? this.s.b().then(function(r) {
            null != r && (n.jwtt = r,
            n.rurl = location.hostname);
            return l.a.na.send(n, C(Yr(m), l))
        }, function(r) {
            r && l.Vb && l.Vb(r)
        }) : this.a.na.send(n, m)
    }
    ;
    function Yr(a) {
        return function(b, c) {
            if (c && this.Vb) {
                try {
                    var d = JSON.parse(c).error_code
                } catch (e) {
                    d = null
                }
                c = gl[1];
                this.Vb(null == d ? c : gl[d] || c)
            }
            a(b)
        }
    }
    function Zr(a, b) {
        b instanceof $k ? b.then(function(c) {
            a.a.na.cancel(c)
        }) : a.a.na.cancel(b)
    }
    Vr.prototype.F = function() {
        Vr.m.F.call(this);
        this.a && (this.a.na.M(),
        this.a.na = null);
        this.b.na = null;
        this.g.M();
        this.g = null
    }
    ;
    var $r = Uq(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", oa, "NOBR", "LABEL", "Q", "S", "SMALL", ua, "STRIKE", "STRONG", "SUB", "SUP", va, "TT", "U", "VAR"])
      , as = Uq(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", oa, va, wa])
      , bs = Uq(["BR", "CODE", "IMG", "KBD", "MAP", "OBJECT", "PARAM", ta, "STYLE", "WBR", "svg"])
      , cs = Uq(["submit", Ma]);
    function ds(a, b) {
        this.a = new kn(a,!1,b,3 == a.nodeType ? 0 : 1,1);
        this.c = I ? [] : null;
        for (this.b = []; a = a.parentNode; )
            es(this, a, !0);
        this.b.push(!1);
        this.b.reverse();
        for (a = 1; a < this.b.length; ++a)
            null == this.b[a] && (this.b[a] = this.b[a - 1]);
        this.f = !1
    }
    kr(52754, ds.prototype, {
        Pi: 1
    });
    function es(a, b, c) {
        var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
        "pre" == d || !d && "PRE" == b.tagName ? a.b.push(!0) : d && "pre" != d ? a.b.push(!1) : c ? a.b.push(null) : a.b.push(a.b[a.b.length - 1])
    }
    ds.prototype.node = function() {
        return this.a.node
    }
    ;
    ds.prototype.depth = function() {
        return this.a.depth
    }
    ;
    ds.prototype.next = function() {
        try {
            this.c && 0 < this.c.length && -1 == this.a.c && this.c.length--,
            -1 == this.a.c && this.b.length--,
            this.c && 0 < this.c.length && 1 != this.a.c && !this.a.node.nextSibling ? ln(this.a, this.c[this.c.length - 1], -1, this.a.depth - 1) : (this.a.next(),
            this.c && 1 == this.a.c && this.c.push(this.a.node)),
            1 == this.a.c && this.a.o && es(this, this.a.node)
        } catch (a) {
            a != xj && this.Pi(a),
            this.f = !0
        }
    }
    ;
    function fs() {
        return "[msg_undefined]"
    }
    var Z = {};
    (function() {
        function a(b) {
            return function() {
                return b
            }
        }
        Z = {
            Lf: a(0),
            Gf: a(1),
            Hf: a(2),
            ek: a(3),
            wh: a(4),
            If: a(5),
            nh: a(45),
            oh: a(6),
            rh: a(7),
            Wc: a(8),
            xh: a(9),
            sk: a(10),
            Bh: a(11),
            sh: a(12),
            mk: a(13),
            uh: a(14),
            lk: a(15),
            th: a(16),
            uk: a(17),
            yh: a(18),
            Hj: a(19),
            dk: a(20),
            mh: a(21),
            vh: a(22),
            jk: a(23),
            ik: a(24),
            gk: a(25),
            tk: a(26),
            rk: a(27),
            hk: a(28),
            ph: a(29),
            zh: a(30),
            Gj: a(32),
            Fj: a(33),
            Ah: a(34),
            Sj: a(35),
            Mj: a(36),
            Rj: a(37),
            Kf: a(38),
            Xj: a(39),
            Ff: a(40),
            qh: a(41),
            Jf: a(46)
        }
    }
    )();
    function gs(a) {
        return pk('<span id="' + X(a.id) + '"></span>')
    }
    function hs(a) {
        var b = a.id
          , c = a.Pg;
        return pk(ok(a.Qg) + '<div id="' + X(b) + '"></div>' + ok(c))
    }
    function is() {
        var a = I && !L("7.0");
        return pk('<span style="white-space:nowrap"><a class="goog-logo-link" href="' + X(wk(ub)) + '" target="_blank">' + (a ? "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png".replace(Kk, Ik) + "',sizingMethod='scale');\"></span>" : '<img src="' + X(Bk("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png")) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + X(Z.Wc) + '">') + ok(Z.Wc) + "</a></span>")
    }
    function js(a) {
        var b = a.Si;
        return pk('<div id="goog-gt-tt" class="skiptranslate" dir="' + X(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + X(Bk(b)) + '" width="20" height="20" alt="Google ' + X(Z.Wc) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + ok(Z.qh) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>')
    }
    function ks(a) {
        var b = a.method
          , c = a.Qh
          , d = a.dir;
        a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + X(wk(a.Eh)) + '" method="' + X(b) + '"><div class="form-buttons" style="text-align:';
        d = vc(d) && vc(Qb) ? d.Ib !== "rtl".Ib ? !1 : d.toString() === "rtl".toString() : d == Qb;
        d = a + (d ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + X(Z.vh) + '"><input class="activity-cancel" type="button" value="' + X(Z.Gf) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
        a = c.length;
        for (b = 0; b < a; b++)
            d += '<input type="hidden" name="' + X(c[b]) + '"/>';
        return pk(d + "</div></form></div>")
    }
    function ls() {
        return pk('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
    }
    function ms(a) {
        return pk('<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + ok(a.Bi) + '</div><div class="activity-form-container"></div></div>')
    }
    function ns() {
        return pk('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
    }
    ;function os(a) {
        T.call(this);
        a = a || {};
        this.id = a.id || si(this);
        this.Ye = a.Ye || "";
        this.Pd = a.Pd || null;
        this.Qd = a.Qd || null;
        this.cd = a.cd || !1;
        this.className = a.className || null;
        this.c = null
    }
    G(os, T);
    os.prototype.lc = gc("c");
    os.prototype.Ub = function() {
        if (!this.U)
            throw Error("Activity must be rendered before it can be resumed.");
        if (!this.c)
            throw Error("Activity must have a tooltip instance to be resumed");
    }
    ;
    os.prototype.Bb = fc();
    os.prototype.M = function() {
        this.ub || (os.m.M.call(this),
        delete this.Qd)
    }
    ;
    function ps() {
        ni.call(this);
        this.c = "closure_frame" + qs++;
        this.b = [];
        rs[this.c] = this
    }
    var ss;
    G(ps, ni);
    var rs = {}
      , qs = 0;
    function ts(a, b) {
        var c = Xf(a);
        Hj(b, function(d, e) {
            B(d) || (d = [d]);
            Kc(d, function(f) {
                f = c.D(oa, {
                    type: qb,
                    name: e,
                    value: f
                });
                a.appendChild(f)
            })
        })
    }
    v = ps.prototype;
    v.va = null;
    v.Y = null;
    v.ja = null;
    v.Pb = null;
    v.Wi = 0;
    v.ma = !1;
    v.wc = !1;
    v.Zd = !1;
    v.rb = null;
    v.We = null;
    v.Ha = 0;
    v.Ob = null;
    v.send = function(a, b, c, d) {
        if (this.ma)
            throw Error(ya);
        this.rb = a = new Kj(a);
        b = b ? b.toUpperCase() : "GET";
        c && (c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ D()).toString(36),
        a.a.set("zx", c));
        ss || (ss = kg("FORM"),
        ss.acceptCharset = "utf-8",
        c = ss.style,
        c.position = Ba,
        c.visibility = qb,
        c.top = c.left = "-10px",
        c.width = c.height = "10px",
        c.overflow = qb,
        document.body.appendChild(ss));
        this.Y = ss;
        "GET" == b && ts(this.Y, a.a);
        d && ts(this.Y, d);
        d = this.Y;
        a = a.toString();
        or();
        ye(d, new Fd(Gd,a));
        this.Y.method = b;
        us(this);
        vs(this)
    }
    ;
    function ws(a, b) {
        if (a.ma)
            throw Error(ya);
        var c = new Kj(b.action);
        a.rb = c;
        a.Y = b;
        ye(a.Y, c.toString());
        us(a)
    }
    v.abort = function(a) {
        this.ma && (di(xs(this)),
        this.Zd = this.ma = this.wc = !1,
        this.Ha = a || 7,
        this.dispatchEvent("abort"),
        ys(this))
    }
    ;
    v.F = function() {
        this.ma && this.abort();
        ps.m.F.call(this);
        this.ja && zs(this);
        vs(this);
        delete this.f;
        this.rb = this.We = this.Y = null;
        this.Ha = 0;
        delete rs[this.c]
    }
    ;
    v.Ld = t("wc");
    v.Pc = t("Zd");
    v.fc = t("ma");
    v.Lb = t("We");
    v.ze = t("rb");
    v.ye = t("Ha");
    function us(a) {
        a.ma = !0;
        a.wc = !1;
        a.Ha = 0;
        a.Pb = a.c + "_" + (a.Wi++).toString(36);
        a.ja = Xf(a.Y).D(na, {
            name: a.Pb,
            id: a.Pb
        });
        I && 7 > Number(kf) && ye(a.ja, new Fd(Gd,ld(new id(jd,'javascript:""'))));
        var b = a.ja.style;
        b.visibility = qb;
        b.width = b.height = "10px";
        b.display = q;
        K ? b.marginTop = b.marginLeft = "-10px" : (b.position = Ba,
        b.top = b.left = "-10px");
        if (I && !L("11")) {
            a.Y.target = a.Pb || "";
            Xf(a.Y).a.body.appendChild(a.ja);
            S(a.ja, Pb, a.jf, !1, a);
            try {
                a.a = !1,
                a.Y.submit()
            } catch (w) {
                bi(a.ja, Pb, a.jf, !1, a),
                As(a, 1)
            }
        } else {
            Xf(a.Y).a.body.appendChild(a.ja);
            b = a.Pb + "_inner";
            var c = Eg(a.ja);
            if (document.baseURI) {
                var d = He(b);
                d = '<head><base href="' + He(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>';
                d = se(d, null)
            } else
                d = He(b),
                d = se('<body><iframe id="' + d + '" name="' + d + '"></iframe>', null);
            Te && !K ? xe(c.documentElement, d) : c.write(ke(d));
            S(c.getElementById(b), zb, a.Td, !1, a);
            var e = $f(va, a.Y);
            d = 0;
            for (var f = e.length; d < f; d++) {
                var h = e[d].value;
                Og(e[d]) != h && (Gg(e[d], h),
                e[d].value = h)
            }
            e = c.importNode(a.Y, !0);
            e.target = b;
            e.action = a.Y.action;
            c.body.appendChild(e);
            h = $f("SELECT", a.Y);
            var k = $f("SELECT", e);
            d = 0;
            for (f = h.length; d < f; d++)
                for (var l = $f(qa, h[d]), m = $f(qa, k[d]), n = 0, r = l.length; n < r; n++)
                    m[n].selected = l[n].selected;
            h = $f(oa, a.Y);
            k = $f(oa, e);
            d = 0;
            for (f = h.length; d < f; d++)
                if ("file" == h[d].type && h[d].value != k[d].value) {
                    a.Y.target = b;
                    e = a.Y;
                    break
                }
            try {
                a.a = !1,
                e.submit(),
                c.close(),
                J && sl(a.gh, 250, a)
            } catch (w) {
                bi(c.getElementById(b), zb, a.Td, !1, a),
                c.close(),
                As(a, 2)
            }
        }
    }
    v.jf = function() {
        if (this.ja.readyState == Ua) {
            bi(this.ja, Pb, this.jf, !1, this);
            try {
                var a = Eg(this.ja);
                if (I && "about:blank" == a.location && !navigator.onLine) {
                    As(this, 9);
                    return
                }
            } catch (b) {
                As(this, 1);
                return
            }
            Bs(this, a)
        }
    }
    ;
    v.Td = function() {
        if (!Te || K || "about:blank" != (this.ja ? Eg(xs(this)) : null).location) {
            bi(xs(this), zb, this.Td, !1, this);
            try {
                Bs(this, this.ja ? Eg(xs(this)) : null)
            } catch (a) {
                As(this, 1)
            }
        }
    }
    ;
    function Bs(a, b) {
        a.wc = !0;
        a.ma = !1;
        try {
            var c = b.body;
            a.We = c.textContent || c.innerText
        } catch (e) {
            var d = 1
        }
        d || typeof a.f != p || (b = a.f(b)) && (d = 4);
        d ? As(a, d) : (a.Zd = !0,
        a.Ha = 0,
        a.dispatchEvent(Ua),
        a.dispatchEvent("success"),
        ys(a))
    }
    function As(a, b) {
        a.a || (a.Zd = !1,
        a.ma = !1,
        a.wc = !0,
        a.Ha = b,
        a.dispatchEvent(Ua),
        a.dispatchEvent("error"),
        ys(a),
        a.a = !0)
    }
    function ys(a) {
        zs(a);
        vs(a);
        a.Y = null;
        a.dispatchEvent(Ob)
    }
    function zs(a) {
        var b = a.ja;
        b && (b.onreadystatechange = null,
        b.onload = null,
        b.onerror = null,
        a.b.push(b));
        a.Ob && (tl(a.Ob),
        a.Ob = null);
        J || Te && !K ? a.Ob = sl(a.Vf, 2E3, a) : a.Vf();
        a.ja = null;
        a.Pb = null
    }
    v.Vf = function() {
        this.Ob && (tl(this.Ob),
        this.Ob = null);
        for (; 0 != this.b.length; ) {
            var a = this.b.pop();
            ug(a)
        }
    }
    ;
    function vs(a) {
        a.Y && a.Y == ss && rg(a.Y)
    }
    function xs(a) {
        return a.ja ? I && !L("11") ? a.ja : Eg(a.ja).getElementById(a.Pb + "_inner") : null
    }
    v.gh = function() {
        if (this.ma) {
            var a = this.ja ? Eg(xs(this)) : null;
            a && !Re(a, "documentUri") ? (bi(xs(this), zb, this.Td, !1, this),
            navigator.onLine ? As(this, 3) : As(this, 9)) : sl(this.gh, 250, this)
        }
    }
    ;
    function Cs(a, b) {
        T.call(this);
        this.l = a || "";
        this.f = null;
        this.h = [];
        this.a = null;
        this.o = b || "GET";
        this.c = this.g = null
    }
    G(Cs, T);
    v = Cs.prototype;
    v.D = function() {
        var a = {
            Eh: this.l,
            method: this.o,
            Qh: this.h,
            dir: nd.test(Cq) ? Qb : "ltr"
        };
        this.S(kk(ks, a))
    }
    ;
    v.S = function(a) {
        this.A = a;
        this.a = ui(this, "activity-form");
        a = ui(this, "activity-submit");
        this.c = new sj("");
        yi(this.c, a);
        a = ui(this, "activity-cancel");
        this.f = new sj("");
        yi(this.f, a)
    }
    ;
    v.O = function() {
        var a = U(this);
        a.w(this.c, Ca, C(this.rj, this));
        a.w(this.f, Ca, C(this.dispatchEvent, this, Na))
    }
    ;
    v.rj = function() {
        var a = !0;
        this.g && (a = this.g());
        a && (a = new ps,
        S(a, "success", function() {
            this.dispatchEvent("successful")
        }),
        S(a, "error", function() {
            this.dispatchEvent("failed")
        }),
        ws(a, this.a));
        this.dispatchEvent(Vb)
    }
    ;
    function Ds(a, b) {
        for (var c in b)
            a.a[c] && (a.a[c].value = b[c])
    }
    function Es(a, b) {
        return a.a[b] ? a.a[b].value : ""
    }
    v.F = function() {
        this.c = this.a = this.f = null;
        Cs.m.F.call(this)
    }
    ;
    function Fs(a, b) {
        a.g = b
    }
    ;function Gs(a, b) {
        os.call(this, a);
        this.f = null;
        this.o = b || {};
        this.h = new en;
        this.l = this.a = null;
        this.g = new Vr((a || {}).$a || "",kq);
        this.g.f.c = !1
    }
    G(Gs, os);
    var kq = Iq.replace("_", "-") + "-alt";
    v = Gs.prototype;
    v.lc = function(a) {
        Gs.m.lc.call(this, a);
        this.g.l(C(this.Ub, this))
    }
    ;
    v.Ub = function() {
        Gs.m.Ub.call(this);
        var a = this.c.J
          , b = this.c.o;
        if (a && b) {
            Gg(this.l, a);
            var c = this.h;
            c.A = b;
            sg(c.a, c.A);
            fn(c);
            Q(this.h.a, !0);
            b = this.c.cb();
            c = this.c.oa();
            if (this.g.Ua() && b && c) {
                var d = this.c.Mc()
                  , e = C(this.$i, this);
                this.g && this.g.translate(e, {
                    dj: [d],
                    zk: !0,
                    Dk: !1
                }.dj, b, c, 0, !1);
                Ds(this.a, {
                    gtrans: a,
                    text: this.c.Mc(),
                    hl: Cq,
                    langpair: b + "|" + c
                });
                Ds(this.a, this.o);
                Ds(this.a, {
                    client: kq
                })
            }
            this.dispatchEvent(Ob)
        }
    }
    ;
    v.D = function() {
        this.S(kk(ms, {
            Bi: Z.Ff
        }))
    }
    ;
    v.S = function(a) {
        this.A = a;
        this.l = ui(this, "alt-translated-text");
        var b = ui(this, Ea);
        this.a = new Cs(Sq,sa);
        this.a.h = Zc(this.o);
        Fs(this.a, C(function() {
            Ds(this.a, {
                utrans: uq(this.f)
            });
            return Es(this.a, "utrans") != Es(this.a, "gtrans")
        }, this));
        this.a.fa(b);
        np = Z.Ah;
        cp = Z.Ff;
        this.f = new gq(void 0,!0,a);
        hq(this.f, this.h);
        iq(this.f);
        jq(this.f);
        yi(this.f, this.l)
    }
    ;
    v.O = function() {
        Gs.m.O.call(this);
        var a = U(this);
        a.w(this.a, Na, C(function() {
            xq(this.f);
            this.dispatchEvent(Na)
        }, this));
        a.w(this.a, Vb, C(function() {
            var b = uq(this.f);
            this.c.J = b && ud(b);
            this.dispatchEvent(Vb);
            b = this.c.xa();
            Gg(b.j(), Z.Kf)
        }, this))
    }
    ;
    v.$i = function(a) {
        a && lq(this.f, a)
    }
    ;
    v.Bb = function() {
        Q(this.h.a, !1)
    }
    ;
    v.F = function() {
        this.f && this.f.M();
        this.l = this.h = this.f = null;
        this.g && this.g.M();
        this.g = null;
        this.a && this.a.M();
        this.a = null;
        Gs.m.F.call(this)
    }
    ;
    function Hs(a, b) {
        os.call(this, a);
        this.h = !1;
        this.g = b || {};
        this.f = null
    }
    G(Hs, os);
    v = Hs.prototype;
    v.lc = function(a) {
        Hs.m.lc.call(this, a);
        U(this).w(this.f.j(), xb, C(this.c.Sc, this.c, !1));
        this.h = this.c.sc;
        this.Ub()
    }
    ;
    v.Ub = function() {
        Hs.m.Ub.call(this);
        this.f.Nb(this.c.J);
        var a = this.c.cb()
          , b = this.c.oa();
        a && b && (Ds(this.a, {
            gtrans: this.c.J,
            text: this.c.Mc(),
            hl: Cq,
            langpair: a + "|" + b
        }),
        Ds(this.a, this.g));
        this.dispatchEvent(Ob);
        this.f.j().focus()
    }
    ;
    v.Bb = function() {
        this.c.Sc(this.h)
    }
    ;
    v.D = function() {
        this.S(kk(ls))
    }
    ;
    v.S = function(a) {
        this.A = a;
        a = ui(this, "contribute-original-text");
        this.f = new pp("");
        yi(this.f, a);
        vp(this.f);
        tp(this.f);
        a = ui(this, Ea);
        this.a = new Cs(Sq,sa);
        this.a.h = Zc(this.g);
        Fs(this.a, C(function() {
            Ds(this.a, {
                utrans: ud(this.f.Aa())
            });
            return Es(this.a, "utrans") != Es(this.a, "gtrans")
        }, this));
        this.a.fa(a)
    }
    ;
    v.O = function() {
        Hs.m.O.call(this);
        var a = U(this);
        a.w(this.a, Na, C(function() {
            this.dispatchEvent(Na)
        }, this));
        a.w(this.a, Vb, C(function() {
            var b = this.f.Aa();
            this.c.J = b && ud(b);
            this.dispatchEvent(Vb);
            b = this.c.xa();
            Gg(b.j(), Z.Kf)
        }, this))
    }
    ;
    v.F = function() {
        this.f && this.f.M();
        this.f = null;
        this.a && this.a.M();
        this.a = null;
        Hs.m.F.call(this)
    }
    ;
    function Is(a) {
        ni.call(this);
        this.h = a;
        this.g = {};
        this.c = new hi(this);
        this.f = null
    }
    G(Is, ni);
    Is.prototype.eh = fc();
    Is.prototype.fh = fc();
    Is.prototype.F = function() {
        this.c.M();
        this.c = null
    }
    ;
    function Js(a, b, c) {
        if (b = a.h.c[b]) {
            c = c || "undefined" == typeof c;
            for (var d = 0; d < b.Ba.length; ++d)
                b.Ba[d] && a.zg(b.Ba[d], c)
        }
    }
    Is.prototype.zg = function(a, b) {
        P(a, "backgroundColor", b ? "#E6ECF9" : "");
        P(a, "color", b ? "#000" : "")
    }
    ;
    var bd = {}
      , Ks = null;
    function Ls(a) {
        a = xc(a);
        delete bd[a];
        ad() && Ks && Ks.stop()
    }
    function Ms() {
        Ks || (Ks = new ul(function() {
            Ns()
        }
        ,20));
        var a = Ks;
        a.fc() || a.start()
    }
    function Ns() {
        var a = D();
        Xc(bd, function(b) {
            Os(b, a)
        });
        ad() || Ms()
    }
    ;function Ps(a, b, c, d) {
        Pm.call(this);
        if (!B(a) || !B(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.g = a;
        this.B = b;
        this.duration = c;
        this.o = d;
        this.coords = [];
        this.progress = 0
    }
    G(Ps, Pm);
    v = Ps.prototype;
    v.play = function(a) {
        if (a || 0 == this.a)
            this.progress = 0,
            this.coords = this.g;
        else if (1 == this.a)
            return !1;
        Ls(this);
        this.b = a = D();
        -1 == this.a && (this.b -= this.duration * this.progress);
        this.endTime = this.b + this.duration;
        this.progress || this.c();
        this.Qa("play");
        -1 == this.a && this.Qa("resume");
        this.a = 1;
        var b = xc(this);
        b in bd || (bd[b] = this);
        Ms();
        Os(this, a);
        return !0
    }
    ;
    v.stop = function(a) {
        Ls(this);
        this.a = 0;
        a && (this.progress = 1);
        Qs(this, this.progress);
        this.Bb();
        this.f()
    }
    ;
    v.vf = function(a) {
        this.progress = a;
        1 == this.a && (this.b = D() - this.duration * this.progress,
        this.endTime = this.b + this.duration)
    }
    ;
    v.F = function() {
        0 == this.a || this.stop(!1);
        this.Qa("destroy");
        Ps.m.F.call(this)
    }
    ;
    function Os(a, b) {
        b < a.b && (a.endTime = b + a.endTime - a.b,
        a.b = b);
        a.progress = (b - a.b) / (a.endTime - a.b);
        1 < a.progress && (a.progress = 1);
        Qs(a, a.progress);
        1 == a.progress ? (a.a = 0,
        Ls(a),
        a.Qa($a),
        a.f()) : 1 == a.a && a.ff()
    }
    function Qs(a, b) {
        vc(a.o) && (b = a.o(b));
        a.coords = Array(a.g.length);
        for (var c = 0; c < a.g.length; c++)
            a.coords[c] = (a.B[c] - a.g[c]) * b + a.g[c]
    }
    v.ff = function() {
        this.Qa("animate")
    }
    ;
    v.Qa = function(a) {
        this.dispatchEvent(new Rs(a,this))
    }
    ;
    function Rs(a, b) {
        Dh.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.duration = b.duration;
        this.progress = b.progress
    }
    G(Rs, Dh);
    function Ss(a, b, c, d, e) {
        Ps.call(this, b, c, d, e);
        this.h = a
    }
    G(Ss, Ps);
    Ss.prototype.s = z;
    Ss.prototype.ff = function() {
        this.s();
        Ss.m.ff.call(this)
    }
    ;
    Ss.prototype.f = function() {
        this.s();
        Ss.m.f.call(this)
    }
    ;
    Ss.prototype.c = function() {
        this.s();
        Ss.m.c.call(this)
    }
    ;
    function Ts(a, b, c, d, e) {
        qc(b) && (b = [b]);
        qc(c) && (c = [c]);
        Ss.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length)
            throw Error("Start and end points must be 1D");
        this.l = -1
    }
    G(Ts, Ss);
    var Us = 1 / 1024;
    Ts.prototype.s = function() {
        var a = this.coords[0];
        if (Math.abs(a - this.l) >= Us) {
            var b = this.h.style;
            "opacity"in b ? b.opacity = a : "MozOpacity"in b ? b.MozOpacity = a : "filter"in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
            this.l = a
        }
    }
    ;
    Ts.prototype.c = function() {
        this.l = -1;
        Ts.m.c.call(this)
    }
    ;
    Ts.prototype.f = function() {
        this.l = -1;
        Ts.m.f.call(this)
    }
    ;
    function Vs(a, b, c) {
        Ts.call(this, a, 1, 0, b, c)
    }
    G(Vs, Ts);
    Vs.prototype.c = function() {
        this.h.style.display = "";
        Vs.m.c.call(this)
    }
    ;
    Vs.prototype.f = function() {
        this.h.style.display = q;
        Vs.m.f.call(this)
    }
    ;
    function Ws(a, b, c) {
        Ts.call(this, a, 0, 1, b, c)
    }
    G(Ws, Ts);
    Ws.prototype.c = function() {
        this.h.style.display = "";
        Ws.m.c.call(this)
    }
    ;
    function Xs() {
        T.call(this);
        this.a = null
    }
    G(Xs, T);
    v = Xs.prototype;
    v.D = function() {
        this.S(this.b.D(g, {
            "class": Tb
        }))
    }
    ;
    v.S = function(a) {
        this.A = a;
        a.style.display = q
    }
    ;
    function Ys(a) {
        var b = c;
        var c = C(function() {
            Gg(this.j(), "");
            b && b()
        }, a);
        c = C(a.Ci, a, 750, c);
        Zs(a, c)
    }
    function $s(a) {
        a.a && (a.a.stop(!0),
        a.a = null);
        Gg(a.j(), "");
        a.I(!1)
    }
    function Zs(a, b) {
        a.a = new Ws(a.j(),750);
        U(a).Ab(a.a, "begin", C(function() {
            this.j().style.display = "block"
        }, a));
        U(a).Ab(a.a, $a, C(function() {
            this.a = null;
            window.setTimeout(b, 2E3)
        }, a));
        a.a.play()
    }
    v.Ci = function(a, b) {
        this.isVisible() && (this.a = new Vs(this.j(),a),
        U(this).Ab(this.a, $a, C(function() {
            b && b()
        }, this)),
        this.a.play())
    }
    ;
    v.I = function(a) {
        this.j().style.display = a ? "block" : q;
        this.j().style.opacity = a ? "1" : "0"
    }
    ;
    v.isVisible = function() {
        return this.j().style.display !== q && "0" !== this.j().style.opacity
    }
    ;
    function at() {
        Po.call(this);
        this.P = {};
        this.jb = {};
        this.K = null;
        this.Xc = !1;
        this.tb = this.f = this.H = null;
        this.W = {};
        this.l = new hi(this);
        this.o = this.c = this.g = this.Ya = this.a = this.J = this.ra = null;
        this.C = !0;
        this.Za = []
    }
    G(at, Po);
    v = at.prototype;
    v.fa = function() {
        this.C = !1;
        var a = nd.test(Cq) ? Qb : "ltr";
        this.bc(kk(js, {
            Si: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
            yk: vb,
            Bk: Nq,
            dir: a
        }));
        this.className += " skiptranslate";
        this.j() && this.K && this.Ya && this.g.j() && this.H && this.o && (this.l.w(window, "resize", C(this.ob, this)),
        this.l.w(this, rb, C(this.bj, this)),
        this.Za.length && (this.ge.apply(this, this.Za),
        this.Za = []))
    }
    ;
    v.ge = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
            var d = arguments[c];
            if (d)
                if (this.K || d.Qd) {
                    var e = d;
                    var f = kg(ua, {
                        "class": e.className || "activity-link"
                    });
                    Gg(f, e.Ye || "");
                    e = f;
                    b.push(e);
                    qg(d.Qd || this.K, e);
                    d.lc && d.Bb && (f = C(this.Wh, this, d),
                    this.l.w(e, Sa, f),
                    d.Pd && this.l.w(this.H, d.Pd, f));
                    d.id = d.id || si(d);
                    this.P[d.id] && this.Rg(d);
                    this.P[d.id] = d;
                    this.jb[d.id] = e
                } else
                    this.Za.push(d)
        }
        return b
    }
    ;
    v.Rg = function(a) {
        for (var b = 0; b < arguments.length; ++b) {
            var c = typeof arguments[b] === Ub || arguments[b]instanceof String ? arguments[b] : arguments[b].id
              , d = this.P[c]
              , e = this.jb[c];
            d && e && (this.f && this.f.id === c && this.oe(),
            this.l.ba(d, [Vb, Na]),
            d.M(),
            this.W[c] && delete this.W[c],
            delete this.P[c],
            delete this.jb[c],
            ug(e))
        }
    }
    ;
    v.Wh = function(a) {
        if (this.H) {
            a != this.f && this.f && ($s(this.g),
            this.f.Bb.call(this.f),
            this.f.j() && (this.f.j().style.display = q),
            bt(this, !1),
            this.f = null);
            bt(this, !0);
            $s(this.g);
            this.f = a;
            if (this.W[a.id]) {
                var b = this.W[a.id];
                var c = a.Ub
            } else
                a.fa(),
                b = a.j(),
                c = a.lc,
                this.l.w(a, [Vb, Na], C(this.oe, this)),
                a.cd && (this.W[a.id] = b);
            qg(this.H, b);
            c.call(a, this);
            a = new Ws(b,100);
            this.l.Ab(a, $a, C(this.ob, this, !0, !0));
            a.play()
        }
    }
    ;
    v.oe = function() {
        if (this.f)
            if ($s(this.g),
            this.f.Bb.call(this.f),
            this.f.j()) {
                var a = new Vs(this.f.j(),100);
                this.l.Ab(a, $a, C(function() {
                    ug(this.f.j());
                    this.f = null;
                    bt(this, !1);
                    Mg(this.g.j()) && (Ys(this.g),
                    this.ob(!0, !0))
                }, this));
                a.play()
            } else
                bt(this, !1),
                this.f = null
    }
    ;
    v.cf = function(a, b) {
        this.tb = a;
        at.m.cf.call(this, a, b);
        this.j().style.display = "block"
    }
    ;
    v.Je = function(a) {
        if (!this.C) {
            var b = Yo(this, a.target);
            this.za = b;
            this.Yb();
            b != this.b ? (this.b = b,
            Zo(this, b),
            $o(this),
            Xo(this, a)) : Zo(this, b)
        }
    }
    ;
    v.bj = function() {
        $s(this.g);
        this.Xc && this.oe()
    }
    ;
    v.F = function() {
        for (var a in this.P)
            this.Rg(a);
        this.l && this.l.M();
        this.l = null;
        this.g && this.g.M();
        this.o = this.Ya = this.tb = this.H = this.K = this.g = null;
        at.m.F.call(this)
    }
    ;
    function bt(a, b) {
        a.Xc = b;
        a.C = b;
        if (a.C) {
            var c = a.j();
            a.ra = new N(c.offsetLeft,c.offsetTop)
        } else
            a.ra && (null != (a.s || null) && ((a.s || null).a = a.ra),
            Xg(a.j(), a.ra),
            a.ra = null);
        a.K.style.display = b ? q : "inline-block";
        a.Ya.style.display = b ? "inline-block" : q
    }
    v.Sc = function(a) {
        this.isVisible() ? (this.sc = a,
        (this.sc ? this.h.w : this.h.ba).call(this.h, O(this.j()), Ab, this.gf, !0)) : at.m.Sc.call(this, a)
    }
    ;
    v.bc = function(a) {
        at.m.bc.call(this, a);
        if (a) {
            this.K = cg("activity-links", a);
            var b = cg(Tb, a);
            b && (this.g = new Xs,
            yi(this.g, b));
            this.Ya = cg("started-activity-container", a);
            this.H = cg("activity-root", a);
            this.o = cg("original-text", a)
        }
    }
    ;
    v.ob = function(a, b) {
        var c = ch(document.body).y;
        if (this.s) {
            (this.s || null).a.y += c;
            at.m.ob.call(this);
            var d = parseInt(this.j().style.left, 10);
            a = parseInt(this.j().style.top, 10) - (a ? 0 : c);
            b && (b = this.$e || {},
            a -= b.top || 10,
            d -= b.left || 10);
            a -= c;
            (this.s || null).a.y = a;
            (this.s || null).a.x = d;
            Xg(this.j(), new N(d,a))
        }
    }
    ;
    v.I = function(a) {
        at.m.I.call(this, a)
    }
    ;
    v.Tb = gc("a");
    v.ta = gc("c");
    v.Pa = function(a) {
        a = a ? ud(a) : "";
        this.o ? Gg(this.o, a) : at.m.Pa.call(this, a)
    }
    ;
    v.cb = t("a");
    v.xa = t("g");
    v.oa = t("c");
    v.Mc = function() {
        return this.o ? Mg(this.o) : at.m.Mc.call(this)
    }
    ;
    v.cc = function(a) {
        this.C || at.m.cc.call(this, a)
    }
    ;
    v.Gd = function(a) {
        this.C || at.m.Gd.call(this, a)
    }
    ;
    v.Fd = function(a) {
        this.C || at.m.Fd.call(this, a)
    }
    ;
    var ct = {
        set: function(a, b) {
            a.className = b
        },
        get: function(a) {
            a = a.className;
            return y(a) && a.match(/\S+/g) || []
        },
        add: function(a, b) {
            var c = ct.get(a)
              , d = Vc(arguments, 1)
              , e = c.length + d.length;
            ct.Nf(c, d);
            ct.set(a, c.join(" "));
            return c.length == e
        },
        remove: function(a, b) {
            var c = ct.get(a)
              , d = Vc(arguments, 1)
              , e = ct.ag(c, d);
            ct.set(a, e.join(" "));
            return e.length == c.length - d.length
        },
        Nf: function(a, b) {
            for (var c = 0; c < b.length; c++)
                Qc(a, b[c]) || a.push(b[c])
        },
        ag: function(a, b) {
            return Lc(a, function(c) {
                return !Qc(b, c)
            })
        },
        sj: function(a, b, c) {
            for (var d = ct.get(a), e = !1, f = 0; f < d.length; f++)
                d[f] == b && (Uc(d, f--, 1),
                e = !0);
            e && (d.push(c),
            ct.set(a, d.join(" ")));
            return e
        },
        xk: function(a, b, c) {
            var d = ct.get(a);
            y(b) ? Rc(d, b) : B(b) && (d = ct.ag(d, b));
            y(c) && !Qc(d, c) ? d.push(c) : B(c) && ct.Nf(d, c);
            ct.set(a, d.join(" "))
        },
        has: function(a, b) {
            return Qc(ct.get(a), b)
        },
        enable: function(a, b, c) {
            c ? ct.add(a, b) : ct.remove(a, b)
        },
        toggle: function(a, b) {
            var c = !ct.has(a, b);
            ct.enable(a, b, c);
            return c
        }
    };
    function dt(a, b) {
        Is.call(this, a);
        b = b || {};
        this.a = {
            $a: b.$a || "",
            Kb: b.Kb || 1
        };
        this.b = null
    }
    G(dt, Is);
    v = dt.prototype;
    v.eh = function(a, b) {
        b && (b.a = a,
        Qo(this.b, b))
    }
    ;
    v.fh = function(a) {
        a && So(this.b, a)
    }
    ;
    v.Aj = function() {
        var a = this.b.tb;
        if (a && void 0 !== a.a) {
            var b = a.a;
            a = this.h.c[b];
            Js(this, this.f, !1);
            this.f = b;
            Js(this, b);
            this.b.Tb(a.qj);
            this.b.ta(a.Bj);
            b = a.T;
            this.b.J = b && ud(b);
            this.b.Pa(a.text)
        }
    }
    ;
    v.zj = function() {
        Js(this, this.f, !1)
    }
    ;
    v.Mg = function() {
        this.h.c[this.f].Ph.dispatchEvent("updating")
    }
    ;
    v.F = function() {
        this.b.M();
        this.b = null;
        dt.m.F.call(this)
    }
    ;
    v.zg = function(a, b) {
        // ct[b ? "add" : "remove"](a, "goog-text-highlight")
    }
    ;
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var et = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    function ft(a) {
        this.h = a;
        this.c = this.a = this.f = this.b = -1;
        this.g = !1;
        this.s = 0;
        this.o = "";
        this.B = 0
    }
    ft.prototype.start = function() {
        if (!this.g) {
            this.g = !0;
            var a = [], b;
            var c = 62;
            for (b = 0; 15 > b; b++)
                a[b] = et[0 | Math.random() * c];
            this.o = a.join("");
            this.s = 0;
            this.c = this.a = this.f = this.b = -1;
            this.B = D();
            sl(this.l, 1E4, this)
        }
    }
    ;
    ft.prototype.stop = function() {
        this.g && (this.g = !1,
        gt(this))
    }
    ;
    ft.prototype.l = function() {
        this.g && (gt(this),
        sl(this.l, 1E3, this))
    }
    ;
    function gt(a) {
        var b = a.h.f
          , c = a.h.h
          , d = a.h.c
          , e = a.h.g;
        if (a.b != b || a.f != c || a.a != d || a.c != e) {
            var f = {};
            f.ct = b;
            f.cv = c;
            f.cts = d;
            f.cvs = e;
            f.sid = a.o;
            f.seq = a.s++;
            f.tat = D() - a.B;
            if (0 <= a.b || 0 <= a.f || 0 <= a.a || 0 <= a.c)
                f.pt = a.b,
                f.pv = a.f,
                f.pts = a.a,
                f.pvs = a.c;
            dr("te_v", f);
            a.b = b;
            a.f = c;
            a.a = d;
            a.c = e
        }
    }
    ;function ht() {
        this.g = this.c = this.h = this.f = 0;
        this.a = [];
        this.b = null != x.IntersectionObserver ? new IntersectionObserver(C(this.l, this)) : null
    }
    kr(36546, ht.prototype, {
        Cg: 1
    });
    var it = "_gt_" + Math.random().toString(36).substr(2);
    ht.prototype.reset = function() {
        this.g = this.c = this.h = this.f = 0;
        this.a = []
    }
    ;
    ht.prototype.l = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (0 < c.intersectionRatio && null != c.target[it]) {
                this.h += Mg(c.target).length;
                var d = c.target[it];
                this.g += this.a[d];
                this.a[d] = 0;
                c.target[it] = void 0
            }
        }
    }
    ;
    function jt(a, b) {
        R.call(this);
        a = a || {};
        this.a = dd(a);
        this.a.Kb = a.Kb;
        this.a.yf = !!a.yf;
        this.a.Kh = parseInt(a.Kh, 10) || 300;
        this.a.gj = a.gj;
        this.a.trackVisibility = a.trackVisibility || !1;
        this.h = 0;
        this.c = {};
        this.l = new hi(this);
        this.f = new dt(this,this.a);
        b && (this.f.g = b || {});
        a = this.f;
        a.b = new at({
            pj: a.a.pj
        });
        a.b.yg = 300;
        a.b.Zg = 1E3;
        a.b.Sc(!0);
        a.c.w(a.b, "show", C(a.Aj, a));
        a.c.w(a.b, rb, C(a.zj, a));
        b = new Gs({
            $a: a.a.$a,
            id: "alternate",
            Ye: Z.mh,
            cd: !0
        },a.g);
        a.b.ge(b);
        a.c.w(b, Vb, C(a.Mg, a));
        a.a.Kb && (b = new Hs({
            id: "contribute",
            Pd: Xa,
            cd: !0
        },a.g),
        a.b.ge(b),
        a.c.w(b, Vb, C(a.Mg, a)));
        a.b.fa();
        this.g = this.b = null;
        this.a.trackVisibility && null != x.IntersectionObserver && (this.b = new ht,
        this.g = new ft(this.b))
    }
    G(jt, R);
    function kt(a, b, c, d, e, f) {
        d = a.c[++a.h] = {
            id: a.h.toString(),
            Ph: f,
            text: c,
            Ek: e || c,
            T: d,
            qj: a.s,
            Bj: a.o,
            Ba: b
        };
        for (e = 0; e < b.length; ++e)
            b[e] && a.f.eh(d.id, b[e]);
        if (a.b)
            for (e = a.b,
            f = c.length,
            e.c += f,
            c = e.a.length,
            e.a.push(f),
            f = 0; f < b.length; ++f) {
                var h = e
                  , k = b[f];
                yg(k) ? (k[it] = c,
                h.f += Mg(k).length,
                h.b && h.b.observe(k)) : h.Cg(k.nodeType)
            }
        a.g && a.g.start();
        return d.id
    }
    function lt(a) {
        a.g && a.g.stop();
        for (var b in a.c) {
            var c = a
              , d = b
              , e = c.c[d];
            if (e) {
                if (c.b)
                    for (var f = c.b, h = e.Ba, k = 0; k < h.length; ++k) {
                        var l = f
                          , m = h[k];
                        yg(m) ? (m[it] = void 0,
                        l.b && l.b.unobserve(m)) : l.Cg(m.nodeType)
                    }
                for (f = 0; f < e.Ba.length; ++f)
                    e.Ba[f] && c.f.fh(e.Ba[f]);
                delete c.c[d]
            }
        }
        a.b && a.b.reset()
    }
    jt.prototype.F = function() {
        lt(this);
        this.l.M();
        this.l = null;
        this.f.M();
        this.f = null
    }
    ;
    function mt(a) {
        for (var b = 0; b < a.length; ++b)
            if (a[b] && a[b].node)
                return a[b].node;
        return null
    }
    function nt(a) {
        var b = mt(a);
        if (!b)
            return null;
        var c = []
          , d = []
          , e = [];
        b = new ds(b,!0);
        var f = a[a.length - 1].node
          , h = 0
          , k = !1;
        do {
            b.next();
            var l = b.node();
            if (!l)
                break;
            var m = b.a.c
              , n = b.depth();
            for (1 == m && --n; h < a.length && !a[h].node; )
                ++h;
            l == a[h].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !ot(pt(l))) ? (m = qt(l),
            d.push({
                node: m,
                Pa: fc()
            }),
            e[d.length - 1] = n,
            sg(m, l),
            l == a[h].node && (c[h++] = d.length - 1,
            k = !0)) : k = !1
        } while (l != f);return {
            Ef: e,
            cj: c,
            Ei: d
        }
    }
    function ot(a) {
        return null != a && bs[a.tagName]
    }
    function pt(a) {
        if (null == a)
            return null;
        for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == ud(Mg(a)); )
            a = a.previousSibling;
        return a
    }
    function rt(a, b, c, d, e, f) {
        ni.call(this);
        this.a = [];
        for (var h = 0; h < a.length; ++h)
            this.a.push("nodeType"in a[h] ? st(a[h]) : a[h]),
            tt(a[h].node);
        this.f = b;
        this.G = d || 0;
        this.J = e || 0;
        this.l = c;
        this.s = f || null;
        this.C = this.B = this.K = !1;
        this.c = [];
        this.h = [];
        this.b = [];
        this.L = [];
        new hi(this);
        this.g = this.H = !1
    }
    var st;
    G(rt, ni);
    function ut() {
        this.b = {};
        this.a = {}
    }
    ut.prototype.has = function(a, b) {
        return null != this.b[a] || null != this.a[a] || b && (a in this.b || a in this.a)
    }
    ;
    ut.prototype.write = function(a, b) {
        this.a[a] = b
    }
    ;
    ut.prototype.remove = function(a) {
        delete this.a[a];
        delete this.b[a]
    }
    ;
    var vt = "_gt_" + Math.random().toString(36).substr(2)
      , wt = "_gtn_" + Math.random().toString(36).substr(2);
    function xt(a) {
        if (!a)
            return !1;
        if (3 != a.nodeType || !I)
            return vt in a && !!a[vt];
        if (!a.parentNode)
            return !0;
        if (!(wt in a.parentNode))
            return !1;
        var b = a.parentNode[wt];
        if (!b || !b[a.nodeValue])
            return !1;
        b = b[a.nodeValue];
        for (var c = 0; c < b.length; ++c)
            if (b[c] == a)
                return !0;
        return !1
    }
    (function() {
        function a(c) {
            document.title = c
        }
        var b = {};
        st = function(c, d) {
            if (c.tagName == wa)
                return {
                    node: c,
                    Pa: a,
                    de: !0,
                    Ag: !0,
                    Cf: !0
                };
            if (3 == c.nodeType)
                return {
                    node: c,
                    Pa: function(e, f) {
                        Gg(f, e)
                    }
                };
            d || (d = "value");
            b[d] || (b[d] = function(e, f) {
                f.setAttribute && f.setAttribute(d, e);
                typeof e === Ub && (f[d] = e)
            }
            );
            c = {
                node: c,
                Pa: b[d],
                de: !0
            };
            "value" != d && (c.Cf = !0);
            return c
        }
    }
    )();
    function yt(a, b) {
        if (!a)
            return "";
        if (a.tagName == wa)
            return String(document.title);
        3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
        return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : typeof a[b] === Ub ? String(a[b]) : ""
    }
    rt.prototype.ea = t("f");
    function zt(a, b, c, d) {
        d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : Mg(d);
        d = {
            R: c,
            T: Ie(d)
        };
        a.push(d);
        b[c] ? b[c].end = d : b[c] = {
            start: d,
            end: d
        };
        return d
    }
    function At(a, b, c) {
        b = {
            Ng: b,
            kf: c,
            $: []
        };
        a.b.push(b);
        return b
    }
    function Bt(a) {
        if (!a.g && a.K && !a.B && !a.C) {
            a.B = !0;
            var b;
            if (b = Ct(a.a)) {
                b = a.a;
                var c = a.b;
                if (1 == b.length && b[0] && b[0].Cf) {
                    for (var d = [], e = 0; e < c.length; ++e)
                        for (var f = 0; f < c[e].$.length; ++f)
                            d.push(c[e].$[f].T);
                    b[0].Pa(d.join(" "), b[0].node);
                    b = !0
                } else
                    b = !1;
                b = !b
            }
            if (b && (b = nt(a.a))) {
                a.h = b.cj;
                a.c = b.Ei;
                d = a.a;
                e = a.h;
                f = a.c;
                var h = b.Ef;
                c = [];
                for (var k = 0; k < d.length; ++k)
                    if (c[k] = [],
                    d[k].node && void 0 !== e[k])
                        for (var l = 0; l < f.length; ++l)
                            if (!(h[l] > h[e[k]])) {
                                if (h[l] == h[e[k]]) {
                                    if (f[l].node.parentNode != f[e[k]].node.parentNode)
                                        continue
                                } else {
                                    for (var m = h[e[k]] - h[l], n = f[e[k]].node.parentNode; m-- && n && n != f[l].node.parentNode; )
                                        n = n.parentNode;
                                    if (n != f[l].node.parentNode)
                                        continue
                                }
                                c[k].push(l)
                            }
                d = a.a;
                e = a.b;
                f = -1;
                for (h = e.length - 1; 0 <= h; --h)
                    for (k = e[h],
                    l = k.$.length - 1; 0 <= l; --l)
                        if (m = k.$[l],
                        !(0 > m.R) && d[m.R] && d[m.R].node)
                            if (0 > f)
                                m.Kd = Uq(c[m.R]),
                                f = c[m.R][c[m.R].length - 1];
                            else
                                for (n = c[m.R].length - 1; 0 <= n; --n)
                                    if (c[m.R][n] <= f) {
                                        m.Kd = Uq(c[m.R].slice(0, n + 1));
                                        f = c[m.R][n];
                                        break
                                    }
                for (c = e = 0; c < a.b.length; ++c) {
                    d = a.b[c];
                    f = a.a;
                    h = d;
                    k = b.Ef;
                    l = a.h;
                    m = "";
                    for (n = 0; n < h.$.length; ++n) {
                        var r = h.$[n];
                        m += r.T;
                        if (0 > r.R) {
                            var w = -1
                              , F = -1
                              , E = l[h.$[n - 1].R];
                            void 0 !== E && (w = k[E]);
                            n < h.$.length - 1 && (E = l[h.$[n + 1].R],
                            void 0 !== E && (F = k[E]));
                            if (0 <= w || 0 <= F)
                                a: if (F = (0 > w || F < w) && n < h.$.length - 1,
                                w = h.$[F ? n + 1 : n - 1],
                                !(w.R >= f.length || null == f[w.R].node)) {
                                    E = r.T;
                                    r.T = "";
                                    if (/^ +$/.test(E) && (r = F ? w.T.charCodeAt(0) : w.T.charCodeAt(w.T.length - 1),
                                    3584 <= r && 3711 >= r || 12288 <= r && 12351 >= r || 12352 <= r && 12543 >= r || 12784 <= r && 12799 >= r || 19968 <= r && 40959 >= r || 65280 <= r && 65519 >= r))
                                        break a;
                                    w.T = F ? E + w.T : w.T + E
                                }
                        }
                    }
                    f = m;
                    h = a.a;
                    k = d;
                    l = a.c;
                    m = b.Ef;
                    n = a.h;
                    r = [];
                    for (w = 0; w < k.$.length && !(e >= l.length); ++w)
                        if (F = k.$[w],
                        F.Kd && !(0 > F.R) && h[F.R].node && F.T)
                            if (e == n[F.R] || e in F.Kd && (!(e + 1 in F.Kd) || e + 1 != n[F.R])) {
                                if (l[e] && l[e].node) {
                                    E = qt(l[e].node);
                                    r.push(E);
                                    for (var ca = l[e].node, $l = m[n[F.R]] - m[e], hf = E, tb = h[F.R].node.parentNode, Mi = hf; tb && $l--; )
                                        Mi = tb.cloneNode(!1),
                                        Mi.appendChild(hf),
                                        tb = tb.parentNode,
                                        hf = Mi;
                                    ca.appendChild(Mi);
                                    ca = h[F.R].node;
                                    h[F.R].de ? h[F.R].Ag || E.appendChild(ca) : (ca = h[F.R].node.cloneNode(!1),
                                    ca.id && (ca.id = ""),
                                    E.appendChild(ca));
                                    h[F.R].Pa(F.T, ca)
                                }
                            } else
                                ++e,
                                --w;
                    h = r;
                    r = a.a;
                    k = a.l;
                    if (d.Ng)
                        k = d.Ng;
                    else {
                        l = r.length;
                        m = -1;
                        for (n = 0; n < d.$.length; ++n)
                            w = d.$[n].R,
                            0 <= w && r[w] && r[w].node && (m = Math.max(m, w),
                            l = Math.min(l, w));
                        r = "";
                        for (n = l; n <= m; ++n)
                            k[n] && (r += k[n]);
                        k = r
                    }
                    if (a.s)
                        3 != a.s.a.Kb && a.L.push(kt(a.s, h, k, f, d.kf, a));
                    else
                        for (d = 0; d < h.length; ++d)
                            h[d].title = k
                }
                b = a.a;
                for (c = 0; c < b.length; ++c)
                    b[c].node && !b[c].de && ug(b[c].node);
                b = a.a;
                c = a.c;
                a = a.h;
                for (e = d = 0; e < c.length; ++e)
                    if (f = c[e].node) {
                        for (; d < b.length && e > a[d]; )
                            d++;
                        (d >= b.length || e != a[d]) && !f.firstChild && (ug(f),
                        c[e].node = null)
                    }
            }
        }
    }
    rt.prototype.restore = function() {
        if (this.B)
            if (this.B = !1,
            this.s && lt(this.s),
            this.L = [],
            Ct(this.c),
            1 == this.a.length && this.a[0].Cf)
                this.a[0].Pa(this.l[0], this.a[0].node);
            else {
                for (var a = 0, b = 0; b < this.c.length; ++b) {
                    var c = this.c[b].node;
                    if (c) {
                        for (; a < this.a.length && b > this.h[a]; ) {
                            var d = a++;
                            this.a[d].node && (Dt(this.a[d].node),
                            this.a[d].node = null)
                        }
                        if (a < this.a.length && b == this.h[a] && this.a[a].node) {
                            this.a[a].Ag || (rg(c),
                            c.appendChild(this.a[a].node));
                            this.a[a].Pa(this.l[a], this.a[a].node);
                            a++;
                            d = c;
                            var e = d.parentNode;
                            if (e && 11 != e.nodeType)
                                if (d.removeNode)
                                    d.removeNode(!1);
                                else {
                                    for (; c = d.firstChild; )
                                        e.insertBefore(c, d);
                                    ug(d)
                                }
                        } else
                            ug(c)
                    }
                }
                this.c = []
            }
    }
    ;
    rt.prototype.F = function() {
        rt.m.F.call(this);
        this.restore();
        for (var a = 0; a < this.a.length; ++a)
            this.a[a].node && Dt(this.a[a].node);
        this.a = null
    }
    ;
    function tt(a) {
        if (a)
            if (3 == a.nodeType && I) {
                wt in a.parentNode && a.parentNode[wt] || (a.parentNode[wt] = {});
                var b = a.parentNode[wt];
                b[a.nodeValue] || (b[a.nodeValue] = []);
                b = b[a.nodeValue];
                for (var c = 0; c < b.length; ++c)
                    if (b[c] == a)
                        return;
                b.push(a)
            } else
                a[vt] = 1
    }
    function Dt(a) {
        if (!a || 3 == a.nodeType && I) {
            var b = a.parentNode;
            if (b && wt in b) {
                var c = b[wt];
                if (c && a && c[a.nodeValue]) {
                    var d = c[a.nodeValue];
                    if (d)
                        for (var e = 0; e < d.length; ++e)
                            if (d[e] == a) {
                                d.splice(e, 1);
                                break
                            }
                    0 == d.length && delete c[a.nodeValue]
                }
                if (c && ir(c))
                    try {
                        delete b[wt]
                    } catch (f) {
                        b[wt] = ""
                    }
            }
        } else if (vt in a)
            try {
                delete a[vt]
            } catch (f) {
                a[vt] = ""
            }
    }
    function Ct(a) {
        for (var b = 0; b < a.length; ++b)
            try {
                a[b].node && !a[b].node.parentNode && (a[b].node = null)
            } catch (c) {
                a[b].node = null
            }
        for (b = a.length - 1; 0 <= b && !a[b].node; --b)
            ;
        a.length = b + 1;
        return a.length
    }
    function qt(a) {
        a = a.ownerDocument ? a.ownerDocument.createElement("font") : document.createElement("font");
        tt(a);
        a.style.verticalAlign = "inherit";
        return a
    }
    function Et(a) {
        for (var b, c = a.firstChild; c; c = b)
            b = c.nextSibling,
            3 != c.nodeType && (c == a.firstChild ? sg(c, a) : tg(c, a),
            Et(c))
    }
    ;function Ft(a, b, c, d, e) {
        b = b || {};
        this.wa = e || [];
        this.h = [];
        this.o = [];
        Gt(this, a || document.documentElement, void 0 === b.Ug || !!b.Ug);
        this.l = c || rt;
        this.C = b.Hi;
        this.c = this.a = this.g = this.zc = null;
        this.s = !!b.Ej;
        this.H = !!b.Dj;
        this.K = this.s ? 27 : 13;
        this.G = !0;
        this.B = [];
        this.f = new Gm(this,d)
    }
    kr(5762, Ft.prototype, {
        Oi: 1
    });
    function Ht(a, b, c, d) {
        a.f.c || (b = {
            hh: b,
            $g: c,
            Ba: [],
            Og: [],
            Hb: [],
            ae: 0,
            size: 0,
            continuous: !0
        },
        a.zc = null,
        Jm(a.f, a.b),
        Km(a.f, d),
        Lm(a.f, C(function(e) {
            this.Oi(e);
            d()
        }, a)),
        Mm(a.f, b))
    }
    function It(a, b) {
        return 0 < a.Ba.length ? new b(a.Ba,a.Hb.join(""),a.Og,a.ae,a.size) : null
    }
    function Jt(a, b) {
        if (!a.c)
            return a.zc = It(b, a.l),
            !0;
        if (!b.continuous && 0 < b.Ba.length)
            return a.zc = It(b, a.l),
            !0;
        b.continuous = a.c.Ig;
        a: {
            var c = a.c;
            var d = a.K;
            if (b.size > b.$g || b.ae > b.hh)
                c = !1;
            else {
                var e = c.size
                  , f = c.text.length;
                if (0 != b.Ba.length && (e += 1 == b.Ba.length ? b.size + d + d : b.size + d,
                f += b.ae,
                e > b.$g || f > b.hh)) {
                    c = !1;
                    break a
                }
                b.size = e;
                b.ae = f;
                b.Ba.push(c.node);
                b.Og.push(c.text);
                d = b.Ba.length - 1;
                0 == d ? b.Hb.push(c.te) : (1 == d && (b.Hb[0] = "<a i=0>" + b.Hb[0] + "</a>"),
                b.Hb.push("<a i=" + d + ">"),
                b.Hb.push(c.te),
                b.Hb.push("</a>"));
                c = !0
            }
        }
        if (c)
            return a.c = null,
            !1;
        a.zc = It(b, a.l);
        return !0
    }
    function Kt(a, b, c) {
        var d = yt(b, c);
        d && ud(Be(d)) && a.B.push({
            node: b,
            Gh: c,
            text: d
        })
    }
    Ft.prototype.b = function(a, b) {
        if (this.c && Jt(this, b))
            return Im;
        if (!this.a) {
            this.G = !!this.h.length;
            if (!this.h.length && (a = this.B.shift()))
                return this.c = {
                    Ig: !1,
                    node: st(a.node, a.Gh),
                    text: a.text,
                    te: He(a.text),
                    size: this.s ? Fe(a.text).length : a.text.length
                },
                b.continuous = !1,
                Jt(this, b),
                Im;
            a = this.h.shift() || this.o.shift();
            if (!a)
                return this.c = null,
                Jt(this, b),
                Im;
            this.g = [a.Cj];
            this.a = new ds(a.root)
        }
        this.a.next();
        if (this.a.f)
            return this.a = null,
            b.continuous = !1,
            this.b;
        a = this.a.node();
        var c = this.a.a.c;
        if (-1 == c) {
            Lt(this);
            if (!a || 3 != a.nodeType && !$r[a.tagName])
                b.continuous = !1;
            return this.b
        }
        var d = !xt(a) && (a.nodeType == Gc && Mt(this) || !Lf(a, "notranslate") && (Lf(a, bc) || Mt(this)));
        this.g.push(d);
        c = 1 == c;
        if (((d = !!a && (3 == a.nodeType && typeof a.nodeValue === Ub || a.tagName == wa && typeof a.value === Ub || a.tagName == va && Lf(a, bc) || a.tagName == oa && (cs[a.type] || Lf(a, bc)))) || c) && this.G && !Nt(a))
            return Gt(this, a, Mt(this), !0),
            this.a.a.g(),
            Lt(this),
            this.b;
        if (c && Mt(this)) {
            this.H && Kt(this, a, "title");
            Kt(this, a, "alt");
            Kt(this, a, "aria-label");
            Kt(this, a, "aria-placeholder");
            Kt(this, a, "aria-roledescription");
            Kt(this, a, "aria-valuetext");
            var e = this.a;
            if (e.b[e.b.length - 1])
                for (e = a.firstChild; e; ) {
                    if (3 == e.nodeType) {
                        var f = e.nodeValue.split("\n");
                        if (2 < f.length || 2 == f.length && "" != ud(f[0]) && "" != ud(f[1])) {
                            e.nodeValue = f[0];
                            for (var h = 1; h < f.length; ++h) {
                                var k = O(a).createElement("font");
                                this.wa.push(k);
                                tg(k, e);
                                e = k;
                                tg(O(a).createTextNode("\n" + f[h]), e);
                                e = e.nextSibling
                            }
                        }
                    }
                    e = e.nextSibling
                }
        }
        if (d) {
            this.a.a.g();
            if (Mt(this)) {
                var l = yt(a);
                if (ud(Be(l)) && (this.c = {
                    Ig: !0,
                    node: st(a),
                    text: l,
                    te: He(l),
                    size: this.s ? Fe(l).length : l.length
                },
                Jt(this, b)))
                    return Lt(this),
                    Im
            }
            Lt(this);
            return this.b
        }
        if (c) {
            if (Ot(a) || !a.firstChild && a.tagName != na)
                return b.continuous = b.continuous && !!bs[a.tagName],
                this.a.a.g(),
                Lt(this),
                this.b;
            if (a.tagName == na) {
                try {
                    if (!(l = !a.src.match(/https?:\/\//))) {
                        var m = a.src.match(Ij)[3] || null;
                        l = (m ? decodeURI(m) : m) == window.location.hostname
                    }
                    if (l) {
                        var n = Eg(a).documentElement;
                        n && Gt(this, n, Mt(this))
                    }
                } catch (r) {}
                b.continuous = !1;
                this.a.a.g();
                Lt(this);
                return this.b
            }
            Mt(this) && a && (3 == a.nodeType || $r[a.tagName]) ? this.C && "A" == a.tagName && a.href && this.C(a) : b.continuous = !1;
            return this.b
        }
        this.a.a.g();
        Lt(this);
        return this.b
    }
    ;
    function Ot(a) {
        return xt(a) || 3 != a.nodeType && (!a.tagName || as[a.tagName] || bs[a.tagName] || Lf(a, Sb) || "gts-order" == a.id)
    }
    function Nt(a) {
        if (3 == a.nodeType)
            return !0;
        if (1 != a.nodeType)
            return !1;
        if (!a.offsetWidth || !a.offsetHeight) {
            var b = O(a)
              , c = null;
            b.defaultView && b.defaultView.getComputedStyle ? c = b.defaultView.getComputedStyle(a, null) : c = a.currentStyle;
            return c && c.display != q && c.visibility != qb
        }
        return !0
    }
    function Gt(a, b, c, d) {
        (d ? a.o : a.h).push({
            root: b,
            Cj: void 0 === c || c
        })
    }
    function Mt(a) {
        return a.g[a.g.length - 1]
    }
    function Lt(a) {
        a.g.pop()
    }
    ;function Pt() {
        R.call(this);
        this.a = []
    }
    G(Pt, R);
    Pt.prototype.restore = function() {
        sl(this.b, 0, this)
    }
    ;
    Pt.prototype.b = function() {
        for (var a = 0; a < this.a.length; ++a)
            ug(this.a[a]);
        this.a = []
    }
    ;
    Pt.prototype.F = function() {
        Pt.m.F.call(this);
        this.restore()
    }
    ;
    function Qt(a) {
        var b = new No;
        Hj(a, function(c) {
            if (yg(c))
                b.add(c);
            else {
                a: {
                    var d;
                    if (Sf && !(I && L("9") && !L("10") && x.SVGElement && c instanceof x.SVGElement) && (d = c.parentElement)) {
                        c = d;
                        break a
                    }
                    d = c.parentNode;
                    c = yg(d) ? d : null
                }
                null != c && b.add(c)
            }
        });
        return b
    }
    ;function Rt(a) {
        this.b = !0;
        this.f = a;
        this.c = !1;
        this.a = []
    }
    Rt.prototype.ea = function() {
        return this.a.join("")
    }
    ;
    function St(a, b) {
        this.g = a;
        this.f = !0;
        this.c = b;
        this.a = null;
        this.b = 0
    }
    function Tt(a, b) {
        return a.f ? (b(C(a.h, a), a.g, a.c ? "en" : ""),
        !0) : !1
    }
    St.prototype.h = function(a, b, c) {
        this.a = b;
        this.b = c;
        a()
    }
    ;
    function Ut(a, b) {
        this.f = a;
        this.o = !!b;
        this.b = this.s = 0;
        this.g = this.c = -1;
        this.h = this.l = this.a = 0
    }
    var Vt = Uq(". , ; : \\? !".split(" "))
      , Wt = Uq([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);
    function Xt(a, b, c) {
        a.o && (b -= 9);
        for (var d = "", e = 0, f = a.s; f < a.f.length; ++f) {
            var h = a.f.charAt(f)
              , k = h.charCodeAt(0);
            e++;
            a.a += a.o ? 127 >= k ? 32 >= k || Wt[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
            k = a.a >= b;
            Vt[h] ? (a.g = f,
            a.l = a.a,
            k = k || e > c) : " " == h && (a.c = f,
            a.h = a.a,
            k = k || e > c);
            if (k)
                return 0 <= a.g ? (d = a.f.substring(a.b, a.g + 1),
                a.a -= a.l,
                a.b = a.g + 1,
                a.g >= a.c ? (a.c = -1,
                a.h = 0) : a.h -= a.l,
                a.g = -1,
                a.l = 0) : 0 <= a.c ? (d = a.f.substring(a.b, a.c + 1),
                a.a -= a.h,
                a.b = a.c + 1,
                a.c = -1,
                a.h = 0) : (d = a.f.substring(a.b, f + 1),
                a.a = 0,
                a.b = f + 1,
                a.g = a.c = -1,
                a.h = a.l = 0),
                a.s = f + 1,
                d
        }
        a.b < a.f.length && (d = a.f.substring(a.b),
        a.b = a.f.length);
        return d
    }
    ;function Yt(a, b, c, d, e, f) {
        this.l = d || z;
        this.W = f || z;
        this.L = !!e;
        this.c = a.a.bf;
        this.f = 0;
        this.G = z;
        this.C = c;
        this.o = this.b = this.g = 0;
        this.a = null;
        this.K = 0;
        this.qa = !1;
        this.ca = a.a.af;
        this.J = [];
        this.H = 0;
        this.h = (this.P = a.a.hd) ? a.a.Rd - (new Kj(a.a.na.a)).toString().length : a.a.Rd;
        this.ua = this.L ? 1 : 6;
        this.Ia = a.a.tf;
        this.wa = b;
        this.s = [];
        this.la = a
    }
    function Zt(a, b) {
        var c = 0;
        a.G = C(function() {
            ++c == this.s.length && b()
        }, a)
    }
    function $t(a, b, c) {
        if (0 == a.b && (a.b = b ? 860 : a.h,
        !c || c <= a.h)) {
            a.g = a.b;
            return
        }
        do
            b = a.b,
            a.b < a.h && (a.b *= a.ua,
            a.b > a.h && (a.b = a.h));
        while (b != a.b && c && a.b < c);a.g = a.b
    }
    function au(a, b) {
        var c = null != b
          , d = !c && !a.qa;
        (d || c) && a.l(100, d, b)
    }
    function bu(a) {
        return a.P ? a.a.J : a.a.ea().length
    }
    function cu(a, b, c, d, e) {
        return new Ft(a.wa.shift(),{
            Ej: a.P,
            Hi: b,
            Ug: !0,
            Dj: !!c
        },function() {
            var f = Array.prototype.slice.call(arguments);
            return new rt(f.shift(),f.shift(),f.shift(),f.shift(),f.shift(),c,d)
        }
        ,a.C,e)
    }
    function du(a, b, c) {
        if (0 < a.ca && eu(b) >= a.ca)
            return !0;
        if (bu(a) > a.b) {
            if (0 < eu(b))
                return !0;
            $t(a, c, bu(a));
            for (var d = a.a.ea(), e = new Ut(d,a.P), f; f = Xt(e, a.b, a.c); )
                if (b.g.push(new St([f],!1)),
                a.f += f.length,
                a.c -= f.length,
                0 >= a.c) {
                    b.B = d.substring(e.b);
                    break
                } else
                    $t(a, c);
            fu(b, a.a, !0);
            a.a = null;
            return !0
        }
        if (bu(a) > a.g)
            return !0;
        fu(b, a.a, !0);
        a.g -= bu(a) + a.Ia;
        a.f += a.a.G;
        a.c -= a.a.G;
        a.a = null;
        return !1
    }
    ;function gu(a, b) {
        R.call(this);
        this.f = b;
        this.b = {
            rootMargin: a
        };
        this.a = new IntersectionObserver(C(this.c, this),this.b)
    }
    G(gu, R);
    gu.prototype.F = function() {
        gu.m.F.call(this);
        this.a = null
    }
    ;
    gu.prototype.c = function(a) {
        for (var b = 0; b < a.length; b++)
            if (0 < a[b].intersectionRatio) {
                this.f();
                break
            }
    }
    ;
    function hu() {
        T.call(this)
    }
    G(hu, T);
    hu.prototype.D = function() {
        this.S(kk(ns))
    }
    ;
    hu.prototype.S = gc("A");
    function iu(a) {
        Nf(a.j(), pb);
        Nf(a.j().firstChild, ob)
    }
    ;function ju() {
        this.a = new hu;
        this.a.D();
        this.a.fa();
        this.b = 0
    }
    ju.prototype.reset = function() {
        this.b = 0;
        iu(this.a)
    }
    ;
    function ku(a, b, c, d, e, f, h, k) {
        this.g = a;
        this.b = b;
        this.s = [];
        this.B = null;
        this.f = c;
        this.a = d;
        this.c = e;
        this.wa = f;
        this.H = h;
        this.o = this.h = null;
        this.l = k || null;
        this.K = this.C = !1;
        this.G = {}
    }
    function lu(a) {
        for (var b = new No, c = 0; c < a.length; c++) {
            for (var d = a[c], e = new No, f = 0; f < d.a.length; f++) {
                var h = d.a[f].node;
                null != h && e.add(h)
            }
            d = b;
            e = Gj(e);
            f = e.length;
            for (h = 0; h < f; h++)
                d.add(e[h])
        }
        return b
    }
    v = ku.prototype;
    v.trackVisibility = function(a) {
        a = this.h = new gu("200px",C(this.ti, this, a));
        var b = Qt(lu([].concat(this.b, this.s)));
        Hj(b, C(a.a.observe, a.a));
        a = this.o = new gu("0px",C(this.xi, this));
        b = Qt(lu([].concat(this.b, this.s)));
        Hj(b, C(a.a.observe, a.a))
    }
    ;
    v.ti = function(a) {
        this.h && (this.h.a.disconnect(),
        this.h = null);
        a()
    }
    ;
    v.xi = function() {
        this.C = !0;
        mu(this);
        if (!this.K && this.l) {
            var a = this.l;
            0 == a.b++ && (a = a.a,
            M(a.j(), pb),
            M(a.j().firstChild, ob))
        }
    }
    ;
    function mu(a) {
        a.o && (a.o.a.disconnect(),
        a.o = null)
    }
    v.dh = function() {
        if (this.C && !this.K && this.l) {
            var a = this.l;
            0 == --a.b && iu(a.a)
        }
        this.h && (this.h.a.disconnect(),
        this.h = null);
        mu(this)
    }
    ;
    function fu(a, b, c) {
        c ? (a.b.push(b),
        a.G[b.ea()] = !0) : a.s.push(b)
    }
    function eu(a) {
        return a.b.length + a.s.length
    }
    function nu(a) {
        if (0 == a.g.length) {
            for (var b = [], c = 0; c < a.b.length; ++c)
                b.push(a.b[c].ea());
            a.g.push(new St(b,!1))
        }
    }
    v.translate = function(a) {
        function b() {
            d++;
            d == c && e()
        }
        nu(this);
        for (var c = 0, d = 0, e = z, f = this.f, h = this.a, k = this.c, l = this.wa, m = this.H, n = 0; n < this.g.length; ++n)
            Tt(this.g[n], function(r, w, F) {
                r = f.la.translate(Cc(r, b), w, F || h, k, ++f.H, l, m, f.L);
                f.J.push(r);
                return r
            }) && c++;
        0 != c && (e = Nm(a));
        return c
    }
    ;
    function ou(a, b) {
        R.call(this);
        this.b = [];
        this.f = [];
        this.a = a;
        this.c = b
    }
    G(ou, R);
    ou.prototype.g = function(a) {
        var b = ud(a.href);
        0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.f.push(a.href),
        this.b.push(a),
        a.href = b + "#googtrans/" + this.a + "/" + this.c)
    }
    ;
    ou.prototype.F = function() {
        ou.m.F.call(this);
        this.restore()
    }
    ;
    ou.prototype.restore = function() {
        if (this.b.length) {
            for (var a = 0; a < this.b.length; ++a)
                this.b[a].href = this.f[a];
            this.b = [];
            this.f = []
        }
    }
    ;
    function pu(a, b) {
        R.call(this);
        this.b = a;
        this.a = nd.test(b) ? "translated-rtl" : "translated-ltr";
        a = [].concat(this.b);
        for (b = 0; b < a.length; ++b)
            yg(a[b]) && M(a[b], this.a)
    }
    G(pu, R);
    pu.prototype.F = function() {
        pu.m.F.call(this);
        this.restore()
    }
    ;
    pu.prototype.restore = function() {
        for (var a = [].concat(this.b), b = 0; b < a.length; ++b)
            yg(a[b]) && Nf(a[b], this.a)
    }
    ;
    function qu(a, b, c, d, e, f, h, k, l, m) {
        R.call(this);
        this.B = a;
        this.Ch = b;
        this.la = c || null;
        this.ua = m || null;
        this.C = null;
        this.tb = !!d;
        this.Xc = e || "transparent";
        this.Gb = !!f;
        this.o = [];
        this.jb = this.G = this.b = !1;
        this.l = k || new ut;
        this.Mf = !k;
        this.ra = h || Cm.X();
        this.Ia = new Pt;
        this.W = this.P = this.K = !1;
        this.Ya = this.f = .5;
        this.Za = .01;
        this.s = new Dm(this.f);
        this.J = (this.h = this.qa = !!l) ? new MutationObserver(C(this.ni, this)) : null;
        this.c = this.a = null;
        S(window, Ka, this.vg, !0, this);
        S(window, cb, this.wg, !0, this)
    }
    G(qu, R);
    kr(3046, qu.prototype, {
        Ki: 1,
        Mi: 2,
        Li: 3,
        Ni: 4
    });
    v = qu.prototype;
    v.cb = function() {
        return this.a ? this.a : ""
    }
    ;
    v.oa = function() {
        return this.c ? this.c : ""
    }
    ;
    v.Mh = function(a) {
        this.Ki.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    }
    ;
    v.Xf = function(a) {
        this.Li.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    }
    ;
    v.Nh = function(a) {
        this.Mi.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    }
    ;
    v.Oh = function(a) {
        this.Ni.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    }
    ;
    v.translate = function(a, b, c, d, e) {
        if (d || a != this.a || b != this.c)
            ru(this),
            this.Mf && (this.l = new ut);
        else if (this.b)
            return;
        this.g = c;
        this.Yc = e;
        this.h = this.qa && !0;
        this.J && this.J.observe(document.body, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        });
        this.b = !0;
        this.a = a;
        this.c = b;
        this.tb && (this.C = new ou(a,b));
        this.W = this.a == Ha;
        this.la && (c = this.la,
        a && (c.s = a),
        b && (c.o = b));
        this.ca = new pu(this.B,this.c);
        this.H = su(this);
        (a = this.B instanceof Node ? this.B : null) && tu(a, this.c)
    }
    ;
    function su(a) {
        var b = new Gm(a,a.ra);
        Jm(b, a.rg);
        Lm(b, C(a.Mh, a));
        Mm(b, new Yt(a.Ch,[].concat(a.B),a.ra,a.g,a.h,a.Yc));
        return b
    }
    v.restore = function() {
        ru(this);
        this.Ia.restore();
        var a = this.B instanceof Node ? this.B : null;
        a && tu(a, this.cb())
    }
    ;
    v.F = function() {
        qu.m.F.call(this);
        this.restore();
        bi(window, Ka, this.vg, !0, this);
        bi(window, cb, this.wg, !0, this)
    }
    ;
    function uu(a, b, c, d) {
        var e = ir(a.l.b)
          , f = new Gm(a,b.C);
        b.s.push(f);
        Km(f, b.G);
        $t(b, e);
        Jm(f, d || a.ng);
        b = c || new ku([],[],b,a.cb(),a.oa(),a.jb,a.G,a.ua);
        Lm(f, a.ui, a);
        a.h && Km(f, b.dh, b);
        Mm(f, b)
    }
    v.ui = function(a, b, c) {
        c.dh();
        this.G ? this.Oh(a) : this.Nh(a);
        c.f.G()
    }
    ;
    v.wg = function() {
        this.K = !1;
        this.L = 0;
        Em(this.s, this.f)
    }
    ;
    v.vg = function(a) {
        a.target == window && (this.K = !0,
        this.L = 0,
        Em(this.s, .01))
    }
    ;
    v.ni = function(a) {
        if (this.b && this.h) {
            for (var b = 0; b < a.length; b++) {
                try {
                    if (a[b].target && a[b].target.className) {
                        if (typeof a[b].target.className.indexOf === 'function' && (0 <= a[b].target.className.indexOf(bc) || 0 == a[b].target.className.indexOf("goog-"))) {
                            return;
                        }
                    }
                } catch(e) {
                    console.log(e)
                }
            }
            this.ra.add(C(this.hj, this))
        }
    }
    ;
    v.hj = function() {
        this.G = !0;
        this.H.stop();
        this.H = su(this);
        return !1
    }
    ;
    v.rg = function(a, b) {
        Zt(b, Nm(a));
        uu(this, b);
        return this.zi
    }
    ;
    v.zi = function(a, b) {
        if (!this.b)
            return Im;
        if (!Om(a))
            return Hm;
        if (!this.h)
            for (a = 0; a < this.o.length; ++a) {
                var c = C(this.Of, this, b, this.o[a]);
                b.C.add(c)
            }
        return this.yi
    }
    ;
    v.kg = function(a, b) {
        if (this.L && !this.K) {
            a = (new Date).getTime() - this.L;
            var c = this.f;
            900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
            this.f = c;
            this.P ? this.Za = .01 : this.Ya = this.f
        }
        this.G = this.b = !0;
        this.L = (new Date).getTime();
        this.Zc != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.Zc = a,
        a = !0) : a = !1;
        a ? (this.P = !1,
        this.f = this.Ya,
        this.K || Em(this.s, this.f),
        a = [].concat(this.B),
        c = this.s,
        b.l = z,
        b.wa = a,
        b.a = null,
        b.H = 0,
        b.s = [],
        b.G = z,
        b.C = c,
        a = new Gm(this,this.s),
        Jm(a, this.rg),
        Lm(a, C(this.Xf, this)),
        Mm(a, b),
        this.H = a) : (this.P = !0,
        this.f = this.Za,
        this.K || Em(this.s, this.f),
        a = new Gm(this,this.s),
        Jm(a, this.kg),
        Lm(a, C(this.Xf, this)),
        Mm(a, b),
        this.H = a);
        return Im
    }
    ;
    v.yi = function(a, b) {
        if (!this.b)
            return Im;
        this.G = this.b = !1;
        this.W ? au(b, !0) : (au(b),
        b.W(b.f));
        if (this.Gb)
            return this.kg;
        for (a = 0; a < b.s.length; ++a)
            b.s[a].stop();
        for (a = 0; a < b.J.length; ++a)
            Zr(b.la, b.J[a]);
        return Im
    }
    ;
    function vu(a, b, c) {
        a: {
            var d = a.tb ? C(a.C.g, a.C) : z
              , e = a.la
              , f = a.Xc
              , h = a.Ia.a;
            b = Nm(b);
            if (!c.B) {
                if (0 == c.wa.length) {
                    0 == c.f && 0 == c.H && c.l(0, !0);
                    c = !1;
                    break a
                }
                c.B = cu(c, d, e, f, h)
            }
            c.ra = !0;
            Ht(c.B, c.c, c.b, b);
            c = !0
        }
        return c ? a.ng : a.Cd
    }
    v.ng = function(a, b) {
        if (!this.b)
            return Im;
        var c = b.f;
        if (null == c.a) {
            if (!c.ra)
                return vu(this, a, b.f);
            if (!Om(a))
                return Hm;
            c.ra = !1;
            c.a = c.B.zc || null;
            var d = c.a ? c.a : c.B = null;
            if (!d)
                return vu(this, a, b.f);
            this.o.push(d);
            var e = d.ea();
            if (this.l.has(e, !this.h) || null != b.G[e] && b.G[e])
                return e = c.a.G,
                c.f += e,
                c.c -= e,
                c.a = null,
                this.h && fu(b, d, !1),
                vu(this, a, b.f);
            this.l.a[d.ea()] = null
        }
        0 < eu(b) && Em(this.s, .5);
        return du(c, b, ir(this.l.b)) ? this.Cd : vu(this, a, b.f)
    }
    ;
    v.Cd = function(a, b) {
        if (!this.b || 0 == eu(b))
            return Im;
        uu(this, b.f);
        return this.h ? (b.trackVisibility(Nm(a)),
        this.Ai) : 0 == b.translate(a) ? Im : this.qg
    }
    ;
    v.Ai = function(a, b) {
        return this.b ? Om(a) ? 0 == b.translate(a) ? Im : this.qg : Hm : Im
    }
    ;
    v.Of = function(a, b) {
        b.g && this.l.remove(b.f);
        if (!this.b)
            return !1;
        if (this.l.has(b.ea(), !1)) {
            var c = this.l;
            if (c.has(b.f, !1)) {
                var d = b.f
                  , e = c.a[d];
                e || (e = c.b[d],
                c.a[d] = e);
                b.b = e;
                b.K = !0
            } else
                c.remove(b.f),
                b.g = !0;
            Bt(b)
        } else if (c = this.l,
        b.g)
            c.remove(b.f);
        else if (b.o) {
            d = b.o.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
            b.K = !0;
            delete b.o;
            b.o = null;
            b.b = [];
            e = document.createElement(Za);
            Q(e, !1);
            e.innerHTML = 0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>";
            document.body.appendChild(e);
            d = [];
            var f;
            for (f = e.firstChild; f; f = f.nextSibling)
                if ("I" == f.tagName)
                    var h = At(b, Mg(f), f.innerHTML);
                else if ("B" == f.tagName) {
                    h || (h = At(b, "", ""));
                    if (1 == b.a.length)
                        zt(h.$, d, 0, f);
                    else {
                        var k = d;
                        var l = f;
                        var m = b.a;
                        h = h.$;
                        for (var n = [], r, w = l.firstChild; w; w = r)
                            r = w.nextSibling,
                            Et(w);
                        for (r = l.firstChild; r; r = r.nextSibling)
                            r.attributes && r.attributes.i ? (l = parseInt(r.attributes.i.nodeValue, 10),
                            !isNaN(l) && 0 <= l && l < m.length && (m[l].de && n[l] ? n[l].T += r.firstChild && 3 == r.firstChild.nodeType ? r.firstChild.nodeValue : Mg(r) : n[l] = zt(h, k, l, r))) : 3 == r.nodeType && h.push({
                                R: -1,
                                T: Ie(r.nodeValue)
                            });
                        null != h && 0 < h.length && -1 == h[0].R && (1 == h.length ? h[0].R = 0 : (h[1].T = h[0].T + h[1].T,
                        h.shift()))
                    }
                    h = void 0
                }
            f = b.b;
            for (k = 0; k < f.length - 1; ++k)
                m = f[k],
                h = Ee(m.$[m.$.length - 1].T),
                h = h.charCodeAt(h.length - 1),
                12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.$[m.$.length - 1].T += " ");
            ug(e);
            for (e = 0; e < b.a.length; ++e)
                e < d.length && e < b.l.length && null != d[e] && (f = b.l[e],
                k = d[e].start,
                null != k && (m = f.substring(0, f.length - De(f).length),
                " " == m && (m = ""),
                m && (k.T = m + De(k.T))),
                k = d[e].end,
                null != k && (f = f.substring(Ee(f).length),
                " " == f && (f = ""),
                f && (k.T = Ee(k.T) + f)));
            1 != b.b.length || b.b[0].kf || (b.b[0].kf = b.f);
            c.write(b.f, b.b);
            Bt(b)
        }
        b.H || (this.W = !1);
        c = b.g ? !0 : void 0;
        a.K += b.G;
        null != c && (a.qa = !0);
        b = Math.min(Math.floor(100 * a.K / a.f), 100);
        if (a.o != b || c)
            a.o = b,
            a.L ? (a.l(a.o, !0, c),
            a.W(a.K)) : a.l(a.o, !1, c);
        return !1
    }
    ;
    v.qg = function(a, b) {
        if (!this.b)
            return Im;
        if (!Om(a))
            return Hm;
        if (1 < eu(b)) {
            a = b.g[0];
            var c = b.b;
            if (a.c || 0 == c.length || null == a.a || 0 == a.a.length)
                a = null;
            else {
                for (var d = [], e = [], f = 0; f < a.a.length && f < c.length; ++f) {
                    var h = a.a[f];
                    h && h[0] && 200 == h[1] || (e.push(c[f]),
                    d.push(a.g[f]))
                }
                a = 0 < e.length ? {
                    ij: new St(d,!0),
                    jj: e
                } : null
            }
            a = a ? new ku([a.ij],a.jj,b.f,b.a,b.c,b.wa,b.H,b.l) : null;
            null != a && uu(this, b.f, a, this.Cd)
        } else {
            a = !1;
            for (c = 0; c < b.g.length; ++c)
                d = b.g[c],
                d.c || 200 == d.b && d.a && d.a[0] ? d = d.f = !1 : (d.c = !0,
                d = d.f = !0),
                a = d || a;
            if (a)
                return this.Cd
        }
        d = this.cb();
        a = this.oa();
        if (1 < b.b.length)
            if (c = b.g[0],
            e = d == Ha,
            d = b.b,
            200 == c.b)
                for (f = 0; f < c.a.length && f < d.length; ++f)
                    if ((h = c.a[f]) && 200 == h[1]) {
                        var k = h[2]
                          , l = d[f]
                          , m = l
                          , n = null != k && k == a;
                        m.o = h[0];
                        void 0 !== n && (m.C = n);
                        l.H = e && null == k
                    } else
                        d[f].g = !0;
            else
                for (a = 0; a < d.length; ++a)
                    d[a].g = !0;
        else {
            c = new Rt(d == Ha);
            for (d = 0; d < b.g.length; ++d)
                h = b.g[d],
                e = a,
                f = c,
                200 == h.b && h.a && h.a[0] ? (h = h.a[0],
                f.a.push(h[0]),
                h = h[2],
                f.b = f.b && null != h && h == e,
                null != h && (f.f = !1)) : 500 != h.b && (f.c = !0);
            null != b.B && (c.a.push(b.B),
            b.B = null);
            if (a = b.b[0])
                d = c.b,
                a.o = c.ea(),
                void 0 !== d && (a.C = d),
                a.H = c.f,
                a.g = c.c
        }
        if (this.h) {
            a = C(this.Of, this);
            for (c = 0; c < b.b.length; c++)
                a(b.f, b.b[c]);
            for (c = 0; c < b.s.length; c++)
                a(b.f, b.s[c]);
            mu(b);
            b.K = !0;
            b.C && b.l && (b = b.l,
            0 == --b.b && iu(b.a))
        }
        return Im
    }
    ;
    function ru(a) {
        a.J && a.J.disconnect();
        a.ua && a.ua.reset();
        a.b && (a.H.stop(),
        a.b = !1,
        a.G = !1);
        if (a.o.length) {
            for (var b = 0; b < a.o.length; ++b)
                a.o[b].M();
            a.o = []
        }
        null != a.C && (a.C.restore(),
        a.C = null);
        null != a.ca && (a.ca.restore(),
        a.ca = null)
    }
    function tu(a, b) {
        a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
        a.getAttribute("lang") && a.setAttribute("lang", b)
    }
    ;function wu(a, b, c, d, e, f, h, k, l, m, n) {
        R.call(this);
        this.K = b || null;
        this.L = !!c;
        this.C = d || "transparent";
        this.g = f || "";
        b = h || {
            fetchStart: 0,
            Ak: 0
        };
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.G = a && b ? b - a : 0;
        this.J = D() - Fq;
        this.s = !1;
        this.b = new Vr(e || "",void 0,f,l,m,n);
        this.H = new Dm(1);
        this.o = new ut;
        this.f = null;
        this.h = !0;
        this.l = null != x.IntersectionObserver;
        this.B = k || null;
        new hi(this);
        e = new Vq;
        f = new Xq(C(this.b.l, this.b, e.register()));
        this.pd = Yq(f, e.delay(C(this.pd, this)));
        this.ld = Yq(f, e.delay(C(this.ld, this)));
        this.ce = Yq(f, e.delay(C(this.ce, this)));
        this.restore = Yq(f, e.delay(C(this.restore, this)));
        f.finish();
        e.finish()
    }
    G(wu, R);
    kr(14097, wu.prototype, {
        Ze: function() {
            dr(this.b.c ? "te_afas" : "te_afau")
        }
    });
    v = wu.prototype;
    v.lj = gc("l");
    v.Ua = function() {
        return this.b.c
    }
    ;
    v.pd = function(a, b) {
        if (this.b.Ua()) {
            var c = this.b
              , d = {
                alpha: !0
            };
            b && (d.hl = b);
            c.g.send(d, a)
        } else
            this.Ze(),
            a(null)
    }
    ;
    v.ld = function(a) {
        var b = document.documentElement.lang;
        if (b)
            a(b);
        else if (this.b.Ua()) {
            var c = new kn(document.body,!1,!1,1,1);
            b = [];
            try {
                for (var d = 0, e = this.b.b.Gg; b.length + d < e; ) {
                    var f = c.next();
                    if (1 == c.c && Ot(f))
                        c.g();
                    else if (3 == f.nodeType) {
                        var h = ud(Be(f.nodeValue));
                        h && (b.push(h),
                        d += h.length)
                    }
                }
            } catch (k) {
                if (k != xj)
                    throw k;
            }
            e = this.b;
            b = b.join(" ");
            a = e.b.vc(a);
            e.b.na.send({
                q: b.substring(0, e.b.Gg),
                sl: Ha,
                tl: "en"
            }, a)
        } else
            this.Ze(),
            a(null, !0)
    }
    ;
    v.ce = function(a, b, c, d, e) {
        var f = D();
        lr();
        if (!a || jr(a, b))
            a = Ha;
        if (e || a != this.a || b != this.c)
            this.o = new ut;
        this.a = a;
        this.c = b;
        this.b.Ua() ? (d = d || document.documentElement,
        this.f && this.f.M(),
        this.B.reset(),
        this.f = new qu(d,this.b,this.K,this.L,this.C,!0,this.H,this.o,this.l,this.B),
        this.f.jb = this.s,
        this.h = !0,
        this.f.translate(a, b, c, e, C(this.Qi, this, f, a, b))) : (this.Ze(),
        c(0, !1, !0))
    }
    ;
    v.tj = function() {
        return !!this.f && this.f.b
    }
    ;
    v.Xg = gc("s");
    v.restore = function() {
        lr();
        this.b.Ua() && this.f && this.f.restore()
    }
    ;
    v.F = function() {
        mr();
        wu.m.F.call(this);
        this.b.M();
        this.f = this.b = null;
        this.o = new ut
    }
    ;
    v.Qi = function(a, b, c, d) {
        this.h && (this.h = !1,
        b = {
            sl: b,
            tl: c,
            textlen: d
        },
        this.s && (b.ctt = "1"),
        "" != this.g && (b.sp = this.g),
        0 != this.g.indexOf("nmt") && (b.sp = "" != this.g ? "nmt," + this.g : "nmt"),
        b.ttt = D() - a,
        b.ttl = this.J,
        this.G && (b.ttf = this.G),
        this.l && (b.sr = 1),
        dr("te_time", b))
    }
    ;
    function xu(a) {
        T.call(this, a);
        this.l = new hi(this)
    }
    G(xu, T);
    v = xu.prototype;
    v.D = function() {
        var a = Pg(this.b, "select");
        a.className = "goog-te-combo";
        a.setAttribute("aria-label", Z.Jf);
        this.S(a)
    }
    ;
    v.O = function() {
        xu.m.O.call(this);
        this.Wf()
    }
    ;
    v.Wf = function() {
        S(this.j(), Oa, ar(this, Oa));
        this.dispatchEvent(zb)
    }
    ;
    v.Z = function() {
        xu.m.Z.call(this);
        this.l.M();
        this.l = null
    }
    ;
    function yu(a, b) {
        a.j().parentNode != b && (a.j().parentNode.removeChild(a.j()),
        b.appendChild(a.j()))
    }
    v.Tc = function(a) {
        this.b.Qc(this.j());
        for (var b in a)
            if (a[b] !== Object.prototype[b]) {
                var c = this.b.D(qa, {
                    value: b
                });
                this.b.ib(c, a[b]);
                this.j().appendChild(c)
            }
        this.j().selectedIndex = 0
    }
    ;
    v.Aa = function() {
        return this.j().value
    }
    ;
    v.ya = function(a) {
        if (this.j().value != a)
            for (var b = 0, c; c = this.j().options.item(b); ++b)
                if (c.value == a) {
                    this.j().selectedIndex = b;
                    break
                }
    }
    ;
    v.$d = function(a) {
        if ("undefined" == A(a))
            return this.j().options.item(this.j().selectedIndex).text;
        for (var b = 0, c; c = this.j().options.item(b); ++b)
            if (c.value == a)
                return c.text
    }
    ;
    v.ka = function(a) {
        this.j().disabled = !a
    }
    ;
    function zu(a) {
        xu.call(this, a)
    }
    G(zu, xu);
    zu.prototype.Db = function(a) {
        this.Tc.call(this, a)
    }
    ;
    function Au(a, b) {
        xu.call(this, b);
        this.a = a && dd(a) || {};
        this.a.qf = this.a.qf || 11;
        this.a.Xd = 0 != this.a.Xd;
        this.a.Va || (this.a.Va = Qq)
    }
    G(Au, xu);
    v = Au.prototype;
    v.fd = function() {
        throw Error("Not implemented.");
    }
    ;
    v.D = function() {
        this.fd();
        this.o = this.j();
        this.f = kg(na, {
            frameBorder: 0,
            "class": "goog-te-menu-frame skiptranslate",
            title: Z.Jf
        });
        this.f.style.visibility = dc;
        Q(this.f, !1);
        document.body.appendChild(this.f)
    }
    ;
    v.Wf = function() {
        var a = nd.test(Cq) ? Qb : "ltr"
          , b = pr(this.a.Va)
          , c = V(this, "menuBody");
        this.l.w(this.f, zb, this.yj);
        er(this.f, C(function() {
            var d = Eg(this.f);
            var e = pk(ja + X(Dk(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + X(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + X(c) + '" class="goog-te-menu"></div></body>');
            e = hk(e);
            d.write(ke(e));
            d.close()
        }, this))
    }
    ;
    v.yj = function() {
        this.c = new Yf(Eg(this.f));
        this.L = this.c.j(V(this, "menuBody"));
        this.l.w(this.o, Sa, this.Me);
        I ? this.l.w(this.f, Ka, this.Bd) : this.l.w(Fg(this.f), Ka, this.Bd);
        this.dispatchEvent(zb)
    }
    ;
    v.Z = function() {
        Au.m.Z.call(this);
        ug(this.f);
        this.o = this.P = this.h = this.L = this.c = this.f = null
    }
    ;
    v.og = function(a) {
        this.g != a.currentTarget.value && (this.ya(a.currentTarget.value),
        this.dispatchEvent(Oa));
        this.Bd()
    }
    ;
    v.Me = function() {
        Bu(this);
        Fg(this.f).focus();
        this.W = !0
    }
    ;
    v.Bd = function() {
        this.W && (this.W = !1,
        Bu(this, !1),
        jg(O(this.o)).focus())
    }
    ;
    v.mf = fc();
    v.nf = fc();
    function Bu(a, b) {
        if ("undefined" == typeof b || b) {
            a.nf();
            b = dh(a.o, window);
            var c = b.y + a.o.offsetHeight
              , d = b.y - a.C.height
              , e = b.x
              , f = b.x + a.o.offsetWidth - a.C.width;
            if (I && !L("7.0")) {
                var h = document.body;
                c -= h.offsetTop;
                d -= h.offsetTop;
                e -= h.offsetLeft;
                f -= h.offsetLeft
            } else
                h = hg(document),
                c -= h.y,
                d -= h.y,
                e -= h.x,
                f -= h.x;
            h = fg(window);
            b.y = b.y <= h.height - a.C.height ? c : d;
            b.y > h.height - a.C.height && (b.y = h.height - a.C.height);
            0 > b.y && (b.y = 0);
            nd.test(Cq) ? b.x = 0 <= f ? f : e : b.x = e <= h.width - a.C.width ? e : f;
            b.x > h.width - a.C.width && (b.x = h.width - a.C.width);
            0 > b.x && (b.x = 0);
            Xg(a.f, b);
            Q(a.f, !0);
            Cu(a)
        } else
            a.mf(),
            Q(a.f, !1)
    }
    v.Aa = t("g");
    v.Tc = function(a) {
        this.c.Qc(this.L);
        Q(this.f, !0);
        this.ca = a;
        this.h = [];
        for (var b in a)
            if (a[b] !== Object.prototype[b])
                if ("---" == a[b]) {
                    var c = {
                        link: this.c.D(g, {
                            className: "goog-te-menu2-separator",
                            value: b
                        }),
                        Fi: !0
                    };
                    this.h.push(c)
                } else {
                    c = {
                        link: this.c.D("A", {
                            className: nb,
                            href: wb,
                            value: b
                        })
                    };
                    this.h.push(c);
                    var d = this.c.D(g, {
                        style: "white-space:nowrap"
                    });
                    this.c.appendChild(c.link, d);
                    this.a.Xd && this.c.appendChild(d, this.c.D(ua, {
                        className: "indicator"
                    }, "\u203a"));
                    this.c.appendChild(d, this.c.D(ua, {
                        className: "text"
                    }, a[b]));
                    this.l.w(c.link, Sa, this.og)
                }
        a = this.h.length - 1;
        a = Math.round((a - a % this.a.qf) / this.a.qf) + 1;
        this.P = this.c.D("TABLE", {
            cellspacing: 0,
            cellpadding: 0,
            border: 0
        });
        c = this.c.D("TBODY");
        b = this.c.D("TR", {
            valign: "top"
        });
        this.L.className = "goog-te-menu2";
        this.c.appendChild(this.L, this.P);
        this.c.appendChild(this.P, c);
        this.c.appendChild(c, b);
        for (d = c = 0; c < a; ++c) {
            var e = this.c.D("TD");
            this.c.appendChild(b, e);
            for (var f = 0; 11 > f && d < this.h.length; ++f,
            ++d)
                this.c.appendChild(e, this.h[d].link);
            c != a - 1 && (e = this.c.D("TD", {
                "class": "goog-te-menu2-colpad"
            }, "\u00a0"),
            this.c.appendChild(b, e))
        }
        this.g = null;
        this.ya(this.h[0].link.value);
        Cu(this);
        Q(this.f, !1)
    }
    ;
    v.$d = function(a) {
        a = "undefined" == A(a) ? this.g : a;
        return this.ca[a]
    }
    ;
    v.pf = fc();
    v.ya = function(a) {
        if (this.g != a) {
            this.$d(a) && (this.g = a,
            this.pf());
            for (var b = 0; b < this.h.length; ++b) {
                var c = this.h[b];
                c.Fi || (c.link.className = c.link.value == a && this.a.Xd ? nb : "goog-te-menu2-item")
            }
        }
    }
    ;
    function Cu(a) {
        mh(a.L, lh(a.P));
        mh(a.f, lh(a.L));
        a.C = lh(a.f)
    }
    function Du(a, b) {
        Au.call(this, a, b)
    }
    G(Du, Au);
    v = Du.prototype;
    v.fd = function() {
        var a = this.b.D("a", {
            "aria-haspopup": "true"
        });
        a.className = mb;
        a.href = wb;
        this.H = this.b.D(ua);
        a.appendChild(this.H);
        this.J = this.b.D("IMG", {
            src: vb,
            alt: "",
            style: "background-image:url(" + Nq + ");background-position:-14px 0px;border:none",
            width: 14,
            height: 14
        });
        a.appendChild(this.J);
        this.S(a)
    }
    ;
    v.mf = function() {
        P(this.J, Ja, "-14px 0px")
    }
    ;
    v.nf = function() {
        P(this.J, Ja, "0px 0px")
    }
    ;
    v.Z = function() {
        Du.m.Z.call(this);
        this.J = this.H = null
    }
    ;
    v.pf = function() {
        this.b.ib(this.H, this.$d(this.g) || "")
    }
    ;
    v.Db = function(a) {
        this.Tc.call(this, a)
    }
    ;
    function Eu(a, b) {
        Au.call(this, a, b)
    }
    G(Eu, Au);
    v = Eu.prototype;
    v.fd = function() {
        var a = this.b.D("a", {
            "aria-haspopup": "true"
        });
        a.className = mb;
        a.href = wb;
        this.H = this.b.D(ua);
        a.appendChild(this.H);
        a.appendChild(this.b.D("IMG", {
            src: vb,
            alt: "",
            width: 1,
            height: 1
        }));
        a.appendChild(this.b.D(ua, {
            style: "border-left:1px solid #bbb"
        }, "\u200b"));
        a.appendChild(this.b.D("IMG", {
            src: vb,
            alt: "",
            width: 1,
            height: 1
        }));
        this.J = this.b.D("span", {
            style: "color:#767676",
            "aria-hidden": "true"
        }, "\u25bc");
        a.appendChild(this.J);
        this.S(a)
    }
    ;
    v.mf = function() {
        P(this.J, "color", "#9b9b9b")
    }
    ;
    v.nf = function() {
        P(this.J, "color", "#d5d5d5")
    }
    ;
    v.Z = function() {
        Eu.m.Z.call(this);
        this.J = this.H = null
    }
    ;
    v.pf = function() {
        this.b.ib(this.H, this.$d(this.g) || "")
    }
    ;
    v.Db = function(a) {
        this.Tc.call(this, a)
    }
    ;
    function Fu(a, b) {
        Au.call(this, a, b);
        this.a.Xd = !1
    }
    G(Fu, Au);
    Fu.prototype.fd = function() {
        var a = Pg(this.b, Za);
        a.className = "goog-te-button";
        var b = this.b.D(g, {
            style: "background: url(" + Mq + ") repeat-x 0 -39px"
        });
        a.appendChild(b);
        this.H = Pg(this.b, Ma);
        b.appendChild(this.H);
        this.S(a)
    }
    ;
    Fu.prototype.Wg = function(a) {
        rg(this.H);
        this.H.appendChild(this.b.a.createTextNode(String(a + "\u00a0\u25bc")))
    }
    ;
    Fu.prototype.Z = function() {
        Fu.m.Z.call(this);
        this.H = null
    }
    ;
    Fu.prototype.og = function(a) {
        this.ya(a.currentTarget.value);
        this.dispatchEvent(Oa);
        this.Bd()
    }
    ;
    function Gu(a, b) {
        T.call(this, b);
        this.a = a && dd(a) || {};
        this.c = new hi(this)
    }
    G(Gu, T);
    var Hu = {
        vk: 0,
        Wj: 1,
        kk: 2
    };
    v = Gu.prototype;
    v.D = function() {
        var a = Pg(this.b, Za);
        M(a, Sb);
        M(a, "goog-te-gadget");
        a.dir = nd.test(Cq) ? Qb : "ltr";
        Q(a, !1);
        if (2 == this.a.Rb)
            a.innerHTML = hs({
                id: V(this, Wb),
                Qg: "",
                Pg: ""
            });
        else {
            var b = Z.rh(is() || "");
            a.innerHTML = hs({
                id: V(this, Wb),
                Qg: "",
                Pg: nr(1 == this.a.Rb ? "&nbsp;&nbsp;" + b : b)
            })
        }
        this.S(a)
    }
    ;
    v.O = function() {
        Gu.m.O.call(this);
        this.f = 2 == this.a.Rb ? new Eu(null,this.b) : new zu(this.b);
        this.c.w(this.f, Oa, ar(this, Ra));
        this.c.w(this.f, zb, this.wj);
        var a = this.b.j(V(this, Wb));
        if (2 == this.a.Rb) {
            var b = this.b.D("IMG", {
                src: vb,
                "class": "goog-te-gadget-icon",
                alt: ""
            });
            b.style.backgroundImage = "url(" + Nq + ")";
            b.style.backgroundPosition = "-65px 0px";
            var c = this.b.D(ua, {
                style: "vertical-align: middle"
            });
            a.appendChild(b);
            a.appendChild(c);
            this.f.fa(c);
            a.style.whiteSpace = "nowrap";
            a.className = "goog-te-gadget-simple"
        } else
            this.f.fa(a),
            1 == this.a.Rb && (a.style.display = "inline")
    }
    ;
    v.wj = function() {
        if (2 == this.a.Rb) {
            var a = this.f
              , b = this.b.j(V(this, Wb));
            a.l.ba(a.o, Sa, a.Me);
            a.o = b;
            a.l.w(a.o, Sa, a.Me)
        }
        this.dispatchEvent(zb)
    }
    ;
    v.Z = function() {
        Gu.m.Z.call(this);
        this.c.M();
        this.c = null;
        this.f.M();
        this.f = null
    }
    ;
    v.oa = function() {
        return this.f.Aa()
    }
    ;
    v.ta = function(a) {
        "" == a ? this.H && this.f.Db(this.H) : this.C && this.f.Db(this.C);
        this.f.ya(a)
    }
    ;
    v.I = function(a) {
        Q(this.j(), a)
    }
    ;
    v.ka = function(a) {
        this.f.ka(a)
    }
    ;
    v.xf = function(a, b) {
        this.H = a;
        this.C = b
    }
    ;
    function Iu() {
        Xf()
    }
    Iu.prototype.fa = function(a) {
        a = a({}, {});
        this.a(null, a && a.Ib)
    }
    ;
    function Ju(a, b) {
        b = b || {};
        var c = b.top
          , d = b.left
          , e = b.bottom
          , f = b.right
          , h = b.id;
        b = qk("." + Ek(b.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (c || 0 == c ? "top:" + Ek(c) + "px; _top:expression((" + Ek(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (d || 0 == d ? "left:" + Ek(d) + "px; _left:expression((" + Ek(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (e || 0 == e ? "bottom:" + Ek(e) + "px; _top:expression((-" + Ek(e) + da + String(h).replace(Kk, Ik) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (f || 0 == f ? "right:" + Ek(f) + "px; _left:expression((-" + Ek(f) + da + String(h).replace(Kk, Ik) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}");
        a.a(null, b.Ib);
        return $d(b.toString())
    }
    Iu.prototype.a = z;
    function Ku(a, b) {
        T.call(this, b);
        this.a = a && dd(a) || {};
        this.a.Va || (this.a.Va = Qq);
        this.c = new hi(this)
    }
    G(Ku, T);
    var Lu = {
        pk: 1,
        qk: 2,
        Kj: 3,
        Jj: 4
    };
    v = Ku.prototype;
    v.D = function() {
        var a = Pg(this.b, Za);
        this.ga = !1;
        Q(a, !1);
        var b = V(this, Va);
        a.innerHTML = pk('<iframe id="' + X(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
        this.S(a)
    }
    ;
    v.O = function() {
        Ku.m.O.call(this);
        var a = nd.test(Cq) ? Qb : "ltr"
          , b = pr(this.a.Va)
          , c = V(this, bc);
        this.j().id = V(this, "floatContainer");
        var d = {
            id: this.j().id,
            className: "goog-te-ftab-float"
        };
        this.j().className += " goog-te-ftab-float";
        switch (this.a.kd) {
        case 2:
            var e = gb;
            d.top = 0;
            d.right = 20;
            break;
        case 3:
            e = fb;
            d.bottom = 0;
            d.right = 20;
            break;
        case 4:
            e = fb;
            d.bottom = 0;
            d.left = 20;
            break;
        default:
            e = gb,
            d.top = 0,
            d.left = 20
        }
        gh(Ju(new Iu, d), this.j());
        this.l = this.b.j(V(this, Va));
        this.c.w(this.l, zb, this.xj);
        er(this.l, C(function() {
            var f = Eg(this.l);
            var h = e;
            h = pk(ja + X(Dk(b)) + '"></head><body class="goog-te-ftab ' + X(h) + '" scroll="no" style="overflow:hidden" dir="' + X(a) + '"><a id="' + X(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + X(Bk(vb)) + aa + X(Bk(Nq)) + ');background-position:-65px 0px"><span>' + ok(Z.Lf) + "</span></a></body>");
            h = hk(h);
            f.write(ke(h));
            f.close()
        }, this))
    }
    ;
    v.xj = function() {
        this.f = (new Yf(Eg(this.l))).j(V(this, bc));
        this.c.w(this.f, Sa, ar(this, "clk_trans"));
        Q(this.j(), !0);
        var a = lh(this.f);
        Q(this.j(), !1);
        mh(this.l, a);
        mh(this.j(), a);
        this.dispatchEvent(zb)
    }
    ;
    v.Z = function() {
        Ku.m.Z.call(this);
        this.c.M();
        this.c = null;
        ug(this.l);
        this.f = this.l = null
    }
    ;
    v.isVisible = t("ga");
    v.I = function(a) {
        this.ga = a;
        Q(this.j(), a)
    }
    ;
    function Mu(a, b) {
        T.call(this, b);
        this.h = new hi(this);
        this.a = a && dd(a) || {};
        this.a.Va || (this.a.Va = Qq);
        this.a.zf = !1;
        P(this.b.a.body, Kb, "relative");
        sf || P(this.b.a.body, "minHeight", "100%");
        P(this.b.a.documentElement, "height", "100%");
        P(this.b.a.body, "top", "0px");
        I && (window._bannerquirkfixleft = -parseInt("0" + this.b.a.body.leftMargin, 10),
        window._bannerquirkfixtop = -parseInt("0" + this.b.a.body.topMargin, 10) - 40)
    }
    G(Mu, T);
    v = Mu.prototype;
    v.fa = function() {
        var a = this.b.a.body.firstChild;
        xi(this, a.parentNode, a)
    }
    ;
    v.D = function() {
        var a = Pg(this.b, Za);
        this.ga = !1;
        Q(a, !1);
        M(a, Sb);
        var b = V(this, Va);
        a.innerHTML = pk('<iframe id="' + X(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
        this.S(a)
    }
    ;
    v.O = function() {
        Mu.m.O.call(this);
        var a = nd.test(Cq) ? Qb : "ltr", b = pr(this.a.Va), c = V(this, "promptSection"), d = V(this, "confirm"), e = V(this, Lb), f = V(this, "progressValue"), h = V(this, "cancel"), k = V(this, "finishSection"), l = V(this, "restore"), m = V(this, "errorSection"), n = V(this, "errorContent"), r = V(this, "close"), w = V(this, "noAutoPopup"), F, E = [];
        this.a.zf && E.push(gs({
            id: V(this, Mb)
        }));
        E.push(gs({
            id: V(this, Nb)
        }));
        var ca = nr(Z.Bh.apply(null, E));
        E = [];
        this.a.zf && E.push(gs({
            id: V(this, ab)
        }));
        E.push(gs({
            id: V(this, bb)
        }));
        var $l = nr(Z.wh.apply(null, E));
        this.a.ah && (F = this.a.ah);
        this.l = this.b.j(V(this, Va));
        this.h.w(this.l, zb, this.uj);
        er(this.l, C(function() {
            var hf = Eg(this.l);
            var tb = F;
            tb = pk(ja + X(Dk(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + X(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + X(wk(ub)) + '" class="goog-logo-link" target="_blank"><img src="' + X(Bk("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png")) + '" alt="Google ' + X(Z.Wc) + '"></a></td>' + (tb ? '<td width=1><img src="' + X(Bk(vb)) + '" width="9" height="15" title="' + X(tb) + '" alt="' + X(tb) + aa + X(Bk(Nq)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + X(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + ok(ca) + ia + X(d) + '"><b>' + ok(Z.Lf) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(w) + '"></button></div></div></td></tr><tr id="' + X(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + ok(Z.xh) + '&nbsp;<span dir="ltr">(<b id="' + X(f) + '"></b>%)</span>&nbsp;<img src="' + X(Bk(Pq)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(h) + '">' + ok(Z.Gf) + ha + X(k) + '" style="display:none"><td><span class="goog-te-banner-content">' + ok($l) + ia + X(l) + '">' + ok(Z.sh) + ha + X(m) + '" style="display:none" valign=middle><td><span id="' + X(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' + X(r) + '" class="goog-close-link" href="javascript:void(0)" title="' + X(Z.Hf) + '"><img src="' + X(Bk(vb)) + '" width="15" height="15" alt="' + X(Z.Hf) + aa + X(Bk(Nq)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
            tb = hk(tb);
            hf.write(ke(tb));
            hf.close()
        }, this))
    }
    ;
    v.uj = function() {
        this.c = new Yf(Eg(this.l));
        Nu(this, Z.If);
        if (this.a.Va == Qq) {
            var a = "url(" + Mq + ")";
            P(this.c.a.body, Ia, a);
            for (var b = this.c.a.getElementsByTagName(Ma), c = 0; c < b.length; ++c) {
                var d = b[c].parentNode;
                P(d, Ia, a);
                P(d, "backgroundRepeat", "repeat-x");
                P(d, Ja, "0 -39px")
            }
        }
        this.a.zf && (this.g = new Du(this.a,this.c));
        this.f = new Du(this.a,this.c);
        this.o = new Fu(this.a,this.c);
        this.h.w(this.c.j(V(this, "confirm")), Sa, ar(this, "clk_confirm"));
        this.h.w(this.c.j(V(this, "cancel")), Sa, ar(this, "clk_cancel"));
        this.h.w(this.c.j(V(this, "restore")), Sa, ar(this, "clk_restore"));
        this.h.w(this.c.j(V(this, "close")), Sa, ar(this, "clk_close"));
        this.L = this.c.j(V(this, "noAutoPopup"));
        this.h.w(this.L, Sa, ar(this, "clk_no_ap"));
        this.g && this.h.w(this.g, Oa, ar(this, "chg_src_lang"));
        this.h.w(this.f, Oa, ar(this, Ra));
        this.h.w(this.o, Oa, this.pi);
        a = new Vq(C(this.vj, this));
        this.g && this.h.w(this.g, zb, a.register());
        this.h.w(this.f, zb, a.register());
        this.h.w(this.o, zb, a.register());
        a.finish();
        this.g && this.g.fa(this.c.j(V(this, Mb)));
        this.f.fa(this.c.j(V(this, Nb)));
        this.o.fa(this.c.j("options"))
    }
    ;
    v.vj = function() {
        this.o.Wg(Z.ph);
        this.o.Tc({
            turn_off_site: Z.zh,
            s1: "---",
            learn_more: Z.oh
        });
        this.dispatchEvent(zb)
    }
    ;
    v.pi = function() {
        switch (this.o.Aa()) {
        case "learn_more":
            window.open(Tq, "_blank");
            break;
        case "turn_off_site":
            this.dispatchEvent(Ta)
        }
    }
    ;
    v.Z = function() {
        this.I(!1);
        Mu.m.Z.call(this);
        this.h.M();
        this.h = null;
        this.g && (this.g.M(),
        this.g = null);
        this.f.M();
        this.f = null;
        this.o.M();
        this.o = null;
        ug(this.l);
        this.yc = this.c = null
    }
    ;
    v.cb = function() {
        return this.g ? this.g.Aa() : ""
    }
    ;
    v.oa = function() {
        return this.f.Aa()
    }
    ;
    v.Tb = function(a) {
        this.g && this.g.ya(a);
        this.J && this.J[a] && this.c.ib(this.L, Z.yh(this.J[a]))
    }
    ;
    v.ta = function(a) {
        this.f.ya(a)
    }
    ;
    function Ou(a, b, c, d) {
        if (a.yc != b) {
            a.yc = b;
            if (0 == b) {
                a.g && yu(a.g, a.c.j(V(a, Mb)));
                if (a.H) {
                    var e = a.oa();
                    a.f.Db(a.H);
                    a.ta(e)
                }
                yu(a.f, a.c.j(V(a, Nb)))
            } else
                2 == b && (a.g && yu(a.g, a.c.j(V(a, ab))),
                a.C && (e = a.oa(),
                a.f.Db(a.C),
                a.ta(e)),
                yu(a.f, a.c.j(V(a, bb))));
            e = {};
            e[-1] = a.c.j(V(a, "errorSection"));
            e[0] = a.c.j(V(a, "promptSection"));
            e[1] = a.c.j(V(a, Lb));
            e[2] = a.c.j(V(a, "finishSection"));
            for (var f in e)
                e[f] !== Object.prototype[f] && Q(e[f], f == b)
        }
        c && a.I(!0);
        a.L.parentNode.parentNode.style.display = d ? "block" : q
    }
    v.isVisible = t("ga");
    v.I = function(a) {
        if (this.ga != a) {
            this.ga = a;
            if (I)
                var b = parseInt("0" + this.b.a.body.leftMargin, 10)
                  , c = parseInt("0" + this.b.a.body.topMargin, 10);
            var d = "BackCompat" == this.b.a.compatMode;
            a ? (P(this.b.a.body, "top", "40px"),
            Q(this.j(), !0),
            I && (L("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0,
            d && (this.b.a.body.topMargin = c + 40)) : d ? (this.b.a.body.topMargin = c + 40,
            window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b,
            window._bannerquirkfixtop = -c - 40))) : (P(this.b.a.body, "top", "0px"),
            Q(this.j(), !1),
            d && 40 <= c && (this.b.a.body.topMargin = c - 40))
        }
    }
    ;
    v.vf = function(a) {
        this.c.ib(this.c.j(V(this, "progressValue")), a)
    }
    ;
    function Nu(a, b) {
        a.c.ib(a.c.j(V(a, "errorContent")), b)
    }
    v.xf = function(a, b) {
        this.H = a;
        this.C = b;
        this.f.Db(a)
    }
    ;
    function Pu(a, b) {
        R.call(this);
        A(a) == Ub && (b = a,
        a = {});
        A(b) == Ub && (b = Zf(document, String(b)));
        this.ca = b;
        this.h = new hi(this);
        this.Vb = this.W = void 0;
        a = Object(a);
        this.g = Ha;
        !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
        b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
        this.a = {
            le: b,
            Zf: !1,
            me: null,
            bd: null,
            Se: [],
            Yf: [],
            Lh: !1,
            kc: !1,
            $a: "",
            $f: !1,
            ve: "",
            Rb: 0,
            Uf: !1
        };
        this.qa = {
            Va: Qq,
            ah: "https://" == Lq ? Z.uh : null
        };
        this.P = {
            Va: Qq,
            kd: null
        };
        a && ("autoDisplay"in a && (this.a.le = this.a.le && !!a.autoDisplay),
        "multilanguagePage"in a && (this.a.kc = !!a.multilanguagePage),
        "gaTrack"in a && (this.a.$f = !!a.gaTrack),
        "layout"in a && (this.a.Rb = a.layout),
        a.pageLanguage && (this.a.Vd = br(a.pageLanguage)),
        a.includedLanguages && (this.a.Se = a.includedLanguages.split(",")),
        a.excludedLanguages && (this.a.Yf = a.excludedLanguages.split(",")),
        this.a.Vd && (this.g = this.a.Vd),
        a.key && (this.a.$a = a.key),
        a.gaId && (this.a.ve = a.gaId),
        this.P.kd = Number(a.floatPosition) || this.P.kd,
        "disableAutoTranslation"in a && (this.a.Uf = !!a.disableAutoTranslation),
        a.jwtToken && (this.W = new Tr(a.jwtToken)),
        a.jwtTokenProvider && (this.W = new Ur(a.jwtTokenProvider)),
        a.translateErrorHandler && (this.Vb = a.translateErrorHandler));
        !this.a.Uf && Qu(this) && (this.a.Zf = !0);
        this.s = {};
        if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
            for (this.s = {},
            a = Ge(a[2]).split("|"),
            b = 0; b < a.length; ++b) {
                var c = a[b].split("=");
                c[0] && (this.s[c[0]] = c[1])
            }
        this.ua = new jt({
            $a: this.a.$a,
            Kb: 1,
            yf: !0,
            Fk: Sq
        },{
            client: Iq,
            u: window.location.href
        });
        this.B = new wu(void 0,this.ua,void 0,void 0,this.a.$a,void 0,void 0,new ju,this.W,this.Vb);
        this.G = !1;
        this.h.w(window, "unload", this.M);
        this.K = new Vq(C(this.ji, this));
        this.C = new Vq(C(this.mi, this));
        this.L = new Xq(C(this.Gi, this));
        this.b = new Mu(this.qa);
        this.B.pd(this.K.register(C(this.ii, this)), Cq);
        this.ca ? (this.f = new Gu(this.a),
        this.h.w(this.f, zb, this.K.register()),
        this.h.w(this.f, Ra, Yq(this.L, this.C.delay(C(this.hi, this)))),
        this.f.fa(this.ca)) : this.P.kd && (this.l = new Ku(this.P),
        this.h.w(this.l, zb, this.K.register()),
        this.h.w(this.l, "clk_trans", Yq(this.L, this.C.delay(C(this.gi, this)))),
        this.l.fa());
        !this.a.Vd && this.a.Lh && this.B.ld(this.K.register(C(this.di, this)));
        this.K.finish()
    }
    G(Pu, R);
    function Qu(a) {
        function b(f, h) {
            if (f = Ge(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                if (f[3])
                    return h.a.me = f[2],
                    h.a.bd = f[3],
                    !0;
                if (f[6])
                    return h.a.me = f[5],
                    h.a.bd = f[6],
                    !0
            }
            return !1
        }
        var c = {
            url: function() {
                var f = window.location.href.match(/#.*googtrans(.*)/);
                return f && f[1]
            },
            cookie: function() {
                var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                return f && f[2]
            }
        }, d;
        for (d in c)
            if (c[d] !== Object.prototype[d]) {
                var e = c[d]();
                if (e && b(e, a))
                    return d
            }
        return ""
    }
    function Ru(a, b) {
        for (var c = window.location.hostname.split("."); 2 < c.length; )
            c.shift();
        c = ";domain=" + c.join(".");
        null != b ? a = a + "=" + b : (b = new Date,
        b.setTime(b.getTime() - 1),
        a = a + "=none;expires=" + b.toGMTString());
        a += ";path=/";
        document.cookie = a;
        try {
            document.cookie = a + c
        } catch (d) {}
    }
    function Su(a, b) {
        var c = null;
        void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
        Ru("googtrans", c)
    }
    v = Pu.prototype;
    v.ii = function(a) {
        this.c = br(Cq);
        this.H = a || {};
        this.o = {};
        this.J = {};
        a = !this.a.Se.length;
        var b = Uq(this.a.Se)
          , c = Uq(this.a.Yf);
        this.o[Cq] = "";
        this.J[Cq] = "";
        for (var d in this.H.tl)
            this.H.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.J[d] = this.H.tl[d],
            d == this.a.Vd && !this.a.kc) || (this.o[d] = this.H.tl[d]);
        this.o[Cq] || delete this.o[Cq];
        this.J[Cq] || delete this.J[Cq];
        this.la = dd(this.H.sl)
    }
    ;
    v.di = function(a) {
        a && (this.g = br(a))
    }
    ;
    v.ji = function() {
        delete this.K;
        if (this.H) {
            this.g = this.g || this.a.me;
            this.c = this.a.bd || this.c;
            var a = this.a.Zf || this.a.le && this.g != this.c && !(this.g in Gq) && "1" != this.s.os && "1" != this.s["o" + this.g];
            "zh-TW" == this.g && (this.g = "zh-CN");
            this.la[this.g] || (a = !1,
            this.g = Ha);
            if (!this.o[this.c])
                if (a = !1,
                this.o.en)
                    this.c = "en";
                else
                    for (var b in this.o)
                        if (this.o[b] !== Object.prototype[b]) {
                            this.c = b;
                            break
                        }
            if (this.f) {
                var c = this.o
                  , d = {
                    "": Z.th
                };
                for (b in c)
                    c[b] !== Object.prototype[b] && (d[b] = c[b]);
                this.f.xf(d, this.J);
                this.f.ta("")
            }
            !Eq && a ? this.a.bd ? Yq(this.L, this.C.delay(C(this.Wd, this, !0, !0))).call() : (this.G = !0,
            Yq(this.L, this.C.delay(C(this.Wd, this))).call(),
            dr("te_ap", {
                sl: this.g
            })) : (this.l && this.l.I(!0),
            this.f && this.f.I(!0));
            window.google.translate.TranslateService && this.ka(!1);
            this.L.finish()
        }
    }
    ;
    v.mi = function() {
        var a = this.b
          , b = this.la;
        a.g && a.g.Db(b);
        a.J = b;
        this.b.xf(this.o, this.J);
        this.b.Tb(this.g);
        this.b.ta(this.c);
        this.h.w(this.b, "clk_confirm", this.Yh);
        this.h.w(this.b, "clk_cancel", this.Xh);
        this.h.w(this.b, "clk_restore", this.Ke);
        this.h.w(this.b, "clk_close", this.Ad);
        this.h.w(this.b, "clk_no_ap", this.Zh);
        this.h.w(this.b, Ta, this.$h);
        this.h.w(this.b, "chg_src_lang", this.jg);
        this.h.w(this.b, Ra, this.jg);
        this.f && this.f.I(!0)
    }
    ;
    v.Gi = function() {
        this.h.w(this.b, zb, this.C.register());
        this.b.fa();
        this.C.finish()
    }
    ;
    v.F = function() {
        this.B.restore();
        Pu.m.F.call(this);
        this.B.M();
        this.h.M();
        this.h = null;
        this.b && this.b.M();
        this.b = null;
        this.l && this.l.M();
        this.l = null;
        this.f && this.f.M();
        this.ca = this.f = null
    }
    ;
    v.Yh = function() {
        !this.b.isVisible() || !this.a.kc && jr(this.g, this.b.oa()) || (this.G && dr("te_apt", {
            sl: this.g
        }),
        Tu(this, !1),
        this.f && this.f.ta(this.b.oa()))
    }
    ;
    v.Xh = function() {
        this.b.isVisible() && (Uu(this),
        Ou(this.b, 0),
        this.f && this.f.ta(""))
    }
    ;
    v.Ke = function() {
        this.b.isVisible() && (Uu(this),
        Ou(this.b, 0));
        this.f && this.f.ta("")
    }
    ;
    v.Ad = function() {
        this.b.isVisible() && (this.G && (this.G = !1,
        dr("te_apc", {
            sl: this.g
        })),
        Uu(this),
        this.b.I(!1),
        this.f && this.f.ta(""),
        this.l && this.l.I(!0))
    }
    ;
    v.Zh = function() {
        this.b.isVisible() && (this.s["o" + this.g] = "1",
        dr("te_apr", {
            sl: this.g
        }),
        this.G = !1,
        this.Ad())
    }
    ;
    v.$h = function() {
        if (this.b.isVisible()) {
            this.G = !1;
            this.s.os = "1";
            var a = null;
            if (this.s) {
                a = [];
                for (var b in this.s)
                    this.s[b] !== Object.prototype[b] && a.push(b + "=" + this.s[b]);
                a = a.join("|")
            }
            Ru("googtransopt", a);
            this.Ad()
        }
    }
    ;
    v.jg = function() {
        this.b.isVisible() && (!this.a.kc && jr(this.g, this.b.oa()) ? this.Ke() : (this.g = this.b.cb() || this.g,
        this.c = this.b.oa(),
        2 == this.b.yc && (this.f && this.f.ta(this.b.oa()),
        Tu(this))))
    }
    ;
    v.Wd = function(a, b) {
        this.b.isVisible() || (this.l && this.l.I(!1),
        a ? Tu(this, b) : Ou(this.b, 0, !0, this.G))
    }
    ;
    v.oj = function(a, b) {
        Yq(this.L, this.C.delay(C(this.Wd, this, a, b))).call()
    }
    ;
    v.gi = function() {
        this.Wd(2 == this.b.yc)
    }
    ;
    v.hi = function() {
        this.f.oa() ? !this.a.kc && jr(this.g, this.b.oa()) ? this.Ke() : (this.c = this.f.oa(),
        this.b.ta(this.c),
        Tu(this)) : this.f.ta(this.c)
    }
    ;
    function Tu(a, b) {
        if (window.google.translate.TranslateService)
            try {
                window.google.translate.TranslateService.getInstance().restore()
            } catch (c) {}
        Su(a.g, a.c);
        a.G = !1;
        !b && a.g in Gq && dr("te_ape", {
            sl: a.g
        });
        a.b.vf(0);
        Ou(a.b, 1, !0);
        a.B.Xg(!!b);
        window.setTimeout(C(a.B.ce, a.B, a.a.kc ? Ha : a.g, a.c, C(a.vi, a), void 0, void 0), 0);
        if (a.a.$f && window._gaq && window._gat)
            try {
                a.a.ve ? window._gat._getTracker(a.a.ve)._trackEvent(ma, "Translate", a.c) : window._gat._getTrackerByName()._trackEvent(ma, "Translate", a.c)
            } catch (c) {}
    }
    v.vi = function(a, b, c) {
        A(this.ra) == p && this.ra();
        this.b.isVisible() && 1 == this.b.yc && (c ? (Uu(this),
        Ou(this.b, -1, !0),
        2 == c ? Nu(this.b, Z.nh) : Nu(this.b, Z.If)) : (this.b.vf(a),
        b && (this.f && this.f.ta(this.c),
        this.b.Tb(this.g),
        Ou(this.b, 2))))
    }
    ;
    function Uu(a) {
        Su();
        window.setTimeout(C(a.B.restore, a.B, null), 0)
    }
    v.ka = function(a) {
        a || this.Ad();
        this.f && this.f.ka(a);
        this.l && this.l.I(a)
    }
    ;
    function Vu(a) {
        if (a && (a = String(a),
        a = a.split("."),
        a.length)) {
            for (var b = window, c = 0; c < a.length; ++c) {
                var d = a[c];
                if (!(d && d in b))
                    return;
                b = b[d]
            }
            return b
        }
    }
    ;var Wu = Vu("google.translate.m");
    if (Wu)
        for (var Xu in Z)
            if (Z[Xu] !== Object.prototype[Z[Xu]] && Z[Xu]) {
                var Yu = Z[Xu]();
                Z[Xu] = Wu[Yu] ? Wu[Yu] : fs
            }
    if (1 == Hq) {
        var Zu = null
          , $u = function(a) {
            if (!Zu) {
                var b, c, d, e;
                a && ("key"in a && (b = a.key),
                "serverParams"in a && (c = a.serverParams),
                "timeInfo"in a && (d = a.timeInfo),
                "remoteApiProxyHandlers"in a && (e = a.remoteApiProxyHandlers),
                (a = (a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1] ? a[1] : null) && (c = a));
                a = 0;
                if ("te_lib" == Iq || We)
                    a = 3;
                Zu = new wu(void 0,new jt({
                    $a: b,
                    Kb: a,
                    yf: !0,
                    trackVisibility: "tvis" == c
                }),void 0,void 0,b,c,d,new ju,void 0,void 0,e);
                Zu.constructor = z;
                Zu.isAvailable = Zu.Ua;
                Zu.getSupportedLanguages = Zu.pd;
                Zu.getPageLanguage = Zu.ld;
                Zu.setClickThrough = Zu.Xg;
                Zu.translatePage = Zu.ce;
                Zu.restore = Zu.restore;
                Zu.isTranslating = Zu.tj;
                Zu.setCheckVisibility = Zu.lj
            }
            return Zu
        };
        $u.getInstance = function() {
            return Zu
        }
        ;
        Dc("google.translate.TranslateService", $u);
        dr("te_li")
    } else {
        var av = null
          , bv = function(a, b) {
            av || (av = new Pu(a,b),
            av.constructor = z);
            return av
        };
        bv.getInstance = function() {
            return av
        }
        ;
        Dc("google.translate.TranslateElement", bv);
        Pu.prototype.dispose = Pu.prototype.M;
        Pu.prototype.showBanner = Pu.prototype.oj;
        Pu.prototype.setEnabled = Pu.prototype.ka;
        Dc("google.translate.TranslateElement.FloatPosition", Lu);
        Lu.TOP_LEFT = 1;
        Lu.TOP_RIGHT = 2;
        Lu.BOTTOM_RIGHT = 3;
        Lu.BOTTOM_LEFT = 4;
        Dc("google.translate.TranslateElement.InlineLayout", Hu);
        Hu.VERTICAL = 0;
        Hu.HORIZONTAL = 1;
        Hu.SIMPLE = 2
    }
    (function() {
        for (var a in Object.prototype) {
            Xc = function(d, e, f) {
                for (var h in d)
                    d[h] !== Object.prototype[h] && e.call(f, d[h], h, d)
            }
            ;
            break
        }
        var b = D()
          , c = Vu(Dq);
        c && A(c) == p && (1 == Hq ? c() : function e() {
            var f = document.readyState;
            "undefined" == A(f) || f == Ua || "interactive" == f || 2E4 <= D() - b ? c() : window.setTimeout(e, 500)
        }())
    }
    )();
}
).call(window);
