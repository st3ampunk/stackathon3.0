(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    [function(t, e, i) {
        "use strict";

        function r(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function s(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }
        /*!
         * GSAP 3.2.6
         * https://greensock.com
         *
         * @license Copyright 2008-2020, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        i.d(e, "a", (function() {
            return Tr
        }));
        var a, n, o, h, l, p, f, c, m, d, u, g, y, v, T, b, S, P, A, _, M, E, C, x, D, w = {
                autoSleep: 120,
                force3D: "auto",
                nullTargetWarn: 1,
                units: {
                    lineHeight: ""
                }
            },
            G = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            k = 2 * Math.PI,
            I = k / 4,
            B = 0,
            F = Math.sqrt,
            V = Math.cos,
            H = Math.sin,
            R = function(t) {
                return "string" == typeof t
            },
            L = function(t) {
                return "function" == typeof t
            },
            O = function(t) {
                return "number" == typeof t
            },
            N = function(t) {
                return void 0 === t
            },
            z = function(t) {
                return "object" == typeof t
            },
            X = function(t) {
                return !1 !== t
            },
            W = function() {
                return "undefined" != typeof window
            },
            K = function(t) {
                return L(t) || R(t)
            },
            U = Array.isArray,
            j = /(?:-?\.?\d|\.)+/gi,
            q = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
            Y = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            Q = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
            Z = /\(([^()]+)\)/i,
            J = /[+-]=-?[\.\d]+/,
            $ = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
            tt = {},
            et = {},
            it = function(t) {
                return (et = xt(t, tt)) && oi
            },
            rt = function(t, e) {
                return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
            },
            st = function(t, e) {
                return !e && console.warn(t)
            },
            at = function(t, e) {
                return t && (tt[t] = e) && et && (et[t] = e) || tt
            },
            nt = function() {
                return 0
            },
            ot = {},
            ht = [],
            lt = {},
            pt = {},
            ft = {},
            ct = 30,
            mt = [],
            dt = "",
            ut = function(t) {
                var e, i, r = t[0];
                if (z(r) || L(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                    for (i = mt.length; i-- && !mt[i].targetTest(r););
                    e = mt[i]
                }
                for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new ke(t[i], e))) || t.splice(i, 1);
                return t
            },
            gt = function(t) {
                return t._gsap || ut($t(t))[0]._gsap
            },
            yt = function(t, e) {
                var i = t[e];
                return L(i) ? t[e]() : N(i) && t.getAttribute(e) || i
            },
            vt = function(t, e) {
                return (t = t.split(",")).forEach(e) || t
            },
            Tt = function(t) {
                return Math.round(1e5 * t) / 1e5 || 0
            },
            bt = function(t, e) {
                for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
                return r < i
            },
            St = function(t, e, i) {
                var r, s = O(t[1]),
                    a = (s ? 2 : 1) + (e < 2 ? 0 : 1),
                    n = t[a];
                if (s && (n.duration = t[1]), n.parent = i, e) {
                    for (r = n; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = X(i.vars.inherit) && i.parent;
                    n.immediateRender = X(r.immediateRender), e < 2 ? n.runBackwards = 1 : n.startAt = t[a - 1]
                }
                return n
            },
            Pt = function() {
                var t, e, i = ht.length,
                    r = ht.slice(0);
                for (lt = {}, ht.length = 0, t = 0; t < i; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
            },
            At = function(t, e, i, r) {
                ht.length && Pt(), t.render(e, i, r), ht.length && Pt()
            },
            _t = function(t) {
                var e = parseFloat(t);
                return (e || 0 === e) && (t + "").match($).length < 2 ? e : t
            },
            Mt = function(t) {
                return t
            },
            Et = function(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            Ct = function(t, e) {
                for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
            },
            xt = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            Dt = function t(e, i) {
                for (var r in i) e[r] = z(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r];
                return e
            },
            wt = function(t, e) {
                var i, r = {};
                for (i in t) i in e || (r[i] = t[i]);
                return r
            },
            Gt = function(t) {
                var e = t.parent || a,
                    i = t.keyframes ? Ct : Et;
                if (X(t.inherit))
                    for (; e;) i(t, e.vars.defaults), e = e.parent;
                return t
            },
            kt = function(t, e, i, r) {
                void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                var s = e._prev,
                    a = e._next;
                s ? s._next = a : t[i] === e && (t[i] = a), a ? a._prev = s : t[r] === e && (t[r] = s), e._next = e._prev = e.parent = null
            },
            It = function(t, e) {
                !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
            },
            Bt = function(t) {
                for (var e = t; e;) e._dirty = 1, e = e.parent;
                return t
            },
            Ft = function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
            },
            Vt = function(t) {
                return t._repeat ? Ht(t._tTime, t = t.duration() + t._rDelay) * t : 0
            },
            Ht = function(t, e) {
                return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
            },
            Rt = function(t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            },
            Lt = function(t) {
                return t._end = Tt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
            },
            Ot = function(t, e) {
                var i;
                if ((e._time || e._initted && !e._dur) && (i = Rt(t.rawTime(), e), (!e._dur || qt(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)), Bt(t)._dp && t._initted && t._time >= t._dur && t._ts) {
                    if (t._dur < t.duration())
                        for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                    t._zTime = -1e-8
                }
            },
            Nt = function(t, e, i, r) {
                return e.parent && It(e), e._start = Tt(i + e._delay), e._end = Tt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                    function(t, e, i, r, s) {
                        void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                        var a, n = t[r];
                        if (s)
                            for (a = e[s]; n && n[s] > a;) n = n._prev;
                        n ? (e._next = n._next, n._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = n, e.parent = e._dp = t
                    }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || Ot(t, e), t
            },
            zt = function(t, e, i, r) {
                return Le(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== be.frame ? (ht.push(t), t._lazy = [e, r], 1) : void 0 : 1
            },
            Xt = function(t, e, i) {
                var r = t._repeat,
                    s = Tt(e) || 0;
                return t._dur = s, t._tDur = r ? r < 0 ? 1e12 : Tt(s * (r + 1) + t._rDelay * r) : s, t._time > s && (t._time = s, t._tTime = Math.min(t._tTime, t._tDur)), !i && Bt(t.parent), t.parent && Lt(t), t
            },
            Wt = function(t) {
                return t instanceof Be ? Bt(t) : Xt(t, t._dur)
            },
            Kt = {
                _start: 0,
                endTime: nt
            },
            Ut = function t(e, i) {
                var r, s, a = e.labels,
                    n = e._recent || Kt,
                    o = e.duration() >= 1e8 ? n.endTime(!1) : e._dur;
                return R(i) && (isNaN(i) || i in a) ? "<" === (r = i.charAt(0)) || ">" === r ? ("<" === r ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) : (r = i.indexOf("=")) < 0 ? (i in a || (a[i] = o), a[i]) : (s = +(i.charAt(r - 1) + i.substr(r + 1)), r > 1 ? t(e, i.substr(0, r - 1)) + s : o + s) : null == i ? o : +i
            },
            jt = function(t, e) {
                return t || 0 === t ? e(t) : e
            },
            qt = function(t, e, i) {
                return i < t ? t : i > e ? e : i
            },
            Yt = function(t) {
                return (t + "").substr((parseFloat(t) + "").length)
            },
            Qt = [].slice,
            Zt = function(t, e) {
                return t && z(t) && "length" in t && (!e && !t.length || t.length - 1 in t && z(t[0])) && !t.nodeType && t !== n
            },
            Jt = function(t, e, i) {
                return void 0 === i && (i = []), t.forEach((function(t) {
                    var r;
                    return R(t) && !e || Zt(t, 1) ? (r = i).push.apply(r, $t(t)) : i.push(t)
                })) || i
            },
            $t = function(t, e) {
                return !R(t) || e || !o && Se() ? U(t) ? Jt(t, e) : Zt(t) ? Qt.call(t, 0) : t ? [t] : [] : Qt.call(h.querySelectorAll(t), 0)
            },
            te = function(t) {
                return t.sort((function() {
                    return .5 - Math.random()
                }))
            },
            ee = function(t) {
                if (L(t)) return t;
                var e = z(t) ? t : {
                        each: t
                    },
                    i = Ce(e.ease),
                    r = e.from || 0,
                    s = parseFloat(e.base) || 0,
                    a = {},
                    n = r > 0 && r < 1,
                    o = isNaN(r) || n,
                    h = e.axis,
                    l = r,
                    p = r;
                return R(r) ? l = p = {
                        center: .5,
                        edges: .5,
                        end: 1
                    }[r] || 0 : !n && o && (l = r[0], p = r[1]),
                    function(t, n, f) {
                        var c, m, d, u, g, y, v, T, b, S = (f || e).length,
                            P = a[S];
                        if (!P) {
                            if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                                for (v = -1e8; v < (v = f[b++].getBoundingClientRect().left) && b < S;);
                                b--
                            }
                            for (P = a[S] = [], c = o ? Math.min(b, S) * l - .5 : r % b, m = o ? S * p / b - .5 : r / b | 0, v = 0, T = 1e8, y = 0; y < S; y++) d = y % b - c, u = m - (y / b | 0), P[y] = g = h ? Math.abs("y" === h ? u : d) : F(d * d + u * u), g > v && (v = g), g < T && (T = g);
                            "random" === r && te(P), P.max = v - T, P.min = T, P.v = S = (parseFloat(e.amount) || parseFloat(e.each) * (b > S ? S - 1 : h ? "y" === h ? S / b : b : Math.max(b, S / b)) || 0) * ("edges" === r ? -1 : 1), P.b = S < 0 ? s - S : s, P.u = Yt(e.amount || e.each) || 0, i = i && S < 0 ? Ee(i) : i
                        }
                        return S = (P[t] - P.min) / P.max || 0, Tt(P.b + (i ? i(S) : S) * P.v) + P.u
                    }
            },
            ie = function(t) {
                var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                return function(i) {
                    return ~~(Math.round(parseFloat(i) / t) * t * e) / e + (O(i) ? 0 : Yt(i))
                }
            },
            re = function(t, e) {
                var i, r, s = U(t);
                return !s && z(t) && (i = s = t.radius || 1e8, t.values ? (t = $t(t.values), (r = !O(t[0])) && (i *= i)) : t = ie(t.increment)), jt(e, s ? L(t) ? function(e) {
                    return r = t(e), Math.abs(r - e) <= i ? r : e
                } : function(e) {
                    for (var s, a, n = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), h = 1e8, l = 0, p = t.length; p--;)(s = r ? (s = t[p].x - n) * s + (a = t[p].y - o) * a : Math.abs(t[p] - n)) < h && (h = s, l = p);
                    return l = !i || h <= i ? t[l] : e, r || l === e || O(e) ? l : l + Yt(e)
                } : ie(t))
            },
            se = function(t, e, i, r) {
                return jt(U(t) ? !e : !0 === i ? !!(i = 0) : !r, (function() {
                    return U(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / i) * i * r) / r
                }))
            },
            ae = function(t, e, i) {
                return jt(i, (function(i) {
                    return t[~~e(i)]
                }))
            },
            ne = function(t) {
                for (var e, i, r, s, a = 0, n = ""; ~(e = t.indexOf("random(", a));) r = t.indexOf(")", e), s = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(s ? $ : j), n += t.substr(a, e - a) + se(s ? i : +i[0], +i[1], +i[2] || 1e-5), a = r + 1;
                return n + t.substr(a, t.length - a)
            },
            oe = function(t, e, i, r, s) {
                var a = e - t,
                    n = r - i;
                return jt(s, (function(e) {
                    return i + (e - t) / a * n
                }))
            },
            he = function(t, e, i) {
                var r, s, a, n = t.labels,
                    o = 1e8;
                for (r in n)(s = n[r] - e) < 0 == !!i && s && o > (s = Math.abs(s)) && (a = r, o = s);
                return a
            },
            le = function(t, e, i) {
                var r, s, a = t.vars,
                    n = a[e];
                if (n) return r = a[e + "Params"], s = a.callbackScope || t, i && ht.length && Pt(), r ? n.apply(s, r) : n.call(s)
            },
            pe = function(t) {
                return It(t), t.progress() < 1 && le(t, "onInterrupt"), t
            },
            fe = function(t) {
                var e = (t = !t.name && t.default || t).name,
                    i = L(t),
                    r = e && !i && t.init ? function() {
                        this._props = []
                    } : t,
                    s = {
                        init: nt,
                        render: Je,
                        add: He,
                        kill: ti,
                        modifier: $e,
                        rawVars: 0
                    },
                    a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: qe,
                        aliases: {},
                        register: 0
                    };
                if (Se(), t !== r) {
                    if (pt[e]) return;
                    Et(r, Et(wt(t, s), a)), xt(r.prototype, xt(s, wt(t, a))), pt[r.prop = e] = r, t.targetTest && (mt.push(r), ot[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                at(e, r), t.register && t.register(oi, r, ri)
            },
            ce = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            me = function(t, e, i) {
                return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            },
            de = function(t, e, i) {
                var r, s, a, n, o, h, l, p, f, c, m = t ? O(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ce.black;
                if (!m) {
                    if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ce[t]) m = ce[t];
                    else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + r + r + s + s + a + a), m = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (m = c = t.match(j), e) {
                            if (~t.indexOf("=")) return m = t.match(q), i && m.length < 4 && (m[3] = 1), m
                        } else n = +m[0] % 360 / 360, o = +m[1] / 100, r = 2 * (h = +m[2] / 100) - (s = h <= .5 ? h * (o + 1) : h + o - h * o), m.length > 3 && (m[3] *= 1), m[0] = me(n + 1 / 3, r, s), m[1] = me(n, r, s), m[2] = me(n - 1 / 3, r, s);
                    else m = t.match(j) || ce.transparent;
                    m = m.map(Number)
                }
                return e && !c && (r = m[0] / 255, s = m[1] / 255, a = m[2] / 255, h = ((l = Math.max(r, s, a)) + (p = Math.min(r, s, a))) / 2, l === p ? n = o = 0 : (f = l - p, o = h > .5 ? f / (2 - l - p) : f / (l + p), n = l === r ? (s - a) / f + (s < a ? 6 : 0) : l === s ? (a - r) / f + 2 : (r - s) / f + 4, n *= 60), m[0] = ~~(n + .5), m[1] = ~~(100 * o + .5), m[2] = ~~(100 * h + .5)), i && m.length < 4 && (m[3] = 1), m
            },
            ue = function(t) {
                var e = [],
                    i = [],
                    r = -1;
                return t.split(ye).forEach((function(t) {
                    var s = t.match(Y) || [];
                    e.push.apply(e, s), i.push(r += s.length + 1)
                })), e.c = i, e
            },
            ge = function(t, e, i) {
                var r, s, a, n, o = "",
                    h = (t + o).match(ye),
                    l = e ? "hsla(" : "rgba(",
                    p = 0;
                if (!h) return t;
                if (h = h.map((function(t) {
                        return (t = de(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                    })), i && (a = ue(t), (r = i.c).join(o) !== a.c.join(o)))
                    for (n = (s = t.replace(ye, "1").split(Y)).length - 1; p < n; p++) o += s[p] + (~r.indexOf(p) ? h.shift() || l + "0,0,0,0)" : (a.length ? a : h.length ? h : i).shift());
                if (!s)
                    for (n = (s = t.split(ye)).length - 1; p < n; p++) o += s[p] + h[p];
                return o + s[n]
            },
            ye = function() {
                var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (t in ce) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi")
            }(),
            ve = /hsl[a]?\(/,
            Te = function(t) {
                var e, i = t.join(" ");
                if (ye.lastIndex = 0, ye.test(i)) return e = ve.test(i), t[1] = ge(t[1], e), t[0] = ge(t[0], e, ue(t[1])), !0
            },
            be = (y = Date.now, v = 500, T = 33, b = y(), S = b, A = P = 1 / 240, M = function t(e) {
                var i, r, s = y() - S,
                    a = !0 === e;
                s > v && (b += s - T), S += s, g.time = (S - b) / 1e3, ((i = g.time - A) > 0 || a) && (g.frame++, A += i + (i >= P ? .004 : P - i), r = 1), a || (m = d(t)), r && _.forEach((function(t) {
                    return t(g.time, s, g.frame, e)
                }))
            }, g = {
                time: 0,
                frame: 0,
                tick: function() {
                    M(!0)
                },
                wake: function() {
                    l && (!o && W() && (n = o = window, h = n.document || {}, tt.gsap = oi, (n.gsapVersions || (n.gsapVersions = [])).push(oi.version), it(et || n.GreenSockGlobals || !n.gsap && n || {}), u = n.requestAnimationFrame), m && g.sleep(), d = u || function(t) {
                        return setTimeout(t, 1e3 * (A - g.time) + 1 | 0)
                    }, c = 1, M(2))
                },
                sleep: function() {
                    (u ? n.cancelAnimationFrame : clearTimeout)(m), c = 0, d = nt
                },
                lagSmoothing: function(t, e) {
                    v = t || 1e8, T = Math.min(e, v, 0)
                },
                fps: function(t) {
                    P = 1 / (t || 240), A = g.time + P
                },
                add: function(t) {
                    _.indexOf(t) < 0 && _.push(t), Se()
                },
                remove: function(t) {
                    var e;
                    ~(e = _.indexOf(t)) && _.splice(e, 1)
                },
                _listeners: _ = []
            }),
            Se = function() {
                return !c && be.wake()
            },
            Pe = {},
            Ae = /^[\d.\-M][\d.\-,\s]/,
            _e = /["']/g,
            Me = function(t) {
                for (var e, i, r, s = {}, a = t.substr(1, t.length - 3).split(":"), n = a[0], o = 1, h = a.length; o < h; o++) i = a[o], e = o !== h - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), s[n] = isNaN(r) ? r.replace(_e, "").trim() : +r, n = i.substr(e + 1).trim();
                return s
            },
            Ee = function(t) {
                return function(e) {
                    return 1 - t(1 - e)
                }
            },
            Ce = function(t, e) {
                return t && (L(t) ? t : Pe[t] || function(t) {
                    var e = (t + "").split("("),
                        i = Pe[e[0]];
                    return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Me(e[1])] : Z.exec(t)[1].split(",").map(_t)) : Pe._CE && Ae.test(t) ? Pe._CE("", t) : i
                }(t)) || e
            },
            xe = function(t, e, i, r) {
                void 0 === i && (i = function(t) {
                    return 1 - e(1 - t)
                }), void 0 === r && (r = function(t) {
                    return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                });
                var s, a = {
                    easeIn: e,
                    easeOut: i,
                    easeInOut: r
                };
                return vt(t, (function(t) {
                    for (var e in Pe[t] = tt[t] = a, Pe[s = t.toLowerCase()] = i, a) Pe[s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Pe[t + "." + e] = a[e]
                })), a
            },
            De = function(t) {
                return function(e) {
                    return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                }
            },
            we = function t(e, i, r) {
                var s = i >= 1 ? i : 1,
                    a = (r || (e ? .3 : .45)) / (i < 1 ? i : 1),
                    n = a / k * (Math.asin(1 / s) || 0),
                    o = function(t) {
                        return 1 === t ? 1 : s * Math.pow(2, -10 * t) * H((t - n) * a) + 1
                    },
                    h = "out" === e ? o : "in" === e ? function(t) {
                        return 1 - o(1 - t)
                    } : De(o);
                return a = k / a, h.config = function(i, r) {
                    return t(e, i, r)
                }, h
            },
            Ge = function t(e, i) {
                void 0 === i && (i = 1.70158);
                var r = function(t) {
                        return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                    },
                    s = "out" === e ? r : "in" === e ? function(t) {
                        return 1 - r(1 - t)
                    } : De(r);
                return s.config = function(i) {
                    return t(e, i)
                }, s
            };
        vt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
            var i = e < 5 ? e + 1 : e;
            xe(t + ",Power" + (i - 1), e ? function(t) {
                return Math.pow(t, i)
            } : function(t) {
                return t
            }, (function(t) {
                return 1 - Math.pow(1 - t, i)
            }), (function(t) {
                return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
            }))
        })), Pe.Linear.easeNone = Pe.none = Pe.Linear.easeIn, xe("Elastic", we("in"), we("out"), we()), E = 7.5625, x = 1 / (C = 2.75), xe("Bounce", (function(t) {
            return 1 - D(1 - t)
        }), D = function(t) {
            return t < x ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / C, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / C) * t + .9375 : E * Math.pow(t - 2.625 / C, 2) + .984375
        }), xe("Expo", (function(t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        })), xe("Circ", (function(t) {
            return -(F(1 - t * t) - 1)
        })), xe("Sine", (function(t) {
            return 1 - V(t * I)
        })), xe("Back", Ge("in"), Ge("out"), Ge()), Pe.SteppedEase = Pe.steps = tt.SteppedEase = {
            config: function(t, e) {
                void 0 === t && (t = 1);
                var i = 1 / t,
                    r = t + (e ? 0 : 1),
                    s = e ? 1 : 0;
                return function(t) {
                    return ((r * qt(0, 1 - 1e-8, t) | 0) + s) * i
                }
            }
        }, G.ease = Pe["quad.out"], vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
            return dt += t + "," + t + "Params,"
        }));
        var ke = function(t, e) {
                this.id = B++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : yt, this.set = e ? e.getSetter : qe
            },
            Ie = function() {
                function t(t, e) {
                    var i = t.parent || a;
                    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Xt(this, +t.duration, 1), this.data = t.data, c || be.wake(), i && Nt(i, this, e || 0 === e ? e : i._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
                }
                var e = t.prototype;
                return e.delay = function(t) {
                    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                }, e.duration = function(t) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                }, e.totalDuration = function(t) {
                    return arguments.length ? (this._dirty = 0, Xt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }, e.totalTime = function(t, e) {
                    if (Se(), !arguments.length) return this._tTime;
                    var i = this.parent || this._dp;
                    if (i && i.smoothChildTiming && this._ts) {
                        for (this._start = Tt(i._time - (this._ts > 0 ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), Lt(this), i._dirty || Bt(i); i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                        !this.parent && this._dp.autoRemoveChildren && Nt(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime)) && (this._ts || (this._pTime = t), At(this, t, e)), this
                }, e.time = function(t, e) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Vt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
                }, e.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                }, e.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Vt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                }, e.iteration = function(t, e) {
                    var i = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Ht(this._tTime, i) + 1 : 1
                }, e.timeScale = function(t) {
                    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === t) return this;
                    var e = this.parent && this._ts ? Rt(this.parent._time, this) : this._tTime;
                    return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, Ft(this.totalTime(qt(0, this._tDur, e), !0))
                }, e.paused = function(t) {
                    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Se(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
                }, e.startTime = function(t) {
                    if (arguments.length) {
                        this._start = t;
                        var e = this.parent || this._dp;
                        return e && (e._sort || !this.parent) && Nt(e, this, t - this._delay), this
                    }
                    return this._start
                }, e.endTime = function(t) {
                    return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
                }, e.rawTime = function(t) {
                    var e = this.parent || this._dp;
                    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Rt(e.rawTime(t), this) : this._tTime : this._tTime
                }, e.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, Wt(this)) : this._repeat
                }, e.repeatDelay = function(t) {
                    return arguments.length ? (this._rDelay = t, Wt(this)) : this._rDelay
                }, e.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, e.seek = function(t, e) {
                    return this.totalTime(Ut(this, t), X(e))
                }, e.restart = function(t, e) {
                    return this.play().totalTime(t ? -this._delay : 0, X(e))
                }, e.play = function(t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, e.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, e.pause = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, e.resume = function() {
                    return this.paused(!1)
                }, e.reversed = function(t) {
                    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                }, e.invalidate = function() {
                    return this._initted = 0, this._zTime = -1e-8, this
                }, e.isActive = function(t) {
                    var e, i = this.parent || this._dp,
                        r = this._start;
                    return !(i && !(this._ts && (this._initted || !t) && i.isActive(t) && (e = i.rawTime(!0)) >= r && e < this.endTime(!0) - 1e-8))
                }, e.eventCallback = function(t, e, i) {
                    var r = this.vars;
                    return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
                }, e.then = function(t) {
                    var e = this;
                    return new Promise((function(i) {
                        var r = L(t) ? t : Mt,
                            s = function() {
                                var t = e.then;
                                e.then = null, L(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
                            };
                        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
                    }))
                }, e.kill = function() {
                    pe(this)
                }, t
            }();
        Et(Ie.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var Be = function(t) {
            function e(e, i) {
                var s;
                return void 0 === e && (e = {}), (s = t.call(this, e, i) || this).labels = {}, s.smoothChildTiming = !!e.smoothChildTiming, s.autoRemoveChildren = !!e.autoRemoveChildren, s._sort = X(e.sortChildren), s.parent && Ot(s.parent, r(s)), s
            }
            s(e, t);
            var i = e.prototype;
            return i.to = function(t, e, i) {
                return new Xe(t, St(arguments, 0, this), Ut(this, O(e) ? arguments[3] : i)), this
            }, i.from = function(t, e, i) {
                return new Xe(t, St(arguments, 1, this), Ut(this, O(e) ? arguments[3] : i)), this
            }, i.fromTo = function(t, e, i, r) {
                return new Xe(t, St(arguments, 2, this), Ut(this, O(e) ? arguments[4] : r)), this
            }, i.set = function(t, e, i) {
                return e.duration = 0, e.parent = this, Gt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Xe(t, e, Ut(this, i), 1), this
            }, i.call = function(t, e, i) {
                return Nt(this, Xe.delayedCall(0, t, e), Ut(this, i))
            }, i.staggerTo = function(t, e, i, r, s, a, n) {
                return i.duration = e, i.stagger = i.stagger || r, i.onComplete = a, i.onCompleteParams = n, i.parent = this, new Xe(t, i, Ut(this, s)), this
            }, i.staggerFrom = function(t, e, i, r, s, a, n) {
                return i.runBackwards = 1, Gt(i).immediateRender = X(i.immediateRender), this.staggerTo(t, e, i, r, s, a, n)
            }, i.staggerFromTo = function(t, e, i, r, s, a, n, o) {
                return r.startAt = i, Gt(r).immediateRender = X(r.immediateRender), this.staggerTo(t, e, r, s, a, n, o)
            }, i.render = function(t, e, i) {
                var r, s, n, o, h, l, p, f, c, m, d, u, g = this._time,
                    y = this._dirty ? this.totalDuration() : this._tDur,
                    v = this._dur,
                    T = this !== a && t > y - 1e-8 && t >= 0 ? y : t < 1e-8 ? 0 : t,
                    b = this._zTime < 0 != t < 0 && (this._initted || !v);
                if (T !== this._tTime || i || b) {
                    if (g !== this._time && v && (T += this._time - g, t += this._time - g), r = T, c = this._start, l = !(f = this._ts), b && (v || (g = this._zTime), !t && e || (this._zTime = t)), this._repeat && (d = this._yoyo, h = v + this._rDelay, ((r = Tt(T % h)) > v || y === T) && (r = v), (o = ~~(T / h)) && o === T / h && (r = v, o--), d && 1 & o && (r = v - r, u = 1), o !== (m = Ht(this._tTime, h)) && !this._lock)) {
                        var S = d && 1 & m,
                            P = S === (d && 1 & o);
                        if (o < m && (S = !S), g = S ? 0 : v, this._lock = 1, this.render(g, e, !v)._lock = 0, !e && this.parent && le(this, "onRepeat"), this.vars.repeatRefresh && !u && (this.invalidate()._lock = 1), g !== this._time || l !== !this._ts) return this;
                        if (P && (this._lock = 2, g = S ? v + 1e-4 : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !u && this.invalidate()), this._lock = 0, !this._ts && !l) return this
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (p = function(t, e, i) {
                            var r;
                            if (i > e)
                                for (r = t._first; r && r._start <= i;) {
                                    if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                    r = r._next
                                } else
                                    for (r = t._last; r && r._start >= i;) {
                                        if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                        r = r._prev
                                    }
                        }(this, Tt(g), Tt(r))) && (T -= r - (r = p._start)), this._tTime = T, this._time = r, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), g || !r || e || le(this, "onStart"), r >= g && t >= 0)
                        for (s = this._first; s;) {
                            if (n = s._next, (s._act || r >= s._start) && s._ts && p !== s) {
                                if (s.parent !== this) return this.render(t, e, i);
                                if (s.render(s._ts > 0 ? (r - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (r - s._start) * s._ts, e, i), r !== this._time || !this._ts && !l) {
                                    p = 0, n && (T += this._zTime = -1e-8);
                                    break
                                }
                            }
                            s = n
                        } else {
                            s = this._last;
                            for (var A = t < 0 ? t : r; s;) {
                                if (n = s._prev, (s._act || A <= s._end) && s._ts && p !== s) {
                                    if (s.parent !== this) return this.render(t, e, i);
                                    if (s.render(s._ts > 0 ? (A - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (A - s._start) * s._ts, e, i), r !== this._time || !this._ts && !l) {
                                        p = 0, n && (T += this._zTime = A ? -1e-8 : 1e-8);
                                        break
                                    }
                                }
                                s = n
                            }
                        }
                    if (p && !e && (this.pause(), p.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = c, Lt(this), this.render(t, e, i);
                    this._onUpdate && !e && le(this, "onUpdate", !0), (T === y && y >= this.totalDuration() || !T && this._ts < 0) && (c !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !v) && (t && this._ts > 0 || !T && this._ts < 0) && It(this, 1), e || t < 0 && !g || (le(this, T === y ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())))
                }
                return this
            }, i.add = function(t, e) {
                var i = this;
                if (O(e) || (e = Ut(this, e)), !(t instanceof Ie)) {
                    if (U(t)) return t.forEach((function(t) {
                        return i.add(t, e)
                    })), Bt(this);
                    if (R(t)) return this.addLabel(t, e);
                    if (!L(t)) return this;
                    t = Xe.delayedCall(0, t)
                }
                return this !== t ? Nt(this, t, e) : this
            }, i.getChildren = function(t, e, i, r) {
                void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -1e8);
                for (var s = [], a = this._first; a;) a._start >= r && (a instanceof Xe ? e && s.push(a) : (i && s.push(a), t && s.push.apply(s, a.getChildren(!0, e, i)))), a = a._next;
                return s
            }, i.getById = function(t) {
                for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                    if (e[i].vars.id === t) return e[i]
            }, i.remove = function(t) {
                return R(t) ? this.removeLabel(t) : L(t) ? this.killTweensOf(t) : (kt(this, t), t === this._recent && (this._recent = this._last), Bt(this))
            }, i.totalTime = function(e, i) {
                return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = Tt(be.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
            }, i.addLabel = function(t, e) {
                return this.labels[t] = Ut(this, e), this
            }, i.removeLabel = function(t) {
                return delete this.labels[t], this
            }, i.addPause = function(t, e, i) {
                var r = Xe.delayedCall(0, e || nt, i);
                return r.data = "isPause", this._hasPause = 1, Nt(this, r, Ut(this, t))
            }, i.removePause = function(t) {
                var e = this._first;
                for (t = Ut(this, t); e;) e._start === t && "isPause" === e.data && It(e), e = e._next
            }, i.killTweensOf = function(t, e, i) {
                for (var r = this.getTweensOf(t, i), s = r.length; s--;) Fe !== r[s] && r[s].kill(t, e);
                return this
            }, i.getTweensOf = function(t, e) {
                for (var i, r = [], s = $t(t), a = this._first; a;) a instanceof Xe ? !bt(a._targets, s) || e && !a.isActive("started" === e) || r.push(a) : (i = a.getTweensOf(s, e)).length && r.push.apply(r, i), a = a._next;
                return r
            }, i.tweenTo = function(t, e) {
                e = e || {};
                var i = this,
                    r = Ut(i, t),
                    s = e,
                    a = s.startAt,
                    n = s.onStart,
                    o = s.onStartParams,
                    h = Xe.to(i, Et(e, {
                        ease: "none",
                        lazy: !1,
                        time: r,
                        duration: e.duration || Math.abs((r - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || 1e-8,
                        onStart: function() {
                            i.pause();
                            var t = e.duration || Math.abs((r - i._time) / i.timeScale());
                            h._dur !== t && Xt(h, t).render(h._time, !0, !0), n && n.apply(h, o || [])
                        }
                    }));
                return h
            }, i.tweenFromTo = function(t, e, i) {
                return this.tweenTo(e, Et({
                    startAt: {
                        time: Ut(this, t)
                    }
                }, i))
            }, i.recent = function() {
                return this._recent
            }, i.nextLabel = function(t) {
                return void 0 === t && (t = this._time), he(this, Ut(this, t))
            }, i.previousLabel = function(t) {
                return void 0 === t && (t = this._time), he(this, Ut(this, t), 1)
            }, i.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
            }, i.shiftChildren = function(t, e, i) {
                void 0 === i && (i = 0);
                for (var r, s = this._first, a = this.labels; s;) s._start >= i && (s._start += t), s = s._next;
                if (e)
                    for (r in a) a[r] >= i && (a[r] += t);
                return Bt(this)
            }, i.invalidate = function() {
                var e = this._first;
                for (this._lock = 0; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, i.clear = function(t) {
                void 0 === t && (t = !0);
                for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
                return this._time = this._tTime = 0, t && (this.labels = {}), Bt(this)
            }, i.totalDuration = function(t) {
                var e, i, r, s, n = 0,
                    o = this,
                    h = o._last,
                    l = 1e8;
                if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                if (o._dirty) {
                    for (s = o.parent; h;) e = h._prev, h._dirty && h.totalDuration(), (r = h._start) > l && o._sort && h._ts && !o._lock ? (o._lock = 1, Nt(o, h, r - h._delay, 1)._lock = 0) : l = r, r < 0 && h._ts && (n -= r, (!s && !o._dp || s && s.smoothChildTiming) && (o._start += r / o._ts, o._time -= r, o._tTime -= r), o.shiftChildren(-r, !1, -1e20), l = 0), (i = Lt(h)) > n && h._ts && (n = i), h = e;
                    Xt(o, o === a && o._time > n ? o._time : Math.min(1e8, n), 1), o._dirty = 0
                }
                return o._tDur
            }, e.updateRoot = function(t) {
                if (a._ts && (At(a, Rt(t, a)), p = be.frame), be.frame >= ct) {
                    ct += w.autoSleep || 120;
                    var e = a._first;
                    if ((!e || !e._ts) && w.autoSleep && be._listeners.length < 2) {
                        for (; e && !e._ts;) e = e._next;
                        e || be.sleep()
                    }
                }
            }, e
        }(Ie);
        Et(Be.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Fe, Ve = function(t, e, i, r, s, a, n) {
                var o, h, l, p, f, c, m, d, u = new ri(this._pt, t, e, 0, 1, Ze, null, s),
                    g = 0,
                    y = 0;
                for (u.b = i, u.e = r, i += "", (m = ~(r += "").indexOf("random(")) && (r = ne(r)), a && (a(d = [i, r], t, e), i = d[0], r = d[1]), h = i.match(Q) || []; o = Q.exec(r);) p = o[0], f = r.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), p !== h[y++] && (c = parseFloat(h[y - 1]) || 0, u._pt = {
                    _next: u._pt,
                    p: f || 1 === y ? f : ",",
                    s: c,
                    c: "=" === p.charAt(1) ? parseFloat(p.substr(2)) * ("-" === p.charAt(0) ? -1 : 1) : parseFloat(p) - c,
                    m: l && l < 4 ? Math.round : 0
                }, g = Q.lastIndex);
                return u.c = g < r.length ? r.substring(g, r.length) : "", u.fp = n, (J.test(r) || m) && (u.e = 0), this._pt = u, u
            },
            He = function(t, e, i, r, s, a, n, o, h) {
                L(r) && (r = r(s || 0, t, a));
                var l, p = t[e],
                    f = "get" !== i ? i : L(p) ? h ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : p,
                    c = L(p) ? h ? Ue : Ke : We;
                if (R(r) && (~r.indexOf("random(") && (r = ne(r)), "=" === r.charAt(1) && (r = parseFloat(f) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (Yt(f) || 0))), f !== r) return isNaN(f + r) ? (!p && !(e in t) && rt(e, r), Ve.call(this, t, e, f, r, c, o || w.stringFilter, h)) : (l = new ri(this._pt, t, e, +f || 0, r - (f || 0), "boolean" == typeof p ? Qe : Ye, 0, c), h && (l.fp = h), n && l.modifier(n, this, t), this._pt = l)
            },
            Re = function(t, e, i, r, s, a) {
                var n, o, h, l;
                if (pt[t] && !1 !== (n = new pt[t]).init(s, n.rawVars ? e[t] : function(t, e, i, r, s) {
                        if (L(t) && (t = Oe(t, s, e, i, r)), !z(t) || t.style && t.nodeType || U(t)) return R(t) ? Oe(t, s, e, i, r) : t;
                        var a, n = {};
                        for (a in t) n[a] = Oe(t[a], s, e, i, r);
                        return n
                    }(e[t], r, s, a, i), i, r, a) && (i._pt = o = new ri(i._pt, s, t, 0, 1, n.render, n, 0, n.priority), i !== f))
                    for (h = i._ptLookup[i._targets.indexOf(s)], l = n._props.length; l--;) h[n._props[l]] = o;
                return n
            },
            Le = function t(e, i) {
                var r, s, n, o, h, l, p, f, c, m, d, u, g = e.vars,
                    y = g.ease,
                    v = g.startAt,
                    T = g.immediateRender,
                    b = g.lazy,
                    S = g.onUpdate,
                    P = g.onUpdateParams,
                    A = g.callbackScope,
                    _ = g.runBackwards,
                    M = g.yoyoEase,
                    E = g.keyframes,
                    C = g.autoRevert,
                    x = e._dur,
                    D = e._startAt,
                    w = e._targets,
                    k = e.parent,
                    I = k && "nested" === k.data ? k.parent._targets : w,
                    B = "auto" === e._overwrite,
                    F = e.timeline;
                if (!F || E && y || (y = "none"), e._ease = Ce(y, G.ease), e._yEase = M ? Ee(Ce(!0 === M ? y : M, G.ease)) : 0, M && e._yoyo && !e._repeat && (M = e._yEase, e._yEase = e._ease, e._ease = M), !F) {
                    if (D && D.render(-1, !0).kill(), v) {
                        if (It(e._startAt = Xe.set(w, Et({
                                data: "isStart",
                                overwrite: !1,
                                parent: k,
                                immediateRender: !0,
                                lazy: X(b),
                                startAt: null,
                                delay: 0,
                                onUpdate: S,
                                onUpdateParams: P,
                                callbackScope: A,
                                stagger: 0
                            }, v))), T)
                            if (i > 0) !C && (e._startAt = 0);
                            else if (x) return
                    } else if (_ && x)
                        if (D) !C && (e._startAt = 0);
                        else if (i && (T = !1), It(e._startAt = Xe.set(w, xt(wt(g, ot), {
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: T && X(b),
                            immediateRender: T,
                            stagger: 0,
                            parent: k
                        }))), T) {
                        if (!i) return
                    } else t(e._startAt, 1e-8);
                    for (r = wt(g, ot), e._pt = 0, u = (f = w[0] ? gt(w[0]).harness : 0) && g[f.prop], b = x && X(b) || b && !x, s = 0; s < w.length; s++) {
                        if (p = (h = w[s])._gsap || ut(w)[s]._gsap, e._ptLookup[s] = m = {}, lt[p.id] && Pt(), d = I === w ? s : I.indexOf(h), f && !1 !== (c = new f).init(h, u || r, e, d, I) && (e._pt = o = new ri(e._pt, h, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach((function(t) {
                                m[t] = o
                            })), c.priority && (l = 1)), !f || u)
                            for (n in r) pt[n] && (c = Re(n, r, e, d, h, I)) ? c.priority && (l = 1) : m[n] = o = He.call(e, h, n, "get", r[n], d, I, 0, g.stringFilter);
                        e._op && e._op[s] && e.kill(h, e._op[s]), B && e._pt && (Fe = e, a.killTweensOf(h, m, "started"), Fe = 0), e._pt && b && (lt[p.id] = 1)
                    }
                    l && ii(e), e._onInit && e._onInit(e)
                }
                e._from = !F && !!g.runBackwards, e._onUpdate = S, e._initted = 1
            },
            Oe = function(t, e, i, r, s) {
                return L(t) ? t.call(e, i, r, s) : R(t) && ~t.indexOf("random(") ? ne(t) : t
            },
            Ne = dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
            ze = (Ne + ",id,stagger,delay,duration,paused").split(","),
            Xe = function(t) {
                function e(e, i, s, n) {
                    var o;
                    "number" == typeof i && (s.duration = i, i = s, s = null);
                    var h, l, p, f, c, m, d, u, g = (o = t.call(this, n ? i : Gt(i), s) || this).vars,
                        y = g.duration,
                        v = g.delay,
                        T = g.immediateRender,
                        b = g.stagger,
                        S = g.overwrite,
                        P = g.keyframes,
                        A = g.defaults,
                        _ = o.parent,
                        M = (U(e) ? O(e[0]) : "length" in i) ? [e] : $t(e);
                    if (o._targets = M.length ? ut(M) : st("GSAP target " + e + " not found. https://greensock.com", !w.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = S, P || b || K(y) || K(v)) {
                        if (i = o.vars, (h = o.timeline = new Be({
                                data: "nested",
                                defaults: A || {}
                            })).kill(), h.parent = r(o), P) Et(h.vars.defaults, {
                            ease: "none"
                        }), P.forEach((function(t) {
                            return h.to(M, t, ">")
                        }));
                        else {
                            if (f = M.length, d = b ? ee(b) : nt, z(b))
                                for (c in b) ~Ne.indexOf(c) && (u || (u = {}), u[c] = b[c]);
                            for (l = 0; l < f; l++) {
                                for (c in p = {}, i) ze.indexOf(c) < 0 && (p[c] = i[c]);
                                p.stagger = 0, u && xt(p, u), i.yoyoEase && !i.repeat && (p.yoyoEase = i.yoyoEase), m = M[l], p.duration = +Oe(y, r(o), l, m, M), p.delay = (+Oe(v, r(o), l, m, M) || 0) - o._delay, !b && 1 === f && p.delay && (o._delay = v = p.delay, o._start += v, p.delay = 0), h.to(m, p, d(l, m, M))
                            }
                            y = v = 0
                        }
                        y || o.duration(y = h.duration())
                    } else o.timeline = 0;
                    return !0 === S && (Fe = r(o), a.killTweensOf(M), Fe = 0), _ && Ot(_, r(o)), (T || !y && !P && o._start === _._time && X(T) && function t(e) {
                        return !e || e._ts && t(e.parent)
                    }(r(o)) && "nested" !== _.data) && (o._tTime = -1e-8, o.render(Math.max(0, -v))), o
                }
                s(e, t);
                var i = e.prototype;
                return i.render = function(t, e, i) {
                    var r, s, a, n, o, h, l, p, f, c = this._time,
                        m = this._tDur,
                        d = this._dur,
                        u = t > m - 1e-8 && t >= 0 ? m : t < 1e-8 ? 0 : t;
                    if (d) {
                        if (u !== this._tTime || !t || i || this._startAt && this._zTime < 0 != t < 0) {
                            if (r = u, p = this.timeline, this._repeat) {
                                if (n = d + this._rDelay, ((r = Tt(u % n)) > d || m === u) && (r = d), (a = ~~(u / n)) && a === u / n && (r = d, a--), (h = this._yoyo && 1 & a) && (f = this._yEase, r = d - r), o = Ht(this._tTime, n), r === c && !i && this._initted) return this;
                                a !== o && (!this.vars.repeatRefresh || h || this._lock || (this._lock = i = 1, this.render(n * a, !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (zt(this, r, i, e)) return this._tTime = 0, this;
                                if (d !== this._dur) return this.render(t, e, i)
                            }
                            for (this._tTime = u, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(r / d), this._from && (this.ratio = l = 1 - l), c || !r || e || le(this, "onStart"), s = this._pt; s;) s.r(l, s.d), s = s._next;
                            p && p.render(t < 0 ? t : !r && h ? -1e-8 : p._dur * l, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), le(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && le(this, "onRepeat"), u !== this._tDur && u || this._tTime !== u || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, i), (t || !d) && (t && this._ts > 0 || !u && this._ts < 0) && It(this, 1), e || t < 0 && !c || u < m && this.timeScale() > 0 || (le(this, u === m ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()))
                        }
                    } else ! function(t, e, i, r) {
                        var s, a = t._zTime < 0 ? 0 : 1,
                            n = e < 0 ? 0 : 1,
                            o = t._rDelay,
                            h = 0;
                        if (o && t._repeat && (h = qt(0, t._tDur, e), Ht(h, o) !== Ht(t._tTime, o) && (a = 1 - n, t.vars.repeatRefresh && t._initted && t.invalidate())), (t._initted || !zt(t, e, r, i)) && (n !== a || r || 1e-8 === t._zTime || !e && t._zTime)) {
                            for (t._zTime = e || (i ? 1e-8 : 0), t.ratio = n, t._from && (n = 1 - n), t._time = 0, t._tTime = h, i || le(t, "onStart"), s = t._pt; s;) s.r(n, s.d), s = s._next;
                            !n && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, r), t._onUpdate && (i || le(t, "onUpdate")), h && t._repeat && !i && t.parent && le(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === n && (t.ratio && It(t, 1), i || (le(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        }
                    }(this, t, e, i);
                    return this
                }, i.targets = function() {
                    return this._targets
                }, i.invalidate = function() {
                    return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
                }, i.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return pe(this);
                    if (this.timeline) return this.timeline.killTweensOf(t, e, Fe && !0 !== Fe.vars.overwrite), this;
                    var i, r, s, a, n, o, h, l = this._targets,
                        p = t ? $t(t) : l,
                        f = this._ptLookup,
                        c = this._pt;
                    if ((!e || "all" === e) && function(t, e) {
                            for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
                            return i < 0
                        }(l, p)) return pe(this);
                    for (i = this._op = this._op || [], "all" !== e && (R(e) && (n = {}, vt(e, (function(t) {
                            return n[t] = 1
                        })), e = n), e = function(t, e) {
                            var i, r, s, a, n = t[0] ? gt(t[0]).harness : 0,
                                o = n && n.aliases;
                            if (!o) return e;
                            for (r in i = xt({}, e), o)
                                if (r in i)
                                    for (s = (a = o[r].split(",")).length; s--;) i[a[s]] = i[r];
                            return i
                        }(l, e)), h = l.length; h--;)
                        if (~p.indexOf(l[h]))
                            for (n in r = f[h], "all" === e ? (i[h] = e, a = r, s = {}) : (s = i[h] = i[h] || {}, a = e), a)(o = r && r[n]) && ("kill" in o.d && !0 !== o.d.kill(n) || kt(this, o, "_pt"), delete r[n]), "all" !== s && (s[n] = 1);
                    return this._initted && !this._pt && c && pe(this), this
                }, e.to = function(t, i) {
                    return new e(t, i, arguments[2])
                }, e.from = function(t, i) {
                    return new e(t, St(arguments, 1))
                }, e.delayedCall = function(t, i, r, s) {
                    return new e(i, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: i,
                        onReverseComplete: i,
                        onCompleteParams: r,
                        onReverseCompleteParams: r,
                        callbackScope: s
                    })
                }, e.fromTo = function(t, i, r) {
                    return new e(t, St(arguments, 2))
                }, e.set = function(t, i) {
                    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
                }, e.killTweensOf = function(t, e, i) {
                    return a.killTweensOf(t, e, i)
                }, e
            }(Ie);
        Et(Xe.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), vt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
            Xe[t] = function() {
                var e = new Be,
                    i = Qt.call(arguments, 0);
                return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
            }
        }));
        var We = function(t, e, i) {
                return t[e] = i
            },
            Ke = function(t, e, i) {
                return t[e](i)
            },
            Ue = function(t, e, i, r) {
                return t[e](r.fp, i)
            },
            je = function(t, e, i) {
                return t.setAttribute(e, i)
            },
            qe = function(t, e) {
                return L(t[e]) ? Ke : N(t[e]) && t.setAttribute ? je : We
            },
            Ye = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
            },
            Qe = function(t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e)
            },
            Ze = function(t, e) {
                var i = e._pt,
                    r = "";
                if (!t && e.b) r = e.b;
                else if (1 === t && e.e) r = e.e;
                else {
                    for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r, i = i._next;
                    r += e.c
                }
                e.set(e.t, e.p, r, e)
            },
            Je = function(t, e) {
                for (var i = e._pt; i;) i.r(t, i.d), i = i._next
            },
            $e = function(t, e, i, r) {
                for (var s, a = this._pt; a;) s = a._next, a.p === r && a.modifier(t, e, i), a = s
            },
            ti = function(t) {
                for (var e, i, r = this._pt; r;) i = r._next, r.p === t && !r.op || r.op === t ? kt(this, r, "_pt") : r.dep || (e = 1), r = i;
                return !e
            },
            ei = function(t, e, i, r) {
                r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
            },
            ii = function(t) {
                for (var e, i, r, s, a = t._pt; a;) {
                    for (e = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                    (a._prev = i ? i._prev : s) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : s = a, a = e
                }
                t._pt = r
            },
            ri = function() {
                function t(t, e, i, r, s, a, n, o, h) {
                    this.t = e, this.s = r, this.c = s, this.p = i, this.r = a || Ye, this.d = n || this, this.set = o || We, this.pr = h || 0, this._next = t, t && (t._prev = this)
                }
                return t.prototype.modifier = function(t, e, i) {
                    this.mSet = this.mSet || this.set, this.set = ei, this.m = t, this.mt = i, this.tween = e
                }, t
            }();
        vt(dt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", (function(t) {
            return ot[t] = 1
        })), tt.TweenMax = tt.TweenLite = Xe, tt.TimelineLite = tt.TimelineMax = Be, a = new Be({
            sortChildren: !1,
            defaults: G,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), w.stringFilter = Te;
        var si = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                e.forEach((function(t) {
                    return fe(t)
                }))
            },
            timeline: function(t) {
                return new Be(t)
            },
            getTweensOf: function(t, e) {
                return a.getTweensOf(t, e)
            },
            getProperty: function(t, e, i, r) {
                R(t) && (t = $t(t)[0]);
                var s = gt(t || {}).get,
                    a = i ? Mt : _t;
                return "native" === i && (i = ""), t ? e ? a((pt[e] && pt[e].get || s)(t, e, i, r)) : function(e, i, r) {
                    return a((pt[e] && pt[e].get || s)(t, e, i, r))
                } : t
            },
            quickSetter: function(t, e, i) {
                if ((t = $t(t)).length > 1) {
                    var r = t.map((function(t) {
                            return oi.quickSetter(t, e, i)
                        })),
                        s = r.length;
                    return function(t) {
                        for (var e = s; e--;) r[e](t)
                    }
                }
                t = t[0] || {};
                var a = pt[e],
                    n = gt(t),
                    o = a ? function(e) {
                        var r = new a;
                        f._pt = 0, r.init(t, i ? e + i : e, f, 0, [t]), r.render(1, r), f._pt && Je(1, f)
                    } : n.set(t, e);
                return a ? o : function(r) {
                    return o(t, e, i ? r + i : r, n, 1)
                }
            },
            isTweening: function(t) {
                return a.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Ce(t.ease, G.ease)), Dt(G, t || {})
            },
            config: function(t) {
                return Dt(w, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    i = t.effect,
                    r = t.plugins,
                    s = t.defaults,
                    a = t.extendTimeline;
                (r || "").split(",").forEach((function(t) {
                    return t && !pt[t] && !tt[t] && st(e + " effect requires " + t + " plugin.")
                })), ft[e] = function(t, e, r) {
                    return i($t(t), Et(e || {}, s), r)
                }, a && (Be.prototype[e] = function(t, i, r) {
                    return this.add(ft[e](t, z(i) ? i : (r = i) && {}, this), r)
                })
            },
            registerEase: function(t, e) {
                Pe[t] = Ce(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Ce(t, e) : Pe
            },
            getById: function(t) {
                return a.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var i, r, s = new Be(t);
                for (s.smoothChildTiming = X(t.smoothChildTiming), a.remove(s), s._dp = 0, s._time = s._tTime = a._time, i = a._first; i;) r = i._next, !e && !i._dur && i instanceof Xe && i.vars.onComplete === i._targets[0] || Nt(s, i, i._start - i._delay), i = r;
                return Nt(a, s, 0), s
            },
            utils: {
                wrap: function t(e, i, r) {
                    var s = i - e;
                    return U(e) ? ae(e, t(0, e.length), i) : jt(r, (function(t) {
                        return (s + (t - e) % s) % s + e
                    }))
                },
                wrapYoyo: function t(e, i, r) {
                    var s = i - e,
                        a = 2 * s;
                    return U(e) ? ae(e, t(0, e.length - 1), i) : jt(r, (function(t) {
                        return e + ((t = (a + (t - e) % a) % a) > s ? a - t : t)
                    }))
                },
                distribute: ee,
                random: se,
                snap: re,
                normalize: function(t, e, i) {
                    return oe(t, e, 0, 1, i)
                },
                getUnit: Yt,
                clamp: function(t, e, i) {
                    return jt(i, (function(i) {
                        return qt(t, e, i)
                    }))
                },
                splitColor: de,
                toArray: $t,
                mapRange: oe,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return function(t) {
                        return e.reduce((function(t, e) {
                            return e(t)
                        }), t)
                    }
                },
                unitize: function(t, e) {
                    return function(i) {
                        return t(parseFloat(i)) + (e || Yt(i))
                    }
                },
                interpolate: function t(e, i, r, s) {
                    var a = isNaN(e + i) ? 0 : function(t) {
                        return (1 - t) * e + t * i
                    };
                    if (!a) {
                        var n, o, h, l, p, f = R(e),
                            c = {};
                        if (!0 === r && (s = 1) && (r = null), f) e = {
                            p: e
                        }, i = {
                            p: i
                        };
                        else if (U(e) && !U(i)) {
                            for (h = [], l = e.length, p = l - 2, o = 1; o < l; o++) h.push(t(e[o - 1], e[o]));
                            l--, a = function(t) {
                                t *= l;
                                var e = Math.min(p, ~~t);
                                return h[e](t - e)
                            }, r = i
                        } else s || (e = xt(U(e) ? [] : {}, e));
                        if (!h) {
                            for (n in i) He.call(c, e, n, "get", i[n]);
                            a = function(t) {
                                return Je(t, c) || (f ? e.p : e)
                            }
                        }
                    }
                    return jt(r, a)
                },
                shuffle: te
            },
            install: it,
            effects: ft,
            ticker: be,
            updateRoot: Be.updateRoot,
            plugins: pt,
            globalTimeline: a,
            core: {
                PropTween: ri,
                globals: at,
                Tween: Xe,
                Timeline: Be,
                Animation: Ie,
                getCache: gt,
                _removeLinkedListItem: kt
            }
        };
        vt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
            return si[t] = Xe[t]
        })), be.add(Be.updateRoot), f = si.to({}, {
            duration: 0
        });
        var ai = function(t, e) {
                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                return i
            },
            ni = function(t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function(t, i, r) {
                        r._onInit = function(t) {
                            var r, s;
                            if (R(i) && (r = {}, vt(i, (function(t) {
                                    return r[t] = 1
                                })), i = r), e) {
                                for (s in r = {}, i) r[s] = e(i[s]);
                                i = r
                            }! function(t, e) {
                                var i, r, s, a = t._targets;
                                for (i in e)
                                    for (r = a.length; r--;)(s = t._ptLookup[r][i]) && (s = s.d) && (s._pt && (s = ai(s, i)), s && s.modifier && s.modifier(e[i], t, a[r], i))
                            }(t, i)
                        }
                    }
                }
            },
            oi = si.registerPlugin({
                name: "attr",
                init: function(t, e, i, r, s) {
                    for (var a in e) this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], r, s, 0, 0, a), this._props.push(a)
                }
            }, {
                name: "endArray",
                init: function(t, e) {
                    for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
                }
            }, ni("roundProps", ie), ni("modifiers"), ni("snap", re)) || si;
        Xe.version = Be.version = oi.version = "3.2.6", l = 1, W() && Se();
        Pe.Power0, Pe.Power1, Pe.Power2, Pe.Power3, Pe.Power4, Pe.Linear, Pe.Quad, Pe.Cubic, Pe.Quart, Pe.Quint, Pe.Strong, Pe.Elastic, Pe.Back, Pe.SteppedEase, Pe.Bounce, Pe.Sine, Pe.Expo, Pe.Circ;
        /*!
         * CSSPlugin 3.2.6
         * https://greensock.com
         *
         * Copyright 2008-2020, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var hi, li, pi, fi, ci, mi, di, ui, gi = {},
            yi = 180 / Math.PI,
            vi = Math.PI / 180,
            Ti = Math.atan2,
            bi = /([A-Z])/g,
            Si = /(?:left|right|width|margin|padding|x)/i,
            Pi = /[\s,\(]\S/,
            Ai = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            _i = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            Mi = function(t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            Ei = function(t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
            },
            Ci = function(t, e) {
                var i = e.s + e.c * t;
                e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
            },
            xi = function(t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e)
            },
            Di = function(t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
            },
            wi = function(t, e, i) {
                return t.style[e] = i
            },
            Gi = function(t, e, i) {
                return t.style.setProperty(e, i)
            },
            ki = function(t, e, i) {
                return t._gsap[e] = i
            },
            Ii = function(t, e, i) {
                return t._gsap.scaleX = t._gsap.scaleY = i
            },
            Bi = function(t, e, i, r, s) {
                var a = t._gsap;
                a.scaleX = a.scaleY = i, a.renderTransform(s, a)
            },
            Fi = function(t, e, i, r, s) {
                var a = t._gsap;
                a[e] = i, a.renderTransform(s, a)
            },
            Vi = "transform",
            Hi = Vi + "Origin",
            Ri = function(t, e) {
                var i = li.createElementNS ? li.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : li.createElement(t);
                return i.style ? i : li.createElement(t)
            },
            Li = function t(e, i, r) {
                var s = getComputedStyle(e);
                return s[i] || s.getPropertyValue(i.replace(bi, "-$1").toLowerCase()) || s.getPropertyValue(i) || !r && t(e, Ni(i) || i, 1) || ""
            },
            Oi = "O,Moz,ms,Ms,Webkit".split(","),
            Ni = function(t, e, i) {
                var r = (e || ci).style,
                    s = 5;
                if (t in r && !i) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Oi[s] + t in r););
                return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? Oi[s] : "") + t
            },
            zi = function() {
                "undefined" != typeof window && (hi = window, li = hi.document, pi = li.documentElement, ci = Ri("div") || {
                    style: {}
                }, mi = Ri("div"), Vi = Ni(Vi), Hi = Ni(Hi), ci.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ui = !!Ni("perspective"), fi = 1)
            },
            Xi = function t(e) {
                var i, r = Ri("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    s = this.parentNode,
                    a = this.nextSibling,
                    n = this.style.cssText;
                if (pi.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                    i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
                return s && (a ? s.insertBefore(this, a) : s.appendChild(this)), pi.removeChild(r), this.style.cssText = n, i
            },
            Wi = function(t, e) {
                for (var i = e.length; i--;)
                    if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
            },
            Ki = function(t) {
                var e;
                try {
                    e = t.getBBox()
                } catch (i) {
                    e = Xi.call(t, !0)
                }
                return e && (e.width || e.height) || t.getBBox === Xi || (e = Xi.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                    x: +Wi(t, ["x", "cx", "x1"]) || 0,
                    y: +Wi(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            },
            Ui = function(t) {
                return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ki(t))
            },
            ji = function(t, e) {
                if (e) {
                    var i = t.style;
                    e in gi && (e = Vi), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(bi, "-$1").toLowerCase())) : i.removeAttribute(e)
                }
            },
            qi = function(t, e, i, r, s, a) {
                var n = new ri(t._pt, e, i, 0, 1, a ? Di : xi);
                return t._pt = n, n.b = r, n.e = s, t._props.push(i), n
            },
            Yi = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            Qi = function t(e, i, r, s) {
                var a, n, o, h, l = parseFloat(r) || 0,
                    p = (r + "").trim().substr((l + "").length) || "px",
                    f = ci.style,
                    c = Si.test(i),
                    m = "svg" === e.tagName.toLowerCase(),
                    d = (m ? "client" : "offset") + (c ? "Width" : "Height"),
                    u = "px" === s,
                    g = "%" === s;
                return s === p || !l || Yi[s] || Yi[p] ? l : ("px" !== p && !u && (l = t(e, i, r, "px")), h = e.getCTM && Ui(e), g && (gi[i] || ~i.indexOf("adius")) ? Tt(l / (h ? e.getBBox()[c ? "width" : "height"] : e[d]) * 100) : (f[c ? "width" : "height"] = 100 + (u ? p : s), n = ~i.indexOf("adius") || "em" === s && e.appendChild && !m ? e : e.parentNode, h && (n = (e.ownerSVGElement || {}).parentNode), n && n !== li && n.appendChild || (n = li.body), (o = n._gsap) && g && o.width && c && o.time === be.time ? Tt(l / o.width * 100) : ((g || "%" === p) && (f.position = Li(e, "position")), n === e && (f.position = "static"), n.appendChild(ci), a = ci[d], n.removeChild(ci), f.position = "absolute", c && g && ((o = gt(n)).time = be.time, o.width = n[d]), Tt(u ? a * l / 100 : a && l ? 100 / a * l : 0))))
            },
            Zi = function(t, e, i, r) {
                var s;
                return fi || zi(), e in Ai && "transform" !== e && ~(e = Ai[e]).indexOf(",") && (e = e.split(",")[0]), gi[e] && "transform" !== e ? (s = hr(t, r), s = "transformOrigin" !== e ? s[e] : lr(Li(t, Hi)) + " " + s.zOrigin + "px") : (!(s = t.style[e]) || "auto" === s || r || ~(s + "").indexOf("calc(")) && (s = er[e] && er[e](t, e, i) || Li(t, e) || yt(t, e) || ("opacity" === e ? 1 : 0)), i && !~(s + "").indexOf(" ") ? Qi(t, e, s, i) + i : s
            },
            Ji = function(t, e, i, r) {
                if (!i || "none" === i) {
                    var s = Ni(e, t, 1),
                        a = s && Li(t, s, 1);
                    a && a !== i && (e = s, i = a)
                }
                var n, o, h, l, p, f, c, m, d, u, g, y, v = new ri(this._pt, t.style, e, 0, 1, Ze),
                    T = 0,
                    b = 0;
                if (v.b = i, v.e = r, i += "", "auto" === (r += "") && (t.style[e] = r, r = Li(t, e) || r, t.style[e] = i), Te(n = [i, r]), r = n[1], h = (i = n[0]).match(Y) || [], (r.match(Y) || []).length) {
                    for (; o = Y.exec(r);) c = o[0], d = r.substring(T, o.index), p ? p = (p + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (p = 1), c !== (f = h[b++] || "") && (l = parseFloat(f) || 0, g = f.substr((l + "").length), (y = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0) && (c = c.substr(2)), m = parseFloat(c), u = c.substr((m + "").length), T = Y.lastIndex - u.length, u || (u = u || w.units[e] || g, T === r.length && (r += u, v.e += u)), g !== u && (l = Qi(t, e, f, u) || 0), v._pt = {
                        _next: v._pt,
                        p: d || 1 === b ? d : ",",
                        s: l,
                        c: y ? y * m : m - l,
                        m: p && p < 4 ? Math.round : 0
                    });
                    v.c = T < r.length ? r.substring(T, r.length) : ""
                } else v.r = "display" === e && "none" === r ? Di : xi;
                return J.test(r) && (v.e = 0), this._pt = v, v
            },
            $i = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            tr = function(t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var i, r, s, a = e.t,
                        n = a.style,
                        o = e.u,
                        h = a._gsap;
                    if ("all" === o || !0 === o) n.cssText = "", r = 1;
                    else
                        for (s = (o = o.split(",")).length; --s > -1;) i = o[s], gi[i] && (r = 1, i = "transformOrigin" === i ? Hi : Vi), ji(a, i);
                    r && (ji(a, Vi), h && (h.svg && a.removeAttribute("transform"), hr(a, 1), h.uncache = 1))
                }
            },
            er = {
                clearProps: function(t, e, i, r, s) {
                    if ("isFromStart" !== s.data) {
                        var a = t._pt = new ri(t._pt, e, i, 0, 0, tr);
                        return a.u = r, a.pr = -10, a.tween = s, t._props.push(i), 1
                    }
                }
            },
            ir = [1, 0, 0, 1, 0, 0],
            rr = {},
            sr = function(t) {
                return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
            },
            ar = function(t) {
                var e = Li(t, Vi);
                return sr(e) ? ir : e.substr(7).match(q).map(Tt)
            },
            nr = function(t, e) {
                var i, r, s, a, n = t._gsap || gt(t),
                    o = t.style,
                    h = ar(t);
                return n.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (h = [(s = t.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? ir : h : (h !== ir || t.offsetParent || t === pi || n.svg || (s = o.display, o.display = "block", (i = t.parentNode) && t.offsetParent || (a = 1, r = t.nextSibling, pi.appendChild(t)), h = ar(t), s ? o.display = s : ji(t, "display"), a && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : pi.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
            },
            or = function(t, e, i, r, s, a) {
                var n, o, h, l = t._gsap,
                    p = s || nr(t, !0),
                    f = l.xOrigin || 0,
                    c = l.yOrigin || 0,
                    m = l.xOffset || 0,
                    d = l.yOffset || 0,
                    u = p[0],
                    g = p[1],
                    y = p[2],
                    v = p[3],
                    T = p[4],
                    b = p[5],
                    S = e.split(" "),
                    P = parseFloat(S[0]) || 0,
                    A = parseFloat(S[1]) || 0;
                i ? p !== ir && (o = u * v - g * y) && (h = P * (-g / o) + A * (u / o) - (u * b - g * T) / o, P = P * (v / o) + A * (-y / o) + (y * b - v * T) / o, A = h) : (P = (n = Ki(t)).x + (~S[0].indexOf("%") ? P / 100 * n.width : P), A = n.y + (~(S[1] || S[0]).indexOf("%") ? A / 100 * n.height : A)), r || !1 !== r && l.smooth ? (T = P - f, b = A - c, l.xOffset = m + (T * u + b * y) - T, l.yOffset = d + (T * g + b * v) - b) : l.xOffset = l.yOffset = 0, l.xOrigin = P, l.yOrigin = A, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!i, t.style[Hi] = "0px 0px", a && (qi(a, l, "xOrigin", f, P), qi(a, l, "yOrigin", c, A), qi(a, l, "xOffset", m, l.xOffset), qi(a, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", P + " " + A)
            },
            hr = function(t, e) {
                var i = t._gsap || new ke(t);
                if ("x" in i && !e && !i.uncache) return i;
                var r, s, a, n, o, h, l, p, f, c, m, d, u, g, y, v, T, b, S, P, A, _, M, E, C, x, D, G, k, I, B, F, V = t.style,
                    H = i.scaleX < 0,
                    R = Li(t, Hi) || "0";
                return r = s = a = h = l = p = f = c = m = 0, n = o = 1, i.svg = !(!t.getCTM || !Ui(t)), g = nr(t, i.svg), i.svg && (E = !i.uncache && t.getAttribute("data-svg-origin"), or(t, E || R, !!E || i.originIsAbsolute, !1 !== i.smooth, g)), d = i.xOrigin || 0, u = i.yOrigin || 0, g !== ir && (b = g[0], S = g[1], P = g[2], A = g[3], r = _ = g[4], s = M = g[5], 6 === g.length ? (n = Math.sqrt(b * b + S * S), o = Math.sqrt(A * A + P * P), h = b || S ? Ti(S, b) * yi : 0, (f = P || A ? Ti(P, A) * yi + h : 0) && (o *= Math.cos(f * vi)), i.svg && (r -= d - (d * b + u * P), s -= u - (d * S + u * A))) : (F = g[6], I = g[7], D = g[8], G = g[9], k = g[10], B = g[11], r = g[12], s = g[13], a = g[14], l = (y = Ti(F, k)) * yi, y && (E = _ * (v = Math.cos(-y)) + D * (T = Math.sin(-y)), C = M * v + G * T, x = F * v + k * T, D = _ * -T + D * v, G = M * -T + G * v, k = F * -T + k * v, B = I * -T + B * v, _ = E, M = C, F = x), p = (y = Ti(-P, k)) * yi, y && (v = Math.cos(-y), B = A * (T = Math.sin(-y)) + B * v, b = E = b * v - D * T, S = C = S * v - G * T, P = x = P * v - k * T), h = (y = Ti(S, b)) * yi, y && (E = b * (v = Math.cos(y)) + S * (T = Math.sin(y)), C = _ * v + M * T, S = S * v - b * T, M = M * v - _ * T, b = E, _ = C), l && Math.abs(l) + Math.abs(h) > 359.9 && (l = h = 0, p = 180 - p), n = Tt(Math.sqrt(b * b + S * S + P * P)), o = Tt(Math.sqrt(M * M + F * F)), y = Ti(_, M), f = Math.abs(y) > 2e-4 ? y * yi : 0, m = B ? 1 / (B < 0 ? -B : B) : 0), i.svg && (g = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !sr(Li(t, Vi)), g && t.setAttribute("transform", g))), Math.abs(f) > 90 && Math.abs(f) < 270 && (H ? (n *= -1, f += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), i.x = ((i.xPercent = r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", i.y = ((i.yPercent = s && Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0) ? 0 : s) + "px", i.z = a + "px", i.scaleX = Tt(n), i.scaleY = Tt(o), i.rotation = Tt(h) + "deg", i.rotationX = Tt(l) + "deg", i.rotationY = Tt(p) + "deg", i.skewX = f + "deg", i.skewY = c + "deg", i.transformPerspective = m + "px", (i.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (V[Hi] = lr(R)), i.xOffset = i.yOffset = 0, i.force3D = w.force3D, i.renderTransform = i.svg ? mr : ui ? cr : fr, i.uncache = 0, i
            },
            lr = function(t) {
                return (t = t.split(" "))[0] + " " + t[1]
            },
            pr = function(t, e, i) {
                var r = Yt(e);
                return Tt(parseFloat(e) + parseFloat(Qi(t, "x", i + "px", r))) + r
            },
            fr = function(t, e) {
                e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, cr(t, e)
            },
            cr = function(t, e) {
                var i = e || this,
                    r = i.xPercent,
                    s = i.yPercent,
                    a = i.x,
                    n = i.y,
                    o = i.z,
                    h = i.rotation,
                    l = i.rotationY,
                    p = i.rotationX,
                    f = i.skewX,
                    c = i.skewY,
                    m = i.scaleX,
                    d = i.scaleY,
                    u = i.transformPerspective,
                    g = i.force3D,
                    y = i.target,
                    v = i.zOrigin,
                    T = "",
                    b = "auto" === g && t && 1 !== t || !0 === g;
                if (v && ("0deg" !== p || "0deg" !== l)) {
                    var S, P = parseFloat(l) * vi,
                        A = Math.sin(P),
                        _ = Math.cos(P);
                    P = parseFloat(p) * vi, S = Math.cos(P), a = pr(y, a, A * S * -v), n = pr(y, n, -Math.sin(P) * -v), o = pr(y, o, _ * S * -v + v)
                }
                "0px" !== u && (T += "perspective(" + u + ") "), (r || s) && (T += "translate(" + r + "%, " + s + "%) "), (b || "0px" !== a || "0px" !== n || "0px" !== o) && (T += "0px" !== o || b ? "translate3d(" + a + ", " + n + ", " + o + ") " : "translate(" + a + ", " + n + ") "), "0deg" !== h && (T += "rotate(" + h + ") "), "0deg" !== l && (T += "rotateY(" + l + ") "), "0deg" !== p && (T += "rotateX(" + p + ") "), "0deg" === f && "0deg" === c || (T += "skew(" + f + ", " + c + ") "), 1 === m && 1 === d || (T += "scale(" + m + ", " + d + ") "), y.style[Vi] = T || "translate(0, 0)"
            },
            mr = function(t, e) {
                var i, r, s, a, n, o = e || this,
                    h = o.xPercent,
                    l = o.yPercent,
                    p = o.x,
                    f = o.y,
                    c = o.rotation,
                    m = o.skewX,
                    d = o.skewY,
                    u = o.scaleX,
                    g = o.scaleY,
                    y = o.target,
                    v = o.xOrigin,
                    T = o.yOrigin,
                    b = o.xOffset,
                    S = o.yOffset,
                    P = o.forceCSS,
                    A = parseFloat(p),
                    _ = parseFloat(f);
                c = parseFloat(c), m = parseFloat(m), (d = parseFloat(d)) && (m += d = parseFloat(d), c += d), c || m ? (c *= vi, m *= vi, i = Math.cos(c) * u, r = Math.sin(c) * u, s = Math.sin(c - m) * -g, a = Math.cos(c - m) * g, m && (d *= vi, n = Math.tan(m - d), s *= n = Math.sqrt(1 + n * n), a *= n, d && (n = Math.tan(d), i *= n = Math.sqrt(1 + n * n), r *= n)), i = Tt(i), r = Tt(r), s = Tt(s), a = Tt(a)) : (i = u, a = g, r = s = 0), (A && !~(p + "").indexOf("px") || _ && !~(f + "").indexOf("px")) && (A = Qi(y, "x", p, "px"), _ = Qi(y, "y", f, "px")), (v || T || b || S) && (A = Tt(A + v - (v * i + T * s) + b), _ = Tt(_ + T - (v * r + T * a) + S)), (h || l) && (n = y.getBBox(), A = Tt(A + h / 100 * n.width), _ = Tt(_ + l / 100 * n.height)), n = "matrix(" + i + "," + r + "," + s + "," + a + "," + A + "," + _ + ")", y.setAttribute("transform", n), P && (y.style[Vi] = n)
            },
            dr = function(t, e, i, r, s, a) {
                var n, o, h = R(s),
                    l = parseFloat(s) * (h && ~s.indexOf("rad") ? yi : 1),
                    p = a ? l * a : l - r,
                    f = r + p + "deg";
                return h && ("short" === (n = s.split("_")[1]) && (p %= 360) !== p % 180 && (p += p < 0 ? 360 : -360), "cw" === n && p < 0 ? p = (p + 36e9) % 360 - 360 * ~~(p / 360) : "ccw" === n && p > 0 && (p = (p - 36e9) % 360 - 360 * ~~(p / 360))), t._pt = o = new ri(t._pt, e, i, r, p, Mi), o.e = f, o.u = "deg", t._props.push(i), o
            },
            ur = function(t, e, i) {
                var r, s, a, n, o, h, l, p = mi.style,
                    f = i._gsap;
                for (s in p.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", p[Vi] = e, li.body.appendChild(mi), r = hr(mi, 1), gi)(a = f[s]) !== (n = r[s]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (o = Yt(a) !== (l = Yt(n)) ? Qi(i, s, a, l) : parseFloat(a), h = parseFloat(n), t._pt = new ri(t._pt, f, s, o, h - o, _i), t._pt.u = l || 0, t._props.push(s));
                li.body.removeChild(mi)
            };
        vt("padding,margin,Width,Radius", (function(t, e) {
            var i = "Top",
                r = "Right",
                s = "Bottom",
                a = "Left",
                n = (e < 3 ? [i, r, s, a] : [i + a, i + r, s + r, s + a]).map((function(i) {
                    return e < 2 ? t + i : "border" + i + t
                }));
            er[e > 1 ? "border" + t : t] = function(t, e, i, r, s) {
                var a, o;
                if (arguments.length < 4) return a = n.map((function(e) {
                    return Zi(t, e, i)
                })), 5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o;
                a = (r + "").split(" "), o = {}, n.forEach((function(t, e) {
                    return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
                })), t.init(e, o, s)
            }
        }));
        var gr, yr, vr = {
            name: "css",
            register: zi,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, i, r, s) {
                var a, n, o, h, l, p, f, c, m, d, u, g, y, v, T, b, S, P, A, _ = this._props,
                    M = t.style;
                for (f in fi || zi(), e)
                    if ("autoRound" !== f && (n = e[f], !pt[f] || !Re(f, e, i, r, t, s)))
                        if (l = typeof n, p = er[f], "function" === l && (l = typeof(n = n.call(i, r, t, s))), "string" === l && ~n.indexOf("random(") && (n = ne(n)), p) p(this, t, f, n, i) && (T = 1);
                        else if ("--" === f.substr(0, 2)) this.add(M, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", n + "", r, s, 0, 0, f);
                else {
                    if (a = Zi(t, f), h = parseFloat(a), (d = "string" === l && "=" === n.charAt(1) ? +(n.charAt(0) + "1") : 0) && (n = n.substr(2)), o = parseFloat(n), f in Ai && ("autoAlpha" === f && (1 === h && "hidden" === Zi(t, "visibility") && o && (h = 0), qi(this, M, "visibility", h ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Ai[f]).indexOf(",") && (f = f.split(",")[0])), u = f in gi)
                        if (g || ((y = t._gsap).renderTransform || hr(t), v = !1 !== e.smoothOrigin && y.smooth, (g = this._pt = new ri(this._pt, M, Vi, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === f) this._pt = new ri(this._pt, y, "scaleY", y.scaleY, d ? d * o : o - y.scaleY), _.push("scaleY", f), f += "X";
                        else {
                            if ("transformOrigin" === f) {
                                S = void 0, P = void 0, A = void 0, S = (b = n).split(" "), P = S[0], A = S[1] || "50%", "top" !== P && "bottom" !== P && "left" !== A && "right" !== A || (b = P, P = A, A = b), S[0] = $i[P] || P, S[1] = $i[A] || A, n = S.join(" "), y.svg ? or(t, n, 0, v, 0, this) : ((m = parseFloat(n.split(" ")[2]) || 0) !== y.zOrigin && qi(this, y, "zOrigin", y.zOrigin, m), qi(this, M, f, lr(a), lr(n)));
                                continue
                            }
                            if ("svgOrigin" === f) {
                                or(t, n, 1, v, 0, this);
                                continue
                            }
                            if (f in rr) {
                                dr(this, y, f, h, n, d);
                                continue
                            }
                            if ("smoothOrigin" === f) {
                                qi(this, y, "smooth", y.smooth, n);
                                continue
                            }
                            if ("force3D" === f) {
                                y[f] = n;
                                continue
                            }
                            if ("transform" === f) {
                                ur(this, n, t);
                                continue
                            }
                        }
                    else f in M || (f = Ni(f) || f);
                    if (u || (o || 0 === o) && (h || 0 === h) && !Pi.test(n) && f in M) o || (o = 0), (c = (a + "").substr((h + "").length)) !== (m = (n + "").substr((o + "").length) || (f in w.units ? w.units[f] : c)) && (h = Qi(t, f, a, m)), this._pt = new ri(this._pt, u ? y : M, f, h, d ? d * o : o - h, "px" !== m || !1 === e.autoRound || u ? _i : Ci), this._pt.u = m || 0, c !== m && (this._pt.b = a, this._pt.r = Ei);
                    else if (f in M) Ji.call(this, t, f, a, n);
                    else {
                        if (!(f in t)) {
                            rt(f, n);
                            continue
                        }
                        this.add(t, f, t[f], n, r, s)
                    }
                    _.push(f)
                }
                T && ii(this)
            },
            get: Zi,
            aliases: Ai,
            getSetter: function(t, e, i) {
                var r = Ai[e];
                return r && r.indexOf(",") < 0 && (e = r), e in gi && e !== Hi && (t._gsap.x || Zi(t, "x")) ? i && di === i ? "scale" === e ? Ii : ki : (di = i || {}) && ("scale" === e ? Bi : Fi) : t.style && !N(t.style[e]) ? wi : ~e.indexOf("-") ? Gi : qe(t, e)
            },
            core: {
                _removeProperty: ji,
                _getMatrix: nr
            }
        };
        oi.utils.checkPrefix = Ni, yr = vt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (gr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
            gi[t] = 1
        })), vt(gr, (function(t) {
            w.units[t] = "deg", rr[t] = 1
        })), Ai[yr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + gr, vt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
            var e = t.split(":");
            Ai[e[1]] = yr[e[0]]
        })), vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
            w.units[t] = "px"
        })), oi.registerPlugin(vr);
        var Tr = oi.registerPlugin(vr) || oi;
        Tr.core.Tween
    }, function(t, e, i) {
        var r = i(4),
            s = i(17),
            a = i(20),
            n = Math.max,
            o = Math.min;
        t.exports = function(t, e, i) {
            var h, l, p, f, c, m, d = 0,
                u = !1,
                g = !1,
                y = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");

            function v(e) {
                var i = h,
                    r = l;
                return h = l = void 0, d = e, f = t.apply(r, i)
            }

            function T(t) {
                return d = t, c = setTimeout(S, e), u ? v(t) : f
            }

            function b(t) {
                var i = t - m;
                return void 0 === m || i >= e || i < 0 || g && t - d >= p
            }

            function S() {
                var t = s();
                if (b(t)) return P(t);
                c = setTimeout(S, function(t) {
                    var i = e - (t - m);
                    return g ? o(i, p - (t - d)) : i
                }(t))
            }

            function P(t) {
                return c = void 0, y && h ? v(t) : (h = l = void 0, f)
            }

            function A() {
                var t = s(),
                    i = b(t);
                if (h = arguments, l = this, m = t, i) {
                    if (void 0 === c) return T(m);
                    if (g) return clearTimeout(c), c = setTimeout(S, e), v(m)
                }
                return void 0 === c && (c = setTimeout(S, e)), f
            }
            return e = a(e) || 0, r(i) && (u = !!i.leading, p = (g = "maxWait" in i) ? n(a(i.maxWait) || 0, e) : p, y = "trailing" in i ? !!i.trailing : y), A.cancel = function() {
                void 0 !== c && clearTimeout(c), d = 0, h = m = l = c = void 0
            }, A.flush = function() {
                return void 0 === c ? f : P(s())
            }, A
        }
    }, function(t, e, i) {
        "use strict";

        function r() {}
        r.prototype = {
            on: function(t, e, i) {
                var r = this.e || (this.e = {});
                return (r[t] || (r[t] = [])).push({
                    fn: e,
                    ctx: i
                }), this
            },
            once: function(t, e, i) {
                var r = this;

                function s() {
                    r.off(t, s), e.apply(i, arguments)
                }
                return s._ = e, this.on(t, s, i)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, s = i.length; r < s; r++) i[r].fn.apply(i[r].ctx, e);
                return this
            },
            off: function(t, e) {
                var i = this.e || (this.e = {}),
                    r = i[t],
                    s = [];
                if (r && e)
                    for (var a = 0, n = r.length; a < n; a++) r[a].fn !== e && r[a].fn._ !== e && s.push(r[a]);
                return s.length ? i[t] = s : delete i[t], this
            }
        };
        var s = r;
        s.TinyEmitter = r;
        var a = function(t) {
            this.wrap = document.querySelector("[data-router-wrapper]"), this.properties = t, this.Transition = t.transition ? new t.transition.class(this.wrap, t.transition.name) : null
        };
        a.prototype.setup = function() {
            this.onEnter && this.onEnter(), this.onEnterCompleted && this.onEnterCompleted()
        }, a.prototype.add = function() {
            this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML)
        }, a.prototype.update = function() {
            document.title = this.properties.page.title
        }, a.prototype.show = function(t) {
            var e = this;
            return new Promise((function(i) {
                try {
                    function r(t) {
                        e.onEnterCompleted && e.onEnterCompleted(), i()
                    }
                    return e.update(), e.onEnter && e.onEnter(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.show(t)).then(r) : r())
                } catch (t) {
                    return Promise.reject(t)
                }
            }))
        }, a.prototype.hide = function(t) {
            var e = this;
            return new Promise((function(i) {
                try {
                    function r(t) {
                        e.onLeaveCompleted && e.onLeaveCompleted(), i()
                    }
                    return e.onLeave && e.onLeave(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.hide(t)).then(r) : r())
                } catch (t) {
                    return Promise.reject(t)
                }
            }))
        };
        var n = new window.DOMParser,
            o = function(t, e) {
                this.renderers = t, this.transitions = e
            };
        o.prototype.getOrigin = function(t) {
            var e = t.match(/(https?:\/\/[\w\-.]+)/);
            return e ? e[1].replace(/https?:\/\//, "") : null
        }, o.prototype.getPathname = function(t) {
            var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
            return e ? e[1] : "/"
        }, o.prototype.getAnchor = function(t) {
            var e = t.match(/(#.*)$/);
            return e ? e[1] : null
        }, o.prototype.getParams = function(t) {
            var e = t.match(/\?([\w_\-.=&]+)/);
            if (!e) return null;
            for (var i = e[1].split("&"), r = {}, s = 0; s < i.length; s++) {
                var a = i[s].split("=");
                r[a[0]] = a[1]
            }
            return r
        }, o.prototype.getDOM = function(t) {
            return "string" == typeof t ? n.parseFromString(t, "text/html") : t
        }, o.prototype.getView = function(t) {
            return t.querySelector("[data-router-view]")
        }, o.prototype.getSlug = function(t) {
            return t.getAttribute("data-router-view")
        }, o.prototype.getRenderer = function(t) {
            if (!this.renderers) return Promise.resolve(a);
            if (t in this.renderers) {
                var e = this.renderers[t];
                return "function" != typeof e || a.isPrototypeOf(e) ? "function" == typeof e.then ? Promise.resolve(e).then((function(t) {
                    return t.default
                })) : Promise.resolve(e) : Promise.resolve(e()).then((function(t) {
                    return t.default
                }))
            }
            return Promise.resolve(a)
        }, o.prototype.getTransition = function(t) {
            return this.transitions ? t in this.transitions ? {
                class: this.transitions[t],
                name: t
            } : "default" in this.transitions ? {
                class: this.transitions.default,
                name: "default"
            } : null : null
        }, o.prototype.getProperties = function(t) {
            var e = this.getDOM(t),
                i = this.getView(e),
                r = this.getSlug(i);
            return {
                page: e,
                view: i,
                slug: r,
                renderer: this.getRenderer(r, this.renderers),
                transition: this.getTransition(r, this.transitions)
            }
        }, o.prototype.getLocation = function(t) {
            return {
                href: t,
                anchor: this.getAnchor(t),
                origin: this.getOrigin(t),
                params: this.getParams(t),
                pathname: this.getPathname(t)
            }
        };
        var h = function(t) {
                function e(e) {
                    var i = this;
                    void 0 === e && (e = {});
                    var r = e.renderers,
                        s = e.transitions;
                    t.call(this), this.Helpers = new o(r, s), this.Transitions = s, this.Contextual = !1, this.location = this.Helpers.getLocation(window.location.href), this.properties = this.Helpers.getProperties(document.cloneNode(!0)), this.popping = !1, this.running = !1, this.trigger = null, this.cache = new Map, this.cache.set(this.location.href, this.properties), this.properties.renderer.then((function(t) {
                        i.From = new t(i.properties), i.From.setup()
                    })), this._navigate = this.navigate.bind(this), window.addEventListener("popstate", this.popState.bind(this)), this.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), this.attach(this.links)
                }
                return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e, e.prototype.attach = function(t) {
                    for (var e = 0, i = t; e < i.length; e += 1) i[e].addEventListener("click", this._navigate)
                }, e.prototype.detach = function(t) {
                    for (var e = 0, i = t; e < i.length; e += 1) i[e].removeEventListener("click", this._navigate)
                }, e.prototype.navigate = function(t) {
                    if (!t.metaKey && !t.ctrlKey) {
                        t.preventDefault();
                        var e = !!t.currentTarget.hasAttribute("data-transition") && t.currentTarget.dataset.transition;
                        this.redirect(t.currentTarget.href, e, t.currentTarget)
                    }
                }, e.prototype.redirect = function(t, e, i) {
                    if (void 0 === e && (e = !1), void 0 === i && (i = "script"), this.trigger = i, !this.running && t !== this.location.href) {
                        var r = this.Helpers.getLocation(t);
                        this.Contextual = !1, e && (this.Contextual = this.Transitions.contextual[e].prototype, this.Contextual.name = e), r.origin !== this.location.origin || r.anchor && r.pathname === this.location.pathname ? window.location.href = t : (this.location = r, this.beforeFetch())
                    }
                }, e.prototype.popState = function() {
                    this.trigger = "popstate", this.Contextual = !1;
                    var t = this.Helpers.getLocation(window.location.href);
                    this.location.pathname !== t.pathname || !this.location.anchor && !t.anchor ? (this.popping = !0, this.location = t, this.beforeFetch()) : this.location = t
                }, e.prototype.pushState = function() {
                    this.popping || window.history.pushState(this.location, "", this.location.href)
                }, e.prototype.fetch = function() {
                    try {
                        var t = this;
                        return Promise.resolve(fetch(t.location.href, {
                            mode: "same-origin",
                            method: "GET",
                            headers: {
                                "X-Requested-With": "Highway"
                            },
                            credentials: "same-origin"
                        })).then((function(e) {
                            if (e.status >= 200 && e.status < 300) return e.text();
                            window.location.href = t.location.href
                        }))
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }, e.prototype.beforeFetch = function() {
                    try {
                        var t = this;

                        function e() {
                            t.afterFetch()
                        }
                        t.pushState(), t.running = !0, t.emit("NAVIGATE_OUT", {
                            from: {
                                page: t.From.properties.page,
                                view: t.From.properties.view
                            },
                            trigger: t.trigger,
                            location: t.location
                        });
                        var i = {
                                trigger: t.trigger,
                                contextual: t.Contextual
                            },
                            r = t.cache.has(t.location.href) ? Promise.resolve(t.From.hide(i)).then((function() {
                                t.properties = t.cache.get(t.location.href)
                            })) : Promise.resolve(Promise.all([t.fetch(), t.From.hide(i)])).then((function(e) {
                                t.properties = t.Helpers.getProperties(e[0]), t.cache.set(t.location.href, t.properties)
                            }));
                        return Promise.resolve(r && r.then ? r.then(e) : e())
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }, e.prototype.afterFetch = function() {
                    try {
                        var t = this;
                        return Promise.resolve(t.properties.renderer).then((function(e) {
                            return t.To = new e(t.properties), t.To.add(), t.emit("NAVIGATE_IN", {
                                to: {
                                    page: t.To.properties.page,
                                    view: t.To.wrap.lastElementChild
                                },
                                trigger: t.trigger,
                                location: t.location
                            }), Promise.resolve(t.To.show({
                                trigger: t.trigger,
                                contextual: t.Contextual
                            })).then((function() {
                                t.popping = !1, t.running = !1, t.detach(t.links), t.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), t.attach(t.links), t.emit("NAVIGATE_END", {
                                    to: {
                                        page: t.To.properties.page,
                                        view: t.To.wrap.lastElementChild
                                    },
                                    from: {
                                        page: t.From.properties.page,
                                        view: t.From.properties.view
                                    },
                                    trigger: t.trigger,
                                    location: t.location
                                }), t.From = t.To, t.trigger = null
                            }))
                        }))
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }, e
            }(s),
            l = function(t, e) {
                this.wrap = t, this.name = e
            };
        l.prototype.show = function(t) {
            var e = this,
                i = t.trigger,
                r = t.contextual,
                s = this.wrap.lastElementChild,
                a = this.wrap.firstElementChild;
            return new Promise((function(t) {
                r ? (s.setAttribute("data-transition-in", r.name), s.removeAttribute("data-transition-out", r.name), r.in && r.in({
                    to: s,
                    from: a,
                    trigger: i,
                    done: t
                })) : (s.setAttribute("data-transition-in", e.name), s.removeAttribute("data-transition-out", e.name), e.in && e.in({
                    to: s,
                    from: a,
                    trigger: i,
                    done: t
                }))
            }))
        }, l.prototype.hide = function(t) {
            var e = this,
                i = t.trigger,
                r = t.contextual,
                s = this.wrap.firstElementChild;
            return new Promise((function(t) {
                r ? (s.setAttribute("data-transition-out", r.name), s.removeAttribute("data-transition-in", r.name), r.out && r.out({
                    from: s,
                    trigger: i,
                    done: t
                })) : (s.setAttribute("data-transition-out", e.name), s.removeAttribute("data-transition-in", e.name), e.out && e.out({
                    from: s,
                    trigger: i,
                    done: t
                }))
            }))
        }, console.log("Highway v2.2.0"), e.a = {
            Core: h,
            Helpers: o,
            Renderer: a,
            Transition: l
        }
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        "undefined" != typeof navigator && function(t, e) {
            void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return e(t)
            }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
        }(window || {}, (function(window) {
            "use strict";
            var svgNS = "http://www.w3.org/2000/svg",
                locationHref = "",
                initialDefaultFrame = -999999,
                subframeEnabled = !0,
                expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                cachedColors = {},
                bm_rounder = Math.round,
                bm_rnd, bm_pow = Math.pow,
                bm_sqrt = Math.sqrt,
                bm_abs = Math.abs,
                bm_floor = Math.floor,
                bm_max = Math.max,
                bm_min = Math.min,
                blitter = 10,
                BMMath = {};

            function ProjectInterface() {
                return {}
            }! function() {
                var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                    i = e.length;
                for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
            }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                if ("object" === typeof t && t.length) {
                    var e, i = createSizedArray(t.length),
                        r = t.length;
                    for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
                    return i
                }
                return Math.abs(t)
            };
            var defaultCurveSegments = 150,
                degToRads = Math.PI / 180,
                roundCorner = .5519;

            function roundValues(t) {
                bm_rnd = t ? Math.round : function(t) {
                    return t
                }
            }

            function styleDiv(t) {
                t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
            }

            function BMEnterFrameEvent(t, e, i, r) {
                this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
            }

            function BMCompleteEvent(t, e) {
                this.type = t, this.direction = e < 0 ? -1 : 1
            }

            function BMCompleteLoopEvent(t, e, i, r) {
                this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
            }

            function BMSegmentStartEvent(t, e, i) {
                this.type = t, this.firstFrame = e, this.totalFrames = i
            }

            function BMDestroyEvent(t, e) {
                this.type = t, this.target = e
            }

            function BMRenderFrameErrorEvent(t, e) {
                this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
            }

            function BMConfigErrorEvent(t) {
                this.type = "configError", this.nativeError = t
            }

            function BMAnimationConfigErrorEvent(t, e) {
                this.type = t, this.nativeError = e, this.currentTime = currentTime
            }
            roundValues(!1);
            var createElementID = (_count = 0, function() {
                    return "__lottie_element_" + ++_count
                }),
                _count;

            function HSVtoRGB(t, e, i) {
                var r, s, a, n, o, h, l, p;
                switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
                    case 0:
                        r = i, s = p, a = h;
                        break;
                    case 1:
                        r = l, s = i, a = h;
                        break;
                    case 2:
                        r = h, s = i, a = p;
                        break;
                    case 3:
                        r = h, s = l, a = i;
                        break;
                    case 4:
                        r = p, s = h, a = i;
                        break;
                    case 5:
                        r = i, s = h, a = l
                }
                return [r, s, a]
            }

            function RGBtoHSV(t, e, i) {
                var r, s = Math.max(t, e, i),
                    a = Math.min(t, e, i),
                    n = s - a,
                    o = 0 === s ? 0 : n / s,
                    h = s / 255;
                switch (s) {
                    case a:
                        r = 0;
                        break;
                    case t:
                        r = e - i + n * (e < i ? 6 : 0), r /= 6 * n;
                        break;
                    case e:
                        r = i - t + 2 * n, r /= 6 * n;
                        break;
                    case i:
                        r = t - e + 4 * n, r /= 6 * n
                }
                return [r, o, h]
            }

            function addSaturationToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
            }

            function addBrightnessToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
            }

            function addHueToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
            }
            var rgbToHex = function() {
                var t, e, i = [];
                for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 == e.length ? "0" + e : e;
                return function(t, e, r) {
                    return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
                }
            }();

            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t])
                        for (var i = this._cbs[t].length, r = 0; r < i; r++) this._cbs[t][r](e)
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                        function() {
                            this.removeEventListener(t, e)
                        }.bind(this)
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                            this._cbs[t].length || (this._cbs[t] = null)
                        }
                    } else this._cbs[t] = null
                }
            };
            var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) {
                return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
            } : function(t, e) {
                var i, r = 0,
                    s = [];
                switch (t) {
                    case "int16":
                    case "uint8c":
                        i = 1;
                        break;
                    default:
                        i = 1.1
                }
                for (r = 0; r < e; r += 1) s.push(i);
                return s
            };

            function createSizedArray(t) {
                return Array.apply(null, {
                    length: t
                })
            }

            function createNS(t) {
                return document.createElementNS(svgNS, t)
            }

            function createTag(t) {
                return document.createElement(t)
            }

            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    this._mdf = !1;
                    var t, e = this.dynamicProperties.length;
                    for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(t) {
                    this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                }
            };
            var getBlendMode = (blendModeEnums = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    }
                    /*!
                     Transformation Matrix v2.0
                     (c) Epistemex 2014-2015
                     www.epistemex.com
                     By Ken Fyrstenberg
                     Contributions by leeoniya.
                     License: MIT, header required.
                     */
                    ,
                    function(t) {
                        return blendModeEnums[t] || ""
                    }),
                blendModeEnums, Matrix = function() {
                    var t = Math.cos,
                        e = Math.sin,
                        i = Math.tan,
                        r = Math.round;

                    function s() {
                        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                    }

                    function a(i) {
                        if (0 === i) return this;
                        var r = t(i),
                            s = e(i);
                        return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function n(i) {
                        if (0 === i) return this;
                        var r = t(i),
                            s = e(i);
                        return this._t(1, 0, 0, 0, 0, r, -s, 0, 0, s, r, 0, 0, 0, 0, 1)
                    }

                    function o(i) {
                        if (0 === i) return this;
                        var r = t(i),
                            s = e(i);
                        return this._t(r, 0, s, 0, 0, 1, 0, 0, -s, 0, r, 0, 0, 0, 0, 1)
                    }

                    function h(i) {
                        if (0 === i) return this;
                        var r = t(i),
                            s = e(i);
                        return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function l(t, e) {
                        return this._t(1, e, t, 1, 0, 0)
                    }

                    function p(t, e) {
                        return this.shear(i(t), i(e))
                    }

                    function f(r, s) {
                        var a = t(s),
                            n = e(s);
                        return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function c(t, e, i) {
                        return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                    }

                    function m(t, e, i, r, s, a, n, o, h, l, p, f, c, m, d, u) {
                        return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = s, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = c, this.props[13] = m, this.props[14] = d, this.props[15] = u, this
                    }

                    function d(t, e, i) {
                        return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                    }

                    function u(t, e, i, r, s, a, n, o, h, l, p, f, c, m, d, u) {
                        var g = this.props;
                        if (1 === t && 0 === e && 0 === i && 0 === r && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === f) return g[12] = g[12] * t + g[15] * c, g[13] = g[13] * a + g[15] * m, g[14] = g[14] * p + g[15] * d, g[15] = g[15] * u, this._identityCalculated = !1, this;
                        var y = g[0],
                            v = g[1],
                            T = g[2],
                            b = g[3],
                            S = g[4],
                            P = g[5],
                            A = g[6],
                            _ = g[7],
                            M = g[8],
                            E = g[9],
                            C = g[10],
                            x = g[11],
                            D = g[12],
                            w = g[13],
                            G = g[14],
                            k = g[15];
                        return g[0] = y * t + v * s + T * h + b * c, g[1] = y * e + v * a + T * l + b * m, g[2] = y * i + v * n + T * p + b * d, g[3] = y * r + v * o + T * f + b * u, g[4] = S * t + P * s + A * h + _ * c, g[5] = S * e + P * a + A * l + _ * m, g[6] = S * i + P * n + A * p + _ * d, g[7] = S * r + P * o + A * f + _ * u, g[8] = M * t + E * s + C * h + x * c, g[9] = M * e + E * a + C * l + x * m, g[10] = M * i + E * n + C * p + x * d, g[11] = M * r + E * o + C * f + x * u, g[12] = D * t + w * s + G * h + k * c, g[13] = D * e + w * a + G * l + k * m, g[14] = D * i + w * n + G * p + k * d, g[15] = D * r + w * o + G * f + k * u, this._identityCalculated = !1, this
                    }

                    function g() {
                        return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                    }

                    function y(t) {
                        for (var e = 0; e < 16;) {
                            if (t.props[e] !== this.props[e]) return !1;
                            e += 1
                        }
                        return !0
                    }

                    function v(t) {
                        var e;
                        for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
                    }

                    function T(t) {
                        var e;
                        for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                    }

                    function b(t, e, i) {
                        return {
                            x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                            y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                            z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        }
                    }

                    function S(t, e, i) {
                        return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                    }

                    function P(t, e, i) {
                        return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                    }

                    function A(t, e, i) {
                        return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                    }

                    function _() {
                        var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                            e = this.props[5] / t,
                            i = -this.props[1] / t,
                            r = -this.props[4] / t,
                            s = this.props[0] / t,
                            a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                            n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                            o = new Matrix;
                        return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = s, o.props[12] = a, o.props[13] = n, o
                    }

                    function M(t) {
                        return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                    }

                    function E(t) {
                        var e, i = t.length,
                            r = [];
                        for (e = 0; e < i; e += 1) r[e] = M(t[e]);
                        return r
                    }

                    function C(t, e, i) {
                        var r = createTypedArray("float32", 6);
                        if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
                        else {
                            var s = this.props[0],
                                a = this.props[1],
                                n = this.props[4],
                                o = this.props[5],
                                h = this.props[12],
                                l = this.props[13];
                            r[0] = t[0] * s + t[1] * n + h, r[1] = t[0] * a + t[1] * o + l, r[2] = e[0] * s + e[1] * n + h, r[3] = e[0] * a + e[1] * o + l, r[4] = i[0] * s + i[1] * n + h, r[5] = i[0] * a + i[1] * o + l
                        }
                        return r
                    }

                    function x(t, e, i) {
                        return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                    }

                    function D(t, e) {
                        if (this.isIdentity()) return t + "," + e;
                        var i = this.props;
                        return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                    }

                    function w() {
                        for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
                        return i
                    }

                    function G(t) {
                        return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
                    }

                    function k() {
                        var t = this.props;
                        return "matrix(" + G(t[0]) + "," + G(t[1]) + "," + G(t[4]) + "," + G(t[5]) + "," + G(t[12]) + "," + G(t[13]) + ")"
                    }
                    return function() {
                        this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = c, this.setTransform = m, this.translate = d, this.transform = u, this.applyToPoint = b, this.applyToX = S, this.applyToY = P, this.applyToZ = A, this.applyToPointArray = x, this.applyToTriplePoints = C, this.applyToPointStringified = D, this.toCSS = w, this.to2dCSS = k, this.clone = v, this.cloneFromProps = T, this.equals = y, this.inversePoints = E, this.inversePoint = M, this.getInverseMatrix = _, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                    }
                }();
            ! function(t, e) {
                var i = this,
                    r = e.pow(256, 6),
                    s = e.pow(2, 52),
                    a = 2 * s;

                function n(t) {
                    var e, i = t.length,
                        r = this,
                        s = 0,
                        a = r.i = r.j = 0,
                        n = r.S = [];
                    for (i || (t = [i++]); s < 256;) n[s] = s++;
                    for (s = 0; s < 256; s++) n[s] = n[a = 255 & a + t[s % i] + (e = n[s])], n[a] = e;
                    r.g = function(t) {
                        for (var e, i = 0, s = r.i, a = r.j, n = r.S; t--;) e = n[s = 255 & s + 1], i = 256 * i + n[255 & (n[s] = n[a = 255 & a + e]) + (n[a] = e)];
                        return r.i = s, r.j = a, i
                    }
                }

                function o(t, e) {
                    return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                }

                function h(t, e) {
                    for (var i, r = t + "", s = 0; s < r.length;) e[255 & s] = 255 & (i ^= 19 * e[255 & s]) + r.charCodeAt(s++);
                    return l(e)
                }

                function l(t) {
                    return String.fromCharCode.apply(0, t)
                }
                e.seedrandom = function(p, f, c) {
                    var m = [],
                        d = h(function t(e, i) {
                            var r, s = [],
                                a = typeof e;
                            if (i && "object" == a)
                                for (r in e) try {
                                    s.push(t(e[r], i - 1))
                                } catch (t) {}
                            return s.length ? s : "string" == a ? e : e + "\0"
                        }((f = !0 === f ? {
                            entropy: !0
                        } : f || {}).entropy ? [p, l(t)] : null === p ? function() {
                            try {
                                void 0;
                                var e = new Uint8Array(256);
                                return (i.crypto || i.msCrypto).getRandomValues(e), l(e)
                            } catch (e) {
                                var r = i.navigator,
                                    s = r && r.plugins;
                                return [+new Date, i, s, i.screen, l(t)]
                            }
                        }() : p, 3), m),
                        u = new n(m),
                        g = function() {
                            for (var t = u.g(6), e = r, i = 0; t < s;) t = 256 * (t + i), e *= 256, i = u.g(1);
                            for (; t >= a;) t /= 2, e /= 2, i >>>= 1;
                            return (t + i) / e
                        };
                    return g.int32 = function() {
                        return 0 | u.g(4)
                    }, g.quick = function() {
                        return u.g(4) / 4294967296
                    }, g.double = g, h(l(u.S), t), (f.pass || c || function(t, i, r, s) {
                        return s && (s.S && o(s, u), t.state = function() {
                            return o(u, {})
                        }), r ? (e.random = t, i) : t
                    })(g, d, "global" in f ? f.global : this == e, f.state)
                }, h(e.random(), t)
            }([], BMMath);
            var BezierFactory = function() {
                var t = {
                        getBezierEasing: function(t, i, r, s, a) {
                            var n = a || ("bez_" + t + "_" + i + "_" + r + "_" + s).replace(/\./g, "p");
                            if (e[n]) return e[n];
                            var o = new h([t, i, r, s]);
                            return e[n] = o, o
                        }
                    },
                    e = {};
                var i = "function" == typeof Float32Array;

                function r(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function s(t, e) {
                    return 3 * e - 6 * t
                }

                function a(t) {
                    return 3 * t
                }

                function n(t, e, i) {
                    return ((r(e, i) * t + s(e, i)) * t + a(e)) * t
                }

                function o(t, e, i) {
                    return 3 * r(e, i) * t * t + 2 * s(e, i) * t + a(e)
                }

                function h(t) {
                    this._p = t, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                }
                return h.prototype = {
                    get: function(t) {
                        var e = this._p[0],
                            i = this._p[1],
                            r = this._p[2],
                            s = this._p[3];
                        return this._precomputed || this._precompute(), e === i && r === s ? t : 0 === t ? 0 : 1 === t ? 1 : n(this._getTForX(t), i, s)
                    },
                    _precompute: function() {
                        var t = this._p[0],
                            e = this._p[1],
                            i = this._p[2],
                            r = this._p[3];
                        this._precomputed = !0, t === e && i === r || this._calcSampleValues()
                    },
                    _calcSampleValues: function() {
                        for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = n(.1 * i, t, e)
                    },
                    _getTForX: function(t) {
                        for (var e = this._p[0], i = this._p[2], r = this._mSampleValues, s = 0, a = 1; 10 !== a && r[a] <= t; ++a) s += .1;
                        var h = s + .1 * ((t - r[--a]) / (r[a + 1] - r[a])),
                            l = o(h, e, i);
                        return l >= .001 ? function(t, e, i, r) {
                            for (var s = 0; s < 4; ++s) {
                                var a = o(e, i, r);
                                if (0 === a) return e;
                                e -= (n(e, i, r) - t) / a
                            }
                            return e
                        }(t, h, e, i) : 0 === l ? h : function(t, e, i, r, s) {
                            var a, o, h = 0;
                            do {
                                (a = n(o = e + (i - e) / 2, r, s) - t) > 0 ? i = o : e = o
                            } while (Math.abs(a) > 1e-7 && ++h < 10);
                            return o
                        }(t, s, s + .1, e, i)
                    }
                }, t
            }();

            function extendPrototype(t, e) {
                var i, r, s = t.length;
                for (i = 0; i < s; i += 1)
                    for (var a in r = t[i].prototype) r.hasOwnProperty(a) && (e.prototype[a] = r[a])
            }

            function getDescriptor(t, e) {
                return Object.getOwnPropertyDescriptor(t, e)
            }

            function createProxyFunction(t) {
                function e() {}
                return e.prototype = t, e
            }

            function bezFunction() {
                Math;

                function t(t, e, i, r, s, a) {
                    var n = t * r + e * s + i * a - s * r - a * t - i * e;
                    return n > -.001 && n < .001
                }
                var e = function(t, e, i, r) {
                    var s, a, n, o, h, l, p = defaultCurveSegments,
                        f = 0,
                        c = [],
                        m = [],
                        d = bezier_length_pool.newElement();
                    for (n = i.length, s = 0; s < p; s += 1) {
                        for (h = s / (p - 1), l = 0, a = 0; a < n; a += 1) o = bm_pow(1 - h, 3) * t[a] + 3 * bm_pow(1 - h, 2) * h * i[a] + 3 * (1 - h) * bm_pow(h, 2) * r[a] + bm_pow(h, 3) * e[a], c[a] = o, null !== m[a] && (l += bm_pow(c[a] - m[a], 2)), m[a] = c[a];
                        l && (f += l = bm_sqrt(l)), d.percents[s] = h, d.lengths[s] = f
                    }
                    return d.addedLength = f, d
                };

                function i(t) {
                    this.segmentLength = 0, this.points = new Array(t)
                }

                function r(t, e) {
                    this.partialLength = t, this.point = e
                }
                var s, a = (s = {}, function(e, a, n, o) {
                    var h = (e[0] + "_" + e[1] + "_" + a[0] + "_" + a[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                    if (!s[h]) {
                        var l, p, f, c, m, d, u, g = defaultCurveSegments,
                            y = 0,
                            v = null;
                        2 === e.length && (e[0] != a[0] || e[1] != a[1]) && t(e[0], e[1], a[0], a[1], e[0] + n[0], e[1] + n[1]) && t(e[0], e[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (g = 2);
                        var T = new i(g);
                        for (f = n.length, l = 0; l < g; l += 1) {
                            for (u = createSizedArray(f), m = l / (g - 1), d = 0, p = 0; p < f; p += 1) c = bm_pow(1 - m, 3) * e[p] + 3 * bm_pow(1 - m, 2) * m * (e[p] + n[p]) + 3 * (1 - m) * bm_pow(m, 2) * (a[p] + o[p]) + bm_pow(m, 3) * a[p], u[p] = c, null !== v && (d += bm_pow(u[p] - v[p], 2));
                            y += d = bm_sqrt(d), T.points[l] = new r(d, u), v = u
                        }
                        T.segmentLength = y, s[h] = T
                    }
                    return s[h]
                });

                function n(t, e) {
                    var i = e.percents,
                        r = e.lengths,
                        s = i.length,
                        a = bm_floor((s - 1) * t),
                        n = t * e.addedLength,
                        o = 0;
                    if (a === s - 1 || 0 === a || n === r[a]) return i[a];
                    for (var h = r[a] > n ? -1 : 1, l = !0; l;)
                        if (r[a] <= n && r[a + 1] > n ? (o = (n - r[a]) / (r[a + 1] - r[a]), l = !1) : a += h, a < 0 || a >= s - 1) {
                            if (a === s - 1) return i[a];
                            l = !1
                        }
                    return i[a] + (i[a + 1] - i[a]) * o
                }
                var o = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(t) {
                        var i, r = segments_length_pool.newElement(),
                            s = t.c,
                            a = t.v,
                            n = t.o,
                            o = t.i,
                            h = t._length,
                            l = r.lengths,
                            p = 0;
                        for (i = 0; i < h - 1; i += 1) l[i] = e(a[i], a[i + 1], n[i], o[i + 1]), p += l[i].addedLength;
                        return s && h && (l[i] = e(a[i], a[0], n[i], o[0]), p += l[i].addedLength), r.totalLength = p, r
                    },
                    getNewSegment: function(t, e, i, r, s, a, h) {
                        var l, p = n(s = s < 0 ? 0 : s > 1 ? 1 : s, h),
                            f = n(a = a > 1 ? 1 : a, h),
                            c = t.length,
                            m = 1 - p,
                            d = 1 - f,
                            u = m * m * m,
                            g = p * m * m * 3,
                            y = p * p * m * 3,
                            v = p * p * p,
                            T = m * m * d,
                            b = p * m * d + m * p * d + m * m * f,
                            S = p * p * d + m * p * f + p * m * f,
                            P = p * p * f,
                            A = m * d * d,
                            _ = p * d * d + m * f * d + m * d * f,
                            M = p * f * d + m * f * f + p * d * f,
                            E = p * f * f,
                            C = d * d * d,
                            x = f * d * d + d * f * d + d * d * f,
                            D = f * f * d + d * f * f + f * d * f,
                            w = f * f * f;
                        for (l = 0; l < c; l += 1) o[4 * l] = Math.round(1e3 * (u * t[l] + g * i[l] + y * r[l] + v * e[l])) / 1e3, o[4 * l + 1] = Math.round(1e3 * (T * t[l] + b * i[l] + S * r[l] + P * e[l])) / 1e3, o[4 * l + 2] = Math.round(1e3 * (A * t[l] + _ * i[l] + M * r[l] + E * e[l])) / 1e3, o[4 * l + 3] = Math.round(1e3 * (C * t[l] + x * i[l] + D * r[l] + w * e[l])) / 1e3;
                        return o
                    },
                    getPointInSegment: function(t, e, i, r, s, a) {
                        var o = n(s, a),
                            h = 1 - o;
                        return [Math.round(1e3 * (h * h * h * t[0] + (o * h * h + h * o * h + h * h * o) * i[0] + (o * o * h + h * o * o + o * h * o) * r[0] + o * o * o * e[0])) / 1e3, Math.round(1e3 * (h * h * h * t[1] + (o * h * h + h * o * h + h * h * o) * i[1] + (o * o * h + h * o * o + o * h * o) * r[1] + o * o * o * e[1])) / 1e3]
                    },
                    buildBezierData: a,
                    pointOnLine2D: t,
                    pointOnLine3D: function(e, i, r, s, a, n, o, h, l) {
                        if (0 === r && 0 === n && 0 === l) return t(e, i, s, a, o, h);
                        var p, f = Math.sqrt(Math.pow(s - e, 2) + Math.pow(a - i, 2) + Math.pow(n - r, 2)),
                            c = Math.sqrt(Math.pow(o - e, 2) + Math.pow(h - i, 2) + Math.pow(l - r, 2)),
                            m = Math.sqrt(Math.pow(o - s, 2) + Math.pow(h - a, 2) + Math.pow(l - n, 2));
                        return (p = f > c ? f > m ? f - c - m : m - c - f : m > c ? m - c - f : c - f - m) > -1e-4 && p < 1e-4
                    }
                }
            }! function() {
                for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                    var r = (new Date).getTime(),
                        s = Math.max(0, 16 - (r - t)),
                        a = setTimeout((function() {
                            e(r + s)
                        }), s);
                    return t = r + s, a
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                })
            }();
            var bez = bezFunction();

            function dataFunctionManager() {
                function t(s, a, n) {
                    var o, h, l, f, c, m, d = s.length;
                    for (h = 0; h < d; h += 1)
                        if ("ks" in (o = s[h]) && !o.completed) {
                            if (o.completed = !0, o.tt && (s[h - 1].td = o.tt), [], -1, o.hasMask) {
                                var u = o.masksProperties;
                                for (f = u.length, l = 0; l < f; l += 1)
                                    if (u[l].pt.k.i) r(u[l].pt.k);
                                    else
                                        for (m = u[l].pt.k.length, c = 0; c < m; c += 1) u[l].pt.k[c].s && r(u[l].pt.k[c].s[0]), u[l].pt.k[c].e && r(u[l].pt.k[c].e[0])
                            }
                            0 === o.ty ? (o.layers = e(o.refId, a), t(o.layers, a, n)) : 4 === o.ty ? i(o.shapes) : 5 == o.ty && p(o, n)
                        }
                }

                function e(t, e) {
                    for (var i = 0, r = e.length; i < r;) {
                        if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
                        i += 1
                    }
                }

                function i(t) {
                    var e, s, a;
                    for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" == t[e].ty) {
                            if (t[e].ks.k.i) r(t[e].ks.k);
                            else
                                for (a = t[e].ks.k.length, s = 0; s < a; s += 1) t[e].ks.k[s].s && r(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && r(t[e].ks.k[s].e[0]);
                            !0
                        } else "gr" == t[e].ty && i(t[e].it)
                }

                function r(t) {
                    var e, i = t.i.length;
                    for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                }

                function s(t, e) {
                    var i = e ? e.split(".") : [100, 100, 100];
                    return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && void 0))
                }
                var a, n = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                            var e, i, r, s = t.length;
                            for (e = 0; e < s; e += 1) 5 === t[e].ty && (i = t[e], r = void 0, r = i.t.d, i.t.d = {
                                k: [{
                                    s: r,
                                    t: 0
                                }]
                            })
                        }
                        return function(i) {
                            if (s(t, i.v) && (e(i.layers), i.assets)) {
                                var r, a = i.assets.length;
                                for (r = 0; r < a; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                            }
                        }
                    }(),
                    o = (a = [4, 7, 99], function(t) {
                        if (t.chars && !s(a, t.v)) {
                            var e, i, n, o, h, l = t.chars.length;
                            for (e = 0; e < l; e += 1)
                                if (t.chars[e].data && t.chars[e].data.shapes)
                                    for (n = (h = t.chars[e].data.shapes[0].it).length, i = 0; i < n; i += 1)(o = h[i].ks.k).__converted || (r(h[i].ks.k), o.__converted = !0)
                        }
                    }),
                    h = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                            var i, r, s, a = t.length;
                            for (i = 0; i < a; i += 1)
                                if ("gr" === t[i].ty) e(t[i].it);
                                else if ("fl" === t[i].ty || "st" === t[i].ty)
                                if (t[i].c.k && t[i].c.k[0].i)
                                    for (s = t[i].c.k.length, r = 0; r < s; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                                else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                        }

                        function i(t) {
                            var i, r = t.length;
                            for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
                        }
                        return function(e) {
                            if (s(t, e.v) && (i(e.layers), e.assets)) {
                                var r, a = e.assets.length;
                                for (r = 0; r < a; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                            }
                        }
                    }(),
                    l = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                            var i, r, s;
                            for (i = t.length - 1; i >= 0; i -= 1)
                                if ("sh" == t[i].ty) {
                                    if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                    else
                                        for (s = t[i].ks.k.length, r = 0; r < s; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                                    !0
                                } else "gr" == t[i].ty && e(t[i].it)
                        }

                        function i(t) {
                            var i, r, s, a, n, o, h = t.length;
                            for (r = 0; r < h; r += 1) {
                                if ((i = t[r]).hasMask) {
                                    var l = i.masksProperties;
                                    for (a = l.length, s = 0; s < a; s += 1)
                                        if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                                        else
                                            for (o = l[s].pt.k.length, n = 0; n < o; n += 1) l[s].pt.k[n].s && (l[s].pt.k[n].s[0].c = l[s].cl), l[s].pt.k[n].e && (l[s].pt.k[n].e[0].c = l[s].cl)
                                }
                                4 === i.ty && e(i.shapes)
                            }
                        }
                        return function(e) {
                            if (s(t, e.v) && (i(e.layers), e.assets)) {
                                var r, a = e.assets.length;
                                for (r = 0; r < a; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                            }
                        }
                    }();

                function p(t, e) {
                    0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
                }
                var f = {
                    completeData: function(e, i) {
                        e.__complete || (h(e), n(e), o(e), l(e), t(e.layers, e.assets, i), e.__complete = !0)
                    }
                };
                return f.checkColors = h, f.checkChars = o, f.checkShapes = l, f.completeLayers = t, f
            }
            var dataManager = dataFunctionManager(),
                FontManager = function() {
                    var t = {
                            w: 0,
                            size: 0,
                            shapes: []
                        },
                        e = [];

                    function i(t, e) {
                        var i = createTag("span");
                        i.style.fontFamily = e;
                        var r = createTag("span");
                        r.innerHTML = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
                        var s = r.offsetWidth;
                        return r.style.fontFamily = t + ", " + e, {
                            node: r,
                            w: s,
                            parent: i
                        }
                    }

                    function r(t, e) {
                        var i = createNS("text");
                        return i.style.fontSize = "100px", i.setAttribute("font-family", e.fFamily), i.setAttribute("font-style", e.fStyle), i.setAttribute("font-weight", e.fWeight), i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily, t.appendChild(i), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, i
                    }
                    e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var s = function() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now()
                    };
                    return s.getCombinedCharacterCodes = function() {
                        return e
                    }, s.prototype.addChars = function(t) {
                        if (t) {
                            this.chars || (this.chars = []);
                            var e, i, r, s = t.length,
                                a = this.chars.length;
                            for (e = 0; e < s; e += 1) {
                                for (i = 0, r = !1; i < a;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                                r || (this.chars.push(t[e]), a += 1)
                            }
                        }
                    }, s.prototype.addFonts = function(t, e) {
                        if (t) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                            var s, a = t.list,
                                n = a.length,
                                o = n;
                            for (s = 0; s < n; s += 1) {
                                var h, l, p = !0;
                                if (a[s].loaded = !1, a[s].monoCase = i(a[s].fFamily, "monospace"), a[s].sansCase = i(a[s].fFamily, "sans-serif"), a[s].fPath) {
                                    if ("p" === a[s].fOrigin || 3 === a[s].origin) {
                                        if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + a[s].fFamily + '"], style[f-origin="3"][f-family="' + a[s].fFamily + '"]')).length > 0 && (p = !1), p) {
                                            var f = createTag("style");
                                            f.setAttribute("f-forigin", a[s].fOrigin), f.setAttribute("f-origin", a[s].origin), f.setAttribute("f-family", a[s].fFamily), f.type = "text/css", f.innerHTML = "@font-face {font-family: " + a[s].fFamily + "; font-style: normal; src: url('" + a[s].fPath + "');}", e.appendChild(f)
                                        }
                                    } else if ("g" === a[s].fOrigin || 1 === a[s].origin) {
                                        for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l++) - 1 !== h[l].href.indexOf(a[s].fPath) && (p = !1);
                                        if (p) {
                                            var c = createTag("link");
                                            c.setAttribute("f-forigin", a[s].fOrigin), c.setAttribute("f-origin", a[s].origin), c.type = "text/css", c.rel = "stylesheet", c.href = a[s].fPath, document.body.appendChild(c)
                                        }
                                    } else if ("t" === a[s].fOrigin || 2 === a[s].origin) {
                                        for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l++) a[s].fPath === h[l].src && (p = !1);
                                        if (p) {
                                            var m = createTag("link");
                                            m.setAttribute("f-forigin", a[s].fOrigin), m.setAttribute("f-origin", a[s].origin), m.setAttribute("rel", "stylesheet"), m.setAttribute("href", a[s].fPath), e.appendChild(m)
                                        }
                                    }
                                } else a[s].loaded = !0, o -= 1;
                                a[s].helper = r(e, a[s]), a[s].cache = {}, this.fonts.push(a[s])
                            }
                            0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    }, s.prototype.getCharData = function(e, i, r) {
                        for (var s = 0, a = this.chars.length; s < a;) {
                            if (this.chars[s].ch === e && this.chars[s].style === i && this.chars[s].fFamily === r) return this.chars[s];
                            s += 1
                        }
                        return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && console.warn("Missing character from exported characters list: ", e, i, r), t
                    }, s.prototype.getFontByName = function(t) {
                        for (var e = 0, i = this.fonts.length; e < i;) {
                            if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1
                        }
                        return this.fonts[0]
                    }, s.prototype.measureText = function(t, e, i) {
                        var r = this.getFontByName(e),
                            s = t.charCodeAt(0);
                        if (!r.cache[s + 1]) {
                            var a = r.helper;
                            if (" " === t) {
                                a.textContent = "|" + t + "|";
                                var n = a.getComputedTextLength();
                                a.textContent = "||";
                                var o = a.getComputedTextLength();
                                r.cache[s + 1] = (n - o) / 100
                            } else a.textContent = t, r.cache[s + 1] = a.getComputedTextLength() / 100
                        }
                        return r.cache[s + 1] * i
                    }, s.prototype.checkLoadedFonts = function() {
                        var t, e, i, r = this.fonts.length,
                            s = r;
                        for (t = 0; t < r; t += 1) this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                        0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() {
                            this.isLoaded = !0
                        }.bind(this), 0)
                    }, s.prototype.loaded = function() {
                        return this.isLoaded
                    }, s
                }(),
                PropertyFactory = function() {
                    var t = initialDefaultFrame,
                        e = Math.abs;

                    function i(t, e) {
                        var i, s = this.offsetTime;
                        "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                        for (var a, n, o, h, l, p, f, c, m = e.lastIndex, d = m, u = this.keyframes.length - 1, g = !0; g;) {
                            if (a = this.keyframes[d], n = this.keyframes[d + 1], d === u - 1 && t >= n.t - s) {
                                a.h && (a = n), m = 0;
                                break
                            }
                            if (n.t - s > t) {
                                m = d;
                                break
                            }
                            d < u - 1 ? d += 1 : (m = 0, g = !1)
                        }
                        var y, v = n.t - s,
                            T = a.t - s;
                        if (a.to) {
                            a.bezierData || (a.bezierData = bez.buildBezierData(a.s, n.s || a.e, a.to, a.ti));
                            var b = a.bezierData;
                            if (t >= v || t < T) {
                                var S = t >= v ? b.points.length - 1 : 0;
                                for (h = b.points[S].point.length, o = 0; o < h; o += 1) i[o] = b.points[S].point[o]
                            } else {
                                a.__fnct ? c = a.__fnct : (c = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = c), l = c((t - T) / (v - T));
                                var P, A = b.segmentLength * l,
                                    _ = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
                                for (f = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, g = !0, p = b.points.length; g;) {
                                    if (_ += b.points[f].partialLength, 0 === A || 0 === l || f === b.points.length - 1) {
                                        for (h = b.points[f].point.length, o = 0; o < h; o += 1) i[o] = b.points[f].point[o];
                                        break
                                    }
                                    if (A >= _ && A < _ + b.points[f + 1].partialLength) {
                                        for (P = (A - _) / b.points[f + 1].partialLength, h = b.points[f].point.length, o = 0; o < h; o += 1) i[o] = b.points[f].point[o] + (b.points[f + 1].point[o] - b.points[f].point[o]) * P;
                                        break
                                    }
                                    f < p - 1 ? f += 1 : g = !1
                                }
                                e._lastPoint = f, e._lastAddedLength = _ - b.points[f].partialLength, e._lastKeyframeIndex = d
                            }
                        } else {
                            var M, E, C, x, D;
                            if (u = a.s.length, y = n.s || a.e, this.sh && 1 !== a.h)
                                if (t >= v) i[0] = y[0], i[1] = y[1], i[2] = y[2];
                                else if (t <= T) i[0] = a.s[0], i[1] = a.s[1], i[2] = a.s[2];
                            else {
                                ! function(t, e) {
                                    var i = e[0],
                                        r = e[1],
                                        s = e[2],
                                        a = e[3],
                                        n = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s),
                                        o = Math.asin(2 * i * r + 2 * s * a),
                                        h = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s);
                                    t[0] = n / degToRads, t[1] = o / degToRads, t[2] = h / degToRads
                                }(i, function(t, e, i) {
                                    var r, s, a, n, o, h = [],
                                        l = t[0],
                                        p = t[1],
                                        f = t[2],
                                        c = t[3],
                                        m = e[0],
                                        d = e[1],
                                        u = e[2],
                                        g = e[3];
                                    (s = l * m + p * d + f * u + c * g) < 0 && (s = -s, m = -m, d = -d, u = -u, g = -g);
                                    1 - s > 1e-6 ? (r = Math.acos(s), a = Math.sin(r), n = Math.sin((1 - i) * r) / a, o = Math.sin(i * r) / a) : (n = 1 - i, o = i);
                                    return h[0] = n * l + o * m, h[1] = n * p + o * d, h[2] = n * f + o * u, h[3] = n * c + o * g, h
                                }(r(a.s), r(y), (t - T) / (v - T)))
                            } else
                                for (d = 0; d < u; d += 1) 1 !== a.h && (t >= v ? l = 1 : t < T ? l = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[d] ? c = a.__fnct[d] : (M = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], E = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], C = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], x = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], c = BezierFactory.getBezierEasing(M, E, C, x).get, a.__fnct[d] = c)) : a.__fnct ? c = a.__fnct : (M = a.o.x, E = a.o.y, C = a.i.x, x = a.i.y, c = BezierFactory.getBezierEasing(M, E, C, x).get, a.__fnct = c), l = c((t - T) / (v - T)))), y = n.s || a.e, D = 1 === a.h ? a.s[d] : a.s[d] + (y[d] - a.s[d]) * l, "multidimensional" === this.propType ? i[d] = D : i = D
                        }
                        return e.lastIndex = m, i
                    }

                    function r(t) {
                        var e = t[0] * degToRads,
                            i = t[1] * degToRads,
                            r = t[2] * degToRads,
                            s = Math.cos(e / 2),
                            a = Math.cos(i / 2),
                            n = Math.cos(r / 2),
                            o = Math.sin(e / 2),
                            h = Math.sin(i / 2),
                            l = Math.sin(r / 2);
                        return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l]
                    }

                    function s() {
                        var e = this.comp.renderedFrame - this.offsetTime,
                            i = this.keyframes[0].t - this.offsetTime,
                            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                        if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < i && e < i))) {
                            this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                            var s = this.interpolateValue(e, this._caching);
                            this.pv = s
                        }
                        return this._caching.lastFrame = e, this.pv
                    }

                    function a(t) {
                        var i;
                        if ("unidimensional" === this.propType) i = t * this.mult, e(this.v - i) > 1e-5 && (this.v = i, this._mdf = !0);
                        else
                            for (var r = 0, s = this.v.length; r < s;) i = t[r] * this.mult, e(this.v[r] - i) > 1e-5 && (this.v[r] = i, this._mdf = !0), r += 1
                    }

                    function n() {
                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else {
                                this.lock = !0, this._mdf = this._isFirstFrame;
                                var t, e = this.effectsSequence.length,
                                    i = this.kf ? this.pv : this.data.k;
                                for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                                this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                    }

                    function o(t) {
                        this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                    }

                    function h(t, e, i, r) {
                        this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = n, this.setVValue = a, this.addEffect = o
                    }

                    function l(t, e, i, r) {
                        this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                        var s, h = e.k.length;
                        this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h);
                        createTypedArray("float32", h);
                        for (this.vel = createTypedArray("float32", h), s = 0; s < h; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
                        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = n, this.setVValue = a, this.addEffect = o
                    }

                    function p(e, r, h, l) {
                        this.propType = "unidimensional", this.keyframes = r.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                            lastFrame: t,
                            lastIndex: 0,
                            value: 0,
                            _lastKeyframeIndex: -1
                        }, this.k = !0, this.kf = !0, this.data = r, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = n, this.setVValue = a, this.interpolateValue = i, this.effectsSequence = [s.bind(this)], this.addEffect = o
                    }

                    function f(e, r, h, l) {
                        this.propType = "multidimensional";
                        var p, f, c, m, d, u = r.k.length;
                        for (p = 0; p < u - 1; p += 1) r.k[p].to && r.k[p].s && r.k[p + 1] && r.k[p + 1].s && (f = r.k[p].s, c = r.k[p + 1].s, m = r.k[p].to, d = r.k[p].ti, (2 === f.length && (f[0] !== c[0] || f[1] !== c[1]) && bez.pointOnLine2D(f[0], f[1], c[0], c[1], f[0] + m[0], f[1] + m[1]) && bez.pointOnLine2D(f[0], f[1], c[0], c[1], c[0] + d[0], c[1] + d[1]) || 3 === f.length && (f[0] !== c[0] || f[1] !== c[1] || f[2] !== c[2]) && bez.pointOnLine3D(f[0], f[1], f[2], c[0], c[1], c[2], f[0] + m[0], f[1] + m[1], f[2] + m[2]) && bez.pointOnLine3D(f[0], f[1], f[2], c[0], c[1], c[2], c[0] + d[0], c[1] + d[1], c[2] + d[2])) && (r.k[p].to = null, r.k[p].ti = null), f[0] === c[0] && f[1] === c[1] && 0 === m[0] && 0 === m[1] && 0 === d[0] && 0 === d[1] && (2 === f.length || f[2] === c[2] && 0 === m[2] && 0 === d[2]) && (r.k[p].to = null, r.k[p].ti = null));
                        this.effectsSequence = [s.bind(this)], this.keyframes = r.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = n, this.setVValue = a, this.interpolateValue = i, this.frameId = -1;
                        var g = r.k[0].s.length;
                        for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), p = 0; p < g; p += 1) this.v[p] = t, this.pv[p] = t;
                        this._caching = {
                            lastFrame: t,
                            lastIndex: 0,
                            value: createTypedArray("float32", g)
                        }, this.addEffect = o
                    }
                    return {
                        getProp: function(t, e, i, r, s) {
                            var a;
                            if (e.k.length)
                                if ("number" == typeof e.k[0]) a = new l(t, e, r, s);
                                else switch (i) {
                                    case 0:
                                        a = new p(t, e, r, s);
                                        break;
                                    case 1:
                                        a = new f(t, e, r, s)
                                } else a = new h(t, e, r, s);
                            return a.effectsSequence.length && s.addDynamicProperty(a), a
                        }
                    }
                }(),
                TransformPropertyFactory = function() {
                    var t = [0, 0];

                    function e(t, e, i) {
                        if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), e.rx) {
                            if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                var r, s = e.or.k.length;
                                for (r = 0; r < s; r += 1) e.or.k[r].to = e.or.k[r].ti = null
                            }
                            this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                        } else this.r = PropertyFactory.getProp(t, e.r || {
                            k: 0
                        }, 0, degToRads, this);
                        e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }
                    return e.prototype = {
                        applyToMatrix: function(t) {
                            var e = this._mdf;
                            this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        },
                        getValue: function(e) {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                    if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                        var i, r, s = this.elem.globalData.frameRate;
                                        if (this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / s, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / s, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / s, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / s, 0)) : (i = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / s, this.p.offsetTime));
                                        else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                            i = [], r = [];
                                            var a = this.px,
                                                n = this.py;
                                            a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (i[0] = a.getValueAtTime((a.keyframes[0].t + .01) / s, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + .01) / s, 0), r[0] = a.getValueAtTime(a.keyframes[0].t / s, 0), r[1] = n.getValueAtTime(n.keyframes[0].t / s, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (i[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / s, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / s, 0), r[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / s, 0), r[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / s, 0)) : (i = [a.pv, n.pv], r[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / s, a.offsetTime), r[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / s, n.offsetTime))
                                        } else i = r = t;
                                        this.v.rotate(-Math.atan2(i[1] - r[1], i[0] - r[0]))
                                    }
                                    this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                }
                                this.frameId = this.elem.globalData.frameId
                            }
                        },
                        precalculateMatrix: function() {
                            if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                    if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                    this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                }
                                if (this.r) {
                                    if (this.r.effectsSequence.length) return;
                                    this.pre.rotate(-this.r.v), this.appliedTransformations = 4
                                } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                            }
                        },
                        autoOrient: function() {}
                    }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                        this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                    }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                        getTransformProperty: function(t, i, r) {
                            return new e(t, i, r)
                        }
                    }
                }();

            function ShapePath() {
                this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
            }
            ShapePath.prototype.setPathData = function(t, e) {
                this.c = t, this.setLength(e);
                for (var i = 0; i < e;) this.v[i] = point_pool.newElement(), this.o[i] = point_pool.newElement(), this.i[i] = point_pool.newElement(), i += 1
            }, ShapePath.prototype.setLength = function(t) {
                for (; this._maxLength < t;) this.doubleArrayLength();
                this._length = t
            }, ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
            }, ShapePath.prototype.setXYAt = function(t, e, i, r, s) {
                var a;
                switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                    case "v":
                        a = this.v;
                        break;
                    case "i":
                        a = this.i;
                        break;
                    case "o":
                        a = this.o
                }(!a[r] || a[r] && !s) && (a[r] = point_pool.newElement()), a[r][0] = t, a[r][1] = e
            }, ShapePath.prototype.setTripleAt = function(t, e, i, r, s, a, n, o) {
                this.setXYAt(t, e, "v", n, o), this.setXYAt(i, r, "o", n, o), this.setXYAt(s, a, "i", n, o)
            }, ShapePath.prototype.reverse = function() {
                var t = new ShapePath;
                t.setPathData(this.c, this._length);
                var e = this.v,
                    i = this.o,
                    r = this.i,
                    s = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
                var a, n = this._length - 1,
                    o = this._length;
                for (a = s; a < o; a += 1) t.setTripleAt(e[n][0], e[n][1], r[n][0], r[n][1], i[n][0], i[n][1], a, !1), n -= 1;
                return t
            };
            var ShapePropertyFactory = function() {
                    function t(t, e, i) {
                        var r, s, a, n, o, h, l, p, f, c = i.lastIndex,
                            m = this.keyframes;
                        if (t < m[0].t - this.offsetTime) r = m[0].s[0], a = !0, c = 0;
                        else if (t >= m[m.length - 1].t - this.offsetTime) r = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0], a = !0;
                        else {
                            for (var d, u, g = c, y = m.length - 1, v = !0; v && (d = m[g], !((u = m[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : v = !1;
                            if (c = g, !(a = 1 === d.h)) {
                                if (t >= u.t - this.offsetTime) p = 1;
                                else if (t < d.t - this.offsetTime) p = 0;
                                else {
                                    var T;
                                    d.__fnct ? T = d.__fnct : (T = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = T), p = T((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)))
                                }
                                s = u.s ? u.s[0] : d.e[0]
                            }
                            r = d.s[0]
                        }
                        for (h = e._length, l = r.i[0].length, i.lastIndex = c, n = 0; n < h; n += 1)
                            for (o = 0; o < l; o += 1) f = a ? r.i[n][o] : r.i[n][o] + (s.i[n][o] - r.i[n][o]) * p, e.i[n][o] = f, f = a ? r.o[n][o] : r.o[n][o] + (s.o[n][o] - r.o[n][o]) * p, e.o[n][o] = f, f = a ? r.v[n][o] : r.v[n][o] + (s.v[n][o] - r.v[n][o]) * p, e.v[n][o] = f
                    }

                    function e() {
                        var t = this.comp.renderedFrame - this.offsetTime,
                            e = this.keyframes[0].t - this.offsetTime,
                            i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            r = this._caching.lastFrame;
                        return -999999 !== r && (r < e && t < e || r > i && t > i) || (this._caching.lastIndex = r < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                    }

                    function i() {
                        this.paths = this.localShapeCollection
                    }

                    function r(t) {
                        (function(t, e) {
                            if (t._length !== e._length || t.c !== e.c) return !1;
                            var i, r = t._length;
                            for (i = 0; i < r; i += 1)
                                if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                            return !0
                        })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                    }

                    function s() {
                        if (this.elem.globalData.frameId !== this.frameId)
                            if (this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    this.lock = !0, this._mdf = !1;
                                    var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                        i = this.effectsSequence.length;
                                    for (t = 0; t < i; t += 1) e = this.effectsSequence[t](e);
                                    this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        else this._mdf = !1
                    }

                    function a(t, e, r) {
                        this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                        var s = 3 === r ? e.pt.k : e.ks.k;
                        this.v = shape_pool.clone(s), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                    }

                    function n(t) {
                        this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                    }

                    function o(t, r, s) {
                        this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === s ? r.pt.k : r.ks.k, this.k = !0, this.kf = !0;
                        var a = this.keyframes[0].s[0].i.length;
                        this.keyframes[0].s[0].i[0].length;
                        this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = i, this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0
                        }, this.effectsSequence = [e.bind(this)]
                    }
                    a.prototype.interpolateShape = t, a.prototype.getValue = s, a.prototype.setVValue = r, a.prototype.addEffect = n, o.prototype.getValue = s, o.prototype.interpolateShape = t, o.prototype.setVValue = r, o.prototype.addEffect = n;
                    var h = function() {
                            var t = roundCorner;

                            function e(t, e) {
                                this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                            }
                            return e.prototype = {
                                reset: i,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                },
                                convertEllToPath: function() {
                                    var e = this.p.v[0],
                                        i = this.p.v[1],
                                        r = this.s.v[0] / 2,
                                        s = this.s.v[1] / 2,
                                        a = 3 !== this.d,
                                        n = this.v;
                                    n.v[0][0] = e, n.v[0][1] = i - s, n.v[1][0] = a ? e + r : e - r, n.v[1][1] = i, n.v[2][0] = e, n.v[2][1] = i + s, n.v[3][0] = a ? e - r : e + r, n.v[3][1] = i, n.i[0][0] = a ? e - r * t : e + r * t, n.i[0][1] = i - s, n.i[1][0] = a ? e + r : e - r, n.i[1][1] = i - s * t, n.i[2][0] = a ? e + r * t : e - r * t, n.i[2][1] = i + s, n.i[3][0] = a ? e - r : e + r, n.i[3][1] = i + s * t, n.o[0][0] = a ? e + r * t : e - r * t, n.o[0][1] = i - s, n.o[1][0] = a ? e + r : e - r, n.o[1][1] = i + s * t, n.o[2][0] = a ? e - r * t : e + r * t, n.o[2][1] = i + s, n.o[3][0] = a ? e - r : e + r, n.o[3][1] = i - s * t
                                }
                            }, extendPrototype([DynamicPropertyContainer], e), e
                        }(),
                        l = function() {
                            function t(t, e) {
                                this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                            }
                            return t.prototype = {
                                reset: i,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                },
                                convertStarToPath: function() {
                                    var t, e, i, r, s = 2 * Math.floor(this.pt.v),
                                        a = 2 * Math.PI / s,
                                        n = !0,
                                        o = this.or.v,
                                        h = this.ir.v,
                                        l = this.os.v,
                                        p = this.is.v,
                                        f = 2 * Math.PI * o / (2 * s),
                                        c = 2 * Math.PI * h / (2 * s),
                                        m = -Math.PI / 2;
                                    m += this.r.v;
                                    var d = 3 === this.data.d ? -1 : 1;
                                    for (this.v._length = 0, t = 0; t < s; t += 1) {
                                        i = n ? l : p, r = n ? f : c;
                                        var u = (e = n ? o : h) * Math.cos(m),
                                            g = e * Math.sin(m),
                                            y = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                                            v = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                                        u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - y * r * i * d, g - v * r * i * d, u + y * r * i * d, g + v * r * i * d, t, !0), n = !n, m += a * d
                                    }
                                },
                                convertPolygonToPath: function() {
                                    var t, e = Math.floor(this.pt.v),
                                        i = 2 * Math.PI / e,
                                        r = this.or.v,
                                        s = this.os.v,
                                        a = 2 * Math.PI * r / (4 * e),
                                        n = -Math.PI / 2,
                                        o = 3 === this.data.d ? -1 : 1;
                                    for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                        var h = r * Math.cos(n),
                                            l = r * Math.sin(n),
                                            p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                            f = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                        h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * s * o, l - f * a * s * o, h + p * a * s * o, l + f * a * s * o, t, !0), n += i * o
                                    }
                                    this.paths.length = 0, this.paths[0] = this.v
                                }
                            }, extendPrototype([DynamicPropertyContainer], t), t
                        }(),
                        p = function() {
                            function t(t, e) {
                                this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                            }
                            return t.prototype = {
                                convertRectToPath: function() {
                                    var t = this.p.v[0],
                                        e = this.p.v[1],
                                        i = this.s.v[0] / 2,
                                        r = this.s.v[1] / 2,
                                        s = bm_min(i, r, this.r.v),
                                        a = s * (1 - roundCorner);
                                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + s, t + i, e - r + a, 0, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - a, t + i, e + r - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e + r, t + i - s, e + r, t + i - a, e + r, 2, !0), this.v.setTripleAt(t - i + s, e + r, t - i + a, e + r, t - i + s, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - s, t - i, e + r - a, 4, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + a, t - i, e - r + s, 5, !0), this.v.setTripleAt(t - i + s, e - r, t - i + s, e - r, t - i + a, e - r, 6, !0), this.v.setTripleAt(t + i - s, e - r, t + i - a, e - r, t + i - s, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + a, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + a, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + a, t + i, e - r + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e - r, t + i - s, e - r, t + i - a, e - r, 1, !0), this.v.setTripleAt(t - i + s, e - r, t - i + a, e - r, t - i + s, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + s, t - i, e - r + a, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - a, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i + s, e + r, t - i + s, e + r, t - i + a, e + r, 5, !0), this.v.setTripleAt(t + i - s, e + r, t + i - a, e + r, t + i - s, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - s, t + i, e + r - a, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + a, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - a, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - a, e + r, t + i, e + r, 3, !0)))
                                },
                                getValue: function(t) {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                },
                                reset: i
                            }, extendPrototype([DynamicPropertyContainer], t), t
                        }();
                    var f = {
                        getShapeProp: function(t, e, i) {
                            var r;
                            return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new o(t, e, i) : new a(t, e, i) : 5 === i ? r = new p(t, e) : 6 === i ? r = new h(t, e) : 7 === i && (r = new l(t, e)), r.k && t.addDynamicProperty(r), r
                        },
                        getConstructorFunction: function() {
                            return a
                        },
                        getKeyframedConstructorFunction: function() {
                            return o
                        }
                    };
                    return f
                }(),
                ShapeModifiers = function() {
                    var t = {},
                        e = {};
                    return t.registerModifier = function(t, i) {
                        e[t] || (e[t] = i)
                    }, t.getModifier = function(t, i, r) {
                        return new e[t](i, r)
                    }, t
                }();

            function ShapeModifier() {}

            function TrimModifier() {}

            function RoundCornersModifier() {}

            function RepeaterModifier() {}

            function ShapeCollection() {
                this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
            }

            function DashProperty(t, e, i, r) {
                this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
                var s, a, n = e.length || 0;
                for (s = 0; s < n; s += 1) a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
                    n: e[s].n,
                    p: a
                };
                this.k || this.getValue(!0), this._isAnimated = this.k
            }

            function GradientProperty(t, e, i) {
                this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
            }
            ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection: shapeCollection_pool.newShapeCollection()
                    };
                    this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                }
            }, ShapeModifier.prototype.init = function(t, e) {
                this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
            }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            }, TrimModifier.prototype.addShapeToModifier = function(t) {
                t.pathsData = []
            }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, s) {
                var a = [];
                e <= 1 ? a.push({
                    s: t,
                    e: e
                }) : t >= 1 ? a.push({
                    s: t - 1,
                    e: e - 1
                }) : (a.push({
                    s: t,
                    e: 1
                }), a.push({
                    s: 0,
                    e: e - 1
                }));
                var n, o, h = [],
                    l = a.length;
                for (n = 0; n < l; n += 1) {
                    var p, f;
                    if ((o = a[n]).e * s < r || o.s * s > r + i);
                    else p = o.s * s <= r ? 0 : (o.s * s - r) / i, f = o.e * s >= r + i ? 1 : (o.e * s - r) / i, h.push([p, f])
                }
                return h.length || h.push([0, 0]), h
            }, TrimModifier.prototype.releasePathsData = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) segments_length_pool.release(t[e]);
                return t.length = 0, t
            }, TrimModifier.prototype.processShapes = function(t) {
                var e, i, r;
                if (this._mdf || t) {
                    var s = this.o.v % 360 / 360;
                    if (s < 0 && (s += 1), (e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + s) > (i = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + s)) {
                        var a = e;
                        e = i, i = a
                    }
                    e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
                } else e = this.sValue, i = this.eValue;
                var n, o, h, l, p, f, c = this.shapes.length,
                    m = 0;
                if (i === e)
                    for (n = 0; n < c; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection;
                else if (1 === i && 0 === e || 0 === i && 1 === e) {
                    if (this._mdf)
                        for (n = 0; n < c; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                } else {
                    var d, u, g = [];
                    for (n = 0; n < c; n += 1)
                        if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                            if (h = (r = d.shape.paths)._length, f = 0, !d.shape._mdf && d.pathsData.length) f = d.totalShapeLength;
                            else {
                                for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(r.shapes[o]), l.push(p), f += p.totalLength;
                                d.totalShapeLength = f, d.pathsData = l
                            }
                            m += f, d.shape._mdf = !0
                        } else d.shape.paths = d.localShapeCollection;
                    var y, v = e,
                        T = i,
                        b = 0;
                    for (n = c - 1; n >= 0; n -= 1)
                        if ((d = this.shapes[n]).shape._mdf) {
                            for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (y = this.calculateShapeEdges(e, i, d.totalShapeLength, b, m), b += d.totalShapeLength) : y = [
                                    [v, T]
                                ], h = y.length, o = 0; o < h; o += 1) {
                                v = y[o][0], T = y[o][1], g.length = 0, T <= 1 ? g.push({
                                    s: d.totalShapeLength * v,
                                    e: d.totalShapeLength * T
                                }) : v >= 1 ? g.push({
                                    s: d.totalShapeLength * (v - 1),
                                    e: d.totalShapeLength * (T - 1)
                                }) : (g.push({
                                    s: d.totalShapeLength * v,
                                    e: d.totalShapeLength
                                }), g.push({
                                    s: 0,
                                    e: d.totalShapeLength * (T - 1)
                                }));
                                var S = this.addShapes(d, g[0]);
                                if (g[0].s !== g[0].e) {
                                    if (g.length > 1)
                                        if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                            var P = S.pop();
                                            this.addPaths(S, u), S = this.addShapes(d, g[1], P)
                                        } else this.addPaths(S, u), S = this.addShapes(d, g[1]);
                                    this.addPaths(S, u)
                                }
                            }
                            d.shape.paths = u
                        }
                }
            }, TrimModifier.prototype.addPaths = function(t, e) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1) e.addShape(t[i])
            }, TrimModifier.prototype.addSegment = function(t, e, i, r, s, a, n) {
                s.setXYAt(e[0], e[1], "o", a), s.setXYAt(i[0], i[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(r[0], r[1], "v", a + 1)
            }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
                e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
            }, TrimModifier.prototype.addShapes = function(t, e, i) {
                var r, s, a, n, o, h, l, p, f = t.pathsData,
                    c = t.shape.paths.shapes,
                    m = t.shape.paths._length,
                    d = 0,
                    u = [],
                    g = !0;
                for (i ? (o = i._length, p = i._length) : (i = shape_pool.newElement(), o = 0, p = 0), u.push(i), r = 0; r < m; r += 1) {
                    for (h = f[r].lengths, i.c = c[r].c, a = c[r].c ? h.length : h.length + 1, s = 1; s < a; s += 1)
                        if (d + (n = h[s - 1]).addedLength < e.s) d += n.addedLength, i.c = !1;
                        else {
                            if (d > e.e) {
                                i.c = !1;
                                break
                            }
                            e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(c[r].v[s - 1], c[r].o[s - 1], c[r].i[s], c[r].v[s], i, o, g), g = !1) : (l = bez.getNewSegment(c[r].v[s - 1], c[r].v[s], c[r].o[s - 1], c[r].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1), d += n.addedLength, o += 1
                        }
                    if (c[r].c && h.length) {
                        if (n = h[s - 1], d <= e.e) {
                            var y = h[s - 1].addedLength;
                            e.s <= d && e.e >= d + y ? (this.addSegment(c[r].v[s - 1], c[r].o[s - 1], c[r].i[0], c[r].v[0], i, o, g), g = !1) : (l = bez.getNewSegment(c[r].v[s - 1], c[r].v[0], c[r].o[s - 1], c[r].i[0], (e.s - d) / y, (e.e - d) / y, h[s - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1)
                        } else i.c = !1;
                        d += n.addedLength, o += 1
                    }
                    if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
                    r < m - 1 && (i = shape_pool.newElement(), g = !0, u.push(i), o = 0)
                }
                return u
            }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
            }, RoundCornersModifier.prototype.processPath = function(t, e) {
                var i = shape_pool.newElement();
                i.c = t.c;
                var r, s, a, n, o, h, l, p, f, c, m, d, u, g = t._length,
                    y = 0;
                for (r = 0; r < g; r += 1) s = t.v[r], n = t.o[r], a = t.i[r], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== r && r !== g - 1 || t.c ? (o = 0 === r ? t.v[g - 1] : t.v[r - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, f = u = s[1] - (s[1] - o[1]) * l, c = p - (p - s[0]) * roundCorner, m = f - (f - s[1]) * roundCorner, i.setTripleAt(p, f, c, m, d, u, y), y += 1, o = r === g - 1 ? t.v[0] : t.v[r + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = s[0] + (o[0] - s[0]) * l, f = m = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, u = f - (f - s[1]) * roundCorner, i.setTripleAt(p, f, c, m, d, u, y), y += 1) : (i.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], y), y += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], y), y += 1);
                return i
            }, RoundCornersModifier.prototype.processShapes = function(t) {
                var e, i, r, s, a, n, o = this.shapes.length,
                    h = this.rd.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if ((a = this.shapes[i]).shape.paths, n = a.localShapeCollection, a.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1) n.addShape(this.processPath(e[r], h));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
            }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, s, a) {
                var n = a ? -1 : 1,
                    o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
                    h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
                t.translate(r.p.v[0] * n * s, r.p.v[1] * n * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * n * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(a ? 1 / o : o, a ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
            }, RepeaterModifier.prototype.init = function(t, e, i, r) {
                this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]);
                for (; i > 0;) i -= 1, this._elements.unshift(e[i]), 1;
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, RepeaterModifier.prototype.resetElements = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
            }, RepeaterModifier.prototype.cloneElements = function(t) {
                t.length;
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e), e
            }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
            }, RepeaterModifier.prototype.processShapes = function(t) {
                var e, i, r, s, a;
                if (this._mdf || t) {
                    var n, o = Math.ceil(this.c.v);
                    if (this._groups.length < o) {
                        for (; this._groups.length < o;) {
                            var h = {
                                it: this.cloneElements(this._elements),
                                ty: "gr"
                            };
                            h.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [0, 0]
                                },
                                nm: "Transform",
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [0, 0]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [{
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    }, {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [100, 100]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: "tr"
                            }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                        }
                        this.elem.reloadShapes()
                    }
                    for (a = 0, r = 0; r <= this._groups.length - 1; r += 1) n = a < o, this._groups[r]._render = n, this.changeGroupRender(this._groups[r].it, n), a += 1;
                    this._currentCopies = o;
                    var l = this.o.v,
                        p = l % 1,
                        f = l > 0 ? Math.floor(l) : Math.ceil(l),
                        c = (this.tr.v.props, this.pMatrix.props),
                        m = this.rMatrix.props,
                        d = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var u, g, y = 0;
                    if (l > 0) {
                        for (; y < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1;
                        p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), y += p)
                    } else if (l < 0) {
                        for (; y > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), y -= 1;
                        p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), y -= p)
                    }
                    for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                        if (g = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== y) {
                            for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), u = 0; u < g; u += 1) i[u] = this.matrix.props[u];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(), u = 0; u < g; u += 1) i[u] = this.matrix.props[u];
                        y += 1, a -= 1, r += s
                    }
                } else
                    for (a = this._currentCopies, r = 0, s = 1; a;) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, r += s
            }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
            }, ShapeCollection.prototype.releaseShapes = function() {
                var t;
                for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
                this._length = 0
            }, DashProperty.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                    var e = 0,
                        i = this.dataProps.length;
                    for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
            }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                for (var i = 0, r = this.o.length / 2; i < r;) {
                    if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                    i += 1
                }
                return !0
            }, GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                    for (var t = 0, e = this.data.k.k.length; t < e;) {
                        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                        t += 1
                    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0
            }, GradientProperty.prototype.getValue = function(t) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                    var e, i, r, s = 4 * this.data.p;
                    for (e = 0; e < s; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                    if (this.o.length)
                        for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
                    this._mdf = !t
                }
            }, extendPrototype([DynamicPropertyContainer], GradientProperty);
            var buildShapeString = function(t, e, i, r) {
                    if (0 === e) return "";
                    var s, a = t.o,
                        n = t.i,
                        o = t.v,
                        h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                    for (s = 1; s < e; s += 1) h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[s][0], n[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
                    return i && e && (h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                },
                ImagePreloader = function() {
                    var t = function() {
                        var t = createTag("canvas");
                        t.width = 1, t.height = 1;
                        var e = t.getContext("2d");
                        return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                    }();

                    function e() {
                        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function i(e) {
                        var i = function(t, e, i) {
                                var r = "";
                                if (t.e) r = t.p;
                                else if (e) {
                                    var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), r = e + s
                                } else r = i, r += t.u ? t.u : "", r += t.p;
                                return r
                            }(e, this.assetsPath, this.path),
                            r = createTag("img");
                        r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded.bind(this), !1), r.addEventListener("error", function() {
                            s.img = t, this._imageLoaded()
                        }.bind(this), !1), r.src = i;
                        var s = {
                            img: r,
                            assetData: e
                        };
                        return s
                    }

                    function r(t, e) {
                        this.imagesLoadedCb = e;
                        var i, r = t.length;
                        for (i = 0; i < r; i += 1) t[i].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[i])))
                    }

                    function s(t) {
                        this.path = t || ""
                    }

                    function a(t) {
                        this.assetsPath = t || ""
                    }

                    function n(t) {
                        for (var e = 0, i = this.images.length; e < i;) {
                            if (this.images[e].assetData === t) return this.images[e].img;
                            e += 1
                        }
                    }

                    function o() {
                        this.imagesLoadedCb = null, this.images.length = 0
                    }

                    function h() {
                        return this.totalImages === this.loadedAssets
                    }
                    return function() {
                        this.loadAssets = r, this.setAssetsPath = a, this.setPath = s, this.loaded = h, this.destroy = o, this.getImage = n, this._createImageData = i, this._imageLoaded = e, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
                    }
                }(),
                featureSupport = function() {
                    var t = {
                        maskType: !0
                    };
                    return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
                }(),
                filtersFactory = function() {
                    var t = {};
                    return t.createFilter = function(t) {
                        var e = createNS("filter");
                        return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
                    }, t.createAlphaToLuminanceFilter = function() {
                        var t = createNS("feColorMatrix");
                        return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                    }, t
                }(),
                assetLoader = function() {
                    function t(t) {
                        return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
                    }
                    return {
                        load: function(e, i, r) {
                            var s, a = new XMLHttpRequest;
                            a.open("GET", e, !0);
                            try {
                                a.responseType = "json"
                            } catch (t) {}
                            a.send(), a.onreadystatechange = function() {
                                if (4 == a.readyState)
                                    if (200 == a.status) s = t(a), i(s);
                                    else try {
                                        s = t(a), i(s)
                                    } catch (t) {
                                        r && r(t)
                                    }
                            }
                        }
                    }
                }();

            function TextAnimatorProperty(t, e, i) {
                this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                    alignment: {}
                }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
            }

            function TextAnimatorDataProperty(t, e, i) {
                var r = {
                        propType: !1
                    },
                    s = PropertyFactory.getProp,
                    a = e.a;
                this.a = {
                    r: a.r ? s(t, a.r, 0, degToRads, i) : r,
                    rx: a.rx ? s(t, a.rx, 0, degToRads, i) : r,
                    ry: a.ry ? s(t, a.ry, 0, degToRads, i) : r,
                    sk: a.sk ? s(t, a.sk, 0, degToRads, i) : r,
                    sa: a.sa ? s(t, a.sa, 0, degToRads, i) : r,
                    s: a.s ? s(t, a.s, 1, .01, i) : r,
                    a: a.a ? s(t, a.a, 1, 0, i) : r,
                    o: a.o ? s(t, a.o, 0, .01, i) : r,
                    p: a.p ? s(t, a.p, 1, 0, i) : r,
                    sw: a.sw ? s(t, a.sw, 0, 0, i) : r,
                    sc: a.sc ? s(t, a.sc, 1, 0, i) : r,
                    fc: a.fc ? s(t, a.fc, 1, 0, i) : r,
                    fh: a.fh ? s(t, a.fh, 0, 0, i) : r,
                    fs: a.fs ? s(t, a.fs, 0, .01, i) : r,
                    fb: a.fb ? s(t, a.fb, 0, .01, i) : r,
                    t: a.t ? s(t, a.t, 0, 0, i) : r
                }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
            }

            function LetterProps(t, e, i, r, s, a) {
                this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = a, this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!i,
                    fc: !!r,
                    m: !0,
                    p: !0
                }
            }

            function TextProperty(t, e) {
                this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
            }
            TextAnimatorProperty.prototype.searchProperties = function() {
                var t, e, i = this._textData.a.length,
                    r = PropertyFactory.getProp;
                for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = {
                    f: r(this._elem, this._textData.p.f, 0, 0, this),
                    l: r(this._elem, this._textData.p.l, 0, 0, this),
                    r: this._textData.p.r,
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
            }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var i, r, s, a, n, o, h, l, p, f, c, m, d, u, g, y, v, T, b, S = this._moreOptions.alignment.v,
                        P = this._animatorsData,
                        A = this._textData,
                        _ = this.mHelper,
                        M = this._renderType,
                        E = this.renderedLetters.length,
                        C = (this.data, t.l);
                    if (this._hasMaskedPath) {
                        if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                            var x, D = b.v;
                            for (this._pathData.r && (D = D.reverse()), n = {
                                    tLength: 0,
                                    segments: []
                                }, a = D._length - 1, y = 0, s = 0; s < a; s += 1) x = bez.buildBezierData(D.v[s], D.v[s + 1], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[s + 1][0] - D.v[s + 1][0], D.i[s + 1][1] - D.v[s + 1][1]]), n.tLength += x.segmentLength, n.segments.push(x), y += x.segmentLength;
                            s = a, b.v.c && (x = bez.buildBezierData(D.v[s], D.v[0], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), n.tLength += x.segmentLength, n.segments.push(x), y += x.segmentLength), this._pathData.pi = n
                        }
                        if (n = this._pathData.pi, o = this._pathData.f.v, c = 0, f = 1, l = 0, p = !0, u = n.segments, o < 0 && b.v.c)
                            for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), f = (d = u[c = u.length - 1].points).length - 1; o < 0;) o += d[f].partialLength, (f -= 1) < 0 && (f = (d = u[c -= 1].points).length - 1);
                        m = (d = u[c].points)[f - 1], g = (h = d[f]).partialLength
                    }
                    a = C.length, i = 0, r = 0;
                    var w, G, k, I, B = 1.2 * t.finalSize * .714,
                        F = !0;
                    k = P.length;
                    var V, H, R, L, O, N, z, X, W, K, U, j, q, Y = -1,
                        Q = o,
                        Z = c,
                        J = f,
                        $ = -1,
                        tt = "",
                        et = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                        var it = 0,
                            rt = 0,
                            st = 2 === t.j ? -.5 : -1,
                            at = 0,
                            nt = !0;
                        for (s = 0; s < a; s += 1)
                            if (C[s].n) {
                                for (it && (it += rt); at < s;) C[at].animatorJustifyOffset = it, at += 1;
                                it = 0, nt = !0
                            } else {
                                for (G = 0; G < k; G += 1)(w = P[G].a).t.propType && (nt && 2 === t.j && (rt += w.t.v * st), (V = P[G].s.getMult(C[s].anIndexes[G], A.a[G].s.totalChars)).length ? it += w.t.v * V[0] * st : it += w.t.v * V * st);
                                nt = !1
                            }
                        for (it && (it += rt); at < s;) C[at].animatorJustifyOffset = it, at += 1
                    }
                    for (s = 0; s < a; s += 1) {
                        if (_.reset(), O = 1, C[s].n) i = 0, r += t.yOffset, r += F ? 1 : 0, o = Q, F = !1, 0, this._hasMaskedPath && (f = J, m = (d = u[c = Z].points)[f - 1], g = (h = d[f]).partialLength, l = 0), q = K = j = tt = "", et = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if ($ !== C[s].line) {
                                    switch (t.j) {
                                        case 1:
                                            o += y - t.lineWidths[C[s].line];
                                            break;
                                        case 2:
                                            o += (y - t.lineWidths[C[s].line]) / 2
                                    }
                                    $ = C[s].line
                                }
                                Y !== C[s].ind && (C[Y] && (o += C[Y].extra), o += C[s].an / 2, Y = C[s].ind), o += S[0] * C[s].an / 200;
                                var ot = 0;
                                for (G = 0; G < k; G += 1)(w = P[G].a).p.propType && ((V = P[G].s.getMult(C[s].anIndexes[G], A.a[G].s.totalChars)).length ? ot += w.p.v[0] * V[0] : ot += w.p.v[0] * V), w.a.propType && ((V = P[G].s.getMult(C[s].anIndexes[G], A.a[G].s.totalChars)).length ? ot += w.a.v[0] * V[0] : ot += w.a.v[0] * V);
                                for (p = !0; p;) l + g >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, R = m.point[0] + (h.point[0] - m.point[0]) * v, L = m.point[1] + (h.point[1] - m.point[1]) * v, _.translate(-S[0] * C[s].an / 200, -S[1] * B / 100), p = !1) : d && (l += h.partialLength, (f += 1) >= d.length && (f = 0, u[c += 1] ? d = u[c].points : b.v.c ? (f = 0, d = u[c = 0].points) : (l -= h.partialLength, d = null)), d && (m = h, g = (h = d[f]).partialLength));
                                H = C[s].an / 2 - C[s].add, _.translate(-H, 0, 0)
                            } else H = C[s].an / 2 - C[s].add, _.translate(-H, 0, 0), _.translate(-S[0] * C[s].an / 200, -S[1] * B / 100, 0);
                            for (C[s].l / 2, G = 0; G < k; G += 1)(w = P[G].a).t.propType && (V = P[G].s.getMult(C[s].anIndexes[G], A.a[G].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? V.length ? o += w.t.v * V[0] : o += w.t.v * V : V.length ? i += w.t.v * V[0] : i += w.t.v * V));
                            for (C[s].l / 2, t.strokeWidthAnim && (z = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (X = [t.fc[0], t.fc[1], t.fc[2]]), G = 0; G < k; G += 1)(w = P[G].a).a.propType && ((V = P[G].s.getMult(C[s].anIndexes[G], A.a[G].s.totalChars)).length ? _.translate(-w.a.v[0] * V[0], -w.a.v[1] * V[1], w.a.v[2] * V[2]) : _.translate(-w.a.v[0] * V, -w.a.v[1] * V, w.a.v[2] * V));
                            for (G = 0; G < k; G += 1)(w = P[G].a).s.propType && ((V = P[G].s.getMult(C[s].anIndexes[G], A.a[G].s.totalChars)).length ? _.scale(1 + (w.s.v[0] - 1) * V[0], 1 + (w.s.v[1] - 1) * V[1], 1) : _.scale(1 + (w.s.v[0] - 1) * V, 1 + (w.s.v[1] - 1) * V, 1));
                            for (G = 0; G < k; G += 1) {
                                if (w = P[G].a, V = P[G].s.getMult(C[s].anIndexes[G], A.a[G].s.totalChars), w.sk.propType && (V.length ? _.skewFromAxis(-w.sk.v * V[0], w.sa.v * V[1]) : _.skewFromAxis(-w.sk.v * V, w.sa.v * V)), w.r.propType && (V.length ? _.rotateZ(-w.r.v * V[2]) : _.rotateZ(-w.r.v * V)), w.ry.propType && (V.length ? _.rotateY(w.ry.v * V[1]) : _.rotateY(w.ry.v * V)), w.rx.propType && (V.length ? _.rotateX(w.rx.v * V[0]) : _.rotateX(w.rx.v * V)), w.o.propType && (V.length ? O += (w.o.v * V[0] - O) * V[0] : O += (w.o.v * V - O) * V), t.strokeWidthAnim && w.sw.propType && (V.length ? z += w.sw.v * V[0] : z += w.sw.v * V), t.strokeColorAnim && w.sc.propType)
                                    for (W = 0; W < 3; W += 1) V.length ? N[W] = N[W] + (w.sc.v[W] - N[W]) * V[0] : N[W] = N[W] + (w.sc.v[W] - N[W]) * V;
                                if (t.fillColorAnim && t.fc) {
                                    if (w.fc.propType)
                                        for (W = 0; W < 3; W += 1) V.length ? X[W] = X[W] + (w.fc.v[W] - X[W]) * V[0] : X[W] = X[W] + (w.fc.v[W] - X[W]) * V;
                                    w.fh.propType && (X = V.length ? addHueToRGB(X, w.fh.v * V[0]) : addHueToRGB(X, w.fh.v * V)), w.fs.propType && (X = V.length ? addSaturationToRGB(X, w.fs.v * V[0]) : addSaturationToRGB(X, w.fs.v * V)), w.fb.propType && (X = V.length ? addBrightnessToRGB(X, w.fb.v * V[0]) : addBrightnessToRGB(X, w.fb.v * V))
                                }
                            }
                            for (G = 0; G < k; G += 1)(w = P[G].a).p.propType && (V = P[G].s.getMult(C[s].anIndexes[G], A.a[G].s.totalChars), this._hasMaskedPath ? V.length ? _.translate(0, w.p.v[1] * V[0], -w.p.v[2] * V[1]) : _.translate(0, w.p.v[1] * V, -w.p.v[2] * V) : V.length ? _.translate(w.p.v[0] * V[0], w.p.v[1] * V[1], -w.p.v[2] * V[2]) : _.translate(w.p.v[0] * V, w.p.v[1] * V, -w.p.v[2] * V));
                            if (t.strokeWidthAnim && (K = z < 0 ? 0 : z), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (j = "rgb(" + Math.round(255 * X[0]) + "," + Math.round(255 * X[1]) + "," + Math.round(255 * X[2]) + ")"), this._hasMaskedPath) {
                                if (_.translate(0, -t.ls), _.translate(0, S[1] * B / 100 + r, 0), A.p.p) {
                                    T = (h.point[1] - m.point[1]) / (h.point[0] - m.point[0]);
                                    var ht = 180 * Math.atan(T) / Math.PI;
                                    h.point[0] < m.point[0] && (ht += 180), _.rotate(-ht * Math.PI / 180)
                                }
                                _.translate(R, L, 0), o -= S[0] * C[s].an / 200, C[s + 1] && Y !== C[s + 1].ind && (o += C[s].an / 2, o += t.tr / 1e3 * t.finalSize)
                            } else {
                                switch (_.translate(i, r, 0), t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                    case 1:
                                        _.translate(C[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[s].line]), 0, 0);
                                        break;
                                    case 2:
                                        _.translate(C[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[s].line]) / 2, 0, 0)
                                }
                                _.translate(0, -t.ls), _.translate(H, 0, 0), _.translate(S[0] * C[s].an / 200, S[1] * B / 100, 0), i += C[s].l + t.tr / 1e3 * t.finalSize
                            }
                            "html" === M ? tt = _.toCSS() : "svg" === M ? tt = _.to2dCSS() : et = [_.props[0], _.props[1], _.props[2], _.props[3], _.props[4], _.props[5], _.props[6], _.props[7], _.props[8], _.props[9], _.props[10], _.props[11], _.props[12], _.props[13], _.props[14], _.props[15]], q = O
                        }
                        E <= s ? (I = new LetterProps(q, K, U, j, tt, et), this.renderedLetters.push(I), E += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[s], this.lettersChangedFlag = I.update(q, K, U, j, tt, et) || this.lettersChangedFlag)
                    }
                }
            }, TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
            }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, i, r, s, a) {
                this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                var n = !1;
                return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, n = !0), n
            }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }, TextProperty.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
            }, TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes()
            }, TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
            }, TextProperty.prototype.addEffect = function(t) {
                this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData,
                        i = this.keysIndex;
                    if (this.lock) this.setCurrentData(this.currentData);
                    else {
                        this.lock = !0, this._mdf = !1;
                        var r, s = this.effectsSequence.length,
                            a = t || this.data.d.k[this.keysIndex].s;
                        for (r = 0; r < s; r += 1) a = i !== this.keysIndex ? this.effectsSequence[r](a, a.t) : this.effectsSequence[r](this.currentData, a.t);
                        e !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }
            }, TextProperty.prototype.getKeyframeValue = function() {
                for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && (t[i].s, !(i === r - 1 || t[i + 1].t > e));) i += 1;
                return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
            }, TextProperty.prototype.buildFinalText = function(t) {
                for (var e, i = FontManager.getCombinedCharacterCodes(), r = [], s = 0, a = t.length; s < a;) e = t.charCodeAt(s), -1 !== i.indexOf(e) ? r[r.length - 1] += t.charAt(s) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(s + 1)) >= 56320 && e <= 57343 ? (r.push(t.substr(s, 2)), ++s) : r.push(t.charAt(s)), s += 1;
                return r
            }, TextProperty.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, i, r, s, a, n, o, h = this.elem.globalData.fontManager,
                    l = this.data,
                    p = [],
                    f = 0,
                    c = l.m.g,
                    m = 0,
                    d = 0,
                    u = 0,
                    g = [],
                    y = 0,
                    v = 0,
                    T = h.getFontByName(t.f),
                    b = 0,
                    S = T.fStyle ? T.fStyle.split(" ") : [],
                    P = "normal",
                    A = "normal";
                for (i = S.length, e = 0; e < i; e += 1) switch (S[e].toLowerCase()) {
                    case "italic":
                        A = "italic";
                        break;
                    case "bold":
                        P = "700";
                        break;
                    case "black":
                        P = "900";
                        break;
                    case "medium":
                        P = "500";
                        break;
                    case "regular":
                    case "normal":
                        P = "400";
                        break;
                    case "light":
                    case "thin":
                        P = "200"
                }
                t.fWeight = T.fWeight || P, t.fStyle = A, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                var _, M = t.tr / 1e3 * t.finalSize;
                if (t.sz)
                    for (var E, C, x = !0, D = t.sz[0], w = t.sz[1]; x;) {
                        E = 0, y = 0, i = (C = this.buildFinalText(t.t)).length, M = t.tr / 1e3 * t.finalSize;
                        var G = -1;
                        for (e = 0; e < i; e += 1) _ = C[e].charCodeAt(0), r = !1, " " === C[e] ? G = e : 13 !== _ && 3 !== _ || (y = 0, r = !0, E += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(C[e], T.fStyle, T.fFamily), b = r ? 0 : o.w * t.finalSize / 100) : b = h.measureText(C[e], t.f, t.finalSize), y + b > D && " " !== C[e] ? (-1 === G ? i += 1 : e = G, E += t.finalLineHeight || 1.2 * t.finalSize, C.splice(e, G === e ? 1 : 0, "\r"), G = -1, y = 0) : (y += b, y += M);
                        E += T.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && w < E ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = C, i = t.finalText.length, x = !1)
                    }
                y = -M, b = 0;
                var k, I = 0;
                for (e = 0; e < i; e += 1)
                    if (r = !1, 13 === (_ = (k = t.finalText[e]).charCodeAt(0)) || 3 === _ ? (I = 0, g.push(y), v = y > v ? y : v, y = -2 * M, s = "", r = !0, u += 1) : s = k, h.chars ? (o = h.getCharData(k, T.fStyle, h.getFontByName(t.f).fFamily), b = r ? 0 : o.w * t.finalSize / 100) : b = h.measureText(s, t.f, t.finalSize), " " === k ? I += b + M : (y += b + M + I, I = 0), p.push({
                            l: b,
                            an: b,
                            add: m,
                            n: r,
                            anIndexes: [],
                            val: s,
                            line: u,
                            animatorJustifyOffset: 0
                        }), 2 == c) {
                        if (m += b, "" === s || " " === s || e === i - 1) {
                            for ("" !== s && " " !== s || (m -= b); d <= e;) p[d].an = m, p[d].ind = f, p[d].extra = b, d += 1;
                            f += 1, m = 0
                        }
                    } else if (3 == c) {
                    if (m += b, "" === s || e === i - 1) {
                        for ("" === s && (m -= b); d <= e;) p[d].an = m, p[d].ind = f, p[d].extra = b, d += 1;
                        m = 0, f += 1
                    }
                } else p[f].ind = f, p[f].extra = 0, f += 1;
                if (t.l = p, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                else switch (t.boxWidth = v, t.j) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0
                }
                t.lineWidths = g;
                var B, F, V = l.a;
                n = V.length;
                var H, R, L = [];
                for (a = 0; a < n; a += 1) {
                    for ((B = V[a]).a.sc && (t.strokeColorAnim = !0), B.a.sw && (t.strokeWidthAnim = !0), (B.a.fc || B.a.fh || B.a.fs || B.a.fb) && (t.fillColorAnim = !0), R = 0, H = B.s.b, e = 0; e < i; e += 1)(F = p[e]).anIndexes[a] = R, (1 == H && "" !== F.val || 2 == H && "" !== F.val && " " !== F.val || 3 == H && (F.n || " " == F.val || e == i - 1) || 4 == H && (F.n || e == i - 1)) && (1 === B.s.rn && L.push(R), R += 1);
                    l.a[a].s.totalChars = R;
                    var O, N = -1;
                    if (1 === B.s.rn)
                        for (e = 0; e < i; e += 1) N != (F = p[e]).anIndexes[a] && (N = F.anIndexes[a], O = L.splice(Math.floor(Math.random() * L.length), 1)[0]), F.anIndexes[a] = O
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = T.ascent * t.finalSize / 100
            }, TextProperty.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var i = this.copyData({}, this.data.d.k[e].s);
                i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
            }, TextProperty.prototype.canResizeFont = function(t) {
                this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            };
            var TextSelectorProp = function() {
                    var t = Math.max,
                        e = Math.min,
                        i = Math.floor;

                    function r(t, e) {
                        this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                            k: 0
                        }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                            v: 100
                        }, this.o = PropertyFactory.getProp(t, e.o || {
                            k: 0
                        }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                            k: 0
                        }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                            k: 0
                        }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }
                    return r.prototype = {
                        getMult: function(r) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var s = 0,
                                a = 0,
                                n = 1,
                                o = 1;
                            this.ne.v > 0 ? s = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                            var h = BezierFactory.getBezierEasing(s, a, n, o).get,
                                l = 0,
                                p = this.finalS,
                                f = this.finalE,
                                c = this.data.sh;
                            if (2 === c) l = h(l = f === p ? r >= f ? 1 : 0 : t(0, e(.5 / (f - p) + (r - p) / (f - p), 1)));
                            else if (3 === c) l = h(l = f === p ? r >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (r - p) / (f - p), 1)));
                            else if (4 === c) f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (r - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                            else if (5 === c) {
                                if (f === p) l = 0;
                                else {
                                    var m = f - p,
                                        d = -m / 2 + (r = e(t(0, r + .5 - p), f - p)),
                                        u = m / 2;
                                    l = Math.sqrt(1 - d * d / (u * u))
                                }
                                l = h(l)
                            } else 6 === c ? (f === p ? l = 0 : (r = e(t(0, r + .5 - p), f - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (f - p))) / 2), l = h(l)) : (r >= i(p) && (l = t(0, e(r - p < 0 ? e(f, 1) - (p - r) : f - r, 1))), l = h(l));
                            return l * this.a.v
                        },
                        getValue: function(t) {
                            this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                i = this.o.v / e,
                                r = this.s.v / e + i,
                                s = this.e.v / e + i;
                            if (r > s) {
                                var a = r;
                                r = s, s = a
                            }
                            this.finalS = r, this.finalE = s
                        }
                    }, extendPrototype([DynamicPropertyContainer], r), {
                        getTextSelectorProp: function(t, e, i) {
                            return new r(t, e, i)
                        }
                    }
                }(),
                pool_factory = function(t, e, i, r) {
                    var s = 0,
                        a = t,
                        n = createSizedArray(a);

                    function o() {
                        return s ? n[s -= 1] : e()
                    }
                    return {
                        newElement: o,
                        release: function(t) {
                            s === a && (n = pooling.double(n), a *= 2), i && i(t), n[s] = t, s += 1
                        }
                    }
                },
                pooling = {
                    double: function(t) {
                        return t.concat(createSizedArray(t.length))
                    }
                },
                point_pool = pool_factory(8, (function() {
                    return createTypedArray("float32", 2)
                })),
                shape_pool = (factory = pool_factory(4, (function() {
                    return new ShapePath
                }), (function(t) {
                    var e, i = t._length;
                    for (e = 0; e < i; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                    t._length = 0, t.c = !1
                })), factory.clone = function(t) {
                    var e, i = factory.newElement(),
                        r = void 0 === t._length ? t.v.length : t._length;
                    for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                    return i
                }, factory),
                factory, shapeCollection_pool = function() {
                    var t = {
                            newShapeCollection: function() {
                                var t;
                                t = e ? r[e -= 1] : new ShapeCollection;
                                return t
                            },
                            release: function(t) {
                                var s, a = t._length;
                                for (s = 0; s < a; s += 1) shape_pool.release(t.shapes[s]);
                                t._length = 0, e === i && (r = pooling.double(r), i *= 2);
                                r[e] = t, e += 1
                            }
                        },
                        e = 0,
                        i = 4,
                        r = createSizedArray(i);
                    return t
                }(),
                segments_length_pool = pool_factory(8, (function() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }), (function(t) {
                    var e, i = t.lengths.length;
                    for (e = 0; e < i; e += 1) bezier_length_pool.release(t.lengths[e]);
                    t.lengths.length = 0
                })),
                bezier_length_pool = pool_factory(8, (function() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", defaultCurveSegments),
                        lengths: createTypedArray("float32", defaultCurveSegments)
                    }
                }));

            function BaseRenderer() {}

            function SVGRenderer(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                var i = "";
                if (e && e.title) {
                    var r = createNS("title"),
                        s = createElementID();
                    r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s
                }
                if (e && e.description) {
                    var a = createNS("desc"),
                        n = createElementID();
                    a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), i += " " + n
                }
                i && this.svgElement.setAttribute("aria-labelledby", i);
                var o = createNS("defs");
                this.svgElement.appendChild(o);
                var h = createNS("g");
                this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    progressiveLoad: e && e.progressiveLoad || !1,
                    hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                    viewBoxOnly: e && e.viewBoxOnly || !1,
                    viewBoxSize: e && e.viewBoxSize || !1,
                    className: e && e.className || "",
                    id: e && e.id || "",
                    focusable: e && e.focusable,
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "100%",
                        height: e && e.filterSize && e.filterSize.height || "100%",
                        x: e && e.filterSize && e.filterSize.x || "0%",
                        y: e && e.filterSize && e.filterSize.y || "0%"
                    }
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
            }

            function CanvasRenderer(t, e) {
                this.animationItem = t, this.renderConfig = {
                    clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                    context: e && e.context || null,
                    progressiveLoad: e && e.progressiveLoad || !1,
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    className: e && e.className || "",
                    id: e && e.id || ""
                }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
            }

            function HybridRenderer(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "400%",
                        height: e && e.filterSize && e.filterSize.height || "400%",
                        x: e && e.filterSize && e.filterSize.x || "-100%",
                        y: e && e.filterSize && e.filterSize.y || "-100%"
                    }
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
            }

            function MaskElement(t, e, i) {
                this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                var r, s = this.globalData.defs,
                    a = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(a), this.solidPath = "";
                var n, o, h, l, p, f, c, m = this.masksProperties,
                    d = 0,
                    u = [],
                    g = createElementID(),
                    y = "clipPath",
                    v = "clip-path";
                for (r = 0; r < a; r++)
                    if (("a" !== m[r].mode && "n" !== m[r].mode || m[r].inv || 100 !== m[r].o.k || m[r].o.x) && (y = "mask", v = "mask"), "s" != m[r].mode && "i" != m[r].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), n = createNS("path"), "n" != m[r].mode) {
                        var T;
                        if (d += 1, n.setAttribute("fill", "s" === m[r].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== m[r].x.k ? (y = "mask", v = "mask", c = PropertyFactory.getProp(this.element, m[r].x, 0, null, this.element), T = createElementID(), (p = createNS("filter")).setAttribute("id", T), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), s.appendChild(p), n.setAttribute("stroke", "s" === m[r].mode ? "#000000" : "#ffffff")) : (f = null, c = null), this.storedData[r] = {
                                elem: n,
                                x: c,
                                expan: f,
                                lastPath: "",
                                lastOperator: "",
                                filterId: T,
                                lastRadius: 0
                            }, "i" == m[r].mode) {
                            h = u.length;
                            var b = createNS("g");
                            for (o = 0; o < h; o += 1) b.appendChild(u[o]);
                            var S = createNS("mask");
                            S.setAttribute("mask-type", "alpha"), S.setAttribute("id", g + "_" + d), S.appendChild(n), s.appendChild(S), b.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + d + ")"), u.length = 0, u.push(b)
                        } else u.push(n);
                        m[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                            elem: n,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, m[r].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, m[r], 3),
                            invRect: l
                        }, this.viewData[r].prop.k || this.drawPath(m[r], this.viewData[r].prop.v, this.viewData[r])
                    } else this.viewData[r] = {
                        op: PropertyFactory.getProp(this.element, m[r].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, m[r], 3),
                        elem: n,
                        lastPath: ""
                    }, s.appendChild(n);
                for (this.maskElement = createNS(y), a = u.length, r = 0; r < a; r += 1) this.maskElement.appendChild(u[r]);
                d > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
            }

            function HierarchyElement() {}

            function FrameElement() {}

            function TransformElement() {}

            function RenderableElement() {}

            function RenderableDOMElement() {}

            function ProcessedElement(t, e) {
                this.elem = t, this.pos = e
            }

            function SVGStyleData(t, e) {
                this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
            }

            function SVGShapeData(t, e, i) {
                this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                for (var r = 0, s = t.length; r < s;) {
                    if (t[r].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    r += 1
                }
            }

            function SVGTransformData(t, e, i) {
                this.transform = {
                    mProps: t,
                    op: e,
                    container: i
                }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }

            function SVGStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
            }

            function SVGFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
            }

            function SVGGradientFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
            }

            function SVGGradientStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
            }

            function ShapeGroupData() {
                this.it = [], this.prevViewData = [], this.gr = createNS("g")
            }
            BaseRenderer.prototype.checkLayers = function(t) {
                var e, i, r = this.layers.length;
                for (this.completeLayers = !0, e = r - 1; e >= 0; e--) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
            }, BaseRenderer.prototype.createItem = function(t) {
                switch (t.ty) {
                    case 2:
                        return this.createImage(t);
                    case 0:
                        return this.createComp(t);
                    case 1:
                        return this.createSolid(t);
                    case 3:
                        return this.createNull(t);
                    case 4:
                        return this.createShape(t);
                    case 5:
                        return this.createText(t);
                    case 13:
                        return this.createCamera(t)
                }
                return this.createNull(t)
            }, BaseRenderer.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
            }, BaseRenderer.prototype.buildAllItems = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.buildItem(t);
                this.checkPendingElements()
            }, BaseRenderer.prototype.includeLayers = function(t) {
                this.completeLayers = !1;
                var e, i, r = t.length,
                    s = this.layers.length;
                for (e = 0; e < r; e += 1)
                    for (i = 0; i < s;) {
                        if (this.layers[i].id == t[e].id) {
                            this.layers[i] = t[e];
                            break
                        }
                        i += 1
                    }
            }, BaseRenderer.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t
            }, BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
                for (var r = this.elements, s = this.layers, a = 0, n = s.length; a < n;) s[a].ind == e && (r[a] && !0 !== r[a] ? (i.push(r[a]), r[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
            }, BaseRenderer.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t)
            }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var r = this.createComp(t[e]);
                        r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                    }
            }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                    w: t.w,
                    h: t.h
                }
            }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
                return new NullElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createShape = function(t) {
                return new SVGShapeElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createText = function(t) {
                return new SVGTextElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createImage = function(t) {
                return new IImageElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createComp = function(t) {
                return new SVGCompElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createSolid = function(t) {
                return new ISolidElement(t, this.globalData, this)
            }, SVGRenderer.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                var i = createNS("clipPath"),
                    r = createNS("rect");
                r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
                var s = createElementID();
                i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
            }, SVGRenderer.prototype.destroy = function() {
                this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
                var t, e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 != this.layers[t].ty) {
                    e[t] = !0;
                    var i = this.createItem(this.layers[t]);
                    e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)))
                }
            }, SVGRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(), t.data.tt)
                        for (var e = 0, i = this.elements.length; e < i;) {
                            if (this.elements[e] === t) {
                                t.setMatte(this.elements[e - 1].layerId);
                                break
                            }
                            e += 1
                        }
                }
            }, SVGRenderer.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                    var e, i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                        for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
            }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    for (var r, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
                    r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
                }
            }, SVGRenderer.prototype.hide = function() {
                this.layerElement.style.display = "none"
            }, SVGRenderer.prototype.show = function() {
                this.layerElement.style.display = "block"
            }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
                return new CVShapeElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createText = function(t) {
                return new CVTextElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createImage = function(t) {
                return new CVImageElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createComp = function(t) {
                return new CVCompElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createSolid = function(t) {
                return new CVSolidElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                    if (this.renderConfig.clearCanvas) {
                        this.transformMat.cloneFromProps(t);
                        var e = this.contextData.cTr.props;
                        this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                        var i = this.contextData.cTr.props;
                        this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                    } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
            }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
            }, CanvasRenderer.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
            }, CanvasRenderer.prototype.save = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && this.canvasContext.save();
                    var e = this.contextData.cTr.props;
                    this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                    var i, r = this.contextData.saved[this.contextData.cArrPos];
                    for (i = 0; i < 16; i += 1) r[i] = e[i];
                    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                } else this.canvasContext.save()
            }, CanvasRenderer.prototype.restore = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                    var e, i = this.contextData.saved[this.contextData.cArrPos],
                        r = this.contextData.cTr.props;
                    for (e = 0; e < 16; e += 1) r[e] = i[e];
                    this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
                } else this.canvasContext.restore()
            }, CanvasRenderer.prototype.configAnimation = function(t) {
                this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = {
                    w: t.w,
                    h: t.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0
                }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
            }, CanvasRenderer.prototype.updateContainerSize = function() {
                var t, e, i, r;
                if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                    var s = this.renderConfig.preserveAspectRatio.split(" "),
                        a = s[1] || "meet",
                        n = s[0] || "xMidYMid",
                        o = n.substr(0, 4),
                        h = n.substr(4);
                    i = t / e, (r = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === a || r < i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < i && "meet" === a || r > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < i && "meet" === a || r > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r > i && "meet" === a || r < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r > i && "meet" === a || r < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
            }, CanvasRenderer.prototype.destroy = function() {
                var t;
                for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
            }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                    this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                    var i, r = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), i = 0; i < r; i++)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                    if (this.globalData._mdf) {
                        for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                        !0 !== this.renderConfig.clearCanvas && this.restore()
                    }
                }
            }, CanvasRenderer.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 != this.layers[t].ty) {
                    var i = this.createItem(this.layers[t], this, this.globalData);
                    e[t] = i, i.initExpressions()
                }
            }, CanvasRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    this.pendingElements.pop().checkParenting()
                }
            }, CanvasRenderer.prototype.hide = function() {
                this.animationItem.container.style.display = "none"
            }, CanvasRenderer.prototype.show = function() {
                this.animationItem.container.style.display = "block"
            }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    this.pendingElements.pop().checkParenting()
                }
            }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    var r = this.layers[e];
                    if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
                    else if (this.threeDElements) this.addTo3dContainer(i, e);
                    else {
                        for (var s, a, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
                        s ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, s) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
                    }
                }
            }, HybridRenderer.prototype.createShape = function(t) {
                return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createText = function(t) {
                return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createCamera = function(t) {
                return this.camera = new HCameraElement(t, this.globalData, this), this.camera
            }, HybridRenderer.prototype.createImage = function(t) {
                return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createSolid = function(t) {
                return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                for (var e = 0, i = this.threeDElements.length; e < i;) {
                    if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                    e += 1
                }
            }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                var i = createTag("div");
                styleDiv(i);
                var r = createTag("div");
                styleDiv(r), "3d" === e && (i.style.width = this.globalData.compSize.w + "px", i.style.height = this.globalData.compSize.h + "px", i.style.transformOrigin = i.style.mozTransformOrigin = i.style.webkitTransformOrigin = "50% 50%", r.style.transform = r.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), i.appendChild(r);
                var s = {
                    container: r,
                    perspectiveElem: i,
                    startPos: t,
                    endPos: t,
                    type: e
                };
                return this.threeDElements.push(s), s
            }, HybridRenderer.prototype.build3dContainers = function() {
                var t, e, i = this.layers.length,
                    r = "";
                for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                for (t = (i = this.threeDElements.length) - 1; t >= 0; t--) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
            }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                for (var i = 0, r = this.threeDElements.length; i < r;) {
                    if (e <= this.threeDElements[i].endPos) {
                        for (var s, a = this.threeDElements[i].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
                        s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
                        break
                    }
                    i += 1
                }
            }, HybridRenderer.prototype.configAnimation = function(t) {
                var e = createTag("div"),
                    i = this.animationItem.wrapper;
                e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), e.style.overflow = "hidden";
                var r = createNS("svg");
                r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
                var s = createNS("defs");
                r.appendChild(s), this.data = t, this.setupGlobalData(t, r), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
            }, HybridRenderer.prototype.destroy = function() {
                this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
                var t, e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t++) this.elements[t].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, HybridRenderer.prototype.updateContainerSize = function() {
                var t, e, i, r, s = this.animationItem.wrapper.offsetWidth,
                    a = this.animationItem.wrapper.offsetHeight,
                    n = s / a;
                this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, i = 0, r = (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, i = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, r = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)"
            }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
                this.resizerElem.style.display = "none"
            }, HybridRenderer.prototype.show = function() {
                this.resizerElem.style.display = "block"
            }, HybridRenderer.prototype.initItems = function() {
                if (this.buildAllItems(), this.camera) this.camera.setup();
                else {
                    var t, e = this.globalData.compSize.w,
                        i = this.globalData.compSize.h,
                        r = this.threeDElements.length;
                    for (t = 0; t < r; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px"
                }
            }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
                var e, i = t.length,
                    r = createTag("div");
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var s = this.createComp(t[e], r, this.globalData.comp, null);
                        s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                    }
            }, MaskElement.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop
            }, MaskElement.prototype.renderFrame = function(t) {
                var e, i = this.element.finalTransform.mat,
                    r = this.masksProperties.length;
                for (e = 0; e < r; e++)
                    if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                        var s = this.storedData[e].expan;
                        this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                    }
            }, MaskElement.prototype.getMaskelement = function() {
                return this.maskElement
            }, MaskElement.prototype.createLayerSolidPath = function() {
                var t = "M0,0 ";
                return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
            }, MaskElement.prototype.drawPath = function(t, e, i) {
                var r, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
                for (s = e._length, r = 1; r < s; r += 1) a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
                if (e.c && s > 1 && (a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== a) {
                    var n = "";
                    i.elem && (e.c && (n = t.inv ? this.solidPath + a : a), i.elem.setAttribute("d", n)), i.lastPath = a
                }
            }, MaskElement.prototype.destroy = function() {
                this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
            }, HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [], this._isParent = !1, this.checkParenting()
                },
                setHierarchy: function(t) {
                    this.hierarchy = t
                },
                setAsParent: function() {
                    this._isParent = !0
                },
                checkParenting: function() {
                    void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                }
            }, FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                },
                prepareProperties: function(t, e) {
                    var i, r = this.dynamicProperties.length;
                    for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                },
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                }
            }, TransformElement.prototype = {
                initTransform: function() {
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _opMdf: !1,
                        mat: new Matrix
                    }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                        var t, e = this.finalTransform.mat,
                            i = 0,
                            r = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; i < r;) {
                                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                i += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var i = !0, r = this.comp; i;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : i = !1;
                    var s, a, n = e.length;
                    for (s = 0; s < n; s += 1) a = e[s].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
                    return t
                },
                mHelper: new Matrix
            }, RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                },
                addRenderableComponent: function(t) {
                    -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                },
                removeRenderableComponent: function(t) {
                    -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                },
                prepareRenderableFrame: function(t) {
                    this.checkLayerLimits(t)
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                },
                checkLayerLimits: function(t) {
                    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                },
                renderRenderable: function() {
                    var t, e = this.renderableComponents.length;
                    for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    }
                },
                getLayerSize: function() {
                    return 5 === this.data.ty ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    }
                }
            }, extendPrototype([RenderableElement, createProxyFunction({
                initElement: function(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement()
                }
            })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
                this.d = "", this._mdf = !1
            }, SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                    k: 0
                }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                    k: 0
                }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
            }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                var i = createElementID(),
                    r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
                var s, a, n, o = [];
                for (n = 4 * e.g.p, a = 0; a < n; a += 4) s = createNS("stop"), r.appendChild(s), o.push(s);
                t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = r, this.cst = o
            }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var i, r, s, a = createNS("mask"),
                        n = createNS("path");
                    a.appendChild(n);
                    var o = createElementID(),
                        h = createElementID();
                    a.setAttribute("id", h);
                    var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                    l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                    var p = this.stops;
                    for (r = 4 * t.g.p; r < s; r += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
                    n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n
                }
            }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var SVGElementsRenderer = function() {
                var t = new Matrix,
                    e = new Matrix;

                function i(t, e, i) {
                    (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                }

                function r(i, r, s) {
                    var a, n, o, h, l, p, f, c, m, d, u, g = r.styles.length,
                        y = r.lvl;
                    for (p = 0; p < g; p += 1) {
                        if (h = r.sh._mdf || s, r.styles[p].lvl < y) {
                            for (c = e.reset(), d = y - r.styles[p].lvl, u = r.transformers.length - 1; !h && d > 0;) h = r.transformers[u].mProps._mdf || h, d--, u--;
                            if (h)
                                for (d = y - r.styles[p].lvl, u = r.transformers.length - 1; d > 0;) m = r.transformers[u].mProps.v.props, c.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), d--, u--
                        } else c = t;
                        if (n = (f = r.sh.paths)._length, h) {
                            for (o = "", a = 0; a < n; a += 1)(l = f.shapes[a]) && l._length && (o += buildShapeString(l, l._length, l.c, c));
                            r.caches[p] = o
                        } else o = r.caches[p];
                        r.styles[p].d += !0 === i.hd ? "" : o, r.styles[p]._mdf = h || r.styles[p]._mdf
                    }
                }

                function s(t, e, i) {
                    var r = e.style;
                    (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
                }

                function a(t, e, i) {
                    n(t, e, i), o(t, e, i)
                }

                function n(t, e, i) {
                    var r, s, a, n, o, h = e.gf,
                        l = e.g._hasOpacity,
                        p = e.s.v,
                        f = e.e.v;
                    if (e.o._mdf || i) {
                        var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                        e.style.pElem.setAttribute(c, e.o.v)
                    }
                    if (e.s._mdf || i) {
                        var m = 1 === t.t ? "x1" : "cx",
                            d = "x1" === m ? "y1" : "cy";
                        h.setAttribute(m, p[0]), h.setAttribute(d, p[1]), l && !e.g._collapsable && (e.of.setAttribute(m, p[0]), e.of.setAttribute(d, p[1]))
                    }
                    if (e.g._cmdf || i) {
                        r = e.cst;
                        var u = e.g.c;
                        for (a = r.length, s = 0; s < a; s += 1)(n = r[s]).setAttribute("offset", u[4 * s] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * s + 1] + "," + u[4 * s + 2] + "," + u[4 * s + 3] + ")")
                    }
                    if (l && (e.g._omdf || i)) {
                        var g = e.g.o;
                        for (a = (r = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < a; s += 1) n = r[s], e.g._collapsable || n.setAttribute("offset", g[2 * s] + "%"), n.setAttribute("stop-opacity", g[2 * s + 1])
                    }
                    if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", f[0]), h.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                    else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                        o || (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                        var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
                            v = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                            T = Math.cos(y + e.a.v) * v + p[0],
                            b = Math.sin(y + e.a.v) * v + p[1];
                        h.setAttribute("fx", T), h.setAttribute("fy", b), l && !e.g._collapsable && (e.of.setAttribute("fx", T), e.of.setAttribute("fy", b))
                    }
                }

                function o(t, e, i) {
                    var r = e.style,
                        s = e.d;
                    s && (s._mdf || i) && s.dashStr && (r.pElem.setAttribute("stroke-dasharray", s.dashStr), r.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
                }
                return {
                    createRenderFunction: function(t) {
                        t.ty;
                        switch (t.ty) {
                            case "fl":
                                return s;
                            case "gf":
                                return n;
                            case "gs":
                                return a;
                            case "st":
                                return o;
                            case "sh":
                            case "el":
                            case "rc":
                            case "sr":
                                return r;
                            case "tr":
                                return i
                        }
                    }
                }
            }();

            function ShapeTransformManager() {
                this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
            }

            function CVShapeData(t, e, i, r) {
                this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                var s = 4;
                "rc" == e.ty ? s = 5 : "el" == e.ty ? s = 6 : "sr" == e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
                var a, n, o = i.length;
                for (a = 0; a < o; a += 1) i[a].closed || (n = {
                    transforms: r.addTransformSequence(i[a].transforms),
                    trNodes: []
                }, this.styledShapes.push(n), i[a].elements.push(n))
            }

            function BaseElement() {}

            function NullElement(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
            }

            function SVGBaseElement() {}

            function IShapeElement() {}

            function ITextElement() {}

            function ICompElement() {}

            function IImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }

            function ISolidElement(t, e, i) {
                this.initElement(t, e, i)
            }

            function SVGCompElement(t, e, i) {
                this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function SVGTextElement(t, e, i) {
                this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
            }

            function SVGShapeElement(t, e, i) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
            }

            function SVGTintFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                    var r, s = createNS("feMerge");
                    t.appendChild(s), (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s.appendChild(r), (r = createNS("feMergeNode")).setAttribute("in", "f2"), s.appendChild(r)
                }
            }

            function SVGFillFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
            }

            function SVGGaussianBlurEffect(t, e) {
                t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                var i = createNS("feGaussianBlur");
                t.appendChild(i), this.feGaussianBlur = i
            }

            function SVGStrokeEffect(t, e) {
                this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
            }

            function SVGTritoneFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
                var r = createNS("feComponentTransfer");
                r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
                var s = createNS("feFuncR");
                s.setAttribute("type", "table"), r.appendChild(s), this.feFuncR = s;
                var a = createNS("feFuncG");
                a.setAttribute("type", "table"), r.appendChild(a), this.feFuncG = a;
                var n = createNS("feFuncB");
                n.setAttribute("type", "table"), r.appendChild(n), this.feFuncB = n
            }

            function SVGProLevelsFilter(t, e) {
                this.filterManager = e;
                var i = this.filterManager.effectElements,
                    r = createNS("feComponentTransfer");
                (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r))
            }

            function SVGDropShadowEffect(t, e) {
                var i = e.container.globalData.renderConfig.filterSize;
                t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
                var r = createNS("feGaussianBlur");
                r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
                var s = createNS("feOffset");
                s.setAttribute("dx", "25"), s.setAttribute("dy", "0"), s.setAttribute("in", "drop_shadow_1"), s.setAttribute("result", "drop_shadow_2"), this.feOffset = s, t.appendChild(s);
                var a = createNS("feFlood");
                a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
                var n = createNS("feComposite");
                n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
                var o, h = createNS("feMerge");
                t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o)
            }
            ShapeTransformManager.prototype = {
                addTransformSequence: function(t) {
                    var e, i = t.length,
                        r = "_";
                    for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
                    var s = this.sequences[r];
                    return s || (s = {
                        transforms: [].concat(t),
                        finalTransform: new Matrix,
                        _mdf: !1
                    }, this.sequences[r] = s, this.sequenceList.push(s)), s
                },
                processSequence: function(t, e) {
                    for (var i, r = 0, s = t.transforms.length, a = e; r < s && !e;) {
                        if (t.transforms[r].transform.mProps._mdf) {
                            a = !0;
                            break
                        }
                        r += 1
                    }
                    if (a)
                        for (t.finalTransform.reset(), r = s - 1; r >= 0; r -= 1) i = t.transforms[r].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                    t._mdf = a
                },
                processSequences: function(t) {
                    var e, i = this.sequenceList.length;
                    for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
                },
                getNewKey: function() {
                    return "_" + this.transform_key_count++
                }
            }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask) return !1;
                    for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                        t += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                },
                setBlendMode: function() {
                    var t = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, i) {
                    this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            }, NullElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                return null
            }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g")
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                    var t, e, i, r = null;
                    if (this.data.td) {
                        if (3 == this.data.td || 1 == this.data.td) {
                            var s = createNS("mask");
                            s.setAttribute("id", this.layerId), s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s.appendChild(this.layerElement), r = s, this.globalData.defs.appendChild(s), featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), r = i, s.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                        } else if (2 == this.data.td) {
                            var a = createNS("mask");
                            a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                            var n = createNS("g");
                            a.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
                            var o = createNS("feComponentTransfer");
                            o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                            var h = createNS("feFuncA");
                            h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
                            var l = createNS("rect");
                            l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), r = n, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), n.appendChild(l), i.appendChild(this.layerElement), r = i, n.appendChild(i)), this.globalData.defs.appendChild(a)
                        }
                    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                        var p = createNS("clipPath"),
                            f = createNS("path");
                        f.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var c = createElementID();
                        if (p.setAttribute("id", c), p.appendChild(f), this.globalData.defs.appendChild(p), this.checkMasks()) {
                            var m = createNS("g");
                            m.setAttribute("clip-path", "url(" + locationHref + "#" + c + ")"), m.appendChild(this.layerElement), this.transformedElement = m, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + c + ")")
                    }
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                },
                destroyBaseElement: function() {
                    this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                },
                setMatte: function(t) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                }
            }, IShapeElement.prototype = {
                addShapeToModifiers: function(t) {
                    var e, i = this.shapeModifiers.length;
                    for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                },
                isShapeInAnimatedModifiers: function(t) {
                    for (var e = this.shapeModifiers.length; 0 < e;)
                        if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var t, e = this.shapes.length;
                        for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                        for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame)
                    }
                },
                lcEnum: {
                    1: "butt",
                    2: "round",
                    3: "square"
                },
                ljEnum: {
                    1: "miter",
                    2: "round",
                    3: "bevel"
                },
                searchProcessedElement: function(t) {
                    for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
                        if (e[i].elem === t) return e[i].pos;
                        i += 1
                    }
                    return 0
                },
                addProcessedElement: function(t, e) {
                    for (var i = this.processedElements, r = i.length; r;)
                        if (i[r -= 1].elem === t) return void(i[r].pos = e);
                    i.push(new ProcessedElement(t, e))
                },
                prepareFrame: function(t) {
                    this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                }
            }, ITextElement.prototype.initElement = function(t, e, i) {
                this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
            }, ITextElement.prototype.prepareFrame = function(t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
            }, ITextElement.prototype.createPathShape = function(t, e) {
                var i, r, s = e.length,
                    a = "";
                for (i = 0; i < s; i += 1) r = e[i].ks.k, a += buildShapeString(r, r.i.length, !0, t);
                return a
            }, ITextElement.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e)
            }, ITextElement.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t)
            }, ITextElement.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t)
            }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, s) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                    case 1:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                        break;
                    case 2:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                }
                e.translate(r, s, 0)
            }, ITextElement.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
            }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
            }, ICompElement.prototype.prepareFrame = function(t) {
                if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                    if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                    }
                    var i, r = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                }
            }, ICompElement.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }, ICompElement.prototype.setElements = function(t) {
                this.elements = t
            }, ICompElement.prototype.getElements = function() {
                return this.elements
            }, ICompElement.prototype.destroyElements = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
            }, ICompElement.prototype.destroy = function() {
                this.destroyElements(), this.destroyBaseElement()
            }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
            }, IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
            }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
            }, SVGTextElement.prototype.buildTextContents = function(t) {
                for (var e = 0, i = t.length, r = [], s = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
                return r.push(s), r
            }, SVGTextElement.prototype.buildNewText = function() {
                var t, e, i = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                var r = this.globalData.fontManager.getFontByName(i.f);
                if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
                else {
                    this.layerElement.setAttribute("font-family", r.fFamily);
                    var s = i.fWeight,
                        a = i.fStyle;
                    this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s)
                }
                this.layerElement.setAttribute("aria-label", i.t);
                var n, o = i.l || [],
                    h = !!this.globalData.fontManager.chars;
                e = o.length;
                var l, p = this.mHelper,
                    f = "",
                    c = this.data.singleShape,
                    m = 0,
                    d = 0,
                    u = !0,
                    g = i.tr / 1e3 * i.finalSize;
                if (!c || h || i.sz) {
                    var y, v, T = this.textSpans.length;
                    for (t = 0; t < e; t += 1) h && c && 0 !== t || (n = T > t ? this.textSpans[t] : createNS(h ? "path" : "text"), T <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(i.finalSize / 100, i.finalSize / 100), c && (o[t].n && (m = -g, d += i.yOffset, d += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(i, p, o[t].line, m, d), m += o[t].l || 0, m += g), h ? (l = (y = (v = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], c ? f += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (c && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                    c && n && n.setAttribute("d", f)
                } else {
                    var b = this.textContainer,
                        S = "start";
                    switch (i.j) {
                        case 1:
                            S = "end";
                            break;
                        case 2:
                            S = "middle"
                    }
                    b.setAttribute("text-anchor", S), b.setAttribute("letter-spacing", g);
                    var P = this.buildTextContents(i.finalText);
                    for (e = P.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || createNS("tspan")).textContent = P[t], n.setAttribute("x", 0), n.setAttribute("y", d), n.style.display = "inherit", b.appendChild(n), this.textSpans[t] = n, d += i.finalLineHeight;
                    this.layerElement.appendChild(b)
                }
                for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
                this._sizeChanged = !0
            }, SVGTextElement.prototype.sourceRectAtTime = function(t) {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                    this._sizeChanged = !1;
                    var e = this.layerElement.getBBox();
                    this.bbox = {
                        top: e.y,
                        left: e.x,
                        width: e.width,
                        height: e.height
                    }
                }
                return this.bbox
            }, SVGTextElement.prototype.renderInnerContent = function() {
                if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var t, e;
                    this._sizeChanged = !0;
                    var i, r, s = this.textAnimator.renderedLetters,
                        a = this.textProperty.currentData.l;
                    for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = s[t], r = this.textSpans[t], i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
                }
            }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
            }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                var t, e, i, r, s = this.shapes.length,
                    a = this.stylesList.length,
                    n = [],
                    o = !1;
                for (i = 0; i < a; i += 1) {
                    for (r = this.stylesList[i], o = !1, n.length = 0, t = 0; t < s; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (n.push(e), o = e._isAnimated || o);
                    n.length > 1 && o && this.setShapesAsAnimated(n)
                }
            }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) t[e].setAsAnimated()
            }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                var i, r = new SVGStyleData(t, e),
                    s = r.pElem;
                if ("st" === t.ty) i = new SVGStrokeStyleData(this, t, r);
                else if ("fl" === t.ty) i = new SVGFillStyleData(this, t, r);
                else if ("gf" === t.ty || "gs" === t.ty) {
                    i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))
                }
                return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), s.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
            }, SVGShapeElement.prototype.createGroupElement = function(t) {
                var e = new ShapeGroupData;
                return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
            }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                    r = new SVGTransformData(i, i.o, e);
                return this.addToAnimatedContents(t, r), r
            }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                var r = 4;
                "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
                var s = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
                return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s
            }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                for (var i = 0, r = this.animatedContents.length; i < r;) {
                    if (this.animatedContents[i].element === e) return;
                    i += 1
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(t),
                    element: e,
                    data: t
                })
            }, SVGShapeElement.prototype.setElementStyles = function(t) {
                var e, i = t.styles,
                    r = this.stylesList.length;
                for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
            }, SVGShapeElement.prototype.reloadShapes = function() {
                this._isFirstFrame = !0;
                var t, e = this.itemsData.length;
                for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                this.renderModifiers()
            }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, s, a, n) {
                var o, h, l, p, f, c, m = [].concat(a),
                    d = t.length - 1,
                    u = [],
                    g = [];
                for (o = d; o >= 0; o -= 1) {
                    if ((c = this.searchProcessedElement(t[o])) ? e[o] = i[c - 1] : t[o]._render = n, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && r.appendChild(e[o].style.pElem), u.push(e[o].style);
                    else if ("gr" == t[o].ty) {
                        if (c)
                            for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                        else e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, m, n), t[o]._render && r.appendChild(e[o].gr)
                    } else "tr" == t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, m.push(p)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], m, s)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (c ? (f = e[o]).closed = !1 : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" == t[o].ty && (c ? (f = e[o]).closed = !0 : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = !1), g.push(f));
                    this.addProcessedElement(t[o], o + 1)
                }
                for (d = u.length, o = 0; o < d; o += 1) u[o].closed = !0;
                for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0
            }, SVGShapeElement.prototype.renderInnerContent = function() {
                this.renderModifiers();
                var t, e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
            }, SVGShapeElement.prototype.renderShape = function() {
                var t, e, i = this.animatedContents.length;
                for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
            }, SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
            }, SVGTintFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v,
                        i = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v / 100;
                    this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
                }
            }, SVGFillFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[2].p.v,
                        i = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                }
            }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = .3 * this.filterManager.effectElements[0].p.v,
                        i = this.filterManager.effectElements[1].p.v,
                        r = 3 == i ? 0 : e,
                        s = 2 == i ? 0 : e;
                    this.feGaussianBlur.setAttribute("stdDeviation", r + " " + s);
                    var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", a)
                }
            }, SVGStrokeEffect.prototype.initialize = function() {
                var t, e, i, r, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = (i = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                    p: t,
                    m: i
                });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var a = createNS("mask"),
                        n = createElementID();
                    a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
                    var o = createNS("g");
                    for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0];) o.appendChild(s[0]);
                    this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v)
                        for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;) this.elem.layerElement.removeChild(s[0]);
                    this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                }
                this.initialized = !0, this.pathMasker = e
            }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                this.initialized || this.initialize();
                var e, i, r, s = this.paths.length;
                for (e = 0; e < s; e += 1)
                    if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                        var a;
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                                o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                                h = r.getTotalLength();
                            a = "0 0 0 " + h * n + " ";
                            var l, p = h * (o - n),
                                f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                                c = Math.floor(p / f);
                            for (l = 0; l < c; l += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                            a += "0 " + 10 * h + " 0 0"
                        } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                        r.setAttribute("stroke-dasharray", a)
                    }
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                    var m = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * m[0]) + "," + bm_floor(255 * m[1]) + "," + bm_floor(255 * m[2]) + ")")
                }
            }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v,
                        i = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v,
                        s = r[0] + " " + i[0] + " " + e[0],
                        a = r[1] + " " + i[1] + " " + e[1],
                        n = r[2] + " " + i[2] + " " + e[2];
                    this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
                }
            }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                var i = createNS(t);
                return i.setAttribute("type", "table"), e.appendChild(i), i
            }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, s) {
                for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                        length: 256
                    }), f = 0, c = s - r, m = e - t; o <= 256;) n = (a = o / 256) <= h ? m < 0 ? s : r : a >= l ? m < 0 ? r : s : r + c * Math.pow((a - t) / m, 1 / i), p[f++] = n, o += 256 / 255;
                return p.join(" ")
            }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e, i = this.filterManager.effectElements;
                    this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                }
            }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                    }
                    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var i = this.filterManager.effectElements[3].p.v,
                            r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            s = i * Math.cos(r),
                            a = i * Math.sin(r);
                        this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a)
                    }
                }
            };
            var _svgMatteSymbols = [];

            function SVGMatte3Effect(t, e, i) {
                this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
            }

            function SVGEffects(t) {
                var e, i, r = t.data.ef ? t.data.ef.length : 0,
                    s = createElementID(),
                    a = filtersFactory.createFilter(s),
                    n = 0;
                for (this.filters = [], e = 0; e < r; e += 1) i = null, 20 === t.data.ef[e].ty ? (n += 1, i = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, i = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, i = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, i = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, i = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, i = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), i && this.filters.push(i);
                n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
            }

            function CVContextData() {
                this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
                var t;
                for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                this._length = 15
            }

            function CVBaseElement() {}

            function CVImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, i)
            }

            function CVCompElement(t, e, i) {
                this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function CVMaskElement(t, e) {
                this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                var i, r = this.masksProperties.length,
                    s = !1;
                for (i = 0; i < r; i++) "n" !== this.masksProperties[i].mode && (s = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
                this.hasMasks = s, s && this.element.addRenderableComponent(this)
            }

            function CVShapeElement(t, e, i) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
            }

            function CVSolidElement(t, e, i) {
                this.initElement(t, e, i)
            }

            function CVTextElement(t, e, i) {
                this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                    fill: "rgba(0,0,0,0)",
                    stroke: "rgba(0,0,0,0)",
                    sWidth: 0,
                    fValue: ""
                }, this.initElement(t, e, i)
            }

            function CVEffects() {}

            function HBaseElement(t, e, i) {}

            function HSolidElement(t, e, i) {
                this.initElement(t, e, i)
            }

            function HCompElement(t, e, i) {
                this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function HShapeElement(t, e, i) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }
            }

            function HTextElement(t, e, i) {
                this.textSpans = [], this.textPaths = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
            }

            function HImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
            }

            function HCameraElement(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
                var r = PropertyFactory.getProp;
                if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                    var s, a = t.ks.or.k.length;
                    for (s = 0; s < a; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
                }
                this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                    mProp: this
                }
            }

            function HEffects() {}
            SVGMatte3Effect.prototype.findSymbol = function(t) {
                for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                    if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                    e += 1
                }
                return null
            }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                var i = t.layerElement.parentNode;
                if (i) {
                    for (var r, s = i.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement;) a += 1;
                    a <= n - 2 && (r = s[a + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o)
                }
            }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                if (!this.findSymbol(e)) {
                    var i = createElementID(),
                        r = createNS("mask");
                    r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                    var s = t.globalData.defs;
                    s.appendChild(r);
                    var a = createNS("symbol");
                    a.setAttribute("id", i), this.replaceInParent(e, i), a.appendChild(e.layerElement), s.appendChild(a);
                    var n = createNS("use");
                    n.setAttribute("href", "#" + i), r.appendChild(n), e.data.hd = !1, e.show()
                }
                t.setMatte(e.layerId)
            }, SVGMatte3Effect.prototype.initialize = function() {
                for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
                this.initialized = !0
            }, SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize()
            }, SVGEffects.prototype.renderFrame = function(t) {
                var e, i = this.filters.length;
                for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
            }, CVContextData.prototype.duplicate = function() {
                var t = 2 * this._length,
                    e = this.savedOp;
                this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                var i = 0;
                for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
                this._length = t
            }, CVContextData.prototype.reset = function() {
                this.cArrPos = 0, this.cTr.reset(), this.cO = 1
            }, CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                    this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
                },
                createContent: function() {},
                setBlendMode: function() {
                    var t = this.globalData;
                    if (t.blendMode !== this.data.bm) {
                        t.blendMode = this.data.bm;
                        var e = getBlendMode(this.data.bm);
                        t.canvasContext.globalCompositeOperation = e
                    }
                },
                createRenderableComponents: function() {
                    this.maskManager = new CVMaskElement(this.data, this)
                },
                hideElement: function() {
                    this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                },
                showElement: function() {
                    this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                },
                renderFrame: function() {
                    if (!this.hidden && !this.data.hd) {
                        this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                        var t = 0 === this.data.ty;
                        this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                    }
                },
                destroy: function() {
                    this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                },
                mHelper: new Matrix
            }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var t = createTag("canvas");
                    t.width = this.assetData.w, t.height = this.assetData.h;
                    var e, i, r = t.getContext("2d"),
                        s = this.img.width,
                        a = this.img.height,
                        n = s / a,
                        o = this.assetData.w / this.assetData.h,
                        h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (i = a) * o : i = (e = s) / o, r.drawImage(this.img, (s - e) / 2, (a - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                }
            }, CVImageElement.prototype.renderInnerContent = function(t) {
                this.canvasContext.drawImage(this.img, 0, 0)
            }, CVImageElement.prototype.destroy = function() {
                this.img = null
            }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                var t, e = this.canvasContext;
                for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }, CVCompElement.prototype.destroy = function() {
                var t;
                for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                this.layers = null, this.elements = null
            }, CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var t, e, i, r, s = this.element.finalTransform.mat,
                        a = this.element.canvasContext,
                        n = this.masksProperties.length;
                    for (a.beginPath(), t = 0; t < n; t++)
                        if ("n" !== this.masksProperties[t].mode) {
                            this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), r = this.viewData[t].v, e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0), a.moveTo(e[0], e[1]);
                            var o, h = r._length;
                            for (o = 1; o < h; o++) i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                            i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                        }
                    this.element.globalData.renderer.save(!0), a.clip()
                }
            }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                this.element = null
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
            }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                var i = {
                        data: t,
                        type: t.ty,
                        preTransforms: this.transformsManager.addTransformSequence(e),
                        transforms: [],
                        elements: [],
                        closed: !0 === t.hd
                    },
                    r = {};
                if ("fl" == t.ty || "st" == t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bm_floor(r.c.v[0]) + "," + bm_floor(r.c.v[1]) + "," + bm_floor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
                        k: 0
                    }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
                        k: 0
                    }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
                    if (i.lc = this.lcEnum[t.lc] || "round", i.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
                        var s = new DashProperty(this, t.d, "canvas", this);
                        r.d = s, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
                    }
                } else i.r = 2 === t.r ? "evenodd" : "nonzero";
                return this.stylesList.push(i), r.style = i, r
            }, CVShapeElement.prototype.createGroupElement = function(t) {
                return {
                    it: [],
                    prevViewData: []
                }
            }, CVShapeElement.prototype.createTransformElement = function(t) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                    }
                }
            }, CVShapeElement.prototype.createShapeElement = function(t) {
                var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                return this.shapes.push(e), this.addShapeToModifiers(e), e
            }, CVShapeElement.prototype.reloadShapes = function() {
                this._isFirstFrame = !0;
                var t, e = this.itemsData.length;
                for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
            }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                var e, i = this.stylesList.length;
                for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
            }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                var t, e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
            }, CVShapeElement.prototype.closeStyles = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) t[e].closed = !0
            }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, s) {
                var a, n, o, h, l, p, f = t.length - 1,
                    c = [],
                    m = [],
                    d = [].concat(s);
                for (a = f; a >= 0; a -= 1) {
                    if ((h = this.searchProcessedElement(t[a])) ? e[a] = i[h - 1] : t[a]._shouldRender = r, "fl" == t[a].ty || "st" == t[a].ty || "gf" == t[a].ty || "gs" == t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), c.push(e[a].style);
                    else if ("gr" == t[a].ty) {
                        if (h)
                            for (o = e[a].it.length, n = 0; n < o; n += 1) e[a].prevViewData[n] = e[a].it[n];
                        else e[a] = this.createGroupElement(t[a]);
                        this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, d)
                    } else "tr" == t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" == t[a].ty || "rd" == t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), m.push(l)) : "rp" == t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), e[a] = l, l.init(this, t, a, e), this.shapeModifiers.push(l), r = !1), m.push(l));
                    this.addProcessedElement(t[a], a + 1)
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(c), f = m.length, a = 0; a < f; a += 1) m[a].closed = !0
            }, CVShapeElement.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
            }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
            }, CVShapeElement.prototype.drawLayer = function() {
                var t, e, i, r, s, a, n, o, h, l = this.stylesList.length,
                    p = this.globalData.renderer,
                    f = this.globalData.canvasContext;
                for (t = 0; t < l; t += 1)
                    if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                        for (p.save(), a = h.elements, "st" === o || "gs" === o ? (f.strokeStyle = "st" === o ? h.co : h.grd, f.lineWidth = h.wi, f.lineCap = h.lc, f.lineJoin = h.lj, f.miterLimit = h.ml || 0) : f.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && f.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = a.length, e = 0; e < i; e += 1) {
                            for ("st" !== o && "gs" !== o || (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, r = 0; r < s; r += 1) "m" == n[r].t ? f.moveTo(n[r].p[0], n[r].p[1]) : "c" == n[r].t ? f.bezierCurveTo(n[r].pts[0], n[r].pts[1], n[r].pts[2], n[r].pts[3], n[r].pts[4], n[r].pts[5]) : f.closePath();
                            "st" !== o && "gs" !== o || (f.stroke(), h.da && f.setLineDash(this.dashResetter))
                        }
                        "st" !== o && "gs" !== o && f.fill(h.r), p.restore()
                    }
            }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
                var s, a;
                for (a = t, s = e.length - 1; s >= 0; s -= 1) "tr" == e[s].ty ? (a = i[s].transform, this.renderShapeTransform(t, a)) : "sh" == e[s].ty || "el" == e[s].ty || "rc" == e[s].ty || "sr" == e[s].ty ? this.renderPath(e[s], i[s]) : "fl" == e[s].ty ? this.renderFill(e[s], i[s], a) : "st" == e[s].ty ? this.renderStroke(e[s], i[s], a) : "gf" == e[s].ty || "gs" == e[s].ty ? this.renderGradientFill(e[s], i[s], a) : "gr" == e[s].ty ? this.renderShape(a, e[s].it, i[s].it) : e[s].ty;
                r && this.drawLayer()
            }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                    var i, r, s, a = t.trNodes,
                        n = e.paths,
                        o = n._length;
                    a.length = 0;
                    var h = t.transforms.finalTransform;
                    for (s = 0; s < o; s += 1) {
                        var l = n.shapes[s];
                        if (l && l.v) {
                            for (r = l._length, i = 1; i < r; i += 1) 1 === i && a.push({
                                t: "m",
                                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                            }), a.push({
                                t: "c",
                                pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                            });
                            1 === r && a.push({
                                t: "m",
                                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                            }), l.c && r && (a.push({
                                t: "c",
                                pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                            }), a.push({
                                t: "z"
                            }))
                        }
                    }
                    t.trNodes = a
                }
            }, CVShapeElement.prototype.renderPath = function(t, e) {
                if (!0 !== t.hd && t._shouldRender) {
                    var i, r = e.styledShapes.length;
                    for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
                }
            }, CVShapeElement.prototype.renderFill = function(t, e, i) {
                var r = e.style;
                (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
            }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
                var r = e.style;
                if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                    var s = this.globalData.canvasContext,
                        a = e.s.v,
                        n = e.e.v;
                    if (1 === t.t) c = s.createLinearGradient(a[0], a[1], n[0], n[1]);
                    else var o = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2)),
                        h = Math.atan2(n[1] - a[1], n[0] - a[0]),
                        l = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                        p = Math.cos(h + e.a.v) * l + a[0],
                        f = Math.sin(h + e.a.v) * l + a[1],
                        c = s.createRadialGradient(p, f, 0, a[0], a[1], o);
                    var m, d = t.g.p,
                        u = e.g.c,
                        g = 1;
                    for (m = 0; m < d; m += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * m + 1]), c.addColorStop(u[4 * m] / 100, "rgba(" + u[4 * m + 1] + "," + u[4 * m + 2] + "," + u[4 * m + 3] + "," + g + ")");
                    r.grd = c
                }
                r.coOp = e.o.v * i.opacity
            }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
                var r = e.style,
                    s = e.d;
                s && (s._mdf || this._isFirstFrame) && (r.da = s.dashArray, r.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
            }, CVShapeElement.prototype.destroy = function() {
                this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                var t = this.canvasContext;
                t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = !1;
                t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                var i = !1;
                t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                var r, s, a = this.globalData.fontManager.getFontByName(t.f),
                    n = t.l,
                    o = this.mHelper;
                this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
                var h, l, p, f, c, m, d, u, g, y, v = this.data.singleShape,
                    T = t.tr / 1e3 * t.finalSize,
                    b = 0,
                    S = 0,
                    P = !0,
                    A = 0;
                for (r = 0; r < s; r += 1) {
                    for (l = (h = this.globalData.fontManager.getCharData(t.finalText[r], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {}, o.reset(), v && n[r].n && (b = -T, S += t.yOffset, S += P ? 1 : 0, P = !1), d = (c = l.shapes ? l.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, n[r].line, b, S), g = createSizedArray(d), m = 0; m < d; m += 1) {
                        for (f = c[m].ks.k.i.length, u = c[m].ks.k, y = [], p = 1; p < f; p += 1) 1 == p && y.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), y.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0));
                        y.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), g[m] = y
                    }
                    v && (b += n[r].l, b += T), this.textSpans[A] ? this.textSpans[A].elem = g : this.textSpans[A] = {
                        elem: g
                    }, A += 1
                }
            }, CVTextElement.prototype.renderInnerContent = function() {
                var t, e, i, r, s, a, n = this.canvasContext;
                this.finalTransform.mat.props;
                n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var o, h = this.textAnimator.renderedLetters,
                    l = this.textProperty.currentData.l;
                e = l.length;
                var p, f, c = null,
                    m = null,
                    d = null;
                for (t = 0; t < e; t += 1)
                    if (!l[t].n) {
                        if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                            for (o && o.fc ? c !== o.fc && (c = o.fc, n.fillStyle = o.fc) : c !== this.values.fill && (c = this.values.fill, n.fillStyle = this.values.fill), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                for (a = (f = p[i]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(f[s], f[s + 1], f[s + 2], f[s + 3], f[s + 4], f[s + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                        }
                        if (this.stroke) {
                            for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? m !== o.sc && (m = o.sc, n.strokeStyle = o.sc) : m !== this.values.stroke && (m = this.values.stroke, n.strokeStyle = this.values.stroke), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                for (a = (f = p[i]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(f[s], f[s + 1], f[s + 2], f[s + 3], f[s + 4], f[s + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                        }
                        o && this.globalData.renderer.restore()
                    }
            }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() {
                    this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                },
                createContainerElements: function() {
                    this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() {
                    this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData)
                },
                addEffects: function() {},
                setMatte: function() {}
            }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                var t;
                this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
            }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
            }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
                i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
            }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                var t;
                if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                else {
                    t = createNS("svg");
                    var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                    t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
            }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                return e
            }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                var i, r, s, a, n, o = t.sh.v,
                    h = t.transformers,
                    l = o._length;
                if (!(l <= 1)) {
                    for (i = 0; i < l - 1; i += 1) r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[i + 1]), n = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, s, a, n, e);
                    o.c && (r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, s, a, n, e))
                }
            }, HShapeElement.prototype.checkBounds = function(t, e, i, r, s) {
                this.getBoundsOfCurve(t, e, i, r);
                var a = this.shapeBoundingBox;
                s.x = bm_min(a.left, s.x), s.xMax = bm_max(a.right, s.xMax), s.y = bm_min(a.top, s.y), s.yMax = bm_max(a.bottom, s.yMax)
            }, HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
                for (var s, a, n, o, h, l, p, f = [
                        [t[0], r[0]],
                        [t[1], r[1]]
                    ], c = 0; c < 2; ++c)
                    if (a = 6 * t[c] - 12 * e[c] + 6 * i[c], s = -3 * t[c] + 9 * e[c] - 9 * i[c] + 3 * r[c], n = 3 * e[c] - 3 * t[c], a |= 0, n |= 0, 0 !== (s |= 0))(h = a * a - 4 * n * s) < 0 || (0 < (l = (-a + bm_sqrt(h)) / (2 * s)) && l < 1 && f[c].push(this.calculateF(l, t, e, i, r, c)), 0 < (p = (-a - bm_sqrt(h)) / (2 * s)) && p < 1 && f[c].push(this.calculateF(p, t, e, i, r, c)));
                    else {
                        if (0 === a) continue;
                        0 < (o = -n / a) && o < 1 && f[c].push(this.calculateF(o, t, e, i, r, c))
                    }
                this.shapeBoundingBox.left = bm_min.apply(null, f[0]), this.shapeBoundingBox.top = bm_min.apply(null, f[1]), this.shapeBoundingBox.right = bm_max.apply(null, f[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, f[1])
            }, HShapeElement.prototype.calculateF = function(t, e, i, r, s, a) {
                return bm_pow(1 - t, 3) * e[a] + 3 * bm_pow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bm_pow(t, 2) * r[a] + bm_pow(t, 3) * s[a]
            }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e)
            }, HShapeElement.prototype.currentBoxContains = function(t) {
                return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            }, HShapeElement.prototype.renderInnerContent = function() {
                if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var t = this.tempBoundingBox,
                        e = 999999;
                    if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                    var i = !1;
                    this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), (i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                }
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                if (this.isMasked = this.checkMasks(), this.isMasked) {
                    this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                    var t = createNS("g");
                    this.maskedElement.appendChild(t), this.innerElem = t
                } else this.renderType = "html", this.innerElem = this.layerElement;
                this.checkParenting()
            }, HTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = this.innerElem.style;
                e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                var i, r, s = this.globalData.fontManager.getFontByName(t.f);
                if (!this.globalData.fontManager.chars)
                    if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
                    else {
                        e.fontFamily = s.fFamily;
                        var a = t.fWeight,
                            n = t.fStyle;
                        e.fontStyle = n, e.fontWeight = a
                    }
                var o, h, l, p = t.l;
                r = p.length;
                var f, c = this.mHelper,
                    m = "",
                    d = 0;
                for (i = 0; i < r; i += 1) {
                    if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? l = (h = this.textSpans[d]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (l = createNS("svg")).appendChild(o), styleDiv(h)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (h = this.textSpans[d], o = this.textPaths[d]) : (styleDiv(h = createTag("span")), styleDiv(o = createTag("span")), h.appendChild(o)), this.globalData.fontManager.chars) {
                        var u, g = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                        if (u = g ? g.data : null, c.reset(), u && u.shapes && (f = u.shapes[0].it, c.scale(t.finalSize / 100, t.finalSize / 100), m = this.createPathShape(c, f), o.setAttribute("d", m)), this.isMasked) this.innerElem.appendChild(o);
                        else {
                            if (this.innerElem.appendChild(h), u && u.shapes) {
                                document.body.appendChild(l);
                                var y = l.getBBox();
                                l.setAttribute("width", y.width + 2), l.setAttribute("height", y.height + 2), l.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2)), l.style.transform = l.style.webkitTransform = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)", p[i].yOffset = y.y - 1
                            } else l.setAttribute("width", 1), l.setAttribute("height", 1);
                            h.appendChild(l)
                        }
                    } else o.textContent = p[i].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
                    this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = h, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1
                }
                for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
            }, HTextElement.prototype.renderInnerContent = function() {
                if (this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    var t, e, i, r, s, a = 0,
                        n = this.textAnimator.renderedLetters,
                        o = this.textProperty.currentData.l;
                    for (e = o.length, t = 0; t < e; t += 1) o[t].n ? a += 1 : (r = this.textSpans[t], s = this.textPaths[t], i = n[a], a += 1, i._mdf.m && (this.isMasked ? r.setAttribute("transform", i.m) : r.style.transform = r.style.webkitTransform = i.m), r.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var h = this.innerElem.getBBox();
                        this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height));
                        this.currentBBox.w === h.width + 2 && this.currentBBox.h === h.height + 2 && this.currentBBox.x === h.x - 1 && this.currentBBox.y === h.y - 1 || (this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                    }
                }
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData),
                    e = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
            }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                var t, e, i = this.comp.threeDElements.length;
                for (t = 0; t < i; t += 1) "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")
            }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                var t, e, i = this._isFirstFrame;
                if (this.hierarchy)
                    for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
                if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(), this.hierarchy)
                        for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                            var r = this.hierarchy[t].finalTransform.mProp;
                            this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                        }
                    if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                        var s;
                        s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                        var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                            n = [s[0] / a, s[1] / a, s[2] / a],
                            o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                            h = Math.atan2(n[1], o),
                            l = Math.atan2(n[0], -n[2]);
                        this.mat.rotateY(l).rotateX(-h)
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var p = !this._prevMat.equals(this.mat);
                    if ((p || this.pe._mdf) && this.comp.threeDElements) {
                        var f;
                        for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) "3d" === (f = this.comp.threeDElements[t]).type && (p && (f.container.style.transform = f.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (f.perspectiveElem.style.perspective = f.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                        this.mat.clone(this._prevMat)
                    }
                }
                this._isFirstFrame = !1
            }, HCameraElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                return null
            }, HEffects.prototype.renderFrame = function() {};
            var animationManager = function() {
                    var t = {},
                        e = [],
                        i = 0,
                        r = 0,
                        s = 0,
                        a = !0,
                        n = !1;

                    function o(t) {
                        for (var i = 0, s = t.target; i < r;) e[i].animation === s && (e.splice(i, 1), i -= 1, r -= 1, s.isPaused || p()), i += 1
                    }

                    function h(t, i) {
                        if (!t) return null;
                        for (var s = 0; s < r;) {
                            if (e[s].elem == t && null !== e[s].elem) return e[s].animation;
                            s += 1
                        }
                        var a = new AnimationItem;
                        return f(a, t), a.setData(t, i), a
                    }

                    function l() {
                        s += 1, d()
                    }

                    function p() {
                        s -= 1
                    }

                    function f(t, i) {
                        t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                            elem: i,
                            animation: t
                        }), r += 1
                    }

                    function c(t) {
                        var o, h = t - i;
                        for (o = 0; o < r; o += 1) e[o].animation.advanceTime(h);
                        i = t, s && !n ? window.requestAnimationFrame(c) : a = !0
                    }

                    function m(t) {
                        i = t, window.requestAnimationFrame(c)
                    }

                    function d() {
                        !n && s && a && (window.requestAnimationFrame(m), a = !1)
                    }
                    return t.registerAnimation = h, t.loadAnimation = function(t) {
                        var e = new AnimationItem;
                        return f(e, null), e.setParams(t), e
                    }, t.setSpeed = function(t, i) {
                        var s;
                        for (s = 0; s < r; s += 1) e[s].animation.setSpeed(t, i)
                    }, t.setDirection = function(t, i) {
                        var s;
                        for (s = 0; s < r; s += 1) e[s].animation.setDirection(t, i)
                    }, t.play = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.play(t)
                    }, t.pause = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.pause(t)
                    }, t.stop = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.stop(t)
                    }, t.togglePause = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.togglePause(t)
                    }, t.searchAnimations = function(t, e, i) {
                        var r, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                            a = s.length;
                        for (r = 0; r < a; r += 1) i && s[r].setAttribute("data-bm-type", i), h(s[r], t);
                        if (e && 0 === a) {
                            i || (i = "svg");
                            var n = document.getElementsByTagName("body")[0];
                            n.innerHTML = "";
                            var o = createTag("div");
                            o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), n.appendChild(o), h(o, t)
                        }
                    }, t.resize = function() {
                        var t;
                        for (t = 0; t < r; t += 1) e[t].animation.resize()
                    }, t.goToAndStop = function(t, i, s) {
                        var a;
                        for (a = 0; a < r; a += 1) e[a].animation.goToAndStop(t, i, s)
                    }, t.destroy = function(t) {
                        var i;
                        for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                    }, t.freeze = function() {
                        n = !0
                    }, t.unfreeze = function() {
                        n = !1, d()
                    }, t.getRegisteredAnimations = function() {
                        var t, i = e.length,
                            r = [];
                        for (t = 0; t < i; t += 1) r.push(e[t].animation);
                        return r
                    }, t
                }(),
                AnimationItem = function() {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader
                };
            extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
                switch (e) {
                    case "canvas":
                        this.renderer = new CanvasRenderer(this, t.rendererSettings);
                        break;
                    case "svg":
                        this.renderer = new SVGRenderer(this, t.rendererSettings);
                        break;
                    default:
                        this.renderer = new HybridRenderer(this, t.rendererSettings)
                }
                this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                    this.trigger("data_failed")
                }.bind(this)))
            }, AnimationItem.prototype.setData = function(t, e) {
                var i = {
                        wrapper: t,
                        animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
                    },
                    r = t.attributes;
                i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
                var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
                "" === s || (i.loop = "false" !== s && ("true" === s || parseInt(s)));
                var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
                i.autoplay = "false" !== a, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
            }, AnimationItem.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e, i, r = this.animationData.layers,
                    s = r.length,
                    a = t.layers,
                    n = a.length;
                for (i = 0; i < n; i += 1)
                    for (e = 0; e < s;) {
                        if (r[e].id == a[i].id) {
                            r[e] = a[i];
                            break
                        }
                        e += 1
                    }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                    for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
            }, AnimationItem.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1, assetLoader.load(i, this.includeLayers.bind(this), function() {
                    this.trigger("data_failed")
                }.bind(this))
            }, AnimationItem.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
            }, AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"), this.checkLoaded()
            }, AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            }, AnimationItem.prototype.configAnimation = function(t) {
                if (this.renderer) try {
                    this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()
                } catch (t) {
                    this.triggerConfigError(t)
                }
            }, AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            }, AnimationItem.prototype.checkLoaded = function() {
                this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                    this.trigger("DOMLoaded")
                }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
            }, AnimationItem.prototype.resize = function() {
                this.renderer.updateContainerSize()
            }, AnimationItem.prototype.setSubframe = function(t) {
                this.subframeEnabled = !!t
            }, AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
            }, AnimationItem.prototype.renderFrame = function() {
                if (!1 !== this.isLoaded) try {
                    this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (t) {
                    this.triggerRenderFrameError(t)
                }
            }, AnimationItem.prototype.play = function(t) {
                t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
            }, AnimationItem.prototype.pause = function(t) {
                t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
            }, AnimationItem.prototype.togglePause = function(t) {
                t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
            }, AnimationItem.prototype.stop = function(t) {
                t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
            }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
                i && this.name != i || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
            }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
                this.goToAndStop(t, e, i), this.play()
            }, AnimationItem.prototype.advanceTime = function(t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var e = this.currentRawFrame + t * this.frameModifier,
                        i = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                }
            }, AnimationItem.prototype.adjustSegment = function(t, e) {
                this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
            }, AnimationItem.prototype.setSegment = function(t, e) {
                var i = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== i && this.goToAndStop(i, !0)
            }, AnimationItem.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) this.segments.push(t[i])
                } else this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
            }, AnimationItem.prototype.resetSegments = function(t) {
                this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
            }, AnimationItem.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
            }, AnimationItem.prototype.destroy = function(t) {
                t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
            }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t, this.gotoFrame()
            }, AnimationItem.prototype.setSpeed = function(t) {
                this.playSpeed = t, this.updaFrameModifier()
            }, AnimationItem.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
            }, AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
            }, AnimationItem.prototype.getPath = function() {
                return this.path
            }, AnimationItem.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e) e = t.p;
                else if (this.assetsPath) {
                    var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                } else e = this.path, e += t.u ? t.u : "", e += t.p;
                return e
            }, AnimationItem.prototype.getAssetData = function(t) {
                for (var e = 0, i = this.assets.length; e < i;) {
                    if (t == this.assets[e].id) return this.assets[e];
                    e += 1
                }
            }, AnimationItem.prototype.hide = function() {
                this.renderer.hide()
            }, AnimationItem.prototype.show = function() {
                this.renderer.show()
            }, AnimationItem.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate
            }, AnimationItem.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t]) switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t, this));
                        break;
                    default:
                        this.triggerEvent(t)
                }
                "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
            }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
            }, AnimationItem.prototype.triggerConfigError = function(t) {
                var e = new BMConfigErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
            };
            var Expressions = function() {
                var t = {};
                return t.initExpressions = function(t) {
                    var e = 0,
                        i = [];
                    t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                        e += 1
                    }, t.renderer.globalData.popExpression = function() {
                        0 === (e -= 1) && function() {
                            var t, e = i.length;
                            for (t = 0; t < e; t += 1) i[t].release();
                            i.length = 0
                        }()
                    }, t.renderer.globalData.registerExpressionProperty = function(t) {
                        -1 === i.indexOf(t) && i.push(t)
                    }
                }, t
            }();
            expressionsPlugin = Expressions;
            var ExpressionManager = function() {
                    var ob = {},
                        Math = BMMath,
                        window = null,
                        document = null;

                    function $bm_isInstanceOfArray(t) {
                        return t.constructor === Array || t.constructor === Float32Array
                    }

                    function isNumerable(t, e) {
                        return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                    }

                    function $bm_neg(t) {
                        var e = typeof t;
                        if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                        if ($bm_isInstanceOfArray(t)) {
                            var i, r = t.length,
                                s = [];
                            for (i = 0; i < r; i += 1) s[i] = -t[i];
                            return s
                        }
                        return t.propType ? t.v : void 0
                    }
                    var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                        easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                        easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                    function sum(t, e) {
                        var i = typeof t,
                            r = typeof e;
                        if ("string" === i || "string" === r) return t + e;
                        if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] = t[0] + e, t;
                        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                            for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                            return o
                        }
                        return 0
                    }
                    var add = sum;

                    function sub(t, e) {
                        var i = typeof t,
                            r = typeof e;
                        if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t)), "string" === r && (e = parseInt(e)), t - e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] = t[0] - e, t;
                        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                            for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                            return o
                        }
                        return 0
                    }

                    function mul(t, e) {
                        var i, r, s, a = typeof t,
                            n = typeof e;
                        if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                            for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] * e;
                            return i
                        }
                        if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                            for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t * e[r];
                            return i
                        }
                        return 0
                    }

                    function div(t, e) {
                        var i, r, s, a = typeof t,
                            n = typeof e;
                        if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                            for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] / e;
                            return i
                        }
                        if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                            for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t / e[r];
                            return i
                        }
                        return 0
                    }

                    function mod(t, e) {
                        return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e
                    }
                    var $bm_sum = sum,
                        $bm_sub = sub,
                        $bm_mul = mul,
                        $bm_div = div,
                        $bm_mod = mod;

                    function clamp(t, e, i) {
                        if (e > i) {
                            var r = i;
                            i = e, e = r
                        }
                        return Math.min(Math.max(t, e), i)
                    }

                    function radiansToDegrees(t) {
                        return t / degToRads
                    }
                    var radians_to_degrees = radiansToDegrees;

                    function degreesToRadians(t) {
                        return t * degToRads
                    }
                    var degrees_to_radians = radiansToDegrees,
                        helperLengthArray = [0, 0, 0, 0, 0, 0];

                    function length(t, e) {
                        if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                        e || (e = helperLengthArray);
                        var i, r = Math.min(t.length, e.length),
                            s = 0;
                        for (i = 0; i < r; i += 1) s += Math.pow(e[i] - t[i], 2);
                        return Math.sqrt(s)
                    }

                    function normalize(t) {
                        return div(t, length(t))
                    }

                    function rgbToHsl(t) {
                        var e, i, r = t[0],
                            s = t[1],
                            a = t[2],
                            n = Math.max(r, s, a),
                            o = Math.min(r, s, a),
                            h = (n + o) / 2;
                        if (n == o) e = i = 0;
                        else {
                            var l = n - o;
                            switch (i = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
                                case r:
                                    e = (s - a) / l + (s < a ? 6 : 0);
                                    break;
                                case s:
                                    e = (a - r) / l + 2;
                                    break;
                                case a:
                                    e = (r - s) / l + 4
                            }
                            e /= 6
                        }
                        return [e, i, h, t[3]]
                    }

                    function hue2rgb(t, e, i) {
                        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                    }

                    function hslToRgb(t) {
                        var e, i, r, s = t[0],
                            a = t[1],
                            n = t[2];
                        if (0 === a) e = i = r = n;
                        else {
                            var o = n < .5 ? n * (1 + a) : n + a - n * a,
                                h = 2 * n - o;
                            e = hue2rgb(h, o, s + 1 / 3), i = hue2rgb(h, o, s), r = hue2rgb(h, o, s - 1 / 3)
                        }
                        return [e, i, r, t[3]]
                    }

                    function linear(t, e, i, r, s) {
                        if (void 0 !== r && void 0 !== s || (r = e, s = i, e = 0, i = 1), i < e) {
                            var a = i;
                            i = e, e = a
                        }
                        if (t <= e) return r;
                        if (t >= i) return s;
                        var n = i === e ? 0 : (t - e) / (i - e);
                        if (!r.length) return r + (s - r) * n;
                        var o, h = r.length,
                            l = createTypedArray("float32", h);
                        for (o = 0; o < h; o += 1) l[o] = r[o] + (s[o] - r[o]) * n;
                        return l
                    }

                    function random(t, e) {
                        if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                            var i, r = e.length;
                            t || (t = createTypedArray("float32", r));
                            var s = createTypedArray("float32", r),
                                a = BMMath.random();
                            for (i = 0; i < r; i += 1) s[i] = t[i] + a * (e[i] - t[i]);
                            return s
                        }
                        return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                    }

                    function createPath(t, e, i, r) {
                        var s, a = t.length,
                            n = shape_pool.newElement();
                        n.setPathData(!!r, a);
                        var o, h, l = [0, 0];
                        for (s = 0; s < a; s += 1) o = e && e[s] ? e[s] : l, h = i && i[s] ? i[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                        return n
                    }

                    function initiateExpression(elem, data, property) {
                        var val = data.x,
                            needsVelocity = /velocity(?![\w\d])/.test(val),
                            _needsRandom = -1 !== val.indexOf("random"),
                            elemType = elem.data.ty,
                            transform, $bm_transform, content, effect, thisProperty = property;
                        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                            get: function() {
                                return thisProperty.v
                            }
                        }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                        var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                            outPoint = elem.data.op / elem.comp.globalData.frameRate,
                            width = elem.data.sw ? elem.data.sw : 0,
                            height = elem.data.sh ? elem.data.sh : 0,
                            name = elem.data.nm,
                            loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
                            scoped_bm_rt;
                        if (data.xf) {
                            var i, len = data.xf.length;
                            for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
                        }
                        var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                            numKeys = property.kf ? data.k.length : 0,
                            active = !this.data || !0 !== this.data.hd,
                            wiggle = function(t, e) {
                                var i, r, s = this.pv.length ? this.pv.length : 1,
                                    a = createTypedArray("float32", s);
                                var n = Math.floor(5 * time);
                                for (i = 0, r = 0; i < n;) {
                                    for (r = 0; r < s; r += 1) a[r] += -e + 2 * e * BMMath.random();
                                    i += 1
                                }
                                var o = 5 * time,
                                    h = o - Math.floor(o),
                                    l = createTypedArray("float32", s);
                                if (s > 1) {
                                    for (r = 0; r < s; r += 1) l[r] = this.pv[r] + a[r] + (-e + 2 * e * BMMath.random()) * h;
                                    return l
                                }
                                return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
                            }.bind(this);

                        function loopInDuration(t, e) {
                            return loopIn(t, e, !0)
                        }

                        function loopOutDuration(t, e) {
                            return loopOut(t, e, !0)
                        }
                        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                            time, velocity, value, text, textIndex, textTotal, selectorValue;

                        function lookAt(t, e) {
                            var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                            return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
                        }

                        function easeOut(t, e, i, r, s) {
                            return applyEase(easeOutBez, t, e, i, r, s)
                        }

                        function easeIn(t, e, i, r, s) {
                            return applyEase(easeInBez, t, e, i, r, s)
                        }

                        function ease(t, e, i, r, s) {
                            return applyEase(easeInOutBez, t, e, i, r, s)
                        }

                        function applyEase(t, e, i, r, s, a) {
                            void 0 === s ? (s = i, a = r) : e = (e - i) / (r - i);
                            var n = t(e = e > 1 ? 1 : e < 0 ? 0 : e);
                            if ($bm_isInstanceOfArray(s)) {
                                var o, h = s.length,
                                    l = createTypedArray("float32", h);
                                for (o = 0; o < h; o += 1) l[o] = (a[o] - s[o]) * n + s[o];
                                return l
                            }
                            return (a - s) * n + s
                        }

                        function nearestKey(t) {
                            var e, i, r, s = data.k.length;
                            if (data.k.length && "number" != typeof data.k[0])
                                if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
                                else {
                                    for (e = 0; e < s - 1; e += 1) {
                                        if (t === data.k[e].t) {
                                            i = e + 1, r = data.k[e].t;
                                            break
                                        }
                                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                                            t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                                            break
                                        }
                                    } - 1 === i && (i = e + 1, r = data.k[e].t)
                                }
                            else i = 0, r = 0;
                            var a = {};
                            return a.index = i, a.time = r / elem.comp.globalData.frameRate, a
                        }

                        function key(t) {
                            var e, i, r;
                            if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                            t -= 1, e = {
                                time: data.k[t].t / elem.comp.globalData.frameRate,
                                value: []
                            };
                            var s = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;
                            for (r = s.length, i = 0; i < r; i += 1) e[i] = s[i], e.value[i] = s[i];
                            return e
                        }

                        function framesToTime(t, e) {
                            return e || (e = elem.comp.globalData.frameRate), t / e
                        }

                        function timeToFrames(t, e) {
                            return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                        }

                        function seedRandom(t) {
                            BMMath.seedrandom(randSeed + t)
                        }

                        function sourceRectAtTime() {
                            return elem.sourceRectAtTime()
                        }

                        function substring(t, e) {
                            return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                        }

                        function substr(t, e) {
                            return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                        }

                        function posterizeTime(t) {
                            time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                        }
                        var index = elem.data.ind,
                            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                            parent, randSeed = Math.floor(1e6 * Math.random()),
                            globalData = elem.globalData;

                        function executeExpression(t) {
                            return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                        }
                        return executeExpression
                    }
                    return ob.initiateExpression = initiateExpression, ob
                }(),
                expressionHelpers = {
                    searchExpressions: function(t, e, i) {
                        e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                    },
                    getSpeedAtTime: function(t) {
                        var e = this.getValueAtTime(t),
                            i = this.getValueAtTime(t + -.01),
                            r = 0;
                        if (e.length) {
                            var s;
                            for (s = 0; s < e.length; s += 1) r += Math.pow(i[s] - e[s], 2);
                            r = 100 * Math.sqrt(r)
                        } else r = 0;
                        return r
                    },
                    getVelocityAtTime: function(t) {
                        if (void 0 !== this.vel) return this.vel;
                        var e, i, r = this.getValueAtTime(t),
                            s = this.getValueAtTime(t + -.001);
                        if (r.length)
                            for (e = createTypedArray("float32", r.length), i = 0; i < r.length; i += 1) e[i] = (s[i] - r[i]) / -.001;
                        else e = (s - r) / -.001;
                        return e
                    },
                    getValueAtTime: function(t) {
                        return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                    },
                    getStaticValueAtTime: function() {
                        return this.pv
                    },
                    setGroupProperty: function(t) {
                        this.propertyGroup = t
                    }
                };
            ! function() {
                function t(t, e, i) {
                    if (!this.k || !this.keyframes) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var r, s, a, n, o, h = this.comp.renderedFrame,
                        l = this.keyframes,
                        p = l[l.length - 1].t;
                    if (h <= p) return this.pv;
                    if (i ? s = p - (r = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
                        if (Math.floor((h - s) / r) % 2 != 0) return this.getValueAtTime((r - (h - s) % r + s) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                                c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                m = this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0),
                                d = Math.floor((h - s) / r);
                            if (this.pv.length) {
                                for (n = (o = new Array(f.length)).length, a = 0; a < n; a += 1) o[a] = (c[a] - f[a]) * d + m[a];
                                return o
                            }
                            return (c - f) * d + m
                        }
                        if ("continue" === t) {
                            var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) o[a] = u[a] + (u[a] - g[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                return o
                            }
                            return u + (h - p) / .001 * (u - g)
                        }
                    }
                    return this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0)
                }

                function e(t, e, i) {
                    if (!this.k) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var r, s, a, n, o, h = this.comp.renderedFrame,
                        l = this.keyframes,
                        p = l[0].t;
                    if (h >= p) return this.pv;
                    if (i ? s = p + (r = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = (s = l[e].t) - p), "pingpong" === t) {
                        if (Math.floor((p - h) / r) % 2 == 0) return this.getValueAtTime(((p - h) % r + p) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                c = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                                m = this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0),
                                d = Math.floor((p - h) / r) + 1;
                            if (this.pv.length) {
                                for (n = (o = new Array(f.length)).length, a = 0; a < n; a += 1) o[a] = m[a] - (c[a] - f[a]) * d;
                                return o
                            }
                            return m - (c - f) * d
                        }
                        if ("continue" === t) {
                            var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) o[a] = u[a] + (u[a] - g[a]) * (p - h) / .001;
                                return o
                            }
                            return u + (u - g) * (p - h) / .001
                        }
                    }
                    return this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0)
                }

                function i(t, e) {
                    if (!this.k) return this.pv;
                    if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                    var i, r, s = this.comp.renderedFrame / this.comp.globalData.frameRate,
                        a = s - t,
                        n = e > 1 ? (s + t - a) / (e - 1) : 1,
                        o = 0,
                        h = 0;
                    for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                        if (r = this.getValueAtTime(a + o * n), this.pv.length)
                            for (h = 0; h < this.pv.length; h += 1) i[h] += r[h];
                        else i += r;
                        o += 1
                    }
                    if (this.pv.length)
                        for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
                    else i /= e;
                    return i
                }

                function r(t) {
                    console.warn("Transform at time not supported")
                }

                function s(t) {}
                var a = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                    var n = a(t, e, i);
                    return n.dynamicProperties.length ? n.getValueAtTime = r.bind(n) : n.getValueAtTime = s.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
                };
                var n = PropertyFactory.getProp;
                PropertyFactory.getProp = function(r, s, a, o, h) {
                    var l = n(r, s, a, o, h);
                    l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === s.a ? s.k.length : 0, l.propertyIndex = s.ix;
                    var p = 0;
                    return 0 !== a && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), l._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: p
                    }, expressionHelpers.searchExpressions(r, s, l), l.k && h.addDynamicProperty(l), l
                };
                var o = ShapePropertyFactory.getConstructorFunction(),
                    h = ShapePropertyFactory.getKeyframedConstructorFunction();

                function l() {}
                l.prototype = {
                    vertices: function(t, e) {
                        this.k && this.getValue();
                        var i = this.v;
                        void 0 !== e && (i = this.getValueAtTime(e, 0));
                        var r, s = i._length,
                            a = i[t],
                            n = i.v,
                            o = createSizedArray(s);
                        for (r = 0; r < s; r += 1) o[r] = "i" === t || "o" === t ? [a[r][0] - n[r][0], a[r][1] - n[r][1]] : [a[r][0], a[r][1]];
                        return o
                    },
                    points: function(t) {
                        return this.vertices("v", t)
                    },
                    inTangents: function(t) {
                        return this.vertices("i", t)
                    },
                    outTangents: function(t) {
                        return this.vertices("o", t)
                    },
                    isClosed: function() {
                        return this.v.c
                    },
                    pointOnPath: function(t, e) {
                        var i = this.v;
                        void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                        for (var r, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h;) {
                            if (l + a[o].addedLength > n) {
                                var p = o,
                                    f = i.c && o === h - 1 ? 0 : o + 1,
                                    c = (n - l) / a[o].addedLength;
                                r = bez.getPointInSegment(i.v[p], i.v[f], i.o[p], i.i[f], c, a[o]);
                                break
                            }
                            l += a[o].addedLength, o += 1
                        }
                        return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
                    },
                    vectorOnPath: function(t, e, i) {
                        t = 1 == t ? this.v.c ? 0 : .999 : t;
                        var r = this.pointOnPath(t, e),
                            s = this.pointOnPath(t + .001, e),
                            a = s[0] - r[0],
                            n = s[1] - r[1],
                            o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                        return 0 === o ? [0, 0] : "tangent" === i ? [a / o, n / o] : [-n / o, a / o]
                    },
                    tangentOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "tangent")
                    },
                    normalOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "normal")
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shape_pool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var p = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(t, e, i, r, s) {
                    var a = p(t, e, i, r, s);
                    return a.propertyIndex = e.ix, a.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
                }
            }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                var i = this.calculateExpression(e);
                if (t.t !== i) {
                    var r = {};
                    return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r
                }
                return t
            }, TextProperty.prototype.searchProperty = function() {
                var t = this.searchKeyframes(),
                    e = this.searchExpressions();
                return this.kf = t || e, this.kf
            }, TextProperty.prototype.searchExpressions = function() {
                if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0
            };
            var ShapeExpressionInterface = function() {
                    function t(t, f, c) {
                        var m, d = [],
                            u = t ? t.length : 0;
                        for (m = 0; m < u; m += 1) "gr" == t[m].ty ? d.push(e(t[m], f[m], c)) : "fl" == t[m].ty ? d.push(i(t[m], f[m], c)) : "st" == t[m].ty ? d.push(r(t[m], f[m], c)) : "tm" == t[m].ty ? d.push(s(t[m], f[m], c)) : "tr" == t[m].ty || ("el" == t[m].ty ? d.push(a(t[m], f[m], c)) : "sr" == t[m].ty ? d.push(n(t[m], f[m], c)) : "sh" == t[m].ty ? d.push(p(t[m], f[m], c)) : "rc" == t[m].ty ? d.push(o(t[m], f[m], c)) : "rd" == t[m].ty ? d.push(h(t[m], f[m], c)) : "rp" == t[m].ty && d.push(l(t[m], f[m], c)));
                        return d
                    }

                    function e(e, i, r) {
                        var s = function(t) {
                            switch (t) {
                                case "ADBE Vectors Group":
                                case "Contents":
                                case 2:
                                    return s.content;
                                default:
                                    return s.transform
                            }
                        };
                        s.propertyGroup = function(t) {
                            return 1 === t ? s : r(t - 1)
                        };
                        var a = function(e, i, r) {
                                var s, a = function(t) {
                                    for (var e = 0, i = s.length; e < i;) {
                                        if (s[e]._name === t || s[e].mn === t || s[e].propertyIndex === t || s[e].ix === t || s[e].ind === t) return s[e];
                                        e += 1
                                    }
                                    if ("number" == typeof t) return s[t - 1]
                                };
                                return a.propertyGroup = function(t) {
                                    return 1 === t ? a : r(t - 1)
                                }, s = t(e.it, i.it, a.propertyGroup), a.numProperties = s.length, a.propertyIndex = e.cix, a._name = e.nm, a
                            }(e, i, s.propertyGroup),
                            n = function(t, e, i) {
                                function r(t) {
                                    return 1 == t ? s : i(--t)
                                }
                                e.transform.mProps.o.setGroupProperty(r), e.transform.mProps.p.setGroupProperty(r), e.transform.mProps.a.setGroupProperty(r), e.transform.mProps.s.setGroupProperty(r), e.transform.mProps.r.setGroupProperty(r), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(r), e.transform.mProps.sa.setGroupProperty(r));

                                function s(e) {
                                    return t.a.ix === e || "Anchor Point" === e ? s.anchorPoint : t.o.ix === e || "Opacity" === e ? s.opacity : t.p.ix === e || "Position" === e ? s.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? s.rotation : t.s.ix === e || "Scale" === e ? s.scale : t.sk && t.sk.ix === e || "Skew" === e ? s.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? s.skewAxis : void 0
                                }
                                return e.transform.op.setGroupProperty(r), Object.defineProperties(s, {
                                    opacity: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.o)
                                    },
                                    position: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.p)
                                    },
                                    anchorPoint: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.a)
                                    },
                                    scale: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.s)
                                    },
                                    rotation: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.r)
                                    },
                                    skew: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                    },
                                    skewAxis: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), s.ty = "tr", s.mn = t.mn, s.propertyGroup = i, s
                            }(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
                        return s.content = a, s.transform = n, Object.defineProperty(s, "_name", {
                            get: function() {
                                return e.nm
                            }
                        }), s.numProperties = e.np, s.propertyIndex = e.ix, s.nm = e.nm, s.mn = e.mn, s
                    }

                    function i(t, e, i) {
                        function r(t) {
                            return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : void 0
                        }
                        return Object.defineProperties(r, {
                            color: {
                                get: ExpressionPropertyInterface(e.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(e.o)
                            },
                            _name: {
                                value: t.nm
                            },
                            mn: {
                                value: t.mn
                            }
                        }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), r
                    }

                    function r(t, e, i) {
                        function r(t) {
                            return 1 === t ? ob : i(t - 1)
                        }

                        function s(t) {
                            return 1 === t ? h : r(t - 1)
                        }

                        function a(i) {
                            Object.defineProperty(h, t.d[i].nm, {
                                get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                            })
                        }
                        var n, o = t.d ? t.d.length : 0,
                            h = {};
                        for (n = 0; n < o; n += 1) a(n), e.d.dataProps[n].p.setGroupProperty(s);

                        function l(t) {
                            return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : void 0
                        }
                        return Object.defineProperties(l, {
                            color: {
                                get: ExpressionPropertyInterface(e.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(e.o)
                            },
                            strokeWidth: {
                                get: ExpressionPropertyInterface(e.w)
                            },
                            dash: {
                                get: function() {
                                    return h
                                }
                            },
                            _name: {
                                value: t.nm
                            },
                            mn: {
                                value: t.mn
                            }
                        }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), e.w.setGroupProperty(r), l
                    }

                    function s(t, e, i) {
                        function r(t) {
                            return 1 == t ? s : i(--t)
                        }

                        function s(e) {
                            return e === t.e.ix || "End" === e || "end" === e ? s.end : e === t.s.ix ? s.start : e === t.o.ix ? s.offset : void 0
                        }
                        return s.propertyIndex = t.ix, e.s.setGroupProperty(r), e.e.setGroupProperty(r), e.o.setGroupProperty(r), s.propertyIndex = t.ix, s.propertyGroup = i, Object.defineProperties(s, {
                            start: {
                                get: ExpressionPropertyInterface(e.s)
                            },
                            end: {
                                get: ExpressionPropertyInterface(e.e)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(e.o)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), s.mn = t.mn, s
                    }

                    function a(t, e, i) {
                        function r(t) {
                            return 1 == t ? a : i(--t)
                        }
                        a.propertyIndex = t.ix;
                        var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                        function a(e) {
                            return t.p.ix === e ? a.position : t.s.ix === e ? a.size : void 0
                        }
                        return s.s.setGroupProperty(r), s.p.setGroupProperty(r), Object.defineProperties(a, {
                            size: {
                                get: ExpressionPropertyInterface(s.s)
                            },
                            position: {
                                get: ExpressionPropertyInterface(s.p)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), a.mn = t.mn, a
                    }

                    function n(t, e, i) {
                        function r(t) {
                            return 1 == t ? a : i(--t)
                        }
                        var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                        function a(e) {
                            return t.p.ix === e ? a.position : t.r.ix === e ? a.rotation : t.pt.ix === e ? a.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? a.outerRadius : t.os.ix === e ? a.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? a.innerRoundness : void 0 : a.innerRadius
                        }
                        return a.propertyIndex = t.ix, s.or.setGroupProperty(r), s.os.setGroupProperty(r), s.pt.setGroupProperty(r), s.p.setGroupProperty(r), s.r.setGroupProperty(r), t.ir && (s.ir.setGroupProperty(r), s.is.setGroupProperty(r)), Object.defineProperties(a, {
                            position: {
                                get: ExpressionPropertyInterface(s.p)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(s.r)
                            },
                            points: {
                                get: ExpressionPropertyInterface(s.pt)
                            },
                            outerRadius: {
                                get: ExpressionPropertyInterface(s.or)
                            },
                            outerRoundness: {
                                get: ExpressionPropertyInterface(s.os)
                            },
                            innerRadius: {
                                get: ExpressionPropertyInterface(s.ir)
                            },
                            innerRoundness: {
                                get: ExpressionPropertyInterface(s.is)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), a.mn = t.mn, a
                    }

                    function o(t, e, i) {
                        function r(t) {
                            return 1 == t ? a : i(--t)
                        }
                        var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                        function a(e) {
                            return t.p.ix === e ? a.position : t.r.ix === e ? a.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? a.size : void 0
                        }
                        return a.propertyIndex = t.ix, s.p.setGroupProperty(r), s.s.setGroupProperty(r), s.r.setGroupProperty(r), Object.defineProperties(a, {
                            position: {
                                get: ExpressionPropertyInterface(s.p)
                            },
                            roundness: {
                                get: ExpressionPropertyInterface(s.r)
                            },
                            size: {
                                get: ExpressionPropertyInterface(s.s)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), a.mn = t.mn, a
                    }

                    function h(t, e, i) {
                        var r = e;

                        function s(e) {
                            if (t.r.ix === e || "Round Corners 1" === e) return s.radius
                        }
                        return s.propertyIndex = t.ix, r.rd.setGroupProperty((function(t) {
                            return 1 == t ? s : i(--t)
                        })), Object.defineProperties(s, {
                            radius: {
                                get: ExpressionPropertyInterface(r.rd)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), s.mn = t.mn, s
                    }

                    function l(t, e, i) {
                        function r(t) {
                            return 1 == t ? a : i(--t)
                        }
                        var s = e;

                        function a(e) {
                            return t.c.ix === e || "Copies" === e ? a.copies : t.o.ix === e || "Offset" === e ? a.offset : void 0
                        }
                        return a.propertyIndex = t.ix, s.c.setGroupProperty(r), s.o.setGroupProperty(r), Object.defineProperties(a, {
                            copies: {
                                get: ExpressionPropertyInterface(s.c)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(s.o)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), a.mn = t.mn, a
                    }

                    function p(t, e, i) {
                        var r = e.sh;

                        function s(t) {
                            if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return s.path
                        }
                        return r.setGroupProperty((function(t) {
                            return 1 == t ? s : i(--t)
                        })), Object.defineProperties(s, {
                            path: {
                                get: function() {
                                    return r.k && r.getValue(), r
                                }
                            },
                            shape: {
                                get: function() {
                                    return r.k && r.getValue(), r
                                }
                            },
                            _name: {
                                value: t.nm
                            },
                            ix: {
                                value: t.ix
                            },
                            propertyIndex: {
                                value: t.ix
                            },
                            mn: {
                                value: t.mn
                            }
                        }), s
                    }
                    return function(e, i, r) {
                        var s;

                        function a(t) {
                            if ("number" == typeof t) return s[t - 1];
                            for (var e = 0, i = s.length; e < i;) {
                                if (s[e]._name === t) return s[e];
                                e += 1
                            }
                        }
                        return a.propertyGroup = r, s = t(e, i, a), a.numProperties = s.length, a
                    }
                }(),
                TextExpressionInterface = function(t) {
                    var e;

                    function i() {}
                    return Object.defineProperty(i, "sourceText", {
                        get: function() {
                            t.textProperty.getValue();
                            var i = t.textProperty.currentData.t;
                            return void 0 !== i && (t.textProperty.currentData.t = void 0, (e = new String(i)).value = i || new String(i)), e
                        }
                    }), i
                },
                LayerExpressionInterface = function() {
                    function t(t, e) {
                        var i = new Matrix;
                        if (i.reset(), this._elem.finalTransform.mProp.applyToMatrix(i), this._elem.hierarchy && this._elem.hierarchy.length) {
                            var r, s = this._elem.hierarchy.length;
                            for (r = 0; r < s; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(i);
                            return i.applyToPointArray(t[0], t[1], t[2] || 0)
                        }
                        return i.applyToPointArray(t[0], t[1], t[2] || 0)
                    }

                    function e(t, e) {
                        var i = new Matrix;
                        if (i.reset(), this._elem.finalTransform.mProp.applyToMatrix(i), this._elem.hierarchy && this._elem.hierarchy.length) {
                            var r, s = this._elem.hierarchy.length;
                            for (r = 0; r < s; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(i);
                            return i.inversePoint(t)
                        }
                        return i.inversePoint(t)
                    }

                    function i(t) {
                        var e = new Matrix;
                        if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                            var i, r = this._elem.hierarchy.length;
                            for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                            return e.inversePoint(t)
                        }
                        return e.inversePoint(t)
                    }

                    function r() {
                        return [1, 1, 1, 1]
                    }
                    return function(s) {
                        var a;

                        function n(t) {
                            switch (t) {
                                case "ADBE Root Vectors Group":
                                case "Contents":
                                case 2:
                                    return n.shapeInterface;
                                case 1:
                                case 6:
                                case "Transform":
                                case "transform":
                                case "ADBE Transform Group":
                                    return a;
                                case 4:
                                case "ADBE Effect Parade":
                                case "effects":
                                case "Effects":
                                    return n.effect
                            }
                        }
                        n.toWorld = t, n.fromWorld = e, n.toComp = t, n.fromComp = i, n.sampleImage = r, n.sourceRectAtTime = s.sourceRectAtTime.bind(s), n._elem = s;
                        var o = getDescriptor(a = TransformExpressionInterface(s.finalTransform.mProp), "anchorPoint");
                        return Object.defineProperties(n, {
                            hasParent: {
                                get: function() {
                                    return s.hierarchy.length
                                }
                            },
                            parent: {
                                get: function() {
                                    return s.hierarchy[0].layerInterface
                                }
                            },
                            rotation: getDescriptor(a, "rotation"),
                            scale: getDescriptor(a, "scale"),
                            position: getDescriptor(a, "position"),
                            opacity: getDescriptor(a, "opacity"),
                            anchorPoint: o,
                            anchor_point: o,
                            transform: {
                                get: function() {
                                    return a
                                }
                            },
                            active: {
                                get: function() {
                                    return s.isInRange
                                }
                            }
                        }), n.startTime = s.data.st, n.index = s.data.ind, n.source = s.data.refId, n.height = 0 === s.data.ty ? s.data.h : 100, n.width = 0 === s.data.ty ? s.data.w : 100, n.inPoint = s.data.ip / s.comp.globalData.frameRate, n.outPoint = s.data.op / s.comp.globalData.frameRate, n._name = s.data.nm, n.registerMaskInterface = function(t) {
                            n.mask = new MaskManagerInterface(t, s)
                        }, n.registerEffectsInterface = function(t) {
                            n.effect = t
                        }, n
                    }
                }(),
                CompExpressionInterface = function(t) {
                    function e(e) {
                        for (var i = 0, r = t.layers.length; i < r;) {
                            if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
                            i += 1
                        }
                        return null
                    }
                    return Object.defineProperty(e, "_name", {
                        value: t.data.nm
                    }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                },
                TransformExpressionInterface = function(t) {
                    function e(t) {
                        switch (t) {
                            case "scale":
                            case "Scale":
                            case "ADBE Scale":
                            case 6:
                                return e.scale;
                            case "rotation":
                            case "Rotation":
                            case "ADBE Rotation":
                            case "ADBE Rotate Z":
                            case 10:
                                return e.rotation;
                            case "ADBE Rotate X":
                                return e.xRotation;
                            case "ADBE Rotate Y":
                                return e.yRotation;
                            case "position":
                            case "Position":
                            case "ADBE Position":
                            case 2:
                                return e.position;
                            case "ADBE Position_0":
                                return e.xPosition;
                            case "ADBE Position_1":
                                return e.yPosition;
                            case "ADBE Position_2":
                                return e.zPosition;
                            case "anchorPoint":
                            case "AnchorPoint":
                            case "Anchor Point":
                            case "ADBE AnchorPoint":
                            case 1:
                                return e.anchorPoint;
                            case "opacity":
                            case "Opacity":
                            case 11:
                                return e.opacity
                        }
                    }
                    if (Object.defineProperty(e, "rotation", {
                            get: ExpressionPropertyInterface(t.r || t.rz)
                        }), Object.defineProperty(e, "zRotation", {
                            get: ExpressionPropertyInterface(t.rz || t.r)
                        }), Object.defineProperty(e, "xRotation", {
                            get: ExpressionPropertyInterface(t.rx)
                        }), Object.defineProperty(e, "yRotation", {
                            get: ExpressionPropertyInterface(t.ry)
                        }), Object.defineProperty(e, "scale", {
                            get: ExpressionPropertyInterface(t.s)
                        }), t.p) var i = ExpressionPropertyInterface(t.p);
                    return Object.defineProperty(e, "position", {
                        get: function() {
                            return t.p ? i() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0]
                        }
                    }), Object.defineProperty(e, "xPosition", {
                        get: ExpressionPropertyInterface(t.px)
                    }), Object.defineProperty(e, "yPosition", {
                        get: ExpressionPropertyInterface(t.py)
                    }), Object.defineProperty(e, "zPosition", {
                        get: ExpressionPropertyInterface(t.pz)
                    }), Object.defineProperty(e, "anchorPoint", {
                        get: ExpressionPropertyInterface(t.a)
                    }), Object.defineProperty(e, "opacity", {
                        get: ExpressionPropertyInterface(t.o)
                    }), Object.defineProperty(e, "skew", {
                        get: ExpressionPropertyInterface(t.sk)
                    }), Object.defineProperty(e, "skewAxis", {
                        get: ExpressionPropertyInterface(t.sa)
                    }), Object.defineProperty(e, "orientation", {
                        get: ExpressionPropertyInterface(t.or)
                    }), e
                },
                ProjectInterface = function() {
                    function t(t) {
                        this.compositions.push(t)
                    }
                    return function() {
                        function e(t) {
                            for (var e = 0, i = this.compositions.length; e < i;) {
                                if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                e += 1
                            }
                        }
                        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                    }
                }(),
                EffectsExpressionInterface = function() {
                    function t(i, r, s, a) {
                        var n, o = [],
                            h = i.ef.length;
                        for (n = 0; n < h; n += 1) 5 === i.ef[n].ty ? o.push(t(i.ef[n], r.effectElements[n], r.effectElements[n].propertyGroup, a)) : o.push(e(r.effectElements[n], i.ef[n].ty, a, l));

                        function l(t) {
                            return 1 === t ? p : s(t - 1)
                        }
                        var p = function(t) {
                            for (var e = i.ef, r = 0, s = e.length; r < s;) {
                                if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? o[r] : o[r]();
                                r += 1
                            }
                            return o[0]()
                        };
                        return p.propertyGroup = l, "ADBE Color Control" === i.mn && Object.defineProperty(p, "color", {
                            get: function() {
                                return o[0]()
                            }
                        }), Object.defineProperty(p, "numProperties", {
                            get: function() {
                                return i.np
                            }
                        }), p.active = p.enabled = 0 !== i.en, p
                    }

                    function e(t, e, i, r) {
                        var s = ExpressionPropertyInterface(t.p);
                        return t.p.setGroupProperty && t.p.setGroupProperty(r),
                            function() {
                                return 10 === e ? i.comp.compInterface(t.p.v) : s()
                            }
                    }
                    return {
                        createEffectsInterface: function(e, i) {
                            if (e.effectsManager) {
                                var r, s = [],
                                    a = e.data.ef,
                                    n = e.effectsManager.effectElements.length;
                                for (r = 0; r < n; r += 1) s.push(t(a[r], e.effectsManager.effectElements[r], i, e));
                                return function(t) {
                                    for (var i = e.data.ef || [], r = 0, a = i.length; r < a;) {
                                        if (t === i[r].nm || t === i[r].mn || t === i[r].ix) return s[r];
                                        r += 1
                                    }
                                }
                            }
                        }
                    }
                }(),
                MaskManagerInterface = function() {
                    function t(t, e) {
                        this._mask = t, this._data = e
                    }
                    Object.defineProperty(t.prototype, "maskPath", {
                        get: function() {
                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                        }
                    }), Object.defineProperty(t.prototype, "maskOpacity", {
                        get: function() {
                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                        }
                    });
                    return function(e, i) {
                        var r, s = createSizedArray(e.viewData.length),
                            a = e.viewData.length;
                        for (r = 0; r < a; r += 1) s[r] = new t(e.viewData[r], e.masksProperties[r]);
                        return function(t) {
                            for (r = 0; r < a;) {
                                if (e.masksProperties[r].nm === t) return s[r];
                                r += 1
                            }
                        }
                    }
                }(),
                ExpressionPropertyInterface = function() {
                    var t = {
                            pv: 0,
                            v: 0,
                            mult: 1
                        },
                        e = {
                            pv: [0, 0, 0],
                            v: [0, 0, 0],
                            mult: 1
                        };

                    function i(t, e, i) {
                        Object.defineProperty(t, "velocity", {
                            get: function() {
                                return e.getVelocityAtTime(e.comp.currentFrame)
                            }
                        }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                            if (t.numKeys) {
                                var s = "";
                                s = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                                var a = "unidimensional" === i ? new Number(s) : Object.assign({}, s);
                                return a.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, a
                            }
                            return 0
                        }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                    }

                    function r() {
                        return t
                    }
                    return function(s) {
                        return s ? "unidimensional" === s.propType ? function(e) {
                            e && "pv" in e || (e = t);
                            var r = 1 / e.mult,
                                s = e.pv * r,
                                a = new Number(s);
                            return a.value = s, i(a, e, "unidimensional"),
                                function() {
                                    return e.k && e.getValue(), s = e.v * r, a.value !== s && ((a = new Number(s)).value = s, i(a, e, "unidimensional")), a
                                }
                        }(s) : function(t) {
                            t && "pv" in t || (t = e);
                            var r = 1 / t.mult,
                                s = t.pv.length,
                                a = createTypedArray("float32", s),
                                n = createTypedArray("float32", s);
                            return a.value = n, i(a, t, "multidimensional"),
                                function() {
                                    t.k && t.getValue();
                                    for (var e = 0; e < s; e += 1) a[e] = n[e] = t.v[e] * r;
                                    return a
                                }
                        }(s) : r
                    }
                }(),
                TextExpressionSelectorProp, propertyGetTextProp;

            function SliderEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }

            function AngleEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }

            function ColorEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
            }

            function PointEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
            }

            function LayerIndexEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }

            function MaskIndexEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }

            function CheckboxEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }

            function NoValueEffect() {
                this.p = {}
            }

            function EffectsManager() {}

            function EffectsManager(t, e) {
                var i = t.ef || [];
                this.effectElements = [];
                var r, s, a = i.length;
                for (r = 0; r < a; r++) s = new GroupEffect(i[r], e), this.effectElements.push(s)
            }

            function GroupEffect(t, e) {
                this.init(t, e)
            }
            TextExpressionSelectorProp = function() {
                function t(t, e) {
                    return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
                }
                return function(e, i) {
                    this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = i.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, i, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
                }
            }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(t, e, i) {
                return 1 === e.t ? new TextExpressionSelectorProp(t, e, i) : propertyGetTextProp(t, e, i)
            }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                var i, r, s = this.data.ef.length,
                    a = this.data.ef;
                for (i = 0; i < s; i += 1) {
                    switch (r = null, a[i].ty) {
                        case 0:
                            r = new SliderEffect(a[i], e, this);
                            break;
                        case 1:
                            r = new AngleEffect(a[i], e, this);
                            break;
                        case 2:
                            r = new ColorEffect(a[i], e, this);
                            break;
                        case 3:
                            r = new PointEffect(a[i], e, this);
                            break;
                        case 4:
                        case 7:
                            r = new CheckboxEffect(a[i], e, this);
                            break;
                        case 10:
                            r = new LayerIndexEffect(a[i], e, this);
                            break;
                        case 11:
                            r = new MaskIndexEffect(a[i], e, this);
                            break;
                        case 5:
                            r = new EffectsManager(a[i], e, this);
                            break;
                        default:
                            r = new NoValueEffect(a[i], e, this)
                    }
                    r && this.effectElements.push(r)
                }
            };
            var lottie = {},
                _isFrozen = !1;

            function setLocationHref(t) {
                locationHref = t
            }

            function searchAnimations() {
                !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
            }

            function setSubframeRendering(t) {
                subframeEnabled = t
            }

            function loadAnimation(t) {
                return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
            }

            function setQuality(t) {
                if ("string" == typeof t) switch (t) {
                    case "high":
                        defaultCurveSegments = 200;
                        break;
                    case "medium":
                        defaultCurveSegments = 50;
                        break;
                    case "low":
                        defaultCurveSegments = 10
                } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
                roundValues(!(defaultCurveSegments >= 50))
            }

            function inBrowser() {
                return "undefined" != typeof navigator
            }

            function installPlugin(t, e) {
                "expressions" === t && (expressionsPlugin = e)
            }

            function getFactory(t) {
                switch (t) {
                    case "propertyFactory":
                        return PropertyFactory;
                    case "shapePropertyFactory":
                        return ShapePropertyFactory;
                    case "matrix":
                        return Matrix
                }
            }

            function checkReady() {
                "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
            }

            function getQueryVariable(t) {
                for (var e = queryString.split("&"), i = 0; i < e.length; i++) {
                    var r = e[i].split("=");
                    if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
                }
            }
            lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.__getFactory = getFactory, lottie.version = "5.6.8";
            var standalone = "__[STANDALONE]__",
                animationData = "__[ANIMATIONDATA]__",
                renderer = "";
            if (standalone) {
                var scripts = document.getElementsByTagName("script"),
                    index = scripts.length - 1,
                    myScript = scripts[index] || {
                        src: ""
                    },
                    queryString = myScript.src.replace(/^[^\?]+\??/, "");
                renderer = getQueryVariable("renderer")
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            return lottie
        }))
    }, function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    }, function(t, e, i) {
        var r = i(18),
            s = "object" == typeof self && self && self.Object === Object && self,
            a = r || s || Function("return this")();
        t.exports = a
    }, function(t, e, i) {
        var r = i(5).Symbol;
        t.exports = r
    }, function(t, e, i) {
        (t.exports ? function(e) {
            t.exports = e()
        } : i(16))((function() {
            "use strict";
            var t, e = {
                    mobileDetectRules: {
                        phones: {
                            iPhone: "\\biPhone\\b|\\biPod\\b",
                            BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                            HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                            Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                            Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                            Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                            Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
                            LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                            Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                            Asus: "Asus.*Galaxy|PadFone.*Mobile",
                            NokiaLumia: "Lumia [0-9]{3,4}",
                            Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                            Palm: "PalmSource|Palm",
                            Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                            Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                            Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                            Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                            iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                            SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                            Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                            Alcatel: "Alcatel",
                            Nintendo: "Nintendo (3DS|Switch)",
                            Amoi: "Amoi",
                            INQ: "INQ",
                            OnePlus: "ONEPLUS",
                            GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                        },
                        tablets: {
                            iPad: "iPad|iPad.*Mobile",
                            NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                            GoogleTablet: "Android.*Pixel C",
                            SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
                            Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                            SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                            HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                            AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                            BlackBerryTablet: "PlayBook|RIM Tablet",
                            HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                            MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                            NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                            AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                            ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                            LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                            FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                            PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                            LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
                            DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                            YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                            MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                            ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                            IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                            IRUTablet: "M702pro",
                            MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                            EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                            AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                            ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                            AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                            NokiaLumiaTablet: "Lumia 2520",
                            SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                            PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                            CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                            CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                            MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                            MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                            SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                            RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                            FlyTablet: "IQ310|Fly Vision",
                            bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                            HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                            NecTablet: "\\bN-06D|\\bN-08D",
                            PantechTablet: "Pantech.*P4100",
                            BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                            VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                            ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                            PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                            NabiTablet: "Android.*\\bNabi",
                            KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                            DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                            TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                            PlaystationTablet: "Playstation.*(Portable|Vita)",
                            TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                            PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                            AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                            DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                            GalapadTablet: "Android.*\\bG1\\b(?!\\))",
                            MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                            KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                            AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                            PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                            YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                            ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                            GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                            PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                            OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                            HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                            DPSTablet: "DPS Dream 9|DPS Dual 7",
                            VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                            CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                            MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                            ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                            GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                            ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                            VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                            ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                            StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                            VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                            EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                            RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                            iMobileTablet: "i-mobile i-note",
                            TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                            AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                            AMPETablet: "Android.* A78 ",
                            SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                            TecnoTablet: "TECNO P9|TECNO DP8D",
                            JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                            iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                            FX2Tablet: "FX2 PAD7|FX2 PAD10",
                            XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                            ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                            VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                            OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                            CaptivaTablet: "CAPTIVA PAD",
                            IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                            TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                            OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                            JaytechTablet: "TPC-PA762",
                            BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                            DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                            EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                            LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                            AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                            MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                            CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                            WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                            MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                            MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                            NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                            NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                            LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                            UbislateTablet: "UbiSlate[\\s]?7C",
                            PocketBookTablet: "Pocketbook",
                            KocasoTablet: "\\b(TB-1207)\\b",
                            HisenseTablet: "\\b(F5281|E2371)\\b",
                            Hudl: "Hudl HT7S3|Hudl 2",
                            TelstraTablet: "T-Hub2",
                            GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                        },
                        oss: {
                            AndroidOS: "Android",
                            BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                            PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                            SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                            WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                            WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                            iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                            iPadOS: "CPU OS 13",
                            MeeGoOS: "MeeGo",
                            MaemoOS: "Maemo",
                            JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                            webOS: "webOS|hpwOS",
                            badaOS: "\\bBada\\b",
                            BREWOS: "BREW"
                        },
                        uas: {
                            Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                            Dolfin: "\\bDolfin\\b",
                            Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                            Skyfire: "Skyfire",
                            Edge: "Mobile Safari/[.0-9]* Edge",
                            IE: "IEMobile|MSIEMobile",
                            Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                            Bolt: "bolt",
                            TeaShark: "teashark",
                            Blazer: "Blazer",
                            Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                            WeChat: "\\bMicroMessenger\\b",
                            UCBrowser: "UC.*Browser|UCWEB",
                            baiduboxapp: "baiduboxapp",
                            baidubrowser: "baidubrowser",
                            DiigoBrowser: "DiigoBrowser",
                            Mercury: "\\bMercury\\b",
                            ObigoBrowser: "Obigo",
                            NetFront: "NF-Browser",
                            GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                            PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                        },
                        props: {
                            Mobile: "Mobile/[VER]",
                            Build: "Build/[VER]",
                            Version: "Version/[VER]",
                            VendorID: "VendorID/[VER]",
                            iPad: "iPad.*CPU[a-z ]+[VER]",
                            iPhone: "iPhone.*CPU[a-z ]+[VER]",
                            iPod: "iPod.*CPU[a-z ]+[VER]",
                            Kindle: "Kindle/[VER]",
                            Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                            Coast: ["Coast/[VER]"],
                            Dolfin: "Dolfin/[VER]",
                            Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                            Fennec: "Fennec/[VER]",
                            Edge: "Edge/[VER]",
                            IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                            NetFront: "NetFront/[VER]",
                            NokiaBrowser: "NokiaBrowser/[VER]",
                            Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                            "Opera Mini": "Opera Mini/[VER]",
                            "Opera Mobi": "Version/[VER]",
                            UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                            MQQBrowser: "MQQBrowser/[VER]",
                            MicroMessenger: "MicroMessenger/[VER]",
                            baiduboxapp: "baiduboxapp/[VER]",
                            baidubrowser: "baidubrowser/[VER]",
                            SamsungBrowser: "SamsungBrowser/[VER]",
                            Iron: "Iron/[VER]",
                            Safari: ["Version/[VER]", "Safari/[VER]"],
                            Skyfire: "Skyfire/[VER]",
                            Tizen: "Tizen/[VER]",
                            Webkit: "webkit[ /][VER]",
                            PaleMoon: "PaleMoon/[VER]",
                            Gecko: "Gecko/[VER]",
                            Trident: "Trident/[VER]",
                            Presto: "Presto/[VER]",
                            Goanna: "Goanna/[VER]",
                            iOS: " \\bi?OS\\b [VER][ ;]{1}",
                            Android: "Android [VER]",
                            BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                            BREW: "BREW [VER]",
                            Java: "Java/[VER]",
                            "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                            "Windows Phone": "Windows Phone [VER]",
                            "Windows CE": "Windows CE/[VER]",
                            "Windows NT": "Windows NT [VER]",
                            Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                            webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                        },
                        utils: {
                            Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
                            MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                            DesktopMode: "WPDesktop",
                            TV: "SonyDTV|HbbTV",
                            WebKit: "(webkit)[ /]([\\w.]+)",
                            Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                            Watch: "SM-V700"
                        }
                    },
                    detectMobileBrowsers: {
                        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        tabletPattern: /android|ipad|playbook|silk/i
                    }
                },
                i = Object.prototype.hasOwnProperty;

            function r(t, e) {
                return null != t && null != e && t.toLowerCase() === e.toLowerCase()
            }

            function s(t, e) {
                var i, r, s = t.length;
                if (!s || !e) return !1;
                for (i = e.toLowerCase(), r = 0; r < s; ++r)
                    if (i === t[r].toLowerCase()) return !0;
                return !1
            }

            function a(t) {
                for (var e in t) i.call(t, e) && (t[e] = new RegExp(t[e], "i"))
            }

            function n(t, e) {
                this.ua = function(t) {
                    return (t || "").substr(0, 500)
                }(t), this._cache = {}, this.maxPhoneWidth = e || 600
            }
            return e.FALLBACK_PHONE = "UnknownPhone", e.FALLBACK_TABLET = "UnknownTablet", e.FALLBACK_MOBILE = "UnknownMobile", t = "isArray" in Array ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                function() {
                    var r, s, n, o, h, l, p = e.mobileDetectRules;
                    for (r in p.props)
                        if (i.call(p.props, r)) {
                            for (s = p.props[r], t(s) || (s = [s]), h = s.length, o = 0; o < h; ++o)(l = (n = s[o]).indexOf("[VER]")) >= 0 && (n = n.substring(0, l) + "([\\w._\\+]+)" + n.substring(l + 5)), s[o] = new RegExp(n, "i");
                            p.props[r] = s
                        }
                    a(p.oss), a(p.phones), a(p.tablets), a(p.uas), a(p.utils), p.oss0 = {
                        WindowsPhoneOS: p.oss.WindowsPhoneOS,
                        WindowsMobileOS: p.oss.WindowsMobileOS
                    }
                }(), e.findMatch = function(t, e) {
                    for (var r in t)
                        if (i.call(t, r) && t[r].test(e)) return r;
                    return null
                }, e.findMatches = function(t, e) {
                    var r = [];
                    for (var s in t) i.call(t, s) && t[s].test(e) && r.push(s);
                    return r
                }, e.getVersionStr = function(t, r) {
                    var s, a, n, o, h = e.mobileDetectRules.props;
                    if (i.call(h, t))
                        for (n = (s = h[t]).length, a = 0; a < n; ++a)
                            if (null !== (o = s[a].exec(r))) return o[1];
                    return null
                }, e.getVersion = function(t, i) {
                    var r = e.getVersionStr(t, i);
                    return r ? e.prepareVersionNo(r) : NaN
                }, e.prepareVersionNo = function(t) {
                    var e;
                    return 1 === (e = t.split(/[a-z._ \/\-]/i)).length && (t = e[0]), e.length > 1 && (t = e[0] + ".", e.shift(), t += e.join("")), Number(t)
                }, e.isMobileFallback = function(t) {
                    return e.detectMobileBrowsers.fullPattern.test(t) || e.detectMobileBrowsers.shortPattern.test(t.substr(0, 4))
                }, e.isTabletFallback = function(t) {
                    return e.detectMobileBrowsers.tabletPattern.test(t)
                }, e.prepareDetectionCache = function(t, i, r) {
                    if (
                        /*!mobile-detect v1.4.4 2019-09-21*/
                        /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
                        void 0 === t.mobile) {
                        var s, a, o;
                        if (a = e.findMatch(e.mobileDetectRules.tablets, i)) return t.mobile = t.tablet = a, void(t.phone = null);
                        if (s = e.findMatch(e.mobileDetectRules.phones, i)) return t.mobile = t.phone = s, void(t.tablet = null);
                        e.isMobileFallback(i) ? void 0 === (o = n.isPhoneSized(r)) ? (t.mobile = e.FALLBACK_MOBILE, t.tablet = t.phone = null) : o ? (t.mobile = t.phone = e.FALLBACK_PHONE, t.tablet = null) : (t.mobile = t.tablet = e.FALLBACK_TABLET, t.phone = null) : e.isTabletFallback(i) ? (t.mobile = t.tablet = e.FALLBACK_TABLET, t.phone = null) : t.mobile = t.tablet = t.phone = null
                    }
                }, e.mobileGrade = function(t) {
                    var e = null !== t.mobile();
                    return t.os("iOS") && t.version("iPad") >= 4.3 || t.os("iOS") && t.version("iPhone") >= 3.1 || t.os("iOS") && t.version("iPod") >= 3.1 || t.version("Android") > 2.1 && t.is("Webkit") || t.version("Windows Phone OS") >= 7 || t.is("BlackBerry") && t.version("BlackBerry") >= 6 || t.match("Playbook.*Tablet") || t.version("webOS") >= 1.4 && t.match("Palm|Pre|Pixi") || t.match("hp.*TouchPad") || t.is("Firefox") && t.version("Firefox") >= 12 || t.is("Chrome") && t.is("AndroidOS") && t.version("Android") >= 4 || t.is("Skyfire") && t.version("Skyfire") >= 4.1 && t.is("AndroidOS") && t.version("Android") >= 2.3 || t.is("Opera") && t.version("Opera Mobi") > 11 && t.is("AndroidOS") || t.is("MeeGoOS") || t.is("Tizen") || t.is("Dolfin") && t.version("Bada") >= 2 || (t.is("UC Browser") || t.is("Dolfin")) && t.version("Android") >= 2.3 || t.match("Kindle Fire") || t.is("Kindle") && t.version("Kindle") >= 3 || t.is("AndroidOS") && t.is("NookTablet") || t.version("Chrome") >= 11 && !e || t.version("Safari") >= 5 && !e || t.version("Firefox") >= 4 && !e || t.version("MSIE") >= 7 && !e || t.version("Opera") >= 10 && !e ? "A" : t.os("iOS") && t.version("iPad") < 4.3 || t.os("iOS") && t.version("iPhone") < 3.1 || t.os("iOS") && t.version("iPod") < 3.1 || t.is("Blackberry") && t.version("BlackBerry") >= 5 && t.version("BlackBerry") < 6 || t.version("Opera Mini") >= 5 && t.version("Opera Mini") <= 6.5 && (t.version("Android") >= 2.3 || t.is("iOS")) || t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || t.version("Opera Mobi") >= 11 && t.is("SymbianOS") ? "B" : (t.version("BlackBerry") < 5 || t.match("MSIEMobile|Windows CE.*Mobile") || t.version("Windows Mobile"), "C")
                }, e.detectOS = function(t) {
                    return e.findMatch(e.mobileDetectRules.oss0, t) || e.findMatch(e.mobileDetectRules.oss, t)
                }, e.getDeviceSmallerSide = function() {
                    return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                }, n.prototype = {
                    constructor: n,
                    mobile: function() {
                        return e.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                    },
                    phone: function() {
                        return e.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                    },
                    tablet: function() {
                        return e.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                    },
                    userAgent: function() {
                        return void 0 === this._cache.userAgent && (this._cache.userAgent = e.findMatch(e.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                    },
                    userAgents: function() {
                        return void 0 === this._cache.userAgents && (this._cache.userAgents = e.findMatches(e.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                    },
                    os: function() {
                        return void 0 === this._cache.os && (this._cache.os = e.detectOS(this.ua)), this._cache.os
                    },
                    version: function(t) {
                        return e.getVersion(t, this.ua)
                    },
                    versionStr: function(t) {
                        return e.getVersionStr(t, this.ua)
                    },
                    is: function(t) {
                        return s(this.userAgents(), t) || r(t, this.os()) || r(t, this.phone()) || r(t, this.tablet()) || s(e.findMatches(e.mobileDetectRules.utils, this.ua), t)
                    },
                    match: function(t) {
                        return t instanceof RegExp || (t = new RegExp(t, "i")), t.test(this.ua)
                    },
                    isPhoneSized: function(t) {
                        return n.isPhoneSized(t || this.maxPhoneWidth)
                    },
                    mobileGrade: function() {
                        return void 0 === this._cache.grade && (this._cache.grade = e.mobileGrade(this)), this._cache.grade
                    }
                }, "undefined" != typeof window && window.screen ? n.isPhoneSized = function(t) {
                    return t < 0 ? void 0 : e.getDeviceSmallerSide() <= t
                } : n.isPhoneSized = function() {}, n._impl = e, n.version = "1.4.4 2019-09-21", n
        }))
    }, , , , , , , , , function(t, e) {
        t.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    }, function(t, e, i) {
        var r = i(5);
        t.exports = function() {
            return r.Date.now()
        }
    }, function(t, e, i) {
        (function(e) {
            var i = "object" == typeof e && e && e.Object === Object && e;
            t.exports = i
        }).call(this, i(19))
    }, function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function(t, e, i) {
        var r = i(4),
            s = i(21),
            a = /^\s+|\s+$/g,
            n = /^[-+]0x[0-9a-f]+$/i,
            o = /^0b[01]+$/i,
            h = /^0o[0-7]+$/i,
            l = parseInt;
        t.exports = function(t) {
            if ("number" == typeof t) return t;
            if (s(t)) return NaN;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var i = o.test(t);
            return i || h.test(t) ? l(t.slice(2), i ? 2 : 8) : n.test(t) ? NaN : +t
        }
    }, function(t, e, i) {
        var r = i(22),
            s = i(25);
        t.exports = function(t) {
            return "symbol" == typeof t || s(t) && "[object Symbol]" == r(t)
        }
    }, function(t, e, i) {
        var r = i(6),
            s = i(23),
            a = i(24),
            n = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : n && n in Object(t) ? s(t) : a(t)
        }
    }, function(t, e, i) {
        var r = i(6),
            s = Object.prototype,
            a = s.hasOwnProperty,
            n = s.toString,
            o = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            var e = a.call(t, o),
                i = t[o];
            try {
                t[o] = void 0;
                var r = !0
            } catch (t) {}
            var s = n.call(t);
            return r && (e ? t[o] = i : delete t[o]), s
        }
    }, function(t, e) {
        var i = Object.prototype.toString;
        t.exports = function(t) {
            return i.call(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            return null != t && "object" == typeof t
        }
    }]
]);