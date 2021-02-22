/*!
 * fullPage 2.9.3 - Extensions 0.0.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return n(t, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, n, t, o, i) {
    "use strict";
    var r = "fullpage-wrapper"
      , a = "." + r
      , l = "fp-scrollable"
      , s = "." + l
      , c = "fp-responsive"
      , d = "fp-notransition"
      , f = "fp-destroyed"
      , u = "fp-enabled"
      , h = "fp-viewing"
      , p = "active"
      , v = "." + p
      , g = "fp-completely"
      , m = "." + g
      , S = ".section"
      , w = "fp-section"
      , y = "." + w
      , b = y + v
      , x = y + ":first"
      , C = y + ":last"
      , A = "fp-tableCell"
      , T = "." + A
      , I = "fp-auto-height"
      , k = "fp-normal-scroll"
      , L = "fp-nav"
      , M = "#" + L
      , O = "fp-tooltip"
      , E = "." + O
      , H = "fp-show-active"
      , R = ".slide"
      , z = "fp-slide"
      , B = "." + z
      , D = B + v
      , P = "fp-slides"
      , F = "." + P
      , V = "fp-slidesContainer"
      , W = "." + V
      , j = "fp-table"
      , Z = "fp-slidesNav"
      , Y = "." + Z
      , N = Y + " a"
      , q = "fp-controlArrow"
      , G = "." + q
      , U = "fp-prev"
      , X = "." + U
      , Q = q + " " + U
      , _ = G + X
      , K = "fp-next"
      , J = "." + K
      , $ = q + " " + K
      , ee = G + J
      , ne = e(n)
      , te = e(t)
      , oe = {
        scrollbars: !0,
        mouseWheel: !0,
        hideScrollbars: !1,
        fadeScrollbars: !1,
        disableMouse: !0,
        interactiveScrollbars: !0
    };
    e.fn.fullpage = function(l) {
        function s(n, t) {
            n || at(0),
            gt("autoScrolling", n, t);
            var o = e(b);
            l.autoScrolling && !l.scrollBar ? (wt.css({
                overflow: "hidden",
                height: "100%"
            }),
            q(Yt.recordHistory, "internal"),
            Lt.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }),
            o.length && at(o.position().top)) : (wt.css({
                overflow: "visible",
                height: "initial"
            }),
            q(!1, "internal"),
            Lt.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            ft(Lt),
            o.length && (console.log("llama scroll"),
            wt.scrollTop(o.position().top),
            console.log("fiunish scroll"))),
            Lt.trigger("setAutoScrolling", [n])
        }
        function q(e, n) {
            gt("recordHistory", e, n)
        }
        function X(e, n) {
            "internal" !== n && l.fadingEffect && bt.fadingEffect && bt.fadingEffect.update(e),
            gt("scrollingSpeed", e, n)
        }
        function K(e, n) {
            gt("fitToSection", e, n)
        }
        function J(e) {
            l.lockAnchors = e
        }
        function re(e) {
            e ? (Jn(),
            $n()) : (Kn(),
            et())
        }
        function ae(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","),
            e.each(t, function(e, t) {
                st(n, t, "m")
            })) : n ? (re(!0),
            nt()) : (re(!1),
            tt())
        }
        function le(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","),
            e.each(t, function(e, t) {
                st(n, t, "k")
            })) : l.keyboardScrolling = n
        }
        function se() {
            var n = e(b).prev(y);
            n.length || !l.loopTop && !l.continuousVertical || (n = e(y).last()),
            n.length && Xe(n, null, !0)
        }
        function ce() {
            var n = e(b).next(y);
            n.length || !l.loopBottom && !l.continuousVertical || (n = e(y).first()),
            n.length && Xe(n, null, !1)
        }
        function de(e, n) {
            X(0, "internal"),
            fe(e, n),
            X(Yt.scrollingSpeed, "internal")
        }
        function fe(e, n) {
            var t = jn(e);
            "undefined" != typeof n ? Yn(e, n) : t.length > 0 && Xe(t)
        }
        function ue(e) {
            qe("right", e)
        }
        function he(e) {
            qe("left", e)
        }
        function pe(n) {
            if (!Lt.hasClass(f)) {
                Ot = !0,
                Mt = ne.height(),
                e(y).each(function() {
                    var n = e(this).find(F)
                      , t = e(this).find(B);
                    l.verticalCentered && e(this).find(T).css("height", Vn(e(this)) + "px"),
                    e(this).css("height", Ce(e(this)) + "px"),
                    l.scrollOverflow && (t.length ? t.each(function() {
                        Pn(e(this))
                    }) : Pn(e(this))),
                    t.length > 1 && Cn(n, n.find(D))
                });
                var t = e(b)
                  , o = t.index(y);
                o && de(o + 1),
                Ot = !1,
                e.isFunction(l.afterResize) && n && l.afterResize.call(Lt),
                e.isFunction(l.afterReBuild) && !n && l.afterReBuild.call(Lt)
            }
        }
        function ve(n) {
            var t = yt.hasClass(c);
            n ? t || (s(!1, "internal"),
            K(!1, "internal"),
            e(M).hide(),
            yt.addClass(c),
            e.isFunction(l.afterResponsive) && l.afterResponsive.call(Lt, n),
            l.responsiveSlides && bt.responsiveSlides && bt.responsiveSlides.toSections(),
            Lt.trigger("afterResponsive", [n])) : t && (s(Yt.autoScrolling, "internal"),
            K(Yt.autoScrolling, "internal"),
            e(M).show(),
            yt.removeClass(c),
            e.isFunction(l.afterResponsive) && l.afterResponsive.call(Lt, n),
            l.responsiveSlides && bt.responsiveSlides && bt.responsiveSlides.toSlides(),
            Lt.trigger("afterResponsive", [n]))
        }
        function ge() {
            return {
                options: l,
                internals: {
                    canScroll: Ht,
                    isScrollAllowed: zt,
                    getDestinationPosition: Ue,
                    isTouch: kt,
                    c: cn,
                    getXmovement: Dn,
                    removeAnimation: En,
                    getTransforms: lt,
                    lazyLoad: en,
                    addAnimation: On,
                    performHorizontalMove: In,
                    landscapeScroll: Cn,
                    silentLandscapeScroll: rt,
                    keepSlidesPosition: Ge,
                    silentScroll: at,
                    styleSlides: xe,
                    scrollHandler: ze,
                    getEventsPage: it,
                    getMSPointer: ot,
                    isReallyTouch: je,
                    checkParentForNormalScrollElement: We,
                    usingExtension: ut,
                    toggleControlArrows: An
                }
            }
        }
        function me() {
            l.css3 && (l.css3 = _n()),
            l.scrollBar = l.scrollBar || l.hybrid,
            ye(),
            be(),
            ae(!0),
            s(l.autoScrolling, "internal");
            var n = e(b).find(D);
            n.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== n.index()) && rt(n),
            Mn(),
            Qn(),
            "complete" === t.readyState && dn(),
            ne.on("load", dn)
        }
        function Se() {
            ne.on("scroll", ze).on("hashchange", fn).blur(Sn).resize(Ln),
            te.keydown(un).keyup(pn).on("click touchstart", M + " a", wn).on("click touchstart", N, yn).on("click", E, hn),
            e(y).on("click touchstart", G, mn),
            l.normalScrollElements && (te.on("mouseenter", l.normalScrollElements, function() {
                re(!1)
            }),
            te.on("mouseleave", l.normalScrollElements, function() {
                re(!0)
            }))
        }
        function we(e) {
            var t = "fp_" + e + "Extension";
            Nt[e] = l[e + "Key"],
            bt[e] = "undefined" != typeof n[t] ? new n[t] : null,
            bt[e] && bt[e].c(e)
        }
        function ye() {
            var n = Lt.find(l.sectionSelector);
            l.anchors.length || (l.anchors = n.filter("[data-anchor]").map(function() {
                return e(this).data("anchor").toString()
            }).get()),
            l.navigationTooltips.length || (l.navigationTooltips = n.filter("[data-tooltip]").map(function() {
                return e(this).data("tooltip").toString()
            }).get())
        }
        function be() {
            Lt.css({
                height: "100%",
                position: "relative"
            }),
            Lt.addClass(r),
            e("html").addClass(u),
            Mt = ne.height(),
            Lt.removeClass(f),
            Ie(),
            ht("parallax", "init"),
            e(y).each(function(n) {
                var t = e(this)
                  , o = t.find(B)
                  , i = o.length;
                Ae(t, n),
                Te(t, n),
                i > 0 ? xe(t, o, i) : l.verticalCentered && Fn(t)
            }),
            l.fixedElements && l.css3 && e(l.fixedElements).appendTo(yt),
            l.navigation && Le(),
            Oe(),
            l.fadingEffect && bt.fadingEffect && bt.fadingEffect.apply(),
            l.scrollOverflow ? ("complete" === t.readyState && Me(),
            ne.on("load", Me)) : Re()
        }
        function xe(n, t, o) {
            var i = 100 * o
              , r = 100 / o;
            t.wrapAll('<div class="' + V + '" />'),
            t.parent().wrap('<div class="' + P + '" />'),
            n.find(W).css("width", i + "%"),
            o > 1 && (l.controlArrows && ke(n),
            l.slidesNavigation && qn(n, o)),
            t.each(function(n) {
                e(this).css("width", r + "%"),
                l.verticalCentered && Fn(e(this))
            });
            var a = n.find(D);
            a.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== a.index()) ? rt(a) : t.eq(0).addClass(p)
        }
        function Ce(e) {
            return l.offsetSections && bt.offsetSections ? bt.offsetSections.getWindowHeight(e) : Mt
        }
        function Ae(n, t) {
            t || 0 !== e(b).length || n.addClass(p),
            n.css("height", Ce(n) + "px"),
            l.paddingTop && n.css("padding-top", l.paddingTop),
            l.paddingBottom && n.css("padding-bottom", l.paddingBottom),
            "undefined" != typeof l.sectionsColor[t] && n.css("background-color", l.sectionsColor[t]),
            "undefined" != typeof l.anchors[t] && n.attr("data-anchor", l.anchors[t])
        }
        function Te(n, t) {
            "undefined" != typeof l.anchors[t] && n.hasClass(p) && zn(l.anchors[t], t),
            l.menu && l.css3 && e(l.menu).closest(a).length && e(l.menu).appendTo(yt)
        }
        function Ie() {
            Lt.find(l.sectionSelector).addClass(w),
            Lt.find(l.slideSelector).addClass(z)
        }
        function ke(e) {
            e.find(F).after('<div class="' + Q + '"></div><div class="' + $ + '"></div>'),
            "#fff" != l.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + l.controlArrowColor),
            e.find(_).css("border-color", "transparent " + l.controlArrowColor + " transparent transparent")),
            l.loopHorizontal || e.find(_).hide()
        }
        function Le() {
            yt.append('<div id="' + L + '"><ul></ul></div>');
            var n = e(M);
            n.addClass(function() {
                return l.showActiveTooltip ? H + " " + l.navigationPosition : l.navigationPosition
            });
            for (var t = 0; t < e(y).length; t++) {
                var o = "";
                l.anchors.length && (o = l.anchors[t]);
                var i = '<li><a href="#' + o + '"><span></span></a>'
                  , r = l.navigationTooltips[t];
                "undefined" != typeof r && "" !== r && (i += '<div class="' + O + " " + l.navigationPosition + '">' + r + "</div>"),
                i += "</li>",
                n.find("ul").append(i)
            }
            e(M).css("margin-top", "-" + e(M).height() / 2 + "px"),
            e(M).find("li").eq(e(b).index(y)).find("a").addClass(p)
        }
        function Me() {
            e(y).each(function() {
                var n = e(this).find(B);
                n.length ? n.each(function() {
                    Pn(e(this))
                }) : Pn(e(this))
            }),
            Re()
        }
        function Oe() {
            Lt.find('iframe[src*="youtube.com/embed/"]').each(function() {
                Ee(e(this), "enablejsapi=1")
            })
        }
        function Ee(e, n) {
            var t = e.attr("src");
            e.attr("src", t + He(t) + n)
        }
        function He(e) {
            return /\?/.test(e) ? "&" : "?"
        }
        function Re() {
            var n = e(b);
            n.addClass(g),
            l.scrollOverflowHandler.afterRender && l.scrollOverflowHandler.afterRender(n),
            en(n),
            nn(n),
            l.scrollOverflowHandler.afterLoad(),
            e.isFunction(l.afterLoad) && l.afterLoad.call(n, n.data("anchor"), n.index(y) + 1),
            e.isFunction(l.afterRender) && l.afterRender.call(Lt)
        }
        function ze() {
            Jt || (requestAnimationFrame(Be),
            Jt = !0)
        }
        function Be() {
            Lt.trigger("onScroll");
            var n;
            if ((!l.autoScrolling || l.scrollBar || ut("dragAndMove")) && !vt()) {
                var i = ut("dragAndMove") ? o.abs(bt.dragAndMove.getCurrentScroll()) : ne.scrollTop()
                  , r = (De(i),
                0)
                  , a = i + ne.height() / 2
                  , s = ut("dragAndMove") ? bt.dragAndMove.getDocumentHeight() : yt.height() - ne.height()
                  , c = s === i
                  , d = t.querySelectorAll(y);
                if (c)
                    r = d.length - 1;
                else if (i)
                    for (var f = 0; f < d.length; ++f) {
                        var u = d[f];
                        u.offsetTop <= a && (r = f)
                    }
                else
                    r = 0;
                if (n = e(d).eq(r),
                !n.hasClass(p)) {
                    qt = !0;
                    var h, v, g = e(b), m = g.index(y) + 1, S = Bn(n), w = n.data("anchor"), x = n.index(y) + 1, C = n.find(D);
                    C.length && (v = C.data("anchor"),
                    h = C.index()),
                    Ht && (n.addClass(p).siblings().removeClass(p),
                    ht("parallax", "afterLoad"),
                    e.isFunction(l.onLeave) && l.onLeave.call(g, m, x, S),
                    e.isFunction(l.afterLoad) && l.afterLoad.call(n, w, x),
                    l.resetSliders && bt.resetSliders && bt.resetSliders.apply({
                        localIsResizing: Ot,
                        leavingSection: m
                    }),
                    on(g),
                    en(n),
                    nn(n),
                    zn(w, x - 1),
                    l.anchors.length && (xt = w),
                    Gn(h, v, w, x)),
                    clearTimeout(Ft),
                    Ft = setTimeout(function() {
                        qt = !1
                    }, 100)
                }
                l.fitToSection && (clearTimeout(Vt),
                Vt = setTimeout(function() {
                    Ht && l.fitToSection && (e(b).is(n) && (Ot = !0),
                    Xe(e(b)),
                    Ot = !1)
                }, l.fitToSectionDelay))
            }
            Jt = !1
        }
        function De(e) {
            var n = e > Gt ? "down" : "up";
            return Gt = e,
            $t = e,
            n
        }
        function Pe(e, n) {
            if (zt.m[e]) {
                var t = "down" === e ? "bottom" : "top"
                  , o = "down" === e ? ce : se;
                if (bt.scrollHorizontally && (o = bt.scrollHorizontally.getScrollSection(e, o)),
                n.length > 0) {
                    if (!l.scrollOverflowHandler.isScrolled(t, n))
                        return !0;
                    o()
                } else
                    o()
            }
        }
        function Fe(e) {
            var n = e.originalEvent;
            !We(e.target) && l.autoScrolling && je(n) && e.preventDefault()
        }
        function Ve(n) {
            var t = n.originalEvent
              , i = e(t.target).closest(y);
            if (!We(n.target) && je(t)) {
                l.autoScrolling && n.preventDefault();
                var r = l.scrollOverflowHandler.scrollable(i)
                  , a = it(t);
                Qt = a.y,
                _t = a.x,
                i.find(F).length && o.abs(Xt - _t) > o.abs(Ut - Qt) ? !Tt && o.abs(Xt - _t) > ne.outerWidth() / 100 * l.touchSensitivity && (Xt > _t ? zt.m.right && ue(i) : zt.m.left && he(i)) : l.autoScrolling && Ht && o.abs(Ut - Qt) > ne.height() / 100 * l.touchSensitivity && (Ut > Qt ? Pe("down", r) : Qt > Ut && Pe("up", r))
            }
        }
        function We(n, t) {
            t = t || 0;
            var o = e(n).parent();
            return !!(t < l.normalScrollElementTouchThreshold && o.is(l.normalScrollElements)) || t != l.normalScrollElementTouchThreshold && We(o, ++t)
        }
        function je(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }
        function Ze(e) {
            var n = e.originalEvent;
            if (l.fitToSection && wt.stop(),
            je(n)) {
                var t = it(n);
                Ut = t.y,
                Xt = t.x
            }
        }
        function Ye(e, n) {
            for (var t = 0, i = e.slice(o.max(e.length - n, 1)), r = 0; r < i.length; r++)
                t += i[r];
            return o.ceil(t / n)
        }
        function Ne(t) {
            var i = (new Date).getTime()
              , r = e(m).hasClass(k);
            if (l.autoScrolling && !At && !r) {
                t = t || n.event;
                var a = t.wheelDelta || -t.deltaY || -t.detail
                  , s = o.max(-1, o.min(1, a))
                  , c = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX
                  , d = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !c;
                Rt.length > 149 && Rt.shift(),
                Rt.push(o.abs(a)),
                l.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                var f = e(b)
                  , u = l.scrollOverflowHandler.scrollable(f)
                  , h = i - Kt;
                if (Kt = i,
                h > 200 && (Rt = []),
                Ht && !pt()) {
                    var p = Ye(Rt, 10)
                      , v = Ye(Rt, 70)
                      , g = p >= v;
                    g && d && (s < 0 ? Pe("down", u) : Pe("up", u))
                }
                return !1
            }
            l.fitToSection && wt.stop()
        }
        function qe(n, t) {
            var o = "undefined" == typeof t ? e(b) : t
              , i = o.find(F);
            if (!(!i.length || pt() || Tt || i.find(B).length < 2)) {
                var r = i.find(D)
                  , a = null;
                if (a = "left" === n ? r.prev(B) : r.next(B),
                !a.length) {
                    if (!l.loopHorizontal)
                        return;
                    a = "left" === n ? r.siblings(":last") : r.siblings(":first")
                }
                Tt = !0,
                Cn(i, a, n)
            }
        }
        function Ge() {
            e(D).each(function() {
                rt(e(this), "internal")
            })
        }
        function Ue(e) {
            var n = e.position()
              , t = n.top
              , o = ut("dragAndMove") && bt.dragAndMove.isGrabbing ? bt.dragAndMove.isScrollingDown() : n.top > $t
              , i = t - Mt + e.outerHeight()
              , r = l.bigSectionsDestination;
            return e.outerHeight() > Mt ? (o || r) && "bottom" !== r || (t = i) : (o || Ot && e.is(":last-child")) && (t = i),
            l.offsetSections && bt.offsetSections && (t = bt.offsetSections.getSectionPosition(o, t, e)),
            $t = t,
            t
        }
        function Xe(n, t, o) {
            if ("undefined" != typeof n && n.length) {
                var i, r, a = Ue(n), s = {
                    element: n,
                    callback: t,
                    isMovementUp: o,
                    dtop: a,
                    yMovement: Bn(n),
                    anchorLink: n.data("anchor"),
                    sectionIndex: n.index(y),
                    activeSlide: n.find(D),
                    activeSection: e(b),
                    leavingSection: e(b).index(y) + 1,
                    localIsResizing: Ot
                };
                s.activeSection.is(n) && !Ot || l.scrollBar && ne.scrollTop() === s.dtop && !n.hasClass(I) || (s.activeSlide.length && (i = s.activeSlide.data("anchor"),
                r = s.activeSlide.index()),
                ht("parallax", "apply", s),
                l.autoScrolling && l.continuousVertical && "undefined" != typeof s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = Ke(s)),
                e.isFunction(l.onLeave) && !s.localIsResizing && l.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement) === !1 || (ut("scrollOverflowReset") && bt.scrollOverflowReset.setPrevious(s.activeSection),
                on(s.activeSection),
                l.scrollOverflowHandler.beforeLeave(),
                n.addClass(p).siblings().removeClass(p),
                en(n),
                l.scrollOverflowHandler.onLeave(),
                Ht = !1,
                Gn(r, i, s.anchorLink, s.sectionIndex),
                Qe(s),
                xt = s.anchorLink,
                zn(s.anchorLink, s.sectionIndex)))
            }
        }
        function Qe(n) {
            if (l.css3 && l.autoScrolling && !l.scrollBar) {
                var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
                Wn(t, !0),
                l.scrollingSpeed ? (clearTimeout(Dt),
                Dt = setTimeout(function() {
                    $e(n)
                }, l.scrollingSpeed)) : $e(n)
            } else {
                var i = _e(n);
                e(i.element).animate(i.options, l.scrollingSpeed, l.easing).promise().done(function() {
                    l.scrollBar ? setTimeout(function() {
                        $e(n)
                    }, 30) : $e(n)
                })
            }
        }
        function _e(e) {
            var n = {};
            return l.autoScrolling && !l.scrollBar ? (n.options = {
                top: -e.dtop
            },
            n.element = a) : (n.options = {
                scrollTop: e.dtop
            },
            n.element = "html, body"),
            n
        }
        function Ke(n) {
            return n.isMovementUp ? n.activeSection.before(n.activeSection.nextAll(y)) : n.activeSection.after(n.activeSection.prevAll(y).get().reverse()),
            at(e(b).position().top),
            Ge(),
            n.wrapAroundElements = n.activeSection,
            n.dtop = n.element.position().top,
            n.yMovement = Bn(n.element),
            n.leavingSection = n.activeSection.index(y) + 1,
            n.sectionIndex = n.element.index(y),
            e(a).trigger("onContinuousVertical", [n]),
            n
        }
        function Je(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(x).before(n.wrapAroundElements) : e(C).after(n.wrapAroundElements),
            at(e(b).position().top),
            Ge(),
            n.sectionIndex = n.element.index(y),
            n.leavingSection = n.activeSection.index(y) + 1)
        }
        function $e(n) {
            Je(n),
            e.isFunction(l.afterLoad) && !n.localIsResizing && l.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
            l.scrollOverflowHandler.afterLoad(),
            ht("parallax", "afterLoad"),
            ut("scrollOverflowReset") && bt.scrollOverflowReset.reset(),
            l.resetSliders && bt.resetSliders && bt.resetSliders.apply(n),
            n.localIsResizing || nn(n.element),
            n.element.addClass(g).siblings().removeClass(g),
            Ht = !0,
            e.isFunction(n.callback) && n.callback.call(this)
        }
        function en(n) {
            if (l.lazyLoading) {
                var t, o = rn(n);
                o.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                    t = e(this),
                    t.attr("src", t.data("src")),
                    t.removeAttr("data-src"),
                    t.is("source") && t.closest("video").get(0).load()
                })
            }
        }
        function nn(n) {
            var t = rn(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }),
            t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && tn(n),
                n.onload = function() {
                    n.hasAttribute("data-autoplay") && tn(n)
                }
            })
        }
        function tn(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }
        function on(n) {
            var t = rn(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }),
            t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }
        function rn(n) {
            var t = n.find(D);
            return t.length && (n = e(t)),
            n
        }
        function an(e) {
            function n(e) {
                var n, o, i, r, l, s, c, d = "", f = 0;
                for (e = e.replace(/[^A-Za-z0-9+\/=]/g, ""); f < e.length; )
                    r = a.indexOf(e.charAt(f++)),
                    l = a.indexOf(e.charAt(f++)),
                    s = a.indexOf(e.charAt(f++)),
                    c = a.indexOf(e.charAt(f++)),
                    n = r << 2 | l >> 4,
                    o = (15 & l) << 4 | s >> 2,
                    i = (3 & s) << 6 | c,
                    d += String.fromCharCode(n),
                    64 != s && (d += String.fromCharCode(o)),
                    64 != c && (d += String.fromCharCode(i));
                return d = t(d)
            }
            function t(e) {
                for (var n, t = "", o = 0, i = 0, r = 0; o < e.length; )
                    i = e.charCodeAt(o),
                    i < 128 ? (t += String.fromCharCode(i),
                    o++) : i > 191 && i < 224 ? (r = e.charCodeAt(o + 1),
                    t += String.fromCharCode((31 & i) << 6 | 63 & r),
                    o += 2) : (r = e.charCodeAt(o + 1),
                    n = e.charCodeAt(o + 2),
                    t += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | 63 & n),
                    o += 3);
                return t
            }
            function o(e) {
                return e
            }
            function i(e) {
                return e.slice(3).slice(0, -3)
            }
            function r(e) {
                var t = e.split("_");
                if (t.length > 1) {
                    var o = t[1]
                      , r = e.replace(i(t[1]), "").split("_")[0]
                      , a = r;
                    return a + "_" + n(o.slice(3).slice(0, -3))
                }
                return i(e)
            }
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            return o(r(n(e)))
        }
        function ln() {
            if (t.domain.length) {
                var e = t.domain.replace(/^(www\.)/, "").split(".")
                  , n = (e.shift(),
                e.join("."));
                return n.replace(/(^\.*)|(\.*$)/g, "")
            }
            return ""
        }
        function sn(e) {
            var n = ln()
              , t = ["localhost", "127.0.0.1", "jshell.net", "UDdDQU5ZNlNN"]
              , o = t[0]
              , i = t[1]
              , r = t[2]
              , a = an(t[3])
              , l = [o, i, r].indexOf(n) < 0 && 0 !== n.length
              , s = "undefined" != typeof Nt[e] && Nt[e].length;
            if (!s && l)
                return !1;
            var c = s ? an(Nt[e]) : "";
            c = c.split("_");
            var d = c.length > 1 && c[1].indexOf(e, c[1].length - e.length) > -1
              , f = c[0].indexOf(n, c[0].length - n.length) < 0;
            return !(f && l && a != c[0]) && d || !l
        }
        function cn(e) {
            var n = an("MTIzPGRpdiBzdHlsZT0iei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkOyB0b3A6IDIwcHg7IGxlZnQ6MjBweDsgYmFja2dyb3VuZDpyZWQ7IHBhZGRpbmc6IDdweCAxNXB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtZmFtaWx5OiBhcmlhbDsgY29sb3I6ICNmZmY7IGRpc3BsYXk6IGlubGluZS1ibG9jazsiPjxhIGhyZWY9Imh0dHA6Ly9hbHZhcm90cmlnby5jb20vZnVsbFBhZ2UvZXh0ZW5zaW9ucy8iIHN0eWxlPSJjb2xvcjogI2ZmZjsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7Ij5VbmxpY2Vuc2VkIGZ1bGxQYWdlLmpzIEV4dGVuc2lvbjwvYT48L2Rpdj4xMjM=")
              , t = o.random() < .5;
            if (!sn(e)) {
                var i, r = "9999999", a = "z-index", l = function() {
                    i = t ? yt.find("div").first() : yt.find("div").last(),
                    i.css(a) !== r && (t ? yt.prepend(n) : yt.append(n))
                };
                l(),
                setInterval(l, 2e3)
            }
        }
        function dn() {
            var e = n.location.hash.replace("#", "").split("/")
              , t = decodeURIComponent(e[0])
              , o = decodeURIComponent(e[1]);
            t && (l.animateAnchor ? Yn(t, o) : de(t, o))
        }
        function fn() {
            if (!qt && !l.lockAnchors) {
                var e = n.location.hash.replace("#", "").split("/")
                  , t = decodeURIComponent(e[0])
                  , o = decodeURIComponent(e[1])
                  , i = "undefined" == typeof xt
                  , r = "undefined" == typeof xt && "undefined" == typeof o && !Tt;
                t.length && (t && t !== xt && !i || r || !Tt && Ct != o) && Yn(t, o)
            }
        }
        function un(n) {
            clearTimeout(Wt);
            var t = e(":focus");
            if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && l.keyboardScrolling && l.autoScrolling) {
                var o = n.which
                  , i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && n.preventDefault(),
                At = n.ctrlKey,
                Wt = setTimeout(function() {
                    bn(n)
                }, 150)
            }
        }
        function hn() {
            e(this).prev().trigger("click")
        }
        function pn(e) {
            Et && (At = e.ctrlKey)
        }
        function vn(e) {
            2 == e.which && (eo = e.pageY,
            Lt.on("mousemove", xn))
        }
        function gn(e) {
            2 == e.which && Lt.off("mousemove")
        }
        function mn() {
            var n = e(this).closest(y);
            e(this).hasClass(U) ? zt.m.left && he(n) : zt.m.right && ue(n)
        }
        function Sn() {
            Et = !1,
            At = !1
        }
        function wn(n) {
            n.preventDefault();
            var t = e(this).parent().index();
            Xe(e(y).eq(t))
        }
        function yn(n) {
            n.preventDefault();
            var t = e(this).closest(y).find(F)
              , o = t.find(B).eq(e(this).closest("li").index());
            Cn(t, o)
        }
        function bn(n) {
            var t = n.shiftKey;
            if (Ht || !([37, 39].indexOf(n.which) < 0))
                switch (n.which) {
                case 38:
                case 33:
                    zt.k.up && se();
                    break;
                case 32:
                    if (t && zt.k.up) {
                        se();
                        break
                    }
                case 40:
                case 34:
                    zt.k.down && ce();
                    break;
                case 36:
                    zt.k.up && fe(1);
                    break;
                case 35:
                    zt.k.down && fe(e(y).length);
                    break;
                case 37:
                    zt.k.left && he();
                    break;
                case 39:
                    zt.k.right && ue();
                    break;
                default:
                    return
                }
        }
        function xn(e) {
            Ht && (e.pageY < eo && zt.m.up ? se() : e.pageY > eo && zt.m.down && ce()),
            eo = e.pageY
        }
        function Cn(n, t, o) {
            var i = n.closest(y)
              , r = {
                slides: n,
                destiny: t,
                direction: o,
                destinyPos: t.position(),
                slideIndex: t.index(),
                section: i,
                sectionIndex: i.index(y),
                anchorLink: i.data("anchor"),
                slidesNav: i.find(Y),
                slideAnchor: Xn(t),
                prevSlide: i.find(D),
                prevSlideIndex: i.find(D).index(),
                localIsResizing: Ot
            };
            return r.xMovement = Dn(r.prevSlideIndex, r.slideIndex),
            r.localIsResizing || (Ht = !1),
            ht("parallax", "applyHorizontal", r),
            l.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && e.isFunction(l.onSlideLeave) && l.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.xMovement, r.slideIndex) === !1 ? void (Tt = !1) : (t.addClass(p).siblings().removeClass(p),
            r.localIsResizing || (on(r.prevSlide),
            en(t)),
            An(r),
            i.hasClass(p) && Gn(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex),
            bt.continuousHorizontal && bt.continuousHorizontal.apply(r),
            vt() ? Tn(r) : In(n, r, !0),
            void (l.interlockedSlides && bt.interlockedSlides && bt.interlockedSlides.apply(r)))
        }
        function An(e) {
            !l.loopHorizontal && l.controlArrows && (e.section.find(_).toggle(0 !== e.slideIndex),
            e.section.find(ee).toggle(!e.destiny.is(":last-child")))
        }
        function Tn(n) {
            bt.continuousHorizontal && bt.continuousHorizontal.afterSlideLoads(n),
            kn(n.slidesNav, n.slideIndex),
            n.localIsResizing || (ht("parallax", "afterSlideLoads"),
            e.isFunction(l.afterSlideLoad) && l.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex),
            Ht = !0,
            nn(n.destiny)),
            Tt = !1,
            bt.interlockedSlides && bt.interlockedSlides.apply(n)
        }
        function In(e, n, t) {
            var i = n.destinyPos;
            if (l.css3) {
                var r = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                On(e.find(W)).css(lt(r)),
                Pt = setTimeout(function() {
                    t && Tn(n)
                }, l.scrollingSpeed, l.easing)
            } else
                e.animate({
                    scrollLeft: o.round(i.left)
                }, l.scrollingSpeed, l.easing, function() {
                    t && Tn(n)
                })
        }
        function kn(e, n) {
            e.find(v).removeClass(p),
            e.find("li").eq(n).find("a").addClass(p)
        }
        function Ln() {
            if (Lt.trigger("onResize"),
            Mn(),
            It) {
                var n = e(t.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = ne.height();
                    o.abs(i - no) > 20 * o.max(no, i) / 100 && (pe(!0),
                    no = i)
                }
            } else
                clearTimeout(Bt),
                Bt = setTimeout(function() {
                    pe(!0)
                }, 350)
        }
        function Mn() {
            var e = l.responsive || l.responsiveWidth
              , n = l.responsiveHeight
              , t = e && ne.outerWidth() < e
              , o = n && ne.height() < n;
            e && n ? ve(t || o) : e ? ve(t) : n && ve(o)
        }
        function On(e) {
            var n = "all " + l.scrollingSpeed + "ms " + l.easingcss3;
            return e.removeClass(d),
            e.css({
                "-webkit-transition": n,
                transition: n
            })
        }
        function En(e) {
            return e.addClass(d)
        }
        function Hn(n, t) {
            l.navigation && (e(M).find(v).removeClass(p),
            n ? e(M).find('a[href="#' + n + '"]').addClass(p) : e(M).find("li").eq(t).find("a").addClass(p))
        }
        function Rn(n) {
            l.menu && (e(l.menu).find(v).removeClass(p),
            e(l.menu).find('[data-menuanchor="' + n + '"]').addClass(p))
        }
        function zn(e, n) {
            Rn(e),
            Hn(e, n)
        }
        function Bn(n) {
            var t = e(b).index(y)
              , o = n.index(y);
            return t == o ? "none" : t > o ? "up" : "down"
        }
        function Dn(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }
        function Pn(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var n, t = l.scrollOverflowHandler, o = t.wrapContent(), i = e.closest(y), r = t.scrollable(e);
                r.length ? n = t.scrollHeight(e) : (n = e.get(0).scrollHeight,
                l.verticalCentered && (n = e.find(T).get(0).scrollHeight));
                var a = Vn(i);
                n > a ? r.length ? t.update(e, a) : (l.verticalCentered ? e.find(T).wrapInner(o) : e.wrapInner(o),
                t.create(e, a, l.scrollOverflowOptions)) : t.remove(e),
                e.css("overflow", "")
            }
        }
        function Fn(e) {
            e.hasClass(j) || e.addClass(j).wrapInner('<div class="' + A + '" style="height:' + Vn(e) + 'px;" />')
        }
        function Vn(e) {
            var n = Ce(e);
            if (l.paddingTop || l.paddingBottom) {
                var t = e;
                t.hasClass(w) || (t = e.closest(y));
                var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
                n = Mt - o
            }
            return n
        }
        function Wn(e, n) {
            n ? On(Lt) : En(Lt),
            Lt.css(lt(e)),
            setTimeout(function() {
                Lt.removeClass(d)
            }, 10)
        }
        function jn(n) {
            var t = Lt.find(y + '[data-anchor="' + n + '"]');
            return t.length || (t = e(y).eq(n - 1)),
            t
        }
        function Zn(e, n) {
            var t = n.find(F)
              , o = t.find(B + '[data-anchor="' + e + '"]');
            return o.length || (o = t.find(B).eq(e)),
            o
        }
        function Yn(e, n) {
            var t = jn(e);
            t.length && ("undefined" == typeof n && (n = 0),
            e === xt || t.hasClass(p) ? Nn(t, n) : Xe(t, function() {
                Nn(t, n)
            }))
        }
        function Nn(e, n) {
            if ("undefined" != typeof n) {
                var t = e.find(F)
                  , o = Zn(n, e);
                o.length && Cn(t, o)
            }
        }
        function qn(e, n) {
            e.append('<div class="' + Z + '"><ul></ul></div>');
            var t = e.find(Y);
            t.addClass(l.slidesNavPosition);
            for (var o = 0; o < n; o++)
                t.find("ul").append('<li><a href="#"><span></span></a></li>');
            t.css("margin-left", "-" + t.width() / 2 + "px"),
            t.find("li").first().find("a").addClass(p)
        }
        function Gn(e, n, t, o) {
            var i = "";
            l.anchors.length && !l.lockAnchors && (e ? ("undefined" != typeof t && (i = t),
            "undefined" == typeof n && (n = e),
            Ct = n,
            Un(i + "/" + n)) : "undefined" != typeof e ? (Ct = n,
            Un(t)) : Un(t)),
            Qn()
        }
        function Un(e) {
            if (l.recordHistory)
                location.hash = e;
            else if (It || kt)
                n.history.replaceState(i, i, "#" + e);
            else {
                var t = n.location.href.split("#")[0];
                n.location.replace(t + "#" + e)
            }
        }
        function Xn(e) {
            var n = e.data("anchor")
              , t = e.index();
            return "undefined" == typeof n && (n = t),
            n
        }
        function Qn() {
            var n = e(b)
              , t = n.find(D)
              , o = Xn(n)
              , i = Xn(t)
              , r = String(o);
            t.length && (r = r + "-" + i),
            r = r.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b","g");
            yt[0].className = yt[0].className.replace(a, ""),
            yt.addClass(h + "-" + r)
        }
        function _n() {
            var e, o = t.createElement("p"), r = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            t.body.insertBefore(o, null);
            for (var a in r)
                o.style[a] !== i && (o.style[a] = "translate3d(1px,1px,1px)",
                e = n.getComputedStyle(o).getPropertyValue(r[a]));
            return t.body.removeChild(o),
            e !== i && e.length > 0 && "none" !== e
        }
        function Kn() {
            t.addEventListener ? (t.removeEventListener("mousewheel", Ne, !1),
            t.removeEventListener("wheel", Ne, !1),
            t.removeEventListener("MozMousePixelScroll", Ne, !1)) : t.detachEvent("onmousewheel", Ne)
        }
        function Jn() {
            var e, o = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent",
            o = "on");
            var r = "onwheel"in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == r ? t[e](o + "MozMousePixelScroll", Ne, !1) : t[e](o + r, Ne, !1)
        }
        function $n() {
            Lt.on("mousedown", vn).on("mouseup", gn)
        }
        function et() {
            Lt.off("mousedown", vn).off("mouseup", gn)
        }
        function nt() {
            (It || kt) && (l.autoScrolling && yt.off(Zt.touchmove).on(Zt.touchmove, Fe),
            e(a).off(Zt.touchstart).on(Zt.touchstart, Ze).off(Zt.touchmove).on(Zt.touchmove, Ve))
        }
        function tt() {
            (It || kt) && e(a).off(Zt.touchstart).off(Zt.touchmove)
        }
        function ot() {
            var e;
            return e = n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }
        function it(e) {
            var n = [];
            return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY,
            n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX,
            kt && je(e) && l.scrollBar && (n.y = e.touches[0].pageY,
            n.x = e.touches[0].pageX),
            n
        }
        function rt(e, n) {
            X(0, "internal"),
            "undefined" != typeof n && (Ot = !0),
            Cn(e.closest(F), e),
            "undefined" != typeof n && (Ot = !1),
            X(Yt.scrollingSpeed, "internal")
        }
        function at(e) {
            var n = o.round(e);
            if (l.css3 && l.autoScrolling && !l.scrollBar) {
                var t = "translate3d(0px, -" + n + "px, 0px)";
                Wn(t, !1)
            } else
                l.autoScrolling && !l.scrollBar ? Lt.css("top", -n) : wt.scrollTop(n)
        }
        function lt(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }
        function st(e, n, t) {
            switch (n) {
            case "up":
                zt[t].up = e;
                break;
            case "down":
                zt[t].down = e;
                break;
            case "left":
                zt[t].left = e;
                break;
            case "right":
                zt[t].right = e;
                break;
            case "all":
                "m" == t ? ae(e) : le(e)
            }
        }
        function ct(n) {
            Lt.trigger("destroy", [n]),
            s(!1, "internal"),
            ae(!1),
            le(!1),
            Lt.addClass(f),
            clearTimeout(Pt),
            clearTimeout(Dt),
            clearTimeout(Bt),
            clearTimeout(Ft),
            clearTimeout(Vt),
            ne.off("scroll", ze).off("hashchange", fn).off("resize", Ln),
            te.off("click touchstart", M + " a").off("mouseenter", M + " li").off("mouseleave", M + " li").off("click touchstart", N).off("mouseover", l.normalScrollElements).off("mouseout", l.normalScrollElements),
            e(y).off("click touchstart", G),
            ut("dragAndMove") && bt.dragAndMove.destroy(),
            clearTimeout(Pt),
            clearTimeout(Dt),
            n && dt()
        }
        function dt() {
            at(0),
            Lt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                e(this).attr("src", e(this).data("src")),
                e(this).removeAttr("data-src")
            }),
            e(M + ", " + Y + ", " + G).remove(),
            e(y).css({
                height: "",
                "background-color": "",
                padding: ""
            }),
            e(B).css({
                width: ""
            }),
            Lt.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            wt.css({
                overflow: "",
                height: ""
            }),
            e("html").removeClass(u),
            yt.removeClass(c),
            e.each(yt.get(0).className.split(/\s+/), function(e, n) {
                0 === n.indexOf(h) && yt.removeClass(n)
            }),
            e(y + ", " + B).each(function() {
                l.scrollOverflowHandler.remove(e(this)),
                e(this).removeClass(j + " " + p)
            }),
            ft(Lt),
            Lt.find(T + ", " + W + ", " + F).each(function() {
                e(this).replaceWith(this.childNodes)
            }),
            wt.scrollTop(0);
            var n = [w, z, V];
            e.each(n, function(n, t) {
                e("." + t).removeClass(t)
            })
        }
        function ft(e) {
            return e.css({
                "-webkit-transition": "none",
                transition: "none"
            })
        }
        function ut(e) {
            return null !== l[e] && "object" == typeof l[e] ? l[e].enabled && bt[e] : l[e] && bt[e]
        }
        function ht(e, n, t) {
            var o = Array.isArray(t) ? t.join(", ") : t;
            ut(e) && bt[e][n](o)
        }
        function pt() {
            return ut("dragAndMove") && bt.dragAndMove.isAnimating
        }
        function vt() {
            return ut("dragAndMove") && bt.dragAndMove.isGrabbing
        }
        function gt(e, n, t) {
            l[e] = n,
            "internal" !== t && (Yt[e] = n)
        }
        function mt() {
            return e("html").hasClass(u) ? void St("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (l.continuousVertical && (l.loopTop || l.loopBottom) && (l.continuousVertical = !1,
            St("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            l.scrollBar && l.scrollOverflow && St("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),
            !l.continuousVertical || !l.scrollBar && l.autoScrolling || (l.continuousVertical = !1,
            St("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            void e.each(l.anchors, function(n, t) {
                var o = te.find("[name]").filter(function() {
                    return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase()
                })
                  , i = te.find("[id]").filter(function() {
                    return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase()
                });
                (i.length || o.length) && (St("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),
                i.length && St("error", '"' + t + '" is is being used by another element `id` property'),
                o.length && St("error", '"' + t + '" is is being used by another element `name` property'))
            }))
        }
        function St(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
        if (e("html").hasClass(u))
            return void mt();
        var wt = e("html, body")
          , yt = e("body")
          , bt = e.fn.fullpage;
        l = e.extend(!0, {
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: ie,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            sectionSelector: S,
            slideSelector: R,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, l);
        var xt, Ct, At, Tt = !1, It = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), kt = "ontouchstart"in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, Lt = e(this), Mt = ne.height(), Ot = !1, Et = !0, Ht = !0, Rt = [], zt = {};
        zt.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        },
        zt.k = e.extend(!0, {}, zt.m);
        var Bt, Dt, Pt, Ft, Vt, Wt, jt = ot(), Zt = {
            touchmove: "ontouchmove"in n ? "touchmove" : jt.move,
            touchstart: "ontouchstart"in n ? "touchstart" : jt.down
        }, Yt = e.extend(!0, {}, l), Nt = {};
        mt(),
        oe.click = kt,
        l.scrollOverflowOptions = e.extend(oe, l.scrollOverflowOptions),
        e.extend(e.easing, {
            easeInOutCubic: function(e, n, t, o, i) {
                return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t
            }
        }),
        e(this).length && (bt.setAutoScrolling = s,
        bt.setRecordHistory = q,
        bt.setScrollingSpeed = X,
        bt.setFitToSection = K,
        bt.setLockAnchors = J,
        bt.setMouseWheelScrolling = re,
        bt.setAllowScrolling = ae,
        bt.setKeyboardScrolling = le,
        bt.moveSectionUp = se,
        bt.moveSectionDown = ce,
        bt.silentMoveTo = de,
        bt.moveTo = fe,
        bt.moveSlideRight = ue,
        bt.moveSlideLeft = he,
        bt.reBuild = pe,
        bt.setResponsive = ve,
        bt.getFullpageData = ge,
        bt.destroy = ct,
        bt.landscapeScroll = Cn,
        we("continuousHorizontal"),
        we("scrollHorizontally"),
        we("resetSliders"),
        we("interlockedSlides"),
        we("responsiveSlides"),
        we("fadingEffect"),
        we("dragAndMove"),
        we("offsetSections"),
        we("scrollOverflowReset"),
        we("parallax"),
        ut("dragAndMove") && bt.dragAndMove.init(),
        me(),
        Se(),
        ut("dragAndMove") && bt.dragAndMove.turnOffTouch());
        var qt = !1
          , Gt = 0
          , Ut = 0
          , Xt = 0
          , Qt = 0
          , _t = 0;
        !function() {
            var e = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || n.msRequestAnimationFrame;
            n.requestAnimationFrame = e
        }();
        var Kt = (new Date).getTime()
          , Jt = !1
          , $t = 0
          , eo = 0
          , no = Mt
    }
    ,
    "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
        this.wrapper.addEventListener("wheel", this),
        this.wrapper.addEventListener("mousewheel", this),
        this.wrapper.addEventListener("DOMMouseScroll", this)
    }
    ,
    IScroll.prototype.wheelOff = function() {
        this.wrapper.removeEventListener("wheel", this),
        this.wrapper.removeEventListener("mousewheel", this),
        this.wrapper.removeEventListener("DOMMouseScroll", this)
    }
    );
    var ie = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function(n) {
            var t = e(b).find(s);
            t.each(function() {
                var t = e(this).data("iscrollInstance");
                "undefined" != typeof t && t && (n ? t.wheelOn() : t.wheelOff())
            })
        },
        onLeave: function() {
            ie.toggleWheel(!1)
        },
        beforeLeave: function() {
            ie.onLeave()
        },
        afterLoad: function() {
            ie.toggleWheel(!0)
        },
        create: function(n, t, o) {
            var i = n.find(s);
            i.height(t),
            i.each(function() {
                var n = e(this)
                  , t = n.data("iscrollInstance");
                t && e.each(ie.iScrollInstances, function() {
                    e(this).destroy()
                }),
                t = new IScroll(n.get(0),o),
                t.on("scrollEnd", function() {
                    this.fp_isAtTop = this.y > -30,
                    this.fp_isAtEnd = this.y - this.maxScrollY < 30
                }),
                ie.iScrollInstances.push(t),
                t.wheelOff(),
                n.data("iscrollInstance", t)
            })
        },
        isScrolled: function(e, n) {
            var t = n.data("iscrollInstance");
            return !t || ("top" === e ? t.y >= 0 && !n.scrollTop() : "bottom" === e ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0)
        },
        scrollable: function(e) {
            return e.find(F).length ? e.find(D).find(s) : e.find(s)
        },
        scrollHeight: function(e) {
            return e.find(s).children().first().get(0).scrollHeight
        },
        remove: function(e) {
            var n = e.find(s);
            if (n.length) {
                var t = n.data("iscrollInstance");
                t && t.destroy(),
                n.data("iscrollInstance", null)
            }
            e.find(s).children().first().children().first().unwrap().unwrap()
        },
        update: function(n, t) {
            clearTimeout(ie.refreshId),
            ie.refreshId = setTimeout(function() {
                e.each(ie.iScrollInstances, function() {
                    e(this).get(0).refresh()
                })
            }, 150),
            n.find(s).css("height", t + "px").parent().css("height", t + "px")
        },
        wrapContent: function() {
            return '<div class="' + l + '"><div class="fp-scroller"></div></div>'
        }
    }
});