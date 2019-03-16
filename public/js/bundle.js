function initMap() {
    var t = new google.maps.LatLng((-31.6349758), (-60.7048152)),
        e = new google.maps.LatLng((-31.6505956), (-60.7099174)),
        n = new google.maps.Map(document.getElementById("map1"), {
            zoom: 15,
            disableDefaultUI: !0,
            scrollwheel: !1,
            center: t
        }),
        i = new google.maps.Map(document.getElementById("map2"), {
            zoom: 15,
            disableDefaultUI: !0,
            scrollwheel: !1,
            center: e
        });
    new google.maps.Marker({
        position: t,
        map: n,
        title: "Rectorado UNL"
    }), new google.maps.Marker({
        position: e,
        map: i,
        title: "Foro Cultural UNL"
    })
}
if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = !!t && "length" in t && t.length,
                n = rt.type(t);
            return "function" !== n && !rt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function i(t, e, n) {
            if (rt.isFunction(e)) return rt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return rt.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (gt.test(e)) return rt.filter(e, t, n);
                e = rt.filter(e, t)
            }
            return rt.grep(t, function(t) {
                return Z.call(e, t) > -1 !== n
            })
        }

        function o(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function r(t) {
            var e = {};
            return rt.each(t.match(wt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            Y.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), rt.ready()
        }

        function a() {
            this.expando = rt.expando + a.uid++
        }

        function l(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Nt, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : St.test(n) ? rt.parseJSON(n) : n)
                    } catch (o) {}
                    kt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function u(t, e, n, i) {
            var o, r = 1,
                s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return rt.css(t, e, "")
                },
                l = a(),
                u = n && n[3] || (rt.cssNumber[e] ? "" : "px"),
                c = (rt.cssNumber[e] || "px" !== u && +l) && At.exec(rt.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do r = r || ".5", c /= r, rt.style(t, e, c + u); while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }

        function c(t, e) {
            var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], n) : n
        }

        function f(t, e) {
            for (var n = 0, i = t.length; n < i; n++) $t.set(t[n], "globalEval", !e || $t.get(e[n], "globalEval"))
        }

        function p(t, e, n, i, o) {
            for (var r, s, a, l, u, p, d = e.createDocumentFragment(), h = [], g = 0, v = t.length; g < v; g++)
                if (r = t[g], r || 0 === r)
                    if ("object" === rt.type(r)) rt.merge(h, r.nodeType ? [r] : r);
                    else if (Pt.test(r)) {
                for (s = s || d.appendChild(e.createElement("div")), a = (Lt.exec(r) || ["", ""])[1].toLowerCase(), l = qt[a] || qt._default, s.innerHTML = l[1] + rt.htmlPrefilter(r) + l[2], p = l[0]; p--;) s = s.lastChild;
                rt.merge(h, s.childNodes), s = d.firstChild, s.textContent = ""
            } else h.push(e.createTextNode(r));
            for (d.textContent = "", g = 0; r = h[g++];)
                if (i && rt.inArray(r, i) > -1) o && o.push(r);
                else if (u = rt.contains(r.ownerDocument, r), s = c(d.appendChild(r), "script"), u && f(s), n)
                for (p = 0; r = s[p++];) Rt.test(r.type || "") && n.push(r);
            return d
        }

        function d() {
            return !0
        }

        function h() {
            return !1
        }

        function g() {
            try {
                return Y.activeElement
            } catch (t) {}
        }

        function v(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) v(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = h;
            else if (!o) return t;
            return 1 === r && (s = o, o = function(t) {
                return rt().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = rt.guid++)), t.each(function() {
                rt.event.add(this, e, o, i, n)
            })
        }

        function m(t, e) {
            return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function y(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function b(t) {
            var e = _t.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            var n, i, o, r, s, a, l, u;
            if (1 === e.nodeType) {
                if ($t.hasData(t) && (r = $t.access(t), s = $t.set(e, r), u = r.events)) {
                    delete s.handle, s.events = {};
                    for (o in u)
                        for (n = 0, i = u[o].length; n < i; n++) rt.event.add(e, o, u[o][n])
                }
                kt.hasData(t) && (a = kt.access(t), l = rt.extend({}, a), kt.set(e, l))
            }
        }

        function w(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Ot.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function T(t, e, n, i) {
            e = J.apply([], e);
            var o, r, s, a, l, u, f = 0,
                d = t.length,
                h = d - 1,
                g = e[0],
                v = rt.isFunction(g);
            if (v || d > 1 && "string" == typeof g && !it.checkClone && Ut.test(g)) return t.each(function(o) {
                var r = t.eq(o);
                v && (e[0] = g.call(this, o, r.html())), T(r, e, n, i)
            });
            if (d && (o = p(e, t[0].ownerDocument, !1, t, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (s = rt.map(c(o, "script"), y), a = s.length; f < d; f++) l = o, f !== h && (l = rt.clone(l, !0, !0), a && rt.merge(s, c(l, "script"))), n.call(t[f], l, f);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, rt.map(s, b), f = 0; f < a; f++) l = s[f], Rt.test(l.type || "") && !$t.access(l, "globalEval") && rt.contains(u, l) && (l.src ? rt._evalUrl && rt._evalUrl(l.src) : rt.globalEval(l.textContent.replace(Qt, "")))
            }
            return t
        }

        function C(t, e, n) {
            for (var i, o = e ? rt.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || rt.cleanData(c(i)), i.parentNode && (n && rt.contains(i.ownerDocument, i) && f(c(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function E(t, e) {
            var n = rt(e.createElement(t)).appendTo(e.body),
                i = rt.css(n[0], "display");
            return n.detach(), i
        }

        function $(t) {
            var e = Y,
                n = Vt[t];
            return n || (n = E(t, e), "none" !== n && n || (zt = (zt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = zt[0].contentDocument, e.write(), e.close(), n = E(t, e), zt.detach()), Vt[t] = n), n
        }

        function k(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || Gt(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), n && !it.pixelMarginRight() && Yt.test(s) && Xt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
        }

        function S(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function N(t) {
            if (t in ie) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = ne.length; n--;)
                if (t = ne[n] + e, t in ie) return t
        }

        function D(t, e, n) {
            var i = At.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function A(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += rt.css(t, n + It[r], !0, o)), i ? ("content" === n && (s -= rt.css(t, "padding" + It[r], !0, o)), "margin" !== n && (s -= rt.css(t, "border" + It[r] + "Width", !0, o))) : (s += rt.css(t, "padding" + It[r], !0, o), "padding" !== n && (s += rt.css(t, "border" + It[r] + "Width", !0, o)));
            return s
        }

        function I(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = Gt(t),
                s = "border-box" === rt.css(t, "boxSizing", !1, r);
            if (o <= 0 || null == o) {
                if (o = k(t, e, r), (o < 0 || null == o) && (o = t.style[e]), Yt.test(o)) return o;
                i = s && (it.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + A(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function j(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; s < a; s++) i = t[s], i.style && (r[s] = $t.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && jt(i) && (r[s] = $t.access(i, "olddisplay", $(i.nodeName)))) : (o = jt(i), "none" === n && o || $t.set(i, "olddisplay", o ? n : rt.css(i, "display"))));
            for (s = 0; s < a; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function O(t, e, n, i, o) {
            return new O.prototype.init(t, e, n, i, o)
        }

        function L() {
            return t.setTimeout(function() {
                oe = void 0
            }), oe = rt.now()
        }

        function R(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = It[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function q(t, e, n) {
            for (var i, o = (M.tweeners[e] || []).concat(M.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function P(t, e, n) {
            var i, o, r, s, a, l, u, c, f = this,
                p = {},
                d = t.style,
                h = t.nodeType && jt(t),
                g = $t.get(t, "fxshow");
            n.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, f.always(function() {
                f.always(function() {
                    a.unqueued--, rt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = rt.css(t, "display"), c = "none" === u ? $t.get(t, "olddisplay") || $(t.nodeName) : u, "inline" === c && "none" === rt.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], se.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        h = !0
                    }
                    p[i] = g && g[i] || rt.style(t, i)
                } else u = void 0;
            if (rt.isEmptyObject(p)) "inline" === ("none" === u ? $(t.nodeName) : u) && (d.display = u);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = $t.access(t, "fxshow", {}), r && (g.hidden = !h), h ? rt(t).show() : f.done(function() {
                    rt(t).hide()
                }), f.done(function() {
                    var e;
                    $t.remove(t, "fxshow");
                    for (e in p) rt.style(t, e, p[e])
                });
                for (i in p) s = q(h ? g[i] : 0, i, f), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function H(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = rt.camelCase(n), o = e[i], r = t[n], rt.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = rt.cssHooks[i], s && "expand" in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function M(t, e, n) {
            var i, o, r = 0,
                s = M.prefilters.length,
                a = rt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = oe || L(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(r);
                    return a.notifyWith(t, [u, r, n]), r < 1 && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: rt.extend({}, e),
                    opts: rt.extend(!0, {
                        specialEasing: {},
                        easing: rt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: oe || L(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = rt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (H(c, u.opts.specialEasing); r < s; r++)
                if (i = M.prefilters[r].call(u, t, c, u.opts)) return rt.isFunction(i.stop) && (rt._queueHooks(u.elem, u.opts.queue).stop = rt.proxy(i.stop, i)), i;
            return rt.map(c, q, u), rt.isFunction(u.opts.start) && u.opts.start.call(t, u), rt.fx.timer(rt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function F(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function B(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(wt) || [];
                if (rt.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function W(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, rt.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var r = {},
                s = t === ke;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function U(t, e) {
            var n, i, o = rt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && rt.extend(!0, t, i), t
        }

        function _(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function Q(t, e, n, i) {
            var o, r, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (r = c.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = u[l + " " + r] || u["* " + r], !s)
                    for (o in u)
                        if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (f) {
                        return {
                            state: "parsererror",
                            error: s ? f : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function z(t, e, n, i) {
            var o;
            if (rt.isArray(e)) rt.each(e, function(e, o) {
                n || Ae.test(t) ? i(t, o) : z(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== rt.type(e)) i(t, e);
            else
                for (o in e) z(t + "[" + o + "]", e[o], n, i)
        }

        function V(t) {
            return rt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var X = [],
            Y = t.document,
            G = X.slice,
            J = X.concat,
            K = X.push,
            Z = X.indexOf,
            tt = {},
            et = tt.toString,
            nt = tt.hasOwnProperty,
            it = {},
            ot = "2.2.4",
            rt = function(t, e) {
                return new rt.fn.init(t, e)
            },
            st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            at = /^-ms-/,
            lt = /-([\da-z])/gi,
            ut = function(t, e) {
                return e.toUpperCase()
            };
        rt.fn = rt.prototype = {
            jquery: ot,
            constructor: rt,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : G.call(this)
            },
            pushStack: function(t) {
                var e = rt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return rt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(rt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: K,
            sort: X.sort,
            splice: X.splice
        }, rt.extend = rt.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = s[e], i = t[e], s !== i && (u && i && (rt.isPlainObject(i) || (o = rt.isArray(i))) ? (o ? (o = !1, r = n && rt.isArray(n) ? n : []) : r = n && rt.isPlainObject(n) ? n : {}, s[e] = rt.extend(u, r, i)) : void 0 !== i && (s[e] = i));
            return s
        }, rt.extend({
            expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === rt.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !rt.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
                if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || nt.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                t = rt.trim(t), t && (1 === t.indexOf("use strict") ? (e = Y.createElement("script"), e.text = t, Y.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(at, "ms-").replace(lt, ut)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, o = 0;
                if (n(t))
                    for (i = t.length; o < i && e.call(t[o], o, t[o]) !== !1; o++);
                else
                    for (o in t)
                        if (e.call(t[o], o, t[o]) === !1) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(st, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : Z.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i, o = [], r = 0, s = t.length, a = !n; r < s; r++) i = !e(t[r], r), i !== a && o.push(t[r]);
                return o
            },
            map: function(t, e, i) {
                var o, r, s = 0,
                    a = [];
                if (n(t))
                    for (o = t.length; s < o; s++) r = e(t[s], s, i), null != r && a.push(r);
                else
                    for (s in t) r = e(t[s], s, i), null != r && a.push(r);
                return J.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                if ("string" == typeof e && (n = t[e], e = t, t = n), rt.isFunction(t)) return i = G.call(arguments, 2), o = function() {
                    return t.apply(e || this, i.concat(G.call(arguments)))
                }, o.guid = t.guid = t.guid || rt.guid++, o
            },
            now: Date.now,
            support: it
        }), "function" == typeof Symbol && (rt.fn[Symbol.iterator] = X[Symbol.iterator]), rt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function(t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, u, f, d, h = e && e.ownerDocument,
                    g = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
                if (!i && ((e ? e.ownerDocument || e : F) !== j && I(e), e = e || j, L)) {
                    if (11 !== g && (u = mt.exec(t)))
                        if (o = u[1]) {
                            if (9 === g) {
                                if (!(s = e.getElementById(o))) return n;
                                if (s.id === o) return n.push(s), n
                            } else if (h && (s = h.getElementById(o)) && H(e, s) && s.id === o) return n.push(s), n
                        } else {
                            if (u[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = u[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(o)), n
                        }
                    if (w.qsa && !Q[t + " "] && (!R || !R.test(t))) {
                        if (1 !== g) h = e, d = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = M), f = $(t), r = f.length, l = pt.test(a) ? "#" + a : "[id='" + a + "']"; r--;) f[r] = l + " " + p(f[r]);
                            d = f.join(","), h = yt.test(t) && c(e.parentNode) || e
                        }
                        if (d) try {
                            return K.apply(n, h.querySelectorAll(d)), n
                        } catch (v) {} finally {
                            a === M && e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(at, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[M] = !0, t
            }

            function o(t) {
                var e = j.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function f() {}

            function p(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function d(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = W++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, s) {
                    var a, l, u, c = [B, r];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if (u = e[M] || (e[M] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === B && a[1] === r) return c[2] = a[2];
                                if (l[i] = c, c[2] = t(e, n, s)) return !0
                            }
                }
            }

            function h(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, n, i) {
                for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i);
                return i
            }

            function v(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));
                return s
            }

            function m(t, e, n, o, r, s) {
                return o && !o[M] && (o = m(o)), r && !r[M] && (r = m(r, s)), i(function(i, s, a, l) {
                    var u, c, f, p = [],
                        d = [],
                        h = s.length,
                        m = i || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? m : v(m, p, t, a, l),
                        b = n ? r || (i ? t : h || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)
                        for (u = v(b, d), o(u, [], a, l), c = u.length; c--;)(f = u[c]) && (b[d[c]] = !(y[d[c]] = f));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                                r(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(f = b[c]) && (u = r ? tt(i, f) : p[c]) > -1 && (i[u] = !(s[u] = f))
                        }
                    } else b = v(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = d(function(t) {
                        return t === e
                    }, s, !0), u = d(function(t) {
                        return tt(e, t) > -1
                    }, s, !0), c = [function(t, n, i) {
                        var o = !r && (i || n !== N) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, o
                    }]; a < o; a++)
                    if (n = T.relative[t[a].type]) c = [d(h(c), n)];
                    else {
                        if (n = T.filter[t[a].type].apply(null, t[a].matches), n[M]) {
                            for (i = ++a; i < o && !T.relative[t[i].type]; i++);
                            return m(a > 1 && h(c), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), n, a < i && y(t.slice(a, i)), i < o && y(t = t.slice(i)), i < o && p(t))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, f, p, d = 0,
                            h = "0",
                            g = i && [],
                            m = [],
                            y = N,
                            b = i || r && T.find.TAG("*", u),
                            x = B += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (u && (N = s === j || s || u); h !== w && null != (c = b[h]); h++) {
                            if (r && c) {
                                for (f = 0, s || c.ownerDocument === j || (I(c), a = !L); p = t[f++];)
                                    if (p(c, s || j, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (B = x)
                            }
                            o && ((c = !p && c) && d--, i && g.push(c))
                        }
                        if (d += h, o && h !== d) {
                            for (f = 0; p = n[f++];) p(g, m, s, a);
                            if (i) {
                                if (d > 0)
                                    for (; h--;) g[h] || m[h] || (m[h] = G.call(l));
                                m = v(m)
                            }
                            K.apply(l, m), u && !i && m.length > 0 && d + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (B = x, N = y), g
                    };
                return o ? i(s) : s
            }
            var x, w, T, C, E, $, k, S, N, D, A, I, j, O, L, R, q, P, H, M = "sizzle" + 1 * new Date,
                F = t.document,
                B = 0,
                W = 0,
                U = n(),
                _ = n(),
                Q = n(),
                z = function(t, e) {
                    return t === e && (A = !0), 0
                },
                V = 1 << 31,
                X = {}.hasOwnProperty,
                Y = [],
                G = Y.pop,
                J = Y.push,
                K = Y.push,
                Z = Y.slice,
                tt = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                lt = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ft = new RegExp(rt),
                pt = new RegExp("^" + it + "$"),
                dt = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it + "|[*])"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                ht = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                wt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Tt = function() {
                    I()
                };
            try {
                K.apply(Y = Z.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
            } catch (Ct) {
                K = {
                    apply: Y.length ? function(t, e) {
                        J.apply(t, Z.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, E = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, I = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : F;
                return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, O = j.documentElement, L = !E(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), w.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = o(function(t) {
                    return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(j.getElementsByClassName), w.getById = o(function(t) {
                    return O.appendChild(t).id = M, !j.getElementsByName || !j.getElementsByName(M).length
                }), w.getById ? (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && L) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(xt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(xt, wt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, T.find.CLASS = w.getElementsByClassName && function(t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && L) return e.getElementsByClassName(t)
                }, q = [], R = [], (w.qsa = vt.test(j.querySelectorAll)) && (o(function(t) {
                    O.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + M + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + M + "+*").length || R.push(".#.+[+~]")
                }), o(function(t) {
                    var e = j.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
                })), (w.matchesSelector = vt.test(P = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
                    w.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), q.push("!=", rt)
                }), R = R.length && new RegExp(R.join("|")), q = q.length && new RegExp(q.join("|")), e = vt.test(O.compareDocumentPosition), H = e || vt.test(O.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, z = e ? function(t, e) {
                    if (t === e) return A = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === j || t.ownerDocument === F && H(F, t) ? -1 : e === j || e.ownerDocument === F && H(F, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return A = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !r) return t === j ? -1 : e === j ? 1 : o ? -1 : r ? 1 : D ? tt(D, t) - tt(D, e) : 0;
                    if (o === r) return s(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
                }, j) : j
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== j && I(t), n = n.replace(ct, "='$1']"), w.matchesSelector && L && !Q[n + " "] && (!q || !q.test(n)) && (!R || !R.test(n))) try {
                    var i = P.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return e(n, j, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== j && I(t), H(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== j && I(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && X.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
                return void 0 !== i ? i : w.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (A = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort(z), A) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return D = null, t
            }, C = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += C(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = $(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, wt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = U[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && U(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, f, p, d, h, g = r !== s ? "nextSibling" : "previousSibling",
                                v = e.parentNode,
                                m = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (v) {
                                if (r) {
                                    for (; g;) {
                                        for (p = e; p = p[g];)
                                            if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                        h = g = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (p = v, f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), u = c[t] || [], d = u[0] === B && u[1], b = d && u[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === e) {
                                            c[t] = [B, d, b];
                                            break
                                        }
                                } else if (y && (p = e, f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), u = c[t] || [], d = u[0] === B && u[1], b = d), b === !1)
                                    for (;
                                        (p = ++d && p && p[g] || (b = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && (f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[t] = [B, b]), p !== e)););
                                return b -= o, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[M] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;) i = tt(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = k(t.replace(at, "$1"));
                        return o[M] ? i(function(t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(xt, wt),
                            function(e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === O
                    },
                    focus: function(t) {
                        return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ht.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[x] = l(x);
            return f.prototype = T.filters = T.pseudos, T.setFilters = new f, $ = e.tokenize = function(t, n) {
                var i, o, r, s, a, l, u, c = _[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = T.preFilter; a;) {
                    i && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(at, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter) !(o = dt[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : _(t, l).slice(0)
            }, k = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = Q[t + " "];
                if (!r) {
                    for (e || (e = $(t)), n = e.length; n--;) r = y(e[n]), r[M] ? i.push(r) : o.push(r);
                    r = Q(t, b(o, i)), r.selector = t
                }
                return r
            }, S = e.select = function(t, e, n, i) {
                var o, r, s, a, l, u = "function" == typeof t && t,
                    f = !i && $(t = u.selector || t);
                if (n = n || [], 1 === f.length) {
                    if (r = f[0] = f[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && L && T.relative[r[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(xt, wt), e) || [])[0], !e) return n;
                        u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = dt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (i = l(s.matches[0].replace(xt, wt), yt.test(r[0].type) && c(e.parentNode) || e))) {
                            if (r.splice(o, 1), t = i.length && p(r), !t) return K.apply(n, i), n;
                            break
                        }
                }
                return (u || k(t, f))(i, e, !L, n, !e || yt.test(t) && c(e.parentNode) || e), n
            }, w.sortStable = M.split("").sort(z).join("") === M, w.detectDuplicates = !!A, I(), w.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(j.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function(t, e, n) {
                var i;
                if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        rt.find = ct, rt.expr = ct.selectors, rt.expr[":"] = rt.expr.pseudos, rt.uniqueSort = rt.unique = ct.uniqueSort, rt.text = ct.getText, rt.isXMLDoc = ct.isXML, rt.contains = ct.contains;
        var ft = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && rt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            pt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            dt = rt.expr.match.needsContext,
            ht = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            gt = /^.[^:#\[\.,]*$/;
        rt.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? rt.find.matchesSelector(i, t) ? [i] : [] : rt.find.matches(t, rt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, rt.fn.extend({
            find: function(t) {
                var e, n = this.length,
                    i = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                    for (e = 0; e < n; e++)
                        if (rt.contains(o[e], this)) return !0
                }));
                for (e = 0; e < n; e++) rt.find(t, o[e], i);
                return i = this.pushStack(n > 1 ? rt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && dt.test(t) ? rt(t) : t || [], !1).length
            }
        });
        var vt, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            yt = rt.fn.init = function(t, e, n) {
                var i, o;
                if (!t) return this;
                if (n = n || vt, "string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : mt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Y, !0)), ht.test(i[1]) && rt.isPlainObject(e))
                            for (i in e) rt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return o = Y.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Y, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
            };
        yt.prototype = rt.fn, vt = rt(Y);
        var bt = /^(?:parents|prev(?:Until|All))/,
            xt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        rt.fn.extend({
            has: function(t) {
                var e = rt(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (rt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], s = dt.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? rt.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? Z.call(rt(t), this[0]) : Z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(rt.uniqueSort(rt.merge(this.get(), rt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), rt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ft(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return ft(t, "parentNode", n)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return ft(t, "nextSibling")
            },
            prevAll: function(t) {
                return ft(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return ft(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return ft(t, "previousSibling", n)
            },
            siblings: function(t) {
                return pt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return pt(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || rt.merge([], t.childNodes)
            }
        }, function(t, e) {
            rt.fn[t] = function(n, i) {
                var o = rt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = rt.filter(i, o)), this.length > 1 && (xt[t] || rt.uniqueSort(o), bt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var wt = /\S+/g;
        rt.Callbacks = function(t) {
            t = "string" == typeof t ? r(t) : rt.extend({}, t);
            var e, n, i, o, s = [],
                a = [],
                l = -1,
                u = function() {
                    for (o = t.once, i = e = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                    t.memory || (n = !1), e = !1, o && (s = n ? [] : "")
                },
                c = {
                    add: function() {
                        return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                            rt.each(e, function(e, n) {
                                rt.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== rt.type(n) && i(n)
                            })
                        }(arguments), n && !e && u()), this
                    },
                    remove: function() {
                        return rt.each(arguments, function(t, e) {
                            for (var n;
                                (n = rt.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? rt.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return o = a = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return o = a = [], n || (s = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, n) {
                        return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, rt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", rt.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return rt.Deferred(function(n) {
                                rt.each(e, function(e, r) {
                                    var s = rt.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && rt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? rt.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, rt.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    r = G.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && rt.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : rt.Deferred(),
                    u = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) r[o] && rt.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, e)).done(u(o, i, r)).fail(l.reject) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var Tt;
        rt.fn.ready = function(t) {
            return rt.ready.promise().done(t), this
        }, rt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? rt.readyWait++ : rt.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --rt.readyWait : rt.isReady) || (rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (Tt.resolveWith(Y, [rt]), rt.fn.triggerHandler && (rt(Y).triggerHandler("ready"), rt(Y).off("ready"))))
            }
        }), rt.ready.promise = function(e) {
            return Tt || (Tt = rt.Deferred(), "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? t.setTimeout(rt.ready) : (Y.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), Tt.promise(e)
        }, rt.ready.promise();
        var Ct = function(t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === rt.type(n)) {
                    o = !0;
                    for (a in n) Ct(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, rt.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(rt(t), n)
                    })), e))
                    for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
            },
            Et = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        a.uid = 1, a.prototype = {
            register: function(t, e) {
                var n = e || {};
                return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!Et(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, Et(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[e] = n;
                else
                    for (i in e) o[i] = e[i];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, rt.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i, o, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 === e) this.register(t);
                    else {
                        rt.isArray(e) ? i = e.concat(e.map(rt.camelCase)) : (o = rt.camelCase(e), e in r ? i = [e, o] : (i = o, i = i in r ? [i] : i.match(wt) || [])), n = i.length;
                        for (; n--;) delete r[i[n]]
                    }(void 0 === e || rt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !rt.isEmptyObject(e)
            }
        };
        var $t = new a,
            kt = new a,
            St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Nt = /[A-Z]/g;
        rt.extend({
            hasData: function(t) {
                return kt.hasData(t) || $t.hasData(t)
            },
            data: function(t, e, n) {
                return kt.access(t, e, n)
            },
            removeData: function(t, e) {
                kt.remove(t, e)
            },
            _data: function(t, e, n) {
                return $t.access(t, e, n)
            },
            _removeData: function(t, e) {
                $t.remove(t, e)
            }
        }), rt.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = kt.get(r), 1 === r.nodeType && !$t.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(r, i, o[i])));
                        $t.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    kt.set(this, t)
                }) : Ct(this, function(e) {
                    var n, i;
                    if (r && void 0 === e) {
                        if (n = kt.get(r, t) || kt.get(r, t.replace(Nt, "-$&").toLowerCase()), void 0 !== n) return n;
                        if (i = rt.camelCase(t), n = kt.get(r, i), void 0 !== n) return n;
                        if (n = l(r, i, void 0), void 0 !== n) return n
                    } else i = rt.camelCase(t), this.each(function() {
                        var n = kt.get(this, i);
                        kt.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && kt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    kt.remove(this, t)
                })
            }
        }), rt.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = $t.get(t, e), n && (!i || rt.isArray(n) ? i = $t.access(t, e, rt.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = rt.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = rt._queueHooks(t, e),
                    s = function() {
                        rt.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return $t.get(t, n) || $t.access(t, n, {
                    empty: rt.Callbacks("once memory").add(function() {
                        $t.remove(t, [e + "queue", n])
                    })
                })
            }
        }), rt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = rt.queue(this, t, e);
                    rt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && rt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    rt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = rt.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = $t.get(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            At = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
            It = ["Top", "Right", "Bottom", "Left"],
            jt = function(t, e) {
                return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
            },
            Ot = /^(?:checkbox|radio)$/i,
            Lt = /<([\w:-]+)/,
            Rt = /^$|\/(?:java|ecma)script/i,
            qt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        qt.optgroup = qt.option, qt.tbody = qt.tfoot = qt.colgroup = qt.caption = qt.thead, qt.th = qt.td;
        var Pt = /<|&#?\w+;/;
        ! function() {
            var t = Y.createDocumentFragment(),
                e = t.appendChild(Y.createElement("div")),
                n = Y.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ht = /^key/,
            Mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ft = /^([^.]*)(?:\.(.+)|)/;
        rt.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, u, c, f, p, d, h, g, v = $t.get(t);
                if (v)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = rt.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                            return "undefined" != typeof rt && rt.event.triggered !== e.type ? rt.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(wt) || [""], u = e.length; u--;) a = Ft.exec(e[u]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = rt.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = rt.event.special[d] || {}, c = rt.extend({
                        type: d,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && rt.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, f.setup && f.setup.call(t, i, h, s) !== !1 || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), rt.event.global[d] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, u, c, f, p, d, h, g, v = $t.hasData(t) && $t.get(t);
                if (v && (l = v.events)) {
                    for (e = (e || "").match(wt) || [""], u = e.length; u--;)
                        if (a = Ft.exec(e[u]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                            for (f = rt.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) c = p[r], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(t, c));
                            s && !p.length && (f.teardown && f.teardown.call(t, h, v.handle) !== !1 || rt.removeEvent(t, d, v.handle), delete l[d])
                        } else
                            for (d in l) rt.event.remove(t, d + e[u], n, i, !0);
                    rt.isEmptyObject(l) && $t.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = rt.event.fix(t);
                var e, n, i, o, r, s = [],
                    a = G.call(arguments),
                    l = ($t.get(this, "events") || {})[t.type] || [],
                    u = rt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (s = rt.event.handlers.call(this, t, l), e = 0;
                        (o = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, i = ((rt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (i = [], n = 0; n < a; n++) r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? rt(o, this).index(l) > -1 : rt.find(o, this, null, [l]).length), i[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Y, i = n.documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[rt.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Mt.test(o) ? this.mouseHooks : Ht.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = Y), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== g() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === g() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && rt.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return rt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, rt.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, rt.Event = function(t, e) {
            return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : h) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
        }, rt.Event.prototype = {
            constructor: rt.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, rt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            rt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === i || rt.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), rt.fn.extend({
            on: function(t, e, n, i) {
                return v(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return v(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, rt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = h), this.each(function() {
                    rt.event.remove(this, t, n, e)
                })
            }
        });
        var Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Wt = /<script|<style|<link/i,
            Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            _t = /^true\/(.*)/,
            Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        rt.extend({
            htmlPrefilter: function(t) {
                return t.replace(Bt, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, r, s, a = t.cloneNode(!0),
                    l = rt.contains(t.ownerDocument, t);
                if (!(it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                    for (s = c(a), r = c(t), i = 0, o = r.length; i < o; i++) w(r[i], s[i]);
                if (e)
                    if (n)
                        for (r = r || c(t), s = s || c(a), i = 0, o = r.length; i < o; i++) x(r[i], s[i]);
                    else x(t, a);
                return s = c(a, "script"), s.length > 0 && f(s, !l && c(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, o = rt.event.special, r = 0; void 0 !== (n = t[r]); r++)
                    if (Et(n)) {
                        if (e = n[$t.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, e.handle);
                            n[$t.expando] = void 0
                        }
                        n[kt.expando] && (n[kt.expando] = void 0)
                    }
            }
        }), rt.fn.extend({
            domManip: T,
            detach: function(t) {
                return C(this, t, !0)
            },
            remove: function(t) {
                return C(this, t)
            },
            text: function(t) {
                return Ct(this, function(t) {
                    return void 0 === t ? rt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return T(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = m(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return T(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = m(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return T(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return T(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (rt.cleanData(c(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return rt.clone(this, t, e)
                })
            },
            html: function(t) {
                return Ct(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Wt.test(t) && !qt[(Lt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = rt.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (rt.cleanData(c(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return T(this, arguments, function(e) {
                    var n = this.parentNode;
                    rt.inArray(this, t) < 0 && (rt.cleanData(c(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), rt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            rt.fn[t] = function(t) {
                for (var n, i = [], o = rt(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), rt(o[s])[e](n), K.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var zt, Vt = {
                HTML: "block",
                BODY: "block"
            },
            Xt = /^margin/,
            Yt = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
            Gt = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            },
            Jt = function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o
            },
            Kt = Y.documentElement;
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(s);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, r = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Kt.removeChild(s)
            }
            var n, i, o, r, s = Y.createElement("div"),
                a = Y.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), rt.extend(it, {
                pixelPosition: function() {
                    return e(), n
                },
                boxSizingReliable: function() {
                    return null == i && e(), i
                },
                pixelMarginRight: function() {
                    return null == i && e(), o
                },
                reliableMarginLeft: function() {
                    return null == i && e(), r
                },
                reliableMarginRight: function() {
                    var e, n = a.appendChild(Y.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Kt.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), Kt.removeChild(s), a.removeChild(n), e
                }
            }))
        }();
        var Zt = /^(none|table(?!-c[ea]).+)/,
            te = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ee = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ne = ["Webkit", "O", "Moz", "ms"],
            ie = Y.createElement("div").style;
        rt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = k(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = rt.camelCase(e),
                        l = t.style;
                    return e = rt.cssProps[a] || (rt.cssProps[a] = N(a) || a), s = rt.cssHooks[e] || rt.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : (r = typeof n, "string" === r && (o = At.exec(n)) && o[1] && (n = u(t, e, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (rt.cssNumber[a] ? "" : "px")), it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = rt.camelCase(e);
                return e = rt.cssProps[a] || (rt.cssProps[a] = N(a) || a), s = rt.cssHooks[e] || rt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = k(t, e, i)), "normal" === o && e in ee && (o = ee[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }), rt.each(["height", "width"], function(t, e) {
            rt.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return Zt.test(rt.css(t, "display")) && 0 === t.offsetWidth ? Jt(t, te, function() {
                        return I(t, e, i)
                    }) : I(t, e, i)
                },
                set: function(t, n, i) {
                    var o, r = i && Gt(t),
                        s = i && A(t, e, i, "border-box" === rt.css(t, "boxSizing", !1, r), r);
                    return s && (o = At.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = rt.css(t, e)), D(t, n, s)
                }
            }
        }), rt.cssHooks.marginLeft = S(it.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(k(t, "marginLeft")) || t.getBoundingClientRect().left - Jt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), rt.cssHooks.marginRight = S(it.reliableMarginRight, function(t, e) {
            if (e) return Jt(t, {
                display: "inline-block"
            }, k, [t, "marginRight"])
        }), rt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            rt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + It[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, Xt.test(t) || (rt.cssHooks[t + e].set = D)
        }), rt.fn.extend({
            css: function(t, e) {
                return Ct(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (rt.isArray(e)) {
                        for (i = Gt(t), o = e.length; s < o; s++) r[e[s]] = rt.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return j(this, !0)
            },
            hide: function() {
                return j(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    jt(this) ? rt(this).show() : rt(this).hide()
                })
            }
        }), rt.Tween = O, O.prototype = {
            constructor: O,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || rt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (rt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = O.propHooks[this.prop];
                return t && t.get ? t.get(this) : O.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = O.propHooks[this.prop];
                return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[rt.cssProps[t.prop]] && !rt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : rt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, rt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, rt.fx = O.prototype.init, rt.fx.step = {};
        var oe, re, se = /^(?:toggle|show|hide)$/,
            ae = /queueHooks$/;
        rt.Animation = rt.extend(M, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return u(n.elem, t, At.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(wt);
                    for (var n, i = 0, o = t.length; i < o; i++) n = t[i], M.tweeners[n] = M.tweeners[n] || [], M.tweeners[n].unshift(e)
                },
                prefilters: [P],
                prefilter: function(t, e) {
                    e ? M.prefilters.unshift(t) : M.prefilters.push(t)
                }
            }), rt.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? rt.extend({}, t) : {
                    complete: n || !n && e || rt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !rt.isFunction(e) && e
                };
                return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
                }, i
            }, rt.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(jt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = rt.isEmptyObject(t),
                        r = rt.speed(e, n, i),
                        s = function() {
                            var e = M(this, rt.extend({}, t), r);
                            (o || $t.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = rt.timers,
                            s = $t.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && ae.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        !e && n || rt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = $t.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = rt.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, rt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), rt.each(["toggle", "show", "hide"], function(t, e) {
                var n = rt.fn[e];
                rt.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, i, o)
                }
            }), rt.each({
                slideDown: R("show"),
                slideUp: R("hide"),
                slideToggle: R("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                rt.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), rt.timers = [], rt.fx.tick = function() {
                var t, e = 0,
                    n = rt.timers;
                for (oe = rt.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || rt.fx.stop(), oe = void 0
            }, rt.fx.timer = function(t) {
                rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
            }, rt.fx.interval = 13, rt.fx.start = function() {
                re || (re = t.setInterval(rt.fx.tick, rt.fx.interval))
            }, rt.fx.stop = function() {
                t.clearInterval(re), re = null
            }, rt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, rt.fn.delay = function(e, n) {
                return e = rt.fx ? rt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = Y.createElement("input"),
                    e = Y.createElement("select"),
                    n = e.appendChild(Y.createElement("option"));
                t.type = "checkbox", it.checkOn = "" !== t.value, it.optSelected = n.selected, e.disabled = !0, it.optDisabled = !n.disabled, t = Y.createElement("input"), t.value = "t", t.type = "radio", it.radioValue = "t" === t.value
            }();
        var le, ue = rt.expr.attrHandle;
        rt.fn.extend({
            attr: function(t, e) {
                return Ct(this, rt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    rt.removeAttr(this, t)
                })
            }
        }), rt.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? rt.prop(t, e, n) : (1 === r && rt.isXMLDoc(t) || (e = e.toLowerCase(), o = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? le : void 0)), void 0 !== n ? null === n ? void rt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = rt.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!it.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(wt);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = rt.propFix[n] || n, rt.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }
        }), le = {
            set: function(t, e, n) {
                return e === !1 ? rt.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = ue[e] || rt.find.attr;
            ue[e] = function(t, e, i) {
                var o, r;
                return i || (r = ue[e], ue[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ue[e] = r), o
            }
        });
        var ce = /^(?:input|select|textarea|button)$/i,
            fe = /^(?:a|area)$/i;
        rt.fn.extend({
            prop: function(t, e) {
                return Ct(this, rt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[rt.propFix[t] || t]
                })
            }
        }), rt.extend({
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && rt.isXMLDoc(t) || (e = rt.propFix[e] || e, o = rt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = rt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ce.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), it.optSelected || (rt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            rt.propFix[this.toLowerCase()] = this
        });
        var pe = /[\t\r\n\f]/g;
        rt.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).addClass(t.call(this, e, F(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(wt) || []; n = this[l++];)
                        if (o = F(n), i = 1 === n.nodeType && (" " + o + " ").replace(pe, " ")) {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = rt.trim(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).removeClass(t.call(this, e, F(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(wt) || []; n = this[l++];)
                        if (o = F(n), i = 1 === n.nodeType && (" " + o + " ").replace(pe, " ")) {
                            for (s = 0; r = e[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            a = rt.trim(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : rt.isFunction(t) ? this.each(function(n) {
                    rt(this).toggleClass(t.call(this, n, F(this), e), e)
                }) : this.each(function() {
                    var e, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = rt(this), r = t.match(wt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = F(this), e && $t.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : $t.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + F(n) + " ").replace(pe, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var de = /\r/g,
            he = /[\x20\t\r\n\f]+/g;
        rt.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = rt.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, rt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : rt.isArray(o) && (o = rt.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = rt.valHooks[o.type] || rt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(de, "") : null == n ? "" : n)) : void 0
            }
        }), rt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = rt.find.attr(t, "value");
                        return null != e ? e : rt.trim(rt.text(t)).replace(he, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                            if (n = i[l], (n.selected || l === o) && (it.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !rt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = rt(n).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = rt.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = rt.inArray(rt.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), rt.each(["radio", "checkbox"], function() {
            rt.valHooks[this] = {
                set: function(t, e) {
                    if (rt.isArray(e)) return t.checked = rt.inArray(rt(t).val(), e) > -1
                }
            }, it.checkOn || (rt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var ge = /^(?:focusinfocus|focusoutblur)$/;
        rt.extend(rt.event, {
            trigger: function(e, n, i, o) {
                var r, s, a, l, u, c, f, p = [i || Y],
                    d = nt.call(e, "type") ? e.type : e,
                    h = nt.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !ge.test(d + rt.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, e = e[rt.expando] ? e : new rt.Event(d, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : rt.makeArray(n, [e]), f = rt.event.special[d] || {}, o || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                    if (!o && !f.noBubble && !rt.isWindow(i)) {
                        for (l = f.delegateType || d, ge.test(l + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (i.ownerDocument || Y) && p.push(a.defaultView || a.parentWindow || t)
                    }
                    for (r = 0;
                        (s = p[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : f.bindType || d, c = ($t.get(s, "events") || {})[e.type] && $t.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && Et(s) && (e.result = c.apply(s, n), e.result === !1 && e.preventDefault());
                    return e.type = d, o || e.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Et(i) || u && rt.isFunction(i[d]) && !rt.isWindow(i) && (a = i[u], a && (i[u] = null), rt.event.triggered = d, i[d](), rt.event.triggered = void 0, a && (i[u] = a)), e.result
                }
            },
            simulate: function(t, e, n) {
                var i = rt.extend(new rt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                rt.event.trigger(i, null, e)
            }
        }), rt.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    rt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return rt.event.trigger(t, e, n, !0)
            }
        }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            rt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), rt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), it.focusin = "onfocusin" in t, it.focusin || rt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                rt.event.simulate(e, t.target, rt.event.fix(t))
            };
            rt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = $t.access(i, e);
                    o || i.addEventListener(t, n, !0), $t.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = $t.access(i, e) - 1;
                    o ? $t.access(i, e, o) : (i.removeEventListener(t, n, !0), $t.remove(i, e))
                }
            }
        });
        var ve = t.location,
            me = rt.now(),
            ye = /\?/;
        rt.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, rt.parseXML = function(e) {
            var n;
            if (!e || "string" != typeof e) return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (i) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), n
        };
        var be = /#.*$/,
            xe = /([?&])_=[^&]*/,
            we = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Te = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ce = /^(?:GET|HEAD)$/,
            Ee = /^\/\//,
            $e = {},
            ke = {},
            Se = "*/".concat("*"),
            Ne = Y.createElement("a");
        Ne.href = ve.href, rt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ve.href,
                type: "GET",
                isLocal: Te.test(ve.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Se,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": rt.parseJSON,
                    "text xml": rt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? U(U(t, rt.ajaxSettings), e) : U(rt.ajaxSettings, t)
            },
            ajaxPrefilter: B($e),
            ajaxTransport: B(ke),
            ajax: function(e, n) {
                function i(e, n, i, a) {
                    var u, f, y, b, w, C = n;
                    2 !== x && (x = 2, l && t.clearTimeout(l), o = void 0, s = a || "", T.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (b = _(p, T, i)), b = Q(p, b, T, u), u ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (rt.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (rt.etag[r] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, f = b.data, y = b.error, u = !y)) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || C) + "", u ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, y]), T.statusCode(m), m = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, p, u ? f : y]), v.fireWith(d, [T, C]), c && (h.trigger("ajaxComplete", [T, p]), --rt.active || rt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var o, r, s, a, l, u, c, f, p = rt.ajaxSetup({}, n),
                    d = p.context || p,
                    h = p.context && (d.nodeType || d.jquery) ? rt(d) : rt.event,
                    g = rt.Deferred(),
                    v = rt.Callbacks("once memory"),
                    m = p.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; e = we.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return x || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return x || (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (x < 2)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else T.always(t[T.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return o && o.abort(e), i(0, e), this
                        }
                    };
                if (g.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || ve.href) + "").replace(be, "").replace(Ee, ve.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = rt.trim(p.dataType || "*").toLowerCase().match(wt) || [""], null == p.crossDomain) {
                    u = Y.createElement("a");
                    try {
                        u.href = p.url, u.href = u.href, p.crossDomain = Ne.protocol + "//" + Ne.host != u.protocol + "//" + u.host
                    } catch (C) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = rt.param(p.data, p.traditional)), W($e, p, n, T), 2 === x) return T;
                c = rt.event && p.global, c && 0 === rt.active++ && rt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ce.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (ye.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = xe.test(r) ? r.replace(xe, "$1_=" + me++) : r + (ye.test(r) ? "&" : "?") + "_=" + me++)), p.ifModified && (rt.lastModified[r] && T.setRequestHeader("If-Modified-Since", rt.lastModified[r]), rt.etag[r] && T.setRequestHeader("If-None-Match", rt.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Se + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
                w = "abort";
                for (f in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[f](p[f]);
                if (o = W(ke, p, n, T)) {
                    if (T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), 2 === x) return T;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, o.send(y, i)
                    } catch (C) {
                        if (!(x < 2)) throw C;
                        i(-1, C)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(t, e, n) {
                return rt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return rt.get(t, void 0, e, "script")
            }
        }), rt.each(["get", "post"], function(t, e) {
            rt[e] = function(t, n, i, o) {
                return rt.isFunction(n) && (o = o || i, i = n, n = void 0), rt.ajax(rt.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, rt.isPlainObject(t) && t))
            }
        }), rt._evalUrl = function(t) {
            return rt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, rt.fn.extend({
            wrapAll: function(t) {
                var e;
                return rt.isFunction(t) ? this.each(function(e) {
                    rt(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = rt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return rt.isFunction(t) ? this.each(function(e) {
                    rt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = rt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = rt.isFunction(t);
                return this.each(function(n) {
                    rt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), rt.expr.filters.hidden = function(t) {
            return !rt.expr.filters.visible(t)
        }, rt.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var De = /%20/g,
            Ae = /\[\]$/,
            Ie = /\r?\n/g,
            je = /^(?:submit|button|image|reset|file)$/i,
            Oe = /^(?:input|select|textarea|keygen)/i;
        rt.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = rt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) z(n, t[n], e, o);
            return i.join("&").replace(De, "+")
        }, rt.fn.extend({
            serialize: function() {
                return rt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = rt.prop(this, "elements");
                    return t ? rt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !rt(this).is(":disabled") && Oe.test(this.nodeName) && !je.test(t) && (this.checked || !Ot.test(t))
                }).map(function(t, e) {
                    var n = rt(this).val();
                    return null == n ? null : rt.isArray(n) ? rt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ie, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ie, "\r\n")
                    }
                }).get()
            }
        }), rt.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        };
        var Le = {
                0: 200,
                1223: 204
            },
            Re = rt.ajaxSettings.xhr();
        it.cors = !!Re && "withCredentials" in Re, it.ajax = Re = !!Re, rt.ajaxTransport(function(e) {
            var n, i;
            if (it.cors || Re && !e.crossDomain) return {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) a.setRequestHeader(s, o[s]);
                    n = function(t) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Le[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (l) {
                        if (n) throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), rt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return rt.globalEval(t), t
                }
            }
        }), rt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), rt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, o) {
                        e = rt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), Y.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var qe = [],
            Pe = /(=)\?(?=&|$)|\?\?/;
        rt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = qe.pop() || rt.expando + "_" + me++;
                return this[t] = !0, t
            }
        }), rt.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, s, a = e.jsonp !== !1 && (Pe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pe.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Pe, "$1" + o) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || rt.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === r ? rt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, qe.push(o)), s && rt.isFunction(r) && r(s[0]), s = r = void 0
            }), "script"
        }), rt.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || Y;
            var i = ht.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = p([t], e, o), o && o.length && rt(o).remove(), rt.merge([], i.childNodes))
        };
        var He = rt.fn.load;
        rt.fn.load = function(t, e, n) {
            if ("string" != typeof t && He) return He.apply(this, arguments);
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = rt.trim(t.slice(a)), t = t.slice(0, a)), rt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && rt.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(this, r || [t.responseText, e, t])
                })
            }), this
        }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            rt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), rt.expr.filters.animated = function(t) {
            return rt.grep(rt.timers, function(e) {
                return t === e.elem
            }).length
        }, rt.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, u, c = rt.css(t, "position"),
                    f = rt(t),
                    p = {};
                "static" === c && (t.style.position = "relative"), a = f.offset(), r = rt.css(t, "top"), l = rt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = f.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, n, rt.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : f.css(p)
            }
        }, rt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    rt.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = i && i.ownerDocument;
                return r ? (e = r.documentElement, rt.contains(e, i) ? (o = i.getBoundingClientRect(), n = V(r), {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft
                }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === rt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (i = t.offset()), i.top += rt.css(t[0], "borderTopWidth", !0), i.left += rt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - rt.css(n, "marginTop", !0),
                        left: e.left - i.left - rt.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === rt.css(t, "position");) t = t.offsetParent;
                    return t || Kt
                })
            }
        }), rt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            rt.fn[t] = function(i) {
                return Ct(this, function(t, i, o) {
                    var r = V(t);
                    return void 0 === o ? r ? r[e] : t[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o)
                }, t, i, arguments.length)
            }
        }), rt.each(["top", "left"], function(t, e) {
            rt.cssHooks[e] = S(it.pixelPosition, function(t, n) {
                if (n) return n = k(t, e), Yt.test(n) ? rt(t).position()[e] + "px" : n
            })
        }), rt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            rt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                rt.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Ct(this, function(e, n, i) {
                        var o;
                        return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? rt.css(e, n, s) : rt.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), rt.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            size: function() {
                return this.length
            }
        }), rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return rt
        });
        var Me = t.jQuery,
            Fe = t.$;
        return rt.noConflict = function(e) {
            return t.$ === rt && (t.$ = Fe), e && t.jQuery === rt && (t.jQuery = Me), rt
        }, e || (t.jQuery = t.$ = rt), rt
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === r ? [] : r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(r)]);
                f && f.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                            this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function() {
            var i = t(this),
                o = e(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(a);
            u && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                f = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (u) {
                var d = a,
                    h = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > h.bottom ? "top" : "top" == a && c.top - p < h.top ? "bottom" : "right" == a && c.right + f > h.width ? "left" : "left" == a && c.left - f < h.left ? "right" : a, r.removeClass(d).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, f, p);
            this.applyPlacement(g, a);
            var v = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != r && (e.top = e.top + r - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var f = /top|bottom/.test(n),
            p = f ? 2 * c.left - o + l : 2 * c.top - r + u,
            d = f ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][d], f)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : r ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, s)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var u = e.left - r,
                c = e.left + r + n;
            u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            u = a ? s : e;
        return null != n && o <= n ? "top" : null != i && l + u >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, n, i, o) {
        return jQuery.easing[jQuery.easing.def](t, e, n, i, o)
    },
    easeInQuad: function(t, e, n, i, o) {
        return i * (e /= o) * e + n
    },
    easeOutQuad: function(t, e, n, i, o) {
        return -i * (e /= o) * (e - 2) + n
    },
    easeInOutQuad: function(t, e, n, i, o) {
        return (e /= o / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
    },
    easeInCubic: function(t, e, n, i, o) {
        return i * (e /= o) * e * e + n
    },
    easeOutCubic: function(t, e, n, i, o) {
        return i * ((e = e / o - 1) * e * e + 1) + n
    },
    easeInOutCubic: function(t, e, n, i, o) {
        return (e /= o / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
    },
    easeInQuart: function(t, e, n, i, o) {
        return i * (e /= o) * e * e * e + n
    },
    easeOutQuart: function(t, e, n, i, o) {
        return -i * ((e = e / o - 1) * e * e * e - 1) + n
    },
    easeInOutQuart: function(t, e, n, i, o) {
        return (e /= o / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
    },
    easeInQuint: function(t, e, n, i, o) {
        return i * (e /= o) * e * e * e * e + n
    },
    easeOutQuint: function(t, e, n, i, o) {
        return i * ((e = e / o - 1) * e * e * e * e + 1) + n
    },
    easeInOutQuint: function(t, e, n, i, o) {
        return (e /= o / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
    },
    easeInSine: function(t, e, n, i, o) {
        return -i * Math.cos(e / o * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(t, e, n, i, o) {
        return i * Math.sin(e / o * (Math.PI / 2)) + n
    },
    easeInOutSine: function(t, e, n, i, o) {
        return -i / 2 * (Math.cos(Math.PI * e / o) - 1) + n
    },
    easeInExpo: function(t, e, n, i, o) {
        return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n
    },
    easeOutExpo: function(t, e, n, i, o) {
        return e == o ? n + i : i * (-Math.pow(2, -10 * e / o) + 1) + n
    },
    easeInOutExpo: function(t, e, n, i, o) {
        return 0 == e ? n : e == o ? n + i : (e /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
    },
    easeInCirc: function(t, e, n, i, o) {
        return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n
    },
    easeOutCirc: function(t, e, n, i, o) {
        return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
    },
    easeInOutCirc: function(t, e, n, i, o) {
        return (e /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
    },
    easeInElastic: function(t, e, n, i, o) {
        var r = 1.70158,
            s = 0,
            a = i;
        if (0 == e) return n;
        if (1 == (e /= o)) return n + i;
        if (s || (s = .3 * o), a < Math.abs(i)) {
            a = i;
            var r = s / 4
        } else var r = s / (2 * Math.PI) * Math.asin(i / a);
        return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s)) + n
    },
    easeOutElastic: function(t, e, n, i, o) {
        var r = 1.70158,
            s = 0,
            a = i;
        if (0 == e) return n;
        if (1 == (e /= o)) return n + i;
        if (s || (s = .3 * o), a < Math.abs(i)) {
            a = i;
            var r = s / 4
        } else var r = s / (2 * Math.PI) * Math.asin(i / a);
        return a * Math.pow(2, -10 * e) * Math.sin((e * o - r) * (2 * Math.PI) / s) + i + n
    },
    easeInOutElastic: function(t, e, n, i, o) {
        var r = 1.70158,
            s = 0,
            a = i;
        if (0 == e) return n;
        if (2 == (e /= o / 2)) return n + i;
        if (s || (s = o * (.3 * 1.5)), a < Math.abs(i)) {
            a = i;
            var r = s / 4
        } else var r = s / (2 * Math.PI) * Math.asin(i / a);
        return e < 1 ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s)) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) * .5 + i + n
    },
    easeInBack: function(t, e, n, i, o, r) {
        return void 0 == r && (r = 1.70158), i * (e /= o) * e * ((r + 1) * e - r) + n
    },
    easeOutBack: function(t, e, n, i, o, r) {
        return void 0 == r && (r = 1.70158), i * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + n
    },
    easeInOutBack: function(t, e, n, i, o, r) {
        return void 0 == r && (r = 1.70158), (e /= o / 2) < 1 ? i / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + n : i / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + n
    },
    easeInBounce: function(t, e, n, i, o) {
        return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n
    },
    easeOutBounce: function(t, e, n, i, o) {
        return (e /= o) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
    },
    easeInOutBounce: function(t, e, n, i, o) {
        return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) + .5 * i + n
    }
}), $(function() {
    $("a.page-scroll").bind("click", function(t) {
        var e = $(this);
        $("html, body").stop().animate({
            scrollTop: $(e.attr("href")).offset().top
        }, 1500, "easeInOutExpo"), t.preventDefault()
    })
}), $("body").scrollspy({
    target: ".navbar-fixed-top"
}), $(".navbar-collapse ul li a:not(.dropdown-toggle)").click(function() {
    $(".navbar-toggle:visible").click()
}), $(".carousel").carousel({
    interval: 3e3
}), $(function() {
    function t() {
        $(window).scrollTop() >= n ? $("#barra-navegadora").addClass("navbar-fixed-top") : $("#barra-navegadora").removeClass("navbar-fixed-top")
    }
    var e = $("#barra-navegadora"),
        n = e.offset().top;
    document.onscroll = t
});