/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function (t, e, i) {
	function n(i, n, o) {
		var r = e.createElement(i);return n && (r.id = Z + n), o && (r.style.cssText = o), t(r);
	}function o() {
		return i.innerHeight ? i.innerHeight : t(i).height();
	}function r(e, i) {
		i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function (e) {
			var n;return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e];
		}, this.get = function (e) {
			var i = this.value(e);return t.isFunction(i) ? i.call(this.el, this) : i;
		};
	}function h(t) {
		var e = W.length,
		    i = (A + t) % e;return 0 > i ? e + i : i;
	}function a(t, e) {
		return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10));
	}function s(t, e) {
		return t.get("photo") || t.get("photoRegex").test(e);
	}function l(t, e) {
		return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e;
	}function d(t) {
		"contains" in x[0] && !x[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), x.focus());
	}function c(t) {
		c.str !== t && (x.add(v).removeClass(c.str).addClass(t), c.str = t);
	}function g(e) {
		A = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function () {
			var i = t.data(this, Y),
			    n = new r(this, i);return n.get("rel") === e;
		}), A = W.index(_.el), -1 === A && (W = W.add(_.el), A = W.length - 1)) : W = t(_.el);
	}function u(i) {
		t(e).trigger(i), ae.triggerHandler(i);
	}function f(i) {
		var o;if (!G) {
			if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !U) {
				U = $ = !0, c(_.get("className")), x.css({ visibility: "hidden", display: "block", opacity: "" }), I = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({ width: "", height: "" }).append(I), j = T.height() + k.height() + b.outerHeight(!0) - b.height(), D = C.width() + H.width() + b.outerWidth(!0) - b.width(), N = I.outerHeight(!0), z = I.outerWidth(!0);var h = a(_.get("initialWidth"), "x"),
				    s = a(_.get("initialHeight"), "y"),
				    l = _.get("maxWidth"),
				    f = _.get("maxHeight");_.w = Math.max((l !== !1 ? Math.min(h, a(l, "x")) : h) - z - D, 0), _.h = Math.max((f !== !1 ? Math.min(s, a(f, "y")) : s) - N - j, 0), I.css({ width: "", height: _.h }), J.position(), u(ee), _.get("onOpen"), O.add(F).hide(), x.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function () {
					e.removeEventListener("focus", d, !0);
				})), _.get("returnFocus") && ae.one(re, function () {
					t(_.el).focus();
				});
			}var p = parseFloat(_.get("opacity"));v.css({ opacity: p === p ? p : "", cursor: _.get("overlayClose") ? "pointer" : "", visibility: "visible" }).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w();
		}
	}function p() {
		x || (V = !1, E = t(i), x = n(se).attr({ id: Y, "class": t.support.opacity === !1 ? Z + "IE" : "", role: "dialog", tabindex: "-1" }).hide(), v = n(se, "Overlay").hide(), L = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), y = n(se, "Wrapper"), b = n(se, "Content").append(F = n(se, "Title"), R = n(se, "Current"), P = t('<button type="button"/>').attr({ id: Z + "Previous" }), K = t('<button type="button"/>').attr({ id: Z + "Next" }), S = t('<button type="button"/>').attr({ id: Z + "Slideshow" }), L), B = t('<button type="button"/>').attr({ id: Z + "Close" }), y.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({ "float": "left" }), M = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(R).add(S)), e.body && !x.parent().length && t(e.body).append(v, x.append(y, M));
	}function m() {
		function i(t) {
			t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this));
		}return x ? (V || (V = !0, K.click(function () {
			J.next();
		}), P.click(function () {
			J.prev();
		}), B.click(function () {
			J.close();
		}), v.click(function () {
			_.get("overlayClose") && J.close();
		}), t(e).bind("keydown." + Z, function (t) {
			var e = t.keyCode;U && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), U && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()));
		}), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1;
	}function w() {
		var e,
		    o,
		    r,
		    h = J.prep,
		    d = ++le;if ($ = !0, q = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - N - j : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - z - D : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - z - D, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - N - j, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function () {
			L.show();
		}, 100), _.get("inline")) {
			var c = t(e).eq(0);r = t("<div>").hide().insertBefore(c), ae.one(he, function () {
				r.replaceWith(c);
			}), h(c);
		} else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), q = _.get("createImg"), t(q).addClass(Z + "Photo").bind("error." + Z, function () {
			h(n(se, "Error").html(_.get("imgError")));
		}).one("load", function () {
			d === le && setTimeout(function () {
				var e;_.get("retinaImage") && i.devicePixelRatio > 1 && (q.height = q.height / i.devicePixelRatio, q.width = q.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function o() {
					q.height -= q.height * e, q.width -= q.width * e;
				}, _.mw && q.width > _.mw && (e = (q.width - _.mw) / q.width, o()), _.mh && q.height > _.mh && (e = (q.height - _.mh) / q.height, o())), _.h && (q.style.marginTop = Math.max(_.mh - q.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[A + 1]) && (q.style.cursor = "pointer", t(q).bind("click." + Z, function () {
					J.next();
				})), q.style.width = q.width + "px", q.style.height = q.height + "px", h(q);
			}, 1);
		}), q.src = e) : e && M.load(e, _.get("data"), function (e, i) {
			d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents());
		});
	}var v,
	    x,
	    y,
	    b,
	    T,
	    C,
	    H,
	    k,
	    W,
	    E,
	    I,
	    M,
	    L,
	    F,
	    R,
	    S,
	    K,
	    P,
	    B,
	    O,
	    _,
	    j,
	    D,
	    N,
	    z,
	    A,
	    q,
	    U,
	    $,
	    G,
	    Q,
	    J,
	    V,
	    X = { html: !1, photo: !1, iframe: !1, inline: !1, transition: "elastic", speed: 300, fadeOut: 300, width: !1, initialWidth: "600", innerWidth: !1, maxWidth: !1, height: !1, initialHeight: "450", innerHeight: !1, maxHeight: !1, scalePhotos: !0, scrolling: !0, opacity: .9, preloading: !0, className: !1, overlayClose: !0, escKey: !0, arrowKey: !0, top: !1, bottom: !1, left: !1, right: !1, fixed: !1, data: void 0, closeButton: !0, fastIframe: !0, open: !1, reposition: !0, loop: !0, slideshow: !1, slideshowAuto: !0, slideshowSpeed: 2500, slideshowStart: "start slideshow", slideshowStop: "stop slideshow", photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i, retinaImage: !1, retinaUrl: !1, retinaSuffix: "@2x.$1", current: "image {current} of {total}", previous: "previous", next: "next", close: "close", xhrError: "This content failed to load.", imgError: "This image failed to load.", returnFocus: !0, trapFocus: !0, onOpen: !1, onLoad: !1, onComplete: !1, onCleanup: !1, onClosed: !1, rel: function rel() {
			return this.rel;
		}, href: function href() {
			return t(this).attr("href");
		}, title: function title() {
			return this.title;
		}, createImg: function createImg() {
			var e = new Image(),
			    i = t(this).data("cbox-img-attrs");return "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && t.each(i, function (t, i) {
				e[t] = i;
			}), e;
		}, createIframe: function createIframe() {
			var i = e.createElement("iframe"),
			    n = t(this).data("cbox-iframe-attrs");return "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && t.each(n, function (t, e) {
				i[t] = e;
			}), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = new Date().getTime(), i.allowFullscreen = !0, i;
		} },
	    Y = "colorbox",
	    Z = "cbox",
	    te = Z + "Element",
	    ee = Z + "_open",
	    ie = Z + "_load",
	    ne = Z + "_complete",
	    oe = Z + "_cleanup",
	    re = Z + "_closed",
	    he = Z + "_purge",
	    ae = t("<a/>"),
	    se = "div",
	    le = 0,
	    de = {},
	    ce = function () {
		function t() {
			clearTimeout(h);
		}function e() {
			(_.get("loop") || W[A + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")));
		}function i() {
			S.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), x.removeClass(a + "off").addClass(a + "on");
		}function n() {
			t(), ae.unbind(ne, e).unbind(ie, t), S.html(_.get("slideshowStart")).unbind(s).one(s, function () {
				J.next(), i();
			}), x.removeClass(a + "on").addClass(a + "off");
		}function o() {
			r = !1, S.hide(), t(), ae.unbind(ne, e).unbind(ie, t), x.removeClass(a + "off " + a + "on");
		}var r,
		    h,
		    a = Z + "Slideshow_",
		    s = "click." + Z;return function () {
			r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), S.show());
		};
	}();t[Y] || (t(p), J = t.fn[Y] = t[Y] = function (e, i) {
		var n,
		    o = this;return e = e || {}, t.isFunction(o) && (o = t("<a/>"), e.open = !0), o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function () {
			var i = t.data(this, Y) || {};t.data(this, Y, t.extend(i, e));
		}).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o;
	}, J.position = function (e, i) {
		function n() {
			T[0].style.width = k[0].style.width = b[0].style.width = parseInt(x[0].style.width, 10) - D + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(x[0].style.height, 10) - j + "px";
		}var r,
		    h,
		    s,
		    l = 0,
		    d = 0,
		    c = x.offset();if (E.unbind("resize." + Z), x.css({ top: -9e4, left: -9e4 }), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, x.css({ position: "fixed" })) : (l = h, d = s, x.css({ position: "absolute" })), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - z - D - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - z - D, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - N - j - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - N - j, 0) / 2), x.css({ top: c.top, left: c.left, visibility: "visible" }), y[0].style.width = y[0].style.height = "9999px", r = { width: _.w + z + D, height: _.h + N + j, top: l, left: d }, e) {
			var g = 0;t.each(r, function (t) {
				return r[t] !== de[t] ? (g = e, void 0) : void 0;
			}), e = g;
		}de = r, e || x.css(r), x.dequeue().animate(r, { duration: e || 0, complete: function complete() {
				n(), $ = !1, y[0].style.width = _.w + z + D + "px", y[0].style.height = _.h + N + j + "px", _.get("reposition") && setTimeout(function () {
					E.bind("resize." + Z, J.position);
				}, 1), t.isFunction(i) && i();
			}, step: n });
	}, J.resize = function (t) {
		var e;U && (t = t || {}, t.width && (_.w = a(t.width, "x") - z - D), t.innerWidth && (_.w = a(t.innerWidth, "x")), I.css({ width: _.w }), t.height && (_.h = a(t.height, "y") - N - j), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = I.scrollTop(), I.css({ height: "auto" }), _.h = I.height()), I.css({ height: _.h }), e && I.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")));
	}, J.prep = function (i) {
		function o() {
			return _.w = _.w || I.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w;
		}function a() {
			return _.h = _.h || I.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h;
		}if (U) {
			var d,
			    g = "none" === _.get("transition") ? 0 : _.get("speed");I.remove(), I = n(se, "LoadedContent").append(i), I.hide().appendTo(M.show()).css({ width: o(), overflow: _.get("scrolling") ? "auto" : "hidden" }).css({ height: a() }).prependTo(b), M.hide(), t(q).css({ "float": "none" }), c(_.get("className")), d = function d() {
				function i() {
					t.support.opacity === !1 && x[0].style.removeAttribute("filter");
				}var n,
				    o,
				    a = W.length;U && (o = function o() {
					clearTimeout(Q), L.hide(), u(ne), _.get("onComplete");
				}, F.html(_.get("title")).show(), I.show(), a > 1 ? ("string" == typeof _.get("current") && R.html(_.get("current").replace("{current}", A + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > A ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || A ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function () {
					var i,
					    n = W[this],
					    o = new r(n, t.data(n, Y)),
					    h = o.get("href");h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h);
				})) : O.hide(), _.get("iframe") ? (n = _.get("createIframe"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({ src: _.get("href"), "class": Z + "Iframe" }).one("load", o).appendTo(I), ae.one(he, function () {
					n.src = "//about:blank";
				}), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? x.fadeTo(g, 1, i) : i());
			}, "fade" === _.get("transition") ? x.fadeTo(g, 0, function () {
				J.position(0, d);
			}) : J.position(g, d);
		}
	}, J.next = function () {
		!$ && W[1] && (_.get("loop") || W[A + 1]) && (A = h(1), f(W[A]));
	}, J.prev = function () {
		!$ && W[1] && (_.get("loop") || A) && (A = h(-1), f(W[A]));
	}, J.close = function () {
		U && !G && (G = !0, U = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), x.stop().fadeTo(_.get("fadeOut") || 0, 0, function () {
			x.hide(), v.hide(), u(he), I.remove(), setTimeout(function () {
				G = !1, u(re), _.get("onClosed");
			}, 1);
		}));
	}, J.remove = function () {
		x && (x.stop(), t[Y].close(), x.stop(!1, !0).remove(), v.remove(), G = !1, x = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z));
	}, J.element = function () {
		return t(_.el);
	}, J.settings = X);
})(jQuery, document, window);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

  $('.gallery-item a').colorbox();

  //Settings for lightbox
  var cbSettings = {
    rel: 'cboxElement',
    width: '95%',
    height: 'auto',
    maxWidth: '660',
    maxHeight: 'auto',
    title: function title() {
      return $(this).find('img').attr('alt');
    },
    current: dashesv3_script_vars.current,
    previous: dashesv3_script_vars.previous,
    next: dashesv3_script_vars.next,
    close: dashesv3_script_vars.close,
    xhrError: dashesv3_script_vars.xhrError,
    imgError: dashesv3_script_vars.imgError
  };

  //Initialize jQuery Colorbox   
  $('.gallery a[href$=".jpg"], .gallery a[href$=".jpeg"], .gallery a[href$=".png"], .gallery a[href$=".gif"]').colorbox(cbSettings);

  //Keep lightbox responsive on screen resize
  $(window).on('resize', function () {
    $.colorbox.resize({
      width: window.innerWidth > parseInt(cbSettings.maxWidth) ? cbSettings.maxWidth : cbSettings.width
    });
  });
})(jQuery);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// WORDPRESS AJAX
// References:
// https://premium.wpmudev.org/blog/load-posts-ajax/?mksi=b&utm_expid=3606929-94.SWGkQ9hyQQGxJNtgEiBgWA.1&utm_referrer=https%3A%2F%2Fwww.google.com%2F
// https://premium.wpmudev.org/blog/using-ajax-with-wordpress/?mksi=b&utm_expid=3606929-94.SWGkQ9hyQQGxJNtgEiBgWA.1&utm_referrer=https%3A%2F%2Fwww.google.com%2F
// http://wordpress.stackexchange.com/questions/35849/using-ajax-on-categories-and-wordpress-loops


(function ($) {

	//Cache Dom
	var $page_nav, $curr_page, page_num;
	var $container = $('#article-index');

	function updateCache() {
		$page_nav = $container.find('.paging-navigation');
		$curr_page = $page_nav.find('.current');
	}

	function get_page_num(element) {

		var value = $(element).html();

		if (value == 'Previous') value = parseInt($curr_page.html()) - 1;else if (value == 'Next') value = parseInt($curr_page.html()) + 1;

		return value;
	}

	$(document).on('click', '.paging-navigation .page-numbers a', function (event) {

		event.preventDefault();

		updateCache();

		var page_num = get_page_num(this);

		$.ajax({
			url: ajaxpagination.ajaxurl,
			type: 'post',
			data: {
				action: 'ajax_pagination',
				query_vars: ajaxpagination.query_vars,
				page: page_num
			},
			beforeSend: function beforeSend() {
				$container.find('article').remove();
				$container.find('.paging-navigation').remove();
				$container.append('<div id="loader">Loading New Posts...</div>');
			},
			success: function success(html) {
				$container.find('#loader').remove();
				$container.append(html);
			}
		});
	});
})(jQuery);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

(function ($) {

	//Cache Dom
	var $nav = $('#site-navigation');
	var $mobile_menubar = $nav.find('.mobile-menubar');
	var $mobile_btn_open = $mobile_menubar.find('.mobile-btn-open');
	var $mobile_content = $nav.find('.mobile-content');
	var $mobile_btn_close = $mobile_content.find('.mobile-btn-close');
	var $mobile_blackscreen = $nav.find('#nav-blackscreen');
	var $has_children = $nav.find('.menu-item-has-children > a, .page_item_has_children > a');

	//Init
	addSubMenu();

	//Cache new button
	var $dropdown_btn = $has_children.next('.dropdown-toggle');

	//Bind Events
	$mobile_btn_open.on('click', openMenu);
	$mobile_btn_close.on('click', closeMenu);
	$mobile_blackscreen.on('click', closeMenu);
	$dropdown_btn.on('click', dropdownToggle);

	function openMenu() {
		if (!$mobile_content.hasClass('out')) {
			$mobile_content.addClass('out');
			$mobile_blackscreen.show();
		}
	}

	function closeMenu() {
		if ($mobile_content.hasClass('out')) {
			$mobile_content.removeClass('out');
			$mobile_blackscreen.hide();
		}
	}

	function addSubMenu() {
		$has_children.after('<button class="dropdown-toggle" aria-expanded="false"></button>');
	}

	function dropdownToggle() {
		$dropdown_btn.next('.sub-menu').slideToggle(300);
	}
})(jQuery);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
	var isIe = /(trident|msie)/i.test(navigator.userAgent);

	if (isIe && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function () {
			var id = location.hash.substring(1),
			    element;

			if (!/^[A-z0-9_-]+$/.test(id)) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * File swiper-script.js.
 *
 */

(function ($) {

    //==========================
    // INDEX SLIDER
    //==========================

    var index_bg = new Swiper('.featured-swiper', {
        autoplay: '3000',
        longSwipes: true,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        autoplayDisableOnInteraction: true
    });

    //==========================

})(jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Swiper 3.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: December 13, 2016
 */
(function () {
    'use strict';

    var $;
    /*===========================
    Swiper
    ===========================*/
    var Swiper = function Swiper(container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);

        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            // autoplay
            autoplay: false,
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            // Free mode
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            flip: {
                slideShadows: true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            // Parallax
            parallax: false,
            // Zoom
            zoom: false,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: true,
            // Scrollbar
            scrollbar: null,
            scrollbarHide: true,
            scrollbarDraggable: false,
            scrollbarSnapOnRelease: false,
            // Keyboard Mousewheel
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: 'container',
            // Hash Navigation
            hashnav: false,
            hashnavWatchState: false,
            // History
            history: false,
            // Commong Nav State
            replaceState: false,
            // Breakpoints
            breakpoints: undefined,
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0, // in px
            slidesOffsetAfter: 0, // in px
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Pagination
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Next/prev buttons
            nextButton: null,
            prevButton: null,
            // Progress
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Lazy Loading
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            // Control
            control: undefined,
            controlInverse: false,
            controlBy: 'slide', //or 'container'
            normalizeSlideIndex: true,
            // Swiping/no swiping
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null, //'.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            // Passive Listeners
            passiveListeners: true,
            // NS
            containerModifierClass: 'swiper-container-', // NEW
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationCurrentClass: 'swiper-pagination-current',
            paginationTotalClass: 'swiper-pagination-total',
            paginationHiddenClass: 'swiper-pagination-hidden',
            paginationProgressbarClass: 'swiper-pagination-progressbar',
            paginationClickableClass: 'swiper-pagination-clickable', // NEW
            paginationModifierClass: 'swiper-pagination-', // NEW
            lazyLoadingClass: 'swiper-lazy',
            lazyStatusLoadingClass: 'swiper-lazy-loading',
            lazyStatusLoadedClass: 'swiper-lazy-loaded',
            lazyPreloaderClass: 'swiper-lazy-preloader',
            notificationClass: 'swiper-notification',
            preloaderClass: 'preloader',
            zoomContainerClass: 'swiper-zoom-container',

            // Observer
            observer: false,
            observeParents: false,
            // Accessibility
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            // Callbacks
            runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            */

        };
        var initialVirtualTranslate = params && params.virtualTranslate;

        params = params || {};
        var originalParams = {};
        for (var param in params) {
            if (_typeof(params[param]) === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || typeof Dom7 !== 'undefined' && params[param] instanceof Dom7 || typeof jQuery !== 'undefined' && params[param] instanceof jQuery)) {
                originalParams[param] = {};
                for (var deepParam in params[param]) {
                    originalParams[param][deepParam] = params[param][deepParam];
                }
            } else {
                originalParams[param] = params[param];
            }
        }
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            } else if (_typeof(params[def]) === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }

        // Swiper
        var s = this;

        // Params
        s.params = params;
        s.originalParams = originalParams;

        // Classname
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined') {
            $ = Dom7;
        }
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            } else {
                $ = Dom7;
            }
            if (!$) return;
        }
        // Export it to Swiper instance
        s.$ = $;

        /*=========================
          Breakpoints
          ===========================*/
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function () {
            //Get breakpoint for window width
            if (!s.params.breakpoints) return false;
            var breakpoint = false;
            var points = [],
                point;
            for (point in s.params.breakpoints) {
                if (s.params.breakpoints.hasOwnProperty(point)) {
                    points.push(point);
                }
            }
            points.sort(function (a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var i = 0; i < points.length; i++) {
                point = points[i];
                if (point >= window.innerWidth && !breakpoint) {
                    breakpoint = point;
                }
            }
            return breakpoint || 'max';
        };
        s.setBreakpoint = function () {
            //Set breakpoint for window width and update parameters
            var breakpoint = s.getActiveBreakpoint();
            if (breakpoint && s.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                var needsReLoop = s.params.loop && breakPointsParams.slidesPerView !== s.params.slidesPerView;
                for (var param in breakPointsParams) {
                    s.params[param] = breakPointsParams[param];
                }
                s.currentBreakpoint = breakpoint;
                if (needsReLoop && s.destroyLoop) {
                    s.reLoop(true);
                }
            }
        };
        // Set breakpoint on load
        if (s.params.breakpoints) {
            s.setBreakpoint();
        }

        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
            var swipers = [];
            s.container.each(function () {
                var container = this;
                swipers.push(new Swiper(this, params));
            });
            return swipers;
        }

        // Save instance in container HTML Element and in data
        s.container[0].swiper = s;
        s.container.data('swiper', s);

        s.classNames.push(s.params.containerModifierClass + s.params.direction);

        if (s.params.freeMode) {
            s.classNames.push(s.params.containerModifierClass + 'free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
            s.classNames.push(s.params.containerModifierClass + 'autoheight');
        }
        // Enable slides progress when required
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        // Max resistance when touchReleaseOnEdges
        if (s.params.touchReleaseOnEdges) {
            s.params.resistanceRatio = 0;
        }
        // Coverflow / 3D
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push(s.params.containerModifierClass + '3d');
            } else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push(s.params.containerModifierClass + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
            s.params.setWrapperSize = false;
        }
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            s.params.setWrapperSize = false;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }

        // Grab Cursor
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }

        // Wrapper
        s.wrapper = s.container.children('.' + s.params.wrapperClass);

        // Pagination
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                s.paginationContainer = s.container.find(s.params.pagination);
            }

            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
                s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
            } else {
                s.params.paginationClickable = false;
            }
            s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
        }
        // Next/Prev Buttons
        if (s.params.nextButton || s.params.prevButton) {
            if (s.params.nextButton) {
                s.nextButton = $(s.params.nextButton);
                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                    s.nextButton = s.container.find(s.params.nextButton);
                }
            }
            if (s.params.prevButton) {
                s.prevButton = $(s.params.prevButton);
                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                    s.prevButton = s.container.find(s.params.prevButton);
                }
            }
        }

        // Is Horizontal
        s.isHorizontal = function () {
            return s.params.direction === 'horizontal';
        };
        // s.isH = isH;

        // RTL
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push(s.params.containerModifierClass + 'rtl');
        }

        // Wrong RTL support
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }

        // Columns
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push(s.params.containerModifierClass + 'multirow');
        }

        // Check for Android
        if (s.device.android) {
            s.classNames.push(s.params.containerModifierClass + 'android');
        }

        // Add classes
        s.container.addClass(s.classNames.join(' '));

        // Translate
        s.translate = 0;

        // Progress
        s.progress = 0;

        // Velocity
        s.velocity = 0;

        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function () {
            s.params.allowSwipeToNext = false;
            if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = false;
            if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
            if (s.params.grabCursor) s.unsetGrabCursor();
        };
        s.unlockSwipeToNext = function () {
            s.params.allowSwipeToNext = true;
            if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = true;
            if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
            if (s.params.grabCursor) s.setGrabCursor();
        };

        /*=========================
          Round helper
          ===========================*/
        function round(a) {
            return Math.floor(a);
        }
        /*=========================
          Set grab cursor
          ===========================*/
        s.setGrabCursor = function (moving) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            s.container[0].style.cursor = moving ? 'grabbing' : 'grab';
        };
        s.unsetGrabCursor = function () {
            s.container[0].style.cursor = '';
        };
        if (s.params.grabCursor) {
            s.setGrabCursor();
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;

        s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
            var image;
            function onReady() {
                if (callback) callback();
            }
            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (sizes) {
                        image.sizes = sizes;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
            } else {
                //image already loaded...
                onReady();
            }
        };
        s.preloadImages = function () {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null || !s) return;
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady) s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src'), s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset'), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
            }
        };

        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            var autoplayDelay = s.params.autoplay;
            var activeSlide = s.slides.eq(s.activeIndex);
            if (activeSlide.attr('data-swiper-autoplay')) {
                autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
            }
            s.autoplayTimeoutId = setTimeout(function () {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                    s.emit('onAutoplay', s);
                } else {
                    if (!s.isEnd) {
                        s._slideNext();
                        s.emit('onAutoplay', s);
                    } else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                            s.emit('onAutoplay', s);
                        } else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, autoplayDelay);
        }
        s.startAutoplay = function () {
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
            if (!s.params.autoplay) return false;
            if (s.autoplaying) return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        };
        s.stopAutoplay = function (internal) {
            if (!s.autoplayTimeoutId) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function (speed) {
            if (s.autoplayPaused) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            } else {
                s.wrapper.transitionEnd(function () {
                    if (!s) return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    } else {
                        autoplay();
                    }
                });
            }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function () {
            return -s.snapGrid[0];
        };
        s.maxTranslate = function () {
            return -s.snapGrid[s.snapGrid.length - 1];
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateAutoHeight = function () {
            var activeSlides = [];
            var newHeight = 0;
            var i;

            // Find slides currently in view
            if (s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
                for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
                    var index = s.activeIndex + i;
                    if (index > s.slides.length) break;
                    activeSlides.push(s.slides.eq(index)[0]);
                }
            } else {
                activeSlides.push(s.slides.eq(s.activeIndex)[0]);
            }

            // Find new height from heighest slide in view
            for (i = 0; i < activeSlides.length; i++) {
                if (typeof activeSlides[i] !== 'undefined') {
                    var height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
            }

            // Update Height
            if (newHeight) s.wrapper.css('height', newHeight + 'px');
        };
        s.updateContainerSize = function () {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            } else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            } else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
                return;
            }

            //Subtract paddings
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);

            // Store values
            s.width = width;
            s.height = height;
            s.size = s.isHorizontal() ? s.width : s.height;
        };

        s.updateSlidesSize = function () {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];

            var spaceBetween = s.params.spaceBetween,
                slidePosition = -s.params.slidesOffsetBefore,
                i,
                prevSlideSize = 0,
                index = 0;
            if (typeof s.size === 'undefined') return;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }

            s.virtualSize = -spaceBetween;
            // reset margins
            if (s.rtl) s.slides.css({ marginLeft: '', marginTop: '' });else s.slides.css({ marginRight: '', marginBottom: '' });

            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                } else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }
            }

            // Calc slides
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    // Set slides order
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide.css({
                            '-webkit-box-ordinal-group': newSlideOrderIndex,
                            '-moz-box-ordinal-group': newSlideOrderIndex,
                            '-ms-flex-order': newSlideOrderIndex,
                            '-webkit-order': newSlideOrderIndex,
                            'order': newSlideOrderIndex
                        });
                    } else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide.css('margin-' + (s.isHorizontal() ? 'top' : 'left'), row !== 0 && s.params.spaceBetween && s.params.spaceBetween + 'px').attr('data-swiper-column', column).attr('data-swiper-row', row);
                }
                if (slide.css('display') === 'none') continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths) slideSize = round(slideSize);
                } else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths) slideSize = round(slideSize);

                    if (s.isHorizontal()) {
                        s.slides[i].style.width = slideSize + 'px';
                    } else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);

                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                } else {
                    if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }

                s.virtualSize += slideSize + spaceBetween;

                prevSlideSize = slideSize;

                index++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
            var newSlidesGrid;

            if (s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (s.isHorizontal()) s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });else s.wrapper.css({ height: s.virtualSize + s.params.spaceBetween + 'px' });
            }

            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                if (s.isHorizontal()) s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });else s.wrapper.css({ height: s.virtualSize + s.params.spaceBetween + 'px' });
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }

            // Remove last grid elements depending on width
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0) s.snapGrid = [0];

            if (s.params.spaceBetween !== 0) {
                if (s.isHorizontal()) {
                    if (s.rtl) s.slides.css({ marginLeft: spaceBetween + 'px' });else s.slides.css({ marginRight: spaceBetween + 'px' });
                } else s.slides.css({ marginBottom: spaceBetween + 'px' });
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        };
        s.updateSlidesOffset = function () {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        };

        /*=========================
          Dynamic Slides Per View
          ===========================*/
        s.currentSlidesPerView = function () {
            var spv = 1,
                i,
                j;
            if (s.params.centeredSlides) {
                var size = s.slides[s.activeIndex].swiperSlideSize;
                var breakLoop;
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slides[i] && !breakLoop) {
                        size += s.slides[i].swiperSlideSize;
                        spv++;
                        if (size > s.size) breakLoop = true;
                    }
                }
                for (j = s.activeIndex - 1; j >= 0; j--) {
                    if (s.slides[j] && !breakLoop) {
                        size += s.slides[j].swiperSlideSize;
                        spv++;
                        if (size > s.size) breakLoop = true;
                    }
                }
            } else {
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
                        spv++;
                    }
                }
            }
            return spv;
        };
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0) return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();

            var offsetCenter = -translate;
            if (s.rtl) offsetCenter = translate;

            // Visible Slides
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible = slideBefore >= 0 && slideBefore < s.size || slideAfter > 0 && slideAfter <= s.size || slideBefore <= 0 && slideAfter >= s.size;
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        };
        s.updateProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            var wasBeginning = s.isBeginning;
            var wasEnd = s.isEnd;
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            } else {
                s.progress = (translate - s.minTranslate()) / translatesDiff;
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);

            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function () {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    } else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                } else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            // Normalize slideIndex
            if (s.params.normalizeSlideIndex) {
                if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
            }
            // for (i = 0; i < s.slidesGrid.length; i++) {
            // if (- translate >= s.slidesGrid[i]) {
            // newActiveIndex = i;
            // }
            // }
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;

            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
            s.updateRealIndex();
        };
        s.updateRealIndex = function () {
            s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
        };

        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function () {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            // Active classes
            activeSlide.addClass(s.params.slideActiveClass);
            if (params.loop) {
                // Duplicate to all looped slides
                if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                } else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                }
            }
            // Next Slide
            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            if (s.params.loop && nextSlide.length === 0) {
                nextSlide = s.slides.eq(0);
                nextSlide.addClass(s.params.slideNextClass);
            }
            // Prev Slide
            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
            if (s.params.loop && prevSlide.length === 0) {
                prevSlide = s.slides.eq(-1);
                prevSlide.addClass(s.params.slidePrevClass);
            }
            if (params.loop) {
                // Duplicate to all looped slides
                if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                } else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                }
                if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                } else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                }
            }

            // Pagination
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                // Current/Total
                var current,
                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                if (s.params.loop) {
                    current = Math.ceil((s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup);
                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                        current = current - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (current > total - 1) current = current - total;
                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
                } else {
                    if (typeof s.snapIndex !== 'undefined') {
                        current = s.snapIndex;
                    } else {
                        current = s.activeIndex || 0;
                    }
                }
                // Types
                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                    s.bullets.removeClass(s.params.bulletActiveClass);
                    if (s.paginationContainer.length > 1) {
                        s.bullets.each(function () {
                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                        });
                    } else {
                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
                }
                if (s.params.paginationType === 'progress') {
                    var scale = (current + 1) / total,
                        scaleX = scale,
                        scaleY = 1;
                    if (!s.isHorizontal()) {
                        scaleY = scale;
                        scaleX = 1;
                    }
                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                }
                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }

            // Next/active buttons
            if (!s.params.loop) {
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    if (s.isBeginning) {
                        s.prevButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
                    } else {
                        s.prevButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
                    }
                }
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    if (s.isEnd) {
                        s.nextButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
                    } else {
                        s.nextButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
                    }
                }
            }
        };

        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function () {
            if (!s.params.pagination) return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var paginationHTML = '';
                if (s.params.paginationType === 'bullets') {
                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i++) {
                        if (s.params.paginationBulletRender) {
                            paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
                        } else {
                            paginationHTML += '<' + s.params.paginationElement + ' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                        }
                    }
                    s.paginationContainer.html(paginationHTML);
                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                        s.a11y.initPagination();
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    if (s.params.paginationFractionRender) {
                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                    } else {
                        paginationHTML = '<span class="' + s.params.paginationCurrentClass + '"></span>' + ' / ' + '<span class="' + s.params.paginationTotalClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType === 'progress') {
                    if (s.params.paginationProgressRender) {
                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                    } else {
                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType !== 'custom') {
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function (updateTranslate) {
            if (!s) return;
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            function forceSetTranslate() {
                var translate = s.rtl ? -s.translate : s.translate;
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated, newTranslate;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                    if (s.params.autoHeight) {
                        s.updateAutoHeight();
                    }
                } else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    } else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
            } else if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
        };

        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function (forceUpdatePagination) {
            //Breakpoints
            if (s.params.breakpoints) {
                s.setBreakpoint();
            }

            // Disable locks on resize
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;

            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            var slideChangedBySlideTo = false;
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();

                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
            } else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
                } else {
                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
                s.lazy.load();
            }
            // Return locks after resize
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
        };

        /*=========================
          Events
          ===========================*/

        //Define Touch Events
        s.touchEventsDesktop = { start: 'mousedown', move: 'mousemove', end: 'mouseup' };
        if (window.navigator.pointerEnabled) s.touchEventsDesktop = { start: 'pointerdown', move: 'pointermove', end: 'pointerup' };else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = { start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp' };
        s.touchEvents = {
            start: s.support.touch || !s.params.simulateTouch ? 'touchstart' : s.touchEventsDesktop.start,
            move: s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
            end: s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
        };

        // WP8 Touch Events Fix
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }

        // Attach/detach events
        s.initEvents = function (detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;

            var moveCapture = s.params.nested ? true : false;

            //Touch Events
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            } else {
                if (s.support.touch) {
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? { passive: true, capture: false } : false;
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
                }
                if (params.simulateTouch && !s.device.ios && !s.device.android || params.simulateTouch && !s.support.touch && s.device.ios) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);

            // Next, Prev, Index
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                s.nextButton[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                s.prevButton[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }

            // Prevent Links Clicks
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function () {
            s.initEvents();
        };
        s.detachEvents = function () {
            s.initEvents(true);
        };

        /*=========================
          Handle Clicks
          ===========================*/
        // Prevent Clicks
        s.allowClick = true;
        s.preventClicks = function (e) {
            if (!s.allowClick) {
                if (s.params.preventClicks) e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        // Clicks
        s.onClickNext = function (e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop) return;
            s.slideNext();
        };
        s.onClickPrev = function (e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop) return;
            s.slidePrev();
        };
        s.onClickIndex = function (e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop) index = index + s.loopedSlides;
            s.slideTo(index);
        };

        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                } else if (selector.nodeType) {
                    var found;
                    el.parents().each(function (index, _el) {
                        if (_el === selector) found = selector;
                    });
                    if (!found) return undefined;else return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function (e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide) slideFound = true;
                }
            }

            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            } else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex,
                    realIndex,
                    duplicatedSlides,
                    slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
                if (s.params.loop) {
                    if (s.animating) return;
                    realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
                    if (s.params.centeredSlides) {
                        if (slideToIndex < s.loopedSlides - slidesPerView / 2 || slideToIndex > s.slides.length - s.loopedSlides + slidesPerView / 2) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        } else {
                            s.slideTo(slideToIndex);
                        }
                    } else {
                        if (slideToIndex > s.slides.length - slidesPerView) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        } else {
                            s.slideTo(slideToIndex);
                        }
                    }
                } else {
                    s.slideTo(slideToIndex);
                }
            }
        };

        var isTouched,
            isMoved,
            allowTouchCallbacks,
            touchStartTime,
            isScrolling,
            currentTranslate,
            startTranslate,
            allowThresholdMove,

        // Form elements to match
        formElements = 'input, select, textarea, button, video',

        // Last click time
        lastClickTime = Date.now(),
            clickTimeout,

        //Velocities
        velocities = [],
            allowMomentumBounce;

        // Animating Flag
        s.animating = false;

        // Touches information
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };

        // Touch handlers
        var isTouchEvent, startMoving;
        s.onTouchStart = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which' in e && e.which === 3) return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler)) return;
            }

            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;

            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
            if (s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }

            isTouched = true;
            isMoved = false;
            allowTouchCallbacks = true;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0) allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        };

        s.onTouchMove = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove') return;
            if (e.preventedByNestedSwiper) {
                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                return;
            }
            if (s.params.onlyExternal) {
                // isMoved = true;
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
                if (!s.isHorizontal()) {
                    // Vertical
                    if (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate() || s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate()) {
                        return;
                    }
                } else {
                    if (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate() || s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate()) {
                        return;
                    }
                }
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
            if (allowTouchCallbacks) {
                s.emit('onTouchMove', s, e);
            }
            if (e.targetTouches && e.targetTouches.length > 1) return;

            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

            if (typeof isScrolling === 'undefined') {
                var touchAngle;
                if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
                    isScrolling = false;
                } else {
                    touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                    isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : 90 - touchAngle > s.params.touchAngle;
                }
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched) return;
            if (isScrolling) {
                isTouched = false;
                return;
            }
            if (!startMoving && s.browser.ieTouch) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }

            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    } else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                //Grab Cursor
                if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                    s.setGrabCursor(true);
                }
            }
            isMoved = true;

            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;

            diff = diff * s.params.touchRatio;
            if (s.rtl) diff = -diff;

            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;

            var disableParentSwiper = true;
            if (diff > 0 && currentTranslate > s.minTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            } else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }

            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }

            // Directions locks
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }

            // Threshold
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                } else {
                    currentTranslate = startTranslate;
                    return;
                }
            }

            if (!s.params.followFinger) return;

            // Update active index in free mode
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                //Velocity
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                    time: new window.Date().getTime()
                });
            }
            // Update progress
            s.updateProgress(currentTranslate);
            // Update translate
            s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (allowTouchCallbacks) {
                s.emit('onTouchEnd', s, e);
            }
            allowTouchCallbacks = false;
            if (!isTouched) return;
            //Return Grab Cursor
            if (s.params.grabCursor && isMoved && isTouched && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                s.setGrabCursor(false);
            }

            // Time diff
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;

            // Tap, doubleTap, Click
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && touchEndTime - lastClickTime > 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function () {
                        if (!s) return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
                }
                if (timeDiff < 300 && touchEndTime - lastClickTime < 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }

            lastClickTime = Date.now();
            setTimeout(function () {
                if (s) s.allowClick = true;
            }, 0);

            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;

            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            } else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                } else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    } else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }

                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop(),
                            velocityEvent = velocities.pop();

                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                            s.velocity = 0;
                        }
                        // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.
                        if (time > 150 || new window.Date().getTime() - lastMoveEvent.time > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
                    s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;

                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;

                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl) newPosition = -newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        } else {
                            newPosition = s.maxTranslate();
                        }
                    } else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        } else {
                            newPosition = s.minTranslate();
                        }
                    } else if (s.params.freeModeSticky) {
                        var j = 0,
                            nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl) newPosition = -newPosition;
                    }
                    //Fix duration
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        } else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    } else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }

                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function () {
                            if (!s || !allowMomentumBounce) return;
                            s.emit('onMomentumBounce', s);

                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        }
                    } else {
                        s.updateProgress(newPosition);
                    }

                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }

            // Find current slide
            var i,
                stopIndex = 0,
                groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                } else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }

            // Find current slide size
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;

            if (timeDiff > s.params.longSwipesMs) {
                // Long touches
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > 1 - s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
                }
            } else {
                // Short swipes
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function (slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (typeof slideIndex === 'undefined') slideIndex = 0;
            if (slideIndex < 0) slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;

            var translate = -s.snapGrid[s.snapIndex];
            // Stop autoplay
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                } else {
                    s.stopAutoplay();
                }
            }
            // Update progress
            s.updateProgress(translate);

            // Normalize slideIndex
            if (s.params.normalizeSlideIndex) {
                for (var i = 0; i < s.slidesGrid.length; i++) {
                    if (-Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                        slideIndex = i;
                    }
                }
            }

            // Directions locks
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex) return false;
            }

            // Update Index
            if (typeof speed === 'undefined') speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
            s.updateRealIndex();
            if (s.rtl && -translate === s.translate || !s.rtl && translate === s.translate) {
                // Update Height
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
                s.updateClasses();
                if (s.params.effect !== 'slide') {
                    s.setWrapperTranslate(translate);
                }
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);

            if (speed === 0 || s.browser.lteIE9) {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(0);
                s.onTransitionEnd(runCallbacks);
            } else {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(speed);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function () {
                        if (!s) return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
            }

            return true;
        };

        s.onTransitionStart = function (runCallbacks) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
            if (s.lazy) s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextStart', s);
                    } else {
                        s.emit('onSlidePrevStart', s);
                    }
                }
            }
        };
        s.onTransitionEnd = function (runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextEnd', s);
                    } else {
                        s.emit('onSlidePrevEnd', s);
                    }
                }
            }
            if (s.params.history && s.history) {
                s.history.setHistory(s.params.history, s.activeIndex);
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        };
        s.slideNext = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            } else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function (speed) {
            return s.slideNext(true, speed, true);
        };
        s.slidePrev = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            } else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function (speed) {
            return s.slidePrev(true, speed, true);
        };
        s.slideReset = function (runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        };

        s.disableTouchControl = function () {
            s.params.onlyExternal = true;
            return true;
        };
        s.enableTouchControl = function () {
            s.params.onlyExternal = false;
            return true;
        };

        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function (duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
            var x = 0,
                y = 0,
                z = 0;
            if (s.isHorizontal()) {
                x = s.rtl ? -translate : translate;
            } else {
                y = translate;
            }

            if (s.params.roundLengths) {
                x = round(x);
                y = round(y);
            }

            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }

            s.translate = s.isHorizontal() ? x : y;

            // Check if we need to update progress
            var progress;
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                progress = 0;
            } else {
                progress = (translate - s.minTranslate()) / translatesDiff;
            }
            if (progress !== s.progress) {
                s.updateProgress(translate);
            }

            if (updateActiveIndex) s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        };

        s.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;

            // automatic axis detection
            if (typeof axis === 'undefined') {
                axis = 'x';
            }

            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }

            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function (a) {
                        return a.replace(',', '.');
                    }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
                    //Normal Browsers
                    else curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
                    //Normal Browsers
                    else curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform) curTransform = -curTransform;
            return curTransform || 0;
        };
        s.getWrapperTranslate = function (axis) {
            if (typeof axis === 'undefined') {
                axis = s.isHorizontal() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        };

        /*=========================
          Observer
          ===========================*/
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            // create an observer instance
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            });

            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });

            s.observers.push(observer);
        }
        s.initObservers = function () {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }

            // Observe container
            initObserver(s.container[0], { childList: false });

            // Observe wrapper
            initObserver(s.wrapper[0], { attributes: false });
        };
        s.disconnectObservers = function () {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        // Create looped slides
        s.createLoop = function () {
            // Remove duplicated slides
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();

            var slides = s.wrapper.children('.' + s.params.slideClass);

            if (s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;

            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }

            var prependSlides = [],
                appendSlides = [],
                i;
            slides.each(function (index, el) {
                var slide = $(this);
                if (index < s.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        };
        s.destroyLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        };
        s.reLoop = function (updatePosition) {
            var oldIndex = s.activeIndex - s.loopedSlides;
            s.destroyLoop();
            s.createLoop();
            s.updateSlidesSize();
            if (updatePosition) {
                s.slideTo(oldIndex + s.loopedSlides, 0, false);
            }
        };
        s.fixLoop = function () {
            var newIndex;
            //Fix For Negative Oversliding
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
            //Fix For Positive Oversliding
            else if (s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2 || s.activeIndex > s.slides.length - s.params.slidesPerView * 2) {
                    newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                    newIndex = newIndex + s.loopedSlides;
                    s.slideTo(newIndex, 0, false, true);
                }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.append(slides[i]);
                }
            } else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        };
        s.prependSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            } else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function (slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex,
                indexToRemove;
            if ((typeof slidesIndexes === 'undefined' ? 'undefined' : _typeof(slidesIndexes)) === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            } else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }

            if (s.params.loop) {
                s.createLoop();
            }

            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            } else {
                s.slideTo(newActiveIndex, 0, false);
            }
        };
        s.removeAllSlides = function () {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        };

        /*=========================
          Effects
          ===========================*/
        s.effects = {
            fade: {
                setTranslate: function setTranslate() {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate) tx = tx - s.translate;
                        var ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ? Math.max(1 - Math.abs(slide[0].progress), 0) : 1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide.css({
                            opacity: slideOpacity
                        }).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
                    }
                },
                setTransition: function setTransition(duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            flip: {
                setTranslate: function setTranslate() {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var progress = slide[0].progress;
                        if (s.params.flip.limitRotation) {
                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        }
                        var offset = slide[0].swiperSlideOffset;
                        var rotate = -180 * progress,
                            rotateY = rotate,
                            rotateX = 0,
                            tx = -offset,
                            ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        } else if (s.rtl) {
                            rotateY = -rotateY;
                        }

                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;

                        if (s.params.flip.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }

                        slide.transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                    }
                },
                setTransition: function setTransition(duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.eq(s.activeIndex).transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function setTranslate() {
                    var wrapperRotate = 0,
                        cubeShadow;
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({ height: s.width + 'px' });
                        } else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0,
                            ty = 0,
                            tz = 0;
                        if (i % 4 === 0) {
                            tx = -round * 4 * s.size;
                            tz = 0;
                        } else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * s.size;
                        } else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        } else if ((i - 3) % 4 === 0) {
                            tx = -s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }

                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }

                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + s.size / 2 + 'px',
                        '-moz-transform-origin': '50% 50% -' + s.size / 2 + 'px',
                        '-ms-transform-origin': '50% 50% -' + s.size / 2 + 'px',
                        'transform-origin': '50% 50% -' + s.size / 2 + 'px'
                    });

                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + -s.width / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + s.params.cube.shadowScale + ')');
                        } else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,
                                scale2 = s.params.cube.shadowScale / multiplier,
                                offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + -s.height / 2 / scale2 + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = s.isSafari || s.isUiWebView ? -s.size / 2 : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function setTransition(duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !s.isHorizontal()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function setTranslate() {
                    var transform = s.translate;
                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate : -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    //Each slide offset from center
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;

                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);

                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * offsetMultiplier;
                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * offsetMultiplier : 0;

                        //Fix for ultra small values
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;

                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                        }
                    }

                    //Set correct perspective for IE10
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function setTransition(duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };

        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function loadImageInSlide(index, loadInDuplicate) {
                if (typeof index === 'undefined') return;
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                if (s.slides.length === 0) return;

                var slide = s.slides.eq(index);
                var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
                if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
                    img = img.add(slide[0]);
                }
                if (img.length === 0) return;

                img.each(function () {
                    var _img = $(this);
                    _img.addClass(s.params.lazyStatusLoadingClass);
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src'),
                        srcset = _img.attr('data-srcset'),
                        sizes = _img.attr('data-sizes');
                    s.loadImage(_img[0], src || background, srcset, sizes, false, function () {
                        if (background) {
                            _img.css('background-image', 'url("' + background + '")');
                            _img.removeAttr('data-background');
                        } else {
                            if (srcset) {
                                _img.attr('srcset', srcset);
                                _img.removeAttr('data-srcset');
                            }
                            if (sizes) {
                                _img.attr('sizes', sizes);
                                _img.removeAttr('data-sizes');
                            }
                            if (src) {
                                _img.attr('src', src);
                                _img.removeAttr('data-src');
                            }
                        }

                        _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
                        slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            } else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });

                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
            },
            load: function load() {
                var i;
                var slidesPerView = s.params.slidesPerView;
                if (slidesPerView === 'auto') {
                    slidesPerView = 0;
                }
                if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                } else {
                    if (slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + slidesPerView; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    } else {
                        s.lazy.loadImageInSlide(s.activeIndex);
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (slidesPerView > 1 || s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1) {
                        var amount = s.params.lazyLoadingInPrevNextAmount;
                        var spv = slidesPerView;
                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                        // Next Slides
                        for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                        // Prev Slides
                        for (i = minIndex; i < s.activeIndex; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    } else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());

                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function onTransitionStart() {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || !s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function onTransitionEnd() {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };

        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
            isTouched: false,
            setDragPosition: function setDragPosition(e) {
                var sb = s.scrollbar;
                var x = 0,
                    y = 0;
                var translate;
                var pointerPosition = s.isHorizontal() ? e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX : e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                var position = pointerPosition - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;
                var positionMax = -s.maxTranslate() * sb.moveDivider;
                if (position < positionMin) {
                    position = positionMin;
                } else if (position > positionMax) {
                    position = positionMax;
                }
                position = -position / sb.moveDivider;
                s.updateProgress(position);
                s.setWrapperTranslate(position, true);
            },
            dragStart: function dragStart(e) {
                var sb = s.scrollbar;
                sb.isTouched = true;
                e.preventDefault();
                e.stopPropagation();

                sb.setDragPosition(e);
                clearTimeout(sb.dragTimeout);

                sb.track.transition(0);
                if (s.params.scrollbarHide) {
                    sb.track.css('opacity', 1);
                }
                s.wrapper.transition(100);
                sb.drag.transition(100);
                s.emit('onScrollbarDragStart', s);
            },
            dragMove: function dragMove(e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                sb.setDragPosition(e);
                s.wrapper.transition(0);
                sb.track.transition(0);
                sb.drag.transition(0);
                s.emit('onScrollbarDragMove', s);
            },
            dragEnd: function dragEnd(e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                sb.isTouched = false;
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.dragTimeout);
                    sb.dragTimeout = setTimeout(function () {
                        sb.track.css('opacity', 0);
                        sb.track.transition(400);
                    }, 1000);
                }
                s.emit('onScrollbarDragEnd', s);
                if (s.params.scrollbarSnapOnRelease) {
                    s.slideReset();
                }
            },
            draggableEvents: function () {
                if (s.params.simulateTouch === false && !s.support.touch) return s.touchEventsDesktop;else return s.touchEvents;
            }(),
            enableDraggable: function enableDraggable() {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
                $(target).on(sb.draggableEvents.move, sb.dragMove);
                $(target).on(sb.draggableEvents.end, sb.dragEnd);
            },
            disableDraggable: function disableDraggable() {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).off(sb.draggableEvents.start, sb.dragStart);
                $(target).off(sb.draggableEvents.move, sb.dragMove);
                $(target).off(sb.draggableEvents.end, sb.dragEnd);
            },
            set: function set() {
                if (!s.params.scrollbar) return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                    sb.track = s.container.find(s.params.scrollbar);
                }
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;

                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;

                if (s.isHorizontal()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                } else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }

                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                } else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function setTranslate() {
                if (!s.params.scrollbar) return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;

                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && s.isHorizontal()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    } else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                } else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    } else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (s.isHorizontal()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + newPos + 'px, 0, 0)');
                    } else {
                        sb.drag.transform('translateX(' + newPos + 'px)');
                    }
                    sb.drag[0].style.width = newSize + 'px';
                } else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + newPos + 'px, 0)');
                    } else {
                        sb.drag.transform('translateY(' + newPos + 'px)');
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function () {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function setTransition(duration) {
                if (!s.params.scrollbar) return;
                s.scrollbar.drag.transition(duration);
            }
        };

        /*=========================
          Controller
          ===========================*/
        s.controller = {
            LinearSpline: function LinearSpline(x, y) {
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.
                var i1, i3;
                var l = this.x.length;

                this.interpolate = function (x2) {
                    if (!x2) return 0;

                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;

                    // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                    return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };

                var binarySearch = function () {
                    var maxIndex, minIndex, guess;
                    return function (array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1) {
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        }return maxIndex;
                    };
                }();
            },
            //xxx: for now i will just save one spline function to to
            getInterpolateFunction: function getInterpolateFunction(c) {
                if (!s.controller.spline) s.controller.spline = s.params.loop ? new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) : new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
            },
            setTranslate: function setTranslate(translate, byController) {
                var controlled = s.params.control;
                var multiplier, controlledTranslate;
                function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }

                    if (!controlledTranslate || s.params.controlBy === 'container') {
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }

                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
                }
                if (s.isArray(controlled)) {
                    for (var i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTranslate(controlled[i]);
                        }
                    }
                } else if (controlled instanceof Swiper && byController !== controlled) {

                    setControlledTranslate(controlled);
                }
            },
            setTransition: function setTransition(duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function () {
                            if (!controlled) return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
                        });
                    }
                }
                if (s.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                } else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };

        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
            onHashCange: function onHashCange(e, a) {
                var newHash = document.location.hash.replace('#', '');
                var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
                if (newHash !== activeSlideHash) {
                    s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + newHash + '"]').index());
                }
            },
            attachEvents: function attachEvents(detach) {
                var action = detach ? 'off' : 'on';
                $(window)[action]('hashchange', s.hashnav.onHashCange);
            },
            setHash: function setHash() {
                if (!s.hashnav.initialized || !s.params.hashnav) return;
                if (s.params.replaceState && window.history && window.history.replaceState) {
                    window.history.replaceState(null, null, '#' + s.slides.eq(s.activeIndex).attr('data-hash') || '');
                } else {
                    var slide = s.slides.eq(s.activeIndex);
                    var hash = slide.attr('data-hash') || slide.attr('data-history');
                    document.location.hash = hash || '';
                }
            },
            init: function init() {
                if (!s.params.hashnav || s.params.history) return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (hash) {
                    var speed = 0;
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                        if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                        }
                    }
                }
                if (s.params.hashnavWatchState) s.hashnav.attachEvents();
            },
            destroy: function destroy() {
                if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
            }
        };

        /*=========================
          History Api with fallback to Hashnav
          ===========================*/
        s.history = {
            init: function init() {
                if (!s.params.history) return;
                if (!window.history || !window.history.pushState) {
                    s.params.history = false;
                    s.params.hashnav = true;
                    return;
                }
                s.history.initialized = true;
                this.paths = this.getPathValues();
                if (!this.paths.key && !this.paths.value) return;
                this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
                if (!s.params.replaceState) {
                    window.addEventListener('popstate', this.setHistoryPopState);
                }
            },
            setHistoryPopState: function setHistoryPopState() {
                s.history.paths = s.history.getPathValues();
                s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
            },
            getPathValues: function getPathValues() {
                var pathArray = window.location.pathname.slice(1).split('/');
                var total = pathArray.length;
                var key = pathArray[total - 2];
                var value = pathArray[total - 1];
                return { key: key, value: value };
            },
            setHistory: function setHistory(key, index) {
                if (!s.history.initialized || !s.params.history) return;
                var slide = s.slides.eq(index);
                var value = this.slugify(slide.attr('data-history'));
                if (!window.location.pathname.includes(key)) {
                    value = key + '/' + value;
                }
                if (s.params.replaceState) {
                    window.history.replaceState(null, null, value);
                } else {
                    window.history.pushState(null, null, value);
                }
            },
            slugify: function slugify(text) {
                return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
            },
            scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
                if (value) {
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHistory = this.slugify(slide.attr('data-history'));
                        if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, runCallbacks);
                        }
                    }
                } else {
                    s.slideTo(0, speed, runCallbacks);
                }
            }
        };

        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                //Check that swiper should be inside of visible area of window
                if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + s.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + s.height], [swiperOffset.left + s.width, swiperOffset.top + s.height]];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth && point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight) {
                        inView = true;
                    }
                }
                if (!inView) return;
            }
            if (s.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }
                if (kc === 39 && !s.rtl || kc === 37 && s.rtl) s.slideNext();
                if (kc === 37 && !s.rtl || kc === 39 && s.rtl) s.slidePrev();
            } else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }
                if (kc === 40) s.slideNext();
                if (kc === 38) s.slidePrev();
            }
        }
        s.disableKeyboardControl = function () {
            s.params.keyboardControl = false;
            $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function () {
            s.params.keyboardControl = true;
            $(document).on('keydown', handleKeyboard);
        };

        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
            event: false,
            lastScrollTime: new window.Date().getTime()
        };
        if (s.params.mousewheelControl) {
            /**
             * The best combination if you prefer spinX + spinY normalization.  It favors
             * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
             * 'wheel' event, making spin speed determination impossible.
             */
            s.mousewheel.event = navigator.userAgent.indexOf('firefox') > -1 ? 'DOMMouseScroll' : isEventSupported() ? 'wheel' : 'mousewheel';
        }

        function isEventSupported() {
            var eventName = 'onwheel';
            var isSupported = eventName in document;

            if (!isSupported) {
                var element = document.createElement('div');
                element.setAttribute(eventName, 'return;');
                isSupported = typeof element[eventName] === 'function';
            }

            if (!isSupported && document.implementation && document.implementation.hasFeature &&
            // always returns true in newer browsers as per the standard.
            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
            document.implementation.hasFeature('', '') !== true) {
                // This is the only way to test support for the `wheel` event in IE9+.
                isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
            }

            return isSupported;
        }

        function handleMousewheel(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var delta = 0;
            var rtlFactor = s.rtl ? -1 : 1;

            var data = normalizeWheel(e);

            if (s.params.mousewheelForceToAxis) {
                if (s.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;else return;
                } else {
                    if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;else return;
                }
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }

            if (delta === 0) return;

            if (s.params.mousewheelInvert) delta = -delta;

            if (!s.params.freeMode) {
                if (new window.Date().getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating) {
                            s.slideNext();
                            s.emit('onScroll', s, e);
                        } else if (s.params.mousewheelReleaseOnEdges) return true;
                    } else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating) {
                            s.slidePrev();
                            s.emit('onScroll', s, e);
                        } else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                }
                s.mousewheel.lastScrollTime = new window.Date().getTime();
            } else {
                //Freemode or scrollContainer:
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                var wasBeginning = s.isBeginning,
                    wasEnd = s.isEnd;

                if (position >= s.minTranslate()) position = s.minTranslate();
                if (position <= s.maxTranslate()) position = s.maxTranslate();

                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();

                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                    s.updateClasses();
                }

                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function () {
                        s.slideReset();
                    }, 300);
                } else {
                    if (s.params.lazyLoading && s.lazy) {
                        s.lazy.load();
                    }
                }
                // Emit event
                s.emit('onScroll', s, e);

                // Stop autoplay
                if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();

                // Return page scroll on edge positions
                if (position === 0 || position === s.maxTranslate()) return;
            }

            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.off(s.mousewheel.event, handleMousewheel);
            return true;
        };

        s.enableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.on(s.mousewheel.event, handleMousewheel);
            return true;
        };

        /**
         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
         * complicated, thus this doc is long and (hopefully) detailed enough to answer
         * your questions.
         *
         * If you need to react to the mouse wheel in a predictable way, this code is
         * like your bestest friend. * hugs *
         *
         * As of today, there are 4 DOM event types you can listen to:
         *
         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
         *
         * So what to do?  The is the best:
         *
         *   normalizeWheel.getEventType();
         *
         * In your event callback, use this code to get sane interpretation of the
         * deltas.  This code will return an object with properties:
         *
         *   spinX   -- normalized spin speed (use for zoom) - x plane
         *   spinY   -- " - y plane
         *   pixelX  -- normalized distance (to pixels) - x plane
         *   pixelY  -- " - y plane
         *
         * Wheel values are provided by the browser assuming you are using the wheel to
         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
         * significantly on different platforms and browsers, forgetting that you can
         * scroll at different speeds.  Some devices (like trackpads) emit more events
         * at smaller increments with fine granularity, and some emit massive jumps with
         * linear speed or acceleration.
         *
         * This code does its best to normalize the deltas for you:
         *
         *   - spin is trying to normalize how far the wheel was spun (or trackpad
         *     dragged).  This is super useful for zoom support where you want to
         *     throw away the chunky scroll steps on the PC and make those equal to
         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
         *     resolve a single slow step on a wheel to 1.
         *
         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
         *     get the crazy differences between browsers, but at least it'll be in
         *     pixels!
         *
         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
         *     should translate to positive value zooming IN, negative zooming OUT.
         *     This matches the newer 'wheel' event.
         *
         * Why are there spinX, spinY (or pixels)?
         *
         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
         *     with a mouse.  It results in side-scrolling in the browser by default.
         *
         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
         *
         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
         *     probably is by browsers in conjunction with fancy 3D controllers .. but
         *     you know.
         *
         * Implementation info:
         *
         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
         * average mouse:
         *
         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
         *
         * On the trackpad:
         *
         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
         *
         * On other/older browsers.. it's more complicated as there can be multiple and
         * also missing delta values.
         *
         * The 'wheel' event is more standard:
         *
         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
         *
         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
         * backward compatibility with older events.  Those other values help us
         * better normalize spin speed.  Example of what the browsers provide:
         *
         *                          | event.wheelDelta | event.detail
         *        ------------------+------------------+--------------
         *          Safari v5/OS X  |       -120       |       0
         *          Safari v5/Win7  |       -120       |       0
         *         Chrome v17/OS X  |       -120       |       0
         *         Chrome v17/Win7  |       -120       |       0
         *                IE9/Win7  |       -120       |   undefined
         *         Firefox v4/OS X  |     undefined    |       1
         *         Firefox v4/Win7  |     undefined    |       3
         *
         */
        function normalizeWheel( /*object*/event) /*object*/{
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;

            var sX = 0,
                sY = 0,
                // spinX, spinY
            pX = 0,
                pY = 0; // pixelX, pixelY

            // Legacy
            if ('detail' in event) {
                sY = event.detail;
            }
            if ('wheelDelta' in event) {
                sY = -event.wheelDelta / 120;
            }
            if ('wheelDeltaY' in event) {
                sY = -event.wheelDeltaY / 120;
            }
            if ('wheelDeltaX' in event) {
                sX = -event.wheelDeltaX / 120;
            }

            // side scrolling on FF with DOMMouseScroll
            if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }

            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;

            if ('deltaY' in event) {
                pY = event.deltaY;
            }
            if ('deltaX' in event) {
                pX = event.deltaX;
            }

            if ((pX || pY) && event.deltaMode) {
                if (event.deltaMode === 1) {
                    // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }

            // Fall-back if spin cannot be determined
            if (pX && !sX) {
                sX = pX < 1 ? -1 : 1;
            }
            if (pY && !sY) {
                sY = pY < 1 ? -1 : 1;
            }

            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }

        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            var rtlFactor = s.rtl ? -1 : 1;

            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            } else {
                if (s.isHorizontal()) {
                    pX = p;
                    pY = '0';
                } else {
                    pY = p;
                    pX = '0';
                }
            }

            if (pX.indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
            } else {
                pX = pX * progress * rtlFactor + 'px';
            }
            if (pY.indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            } else {
                pY = pY * progress + 'px';
            }

            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
            setTranslate: function setTranslate() {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                    setParallaxTransform(this, s.progress);
                });
                s.slides.each(function () {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function setTransition(duration) {
                if (typeof duration === 'undefined') duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };

        /*=========================
          Zoom
          ===========================*/
        s.zoom = {
            // "Global" Props
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
                slide: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                image: undefined,
                imageWrap: undefined,
                zoomMax: s.params.zoomMax
            },
            image: {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {},
                touchesCurrent: {}
            },
            velocity: {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined
            },
            // Calc Scale From Multi-touches
            getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2) return 1;
                var x1 = e.targetTouches[0].pageX,
                    y1 = e.targetTouches[0].pageY,
                    x2 = e.targetTouches[1].pageX,
                    y2 = e.targetTouches[1].pageY;
                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                return distance;
            },
            // Events
            onGestureStart: function onGestureStart(e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.slide || !z.gesture.slide.length) {
                    z.gesture.slide = $(this);
                    if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                    z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
                    if (z.gesture.imageWrap.length === 0) {
                        z.gesture.image = undefined;
                        return;
                    }
                }
                z.gesture.image.transition(0);
                z.isScaling = true;
            },
            onGestureChange: function onGestureChange(e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (s.support.gestures) {
                    z.scale = e.scale * z.currentScale;
                } else {
                    z.scale = z.gesture.scaleMove / z.gesture.scaleStart * z.currentScale;
                }
                if (z.scale > z.gesture.zoomMax) {
                    z.scale = z.gesture.zoomMax - 1 + Math.pow(z.scale - z.gesture.zoomMax + 1, 0.5);
                }
                if (z.scale < s.params.zoomMin) {
                    z.scale = s.params.zoomMin + 1 - Math.pow(s.params.zoomMin - z.scale + 1, 0.5);
                }
                z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
            },
            onGestureEnd: function onGestureEnd(e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
                        return;
                    }
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
                z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                z.currentScale = z.scale;
                z.isScaling = false;
                if (z.scale === 1) z.gesture.slide = undefined;
            },
            onTouchStart: function onTouchStart(s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (z.image.isTouched) return;
                if (s.device.os === 'android') e.preventDefault();
                z.image.isTouched = true;
                z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            },
            onTouchMove: function onTouchMove(e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                s.allowClick = false;
                if (!z.image.isTouched || !z.gesture.slide) return;

                if (!z.image.isMoved) {
                    z.image.width = z.gesture.image[0].offsetWidth;
                    z.image.height = z.gesture.image[0].offsetHeight;
                    z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
                    z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
                    z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
                    z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
                    z.gesture.imageWrap.transition(0);
                    if (s.rtl) z.image.startX = -z.image.startX;
                    if (s.rtl) z.image.startY = -z.image.startY;
                }
                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;

                if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;

                z.image.minX = Math.min(z.gesture.slideWidth / 2 - scaledWidth / 2, 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min(z.gesture.slideHeight / 2 - scaledHeight / 2, 0);
                z.image.maxY = -z.image.minY;

                z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

                if (!z.image.isMoved && !z.isScaling) {
                    if (s.isHorizontal() && Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x || Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x) {
                        z.image.isTouched = false;
                        return;
                    } else if (!s.isHorizontal() && Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y || Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y) {
                        z.image.isTouched = false;
                        return;
                    }
                }
                e.preventDefault();
                e.stopPropagation();

                z.image.isMoved = true;
                z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
                z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;

                if (z.image.currentX < z.image.minX) {
                    z.image.currentX = z.image.minX + 1 - Math.pow(z.image.minX - z.image.currentX + 1, 0.8);
                }
                if (z.image.currentX > z.image.maxX) {
                    z.image.currentX = z.image.maxX - 1 + Math.pow(z.image.currentX - z.image.maxX + 1, 0.8);
                }

                if (z.image.currentY < z.image.minY) {
                    z.image.currentY = z.image.minY + 1 - Math.pow(z.image.minY - z.image.currentY + 1, 0.8);
                }
                if (z.image.currentY > z.image.maxY) {
                    z.image.currentY = z.image.maxY - 1 + Math.pow(z.image.currentY - z.image.maxY + 1, 0.8);
                }

                //Velocity
                if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
                if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
                if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
                z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
                z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
                if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
                if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
                z.velocity.prevPositionX = z.image.touchesCurrent.x;
                z.velocity.prevPositionY = z.image.touchesCurrent.y;
                z.velocity.prevTime = Date.now();

                z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTouchEnd: function onTouchEnd(s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (!z.image.isTouched || !z.image.isMoved) {
                    z.image.isTouched = false;
                    z.image.isMoved = false;
                    return;
                }
                z.image.isTouched = false;
                z.image.isMoved = false;
                var momentumDurationX = 300;
                var momentumDurationY = 300;
                var momentumDistanceX = z.velocity.x * momentumDurationX;
                var newPositionX = z.image.currentX + momentumDistanceX;
                var momentumDistanceY = z.velocity.y * momentumDurationY;
                var newPositionY = z.image.currentY + momentumDistanceY;

                //Fix duration
                if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
                if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

                z.image.currentX = newPositionX;
                z.image.currentY = newPositionY;

                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;
                z.image.minX = Math.min(z.gesture.slideWidth / 2 - scaledWidth / 2, 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min(z.gesture.slideHeight / 2 - scaledHeight / 2, 0);
                z.image.maxY = -z.image.minY;
                z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
                z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);

                z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTransitionEnd: function onTransitionEnd(s) {
                var z = s.zoom;
                if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
                    z.gesture.image.transform('translate3d(0,0,0) scale(1)');
                    z.gesture.imageWrap.transform('translate3d(0,0,0)');
                    z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
                    z.scale = z.currentScale = 1;
                }
            },
            // Toggle Zoom
            toggleZoom: function toggleZoom(s, e) {
                var z = s.zoom;
                if (!z.gesture.slide) {
                    z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;

                var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;

                if (typeof z.image.touchesStart.x === 'undefined' && e) {
                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                } else {
                    touchX = z.image.touchesStart.x;
                    touchY = z.image.touchesStart.y;
                }

                if (z.scale && z.scale !== 1) {
                    // Zoom Out
                    z.scale = z.currentScale = 1;
                    z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
                    z.gesture.slide = undefined;
                } else {
                    // Zoom In
                    z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
                    if (e) {
                        slideWidth = z.gesture.slide[0].offsetWidth;
                        slideHeight = z.gesture.slide[0].offsetHeight;
                        offsetX = z.gesture.slide.offset().left;
                        offsetY = z.gesture.slide.offset().top;
                        diffX = offsetX + slideWidth / 2 - touchX;
                        diffY = offsetY + slideHeight / 2 - touchY;

                        imageWidth = z.gesture.image[0].offsetWidth;
                        imageHeight = z.gesture.image[0].offsetHeight;
                        scaledWidth = imageWidth * z.scale;
                        scaledHeight = imageHeight * z.scale;

                        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                        translateMaxX = -translateMinX;
                        translateMaxY = -translateMinY;

                        translateX = diffX * z.scale;
                        translateY = diffY * z.scale;

                        if (translateX < translateMinX) {
                            translateX = translateMinX;
                        }
                        if (translateX > translateMaxX) {
                            translateX = translateMaxX;
                        }

                        if (translateY < translateMinY) {
                            translateY = translateMinY;
                        }
                        if (translateY > translateMaxY) {
                            translateY = translateMaxY;
                        }
                    } else {
                        translateX = 0;
                        translateY = 0;
                    }
                    z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                }
            },
            // Attach/Detach Events
            attachEvents: function attachEvents(detach) {
                var action = detach ? 'off' : 'on';

                if (s.params.zoom) {
                    var target = s.slides;
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? { passive: true, capture: false } : false;
                    // Scale image
                    if (s.support.gestures) {
                        s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
                        s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
                        s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
                    } else if (s.touchEvents.start === 'touchstart') {
                        s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
                        s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
                        s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
                    }

                    // Move image
                    s[action]('touchStart', s.zoom.onTouchStart);
                    s.slides.each(function (index, slide) {
                        if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
                            $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
                        }
                    });
                    s[action]('touchEnd', s.zoom.onTouchEnd);

                    // Scale Out
                    s[action]('transitionEnd', s.zoom.onTransitionEnd);
                    if (s.params.zoomToggle) {
                        s.on('doubleTap', s.zoom.toggleZoom);
                    }
                }
            },
            init: function init() {
                s.zoom.attachEvents();
            },
            destroy: function destroy() {
                s.zoom.attachEvents(true);
            }
        };

        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p) s._plugins.push(p);
        }
        // Method to call all plugins event/method
        s.callPlugins = function (eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        };

        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName(eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                } else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {};
        s.emit = function (eventName) {
            // Trigger callbacks
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            // Trigger events
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            // Trigger plugins
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        };
        s.off = function (eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                // Remove all handlers for such event
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if (s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        };
        s.once = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function _handler() {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        };

        // Accessibility tools
        s.a11y = {
            makeFocusable: function makeFocusable($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function addRole($el, role) {
                $el.attr('role', role);
                return $el;
            },

            addLabel: function addLabel($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },

            disable: function disable($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },

            enable: function enable($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },

            onEnterKey: function onEnterKey(event) {
                if (event.keyCode !== 13) return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    } else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                } else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    } else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },

            liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),

            notify: function notify(message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            },
            init: function init() {
                // Setup accessibility
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    s.a11y.makeFocusable(s.nextButton);
                    s.a11y.addRole(s.nextButton, 'button');
                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    s.a11y.makeFocusable(s.prevButton);
                    s.a11y.addRole(s.prevButton, 'button');
                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
                }

                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function initPagination() {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function () {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function destroy() {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
            }
        };

        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function () {
            if (s.params.loop) s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.enableDraggable();
                }
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop) s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            } else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.zoom && s.zoom) {
                s.zoom.init();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl) s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl) s.enableMousewheelControl();
            }
            // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
            if (s.params.hashnavReplaceState) {
                s.params.replaceState = s.params.hashnavReplaceState;
            }
            if (s.params.history) {
                if (s.history) s.history.init();
            }
            if (s.params.hashnav) {
                if (s.hashnav) s.hashnav.init();
            }
            if (s.params.a11y && s.a11y) s.a11y.init();
            s.emit('onInit', s);
        };

        // Cleanup dynamic styles
        s.cleanupStyles = function () {
            // Container
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');

            // Wrapper
            s.wrapper.removeAttr('style');

            // Slides
            if (s.slides && s.slides.length) {
                s.slides.removeClass([s.params.slideVisibleClass, s.params.slideActiveClass, s.params.slideNextClass, s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
            }

            // Pagination/Bullets
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }

            // Buttons
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);

            // Scrollbar
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
            }
        };

        // Destroy
        s.destroy = function (deleteInstance, cleanupStyles) {
            // Detach evebts
            s.detachEvents();
            // Stop autoplay
            s.stopAutoplay();
            // Disable draggable
            if (s.params.scrollbar && s.scrollbar) {
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.disableDraggable();
                }
            }
            // Destroy loop
            if (s.params.loop) {
                s.destroyLoop();
            }
            // Cleanup styles
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            // Disconnect observer
            s.disconnectObservers();

            // Destroy zoom
            if (s.params.zoom && s.zoom) {
                s.zoom.destroy();
            }
            // Disable keyboard/mousewheel
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl) s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl) s.disableMousewheelControl();
            }
            // Disable a11y
            if (s.params.a11y && s.a11y) s.a11y.destroy();
            // Delete history popstate
            if (s.params.history && !s.params.replaceState) {
                window.removeEventListener('popstate', s.history.setHistoryPopState);
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.destroy();
            }
            // Destroy callback
            s.emit('onDestroy');
            // Delete instance
            if (deleteInstance !== false) s = null;
        };

        s.init();

        // Return swiper instance
        return s;
    };

    /*==================================================
        Prototype
    ====================================================*/
    Swiper.prototype = {
        isSafari: function () {
            var ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function isArray(arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function () {
                // create temporary DIV
                var div = document.createElement('div');
                // add content to tmp DIV which is wrapped into the IE HTML conditional statement
                div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
                // return true / false value based on what will browser render
                return div.getElementsByTagName('i').length === 1;
            }()
        },
        /*==================================================
        Devices
        ====================================================*/
        device: function () {
            var ua = window.navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        }(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
            touch: window.Modernizr && Modernizr.touch === true || function () {
                return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
            }(),

            transforms3d: window.Modernizr && Modernizr.csstransforms3d === true || function () {
                var div = document.createElement('div').style;
                return 'webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div;
            }(),

            flexbox: function () {
                var div = document.createElement('div').style;
                var styles = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i] in div) return true;
                }
            }(),

            observer: function () {
                return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
            }(),

            passiveListener: function () {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function get() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener('testPassiveListener', null, opts);
                } catch (e) {}
                return supportsPassive;
            }(),

            gestures: function () {
                return 'ongesturestart' in window;
            }()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
    };

    /*===========================
    Dom7 Library
    ===========================*/
    var Dom7 = function () {
        var Dom7 = function Dom7(arr) {
            var _this = this,
                i = 0;
            // Create array-like object
            for (i = 0; i < arr.length; i++) {
                _this[i] = arr[i];
            }
            _this.length = arr.length;
            // Return collection with methods
            return this;
        };
        var $ = function $(selector, context) {
            var arr = [],
                i = 0;
            if (selector && !context) {
                if (selector instanceof Dom7) {
                    return selector;
                }
            }
            if (selector) {
                // String
                if (typeof selector === 'string') {
                    var els,
                        tempParent,
                        html = selector.trim();
                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                        var toCreate = 'div';
                        if (html.indexOf('<li') === 0) toCreate = 'ul';
                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
                        if (html.indexOf('<option') === 0) toCreate = 'select';
                        tempParent = document.createElement(toCreate);
                        tempParent.innerHTML = selector;
                        for (i = 0; i < tempParent.childNodes.length; i++) {
                            arr.push(tempParent.childNodes[i]);
                        }
                    } else {
                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                            // Pure ID selector
                            els = [document.getElementById(selector.split('#')[1])];
                        } else {
                            // Other selectors
                            els = (context || document).querySelectorAll(selector);
                        }
                        for (i = 0; i < els.length; i++) {
                            if (els[i]) arr.push(els[i]);
                        }
                    }
                }
                // Node/element
                else if (selector.nodeType || selector === window || selector === document) {
                        arr.push(selector);
                    }
                    //Array of elements or instance of Dom
                    else if (selector.length > 0 && selector[0].nodeType) {
                            for (i = 0; i < selector.length; i++) {
                                arr.push(selector[i]);
                            }
                        }
            }
            return new Dom7(arr);
        };
        Dom7.prototype = {
            // Classes and attriutes
            addClass: function addClass(className) {
                if (typeof className === 'undefined') {
                    return this;
                }
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.add(classes[i]);
                    }
                }
                return this;
            },
            removeClass: function removeClass(className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.remove(classes[i]);
                    }
                }
                return this;
            },
            hasClass: function hasClass(className) {
                if (!this[0]) return false;else return this[0].classList.contains(className);
            },
            toggleClass: function toggleClass(className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.toggle(classes[i]);
                    }
                }
                return this;
            },
            attr: function attr(attrs, value) {
                if (arguments.length === 1 && typeof attrs === 'string') {
                    // Get attr
                    if (this[0]) return this[0].getAttribute(attrs);else return undefined;
                } else {
                    // Set attrs
                    for (var i = 0; i < this.length; i++) {
                        if (arguments.length === 2) {
                            // String
                            this[i].setAttribute(attrs, value);
                        } else {
                            // Object
                            for (var attrName in attrs) {
                                this[i][attrName] = attrs[attrName];
                                this[i].setAttribute(attrName, attrs[attrName]);
                            }
                        }
                    }
                    return this;
                }
            },
            removeAttr: function removeAttr(attr) {
                for (var i = 0; i < this.length; i++) {
                    this[i].removeAttribute(attr);
                }
                return this;
            },
            data: function data(key, value) {
                if (typeof value === 'undefined') {
                    // Get value
                    if (this[0]) {
                        var dataKey = this[0].getAttribute('data-' + key);
                        if (dataKey) return dataKey;else if (this[0].dom7ElementDataStorage && key in this[0].dom7ElementDataStorage) return this[0].dom7ElementDataStorage[key];else return undefined;
                    } else return undefined;
                } else {
                    // Set value
                    for (var i = 0; i < this.length; i++) {
                        var el = this[i];
                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                        el.dom7ElementDataStorage[key] = value;
                    }
                    return this;
                }
            },
            // Transforms
            transform: function transform(_transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = _transform;
                }
                return this;
            },
            transition: function transition(duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            },
            //Events
            on: function on(eventName, targetSelector, listener, capture) {
                function handleLiveEvent(e) {
                    var target = e.target;
                    if ($(target).is(targetSelector)) listener.call(target, e);else {
                        var parents = $(target).parents();
                        for (var k = 0; k < parents.length; k++) {
                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
                        }
                    }
                }
                var events = eventName.split(' ');
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof targetSelector === 'function' || targetSelector === false) {
                        // Usual events
                        if (typeof targetSelector === 'function') {
                            listener = arguments[1];
                            capture = arguments[2] || false;
                        }
                        for (j = 0; j < events.length; j++) {
                            this[i].addEventListener(events[j], listener, capture);
                        }
                    } else {
                        //Live events
                        for (j = 0; j < events.length; j++) {
                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
                            this[i].dom7LiveListeners.push({ listener: listener, liveListener: handleLiveEvent });
                            this[i].addEventListener(events[j], handleLiveEvent, capture);
                        }
                    }
                }

                return this;
            },
            off: function off(eventName, targetSelector, listener, capture) {
                var events = eventName.split(' ');
                for (var i = 0; i < events.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        if (typeof targetSelector === 'function' || targetSelector === false) {
                            // Usual events
                            if (typeof targetSelector === 'function') {
                                listener = arguments[1];
                                capture = arguments[2] || false;
                            }
                            this[j].removeEventListener(events[i], listener, capture);
                        } else {
                            // Live event
                            if (this[j].dom7LiveListeners) {
                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                                    if (this[j].dom7LiveListeners[k].listener === listener) {
                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                                    }
                                }
                            }
                        }
                    }
                }
                return this;
            },
            once: function once(eventName, targetSelector, listener, capture) {
                var dom = this;
                if (typeof targetSelector === 'function') {
                    targetSelector = false;
                    listener = arguments[1];
                    capture = arguments[2];
                }
                function proxy(e) {
                    listener(e);
                    dom.off(eventName, targetSelector, proxy, capture);
                }
                dom.on(eventName, targetSelector, proxy, capture);
            },
            trigger: function trigger(eventName, eventData) {
                for (var i = 0; i < this.length; i++) {
                    var evt;
                    try {
                        evt = new window.CustomEvent(eventName, { detail: eventData, bubbles: true, cancelable: true });
                    } catch (e) {
                        evt = document.createEvent('Event');
                        evt.initEvent(eventName, true, true);
                        evt.detail = eventData;
                    }
                    this[i].dispatchEvent(evt);
                }
                return this;
            },
            transitionEnd: function transitionEnd(callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i,
                    j,
                    dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            },
            // Sizing/Styles
            width: function width() {
                if (this[0] === window) {
                    return window.innerWidth;
                } else {
                    if (this.length > 0) {
                        return parseFloat(this.css('width'));
                    } else {
                        return null;
                    }
                }
            },
            outerWidth: function outerWidth(includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));else return this[0].offsetWidth;
                } else return null;
            },
            height: function height() {
                if (this[0] === window) {
                    return window.innerHeight;
                } else {
                    if (this.length > 0) {
                        return parseFloat(this.css('height'));
                    } else {
                        return null;
                    }
                }
            },
            outerHeight: function outerHeight(includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));else return this[0].offsetHeight;
                } else return null;
            },
            offset: function offset() {
                if (this.length > 0) {
                    var el = this[0];
                    var box = el.getBoundingClientRect();
                    var body = document.body;
                    var clientTop = el.clientTop || body.clientTop || 0;
                    var clientLeft = el.clientLeft || body.clientLeft || 0;
                    var scrollTop = window.pageYOffset || el.scrollTop;
                    var scrollLeft = window.pageXOffset || el.scrollLeft;
                    return {
                        top: box.top + scrollTop - clientTop,
                        left: box.left + scrollLeft - clientLeft
                    };
                } else {
                    return null;
                }
            },
            css: function css(props, value) {
                var i;
                if (arguments.length === 1) {
                    if (typeof props === 'string') {
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                    } else {
                        for (i = 0; i < this.length; i++) {
                            for (var prop in props) {
                                this[i].style[prop] = props[prop];
                            }
                        }
                        return this;
                    }
                }
                if (arguments.length === 2 && typeof props === 'string') {
                    for (i = 0; i < this.length; i++) {
                        this[i].style[props] = value;
                    }
                    return this;
                }
                return this;
            },

            //Dom manipulation
            each: function each(callback) {
                for (var i = 0; i < this.length; i++) {
                    callback.call(this[i], i, this[i]);
                }
                return this;
            },
            html: function html(_html) {
                if (typeof _html === 'undefined') {
                    return this[0] ? this[0].innerHTML : undefined;
                } else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].innerHTML = _html;
                    }
                    return this;
                }
            },
            text: function text(_text) {
                if (typeof _text === 'undefined') {
                    if (this[0]) {
                        return this[0].textContent.trim();
                    } else return null;
                } else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].textContent = _text;
                    }
                    return this;
                }
            },
            is: function is(selector) {
                if (!this[0]) return false;
                var compareWith, i;
                if (typeof selector === 'string') {
                    var el = this[0];
                    if (el === document) return selector === document;
                    if (el === window) return selector === window;

                    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);else {
                        compareWith = $(selector);
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                } else if (selector === document) return this[0] === document;else if (selector === window) return this[0] === window;else {
                    if (selector.nodeType || selector instanceof Dom7) {
                        compareWith = selector.nodeType ? [selector] : selector;
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                    return false;
                }
            },
            index: function index() {
                if (this[0]) {
                    var child = this[0];
                    var i = 0;
                    while ((child = child.previousSibling) !== null) {
                        if (child.nodeType === 1) i++;
                    }
                    return i;
                } else return undefined;
            },
            eq: function eq(index) {
                if (typeof index === 'undefined') return this;
                var length = this.length;
                var returnIndex;
                if (index > length - 1) {
                    return new Dom7([]);
                }
                if (index < 0) {
                    returnIndex = length + index;
                    if (returnIndex < 0) return new Dom7([]);else return new Dom7([this[returnIndex]]);
                }
                return new Dom7([this[index]]);
            },
            append: function append(newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        while (tempDiv.firstChild) {
                            this[i].appendChild(tempDiv.firstChild);
                        }
                    } else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].appendChild(newChild[j]);
                        }
                    } else {
                        this[i].appendChild(newChild);
                    }
                }
                return this;
            },
            prepend: function prepend(newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                        }
                        // this[i].insertAdjacentHTML('afterbegin', newChild);
                    } else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                        }
                    } else {
                        this[i].insertBefore(newChild, this[i].childNodes[0]);
                    }
                }
                return this;
            },
            insertBefore: function insertBefore(selector) {
                var before = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (before.length === 1) {
                        before[0].parentNode.insertBefore(this[i], before[0]);
                    } else if (before.length > 1) {
                        for (var j = 0; j < before.length; j++) {
                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                        }
                    }
                }
            },
            insertAfter: function insertAfter(selector) {
                var after = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (after.length === 1) {
                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                    } else if (after.length > 1) {
                        for (var j = 0; j < after.length; j++) {
                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                        }
                    }
                }
            },
            next: function next(selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);
                    } else {
                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);
                    }
                } else return new Dom7([]);
            },
            nextAll: function nextAll(selector) {
                var nextEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.nextElementSibling) {
                    var next = el.nextElementSibling;
                    if (selector) {
                        if ($(next).is(selector)) nextEls.push(next);
                    } else nextEls.push(next);
                    el = next;
                }
                return new Dom7(nextEls);
            },
            prev: function prev(selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);
                    } else {
                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);
                    }
                } else return new Dom7([]);
            },
            prevAll: function prevAll(selector) {
                var prevEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.previousElementSibling) {
                    var prev = el.previousElementSibling;
                    if (selector) {
                        if ($(prev).is(selector)) prevEls.push(prev);
                    } else prevEls.push(prev);
                    el = prev;
                }
                return new Dom7(prevEls);
            },
            parent: function parent(selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    if (selector) {
                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                    } else {
                        parents.push(this[i].parentNode);
                    }
                }
                return $($.unique(parents));
            },
            parents: function parents(selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    var parent = this[i].parentNode;
                    while (parent) {
                        if (selector) {
                            if ($(parent).is(selector)) parents.push(parent);
                        } else {
                            parents.push(parent);
                        }
                        parent = parent.parentNode;
                    }
                }
                return $($.unique(parents));
            },
            find: function find(selector) {
                var foundElements = [];
                for (var i = 0; i < this.length; i++) {
                    var found = this[i].querySelectorAll(selector);
                    for (var j = 0; j < found.length; j++) {
                        foundElements.push(found[j]);
                    }
                }
                return new Dom7(foundElements);
            },
            children: function children(selector) {
                var children = [];
                for (var i = 0; i < this.length; i++) {
                    var childNodes = this[i].childNodes;

                    for (var j = 0; j < childNodes.length; j++) {
                        if (!selector) {
                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
                        } else {
                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
                        }
                    }
                }
                return new Dom7($.unique(children));
            },
            remove: function remove() {
                for (var i = 0; i < this.length; i++) {
                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
                }
                return this;
            },
            add: function add() {
                var dom = this;
                var i, j;
                for (i = 0; i < arguments.length; i++) {
                    var toAdd = $(arguments[i]);
                    for (j = 0; j < toAdd.length; j++) {
                        dom[dom.length] = toAdd[j];
                        dom.length++;
                    }
                }
                return dom;
            }
        };
        $.fn = Dom7.prototype;
        $.unique = function (arr) {
            var unique = [];
            for (var i = 0; i < arr.length; i++) {
                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
            }
            return unique;
        };

        return $;
    }();

    /*===========================
     Get Dom libraries
     ===========================*/
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
        if (window[swiperDomPlugins[i]]) {
            addLibraryPlugin(window[swiperDomPlugins[i]]);
        }
    }
    // Required DOM Plugins
    var domLib;
    if (typeof Dom7 === 'undefined') {
        domLib = window.Dom7 || window.Zepto || window.jQuery;
    } else {
        domLib = Dom7;
    }

    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function (params) {
            var firstInstance;
            lib(this).each(function () {
                var s = new Swiper(this, params);
                if (!firstInstance) firstInstance = s;
            });
            return firstInstance;
        };
    }

    if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
            domLib.fn.transitionEnd = function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i,
                    j,
                    dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            };
        }
        if (!('transform' in domLib.fn)) {
            domLib.fn.transform = function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            };
        }
        if (!('transition' in domLib.fn)) {
            domLib.fn.transition = function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            };
        }
        if (!('outerWidth' in domLib.fn)) {
            domLib.fn.outerWidth = function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));else return this[0].offsetWidth;
                } else return null;
            };
        }
    }

    window.Swiper = Swiper;
})();
/*===========================
Swiper AMD Export
===========================*/
if (true) {
    module.exports = window.Swiper;
} else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';

        return window.Swiper;
    });
}
//# sourceMappingURL=maps/swiper.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);
__webpack_require__(9);
__webpack_require__(8);

__webpack_require__(3);
__webpack_require__(2);

__webpack_require__(6);
__webpack_require__(5);

__webpack_require__(0);
__webpack_require__(1);

__webpack_require__(4);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTU3YjFjYjIzOTk1ZDlkZmM2ZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9yYm94L2pxdWVyeS5jb2xvcmJveC1taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9yYm94L2xpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hamF4LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NraXAtbGluay1mb2N1cy1maXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N3aXBlci9zd2lwZXItc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9zd2lwZXIvc3dpcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9yYm94L2NvbG9yYm94LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3dpcGVyL3N3aXBlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsidCIsImUiLCJpIiwibiIsIm8iLCJyIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiWiIsInN0eWxlIiwiY3NzVGV4dCIsImlubmVySGVpZ2h0IiwiaGVpZ2h0IiwiT2JqZWN0IiwiY2FjaGUiLCJlbCIsInZhbHVlIiwiYXR0ciIsIlgiLCJnZXQiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImgiLCJXIiwibGVuZ3RoIiwiQSIsImEiLCJNYXRoIiwicm91bmQiLCJ0ZXN0IiwiRSIsIndpZHRoIiwicGFyc2VJbnQiLCJzIiwibCIsImRldmljZVBpeGVsUmF0aW8iLCJyZXBsYWNlIiwiZCIsIngiLCJjb250YWlucyIsInRhcmdldCIsInYiLCJzdG9wUHJvcGFnYXRpb24iLCJmb2N1cyIsImMiLCJzdHIiLCJhZGQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZyIsInRlIiwiZmlsdGVyIiwiZGF0YSIsIlkiLCJpbmRleCIsIl8iLCJ1IiwidHJpZ2dlciIsImFlIiwidHJpZ2dlckhhbmRsZXIiLCJmIiwiRyIsIlUiLCIkIiwiY3NzIiwidmlzaWJpbGl0eSIsImRpc3BsYXkiLCJvcGFjaXR5IiwiSSIsInNlIiwiYiIsImFwcGVuZCIsImoiLCJUIiwiayIsIm91dGVySGVpZ2h0IiwiRCIsIkMiLCJIIiwib3V0ZXJXaWR0aCIsIk4iLCJ6IiwidyIsIm1heCIsIm1pbiIsIkoiLCJwb3NpdGlvbiIsImVlIiwiTyIsIkYiLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uZSIsInJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInAiLCJwYXJzZUZsb2F0IiwiY3Vyc29yIiwic2hvdyIsIkIiLCJodG1sIiwiYXBwZW5kVG8iLCJWIiwic3VwcG9ydCIsInJvbGUiLCJ0YWJpbmRleCIsIkwiLCJ5IiwiUiIsIlAiLCJLIiwiUyIsImZpbmQiLCJNIiwiYm9keSIsInBhcmVudCIsIm0iLCJ3aGljaCIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibWV0YUtleSIsImN0cmxLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrIiwibmV4dCIsInByZXYiLCJjbG9zZSIsImJpbmQiLCJrZXlDb2RlIiwiZm4iLCJvbiIsImxpdmUiLCJwcmVwIiwibGUiLCJxIiwiaGUiLCJpZSIsIm13IiwibWgiLCJRIiwic2V0VGltZW91dCIsImVxIiwiaW5zZXJ0QmVmb3JlIiwicmVwbGFjZVdpdGgiLCJtYXJnaW5Ub3AiLCJzcmMiLCJsb2FkIiwiY29udGVudHMiLCJwaG90byIsImlmcmFtZSIsImlubGluZSIsInRyYW5zaXRpb24iLCJzcGVlZCIsImZhZGVPdXQiLCJpbml0aWFsV2lkdGgiLCJpbm5lcldpZHRoIiwibWF4V2lkdGgiLCJpbml0aWFsSGVpZ2h0IiwibWF4SGVpZ2h0Iiwic2NhbGVQaG90b3MiLCJzY3JvbGxpbmciLCJwcmVsb2FkaW5nIiwiY2xhc3NOYW1lIiwib3ZlcmxheUNsb3NlIiwiZXNjS2V5IiwiYXJyb3dLZXkiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJmaXhlZCIsImNsb3NlQnV0dG9uIiwiZmFzdElmcmFtZSIsIm9wZW4iLCJyZXBvc2l0aW9uIiwibG9vcCIsInNsaWRlc2hvdyIsInNsaWRlc2hvd0F1dG8iLCJzbGlkZXNob3dTcGVlZCIsInNsaWRlc2hvd1N0YXJ0Iiwic2xpZGVzaG93U3RvcCIsInBob3RvUmVnZXgiLCJyZXRpbmFJbWFnZSIsInJldGluYVVybCIsInJldGluYVN1ZmZpeCIsImN1cnJlbnQiLCJwcmV2aW91cyIsInhockVycm9yIiwiaW1nRXJyb3IiLCJyZXR1cm5Gb2N1cyIsInRyYXBGb2N1cyIsIm9uT3BlbiIsIm9uTG9hZCIsIm9uQ29tcGxldGUiLCJvbkNsZWFudXAiLCJvbkNsb3NlZCIsInJlbCIsImhyZWYiLCJ0aXRsZSIsImNyZWF0ZUltZyIsIkltYWdlIiwiZWFjaCIsImNyZWF0ZUlmcmFtZSIsImZyYW1lQm9yZGVyIiwiYWxsb3dUcmFuc3BhcmVuY3kiLCJuYW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhbGxvd0Z1bGxzY3JlZW4iLCJuZSIsIm9lIiwiZGUiLCJjZSIsImNsZWFyVGltZW91dCIsInVuYmluZCIsImV4dGVuZCIsIm9mZnNldCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJkZXF1ZXVlIiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwiY29tcGxldGUiLCJzdGVwIiwicmVzaXplIiwicmVtb3ZlIiwib3ZlcmZsb3ciLCJwcmVwZW5kVG8iLCJyZW1vdmVBdHRyaWJ1dGUiLCJmYWRlVG8iLCJzdG9wIiwicmVtb3ZlRGF0YSIsImVsZW1lbnQiLCJzZXR0aW5ncyIsImpRdWVyeSIsImRvY3VtZW50Iiwid2luZG93IiwiY29sb3Jib3giLCJjYlNldHRpbmdzIiwiZGFzaGVzdjNfc2NyaXB0X3ZhcnMiLCIkcGFnZV9uYXYiLCIkY3Vycl9wYWdlIiwicGFnZV9udW0iLCIkY29udGFpbmVyIiwidXBkYXRlQ2FjaGUiLCJnZXRfcGFnZV9udW0iLCJldmVudCIsImFqYXgiLCJ1cmwiLCJhamF4cGFnaW5hdGlvbiIsImFqYXh1cmwiLCJ0eXBlIiwiYWN0aW9uIiwicXVlcnlfdmFycyIsInBhZ2UiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsIiRuYXYiLCIkbW9iaWxlX21lbnViYXIiLCIkbW9iaWxlX2J0bl9vcGVuIiwiJG1vYmlsZV9jb250ZW50IiwiJG1vYmlsZV9idG5fY2xvc2UiLCIkbW9iaWxlX2JsYWNrc2NyZWVuIiwiJGhhc19jaGlsZHJlbiIsImFkZFN1Yk1lbnUiLCIkZHJvcGRvd25fYnRuIiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJkcm9wZG93blRvZ2dsZSIsImhhc0NsYXNzIiwiYWZ0ZXIiLCJzbGlkZVRvZ2dsZSIsImlzSWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsInRhZ05hbWUiLCJ0YWJJbmRleCIsImluZGV4X2JnIiwiU3dpcGVyIiwiYXV0b3BsYXkiLCJsb25nU3dpcGVzIiwibGF6eUxvYWRpbmciLCJsYXp5TG9hZGluZ0luUHJldk5leHQiLCJhdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uIiwiY29udGFpbmVyIiwicGFyYW1zIiwiZGVmYXVsdHMiLCJkaXJlY3Rpb24iLCJ0b3VjaEV2ZW50c1RhcmdldCIsImluaXRpYWxTbGlkZSIsImF1dG9wbGF5U3RvcE9uTGFzdCIsImlPU0VkZ2VTd2lwZURldGVjdGlvbiIsImlPU0VkZ2VTd2lwZVRocmVzaG9sZCIsImZyZWVNb2RlIiwiZnJlZU1vZGVNb21lbnR1bSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsImZyZWVNb2RlTW9tZW50dW1Cb3VuY2UiLCJmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW8iLCJmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbyIsImZyZWVNb2RlU3RpY2t5IiwiZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkiLCJhdXRvSGVpZ2h0Iiwic2V0V3JhcHBlclNpemUiLCJ2aXJ0dWFsVHJhbnNsYXRlIiwiZWZmZWN0IiwiY292ZXJmbG93Iiwicm90YXRlIiwic3RyZXRjaCIsImRlcHRoIiwibW9kaWZpZXIiLCJzbGlkZVNoYWRvd3MiLCJmbGlwIiwibGltaXRSb3RhdGlvbiIsImN1YmUiLCJzaGFkb3ciLCJzaGFkb3dPZmZzZXQiLCJzaGFkb3dTY2FsZSIsImZhZGUiLCJjcm9zc0ZhZGUiLCJwYXJhbGxheCIsInpvb20iLCJ6b29tTWF4Iiwiem9vbU1pbiIsInpvb21Ub2dnbGUiLCJzY3JvbGxiYXIiLCJzY3JvbGxiYXJIaWRlIiwic2Nyb2xsYmFyRHJhZ2dhYmxlIiwic2Nyb2xsYmFyU25hcE9uUmVsZWFzZSIsImtleWJvYXJkQ29udHJvbCIsIm1vdXNld2hlZWxDb250cm9sIiwibW91c2V3aGVlbFJlbGVhc2VPbkVkZ2VzIiwibW91c2V3aGVlbEludmVydCIsIm1vdXNld2hlZWxGb3JjZVRvQXhpcyIsIm1vdXNld2hlZWxTZW5zaXRpdml0eSIsIm1vdXNld2hlZWxFdmVudHNUYXJnZWQiLCJoYXNobmF2IiwiaGFzaG5hdldhdGNoU3RhdGUiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiYnJlYWtwb2ludHMiLCJ1bmRlZmluZWQiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3Iiwic2xpZGVzUGVyQ29sdW1uIiwic2xpZGVzUGVyQ29sdW1uRmlsbCIsInNsaWRlc1Blckdyb3VwIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXNPZmZzZXRCZWZvcmUiLCJzbGlkZXNPZmZzZXRBZnRlciIsInJvdW5kTGVuZ3RocyIsInRvdWNoUmF0aW8iLCJ0b3VjaEFuZ2xlIiwic2ltdWxhdGVUb3VjaCIsInNob3J0U3dpcGVzIiwibG9uZ1N3aXBlc1JhdGlvIiwibG9uZ1N3aXBlc01zIiwiZm9sbG93RmluZ2VyIiwib25seUV4dGVybmFsIiwidGhyZXNob2xkIiwidG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uIiwidG91Y2hSZWxlYXNlT25FZGdlcyIsInVuaXF1ZU5hdkVsZW1lbnRzIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25FbGVtZW50IiwicGFnaW5hdGlvbkNsaWNrYWJsZSIsInBhZ2luYXRpb25IaWRlIiwicGFnaW5hdGlvbkJ1bGxldFJlbmRlciIsInBhZ2luYXRpb25Qcm9ncmVzc1JlbmRlciIsInBhZ2luYXRpb25GcmFjdGlvblJlbmRlciIsInBhZ2luYXRpb25DdXN0b21SZW5kZXIiLCJwYWdpbmF0aW9uVHlwZSIsInJlc2lzdGFuY2UiLCJyZXNpc3RhbmNlUmF0aW8iLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJ3YXRjaFNsaWRlc1Zpc2liaWxpdHkiLCJncmFiQ3Vyc29yIiwicHJldmVudENsaWNrcyIsInByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJsYXp5TG9hZGluZ0luUHJldk5leHRBbW91bnQiLCJsYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0IiwicHJlbG9hZEltYWdlcyIsInVwZGF0ZU9uSW1hZ2VzUmVhZHkiLCJsb29wQWRkaXRpb25hbFNsaWRlcyIsImxvb3BlZFNsaWRlcyIsImNvbnRyb2wiLCJjb250cm9sSW52ZXJzZSIsImNvbnRyb2xCeSIsIm5vcm1hbGl6ZVNsaWRlSW5kZXgiLCJhbGxvd1N3aXBlVG9QcmV2IiwiYWxsb3dTd2lwZVRvTmV4dCIsInN3aXBlSGFuZGxlciIsIm5vU3dpcGluZyIsIm5vU3dpcGluZ0NsYXNzIiwicGFzc2l2ZUxpc3RlbmVycyIsImNvbnRhaW5lck1vZGlmaWVyQ2xhc3MiLCJzbGlkZUNsYXNzIiwic2xpZGVBY3RpdmVDbGFzcyIsInNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MiLCJzbGlkZVZpc2libGVDbGFzcyIsInNsaWRlRHVwbGljYXRlQ2xhc3MiLCJzbGlkZU5leHRDbGFzcyIsInNsaWRlRHVwbGljYXRlTmV4dENsYXNzIiwic2xpZGVQcmV2Q2xhc3MiLCJzbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyIsIndyYXBwZXJDbGFzcyIsImJ1bGxldENsYXNzIiwiYnVsbGV0QWN0aXZlQ2xhc3MiLCJidXR0b25EaXNhYmxlZENsYXNzIiwicGFnaW5hdGlvbkN1cnJlbnRDbGFzcyIsInBhZ2luYXRpb25Ub3RhbENsYXNzIiwicGFnaW5hdGlvbkhpZGRlbkNsYXNzIiwicGFnaW5hdGlvblByb2dyZXNzYmFyQ2xhc3MiLCJwYWdpbmF0aW9uQ2xpY2thYmxlQ2xhc3MiLCJwYWdpbmF0aW9uTW9kaWZpZXJDbGFzcyIsImxhenlMb2FkaW5nQ2xhc3MiLCJsYXp5U3RhdHVzTG9hZGluZ0NsYXNzIiwibGF6eVN0YXR1c0xvYWRlZENsYXNzIiwibGF6eVByZWxvYWRlckNsYXNzIiwibm90aWZpY2F0aW9uQ2xhc3MiLCJwcmVsb2FkZXJDbGFzcyIsInpvb21Db250YWluZXJDbGFzcyIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJhMTF5IiwicHJldlNsaWRlTWVzc2FnZSIsIm5leHRTbGlkZU1lc3NhZ2UiLCJmaXJzdFNsaWRlTWVzc2FnZSIsImxhc3RTbGlkZU1lc3NhZ2UiLCJwYWdpbmF0aW9uQnVsbGV0TWVzc2FnZSIsInJ1bkNhbGxiYWNrc09uSW5pdCIsImluaXRpYWxWaXJ0dWFsVHJhbnNsYXRlIiwib3JpZ2luYWxQYXJhbXMiLCJwYXJhbSIsIm5vZGVUeXBlIiwiRG9tNyIsImRlZXBQYXJhbSIsImRlZiIsImRlZXBEZWYiLCJjbGFzc05hbWVzIiwiWmVwdG8iLCJjdXJyZW50QnJlYWtwb2ludCIsImdldEFjdGl2ZUJyZWFrcG9pbnQiLCJicmVha3BvaW50IiwicG9pbnRzIiwicG9pbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJzb3J0Iiwic2V0QnJlYWtwb2ludCIsImJyZWFrUG9pbnRzUGFyYW1zIiwibmVlZHNSZUxvb3AiLCJkZXN0cm95TG9vcCIsInJlTG9vcCIsInN3aXBlcnMiLCJzd2lwZXIiLCJmbGV4Ym94IiwiaW5kZXhPZiIsInRyYW5zZm9ybXMzZCIsInRvdWNoIiwid3JhcHBlciIsImNoaWxkcmVuIiwicGFnaW5hdGlvbkNvbnRhaW5lciIsImlzSG9yaXpvbnRhbCIsInJ0bCIsImRpciIsInRvTG93ZXJDYXNlIiwid3JvbmdSVEwiLCJkZXZpY2UiLCJhbmRyb2lkIiwiam9pbiIsInRyYW5zbGF0ZSIsInByb2dyZXNzIiwidmVsb2NpdHkiLCJsb2NrU3dpcGVUb05leHQiLCJ1bnNldEdyYWJDdXJzb3IiLCJsb2NrU3dpcGVUb1ByZXYiLCJsb2NrU3dpcGVzIiwidW5sb2NrU3dpcGVUb05leHQiLCJzZXRHcmFiQ3Vyc29yIiwidW5sb2NrU3dpcGVUb1ByZXYiLCJ1bmxvY2tTd2lwZXMiLCJmbG9vciIsIm1vdmluZyIsImltYWdlc1RvTG9hZCIsImltYWdlc0xvYWRlZCIsImxvYWRJbWFnZSIsImltZ0VsZW1lbnQiLCJzcmNzZXQiLCJzaXplcyIsImNoZWNrRm9yQ29tcGxldGUiLCJjYWxsYmFjayIsImltYWdlIiwib25SZWFkeSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJfb25SZWFkeSIsInVwZGF0ZSIsImVtaXQiLCJjdXJyZW50U3JjIiwiZ2V0QXR0cmlidXRlIiwiYXV0b3BsYXlUaW1lb3V0SWQiLCJhdXRvcGxheWluZyIsImF1dG9wbGF5UGF1c2VkIiwiYXV0b3BsYXlEZWxheSIsImFjdGl2ZVNsaWRlIiwic2xpZGVzIiwiYWN0aXZlSW5kZXgiLCJmaXhMb29wIiwiX3NsaWRlTmV4dCIsImlzRW5kIiwiX3NsaWRlVG8iLCJzdG9wQXV0b3BsYXkiLCJzdGFydEF1dG9wbGF5IiwiaW50ZXJuYWwiLCJwYXVzZUF1dG9wbGF5IiwidHJhbnNpdGlvbkVuZCIsIm1pblRyYW5zbGF0ZSIsInNuYXBHcmlkIiwibWF4VHJhbnNsYXRlIiwidXBkYXRlQXV0b0hlaWdodCIsImFjdGl2ZVNsaWRlcyIsIm5ld0hlaWdodCIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJ1cGRhdGVDb250YWluZXJTaXplIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzaXplIiwidXBkYXRlU2xpZGVzU2l6ZSIsInNsaWRlc0dyaWQiLCJzbGlkZXNTaXplc0dyaWQiLCJzbGlkZVBvc2l0aW9uIiwicHJldlNsaWRlU2l6ZSIsInZpcnR1YWxTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwic2xpZGVzTnVtYmVyRXZlblRvUm93cyIsInNsaWRlU2l6ZSIsInNsaWRlc1BlclJvdyIsIm51bUZ1bGxDb2x1bW5zIiwic2xpZGUiLCJuZXdTbGlkZU9yZGVySW5kZXgiLCJjb2x1bW4iLCJyb3ciLCJzd2lwZXJTbGlkZVNpemUiLCJhYnMiLCJuZXdTbGlkZXNHcmlkIiwidXBkYXRlU2xpZGVzT2Zmc2V0Iiwic3dpcGVyU2xpZGVPZmZzZXQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiY3VycmVudFNsaWRlc1BlclZpZXciLCJzcHYiLCJicmVha0xvb3AiLCJ1cGRhdGVTbGlkZXNQcm9ncmVzcyIsIm9mZnNldENlbnRlciIsInNsaWRlUHJvZ3Jlc3MiLCJzbGlkZUJlZm9yZSIsInNsaWRlQWZ0ZXIiLCJpc1Zpc2libGUiLCJ1cGRhdGVQcm9ncmVzcyIsInRyYW5zbGF0ZXNEaWZmIiwid2FzQmVnaW5uaW5nIiwiaXNCZWdpbm5pbmciLCJ3YXNFbmQiLCJ1cGRhdGVBY3RpdmVJbmRleCIsIm5ld0FjdGl2ZUluZGV4Iiwic25hcEluZGV4IiwicHJldmlvdXNJbmRleCIsInVwZGF0ZUNsYXNzZXMiLCJ1cGRhdGVSZWFsSW5kZXgiLCJyZWFsSW5kZXgiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJ0b3RhbCIsImJ1bGxldHMiLCJ0ZXh0Iiwic2NhbGUiLCJzY2FsZVgiLCJzY2FsZVkiLCJ0cmFuc2Zvcm0iLCJkaXNhYmxlIiwiZW5hYmxlIiwidXBkYXRlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25IVE1MIiwibnVtYmVyT2ZCdWxsZXRzIiwiaW5pdFBhZ2luYXRpb24iLCJ1cGRhdGVUcmFuc2xhdGUiLCJzZXQiLCJmb3JjZVNldFRyYW5zbGF0ZSIsIm5ld1RyYW5zbGF0ZSIsInNldFdyYXBwZXJUcmFuc2xhdGUiLCJ0cmFuc2xhdGVkIiwiY29udHJvbGxlciIsInNwbGluZSIsInNsaWRlVG8iLCJvblJlc2l6ZSIsImZvcmNlVXBkYXRlUGFnaW5hdGlvbiIsInNsaWRlQ2hhbmdlZEJ5U2xpZGVUbyIsImxhenkiLCJ0b3VjaEV2ZW50c0Rlc2t0b3AiLCJzdGFydCIsIm1vdmUiLCJlbmQiLCJwb2ludGVyRW5hYmxlZCIsIm1zUG9pbnRlckVuYWJsZWQiLCJ0b3VjaEV2ZW50cyIsImluaXRFdmVudHMiLCJkZXRhY2giLCJhY3Rpb25Eb20iLCJtb3ZlQ2FwdHVyZSIsIm5lc3RlZCIsImJyb3dzZXIiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJwYXNzaXZlTGlzdGVuZXIiLCJwYXNzaXZlIiwiY2FwdHVyZSIsImlvcyIsIm9uQ2xpY2tOZXh0Iiwib25FbnRlcktleSIsIm9uQ2xpY2tQcmV2Iiwib25DbGlja0luZGV4IiwiYXR0YWNoRXZlbnRzIiwiZGV0YWNoRXZlbnRzIiwiYWxsb3dDbGljayIsImFuaW1hdGluZyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNsaWRlTmV4dCIsInNsaWRlUHJldiIsImZpbmRFbGVtZW50SW5FdmVudCIsInNlbGVjdG9yIiwiaXMiLCJwYXJlbnRzIiwiZm91bmQiLCJfZWwiLCJ1cGRhdGVDbGlja2VkU2xpZGUiLCJzbGlkZUZvdW5kIiwiY2xpY2tlZFNsaWRlIiwiY2xpY2tlZEluZGV4Iiwic2xpZGVUb0luZGV4IiwiZHVwbGljYXRlZFNsaWRlcyIsImlzVG91Y2hlZCIsImlzTW92ZWQiLCJhbGxvd1RvdWNoQ2FsbGJhY2tzIiwidG91Y2hTdGFydFRpbWUiLCJpc1Njcm9sbGluZyIsImN1cnJlbnRUcmFuc2xhdGUiLCJzdGFydFRyYW5zbGF0ZSIsImFsbG93VGhyZXNob2xkTW92ZSIsImZvcm1FbGVtZW50cyIsImxhc3RDbGlja1RpbWUiLCJub3ciLCJjbGlja1RpbWVvdXQiLCJ2ZWxvY2l0aWVzIiwiYWxsb3dNb21lbnR1bUJvdW5jZSIsInRvdWNoZXMiLCJzdGFydFgiLCJzdGFydFkiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwiZGlmZiIsImlzVG91Y2hFdmVudCIsInN0YXJ0TW92aW5nIiwib3JpZ2luYWxFdmVudCIsInRhcmdldFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwic3dpcGVEaXJlY3Rpb24iLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsInByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyIiwiYXRhbjIiLCJQSSIsImllVG91Y2giLCJnZXRXcmFwcGVyVHJhbnNsYXRlIiwic2V0V3JhcHBlclRyYW5zaXRpb24iLCJkaXNhYmxlUGFyZW50U3dpcGVyIiwicG93IiwidGltZSIsInRvdWNoRW5kVGltZSIsInRpbWVEaWZmIiwidG9nZ2xlQ2xhc3MiLCJjdXJyZW50UG9zIiwibGFzdE1vdmVFdmVudCIsInBvcCIsInZlbG9jaXR5RXZlbnQiLCJkaXN0YW5jZSIsIm1vbWVudHVtRHVyYXRpb24iLCJtb21lbnR1bURpc3RhbmNlIiwibmV3UG9zaXRpb24iLCJkb0JvdW5jZSIsImFmdGVyQm91bmNlUG9zaXRpb24iLCJib3VuY2VBbW91bnQiLCJzbGlkZVJlc2V0Iiwib25UcmFuc2l0aW9uU3RhcnQiLCJvblRyYW5zaXRpb25FbmQiLCJzdG9wSW5kZXgiLCJncm91cFNpemUiLCJyYXRpbyIsInNsaWRlSW5kZXgiLCJydW5DYWxsYmFja3MiLCJsdGVJRTkiLCJzZXRIaXN0b3J5Iiwic2V0SGFzaCIsImNsaWVudExlZnQiLCJfc2xpZGVQcmV2IiwiZGlzYWJsZVRvdWNoQ29udHJvbCIsImVuYWJsZVRvdWNoQ29udHJvbCIsImJ5Q29udHJvbGxlciIsImVmZmVjdHMiLCJzZXRUcmFuc2l0aW9uIiwic2V0VHJhbnNsYXRlIiwiZ2V0VHJhbnNsYXRlIiwiYXhpcyIsIm1hdHJpeCIsImN1clRyYW5zZm9ybSIsImN1clN0eWxlIiwidHJhbnNmb3JtTWF0cml4IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIldlYktpdENTU01hdHJpeCIsIndlYmtpdFRyYW5zZm9ybSIsInNwbGl0IiwibWFwIiwiTW96VHJhbnNmb3JtIiwiT1RyYW5zZm9ybSIsIk1zVHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJnZXRQcm9wZXJ0eVZhbHVlIiwidG9TdHJpbmciLCJtNDEiLCJtNDIiLCJvYnNlcnZlcnMiLCJpbml0T2JzZXJ2ZXIiLCJvcHRpb25zIiwiT2JzZXJ2ZXJGdW5jIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYmtpdE11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJmb3JFYWNoIiwibXV0YXRpb24iLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJpbml0T2JzZXJ2ZXJzIiwiY29udGFpbmVyUGFyZW50cyIsImRpc2Nvbm5lY3RPYnNlcnZlcnMiLCJkaXNjb25uZWN0IiwiY3JlYXRlTG9vcCIsInByZXBlbmRTbGlkZXMiLCJhcHBlbmRTbGlkZXMiLCJjbG9uZU5vZGUiLCJwcmVwZW5kIiwicmVtb3ZlQXR0ciIsInVwZGF0ZVBvc2l0aW9uIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsImFwcGVuZFNsaWRlIiwicHJlcGVuZFNsaWRlIiwicmVtb3ZlU2xpZGUiLCJzbGlkZXNJbmRleGVzIiwiaW5kZXhUb1JlbW92ZSIsInJlbW92ZUFsbFNsaWRlcyIsInR4IiwidHkiLCJzbGlkZU9wYWNpdHkiLCJldmVudFRyaWdnZXJlZCIsInRyaWdnZXJFdmVudHMiLCJyb3RhdGVZIiwicm90YXRlWCIsInpJbmRleCIsInNoYWRvd0JlZm9yZSIsInNoYWRvd0FmdGVyIiwid3JhcHBlclJvdGF0ZSIsImN1YmVTaGFkb3ciLCJzbGlkZUFuZ2xlIiwidHoiLCJzaGFkb3dBbmdsZSIsIm11bHRpcGxpZXIiLCJzaW4iLCJjb3MiLCJzY2FsZTEiLCJzY2FsZTIiLCJ6RmFjdG9yIiwiaXNTYWZhcmkiLCJpc1VpV2ViVmlldyIsImNlbnRlciIsInNsaWRlT2Zmc2V0Iiwib2Zmc2V0TXVsdGlwbGllciIsInRyYW5zbGF0ZVoiLCJ0cmFuc2xhdGVZIiwidHJhbnNsYXRlWCIsInNsaWRlVHJhbnNmb3JtIiwid3MiLCJwZXJzcGVjdGl2ZU9yaWdpbiIsImluaXRpYWxJbWFnZUxvYWRlZCIsImxvYWRJbWFnZUluU2xpZGUiLCJsb2FkSW5EdXBsaWNhdGUiLCJpbWciLCJfaW1nIiwiYmFja2dyb3VuZCIsInNsaWRlT3JpZ2luYWxJbmRleCIsIm9yaWdpbmFsU2xpZGUiLCJkdXBsaWNhdGVkU2xpZGUiLCJhbW91bnQiLCJtYXhJbmRleCIsIm1pbkluZGV4Iiwic2V0RHJhZ1Bvc2l0aW9uIiwic2IiLCJwb2ludGVyUG9zaXRpb24iLCJjbGllbnRYIiwiY2xpZW50WSIsInRyYWNrIiwiZHJhZ1NpemUiLCJwb3NpdGlvbk1pbiIsIm1vdmVEaXZpZGVyIiwicG9zaXRpb25NYXgiLCJkcmFnU3RhcnQiLCJkcmFnVGltZW91dCIsImRyYWciLCJkcmFnTW92ZSIsInJldHVyblZhbHVlIiwiZHJhZ0VuZCIsImRyYWdnYWJsZUV2ZW50cyIsImVuYWJsZURyYWdnYWJsZSIsImRpc2FibGVEcmFnZ2FibGUiLCJvZmYiLCJ0cmFja1NpemUiLCJvZmZzZXRXaWR0aCIsImRpdmlkZXIiLCJuZXdQb3MiLCJuZXdTaXplIiwidGltZW91dCIsIkxpbmVhclNwbGluZSIsImxhc3RJbmRleCIsImkxIiwiaTMiLCJpbnRlcnBvbGF0ZSIsIngyIiwiYmluYXJ5U2VhcmNoIiwiZ3Vlc3MiLCJhcnJheSIsInZhbCIsImdldEludGVycG9sYXRlRnVuY3Rpb24iLCJjb250cm9sbGVkIiwiY29udHJvbGxlZFRyYW5zbGF0ZSIsInNldENvbnRyb2xsZWRUcmFuc2xhdGUiLCJpc0FycmF5Iiwic2V0Q29udHJvbGxlZFRyYW5zaXRpb24iLCJvbkhhc2hDYW5nZSIsIm5ld0hhc2giLCJhY3RpdmVTbGlkZUhhc2giLCJpbml0aWFsaXplZCIsImluaXQiLCJzbGlkZUhhc2giLCJkZXN0cm95IiwicHVzaFN0YXRlIiwicGF0aHMiLCJnZXRQYXRoVmFsdWVzIiwia2V5Iiwic2Nyb2xsVG9TbGlkZSIsInNldEhpc3RvcnlQb3BTdGF0ZSIsInBhdGhBcnJheSIsInBhdGhuYW1lIiwic2xpY2UiLCJzbHVnaWZ5IiwiaW5jbHVkZXMiLCJzbGlkZUhpc3RvcnkiLCJoYW5kbGVLZXlib2FyZCIsImtjIiwiY2hhckNvZGUiLCJub2RlTmFtZSIsImluVmlldyIsIndpbmRvd1Njcm9sbCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInN3aXBlck9mZnNldCIsInN3aXBlckNvb3JkIiwiZGlzYWJsZUtleWJvYXJkQ29udHJvbCIsImVuYWJsZUtleWJvYXJkQ29udHJvbCIsIm1vdXNld2hlZWwiLCJsYXN0U2Nyb2xsVGltZSIsImlzRXZlbnRTdXBwb3J0ZWQiLCJldmVudE5hbWUiLCJpc1N1cHBvcnRlZCIsInNldEF0dHJpYnV0ZSIsImltcGxlbWVudGF0aW9uIiwiaGFzRmVhdHVyZSIsImhhbmRsZU1vdXNld2hlZWwiLCJkZWx0YSIsInJ0bEZhY3RvciIsIm5vcm1hbGl6ZVdoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwiZGlzYWJsZU1vdXNld2hlZWxDb250cm9sIiwiZW5hYmxlTW91c2V3aGVlbENvbnRyb2wiLCJQSVhFTF9TVEVQIiwiTElORV9IRUlHSFQiLCJQQUdFX0hFSUdIVCIsInNYIiwic1kiLCJwWCIsInBZIiwiZGV0YWlsIiwid2hlZWxEZWx0YSIsIndoZWVsRGVsdGFZIiwid2hlZWxEZWx0YVgiLCJIT1JJWk9OVEFMX0FYSVMiLCJkZWx0YVkiLCJkZWx0YVgiLCJkZWx0YU1vZGUiLCJzcGluWCIsInNwaW5ZIiwic2V0UGFyYWxsYXhUcmFuc2Zvcm0iLCJwYXJhbGxheER1cmF0aW9uIiwiY3VycmVudFNjYWxlIiwiaXNTY2FsaW5nIiwiZ2VzdHVyZSIsInNsaWRlV2lkdGgiLCJzbGlkZUhlaWdodCIsImltYWdlV3JhcCIsIm1pblgiLCJtaW5ZIiwibWF4WCIsIm1heFkiLCJ0b3VjaGVzU3RhcnQiLCJ0b3VjaGVzQ3VycmVudCIsInByZXZQb3NpdGlvblgiLCJwcmV2UG9zaXRpb25ZIiwicHJldlRpbWUiLCJnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzIiwieDEiLCJ5MSIsInkyIiwic3FydCIsIm9uR2VzdHVyZVN0YXJ0IiwiZ2VzdHVyZXMiLCJzY2FsZVN0YXJ0Iiwib25HZXN0dXJlQ2hhbmdlIiwic2NhbGVNb3ZlIiwib25HZXN0dXJlRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJvcyIsInNjYWxlZFdpZHRoIiwic2NhbGVkSGVpZ2h0IiwibW9tZW50dW1EdXJhdGlvblgiLCJtb21lbnR1bUR1cmF0aW9uWSIsIm1vbWVudHVtRGlzdGFuY2VYIiwibmV3UG9zaXRpb25YIiwibW9tZW50dW1EaXN0YW5jZVkiLCJuZXdQb3NpdGlvblkiLCJ0b2dnbGVab29tIiwidG91Y2hYIiwidG91Y2hZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJkaWZmWCIsImRpZmZZIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwidHJhbnNsYXRlTWluWCIsInRyYW5zbGF0ZU1pblkiLCJ0cmFuc2xhdGVNYXhYIiwidHJhbnNsYXRlTWF4WSIsIl9wbHVnaW5zIiwicGx1Z2luIiwicGx1Z2lucyIsImNhbGxQbHVnaW5zIiwiYXJndW1lbnRzIiwibm9ybWFsaXplRXZlbnROYW1lIiwidG9VcHBlckNhc2UiLCJlbWl0dGVyRXZlbnRMaXN0ZW5lcnMiLCJoYW5kbGVyIiwic3BsaWNlIiwib25jZSIsIl9oYW5kbGVyIiwibWFrZUZvY3VzYWJsZSIsIiRlbCIsImFkZFJvbGUiLCJhZGRMYWJlbCIsImxhYmVsIiwibm90aWZ5IiwibGl2ZVJlZ2lvbiIsIm1lc3NhZ2UiLCJub3RpZmljYXRpb24iLCJidWxsZXQiLCJoYXNobmF2UmVwbGFjZVN0YXRlIiwiY2xlYW51cFN0eWxlcyIsImRlbGV0ZUluc3RhbmNlIiwicHJvdG90eXBlIiwidWEiLCJhcnIiLCJhcHBseSIsIm1zTWF4VG91Y2hQb2ludHMiLCJtYXhUb3VjaFBvaW50cyIsImRpdiIsImlubmVySFRNTCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibWF0Y2giLCJpcGFkIiwiaXBvZCIsImlwaG9uZSIsIk1vZGVybml6ciIsIkRvY3VtZW50VG91Y2giLCJjc3N0cmFuc2Zvcm1zM2QiLCJzdHlsZXMiLCJzdXBwb3J0c1Bhc3NpdmUiLCJvcHRzIiwiZGVmaW5lUHJvcGVydHkiLCJfdGhpcyIsImNvbnRleHQiLCJlbHMiLCJ0ZW1wUGFyZW50IiwidHJpbSIsInRvQ3JlYXRlIiwiY2hpbGROb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc2VzIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYXR0cnMiLCJhdHRyTmFtZSIsImRhdGFLZXkiLCJkb203RWxlbWVudERhdGFTdG9yYWdlIiwiZWxTdHlsZSIsIndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiIsIk1zVHJhbnNpdGlvbkR1cmF0aW9uIiwibXNUcmFuc2l0aW9uRHVyYXRpb24iLCJNb3pUcmFuc2l0aW9uRHVyYXRpb24iLCJPVHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidGFyZ2V0U2VsZWN0b3IiLCJsaXN0ZW5lciIsImhhbmRsZUxpdmVFdmVudCIsImV2ZW50cyIsImRvbTdMaXZlTGlzdGVuZXJzIiwibGl2ZUxpc3RlbmVyIiwiZG9tIiwicHJveHkiLCJldmVudERhdGEiLCJldnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZmlyZUNhbGxCYWNrIiwiaW5jbHVkZU1hcmdpbnMiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRUb3AiLCJwcm9wcyIsInByb3AiLCJ0ZXh0Q29udGVudCIsImNvbXBhcmVXaXRoIiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiY2hpbGQiLCJwcmV2aW91c1NpYmxpbmciLCJyZXR1cm5JbmRleCIsIm5ld0NoaWxkIiwidGVtcERpdiIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsImJlZm9yZSIsInBhcmVudE5vZGUiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibmV4dEFsbCIsIm5leHRFbHMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwicHJldkFsbCIsInByZXZFbHMiLCJ1bmlxdWUiLCJmb3VuZEVsZW1lbnRzIiwicmVtb3ZlQ2hpbGQiLCJ0b0FkZCIsInN3aXBlckRvbVBsdWdpbnMiLCJhZGRMaWJyYXJ5UGx1Z2luIiwiZG9tTGliIiwibGliIiwiZmlyc3RJbnN0YW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZpbmUiLCJhbWQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEVBOzs7OztBQUtBLENBQUMsVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDLFVBQVNDLENBQVQsQ0FBV0QsQ0FBWCxFQUFhQyxDQUFiLEVBQWVDLENBQWYsRUFBaUI7QUFBQyxNQUFJQyxJQUFFSixFQUFFSyxhQUFGLENBQWdCSixDQUFoQixDQUFOLENBQXlCLE9BQU9DLE1BQUlFLEVBQUVFLEVBQUYsR0FBS0MsSUFBRUwsQ0FBWCxHQUFjQyxNQUFJQyxFQUFFSSxL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ekIsQ0FBUSxDQUFSO0FBQ0EsbUJBQUFBLENBQVEsQ0FBUjtBQUNBLG1CQUFBQSxDQUFRLENBQVI7O0FBRUEsbUJBQUFBLENBQVEsQ0FBUjtBQUNBLG1CQUFBQSxDQUFRLENBQVI7O0FBRUEsbUJBQUFBLENBQVEsQ0FBUjtBQUNBLG1CQUFBQSxDQUFRLENBQVI7O0FBRUEsbUJBQUFBLENBQVEsQ0FBUjtBQUNBLG1CQUFBQSxDQUFRLENBQVI7O0FBRUEsbUJBQUFBLENBQVEsQ0FBUixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNTdiMWNiMjM5OTVkOWRmYzZmYiIsIi8qIVxuXHRDb2xvcmJveCAxLjYuNFxuXHRsaWNlbnNlOiBNSVRcblx0aHR0cDovL3d3dy5qYWNrbG1vb3JlLmNvbS9jb2xvcmJveFxuKi9cbihmdW5jdGlvbih0LGUsaSl7ZnVuY3Rpb24gbihpLG4sbyl7dmFyIHI9ZS5jcmVhdGVFbGVtZW50KGkpO3JldHVybiBuJiYoci5pZD1aK24pLG8mJihyLnN0eWxlLmNzc1RleHQ9byksdChyKX1mdW5jdGlvbiBvKCl7cmV0dXJuIGkuaW5uZXJIZWlnaHQ/aS5pbm5lckhlaWdodDp0KGkpLmhlaWdodCgpfWZ1bmN0aW9uIHIoZSxpKXtpIT09T2JqZWN0KGkpJiYoaT17fSksdGhpcy5jYWNoZT17fSx0aGlzLmVsPWUsdGhpcy52YWx1ZT1mdW5jdGlvbihlKXt2YXIgbjtyZXR1cm4gdm9pZCAwPT09dGhpcy5jYWNoZVtlXSYmKG49dCh0aGlzLmVsKS5hdHRyKFwiZGF0YS1jYm94LVwiK2UpLHZvaWQgMCE9PW4/dGhpcy5jYWNoZVtlXT1uOnZvaWQgMCE9PWlbZV0/dGhpcy5jYWNoZVtlXT1pW2VdOnZvaWQgMCE9PVhbZV0mJih0aGlzLmNhY2hlW2VdPVhbZV0pKSx0aGlzLmNhY2hlW2VdfSx0aGlzLmdldD1mdW5jdGlvbihlKXt2YXIgaT10aGlzLnZhbHVlKGUpO3JldHVybiB0LmlzRnVuY3Rpb24oaSk/aS5jYWxsKHRoaXMuZWwsdGhpcyk6aX19ZnVuY3Rpb24gaCh0KXt2YXIgZT1XLmxlbmd0aCxpPShBK3QpJWU7cmV0dXJuIDA+aT9lK2k6aX1mdW5jdGlvbiBhKHQsZSl7cmV0dXJuIE1hdGgucm91bmQoKC8lLy50ZXN0KHQpPyhcInhcIj09PWU/RS53aWR0aCgpOm8oKSkvMTAwOjEpKnBhcnNlSW50KHQsMTApKX1mdW5jdGlvbiBzKHQsZSl7cmV0dXJuIHQuZ2V0KFwicGhvdG9cIil8fHQuZ2V0KFwicGhvdG9SZWdleFwiKS50ZXN0KGUpfWZ1bmN0aW9uIGwodCxlKXtyZXR1cm4gdC5nZXQoXCJyZXRpbmFVcmxcIikmJmkuZGV2aWNlUGl4ZWxSYXRpbz4xP2UucmVwbGFjZSh0LmdldChcInBob3RvUmVnZXhcIiksdC5nZXQoXCJyZXRpbmFTdWZmaXhcIikpOmV9ZnVuY3Rpb24gZCh0KXtcImNvbnRhaW5zXCJpbiB4WzBdJiYheFswXS5jb250YWlucyh0LnRhcmdldCkmJnQudGFyZ2V0IT09dlswXSYmKHQuc3RvcFByb3BhZ2F0aW9uKCkseC5mb2N1cygpKX1mdW5jdGlvbiBjKHQpe2Muc3RyIT09dCYmKHguYWRkKHYpLnJlbW92ZUNsYXNzKGMuc3RyKS5hZGRDbGFzcyh0KSxjLnN0cj10KX1mdW5jdGlvbiBnKGUpe0E9MCxlJiZlIT09ITEmJlwibm9mb2xsb3dcIiE9PWU/KFc9dChcIi5cIit0ZSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGk9dC5kYXRhKHRoaXMsWSksbj1uZXcgcih0aGlzLGkpO3JldHVybiBuLmdldChcInJlbFwiKT09PWV9KSxBPVcuaW5kZXgoXy5lbCksLTE9PT1BJiYoVz1XLmFkZChfLmVsKSxBPVcubGVuZ3RoLTEpKTpXPXQoXy5lbCl9ZnVuY3Rpb24gdShpKXt0KGUpLnRyaWdnZXIoaSksYWUudHJpZ2dlckhhbmRsZXIoaSl9ZnVuY3Rpb24gZihpKXt2YXIgbztpZighRyl7aWYobz10KGkpLmRhdGEoWSksXz1uZXcgcihpLG8pLGcoXy5nZXQoXCJyZWxcIikpLCFVKXtVPSQ9ITAsYyhfLmdldChcImNsYXNzTmFtZVwiKSkseC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIixvcGFjaXR5OlwiXCJ9KSxJPW4oc2UsXCJMb2FkZWRDb250ZW50XCIsXCJ3aWR0aDowOyBoZWlnaHQ6MDsgb3ZlcmZsb3c6aGlkZGVuOyB2aXNpYmlsaXR5OmhpZGRlblwiKSxiLmNzcyh7d2lkdGg6XCJcIixoZWlnaHQ6XCJcIn0pLmFwcGVuZChJKSxqPVQuaGVpZ2h0KCkray5oZWlnaHQoKStiLm91dGVySGVpZ2h0KCEwKS1iLmhlaWdodCgpLEQ9Qy53aWR0aCgpK0gud2lkdGgoKStiLm91dGVyV2lkdGgoITApLWIud2lkdGgoKSxOPUkub3V0ZXJIZWlnaHQoITApLHo9SS5vdXRlcldpZHRoKCEwKTt2YXIgaD1hKF8uZ2V0KFwiaW5pdGlhbFdpZHRoXCIpLFwieFwiKSxzPWEoXy5nZXQoXCJpbml0aWFsSGVpZ2h0XCIpLFwieVwiKSxsPV8uZ2V0KFwibWF4V2lkdGhcIiksZj1fLmdldChcIm1heEhlaWdodFwiKTtfLnc9TWF0aC5tYXgoKGwhPT0hMT9NYXRoLm1pbihoLGEobCxcInhcIikpOmgpLXotRCwwKSxfLmg9TWF0aC5tYXgoKGYhPT0hMT9NYXRoLm1pbihzLGEoZixcInlcIikpOnMpLU4taiwwKSxJLmNzcyh7d2lkdGg6XCJcIixoZWlnaHQ6Xy5ofSksSi5wb3NpdGlvbigpLHUoZWUpLF8uZ2V0KFwib25PcGVuXCIpLE8uYWRkKEYpLmhpZGUoKSx4LmZvY3VzKCksXy5nZXQoXCJ0cmFwRm9jdXNcIikmJmUuYWRkRXZlbnRMaXN0ZW5lciYmKGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsZCwhMCksYWUub25lKHJlLGZ1bmN0aW9uKCl7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIixkLCEwKX0pKSxfLmdldChcInJldHVybkZvY3VzXCIpJiZhZS5vbmUocmUsZnVuY3Rpb24oKXt0KF8uZWwpLmZvY3VzKCl9KX12YXIgcD1wYXJzZUZsb2F0KF8uZ2V0KFwib3BhY2l0eVwiKSk7di5jc3Moe29wYWNpdHk6cD09PXA/cDpcIlwiLGN1cnNvcjpfLmdldChcIm92ZXJsYXlDbG9zZVwiKT9cInBvaW50ZXJcIjpcIlwiLHZpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KS5zaG93KCksXy5nZXQoXCJjbG9zZUJ1dHRvblwiKT9CLmh0bWwoXy5nZXQoXCJjbG9zZVwiKSkuYXBwZW5kVG8oYik6Qi5hcHBlbmRUbyhcIjxkaXYvPlwiKSx3KCl9fWZ1bmN0aW9uIHAoKXt4fHwoVj0hMSxFPXQoaSkseD1uKHNlKS5hdHRyKHtpZDpZLFwiY2xhc3NcIjp0LnN1cHBvcnQub3BhY2l0eT09PSExP1orXCJJRVwiOlwiXCIscm9sZTpcImRpYWxvZ1wiLHRhYmluZGV4OlwiLTFcIn0pLmhpZGUoKSx2PW4oc2UsXCJPdmVybGF5XCIpLmhpZGUoKSxMPXQoW24oc2UsXCJMb2FkaW5nT3ZlcmxheVwiKVswXSxuKHNlLFwiTG9hZGluZ0dyYXBoaWNcIilbMF1dKSx5PW4oc2UsXCJXcmFwcGVyXCIpLGI9bihzZSxcIkNvbnRlbnRcIikuYXBwZW5kKEY9bihzZSxcIlRpdGxlXCIpLFI9bihzZSxcIkN1cnJlbnRcIiksUD10KCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIi8+JykuYXR0cih7aWQ6WitcIlByZXZpb3VzXCJ9KSxLPXQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiLz4nKS5hdHRyKHtpZDpaK1wiTmV4dFwifSksUz10KCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIi8+JykuYXR0cih7aWQ6WitcIlNsaWRlc2hvd1wifSksTCksQj10KCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIi8+JykuYXR0cih7aWQ6WitcIkNsb3NlXCJ9KSx5LmFwcGVuZChuKHNlKS5hcHBlbmQobihzZSxcIlRvcExlZnRcIiksVD1uKHNlLFwiVG9wQ2VudGVyXCIpLG4oc2UsXCJUb3BSaWdodFwiKSksbihzZSwhMSxcImNsZWFyOmxlZnRcIikuYXBwZW5kKEM9bihzZSxcIk1pZGRsZUxlZnRcIiksYixIPW4oc2UsXCJNaWRkbGVSaWdodFwiKSksbihzZSwhMSxcImNsZWFyOmxlZnRcIikuYXBwZW5kKG4oc2UsXCJCb3R0b21MZWZ0XCIpLGs9bihzZSxcIkJvdHRvbUNlbnRlclwiKSxuKHNlLFwiQm90dG9tUmlnaHRcIikpKS5maW5kKFwiZGl2IGRpdlwiKS5jc3Moe1wiZmxvYXRcIjpcImxlZnRcIn0pLE09bihzZSwhMSxcInBvc2l0aW9uOmFic29sdXRlOyB3aWR0aDo5OTk5cHg7IHZpc2liaWxpdHk6aGlkZGVuOyBkaXNwbGF5Om5vbmU7IG1heC13aWR0aDpub25lO1wiKSxPPUsuYWRkKFApLmFkZChSKS5hZGQoUykpLGUuYm9keSYmIXgucGFyZW50KCkubGVuZ3RoJiZ0KGUuYm9keSkuYXBwZW5kKHYseC5hcHBlbmQoeSxNKSl9ZnVuY3Rpb24gbSgpe2Z1bmN0aW9uIGkodCl7dC53aGljaD4xfHx0LnNoaWZ0S2V5fHx0LmFsdEtleXx8dC5tZXRhS2V5fHx0LmN0cmxLZXl8fCh0LnByZXZlbnREZWZhdWx0KCksZih0aGlzKSl9cmV0dXJuIHg/KFZ8fChWPSEwLEsuY2xpY2soZnVuY3Rpb24oKXtKLm5leHQoKX0pLFAuY2xpY2soZnVuY3Rpb24oKXtKLnByZXYoKX0pLEIuY2xpY2soZnVuY3Rpb24oKXtKLmNsb3NlKCl9KSx2LmNsaWNrKGZ1bmN0aW9uKCl7Xy5nZXQoXCJvdmVybGF5Q2xvc2VcIikmJkouY2xvc2UoKX0pLHQoZSkuYmluZChcImtleWRvd24uXCIrWixmdW5jdGlvbih0KXt2YXIgZT10LmtleUNvZGU7VSYmXy5nZXQoXCJlc2NLZXlcIikmJjI3PT09ZSYmKHQucHJldmVudERlZmF1bHQoKSxKLmNsb3NlKCkpLFUmJl8uZ2V0KFwiYXJyb3dLZXlcIikmJldbMV0mJiF0LmFsdEtleSYmKDM3PT09ZT8odC5wcmV2ZW50RGVmYXVsdCgpLFAuY2xpY2soKSk6Mzk9PT1lJiYodC5wcmV2ZW50RGVmYXVsdCgpLEsuY2xpY2soKSkpfSksdC5pc0Z1bmN0aW9uKHQuZm4ub24pP3QoZSkub24oXCJjbGljay5cIitaLFwiLlwiK3RlLGkpOnQoXCIuXCIrdGUpLmxpdmUoXCJjbGljay5cIitaLGkpKSwhMCk6ITF9ZnVuY3Rpb24gdygpe3ZhciBlLG8scixoPUoucHJlcCxkPSsrbGU7aWYoJD0hMCxxPSExLHUoaGUpLHUoaWUpLF8uZ2V0KFwib25Mb2FkXCIpLF8uaD1fLmdldChcImhlaWdodFwiKT9hKF8uZ2V0KFwiaGVpZ2h0XCIpLFwieVwiKS1OLWo6Xy5nZXQoXCJpbm5lckhlaWdodFwiKSYmYShfLmdldChcImlubmVySGVpZ2h0XCIpLFwieVwiKSxfLnc9Xy5nZXQoXCJ3aWR0aFwiKT9hKF8uZ2V0KFwid2lkdGhcIiksXCJ4XCIpLXotRDpfLmdldChcImlubmVyV2lkdGhcIikmJmEoXy5nZXQoXCJpbm5lcldpZHRoXCIpLFwieFwiKSxfLm13PV8udyxfLm1oPV8uaCxfLmdldChcIm1heFdpZHRoXCIpJiYoXy5tdz1hKF8uZ2V0KFwibWF4V2lkdGhcIiksXCJ4XCIpLXotRCxfLm13PV8udyYmXy53PF8ubXc/Xy53Ol8ubXcpLF8uZ2V0KFwibWF4SGVpZ2h0XCIpJiYoXy5taD1hKF8uZ2V0KFwibWF4SGVpZ2h0XCIpLFwieVwiKS1OLWosXy5taD1fLmgmJl8uaDxfLm1oP18uaDpfLm1oKSxlPV8uZ2V0KFwiaHJlZlwiKSxRPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtMLnNob3coKX0sMTAwKSxfLmdldChcImlubGluZVwiKSl7dmFyIGM9dChlKS5lcSgwKTtyPXQoXCI8ZGl2PlwiKS5oaWRlKCkuaW5zZXJ0QmVmb3JlKGMpLGFlLm9uZShoZSxmdW5jdGlvbigpe3IucmVwbGFjZVdpdGgoYyl9KSxoKGMpfWVsc2UgXy5nZXQoXCJpZnJhbWVcIik/aChcIiBcIik6Xy5nZXQoXCJodG1sXCIpP2goXy5nZXQoXCJodG1sXCIpKTpzKF8sZSk/KGU9bChfLGUpLHE9Xy5nZXQoXCJjcmVhdGVJbWdcIiksdChxKS5hZGRDbGFzcyhaK1wiUGhvdG9cIikuYmluZChcImVycm9yLlwiK1osZnVuY3Rpb24oKXtoKG4oc2UsXCJFcnJvclwiKS5odG1sKF8uZ2V0KFwiaW1nRXJyb3JcIikpKX0pLm9uZShcImxvYWRcIixmdW5jdGlvbigpe2Q9PT1sZSYmc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlO18uZ2V0KFwicmV0aW5hSW1hZ2VcIikmJmkuZGV2aWNlUGl4ZWxSYXRpbz4xJiYocS5oZWlnaHQ9cS5oZWlnaHQvaS5kZXZpY2VQaXhlbFJhdGlvLHEud2lkdGg9cS53aWR0aC9pLmRldmljZVBpeGVsUmF0aW8pLF8uZ2V0KFwic2NhbGVQaG90b3NcIikmJihvPWZ1bmN0aW9uKCl7cS5oZWlnaHQtPXEuaGVpZ2h0KmUscS53aWR0aC09cS53aWR0aCplfSxfLm13JiZxLndpZHRoPl8ubXcmJihlPShxLndpZHRoLV8ubXcpL3Eud2lkdGgsbygpKSxfLm1oJiZxLmhlaWdodD5fLm1oJiYoZT0ocS5oZWlnaHQtXy5taCkvcS5oZWlnaHQsbygpKSksXy5oJiYocS5zdHlsZS5tYXJnaW5Ub3A9TWF0aC5tYXgoXy5taC1xLmhlaWdodCwwKS8yK1wicHhcIiksV1sxXSYmKF8uZ2V0KFwibG9vcFwiKXx8V1tBKzFdKSYmKHEuc3R5bGUuY3Vyc29yPVwicG9pbnRlclwiLHQocSkuYmluZChcImNsaWNrLlwiK1osZnVuY3Rpb24oKXtKLm5leHQoKX0pKSxxLnN0eWxlLndpZHRoPXEud2lkdGgrXCJweFwiLHEuc3R5bGUuaGVpZ2h0PXEuaGVpZ2h0K1wicHhcIixoKHEpfSwxKX0pLHEuc3JjPWUpOmUmJk0ubG9hZChlLF8uZ2V0KFwiZGF0YVwiKSxmdW5jdGlvbihlLGkpe2Q9PT1sZSYmaChcImVycm9yXCI9PT1pP24oc2UsXCJFcnJvclwiKS5odG1sKF8uZ2V0KFwieGhyRXJyb3JcIikpOnQodGhpcykuY29udGVudHMoKSl9KX12YXIgdix4LHksYixULEMsSCxrLFcsRSxJLE0sTCxGLFIsUyxLLFAsQixPLF8saixELE4seixBLHEsVSwkLEcsUSxKLFYsWD17aHRtbDohMSxwaG90bzohMSxpZnJhbWU6ITEsaW5saW5lOiExLHRyYW5zaXRpb246XCJlbGFzdGljXCIsc3BlZWQ6MzAwLGZhZGVPdXQ6MzAwLHdpZHRoOiExLGluaXRpYWxXaWR0aDpcIjYwMFwiLGlubmVyV2lkdGg6ITEsbWF4V2lkdGg6ITEsaGVpZ2h0OiExLGluaXRpYWxIZWlnaHQ6XCI0NTBcIixpbm5lckhlaWdodDohMSxtYXhIZWlnaHQ6ITEsc2NhbGVQaG90b3M6ITAsc2Nyb2xsaW5nOiEwLG9wYWNpdHk6LjkscHJlbG9hZGluZzohMCxjbGFzc05hbWU6ITEsb3ZlcmxheUNsb3NlOiEwLGVzY0tleTohMCxhcnJvd0tleTohMCx0b3A6ITEsYm90dG9tOiExLGxlZnQ6ITEscmlnaHQ6ITEsZml4ZWQ6ITEsZGF0YTp2b2lkIDAsY2xvc2VCdXR0b246ITAsZmFzdElmcmFtZTohMCxvcGVuOiExLHJlcG9zaXRpb246ITAsbG9vcDohMCxzbGlkZXNob3c6ITEsc2xpZGVzaG93QXV0bzohMCxzbGlkZXNob3dTcGVlZDoyNTAwLHNsaWRlc2hvd1N0YXJ0Olwic3RhcnQgc2xpZGVzaG93XCIsc2xpZGVzaG93U3RvcDpcInN0b3Agc2xpZGVzaG93XCIscGhvdG9SZWdleDovXFwuKGdpZnxwbmd8anAoZXxnfGVnKXxibXB8aWNvfHdlYnB8anhyfHN2ZykoKCN8XFw/KS4qKT8kL2kscmV0aW5hSW1hZ2U6ITEscmV0aW5hVXJsOiExLHJldGluYVN1ZmZpeDpcIkAyeC4kMVwiLGN1cnJlbnQ6XCJpbWFnZSB7Y3VycmVudH0gb2Yge3RvdGFsfVwiLHByZXZpb3VzOlwicHJldmlvdXNcIixuZXh0OlwibmV4dFwiLGNsb3NlOlwiY2xvc2VcIix4aHJFcnJvcjpcIlRoaXMgY29udGVudCBmYWlsZWQgdG8gbG9hZC5cIixpbWdFcnJvcjpcIlRoaXMgaW1hZ2UgZmFpbGVkIHRvIGxvYWQuXCIscmV0dXJuRm9jdXM6ITAsdHJhcEZvY3VzOiEwLG9uT3BlbjohMSxvbkxvYWQ6ITEsb25Db21wbGV0ZTohMSxvbkNsZWFudXA6ITEsb25DbG9zZWQ6ITEscmVsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVsfSxocmVmOmZ1bmN0aW9uKCl7cmV0dXJuIHQodGhpcykuYXR0cihcImhyZWZcIil9LHRpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGl0bGV9LGNyZWF0ZUltZzpmdW5jdGlvbigpe3ZhciBlPW5ldyBJbWFnZSxpPXQodGhpcykuZGF0YShcImNib3gtaW1nLWF0dHJzXCIpO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBpJiZ0LmVhY2goaSxmdW5jdGlvbih0LGkpe2VbdF09aX0pLGV9LGNyZWF0ZUlmcmFtZTpmdW5jdGlvbigpe3ZhciBpPWUuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKSxuPXQodGhpcykuZGF0YShcImNib3gtaWZyYW1lLWF0dHJzXCIpO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBuJiZ0LmVhY2gobixmdW5jdGlvbih0LGUpe2lbdF09ZX0pLFwiZnJhbWVCb3JkZXJcImluIGkmJihpLmZyYW1lQm9yZGVyPTApLFwiYWxsb3dUcmFuc3BhcmVuY3lcImluIGkmJihpLmFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiKSxpLm5hbWU9KG5ldyBEYXRlKS5nZXRUaW1lKCksaS5hbGxvd0Z1bGxzY3JlZW49ITAsaX19LFk9XCJjb2xvcmJveFwiLFo9XCJjYm94XCIsdGU9WitcIkVsZW1lbnRcIixlZT1aK1wiX29wZW5cIixpZT1aK1wiX2xvYWRcIixuZT1aK1wiX2NvbXBsZXRlXCIsb2U9WitcIl9jbGVhbnVwXCIscmU9WitcIl9jbG9zZWRcIixoZT1aK1wiX3B1cmdlXCIsYWU9dChcIjxhLz5cIiksc2U9XCJkaXZcIixsZT0wLGRlPXt9LGNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2NsZWFyVGltZW91dChoKX1mdW5jdGlvbiBlKCl7KF8uZ2V0KFwibG9vcFwiKXx8V1tBKzFdKSYmKHQoKSxoPXNldFRpbWVvdXQoSi5uZXh0LF8uZ2V0KFwic2xpZGVzaG93U3BlZWRcIikpKX1mdW5jdGlvbiBpKCl7Uy5odG1sKF8uZ2V0KFwic2xpZGVzaG93U3RvcFwiKSkudW5iaW5kKHMpLm9uZShzLG4pLGFlLmJpbmQobmUsZSkuYmluZChpZSx0KSx4LnJlbW92ZUNsYXNzKGErXCJvZmZcIikuYWRkQ2xhc3MoYStcIm9uXCIpfWZ1bmN0aW9uIG4oKXt0KCksYWUudW5iaW5kKG5lLGUpLnVuYmluZChpZSx0KSxTLmh0bWwoXy5nZXQoXCJzbGlkZXNob3dTdGFydFwiKSkudW5iaW5kKHMpLm9uZShzLGZ1bmN0aW9uKCl7Si5uZXh0KCksaSgpfSkseC5yZW1vdmVDbGFzcyhhK1wib25cIikuYWRkQ2xhc3MoYStcIm9mZlwiKX1mdW5jdGlvbiBvKCl7cj0hMSxTLmhpZGUoKSx0KCksYWUudW5iaW5kKG5lLGUpLnVuYmluZChpZSx0KSx4LnJlbW92ZUNsYXNzKGErXCJvZmYgXCIrYStcIm9uXCIpfXZhciByLGgsYT1aK1wiU2xpZGVzaG93X1wiLHM9XCJjbGljay5cIitaO3JldHVybiBmdW5jdGlvbigpe3I/Xy5nZXQoXCJzbGlkZXNob3dcIil8fChhZS51bmJpbmQob2UsbyksbygpKTpfLmdldChcInNsaWRlc2hvd1wiKSYmV1sxXSYmKHI9ITAsYWUub25lKG9lLG8pLF8uZ2V0KFwic2xpZGVzaG93QXV0b1wiKT9pKCk6bigpLFMuc2hvdygpKX19KCk7dFtZXXx8KHQocCksSj10LmZuW1ldPXRbWV09ZnVuY3Rpb24oZSxpKXt2YXIgbixvPXRoaXM7cmV0dXJuIGU9ZXx8e30sdC5pc0Z1bmN0aW9uKG8pJiYobz10KFwiPGEvPlwiKSxlLm9wZW49ITApLG9bMF0/KHAoKSxtKCkmJihpJiYoZS5vbkNvbXBsZXRlPWkpLG8uZWFjaChmdW5jdGlvbigpe3ZhciBpPXQuZGF0YSh0aGlzLFkpfHx7fTt0LmRhdGEodGhpcyxZLHQuZXh0ZW5kKGksZSkpfSkuYWRkQ2xhc3ModGUpLG49bmV3IHIob1swXSxlKSxuLmdldChcIm9wZW5cIikmJmYob1swXSkpLG8pOm99LEoucG9zaXRpb249ZnVuY3Rpb24oZSxpKXtmdW5jdGlvbiBuKCl7VFswXS5zdHlsZS53aWR0aD1rWzBdLnN0eWxlLndpZHRoPWJbMF0uc3R5bGUud2lkdGg9cGFyc2VJbnQoeFswXS5zdHlsZS53aWR0aCwxMCktRCtcInB4XCIsYlswXS5zdHlsZS5oZWlnaHQ9Q1swXS5zdHlsZS5oZWlnaHQ9SFswXS5zdHlsZS5oZWlnaHQ9cGFyc2VJbnQoeFswXS5zdHlsZS5oZWlnaHQsMTApLWorXCJweFwifXZhciByLGgscyxsPTAsZD0wLGM9eC5vZmZzZXQoKTtpZihFLnVuYmluZChcInJlc2l6ZS5cIitaKSx4LmNzcyh7dG9wOi05ZTQsbGVmdDotOWU0fSksaD1FLnNjcm9sbFRvcCgpLHM9RS5zY3JvbGxMZWZ0KCksXy5nZXQoXCJmaXhlZFwiKT8oYy50b3AtPWgsYy5sZWZ0LT1zLHguY3NzKHtwb3NpdGlvbjpcImZpeGVkXCJ9KSk6KGw9aCxkPXMseC5jc3Moe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIn0pKSxkKz1fLmdldChcInJpZ2h0XCIpIT09ITE/TWF0aC5tYXgoRS53aWR0aCgpLV8udy16LUQtYShfLmdldChcInJpZ2h0XCIpLFwieFwiKSwwKTpfLmdldChcImxlZnRcIikhPT0hMT9hKF8uZ2V0KFwibGVmdFwiKSxcInhcIik6TWF0aC5yb3VuZChNYXRoLm1heChFLndpZHRoKCktXy53LXotRCwwKS8yKSxsKz1fLmdldChcImJvdHRvbVwiKSE9PSExP01hdGgubWF4KG8oKS1fLmgtTi1qLWEoXy5nZXQoXCJib3R0b21cIiksXCJ5XCIpLDApOl8uZ2V0KFwidG9wXCIpIT09ITE/YShfLmdldChcInRvcFwiKSxcInlcIik6TWF0aC5yb3VuZChNYXRoLm1heChvKCktXy5oLU4taiwwKS8yKSx4LmNzcyh7dG9wOmMudG9wLGxlZnQ6Yy5sZWZ0LHZpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KSx5WzBdLnN0eWxlLndpZHRoPXlbMF0uc3R5bGUuaGVpZ2h0PVwiOTk5OXB4XCIscj17d2lkdGg6Xy53K3orRCxoZWlnaHQ6Xy5oK04raix0b3A6bCxsZWZ0OmR9LGUpe3ZhciBnPTA7dC5lYWNoKHIsZnVuY3Rpb24odCl7cmV0dXJuIHJbdF0hPT1kZVt0XT8oZz1lLHZvaWQgMCk6dm9pZCAwfSksZT1nfWRlPXIsZXx8eC5jc3MocikseC5kZXF1ZXVlKCkuYW5pbWF0ZShyLHtkdXJhdGlvbjplfHwwLGNvbXBsZXRlOmZ1bmN0aW9uKCl7bigpLCQ9ITEseVswXS5zdHlsZS53aWR0aD1fLncreitEK1wicHhcIix5WzBdLnN0eWxlLmhlaWdodD1fLmgrTitqK1wicHhcIixfLmdldChcInJlcG9zaXRpb25cIikmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtFLmJpbmQoXCJyZXNpemUuXCIrWixKLnBvc2l0aW9uKX0sMSksdC5pc0Z1bmN0aW9uKGkpJiZpKCl9LHN0ZXA6bn0pfSxKLnJlc2l6ZT1mdW5jdGlvbih0KXt2YXIgZTtVJiYodD10fHx7fSx0LndpZHRoJiYoXy53PWEodC53aWR0aCxcInhcIiktei1EKSx0LmlubmVyV2lkdGgmJihfLnc9YSh0LmlubmVyV2lkdGgsXCJ4XCIpKSxJLmNzcyh7d2lkdGg6Xy53fSksdC5oZWlnaHQmJihfLmg9YSh0LmhlaWdodCxcInlcIiktTi1qKSx0LmlubmVySGVpZ2h0JiYoXy5oPWEodC5pbm5lckhlaWdodCxcInlcIikpLHQuaW5uZXJIZWlnaHR8fHQuaGVpZ2h0fHwoZT1JLnNjcm9sbFRvcCgpLEkuY3NzKHtoZWlnaHQ6XCJhdXRvXCJ9KSxfLmg9SS5oZWlnaHQoKSksSS5jc3Moe2hlaWdodDpfLmh9KSxlJiZJLnNjcm9sbFRvcChlKSxKLnBvc2l0aW9uKFwibm9uZVwiPT09Xy5nZXQoXCJ0cmFuc2l0aW9uXCIpPzA6Xy5nZXQoXCJzcGVlZFwiKSkpfSxKLnByZXA9ZnVuY3Rpb24oaSl7ZnVuY3Rpb24gbygpe3JldHVybiBfLnc9Xy53fHxJLndpZHRoKCksXy53PV8ubXcmJl8ubXc8Xy53P18ubXc6Xy53LF8ud31mdW5jdGlvbiBhKCl7cmV0dXJuIF8uaD1fLmh8fEkuaGVpZ2h0KCksXy5oPV8ubWgmJl8ubWg8Xy5oP18ubWg6Xy5oLF8uaH1pZihVKXt2YXIgZCxnPVwibm9uZVwiPT09Xy5nZXQoXCJ0cmFuc2l0aW9uXCIpPzA6Xy5nZXQoXCJzcGVlZFwiKTtJLnJlbW92ZSgpLEk9bihzZSxcIkxvYWRlZENvbnRlbnRcIikuYXBwZW5kKGkpLEkuaGlkZSgpLmFwcGVuZFRvKE0uc2hvdygpKS5jc3Moe3dpZHRoOm8oKSxvdmVyZmxvdzpfLmdldChcInNjcm9sbGluZ1wiKT9cImF1dG9cIjpcImhpZGRlblwifSkuY3NzKHtoZWlnaHQ6YSgpfSkucHJlcGVuZFRvKGIpLE0uaGlkZSgpLHQocSkuY3NzKHtcImZsb2F0XCI6XCJub25lXCJ9KSxjKF8uZ2V0KFwiY2xhc3NOYW1lXCIpKSxkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3Quc3VwcG9ydC5vcGFjaXR5PT09ITEmJnhbMF0uc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwiZmlsdGVyXCIpfXZhciBuLG8sYT1XLmxlbmd0aDtVJiYobz1mdW5jdGlvbigpe2NsZWFyVGltZW91dChRKSxMLmhpZGUoKSx1KG5lKSxfLmdldChcIm9uQ29tcGxldGVcIil9LEYuaHRtbChfLmdldChcInRpdGxlXCIpKS5zaG93KCksSS5zaG93KCksYT4xPyhcInN0cmluZ1wiPT10eXBlb2YgXy5nZXQoXCJjdXJyZW50XCIpJiZSLmh0bWwoXy5nZXQoXCJjdXJyZW50XCIpLnJlcGxhY2UoXCJ7Y3VycmVudH1cIixBKzEpLnJlcGxhY2UoXCJ7dG90YWx9XCIsYSkpLnNob3coKSxLW18uZ2V0KFwibG9vcFwiKXx8YS0xPkE/XCJzaG93XCI6XCJoaWRlXCJdKCkuaHRtbChfLmdldChcIm5leHRcIikpLFBbXy5nZXQoXCJsb29wXCIpfHxBP1wic2hvd1wiOlwiaGlkZVwiXSgpLmh0bWwoXy5nZXQoXCJwcmV2aW91c1wiKSksY2UoKSxfLmdldChcInByZWxvYWRpbmdcIikmJnQuZWFjaChbaCgtMSksaCgxKV0sZnVuY3Rpb24oKXt2YXIgaSxuPVdbdGhpc10sbz1uZXcgcihuLHQuZGF0YShuLFkpKSxoPW8uZ2V0KFwiaHJlZlwiKTtoJiZzKG8saCkmJihoPWwobyxoKSxpPWUuY3JlYXRlRWxlbWVudChcImltZ1wiKSxpLnNyYz1oKX0pKTpPLmhpZGUoKSxfLmdldChcImlmcmFtZVwiKT8obj1fLmdldChcImNyZWF0ZUlmcmFtZVwiKSxfLmdldChcInNjcm9sbGluZ1wiKXx8KG4uc2Nyb2xsaW5nPVwibm9cIiksdChuKS5hdHRyKHtzcmM6Xy5nZXQoXCJocmVmXCIpLFwiY2xhc3NcIjpaK1wiSWZyYW1lXCJ9KS5vbmUoXCJsb2FkXCIsbykuYXBwZW5kVG8oSSksYWUub25lKGhlLGZ1bmN0aW9uKCl7bi5zcmM9XCIvL2Fib3V0OmJsYW5rXCJ9KSxfLmdldChcImZhc3RJZnJhbWVcIikmJnQobikudHJpZ2dlcihcImxvYWRcIikpOm8oKSxcImZhZGVcIj09PV8uZ2V0KFwidHJhbnNpdGlvblwiKT94LmZhZGVUbyhnLDEsaSk6aSgpKX0sXCJmYWRlXCI9PT1fLmdldChcInRyYW5zaXRpb25cIik/eC5mYWRlVG8oZywwLGZ1bmN0aW9uKCl7Si5wb3NpdGlvbigwLGQpfSk6Si5wb3NpdGlvbihnLGQpfX0sSi5uZXh0PWZ1bmN0aW9uKCl7ISQmJldbMV0mJihfLmdldChcImxvb3BcIil8fFdbQSsxXSkmJihBPWgoMSksZihXW0FdKSl9LEoucHJldj1mdW5jdGlvbigpeyEkJiZXWzFdJiYoXy5nZXQoXCJsb29wXCIpfHxBKSYmKEE9aCgtMSksZihXW0FdKSl9LEouY2xvc2U9ZnVuY3Rpb24oKXtVJiYhRyYmKEc9ITAsVT0hMSx1KG9lKSxfLmdldChcIm9uQ2xlYW51cFwiKSxFLnVuYmluZChcIi5cIitaKSx2LmZhZGVUbyhfLmdldChcImZhZGVPdXRcIil8fDAsMCkseC5zdG9wKCkuZmFkZVRvKF8uZ2V0KFwiZmFkZU91dFwiKXx8MCwwLGZ1bmN0aW9uKCl7eC5oaWRlKCksdi5oaWRlKCksdShoZSksSS5yZW1vdmUoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Rz0hMSx1KHJlKSxfLmdldChcIm9uQ2xvc2VkXCIpfSwxKX0pKX0sSi5yZW1vdmU9ZnVuY3Rpb24oKXt4JiYoeC5zdG9wKCksdFtZXS5jbG9zZSgpLHguc3RvcCghMSwhMCkucmVtb3ZlKCksdi5yZW1vdmUoKSxHPSExLHg9bnVsbCx0KFwiLlwiK3RlKS5yZW1vdmVEYXRhKFkpLnJlbW92ZUNsYXNzKHRlKSx0KGUpLnVuYmluZChcImNsaWNrLlwiK1opLnVuYmluZChcImtleWRvd24uXCIrWikpfSxKLmVsZW1lbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdChfLmVsKX0sSi5zZXR0aW5ncz1YKX0pKGpRdWVyeSxkb2N1bWVudCx3aW5kb3cpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb2xvcmJveC9qcXVlcnkuY29sb3Jib3gtbWluLmpzIiwiXG5cbihmdW5jdGlvbigkKSB7XG5cbiAgICAkKCcuZ2FsbGVyeS1pdGVtIGEnKS5jb2xvcmJveCgpO1xuXG4gICAgLy9TZXR0aW5ncyBmb3IgbGlnaHRib3hcbiAgICB2YXIgY2JTZXR0aW5ncyA9IHtcbiAgICAgIHJlbDogJ2Nib3hFbGVtZW50JyxcbiAgICAgIHdpZHRoOiAnOTUlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgbWF4V2lkdGg6ICc2NjAnLFxuICAgICAgbWF4SGVpZ2h0OiAnYXV0bycsXG4gICAgICB0aXRsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ2FsdCcpO1xuICAgICAgfSxcbiAgICAgIGN1cnJlbnQ6IGRhc2hlc3YzX3NjcmlwdF92YXJzLmN1cnJlbnQsXG4gICAgICBwcmV2aW91czogZGFzaGVzdjNfc2NyaXB0X3ZhcnMucHJldmlvdXMsXG4gICAgICBuZXh0OiBkYXNoZXN2M19zY3JpcHRfdmFycy5uZXh0LFxuICAgICAgY2xvc2U6IGRhc2hlc3YzX3NjcmlwdF92YXJzLmNsb3NlLFxuICAgICAgeGhyRXJyb3I6IGRhc2hlc3YzX3NjcmlwdF92YXJzLnhockVycm9yLFxuICAgICAgaW1nRXJyb3I6IGRhc2hlc3YzX3NjcmlwdF92YXJzLmltZ0Vycm9yXG4gICAgfVxuXG4gICAgLy9Jbml0aWFsaXplIGpRdWVyeSBDb2xvcmJveCAgIFxuICAgICQoJy5nYWxsZXJ5IGFbaHJlZiQ9XCIuanBnXCJdLCAuZ2FsbGVyeSBhW2hyZWYkPVwiLmpwZWdcIl0sIC5nYWxsZXJ5IGFbaHJlZiQ9XCIucG5nXCJdLCAuZ2FsbGVyeSBhW2hyZWYkPVwiLmdpZlwiXScpLmNvbG9yYm94KGNiU2V0dGluZ3MpO1xuXG4gICAgLy9LZWVwIGxpZ2h0Ym94IHJlc3BvbnNpdmUgb24gc2NyZWVuIHJlc2l6ZVxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQuY29sb3Jib3gucmVzaXplKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoID4gcGFyc2VJbnQoY2JTZXR0aW5ncy5tYXhXaWR0aCkgPyBjYlNldHRpbmdzLm1heFdpZHRoIDogY2JTZXR0aW5ncy53aWR0aFxuICAgICAgfSk7IFxuICAgIH0pO1xuICAgIFxufSkoalF1ZXJ5KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29sb3Jib3gvbGlnaHRib3guanMiLCIvLyBXT1JEUFJFU1MgQUpBWFxuLy8gUmVmZXJlbmNlczpcbi8vIGh0dHBzOi8vcHJlbWl1bS53cG11ZGV2Lm9yZy9ibG9nL2xvYWQtcG9zdHMtYWpheC8/bWtzaT1iJnV0bV9leHBpZD0zNjA2OTI5LTk0LlNXR2tROWh5UVFHeEpOdGdFaUJnV0EuMSZ1dG1fcmVmZXJyZXI9aHR0cHMlM0ElMkYlMkZ3d3cuZ29vZ2xlLmNvbSUyRlxuLy8gaHR0cHM6Ly9wcmVtaXVtLndwbXVkZXYub3JnL2Jsb2cvdXNpbmctYWpheC13aXRoLXdvcmRwcmVzcy8/bWtzaT1iJnV0bV9leHBpZD0zNjA2OTI5LTk0LlNXR2tROWh5UVFHeEpOdGdFaUJnV0EuMSZ1dG1fcmVmZXJyZXI9aHR0cHMlM0ElMkYlMkZ3d3cuZ29vZ2xlLmNvbSUyRlxuLy8gaHR0cDovL3dvcmRwcmVzcy5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvMzU4NDkvdXNpbmctYWpheC1vbi1jYXRlZ29yaWVzLWFuZC13b3JkcHJlc3MtbG9vcHNcblxuXG4oZnVuY3Rpb24oJCkge1xuXG5cblx0Ly9DYWNoZSBEb21cblx0dmFyICRwYWdlX25hdiwgJGN1cnJfcGFnZSwgcGFnZV9udW07XG5cdHZhciAkY29udGFpbmVyID0gJCgnI2FydGljbGUtaW5kZXgnKTtcblxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUNhY2hlKCkge1xuXHRcdCRwYWdlX25hdiA9ICRjb250YWluZXIuZmluZCgnLnBhZ2luZy1uYXZpZ2F0aW9uJyk7XG5cdFx0JGN1cnJfcGFnZSA9ICRwYWdlX25hdi5maW5kKCcuY3VycmVudCcpO1xuXHR9XG5cblxuXHRmdW5jdGlvbiBnZXRfcGFnZV9udW0oIGVsZW1lbnQgKSB7XG5cblx0XHR2YXIgdmFsdWUgPSAkKGVsZW1lbnQpLmh0bWwoKTtcblxuXHRcdGlmKHZhbHVlID09ICdQcmV2aW91cycpIHZhbHVlID0gcGFyc2VJbnQoICRjdXJyX3BhZ2UuaHRtbCgpICkgLSAxO1xuXHRcdGVsc2UgaWYodmFsdWUgPT0gJ05leHQnKSB2YWx1ZSA9IHBhcnNlSW50KCAkY3Vycl9wYWdlLmh0bWwoKSApICsgMTtcblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYWdpbmctbmF2aWdhdGlvbiAucGFnZS1udW1iZXJzIGEnLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dXBkYXRlQ2FjaGUoKTtcblxuXHRcdHZhciBwYWdlX251bSA9IGdldF9wYWdlX251bSh0aGlzKTtcblxuXHRcdCQuYWpheCh7XG5cdFx0XHR1cmw6IGFqYXhwYWdpbmF0aW9uLmFqYXh1cmwsXG5cdFx0XHR0eXBlOiAncG9zdCcsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGFjdGlvbjogJ2FqYXhfcGFnaW5hdGlvbicsXG5cdFx0XHRcdHF1ZXJ5X3ZhcnM6IGFqYXhwYWdpbmF0aW9uLnF1ZXJ5X3ZhcnMsXG5cdFx0XHRcdHBhZ2U6IHBhZ2VfbnVtXG5cdFx0XHR9LFxuXHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRjb250YWluZXIuZmluZCggJ2FydGljbGUnICkucmVtb3ZlKCk7XG5cdFx0XHRcdCRjb250YWluZXIuZmluZCgnLnBhZ2luZy1uYXZpZ2F0aW9uJykucmVtb3ZlKCk7XG5cdFx0XHRcdCRjb250YWluZXIuYXBwZW5kKCAnPGRpdiBpZD1cImxvYWRlclwiPkxvYWRpbmcgTmV3IFBvc3RzLi4uPC9kaXY+JyApO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdFx0XHQkY29udGFpbmVyLmZpbmQoJyNsb2FkZXInKS5yZW1vdmUoKTtcblx0XHRcdFx0JGNvbnRhaW5lci5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxuXG59KShqUXVlcnkpO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hamF4LXBhZ2luYXRpb24uanMiLCIvKipcbiAqIEZpbGUgbmF2aWdhdGlvbi5qcy5cbiAqXG4gKiBIYW5kbGVzIHRvZ2dsaW5nIHRoZSBuYXZpZ2F0aW9uIG1lbnUgZm9yIHNtYWxsIHNjcmVlbnMgYW5kIGVuYWJsZXMgVEFCIGtleVxuICogbmF2aWdhdGlvbiBzdXBwb3J0IGZvciBkcm9wZG93biBtZW51cy5cbiAqL1xuXG5cbihmdW5jdGlvbigkKXtcblxuXHQvL0NhY2hlIERvbVxuXHR2YXIgJG5hdiA9ICQoJyNzaXRlLW5hdmlnYXRpb24nKTtcblx0dmFyICRtb2JpbGVfbWVudWJhciA9ICRuYXYuZmluZCgnLm1vYmlsZS1tZW51YmFyJyk7XG5cdHZhciAkbW9iaWxlX2J0bl9vcGVuID0gJG1vYmlsZV9tZW51YmFyLmZpbmQoJy5tb2JpbGUtYnRuLW9wZW4nKTtcblx0dmFyICRtb2JpbGVfY29udGVudCA9ICRuYXYuZmluZCgnLm1vYmlsZS1jb250ZW50Jyk7XG5cdHZhciAkbW9iaWxlX2J0bl9jbG9zZSA9ICRtb2JpbGVfY29udGVudC5maW5kKCcubW9iaWxlLWJ0bi1jbG9zZScpO1xuXHR2YXIgJG1vYmlsZV9ibGFja3NjcmVlbiA9ICRuYXYuZmluZCgnI25hdi1ibGFja3NjcmVlbicpO1xuXHR2YXIgJGhhc19jaGlsZHJlbiA9ICRuYXYuZmluZCggJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSwgLnBhZ2VfaXRlbV9oYXNfY2hpbGRyZW4gPiBhJyApO1xuXG5cdC8vSW5pdFxuXHRhZGRTdWJNZW51KCk7XG5cblx0Ly9DYWNoZSBuZXcgYnV0dG9uXG5cdHZhciAkZHJvcGRvd25fYnRuID0gJGhhc19jaGlsZHJlbi5uZXh0KCcuZHJvcGRvd24tdG9nZ2xlJyk7XG5cblx0Ly9CaW5kIEV2ZW50c1xuXHQkbW9iaWxlX2J0bl9vcGVuLm9uKCdjbGljaycsIG9wZW5NZW51KTtcblx0JG1vYmlsZV9idG5fY2xvc2Uub24oJ2NsaWNrJywgY2xvc2VNZW51KTtcblx0JG1vYmlsZV9ibGFja3NjcmVlbi5vbignY2xpY2snLCBjbG9zZU1lbnUpO1xuXHQkZHJvcGRvd25fYnRuLm9uKCdjbGljaycsIGRyb3Bkb3duVG9nZ2xlKTtcblxuXHRcblx0ZnVuY3Rpb24gb3Blbk1lbnUoKXtcblx0XHRpZighJG1vYmlsZV9jb250ZW50Lmhhc0NsYXNzKCdvdXQnKSl7XG5cdFx0XHQkbW9iaWxlX2NvbnRlbnQuYWRkQ2xhc3MoJ291dCcpO1xuXHRcdFx0JG1vYmlsZV9ibGFja3NjcmVlbi5zaG93KCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VNZW51KCl7XG5cdFx0aWYoJG1vYmlsZV9jb250ZW50Lmhhc0NsYXNzKCdvdXQnKSl7XG5cdFx0XHQkbW9iaWxlX2NvbnRlbnQucmVtb3ZlQ2xhc3MoJ291dCcpO1xuXHRcdFx0JG1vYmlsZV9ibGFja3NjcmVlbi5oaWRlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkU3ViTWVudSgpe1xuXHRcdCRoYXNfY2hpbGRyZW4uYWZ0ZXIoICc8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+PC9idXR0b24+JyApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJvcGRvd25Ub2dnbGUoKXtcblx0XHQkZHJvcGRvd25fYnRuLm5leHQoJy5zdWItbWVudScpLnNsaWRlVG9nZ2xlKDMwMCk7XG5cdH1cblx0XG5cbn0pKGpRdWVyeSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9uYXZpZ2F0aW9uLmpzIiwiLyoqXG4gKiBGaWxlIHNraXAtbGluay1mb2N1cy1maXguanMuXG4gKlxuICogSGVscHMgd2l0aCBhY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZCBvbmx5IHVzZXJzLlxuICpcbiAqIExlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0LmlvL3ZXZHIyXG4gKi9cbihmdW5jdGlvbigpIHtcblx0dmFyIGlzSWUgPSAvKHRyaWRlbnR8bXNpZSkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICk7XG5cblx0aWYgKCBpc0llICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoIDEgKSxcblx0XHRcdFx0ZWxlbWVudDtcblxuXHRcdFx0aWYgKCAhICggL15bQS16MC05Xy1dKyQvLnRlc3QoIGlkICkgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdGlmICggZWxlbWVudCApIHtcblx0XHRcdFx0aWYgKCAhICggL14oPzphfHNlbGVjdHxpbnB1dHxidXR0b258dGV4dGFyZWEpJC9pLnRlc3QoIGVsZW1lbnQudGFnTmFtZSApICkgKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC50YWJJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxlbWVudC5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlICk7XG5cdH1cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2tpcC1saW5rLWZvY3VzLWZpeC5qcyIsIi8qKlxuICogRmlsZSBzd2lwZXItc2NyaXB0LmpzLlxuICpcbiAqL1xuXG4oIGZ1bmN0aW9uKCAkICkge1xuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIElOREVYIFNMSURFUlxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhciBpbmRleF9iZyA9IG5ldyBTd2lwZXIoJy5mZWF0dXJlZC1zd2lwZXInLCB7XG4gICAgICAgIGF1dG9wbGF5OiAnMzAwMCcsXG4gICAgICAgIGxvbmdTd2lwZXM6IHRydWUsXG4gICAgICAgIGxhenlMb2FkaW5nOiB0cnVlLFxuICAgICAgICBsYXp5TG9hZGluZ0luUHJldk5leHQ6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWVcbiAgICB9KTtcblxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbn0gKSggalF1ZXJ5ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3dpcGVyL3N3aXBlci1zY3JpcHQuanMiLCIvKipcbiAqIFN3aXBlciAzLjQuMVxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIFxuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE2LCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICogVGhlIGlEYW5nZXJvLnVzXG4gKiBodHRwOi8vd3d3LmlkYW5nZXJvLnVzL1xuICogXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqIFxuICogUmVsZWFzZWQgb246IERlY2VtYmVyIDEzLCAyMDE2XG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciAkO1xuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgU3dpcGVyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICB2YXIgU3dpcGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgcGFyYW1zKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTd2lwZXIpKSByZXR1cm4gbmV3IFN3aXBlcihjb250YWluZXIsIHBhcmFtcyk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgLy8gYXV0b3BsYXlcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVN0b3BPbkxhc3Q6IGZhbHNlLFxuICAgICAgICAgICAgLy8gVG8gc3VwcG9ydCBpT1MncyBzd2lwZS10by1nby1iYWNrIGdlc3R1cmUgKHdoZW4gYmVpbmcgdXNlZCBpbi1hcHAsIHdpdGggVUlXZWJWaWV3KS5cbiAgICAgICAgICAgIGlPU0VkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBpT1NFZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxuICAgICAgICAgICAgLy8gRnJlZSBtb2RlXG4gICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAxLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZTogdHJ1ZSxcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICAgICAgICAgICAgZnJlZU1vZGVTdGlja3k6IGZhbHNlLFxuICAgICAgICAgICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuMDIsXG4gICAgICAgICAgICAvLyBBdXRvaGVpZ2h0XG4gICAgICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFNldCB3cmFwcGVyIHdpZHRoXG4gICAgICAgICAgICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBWaXJ0dWFsIFRyYW5zbGF0ZVxuICAgICAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBFZmZlY3RzXG4gICAgICAgICAgICBlZmZlY3Q6ICdzbGlkZScsIC8vICdzbGlkZScgb3IgJ2ZhZGUnIG9yICdjdWJlJyBvciAnY292ZXJmbG93JyBvciAnZmxpcCdcbiAgICAgICAgICAgIGNvdmVyZmxvdzoge1xuICAgICAgICAgICAgICAgIHJvdGF0ZTogNTAsXG4gICAgICAgICAgICAgICAgc3RyZXRjaDogMCxcbiAgICAgICAgICAgICAgICBkZXB0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93cyA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVTaGFkb3dzIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsaW1pdFJvdGF0aW9uOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3ViZToge1xuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaGFkb3c6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hhZG93T2Zmc2V0OiAyMCxcbiAgICAgICAgICAgICAgICBzaGFkb3dTY2FsZTogMC45NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhZGU6IHtcbiAgICAgICAgICAgICAgICBjcm9zc0ZhZGU6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gUGFyYWxsYXhcbiAgICAgICAgICAgIHBhcmFsbGF4OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFpvb21cbiAgICAgICAgICAgIHpvb206IGZhbHNlLFxuICAgICAgICAgICAgem9vbU1heDogMyxcbiAgICAgICAgICAgIHpvb21NaW46IDEsXG4gICAgICAgICAgICB6b29tVG9nZ2xlOiB0cnVlLFxuICAgICAgICAgICAgLy8gU2Nyb2xsYmFyXG4gICAgICAgICAgICBzY3JvbGxiYXI6IG51bGwsXG4gICAgICAgICAgICBzY3JvbGxiYXJIaWRlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsYmFyRHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNjcm9sbGJhclNuYXBPblJlbGVhc2U6IGZhbHNlLFxuICAgICAgICAgICAgLy8gS2V5Ym9hcmQgTW91c2V3aGVlbFxuICAgICAgICAgICAga2V5Ym9hcmRDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNld2hlZWxDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNld2hlZWxSZWxlYXNlT25FZGdlczogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZXdoZWVsSW52ZXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNld2hlZWxGb3JjZVRvQXhpczogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZXdoZWVsU2Vuc2l0aXZpdHk6IDEsXG4gICAgICAgICAgICBtb3VzZXdoZWVsRXZlbnRzVGFyZ2VkOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIC8vIEhhc2ggTmF2aWdhdGlvblxuICAgICAgICAgICAgaGFzaG5hdjogZmFsc2UsXG4gICAgICAgICAgICBoYXNobmF2V2F0Y2hTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBIaXN0b3J5XG4gICAgICAgICAgICBoaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIENvbW1vbmcgTmF2IFN0YXRlXG4gICAgICAgICAgICByZXBsYWNlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgLy8gQnJlYWtwb2ludHNcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBTbGlkZXMgZ3JpZFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgICAgIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW4nLFxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsIC8vIGluIHB4XG4gICAgICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMCwgLy8gaW4gcHhcbiAgICAgICAgICAgIC8vIFJvdW5kIGxlbmd0aFxuICAgICAgICAgICAgcm91bmRMZW5ndGhzOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFRvdWNoZXNcbiAgICAgICAgICAgIHRvdWNoUmF0aW86IDEsXG4gICAgICAgICAgICB0b3VjaEFuZ2xlOiA0NSxcbiAgICAgICAgICAgIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gICAgICAgICAgICBzaG9ydFN3aXBlczogdHJ1ZSxcbiAgICAgICAgICAgIGxvbmdTd2lwZXM6IHRydWUsXG4gICAgICAgICAgICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgICAgICAgICAgIGxvbmdTd2lwZXNNczogMzAwLFxuICAgICAgICAgICAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICAgICAgICAgICAgb25seUV4dGVybmFsOiBmYWxzZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAgICAgICAgICAgLy8gVW5pcXVlIE5hdmlnYXRpb24gRWxlbWVudHNcbiAgICAgICAgICAgIHVuaXF1ZU5hdkVsZW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgICAgICAgcGFnaW5hdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHBhZ2luYXRpb25FbGVtZW50OiAnc3BhbicsXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb25IaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRSZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uUHJvZ3Jlc3NSZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uRnJhY3Rpb25SZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ3VzdG9tUmVuZGVyOiBudWxsLFxuICAgICAgICAgICAgcGFnaW5hdGlvblR5cGU6ICdidWxsZXRzJywgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzcycgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgICAgICAgLy8gUmVzaXN0YW5jZVxuICAgICAgICAgICAgcmVzaXN0YW5jZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcbiAgICAgICAgICAgIC8vIE5leHQvcHJldiBidXR0b25zXG4gICAgICAgICAgICBuZXh0QnV0dG9uOiBudWxsLFxuICAgICAgICAgICAgcHJldkJ1dHRvbjogbnVsbCxcbiAgICAgICAgICAgIC8vIFByb2dyZXNzXG4gICAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogZmFsc2UsXG4gICAgICAgICAgICAvLyBDdXJzb3JcbiAgICAgICAgICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAgICAgICAgICAgLy8gQ2xpY2tzXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICAgICAgICAgICAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBMYXp5IExvYWRpbmdcbiAgICAgICAgICAgIGxhenlMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxhenlMb2FkaW5nSW5QcmV2TmV4dDogZmFsc2UsXG4gICAgICAgICAgICBsYXp5TG9hZGluZ0luUHJldk5leHRBbW91bnQ6IDEsXG4gICAgICAgICAgICBsYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIEltYWdlc1xuICAgICAgICAgICAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgICAgICAgICAgIHVwZGF0ZU9uSW1hZ2VzUmVhZHk6IHRydWUsXG4gICAgICAgICAgICAvLyBsb29wXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICAgICAgICAgICAgbG9vcGVkU2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgLy8gQ29udHJvbFxuICAgICAgICAgICAgY29udHJvbDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29udHJvbEludmVyc2U6IGZhbHNlLFxuICAgICAgICAgICAgY29udHJvbEJ5OiAnc2xpZGUnLCAvL29yICdjb250YWluZXInXG4gICAgICAgICAgICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICAgICAgICAgICAgLy8gU3dpcGluZy9ubyBzd2lwaW5nXG4gICAgICAgICAgICBhbGxvd1N3aXBlVG9QcmV2OiB0cnVlLFxuICAgICAgICAgICAgYWxsb3dTd2lwZVRvTmV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHN3aXBlSGFuZGxlcjogbnVsbCwgLy8nLnN3aXBlLWhhbmRsZXInLFxuICAgICAgICAgICAgbm9Td2lwaW5nOiB0cnVlLFxuICAgICAgICAgICAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gICAgICAgICAgICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICAgICAgICAgICAgcGFzc2l2ZUxpc3RlbmVyczogdHJ1ZSxcbiAgICAgICAgICAgIC8vIE5TXG4gICAgICAgICAgICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLWNvbnRhaW5lci0nLCAvLyBORVdcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICAgICAgICAgICAgc2xpZGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1hY3RpdmUnLFxuICAgICAgICAgICAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlJyxcbiAgICAgICAgICAgIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICAgICAgICAgICAgc2xpZGVEdXBsaWNhdGVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUnLFxuICAgICAgICAgICAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gICAgICAgICAgICBzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dCcsXG4gICAgICAgICAgICBzbGlkZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1wcmV2JyxcbiAgICAgICAgICAgIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2JyxcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcbiAgICAgICAgICAgIGJ1bGxldENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0JyxcbiAgICAgICAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZScsXG4gICAgICAgICAgICBidXR0b25EaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcsXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ3VycmVudENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tY3VycmVudCcsXG4gICAgICAgICAgICBwYWdpbmF0aW9uVG90YWxDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXRvdGFsJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25IaWRkZW5DbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWhpZGRlbicsXG4gICAgICAgICAgICBwYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25DbGlja2FibGVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZScsIC8vIE5FV1xuICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi0nLCAvLyBORVdcbiAgICAgICAgICAgIGxhenlMb2FkaW5nQ2xhc3M6ICdzd2lwZXItbGF6eScsXG4gICAgICAgICAgICBsYXp5U3RhdHVzTG9hZGluZ0NsYXNzOiAnc3dpcGVyLWxhenktbG9hZGluZycsXG4gICAgICAgICAgICBsYXp5U3RhdHVzTG9hZGVkQ2xhc3M6ICdzd2lwZXItbGF6eS1sb2FkZWQnLFxuICAgICAgICAgICAgbGF6eVByZWxvYWRlckNsYXNzOiAnc3dpcGVyLWxhenktcHJlbG9hZGVyJyxcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNsYXNzOiAnc3dpcGVyLW5vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICBwcmVsb2FkZXJDbGFzczogJ3ByZWxvYWRlcicsXG4gICAgICAgICAgICB6b29tQ29udGFpbmVyQ2xhc3M6ICdzd2lwZXItem9vbS1jb250YWluZXInLFxuICAgICAgICBcbiAgICAgICAgICAgIC8vIE9ic2VydmVyXG4gICAgICAgICAgICBvYnNlcnZlcjogZmFsc2UsXG4gICAgICAgICAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAvLyBBY2Nlc3NpYmlsaXR5XG4gICAgICAgICAgICBhMTF5OiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICdQcmV2aW91cyBzbGlkZScsXG4gICAgICAgICAgICBuZXh0U2xpZGVNZXNzYWdlOiAnTmV4dCBzbGlkZScsXG4gICAgICAgICAgICBmaXJzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGZpcnN0IHNsaWRlJyxcbiAgICAgICAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBsYXN0IHNsaWRlJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiAnR28gdG8gc2xpZGUge3tpbmRleH19JyxcbiAgICAgICAgICAgIC8vIENhbGxiYWNrc1xuICAgICAgICAgICAgcnVuQ2FsbGJhY2tzT25Jbml0OiB0cnVlXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGJhY2tzOlxuICAgICAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25EZXN0cm95OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uVGFwOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxuICAgICAgICAgICAgb25Eb3VibGVUYXA6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblNsaWRlck1vdmU6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblNsaWRlQ2hhbmdlU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblNsaWRlQ2hhbmdlRW5kOiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25UcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvbkltYWdlc1JlYWR5OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24gKHN3aXBlciwgcHJvZ3Jlc3MpXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlT3Bwb3NpdGU6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxuICAgICAgICAgICAgb25SZWFjaEJlZ2lubmluZzogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uUmVhY2hFbmQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChzd2lwZXIsIGR1cmF0aW9uKVxuICAgICAgICAgICAgb25TZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChzd2lwZXIsIHRyYW5zbGF0ZSlcbiAgICAgICAgICAgIG9uQXV0b3BsYXlTdGFydDogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uQXV0b3BsYXlTdG9wOiBmdW5jdGlvbiAoc3dpcGVyKSxcbiAgICAgICAgICAgIG9uTGF6eUltYWdlTG9hZDogZnVuY3Rpb24gKHN3aXBlciwgc2xpZGUsIGltYWdlKVxuICAgICAgICAgICAgb25MYXp5SW1hZ2VSZWFkeTogZnVuY3Rpb24gKHN3aXBlciwgc2xpZGUsIGltYWdlKVxuICAgICAgICAgICAgKi9cbiAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpbml0aWFsVmlydHVhbFRyYW5zbGF0ZSA9IHBhcmFtcyAmJiBwYXJhbXMudmlydHVhbFRyYW5zbGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIG9yaWdpbmFsUGFyYW1zID0ge307XG4gICAgICAgIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbcGFyYW1dID09PSAnb2JqZWN0JyAmJiBwYXJhbXNbcGFyYW1dICE9PSBudWxsICYmICEocGFyYW1zW3BhcmFtXS5ub2RlVHlwZSB8fCBwYXJhbXNbcGFyYW1dID09PSB3aW5kb3cgfHwgcGFyYW1zW3BhcmFtXSA9PT0gZG9jdW1lbnQgfHwgKHR5cGVvZiBEb203ICE9PSAndW5kZWZpbmVkJyAmJiBwYXJhbXNbcGFyYW1dIGluc3RhbmNlb2YgRG9tNykgfHwgKHR5cGVvZiBqUXVlcnkgIT09ICd1bmRlZmluZWQnICYmIHBhcmFtc1twYXJhbV0gaW5zdGFuY2VvZiBqUXVlcnkpKSkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUGFyYW1zW3BhcmFtXSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGRlZXBQYXJhbSBpbiBwYXJhbXNbcGFyYW1dKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUGFyYW1zW3BhcmFtXVtkZWVwUGFyYW1dID0gcGFyYW1zW3BhcmFtXVtkZWVwUGFyYW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUGFyYW1zW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgZGVmIGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tkZWZdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tkZWZdID0gZGVmYXVsdHNbZGVmXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNbZGVmXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkZWVwRGVmIGluIGRlZmF1bHRzW2RlZl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbZGVmXVtkZWVwRGVmXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1tkZWZdW2RlZXBEZWZdID0gZGVmYXVsdHNbZGVmXVtkZWVwRGVmXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gU3dpcGVyXG4gICAgICAgIHZhciBzID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIC8vIFBhcmFtc1xuICAgICAgICBzLnBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgcy5vcmlnaW5hbFBhcmFtcyA9IG9yaWdpbmFsUGFyYW1zO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2xhc3NuYW1lXG4gICAgICAgIHMuY2xhc3NOYW1lcyA9IFtdO1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBEb20gTGlicmFyeSBhbmQgcGx1Z2luc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGlmICh0eXBlb2YgJCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIERvbTcgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICQgPSBEb203O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgRG9tNyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAkID0gd2luZG93LkRvbTcgfHwgd2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkID0gRG9tNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghJCkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4cG9ydCBpdCB0byBTd2lwZXIgaW5zdGFuY2VcbiAgICAgICAgcy4kID0gJDtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEJyZWFrcG9pbnRzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5jdXJyZW50QnJlYWtwb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcy5nZXRBY3RpdmVCcmVha3BvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9HZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmJyZWFrcG9pbnRzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHBvaW50cyA9IFtdLCBwb2ludDtcbiAgICAgICAgICAgIGZvciAoIHBvaW50IGluIHMucGFyYW1zLmJyZWFrcG9pbnRzICkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKSA+IHBhcnNlSW50KGIsIDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQgPj0gd2luZG93LmlubmVyV2lkdGggJiYgIWJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50IHx8ICdtYXgnO1xuICAgICAgICB9O1xuICAgICAgICBzLnNldEJyZWFrcG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1NldCBicmVha3BvaW50IGZvciB3aW5kb3cgd2lkdGggYW5kIHVwZGF0ZSBwYXJhbWV0ZXJzXG4gICAgICAgICAgICB2YXIgYnJlYWtwb2ludCA9IHMuZ2V0QWN0aXZlQnJlYWtwb2ludCgpO1xuICAgICAgICAgICAgaWYgKGJyZWFrcG9pbnQgJiYgcy5jdXJyZW50QnJlYWtwb2ludCAhPT0gYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgIHZhciBicmVha1BvaW50c1BhcmFtcyA9IGJyZWFrcG9pbnQgaW4gcy5wYXJhbXMuYnJlYWtwb2ludHMgPyBzLnBhcmFtcy5icmVha3BvaW50c1ticmVha3BvaW50XSA6IHMub3JpZ2luYWxQYXJhbXM7XG4gICAgICAgICAgICAgICAgdmFyIG5lZWRzUmVMb29wID0gcy5wYXJhbXMubG9vcCAmJiAoYnJlYWtQb2ludHNQYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gcy5wYXJhbXMuc2xpZGVzUGVyVmlldyk7XG4gICAgICAgICAgICAgICAgZm9yICggdmFyIHBhcmFtIGluIGJyZWFrUG9pbnRzUGFyYW1zICkge1xuICAgICAgICAgICAgICAgICAgICBzLnBhcmFtc1twYXJhbV0gPSBicmVha1BvaW50c1BhcmFtc1twYXJhbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMuY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICAgICAgICAgICAgICAgIGlmKG5lZWRzUmVMb29wICYmIHMuZGVzdHJveUxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcy5yZUxvb3AodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBTZXQgYnJlYWtwb2ludCBvbiBsb2FkXG4gICAgICAgIGlmIChzLnBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgcy5zZXRCcmVha3BvaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFByZXBhcmF0aW9uIC0gRGVmaW5lIENvbnRhaW5lciwgV3JhcHBlciBhbmQgUGFnaW5hdGlvblxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuY29udGFpbmVyID0gJChjb250YWluZXIpO1xuICAgICAgICBpZiAocy5jb250YWluZXIubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIGlmIChzLmNvbnRhaW5lci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVycyA9IFtdO1xuICAgICAgICAgICAgcy5jb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc3dpcGVycy5wdXNoKG5ldyBTd2lwZXIodGhpcywgcGFyYW1zKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIGluc3RhbmNlIGluIGNvbnRhaW5lciBIVE1MIEVsZW1lbnQgYW5kIGluIGRhdGFcbiAgICAgICAgcy5jb250YWluZXJbMF0uc3dpcGVyID0gcztcbiAgICAgICAgcy5jb250YWluZXIuZGF0YSgnc3dpcGVyJywgcyk7XG4gICAgICAgIFxuICAgICAgICBzLmNsYXNzTmFtZXMucHVzaChzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgcy5wYXJhbXMuZGlyZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2gocy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArICdmcmVlLW1vZGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXMuc3VwcG9ydC5mbGV4Ym94KSB7XG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaChzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgJ25vLWZsZXhib3gnKTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyAnYXV0b2hlaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuYWJsZSBzbGlkZXMgcHJvZ3Jlc3Mgd2hlbiByZXF1aXJlZFxuICAgICAgICBpZiAocy5wYXJhbXMucGFyYWxsYXggfHwgcy5wYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICAgICAgICBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNYXggcmVzaXN0YW5jZSB3aGVuIHRvdWNoUmVsZWFzZU9uRWRnZXNcbiAgICAgICAgaWYgKHMucGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLnJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ292ZXJmbG93IC8gM0RcbiAgICAgICAgaWYgKFsnY3ViZScsICdjb3ZlcmZsb3cnLCAnZmxpcCddLmluZGV4T2Yocy5wYXJhbXMuZWZmZWN0KSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRyYW5zZm9ybXMzZCkge1xuICAgICAgICAgICAgICAgIHMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyAnM2QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMucGFyYW1zLmVmZmVjdCA9ICdzbGlkZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2gocy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIHMucGFyYW1zLmVmZmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCA9PT0gJ2N1YmUnKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5yZXNpc3RhbmNlUmF0aW8gPSAwO1xuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPSAxO1xuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPSAxO1xuICAgICAgICAgICAgcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNwYWNlQmV0d2VlbiA9IDA7XG4gICAgICAgICAgICBzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNldFdyYXBwZXJTaXplID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCA9PT0gJ2ZhZGUnIHx8IHMucGFyYW1zLmVmZmVjdCA9PT0gJ2ZsaXAnKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID0gMTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNwYWNlQmV0d2VlbiA9IDA7XG4gICAgICAgICAgICBzLnBhcmFtcy5zZXRXcmFwcGVyU2l6ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0aWFsVmlydHVhbFRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gR3JhYiBDdXJzb3JcbiAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IgJiYgcy5zdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5ncmFiQ3Vyc29yID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFdyYXBwZXJcbiAgICAgICAgcy53cmFwcGVyID0gcy5jb250YWluZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMud3JhcHBlckNsYXNzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFBhZ2luYXRpb25cbiAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lciA9ICQocy5wYXJhbXMucGFnaW5hdGlvbik7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHMucGFyYW1zLnBhZ2luYXRpb24gPT09ICdzdHJpbmcnICYmIHMucGFnaW5hdGlvbkNvbnRhaW5lci5sZW5ndGggPiAxICYmIHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMucGFnaW5hdGlvbikubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyID0gcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wYWdpbmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdidWxsZXRzJyAmJiBzLnBhcmFtcy5wYWdpbmF0aW9uQ2xpY2thYmxlKSB7XG4gICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmFkZENsYXNzKHMucGFyYW1zLnBhZ2luYXRpb25Nb2RpZmllckNsYXNzICsgJ2NsaWNrYWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmFkZENsYXNzKHMucGFyYW1zLnBhZ2luYXRpb25Nb2RpZmllckNsYXNzICsgcy5wYXJhbXMucGFnaW5hdGlvblR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5leHQvUHJldiBCdXR0b25zXG4gICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uIHx8IHMucGFyYW1zLnByZXZCdXR0b24pIHtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgcy5uZXh0QnV0dG9uID0gJChzLnBhcmFtcy5uZXh0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHMucGFyYW1zLm5leHRCdXR0b24gPT09ICdzdHJpbmcnICYmIHMubmV4dEJ1dHRvbi5sZW5ndGggPiAxICYmIHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMubmV4dEJ1dHRvbikubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvbiA9IHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMubmV4dEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZCdXR0b24pIHtcbiAgICAgICAgICAgICAgICBzLnByZXZCdXR0b24gPSAkKHMucGFyYW1zLnByZXZCdXR0b24pO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2Ygcy5wYXJhbXMucHJldkJ1dHRvbiA9PT0gJ3N0cmluZycgJiYgcy5wcmV2QnV0dG9uLmxlbmd0aCA+IDEgJiYgcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wcmV2QnV0dG9uKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5wcmV2QnV0dG9uID0gcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wcmV2QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElzIEhvcml6b250YWxcbiAgICAgICAgcy5pc0hvcml6b250YWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHMuaXNIID0gaXNIO1xuICAgICAgICBcbiAgICAgICAgLy8gUlRMXG4gICAgICAgIHMucnRsID0gcy5pc0hvcml6b250YWwoKSAmJiAocy5jb250YWluZXJbMF0uZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8IHMuY29udGFpbmVyLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnKTtcbiAgICAgICAgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaChzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgJ3J0bCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBXcm9uZyBSVEwgc3VwcG9ydFxuICAgICAgICBpZiAocy5ydGwpIHtcbiAgICAgICAgICAgIHMud3JvbmdSVEwgPSBzLndyYXBwZXIuY3NzKCdkaXNwbGF5JykgPT09ICctd2Via2l0LWJveCc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENvbHVtbnNcbiAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyAnbXVsdGlyb3cnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgZm9yIEFuZHJvaWRcbiAgICAgICAgaWYgKHMuZGV2aWNlLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyAnYW5kcm9pZCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgY2xhc3Nlc1xuICAgICAgICBzLmNvbnRhaW5lci5hZGRDbGFzcyhzLmNsYXNzTmFtZXMuam9pbignICcpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRyYW5zbGF0ZVxuICAgICAgICBzLnRyYW5zbGF0ZSA9IDA7XG4gICAgICAgIFxuICAgICAgICAvLyBQcm9ncmVzc1xuICAgICAgICBzLnByb2dyZXNzID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vIFZlbG9jaXR5XG4gICAgICAgIHMudmVsb2NpdHkgPSAwO1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgTG9ja3MsIHVubG9ja3NcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmxvY2tTd2lwZVRvTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID09PSBmYWxzZSAmJiBzLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgcy51bnNldEdyYWJDdXJzb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy5sb2NrU3dpcGVUb1ByZXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9PT0gZmFsc2UgJiYgcy5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgICAgICAgICAgIHMudW5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMubG9ja1N3aXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZ3JhYkN1cnNvcikgcy51bnNldEdyYWJDdXJzb3IoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy51bmxvY2tTd2lwZVRvTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPT09IHRydWUgJiYgcy5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgICAgICAgICAgIHMuc2V0R3JhYkN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzLnVubG9ja1N3aXBlVG9QcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9PT0gdHJ1ZSAmJiBzLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgcy5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMudW5sb2NrU3dpcGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9IHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IpIHMuc2V0R3JhYkN1cnNvcigpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUm91bmQgaGVscGVyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgZnVuY3Rpb24gcm91bmQoYSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoYSk7XG4gICAgICAgIH1cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgU2V0IGdyYWIgY3Vyc29yXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5zZXRHcmFiQ3Vyc29yID0gZnVuY3Rpb24obW92aW5nKSB7XG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLXdlYmtpdC1ncmFiYmluZycgOiAnLXdlYmtpdC1ncmFiJztcbiAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctbW96LWdyYWJiaW4nIDogJy1tb3otZ3JhYic7XG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnOiAnZ3JhYic7XG4gICAgICAgIH07XG4gICAgICAgIHMudW5zZXRHcmFiQ3Vyc29yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChzLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICAgICAgICBzLnNldEdyYWJDdXJzb3IoKTtcbiAgICAgICAgfVxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBVcGRhdGUgb24gSW1hZ2VzIFJlYWR5XG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5pbWFnZXNUb0xvYWQgPSBbXTtcbiAgICAgICAgcy5pbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBcbiAgICAgICAgcy5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoaW1nRWxlbWVudCwgc3JjLCBzcmNzZXQsIHNpemVzLCBjaGVja0ZvckNvbXBsZXRlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGltYWdlO1xuICAgICAgICAgICAgZnVuY3Rpb24gb25SZWFkeSAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbWdFbGVtZW50LmNvbXBsZXRlIHx8ICFjaGVja0ZvckNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gb25SZWFkeTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IG9uUmVhZHk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc2l6ZXMgPSBzaXplcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmNzZXQgPSBzcmNzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFkeSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Ugey8vaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICAgICAgICAgICAgICBvblJlYWR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMucHJlbG9hZEltYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMuaW1hZ2VzVG9Mb2FkID0gcy5jb250YWluZXIuZmluZCgnaW1nJyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfb25SZWFkeSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHMgPT09ICd1bmRlZmluZWQnIHx8IHMgPT09IG51bGwgfHwgIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAocy5pbWFnZXNMb2FkZWQgIT09IHVuZGVmaW5lZCkgcy5pbWFnZXNMb2FkZWQrKztcbiAgICAgICAgICAgICAgICBpZiAocy5pbWFnZXNMb2FkZWQgPT09IHMuaW1hZ2VzVG9Mb2FkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSkgcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkltYWdlc1JlYWR5Jywgcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmltYWdlc1RvTG9hZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHMubG9hZEltYWdlKHMuaW1hZ2VzVG9Mb2FkW2ldLCAocy5pbWFnZXNUb0xvYWRbaV0uY3VycmVudFNyYyB8fCBzLmltYWdlc1RvTG9hZFtpXS5nZXRBdHRyaWJ1dGUoJ3NyYycpKSwgKHMuaW1hZ2VzVG9Mb2FkW2ldLnNyY3NldCB8fCBzLmltYWdlc1RvTG9hZFtpXS5nZXRBdHRyaWJ1dGUoJ3NyY3NldCcpKSwgcy5pbWFnZXNUb0xvYWRbaV0uc2l6ZXMgfHwgcy5pbWFnZXNUb0xvYWRbaV0uZ2V0QXR0cmlidXRlKCdzaXplcycpLCB0cnVlLCBfb25SZWFkeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBBdXRvcGxheVxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuYXV0b3BsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHMuYXV0b3BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgcy5hdXRvcGxheVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBmdW5jdGlvbiBhdXRvcGxheSgpIHtcbiAgICAgICAgICAgIHZhciBhdXRvcGxheURlbGF5ID0gcy5wYXJhbXMuYXV0b3BsYXk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIGlmIChhY3RpdmVTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1hdXRvcGxheScpKSB7XG4gICAgICAgICAgICAgICAgYXV0b3BsYXlEZWxheSA9IGFjdGl2ZVNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JykgfHwgcy5wYXJhbXMuYXV0b3BsYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLmF1dG9wbGF5VGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XG4gICAgICAgICAgICAgICAgICAgIHMuX3NsaWRlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXknLCBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcy5pc0VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5fc2xpZGVOZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXknLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFyYW1zLmF1dG9wbGF5U3RvcE9uTGFzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuX3NsaWRlVG8oMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkF1dG9wbGF5Jywgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgYXV0b3BsYXlEZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgcy5zdGFydEF1dG9wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLmF1dG9wbGF5VGltZW91dElkICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hdXRvcGxheSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHMuYXV0b3BsYXlpbmcpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHMuYXV0b3BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcy5lbWl0KCdvbkF1dG9wbGF5U3RhcnQnLCBzKTtcbiAgICAgICAgICAgIGF1dG9wbGF5KCk7XG4gICAgICAgIH07XG4gICAgICAgIHMuc3RvcEF1dG9wbGF5ID0gZnVuY3Rpb24gKGludGVybmFsKSB7XG4gICAgICAgICAgICBpZiAoIXMuYXV0b3BsYXlUaW1lb3V0SWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChzLmF1dG9wbGF5VGltZW91dElkKSBjbGVhclRpbWVvdXQocy5hdXRvcGxheVRpbWVvdXRJZCk7XG4gICAgICAgICAgICBzLmF1dG9wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzLmF1dG9wbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcy5lbWl0KCdvbkF1dG9wbGF5U3RvcCcsIHMpO1xuICAgICAgICB9O1xuICAgICAgICBzLnBhdXNlQXV0b3BsYXkgPSBmdW5jdGlvbiAoc3BlZWQpIHtcbiAgICAgICAgICAgIGlmIChzLmF1dG9wbGF5UGF1c2VkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAocy5hdXRvcGxheVRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHMuYXV0b3BsYXlUaW1lb3V0SWQpO1xuICAgICAgICAgICAgcy5hdXRvcGxheVBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzLmF1dG9wbGF5UGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYXV0b3BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHMuYXV0b3BsYXlQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmF1dG9wbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBNaW4vTWF4IFRyYW5zbGF0ZVxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMubWluVHJhbnNsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICgtcy5zbmFwR3JpZFswXSk7XG4gICAgICAgIH07XG4gICAgICAgIHMubWF4VHJhbnNsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICgtcy5zbmFwR3JpZFtzLnNuYXBHcmlkLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgU2xpZGVyL3NsaWRlcyBzaXplc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSAwO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcbiAgICAgICAgICAgIGlmKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXRoLmNlaWwocy5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzLmFjdGl2ZUluZGV4ICsgaTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPiBzLnNsaWRlcy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzLnNsaWRlcy5lcShpbmRleClbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2gocy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleClbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIEZpbmQgbmV3IGhlaWdodCBmcm9tIGhlaWdoZXN0IHNsaWRlIGluIHZpZXdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGFjdGl2ZVNsaWRlc1tpXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IGhlaWdodCA+IG5ld0hlaWdodCA/IGhlaWdodCA6IG5ld0hlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIEhlaWdodFxuICAgICAgICAgICAgaWYgKG5ld0hlaWdodCkgcy53cmFwcGVyLmNzcygnaGVpZ2h0JywgbmV3SGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIH07XG4gICAgICAgIHMudXBkYXRlQ29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHMucGFyYW1zLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBzLmNvbnRhaW5lclswXS5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IHMucGFyYW1zLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IHMuY29udGFpbmVyWzBdLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aWR0aCA9PT0gMCAmJiBzLmlzSG9yaXpvbnRhbCgpIHx8IGhlaWdodCA9PT0gMCAmJiAhcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvL1N1YnRyYWN0IHBhZGRpbmdzXG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQocy5jb250YWluZXIuY3NzKCdwYWRkaW5nLWxlZnQnKSwgMTApIC0gcGFyc2VJbnQocy5jb250YWluZXIuY3NzKCdwYWRkaW5nLXJpZ2h0JyksIDEwKTtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KHMuY29udGFpbmVyLmNzcygncGFkZGluZy10b3AnKSwgMTApIC0gcGFyc2VJbnQocy5jb250YWluZXIuY3NzKCdwYWRkaW5nLWJvdHRvbScpLCAxMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzXG4gICAgICAgICAgICBzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIHMuc2l6ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLndpZHRoIDogcy5oZWlnaHQ7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLnVwZGF0ZVNsaWRlc1NpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnNsaWRlcyA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICAgICAgICAgIHMuc25hcEdyaWQgPSBbXTtcbiAgICAgICAgICAgIHMuc2xpZGVzR3JpZCA9IFtdO1xuICAgICAgICAgICAgcy5zbGlkZXNTaXplc0dyaWQgPSBbXTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3BhY2VCZXR3ZWVuID0gcy5wYXJhbXMuc3BhY2VCZXR3ZWVuLFxuICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSAtcy5wYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlU2l6ZSA9IDAsXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnNpemUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSA9IC1zcGFjZUJldHdlZW47XG4gICAgICAgICAgICAvLyByZXNldCBtYXJnaW5zXG4gICAgICAgICAgICBpZiAocy5ydGwpIHMuc2xpZGVzLmNzcyh7bWFyZ2luTGVmdDogJycsIG1hcmdpblRvcDogJyd9KTtcbiAgICAgICAgICAgIGVsc2Ugcy5zbGlkZXMuY3NzKHttYXJnaW5SaWdodDogJycsIG1hcmdpbkJvdHRvbTogJyd9KTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3Iocy5zbGlkZXMubGVuZ3RoIC8gcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSA9PT0gcy5zbGlkZXMubGVuZ3RoIC8gcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBzLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5jZWlsKHMuc2xpZGVzLmxlbmd0aCAvIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbikgKiBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ3JvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGgubWF4KHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MsIHMucGFyYW1zLnNsaWRlc1BlclZpZXcgKiBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBDYWxjIHNsaWRlc1xuICAgICAgICAgICAgdmFyIHNsaWRlU2l6ZTtcbiAgICAgICAgICAgIHZhciBzbGlkZXNQZXJDb2x1bW4gPSBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgICAgICAgICB2YXIgc2xpZGVzUGVyUm93ID0gc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgIHZhciBudW1GdWxsQ29sdW1ucyA9IHNsaWRlc1BlclJvdyAtIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gKiBzbGlkZXNQZXJSb3cgLSBzLnNsaWRlcy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVTaXplID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgc2xpZGVzIG9yZGVyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdTbGlkZU9yZGVySW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4sIHJvdztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gaSAtIGNvbHVtbiAqIHNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4gPiBudW1GdWxsQ29sdW1ucyB8fCAoY29sdW1uID09PSBudW1GdWxsQ29sdW1ucyAmJiByb3cgPT09IHNsaWRlc1BlckNvbHVtbi0xKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgrK3JvdyA+PSBzbGlkZXNQZXJDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2xpZGVPcmRlckluZGV4ID0gY29sdW1uICsgcm93ICogc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLW1vei1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1tcy1mbGV4LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJSb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gaSAtIHJvdyAqIHNsaWRlc1BlclJvdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLScgKyAocy5pc0hvcml6b250YWwoKSA/ICd0b3AnIDogJ2xlZnQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm93ICE9PSAwICYmIHMucGFyYW1zLnNwYWNlQmV0d2VlbikgJiYgKHMucGFyYW1zLnNwYWNlQmV0d2VlbiArICdweCcpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zd2lwZXItY29sdW1uJywgY29sdW1uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3dpcGVyLXJvdycsIHJvdyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZVNpemUgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUub3V0ZXJXaWR0aCh0cnVlKSA6IHNsaWRlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSByb3VuZChzbGlkZVNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVTaXplID0gKHMuc2l6ZSAtIChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3IC0gMSkgKiBzcGFjZUJldHdlZW4pIC8gcy5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gcm91bmQoc2xpZGVTaXplKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1tpXS5zdHlsZS53aWR0aCA9IHNsaWRlU2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1tpXS5zdHlsZS5oZWlnaHQgPSBzbGlkZVNpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMuc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICAgICAgICAgICAgICBzLnNsaWRlc1NpemVzR3JpZC5wdXNoKHNsaWRlU2l6ZSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHMuc2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzbGlkZVBvc2l0aW9uKSA8IDEgLyAxMDAwKSBzbGlkZVBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpbmRleCkgJSBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgcy5zbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoaW5kZXgpICUgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHMuc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSArPSBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGluZGV4ICsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHMudmlydHVhbFNpemUsIHMuc2l6ZSkgKyBzLnBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcbiAgICAgICAgICAgIHZhciBuZXdTbGlkZXNHcmlkO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzLnJ0bCAmJiBzLndyb25nUlRMICYmIChzLnBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcy5wYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcbiAgICAgICAgICAgICAgICBzLndyYXBwZXIuY3NzKHt3aWR0aDogcy52aXJ0dWFsU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5zdXBwb3J0LmZsZXhib3ggfHwgcy5wYXJhbXMuc2V0V3JhcHBlclNpemUpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkgcy53cmFwcGVyLmNzcyh7d2lkdGg6IHMudmlydHVhbFNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBzLndyYXBwZXIuY3NzKHtoZWlnaHQ6IHMudmlydHVhbFNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBzLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2VlbikgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuICAgICAgICAgICAgICAgIHMudmlydHVhbFNpemUgPSBNYXRoLmNlaWwocy52aXJ0dWFsU2l6ZSAvIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbikgLSBzLnBhcmFtcy5zcGFjZUJldHdlZW47XG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHMud3JhcHBlci5jc3Moe3dpZHRoOiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgIGVsc2Ugcy53cmFwcGVyLmNzcyh7aGVpZ2h0OiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgICAgICBuZXdTbGlkZXNHcmlkID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNuYXBHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbmFwR3JpZFtpXSA8IHMudmlydHVhbFNpemUgKyBzLnNuYXBHcmlkWzBdKSBuZXdTbGlkZXNHcmlkLnB1c2gocy5zbmFwR3JpZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5zbmFwR3JpZCA9IG5ld1NsaWRlc0dyaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlbW92ZSBsYXN0IGdyaWQgZWxlbWVudHMgZGVwZW5kaW5nIG9uIHdpZHRoXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNuYXBHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkW2ldIDw9IHMudmlydHVhbFNpemUgLSBzLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChzLnNuYXBHcmlkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLnNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihzLnZpcnR1YWxTaXplIC0gcy5zaXplKSAtIE1hdGguZmxvb3Iocy5zbmFwR3JpZFtzLnNuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbmFwR3JpZC5wdXNoKHMudmlydHVhbFNpemUgLSBzLnNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkLmxlbmd0aCA9PT0gMCkgcy5zbmFwR3JpZCA9IFswXTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSBzLnNsaWRlcy5jc3Moe21hcmdpbkxlZnQ6IHNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBzLnNsaWRlcy5jc3Moe21hcmdpblJpZ2h0OiBzcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Ugcy5zbGlkZXMuY3NzKHttYXJnaW5Cb3R0b206IHNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy51cGRhdGVTbGlkZXNPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXNbaV0uc3dpcGVyU2xpZGVPZmZzZXQgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy5zbGlkZXNbaV0ub2Zmc2V0TGVmdCA6IHMuc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIER5bmFtaWMgU2xpZGVzIFBlciBWaWV3XG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5jdXJyZW50U2xpZGVzUGVyVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzcHYgPSAxLCBpLCBqO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNpemUgPSBzLnNsaWRlc1tzLmFjdGl2ZUluZGV4XS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgICAgICAgdmFyIGJyZWFrTG9vcDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBzLmFjdGl2ZUluZGV4ICsgMTsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplICs9IHMuc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwdiArKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaXplID4gcy5zaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaiA9IHMuYWN0aXZlSW5kZXggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbal0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSArPSBzLnNsaWRlc1tqXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcHYgKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2l6ZSA+IHMuc2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IHMuYWN0aXZlSW5kZXggKyAxOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzR3JpZFtpXSAtIHMuc2xpZGVzR3JpZFtzLmFjdGl2ZUluZGV4XSA8IHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3B2Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3B2O1xuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBTbGlkZXIvc2xpZGVzIHByb2dyZXNzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy51cGRhdGVTbGlkZXNQcm9ncmVzcyA9IGZ1bmN0aW9uICh0cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSA9IHMudHJhbnNsYXRlIHx8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5zbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICBpZiAodHlwZW9mIHMuc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0ID09PSAndW5kZWZpbmVkJykgcy51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgICAgICAgICAgIGlmIChzLnJ0bCkgb2Zmc2V0Q2VudGVyID0gdHJhbnNsYXRlO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFZpc2libGUgU2xpZGVzXG4gICAgICAgICAgICBzLnNsaWRlcy5yZW1vdmVDbGFzcyhzLnBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlUHJvZ3Jlc3MgPSAob2Zmc2V0Q2VudGVyICsgKHMucGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gcy5taW5UcmFuc2xhdGUoKSA6IDApIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2Vlbik7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlQWZ0ZXIgPSBzbGlkZUJlZm9yZSArIHMuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNWaXNpYmxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIChzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDwgcy5zaXplKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlQWZ0ZXIgPiAwICYmIHNsaWRlQWZ0ZXIgPD0gcy5zaXplKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlQmVmb3JlIDw9IDAgJiYgc2xpZGVBZnRlciA+PSBzLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy5lcShpKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2xpZGUucHJvZ3Jlc3MgPSBzLnJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy51cGRhdGVQcm9ncmVzcyA9IGZ1bmN0aW9uICh0cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSA9IHMudHJhbnNsYXRlIHx8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzLm1heFRyYW5zbGF0ZSgpIC0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgIHZhciB3YXNCZWdpbm5pbmcgPSBzLmlzQmVnaW5uaW5nO1xuICAgICAgICAgICAgdmFyIHdhc0VuZCA9IHMuaXNFbmQ7XG4gICAgICAgICAgICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICBzLmlzQmVnaW5uaW5nID0gcy5pc0VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLnByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHMubWluVHJhbnNsYXRlKCkpIC8gKHRyYW5zbGF0ZXNEaWZmKTtcbiAgICAgICAgICAgICAgICBzLmlzQmVnaW5uaW5nID0gcy5wcm9ncmVzcyA8PSAwO1xuICAgICAgICAgICAgICAgIHMuaXNFbmQgPSBzLnByb2dyZXNzID49IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5pc0JlZ2lubmluZyAmJiAhd2FzQmVnaW5uaW5nKSBzLmVtaXQoJ29uUmVhY2hCZWdpbm5pbmcnLCBzKTtcbiAgICAgICAgICAgIGlmIChzLmlzRW5kICYmICF3YXNFbmQpIHMuZW1pdCgnb25SZWFjaEVuZCcsIHMpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSBzLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICBzLmVtaXQoJ29uUHJvZ3Jlc3MnLCBzLCBzLnByb2dyZXNzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBzLnJ0bCA/IHMudHJhbnNsYXRlIDogLXMudHJhbnNsYXRlO1xuICAgICAgICAgICAgdmFyIG5ld0FjdGl2ZUluZGV4LCBpLCBzbmFwSW5kZXg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcy5zbGlkZXNHcmlkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5zbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZSA+PSBzLnNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgcy5zbGlkZXNHcmlkW2kgKyAxXSAtIChzLnNsaWRlc0dyaWRbaSArIDFdIC0gcy5zbGlkZXNHcmlkW2ldKSAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0cmFuc2xhdGUgPj0gcy5zbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHMuc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGUgPj0gcy5zbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICAgICAgICAgICAgaWYocy5wYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCl7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0FjdGl2ZUluZGV4IDwgMCB8fCB0eXBlb2YgbmV3QWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSBuZXdBY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmb3IgKGkgPSAwOyBpIDwgcy5zbGlkZXNHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgKC0gdHJhbnNsYXRlID49IHMuc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdBY3RpdmVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgc25hcEluZGV4ID0gTWF0aC5mbG9vcihuZXdBY3RpdmVJbmRleCAvIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICAgIGlmIChzbmFwSW5kZXggPj0gcy5zbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHMuc25hcEdyaWQubGVuZ3RoIC0gMTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAobmV3QWN0aXZlSW5kZXggPT09IHMuYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLnNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgICAgICAgIHMucHJldmlvdXNJbmRleCA9IHMuYWN0aXZlSW5kZXg7XG4gICAgICAgICAgICBzLmFjdGl2ZUluZGV4ID0gbmV3QWN0aXZlSW5kZXg7XG4gICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUmVhbEluZGV4KCk7XG4gICAgICAgIH07XG4gICAgICAgIHMudXBkYXRlUmVhbEluZGV4ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHMucmVhbEluZGV4ID0gcGFyc2VJbnQocy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSB8fCBzLmFjdGl2ZUluZGV4LCAxMCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBDbGFzc2VzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy51cGRhdGVDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5zbGlkZXMucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyArICcgJyArIHMucGFyYW1zLnNsaWRlTmV4dENsYXNzICsgJyAnICsgcy5wYXJhbXMuc2xpZGVQcmV2Q2xhc3MgKyAnICcgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzICsgJyAnICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MgKyAnICcgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIC8vIEFjdGl2ZSBjbGFzc2VzXG4gICAgICAgICAgICBhY3RpdmVTbGlkZS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVTbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICc6bm90KC4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICcpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHMucmVhbEluZGV4ICsgJ1wiXScpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBzLnJlYWxJbmRleCArICdcIl0nKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOZXh0IFNsaWRlXG4gICAgICAgICAgICB2YXIgbmV4dFNsaWRlID0gYWN0aXZlU2xpZGUubmV4dCgnLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCAmJiBuZXh0U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcy5zbGlkZXMuZXEoMCk7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZXYgU2xpZGVcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2KCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wICYmIHByZXZTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUgPSBzLnNsaWRlcy5lcSgtMSk7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xuICAgICAgICAgICAgICAgIGlmIChuZXh0U2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnOm5vdCguJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArICdcIl0nKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICcuJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgJ1wiXScpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICc6bm90KC4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICcpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgJ1wiXScpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJy4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgcHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyAnXCJdJykuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBQYWdpbmF0aW9uXG4gICAgICAgICAgICBpZiAocy5wYWdpbmF0aW9uQ29udGFpbmVyICYmIHMucGFnaW5hdGlvbkNvbnRhaW5lci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3VycmVudC9Ub3RhbFxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbCA9IHMucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHMuc2xpZGVzLmxlbmd0aCAtIHMubG9vcGVkU2xpZGVzICogMikgLyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzLnNuYXBHcmlkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gTWF0aC5jZWlsKChzLmFjdGl2ZUluZGV4IC0gcy5sb29wZWRTbGlkZXMpL3MucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBzLnNsaWRlcy5sZW5ndGggLSAxIC0gcy5sb29wZWRTbGlkZXMgKiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCAtIChzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyAqIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID4gdG90YWwgLSAxKSBjdXJyZW50ID0gY3VycmVudCAtIHRvdGFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA8IDAgJiYgcy5wYXJhbXMucGFnaW5hdGlvblR5cGUgIT09ICdidWxsZXRzJykgY3VycmVudCA9IHRvdGFsICsgY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5zbmFwSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcy5zbmFwSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcy5hY3RpdmVJbmRleCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFR5cGVzXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAnYnVsbGV0cycgJiYgcy5idWxsZXRzICYmIHMuYnVsbGV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuYnVsbGV0cy5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5idWxsZXRzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmluZGV4KCkgPT09IGN1cnJlbnQpICQodGhpcykuYWRkQ2xhc3Mocy5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMuZXEoY3VycmVudCkuYWRkQ2xhc3Mocy5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuZmluZCgnLicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uQ3VycmVudENsYXNzKS50ZXh0KGN1cnJlbnQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmZpbmQoJy4nICsgcy5wYXJhbXMucGFnaW5hdGlvblRvdGFsQ2xhc3MpLnRleHQodG90YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdwcm9ncmVzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjYWxlID0gKGN1cnJlbnQgKyAxKSAvIHRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYID0gc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVkgPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWSA9IHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuZmluZCgnLicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzcykudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKCcgKyBzY2FsZVggKyAnKSBzY2FsZVkoJyArIHNjYWxlWSArICcpJykudHJhbnNpdGlvbihzLnBhcmFtcy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2N1c3RvbScgJiYgcy5wYXJhbXMucGFnaW5hdGlvbkN1c3RvbVJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuaHRtbChzLnBhcmFtcy5wYWdpbmF0aW9uQ3VzdG9tUmVuZGVyKHMsIGN1cnJlbnQgKyAxLCB0b3RhbCkpO1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uUGFnaW5hdGlvblJlbmRlcmVkJywgcywgcy5wYWdpbmF0aW9uQ29udGFpbmVyWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gTmV4dC9hY3RpdmUgYnV0dG9uc1xuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZCdXR0b24gJiYgcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnByZXZCdXR0b24uYWRkQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMuYTExeS5kaXNhYmxlKHMucHJldkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnByZXZCdXR0b24ucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMuYTExeS5lbmFibGUocy5wcmV2QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubmV4dEJ1dHRvbiAmJiBzLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvbi5hZGRDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmRpc2FibGUocy5uZXh0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvbi5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmVuYWJsZShzLm5leHRCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUGFnaW5hdGlvblxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMudXBkYXRlUGFnaW5hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMucGFnaW5hdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHMucGFnaW5hdGlvbkNvbnRhaW5lciAmJiBzLnBhZ2luYXRpb25Db250YWluZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uSFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2J1bGxldHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJPZkJ1bGxldHMgPSBzLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyAqIDIpIC8gcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogcy5zbmFwR3JpZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uQnVsbGV0UmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gcy5wYXJhbXMucGFnaW5hdGlvbkJ1bGxldFJlbmRlcihzLCBpLCBzLnBhcmFtcy5idWxsZXRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSAnPCcgKyBzLnBhcmFtcy5wYWdpbmF0aW9uRWxlbWVudCsnIGNsYXNzPVwiJyArIHMucGFyYW1zLmJ1bGxldENsYXNzICsgJ1wiPjwvJyArIHMucGFyYW1zLnBhZ2luYXRpb25FbGVtZW50ICsgJz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgcy5idWxsZXRzID0gcy5wYWdpbmF0aW9uQ29udGFpbmVyLmZpbmQoJy4nICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSAmJiBzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmluaXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uRnJhY3Rpb25SZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MID0gcy5wYXJhbXMucGFnaW5hdGlvbkZyYWN0aW9uUmVuZGVyKHMsIHMucGFyYW1zLnBhZ2luYXRpb25DdXJyZW50Q2xhc3MsIHMucGFyYW1zLnBhZ2luYXRpb25Ub3RhbENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgcy5wYXJhbXMucGFnaW5hdGlvbkN1cnJlbnRDbGFzcyArICdcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uVG90YWxDbGFzcysnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdwcm9ncmVzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25Qcm9ncmVzc1JlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NSZW5kZXIocywgcy5wYXJhbXMucGFnaW5hdGlvblByb2dyZXNzYmFyQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSAnPHNwYW4gY2xhc3M9XCInICsgcy5wYXJhbXMucGFnaW5hdGlvblByb2dyZXNzYmFyQ2xhc3MgKyAnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgIT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25QYWdpbmF0aW9uUmVuZGVyZWQnLCBzLCBzLnBhZ2luYXRpb25Db250YWluZXJbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgQ29tbW9uIHVwZGF0ZSBtZXRob2RcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnVwZGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplKCk7XG4gICAgICAgICAgICBzLnVwZGF0ZVNsaWRlc1NpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JjZVNldFRyYW5zbGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlID0gcy5ydGwgPyAtcy50cmFuc2xhdGUgOiBzLnRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heChzLnRyYW5zbGF0ZSwgcy5tYXhUcmFuc2xhdGUoKSksIHMubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1cGRhdGVUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlZCwgbmV3VHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgIGlmIChzLmNvbnRyb2xsZXIgJiYgcy5jb250cm9sbGVyLnNwbGluZSkge1xuICAgICAgICAgICAgICAgICAgICBzLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VTZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgcy5pc0VuZCAmJiAhcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWQgPSBzLnNsaWRlVG8ocy5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlZCA9IHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVNldFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUmVzaXplIEhhbmRsZXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLm9uUmVzaXplID0gZnVuY3Rpb24gKGZvcmNlVXBkYXRlUGFnaW5hdGlvbikge1xuICAgICAgICAgICAgLy9CcmVha3BvaW50c1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgcy5zZXRCcmVha3BvaW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRGlzYWJsZSBsb2NrcyBvbiByZXNpemVcbiAgICAgICAgICAgIHZhciBhbGxvd1N3aXBlVG9QcmV2ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldjtcbiAgICAgICAgICAgIHZhciBhbGxvd1N3aXBlVG9OZXh0ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dDtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPSBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgICAgICBzLnVwZGF0ZUNvbnRhaW5lclNpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSgpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzLnBhcmFtcy5mcmVlTW9kZSB8fCBmb3JjZVVwZGF0ZVBhZ2luYXRpb24pIHMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xuICAgICAgICAgICAgICAgIHMuc2Nyb2xsYmFyLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuY29udHJvbGxlciAmJiBzLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICAgICAgICAgICAgcy5jb250cm9sbGVyLnNwbGluZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzbGlkZUNoYW5nZWRCeVNsaWRlVG8gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heChzLnRyYW5zbGF0ZSwgcy5tYXhUcmFuc2xhdGUoKSksIHMubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICAgICAgaWYgKChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcy5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHMuaXNFbmQgJiYgIXMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ2hhbmdlZEJ5U2xpZGVUbyA9IHMuc2xpZGVUbyhzLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZWRCeVNsaWRlVG8gPSBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZyAmJiAhc2xpZGVDaGFuZ2VkQnlTbGlkZVRvICYmIHMubGF6eSkge1xuICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gYWxsb3dTd2lwZVRvUHJldjtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBhbGxvd1N3aXBlVG9OZXh0O1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgRXZlbnRzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgXG4gICAgICAgIC8vRGVmaW5lIFRvdWNoIEV2ZW50c1xuICAgICAgICBzLnRvdWNoRXZlbnRzRGVza3RvcCA9IHtzdGFydDogJ21vdXNlZG93bicsIG1vdmU6ICdtb3VzZW1vdmUnLCBlbmQ6ICdtb3VzZXVwJ307XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkKSBzLnRvdWNoRXZlbnRzRGVza3RvcCA9IHtzdGFydDogJ3BvaW50ZXJkb3duJywgbW92ZTogJ3BvaW50ZXJtb3ZlJywgZW5kOiAncG9pbnRlcnVwJ307XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCkgcy50b3VjaEV2ZW50c0Rlc2t0b3AgPSB7c3RhcnQ6ICdNU1BvaW50ZXJEb3duJywgbW92ZTogJ01TUG9pbnRlck1vdmUnLCBlbmQ6ICdNU1BvaW50ZXJVcCd9O1xuICAgICAgICBzLnRvdWNoRXZlbnRzID0ge1xuICAgICAgICAgICAgc3RhcnQgOiBzLnN1cHBvcnQudG91Y2ggfHwgIXMucGFyYW1zLnNpbXVsYXRlVG91Y2ggID8gJ3RvdWNoc3RhcnQnIDogcy50b3VjaEV2ZW50c0Rlc2t0b3Auc3RhcnQsXG4gICAgICAgICAgICBtb3ZlIDogcy5zdXBwb3J0LnRvdWNoIHx8ICFzLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gJ3RvdWNobW92ZScgOiBzLnRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLFxuICAgICAgICAgICAgZW5kIDogcy5zdXBwb3J0LnRvdWNoIHx8ICFzLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gJ3RvdWNoZW5kJyA6IHMudG91Y2hFdmVudHNEZXNrdG9wLmVuZFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIFdQOCBUb3VjaCBFdmVudHMgRml4XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkIHx8IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgKHMucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IHMuY29udGFpbmVyIDogcy53cmFwcGVyKS5hZGRDbGFzcygnc3dpcGVyLXdwOC0nICsgcy5wYXJhbXMuZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQXR0YWNoL2RldGFjaCBldmVudHNcbiAgICAgICAgcy5pbml0RXZlbnRzID0gZnVuY3Rpb24gKGRldGFjaCkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbkRvbSA9IGRldGFjaCA/ICdvZmYnIDogJ29uJztcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBkZXRhY2ggPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnYWRkRXZlbnRMaXN0ZW5lcic7XG4gICAgICAgICAgICB2YXIgdG91Y2hFdmVudHNUYXJnZXQgPSBzLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyBzLmNvbnRhaW5lclswXSA6IHMud3JhcHBlclswXTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLnN1cHBvcnQudG91Y2ggPyB0b3VjaEV2ZW50c1RhcmdldCA6IGRvY3VtZW50O1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBtb3ZlQ2FwdHVyZSA9IHMucGFyYW1zLm5lc3RlZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgICAgICAvL1RvdWNoIEV2ZW50c1xuICAgICAgICAgICAgaWYgKHMuYnJvd3Nlci5pZSkge1xuICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5zdGFydCwgcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbYWN0aW9uXShzLnRvdWNoRXZlbnRzLm1vdmUsIHMub25Ub3VjaE1vdmUsIG1vdmVDYXB0dXJlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbYWN0aW9uXShzLnRvdWNoRXZlbnRzLmVuZCwgcy5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBzLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcgJiYgcy5zdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzLnBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlfSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMuc3RhcnQsIHMub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMubW92ZSwgcy5vblRvdWNoTW92ZSwgbW92ZUNhcHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMuZW5kLCBzLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIXMuZGV2aWNlLmlvcyAmJiAhcy5kZXZpY2UuYW5kcm9pZCkgfHwgKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFzLnN1cHBvcnQudG91Y2ggJiYgcy5kZXZpY2UuaW9zKSkge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKCdtb3VzZWRvd24nLCBzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFthY3Rpb25dKCdtb3VzZW1vdmUnLCBzLm9uVG91Y2hNb3ZlLCBtb3ZlQ2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50W2FjdGlvbl0oJ21vdXNldXAnLCBzLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3dbYWN0aW9uXSgncmVzaXplJywgcy5vblJlc2l6ZSk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gTmV4dCwgUHJldiwgSW5kZXhcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbiAmJiBzLm5leHRCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvblthY3Rpb25Eb21dKCdjbGljaycsIHMub25DbGlja05leHQpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5uZXh0QnV0dG9uW2FjdGlvbkRvbV0oJ2tleWRvd24nLCBzLmExMXkub25FbnRlcktleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24gJiYgcy5wcmV2QnV0dG9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzLnByZXZCdXR0b25bYWN0aW9uRG9tXSgnY2xpY2snLCBzLm9uQ2xpY2tQcmV2KTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMucHJldkJ1dHRvblthY3Rpb25Eb21dKCdrZXlkb3duJywgcy5hMTF5Lm9uRW50ZXJLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb24gJiYgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSkge1xuICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lclthY3Rpb25Eb21dKCdjbGljaycsICcuJyArIHMucGFyYW1zLmJ1bGxldENsYXNzLCBzLm9uQ2xpY2tJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLnBhZ2luYXRpb25Db250YWluZXJbYWN0aW9uRG9tXSgna2V5ZG93bicsICcuJyArIHMucGFyYW1zLmJ1bGxldENsYXNzLCBzLmExMXkub25FbnRlcktleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gUHJldmVudCBMaW5rcyBDbGlja3NcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHMucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikgdG91Y2hFdmVudHNUYXJnZXRbYWN0aW9uXSgnY2xpY2snLCBzLnByZXZlbnRDbGlja3MsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBzLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMuaW5pdEV2ZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBzLmRldGFjaEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMuaW5pdEV2ZW50cyh0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEhhbmRsZSBDbGlja3NcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvLyBQcmV2ZW50IENsaWNrc1xuICAgICAgICBzLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgICAgICBzLnByZXZlbnRDbGlja3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCFzLmFsbG93Q2xpY2spIHtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldmVudENsaWNrcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24gJiYgcy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIENsaWNrc1xuICAgICAgICBzLm9uQ2xpY2tOZXh0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChzLmlzRW5kICYmICFzLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgICAgICAgICBzLnNsaWRlTmV4dCgpO1xuICAgICAgICB9O1xuICAgICAgICBzLm9uQ2xpY2tQcmV2ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChzLmlzQmVnaW5uaW5nICYmICFzLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgICAgICAgICBzLnNsaWRlUHJldigpO1xuICAgICAgICB9O1xuICAgICAgICBzLm9uQ2xpY2tJbmRleCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCkgKiBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSBpbmRleCA9IGluZGV4ICsgcy5sb29wZWRTbGlkZXM7XG4gICAgICAgICAgICBzLnNsaWRlVG8oaW5kZXgpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgSGFuZGxlIFRvdWNoZXNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiBmaW5kRWxlbWVudEluRXZlbnQoZSwgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQoZS50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCFlbC5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudHMoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3Rvci5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudHMoKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgX2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2VsID09PSBzZWxlY3RvcikgZm91bmQgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsWzBdO1xuICAgICAgICB9XG4gICAgICAgIHMudXBkYXRlQ2xpY2tlZFNsaWRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZSA9IGZpbmRFbGVtZW50SW5FdmVudChlLCAnLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICAgICAgICAgIHZhciBzbGlkZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHNsaWRlRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoc2xpZGUgJiYgc2xpZGVGb3VuZCkge1xuICAgICAgICAgICAgICAgIHMuY2xpY2tlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgcy5jbGlja2VkSW5kZXggPSAkKHNsaWRlKS5pbmRleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcy5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlVG9DbGlja2VkU2xpZGUgJiYgcy5jbGlja2VkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBzLmNsaWNrZWRJbmRleCAhPT0gcy5hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZVRvSW5kZXggPSBzLmNsaWNrZWRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgcmVhbEluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkdXBsaWNhdGVkU2xpZGVzLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3ID0gcy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gcy5jdXJyZW50U2xpZGVzUGVyVmlldygpIDogcy5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5hbmltYXRpbmcpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgcmVhbEluZGV4ID0gcGFyc2VJbnQoJChzLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2xpZGVUb0luZGV4IDwgcy5sb29wZWRTbGlkZXMgLSBzbGlkZXNQZXJWaWV3LzIpIHx8IChzbGlkZVRvSW5kZXggPiBzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyArIHNsaWRlc1BlclZpZXcvMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmZpeExvb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVRvSW5kZXggPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgcmVhbEluZGV4ICsgJ1wiXTpub3QoLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJyknKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlVG9JbmRleCA+IHMuc2xpZGVzLmxlbmd0aCAtIHNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmZpeExvb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVRvSW5kZXggPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgcmVhbEluZGV4ICsgJ1wiXTpub3QoLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJyknKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB2YXIgaXNUb3VjaGVkLFxuICAgICAgICAgICAgaXNNb3ZlZCxcbiAgICAgICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3MsXG4gICAgICAgICAgICB0b3VjaFN0YXJ0VGltZSxcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nLFxuICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSxcbiAgICAgICAgICAgIHN0YXJ0VHJhbnNsYXRlLFxuICAgICAgICAgICAgYWxsb3dUaHJlc2hvbGRNb3ZlLFxuICAgICAgICAgICAgLy8gRm9ybSBlbGVtZW50cyB0byBtYXRjaFxuICAgICAgICAgICAgZm9ybUVsZW1lbnRzID0gJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24sIHZpZGVvJyxcbiAgICAgICAgICAgIC8vIExhc3QgY2xpY2sgdGltZVxuICAgICAgICAgICAgbGFzdENsaWNrVGltZSA9IERhdGUubm93KCksIGNsaWNrVGltZW91dCxcbiAgICAgICAgICAgIC8vVmVsb2NpdGllc1xuICAgICAgICAgICAgdmVsb2NpdGllcyA9IFtdLFxuICAgICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFuaW1hdGluZyBGbGFnXG4gICAgICAgIHMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAvLyBUb3VjaGVzIGluZm9ybWF0aW9uXG4gICAgICAgIHMudG91Y2hlcyA9IHtcbiAgICAgICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICAgICAgY3VycmVudFk6IDAsXG4gICAgICAgICAgICBkaWZmOiAwXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBUb3VjaCBoYW5kbGVyc1xuICAgICAgICB2YXIgaXNUb3VjaEV2ZW50LCBzdGFydE1vdmluZztcbiAgICAgICAgcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICAgIGlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnO1xuICAgICAgICAgICAgaWYgKCFpc1RvdWNoRXZlbnQgJiYgJ3doaWNoJyBpbiBlICYmIGUud2hpY2ggPT09IDMpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5ub1N3aXBpbmcgJiYgZmluZEVsZW1lbnRJbkV2ZW50KGUsICcuJyArIHMucGFyYW1zLm5vU3dpcGluZ0NsYXNzKSkge1xuICAgICAgICAgICAgICAgIHMuYWxsb3dDbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnN3aXBlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGlmICghZmluZEVsZW1lbnRJbkV2ZW50KGUsIHMucGFyYW1zLnN3aXBlSGFuZGxlcikpIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RhcnRYID0gcy50b3VjaGVzLmN1cnJlbnRYID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICAgICAgdmFyIHN0YXJ0WSA9IHMudG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIChVSVdlYlZpZXcpIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcbiAgICAgICAgICAgIGlmKHMuZGV2aWNlLmlvcyAmJiBzLnBhcmFtcy5pT1NFZGdlU3dpcGVEZXRlY3Rpb24gJiYgc3RhcnRYIDw9IHMucGFyYW1zLmlPU0VkZ2VTd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpc1RvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrcyA9IHRydWU7XG4gICAgICAgICAgICBpc1Njcm9sbGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN0YXJ0TW92aW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplKCk7XG4gICAgICAgICAgICBzLnN3aXBlRGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnRocmVzaG9sZCA+IDApIGFsbG93VGhyZXNob2xkTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaXMoZm9ybUVsZW1lbnRzKSkgcHJldmVudERlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGZvcm1FbGVtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5lbWl0KCdvblRvdWNoU3RhcnQnLCBzLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgZS50eXBlID09PSAnbW91c2Vtb3ZlJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpIHtcbiAgICAgICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRYID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5vbmx5RXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAvLyBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFggPSBzLnRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WSA9IHMudG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgcy5wYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcyAmJiAhcy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIGlmICghcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBWZXJ0aWNhbFxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAocy50b3VjaGVzLmN1cnJlbnRZIDwgcy50b3VjaGVzLnN0YXJ0WSAmJiBzLnRyYW5zbGF0ZSA8PSBzLm1heFRyYW5zbGF0ZSgpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHMudG91Y2hlcy5jdXJyZW50WSA+IHMudG91Y2hlcy5zdGFydFkgJiYgcy50cmFuc2xhdGUgPj0gcy5taW5UcmFuc2xhdGUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAocy50b3VjaGVzLmN1cnJlbnRYIDwgcy50b3VjaGVzLnN0YXJ0WCAmJiBzLnRyYW5zbGF0ZSA8PSBzLm1heFRyYW5zbGF0ZSgpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHMudG91Y2hlcy5jdXJyZW50WCA+IHMudG91Y2hlcy5zdGFydFggJiYgcy50cmFuc2xhdGUgPj0gcy5taW5UcmFuc2xhdGUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzVG91Y2hFdmVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICQoZS50YXJnZXQpLmlzKGZvcm1FbGVtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHMuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVG91Y2hNb3ZlJywgcywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgcy50b3VjaGVzLmN1cnJlbnRYID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICBzLnRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlzU2Nyb2xsaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaEFuZ2xlO1xuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpICYmIHMudG91Y2hlcy5jdXJyZW50WSA9PT0gcy50b3VjaGVzLnN0YXJ0WSB8fCAhcy5pc0hvcml6b250YWwoKSAmJiBzLnRvdWNoZXMuY3VycmVudFggPT09IHMudG91Y2hlcy5zdGFydFgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoQW5nbGUgPSBNYXRoLmF0YW4yKE1hdGguYWJzKHMudG91Y2hlcy5jdXJyZW50WSAtIHMudG91Y2hlcy5zdGFydFkpLCBNYXRoLmFicyhzLnRvdWNoZXMuY3VycmVudFggLSBzLnRvdWNoZXMuc3RhcnRYKSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICBpc1Njcm9sbGluZyA9IHMuaXNIb3Jpem9udGFsKCkgPyB0b3VjaEFuZ2xlID4gcy5wYXJhbXMudG91Y2hBbmdsZSA6ICg5MCAtIHRvdWNoQW5nbGUgPiBzLnBhcmFtcy50b3VjaEFuZ2xlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVG91Y2hNb3ZlT3Bwb3NpdGUnLCBzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnICYmIHMuYnJvd3Nlci5pZVRvdWNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMudG91Y2hlcy5jdXJyZW50WCAhPT0gcy50b3VjaGVzLnN0YXJ0WCB8fCBzLnRvdWNoZXMuY3VycmVudFkgIT09IHMudG91Y2hlcy5zdGFydFkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNUb3VjaGVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoaXNTY3JvbGxpbmcpICB7XG4gICAgICAgICAgICAgICAgaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGFydE1vdmluZyAmJiBzLmJyb3dzZXIuaWVUb3VjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlck1vdmUnLCBzLCBlKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24gJiYgIXMucGFyYW1zLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGFydFRyYW5zbGF0ZSA9IHMuZ2V0V3JhcHBlclRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24oMCk7XG4gICAgICAgICAgICAgICAgaWYgKHMuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmlnZ2VyKCd3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kIG1zVHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXkgJiYgcy5hdXRvcGxheWluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucGF1c2VBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL0dyYWIgQ3Vyc29yXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IgJiYgKHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPT09IHRydWUgfHwgcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zZXRHcmFiQ3Vyc29yKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBkaWZmID0gcy50b3VjaGVzLmRpZmYgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy50b3VjaGVzLmN1cnJlbnRYIC0gcy50b3VjaGVzLnN0YXJ0WCA6IHMudG91Y2hlcy5jdXJyZW50WSAtIHMudG91Y2hlcy5zdGFydFk7XG4gICAgICAgIFxuICAgICAgICAgICAgZGlmZiA9IGRpZmYgKiBzLnBhcmFtcy50b3VjaFJhdGlvO1xuICAgICAgICAgICAgaWYgKHMucnRsKSBkaWZmID0gLWRpZmY7XG4gICAgICAgIFxuICAgICAgICAgICAgcy5zd2lwZURpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ3ByZXYnIDogJ25leHQnO1xuICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBzdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKGRpZmYgPiAwICYmIGN1cnJlbnRUcmFuc2xhdGUgPiBzLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgICAgICAgICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucmVzaXN0YW5jZSkgY3VycmVudFRyYW5zbGF0ZSA9IHMubWluVHJhbnNsYXRlKCkgLSAxICsgTWF0aC5wb3coLXMubWluVHJhbnNsYXRlKCkgKyBzdGFydFRyYW5zbGF0ZSArIGRpZmYsIHMucGFyYW1zLnJlc2lzdGFuY2VSYXRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaWZmIDwgMCAmJiBjdXJyZW50VHJhbnNsYXRlIDwgcy5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucmVzaXN0YW5jZSkgY3VycmVudFRyYW5zbGF0ZSA9IHMubWF4VHJhbnNsYXRlKCkgKyAxIC0gTWF0aC5wb3cocy5tYXhUcmFuc2xhdGUoKSAtIHN0YXJ0VHJhbnNsYXRlIC0gZGlmZiwgcy5wYXJhbXMucmVzaXN0YW5jZVJhdGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xuICAgICAgICAgICAgICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCAmJiBzLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgY3VycmVudFRyYW5zbGF0ZSA8IHN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IHN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ICYmIHMuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBjdXJyZW50VHJhbnNsYXRlID4gc3RhcnRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlID0gc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIC8vIFRocmVzaG9sZFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnRocmVzaG9sZCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiBzLnBhcmFtcy50aHJlc2hvbGQgfHwgYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WCA9IHMudG91Y2hlcy5jdXJyZW50WDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFkgPSBzLnRvdWNoZXMuY3VycmVudFk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlID0gc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnRvdWNoZXMuZGlmZiA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLnRvdWNoZXMuY3VycmVudFggLSBzLnRvdWNoZXMuc3RhcnRYIDogcy50b3VjaGVzLmN1cnJlbnRZIC0gcy50b3VjaGVzLnN0YXJ0WTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IHN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuZm9sbG93RmluZ2VyKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIGFjdGl2ZSBpbmRleCBpbiBmcmVlIG1vZGVcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSB8fCBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgICAgICAgICAgLy9WZWxvY2l0eVxuICAgICAgICAgICAgICAgIGlmICh2ZWxvY2l0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHMudG91Y2hlc1tzLmlzSG9yaXpvbnRhbCgpID8gJ3N0YXJ0WCcgOiAnc3RhcnRZJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB0b3VjaFN0YXJ0VGltZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmVsb2NpdGllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHMudG91Y2hlc1tzLmlzSG9yaXpvbnRhbCgpID8gJ2N1cnJlbnRYJyA6ICdjdXJyZW50WSddLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAobmV3IHdpbmRvdy5EYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHByb2dyZXNzXG4gICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKGN1cnJlbnRUcmFuc2xhdGUpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRyYW5zbGF0ZVxuICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKGN1cnJlbnRUcmFuc2xhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBzLm9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICAgIGlmIChhbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblRvdWNoRW5kJywgcywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWlzVG91Y2hlZCkgcmV0dXJuO1xuICAgICAgICAgICAgLy9SZXR1cm4gR3JhYiBDdXJzb3JcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5ncmFiQ3Vyc29yICYmIGlzTW92ZWQgJiYgaXNUb3VjaGVkICAmJiAocy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9PT0gdHJ1ZSB8fCBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHMuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVGltZSBkaWZmXG4gICAgICAgICAgICB2YXIgdG91Y2hFbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIHRvdWNoU3RhcnRUaW1lO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuICAgICAgICAgICAgaWYgKHMuYWxsb3dDbGljaykge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQ2xpY2tlZFNsaWRlKGUpO1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25UYXAnLCBzLCBlKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgKHRvdWNoRW5kVGltZSAtIGxhc3RDbGlja1RpbWUpID4gMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGlja1RpbWVvdXQpIGNsZWFyVGltZW91dChjbGlja1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBjbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25IaWRlICYmIHMucGFnaW5hdGlvbkNvbnRhaW5lci5sZW5ndGggPiAwICYmICEkKGUudGFyZ2V0KS5oYXNDbGFzcyhzLnBhcmFtcy5idWxsZXRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIudG9nZ2xlQ2xhc3Mocy5wYXJhbXMucGFnaW5hdGlvbkhpZGRlbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25DbGljaycsIHMsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmICh0b3VjaEVuZFRpbWUgLSBsYXN0Q2xpY2tUaW1lKSA8IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tUaW1lb3V0KSBjbGVhclRpbWVvdXQoY2xpY2tUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkRvdWJsZVRhcCcsIHMsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBsYXN0Q2xpY2tUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzKSBzLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpc1RvdWNoZWQgfHwgIWlzTW92ZWQgfHwgIXMuc3dpcGVEaXJlY3Rpb24gfHwgcy50b3VjaGVzLmRpZmYgPT09IDAgfHwgY3VycmVudFRyYW5zbGF0ZSA9PT0gc3RhcnRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICBpc1RvdWNoZWQgPSBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNUb3VjaGVkID0gaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBjdXJyZW50UG9zO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgPSBzLnJ0bCA/IHMudHJhbnNsYXRlIDogLXMudHJhbnNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvcyA9IC1jdXJyZW50VHJhbnNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3MgPCAtcy5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFBvcyA+IC1zLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlcy5sZW5ndGggPCBzLnNuYXBHcmlkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuc25hcEdyaWQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5zbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlbG9jaXRpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RNb3ZlRXZlbnQgPSB2ZWxvY2l0aWVzLnBvcCgpLCB2ZWxvY2l0eUV2ZW50ID0gdmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBsYXN0TW92ZUV2ZW50LnBvc2l0aW9uIC0gdmVsb2NpdHlFdmVudC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lID0gbGFzdE1vdmVFdmVudC50aW1lIC0gdmVsb2NpdHlFdmVudC50aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IGRpc3RhbmNlIC8gdGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSBzLnZlbG9jaXR5IC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzLnZlbG9jaXR5KSA8IHMucGFyYW1zLmZyZWVNb2RlTWluaW11bVZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgd291bGQgYmUgbm8gZXZlbnRzIHdpdGggZGlzdGFuY2UgemVybywgc28gdGhlIGxhc3QgZXZlbnQgaXMgc3RhbGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+IDE1MCB8fCAobmV3IHdpbmRvdy5EYXRlKCkuZ2V0VGltZSgpIC0gbGFzdE1vdmVFdmVudC50aW1lKSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IHMudmVsb2NpdHkgKiBzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bVJhdGlvO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZSA9IHMudmVsb2NpdHkgKiBtb21lbnR1bUR1cmF0aW9uO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gcy50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIG5ld1Bvc2l0aW9uID0gLSBuZXdQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvQm91bmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhZnRlckJvdW5jZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm91bmNlQW1vdW50ID0gTWF0aC5hYnMocy52ZWxvY2l0eSkgKiAyMCAqIHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIDwgcy5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UG9zaXRpb24gKyBzLm1heFRyYW5zbGF0ZSgpIDwgLWJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMubWF4VHJhbnNsYXRlKCkgLSBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdQb3NpdGlvbiA+IHMubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIC0gcy5taW5UcmFuc2xhdGUoKSA+IGJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGogPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBzLnNuYXBHcmlkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuc25hcEdyaWRbal0gPiAtbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzLnNuYXBHcmlkW25leHRTbGlkZV0gLSBuZXdQb3NpdGlvbikgPCBNYXRoLmFicyhzLnNuYXBHcmlkW25leHRTbGlkZSAtIDFdIC0gbmV3UG9zaXRpb24pIHx8IHMuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5zbmFwR3JpZFtuZXh0U2xpZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMuc25hcEdyaWRbbmV4dFNsaWRlIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMucnRsKSBuZXdQb3NpdGlvbiA9IC0gbmV3UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9GaXggZHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHMudmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygoLW5ld1Bvc2l0aW9uIC0gcy50cmFuc2xhdGUpIC8gcy52ZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uIC0gcy50cmFuc2xhdGUpIC8gcy52ZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy5wYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVSZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSAmJiBkb0JvdW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyhhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUobmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcyB8fCAhYWxsb3dNb21lbnR1bUJvdW5jZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25Nb21lbnR1bUJvdW5jZScsIHMpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKHMucGFyYW1zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHMudmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MobmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLm9uVHJhbnNpdGlvblN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtIHx8IHRpbWVEaWZmID49IHMucGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIEZpbmQgY3VycmVudCBzbGlkZVxuICAgICAgICAgICAgdmFyIGksIHN0b3BJbmRleCA9IDAsIGdyb3VwU2l6ZSA9IHMuc2xpZGVzU2l6ZXNHcmlkWzBdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHMuc2xpZGVzR3JpZFtpICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvcyA+PSBzLnNsaWRlc0dyaWRbaV0gJiYgY3VycmVudFBvcyA8IHMuc2xpZGVzR3JpZFtpICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBTaXplID0gcy5zbGlkZXNHcmlkW2kgKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cF0gLSBzLnNsaWRlc0dyaWRbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9zID49IHMuc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwU2l6ZSA9IHMuc2xpZGVzR3JpZFtzLnNsaWRlc0dyaWQubGVuZ3RoIC0gMV0gLSBzLnNsaWRlc0dyaWRbcy5zbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIEZpbmQgY3VycmVudCBzbGlkZSBzaXplXG4gICAgICAgICAgICB2YXIgcmF0aW8gPSAoY3VycmVudFBvcyAtIHMuc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAodGltZURpZmYgPiBzLnBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAgICAgICAgICAgICAvLyBMb25nIHRvdWNoZXNcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLmxvbmdTd2lwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhdGlvID49IHMucGFyYW1zLmxvbmdTd2lwZXNSYXRpbykgcy5zbGlkZVRvKHN0b3BJbmRleCArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBzLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhdGlvID4gKDEgLSBzLnBhcmFtcy5sb25nU3dpcGVzUmF0aW8pKSBzLnNsaWRlVG8oc3RvcEluZGV4ICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHMuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNob3J0IHN3aXBlc1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHN0b3BJbmRleCArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBUcmFuc2l0aW9uc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuX3NsaWRlVG8gPSBmdW5jdGlvbiAoc2xpZGVJbmRleCwgc3BlZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnNsaWRlVG8oc2xpZGVJbmRleCwgc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBzLnNsaWRlVG8gPSBmdW5jdGlvbiAoc2xpZGVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcnVuQ2FsbGJhY2tzID09PSAndW5kZWZpbmVkJykgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHNsaWRlSW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPCAwKSBzbGlkZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHMuc25hcEluZGV4ID0gTWF0aC5mbG9vcihzbGlkZUluZGV4IC8gcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICAgICAgaWYgKHMuc25hcEluZGV4ID49IHMuc25hcEdyaWQubGVuZ3RoKSBzLnNuYXBJbmRleCA9IHMuc25hcEdyaWQubGVuZ3RoIC0gMTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlID0gLSBzLnNuYXBHcmlkW3Muc25hcEluZGV4XTtcbiAgICAgICAgICAgIC8vIFN0b3AgYXV0b3BsYXlcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hdXRvcGxheSAmJiBzLmF1dG9wbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGludGVybmFsIHx8ICFzLnBhcmFtcy5hdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucGF1c2VBdXRvcGxheShzcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzLnN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG4gICAgICAgICAgICBpZihzLnBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KXtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzR3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoLSBNYXRoLmZsb29yKHRyYW5zbGF0ZSAqIDEwMCkgPj0gTWF0aC5mbG9vcihzLnNsaWRlc0dyaWRbaV0gKiAxMDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgJiYgdHJhbnNsYXRlIDwgcy50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgcy5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiAmJiB0cmFuc2xhdGUgPiBzLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzLmFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4ICkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBJbmRleFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHNwZWVkID0gcy5wYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgICBzLnByZXZpb3VzSW5kZXggPSBzLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgICAgICAgICBzLmFjdGl2ZUluZGV4ID0gc2xpZGVJbmRleDtcbiAgICAgICAgICAgIHMudXBkYXRlUmVhbEluZGV4KCk7XG4gICAgICAgICAgICBpZiAoKHMucnRsICYmIC10cmFuc2xhdGUgPT09IHMudHJhbnNsYXRlKSB8fCAoIXMucnRsICYmIHRyYW5zbGF0ZSA9PT0gcy50cmFuc2xhdGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEhlaWdodFxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIHMub25UcmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BlZWQgPT09IDAgfHwgcy5icm93c2VyLmx0ZUlFOSkge1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24oMCk7XG4gICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24oc3BlZWQpO1xuICAgICAgICAgICAgICAgIGlmICghcy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMub25UcmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLm9uVHJhbnNpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBydW5DYWxsYmFja3MgPT09ICd1bmRlZmluZWQnKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmxhenkpIHMubGF6eS5vblRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICAgICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25UcmFuc2l0aW9uU3RhcnQnLCBzKTtcbiAgICAgICAgICAgICAgICBpZiAocy5hY3RpdmVJbmRleCAhPT0gcy5wcmV2aW91c0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZUNoYW5nZVN0YXJ0Jywgcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmFjdGl2ZUluZGV4ID4gcy5wcmV2aW91c0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVOZXh0U3RhcnQnLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZVByZXZTdGFydCcsIHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcnVuQ2FsbGJhY2tzID09PSAndW5kZWZpbmVkJykgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzLmxhenkpIHMubGF6eS5vblRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVHJhbnNpdGlvbkVuZCcsIHMpO1xuICAgICAgICAgICAgICAgIGlmIChzLmFjdGl2ZUluZGV4ICE9PSBzLnByZXZpb3VzSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlQ2hhbmdlRW5kJywgcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmFjdGl2ZUluZGV4ID4gcy5wcmV2aW91c0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVOZXh0RW5kJywgcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVQcmV2RW5kJywgcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuaGlzdG9yeSAmJiBzLmhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICBzLmhpc3Rvcnkuc2V0SGlzdG9yeShzLnBhcmFtcy5oaXN0b3J5LCBzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5oYXNobmF2ICYmIHMuaGFzaG5hdikge1xuICAgICAgICAgICAgICAgIHMuaGFzaG5hdi5zZXRIYXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBzLnNsaWRlTmV4dCA9IGZ1bmN0aW9uIChydW5DYWxsYmFja3MsIHNwZWVkLCBpbnRlcm5hbCkge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5hbmltYXRpbmcpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBzLmZpeExvb3AoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50TGVmdCA9IHMuY29udGFpbmVyWzBdLmNsaWVudExlZnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4ICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4ICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5fc2xpZGVOZXh0ID0gZnVuY3Rpb24gKHNwZWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5zbGlkZU5leHQodHJ1ZSwgc3BlZWQsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBzLnNsaWRlUHJldiA9IGZ1bmN0aW9uIChydW5DYWxsYmFja3MsIHNwZWVkLCBpbnRlcm5hbCkge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5hbmltYXRpbmcpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBzLmZpeExvb3AoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50TGVmdCA9IHMuY29udGFpbmVyWzBdLmNsaWVudExlZnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4IC0gMSwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggLSAxLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgICAgIH07XG4gICAgICAgIHMuX3NsaWRlUHJldiA9IGZ1bmN0aW9uIChzcGVlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHMuc2xpZGVQcmV2KHRydWUsIHNwZWVkLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5zbGlkZVJlc2V0ID0gZnVuY3Rpb24gKHJ1bkNhbGxiYWNrcywgc3BlZWQsIGludGVybmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5kaXNhYmxlVG91Y2hDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMub25seUV4dGVybmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBzLmVuYWJsZVRvdWNoQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLm9ubHlFeHRlcm5hbCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBUcmFuc2xhdGUvdHJhbnNpdGlvbiBoZWxwZXJzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnICYmIHMuZWZmZWN0c1tzLnBhcmFtcy5lZmZlY3RdKSB7XG4gICAgICAgICAgICAgICAgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0uc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucGFyYWxsYXggJiYgcy5wYXJhbGxheCkge1xuICAgICAgICAgICAgICAgIHMucGFyYWxsYXguc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuY29udHJvbCAmJiBzLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBzLmNvbnRyb2xsZXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuZW1pdCgnb25TZXRUcmFuc2l0aW9uJywgcywgZHVyYXRpb24pO1xuICAgICAgICB9O1xuICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUgPSBmdW5jdGlvbiAodHJhbnNsYXRlLCB1cGRhdGVBY3RpdmVJbmRleCwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCB6ID0gMDtcbiAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgeCA9IHMucnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHkgPSB0cmFuc2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgICAgICAgICAgICAgIHggPSByb3VuZCh4KTtcbiAgICAgICAgICAgICAgICB5ID0gcm91bmQoeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC50cmFuc2Zvcm1zM2QpIHMud3JhcHBlci50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCwgJyArIHogKyAncHgpJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBzLndyYXBwZXIudHJhbnNmb3JtKCd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4KScpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHMudHJhbnNsYXRlID0gcy5pc0hvcml6b250YWwoKSA/IHggOiB5O1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3M7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzLm1heFRyYW5zbGF0ZSgpIC0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHMubWluVHJhbnNsYXRlKCkpIC8gKHRyYW5zbGF0ZXNEaWZmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcy5wcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAodXBkYXRlQWN0aXZlSW5kZXgpIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScgJiYgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0pIHtcbiAgICAgICAgICAgICAgICBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XS5zZXRUcmFuc2xhdGUocy50cmFuc2xhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhcmFsbGF4ICYmIHMucGFyYWxsYXgpIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFsbGF4LnNldFRyYW5zbGF0ZShzLnRyYW5zbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0VHJhbnNsYXRlKHMudHJhbnNsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jb250cm9sICYmIHMuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIHMuY29udHJvbGxlci5zZXRUcmFuc2xhdGUocy50cmFuc2xhdGUsIGJ5Q29udHJvbGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLmVtaXQoJ29uU2V0VHJhbnNsYXRlJywgcywgcy50cmFuc2xhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5nZXRUcmFuc2xhdGUgPSBmdW5jdGlvbiAoZWwsIGF4aXMpIHtcbiAgICAgICAgICAgIHZhciBtYXRyaXgsIGN1clRyYW5zZm9ybSwgY3VyU3R5bGUsIHRyYW5zZm9ybU1hdHJpeDtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBhdXRvbWF0aWMgYXhpcyBkZXRlY3Rpb25cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gJ3gnO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMucnRsID8gLXMudHJhbnNsYXRlIDogcy50cmFuc2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY3VyU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG4gICAgICAgICAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkge1xuICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS53ZWJraXRUcmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtLnNwbGl0KCcsICcpLm1hcChmdW5jdGlvbihhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnJlcGxhY2UoJywnLCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAgICAgICAgICAgICAvLyBlbXB0eSBzdHJpbmcgaW5zdGVhZCBpbiB0aGlzIGNhc2VcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luZG93LldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IGN1clN0eWxlLk1velRyYW5zZm9ybSB8fCBjdXJTdHlsZS5PVHJhbnNmb3JtIHx8IGN1clN0eWxlLk1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLm1zVHJhbnNmb3JtICB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICAgICAgICAgICAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAvL0xhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpXG4gICAgICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7XG4gICAgICAgICAgICAgICAgLy9DcmF6eSBJRTEwIE1hdHJpeFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxMl0pO1xuICAgICAgICAgICAgICAgIC8vTm9ybWFsIEJyb3dzZXJzXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgLy9MYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQyO1xuICAgICAgICAgICAgICAgIC8vQ3JhenkgSUUxMCBNYXRyaXhcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNilcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTNdKTtcbiAgICAgICAgICAgICAgICAvL05vcm1hbCBCcm93c2Vyc1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucnRsICYmIGN1clRyYW5zZm9ybSkgY3VyVHJhbnNmb3JtID0gLWN1clRyYW5zZm9ybTtcbiAgICAgICAgICAgIHJldHVybiBjdXJUcmFuc2Zvcm0gfHwgMDtcbiAgICAgICAgfTtcbiAgICAgICAgcy5nZXRXcmFwcGVyVHJhbnNsYXRlID0gZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzLmdldFRyYW5zbGF0ZShzLndyYXBwZXJbMF0sIGF4aXMpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgT2JzZXJ2ZXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBpbml0T2JzZXJ2ZXIodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZVxuICAgICAgICAgICAgdmFyIE9ic2VydmVyRnVuYyA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyO1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE9ic2VydmVyRnVuYyhmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHMub25SZXNpemUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25PYnNlcnZlclVwZGF0ZScsIHMsIG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoaWxkTGlzdCxcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0eXBlb2Ygb3B0aW9ucy5jaGFyYWN0ZXJEYXRhID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoYXJhY3RlckRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIHMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHMuaW5pdE9ic2VydmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5vYnNlcnZlUGFyZW50cykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJQYXJlbnRzID0gcy5jb250YWluZXIucGFyZW50cygpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpbml0T2JzZXJ2ZXIoY29udGFpbmVyUGFyZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIE9ic2VydmUgY29udGFpbmVyXG4gICAgICAgICAgICBpbml0T2JzZXJ2ZXIocy5jb250YWluZXJbMF0sIHtjaGlsZExpc3Q6IGZhbHNlfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gT2JzZXJ2ZSB3cmFwcGVyXG4gICAgICAgICAgICBpbml0T2JzZXJ2ZXIocy53cmFwcGVyWzBdLCB7YXR0cmlidXRlczogZmFsc2V9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5kaXNjb25uZWN0T2JzZXJ2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLm9ic2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHMub2JzZXJ2ZXJzW2ldLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIH07XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIExvb3BcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvLyBDcmVhdGUgbG9vcGVkIHNsaWRlc1xuICAgICAgICBzLmNyZWF0ZUxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlZCBzbGlkZXNcbiAgICAgICAgICAgIHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJy4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykucmVtb3ZlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHNsaWRlcyA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZihzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgIXMucGFyYW1zLmxvb3BlZFNsaWRlcykgcy5wYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgICAgICBzLmxvb3BlZFNsaWRlcyA9IHBhcnNlSW50KHMucGFyYW1zLmxvb3BlZFNsaWRlcyB8fCBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCk7XG4gICAgICAgICAgICBzLmxvb3BlZFNsaWRlcyA9IHMubG9vcGVkU2xpZGVzICsgcy5wYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG4gICAgICAgICAgICBpZiAocy5sb29wZWRTbGlkZXMgPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcy5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHZhciBwcmVwZW5kU2xpZGVzID0gW10sIGFwcGVuZFNsaWRlcyA9IFtdLCBpO1xuICAgICAgICAgICAgc2xpZGVzLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbCkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgcy5sb29wZWRTbGlkZXMpIGFwcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBzbGlkZXMubGVuZ3RoICYmIGluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcykgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci5hcHBlbmQoJChhcHBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSBwcmVwZW5kU2xpZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnByZXBlbmQoJChwcmVwZW5kU2xpZGVzW2ldLmNsb25lTm9kZSh0cnVlKSkuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzLmRlc3Ryb3lMb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHMuc2xpZGVzLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICAgIH07XG4gICAgICAgIHMucmVMb29wID0gZnVuY3Rpb24gKHVwZGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgb2xkSW5kZXggPSBzLmFjdGl2ZUluZGV4IC0gcy5sb29wZWRTbGlkZXM7XG4gICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XG4gICAgICAgICAgICBzLmNyZWF0ZUxvb3AoKTtcbiAgICAgICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSgpO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKG9sZEluZGV4ICsgcy5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHMuZml4TG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXdJbmRleDtcbiAgICAgICAgICAgIC8vRml4IEZvciBOZWdhdGl2ZSBPdmVyc2xpZGluZ1xuICAgICAgICAgICAgaWYgKHMuYWN0aXZlSW5kZXggPCBzLmxvb3BlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gcy5zbGlkZXMubGVuZ3RoIC0gcy5sb29wZWRTbGlkZXMgKiAzICsgcy5hY3RpdmVJbmRleDtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgcy5sb29wZWRTbGlkZXM7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0ZpeCBGb3IgUG9zaXRpdmUgT3ZlcnNsaWRpbmdcbiAgICAgICAgICAgIGVsc2UgaWYgKChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcy5hY3RpdmVJbmRleCA+PSBzLmxvb3BlZFNsaWRlcyAqIDIpIHx8IChzLmFjdGl2ZUluZGV4ID4gcy5zbGlkZXMubGVuZ3RoIC0gcy5wYXJhbXMuc2xpZGVzUGVyVmlldyAqIDIpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSAtcy5zbGlkZXMubGVuZ3RoICsgcy5hY3RpdmVJbmRleCArIHMubG9vcGVkU2xpZGVzO1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyBzLmxvb3BlZFNsaWRlcztcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgQXBwZW5kL1ByZXBlbmQvUmVtb3ZlIFNsaWRlc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuYXBwZW5kU2xpZGUgPSBmdW5jdGlvbiAoc2xpZGVzKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSkgcy53cmFwcGVyLmFwcGVuZChzbGlkZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci5hcHBlbmQoc2xpZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5jcmVhdGVMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShzLnBhcmFtcy5vYnNlcnZlciAmJiBzLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMucHJlcGVuZFNsaWRlID0gZnVuY3Rpb24gKHNsaWRlcykge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBzLmFjdGl2ZUluZGV4ICsgMTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSkgcy53cmFwcGVyLnByZXBlbmQoc2xpZGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBzLmFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci5wcmVwZW5kKHNsaWRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuY3JlYXRlTG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocy5wYXJhbXMub2JzZXJ2ZXIgJiYgcy5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMucmVtb3ZlU2xpZGUgPSBmdW5jdGlvbiAoc2xpZGVzSW5kZXhlcykge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXMgPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBzLmFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgICAgIGluZGV4VG9SZW1vdmU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICdvYmplY3QnICYmIHNsaWRlc0luZGV4ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNJbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHMuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSBuZXdBY3RpdmVJbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzO1xuICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgcy5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4VG9SZW1vdmUgPCBuZXdBY3RpdmVJbmRleCkgbmV3QWN0aXZlSW5kZXgtLTtcbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuY3JlYXRlTG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmICghKHMucGFyYW1zLm9ic2VydmVyICYmIHMuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgcy5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgcy5yZW1vdmVBbGxTbGlkZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2xpZGVzSW5kZXhlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMucmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEVmZmVjdHNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmVmZmVjdHMgPSB7XG4gICAgICAgICAgICBmYWRlOiB7XG4gICAgICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHNsaWRlWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4ID0gLW9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkgdHggPSB0eCAtIHMudHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5ID0gdHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlT3BhY2l0eSA9IHMucGFyYW1zLmZhZGUuY3Jvc3NGYWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMSAtIE1hdGguYWJzKHNsaWRlWzBdLnByb2dyZXNzKSwgMCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxICsgTWF0aC5taW4oTWF0aC5tYXgoc2xpZGVbMF0ucHJvZ3Jlc3MsIC0xKSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBzbGlkZU9wYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyB0eCArICdweCwgJyArIHR5ICsgJ3B4LCAwcHgpJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSAmJiBkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUcmlnZ2VyZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlckV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJywgJ29UcmFuc2l0aW9uRW5kJywgJ01TVHJhbnNpdGlvbkVuZCcsICdtc1RyYW5zaXRpb25FbmQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWdnZXJFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyaWdnZXIodHJpZ2dlckV2ZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IHNsaWRlWzBdLnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZsaXAubGltaXRSb3RhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oc2xpZGVbMF0ucHJvZ3Jlc3MsIDEpLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gc2xpZGVbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm90YXRlID0gLTE4MCAqIHByb2dyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVkgPSByb3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5ID0gdHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVggPSAtcm90YXRlWTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVZID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWSA9IC1yb3RhdGVZO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKHByb2dyZXNzKSkgKyBzLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZsaXAuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgc2hhZG93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dCZWZvcmUgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0FmdGVyID0gcy5pc0hvcml6b250YWwoKSA/IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dCZWZvcmUgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJykgKyAnXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZChzaGFkb3dCZWZvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0FmdGVyID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ3JpZ2h0JyA6ICdib3R0b20nKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0FmdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGgpIHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLXByb2dyZXNzLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHR4ICsgJ3B4LCAnICsgdHkgKyAncHgsIDBweCkgcm90YXRlWCgnICsgcm90YXRlWCArICdkZWcpIHJvdGF0ZVkoJyArIHJvdGF0ZVkgKyAnZGVnKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudFRyaWdnZXJlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyRXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnLCAnb1RyYW5zaXRpb25FbmQnLCAnTVNUcmFuc2l0aW9uRW5kJywgJ21zVHJhbnNpdGlvbkVuZCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlckV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJpZ2dlcih0cmlnZ2VyRXZlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdWJlOiB7XG4gICAgICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyUm90YXRlID0gMCwgY3ViZVNoYWRvdztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmN1YmUuc2hhZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cgPSBzLndyYXBwZXIuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdWJlU2hhZG93Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93ID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuYXBwZW5kKGN1YmVTaGFkb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93LmNzcyh7aGVpZ2h0OiBzLndpZHRoICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdyA9IHMuY29udGFpbmVyLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3ViZVNoYWRvdy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdyA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItY3ViZS1zaGFkb3dcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jb250YWluZXIuYXBwZW5kKGN1YmVTaGFkb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUFuZ2xlID0gaSAqIDkwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdW5kID0gTWF0aC5mbG9vcihzbGlkZUFuZ2xlIC8gMzYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlQW5nbGUgPSAtc2xpZGVBbmdsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZCA9IE1hdGguZmxvb3IoLXNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oc2xpZGVbMF0ucHJvZ3Jlc3MsIDEpLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHggPSAwLCB0eSA9IDAsIHR6ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICUgNCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4ID0gLSByb3VuZCAqIDQgKiBzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGkgLSAxKSAlIDQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSAtIHJvdW5kICogNCAqIHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChpIC0gMikgJSA0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSBzLnNpemUgKyByb3VuZCAqIDQgKiBzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSBzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoaSAtIDMpICUgNCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4ID0gLSBzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSAzICogcy5zaXplICsgcy5zaXplICogNCAqIHJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtdHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9ICdyb3RhdGVYKCcgKyAocy5pc0hvcml6b250YWwoKSA/IDAgOiAtc2xpZGVBbmdsZSkgKyAnZGVnKSByb3RhdGVZKCcgKyAocy5pc0hvcml6b250YWwoKSA/IHNsaWRlQW5nbGUgOiAwKSArICdkZWcpIHRyYW5zbGF0ZTNkKCcgKyB0eCArICdweCwgJyArIHR5ICsgJ3B4LCAnICsgdHogKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8PSAxICYmIHByb2dyZXNzID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyUm90YXRlID0gaSAqIDkwICsgcHJvZ3Jlc3MgKiA5MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHdyYXBwZXJSb3RhdGUgPSAtaSAqIDkwIC0gcHJvZ3Jlc3MgKiA5MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmN1YmUuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgc2hhZG93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dCZWZvcmUgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0FmdGVyID0gcy5pc0hvcml6b250YWwoKSA/IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dCZWZvcmUgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJykgKyAnXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZChzaGFkb3dCZWZvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0FmdGVyID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ3JpZ2h0JyA6ICdib3R0b20nKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0FmdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGgpIHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLXByb2dyZXNzLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgNTAlIC0nICsgKHMuc2l6ZSAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDUwJSAtJyArIChzLnNpemUgLyAyKSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDUwJSAtJyArIChzLnNpemUgLyAyKSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgNTAlIC0nICsgKHMuc2l6ZSAvIDIpICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jdWJlLnNoYWRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93LnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMHB4LCAnICsgKHMud2lkdGggLyAyICsgcy5wYXJhbXMuY3ViZS5zaGFkb3dPZmZzZXQpICsgJ3B4LCAnICsgKC1zLndpZHRoIC8gMikgKyAncHgpIHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooMGRlZykgc2NhbGUoJyArIChzLnBhcmFtcy5jdWJlLnNoYWRvd1NjYWxlKSArICcpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QW5nbGUgPSBNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAtIE1hdGguZmxvb3IoTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLyA5MCkgKiA5MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IDEuNSAtIChNYXRoLnNpbihzaGFkb3dBbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAvIDIgKyBNYXRoLmNvcyhzaGFkb3dBbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY2FsZTEgPSBzLnBhcmFtcy5jdWJlLnNoYWRvd1NjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTIgPSBzLnBhcmFtcy5jdWJlLnNoYWRvd1NjYWxlIC8gbXVsdGlwbGllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gcy5wYXJhbXMuY3ViZS5zaGFkb3dPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdy50cmFuc2Zvcm0oJ3NjYWxlM2QoJyArIHNjYWxlMSArICcsIDEsICcgKyBzY2FsZTIgKyAnKSB0cmFuc2xhdGUzZCgwcHgsICcgKyAocy5oZWlnaHQgLyAyICsgb2Zmc2V0KSArICdweCwgJyArICgtcy5oZWlnaHQgLyAyIC8gc2NhbGUyKSArICdweCkgcm90YXRlWCgtOTBkZWcpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHpGYWN0b3IgPSAocy5pc1NhZmFyaSB8fCBzLmlzVWlXZWJWaWV3KSA/ICgtcy5zaXplIC8gMikgOiAwO1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwcHgsMCwnICsgekZhY3RvciArICdweCkgcm90YXRlWCgnICsgKHMuaXNIb3Jpem9udGFsKCkgPyAwIDogd3JhcHBlclJvdGF0ZSkgKyAnZGVnKSByb3RhdGVZKCcgKyAocy5pc0hvcml6b250YWwoKSA/IC13cmFwcGVyUm90YXRlIDogMCkgKyAnZGVnKScpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY3ViZS5zaGFkb3cgJiYgIXMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuY29udGFpbmVyLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3ZlcmZsb3c6IHtcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHMudHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2VudGVyID0gcy5pc0hvcml6b250YWwoKSA/IC10cmFuc2Zvcm0gKyBzLndpZHRoIC8gMiA6IC10cmFuc2Zvcm0gKyBzLmhlaWdodCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3RhdGUgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy5wYXJhbXMuY292ZXJmbG93LnJvdGF0ZTogLXMucGFyYW1zLmNvdmVyZmxvdy5yb3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBzLnBhcmFtcy5jb3ZlcmZsb3cuZGVwdGg7XG4gICAgICAgICAgICAgICAgICAgIC8vRWFjaCBzbGlkZSBvZmZzZXQgZnJvbSBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHMuc2xpZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZVNpemUgPSBzLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZU9mZnNldCA9IHNsaWRlWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldE11bHRpcGxpZXIgPSAoY2VudGVyIC0gc2xpZGVPZmZzZXQgLSBzbGlkZVNpemUgLyAyKSAvIHNsaWRlU2l6ZSAqIHMucGFyYW1zLmNvdmVyZmxvdy5tb2RpZmllcjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm90YXRlWSA9IHMuaXNIb3Jpem9udGFsKCkgPyByb3RhdGUgKiBvZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3RhdGVYID0gcy5pc0hvcml6b250YWwoKSA/IDAgOiByb3RhdGUgKiBvZmZzZXRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIHJvdGF0ZVogPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlWiA9IC10cmFuc2xhdGUgKiBNYXRoLmFicyhvZmZzZXRNdWx0aXBsaWVyKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlWSA9IHMuaXNIb3Jpem9udGFsKCkgPyAwIDogcy5wYXJhbXMuY292ZXJmbG93LnN0cmV0Y2ggKiAob2Zmc2V0TXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlWCA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLnBhcmFtcy5jb3ZlcmZsb3cuc3RyZXRjaCAqIChvZmZzZXRNdWx0aXBsaWVyKSA6IDA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9GaXggZm9yIHVsdHJhIHNtYWxsIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpIDwgMC4wMDEpIHRyYW5zbGF0ZVggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVkpIDwgMC4wMDEpIHRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVopIDwgMC4wMDEpIHRyYW5zbGF0ZVogPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVkpIDwgMC4wMDEpIHJvdGF0ZVkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVgpIDwgMC4wMDEpIHJvdGF0ZVggPSAwO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZVRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdHJhbnNsYXRlWCArICdweCwnICsgdHJhbnNsYXRlWSArICdweCwnICsgdHJhbnNsYXRlWiArICdweCkgIHJvdGF0ZVgoJyArIHJvdGF0ZVggKyAnZGVnKSByb3RhdGVZKCcgKyByb3RhdGVZICsgJ2RlZyknO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnRyYW5zZm9ybShzbGlkZVRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVswXS5zdHlsZS56SW5kZXggPSAtTWF0aC5hYnMoTWF0aC5yb3VuZChvZmZzZXRNdWx0aXBsaWVyKSkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNvdmVyZmxvdy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBzaGFkb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QWZ0ZXIgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QWZ0ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgJ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBvZmZzZXRNdWx0aXBsaWVyID4gMCA/IG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSAoLW9mZnNldE11bHRpcGxpZXIpID4gMCA/IC1vZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9TZXQgY29ycmVjdCBwZXJzcGVjdGl2ZSBmb3IgSUUxMFxuICAgICAgICAgICAgICAgICAgICBpZiAocy5icm93c2VyLmllKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3MgPSBzLndyYXBwZXJbMF0uc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cy5wZXJzcGVjdGl2ZU9yaWdpbiA9IGNlbnRlciArICdweCA1MCUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEltYWdlcyBMYXp5IExvYWRpbmdcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmxhenkgPSB7XG4gICAgICAgICAgICBpbml0aWFsSW1hZ2VMb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZEltYWdlSW5TbGlkZTogZnVuY3Rpb24gKGluZGV4LCBsb2FkSW5EdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZEluRHVwbGljYXRlID09PSAndW5kZWZpbmVkJykgbG9hZEluRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gc2xpZGUuZmluZCgnLicgKyBzLnBhcmFtcy5sYXp5TG9hZGluZ0NsYXNzICsgJzpub3QoLicgKyBzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGVkQ2xhc3MgKyAnKTpub3QoLicgKyBzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGluZ0NsYXNzICsgJyknKTtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMubGF6eUxvYWRpbmdDbGFzcykgJiYgIXNsaWRlLmhhc0NsYXNzKHMucGFyYW1zLmxhenlTdGF0dXNMb2FkZWRDbGFzcykgJiYgIXNsaWRlLmhhc0NsYXNzKHMucGFyYW1zLmxhenlTdGF0dXNMb2FkaW5nQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGltZy5hZGQoc2xpZGVbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW1nLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWcuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfaW1nID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgX2ltZy5hZGRDbGFzcyhzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGluZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSBfaW1nLmF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3JjID0gX2ltZy5hdHRyKCdkYXRhLXNyYycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0ID0gX2ltZy5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXMgPSBfaW1nLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgcy5sb2FkSW1hZ2UoX2ltZ1swXSwgKHNyYyB8fCBiYWNrZ3JvdW5kKSwgc3Jjc2V0LCBzaXplcywgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiJyArIGJhY2tncm91bmQgKyAnXCIpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5yZW1vdmVBdHRyKCdkYXRhLWJhY2tncm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5hdHRyKCdzcmNzZXQnLCBzcmNzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLnJlbW92ZUF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLmF0dHIoJ3NpemVzJywgc2l6ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLnJlbW92ZUF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcucmVtb3ZlQXR0cignZGF0YS1zcmMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuYWRkQ2xhc3Mocy5wYXJhbXMubGF6eVN0YXR1c0xvYWRlZENsYXNzKS5yZW1vdmVDbGFzcyhzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGluZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmZpbmQoJy4nICsgcy5wYXJhbXMubGF6eVByZWxvYWRlckNsYXNzICsgJywgLicgKyBzLnBhcmFtcy5wcmVsb2FkZXJDbGFzcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCAmJiBsb2FkSW5EdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVPcmlnaW5hbEluZGV4ID0gc2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2xpZGUgPSBzLndyYXBwZXIuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBzbGlkZU9yaWdpbmFsSW5kZXggKyAnXCJdOm5vdCguJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZEltYWdlSW5TbGlkZShvcmlnaW5hbFNsaWRlLmluZGV4KCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkdXBsaWNhdGVkU2xpZGUgPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgc2xpZGVPcmlnaW5hbEluZGV4ICsgJ1wiXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZEltYWdlSW5TbGlkZShkdXBsaWNhdGVkU2xpZGUuaW5kZXgoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25MYXp5SW1hZ2VSZWFkeScsIHMsIHNsaWRlWzBdLCBfaW1nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uTGF6eUltYWdlTG9hZCcsIHMsIHNsaWRlWzBdLCBfaW1nWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZXNQZXJWaWV3ID0gcy5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXcgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXMubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQpIHMubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKCQodGhpcykuaW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBzLmFjdGl2ZUluZGV4OyBpIDwgcy5hY3RpdmVJbmRleCArIHNsaWRlc1BlclZpZXcgOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbaV0pIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUocy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nSW5QcmV2TmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVzUGVyVmlldyA+IDEgfHwgKHMucGFyYW1zLmxhenlMb2FkaW5nSW5QcmV2TmV4dEFtb3VudCAmJiBzLnBhcmFtcy5sYXp5TG9hZGluZ0luUHJldk5leHRBbW91bnQgPiAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IHMucGFyYW1zLmxhenlMb2FkaW5nSW5QcmV2TmV4dEFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcHYgPSBzbGlkZXNQZXJWaWV3O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heEluZGV4ID0gTWF0aC5taW4ocy5hY3RpdmVJbmRleCArIHNwdiArIE1hdGgubWF4KGFtb3VudCwgc3B2KSwgcy5zbGlkZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW5JbmRleCA9IE1hdGgubWF4KHMuYWN0aXZlSW5kZXggLSBNYXRoLm1heChzcHYsIGFtb3VudCksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV4dCBTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHMuYWN0aXZlSW5kZXggKyBzbGlkZXNQZXJWaWV3OyBpIDwgbWF4SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSkgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmV2IFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gbWluSW5kZXg7IGkgPCBzLmFjdGl2ZUluZGV4IDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzW2ldKSBzLmxhenkubG9hZEltYWdlSW5TbGlkZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0U2xpZGUgPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTbGlkZS5sZW5ndGggPiAwKSBzLmxhenkubG9hZEltYWdlSW5TbGlkZShuZXh0U2xpZGUuaW5kZXgoKSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlLmxlbmd0aCA+IDApIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKHByZXZTbGlkZS5pbmRleCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydCB8fCAoIXMucGFyYW1zLmxhenlMb2FkaW5nT25UcmFuc2l0aW9uU3RhcnQgJiYgIXMubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZyAmJiAhcy5wYXJhbXMubGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgU2Nyb2xsYmFyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5zY3JvbGxiYXIgPSB7XG4gICAgICAgICAgICBpc1RvdWNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2V0RHJhZ1Bvc2l0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHZhciB4ID0gMCwgeSA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRlclBvc2l0aW9uID0gcy5pc0hvcml6b250YWwoKSA/XG4gICAgICAgICAgICAgICAgICAgICgoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJykgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYIHx8IGUuY2xpZW50WCkgOlxuICAgICAgICAgICAgICAgICAgICAoKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScpID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWSB8fCBlLmNsaWVudFkpIDtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAocG9pbnRlclBvc2l0aW9uKSAtIHNiLnRyYWNrLm9mZnNldCgpW3MuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJ10gLSBzYi5kcmFnU2l6ZSAvIDI7XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uTWluID0gLXMubWluVHJhbnNsYXRlKCkgKiBzYi5tb3ZlRGl2aWRlcjtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25NYXggPSAtcy5tYXhUcmFuc2xhdGUoKSAqIHNiLm1vdmVEaXZpZGVyO1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IHBvc2l0aW9uTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb25NaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvc2l0aW9uID4gcG9zaXRpb25NYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbk1heDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb24gLyBzYi5tb3ZlRGl2aWRlcjtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUocG9zaXRpb24sIHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyYWdTdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcbiAgICAgICAgICAgICAgICBzYi5pc1RvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzYi5zZXREcmFnUG9zaXRpb24oZSk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNiLmRyYWdUaW1lb3V0KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgc2IudHJhY2sudHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFySGlkZSkge1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFjay5jc3MoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb24oMTAwKTtcbiAgICAgICAgICAgICAgICBzYi5kcmFnLnRyYW5zaXRpb24oMTAwKTtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2Nyb2xsYmFyRHJhZ1N0YXJ0Jywgcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhZ01vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgaWYgKCFzYi5pc1RvdWNoZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGVsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNiLnNldERyYWdQb3NpdGlvbihlKTtcbiAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICBzYi50cmFjay50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2Nyb2xsYmFyRHJhZ01vdmUnLCBzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkcmFnRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIGlmICghc2IuaXNUb3VjaGVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgc2IuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckhpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNiLmRyYWdUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IudHJhY2sudHJhbnNpdGlvbig0MDApO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGxiYXJEcmFnRW5kJywgcyk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhclNuYXBPblJlbGVhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyYWdnYWJsZUV2ZW50czogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHMucGFyYW1zLnNpbXVsYXRlVG91Y2ggPT09IGZhbHNlICYmICFzLnN1cHBvcnQudG91Y2gpKSByZXR1cm4gcy50b3VjaEV2ZW50c0Rlc2t0b3A7XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gcy50b3VjaEV2ZW50cztcbiAgICAgICAgICAgIH0pKCksXG4gICAgICAgICAgICBlbmFibGVEcmFnZ2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcy5zdXBwb3J0LnRvdWNoID8gc2IudHJhY2sgOiBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICAkKHNiLnRyYWNrKS5vbihzYi5kcmFnZ2FibGVFdmVudHMuc3RhcnQsIHNiLmRyYWdTdGFydCk7XG4gICAgICAgICAgICAgICAgJCh0YXJnZXQpLm9uKHNiLmRyYWdnYWJsZUV2ZW50cy5tb3ZlLCBzYi5kcmFnTW92ZSk7XG4gICAgICAgICAgICAgICAgJCh0YXJnZXQpLm9uKHNiLmRyYWdnYWJsZUV2ZW50cy5lbmQsIHNiLmRyYWdFbmQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVEcmFnZ2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcy5zdXBwb3J0LnRvdWNoID8gc2IudHJhY2sgOiBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICAkKHNiLnRyYWNrKS5vZmYoc2IuZHJhZ2dhYmxlRXZlbnRzLnN0YXJ0LCBzYi5kcmFnU3RhcnQpO1xuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5vZmYoc2IuZHJhZ2dhYmxlRXZlbnRzLm1vdmUsIHNiLmRyYWdNb3ZlKTtcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkub2ZmKHNiLmRyYWdnYWJsZUV2ZW50cy5lbmQsIHNiLmRyYWdFbmQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuc2Nyb2xsYmFyKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgc2IudHJhY2sgPSAkKHMucGFyYW1zLnNjcm9sbGJhcik7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBzLnBhcmFtcy5zY3JvbGxiYXIgPT09ICdzdHJpbmcnICYmIHNiLnRyYWNrLmxlbmd0aCA+IDEgJiYgcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5zY3JvbGxiYXIpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFjayA9IHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMuc2Nyb2xsYmFyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2IuZHJhZyA9IHNiLnRyYWNrLmZpbmQoJy5zd2lwZXItc2Nyb2xsYmFyLWRyYWcnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2IuZHJhZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZyA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2Nyb2xsYmFyLWRyYWdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgc2IudHJhY2suYXBwZW5kKHNiLmRyYWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICBzYi50cmFja1NpemUgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2IudHJhY2tbMF0ub2Zmc2V0V2lkdGggOiBzYi50cmFja1swXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHNiLmRpdmlkZXIgPSBzLnNpemUgLyBzLnZpcnR1YWxTaXplO1xuICAgICAgICAgICAgICAgIHNiLm1vdmVEaXZpZGVyID0gc2IuZGl2aWRlciAqIChzYi50cmFja1NpemUgLyBzLnNpemUpO1xuICAgICAgICAgICAgICAgIHNiLmRyYWdTaXplID0gc2IudHJhY2tTaXplICogc2IuZGl2aWRlcjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS53aWR0aCA9IHNiLmRyYWdTaXplICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUuaGVpZ2h0ID0gc2IuZHJhZ1NpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNiLmRpdmlkZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFja1swXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2IudHJhY2tbMF0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFySGlkZSkge1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFja1swXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5zY3JvbGxiYXIpIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZjtcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlID0gcy50cmFuc2xhdGUgfHwgMDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UG9zO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgbmV3U2l6ZSA9IHNiLmRyYWdTaXplO1xuICAgICAgICAgICAgICAgIG5ld1BvcyA9IChzYi50cmFja1NpemUgLSBzYi5kcmFnU2l6ZSkgKiBzLnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGlmIChzLnJ0bCAmJiBzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BvcyA9IC1uZXdQb3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gc2IuZHJhZ1NpemUgLSBuZXdQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC1uZXdQb3MgKyBzYi5kcmFnU2l6ZSA+IHNiLnRyYWNrU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNiLnRyYWNrU2l6ZSArIG5ld1BvcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1BvcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzYi5kcmFnU2l6ZSArIG5ld1BvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BvcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3UG9zICsgc2IuZHJhZ1NpemUgPiBzYi50cmFja1NpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzYi50cmFja1NpemUgLSBuZXdQb3M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC50cmFuc2Zvcm1zM2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgnICsgKG5ld1BvcykgKyAncHgsIDAsIDApJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYi5kcmFnLnRyYW5zZm9ybSgndHJhbnNsYXRlWCgnICsgKG5ld1BvcykgKyAncHgpJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS53aWR0aCA9IG5ld1NpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC50cmFuc2Zvcm1zM2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwcHgsICcgKyAobmV3UG9zKSArICdweCwgMCknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNmb3JtKCd0cmFuc2xhdGVZKCcgKyAobmV3UG9zKSArICdweCknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLmhlaWdodCA9IG5ld1NpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFySGlkZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2IudGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrWzBdLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICBzYi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYi50cmFja1swXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrLnRyYW5zaXRpb24oNDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuc2Nyb2xsYmFyKSByZXR1cm47XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuZHJhZy50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBDb250cm9sbGVyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5jb250cm9sbGVyID0ge1xuICAgICAgICAgICAgTGluZWFyU3BsaW5lOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RJbmRleCA9IHgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAvLyBHaXZlbiBhbiB4IHZhbHVlICh4MiksIHJldHVybiB0aGUgZXhwZWN0ZWQgeTIgdmFsdWU6XG4gICAgICAgICAgICAgICAgLy8gKHgxLHkxKSBpcyB0aGUga25vd24gcG9pbnQgYmVmb3JlIGdpdmVuIHZhbHVlLFxuICAgICAgICAgICAgICAgIC8vICh4Myx5MykgaXMgdGhlIGtub3duIHBvaW50IGFmdGVyIGdpdmVuIHZhbHVlLlxuICAgICAgICAgICAgICAgIHZhciBpMSwgaTM7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSB0aGlzLngubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmludGVycG9sYXRlID0gZnVuY3Rpb24gKHgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgheDIpIHJldHVybiAwO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBpbmRleGVzIG9mIHgxIGFuZCB4MyAodGhlIGFycmF5IGluZGV4ZXMgYmVmb3JlIGFuZCBhZnRlciBnaXZlbiB4Mik6XG4gICAgICAgICAgICAgICAgICAgIGkzID0gYmluYXJ5U2VhcmNoKHRoaXMueCwgeDIpO1xuICAgICAgICAgICAgICAgICAgICBpMSA9IGkzIC0gMTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgb3VyIGluZGV4ZXMgaTEgJiBpMywgc28gd2UgY2FuIGNhbGN1bGF0ZSBhbHJlYWR5OlxuICAgICAgICAgICAgICAgICAgICAvLyB5MiA6PSAoKHgy4oiSeDEpIMOXICh5M+KIknkxKSkgw7cgKHgz4oiSeDEpICsgeTFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoeDIgLSB0aGlzLnhbaTFdKSAqICh0aGlzLnlbaTNdIC0gdGhpcy55W2kxXSkpIC8gKHRoaXMueFtpM10gLSB0aGlzLnhbaTFdKSArIHRoaXMueVtpMV07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGJpbmFyeVNlYXJjaCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heEluZGV4LCBtaW5JbmRleCwgZ3Vlc3M7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5JbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SW5kZXggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobWF4SW5kZXggLSBtaW5JbmRleCA+IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5W2d1ZXNzID0gbWF4SW5kZXggKyBtaW5JbmRleCA+PiAxXSA8PSB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSW5kZXggPSBndWVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhJbmRleCA9IGd1ZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXhJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8veHh4OiBmb3Igbm93IGkgd2lsbCBqdXN0IHNhdmUgb25lIHNwbGluZSBmdW5jdGlvbiB0byB0b1xuICAgICAgICAgICAgZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbjogZnVuY3Rpb24oYyl7XG4gICAgICAgICAgICAgICAgaWYoIXMuY29udHJvbGxlci5zcGxpbmUpIHMuY29udHJvbGxlci5zcGxpbmUgPSBzLnBhcmFtcy5sb29wID9cbiAgICAgICAgICAgICAgICAgICAgbmV3IHMuY29udHJvbGxlci5MaW5lYXJTcGxpbmUocy5zbGlkZXNHcmlkLCBjLnNsaWRlc0dyaWQpIDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IHMuY29udHJvbGxlci5MaW5lYXJTcGxpbmUocy5zbmFwR3JpZCwgYy5zbmFwR3JpZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgIHZhciBjb250cm9sbGVkID0gcy5wYXJhbXMuY29udHJvbDtcbiAgICAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyLCBjb250cm9sbGVkVHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBjcmVhdGUgYW4gSW50ZXJwb2xhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIHNuYXBHcmlkc1xuICAgICAgICAgICAgICAgICAgICAvLyB4IGlzIHRoZSBHcmlkIG9mIHRoZSBzY3JvbGxlZCBzY3JvbGxlciBhbmQgeSB3aWxsIGJlIHRoZSBjb250cm9sbGVkIHNjcm9sbGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IG1ha2VzIHNlbnNlIHRvIGNyZWF0ZSB0aGlzIG9ubHkgb25jZSBhbmQgcmVjYWxsIGl0IGZvciB0aGUgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZnVuY3Rpb24gZG9lcyBhIGxvdCBvZiB2YWx1ZSBjYWNoaW5nIGZvciBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUgPSBjLnJ0bCAmJiBjLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/IC1zLnRyYW5zbGF0ZSA6IHMudHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY29udHJvbEJ5ID09PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmNvbnRyb2xsZXIuZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbihjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkgYW0gbm90IHN1cmUgd2h5IHRoZSB2YWx1ZXMgaGF2ZSB0byBiZSBtdWx0aXBsaWNhdGVkIHRoaXMgd2F5LCB0cmllZCB0byBpbnZlcnQgdGhlIHNuYXBHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgaXQgZGlkIG5vdCB3b3JrIG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlZFRyYW5zbGF0ZSA9IC1zLmNvbnRyb2xsZXIuc3BsaW5lLmludGVycG9sYXRlKC10cmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZighY29udHJvbGxlZFRyYW5zbGF0ZSB8fCBzLnBhcmFtcy5jb250cm9sQnkgPT09ICdjb250YWluZXInKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSAoYy5tYXhUcmFuc2xhdGUoKSAtIGMubWluVHJhbnNsYXRlKCkpIC8gKHMubWF4VHJhbnNsYXRlKCkgLSBzLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAodHJhbnNsYXRlIC0gcy5taW5UcmFuc2xhdGUoKSkgKiBtdWx0aXBsaWVyICsgYy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNvbnRyb2xJbnZlcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gYy5tYXhUcmFuc2xhdGUoKSAtIGNvbnRyb2xsZWRUcmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYy51cGRhdGVQcm9ncmVzcyhjb250cm9sbGVkVHJhbnNsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgYy5zZXRXcmFwcGVyVHJhbnNsYXRlKGNvbnRyb2xsZWRUcmFuc2xhdGUsIGZhbHNlLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgYy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgaWYgKHMuaXNBcnJheShjb250cm9sbGVkKSkge1xuICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlZFtpXSAhPT0gYnlDb250cm9sbGVyICYmIGNvbnRyb2xsZWRbaV0gaW5zdGFuY2VvZiBTd2lwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2xhdGUoY29udHJvbGxlZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBlbHNlIGlmIChjb250cm9sbGVkIGluc3RhbmNlb2YgU3dpcGVyICYmIGJ5Q29udHJvbGxlciAhPT0gY29udHJvbGxlZCkge1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGNvbnRyb2xsZWQpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xsZWQgPSBzLnBhcmFtcy5jb250cm9sO1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5zZXRXcmFwcGVyVHJhbnNpdGlvbihkdXJhdGlvbiwgcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5vblRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyb2xsZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYy5wYXJhbXMubG9vcCAmJiBzLnBhcmFtcy5jb250cm9sQnkgPT09ICdzbGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5maXhMb29wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMuaXNBcnJheShjb250cm9sbGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZWRbaV0gIT09IGJ5Q29udHJvbGxlciAmJiBjb250cm9sbGVkW2ldIGluc3RhbmNlb2YgU3dpcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oY29udHJvbGxlZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udHJvbGxlZCBpbnN0YW5jZW9mIFN3aXBlciAmJiBieUNvbnRyb2xsZXIgIT09IGNvbnRyb2xsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oY29udHJvbGxlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEhhc2ggTmF2aWdhdGlvblxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuaGFzaG5hdiA9IHtcbiAgICAgICAgICAgIG9uSGFzaENhbmdlOiBmdW5jdGlvbiAoZSwgYSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdIYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZUhhc2ggPSBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLWhhc2gnKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3SGFzaCAhPT0gYWN0aXZlU2xpZGVIYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICdbZGF0YS1oYXNoPVwiJyArIChuZXdIYXNoKSArICdcIl0nKS5pbmRleCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0YWNoRXZlbnRzOiBmdW5jdGlvbiAoZGV0YWNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGRldGFjaCA/ICdvZmYnIDogJ29uJztcbiAgICAgICAgICAgICAgICAkKHdpbmRvdylbYWN0aW9uXSgnaGFzaGNoYW5nZScsIHMuaGFzaG5hdi5vbkhhc2hDYW5nZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0SGFzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcy5oYXNobmF2LmluaXRpYWxpemVkIHx8ICFzLnBhcmFtcy5oYXNobmF2KSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJlcGxhY2VTdGF0ZSAmJiB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsICgnIycgKyBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLWhhc2gnKSB8fCAnJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHNsaWRlLmF0dHIoJ2RhdGEtaGFzaCcpIHx8IHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gaGFzaCB8fCAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuaGFzaG5hdiB8fCBzLnBhcmFtcy5oaXN0b3J5KSByZXR1cm47XG4gICAgICAgICAgICAgICAgcy5oYXNobmF2LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gcy5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlSGFzaCA9IHNsaWRlLmF0dHIoJ2RhdGEtaGFzaCcpIHx8IHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSGFzaCA9PT0gaGFzaCAmJiAhc2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzbGlkZS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXZXYXRjaFN0YXRlKSBzLmhhc2huYXYuYXR0YWNoRXZlbnRzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5oYXNobmF2V2F0Y2hTdGF0ZSkgcy5oYXNobmF2LmF0dGFjaEV2ZW50cyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBIaXN0b3J5IEFwaSB3aXRoIGZhbGxiYWNrIHRvIEhhc2huYXZcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmhpc3RvcnkgPSB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5oaXN0b3J5KSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuaGlzdG9yeSB8fCAhd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucGFyYW1zLmhpc3RvcnkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuaGFzaG5hdiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5oaXN0b3J5LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGhzID0gdGhpcy5nZXRQYXRoVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhdGhzLmtleSAmJiAhdGhpcy5wYXRocy52YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TbGlkZSgwLCB0aGlzLnBhdGhzLnZhbHVlLCBzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuc2V0SGlzdG9yeVBvcFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0SGlzdG9yeVBvcFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzLmhpc3RvcnkucGF0aHMgPSBzLmhpc3RvcnkuZ2V0UGF0aFZhbHVlcygpO1xuICAgICAgICAgICAgICAgIHMuaGlzdG9yeS5zY3JvbGxUb1NsaWRlKHMucGFyYW1zLnNwZWVkLCBzLmhpc3RvcnkucGF0aHMudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQYXRoVmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aEFycmF5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsID0gcGF0aEFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gcGF0aEFycmF5W3RvdGFsIC0gMl07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGF0aEFycmF5W3RvdGFsIC0gMV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEhpc3Rvcnk6IGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLmhpc3RvcnkuaW5pdGlhbGl6ZWQgfHwgIXMucGFyYW1zLmhpc3RvcnkpIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpbmRleCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ga2V5ICsgJy8nICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5yZXBsYWNlU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbHVnaWZ5OiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx3XFwtXSsvZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC1cXC0rL2csICctJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14tKy8sICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvLSskLywgJycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFRvU2xpZGU6IGZ1bmN0aW9uKHNwZWVkLCB2YWx1ZSwgcnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBzLnNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVIaXN0b3J5ID0gdGhpcy5zbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUhpc3RvcnkgPT09IHZhbHVlICYmICFzbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNsaWRlLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbygwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgS2V5Ym9hcmQgQ29udHJvbFxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUtleWJvYXJkKGUpIHtcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7IC8vanF1ZXJ5IGZpeFxuICAgICAgICAgICAgdmFyIGtjID0gZS5rZXlDb2RlIHx8IGUuY2hhckNvZGU7XG4gICAgICAgICAgICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgJiYgKHMuaXNIb3Jpem9udGFsKCkgJiYga2MgPT09IDM5IHx8ICFzLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSA0MCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgJiYgKHMuaXNIb3Jpem9udGFsKCkgJiYga2MgPT09IDM3IHx8ICFzLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSAzOCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZSAmJiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2MgPT09IDM3IHx8IGtjID09PSAzOSB8fCBrYyA9PT0gMzggfHwga2MgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vQ2hlY2sgdGhhdCBzd2lwZXIgc2hvdWxkIGJlIGluc2lkZSBvZiB2aXNpYmxlIGFyZWEgb2Ygd2luZG93XG4gICAgICAgICAgICAgICAgaWYgKHMuY29udGFpbmVyLnBhcmVudHMoJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcykubGVuZ3RoID4gMCAmJiBzLmNvbnRhaW5lci5wYXJlbnRzKCcuJyArIHMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3dTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIHN3aXBlck9mZnNldCA9IHMuY29udGFpbmVyLm9mZnNldCgpO1xuICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkgc3dpcGVyT2Zmc2V0LmxlZnQgPSBzd2lwZXJPZmZzZXQubGVmdCAtIHMuY29udGFpbmVyWzBdLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgdmFyIHN3aXBlckNvb3JkID0gW1xuICAgICAgICAgICAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3BdLFxuICAgICAgICAgICAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wXSxcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wICsgcy5oZWlnaHRdLFxuICAgICAgICAgICAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wICsgcy5oZWlnaHRdXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlckNvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludFswXSA+PSB3aW5kb3dTY3JvbGwubGVmdCAmJiBwb2ludFswXSA8PSB3aW5kb3dTY3JvbGwubGVmdCArIHdpbmRvd1dpZHRoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludFsxXSA+PSB3aW5kb3dTY3JvbGwudG9wICYmIHBvaW50WzFdIDw9IHdpbmRvd1Njcm9sbC50b3AgKyB3aW5kb3dIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWluVmlldykgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2MgPT09IDM3IHx8IGtjID09PSAzOSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChrYyA9PT0gMzkgJiYgIXMucnRsKSB8fCAoa2MgPT09IDM3ICYmIHMucnRsKSkgcy5zbGlkZU5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoKGtjID09PSAzNyAmJiAhcy5ydGwpIHx8IChrYyA9PT0gMzkgJiYgcy5ydGwpKSBzLnNsaWRlUHJldigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGtjID09PSAzOCB8fCBrYyA9PT0gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrYyA9PT0gNDApIHMuc2xpZGVOZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGtjID09PSAzOCkgcy5zbGlkZVByZXYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzLmRpc2FibGVLZXlib2FyZENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5rZXlib2FyZENvbnRyb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5ZG93bicsIGhhbmRsZUtleWJvYXJkKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5lbmFibGVLZXlib2FyZENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5rZXlib2FyZENvbnRyb2wgPSB0cnVlO1xuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBoYW5kbGVLZXlib2FyZCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIE1vdXNld2hlZWwgQ29udHJvbFxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMubW91c2V3aGVlbCA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUaW1lOiAobmV3IHdpbmRvdy5EYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICB9O1xuICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJlc3QgY29tYmluYXRpb24gaWYgeW91IHByZWZlciBzcGluWCArIHNwaW5ZIG5vcm1hbGl6YXRpb24uICBJdCBmYXZvcnNcbiAgICAgICAgICAgICAqIHRoZSBvbGRlciBET01Nb3VzZVNjcm9sbCBmb3IgRmlyZWZveCwgYXMgRkYgZG9lcyBub3QgaW5jbHVkZSB3aGVlbERlbHRhIHdpdGhcbiAgICAgICAgICAgICAqICd3aGVlbCcgZXZlbnQsIG1ha2luZyBzcGluIHNwZWVkIGRldGVybWluYXRpb24gaW1wb3NzaWJsZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcy5tb3VzZXdoZWVsLmV2ZW50ID0gKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTEpID9cbiAgICAgICAgICAgICAgICAnRE9NTW91c2VTY3JvbGwnIDpcbiAgICAgICAgICAgICAgICBpc0V2ZW50U3VwcG9ydGVkKCkgP1xuICAgICAgICAgICAgICAgICAgICAnd2hlZWwnIDogJ21vdXNld2hlZWwnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBpc0V2ZW50U3VwcG9ydGVkKCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9ICdvbndoZWVsJztcbiAgICAgICAgICAgIHZhciBpc1N1cHBvcnRlZCA9IGV2ZW50TmFtZSBpbiBkb2N1bWVudDtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShldmVudE5hbWUsICdyZXR1cm47Jyk7XG4gICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZWxlbWVudFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmICghaXNTdXBwb3J0ZWQgJiZcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbiAmJlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUgJiZcbiAgICAgICAgICAgICAgICAgICAgLy8gYWx3YXlzIHJldHVybnMgdHJ1ZSBpbiBuZXdlciBicm93c2VycyBhcyBwZXIgdGhlIHN0YW5kYXJkLlxuICAgICAgICAgICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24taGFzZmVhdHVyZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJycsICcnKSAhPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHdheSB0byB0ZXN0IHN1cHBvcnQgZm9yIHRoZSBgd2hlZWxgIGV2ZW50IGluIElFOSsuXG4gICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCdFdmVudHMud2hlZWwnLCAnMy4wJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZXdoZWVsKGUpIHtcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7IC8vanF1ZXJ5IGZpeFxuICAgICAgICAgICAgdmFyIGRlbHRhID0gMDtcbiAgICAgICAgICAgIHZhciBydGxGYWN0b3IgPSBzLnJ0bCA/IC0xIDogMTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5vcm1hbGl6ZVdoZWVsKCBlICk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxGb3JjZVRvQXhpcykge1xuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkYXRhLnBpeGVsWCkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWSkpIGRlbHRhID0gZGF0YS5waXhlbFggKiBydGxGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRhdGEucGl4ZWxZKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxYKSkgZGVsdGEgPSBkYXRhLnBpeGVsWTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsdGEgPSBNYXRoLmFicyhkYXRhLnBpeGVsWCkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWSkgPyAtIGRhdGEucGl4ZWxYICogcnRsRmFjdG9yIDogLSBkYXRhLnBpeGVsWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGVsdGEgPT09IDApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbEludmVydCkgZGVsdGEgPSAtZGVsdGE7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmICgobmV3IHdpbmRvdy5EYXRlKCkpLmdldFRpbWUoKSAtIHMubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZSA+IDYwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoIXMuaXNFbmQgfHwgcy5wYXJhbXMubG9vcCkgJiYgIXMuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZU5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2Nyb2xsJywgcywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsUmVsZWFzZU9uRWRnZXMpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCghcy5pc0JlZ2lubmluZyB8fCBzLnBhcmFtcy5sb29wKSAmJiAhcy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlUHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGwnLCBzLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxSZWxlYXNlT25FZGdlcykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lID0gKG5ldyB3aW5kb3cuRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9GcmVlbW9kZSBvciBzY3JvbGxDb250YWluZXI6XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcy5nZXRXcmFwcGVyVHJhbnNsYXRlKCkgKyBkZWx0YSAqIHMucGFyYW1zLm1vdXNld2hlZWxTZW5zaXRpdml0eTtcbiAgICAgICAgICAgICAgICB2YXIgd2FzQmVnaW5uaW5nID0gcy5pc0JlZ2lubmluZyxcbiAgICAgICAgICAgICAgICAgICAgd2FzRW5kID0gcy5pc0VuZDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IHMubWluVHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gcy5tYXhUcmFuc2xhdGUoKSkgcG9zaXRpb24gPSBzLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCF3YXNCZWdpbm5pbmcgJiYgcy5pc0JlZ2lubmluZyB8fCAhd2FzRW5kICYmIHMuaXNFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHMubW91c2V3aGVlbC50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgcy5tb3VzZXdoZWVsLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVSZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nICYmIHMubGF6eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblNjcm9sbCcsIHMsIGUpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBTdG9wIGF1dG9wbGF5XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9wbGF5ICYmIHMucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24pIHMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMCB8fCBwb3NpdGlvbiA9PT0gcy5tYXhUcmFuc2xhdGUoKSkgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzLmRpc2FibGVNb3VzZXdoZWVsQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcy5tb3VzZXdoZWVsLmV2ZW50KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcy5jb250YWluZXI7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbEV2ZW50c1RhcmdlZCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAkKHMucGFyYW1zLm1vdXNld2hlZWxFdmVudHNUYXJnZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0Lm9mZihzLm1vdXNld2hlZWwuZXZlbnQsIGhhbmRsZU1vdXNld2hlZWwpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLmVuYWJsZU1vdXNld2hlZWxDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzLm1vdXNld2hlZWwuZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsRXZlbnRzVGFyZ2VkICE9PSAnY29udGFpbmVyJykge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9ICQocy5wYXJhbXMubW91c2V3aGVlbEV2ZW50c1RhcmdlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQub24ocy5tb3VzZXdoZWVsLmV2ZW50LCBoYW5kbGVNb3VzZXdoZWVsKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vdXNlIHdoZWVsIChhbmQgMi1maW5nZXIgdHJhY2twYWQpIHN1cHBvcnQgb24gdGhlIHdlYiBzdWNrcy4gIEl0IGlzXG4gICAgICAgICAqIGNvbXBsaWNhdGVkLCB0aHVzIHRoaXMgZG9jIGlzIGxvbmcgYW5kIChob3BlZnVsbHkpIGRldGFpbGVkIGVub3VnaCB0byBhbnN3ZXJcbiAgICAgICAgICogeW91ciBxdWVzdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHlvdSBuZWVkIHRvIHJlYWN0IHRvIHRoZSBtb3VzZSB3aGVlbCBpbiBhIHByZWRpY3RhYmxlIHdheSwgdGhpcyBjb2RlIGlzXG4gICAgICAgICAqIGxpa2UgeW91ciBiZXN0ZXN0IGZyaWVuZC4gKiBodWdzICpcbiAgICAgICAgICpcbiAgICAgICAgICogQXMgb2YgdG9kYXksIHRoZXJlIGFyZSA0IERPTSBldmVudCB0eXBlcyB5b3UgY2FuIGxpc3RlbiB0bzpcbiAgICAgICAgICpcbiAgICAgICAgICogICAnd2hlZWwnICAgICAgICAgICAgICAgIC0tIENocm9tZSgzMSspLCBGRigxNyspLCBJRSg5KylcbiAgICAgICAgICogICAnbW91c2V3aGVlbCcgICAgICAgICAgIC0tIENocm9tZSwgSUUoNispLCBPcGVyYSwgU2FmYXJpXG4gICAgICAgICAqICAgJ01vek1vdXNlUGl4ZWxTY3JvbGwnICAtLSBGRigzLjUgb25seSEpICgyMDEwLTIwMTMpIC0tIGRvbid0IGJvdGhlciFcbiAgICAgICAgICogICAnRE9NTW91c2VTY3JvbGwnICAgICAgIC0tIEZGKDAuOS43Kykgc2luY2UgMjAwM1xuICAgICAgICAgKlxuICAgICAgICAgKiBTbyB3aGF0IHRvIGRvPyAgVGhlIGlzIHRoZSBiZXN0OlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIG5vcm1hbGl6ZVdoZWVsLmdldEV2ZW50VHlwZSgpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBJbiB5b3VyIGV2ZW50IGNhbGxiYWNrLCB1c2UgdGhpcyBjb2RlIHRvIGdldCBzYW5lIGludGVycHJldGF0aW9uIG9mIHRoZVxuICAgICAgICAgKiBkZWx0YXMuICBUaGlzIGNvZGUgd2lsbCByZXR1cm4gYW4gb2JqZWN0IHdpdGggcHJvcGVydGllczpcbiAgICAgICAgICpcbiAgICAgICAgICogICBzcGluWCAgIC0tIG5vcm1hbGl6ZWQgc3BpbiBzcGVlZCAodXNlIGZvciB6b29tKSAtIHggcGxhbmVcbiAgICAgICAgICogICBzcGluWSAgIC0tIFwiIC0geSBwbGFuZVxuICAgICAgICAgKiAgIHBpeGVsWCAgLS0gbm9ybWFsaXplZCBkaXN0YW5jZSAodG8gcGl4ZWxzKSAtIHggcGxhbmVcbiAgICAgICAgICogICBwaXhlbFkgIC0tIFwiIC0geSBwbGFuZVxuICAgICAgICAgKlxuICAgICAgICAgKiBXaGVlbCB2YWx1ZXMgYXJlIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyIGFzc3VtaW5nIHlvdSBhcmUgdXNpbmcgdGhlIHdoZWVsIHRvXG4gICAgICAgICAqIHNjcm9sbCBhIHdlYiBwYWdlIGJ5IGEgbnVtYmVyIG9mIGxpbmVzIG9yIHBpeGVscyAob3IgcGFnZXMpLiAgVmFsdWVzIGNhbiB2YXJ5XG4gICAgICAgICAqIHNpZ25pZmljYW50bHkgb24gZGlmZmVyZW50IHBsYXRmb3JtcyBhbmQgYnJvd3NlcnMsIGZvcmdldHRpbmcgdGhhdCB5b3UgY2FuXG4gICAgICAgICAqIHNjcm9sbCBhdCBkaWZmZXJlbnQgc3BlZWRzLiAgU29tZSBkZXZpY2VzIChsaWtlIHRyYWNrcGFkcykgZW1pdCBtb3JlIGV2ZW50c1xuICAgICAgICAgKiBhdCBzbWFsbGVyIGluY3JlbWVudHMgd2l0aCBmaW5lIGdyYW51bGFyaXR5LCBhbmQgc29tZSBlbWl0IG1hc3NpdmUganVtcHMgd2l0aFxuICAgICAgICAgKiBsaW5lYXIgc3BlZWQgb3IgYWNjZWxlcmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGNvZGUgZG9lcyBpdHMgYmVzdCB0byBub3JtYWxpemUgdGhlIGRlbHRhcyBmb3IgeW91OlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIC0gc3BpbiBpcyB0cnlpbmcgdG8gbm9ybWFsaXplIGhvdyBmYXIgdGhlIHdoZWVsIHdhcyBzcHVuIChvciB0cmFja3BhZFxuICAgICAgICAgKiAgICAgZHJhZ2dlZCkuICBUaGlzIGlzIHN1cGVyIHVzZWZ1bCBmb3Igem9vbSBzdXBwb3J0IHdoZXJlIHlvdSB3YW50IHRvXG4gICAgICAgICAqICAgICB0aHJvdyBhd2F5IHRoZSBjaHVua3kgc2Nyb2xsIHN0ZXBzIG9uIHRoZSBQQyBhbmQgbWFrZSB0aG9zZSBlcXVhbCB0b1xuICAgICAgICAgKiAgICAgdGhlIHNsb3cgYW5kIHNtb290aCB0aW55IHN0ZXBzIG9uIHRoZSBNYWMuIEtleSBkYXRhOiBUaGlzIGNvZGUgdHJpZXMgdG9cbiAgICAgICAgICogICAgIHJlc29sdmUgYSBzaW5nbGUgc2xvdyBzdGVwIG9uIGEgd2hlZWwgdG8gMS5cbiAgICAgICAgICpcbiAgICAgICAgICogICAtIHBpeGVsIGlzIG5vcm1hbGl6aW5nIHRoZSBkZXNpcmVkIHNjcm9sbCBkZWx0YSBpbiBwaXhlbCB1bml0cy4gIFlvdSdsbFxuICAgICAgICAgKiAgICAgZ2V0IHRoZSBjcmF6eSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGJyb3dzZXJzLCBidXQgYXQgbGVhc3QgaXQnbGwgYmUgaW5cbiAgICAgICAgICogICAgIHBpeGVscyFcbiAgICAgICAgICpcbiAgICAgICAgICogICAtIHBvc2l0aXZlIHZhbHVlIGluZGljYXRlcyBzY3JvbGxpbmcgRE9XTi9SSUdIVCwgbmVnYXRpdmUgVVAvTEVGVC4gIFRoaXNcbiAgICAgICAgICogICAgIHNob3VsZCB0cmFuc2xhdGUgdG8gcG9zaXRpdmUgdmFsdWUgem9vbWluZyBJTiwgbmVnYXRpdmUgem9vbWluZyBPVVQuXG4gICAgICAgICAqICAgICBUaGlzIG1hdGNoZXMgdGhlIG5ld2VyICd3aGVlbCcgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFdoeSBhcmUgdGhlcmUgc3BpblgsIHNwaW5ZIChvciBwaXhlbHMpP1xuICAgICAgICAgKlxuICAgICAgICAgKiAgIC0gc3BpblggaXMgYSAyLWZpbmdlciBzaWRlIGRyYWcgb24gdGhlIHRyYWNrcGFkLCBhbmQgYSBzaGlmdCArIHdoZWVsIHR1cm5cbiAgICAgICAgICogICAgIHdpdGggYSBtb3VzZS4gIEl0IHJlc3VsdHMgaW4gc2lkZS1zY3JvbGxpbmcgaW4gdGhlIGJyb3dzZXIgYnkgZGVmYXVsdC5cbiAgICAgICAgICpcbiAgICAgICAgICogICAtIHNwaW5ZIGlzIHdoYXQgeW91IGV4cGVjdCAtLSBpdCdzIHRoZSBjbGFzc2ljIGF4aXMgb2YgYSBtb3VzZSB3aGVlbC5cbiAgICAgICAgICpcbiAgICAgICAgICogICAtIEkgZHJvcHBlZCBzcGluWi9waXhlbFouICBJdCBpcyBzdXBwb3J0ZWQgYnkgdGhlIERPTSAzICd3aGVlbCcgZXZlbnQgYW5kXG4gICAgICAgICAqICAgICBwcm9iYWJseSBpcyBieSBicm93c2VycyBpbiBjb25qdW5jdGlvbiB3aXRoIGZhbmN5IDNEIGNvbnRyb2xsZXJzIC4uIGJ1dFxuICAgICAgICAgKiAgICAgeW91IGtub3cuXG4gICAgICAgICAqXG4gICAgICAgICAqIEltcGxlbWVudGF0aW9uIGluZm86XG4gICAgICAgICAqXG4gICAgICAgICAqIEV4YW1wbGVzIG9mICd3aGVlbCcgZXZlbnQgaWYgeW91IHNjcm9sbCBzbG93bHkgKGRvd24pIGJ5IG9uZSBzdGVwIHdpdGggYW5cbiAgICAgICAgICogYXZlcmFnZSBtb3VzZTpcbiAgICAgICAgICpcbiAgICAgICAgICogICBPUyBYICsgQ2hyb21lICAobW91c2UpICAgICAtICAgIDQgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgLTEyMClcbiAgICAgICAgICogICBPUyBYICsgU2FmYXJpICAobW91c2UpICAgICAtICBOL0EgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgIC0xMilcbiAgICAgICAgICogICBPUyBYICsgRmlyZWZveCAobW91c2UpICAgICAtICAgIDAuMSBsaW5lICBkZWx0YSAgKHdoZWVsRGVsdGEgIE4vQSlcbiAgICAgICAgICogICBXaW44ICsgQ2hyb21lICAobW91c2UpICAgICAtICAxMDAgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgLTEyMClcbiAgICAgICAgICogICBXaW44ICsgRmlyZWZveCAobW91c2UpICAgICAtICAgIDMgICBsaW5lICBkZWx0YSAgKHdoZWVsRGVsdGEgLTEyMClcbiAgICAgICAgICpcbiAgICAgICAgICogT24gdGhlIHRyYWNrcGFkOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIE9TIFggKyBDaHJvbWUgICh0cmFja3BhZCkgIC0gICAgMiAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAgIC02KVxuICAgICAgICAgKiAgIE9TIFggKyBGaXJlZm94ICh0cmFja3BhZCkgIC0gICAgMSAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAgTi9BKVxuICAgICAgICAgKlxuICAgICAgICAgKiBPbiBvdGhlci9vbGRlciBicm93c2Vycy4uIGl0J3MgbW9yZSBjb21wbGljYXRlZCBhcyB0aGVyZSBjYW4gYmUgbXVsdGlwbGUgYW5kXG4gICAgICAgICAqIGFsc28gbWlzc2luZyBkZWx0YSB2YWx1ZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSAnd2hlZWwnIGV2ZW50IGlzIG1vcmUgc3RhbmRhcmQ6XG4gICAgICAgICAqXG4gICAgICAgICAqIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnRzLXdoZWVsZXZlbnRzXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBiYXNpY3MgaXMgdGhhdCBpdCBpbmNsdWRlcyBhIHVuaXQsIGRlbHRhTW9kZSAocGl4ZWxzLCBsaW5lcywgcGFnZXMpLCBhbmRcbiAgICAgICAgICogZGVsdGFYLCBkZWx0YVkgYW5kIGRlbHRhWi4gIFNvbWUgYnJvd3NlcnMgcHJvdmlkZSBvdGhlciB2YWx1ZXMgdG8gbWFpbnRhaW5cbiAgICAgICAgICogYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIGV2ZW50cy4gIFRob3NlIG90aGVyIHZhbHVlcyBoZWxwIHVzXG4gICAgICAgICAqIGJldHRlciBub3JtYWxpemUgc3BpbiBzcGVlZC4gIEV4YW1wbGUgb2Ygd2hhdCB0aGUgYnJvd3NlcnMgcHJvdmlkZTpcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXZlbnQud2hlZWxEZWx0YSB8IGV2ZW50LmRldGFpbFxuICAgICAgICAgKiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLVxuICAgICAgICAgKiAgICAgICAgICBTYWZhcmkgdjUvT1MgWCAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICAgICAgICAgKiAgICAgICAgICBTYWZhcmkgdjUvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICAgICAgICAgKiAgICAgICAgIENocm9tZSB2MTcvT1MgWCAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICAgICAgICAgKiAgICAgICAgIENocm9tZSB2MTcvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICAgICAgICAgKiAgICAgICAgICAgICAgICBJRTkvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICB1bmRlZmluZWRcbiAgICAgICAgICogICAgICAgICBGaXJlZm94IHY0L09TIFggIHwgICAgIHVuZGVmaW5lZCAgICB8ICAgICAgIDFcbiAgICAgICAgICogICAgICAgICBGaXJlZm94IHY0L1dpbjcgIHwgICAgIHVuZGVmaW5lZCAgICB8ICAgICAgIDNcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVdoZWVsKCAvKm9iamVjdCovIGV2ZW50ICkgLypvYmplY3QqLyB7XG4gICAgICAgICAgICAvLyBSZWFzb25hYmxlIGRlZmF1bHRzXG4gICAgICAgICAgICB2YXIgUElYRUxfU1RFUCA9IDEwO1xuICAgICAgICAgICAgdmFyIExJTkVfSEVJR0hUID0gNDA7XG4gICAgICAgICAgICB2YXIgUEFHRV9IRUlHSFQgPSA4MDA7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHNYID0gMCwgc1kgPSAwLCAgICAgICAvLyBzcGluWCwgc3BpbllcbiAgICAgICAgICAgICAgICBwWCA9IDAsIHBZID0gMDsgICAgICAgLy8gcGl4ZWxYLCBwaXhlbFlcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBMZWdhY3lcbiAgICAgICAgICAgIGlmKCAnZGV0YWlsJyBpbiBldmVudCApIHtcbiAgICAgICAgICAgICAgICBzWSA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCAnd2hlZWxEZWx0YScgaW4gZXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgc1kgPSAtZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCAnd2hlZWxEZWx0YVknIGluIGV2ZW50ICkge1xuICAgICAgICAgICAgICAgIHNZID0gLWV2ZW50LndoZWVsRGVsdGFZIC8gMTIwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoICd3aGVlbERlbHRhWCcgaW4gZXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgc1ggPSAtZXZlbnQud2hlZWxEZWx0YVggLyAxMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gc2lkZSBzY3JvbGxpbmcgb24gRkYgd2l0aCBET01Nb3VzZVNjcm9sbFxuICAgICAgICAgICAgaWYoICdheGlzJyBpbiBldmVudCAmJiBldmVudC5heGlzID09PSBldmVudC5IT1JJWk9OVEFMX0FYSVMgKSB7XG4gICAgICAgICAgICAgICAgc1ggPSBzWTtcbiAgICAgICAgICAgICAgICBzWSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcFggPSBzWCAqIFBJWEVMX1NURVA7XG4gICAgICAgICAgICBwWSA9IHNZICogUElYRUxfU1RFUDtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiggJ2RlbHRhWScgaW4gZXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgcFkgPSBldmVudC5kZWx0YVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggJ2RlbHRhWCcgaW4gZXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgcFggPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYoIChwWCB8fCBwWSkgJiYgZXZlbnQuZGVsdGFNb2RlICkge1xuICAgICAgICAgICAgICAgIGlmKCBldmVudC5kZWx0YU1vZGUgPT09IDEgKSB7ICAgICAgICAgIC8vIGRlbHRhIGluIExJTkUgdW5pdHNcbiAgICAgICAgICAgICAgICAgICAgcFggKj0gTElORV9IRUlHSFQ7XG4gICAgICAgICAgICAgICAgICAgIHBZICo9IExJTkVfSEVJR0hUO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWx0YSBpbiBQQUdFIHVuaXRzXG4gICAgICAgICAgICAgICAgICAgIHBYICo9IFBBR0VfSEVJR0hUO1xuICAgICAgICAgICAgICAgICAgICBwWSAqPSBQQUdFX0hFSUdIVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRmFsbC1iYWNrIGlmIHNwaW4gY2Fubm90IGJlIGRldGVybWluZWRcbiAgICAgICAgICAgIGlmKCBwWCAmJiAhc1ggKSB7XG4gICAgICAgICAgICAgICAgc1ggPSAocFggPCAxKSA/IC0xIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBwWSAmJiAhc1kgKSB7XG4gICAgICAgICAgICAgICAgc1kgPSAocFkgPCAxKSA/IC0xIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNwaW5YOiBzWCxcbiAgICAgICAgICAgICAgICBzcGluWTogc1ksXG4gICAgICAgICAgICAgICAgcGl4ZWxYOiBwWCxcbiAgICAgICAgICAgICAgICBwaXhlbFk6IHBZXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUGFyYWxsYXhcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiBzZXRQYXJhbGxheFRyYW5zZm9ybShlbCwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgcCwgcFgsIHBZO1xuICAgICAgICAgICAgdmFyIHJ0bEZhY3RvciA9IHMucnRsID8gLTEgOiAxO1xuICAgICAgICBcbiAgICAgICAgICAgIHAgPSBlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheCcpIHx8ICcwJztcbiAgICAgICAgICAgIHBYID0gZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteCcpO1xuICAgICAgICAgICAgcFkgPSBlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC15Jyk7XG4gICAgICAgICAgICBpZiAocFggfHwgcFkpIHtcbiAgICAgICAgICAgICAgICBwWCA9IHBYIHx8ICcwJztcbiAgICAgICAgICAgICAgICBwWSA9IHBZIHx8ICcwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBYID0gcDtcbiAgICAgICAgICAgICAgICAgICAgcFkgPSAnMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwWSA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHBYID0gJzAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoKHBYKS5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHBYID0gcGFyc2VJbnQocFgsIDEwKSAqIHByb2dyZXNzICogcnRsRmFjdG9yICsgJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcFggPSBwWCAqIHByb2dyZXNzICogcnRsRmFjdG9yICsgJ3B4JyA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHBZKS5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHBZID0gcGFyc2VJbnQocFksIDEwKSAqIHByb2dyZXNzICsgJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcFkgPSBwWSAqIHByb2dyZXNzICsgJ3B4JyA7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgZWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgnICsgcFggKyAnLCAnICsgcFkgKyAnLDBweCknKTtcbiAgICAgICAgfVxuICAgICAgICBzLnBhcmFsbGF4ID0ge1xuICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcy5jb250YWluZXIuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXJhbGxheFRyYW5zZm9ybSh0aGlzLCBzLnByb2dyZXNzKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmZpbmQoJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChzbGlkZVswXS5wcm9ncmVzcywgLTEpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcmFsbGF4VHJhbnNmb3JtKHRoaXMsIHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIGR1cmF0aW9uID0gcy5wYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgcy5jb250YWluZXIuZmluZCgnW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbGxheER1cmF0aW9uID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb24nKSwgMTApIHx8IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHBhcmFsbGF4RHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICBlbC50cmFuc2l0aW9uKHBhcmFsbGF4RHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBab29tXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy56b29tID0ge1xuICAgICAgICAgICAgLy8gXCJHbG9iYWxcIiBQcm9wc1xuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICBjdXJyZW50U2NhbGU6IDEsXG4gICAgICAgICAgICBpc1NjYWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZ2VzdHVyZToge1xuICAgICAgICAgICAgICAgIHNsaWRlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHNsaWRlSGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBpbWFnZVdyYXA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB6b29tTWF4OiBzLnBhcmFtcy56b29tTWF4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY3VycmVudFg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjdXJyZW50WTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG1pblg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBtaW5ZOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbWF4WDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG1heFk6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHRvdWNoZXNTdGFydDoge30sXG4gICAgICAgICAgICAgICAgdG91Y2hlc0N1cnJlbnQ6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgICAgICAgICB4OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgeTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHByZXZQb3NpdGlvblg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBwcmV2UG9zaXRpb25ZOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcHJldlRpbWU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIENhbGMgU2NhbGUgRnJvbSBNdWx0aS10b3VjaGVzXG4gICAgICAgICAgICBnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgdmFyIHgxID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICB5MSA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSxcbiAgICAgICAgICAgICAgICAgICAgeDIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgIHkyID0gZS50YXJnZXRUb3VjaGVzWzFdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzdGFuY2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gRXZlbnRzXG4gICAgICAgICAgICBvbkdlc3R1cmVTdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeiA9IHMuem9vbTtcbiAgICAgICAgICAgICAgICBpZiAoIXMuc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuc2NhbGVTdGFydCA9IHouZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuc2xpZGUgfHwgIXouZ2VzdHVyZS5zbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLnNsaWRlID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHouZ2VzdHVyZS5zbGlkZS5sZW5ndGggPT09IDApIHouZ2VzdHVyZS5zbGlkZSA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2UgPSB6Lmdlc3R1cmUuc2xpZGUuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwID0gei5nZXN0dXJlLmltYWdlLnBhcmVudCgnLicgKyBzLnBhcmFtcy56b29tQ29udGFpbmVyQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuem9vbU1heCA9IHouZ2VzdHVyZS5pbWFnZVdyYXAuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHMucGFyYW1zLnpvb21NYXggO1xuICAgICAgICAgICAgICAgICAgICBpZiAoei5nZXN0dXJlLmltYWdlV3JhcC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2UudHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICB6LmlzU2NhbGluZyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25HZXN0dXJlQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xuICAgICAgICAgICAgICAgIGlmICghcy5zdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaG1vdmUnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuc2NhbGVNb3ZlID0gei5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXouZ2VzdHVyZS5pbWFnZSB8fCB6Lmdlc3R1cmUuaW1hZ2UubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgICAgICAgICAgICAgICB6LnNjYWxlID0gZS5zY2FsZSAqIHouY3VycmVudFNjYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgei5zY2FsZSA9ICh6Lmdlc3R1cmUuc2NhbGVNb3ZlIC8gei5nZXN0dXJlLnNjYWxlU3RhcnQpICogei5jdXJyZW50U2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh6LnNjYWxlID4gei5nZXN0dXJlLnpvb21NYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgei5zY2FsZSA9IHouZ2VzdHVyZS56b29tTWF4IC0gMSArIE1hdGgucG93KCh6LnNjYWxlIC0gei5nZXN0dXJlLnpvb21NYXggKyAxKSwgMC41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHouc2NhbGUgPCBzLnBhcmFtcy56b29tTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHouc2NhbGUgPSAgcy5wYXJhbXMuem9vbU1pbiArIDEgLSBNYXRoLnBvdygocy5wYXJhbXMuem9vbU1pbiAtIHouc2NhbGUgKyAxKSwgMC41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKCcgKyB6LnNjYWxlICsgJyknKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkdlc3R1cmVFbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHogPSBzLnpvb207XG4gICAgICAgICAgICAgICAgaWYgKCFzLnN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGVuZCcgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuaW1hZ2UgfHwgei5nZXN0dXJlLmltYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHouc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih6LnNjYWxlLCB6Lmdlc3R1cmUuem9vbU1heCksIHMucGFyYW1zLnpvb21NaW4pO1xuICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZS50cmFuc2l0aW9uKHMucGFyYW1zLnNwZWVkKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgnICsgei5zY2FsZSArICcpJyk7XG4gICAgICAgICAgICAgICAgei5jdXJyZW50U2NhbGUgPSB6LnNjYWxlO1xuICAgICAgICAgICAgICAgIHouaXNTY2FsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHouc2NhbGUgPT09IDEpIHouZ2VzdHVyZS5zbGlkZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHogPSBzLnpvb207XG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuaW1hZ2UgfHwgei5nZXN0dXJlLmltYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmlzVG91Y2hlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChzLmRldmljZS5vcyA9PT0gJ2FuZHJvaWQnKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5pc1RvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UudG91Y2hlc1N0YXJ0LnggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgei5pbWFnZS50b3VjaGVzU3RhcnQueSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeiA9IHMuem9vbTtcbiAgICAgICAgICAgICAgICBpZiAoIXouZ2VzdHVyZS5pbWFnZSB8fCB6Lmdlc3R1cmUuaW1hZ2UubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF6LmltYWdlLmlzVG91Y2hlZCB8fCAhei5nZXN0dXJlLnNsaWRlKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghei5pbWFnZS5pc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2Uud2lkdGggPSB6Lmdlc3R1cmUuaW1hZ2VbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuaGVpZ2h0ID0gei5nZXN0dXJlLmltYWdlWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgei5pbWFnZS5zdGFydFggPSBzLmdldFRyYW5zbGF0ZSh6Lmdlc3R1cmUuaW1hZ2VXcmFwWzBdLCAneCcpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2Uuc3RhcnRZID0gcy5nZXRUcmFuc2xhdGUoei5nZXN0dXJlLmltYWdlV3JhcFswXSwgJ3knKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuc2xpZGVXaWR0aCA9IHouZ2VzdHVyZS5zbGlkZVswXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLnNsaWRlSGVpZ2h0ID0gei5nZXN0dXJlLnNsaWRlWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcC50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHouaW1hZ2Uuc3RhcnRYID0gLXouaW1hZ2Uuc3RhcnRYO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHouaW1hZ2Uuc3RhcnRZID0gLXouaW1hZ2Uuc3RhcnRZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgaWYgd2UgbmVlZCBpbWFnZSBkcmFnXG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlZFdpZHRoID0gei5pbWFnZS53aWR0aCAqIHouc2NhbGU7XG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlZEhlaWdodCA9IHouaW1hZ2UuaGVpZ2h0ICogei5zY2FsZTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNjYWxlZFdpZHRoIDwgei5nZXN0dXJlLnNsaWRlV2lkdGggJiYgc2NhbGVkSGVpZ2h0IDwgei5nZXN0dXJlLnNsaWRlSGVpZ2h0KSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHouaW1hZ2UubWluWCA9IE1hdGgubWluKCh6Lmdlc3R1cmUuc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIpLCAwKTtcbiAgICAgICAgICAgICAgICB6LmltYWdlLm1heFggPSAtei5pbWFnZS5taW5YO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UubWluWSA9IE1hdGgubWluKCh6Lmdlc3R1cmUuc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiksIDApO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UubWF4WSA9IC16LmltYWdlLm1pblk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIXouaW1hZ2UuaXNNb3ZlZCAmJiAhei5pc1NjYWxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChNYXRoLmZsb29yKHouaW1hZ2UubWluWCkgPT09IE1hdGguZmxvb3Ioei5pbWFnZS5zdGFydFgpICYmIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA8IHouaW1hZ2UudG91Y2hlc1N0YXJ0LngpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoTWF0aC5mbG9vcih6LmltYWdlLm1heFgpID09PSBNYXRoLmZsb29yKHouaW1hZ2Uuc3RhcnRYKSAmJiB6LmltYWdlLnRvdWNoZXNDdXJyZW50LnggPiB6LmltYWdlLnRvdWNoZXNTdGFydC54KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LmltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFzLmlzSG9yaXpvbnRhbCgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoTWF0aC5mbG9vcih6LmltYWdlLm1pblkpID09PSBNYXRoLmZsb29yKHouaW1hZ2Uuc3RhcnRZKSAmJiB6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgPCB6LmltYWdlLnRvdWNoZXNTdGFydC55KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKE1hdGguZmxvb3Ioei5pbWFnZS5tYXhZKSA9PT0gTWF0aC5mbG9vcih6LmltYWdlLnN0YXJ0WSkgJiYgei5pbWFnZS50b3VjaGVzQ3VycmVudC55ID4gei5pbWFnZS50b3VjaGVzU3RhcnQueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgei5pbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgei5pbWFnZS5pc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRYID0gei5pbWFnZS50b3VjaGVzQ3VycmVudC54IC0gei5pbWFnZS50b3VjaGVzU3RhcnQueCArIHouaW1hZ2Uuc3RhcnRYO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFkgPSB6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB6LmltYWdlLnRvdWNoZXNTdGFydC55ICsgei5pbWFnZS5zdGFydFk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRYIDwgei5pbWFnZS5taW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFggPSAgei5pbWFnZS5taW5YICsgMSAtIE1hdGgucG93KCh6LmltYWdlLm1pblggLSB6LmltYWdlLmN1cnJlbnRYICsgMSksIDAuOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRYID4gei5pbWFnZS5tYXhYKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFggPSB6LmltYWdlLm1heFggLSAxICsgTWF0aC5wb3coKHouaW1hZ2UuY3VycmVudFggLSB6LmltYWdlLm1heFggKyAxKSwgMC44KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRZIDwgei5pbWFnZS5taW5ZKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFkgPSAgei5pbWFnZS5taW5ZICsgMSAtIE1hdGgucG93KCh6LmltYWdlLm1pblkgLSB6LmltYWdlLmN1cnJlbnRZICsgMSksIDAuOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRZID4gei5pbWFnZS5tYXhZKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFkgPSB6LmltYWdlLm1heFkgLSAxICsgTWF0aC5wb3coKHouaW1hZ2UuY3VycmVudFkgLSB6LmltYWdlLm1heFkgKyAxKSwgMC44KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vVmVsb2NpdHlcbiAgICAgICAgICAgICAgICBpZiAoIXoudmVsb2NpdHkucHJldlBvc2l0aW9uWCkgei52ZWxvY2l0eS5wcmV2UG9zaXRpb25YID0gei5pbWFnZS50b3VjaGVzQ3VycmVudC54O1xuICAgICAgICAgICAgICAgIGlmICghei52ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblkgPSB6LmltYWdlLnRvdWNoZXNDdXJyZW50Lnk7XG4gICAgICAgICAgICAgICAgaWYgKCF6LnZlbG9jaXR5LnByZXZUaW1lKSB6LnZlbG9jaXR5LnByZXZUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB6LnZlbG9jaXR5LnggPSAoei5pbWFnZS50b3VjaGVzQ3VycmVudC54IC0gei52ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSAvIChEYXRlLm5vdygpIC0gei52ZWxvY2l0eS5wcmV2VGltZSkgLyAyO1xuICAgICAgICAgICAgICAgIHoudmVsb2NpdHkueSA9ICh6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblkpIC8gKERhdGUubm93KCkgLSB6LnZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIHoudmVsb2NpdHkucHJldlBvc2l0aW9uWCkgPCAyKSB6LnZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblkpIDwgMikgei52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgICAgICAgICB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblggPSB6LmltYWdlLnRvdWNoZXNDdXJyZW50Lng7XG4gICAgICAgICAgICAgICAgei52ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gei5pbWFnZS50b3VjaGVzQ3VycmVudC55O1xuICAgICAgICAgICAgICAgIHoudmVsb2NpdHkucHJldlRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHouaW1hZ2UuY3VycmVudFggKyAncHgsICcgKyB6LmltYWdlLmN1cnJlbnRZICsgJ3B4LDApJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gKHMsIGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeiA9IHMuem9vbTtcbiAgICAgICAgICAgICAgICBpZiAoIXouZ2VzdHVyZS5pbWFnZSB8fCB6Lmdlc3R1cmUuaW1hZ2UubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCF6LmltYWdlLmlzVG91Y2hlZCB8fCAhei5pbWFnZS5pc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb25YID0gMzAwO1xuICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bUR1cmF0aW9uWSA9IDMwMDtcbiAgICAgICAgICAgICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZVggPSB6LnZlbG9jaXR5LnggKiBtb21lbnR1bUR1cmF0aW9uWDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UG9zaXRpb25YID0gei5pbWFnZS5jdXJyZW50WCArIG1vbWVudHVtRGlzdGFuY2VYO1xuICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlWSA9IHoudmVsb2NpdHkueSAqIG1vbWVudHVtRHVyYXRpb25ZO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvblkgPSB6LmltYWdlLmN1cnJlbnRZICsgbW9tZW50dW1EaXN0YW5jZVk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vRml4IGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHoudmVsb2NpdHkueCAhPT0gMCkgbW9tZW50dW1EdXJhdGlvblggPSBNYXRoLmFicygobmV3UG9zaXRpb25YIC0gei5pbWFnZS5jdXJyZW50WCkgLyB6LnZlbG9jaXR5LngpO1xuICAgICAgICAgICAgICAgIGlmICh6LnZlbG9jaXR5LnkgIT09IDApIG1vbWVudHVtRHVyYXRpb25ZID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uWSAtIHouaW1hZ2UuY3VycmVudFkpIC8gei52ZWxvY2l0eS55KTtcbiAgICAgICAgICAgICAgICB2YXIgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGgubWF4KG1vbWVudHVtRHVyYXRpb25YLCBtb21lbnR1bUR1cmF0aW9uWSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFggPSBuZXdQb3NpdGlvblg7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5jdXJyZW50WSA9IG5ld1Bvc2l0aW9uWTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHdlIG5lZWQgaW1hZ2UgZHJhZ1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZWRXaWR0aCA9IHouaW1hZ2Uud2lkdGggKiB6LnNjYWxlO1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZWRIZWlnaHQgPSB6LmltYWdlLmhlaWdodCAqIHouc2NhbGU7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5taW5YID0gTWF0aC5taW4oKHouZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiksIDApO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UubWF4WCA9IC16LmltYWdlLm1pblg7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5taW5ZID0gTWF0aC5taW4oKHouZ2VzdHVyZS5zbGlkZUhlaWdodCAvIDIgLSBzY2FsZWRIZWlnaHQgLyAyKSwgMCk7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5tYXhZID0gLXouaW1hZ2UubWluWTtcbiAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRYID0gTWF0aC5tYXgoTWF0aC5taW4oei5pbWFnZS5jdXJyZW50WCwgei5pbWFnZS5tYXhYKSwgei5pbWFnZS5taW5YKTtcbiAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRZID0gTWF0aC5tYXgoTWF0aC5taW4oei5pbWFnZS5jdXJyZW50WSwgei5pbWFnZS5tYXhZKSwgei5pbWFnZS5taW5ZKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcC50cmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHouaW1hZ2UuY3VycmVudFggKyAncHgsICcgKyB6LmltYWdlLmN1cnJlbnRZICsgJ3B4LDApJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xuICAgICAgICAgICAgICAgIGlmICh6Lmdlc3R1cmUuc2xpZGUgJiYgcy5wcmV2aW91c0luZGV4ICE9PSBzLmFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApJyk7XG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5zbGlkZSA9IHouZ2VzdHVyZS5pbWFnZSA9IHouZ2VzdHVyZS5pbWFnZVdyYXAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHouc2NhbGUgPSB6LmN1cnJlbnRTY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBab29tXG4gICAgICAgICAgICB0b2dnbGVab29tOiBmdW5jdGlvbiAocywgZSkge1xuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xuICAgICAgICAgICAgICAgIGlmICghei5nZXN0dXJlLnNsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5zbGlkZSA9IHMuY2xpY2tlZFNsaWRlID8gJChzLmNsaWNrZWRTbGlkZSkgOiBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlID0gei5nZXN0dXJlLnNsaWRlLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMnKTtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcCA9IHouZ2VzdHVyZS5pbWFnZS5wYXJlbnQoJy4nICsgcy5wYXJhbXMuem9vbUNvbnRhaW5lckNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuaW1hZ2UgfHwgei5nZXN0dXJlLmltYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hYLCB0b3VjaFksIG9mZnNldFgsIG9mZnNldFksIGRpZmZYLCBkaWZmWSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNjYWxlZFdpZHRoLCBzY2FsZWRIZWlnaHQsIHRyYW5zbGF0ZU1pblgsIHRyYW5zbGF0ZU1pblksIHRyYW5zbGF0ZU1heFgsIHRyYW5zbGF0ZU1heFksIHNsaWRlV2lkdGgsIHNsaWRlSGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHouaW1hZ2UudG91Y2hlc1N0YXJ0LnggPT09ICd1bmRlZmluZWQnICYmIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hYID0gZS50eXBlID09PSAndG91Y2hlbmQnID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoWSA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hYID0gei5pbWFnZS50b3VjaGVzU3RhcnQueDtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hZID0gei5pbWFnZS50b3VjaGVzU3RhcnQueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh6LnNjYWxlICYmIHouc2NhbGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gWm9vbSBPdXRcbiAgICAgICAgICAgICAgICAgICAgei5zY2FsZSA9IHouY3VycmVudFNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuc2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBab29tIEluXG4gICAgICAgICAgICAgICAgICAgIHouc2NhbGUgPSB6LmN1cnJlbnRTY2FsZSA9IHouZ2VzdHVyZS5pbWFnZVdyYXAuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHMucGFyYW1zLnpvb21NYXg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVdpZHRoID0gei5nZXN0dXJlLnNsaWRlWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVIZWlnaHQgPSB6Lmdlc3R1cmUuc2xpZGVbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WCA9IHouZ2VzdHVyZS5zbGlkZS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WSA9IHouZ2VzdHVyZS5zbGlkZS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmWCA9IG9mZnNldFggKyBzbGlkZVdpZHRoLzIgLSB0b3VjaFg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmWSA9IG9mZnNldFkgKyBzbGlkZUhlaWdodC8yIC0gdG91Y2hZO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlV2lkdGggPSB6Lmdlc3R1cmUuaW1hZ2VbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhlaWdodCA9IHouZ2VzdHVyZS5pbWFnZVswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZWRXaWR0aCA9IGltYWdlV2lkdGggKiB6LnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVkSGVpZ2h0ID0gaW1hZ2VIZWlnaHQgKiB6LnNjYWxlO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZU1pblggPSBNYXRoLm1pbigoc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZU1pblkgPSBNYXRoLm1pbigoc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlTWF4WCA9IC10cmFuc2xhdGVNaW5YO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlTWF4WSA9IC10cmFuc2xhdGVNaW5ZO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSBkaWZmWCAqIHouc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gZGlmZlkgKiB6LnNjYWxlO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVYIDwgdHJhbnNsYXRlTWluWCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAgdHJhbnNsYXRlTWluWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVYID4gdHJhbnNsYXRlTWF4WCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVNYXhYO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVZIDwgdHJhbnNsYXRlTWluWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAgdHJhbnNsYXRlTWluWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVZID4gdHJhbnNsYXRlTWF4WSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNYXhZO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCAnICsgdHJhbnNsYXRlWSArICdweCwwKScpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2UudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKCcgKyB6LnNjYWxlICsgJyknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQXR0YWNoL0RldGFjaCBFdmVudHNcbiAgICAgICAgICAgIGF0dGFjaEV2ZW50czogZnVuY3Rpb24gKGRldGFjaCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBkZXRhY2ggPyAnb2ZmJyA6ICdvbic7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy56b29tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLnNsaWRlcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHMudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzLnN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHMucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7cGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2V9IDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNjYWxlIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzW2FjdGlvbl0oJ2dlc3R1cmVzdGFydCcsIHMuem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzW2FjdGlvbl0oJ2dlc3R1cmVjaGFuZ2UnLCBzLnpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNbYWN0aW9uXSgnZ2VzdHVyZWVuZCcsIHMuem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1thY3Rpb25dKHMudG91Y2hFdmVudHMuc3RhcnQsIHMuem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzW2FjdGlvbl0ocy50b3VjaEV2ZW50cy5tb3ZlLCBzLnpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNbYWN0aW9uXShzLnRvdWNoRXZlbnRzLmVuZCwgcy56b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBpbWFnZVxuICAgICAgICAgICAgICAgICAgICBzW2FjdGlvbl0oJ3RvdWNoU3RhcnQnLCBzLnpvb20ub25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHNsaWRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHNsaWRlKS5maW5kKCcuJyArIHMucGFyYW1zLnpvb21Db250YWluZXJDbGFzcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2xpZGUpW2FjdGlvbl0ocy50b3VjaEV2ZW50cy5tb3ZlLCBzLnpvb20ub25Ub3VjaE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc1thY3Rpb25dKCd0b3VjaEVuZCcsIHMuem9vbS5vblRvdWNoRW5kKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjYWxlIE91dFxuICAgICAgICAgICAgICAgICAgICBzW2FjdGlvbl0oJ3RyYW5zaXRpb25FbmQnLCBzLnpvb20ub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnpvb21Ub2dnbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMub24oJ2RvdWJsZVRhcCcsIHMuem9vbS50b2dnbGVab29tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcy56b29tLmF0dGFjaEV2ZW50cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzLnpvb20uYXR0YWNoRXZlbnRzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFBsdWdpbnMgQVBJLiBDb2xsZWN0IGFsbCBhbmQgaW5pdCBhbGwgcGx1Z2luc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuX3BsdWdpbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgcGx1Z2luIGluIHMucGx1Z2lucykge1xuICAgICAgICAgICAgdmFyIHAgPSBzLnBsdWdpbnNbcGx1Z2luXShzLCBzLnBhcmFtc1twbHVnaW5dKTtcbiAgICAgICAgICAgIGlmIChwKSBzLl9wbHVnaW5zLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWV0aG9kIHRvIGNhbGwgYWxsIHBsdWdpbnMgZXZlbnQvbWV0aG9kXG4gICAgICAgIHMuY2FsbFBsdWdpbnMgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuX3BsdWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lIGluIHMuX3BsdWdpbnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5fcGx1Z2luc1tpXVtldmVudE5hbWVdKGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSwgYXJndW1lbnRzWzVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgRXZlbnRzL0NhbGxiYWNrcy9QbHVnaW5zIEVtaXR0ZXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiBub3JtYWxpemVFdmVudE5hbWUgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZS5pbmRleE9mKCdvbicpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZVswXSAhPT0gZXZlbnROYW1lWzBdLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZVswXS50b1VwcGVyQ2FzZSgpICsgZXZlbnROYW1lLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9ICdvbicgKyBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50TmFtZTtcbiAgICAgICAgfVxuICAgICAgICBzLmVtaXR0ZXJFdmVudExpc3RlbmVycyA9IHtcbiAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHMuZW1pdCA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgY2FsbGJhY2tzXG4gICAgICAgICAgICBpZiAocy5wYXJhbXNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgICAgIHMucGFyYW1zW2V2ZW50TmFtZV0oYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdLCBhcmd1bWVudHNbNV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGV2ZW50c1xuICAgICAgICAgICAgaWYgKHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdW2ldKGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSwgYXJndW1lbnRzWzVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHBsdWdpbnNcbiAgICAgICAgICAgIGlmIChzLmNhbGxQbHVnaW5zKSBzLmNhbGxQbHVnaW5zKGV2ZW50TmFtZSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdLCBhcmd1bWVudHNbNV0pO1xuICAgICAgICB9O1xuICAgICAgICBzLm9uID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgZXZlbnROYW1lID0gbm9ybWFsaXplRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoIXMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0pIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgICAgIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9O1xuICAgICAgICBzLm9mZiA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZXZlbnROYW1lID0gbm9ybWFsaXplRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBoYW5kbGVycyBmb3Igc3VjaCBldmVudFxuICAgICAgICAgICAgICAgIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdW2ldID09PSBoYW5kbGVyKSBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9O1xuICAgICAgICBzLm9uY2UgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBldmVudE5hbWUgPSBub3JtYWxpemVFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIHZhciBfaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdKTtcbiAgICAgICAgICAgICAgICBzLm9mZihldmVudE5hbWUsIF9oYW5kbGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzLm9uKGV2ZW50TmFtZSwgX2hhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQWNjZXNzaWJpbGl0eSB0b29sc1xuICAgICAgICBzLmExMXkgPSB7XG4gICAgICAgICAgICBtYWtlRm9jdXNhYmxlOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ3RhYkluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZFJvbGU6IGZ1bmN0aW9uICgkZWwsIHJvbGUpIHtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cigncm9sZScsIHJvbGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIGFkZExhYmVsOiBmdW5jdGlvbiAoJGVsLCBsYWJlbCkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIGRpc2FibGU6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cignYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIGVuYWJsZTogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIG9uRW50ZXJLZXk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlICE9PSAxMykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXMocy5wYXJhbXMubmV4dEJ1dHRvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5vbkNsaWNrTmV4dChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkubm90aWZ5KHMucGFyYW1zLmxhc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm5vdGlmeShzLnBhcmFtcy5uZXh0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgkKGV2ZW50LnRhcmdldCkuaXMocy5wYXJhbXMucHJldkJ1dHRvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5vbkNsaWNrUHJldihldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkubm90aWZ5KHMucGFyYW1zLmZpcnN0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5ub3RpZnkocy5wYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcygnLicgKyBzLnBhcmFtcy5idWxsZXRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpWzBdLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICBsaXZlUmVnaW9uOiAkKCc8c3BhbiBjbGFzcz1cIicgKyBzLnBhcmFtcy5ub3RpZmljYXRpb25DbGFzcyArICdcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIj48L3NwYW4+JyksXG4gICAgICAgIFxuICAgICAgICAgICAgbm90aWZ5OiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHZhciBub3RpZmljYXRpb24gPSBzLmExMXkubGl2ZVJlZ2lvbjtcbiAgICAgICAgICAgICAgICBpZiAobm90aWZpY2F0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uaHRtbChtZXNzYWdlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0dXAgYWNjZXNzaWJpbGl0eVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbiAmJiBzLm5leHRCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkubWFrZUZvY3VzYWJsZShzLm5leHRCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkUm9sZShzLm5leHRCdXR0b24sICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZExhYmVsKHMubmV4dEJ1dHRvbiwgcy5wYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkubWFrZUZvY3VzYWJsZShzLnByZXZCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkUm9sZShzLnByZXZCdXR0b24sICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZExhYmVsKHMucHJldkJ1dHRvbiwgcy5wYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAkKHMuY29udGFpbmVyKS5hcHBlbmQocy5hMTF5LmxpdmVSZWdpb24pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRQYWdpbmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb24gJiYgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSAmJiBzLmJ1bGxldHMgJiYgcy5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnVsbGV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5tYWtlRm9jdXNhYmxlKGJ1bGxldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkUm9sZShidWxsZXQsICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5hZGRMYWJlbChidWxsZXQsIHMucGFyYW1zLnBhZ2luYXRpb25CdWxsZXRNZXNzYWdlLnJlcGxhY2UoL3t7aW5kZXh9fS8sIGJ1bGxldC5pbmRleCgpICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmExMXkubGl2ZVJlZ2lvbiAmJiBzLmExMXkubGl2ZVJlZ2lvbi5sZW5ndGggPiAwKSBzLmExMXkubGl2ZVJlZ2lvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgSW5pdC9EZXN0cm95XG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHMuY3JlYXRlTG9vcCgpO1xuICAgICAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplKCk7XG4gICAgICAgICAgICBzLnVwZGF0ZVNsaWRlc1NpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xuICAgICAgICAgICAgICAgIHMuc2Nyb2xsYmFyLnNldCgpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuZW5hYmxlRHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJyAmJiBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XSkge1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMubG9vcCkgcy51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgIHMuZWZmZWN0c1tzLnBhcmFtcy5lZmZlY3RdLnNldFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5wYXJhbXMuaW5pdGlhbFNsaWRlICsgcy5sb29wZWRTbGlkZXMsIDAsIHMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5wYXJhbXMuaW5pdGlhbFNsaWRlLCAwLCBzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5pbml0aWFsU2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYWxsYXggJiYgcy5wYXJhbXMucGFyYWxsYXgpIHMucGFyYWxsYXguc2V0VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxhenkgJiYgcy5wYXJhbXMubGF6eUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuYXR0YWNoRXZlbnRzKCk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMub2JzZXJ2ZXIgJiYgcy5zdXBwb3J0Lm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgcy5pbml0T2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucHJlbG9hZEltYWdlcyAmJiAhcy5wYXJhbXMubGF6eUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICBzLnByZWxvYWRJbWFnZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy56b29tICYmIHMuem9vbSkge1xuICAgICAgICAgICAgICAgIHMuem9vbS5pbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgICBzLnN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5rZXlib2FyZENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5lbmFibGVLZXlib2FyZENvbnRyb2wpIHMuZW5hYmxlS2V5Ym9hcmRDb250cm9sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCkgcy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVwcmVjYXRlZCBoYXNobmF2UmVwbGFjZVN0YXRlIGNoYW5nZWQgdG8gcmVwbGFjZVN0YXRlIGZvciB1c2UgaW4gaGFzaG5hdiBhbmQgaGlzdG9yeVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXZSZXBsYWNlU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFtcy5yZXBsYWNlU3RhdGUgPSBzLnBhcmFtcy5oYXNobmF2UmVwbGFjZVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5oaXN0b3J5KSBzLmhpc3RvcnkuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXYpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5oYXNobmF2KSBzLmhhc2huYXYuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuaW5pdCgpO1xuICAgICAgICAgICAgcy5lbWl0KCdvbkluaXQnLCBzKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIENsZWFudXAgZHluYW1pYyBzdHlsZXNcbiAgICAgICAgcy5jbGVhbnVwU3R5bGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ29udGFpbmVyXG4gICAgICAgICAgICBzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhzLmNsYXNzTmFtZXMuam9pbignICcpKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFdyYXBwZXJcbiAgICAgICAgICAgIHMud3JhcHBlci5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFNsaWRlc1xuICAgICAgICAgICAgaWYgKHMuc2xpZGVzICYmIHMuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMuc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhbXG4gICAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICBzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICBzLnBhcmFtcy5zbGlkZVByZXZDbGFzc1xuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJyAnKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLWNvbHVtbicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1yb3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBQYWdpbmF0aW9uL0J1bGxldHNcbiAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5yZW1vdmVDbGFzcyhzLnBhcmFtcy5wYWdpbmF0aW9uSGlkZGVuQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuYnVsbGV0cyAmJiBzLmJ1bGxldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcy5idWxsZXRzLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBCdXR0b25zXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldkJ1dHRvbikgJChzLnBhcmFtcy5wcmV2QnV0dG9uKS5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uKSAkKHMucGFyYW1zLm5leHRCdXR0b24pLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1dHRvbkRpc2FibGVkQ2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFNjcm9sbGJhclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xuICAgICAgICAgICAgICAgIGlmIChzLnNjcm9sbGJhci50cmFjayAmJiBzLnNjcm9sbGJhci50cmFjay5sZW5ndGgpIHMuc2Nyb2xsYmFyLnRyYWNrLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgaWYgKHMuc2Nyb2xsYmFyLmRyYWcgJiYgcy5zY3JvbGxiYXIuZHJhZy5sZW5ndGgpIHMuc2Nyb2xsYmFyLmRyYWcucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIERlc3Ryb3lcbiAgICAgICAgcy5kZXN0cm95ID0gZnVuY3Rpb24gKGRlbGV0ZUluc3RhbmNlLCBjbGVhbnVwU3R5bGVzKSB7XG4gICAgICAgICAgICAvLyBEZXRhY2ggZXZlYnRzXG4gICAgICAgICAgICBzLmRldGFjaEV2ZW50cygpO1xuICAgICAgICAgICAgLy8gU3RvcCBhdXRvcGxheVxuICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgIC8vIERpc2FibGUgZHJhZ2dhYmxlXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVzdHJveSBsb29wXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENsZWFudXAgc3R5bGVzXG4gICAgICAgICAgICBpZiAoY2xlYW51cFN0eWxlcykge1xuICAgICAgICAgICAgICAgIHMuY2xlYW51cFN0eWxlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGlzY29ubmVjdCBvYnNlcnZlclxuICAgICAgICAgICAgcy5kaXNjb25uZWN0T2JzZXJ2ZXJzKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRGVzdHJveSB6b29tXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuem9vbSAmJiBzLnpvb20pIHtcbiAgICAgICAgICAgICAgICBzLnpvb20uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGlzYWJsZSBrZXlib2FyZC9tb3VzZXdoZWVsXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMua2V5Ym9hcmRDb250cm9sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuZGlzYWJsZUtleWJvYXJkQ29udHJvbCkgcy5kaXNhYmxlS2V5Ym9hcmRDb250cm9sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5kaXNhYmxlTW91c2V3aGVlbENvbnRyb2wpIHMuZGlzYWJsZU1vdXNld2hlZWxDb250cm9sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEaXNhYmxlIGExMXlcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBoaXN0b3J5IHBvcHN0YXRlXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuaGlzdG9yeSAmJiAhcy5wYXJhbXMucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgcy5oaXN0b3J5LnNldEhpc3RvcnlQb3BTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuaGFzaG5hdiAmJiBzLmhhc2huYXYpICB7XG4gICAgICAgICAgICAgICAgcy5oYXNobmF2LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlc3Ryb3kgY2FsbGJhY2tcbiAgICAgICAgICAgIHMuZW1pdCgnb25EZXN0cm95Jyk7XG4gICAgICAgICAgICAvLyBEZWxldGUgaW5zdGFuY2VcbiAgICAgICAgICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHMgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5pbml0KCk7XG4gICAgICAgIFxuXG4gICAgXG4gICAgICAgIC8vIFJldHVybiBzd2lwZXIgaW5zdGFuY2VcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfTtcbiAgICBcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgUHJvdG90eXBlXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgU3dpcGVyLnByb3RvdHlwZSA9IHtcbiAgICAgICAgaXNTYWZhcmk6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuICh1YS5pbmRleE9mKCdzYWZhcmknKSA+PSAwICYmIHVhLmluZGV4T2YoJ2Nocm9tZScpIDwgMCAmJiB1YS5pbmRleE9mKCdhbmRyb2lkJykgPCAwKTtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgaXNVaVdlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksXG4gICAgICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgIH0sXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgQnJvd3NlclxuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgYnJvd3Nlcjoge1xuICAgICAgICAgICAgaWU6IHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgfHwgd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICAgICAgaWVUb3VjaDogKHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxKSB8fCAod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSksXG4gICAgICAgICAgICBsdGVJRTk6IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGVtcG9yYXJ5IERJVlxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAvLyBhZGQgY29udGVudCB0byB0bXAgRElWIHdoaWNoIGlzIHdyYXBwZWQgaW50byB0aGUgSUUgSFRNTCBjb25kaXRpb25hbCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzwhLS1baWYgbHRlIElFIDldPjxpPjwvaT48IVtlbmRpZl0tLT4nO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0cnVlIC8gZmFsc2UgdmFsdWUgYmFzZWQgb24gd2hhdCB3aWxsIGJyb3dzZXIgcmVuZGVyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaScpLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgICAgIH0pKClcbiAgICAgICAgfSxcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBEZXZpY2VzXG4gICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBkZXZpY2U6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICAgIHZhciBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pO1xuICAgICAgICAgICAgdmFyIGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pO1xuICAgICAgICAgICAgdmFyIGlwb2QgPSB1YS5tYXRjaCgvKGlQb2QpKC4qT1NcXHMoW1xcZF9dKykpPy8pO1xuICAgICAgICAgICAgdmFyIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpb3M6IGlwYWQgfHwgaXBob25lIHx8IGlwb2QsXG4gICAgICAgICAgICAgICAgYW5kcm9pZDogYW5kcm9pZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBGZWF0dXJlIERldGVjdGlvblxuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgc3VwcG9ydDoge1xuICAgICAgICAgICAgdG91Y2ggOiAod2luZG93Lk1vZGVybml6ciAmJiBNb2Rlcm5penIudG91Y2ggPT09IHRydWUpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCk7XG4gICAgICAgICAgICB9KSgpLFxuICAgIFxuICAgICAgICAgICAgdHJhbnNmb3JtczNkIDogKHdpbmRvdy5Nb2Rlcm5penIgJiYgTW9kZXJuaXpyLmNzc3RyYW5zZm9ybXMzZCA9PT0gdHJ1ZSkgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgnd2Via2l0UGVyc3BlY3RpdmUnIGluIGRpdiB8fCAnTW96UGVyc3BlY3RpdmUnIGluIGRpdiB8fCAnT1BlcnNwZWN0aXZlJyBpbiBkaXYgfHwgJ01zUGVyc3BlY3RpdmUnIGluIGRpdiB8fCAncGVyc3BlY3RpdmUnIGluIGRpdik7XG4gICAgICAgICAgICB9KSgpLFxuICAgIFxuICAgICAgICAgICAgZmxleGJveDogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlcyA9ICgnYWxpZ25JdGVtcyB3ZWJraXRBbGlnbkl0ZW1zIHdlYmtpdEJveEFsaWduIG1zRmxleEFsaWduIG1vekJveEFsaWduIHdlYmtpdEZsZXhEaXJlY3Rpb24gbXNGbGV4RGlyZWN0aW9uIG1vekJveERpcmVjdGlvbiBtb3pCb3hPcmllbnQgd2Via2l0Qm94RGlyZWN0aW9uIHdlYmtpdEJveE9yaWVudCcpLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlc1tpXSBpbiBkaXYpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCksXG4gICAgXG4gICAgICAgICAgICBvYnNlcnZlcjogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgfHwgJ1dlYmtpdE11dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyk7XG4gICAgICAgICAgICB9KSgpLFxuICAgIFxuICAgICAgICAgICAgcGFzc2l2ZUxpc3RlbmVyOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVMaXN0ZW5lcicsIG51bGwsIG9wdHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICAgICAgICAgIH0pKCksXG4gICAgXG4gICAgICAgICAgICBnZXN0dXJlczogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29uZ2VzdHVyZXN0YXJ0JyBpbiB3aW5kb3c7XG4gICAgICAgICAgICB9KSgpXG4gICAgICAgIH0sXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgUGx1Z2luc1xuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcGx1Z2luczoge31cbiAgICB9O1xuICAgIFxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBEb203IExpYnJhcnlcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHZhciBEb203ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIERvbTcgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzLCBpID0gMDtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhcnJheS1saWtlIG9iamVjdFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIF90aGlzW2ldID0gYXJyW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMubGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIFJldHVybiBjb2xsZWN0aW9uIHdpdGggbWV0aG9kc1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIHZhciAkID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgYXJyID0gW10sIGkgPSAwO1xuICAgICAgICAgICAgaWYgKHNlbGVjdG9yICYmICFjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RyaW5nXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVscywgdGVtcFBhcmVudCwgaHRtbCA9IHNlbGVjdG9yLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbC5pbmRleE9mKCc+JykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8bGknKSA9PT0gMCkgdG9DcmVhdGUgPSAndWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0ZCcpID09PSAwIHx8IGh0bWwuaW5kZXhPZignPHRoJykgPT09IDApIHRvQ3JlYXRlID0gJ3RyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0Ym9keScpID09PSAwKSB0b0NyZWF0ZSA9ICd0YWJsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHRvQ3JlYXRlID0gJ3NlbGVjdCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0b0NyZWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGFyZW50LmlubmVySFRNTCA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHRlbXBQYXJlbnQuY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgc2VsZWN0b3JbMF0gPT09ICcjJyAmJiAhc2VsZWN0b3IubWF0Y2goL1sgLjw+On5dLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQdXJlIElEIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnNwbGl0KCcjJylbMV0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyIHNlbGVjdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVscyA9IChjb250ZXh0IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxzW2ldKSBhcnIucHVzaChlbHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vZGUvZWxlbWVudFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yID09PSB3aW5kb3cgfHwgc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9BcnJheSBvZiBlbGVtZW50cyBvciBpbnN0YW5jZSBvZiBEb21cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3Rvci5sZW5ndGggPiAwICYmIHNlbGVjdG9yWzBdLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc2VsZWN0b3JbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KGFycik7XG4gICAgICAgIH07XG4gICAgICAgIERvbTcucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBhbmQgYXR0cml1dGVzXG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbal0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpc1swXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbal0uY2xhc3NMaXN0LnRvZ2dsZShjbGFzc2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRyOiBmdW5jdGlvbiAoYXR0cnMsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGF0dHJzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgYXR0clxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHRoaXNbMF0uZ2V0QXR0cmlidXRlKGF0dHJzKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGF0dHJzXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRycywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUtleSA9IHRoaXNbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXkpIHJldHVybiBkYXRhS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpc1swXS5kb203RWxlbWVudERhdGFTdG9yYWdlICYmIChrZXkgaW4gdGhpc1swXS5kb203RWxlbWVudERhdGFTdG9yYWdlKSkgcmV0dXJuIHRoaXNbMF0uZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBUcmFuc2Zvcm1zXG4gICAgICAgICAgICB0cmFuc2Zvcm0gOiBmdW5jdGlvbiAodHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFN0eWxlID0gdGhpc1tpXS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBlbFN0eWxlLk1zVHJhbnNmb3JtID0gZWxTdHlsZS5tc1RyYW5zZm9ybSA9IGVsU3R5bGUuTW96VHJhbnNmb3JtID0gZWxTdHlsZS5PVHJhbnNmb3JtID0gZWxTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsU3R5bGUgPSB0aGlzW2ldLnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICBlbFN0eWxlLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuTXNUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLm1zVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5Nb3pUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk9UcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL0V2ZW50c1xuICAgICAgICAgICAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGFyZ2V0KS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmNhbGwodGFyZ2V0LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50cyA9ICQodGFyZ2V0KS5wYXJlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHBhcmVudHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChwYXJlbnRzW2tdKS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmNhbGwocGFyZW50c1trXSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50cyA9IGV2ZW50TmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicgfHwgdGFyZ2V0U2VsZWN0b3IgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc3VhbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlID0gYXJndW1lbnRzWzJdIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbal0sIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vTGl2ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbaV0uZG9tN0xpdmVMaXN0ZW5lcnMpIHRoaXNbaV0uZG9tN0xpdmVMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmRvbTdMaXZlTGlzdGVuZXJzLnB1c2goe2xpc3RlbmVyOiBsaXN0ZW5lciwgbGl2ZUxpc3RlbmVyOiBoYW5kbGVMaXZlRXZlbnR9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzW2pdLCBoYW5kbGVMaXZlRXZlbnQsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50cyA9IGV2ZW50TmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJyB8fCB0YXJnZXRTZWxlY3RvciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc3VhbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlID0gYXJndW1lbnRzWzJdIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaXZlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbal0uZG9tN0xpdmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzW2pdLmRvbTdMaXZlTGlzdGVuZXJzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1tqXS5kb203TGl2ZUxpc3RlbmVyc1trXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCB0aGlzW2pdLmRvbTdMaXZlTGlzdGVuZXJzW2tdLmxpdmVMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jZTogZnVuY3Rpb24gKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvbSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcHJveHkoZSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcihlKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tLm9mZihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBwcm94eSwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvbS5vbihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBwcm94eSwgY2FwdHVyZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldnQ7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldnQgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbDogZXZlbnREYXRhLCBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LmRldGFpbCA9IGV2ZW50RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJywgJ29UcmFuc2l0aW9uRW5kJywgJ01TVHJhbnNpdGlvbkVuZCcsICdtc1RyYW5zaXRpb25FbmQnXSxcbiAgICAgICAgICAgICAgICAgICAgaSwgaiwgZG9tID0gdGhpcztcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgICAgICAgICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLm9mZihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5vbihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gU2l6aW5nL1N0eWxlc1xuICAgICAgICAgICAgd2lkdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1swXSA9PT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dGVyV2lkdGg6IGZ1bmN0aW9uIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW5zKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGggKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tbGVmdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ2hlaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dGVySGVpZ2h0OiBmdW5jdGlvbiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlTWFyZ2lucylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodCArIHBhcnNlRmxvYXQodGhpcy5jc3MoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tYm90dG9tJykpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsaWVudFRvcCAgPSBlbC5jbGllbnRUb3AgIHx8IGJvZHkuY2xpZW50VG9wICB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xpZW50TGVmdCA9IGVsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYm94LnRvcCAgKyBzY3JvbGxUb3AgIC0gY2xpZW50VG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNzczogZnVuY3Rpb24gKHByb3BzLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnN0eWxlW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgXG4gICAgICAgICAgICAvL0RvbSBtYW5pcHVsYXRpb25cbiAgICAgICAgICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNbaV0sIGksIHRoaXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBodG1sOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmlubmVySFRNTCA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGlmICghdGhpc1swXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBjb21wYXJlV2l0aCwgaTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgPT09IGRvY3VtZW50KSByZXR1cm4gc2VsZWN0b3IgPT09IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgPT09IHdpbmRvdykgcmV0dXJuIHNlbGVjdG9yID09PSB3aW5kb3c7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzKSByZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLm1vek1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1vek1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVXaXRoID0gJChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IHRoaXNbMF0pIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yID09PSBkb2N1bWVudCkgcmV0dXJuIHRoaXNbMF0gPT09IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yID09PSB3aW5kb3cpIHJldHVybiB0aGlzWzBdID09PSB3aW5kb3c7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvci5ub2RlVHlwZSB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVXaXRoID0gc2VsZWN0b3Iubm9kZVR5cGUgPyBbc2VsZWN0b3JdIDogc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IHRoaXNbMF0pIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVxOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5JbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuSW5kZXggPSBsZW5ndGggKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVybkluZGV4IDwgMCkgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW3RoaXNbcmV0dXJuSW5kZXhdXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1tpbmRleF1dKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcHBlbmQ6IGZ1bmN0aW9uIChuZXdDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ZW1wRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKHRlbXBEaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXBlbmQ6IGZ1bmN0aW9uIChuZXdDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IHRlbXBEaXYuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXNbaV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGRbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSAkKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlZm9yZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBiZWZvcmVbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJlZm9yZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJlZm9yZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVtqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYmVmb3JlW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnRBZnRlcjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gJChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZnRlci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGFmdGVyWzBdLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhZnRlci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFmdGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGFmdGVyW2pdLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nICYmICQodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkgcmV0dXJuIG5ldyBEb203KFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKSByZXR1cm4gbmV3IERvbTcoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHRBbGw6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0RWxzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgIHdoaWxlIChlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJChuZXh0KS5pcyhzZWxlY3RvcikpIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBuZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcobmV4dEVscyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgJiYgJCh0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkgcmV0dXJuIG5ldyBEb203KFt0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZBbGw6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2RWxzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgIHdoaWxlIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2ID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKHByZXYpLmlzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcHJldkVscy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgICAgICAgICBlbCA9IHByZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhwcmV2RWxzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJlbnQ6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpc1tpXS5wYXJlbnROb2RlKS5pcyhzZWxlY3RvcikpIHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICQoJC51bmlxdWUocGFyZW50cykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcmVudHM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHBhcmVudCkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICQoJC51bmlxdWUocGFyZW50cykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbmQgOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvdW5kLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEVsZW1lbnRzLnB1c2goZm91bmRbal0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhmb3VuZEVsZW1lbnRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZE5vZGVzO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNoaWxkTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2Rlc1tqXS5ub2RlVHlwZSA9PT0gMSkgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2pdLm5vZGVUeXBlID09PSAxICYmICQoY2hpbGROb2Rlc1tqXSkuaXMoc2VsZWN0b3IpKSBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNygkLnVuaXF1ZShjaGlsZHJlbikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlKSB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBkb20gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQWRkID0gJChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVtkb20ubGVuZ3RoXSA9IHRvQWRkW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLmxlbmd0aCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICQuZm4gPSBEb203LnByb3RvdHlwZTtcbiAgICAgICAgJC51bmlxdWUgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgICAgICB2YXIgdW5pcXVlID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh1bmlxdWUuaW5kZXhPZihhcnJbaV0pID09PSAtMSkgdW5pcXVlLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmlxdWU7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHJldHVybiAkO1xuICAgIH0pKCk7XG4gICAgXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBHZXQgRG9tIGxpYnJhcmllc1xuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHZhciBzd2lwZXJEb21QbHVnaW5zID0gWydqUXVlcnknLCAnWmVwdG8nLCAnRG9tNyddO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyRG9tUGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgIFx0aWYgKHdpbmRvd1tzd2lwZXJEb21QbHVnaW5zW2ldXSkge1xuICAgIFx0XHRhZGRMaWJyYXJ5UGx1Z2luKHdpbmRvd1tzd2lwZXJEb21QbHVnaW5zW2ldXSk7XG4gICAgXHR9XG4gICAgfVxuICAgIC8vIFJlcXVpcmVkIERPTSBQbHVnaW5zXG4gICAgdmFyIGRvbUxpYjtcbiAgICBpZiAodHlwZW9mIERvbTcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgXHRkb21MaWIgPSB3aW5kb3cuRG9tNyB8fCB3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgXHRkb21MaWIgPSBEb203O1xuICAgIH1cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgQWRkIC5zd2lwZXIgcGx1Z2luIGZyb20gRG9tIGxpYnJhcmllc1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgZnVuY3Rpb24gYWRkTGlicmFyeVBsdWdpbihsaWIpIHtcbiAgICAgICAgbGliLmZuLnN3aXBlciA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdEluc3RhbmNlO1xuICAgICAgICAgICAgbGliKHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzID0gbmV3IFN3aXBlcih0aGlzLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghZmlyc3RJbnN0YW5jZSkgZmlyc3RJbnN0YW5jZSA9IHM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdEluc3RhbmNlO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBpZiAoZG9tTGliKSB7XG4gICAgICAgIGlmICghKCd0cmFuc2l0aW9uRW5kJyBpbiBkb21MaWIuZm4pKSB7XG4gICAgICAgICAgICBkb21MaWIuZm4udHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCcsICdvVHJhbnNpdGlvbkVuZCcsICdNU1RyYW5zaXRpb25FbmQnLCAnbXNUcmFuc2l0aW9uRW5kJ10sXG4gICAgICAgICAgICAgICAgICAgIGksIGosIGRvbSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5vZmYoZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20ub24oZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISgndHJhbnNmb3JtJyBpbiBkb21MaWIuZm4pKSB7XG4gICAgICAgICAgICBkb21MaWIuZm4udHJhbnNmb3JtID0gZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGVsU3R5bGUud2Via2l0VHJhbnNmb3JtID0gZWxTdHlsZS5Nc1RyYW5zZm9ybSA9IGVsU3R5bGUubXNUcmFuc2Zvcm0gPSBlbFN0eWxlLk1velRyYW5zZm9ybSA9IGVsU3R5bGUuT1RyYW5zZm9ybSA9IGVsU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoJ3RyYW5zaXRpb24nIGluIGRvbUxpYi5mbikpIHtcbiAgICAgICAgICAgIGRvbUxpYi5mbi50cmFuc2l0aW9uID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGVsU3R5bGUud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5Nc1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUubXNUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk1velRyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuT1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISgnb3V0ZXJXaWR0aCcgaW4gZG9tTGliLmZuKSkge1xuICAgICAgICAgICAgZG9tTGliLmZuLm91dGVyV2lkdGggPSBmdW5jdGlvbiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlTWFyZ2lucylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdCh0aGlzLmNzcygnbWFyZ2luLXJpZ2h0JykpICsgcGFyc2VGbG9hdCh0aGlzLmNzcygnbWFyZ2luLWxlZnQnKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5Td2lwZXIgPSBTd2lwZXI7XG59KSgpO1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblN3aXBlciBBTUQgRXhwb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuaWYgKHR5cGVvZihtb2R1bGUpICE9PSAndW5kZWZpbmVkJylcbntcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5Td2lwZXI7XG59XG5lbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gd2luZG93LlN3aXBlcjtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcHMvc3dpcGVyLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N3aXBlci9zd2lwZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbG9yYm94L2NvbG9yYm94LmNzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N3aXBlci9zd2lwZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vc2Fzcy9zdHlsZS5zY3NzJyk7XG5yZXF1aXJlKCcuL3N3aXBlci9zd2lwZXIuY3NzJyk7XG5yZXF1aXJlKCcuL2NvbG9yYm94L2NvbG9yYm94LmNzcycpO1xuXG5yZXF1aXJlKCcuL2pzL25hdmlnYXRpb24uanMnKTtcbnJlcXVpcmUoJy4vanMvYWpheC1wYWdpbmF0aW9uLmpzJyk7XG5cbnJlcXVpcmUoJy4vc3dpcGVyL3N3aXBlci5qcycpO1xucmVxdWlyZSgnLi9zd2lwZXIvc3dpcGVyLXNjcmlwdC5qcycpO1xuXG5yZXF1aXJlKCcuL2NvbG9yYm94L2pxdWVyeS5jb2xvcmJveC1taW4uanMnKTtcbnJlcXVpcmUoJy4vY29sb3Jib3gvbGlnaHRib3guanMnKTtcblxucmVxdWlyZSgnLi9qcy9za2lwLWxpbmstZm9jdXMtZml4LmpzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9