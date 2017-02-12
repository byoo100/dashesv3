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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
	var $mobile_menubar_btn = $mobile_menubar.find('.mobile-btn-open');
	var $mobile_menulist = $nav.find('.mobile-menulist');
	var $mobile_menulist_btn = $mobile_menulist.find('.mobile-btn-close');
	var $mobile_blackscreen = $nav.find('#nav-blackscreen');
	var $desktop_menubar = $nav.find('.desktop-menubar');

	//Bind Events
	$mobile_menubar_btn.on('click', openMenu);
	$mobile_menulist_btn.on('click', closeMenu);
	$mobile_blackscreen.on('click', closeMenu);

	function openMenu() {
		if (!$mobile_menulist.hasClass('out')) {
			$mobile_menulist.addClass('out');
			$mobile_blackscreen.show();
		}
	}

	function closeMenu() {
		if ($mobile_menulist.hasClass('out')) {
			$mobile_menulist.removeClass('out');
			$mobile_blackscreen.hide();
		}
	}
})(jQuery);

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(1);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(0);

__webpack_require__(2);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmRhOTk0M2E0MTQ1OTJkNjUxYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FqYXgtcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2tpcC1saW5rLWZvY3VzLWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3dpcGVyLXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3dpcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zd2lwZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbIiQiLCIkcGFnZV9uYXYiLCIkY3Vycl9wYWdlIiwicGFnZV9udW0iLCIkY29udGFpbmVyIiwidXBkYXRlQ2FjaGUiLCJmaW5kIiwiZ2V0X3BhZ2VfbnVtIiwiZWxlbWVudCIsInZhbHVlIiwiaHRtbCIsInBhcnNlSW50IiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhamF4IiwidXJsIiwiYWpheHBhZ2luYXRpb24iLCJhamF4dXJsIiwidHlwZSIsImRhdGEiLCJhY3Rpb24iLCJxdWVyeV92YXJzIiwicGFnZSIsImJlZm9yZVNlbmQiLCJyZW1vdmUiLCJhcHBlbmQiLCJzdWNjZXNzIiwialF1ZXJ5IiwiJG5hdiIsIiRtb2JpbGVfbWVudWJhciIsIiRtb2JpbGVfbWVudWJhcl9idG4iLCIkbW9iaWxlX21lbnVsaXN0IiwiJG1vYmlsZV9tZW51bGlzdF9idG4iLCIkbW9iaWxlX2JsYWNrc2NyZWVuIiwiJGRlc2t0b3BfbWVudWJhciIsIm9wZW5NZW51IiwiY2xvc2VNZW51IiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInNob3ciLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJpc0llIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlkIiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyaW5nIiwidGFnTmFtZSIsInRhYkluZGV4IiwiZm9jdXMiLCJpbmRleF9iZyIsIlN3aXBlciIsImF1dG9wbGF5IiwibG9uZ1N3aXBlcyIsImxhenlMb2FkaW5nIiwibGF6eUxvYWRpbmdJblByZXZOZXh0IiwiYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbiIsImNvbnRhaW5lciIsInBhcmFtcyIsImRlZmF1bHRzIiwiZGlyZWN0aW9uIiwidG91Y2hFdmVudHNUYXJnZXQiLCJpbml0aWFsU2xpZGUiLCJzcGVlZCIsImF1dG9wbGF5U3RvcE9uTGFzdCIsImlPU0VkZ2VTd2lwZURldGVjdGlvbiIsImlPU0VkZ2VTd2lwZVRocmVzaG9sZCIsImZyZWVNb2RlIiwiZnJlZU1vZGVNb21lbnR1bSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsImZyZWVNb2RlTW9tZW50dW1Cb3VuY2UiLCJmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW8iLCJmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbyIsImZyZWVNb2RlU3RpY2t5IiwiZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkiLCJhdXRvSGVpZ2h0Iiwic2V0V3JhcHBlclNpemUiLCJ2aXJ0dWFsVHJhbnNsYXRlIiwiZWZmZWN0IiwiY292ZXJmbG93Iiwicm90YXRlIiwic3RyZXRjaCIsImRlcHRoIiwibW9kaWZpZXIiLCJzbGlkZVNoYWRvd3MiLCJmbGlwIiwibGltaXRSb3RhdGlvbiIsImN1YmUiLCJzaGFkb3ciLCJzaGFkb3dPZmZzZXQiLCJzaGFkb3dTY2FsZSIsImZhZGUiLCJjcm9zc0ZhZGUiLCJwYXJhbGxheCIsInpvb20iLCJ6b29tTWF4Iiwiem9vbU1pbiIsInpvb21Ub2dnbGUiLCJzY3JvbGxiYXIiLCJzY3JvbGxiYXJIaWRlIiwic2Nyb2xsYmFyRHJhZ2dhYmxlIiwic2Nyb2xsYmFyU25hcE9uUmVsZWFzZSIsImtleWJvYXJkQ29udHJvbCIsIm1vdXNld2hlZWxDb250cm9sIiwibW91c2V3aGVlbFJlbGVhc2VPbkVkZ2VzIiwibW91c2V3aGVlbEludmVydCIsIm1vdXNld2hlZWxGb3JjZVRvQXhpcyIsIm1vdXNld2hlZWxTZW5zaXRpdml0eSIsIm1vdXNld2hlZWxFdmVudHNUYXJnZWQiLCJoYXNobmF2IiwiaGFzaG5hdldhdGNoU3RhdGUiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiYnJlYWtwb2ludHMiLCJ1bmRlZmluZWQiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3Iiwic2xpZGVzUGVyQ29sdW1uIiwic2xpZGVzUGVyQ29sdW1uRmlsbCIsInNsaWRlc1Blckdyb3VwIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXNPZmZzZXRCZWZvcmUiLCJzbGlkZXNPZmZzZXRBZnRlciIsInJvdW5kTGVuZ3RocyIsInRvdWNoUmF0aW8iLCJ0b3VjaEFuZ2xlIiwic2ltdWxhdGVUb3VjaCIsInNob3J0U3dpcGVzIiwibG9uZ1N3aXBlc1JhdGlvIiwibG9uZ1N3aXBlc01zIiwiZm9sbG93RmluZ2VyIiwib25seUV4dGVybmFsIiwidGhyZXNob2xkIiwidG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uIiwidG91Y2hSZWxlYXNlT25FZGdlcyIsInVuaXF1ZU5hdkVsZW1lbnRzIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25FbGVtZW50IiwicGFnaW5hdGlvbkNsaWNrYWJsZSIsInBhZ2luYXRpb25IaWRlIiwicGFnaW5hdGlvbkJ1bGxldFJlbmRlciIsInBhZ2luYXRpb25Qcm9ncmVzc1JlbmRlciIsInBhZ2luYXRpb25GcmFjdGlvblJlbmRlciIsInBhZ2luYXRpb25DdXN0b21SZW5kZXIiLCJwYWdpbmF0aW9uVHlwZSIsInJlc2lzdGFuY2UiLCJyZXNpc3RhbmNlUmF0aW8iLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJ3YXRjaFNsaWRlc1Zpc2liaWxpdHkiLCJncmFiQ3Vyc29yIiwicHJldmVudENsaWNrcyIsInByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJsYXp5TG9hZGluZ0luUHJldk5leHRBbW91bnQiLCJsYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0IiwicHJlbG9hZEltYWdlcyIsInVwZGF0ZU9uSW1hZ2VzUmVhZHkiLCJsb29wIiwibG9vcEFkZGl0aW9uYWxTbGlkZXMiLCJsb29wZWRTbGlkZXMiLCJjb250cm9sIiwiY29udHJvbEludmVyc2UiLCJjb250cm9sQnkiLCJub3JtYWxpemVTbGlkZUluZGV4IiwiYWxsb3dTd2lwZVRvUHJldiIsImFsbG93U3dpcGVUb05leHQiLCJzd2lwZUhhbmRsZXIiLCJub1N3aXBpbmciLCJub1N3aXBpbmdDbGFzcyIsInBhc3NpdmVMaXN0ZW5lcnMiLCJjb250YWluZXJNb2RpZmllckNsYXNzIiwic2xpZGVDbGFzcyIsInNsaWRlQWN0aXZlQ2xhc3MiLCJzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzIiwic2xpZGVWaXNpYmxlQ2xhc3MiLCJzbGlkZUR1cGxpY2F0ZUNsYXNzIiwic2xpZGVOZXh0Q2xhc3MiLCJzbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyIsInNsaWRlUHJldkNsYXNzIiwic2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MiLCJ3cmFwcGVyQ2xhc3MiLCJidWxsZXRDbGFzcyIsImJ1bGxldEFjdGl2ZUNsYXNzIiwiYnV0dG9uRGlzYWJsZWRDbGFzcyIsInBhZ2luYXRpb25DdXJyZW50Q2xhc3MiLCJwYWdpbmF0aW9uVG90YWxDbGFzcyIsInBhZ2luYXRpb25IaWRkZW5DbGFzcyIsInBhZ2luYXRpb25Qcm9ncmVzc2JhckNsYXNzIiwicGFnaW5hdGlvbkNsaWNrYWJsZUNsYXNzIiwicGFnaW5hdGlvbk1vZGlmaWVyQ2xhc3MiLCJsYXp5TG9hZGluZ0NsYXNzIiwibGF6eVN0YXR1c0xvYWRpbmdDbGFzcyIsImxhenlTdGF0dXNMb2FkZWRDbGFzcyIsImxhenlQcmVsb2FkZXJDbGFzcyIsIm5vdGlmaWNhdGlvbkNsYXNzIiwicHJlbG9hZGVyQ2xhc3MiLCJ6b29tQ29udGFpbmVyQ2xhc3MiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwiYTExeSIsInByZXZTbGlkZU1lc3NhZ2UiLCJuZXh0U2xpZGVNZXNzYWdlIiwiZmlyc3RTbGlkZU1lc3NhZ2UiLCJsYXN0U2xpZGVNZXNzYWdlIiwicGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2UiLCJydW5DYWxsYmFja3NPbkluaXQiLCJpbml0aWFsVmlydHVhbFRyYW5zbGF0ZSIsIm9yaWdpbmFsUGFyYW1zIiwicGFyYW0iLCJub2RlVHlwZSIsIkRvbTciLCJkZWVwUGFyYW0iLCJkZWYiLCJkZWVwRGVmIiwicyIsImNsYXNzTmFtZXMiLCJaZXB0byIsImN1cnJlbnRCcmVha3BvaW50IiwiZ2V0QWN0aXZlQnJlYWtwb2ludCIsImJyZWFrcG9pbnQiLCJwb2ludHMiLCJwb2ludCIsImhhc093blByb3BlcnR5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImkiLCJsZW5ndGgiLCJpbm5lcldpZHRoIiwic2V0QnJlYWtwb2ludCIsImJyZWFrUG9pbnRzUGFyYW1zIiwibmVlZHNSZUxvb3AiLCJkZXN0cm95TG9vcCIsInJlTG9vcCIsInN3aXBlcnMiLCJlYWNoIiwic3dpcGVyIiwic3VwcG9ydCIsImZsZXhib3giLCJpbmRleE9mIiwidHJhbnNmb3JtczNkIiwidG91Y2giLCJ3cmFwcGVyIiwiY2hpbGRyZW4iLCJwYWdpbmF0aW9uQ29udGFpbmVyIiwiaXNIb3Jpem9udGFsIiwicnRsIiwiZGlyIiwidG9Mb3dlckNhc2UiLCJjc3MiLCJ3cm9uZ1JUTCIsImRldmljZSIsImFuZHJvaWQiLCJqb2luIiwidHJhbnNsYXRlIiwicHJvZ3Jlc3MiLCJ2ZWxvY2l0eSIsImxvY2tTd2lwZVRvTmV4dCIsInVuc2V0R3JhYkN1cnNvciIsImxvY2tTd2lwZVRvUHJldiIsImxvY2tTd2lwZXMiLCJ1bmxvY2tTd2lwZVRvTmV4dCIsInNldEdyYWJDdXJzb3IiLCJ1bmxvY2tTd2lwZVRvUHJldiIsInVubG9ja1N3aXBlcyIsInJvdW5kIiwiTWF0aCIsImZsb29yIiwibW92aW5nIiwic3R5bGUiLCJjdXJzb3IiLCJpbWFnZXNUb0xvYWQiLCJpbWFnZXNMb2FkZWQiLCJsb2FkSW1hZ2UiLCJpbWdFbGVtZW50Iiwic3JjIiwic3Jjc2V0Iiwic2l6ZXMiLCJjaGVja0ZvckNvbXBsZXRlIiwiY2FsbGJhY2siLCJpbWFnZSIsIm9uUmVhZHkiLCJjb21wbGV0ZSIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsIl9vblJlYWR5IiwidXBkYXRlIiwiZW1pdCIsImN1cnJlbnRTcmMiLCJnZXRBdHRyaWJ1dGUiLCJhdXRvcGxheVRpbWVvdXRJZCIsImF1dG9wbGF5aW5nIiwiYXV0b3BsYXlQYXVzZWQiLCJhdXRvcGxheURlbGF5IiwiYWN0aXZlU2xpZGUiLCJzbGlkZXMiLCJlcSIsImFjdGl2ZUluZGV4IiwiYXR0ciIsInNldFRpbWVvdXQiLCJmaXhMb29wIiwiX3NsaWRlTmV4dCIsImlzRW5kIiwiX3NsaWRlVG8iLCJzdG9wQXV0b3BsYXkiLCJzdGFydEF1dG9wbGF5IiwiaW50ZXJuYWwiLCJjbGVhclRpbWVvdXQiLCJwYXVzZUF1dG9wbGF5IiwidHJhbnNpdGlvbkVuZCIsIm1pblRyYW5zbGF0ZSIsInNuYXBHcmlkIiwibWF4VHJhbnNsYXRlIiwidXBkYXRlQXV0b0hlaWdodCIsImFjdGl2ZVNsaWRlcyIsIm5ld0hlaWdodCIsImNlaWwiLCJpbmRleCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInVwZGF0ZUNvbnRhaW5lclNpemUiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2l6ZSIsInVwZGF0ZVNsaWRlc1NpemUiLCJzbGlkZXNHcmlkIiwic2xpZGVzU2l6ZXNHcmlkIiwic2xpZGVQb3NpdGlvbiIsInByZXZTbGlkZVNpemUiLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsInZpcnR1YWxTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwic2xpZGVzTnVtYmVyRXZlblRvUm93cyIsIm1heCIsInNsaWRlU2l6ZSIsInNsaWRlc1BlclJvdyIsIm51bUZ1bGxDb2x1bW5zIiwic2xpZGUiLCJuZXdTbGlkZU9yZGVySW5kZXgiLCJjb2x1bW4iLCJyb3ciLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJzd2lwZXJTbGlkZVNpemUiLCJhYnMiLCJuZXdTbGlkZXNHcmlkIiwidXBkYXRlU2xpZGVzT2Zmc2V0Iiwic3dpcGVyU2xpZGVPZmZzZXQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiY3VycmVudFNsaWRlc1BlclZpZXciLCJzcHYiLCJqIiwiYnJlYWtMb29wIiwidXBkYXRlU2xpZGVzUHJvZ3Jlc3MiLCJvZmZzZXRDZW50ZXIiLCJzbGlkZVByb2dyZXNzIiwic2xpZGVCZWZvcmUiLCJzbGlkZUFmdGVyIiwiaXNWaXNpYmxlIiwidXBkYXRlUHJvZ3Jlc3MiLCJ0cmFuc2xhdGVzRGlmZiIsIndhc0JlZ2lubmluZyIsImlzQmVnaW5uaW5nIiwid2FzRW5kIiwidXBkYXRlQWN0aXZlSW5kZXgiLCJuZXdBY3RpdmVJbmRleCIsInNuYXBJbmRleCIsInByZXZpb3VzSW5kZXgiLCJ1cGRhdGVDbGFzc2VzIiwidXBkYXRlUmVhbEluZGV4IiwicmVhbEluZGV4IiwibmV4dFNsaWRlIiwibmV4dCIsInByZXZTbGlkZSIsInByZXYiLCJjdXJyZW50IiwidG90YWwiLCJidWxsZXRzIiwidGV4dCIsInNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImRpc2FibGUiLCJlbmFibGUiLCJ1cGRhdGVQYWdpbmF0aW9uIiwicGFnaW5hdGlvbkhUTUwiLCJudW1iZXJPZkJ1bGxldHMiLCJpbml0UGFnaW5hdGlvbiIsInVwZGF0ZVRyYW5zbGF0ZSIsInNldCIsImZvcmNlU2V0VHJhbnNsYXRlIiwibmV3VHJhbnNsYXRlIiwibWluIiwic2V0V3JhcHBlclRyYW5zbGF0ZSIsInRyYW5zbGF0ZWQiLCJjb250cm9sbGVyIiwic3BsaW5lIiwic2xpZGVUbyIsIm9uUmVzaXplIiwiZm9yY2VVcGRhdGVQYWdpbmF0aW9uIiwic2xpZGVDaGFuZ2VkQnlTbGlkZVRvIiwibGF6eSIsImxvYWQiLCJ0b3VjaEV2ZW50c0Rlc2t0b3AiLCJzdGFydCIsIm1vdmUiLCJlbmQiLCJwb2ludGVyRW5hYmxlZCIsIm1zUG9pbnRlckVuYWJsZWQiLCJ0b3VjaEV2ZW50cyIsImluaXRFdmVudHMiLCJkZXRhY2giLCJhY3Rpb25Eb20iLCJ0YXJnZXQiLCJtb3ZlQ2FwdHVyZSIsIm5lc3RlZCIsImJyb3dzZXIiLCJpZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsInBhc3NpdmVMaXN0ZW5lciIsInBhc3NpdmUiLCJjYXB0dXJlIiwiaW9zIiwib25DbGlja05leHQiLCJvbkVudGVyS2V5Iiwib25DbGlja1ByZXYiLCJvbkNsaWNrSW5kZXgiLCJhdHRhY2hFdmVudHMiLCJkZXRhY2hFdmVudHMiLCJhbGxvd0NsaWNrIiwiZSIsImFuaW1hdGluZyIsInN0b3BQcm9wYWdhdGlvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNsaWRlTmV4dCIsInNsaWRlUHJldiIsImZpbmRFbGVtZW50SW5FdmVudCIsInNlbGVjdG9yIiwiZWwiLCJpcyIsInBhcmVudHMiLCJmb3VuZCIsIl9lbCIsInVwZGF0ZUNsaWNrZWRTbGlkZSIsInNsaWRlRm91bmQiLCJjbGlja2VkU2xpZGUiLCJjbGlja2VkSW5kZXgiLCJzbGlkZVRvSW5kZXgiLCJkdXBsaWNhdGVkU2xpZGVzIiwiaXNUb3VjaGVkIiwiaXNNb3ZlZCIsImFsbG93VG91Y2hDYWxsYmFja3MiLCJ0b3VjaFN0YXJ0VGltZSIsImlzU2Nyb2xsaW5nIiwiY3VycmVudFRyYW5zbGF0ZSIsInN0YXJ0VHJhbnNsYXRlIiwiYWxsb3dUaHJlc2hvbGRNb3ZlIiwiZm9ybUVsZW1lbnRzIiwibGFzdENsaWNrVGltZSIsIkRhdGUiLCJub3ciLCJjbGlja1RpbWVvdXQiLCJ2ZWxvY2l0aWVzIiwiYWxsb3dNb21lbnR1bUJvdW5jZSIsInRvdWNoZXMiLCJzdGFydFgiLCJzdGFydFkiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwiZGlmZiIsImlzVG91Y2hFdmVudCIsInN0YXJ0TW92aW5nIiwib3JpZ2luYWxFdmVudCIsIndoaWNoIiwidGFyZ2V0VG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJzd2lwZURpcmVjdGlvbiIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudGVkQnlOZXN0ZWRTd2lwZXIiLCJhdGFuMiIsIlBJIiwiaWVUb3VjaCIsImdldFdyYXBwZXJUcmFuc2xhdGUiLCJzZXRXcmFwcGVyVHJhbnNpdGlvbiIsInRyaWdnZXIiLCJkaXNhYmxlUGFyZW50U3dpcGVyIiwicG93IiwicG9zaXRpb24iLCJ0aW1lIiwiZ2V0VGltZSIsInRvdWNoRW5kVGltZSIsInRpbWVEaWZmIiwidG9nZ2xlQ2xhc3MiLCJjdXJyZW50UG9zIiwibGFzdE1vdmVFdmVudCIsInBvcCIsInZlbG9jaXR5RXZlbnQiLCJkaXN0YW5jZSIsIm1vbWVudHVtRHVyYXRpb24iLCJtb21lbnR1bURpc3RhbmNlIiwibmV3UG9zaXRpb24iLCJkb0JvdW5jZSIsImFmdGVyQm91bmNlUG9zaXRpb24iLCJib3VuY2VBbW91bnQiLCJzbGlkZVJlc2V0Iiwib25UcmFuc2l0aW9uU3RhcnQiLCJvblRyYW5zaXRpb25FbmQiLCJzdG9wSW5kZXgiLCJncm91cFNpemUiLCJyYXRpbyIsInNsaWRlSW5kZXgiLCJydW5DYWxsYmFja3MiLCJsdGVJRTkiLCJzZXRIaXN0b3J5Iiwic2V0SGFzaCIsImNsaWVudExlZnQiLCJfc2xpZGVQcmV2IiwiZGlzYWJsZVRvdWNoQ29udHJvbCIsImVuYWJsZVRvdWNoQ29udHJvbCIsImR1cmF0aW9uIiwiYnlDb250cm9sbGVyIiwiZWZmZWN0cyIsInNldFRyYW5zaXRpb24iLCJ4IiwieSIsInoiLCJzZXRUcmFuc2xhdGUiLCJnZXRUcmFuc2xhdGUiLCJheGlzIiwibWF0cml4IiwiY3VyVHJhbnNmb3JtIiwiY3VyU3R5bGUiLCJ0cmFuc2Zvcm1NYXRyaXgiLCJnZXRDb21wdXRlZFN0eWxlIiwiV2ViS2l0Q1NTTWF0cml4Iiwid2Via2l0VHJhbnNmb3JtIiwic3BsaXQiLCJtYXAiLCJNb3pUcmFuc2Zvcm0iLCJPVHJhbnNmb3JtIiwiTXNUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsImdldFByb3BlcnR5VmFsdWUiLCJ0b1N0cmluZyIsIm00MSIsIm00MiIsIm9ic2VydmVycyIsImluaXRPYnNlcnZlciIsIm9wdGlvbnMiLCJPYnNlcnZlckZ1bmMiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2Via2l0TXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImZvckVhY2giLCJtdXRhdGlvbiIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsImluaXRPYnNlcnZlcnMiLCJjb250YWluZXJQYXJlbnRzIiwiZGlzY29ubmVjdE9ic2VydmVycyIsImRpc2Nvbm5lY3QiLCJjcmVhdGVMb29wIiwicHJlcGVuZFNsaWRlcyIsImFwcGVuZFNsaWRlcyIsImNsb25lTm9kZSIsInByZXBlbmQiLCJyZW1vdmVBdHRyIiwidXBkYXRlUG9zaXRpb24iLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiYXBwZW5kU2xpZGUiLCJwcmVwZW5kU2xpZGUiLCJyZW1vdmVTbGlkZSIsInNsaWRlc0luZGV4ZXMiLCJpbmRleFRvUmVtb3ZlIiwicmVtb3ZlQWxsU2xpZGVzIiwib2Zmc2V0IiwidHgiLCJ0eSIsInNsaWRlT3BhY2l0eSIsIm9wYWNpdHkiLCJldmVudFRyaWdnZXJlZCIsInRyaWdnZXJFdmVudHMiLCJyb3RhdGVZIiwicm90YXRlWCIsInpJbmRleCIsInNoYWRvd0JlZm9yZSIsInNoYWRvd0FmdGVyIiwid3JhcHBlclJvdGF0ZSIsImN1YmVTaGFkb3ciLCJzbGlkZUFuZ2xlIiwidHoiLCJzaGFkb3dBbmdsZSIsIm11bHRpcGxpZXIiLCJzaW4iLCJjb3MiLCJzY2FsZTEiLCJzY2FsZTIiLCJ6RmFjdG9yIiwiaXNTYWZhcmkiLCJpc1VpV2ViVmlldyIsImNlbnRlciIsInNsaWRlT2Zmc2V0Iiwib2Zmc2V0TXVsdGlwbGllciIsInRyYW5zbGF0ZVoiLCJ0cmFuc2xhdGVZIiwidHJhbnNsYXRlWCIsInNsaWRlVHJhbnNmb3JtIiwid3MiLCJwZXJzcGVjdGl2ZU9yaWdpbiIsImluaXRpYWxJbWFnZUxvYWRlZCIsImxvYWRJbWFnZUluU2xpZGUiLCJsb2FkSW5EdXBsaWNhdGUiLCJpbWciLCJhZGQiLCJfaW1nIiwiYmFja2dyb3VuZCIsInNsaWRlT3JpZ2luYWxJbmRleCIsIm9yaWdpbmFsU2xpZGUiLCJkdXBsaWNhdGVkU2xpZGUiLCJhbW91bnQiLCJtYXhJbmRleCIsIm1pbkluZGV4Iiwic2V0RHJhZ1Bvc2l0aW9uIiwic2IiLCJwb2ludGVyUG9zaXRpb24iLCJjbGllbnRYIiwiY2xpZW50WSIsInRyYWNrIiwiZHJhZ1NpemUiLCJwb3NpdGlvbk1pbiIsIm1vdmVEaXZpZGVyIiwicG9zaXRpb25NYXgiLCJkcmFnU3RhcnQiLCJkcmFnVGltZW91dCIsImRyYWciLCJkcmFnTW92ZSIsInJldHVyblZhbHVlIiwiZHJhZ0VuZCIsImRyYWdnYWJsZUV2ZW50cyIsImVuYWJsZURyYWdnYWJsZSIsImRpc2FibGVEcmFnZ2FibGUiLCJvZmYiLCJ0cmFja1NpemUiLCJvZmZzZXRXaWR0aCIsImRpdmlkZXIiLCJkaXNwbGF5IiwibmV3UG9zIiwibmV3U2l6ZSIsInRpbWVvdXQiLCJMaW5lYXJTcGxpbmUiLCJsYXN0SW5kZXgiLCJpMSIsImkzIiwibCIsImludGVycG9sYXRlIiwieDIiLCJiaW5hcnlTZWFyY2giLCJndWVzcyIsImFycmF5IiwidmFsIiwiZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbiIsImMiLCJjb250cm9sbGVkIiwiY29udHJvbGxlZFRyYW5zbGF0ZSIsInNldENvbnRyb2xsZWRUcmFuc2xhdGUiLCJpc0FycmF5Iiwic2V0Q29udHJvbGxlZFRyYW5zaXRpb24iLCJvbkhhc2hDYW5nZSIsIm5ld0hhc2giLCJhY3RpdmVTbGlkZUhhc2giLCJpbml0aWFsaXplZCIsImluaXQiLCJzbGlkZUhhc2giLCJkZXN0cm95IiwicHVzaFN0YXRlIiwicGF0aHMiLCJnZXRQYXRoVmFsdWVzIiwia2V5Iiwic2Nyb2xsVG9TbGlkZSIsInNldEhpc3RvcnlQb3BTdGF0ZSIsInBhdGhBcnJheSIsInBhdGhuYW1lIiwic2xpY2UiLCJzbHVnaWZ5IiwiaW5jbHVkZXMiLCJzbGlkZUhpc3RvcnkiLCJoYW5kbGVLZXlib2FyZCIsImtjIiwia2V5Q29kZSIsImNoYXJDb2RlIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsIm5vZGVOYW1lIiwiaW5WaWV3Iiwid2luZG93U2Nyb2xsIiwibGVmdCIsInBhZ2VYT2Zmc2V0IiwidG9wIiwicGFnZVlPZmZzZXQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0Iiwic3dpcGVyT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInN3aXBlckNvb3JkIiwiZGlzYWJsZUtleWJvYXJkQ29udHJvbCIsImVuYWJsZUtleWJvYXJkQ29udHJvbCIsIm1vdXNld2hlZWwiLCJsYXN0U2Nyb2xsVGltZSIsImlzRXZlbnRTdXBwb3J0ZWQiLCJldmVudE5hbWUiLCJpc1N1cHBvcnRlZCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbXBsZW1lbnRhdGlvbiIsImhhc0ZlYXR1cmUiLCJoYW5kbGVNb3VzZXdoZWVsIiwiZGVsdGEiLCJydGxGYWN0b3IiLCJub3JtYWxpemVXaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsImRpc2FibGVNb3VzZXdoZWVsQ29udHJvbCIsImVuYWJsZU1vdXNld2hlZWxDb250cm9sIiwiUElYRUxfU1RFUCIsIkxJTkVfSEVJR0hUIiwiUEFHRV9IRUlHSFQiLCJzWCIsInNZIiwicFgiLCJwWSIsImRldGFpbCIsIndoZWVsRGVsdGEiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGFYIiwiSE9SSVpPTlRBTF9BWElTIiwiZGVsdGFZIiwiZGVsdGFYIiwiZGVsdGFNb2RlIiwic3BpblgiLCJzcGluWSIsInNldFBhcmFsbGF4VHJhbnNmb3JtIiwicCIsInBhcmFsbGF4RHVyYXRpb24iLCJjdXJyZW50U2NhbGUiLCJpc1NjYWxpbmciLCJnZXN0dXJlIiwic2xpZGVXaWR0aCIsInNsaWRlSGVpZ2h0IiwiaW1hZ2VXcmFwIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsInRvdWNoZXNTdGFydCIsInRvdWNoZXNDdXJyZW50IiwicHJldlBvc2l0aW9uWCIsInByZXZQb3NpdGlvblkiLCJwcmV2VGltZSIsImdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMiLCJ4MSIsInkxIiwieTIiLCJzcXJ0Iiwib25HZXN0dXJlU3RhcnQiLCJnZXN0dXJlcyIsInNjYWxlU3RhcnQiLCJwYXJlbnQiLCJvbkdlc3R1cmVDaGFuZ2UiLCJzY2FsZU1vdmUiLCJvbkdlc3R1cmVFbmQiLCJjaGFuZ2VkVG91Y2hlcyIsIm9zIiwic2NhbGVkV2lkdGgiLCJzY2FsZWRIZWlnaHQiLCJtb21lbnR1bUR1cmF0aW9uWCIsIm1vbWVudHVtRHVyYXRpb25ZIiwibW9tZW50dW1EaXN0YW5jZVgiLCJuZXdQb3NpdGlvblgiLCJtb21lbnR1bURpc3RhbmNlWSIsIm5ld1Bvc2l0aW9uWSIsInRvZ2dsZVpvb20iLCJ0b3VjaFgiLCJ0b3VjaFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImRpZmZYIiwiZGlmZlkiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJ0cmFuc2xhdGVNaW5YIiwidHJhbnNsYXRlTWluWSIsInRyYW5zbGF0ZU1heFgiLCJ0cmFuc2xhdGVNYXhZIiwiX3BsdWdpbnMiLCJwbHVnaW4iLCJwbHVnaW5zIiwiY2FsbFBsdWdpbnMiLCJhcmd1bWVudHMiLCJub3JtYWxpemVFdmVudE5hbWUiLCJ0b1VwcGVyQ2FzZSIsImVtaXR0ZXJFdmVudExpc3RlbmVycyIsImhhbmRsZXIiLCJzcGxpY2UiLCJvbmNlIiwiX2hhbmRsZXIiLCJtYWtlRm9jdXNhYmxlIiwiJGVsIiwiYWRkUm9sZSIsInJvbGUiLCJhZGRMYWJlbCIsImxhYmVsIiwibm90aWZ5IiwiY2xpY2siLCJsaXZlUmVnaW9uIiwibWVzc2FnZSIsIm5vdGlmaWNhdGlvbiIsImJ1bGxldCIsImhhc2huYXZSZXBsYWNlU3RhdGUiLCJjbGVhbnVwU3R5bGVzIiwiZGVsZXRlSW5zdGFuY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvdG90eXBlIiwidWEiLCJhcnIiLCJPYmplY3QiLCJhcHBseSIsIm1zTWF4VG91Y2hQb2ludHMiLCJtYXhUb3VjaFBvaW50cyIsImRpdiIsImlubmVySFRNTCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibWF0Y2giLCJpcGFkIiwiaXBvZCIsImlwaG9uZSIsIk1vZGVybml6ciIsIkRvY3VtZW50VG91Y2giLCJjc3N0cmFuc2Zvcm1zM2QiLCJzdHlsZXMiLCJzdXBwb3J0c1Bhc3NpdmUiLCJvcHRzIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJfdGhpcyIsImNvbnRleHQiLCJlbHMiLCJ0ZW1wUGFyZW50IiwidHJpbSIsInRvQ3JlYXRlIiwiY2hpbGROb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJhdHRycyIsImF0dHJOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwiZGF0YUtleSIsImRvbTdFbGVtZW50RGF0YVN0b3JhZ2UiLCJlbFN0eWxlIiwid2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uIiwiTXNUcmFuc2l0aW9uRHVyYXRpb24iLCJtc1RyYW5zaXRpb25EdXJhdGlvbiIsIk1velRyYW5zaXRpb25EdXJhdGlvbiIsIk9UcmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0YXJnZXRTZWxlY3RvciIsImxpc3RlbmVyIiwiaGFuZGxlTGl2ZUV2ZW50IiwiY2FsbCIsImsiLCJldmVudHMiLCJkb203TGl2ZUxpc3RlbmVycyIsImxpdmVMaXN0ZW5lciIsImRvbSIsInByb3h5IiwiZXZlbnREYXRhIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImZpcmVDYWxsQmFjayIsImluY2x1ZGVNYXJnaW5zIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keSIsImNsaWVudFRvcCIsInNjcm9sbFRvcCIsInByb3BzIiwicHJvcCIsInRleHRDb250ZW50IiwiY29tcGFyZVdpdGgiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJjaGlsZCIsInByZXZpb3VzU2libGluZyIsInJldHVybkluZGV4IiwibmV3Q2hpbGQiLCJ0ZW1wRGl2IiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwicGFyZW50Tm9kZSIsImluc2VydEFmdGVyIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsIm5leHRBbGwiLCJuZXh0RWxzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInByZXZBbGwiLCJwcmV2RWxzIiwidW5pcXVlIiwiZm91bmRFbGVtZW50cyIsInJlbW92ZUNoaWxkIiwidG9BZGQiLCJmbiIsInN3aXBlckRvbVBsdWdpbnMiLCJhZGRMaWJyYXJ5UGx1Z2luIiwiZG9tTGliIiwibGliIiwiZmlyc3RJbnN0YW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZpbmUiLCJhbWQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7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QVEsQ0FBUjs7QUFHQSxtQkFBQUEsQ0FBUSxDQUFSOztBQUVBLG1CQUFBQSxDQUFRLENBQVI7QUFDQSxtQkFBQUEsQ0FBUSxDQUFSO0FBQ0EsbUJBQUFBLENBQVEsQ0FBUjtBQUNBLG1CQUFBQSxDQUFRLENBQVI7O0FBRUEsbUJBQUFBLENBQVEsQ0FBUixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZkYTk5NDNhNDE0NTkyZDY1MWExIiwiLy8gV09SRFBSRVNTIEFKQVhcclxuLy8gUmVmZXJlbmNlczpcclxuLy8gaHR0cHM6Ly9wcmVtaXVtLndwbXVkZXYub3JnL2Jsb2cvbG9hZC1wb3N0cy1hamF4Lz9ta3NpPWImdXRtX2V4cGlkPTM2MDY5MjktOTQuU1dHa1E5aHlRUUd4Sk50Z0VpQmdXQS4xJnV0bV9yZWZlcnJlcj1odHRwcyUzQSUyRiUyRnd3dy5nb29nbGUuY29tJTJGXHJcbi8vIGh0dHBzOi8vcHJlbWl1bS53cG11ZGV2Lm9yZy9ibG9nL3VzaW5nLWFqYXgtd2l0aC13b3JkcHJlc3MvP21rc2k9YiZ1dG1fZXhwaWQ9MzYwNjkyOS05NC5TV0drUTloeVFRR3hKTnRnRWlCZ1dBLjEmdXRtX3JlZmVycmVyPWh0dHBzJTNBJTJGJTJGd3d3Lmdvb2dsZS5jb20lMkZcclxuLy8gaHR0cDovL3dvcmRwcmVzcy5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvMzU4NDkvdXNpbmctYWpheC1vbi1jYXRlZ29yaWVzLWFuZC13b3JkcHJlc3MtbG9vcHNcclxuXHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHJcblx0Ly9DYWNoZSBEb21cclxuXHR2YXIgJHBhZ2VfbmF2LCAkY3Vycl9wYWdlLCBwYWdlX251bTtcclxuXHR2YXIgJGNvbnRhaW5lciA9ICQoJyNhcnRpY2xlLWluZGV4Jyk7XHJcblxyXG5cclxuXHRmdW5jdGlvbiB1cGRhdGVDYWNoZSgpIHtcclxuXHRcdCRwYWdlX25hdiA9ICRjb250YWluZXIuZmluZCgnLnBhZ2luZy1uYXZpZ2F0aW9uJyk7XHJcblx0XHQkY3Vycl9wYWdlID0gJHBhZ2VfbmF2LmZpbmQoJy5jdXJyZW50Jyk7XHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gZ2V0X3BhZ2VfbnVtKCBlbGVtZW50ICkge1xyXG5cclxuXHRcdHZhciB2YWx1ZSA9ICQoZWxlbWVudCkuaHRtbCgpO1xyXG5cclxuXHRcdGlmKHZhbHVlID09ICdQcmV2aW91cycpIHZhbHVlID0gcGFyc2VJbnQoICRjdXJyX3BhZ2UuaHRtbCgpICkgLSAxO1xyXG5cdFx0ZWxzZSBpZih2YWx1ZSA9PSAnTmV4dCcpIHZhbHVlID0gcGFyc2VJbnQoICRjdXJyX3BhZ2UuaHRtbCgpICkgKyAxO1xyXG5cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnBhZ2luZy1uYXZpZ2F0aW9uIC5wYWdlLW51bWJlcnMgYScsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdHVwZGF0ZUNhY2hlKCk7XHJcblxyXG5cdFx0dmFyIHBhZ2VfbnVtID0gZ2V0X3BhZ2VfbnVtKHRoaXMpO1xyXG5cclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybDogYWpheHBhZ2luYXRpb24uYWpheHVybCxcclxuXHRcdFx0dHlwZTogJ3Bvc3QnLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0YWN0aW9uOiAnYWpheF9wYWdpbmF0aW9uJyxcclxuXHRcdFx0XHRxdWVyeV92YXJzOiBhamF4cGFnaW5hdGlvbi5xdWVyeV92YXJzLFxyXG5cdFx0XHRcdHBhZ2U6IHBhZ2VfbnVtXHJcblx0XHRcdH0sXHJcblx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCRjb250YWluZXIuZmluZCggJ2FydGljbGUnICkucmVtb3ZlKCk7XHJcblx0XHRcdFx0JGNvbnRhaW5lci5maW5kKCcucGFnaW5nLW5hdmlnYXRpb24nKS5yZW1vdmUoKTtcclxuXHRcdFx0XHQkY29udGFpbmVyLmFwcGVuZCggJzxkaXYgaWQ9XCJsb2FkZXJcIj5Mb2FkaW5nIE5ldyBQb3N0cy4uLjwvZGl2PicgKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oIGh0bWwgKSB7XHJcblx0XHRcdFx0JGNvbnRhaW5lci5maW5kKCcjbG9hZGVyJykucmVtb3ZlKCk7XHJcblx0XHRcdFx0JGNvbnRhaW5lci5hcHBlbmQoIGh0bWwgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYWpheC1wYWdpbmF0aW9uLmpzIiwiLyoqXHJcbiAqIEZpbGUgbmF2aWdhdGlvbi5qcy5cclxuICpcclxuICogSGFuZGxlcyB0b2dnbGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGZvciBzbWFsbCBzY3JlZW5zIGFuZCBlbmFibGVzIFRBQiBrZXlcclxuICogbmF2aWdhdGlvbiBzdXBwb3J0IGZvciBkcm9wZG93biBtZW51cy5cclxuICovXHJcblxyXG5cclxuKGZ1bmN0aW9uKCQpe1xyXG5cclxuXHQvL0NhY2hlIERvbVxyXG5cdHZhciAkbmF2ID0gJCgnI3NpdGUtbmF2aWdhdGlvbicpO1xyXG5cdHZhciAkbW9iaWxlX21lbnViYXIgPSAkbmF2LmZpbmQoJy5tb2JpbGUtbWVudWJhcicpO1xyXG5cdHZhciAkbW9iaWxlX21lbnViYXJfYnRuID0gJG1vYmlsZV9tZW51YmFyLmZpbmQoJy5tb2JpbGUtYnRuLW9wZW4nKTtcclxuXHR2YXIgJG1vYmlsZV9tZW51bGlzdCA9ICRuYXYuZmluZCgnLm1vYmlsZS1tZW51bGlzdCcpO1xyXG5cdHZhciAkbW9iaWxlX21lbnVsaXN0X2J0biA9ICRtb2JpbGVfbWVudWxpc3QuZmluZCgnLm1vYmlsZS1idG4tY2xvc2UnKTtcclxuXHR2YXIgJG1vYmlsZV9ibGFja3NjcmVlbiA9ICRuYXYuZmluZCgnI25hdi1ibGFja3NjcmVlbicpO1xyXG5cdHZhciAkZGVza3RvcF9tZW51YmFyID0gJG5hdi5maW5kKCcuZGVza3RvcC1tZW51YmFyJyk7XHJcblxyXG5cdC8vQmluZCBFdmVudHNcclxuXHQkbW9iaWxlX21lbnViYXJfYnRuLm9uKCdjbGljaycsIG9wZW5NZW51KTtcclxuXHQkbW9iaWxlX21lbnVsaXN0X2J0bi5vbignY2xpY2snLCBjbG9zZU1lbnUpO1xyXG5cdCRtb2JpbGVfYmxhY2tzY3JlZW4ub24oJ2NsaWNrJywgY2xvc2VNZW51KTtcclxuXHJcblx0ZnVuY3Rpb24gb3Blbk1lbnUoKXtcclxuXHRcdGlmKCEkbW9iaWxlX21lbnVsaXN0Lmhhc0NsYXNzKCdvdXQnKSl7XHJcblx0XHRcdCRtb2JpbGVfbWVudWxpc3QuYWRkQ2xhc3MoJ291dCcpO1xyXG5cdFx0XHQkbW9iaWxlX2JsYWNrc2NyZWVuLnNob3coKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlTWVudSgpe1xyXG5cdFx0aWYoJG1vYmlsZV9tZW51bGlzdC5oYXNDbGFzcygnb3V0Jykpe1xyXG5cdFx0XHQkbW9iaWxlX21lbnVsaXN0LnJlbW92ZUNsYXNzKCdvdXQnKTtcclxuXHRcdFx0JG1vYmlsZV9ibGFja3NjcmVlbi5oaWRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9uYXZpZ2F0aW9uLmpzIiwiLyoqXHJcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cclxuICpcclxuICogSGVscHMgd2l0aCBhY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZCBvbmx5IHVzZXJzLlxyXG4gKlxyXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBpc0llID0gLyh0cmlkZW50fG1zaWUpL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApO1xyXG5cclxuXHRpZiAoIGlzSWUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoIDEgKSxcclxuXHRcdFx0XHRlbGVtZW50O1xyXG5cclxuXHRcdFx0aWYgKCAhICggL15bQS16MC05Xy1dKyQvLnRlc3QoIGlkICkgKSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggaWQgKTtcclxuXHJcblx0XHRcdGlmICggZWxlbWVudCApIHtcclxuXHRcdFx0XHRpZiAoICEgKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kudGVzdCggZWxlbWVudC50YWdOYW1lICkgKSApIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAtMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgZmFsc2UgKTtcclxuXHR9XHJcbn0pKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9za2lwLWxpbmstZm9jdXMtZml4LmpzIiwiLyoqXHJcbiAqIEZpbGUgc3dpcGVyLXNjcmlwdC5qcy5cclxuICpcclxuICovXHJcblxyXG4oIGZ1bmN0aW9uKCAkICkge1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIElOREVYIFNMSURFUlxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHZhciBpbmRleF9iZyA9IG5ldyBTd2lwZXIoJy5mZWF0dXJlZC1zd2lwZXInLCB7XHJcbiAgICAgICAgYXV0b3BsYXk6ICczMDAwJyxcclxuICAgICAgICBsb25nU3dpcGVzOiB0cnVlLFxyXG4gICAgICAgIGxhenlMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGxhenlMb2FkaW5nSW5QcmV2TmV4dDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbn0gKSggalF1ZXJ5ICk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zd2lwZXItc2NyaXB0LmpzIiwiLyoqXHJcbiAqIFN3aXBlciAzLjQuMVxyXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xyXG4gKiBcclxuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXHJcbiAqIFxyXG4gKiBDb3B5cmlnaHQgMjAxNiwgVmxhZGltaXIgS2hhcmxhbXBpZGlcclxuICogVGhlIGlEYW5nZXJvLnVzXHJcbiAqIGh0dHA6Ly93d3cuaWRhbmdlcm8udXMvXHJcbiAqIFxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcclxuICogXHJcbiAqIFJlbGVhc2VkIG9uOiBEZWNlbWJlciAxMywgMjAxNlxyXG4gKi9cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciAkO1xyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFN3aXBlclxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIHZhciBTd2lwZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBwYXJhbXMpIHtcclxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3dpcGVyKSkgcmV0dXJuIG5ldyBTd2lwZXIoY29udGFpbmVyLCBwYXJhbXMpO1xyXG5cclxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgLy8gYXV0b3BsYXlcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVN0b3BPbkxhc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBUbyBzdXBwb3J0IGlPUydzIHN3aXBlLXRvLWdvLWJhY2sgZ2VzdHVyZSAod2hlbiBiZWluZyB1c2VkIGluLWFwcCwgd2l0aCBVSVdlYlZpZXcpLlxyXG4gICAgICAgICAgICBpT1NFZGdlU3dpcGVEZXRlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBpT1NFZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxyXG4gICAgICAgICAgICAvLyBGcmVlIG1vZGVcclxuICAgICAgICAgICAgZnJlZU1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxyXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IDEsXHJcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2U6IHRydWUsXHJcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcclxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVZlbG9jaXR5UmF0aW86IDEsXHJcbiAgICAgICAgICAgIGZyZWVNb2RlU3RpY2t5OiBmYWxzZSxcclxuICAgICAgICAgICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuMDIsXHJcbiAgICAgICAgICAgIC8vIEF1dG9oZWlnaHRcclxuICAgICAgICAgICAgYXV0b0hlaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIFNldCB3cmFwcGVyIHdpZHRoXHJcbiAgICAgICAgICAgIHNldFdyYXBwZXJTaXplOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gVmlydHVhbCBUcmFuc2xhdGVcclxuICAgICAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIEVmZmVjdHNcclxuICAgICAgICAgICAgZWZmZWN0OiAnc2xpZGUnLCAvLyAnc2xpZGUnIG9yICdmYWRlJyBvciAnY3ViZScgb3IgJ2NvdmVyZmxvdycgb3IgJ2ZsaXAnXHJcbiAgICAgICAgICAgIGNvdmVyZmxvdzoge1xyXG4gICAgICAgICAgICAgICAgcm90YXRlOiA1MCxcclxuICAgICAgICAgICAgICAgIHN0cmV0Y2g6IDAsXHJcbiAgICAgICAgICAgICAgICBkZXB0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVNoYWRvd3MgOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZsaXA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93cyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW1pdFJvdGF0aW9uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1YmU6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNoYWRvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNoYWRvd09mZnNldDogMjAsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dTY2FsZTogMC45NFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWRlOiB7XHJcbiAgICAgICAgICAgICAgICBjcm9zc0ZhZGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIFBhcmFsbGF4XHJcbiAgICAgICAgICAgIHBhcmFsbGF4OiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gWm9vbVxyXG4gICAgICAgICAgICB6b29tOiBmYWxzZSxcclxuICAgICAgICAgICAgem9vbU1heDogMyxcclxuICAgICAgICAgICAgem9vbU1pbjogMSxcclxuICAgICAgICAgICAgem9vbVRvZ2dsZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gU2Nyb2xsYmFyXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcjogbnVsbCxcclxuICAgICAgICAgICAgc2Nyb2xsYmFySGlkZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsYmFyRHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsYmFyU25hcE9uUmVsZWFzZTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIEtleWJvYXJkIE1vdXNld2hlZWxcclxuICAgICAgICAgICAga2V5Ym9hcmRDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgbW91c2V3aGVlbENvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb3VzZXdoZWVsUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb3VzZXdoZWVsSW52ZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgbW91c2V3aGVlbEZvcmNlVG9BeGlzOiBmYWxzZSxcclxuICAgICAgICAgICAgbW91c2V3aGVlbFNlbnNpdGl2aXR5OiAxLFxyXG4gICAgICAgICAgICBtb3VzZXdoZWVsRXZlbnRzVGFyZ2VkOiAnY29udGFpbmVyJyxcclxuICAgICAgICAgICAgLy8gSGFzaCBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGhhc2huYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNobmF2V2F0Y2hTdGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIEhpc3RvcnlcclxuICAgICAgICAgICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIENvbW1vbmcgTmF2IFN0YXRlXHJcbiAgICAgICAgICAgIHJlcGxhY2VTdGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIEJyZWFrcG9pbnRzXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIC8vIFNsaWRlcyBncmlkXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJDb2x1bW5GaWxsOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLCAvLyBpbiBweFxyXG4gICAgICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMCwgLy8gaW4gcHhcclxuICAgICAgICAgICAgLy8gUm91bmQgbGVuZ3RoXHJcbiAgICAgICAgICAgIHJvdW5kTGVuZ3RoczogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIFRvdWNoZXNcclxuICAgICAgICAgICAgdG91Y2hSYXRpbzogMSxcclxuICAgICAgICAgICAgdG91Y2hBbmdsZTogNDUsXHJcbiAgICAgICAgICAgIHNpbXVsYXRlVG91Y2g6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3J0U3dpcGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBsb25nU3dpcGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBsb25nU3dpcGVzUmF0aW86IDAuNSxcclxuICAgICAgICAgICAgbG9uZ1N3aXBlc01zOiAzMDAsXHJcbiAgICAgICAgICAgIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcclxuICAgICAgICAgICAgb25seUV4dGVybmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxyXG4gICAgICAgICAgICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xyXG4gICAgICAgICAgICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gUGFnaW5hdGlvblxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRWxlbWVudDogJ3NwYW4nLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkhpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uQnVsbGV0UmVuZGVyOiBudWxsLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uUHJvZ3Jlc3NSZW5kZXI6IG51bGwsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25GcmFjdGlvblJlbmRlcjogbnVsbCxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkN1c3RvbVJlbmRlcjogbnVsbCxcclxuICAgICAgICAgICAgcGFnaW5hdGlvblR5cGU6ICdidWxsZXRzJywgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzcycgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xyXG4gICAgICAgICAgICAvLyBSZXNpc3RhbmNlXHJcbiAgICAgICAgICAgIHJlc2lzdGFuY2U6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcclxuICAgICAgICAgICAgLy8gTmV4dC9wcmV2IGJ1dHRvbnNcclxuICAgICAgICAgICAgbmV4dEJ1dHRvbjogbnVsbCxcclxuICAgICAgICAgICAgcHJldkJ1dHRvbjogbnVsbCxcclxuICAgICAgICAgICAgLy8gUHJvZ3Jlc3NcclxuICAgICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIEN1cnNvclxyXG4gICAgICAgICAgICBncmFiQ3Vyc29yOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gQ2xpY2tzXHJcbiAgICAgICAgICAgIHByZXZlbnRDbGlja3M6IHRydWUsXHJcbiAgICAgICAgICAgIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIExhenkgTG9hZGluZ1xyXG4gICAgICAgICAgICBsYXp5TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhenlMb2FkaW5nSW5QcmV2TmV4dDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhenlMb2FkaW5nSW5QcmV2TmV4dEFtb3VudDogMSxcclxuICAgICAgICAgICAgbGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydDogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIEltYWdlc1xyXG4gICAgICAgICAgICBwcmVsb2FkSW1hZ2VzOiB0cnVlLFxyXG4gICAgICAgICAgICB1cGRhdGVPbkltYWdlc1JlYWR5OiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBsb29wXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wQWRkaXRpb25hbFNsaWRlczogMCxcclxuICAgICAgICAgICAgbG9vcGVkU2xpZGVzOiBudWxsLFxyXG4gICAgICAgICAgICAvLyBDb250cm9sXHJcbiAgICAgICAgICAgIGNvbnRyb2w6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY29udHJvbEludmVyc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250cm9sQnk6ICdzbGlkZScsIC8vb3IgJ2NvbnRhaW5lcidcclxuICAgICAgICAgICAgbm9ybWFsaXplU2xpZGVJbmRleDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gU3dpcGluZy9ubyBzd2lwaW5nXHJcbiAgICAgICAgICAgIGFsbG93U3dpcGVUb1ByZXY6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93U3dpcGVUb05leHQ6IHRydWUsXHJcbiAgICAgICAgICAgIHN3aXBlSGFuZGxlcjogbnVsbCwgLy8nLnN3aXBlLWhhbmRsZXInLFxyXG4gICAgICAgICAgICBub1N3aXBpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIG5vU3dpcGluZ0NsYXNzOiAnc3dpcGVyLW5vLXN3aXBpbmcnLFxyXG4gICAgICAgICAgICAvLyBQYXNzaXZlIExpc3RlbmVyc1xyXG4gICAgICAgICAgICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBOU1xyXG4gICAgICAgICAgICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLWNvbnRhaW5lci0nLCAvLyBORVdcclxuICAgICAgICAgICAgc2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZScsXHJcbiAgICAgICAgICAgIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcclxuICAgICAgICAgICAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlJyxcclxuICAgICAgICAgICAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdmlzaWJsZScsXHJcbiAgICAgICAgICAgIHNsaWRlRHVwbGljYXRlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlJyxcclxuICAgICAgICAgICAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXHJcbiAgICAgICAgICAgIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1uZXh0JyxcclxuICAgICAgICAgICAgc2xpZGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtcHJldicsXHJcbiAgICAgICAgICAgIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2JyxcclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzOiAnc3dpcGVyLXdyYXBwZXInLFxyXG4gICAgICAgICAgICBidWxsZXRDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCcsXHJcbiAgICAgICAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZScsXHJcbiAgICAgICAgICAgIGJ1dHRvbkRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWRpc2FibGVkJyxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkN1cnJlbnRDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnQnLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uVG90YWxDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXRvdGFsJyxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkhpZGRlbkNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuJyxcclxuICAgICAgICAgICAgcGFnaW5hdGlvblByb2dyZXNzYmFyQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhcicsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25DbGlja2FibGVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZScsIC8vIE5FV1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uTW9kaWZpZXJDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLScsIC8vIE5FV1xyXG4gICAgICAgICAgICBsYXp5TG9hZGluZ0NsYXNzOiAnc3dpcGVyLWxhenknLFxyXG4gICAgICAgICAgICBsYXp5U3RhdHVzTG9hZGluZ0NsYXNzOiAnc3dpcGVyLWxhenktbG9hZGluZycsXHJcbiAgICAgICAgICAgIGxhenlTdGF0dXNMb2FkZWRDbGFzczogJ3N3aXBlci1sYXp5LWxvYWRlZCcsXHJcbiAgICAgICAgICAgIGxhenlQcmVsb2FkZXJDbGFzczogJ3N3aXBlci1sYXp5LXByZWxvYWRlcicsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNsYXNzOiAnc3dpcGVyLW5vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgIHByZWxvYWRlckNsYXNzOiAncHJlbG9hZGVyJyxcclxuICAgICAgICAgICAgem9vbUNvbnRhaW5lckNsYXNzOiAnc3dpcGVyLXpvb20tY29udGFpbmVyJyxcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gT2JzZXJ2ZXJcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIEFjY2Vzc2liaWxpdHlcclxuICAgICAgICAgICAgYTExeTogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICdQcmV2aW91cyBzbGlkZScsXHJcbiAgICAgICAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICdOZXh0IHNsaWRlJyxcclxuICAgICAgICAgICAgZmlyc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZScsXHJcbiAgICAgICAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBsYXN0IHNsaWRlJyxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2U6ICdHbyB0byBzbGlkZSB7e2luZGV4fX0nLFxyXG4gICAgICAgICAgICAvLyBDYWxsYmFja3NcclxuICAgICAgICAgICAgcnVuQ2FsbGJhY2tzT25Jbml0OiB0cnVlXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIENhbGxiYWNrczpcclxuICAgICAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoc3dpcGVyKVxyXG4gICAgICAgICAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIChzd2lwZXIpXHJcbiAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXHJcbiAgICAgICAgICAgIG9uVGFwOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxyXG4gICAgICAgICAgICBvbkRvdWJsZVRhcDogZnVuY3Rpb24gKHN3aXBlciwgZSlcclxuICAgICAgICAgICAgb25TbGlkZXJNb3ZlOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxyXG4gICAgICAgICAgICBvblNsaWRlQ2hhbmdlU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIpXHJcbiAgICAgICAgICAgIG9uU2xpZGVDaGFuZ2VFbmQ6IGZ1bmN0aW9uIChzd2lwZXIpXHJcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiAoc3dpcGVyKVxyXG4gICAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChzd2lwZXIpXHJcbiAgICAgICAgICAgIG9uSW1hZ2VzUmVhZHk6IGZ1bmN0aW9uIChzd2lwZXIpXHJcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uIChzd2lwZXIsIHByb2dyZXNzKVxyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXHJcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxyXG4gICAgICAgICAgICBvblRvdWNoTW92ZU9wcG9zaXRlOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxyXG4gICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxyXG4gICAgICAgICAgICBvblJlYWNoQmVnaW5uaW5nOiBmdW5jdGlvbiAoc3dpcGVyKVxyXG4gICAgICAgICAgICBvblJlYWNoRW5kOiBmdW5jdGlvbiAoc3dpcGVyKVxyXG4gICAgICAgICAgICBvblNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChzd2lwZXIsIGR1cmF0aW9uKVxyXG4gICAgICAgICAgICBvblNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKHN3aXBlciwgdHJhbnNsYXRlKVxyXG4gICAgICAgICAgICBvbkF1dG9wbGF5U3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIpXHJcbiAgICAgICAgICAgIG9uQXV0b3BsYXlTdG9wOiBmdW5jdGlvbiAoc3dpcGVyKSxcclxuICAgICAgICAgICAgb25MYXp5SW1hZ2VMb2FkOiBmdW5jdGlvbiAoc3dpcGVyLCBzbGlkZSwgaW1hZ2UpXHJcbiAgICAgICAgICAgIG9uTGF6eUltYWdlUmVhZHk6IGZ1bmN0aW9uIChzd2lwZXIsIHNsaWRlLCBpbWFnZSlcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBpbml0aWFsVmlydHVhbFRyYW5zbGF0ZSA9IHBhcmFtcyAmJiBwYXJhbXMudmlydHVhbFRyYW5zbGF0ZTtcclxuICAgICAgICBcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsUGFyYW1zID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW3BhcmFtXSA9PT0gJ29iamVjdCcgJiYgcGFyYW1zW3BhcmFtXSAhPT0gbnVsbCAmJiAhKHBhcmFtc1twYXJhbV0ubm9kZVR5cGUgfHwgcGFyYW1zW3BhcmFtXSA9PT0gd2luZG93IHx8IHBhcmFtc1twYXJhbV0gPT09IGRvY3VtZW50IHx8ICh0eXBlb2YgRG9tNyAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFyYW1zW3BhcmFtXSBpbnN0YW5jZW9mIERvbTcpIHx8ICh0eXBlb2YgalF1ZXJ5ICE9PSAndW5kZWZpbmVkJyAmJiBwYXJhbXNbcGFyYW1dIGluc3RhbmNlb2YgalF1ZXJ5KSkpIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsUGFyYW1zW3BhcmFtXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZGVlcFBhcmFtIGluIHBhcmFtc1twYXJhbV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFBhcmFtc1twYXJhbV1bZGVlcFBhcmFtXSA9IHBhcmFtc1twYXJhbV1bZGVlcFBhcmFtXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsUGFyYW1zW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgZGVmIGluIGRlZmF1bHRzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW2RlZl0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbZGVmXSA9IGRlZmF1bHRzW2RlZl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBhcmFtc1tkZWZdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZGVlcERlZiBpbiBkZWZhdWx0c1tkZWZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbZGVmXVtkZWVwRGVmXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW2RlZl1bZGVlcERlZl0gPSBkZWZhdWx0c1tkZWZdW2RlZXBEZWZdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTd2lwZXJcclxuICAgICAgICB2YXIgcyA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGFyYW1zXHJcbiAgICAgICAgcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgICAgcy5vcmlnaW5hbFBhcmFtcyA9IG9yaWdpbmFsUGFyYW1zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENsYXNzbmFtZVxyXG4gICAgICAgIHMuY2xhc3NOYW1lcyA9IFtdO1xyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgRG9tIExpYnJhcnkgYW5kIHBsdWdpbnNcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgaWYgKHR5cGVvZiAkICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgRG9tNyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAkID0gRG9tNztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIERvbTcgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAkID0gd2luZG93LkRvbTcgfHwgd2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkID0gRG9tNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISQpIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRXhwb3J0IGl0IHRvIFN3aXBlciBpbnN0YW5jZVxyXG4gICAgICAgIHMuJCA9ICQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBCcmVha3BvaW50c1xyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICBzLmN1cnJlbnRCcmVha3BvaW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHMuZ2V0QWN0aXZlQnJlYWtwb2ludCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9HZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoXHJcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYnJlYWtwb2ludHMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGJyZWFrcG9pbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHBvaW50cyA9IFtdLCBwb2ludDtcclxuICAgICAgICAgICAgZm9yICggcG9pbnQgaW4gcy5wYXJhbXMuYnJlYWtwb2ludHMgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkocG9pbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApID4gcGFyc2VJbnQoYiwgMTApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ID0gcG9pbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ID49IHdpbmRvdy5pbm5lcldpZHRoICYmICFicmVha3BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50IHx8ICdtYXgnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5zZXRCcmVha3BvaW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL1NldCBicmVha3BvaW50IGZvciB3aW5kb3cgd2lkdGggYW5kIHVwZGF0ZSBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgIHZhciBicmVha3BvaW50ID0gcy5nZXRBY3RpdmVCcmVha3BvaW50KCk7XHJcbiAgICAgICAgICAgIGlmIChicmVha3BvaW50ICYmIHMuY3VycmVudEJyZWFrcG9pbnQgIT09IGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBicmVha1BvaW50c1BhcmFtcyA9IGJyZWFrcG9pbnQgaW4gcy5wYXJhbXMuYnJlYWtwb2ludHMgPyBzLnBhcmFtcy5icmVha3BvaW50c1ticmVha3BvaW50XSA6IHMub3JpZ2luYWxQYXJhbXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmVlZHNSZUxvb3AgPSBzLnBhcmFtcy5sb29wICYmIChicmVha1BvaW50c1BhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGZvciAoIHZhciBwYXJhbSBpbiBicmVha1BvaW50c1BhcmFtcyApIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnBhcmFtc1twYXJhbV0gPSBicmVha1BvaW50c1BhcmFtc1twYXJhbV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgIGlmKG5lZWRzUmVMb29wICYmIHMuZGVzdHJveUxvb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnJlTG9vcCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gU2V0IGJyZWFrcG9pbnQgb24gbG9hZFxyXG4gICAgICAgIGlmIChzLnBhcmFtcy5icmVha3BvaW50cykge1xyXG4gICAgICAgICAgICBzLnNldEJyZWFrcG9pbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBQcmVwYXJhdGlvbiAtIERlZmluZSBDb250YWluZXIsIFdyYXBwZXIgYW5kIFBhZ2luYXRpb25cclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy5jb250YWluZXIgPSAkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKHMuY29udGFpbmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzLmNvbnRhaW5lci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHZhciBzd2lwZXJzID0gW107XHJcbiAgICAgICAgICAgIHMuY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXJzLnB1c2gobmV3IFN3aXBlcih0aGlzLCBwYXJhbXMpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzd2lwZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTYXZlIGluc3RhbmNlIGluIGNvbnRhaW5lciBIVE1MIEVsZW1lbnQgYW5kIGluIGRhdGFcclxuICAgICAgICBzLmNvbnRhaW5lclswXS5zd2lwZXIgPSBzO1xyXG4gICAgICAgIHMuY29udGFpbmVyLmRhdGEoJ3N3aXBlcicsIHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBzLnBhcmFtcy5kaXJlY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xyXG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaChzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgJ2ZyZWUtbW9kZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXMuc3VwcG9ydC5mbGV4Ym94KSB7XHJcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyAnbm8tZmxleGJveCcpO1xyXG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xyXG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaChzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgJ2F1dG9oZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRW5hYmxlIHNsaWRlcyBwcm9ncmVzcyB3aGVuIHJlcXVpcmVkXHJcbiAgICAgICAgaWYgKHMucGFyYW1zLnBhcmFsbGF4IHx8IHMucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xyXG4gICAgICAgICAgICBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTWF4IHJlc2lzdGFuY2Ugd2hlbiB0b3VjaFJlbGVhc2VPbkVkZ2VzXHJcbiAgICAgICAgaWYgKHMucGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMpIHtcclxuICAgICAgICAgICAgcy5wYXJhbXMucmVzaXN0YW5jZVJhdGlvID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ292ZXJmbG93IC8gM0RcclxuICAgICAgICBpZiAoWydjdWJlJywgJ2NvdmVyZmxvdycsICdmbGlwJ10uaW5kZXhPZihzLnBhcmFtcy5lZmZlY3QpID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC50cmFuc2Zvcm1zM2QpIHtcclxuICAgICAgICAgICAgICAgIHMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2gocy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArICczZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcy5wYXJhbXMuZWZmZWN0ID0gJ3NsaWRlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XHJcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBzLnBhcmFtcy5lZmZlY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ID09PSAnY3ViZScpIHtcclxuICAgICAgICAgICAgcy5wYXJhbXMucmVzaXN0YW5jZVJhdGlvID0gMDtcclxuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9IDE7XHJcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA9IDE7XHJcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwID0gMTtcclxuICAgICAgICAgICAgcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuID0gMDtcclxuICAgICAgICAgICAgcy5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHMucGFyYW1zLnNldFdyYXBwZXJTaXplID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgPT09ICdmYWRlJyB8fCBzLnBhcmFtcy5lZmZlY3QgPT09ICdmbGlwJykge1xyXG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID0gMTtcclxuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uID0gMTtcclxuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPSAxO1xyXG4gICAgICAgICAgICBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuID0gMDtcclxuICAgICAgICAgICAgcy5wYXJhbXMuc2V0V3JhcHBlclNpemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0aWFsVmlydHVhbFRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdyYWIgQ3Vyc29yXHJcbiAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IgJiYgcy5zdXBwb3J0LnRvdWNoKSB7XHJcbiAgICAgICAgICAgIHMucGFyYW1zLmdyYWJDdXJzb3IgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gV3JhcHBlclxyXG4gICAgICAgIHMud3JhcHBlciA9IHMuY29udGFpbmVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLndyYXBwZXJDbGFzcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGFnaW5hdGlvblxyXG4gICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lciA9ICQocy5wYXJhbXMucGFnaW5hdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2Ygcy5wYXJhbXMucGFnaW5hdGlvbiA9PT0gJ3N0cmluZycgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDEgJiYgcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wYWdpbmF0aW9uKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lciA9IHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMucGFnaW5hdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAnYnVsbGV0cycgJiYgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmFkZENsYXNzKHMucGFyYW1zLnBhZ2luYXRpb25Nb2RpZmllckNsYXNzICsgJ2NsaWNrYWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5hZGRDbGFzcyhzLnBhcmFtcy5wYWdpbmF0aW9uTW9kaWZpZXJDbGFzcyArIHMucGFyYW1zLnBhZ2luYXRpb25UeXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTmV4dC9QcmV2IEJ1dHRvbnNcclxuICAgICAgICBpZiAocy5wYXJhbXMubmV4dEJ1dHRvbiB8fCBzLnBhcmFtcy5wcmV2QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBzLm5leHRCdXR0b24gPSAkKHMucGFyYW1zLm5leHRCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBzLnBhcmFtcy5uZXh0QnV0dG9uID09PSAnc3RyaW5nJyAmJiBzLm5leHRCdXR0b24ubGVuZ3RoID4gMSAmJiBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLm5leHRCdXR0b24pLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvbiA9IHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMubmV4dEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHMucHJldkJ1dHRvbiA9ICQocy5wYXJhbXMucHJldkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHMucGFyYW1zLnByZXZCdXR0b24gPT09ICdzdHJpbmcnICYmIHMucHJldkJ1dHRvbi5sZW5ndGggPiAxICYmIHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMucHJldkJ1dHRvbikubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5wcmV2QnV0dG9uID0gcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wcmV2QnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJcyBIb3Jpem9udGFsXHJcbiAgICAgICAgcy5pc0hvcml6b250YWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHMuaXNIID0gaXNIO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJUTFxyXG4gICAgICAgIHMucnRsID0gcy5pc0hvcml6b250YWwoKSAmJiAocy5jb250YWluZXJbMF0uZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8IHMuY29udGFpbmVyLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnKTtcclxuICAgICAgICBpZiAocy5ydGwpIHtcclxuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2gocy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArICdydGwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gV3JvbmcgUlRMIHN1cHBvcnRcclxuICAgICAgICBpZiAocy5ydGwpIHtcclxuICAgICAgICAgICAgcy53cm9uZ1JUTCA9IHMud3JhcHBlci5jc3MoJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29sdW1uc1xyXG4gICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XHJcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyAnbXVsdGlyb3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIEFuZHJvaWRcclxuICAgICAgICBpZiAocy5kZXZpY2UuYW5kcm9pZCkge1xyXG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaChzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgJ2FuZHJvaWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRkIGNsYXNzZXNcclxuICAgICAgICBzLmNvbnRhaW5lci5hZGRDbGFzcyhzLmNsYXNzTmFtZXMuam9pbignICcpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBUcmFuc2xhdGVcclxuICAgICAgICBzLnRyYW5zbGF0ZSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJvZ3Jlc3NcclxuICAgICAgICBzLnByb2dyZXNzID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBWZWxvY2l0eVxyXG4gICAgICAgIHMudmVsb2NpdHkgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgTG9ja3MsIHVubG9ja3NcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy5sb2NrU3dpcGVUb05leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPT09IGZhbHNlICYmIHMucGFyYW1zLmdyYWJDdXJzb3IpIHtcclxuICAgICAgICAgICAgICAgIHMudW5zZXRHcmFiQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHMubG9ja1N3aXBlVG9QcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID09PSBmYWxzZSAmJiBzLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgICBzLnVuc2V0R3JhYkN1cnNvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLmxvY2tTd2lwZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5ncmFiQ3Vyc29yKSBzLnVuc2V0R3JhYkN1cnNvcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy51bmxvY2tTd2lwZVRvTmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID09PSB0cnVlICYmIHMucGFyYW1zLmdyYWJDdXJzb3IpIHtcclxuICAgICAgICAgICAgICAgIHMuc2V0R3JhYkN1cnNvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLnVubG9ja1N3aXBlVG9QcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPT09IHRydWUgJiYgcy5wYXJhbXMuZ3JhYkN1cnNvcikge1xyXG4gICAgICAgICAgICAgICAgcy5zZXRHcmFiQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHMudW5sb2NrU3dpcGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5ncmFiQ3Vyc29yKSBzLnNldEdyYWJDdXJzb3IoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgUm91bmQgaGVscGVyXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJvdW5kKGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgU2V0IGdyYWIgY3Vyc29yXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMuc2V0R3JhYkN1cnNvciA9IGZ1bmN0aW9uKG1vdmluZykge1xyXG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctd2Via2l0LWdyYWJiaW5nJyA6ICctd2Via2l0LWdyYWInO1xyXG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLW1vei1ncmFiYmluJyA6ICctbW96LWdyYWInO1xyXG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnOiAnZ3JhYic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLnVuc2V0R3JhYkN1cnNvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJyc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocy5wYXJhbXMuZ3JhYkN1cnNvcikge1xyXG4gICAgICAgICAgICBzLnNldEdyYWJDdXJzb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBVcGRhdGUgb24gSW1hZ2VzIFJlYWR5XHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMuaW1hZ2VzVG9Mb2FkID0gW107XHJcbiAgICAgICAgcy5pbWFnZXNMb2FkZWQgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHMubG9hZEltYWdlID0gZnVuY3Rpb24gKGltZ0VsZW1lbnQsIHNyYywgc3Jjc2V0LCBzaXplcywgY2hlY2tGb3JDb21wbGV0ZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIGltYWdlO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBvblJlYWR5ICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWltZ0VsZW1lbnQuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSBvblJlYWR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaXplcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zaXplcyA9IHNpemVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3Jjc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvblJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7Ly9pbWFnZSBhbHJlYWR5IGxvYWRlZC4uLlxyXG4gICAgICAgICAgICAgICAgb25SZWFkeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLnByZWxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMuaW1hZ2VzVG9Mb2FkID0gcy5jb250YWluZXIuZmluZCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9vblJlYWR5KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09PSAndW5kZWZpbmVkJyB8fCBzID09PSBudWxsIHx8ICFzKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAocy5pbWFnZXNMb2FkZWQgIT09IHVuZGVmaW5lZCkgcy5pbWFnZXNMb2FkZWQrKztcclxuICAgICAgICAgICAgICAgIGlmIChzLmltYWdlc0xvYWRlZCA9PT0gcy5pbWFnZXNUb0xvYWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnVwZGF0ZU9uSW1hZ2VzUmVhZHkpIHMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkltYWdlc1JlYWR5Jywgcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmltYWdlc1RvTG9hZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcy5sb2FkSW1hZ2Uocy5pbWFnZXNUb0xvYWRbaV0sIChzLmltYWdlc1RvTG9hZFtpXS5jdXJyZW50U3JjIHx8IHMuaW1hZ2VzVG9Mb2FkW2ldLmdldEF0dHJpYnV0ZSgnc3JjJykpLCAocy5pbWFnZXNUb0xvYWRbaV0uc3Jjc2V0IHx8IHMuaW1hZ2VzVG9Mb2FkW2ldLmdldEF0dHJpYnV0ZSgnc3Jjc2V0JykpLCBzLmltYWdlc1RvTG9hZFtpXS5zaXplcyB8fCBzLmltYWdlc1RvTG9hZFtpXS5nZXRBdHRyaWJ1dGUoJ3NpemVzJyksIHRydWUsIF9vblJlYWR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBBdXRvcGxheVxyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICBzLmF1dG9wbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHMuYXV0b3BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICBzLmF1dG9wbGF5UGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gYXV0b3BsYXkoKSB7XHJcbiAgICAgICAgICAgIHZhciBhdXRvcGxheURlbGF5ID0gcy5wYXJhbXMuYXV0b3BsYXk7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlU2xpZGUuYXR0cignZGF0YS1zd2lwZXItYXV0b3BsYXknKSkge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlEZWxheSA9IGFjdGl2ZVNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JykgfHwgcy5wYXJhbXMuYXV0b3BsYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy5hdXRvcGxheVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmZpeExvb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBzLl9zbGlkZU5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXknLCBzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcy5pc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLl9zbGlkZU5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkF1dG9wbGF5Jywgcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmFtcy5hdXRvcGxheVN0b3BPbkxhc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuX3NsaWRlVG8oMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXknLCBzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc3RvcEF1dG9wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGF1dG9wbGF5RGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzLnN0YXJ0QXV0b3BsYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5hdXRvcGxheVRpbWVvdXRJZCAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hdXRvcGxheSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAocy5hdXRvcGxheWluZykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBzLmF1dG9wbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcy5lbWl0KCdvbkF1dG9wbGF5U3RhcnQnLCBzKTtcclxuICAgICAgICAgICAgYXV0b3BsYXkoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMuc3RvcEF1dG9wbGF5ID0gZnVuY3Rpb24gKGludGVybmFsKSB7XHJcbiAgICAgICAgICAgIGlmICghcy5hdXRvcGxheVRpbWVvdXRJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAocy5hdXRvcGxheVRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHMuYXV0b3BsYXlUaW1lb3V0SWQpO1xyXG4gICAgICAgICAgICBzLmF1dG9wbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHMuYXV0b3BsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHMuZW1pdCgnb25BdXRvcGxheVN0b3AnLCBzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMucGF1c2VBdXRvcGxheSA9IGZ1bmN0aW9uIChzcGVlZCkge1xyXG4gICAgICAgICAgICBpZiAocy5hdXRvcGxheVBhdXNlZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAocy5hdXRvcGxheVRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHMuYXV0b3BsYXlUaW1lb3V0SWQpO1xyXG4gICAgICAgICAgICBzLmF1dG9wbGF5UGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHNwZWVkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzLmF1dG9wbGF5UGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuYXV0b3BsYXlQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXMuYXV0b3BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgTWluL01heCBUcmFuc2xhdGVcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy5taW5UcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoLXMuc25hcEdyaWRbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5tYXhUcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoLXMuc25hcEdyaWRbcy5zbmFwR3JpZC5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIFNsaWRlci9zbGlkZXMgc2l6ZXNcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGVzID0gW107XHJcbiAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcclxuICAgICAgICAgICAgaWYocy5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHMucGFyYW1zLnNsaWRlc1BlclZpZXcpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzLmFjdGl2ZUluZGV4ICsgaTtcclxuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+IHMuc2xpZGVzLmxlbmd0aCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2gocy5zbGlkZXMuZXEoaW5kZXgpWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGaW5kIG5ldyBoZWlnaHQgZnJvbSBoZWlnaGVzdCBzbGlkZSBpbiB2aWV3XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aXZlU2xpZGVzW2ldICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBhY3RpdmVTbGlkZXNbaV0ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IGhlaWdodCA+IG5ld0hlaWdodCA/IGhlaWdodCA6IG5ld0hlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgSGVpZ2h0XHJcbiAgICAgICAgICAgIGlmIChuZXdIZWlnaHQpIHMud3JhcHBlci5jc3MoJ2hlaWdodCcsIG5ld0hlaWdodCArICdweCcpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgd2lkdGgsIGhlaWdodDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gcy5wYXJhbXMud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHMuY29udGFpbmVyWzBdLmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gcy5wYXJhbXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gcy5jb250YWluZXJbMF0uY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3aWR0aCA9PT0gMCAmJiBzLmlzSG9yaXpvbnRhbCgpIHx8IGhlaWdodCA9PT0gMCAmJiAhcy5pc0hvcml6b250YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vU3VidHJhY3QgcGFkZGluZ3NcclxuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCAtIHBhcnNlSW50KHMuY29udGFpbmVyLmNzcygncGFkZGluZy1sZWZ0JyksIDEwKSAtIHBhcnNlSW50KHMuY29udGFpbmVyLmNzcygncGFkZGluZy1yaWdodCcpLCAxMCk7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KHMuY29udGFpbmVyLmNzcygncGFkZGluZy10b3AnKSwgMTApIC0gcGFyc2VJbnQocy5jb250YWluZXIuY3NzKCdwYWRkaW5nLWJvdHRvbScpLCAxMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFN0b3JlIHZhbHVlc1xyXG4gICAgICAgICAgICBzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBzLnNpemUgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy53aWR0aCA6IHMuaGVpZ2h0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcy51cGRhdGVTbGlkZXNTaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzLnNsaWRlcyA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKTtcclxuICAgICAgICAgICAgcy5zbmFwR3JpZCA9IFtdO1xyXG4gICAgICAgICAgICBzLnNsaWRlc0dyaWQgPSBbXTtcclxuICAgICAgICAgICAgcy5zbGlkZXNTaXplc0dyaWQgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHNwYWNlQmV0d2VlbiA9IHMucGFyYW1zLnNwYWNlQmV0d2VlbixcclxuICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSAtcy5wYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgIHByZXZTbGlkZVNpemUgPSAwLFxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMuc2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzLnNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSA9IC1zcGFjZUJldHdlZW47XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IG1hcmdpbnNcclxuICAgICAgICAgICAgaWYgKHMucnRsKSBzLnNsaWRlcy5jc3Moe21hcmdpbkxlZnQ6ICcnLCBtYXJnaW5Ub3A6ICcnfSk7XHJcbiAgICAgICAgICAgIGVsc2Ugcy5zbGlkZXMuY3NzKHttYXJnaW5SaWdodDogJycsIG1hcmdpbkJvdHRvbTogJyd9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3M7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihzLnNsaWRlcy5sZW5ndGggLyBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pID09PSBzLnNsaWRlcy5sZW5ndGggLyBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gcy5zbGlkZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGguY2VpbChzLnNsaWRlcy5sZW5ndGggLyBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pICogcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBNYXRoLm1heChzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzLCBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICogcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDYWxjIHNsaWRlc1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVTaXplO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVzUGVyQ29sdW1uID0gcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVzUGVyUm93ID0gc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcclxuICAgICAgICAgICAgdmFyIG51bUZ1bGxDb2x1bW5zID0gc2xpZGVzUGVyUm93IC0gKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiAqIHNsaWRlc1BlclJvdyAtIHMuc2xpZGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVTaXplID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgc2xpZGVzIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NsaWRlT3JkZXJJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlckNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IGkgLSBjb2x1bW4gKiBzbGlkZXNQZXJDb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4gPiBudW1GdWxsQ29sdW1ucyB8fCAoY29sdW1uID09PSBudW1GdWxsQ29sdW1ucyAmJiByb3cgPT09IHNsaWRlc1BlckNvbHVtbi0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCsrcm93ID49IHNsaWRlc1BlckNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2xpZGVPcmRlckluZGV4ID0gY29sdW1uICsgcm93ICogc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctbW96LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctbXMtZmxleC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihpIC8gc2xpZGVzUGVyUm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gaSAtIHJvdyAqIHNsaWRlc1BlclJvdztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW4tJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ3RvcCcgOiAnbGVmdCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdyAhPT0gMCAmJiBzLnBhcmFtcy5zcGFjZUJldHdlZW4pICYmIChzLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAncHgnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXN3aXBlci1jb2x1bW4nLCBjb2x1bW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXN3aXBlci1yb3cnLCByb3cpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlU2l6ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5vdXRlcldpZHRoKHRydWUpIDogc2xpZGUub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gcm91bmQoc2xpZGVTaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlU2l6ZSA9IChzLnNpemUgLSAocy5wYXJhbXMuc2xpZGVzUGVyVmlldyAtIDEpICogc3BhY2VCZXR3ZWVuKSAvIHMucGFyYW1zLnNsaWRlc1BlclZpZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gcm91bmQoc2xpZGVTaXplKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1tpXS5zdHlsZS53aWR0aCA9IHNsaWRlU2l6ZSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1tpXS5zdHlsZS5oZWlnaHQgPSBzbGlkZVNpemUgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHMuc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcclxuICAgICAgICAgICAgICAgIHMuc2xpZGVzU2l6ZXNHcmlkLnB1c2goc2xpZGVTaXplKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplIC8gMiArIHByZXZTbGlkZVNpemUgLyAyICsgc3BhY2VCZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHMuc2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNsaWRlUG9zaXRpb24pIDwgMSAvIDEwMDApIHNsaWRlUG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoaW5kZXgpICUgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHMuc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoaW5kZXgpICUgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHMuc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHMudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGluZGV4ICsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMudmlydHVhbFNpemUgPSBNYXRoLm1heChzLnZpcnR1YWxTaXplLCBzLnNpemUpICsgcy5wYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7XHJcbiAgICAgICAgICAgIHZhciBuZXdTbGlkZXNHcmlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzLnJ0bCAmJiBzLndyb25nUlRMICYmIChzLnBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcy5wYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcclxuICAgICAgICAgICAgICAgIHMud3JhcHBlci5jc3Moe3dpZHRoOiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcy5zdXBwb3J0LmZsZXhib3ggfHwgcy5wYXJhbXMuc2V0V3JhcHBlclNpemUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSBzLndyYXBwZXIuY3NzKHt3aWR0aDogcy52aXJ0dWFsU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2VlbiArICdweCd9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugcy53cmFwcGVyLmNzcyh7aGVpZ2h0OiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBzLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2VlbikgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xyXG4gICAgICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSA9IE1hdGguY2VpbChzLnZpcnR1YWxTaXplIC8gcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAtIHMucGFyYW1zLnNwYWNlQmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSBzLndyYXBwZXIuY3NzKHt3aWR0aDogcy52aXJ0dWFsU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2VlbiArICdweCd9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugcy53cmFwcGVyLmNzcyh7aGVpZ2h0OiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNuYXBHcmlkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkW2ldIDwgcy52aXJ0dWFsU2l6ZSArIHMuc25hcEdyaWRbMF0pIG5ld1NsaWRlc0dyaWQucHVzaChzLnNuYXBHcmlkW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcy5zbmFwR3JpZCA9IG5ld1NsaWRlc0dyaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGxhc3QgZ3JpZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gd2lkdGhcclxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xyXG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuc25hcEdyaWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5zbmFwR3JpZFtpXSA8PSBzLnZpcnR1YWxTaXplIC0gcy5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChzLnNuYXBHcmlkW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzLnNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKHMudmlydHVhbFNpemUgLSBzLnNpemUpIC0gTWF0aC5mbG9vcihzLnNuYXBHcmlkW3Muc25hcEdyaWQubGVuZ3RoIC0gMV0pID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc25hcEdyaWQucHVzaChzLnZpcnR1YWxTaXplIC0gcy5zaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5zbmFwR3JpZC5sZW5ndGggPT09IDApIHMuc25hcEdyaWQgPSBbMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zcGFjZUJldHdlZW4gIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSBzLnNsaWRlcy5jc3Moe21hcmdpbkxlZnQ6IHNwYWNlQmV0d2VlbiArICdweCd9KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHMuc2xpZGVzLmNzcyh7bWFyZ2luUmlnaHQ6IHNwYWNlQmV0d2VlbiArICdweCd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Ugcy5zbGlkZXMuY3NzKHttYXJnaW5Cb3R0b206IHNwYWNlQmV0d2VlbiArICdweCd9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVTbGlkZXNPZmZzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy51cGRhdGVTbGlkZXNPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHMuc2xpZGVzW2ldLnN3aXBlclNsaWRlT2Zmc2V0ID0gcy5pc0hvcml6b250YWwoKSA/IHMuc2xpZGVzW2ldLm9mZnNldExlZnQgOiBzLnNsaWRlc1tpXS5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgRHluYW1pYyBTbGlkZXMgUGVyIFZpZXdcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy5jdXJyZW50U2xpZGVzUGVyVmlldyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNwdiA9IDEsIGksIGo7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpemUgPSBzLnNsaWRlc1tzLmFjdGl2ZUluZGV4XS5zd2lwZXJTbGlkZVNpemU7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnJlYWtMb29wO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcy5hY3RpdmVJbmRleCArIDE7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgKz0gcy5zbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHYgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaXplID4gcy5zaXplKSBicmVha0xvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAoaiA9IHMuYWN0aXZlSW5kZXggLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tqXSAmJiAhYnJlYWtMb29wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgKz0gcy5zbGlkZXNbal0uc3dpcGVyU2xpZGVTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHYgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaXplID4gcy5zaXplKSBicmVha0xvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHMuYWN0aXZlSW5kZXggKyAxOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNHcmlkW2ldIC0gcy5zbGlkZXNHcmlkW3MuYWN0aXZlSW5kZXhdIDwgcy5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwdisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3B2O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBTbGlkZXIvc2xpZGVzIHByb2dyZXNzXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMudXBkYXRlU2xpZGVzUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gcy50cmFuc2xhdGUgfHwgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5zbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5zbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQgPT09ICd1bmRlZmluZWQnKSBzLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgaWYgKHMucnRsKSBvZmZzZXRDZW50ZXIgPSB0cmFuc2xhdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFZpc2libGUgU2xpZGVzXHJcbiAgICAgICAgICAgIHMuc2xpZGVzLnJlbW92ZUNsYXNzKHMucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgKyAocy5wYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzLm1pblRyYW5zbGF0ZSgpIDogMCkgLSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldCkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuKTtcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVBZnRlciA9IHNsaWRlQmVmb3JlICsgcy5zbGlkZXNTaXplc0dyaWRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmlzaWJsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDwgcy5zaXplKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2xpZGVBZnRlciA+IDAgJiYgc2xpZGVBZnRlciA8PSBzLnNpemUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzbGlkZUJlZm9yZSA8PSAwICYmIHNsaWRlQWZ0ZXIgPj0gcy5zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLmVxKGkpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbGlkZS5wcm9ncmVzcyA9IHMucnRsID8gLXNsaWRlUHJvZ3Jlc3MgOiBzbGlkZVByb2dyZXNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLnVwZGF0ZVByb2dyZXNzID0gZnVuY3Rpb24gKHRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSA9IHMudHJhbnNsYXRlIHx8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gcy5tYXhUcmFuc2xhdGUoKSAtIHMubWluVHJhbnNsYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciB3YXNCZWdpbm5pbmcgPSBzLmlzQmVnaW5uaW5nO1xyXG4gICAgICAgICAgICB2YXIgd2FzRW5kID0gcy5pc0VuZDtcclxuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzLnByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgICAgIHMuaXNCZWdpbm5pbmcgPSBzLmlzRW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMucHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gcy5taW5UcmFuc2xhdGUoKSkgLyAodHJhbnNsYXRlc0RpZmYpO1xyXG4gICAgICAgICAgICAgICAgcy5pc0JlZ2lubmluZyA9IHMucHJvZ3Jlc3MgPD0gMDtcclxuICAgICAgICAgICAgICAgIHMuaXNFbmQgPSBzLnByb2dyZXNzID49IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMuaXNCZWdpbm5pbmcgJiYgIXdhc0JlZ2lubmluZykgcy5lbWl0KCdvblJlYWNoQmVnaW5uaW5nJywgcyk7XHJcbiAgICAgICAgICAgIGlmIChzLmlzRW5kICYmICF3YXNFbmQpIHMuZW1pdCgnb25SZWFjaEVuZCcsIHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykgcy51cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpO1xyXG4gICAgICAgICAgICBzLmVtaXQoJ29uUHJvZ3Jlc3MnLCBzLCBzLnByb2dyZXNzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBzLnJ0bCA/IHMudHJhbnNsYXRlIDogLXMudHJhbnNsYXRlO1xyXG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlSW5kZXgsIGksIHNuYXBJbmRleDtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuc2xpZGVzR3JpZC5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5zbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRlID49IHMuc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzLnNsaWRlc0dyaWRbaSArIDFdIC0gKHMuc2xpZGVzR3JpZFtpICsgMV0gLSBzLnNsaWRlc0dyaWRbaV0pIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzLnNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgcy5zbGlkZXNHcmlkW2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGUgPj0gcy5zbGlkZXNHcmlkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcclxuICAgICAgICAgICAgaWYocy5wYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCl7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3QWN0aXZlSW5kZXggPCAwIHx8IHR5cGVvZiBuZXdBY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIG5ld0FjdGl2ZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBmb3IgKGkgPSAwOyBpIDwgcy5zbGlkZXNHcmlkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoLSB0cmFuc2xhdGUgPj0gcy5zbGlkZXNHcmlkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3QWN0aXZlSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHNuYXBJbmRleCA9IE1hdGguZmxvb3IobmV3QWN0aXZlSW5kZXggLyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XHJcbiAgICAgICAgICAgIGlmIChzbmFwSW5kZXggPj0gcy5zbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHMuc25hcEdyaWQubGVuZ3RoIC0gMTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG5ld0FjdGl2ZUluZGV4ID09PSBzLmFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy5zbmFwSW5kZXggPSBzbmFwSW5kZXg7XHJcbiAgICAgICAgICAgIHMucHJldmlvdXNJbmRleCA9IHMuYWN0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgIHMuYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcclxuICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XHJcbiAgICAgICAgICAgIHMudXBkYXRlUmVhbEluZGV4KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLnVwZGF0ZVJlYWxJbmRleCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHMucmVhbEluZGV4ID0gcGFyc2VJbnQocy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSB8fCBzLmFjdGl2ZUluZGV4LCAxMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIENsYXNzZXNcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy51cGRhdGVDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzLnNsaWRlcy5yZW1vdmVDbGFzcyhzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzICsgJyAnICsgcy5wYXJhbXMuc2xpZGVOZXh0Q2xhc3MgKyAnICcgKyBzLnBhcmFtcy5zbGlkZVByZXZDbGFzcyArICcgJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MgKyAnICcgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyArICcgJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNsaWRlID0gcy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleCk7XHJcbiAgICAgICAgICAgIC8vIEFjdGl2ZSBjbGFzc2VzXHJcbiAgICAgICAgICAgIGFjdGl2ZVNsaWRlLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVNsaWRlLmhhc0NsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnOm5vdCguJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBzLnJlYWxJbmRleCArICdcIl0nKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJy4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgcy5yZWFsSW5kZXggKyAnXCJdJykuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTmV4dCBTbGlkZVxyXG4gICAgICAgICAgICB2YXIgbmV4dFNsaWRlID0gYWN0aXZlU2xpZGUubmV4dCgnLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wICYmIG5leHRTbGlkZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHMuc2xpZGVzLmVxKDApO1xyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBQcmV2IFNsaWRlXHJcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2KCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3AgJiYgcHJldlNsaWRlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlID0gcy5zbGlkZXMuZXEoLTEpO1xyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRTbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJzpub3QoLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJylbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgbmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyAnXCJdJykuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArICdcIl0nKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlLmhhc0NsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnOm5vdCguJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArICdcIl0nKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICcuJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgJ1wiXScpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQvVG90YWxcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsID0gcy5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgocy5zbGlkZXMubGVuZ3RoIC0gcy5sb29wZWRTbGlkZXMgKiAyKSAvIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHMuc25hcEdyaWQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gTWF0aC5jZWlsKChzLmFjdGl2ZUluZGV4IC0gcy5sb29wZWRTbGlkZXMpL3MucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA+IHMuc2xpZGVzLmxlbmd0aCAtIDEgLSBzLmxvb3BlZFNsaWRlcyAqIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgLSAocy5zbGlkZXMubGVuZ3RoIC0gcy5sb29wZWRTbGlkZXMgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiB0b3RhbCAtIDEpIGN1cnJlbnQgPSBjdXJyZW50IC0gdG90YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCAwICYmIHMucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnYnVsbGV0cycpIGN1cnJlbnQgPSB0b3RhbCArIGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHMuc25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcy5zbmFwSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcy5hY3RpdmVJbmRleCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFR5cGVzXHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdidWxsZXRzJyAmJiBzLmJ1bGxldHMgJiYgcy5idWxsZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5pbmRleCgpID09PSBjdXJyZW50KSAkKHRoaXMpLmFkZENsYXNzKHMucGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMuZXEoY3VycmVudCkuYWRkQ2xhc3Mocy5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5maW5kKCcuJyArIHMucGFyYW1zLnBhZ2luYXRpb25DdXJyZW50Q2xhc3MpLnRleHQoY3VycmVudCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5maW5kKCcuJyArIHMucGFyYW1zLnBhZ2luYXRpb25Ub3RhbENsYXNzKS50ZXh0KHRvdGFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ3Byb2dyZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IChjdXJyZW50ICsgMSkgLyB0b3RhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYID0gc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWSA9IHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuZmluZCgnLicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzcykudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKCcgKyBzY2FsZVggKyAnKSBzY2FsZVkoJyArIHNjYWxlWSArICcpJykudHJhbnNpdGlvbihzLnBhcmFtcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdjdXN0b20nICYmIHMucGFyYW1zLnBhZ2luYXRpb25DdXN0b21SZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuaHRtbChzLnBhcmFtcy5wYWdpbmF0aW9uQ3VzdG9tUmVuZGVyKHMsIGN1cnJlbnQgKyAxLCB0b3RhbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25QYWdpbmF0aW9uUmVuZGVyZWQnLCBzLCBzLnBhZ2luYXRpb25Db250YWluZXJbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE5leHQvYWN0aXZlIGJ1dHRvbnNcclxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24gJiYgcy5wcmV2QnV0dG9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0JlZ2lubmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnByZXZCdXR0b24uYWRkQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmRpc2FibGUocy5wcmV2QnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucHJldkJ1dHRvbi5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuZW5hYmxlKHMucHJldkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5uZXh0QnV0dG9uLmFkZENsYXNzKHMucGFyYW1zLmJ1dHRvbkRpc2FibGVkQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMuYTExeS5kaXNhYmxlKHMubmV4dEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLm5leHRCdXR0b24ucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmVuYWJsZShzLm5leHRCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBQYWdpbmF0aW9uXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMudXBkYXRlUGFnaW5hdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5wYWdpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uSFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAnYnVsbGV0cycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyT2ZCdWxsZXRzID0gcy5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgocy5zbGlkZXMubGVuZ3RoIC0gcy5sb29wZWRTbGlkZXMgKiAyKSAvIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHMuc25hcEdyaWQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25CdWxsZXRSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IHMucGFyYW1zLnBhZ2luYXRpb25CdWxsZXRSZW5kZXIocywgaSwgcy5wYXJhbXMuYnVsbGV0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gJzwnICsgcy5wYXJhbXMucGFnaW5hdGlvbkVsZW1lbnQrJyBjbGFzcz1cIicgKyBzLnBhcmFtcy5idWxsZXRDbGFzcyArICdcIj48LycgKyBzLnBhcmFtcy5wYWdpbmF0aW9uRWxlbWVudCArICc+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuaHRtbChwYWdpbmF0aW9uSFRNTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5idWxsZXRzID0gcy5wYWdpbmF0aW9uQ29udGFpbmVyLmZpbmQoJy4nICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uQ2xpY2thYmxlICYmIHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5pbml0UGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uRnJhY3Rpb25SZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBzLnBhcmFtcy5wYWdpbmF0aW9uRnJhY3Rpb25SZW5kZXIocywgcy5wYXJhbXMucGFnaW5hdGlvbkN1cnJlbnRDbGFzcywgcy5wYXJhbXMucGFnaW5hdGlvblRvdGFsQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHMucGFyYW1zLnBhZ2luYXRpb25DdXJyZW50Q2xhc3MgKyAnXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAvICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHMucGFyYW1zLnBhZ2luYXRpb25Ub3RhbENsYXNzKydcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAncHJvZ3Jlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25Qcm9ncmVzc1JlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHMucGFyYW1zLnBhZ2luYXRpb25Qcm9ncmVzc1JlbmRlcihzLCBzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9ICc8c3BhbiBjbGFzcz1cIicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzcyArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25QYWdpbmF0aW9uUmVuZGVyZWQnLCBzLCBzLnBhZ2luYXRpb25Db250YWluZXJbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIENvbW1vbiB1cGRhdGUgbWV0aG9kXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMudXBkYXRlID0gZnVuY3Rpb24gKHVwZGF0ZVRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcclxuICAgICAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplKCk7XHJcbiAgICAgICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSgpO1xyXG4gICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIHMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xyXG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZm9yY2VTZXRUcmFuc2xhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlID0gcy5ydGwgPyAtcy50cmFuc2xhdGUgOiBzLnRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgICAgIG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHMudHJhbnNsYXRlLCBzLm1heFRyYW5zbGF0ZSgpKSwgcy5taW5UcmFuc2xhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcclxuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIHMudXBkYXRlQ2xhc3NlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVUcmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVkLCBuZXdUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5jb250cm9sbGVyICYmIHMuY29udHJvbGxlci5zcGxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VTZXRUcmFuc2xhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZUF1dG9IZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgcy5pc0VuZCAmJiAhcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlZCA9IHMuc2xpZGVUbyhzLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkID0gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlU2V0VHJhbnNsYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIFJlc2l6ZSBIYW5kbGVyXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMub25SZXNpemUgPSBmdW5jdGlvbiAoZm9yY2VVcGRhdGVQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vQnJlYWtwb2ludHNcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmJyZWFrcG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBzLnNldEJyZWFrcG9pbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBEaXNhYmxlIGxvY2tzIG9uIHJlc2l6ZVxyXG4gICAgICAgICAgICB2YXIgYWxsb3dTd2lwZVRvUHJldiA9IHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXY7XHJcbiAgICAgICAgICAgIHZhciBhbGxvd1N3aXBlVG9OZXh0ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dDtcclxuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9IHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBzLnVwZGF0ZUNvbnRhaW5lclNpemUoKTtcclxuICAgICAgICAgICAgcy51cGRhdGVTbGlkZXNTaXplKCk7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcy5wYXJhbXMuZnJlZU1vZGUgfHwgZm9yY2VVcGRhdGVQYWdpbmF0aW9uKSBzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xyXG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMuY29udHJvbGxlciAmJiBzLmNvbnRyb2xsZXIuc3BsaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBzLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzbGlkZUNoYW5nZWRCeVNsaWRlVG8gPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3VHJhbnNsYXRlID0gTWF0aC5taW4oTWF0aC5tYXgocy50cmFuc2xhdGUsIHMubWF4VHJhbnNsYXRlKCkpLCBzLm1pblRyYW5zbGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgcy5pc0VuZCAmJiAhcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZWRCeVNsaWRlVG8gPSBzLnNsaWRlVG8ocy5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDaGFuZ2VkQnlTbGlkZVRvID0gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubGF6eUxvYWRpbmcgJiYgIXNsaWRlQ2hhbmdlZEJ5U2xpZGVUbyAmJiBzLmxhenkpIHtcclxuICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmV0dXJuIGxvY2tzIGFmdGVyIHJlc2l6ZVxyXG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gYWxsb3dTd2lwZVRvUHJldjtcclxuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9IGFsbG93U3dpcGVUb05leHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIEV2ZW50c1xyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICBcclxuICAgICAgICAvL0RlZmluZSBUb3VjaCBFdmVudHNcclxuICAgICAgICBzLnRvdWNoRXZlbnRzRGVza3RvcCA9IHtzdGFydDogJ21vdXNlZG93bicsIG1vdmU6ICdtb3VzZW1vdmUnLCBlbmQ6ICdtb3VzZXVwJ307XHJcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQpIHMudG91Y2hFdmVudHNEZXNrdG9wID0ge3N0YXJ0OiAncG9pbnRlcmRvd24nLCBtb3ZlOiAncG9pbnRlcm1vdmUnLCBlbmQ6ICdwb2ludGVydXAnfTtcclxuICAgICAgICBlbHNlIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpIHMudG91Y2hFdmVudHNEZXNrdG9wID0ge3N0YXJ0OiAnTVNQb2ludGVyRG93bicsIG1vdmU6ICdNU1BvaW50ZXJNb3ZlJywgZW5kOiAnTVNQb2ludGVyVXAnfTtcclxuICAgICAgICBzLnRvdWNoRXZlbnRzID0ge1xyXG4gICAgICAgICAgICBzdGFydCA6IHMuc3VwcG9ydC50b3VjaCB8fCAhcy5wYXJhbXMuc2ltdWxhdGVUb3VjaCAgPyAndG91Y2hzdGFydCcgOiBzLnRvdWNoRXZlbnRzRGVza3RvcC5zdGFydCxcclxuICAgICAgICAgICAgbW92ZSA6IHMuc3VwcG9ydC50b3VjaCB8fCAhcy5wYXJhbXMuc2ltdWxhdGVUb3VjaCA/ICd0b3VjaG1vdmUnIDogcy50b3VjaEV2ZW50c0Rlc2t0b3AubW92ZSxcclxuICAgICAgICAgICAgZW5kIDogcy5zdXBwb3J0LnRvdWNoIHx8ICFzLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gJ3RvdWNoZW5kJyA6IHMudG91Y2hFdmVudHNEZXNrdG9wLmVuZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gV1A4IFRvdWNoIEV2ZW50cyBGaXhcclxuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCB8fCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpIHtcclxuICAgICAgICAgICAgKHMucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IHMuY29udGFpbmVyIDogcy53cmFwcGVyKS5hZGRDbGFzcygnc3dpcGVyLXdwOC0nICsgcy5wYXJhbXMuZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQXR0YWNoL2RldGFjaCBldmVudHNcclxuICAgICAgICBzLmluaXRFdmVudHMgPSBmdW5jdGlvbiAoZGV0YWNoKSB7XHJcbiAgICAgICAgICAgIHZhciBhY3Rpb25Eb20gPSBkZXRhY2ggPyAnb2ZmJyA6ICdvbic7XHJcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBkZXRhY2ggPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnYWRkRXZlbnRMaXN0ZW5lcic7XHJcbiAgICAgICAgICAgIHZhciB0b3VjaEV2ZW50c1RhcmdldCA9IHMucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IHMuY29udGFpbmVyWzBdIDogcy53cmFwcGVyWzBdO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcy5zdXBwb3J0LnRvdWNoID8gdG91Y2hFdmVudHNUYXJnZXQgOiBkb2N1bWVudDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG1vdmVDYXB0dXJlID0gcy5wYXJhbXMubmVzdGVkID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvL1RvdWNoIEV2ZW50c1xyXG4gICAgICAgICAgICBpZiAocy5icm93c2VyLmllKSB7XHJcbiAgICAgICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMuc3RhcnQsIHMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbYWN0aW9uXShzLnRvdWNoRXZlbnRzLm1vdmUsIHMub25Ub3VjaE1vdmUsIG1vdmVDYXB0dXJlKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMuZW5kLCBzLm9uVG91Y2hFbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQudG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gcy50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIHMuc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcy5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZX0gOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMuc3RhcnQsIHMub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5tb3ZlLCBzLm9uVG91Y2hNb3ZlLCBtb3ZlQ2FwdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFdmVudHNUYXJnZXRbYWN0aW9uXShzLnRvdWNoRXZlbnRzLmVuZCwgcy5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhcy5kZXZpY2UuaW9zICYmICFzLmRldmljZS5hbmRyb2lkKSB8fCAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIXMuc3VwcG9ydC50b3VjaCAmJiBzLmRldmljZS5pb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFdmVudHNUYXJnZXRbYWN0aW9uXSgnbW91c2Vkb3duJywgcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFthY3Rpb25dKCdtb3VzZW1vdmUnLCBzLm9uVG91Y2hNb3ZlLCBtb3ZlQ2FwdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRbYWN0aW9uXSgnbW91c2V1cCcsIHMub25Ub3VjaEVuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvd1thY3Rpb25dKCdyZXNpemUnLCBzLm9uUmVzaXplKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gTmV4dCwgUHJldiwgSW5kZXhcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzLm5leHRCdXR0b25bYWN0aW9uRG9tXSgnY2xpY2snLCBzLm9uQ2xpY2tOZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5uZXh0QnV0dG9uW2FjdGlvbkRvbV0oJ2tleWRvd24nLCBzLmExMXkub25FbnRlcktleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZCdXR0b24gJiYgcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzLnByZXZCdXR0b25bYWN0aW9uRG9tXSgnY2xpY2snLCBzLm9uQ2xpY2tQcmV2KTtcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5wcmV2QnV0dG9uW2FjdGlvbkRvbV0oJ2tleWRvd24nLCBzLmExMXkub25FbnRlcktleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb24gJiYgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyW2FjdGlvbkRvbV0oJ2NsaWNrJywgJy4nICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MsIHMub25DbGlja0luZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5wYWdpbmF0aW9uQ29udGFpbmVyW2FjdGlvbkRvbV0oJ2tleWRvd24nLCAnLicgKyBzLnBhcmFtcy5idWxsZXRDbGFzcywgcy5hMTF5Lm9uRW50ZXJLZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHMucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikgdG91Y2hFdmVudHNUYXJnZXRbYWN0aW9uXSgnY2xpY2snLCBzLnByZXZlbnRDbGlja3MsIHRydWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5hdHRhY2hFdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMuaW5pdEV2ZW50cygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5kZXRhY2hFdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMuaW5pdEV2ZW50cyh0cnVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgSGFuZGxlIENsaWNrc1xyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICAvLyBQcmV2ZW50IENsaWNrc1xyXG4gICAgICAgIHMuYWxsb3dDbGljayA9IHRydWU7XHJcbiAgICAgICAgcy5wcmV2ZW50Q2xpY2tzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFzLmFsbG93Q2xpY2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHMuYW5pbWF0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDbGlja3NcclxuICAgICAgICBzLm9uQ2xpY2tOZXh0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAocy5pc0VuZCAmJiAhcy5wYXJhbXMubG9vcCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBzLnNsaWRlTmV4dCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5vbkNsaWNrUHJldiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHMuaXNCZWdpbm5pbmcgJiYgIXMucGFyYW1zLmxvb3ApIHJldHVybjtcclxuICAgICAgICAgICAgcy5zbGlkZVByZXYoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMub25DbGlja0luZGV4ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCkgKiBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIGluZGV4ID0gaW5kZXggKyBzLmxvb3BlZFNsaWRlcztcclxuICAgICAgICAgICAgcy5zbGlkZVRvKGluZGV4KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgSGFuZGxlIFRvdWNoZXNcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgZnVuY3Rpb24gZmluZEVsZW1lbnRJbkV2ZW50KGUsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoIWVsLmlzKHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudHMoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50cygpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBfZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9lbCA9PT0gc2VsZWN0b3IpIGZvdW5kID0gc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBzZWxlY3RvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlbFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcy51cGRhdGVDbGlja2VkU2xpZGUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSBmaW5kRWxlbWVudEluRXZlbnQoZSwgJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZUZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChzbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHNsaWRlRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzbGlkZSAmJiBzbGlkZUZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBzLmNsaWNrZWRTbGlkZSA9IHNsaWRlO1xyXG4gICAgICAgICAgICAgICAgcy5jbGlja2VkSW5kZXggPSAkKHNsaWRlKS5pbmRleCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcy5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBzLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzLmNsaWNrZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHMuY2xpY2tlZEluZGV4ICE9PSBzLmFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVUb0luZGV4ID0gcy5jbGlja2VkSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZWRTbGlkZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldyA9IHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHMuY3VycmVudFNsaWRlc1BlclZpZXcoKSA6IHMucGFyYW1zLnNsaWRlc1BlclZpZXc7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KCQocy5jbGlja2VkU2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzbGlkZVRvSW5kZXggPCBzLmxvb3BlZFNsaWRlcyAtIHNsaWRlc1BlclZpZXcvMikgfHwgKHNsaWRlVG9JbmRleCA+IHMuc2xpZGVzLmxlbmd0aCAtIHMubG9vcGVkU2xpZGVzICsgc2xpZGVzUGVyVmlldy8yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVRvSW5kZXggPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgcmVhbEluZGV4ICsgJ1wiXTpub3QoLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJyknKS5lcSgwKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVUb0luZGV4ID4gcy5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVRvSW5kZXggPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgcmVhbEluZGV4ICsgJ1wiXTpub3QoLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJyknKS5lcSgwKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpc1RvdWNoZWQsXHJcbiAgICAgICAgICAgIGlzTW92ZWQsXHJcbiAgICAgICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3MsXHJcbiAgICAgICAgICAgIHRvdWNoU3RhcnRUaW1lLFxyXG4gICAgICAgICAgICBpc1Njcm9sbGluZyxcclxuICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSxcclxuICAgICAgICAgICAgc3RhcnRUcmFuc2xhdGUsXHJcbiAgICAgICAgICAgIGFsbG93VGhyZXNob2xkTW92ZSxcclxuICAgICAgICAgICAgLy8gRm9ybSBlbGVtZW50cyB0byBtYXRjaFxyXG4gICAgICAgICAgICBmb3JtRWxlbWVudHMgPSAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgdmlkZW8nLFxyXG4gICAgICAgICAgICAvLyBMYXN0IGNsaWNrIHRpbWVcclxuICAgICAgICAgICAgbGFzdENsaWNrVGltZSA9IERhdGUubm93KCksIGNsaWNrVGltZW91dCxcclxuICAgICAgICAgICAgLy9WZWxvY2l0aWVzXHJcbiAgICAgICAgICAgIHZlbG9jaXRpZXMgPSBbXSxcclxuICAgICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBbmltYXRpbmcgRmxhZ1xyXG4gICAgICAgIHMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVG91Y2hlcyBpbmZvcm1hdGlvblxyXG4gICAgICAgIHMudG91Y2hlcyA9IHtcclxuICAgICAgICAgICAgc3RhcnRYOiAwLFxyXG4gICAgICAgICAgICBzdGFydFk6IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRYOiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50WTogMCxcclxuICAgICAgICAgICAgZGlmZjogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVG91Y2ggaGFuZGxlcnNcclxuICAgICAgICB2YXIgaXNUb3VjaEV2ZW50LCBzdGFydE1vdmluZztcclxuICAgICAgICBzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XHJcbiAgICAgICAgICAgIGlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnO1xyXG4gICAgICAgICAgICBpZiAoIWlzVG91Y2hFdmVudCAmJiAnd2hpY2gnIGluIGUgJiYgZS53aGljaCA9PT0gMykgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubm9Td2lwaW5nICYmIGZpbmRFbGVtZW50SW5FdmVudChlLCAnLicgKyBzLnBhcmFtcy5ub1N3aXBpbmdDbGFzcykpIHtcclxuICAgICAgICAgICAgICAgIHMuYWxsb3dDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnN3aXBlSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaW5kRWxlbWVudEluRXZlbnQoZSwgcy5wYXJhbXMuc3dpcGVIYW5kbGVyKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBzdGFydFggPSBzLnRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XHJcbiAgICAgICAgICAgIHZhciBzdGFydFkgPSBzLnRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIERvIE5PVCBzdGFydCBpZiBpT1MgZWRnZSBzd2lwZSBpcyBkZXRlY3RlZC4gT3RoZXJ3aXNlIGlPUyBhcHAgKFVJV2ViVmlldykgY2Fubm90IHN3aXBlLXRvLWdvLWJhY2sgYW55bW9yZVxyXG4gICAgICAgICAgICBpZihzLmRldmljZS5pb3MgJiYgcy5wYXJhbXMuaU9TRWRnZVN3aXBlRGV0ZWN0aW9uICYmIHN0YXJ0WCA8PSBzLnBhcmFtcy5pT1NFZGdlU3dpcGVUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpc1RvdWNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3MgPSB0cnVlO1xyXG4gICAgICAgICAgICBpc1Njcm9sbGluZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc3RhcnRNb3ZpbmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFggPSBzdGFydFg7XHJcbiAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XHJcbiAgICAgICAgICAgIHRvdWNoU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplKCk7XHJcbiAgICAgICAgICAgIHMuc3dpcGVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy50aHJlc2hvbGQgPiAwKSBhbGxvd1RocmVzaG9sZE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKGZvcm1FbGVtZW50cykpIHByZXZlbnREZWZhdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGZvcm1FbGVtZW50cykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLmVtaXQoJ29uVG91Y2hTdGFydCcsIHMsIGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcy5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XHJcbiAgICAgICAgICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgZS50eXBlID09PSAnbW91c2Vtb3ZlJykgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlcikge1xyXG4gICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xyXG4gICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5vbmx5RXh0ZXJuYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WCA9IHMudG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xyXG4gICAgICAgICAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFkgPSBzLnRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVG91Y2hFdmVudCAmJiBzLnBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzICYmICFzLnBhcmFtcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXMuaXNIb3Jpem9udGFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBWZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHMudG91Y2hlcy5jdXJyZW50WSA8IHMudG91Y2hlcy5zdGFydFkgJiYgcy50cmFuc2xhdGUgPD0gcy5tYXhUcmFuc2xhdGUoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHMudG91Y2hlcy5jdXJyZW50WSA+IHMudG91Y2hlcy5zdGFydFkgJiYgcy50cmFuc2xhdGUgPj0gcy5taW5UcmFuc2xhdGUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzLnRvdWNoZXMuY3VycmVudFggPCBzLnRvdWNoZXMuc3RhcnRYICYmIHMudHJhbnNsYXRlIDw9IHMubWF4VHJhbnNsYXRlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzLnRvdWNoZXMuY3VycmVudFggPiBzLnRvdWNoZXMuc3RhcnRYICYmIHMudHJhbnNsYXRlID49IHMubWluVHJhbnNsYXRlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICQoZS50YXJnZXQpLmlzKGZvcm1FbGVtZW50cykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzLmFsbG93Q2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFsbG93VG91Y2hDYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25Ub3VjaE1vdmUnLCBzLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHMudG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xyXG4gICAgICAgICAgICBzLnRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc1Njcm9sbGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b3VjaEFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkgJiYgcy50b3VjaGVzLmN1cnJlbnRZID09PSBzLnRvdWNoZXMuc3RhcnRZIHx8ICFzLmlzSG9yaXpvbnRhbCgpICYmIHMudG91Y2hlcy5jdXJyZW50WCA9PT0gcy50b3VjaGVzLnN0YXJ0WCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhzLnRvdWNoZXMuY3VycmVudFkgLSBzLnRvdWNoZXMuc3RhcnRZKSwgTWF0aC5hYnMocy50b3VjaGVzLmN1cnJlbnRYIC0gcy50b3VjaGVzLnN0YXJ0WCkpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgICAgICAgICBpc1Njcm9sbGluZyA9IHMuaXNIb3Jpem9udGFsKCkgPyB0b3VjaEFuZ2xlID4gcy5wYXJhbXMudG91Y2hBbmdsZSA6ICg5MCAtIHRvdWNoQW5nbGUgPiBzLnBhcmFtcy50b3VjaEFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNTY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25Ub3VjaE1vdmVPcHBvc2l0ZScsIHMsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnICYmIHMuYnJvd3Nlci5pZVRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy50b3VjaGVzLmN1cnJlbnRYICE9PSBzLnRvdWNoZXMuc3RhcnRYIHx8IHMudG91Y2hlcy5jdXJyZW50WSAhPT0gcy50b3VjaGVzLnN0YXJ0WSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0TW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzVG91Y2hlZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoaXNTY3JvbGxpbmcpICB7XHJcbiAgICAgICAgICAgICAgICBpc1RvdWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXN0YXJ0TW92aW5nICYmIHMuYnJvd3Nlci5pZVRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZXJNb3ZlJywgcywgZSk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiAmJiAhcy5wYXJhbXMubmVzdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghaXNNb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydFRyYW5zbGF0ZSA9IHMuZ2V0V3JhcHBlclRyYW5zbGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbigwKTtcclxuICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmlnZ2VyKCd3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kIG1zVHJhbnNpdGlvbkVuZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9wbGF5ICYmIHMuYXV0b3BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnN0b3BBdXRvcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5wYXVzZUF1dG9wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9HcmFiIEN1cnNvclxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IgJiYgKHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPT09IHRydWUgfHwgcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9PT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnNldEdyYWJDdXJzb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBkaWZmID0gcy50b3VjaGVzLmRpZmYgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy50b3VjaGVzLmN1cnJlbnRYIC0gcy50b3VjaGVzLnN0YXJ0WCA6IHMudG91Y2hlcy5jdXJyZW50WSAtIHMudG91Y2hlcy5zdGFydFk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGRpZmYgPSBkaWZmICogcy5wYXJhbXMudG91Y2hSYXRpbztcclxuICAgICAgICAgICAgaWYgKHMucnRsKSBkaWZmID0gLWRpZmY7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHMuc3dpcGVEaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcclxuICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBzdGFydFRyYW5zbGF0ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGRpc2FibGVQYXJlbnRTd2lwZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoKGRpZmYgPiAwICYmIGN1cnJlbnRUcmFuc2xhdGUgPiBzLm1pblRyYW5zbGF0ZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJlc2lzdGFuY2UpIGN1cnJlbnRUcmFuc2xhdGUgPSBzLm1pblRyYW5zbGF0ZSgpIC0gMSArIE1hdGgucG93KC1zLm1pblRyYW5zbGF0ZSgpICsgc3RhcnRUcmFuc2xhdGUgKyBkaWZmLCBzLnBhcmFtcy5yZXNpc3RhbmNlUmF0aW8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmYgPCAwICYmIGN1cnJlbnRUcmFuc2xhdGUgPCBzLm1heFRyYW5zbGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucmVzaXN0YW5jZSkgY3VycmVudFRyYW5zbGF0ZSA9IHMubWF4VHJhbnNsYXRlKCkgKyAxIC0gTWF0aC5wb3cocy5tYXhUcmFuc2xhdGUoKSAtIHN0YXJ0VHJhbnNsYXRlIC0gZGlmZiwgcy5wYXJhbXMucmVzaXN0YW5jZVJhdGlvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xyXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgJiYgcy5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnICYmIGN1cnJlbnRUcmFuc2xhdGUgPCBzdGFydFRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IHN0YXJ0VHJhbnNsYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiAmJiBzLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgY3VycmVudFRyYW5zbGF0ZSA+IHN0YXJ0VHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlID0gc3RhcnRUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gVGhyZXNob2xkXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiBzLnBhcmFtcy50aHJlc2hvbGQgfHwgYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxvd1RocmVzaG9sZE1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dUaHJlc2hvbGRNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WCA9IHMudG91Y2hlcy5jdXJyZW50WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WSA9IHMudG91Y2hlcy5jdXJyZW50WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IHN0YXJ0VHJhbnNsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnRvdWNoZXMuZGlmZiA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLnRvdWNoZXMuY3VycmVudFggLSBzLnRvdWNoZXMuc3RhcnRYIDogcy50b3VjaGVzLmN1cnJlbnRZIC0gcy50b3VjaGVzLnN0YXJ0WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBzdGFydFRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5mb2xsb3dGaW5nZXIpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGFjdGl2ZSBpbmRleCBpbiBmcmVlIG1vZGVcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlIHx8IHMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8vVmVsb2NpdHlcclxuICAgICAgICAgICAgICAgIGlmICh2ZWxvY2l0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzLnRvdWNoZXNbcy5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB0b3VjaFN0YXJ0VGltZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcy50b3VjaGVzW3MuaXNIb3Jpem9udGFsKCkgPyAnY3VycmVudFgnIDogJ2N1cnJlbnRZJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogKG5ldyB3aW5kb3cuRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9ncmVzc1xyXG4gICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKGN1cnJlbnRUcmFuc2xhdGUpO1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShjdXJyZW50VHJhbnNsYXRlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMub25Ub3VjaEVuZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVG91Y2hFbmQnLCBzLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICghaXNUb3VjaGVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIC8vUmV0dXJuIEdyYWIgQ3Vyc29yXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5ncmFiQ3Vyc29yICYmIGlzTW92ZWQgJiYgaXNUb3VjaGVkICAmJiAocy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9PT0gdHJ1ZSB8fCBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgcy5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUaW1lIGRpZmZcclxuICAgICAgICAgICAgdmFyIHRvdWNoRW5kVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIHRvdWNoU3RhcnRUaW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUYXAsIGRvdWJsZVRhcCwgQ2xpY2tcclxuICAgICAgICAgICAgaWYgKHMuYWxsb3dDbGljaykge1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVDbGlja2VkU2xpZGUoZSk7XHJcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVGFwJywgcywgZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgKHRvdWNoRW5kVGltZSAtIGxhc3RDbGlja1RpbWUpID4gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrVGltZW91dCkgY2xlYXJUaW1lb3V0KGNsaWNrVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbkhpZGUgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDAgJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKHMucGFyYW1zLmJ1bGxldENsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLnRvZ2dsZUNsYXNzKHMucGFyYW1zLnBhZ2luYXRpb25IaWRkZW5DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkNsaWNrJywgcywgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aW1lRGlmZiA8IDMwMCAmJiAodG91Y2hFbmRUaW1lIC0gbGFzdENsaWNrVGltZSkgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tUaW1lb3V0KSBjbGVhclRpbWVvdXQoY2xpY2tUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uRG91YmxlVGFwJywgcywgZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgbGFzdENsaWNrVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMpIHMuYWxsb3dDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWlzVG91Y2hlZCB8fCAhaXNNb3ZlZCB8fCAhcy5zd2lwZURpcmVjdGlvbiB8fCBzLnRvdWNoZXMuZGlmZiA9PT0gMCB8fCBjdXJyZW50VHJhbnNsYXRlID09PSBzdGFydFRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaXNUb3VjaGVkID0gaXNNb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzVG91Y2hlZCA9IGlzTW92ZWQgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3M7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mb2xsb3dGaW5nZXIpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgPSBzLnJ0bCA/IHMudHJhbnNsYXRlIDogLXMudHJhbnNsYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBvcyA9IC1jdXJyZW50VHJhbnNsYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3MgPCAtcy5taW5UcmFuc2xhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50UG9zID4gLXMubWF4VHJhbnNsYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXMubGVuZ3RoIDwgcy5zbmFwR3JpZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuc25hcEdyaWQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5zbGlkZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlbG9jaXRpZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdE1vdmVFdmVudCA9IHZlbG9jaXRpZXMucG9wKCksIHZlbG9jaXR5RXZlbnQgPSB2ZWxvY2l0aWVzLnBvcCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBsYXN0TW92ZUV2ZW50LnBvc2l0aW9uIC0gdmVsb2NpdHlFdmVudC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBsYXN0TW92ZUV2ZW50LnRpbWUgLSB2ZWxvY2l0eUV2ZW50LnRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSBkaXN0YW5jZSAvIHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSBzLnZlbG9jaXR5IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHMudmVsb2NpdHkpIDwgcy5wYXJhbXMuZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaW1wbGllcyB0aGF0IHRoZSB1c2VyIHN0b3BwZWQgbW92aW5nIGEgZmluZ2VyIHRoZW4gcmVsZWFzZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlIHdvdWxkIGJlIG5vIGV2ZW50cyB3aXRoIGRpc3RhbmNlIHplcm8sIHNvIHRoZSBsYXN0IGV2ZW50IGlzIHN0YWxlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+IDE1MCB8fCAobmV3IHdpbmRvdy5EYXRlKCkuZ2V0VGltZSgpIC0gbGFzdE1vdmVFdmVudC50aW1lKSA+IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IHMudmVsb2NpdHkgKiBzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbztcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bVJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlID0gcy52ZWxvY2l0eSAqIG1vbWVudHVtRHVyYXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gcy50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkgbmV3UG9zaXRpb24gPSAtIG5ld1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkb0JvdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZnRlckJvdW5jZVBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBib3VuY2VBbW91bnQgPSBNYXRoLmFicyhzLnZlbG9jaXR5KSAqIDIwICogcy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiA8IHMubWF4VHJhbnNsYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiArIHMubWF4VHJhbnNsYXRlKCkgPCAtYm91bmNlQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzLm1heFRyYW5zbGF0ZSgpIC0gYm91bmNlQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHMubWF4VHJhbnNsYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5tYXhUcmFuc2xhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdQb3NpdGlvbiA+IHMubWluVHJhbnNsYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiAtIHMubWluVHJhbnNsYXRlKCkgPiBib3VuY2VBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gcy5taW5UcmFuc2xhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzLm1pblRyYW5zbGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMucGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHMuc25hcEdyaWQubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkW2pdID4gLW5ld1Bvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocy5zbmFwR3JpZFtuZXh0U2xpZGVdIC0gbmV3UG9zaXRpb24pIDwgTWF0aC5hYnMocy5zbmFwR3JpZFtuZXh0U2xpZGUgLSAxXSAtIG5ld1Bvc2l0aW9uKSB8fCBzLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5zbmFwR3JpZFtuZXh0U2xpZGVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzLnNuYXBHcmlkW25leHRTbGlkZSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5ydGwpIG5ld1Bvc2l0aW9uID0gLSBuZXdQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9GaXggZHVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBpZiAocy52ZWxvY2l0eSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygoLW5ld1Bvc2l0aW9uIC0gcy50cmFuc2xhdGUpIC8gcy52ZWxvY2l0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uIC0gcy50cmFuc2xhdGUpIC8gcy52ZWxvY2l0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy5wYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UgJiYgZG9Cb3VuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyhhZnRlckJvdW5jZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25TdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcyB8fCAhYWxsb3dNb21lbnR1bUJvdW5jZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbk1vbWVudHVtQm91bmNlJywgcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKHMucGFyYW1zLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShhZnRlckJvdW5jZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLm9uVHJhbnNpdGlvbkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocy52ZWxvY2l0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25TdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMuYW5pbWF0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bSB8fCB0aW1lRGlmZiA+PSBzLnBhcmFtcy5sb25nU3dpcGVzTXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEZpbmQgY3VycmVudCBzbGlkZVxyXG4gICAgICAgICAgICB2YXIgaSwgc3RvcEluZGV4ID0gMCwgZ3JvdXBTaXplID0gcy5zbGlkZXNTaXplc0dyaWRbMF07XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHMuc2xpZGVzR3JpZFtpICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXBdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9zID49IHMuc2xpZGVzR3JpZFtpXSAmJiBjdXJyZW50UG9zIDwgcy5zbGlkZXNHcmlkW2kgKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBTaXplID0gcy5zbGlkZXNHcmlkW2kgKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cF0gLSBzLnNsaWRlc0dyaWRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3MgPj0gcy5zbGlkZXNHcmlkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwU2l6ZSA9IHMuc2xpZGVzR3JpZFtzLnNsaWRlc0dyaWQubGVuZ3RoIC0gMV0gLSBzLnNsaWRlc0dyaWRbcy5zbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxyXG4gICAgICAgICAgICB2YXIgcmF0aW8gPSAoY3VycmVudFBvcyAtIHMuc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRpbWVEaWZmID4gcy5wYXJhbXMubG9uZ1N3aXBlc01zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMb25nIHRvdWNoZXNcclxuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMubG9uZ1N3aXBlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocy5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhdGlvID49IHMucGFyYW1zLmxvbmdTd2lwZXNSYXRpbykgcy5zbGlkZVRvKHN0b3BJbmRleCArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHMuc2xpZGVUbyhzdG9wSW5kZXgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXRpbyA+ICgxIC0gcy5wYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSkgcy5zbGlkZVRvKHN0b3BJbmRleCArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHMuc2xpZGVUbyhzdG9wSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2hvcnQgc3dpcGVzXHJcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLnNob3J0U3dpcGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oc3RvcEluZGV4ICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzdG9wSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIFRyYW5zaXRpb25zXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMuX3NsaWRlVG8gPSBmdW5jdGlvbiAoc2xpZGVJbmRleCwgc3BlZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHMuc2xpZGVUbyhzbGlkZUluZGV4LCBzcGVlZCwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLnNsaWRlVG8gPSBmdW5jdGlvbiAoc2xpZGVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBydW5DYWxsYmFja3MgPT09ICd1bmRlZmluZWQnKSBydW5DYWxsYmFja3MgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlSW5kZXggPT09ICd1bmRlZmluZWQnKSBzbGlkZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPCAwKSBzbGlkZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgcy5zbmFwSW5kZXggPSBNYXRoLmZsb29yKHNsaWRlSW5kZXggLyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XHJcbiAgICAgICAgICAgIGlmIChzLnNuYXBJbmRleCA+PSBzLnNuYXBHcmlkLmxlbmd0aCkgcy5zbmFwSW5kZXggPSBzLnNuYXBHcmlkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSAtIHMuc25hcEdyaWRbcy5zbmFwSW5kZXhdO1xyXG4gICAgICAgICAgICAvLyBTdG9wIGF1dG9wbGF5XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hdXRvcGxheSAmJiBzLmF1dG9wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWwgfHwgIXMucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnBhdXNlQXV0b3BsYXkoc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgcHJvZ3Jlc3NcclxuICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxyXG4gICAgICAgICAgICBpZihzLnBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KXtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXNHcmlkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKC0gTWF0aC5mbG9vcih0cmFuc2xhdGUgKiAxMDApID49IE1hdGguZmxvb3Iocy5zbGlkZXNHcmlkW2ldICogMTAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xyXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgJiYgdHJhbnNsYXRlIDwgcy50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgcy5taW5UcmFuc2xhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiAmJiB0cmFuc2xhdGUgPiBzLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzLm1heFRyYW5zbGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHMuYWN0aXZlSW5kZXggfHwgMCkgIT09IHNsaWRlSW5kZXggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gVXBkYXRlIEluZGV4XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnKSBzcGVlZCA9IHMucGFyYW1zLnNwZWVkO1xyXG4gICAgICAgICAgICBzLnByZXZpb3VzSW5kZXggPSBzLmFjdGl2ZUluZGV4IHx8IDA7XHJcbiAgICAgICAgICAgIHMuYWN0aXZlSW5kZXggPSBzbGlkZUluZGV4O1xyXG4gICAgICAgICAgICBzLnVwZGF0ZVJlYWxJbmRleCgpO1xyXG4gICAgICAgICAgICBpZiAoKHMucnRsICYmIC10cmFuc2xhdGUgPT09IHMudHJhbnNsYXRlKSB8fCAoIXMucnRsICYmIHRyYW5zbGF0ZSA9PT0gcy50cmFuc2xhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKHRyYW5zbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XHJcbiAgICAgICAgICAgIHMub25UcmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNwZWVkID09PSAwIHx8IHMuYnJvd3Nlci5sdGVJRTkpIHtcclxuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xyXG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbigwKTtcclxuICAgICAgICAgICAgICAgIHMub25UcmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUodHJhbnNsYXRlKTtcclxuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24oc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzLmFuaW1hdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLm9uVHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcy5vblRyYW5zaXRpb25TdGFydCA9IGZ1bmN0aW9uIChydW5DYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBydW5DYWxsYmFja3MgPT09ICd1bmRlZmluZWQnKSBydW5DYWxsYmFja3MgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMubGF6eSkgcy5sYXp5Lm9uVHJhbnNpdGlvblN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25UcmFuc2l0aW9uU3RhcnQnLCBzKTtcclxuICAgICAgICAgICAgICAgIGlmIChzLmFjdGl2ZUluZGV4ICE9PSBzLnByZXZpb3VzSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVDaGFuZ2VTdGFydCcsIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmFjdGl2ZUluZGV4ID4gcy5wcmV2aW91c0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZU5leHRTdGFydCcsIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlUHJldlN0YXJ0Jywgcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChydW5DYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgcy5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbigwKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBydW5DYWxsYmFja3MgPT09ICd1bmRlZmluZWQnKSBydW5DYWxsYmFja3MgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAocy5sYXp5KSBzLmxhenkub25UcmFuc2l0aW9uRW5kKCk7XHJcbiAgICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25UcmFuc2l0aW9uRW5kJywgcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5hY3RpdmVJbmRleCAhPT0gcy5wcmV2aW91c0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlQ2hhbmdlRW5kJywgcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuYWN0aXZlSW5kZXggPiBzLnByZXZpb3VzSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlTmV4dEVuZCcsIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlUHJldkVuZCcsIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuaGlzdG9yeSAmJiBzLmhpc3RvcnkpIHtcclxuICAgICAgICAgICAgICAgIHMuaGlzdG9yeS5zZXRIaXN0b3J5KHMucGFyYW1zLmhpc3RvcnksIHMuYWN0aXZlSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5oYXNobmF2ICYmIHMuaGFzaG5hdikge1xyXG4gICAgICAgICAgICAgICAgcy5oYXNobmF2LnNldEhhc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5zbGlkZU5leHQgPSBmdW5jdGlvbiAocnVuQ2FsbGJhY2tzLCBzcGVlZCwgaW50ZXJuYWwpIHtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50TGVmdCA9IHMuY29udGFpbmVyWzBdLmNsaWVudExlZnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4ICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMuX3NsaWRlTmV4dCA9IGZ1bmN0aW9uIChzcGVlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcy5zbGlkZU5leHQodHJ1ZSwgc3BlZWQsIHRydWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5zbGlkZVByZXYgPSBmdW5jdGlvbiAocnVuQ2FsbGJhY2tzLCBzcGVlZCwgaW50ZXJuYWwpIHtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50TGVmdCA9IHMuY29udGFpbmVyWzBdLmNsaWVudExlZnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggLSAxLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggLSAxLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLl9zbGlkZVByZXYgPSBmdW5jdGlvbiAoc3BlZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHMuc2xpZGVQcmV2KHRydWUsIHNwZWVkLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMuc2xpZGVSZXNldCA9IGZ1bmN0aW9uIChydW5DYWxsYmFja3MsIHNwZWVkLCBpbnRlcm5hbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcy5kaXNhYmxlVG91Y2hDb250cm9sID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzLnBhcmFtcy5vbmx5RXh0ZXJuYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMuZW5hYmxlVG91Y2hDb250cm9sID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzLnBhcmFtcy5vbmx5RXh0ZXJuYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIFRyYW5zbGF0ZS90cmFuc2l0aW9uIGhlbHBlcnNcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJyAmJiBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XSkge1xyXG4gICAgICAgICAgICAgICAgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0uc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhcmFsbGF4ICYmIHMucGFyYWxsYXgpIHtcclxuICAgICAgICAgICAgICAgIHMucGFyYWxsYXguc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xyXG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNvbnRyb2wgJiYgcy5jb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzLmNvbnRyb2xsZXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLmVtaXQoJ29uU2V0VHJhbnNpdGlvbicsIHMsIGR1cmF0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh0cmFuc2xhdGUsIHVwZGF0ZUFjdGl2ZUluZGV4LCBieUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgeiA9IDA7XHJcbiAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0gcy5ydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgeSA9IHRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucm91bmRMZW5ndGhzKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0gcm91bmQoeCk7XHJcbiAgICAgICAgICAgICAgICB5ID0gcm91bmQoeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRyYW5zZm9ybXMzZCkgcy53cmFwcGVyLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4LCAnICsgeiArICdweCknKTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugcy53cmFwcGVyLnRyYW5zZm9ybSgndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBzLnRyYW5zbGF0ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyB4IDogeTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byB1cGRhdGUgcHJvZ3Jlc3NcclxuICAgICAgICAgICAgdmFyIHByb2dyZXNzO1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzLm1heFRyYW5zbGF0ZSgpIC0gcy5taW5UcmFuc2xhdGUoKTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzLm1pblRyYW5zbGF0ZSgpKSAvICh0cmFuc2xhdGVzRGlmZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBzLnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZUFjdGl2ZUluZGV4KSBzLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScgJiYgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0pIHtcclxuICAgICAgICAgICAgICAgIHMuZWZmZWN0c1tzLnBhcmFtcy5lZmZlY3RdLnNldFRyYW5zbGF0ZShzLnRyYW5zbGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhcmFsbGF4ICYmIHMucGFyYWxsYXgpIHtcclxuICAgICAgICAgICAgICAgIHMucGFyYWxsYXguc2V0VHJhbnNsYXRlKHMudHJhbnNsYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XHJcbiAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUocy50cmFuc2xhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jb250cm9sICYmIHMuY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgcy5jb250cm9sbGVyLnNldFRyYW5zbGF0ZShzLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLmVtaXQoJ29uU2V0VHJhbnNsYXRlJywgcywgcy50cmFuc2xhdGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcy5nZXRUcmFuc2xhdGUgPSBmdW5jdGlvbiAoZWwsIGF4aXMpIHtcclxuICAgICAgICAgICAgdmFyIG1hdHJpeCwgY3VyVHJhbnNmb3JtLCBjdXJTdHlsZSwgdHJhbnNmb3JtTWF0cml4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhdXRvbWF0aWMgYXhpcyBkZXRlY3Rpb25cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBheGlzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgYXhpcyA9ICd4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMucnRsID8gLXMudHJhbnNsYXRlIDogcy50cmFuc2xhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY3VyU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUud2Via2l0VHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm0uc3BsaXQoJywgJykubWFwKGZ1bmN0aW9uKGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5yZXBsYWNlKCcsJywnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJywgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBXZWJraXQgY2hva2Ugd2hlbiAnbm9uZScgaXMgcGFzc2VkOyBwYXNzXHJcbiAgICAgICAgICAgICAgICAvLyBlbXB0eSBzdHJpbmcgaW5zdGVhZCBpbiB0aGlzIGNhc2VcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IG5ldyB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KGN1clRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBjdXJUcmFuc2Zvcm0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtTWF0cml4ID0gY3VyU3R5bGUuTW96VHJhbnNmb3JtIHx8IGN1clN0eWxlLk9UcmFuc2Zvcm0gfHwgY3VyU3R5bGUuTXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUubXNUcmFuc2Zvcm0gIHx8IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKCd0cmFuc2xhdGUoJywgJ21hdHJpeCgxLCAwLCAwLCAxLCcpO1xyXG4gICAgICAgICAgICAgICAgbWF0cml4ID0gdHJhbnNmb3JtTWF0cml4LnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XHJcbiAgICAgICAgICAgICAgICAvL0xhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeClcclxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQxO1xyXG4gICAgICAgICAgICAgICAgLy9DcmF6eSBJRTEwIE1hdHJpeFxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTJdKTtcclxuICAgICAgICAgICAgICAgIC8vTm9ybWFsIEJyb3dzZXJzXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChheGlzID09PSAneScpIHtcclxuICAgICAgICAgICAgICAgIC8vTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KVxyXG4gICAgICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7XHJcbiAgICAgICAgICAgICAgICAvL0NyYXp5IElFMTAgTWF0cml4XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNilcclxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxM10pO1xyXG4gICAgICAgICAgICAgICAgLy9Ob3JtYWwgQnJvd3NlcnNcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucnRsICYmIGN1clRyYW5zZm9ybSkgY3VyVHJhbnNmb3JtID0gLWN1clRyYW5zZm9ybTtcclxuICAgICAgICAgICAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5nZXRXcmFwcGVyVHJhbnNsYXRlID0gZnVuY3Rpb24gKGF4aXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBheGlzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgYXhpcyA9IHMuaXNIb3Jpem9udGFsKCkgPyAneCcgOiAneSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHMuZ2V0VHJhbnNsYXRlKHMud3JhcHBlclswXSwgYXhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIE9ic2VydmVyXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMub2JzZXJ2ZXJzID0gW107XHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdE9ic2VydmVyKHRhcmdldCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlXHJcbiAgICAgICAgICAgIHZhciBPYnNlcnZlckZ1bmMgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2Via2l0TXV0YXRpb25PYnNlcnZlcjtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE9ic2VydmVyRnVuYyhmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBzLm9uUmVzaXplKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25PYnNlcnZlclVwZGF0ZScsIHMsIG11dGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuYXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoaWxkTGlzdCxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHR5cGVvZiBvcHRpb25zLmNoYXJhY3RlckRhdGEgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hhcmFjdGVyRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHMuaW5pdE9ic2VydmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm9ic2VydmVQYXJlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyUGFyZW50cyA9IHMuY29udGFpbmVyLnBhcmVudHMoKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRPYnNlcnZlcihjb250YWluZXJQYXJlbnRzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBPYnNlcnZlIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBpbml0T2JzZXJ2ZXIocy5jb250YWluZXJbMF0sIHtjaGlsZExpc3Q6IGZhbHNlfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE9ic2VydmUgd3JhcHBlclxyXG4gICAgICAgICAgICBpbml0T2JzZXJ2ZXIocy53cmFwcGVyWzBdLCB7YXR0cmlidXRlczogZmFsc2V9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMuZGlzY29ubmVjdE9ic2VydmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLm9ic2VydmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcy5vYnNlcnZlcnNbaV0uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMub2JzZXJ2ZXJzID0gW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIExvb3BcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgLy8gQ3JlYXRlIGxvb3BlZCBzbGlkZXNcclxuICAgICAgICBzLmNyZWF0ZUxvb3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVkIHNsaWRlc1xyXG4gICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICcuJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpLnJlbW92ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZihzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgIXMucGFyYW1zLmxvb3BlZFNsaWRlcykgcy5wYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgcy5sb29wZWRTbGlkZXMgPSBwYXJzZUludChzLnBhcmFtcy5sb29wZWRTbGlkZXMgfHwgcy5wYXJhbXMuc2xpZGVzUGVyVmlldywgMTApO1xyXG4gICAgICAgICAgICBzLmxvb3BlZFNsaWRlcyA9IHMubG9vcGVkU2xpZGVzICsgcy5wYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XHJcbiAgICAgICAgICAgIGlmIChzLmxvb3BlZFNsaWRlcyA+IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcHJlcGVuZFNsaWRlcyA9IFtdLCBhcHBlbmRTbGlkZXMgPSBbXSwgaTtcclxuICAgICAgICAgICAgc2xpZGVzLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IHMubG9vcGVkU2xpZGVzKSBhcHBlbmRTbGlkZXMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBzbGlkZXMubGVuZ3RoICYmIGluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcykgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLmFwcGVuZCgkKGFwcGVuZFNsaWRlc1tpXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGkgPSBwcmVwZW5kU2xpZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBzLndyYXBwZXIucHJlcGVuZCgkKHByZXBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHMuZGVzdHJveUxvb3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJy4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHMuc2xpZGVzLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLnJlTG9vcCA9IGZ1bmN0aW9uICh1cGRhdGVQb3NpdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgb2xkSW5kZXggPSBzLmFjdGl2ZUluZGV4IC0gcy5sb29wZWRTbGlkZXM7XHJcbiAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcclxuICAgICAgICAgICAgcy5jcmVhdGVMb29wKCk7XHJcbiAgICAgICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSgpO1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhvbGRJbmRleCArIHMubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMuZml4TG9vcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0luZGV4O1xyXG4gICAgICAgICAgICAvL0ZpeCBGb3IgTmVnYXRpdmUgT3ZlcnNsaWRpbmdcclxuICAgICAgICAgICAgaWYgKHMuYWN0aXZlSW5kZXggPCBzLmxvb3BlZFNsaWRlcykge1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyAqIDMgKyBzLmFjdGl2ZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIHMubG9vcGVkU2xpZGVzO1xyXG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9GaXggRm9yIFBvc2l0aXZlIE92ZXJzbGlkaW5nXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcy5hY3RpdmVJbmRleCA+PSBzLmxvb3BlZFNsaWRlcyAqIDIpIHx8IChzLmFjdGl2ZUluZGV4ID4gcy5zbGlkZXMubGVuZ3RoIC0gcy5wYXJhbXMuc2xpZGVzUGVyVmlldyAqIDIpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IC1zLnNsaWRlcy5sZW5ndGggKyBzLmFjdGl2ZUluZGV4ICsgcy5sb29wZWRTbGlkZXM7XHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgcy5sb29wZWRTbGlkZXM7XHJcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBBcHBlbmQvUHJlcGVuZC9SZW1vdmUgU2xpZGVzXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMuYXBwZW5kU2xpZGUgPSBmdW5jdGlvbiAoc2xpZGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmIHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSkgcy53cmFwcGVyLmFwcGVuZChzbGlkZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLmFwcGVuZChzbGlkZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICBzLmNyZWF0ZUxvb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIShzLnBhcmFtcy5vYnNlcnZlciAmJiBzLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5wcmVwZW5kU2xpZGUgPSBmdW5jdGlvbiAoc2xpZGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gcy5hY3RpdmVJbmRleCArIDE7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiBzbGlkZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZXNbaV0pIHMud3JhcHBlci5wcmVwZW5kKHNsaWRlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IHMuYWN0aXZlSW5kZXggKyBzbGlkZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnByZXBlbmQoc2xpZGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xyXG4gICAgICAgICAgICAgICAgcy5jcmVhdGVMb29wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEocy5wYXJhbXMub2JzZXJ2ZXIgJiYgcy5zdXBwb3J0Lm9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLnJlbW92ZVNsaWRlID0gZnVuY3Rpb24gKHNsaWRlc0luZGV4ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcclxuICAgICAgICAgICAgICAgIHMuc2xpZGVzID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBuZXdBY3RpdmVJbmRleCA9IHMuYWN0aXZlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBpbmRleFRvUmVtb3ZlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICdvYmplY3QnICYmIHNsaWRlc0luZGV4ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0luZGV4ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHMuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4LS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4LS07XHJcbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xyXG4gICAgICAgICAgICAgICAgcy5jcmVhdGVMb29wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCEocy5wYXJhbXMub2JzZXJ2ZXIgJiYgcy5zdXBwb3J0Lm9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCArIHMubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5yZW1vdmVBbGxTbGlkZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXNJbmRleGVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0luZGV4ZXMucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLnJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgRWZmZWN0c1xyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICBzLmVmZmVjdHMgPSB7XHJcbiAgICAgICAgICAgIGZhZGU6IHtcclxuICAgICAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBzbGlkZVswXS5zd2lwZXJTbGlkZU9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4ID0gLW9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB0eCA9IHR4IC0gcy50cmFuc2xhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5pc0hvcml6b250YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSB0eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVPcGFjaXR5ID0gcy5wYXJhbXMuZmFkZS5jcm9zc0ZhZGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KDEgLSBNYXRoLmFicyhzbGlkZVswXS5wcm9ncmVzcyksIDApIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxICsgTWF0aC5taW4oTWF0aC5tYXgoc2xpZGVbMF0ucHJvZ3Jlc3MsIC0xKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBzbGlkZU9wYWNpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgnICsgdHggKyAncHgsICcgKyB0eSArICdweCwgMHB4KScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy50cmFuc2l0aW9uKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSAmJiBkdXJhdGlvbiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUcmlnZ2VyZWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyRXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnLCAnb1RyYW5zaXRpb25FbmQnLCAnTVNUcmFuc2l0aW9uRW5kJywgJ21zVHJhbnNpdGlvbkVuZCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyRXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyaWdnZXIodHJpZ2dlckV2ZW50c1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmxpcDoge1xyXG4gICAgICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gc2xpZGVbMF0ucHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mbGlwLmxpbWl0Um90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oc2xpZGVbMF0ucHJvZ3Jlc3MsIDEpLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHNsaWRlWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm90YXRlID0gLTE4MCAqIHByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWSA9IHJvdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtb2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMuaXNIb3Jpem9udGFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5ID0gdHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYID0gLXJvdGF0ZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVZID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnJ0bCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWSA9IC1yb3RhdGVZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKHByb2dyZXNzKSkgKyBzLnNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mbGlwLnNsaWRlU2hhZG93cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgc2hhZG93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dBZnRlciA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QmVmb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dBZnRlciA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdyaWdodCcgOiAnYm90dG9tJykgKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0FmdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSBzaGFkb3dCZWZvcmVbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KC1wcm9ncmVzcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgnICsgdHggKyAncHgsICcgKyB0eSArICdweCwgMHB4KSByb3RhdGVYKCcgKyByb3RhdGVYICsgJ2RlZykgcm90YXRlWSgnICsgcm90YXRlWSArICdkZWcpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudFRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudFRyaWdnZXJlZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3Mocy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlckV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJywgJ29UcmFuc2l0aW9uRW5kJywgJ01TVHJhbnNpdGlvbkVuZCcsICdtc1RyYW5zaXRpb25FbmQnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlckV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmlnZ2VyKHRyaWdnZXJFdmVudHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1YmU6IHtcclxuICAgICAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyUm90YXRlID0gMCwgY3ViZVNoYWRvdztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY3ViZS5zaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cgPSBzLndyYXBwZXIuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1YmVTaGFkb3cubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdyA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItY3ViZS1zaGFkb3dcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuYXBwZW5kKGN1YmVTaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdy5jc3Moe2hlaWdodDogcy53aWR0aCArICdweCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cgPSBzLmNvbnRhaW5lci5maW5kKCcuc3dpcGVyLWN1YmUtc2hhZG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3ViZVNoYWRvdy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93ID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY29udGFpbmVyLmFwcGVuZChjdWJlU2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVBbmdsZSA9IGkgKiA5MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdW5kID0gTWF0aC5mbG9vcihzbGlkZUFuZ2xlIC8gMzYwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZUFuZ2xlID0gLXNsaWRlQW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZCA9IE1hdGguZmxvb3IoLXNsaWRlQW5nbGUgLyAzNjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKHNsaWRlWzBdLnByb2dyZXNzLCAxKSwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHggPSAwLCB0eSA9IDAsIHR6ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgJSA0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IC0gcm91bmQgKiA0ICogcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChpIC0gMSkgJSA0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eiA9IC0gcm91bmQgKiA0ICogcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChpIC0gMikgJSA0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IHMuc2l6ZSArIHJvdW5kICogNCAqIHMuc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR6ID0gcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChpIC0gMykgJSA0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IC0gcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSAzICogcy5zaXplICsgcy5zaXplICogNCAqIHJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtdHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eSA9IHR4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm0gPSAncm90YXRlWCgnICsgKHMuaXNIb3Jpem9udGFsKCkgPyAwIDogLXNsaWRlQW5nbGUpICsgJ2RlZykgcm90YXRlWSgnICsgKHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZUFuZ2xlIDogMCkgKyAnZGVnKSB0cmFuc2xhdGUzZCgnICsgdHggKyAncHgsICcgKyB0eSArICdweCwgJyArIHR6ICsgJ3B4KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8PSAxICYmIHByb2dyZXNzID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJSb3RhdGUgPSBpICogOTAgKyBwcm9ncmVzcyAqIDkwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSB3cmFwcGVyUm90YXRlID0gLWkgKiA5MCAtIHByb2dyZXNzICogOTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJhbnNmb3JtKHRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jdWJlLnNsaWRlU2hhZG93cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgc2hhZG93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dBZnRlciA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QmVmb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dBZnRlciA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdyaWdodCcgOiAnYm90dG9tJykgKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0FmdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSBzaGFkb3dCZWZvcmVbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KC1wcm9ncmVzcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSA1MCUgLScgKyAocy5zaXplIC8gMikgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSA1MCUgLScgKyAocy5zaXplIC8gMikgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDUwJSAtJyArIChzLnNpemUgLyAyKSArICdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSA1MCUgLScgKyAocy5zaXplIC8gMikgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmN1YmUuc2hhZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93LnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMHB4LCAnICsgKHMud2lkdGggLyAyICsgcy5wYXJhbXMuY3ViZS5zaGFkb3dPZmZzZXQpICsgJ3B4LCAnICsgKC1zLndpZHRoIC8gMikgKyAncHgpIHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooMGRlZykgc2NhbGUoJyArIChzLnBhcmFtcy5jdWJlLnNoYWRvd1NjYWxlKSArICcpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QW5nbGUgPSBNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAtIE1hdGguZmxvb3IoTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLyA5MCkgKiA5MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gMS41IC0gKE1hdGguc2luKHNoYWRvd0FuZ2xlICogMiAqIE1hdGguUEkgLyAzNjApIC8gMiArIE1hdGguY29zKHNoYWRvd0FuZ2xlICogMiAqIE1hdGguUEkgLyAzNjApIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbGUxID0gcy5wYXJhbXMuY3ViZS5zaGFkb3dTY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTIgPSBzLnBhcmFtcy5jdWJlLnNoYWRvd1NjYWxlIC8gbXVsdGlwbGllcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBzLnBhcmFtcy5jdWJlLnNoYWRvd09mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cudHJhbnNmb3JtKCdzY2FsZTNkKCcgKyBzY2FsZTEgKyAnLCAxLCAnICsgc2NhbGUyICsgJykgdHJhbnNsYXRlM2QoMHB4LCAnICsgKHMuaGVpZ2h0IC8gMiArIG9mZnNldCkgKyAncHgsICcgKyAoLXMuaGVpZ2h0IC8gMiAvIHNjYWxlMikgKyAncHgpIHJvdGF0ZVgoLTkwZGVnKScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB6RmFjdG9yID0gKHMuaXNTYWZhcmkgfHwgcy5pc1VpV2ViVmlldykgPyAoLXMuc2l6ZSAvIDIpIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwcHgsMCwnICsgekZhY3RvciArICdweCkgcm90YXRlWCgnICsgKHMuaXNIb3Jpem9udGFsKCkgPyAwIDogd3JhcHBlclJvdGF0ZSkgKyAnZGVnKSByb3RhdGVZKCcgKyAocy5pc0hvcml6b250YWwoKSA/IC13cmFwcGVyUm90YXRlIDogMCkgKyAnZGVnKScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jdWJlLnNoYWRvdyAmJiAhcy5pc0hvcml6b250YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmNvbnRhaW5lci5maW5kKCcuc3dpcGVyLWN1YmUtc2hhZG93JykudHJhbnNpdGlvbihkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb3ZlcmZsb3c6IHtcclxuICAgICAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm0gPSBzLnRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2VudGVyID0gcy5pc0hvcml6b250YWwoKSA/IC10cmFuc2Zvcm0gKyBzLndpZHRoIC8gMiA6IC10cmFuc2Zvcm0gKyBzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdGF0ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLnBhcmFtcy5jb3ZlcmZsb3cucm90YXRlOiAtcy5wYXJhbXMuY292ZXJmbG93LnJvdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlID0gcy5wYXJhbXMuY292ZXJmbG93LmRlcHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRWFjaCBzbGlkZSBvZmZzZXQgZnJvbSBjZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gcy5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZVNpemUgPSBzLnNsaWRlc1NpemVzR3JpZFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlT2Zmc2V0ID0gc2xpZGVbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXRNdWx0aXBsaWVyID0gKGNlbnRlciAtIHNsaWRlT2Zmc2V0IC0gc2xpZGVTaXplIC8gMikgLyBzbGlkZVNpemUgKiBzLnBhcmFtcy5jb3ZlcmZsb3cubW9kaWZpZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3RhdGVZID0gcy5pc0hvcml6b250YWwoKSA/IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXIgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm90YXRlWCA9IHMuaXNIb3Jpem9udGFsKCkgPyAwIDogcm90YXRlICogb2Zmc2V0TXVsdGlwbGllcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIHJvdGF0ZVogPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVaID0gLXRyYW5zbGF0ZSAqIE1hdGguYWJzKG9mZnNldE11bHRpcGxpZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlWSA9IHMuaXNIb3Jpem9udGFsKCkgPyAwIDogcy5wYXJhbXMuY292ZXJmbG93LnN0cmV0Y2ggKiAob2Zmc2V0TXVsdGlwbGllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVYID0gcy5pc0hvcml6b250YWwoKSA/IHMucGFyYW1zLmNvdmVyZmxvdy5zdHJldGNoICogKG9mZnNldE11bHRpcGxpZXIpIDogMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9GaXggZm9yIHVsdHJhIHNtYWxsIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWCkgPCAwLjAwMSkgdHJhbnNsYXRlWCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVZKSA8IDAuMDAxKSB0cmFuc2xhdGVZID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVopIDwgMC4wMDEpIHRyYW5zbGF0ZVogPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocm90YXRlWSkgPCAwLjAwMSkgcm90YXRlWSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhyb3RhdGVYKSA8IDAuMDAxKSByb3RhdGVYID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCcgKyB0cmFuc2xhdGVZICsgJ3B4LCcgKyB0cmFuc2xhdGVaICsgJ3B4KSAgcm90YXRlWCgnICsgcm90YXRlWCArICdkZWcpIHJvdGF0ZVkoJyArIHJvdGF0ZVkgKyAnZGVnKSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnRyYW5zZm9ybShzbGlkZVRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKG9mZnNldE11bHRpcGxpZXIpKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jb3ZlcmZsb3cuc2xpZGVTaGFkb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBzaGFkb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QmVmb3JlID0gcy5pc0hvcml6b250YWwoKSA/IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0FmdGVyID0gcy5pc0hvcml6b250YWwoKSA/IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QmVmb3JlID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCcpICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZChzaGFkb3dCZWZvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0FmdGVyID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ3JpZ2h0JyA6ICdib3R0b20nKSArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGgpIHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gb2Zmc2V0TXVsdGlwbGllciA+IDAgPyBvZmZzZXRNdWx0aXBsaWVyIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSAoLW9mZnNldE11bHRpcGxpZXIpID4gMCA/IC1vZmZzZXRNdWx0aXBsaWVyIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL1NldCBjb3JyZWN0IHBlcnNwZWN0aXZlIGZvciBJRTEwXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuYnJvd3Nlci5pZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3MgPSBzLndyYXBwZXJbMF0uc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdzLnBlcnNwZWN0aXZlT3JpZ2luID0gY2VudGVyICsgJ3B4IDUwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBJbWFnZXMgTGF6eSBMb2FkaW5nXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMubGF6eSA9IHtcclxuICAgICAgICAgICAgaW5pdGlhbEltYWdlTG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZEltYWdlSW5TbGlkZTogZnVuY3Rpb24gKGluZGV4LCBsb2FkSW5EdXBsaWNhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxvYWRJbkR1cGxpY2F0ZSA9PT0gJ3VuZGVmaW5lZCcpIGxvYWRJbkR1cGxpY2F0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gc2xpZGUuZmluZCgnLicgKyBzLnBhcmFtcy5sYXp5TG9hZGluZ0NsYXNzICsgJzpub3QoLicgKyBzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGVkQ2xhc3MgKyAnKTpub3QoLicgKyBzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGluZ0NsYXNzICsgJyknKTtcclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5sYXp5TG9hZGluZ0NsYXNzKSAmJiAhc2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMubGF6eVN0YXR1c0xvYWRlZENsYXNzKSAmJiAhc2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMubGF6eVN0YXR1c0xvYWRpbmdDbGFzcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBpbWcuYWRkKHNsaWRlWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpbWcubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbWcuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9pbWcgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9pbWcuYWRkQ2xhc3Mocy5wYXJhbXMubGF6eVN0YXR1c0xvYWRpbmdDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSBfaW1nLmF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcmMgPSBfaW1nLmF0dHIoJ2RhdGEtc3JjJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldCA9IF9pbWcuYXR0cignZGF0YS1zcmNzZXQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXMgPSBfaW1nLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzLmxvYWRJbWFnZShfaW1nWzBdLCAoc3JjIHx8IGJhY2tncm91bmQpLCBzcmNzZXQsIHNpemVzLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiJyArIGJhY2tncm91bmQgKyAnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLnJlbW92ZUF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuYXR0cignc3Jjc2V0Jywgc3Jjc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLnJlbW92ZUF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2l6ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLmF0dHIoJ3NpemVzJywgc2l6ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcucmVtb3ZlQXR0cignZGF0YS1zaXplcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuYXR0cignc3JjJywgc3JjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLnJlbW92ZUF0dHIoJ2RhdGEtc3JjJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5hZGRDbGFzcyhzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGVkQ2xhc3MpLnJlbW92ZUNsYXNzKHMucGFyYW1zLmxhenlTdGF0dXNMb2FkaW5nQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5maW5kKCcuJyArIHMucGFyYW1zLmxhenlQcmVsb2FkZXJDbGFzcyArICcsIC4nICsgcy5wYXJhbXMucHJlbG9hZGVyQ2xhc3MpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCAmJiBsb2FkSW5EdXBsaWNhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZU9yaWdpbmFsSW5kZXggPSBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlLmhhc0NsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2xpZGUgPSBzLndyYXBwZXIuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBzbGlkZU9yaWdpbmFsSW5kZXggKyAnXCJdOm5vdCguJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnKScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKG9yaWdpbmFsU2xpZGUuaW5kZXgoKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR1cGxpY2F0ZWRTbGlkZSA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBzbGlkZU9yaWdpbmFsSW5kZXggKyAnXCJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUoZHVwbGljYXRlZFNsaWRlLmluZGV4KCksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uTGF6eUltYWdlUmVhZHknLCBzLCBzbGlkZVswXSwgX2ltZ1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkxhenlJbWFnZUxvYWQnLCBzLCBzbGlkZVswXSwgX2ltZ1swXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVzUGVyVmlldyA9IHMucGFyYW1zLnNsaWRlc1BlclZpZXc7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXMubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQpIHMubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZVZpc2libGVDbGFzcykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKCQodGhpcykuaW5kZXgoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVzUGVyVmlldyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcy5hY3RpdmVJbmRleDsgaSA8IHMuYWN0aXZlSW5kZXggKyBzbGlkZXNQZXJWaWV3IDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbaV0pIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZEltYWdlSW5TbGlkZShzLmFjdGl2ZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubGF6eUxvYWRpbmdJblByZXZOZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPiAxIHx8IChzLnBhcmFtcy5sYXp5TG9hZGluZ0luUHJldk5leHRBbW91bnQgJiYgcy5wYXJhbXMubGF6eUxvYWRpbmdJblByZXZOZXh0QW1vdW50ID4gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IHMucGFyYW1zLmxhenlMb2FkaW5nSW5QcmV2TmV4dEFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwdiA9IHNsaWRlc1BlclZpZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhJbmRleCA9IE1hdGgubWluKHMuYWN0aXZlSW5kZXggKyBzcHYgKyBNYXRoLm1heChhbW91bnQsIHNwdiksIHMuc2xpZGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW5JbmRleCA9IE1hdGgubWF4KHMuYWN0aXZlSW5kZXggLSBNYXRoLm1heChzcHYsIGFtb3VudCksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXh0IFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBzLmFjdGl2ZUluZGV4ICsgc2xpZGVzUGVyVmlldzsgaSA8IG1heEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSkgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldiBTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gbWluSW5kZXg7IGkgPCBzLmFjdGl2ZUluZGV4IDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbaV0pIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFNsaWRlID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTbGlkZS5sZW5ndGggPiAwKSBzLmxhenkubG9hZEltYWdlSW5TbGlkZShuZXh0U2xpZGUuaW5kZXgoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlLmxlbmd0aCA+IDApIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKHByZXZTbGlkZS5pbmRleCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubGF6eUxvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydCB8fCAoIXMucGFyYW1zLmxhenlMb2FkaW5nT25UcmFuc2l0aW9uU3RhcnQgJiYgIXMubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZyAmJiAhcy5wYXJhbXMubGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIFNjcm9sbGJhclxyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICBzLnNjcm9sbGJhciA9IHtcclxuICAgICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0RHJhZ1Bvc2l0aW9uOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IDAsIHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgICAgIHZhciBwb2ludGVyUG9zaXRpb24gPSBzLmlzSG9yaXpvbnRhbCgpID9cclxuICAgICAgICAgICAgICAgICAgICAoKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScpID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCB8fCBlLmNsaWVudFgpIDpcclxuICAgICAgICAgICAgICAgICAgICAoKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScpID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWSB8fCBlLmNsaWVudFkpIDtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IChwb2ludGVyUG9zaXRpb24pIC0gc2IudHJhY2sub2Zmc2V0KClbcy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnXSAtIHNiLmRyYWdTaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbk1pbiA9IC1zLm1pblRyYW5zbGF0ZSgpICogc2IubW92ZURpdmlkZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25NYXggPSAtcy5tYXhUcmFuc2xhdGUoKSAqIHNiLm1vdmVEaXZpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDwgcG9zaXRpb25NaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uTWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zaXRpb24gPiBwb3NpdGlvbk1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb25NYXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbiAvIHNiLm1vdmVEaXZpZGVyO1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyhwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUocG9zaXRpb24sIHRydWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcclxuICAgICAgICAgICAgICAgIHNiLmlzVG91Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2Iuc2V0RHJhZ1Bvc2l0aW9uKGUpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNiLmRyYWdUaW1lb3V0KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNiLnRyYWNrLnRyYW5zaXRpb24oMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFySGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrLmNzcygnb3BhY2l0eScsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb24oMTAwKTtcclxuICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNpdGlvbigxMDApO1xyXG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblNjcm9sbGJhckRyYWdTdGFydCcsIHMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkcmFnTW92ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzYi5pc1RvdWNoZWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNiLnNldERyYWdQb3NpdGlvbihlKTtcclxuICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uKDApO1xyXG4gICAgICAgICAgICAgICAgc2IudHJhY2sudHJhbnNpdGlvbigwKTtcclxuICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNpdGlvbigwKTtcclxuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGxiYXJEcmFnTW92ZScsIHMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkcmFnRW5kOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNiLmlzVG91Y2hlZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgc2IuaXNUb3VjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFySGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzYi5kcmFnVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2IudHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrLnRyYW5zaXRpb24oNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGxiYXJEcmFnRW5kJywgcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyU25hcE9uUmVsZWFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVSZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkcmFnZ2FibGVFdmVudHM6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHMucGFyYW1zLnNpbXVsYXRlVG91Y2ggPT09IGZhbHNlICYmICFzLnN1cHBvcnQudG91Y2gpKSByZXR1cm4gcy50b3VjaEV2ZW50c0Rlc2t0b3A7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBzLnRvdWNoRXZlbnRzO1xyXG4gICAgICAgICAgICB9KSgpLFxyXG4gICAgICAgICAgICBlbmFibGVEcmFnZ2FibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHMuc3VwcG9ydC50b3VjaCA/IHNiLnRyYWNrIDogZG9jdW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAkKHNiLnRyYWNrKS5vbihzYi5kcmFnZ2FibGVFdmVudHMuc3RhcnQsIHNiLmRyYWdTdGFydCk7XHJcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkub24oc2IuZHJhZ2dhYmxlRXZlbnRzLm1vdmUsIHNiLmRyYWdNb3ZlKTtcclxuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5vbihzYi5kcmFnZ2FibGVFdmVudHMuZW5kLCBzYi5kcmFnRW5kKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcy5zdXBwb3J0LnRvdWNoID8gc2IudHJhY2sgOiBkb2N1bWVudDtcclxuICAgICAgICAgICAgICAgICQoc2IudHJhY2spLm9mZihzYi5kcmFnZ2FibGVFdmVudHMuc3RhcnQsIHNiLmRyYWdTdGFydCk7XHJcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkub2ZmKHNiLmRyYWdnYWJsZUV2ZW50cy5tb3ZlLCBzYi5kcmFnTW92ZSk7XHJcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkub2ZmKHNiLmRyYWdnYWJsZUV2ZW50cy5lbmQsIHNiLmRyYWdFbmQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuc2Nyb2xsYmFyKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcclxuICAgICAgICAgICAgICAgIHNiLnRyYWNrID0gJChzLnBhcmFtcy5zY3JvbGxiYXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBzLnBhcmFtcy5zY3JvbGxiYXIgPT09ICdzdHJpbmcnICYmIHNiLnRyYWNrLmxlbmd0aCA+IDEgJiYgcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5zY3JvbGxiYXIpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrID0gcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5zY3JvbGxiYXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2IuZHJhZyA9IHNiLnRyYWNrLmZpbmQoJy5zd2lwZXItc2Nyb2xsYmFyLWRyYWcnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzYi5kcmFnLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNiLmRyYWcgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNjcm9sbGJhci1kcmFnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2IudHJhY2suYXBwZW5kKHNiLmRyYWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS53aWR0aCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHNiLnRyYWNrU2l6ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzYi50cmFja1swXS5vZmZzZXRXaWR0aCA6IHNiLnRyYWNrWzBdLm9mZnNldEhlaWdodDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNiLmRpdmlkZXIgPSBzLnNpemUgLyBzLnZpcnR1YWxTaXplO1xyXG4gICAgICAgICAgICAgICAgc2IubW92ZURpdmlkZXIgPSBzYi5kaXZpZGVyICogKHNiLnRyYWNrU2l6ZSAvIHMuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBzYi5kcmFnU2l6ZSA9IHNiLnRyYWNrU2l6ZSAqIHNiLmRpdmlkZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUud2lkdGggPSBzYi5kcmFnU2l6ZSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLmhlaWdodCA9IHNiLmRyYWdTaXplICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzYi5kaXZpZGVyID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzYi50cmFja1swXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2IudHJhY2tbMF0uc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckhpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzYi50cmFja1swXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLnNjcm9sbGJhcikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpZmY7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBzLnRyYW5zbGF0ZSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1BvcztcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBuZXdTaXplID0gc2IuZHJhZ1NpemU7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSAoc2IudHJhY2tTaXplIC0gc2IuZHJhZ1NpemUpICogcy5wcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIGlmIChzLnJ0bCAmJiBzLmlzSG9yaXpvbnRhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zID0gLW5ld1BvcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UG9zID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gc2IuZHJhZ1NpemUgLSBuZXdQb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BvcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC1uZXdQb3MgKyBzYi5kcmFnU2l6ZSA+IHNiLnRyYWNrU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gc2IudHJhY2tTaXplICsgbmV3UG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3MgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzYi5kcmFnU2l6ZSArIG5ld1BvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3UG9zICsgc2IuZHJhZ1NpemUgPiBzYi50cmFja1NpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNiLnRyYWNrU2l6ZSAtIG5ld1BvcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQudHJhbnNmb3JtczNkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgnICsgKG5ld1BvcykgKyAncHgsIDAsIDApJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYi5kcmFnLnRyYW5zZm9ybSgndHJhbnNsYXRlWCgnICsgKG5ld1BvcykgKyAncHgpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUud2lkdGggPSBuZXdTaXplICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQudHJhbnNmb3JtczNkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwcHgsICcgKyAobmV3UG9zKSArICdweCwgMCknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNmb3JtKCd0cmFuc2xhdGVZKCcgKyAobmV3UG9zKSArICdweCknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS5oZWlnaHQgPSBuZXdTaXplICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJIaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNiLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrWzBdLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHNiLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2IudHJhY2tbMF0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrLnRyYW5zaXRpb24oNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLnNjcm9sbGJhcikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuZHJhZy50cmFuc2l0aW9uKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgQ29udHJvbGxlclxyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICBzLmNvbnRyb2xsZXIgPSB7XHJcbiAgICAgICAgICAgIExpbmVhclNwbGluZTogZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0SW5kZXggPSB4Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAvLyBHaXZlbiBhbiB4IHZhbHVlICh4MiksIHJldHVybiB0aGUgZXhwZWN0ZWQgeTIgdmFsdWU6XHJcbiAgICAgICAgICAgICAgICAvLyAoeDEseTEpIGlzIHRoZSBrbm93biBwb2ludCBiZWZvcmUgZ2l2ZW4gdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAvLyAoeDMseTMpIGlzIHRoZSBrbm93biBwb2ludCBhZnRlciBnaXZlbiB2YWx1ZS5cclxuICAgICAgICAgICAgICAgIHZhciBpMSwgaTM7XHJcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHRoaXMueC5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVycG9sYXRlID0gZnVuY3Rpb24gKHgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF4MikgcmV0dXJuIDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBpbmRleGVzIG9mIHgxIGFuZCB4MyAodGhlIGFycmF5IGluZGV4ZXMgYmVmb3JlIGFuZCBhZnRlciBnaXZlbiB4Mik6XHJcbiAgICAgICAgICAgICAgICAgICAgaTMgPSBiaW5hcnlTZWFyY2godGhpcy54LCB4Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgaTEgPSBpMyAtIDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBvdXIgaW5kZXhlcyBpMSAmIGkzLCBzbyB3ZSBjYW4gY2FsY3VsYXRlIGFscmVhZHk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8geTIgOj0gKCh4MuKIkngxKSDDlyAoeTPiiJJ5MSkpIMO3ICh4M+KIkngxKSArIHkxXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoeDIgLSB0aGlzLnhbaTFdKSAqICh0aGlzLnlbaTNdIC0gdGhpcy55W2kxXSkpIC8gKHRoaXMueFtpM10gLSB0aGlzLnhbaTFdKSArIHRoaXMueVtpMV07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGJpbmFyeVNlYXJjaCA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4SW5kZXgsIG1pbkluZGV4LCBndWVzcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5JbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1heEluZGV4IC0gbWluSW5kZXggPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5W2d1ZXNzID0gbWF4SW5kZXggKyBtaW5JbmRleCA+PiAxXSA8PSB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5JbmRleCA9IGd1ZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhJbmRleCA9IGd1ZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF4SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8veHh4OiBmb3Igbm93IGkgd2lsbCBqdXN0IHNhdmUgb25lIHNwbGluZSBmdW5jdGlvbiB0byB0b1xyXG4gICAgICAgICAgICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOiBmdW5jdGlvbihjKXtcclxuICAgICAgICAgICAgICAgIGlmKCFzLmNvbnRyb2xsZXIuc3BsaW5lKSBzLmNvbnRyb2xsZXIuc3BsaW5lID0gcy5wYXJhbXMubG9vcCA/XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IHMuY29udHJvbGxlci5MaW5lYXJTcGxpbmUocy5zbGlkZXNHcmlkLCBjLnNsaWRlc0dyaWQpIDpcclxuICAgICAgICAgICAgICAgICAgICBuZXcgcy5jb250cm9sbGVyLkxpbmVhclNwbGluZShzLnNuYXBHcmlkLCBjLnNuYXBHcmlkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xsZWQgPSBzLnBhcmFtcy5jb250cm9sO1xyXG4gICAgICAgICAgICAgICB2YXIgbXVsdGlwbGllciwgY29udHJvbGxlZFRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGNyZWF0ZSBhbiBJbnRlcnBvbGF0ZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgc25hcEdyaWRzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8geCBpcyB0aGUgR3JpZCBvZiB0aGUgc2Nyb2xsZWQgc2Nyb2xsZXIgYW5kIHkgd2lsbCBiZSB0aGUgY29udHJvbGxlZCBzY3JvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IG1ha2VzIHNlbnNlIHRvIGNyZWF0ZSB0aGlzIG9ubHkgb25jZSBhbmQgcmVjYWxsIGl0IGZvciB0aGUgaW50ZXJwb2xhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiBkb2VzIGEgbG90IG9mIHZhbHVlIGNhY2hpbmcgZm9yIHBlcmZvcm1hbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gYy5ydGwgJiYgYy5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAtcy50cmFuc2xhdGUgOiBzLnRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY29udHJvbEJ5ID09PSAnc2xpZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuY29udHJvbGxlci5nZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uKGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpIGFtIG5vdCBzdXJlIHdoeSB0aGUgdmFsdWVzIGhhdmUgdG8gYmUgbXVsdGlwbGljYXRlZCB0aGlzIHdheSwgdHJpZWQgdG8gaW52ZXJ0IHRoZSBzbmFwR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgaXQgZGlkIG5vdCB3b3JrIG91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gLXMuY29udHJvbGxlci5zcGxpbmUuaW50ZXJwb2xhdGUoLXRyYW5zbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjb250cm9sbGVkVHJhbnNsYXRlIHx8IHMucGFyYW1zLmNvbnRyb2xCeSA9PT0gJ2NvbnRhaW5lcicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gKGMubWF4VHJhbnNsYXRlKCkgLSBjLm1pblRyYW5zbGF0ZSgpKSAvIChzLm1heFRyYW5zbGF0ZSgpIC0gcy5taW5UcmFuc2xhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAodHJhbnNsYXRlIC0gcy5taW5UcmFuc2xhdGUoKSkgKiBtdWx0aXBsaWVyICsgYy5taW5UcmFuc2xhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNvbnRyb2xJbnZlcnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSBjLm1heFRyYW5zbGF0ZSgpIC0gY29udHJvbGxlZFRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYy51cGRhdGVQcm9ncmVzcyhjb250cm9sbGVkVHJhbnNsYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjLnNldFdyYXBwZXJUcmFuc2xhdGUoY29udHJvbGxlZFRyYW5zbGF0ZSwgZmFsc2UsIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGMudXBkYXRlQWN0aXZlSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpZiAocy5pc0FycmF5KGNvbnRyb2xsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRyb2xsZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlZFtpXSAhPT0gYnlDb250cm9sbGVyICYmIGNvbnRyb2xsZWRbaV0gaW5zdGFuY2VvZiBTd2lwZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udHJvbGxlZCBpbnN0YW5jZW9mIFN3aXBlciAmJiBieUNvbnRyb2xsZXIgIT09IGNvbnRyb2xsZWQpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2xhdGUoY29udHJvbGxlZCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250cm9sbGVkID0gcy5wYXJhbXMuY29udHJvbDtcclxuICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGMuc2V0V3JhcHBlclRyYW5zaXRpb24oZHVyYXRpb24sIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjLm9uVHJhbnNpdGlvblN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyb2xsZWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLnBhcmFtcy5sb29wICYmIHMucGFyYW1zLmNvbnRyb2xCeSA9PT0gJ3NsaWRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuZml4TG9vcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5vblRyYW5zaXRpb25FbmQoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMuaXNBcnJheShjb250cm9sbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb250cm9sbGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oY29udHJvbGxlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250cm9sbGVkIGluc3RhbmNlb2YgU3dpcGVyICYmIGJ5Q29udHJvbGxlciAhPT0gY29udHJvbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBIYXNoIE5hdmlnYXRpb25cclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy5oYXNobmF2ID0ge1xyXG4gICAgICAgICAgICBvbkhhc2hDYW5nZTogZnVuY3Rpb24gKGUsIGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdIYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZVNsaWRlSGFzaCA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtaGFzaCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld0hhc2ggIT09IGFjdGl2ZVNsaWRlSGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICdbZGF0YS1oYXNoPVwiJyArIChuZXdIYXNoKSArICdcIl0nKS5pbmRleCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXR0YWNoRXZlbnRzOiBmdW5jdGlvbiAoZGV0YWNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gZGV0YWNoID8gJ29mZicgOiAnb24nO1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpW2FjdGlvbl0oJ2hhc2hjaGFuZ2UnLCBzLmhhc2huYXYub25IYXNoQ2FuZ2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRIYXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXMuaGFzaG5hdi5pbml0aWFsaXplZCB8fCAhcy5wYXJhbXMuaGFzaG5hdikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJlcGxhY2VTdGF0ZSAmJiB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgKCcjJyArIHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtaGFzaCcpIHx8ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNoID0gc2xpZGUuYXR0cignZGF0YS1oYXNoJykgfHwgc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaGFzaCA9IGhhc2ggfHwgJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuaGFzaG5hdiB8fCBzLnBhcmFtcy5oaXN0b3J5KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBzLmhhc2huYXYuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGVlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHMuc2xpZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVIYXNoID0gc2xpZGUuYXR0cignZGF0YS1oYXNoJykgfHwgc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUhhc2ggPT09IGhhc2ggJiYgIXNsaWRlLmhhc0NsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzbGlkZS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5oYXNobmF2V2F0Y2hTdGF0ZSkgcy5oYXNobmF2LmF0dGFjaEV2ZW50cygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuaGFzaG5hdldhdGNoU3RhdGUpIHMuaGFzaG5hdi5hdHRhY2hFdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIEhpc3RvcnkgQXBpIHdpdGggZmFsbGJhY2sgdG8gSGFzaG5hdlxyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICBzLmhpc3RvcnkgPSB7XHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuaGlzdG9yeSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuaGlzdG9yeSB8fCAhd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuaGlzdG9yeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHMucGFyYW1zLmhhc2huYXYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHMuaGlzdG9yeS5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGhzID0gdGhpcy5nZXRQYXRoVmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGF0aHMua2V5ICYmICF0aGlzLnBhdGhzLnZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvU2xpZGUoMCwgdGhpcy5wYXRocy52YWx1ZSwgcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTtcclxuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMucmVwbGFjZVN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5zZXRIaXN0b3J5UG9wU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRIaXN0b3J5UG9wU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcy5oaXN0b3J5LnBhdGhzID0gcy5oaXN0b3J5LmdldFBhdGhWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgIHMuaGlzdG9yeS5zY3JvbGxUb1NsaWRlKHMucGFyYW1zLnNwZWVkLCBzLmhpc3RvcnkucGF0aHMudmFsdWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UGF0aFZhbHVlczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aEFycmF5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSBwYXRoQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHBhdGhBcnJheVt0b3RhbCAtIDJdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGF0aEFycmF5W3RvdGFsIC0gMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleSwgdmFsdWU6IHZhbHVlIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldEhpc3Rvcnk6IGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXMuaGlzdG9yeS5pbml0aWFsaXplZCB8fCAhcy5wYXJhbXMuaGlzdG9yeSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcclxuICAgICAgICAgICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGtleSArICcvJyArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJlcGxhY2VTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsdWdpZnk6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXHdcXC1dKy9nLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwtXFwtKy9nLCAnLScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14tKy8sICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8tKyQvLCAnJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbFRvU2xpZGU6IGZ1bmN0aW9uKHNwZWVkLCB2YWx1ZSwgcnVuQ2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gcy5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUhpc3RvcnkgPSB0aGlzLnNsdWdpZnkoc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVIaXN0b3J5ID09PSB2YWx1ZSAmJiAhc2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNsaWRlLmluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oMCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIEtleWJvYXJkIENvbnRyb2xcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlS2V5Ym9hcmQoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvL2pxdWVyeSBmaXhcclxuICAgICAgICAgICAgdmFyIGtjID0gZS5rZXlDb2RlIHx8IGUuY2hhckNvZGU7XHJcbiAgICAgICAgICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcclxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ICYmIChzLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSAzOSB8fCAhcy5pc0hvcml6b250YWwoKSAmJiBrYyA9PT0gNDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ICYmIChzLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSAzNyB8fCAhcy5pc0hvcml6b250YWwoKSAmJiBrYyA9PT0gMzgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYScpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGtjID09PSAzNyB8fCBrYyA9PT0gMzkgfHwga2MgPT09IDM4IHx8IGtjID09PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluVmlldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9DaGVjayB0aGF0IHN3aXBlciBzaG91bGQgYmUgaW5zaWRlIG9mIHZpc2libGUgYXJlYSBvZiB3aW5kb3dcclxuICAgICAgICAgICAgICAgIGlmIChzLmNvbnRhaW5lci5wYXJlbnRzKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpLmxlbmd0aCA+IDAgJiYgcy5jb250YWluZXIucGFyZW50cygnLicgKyBzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93U2Nyb2xsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgICAgIHZhciBzd2lwZXJPZmZzZXQgPSBzLmNvbnRhaW5lci5vZmZzZXQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkgc3dpcGVyT2Zmc2V0LmxlZnQgPSBzd2lwZXJPZmZzZXQubGVmdCAtIHMuY29udGFpbmVyWzBdLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3dpcGVyQ29vcmQgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wXSxcclxuICAgICAgICAgICAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wXSxcclxuICAgICAgICAgICAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3AgKyBzLmhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0ICsgcy53aWR0aCwgc3dpcGVyT2Zmc2V0LnRvcCArIHMuaGVpZ2h0XVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyQ29vcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBzd2lwZXJDb29yZFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50WzBdID49IHdpbmRvd1Njcm9sbC5sZWZ0ICYmIHBvaW50WzBdIDw9IHdpbmRvd1Njcm9sbC5sZWZ0ICsgd2luZG93V2lkdGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRbMV0gPj0gd2luZG93U2Nyb2xsLnRvcCAmJiBwb2ludFsxXSA8PSB3aW5kb3dTY3JvbGwudG9wICsgd2luZG93SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluVmlldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpblZpZXcpIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtjID09PSAzNyB8fCBrYyA9PT0gMzkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKChrYyA9PT0gMzkgJiYgIXMucnRsKSB8fCAoa2MgPT09IDM3ICYmIHMucnRsKSkgcy5zbGlkZU5leHQoKTtcclxuICAgICAgICAgICAgICAgIGlmICgoa2MgPT09IDM3ICYmICFzLnJ0bCkgfHwgKGtjID09PSAzOSAmJiBzLnJ0bCkpIHMuc2xpZGVQcmV2KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2MgPT09IDM4IHx8IGtjID09PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoa2MgPT09IDQwKSBzLnNsaWRlTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtjID09PSAzOCkgcy5zbGlkZVByZXYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzLmRpc2FibGVLZXlib2FyZENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMucGFyYW1zLmtleWJvYXJkQ29udHJvbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleWRvd24nLCBoYW5kbGVLZXlib2FyZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLmVuYWJsZUtleWJvYXJkQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcy5wYXJhbXMua2V5Ym9hcmRDb250cm9sID0gdHJ1ZTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBoYW5kbGVLZXlib2FyZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBNb3VzZXdoZWVsIENvbnRyb2xcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy5tb3VzZXdoZWVsID0ge1xyXG4gICAgICAgICAgICBldmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUaW1lOiAobmV3IHdpbmRvdy5EYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxDb250cm9sKSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgYmVzdCBjb21iaW5hdGlvbiBpZiB5b3UgcHJlZmVyIHNwaW5YICsgc3Bpblkgbm9ybWFsaXphdGlvbi4gIEl0IGZhdm9yc1xyXG4gICAgICAgICAgICAgKiB0aGUgb2xkZXIgRE9NTW91c2VTY3JvbGwgZm9yIEZpcmVmb3gsIGFzIEZGIGRvZXMgbm90IGluY2x1ZGUgd2hlZWxEZWx0YSB3aXRoXHJcbiAgICAgICAgICAgICAqICd3aGVlbCcgZXZlbnQsIG1ha2luZyBzcGluIHNwZWVkIGRldGVybWluYXRpb24gaW1wb3NzaWJsZS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHMubW91c2V3aGVlbC5ldmVudCA9IChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSA/XHJcbiAgICAgICAgICAgICAgICAnRE9NTW91c2VTY3JvbGwnIDpcclxuICAgICAgICAgICAgICAgIGlzRXZlbnRTdXBwb3J0ZWQoKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgJ3doZWVsJyA6ICdtb3VzZXdoZWVsJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gaXNFdmVudFN1cHBvcnRlZCgpIHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9ICdvbndoZWVsJztcclxuICAgICAgICAgICAgdmFyIGlzU3VwcG9ydGVkID0gZXZlbnROYW1lIGluIGRvY3VtZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZXZlbnROYW1lLCAncmV0dXJuOycpO1xyXG4gICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZWxlbWVudFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghaXNTdXBwb3J0ZWQgJiZcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmltcGxlbWVudGF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWx3YXlzIHJldHVybnMgdHJ1ZSBpbiBuZXdlciBicm93c2VycyBhcyBwZXIgdGhlIHN0YW5kYXJkLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1oYXNmZWF0dXJlXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCcnLCAnJykgIT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHdheSB0byB0ZXN0IHN1cHBvcnQgZm9yIHRoZSBgd2hlZWxgIGV2ZW50IGluIElFOSsuXHJcbiAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJ0V2ZW50cy53aGVlbCcsICczLjAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNld2hlZWwoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvL2pxdWVyeSBmaXhcclxuICAgICAgICAgICAgdmFyIGRlbHRhID0gMDtcclxuICAgICAgICAgICAgdmFyIHJ0bEZhY3RvciA9IHMucnRsID8gLTEgOiAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5vcm1hbGl6ZVdoZWVsKCBlICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsRm9yY2VUb0F4aXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRhdGEucGl4ZWxYKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxZKSkgZGVsdGEgPSBkYXRhLnBpeGVsWCAqIHJ0bEZhY3RvcjtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkYXRhLnBpeGVsWSkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWCkpIGRlbHRhID0gZGF0YS5waXhlbFk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YSA9IE1hdGguYWJzKGRhdGEucGl4ZWxYKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxZKSA/IC0gZGF0YS5waXhlbFggKiBydGxGYWN0b3IgOiAtIGRhdGEucGl4ZWxZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbEludmVydCkgZGVsdGEgPSAtZGVsdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuZnJlZU1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgobmV3IHdpbmRvdy5EYXRlKCkpLmdldFRpbWUoKSAtIHMubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZSA+IDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCFzLmlzRW5kIHx8IHMucGFyYW1zLmxvb3ApICYmICFzLmFuaW1hdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZU5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGwnLCBzLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsUmVsZWFzZU9uRWRnZXMpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCghcy5pc0JlZ2lubmluZyB8fCBzLnBhcmFtcy5sb29wKSAmJiAhcy5hbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVQcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2Nyb2xsJywgcywgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy5wYXJhbXMubW91c2V3aGVlbFJlbGVhc2VPbkVkZ2VzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWUgPSAobmV3IHdpbmRvdy5EYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vRnJlZW1vZGUgb3Igc2Nyb2xsQ29udGFpbmVyOlxyXG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcy5nZXRXcmFwcGVyVHJhbnNsYXRlKCkgKyBkZWx0YSAqIHMucGFyYW1zLm1vdXNld2hlZWxTZW5zaXRpdml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3YXNCZWdpbm5pbmcgPSBzLmlzQmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIHdhc0VuZCA9IHMuaXNFbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPj0gcy5taW5UcmFuc2xhdGUoKSkgcG9zaXRpb24gPSBzLm1pblRyYW5zbGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IHMubWF4VHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gcy5tYXhUcmFuc2xhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24oMCk7XHJcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCF3YXNCZWdpbm5pbmcgJiYgcy5pc0JlZ2lubmluZyB8fCAhd2FzRW5kICYmIHMuaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzLm1vdXNld2hlZWwudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5tb3VzZXdoZWVsLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZyAmJiBzLmxhenkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBFbWl0IGV2ZW50XHJcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2Nyb2xsJywgcywgZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBTdG9wIGF1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXkgJiYgcy5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbikgcy5zdG9wQXV0b3BsYXkoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwIHx8IHBvc2l0aW9uID09PSBzLm1heFRyYW5zbGF0ZSgpKSByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcy5kaXNhYmxlTW91c2V3aGVlbENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghcy5tb3VzZXdoZWVsLmV2ZW50KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLmNvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxFdmVudHNUYXJnZWQgIT09ICdjb250YWluZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAkKHMucGFyYW1zLm1vdXNld2hlZWxFdmVudHNUYXJnZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhcmdldC5vZmYocy5tb3VzZXdoZWVsLmV2ZW50LCBoYW5kbGVNb3VzZXdoZWVsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBzLmVuYWJsZU1vdXNld2hlZWxDb250cm9sID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXMubW91c2V3aGVlbC5ldmVudCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcy5jb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsRXZlbnRzVGFyZ2VkICE9PSAnY29udGFpbmVyJykge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gJChzLnBhcmFtcy5tb3VzZXdoZWVsRXZlbnRzVGFyZ2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXQub24ocy5tb3VzZXdoZWVsLmV2ZW50LCBoYW5kbGVNb3VzZXdoZWVsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNb3VzZSB3aGVlbCAoYW5kIDItZmluZ2VyIHRyYWNrcGFkKSBzdXBwb3J0IG9uIHRoZSB3ZWIgc3Vja3MuICBJdCBpc1xyXG4gICAgICAgICAqIGNvbXBsaWNhdGVkLCB0aHVzIHRoaXMgZG9jIGlzIGxvbmcgYW5kIChob3BlZnVsbHkpIGRldGFpbGVkIGVub3VnaCB0byBhbnN3ZXJcclxuICAgICAgICAgKiB5b3VyIHF1ZXN0aW9ucy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIElmIHlvdSBuZWVkIHRvIHJlYWN0IHRvIHRoZSBtb3VzZSB3aGVlbCBpbiBhIHByZWRpY3RhYmxlIHdheSwgdGhpcyBjb2RlIGlzXHJcbiAgICAgICAgICogbGlrZSB5b3VyIGJlc3Rlc3QgZnJpZW5kLiAqIGh1Z3MgKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQXMgb2YgdG9kYXksIHRoZXJlIGFyZSA0IERPTSBldmVudCB0eXBlcyB5b3UgY2FuIGxpc3RlbiB0bzpcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgJ3doZWVsJyAgICAgICAgICAgICAgICAtLSBDaHJvbWUoMzErKSwgRkYoMTcrKSwgSUUoOSspXHJcbiAgICAgICAgICogICAnbW91c2V3aGVlbCcgICAgICAgICAgIC0tIENocm9tZSwgSUUoNispLCBPcGVyYSwgU2FmYXJpXHJcbiAgICAgICAgICogICAnTW96TW91c2VQaXhlbFNjcm9sbCcgIC0tIEZGKDMuNSBvbmx5ISkgKDIwMTAtMjAxMykgLS0gZG9uJ3QgYm90aGVyIVxyXG4gICAgICAgICAqICAgJ0RPTU1vdXNlU2Nyb2xsJyAgICAgICAtLSBGRigwLjkuNyspIHNpbmNlIDIwMDNcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFNvIHdoYXQgdG8gZG8/ICBUaGUgaXMgdGhlIGJlc3Q6XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgIG5vcm1hbGl6ZVdoZWVsLmdldEV2ZW50VHlwZSgpO1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogSW4geW91ciBldmVudCBjYWxsYmFjaywgdXNlIHRoaXMgY29kZSB0byBnZXQgc2FuZSBpbnRlcnByZXRhdGlvbiBvZiB0aGVcclxuICAgICAgICAgKiBkZWx0YXMuICBUaGlzIGNvZGUgd2lsbCByZXR1cm4gYW4gb2JqZWN0IHdpdGggcHJvcGVydGllczpcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgc3BpblggICAtLSBub3JtYWxpemVkIHNwaW4gc3BlZWQgKHVzZSBmb3Igem9vbSkgLSB4IHBsYW5lXHJcbiAgICAgICAgICogICBzcGluWSAgIC0tIFwiIC0geSBwbGFuZVxyXG4gICAgICAgICAqICAgcGl4ZWxYICAtLSBub3JtYWxpemVkIGRpc3RhbmNlICh0byBwaXhlbHMpIC0geCBwbGFuZVxyXG4gICAgICAgICAqICAgcGl4ZWxZICAtLSBcIiAtIHkgcGxhbmVcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFdoZWVsIHZhbHVlcyBhcmUgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIgYXNzdW1pbmcgeW91IGFyZSB1c2luZyB0aGUgd2hlZWwgdG9cclxuICAgICAgICAgKiBzY3JvbGwgYSB3ZWIgcGFnZSBieSBhIG51bWJlciBvZiBsaW5lcyBvciBwaXhlbHMgKG9yIHBhZ2VzKS4gIFZhbHVlcyBjYW4gdmFyeVxyXG4gICAgICAgICAqIHNpZ25pZmljYW50bHkgb24gZGlmZmVyZW50IHBsYXRmb3JtcyBhbmQgYnJvd3NlcnMsIGZvcmdldHRpbmcgdGhhdCB5b3UgY2FuXHJcbiAgICAgICAgICogc2Nyb2xsIGF0IGRpZmZlcmVudCBzcGVlZHMuICBTb21lIGRldmljZXMgKGxpa2UgdHJhY2twYWRzKSBlbWl0IG1vcmUgZXZlbnRzXHJcbiAgICAgICAgICogYXQgc21hbGxlciBpbmNyZW1lbnRzIHdpdGggZmluZSBncmFudWxhcml0eSwgYW5kIHNvbWUgZW1pdCBtYXNzaXZlIGp1bXBzIHdpdGhcclxuICAgICAgICAgKiBsaW5lYXIgc3BlZWQgb3IgYWNjZWxlcmF0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogVGhpcyBjb2RlIGRvZXMgaXRzIGJlc3QgdG8gbm9ybWFsaXplIHRoZSBkZWx0YXMgZm9yIHlvdTpcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgLSBzcGluIGlzIHRyeWluZyB0byBub3JtYWxpemUgaG93IGZhciB0aGUgd2hlZWwgd2FzIHNwdW4gKG9yIHRyYWNrcGFkXHJcbiAgICAgICAgICogICAgIGRyYWdnZWQpLiAgVGhpcyBpcyBzdXBlciB1c2VmdWwgZm9yIHpvb20gc3VwcG9ydCB3aGVyZSB5b3Ugd2FudCB0b1xyXG4gICAgICAgICAqICAgICB0aHJvdyBhd2F5IHRoZSBjaHVua3kgc2Nyb2xsIHN0ZXBzIG9uIHRoZSBQQyBhbmQgbWFrZSB0aG9zZSBlcXVhbCB0b1xyXG4gICAgICAgICAqICAgICB0aGUgc2xvdyBhbmQgc21vb3RoIHRpbnkgc3RlcHMgb24gdGhlIE1hYy4gS2V5IGRhdGE6IFRoaXMgY29kZSB0cmllcyB0b1xyXG4gICAgICAgICAqICAgICByZXNvbHZlIGEgc2luZ2xlIHNsb3cgc3RlcCBvbiBhIHdoZWVsIHRvIDEuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgIC0gcGl4ZWwgaXMgbm9ybWFsaXppbmcgdGhlIGRlc2lyZWQgc2Nyb2xsIGRlbHRhIGluIHBpeGVsIHVuaXRzLiAgWW91J2xsXHJcbiAgICAgICAgICogICAgIGdldCB0aGUgY3JhenkgZGlmZmVyZW5jZXMgYmV0d2VlbiBicm93c2VycywgYnV0IGF0IGxlYXN0IGl0J2xsIGJlIGluXHJcbiAgICAgICAgICogICAgIHBpeGVscyFcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgLSBwb3NpdGl2ZSB2YWx1ZSBpbmRpY2F0ZXMgc2Nyb2xsaW5nIERPV04vUklHSFQsIG5lZ2F0aXZlIFVQL0xFRlQuICBUaGlzXHJcbiAgICAgICAgICogICAgIHNob3VsZCB0cmFuc2xhdGUgdG8gcG9zaXRpdmUgdmFsdWUgem9vbWluZyBJTiwgbmVnYXRpdmUgem9vbWluZyBPVVQuXHJcbiAgICAgICAgICogICAgIFRoaXMgbWF0Y2hlcyB0aGUgbmV3ZXIgJ3doZWVsJyBldmVudC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFdoeSBhcmUgdGhlcmUgc3BpblgsIHNwaW5ZIChvciBwaXhlbHMpP1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAtIHNwaW5YIGlzIGEgMi1maW5nZXIgc2lkZSBkcmFnIG9uIHRoZSB0cmFja3BhZCwgYW5kIGEgc2hpZnQgKyB3aGVlbCB0dXJuXHJcbiAgICAgICAgICogICAgIHdpdGggYSBtb3VzZS4gIEl0IHJlc3VsdHMgaW4gc2lkZS1zY3JvbGxpbmcgaW4gdGhlIGJyb3dzZXIgYnkgZGVmYXVsdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgLSBzcGluWSBpcyB3aGF0IHlvdSBleHBlY3QgLS0gaXQncyB0aGUgY2xhc3NpYyBheGlzIG9mIGEgbW91c2Ugd2hlZWwuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgIC0gSSBkcm9wcGVkIHNwaW5aL3BpeGVsWi4gIEl0IGlzIHN1cHBvcnRlZCBieSB0aGUgRE9NIDMgJ3doZWVsJyBldmVudCBhbmRcclxuICAgICAgICAgKiAgICAgcHJvYmFibHkgaXMgYnkgYnJvd3NlcnMgaW4gY29uanVuY3Rpb24gd2l0aCBmYW5jeSAzRCBjb250cm9sbGVycyAuLiBidXRcclxuICAgICAgICAgKiAgICAgeW91IGtub3cuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBJbXBsZW1lbnRhdGlvbiBpbmZvOlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogRXhhbXBsZXMgb2YgJ3doZWVsJyBldmVudCBpZiB5b3Ugc2Nyb2xsIHNsb3dseSAoZG93bikgYnkgb25lIHN0ZXAgd2l0aCBhblxyXG4gICAgICAgICAqIGF2ZXJhZ2UgbW91c2U6XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgIE9TIFggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gICAgNCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxyXG4gICAgICAgICAqICAgT1MgWCArIFNhZmFyaSAgKG1vdXNlKSAgICAgLSAgTi9BICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhICAtMTIpXHJcbiAgICAgICAgICogICBPUyBYICsgRmlyZWZveCAobW91c2UpICAgICAtICAgIDAuMSBsaW5lICBkZWx0YSAgKHdoZWVsRGVsdGEgIE4vQSlcclxuICAgICAgICAgKiAgIFdpbjggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gIDEwMCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxyXG4gICAgICAgICAqICAgV2luOCArIEZpcmVmb3ggKG1vdXNlKSAgICAgLSAgICAzICAgbGluZSAgZGVsdGEgICh3aGVlbERlbHRhIC0xMjApXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBPbiB0aGUgdHJhY2twYWQ6XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgIE9TIFggKyBDaHJvbWUgICh0cmFja3BhZCkgIC0gICAgMiAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAgIC02KVxyXG4gICAgICAgICAqICAgT1MgWCArIEZpcmVmb3ggKHRyYWNrcGFkKSAgLSAgICAxICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhICBOL0EpXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBPbiBvdGhlci9vbGRlciBicm93c2Vycy4uIGl0J3MgbW9yZSBjb21wbGljYXRlZCBhcyB0aGVyZSBjYW4gYmUgbXVsdGlwbGUgYW5kXHJcbiAgICAgICAgICogYWxzbyBtaXNzaW5nIGRlbHRhIHZhbHVlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFRoZSAnd2hlZWwnIGV2ZW50IGlzIG1vcmUgc3RhbmRhcmQ6XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50cy13aGVlbGV2ZW50c1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogVGhlIGJhc2ljcyBpcyB0aGF0IGl0IGluY2x1ZGVzIGEgdW5pdCwgZGVsdGFNb2RlIChwaXhlbHMsIGxpbmVzLCBwYWdlcyksIGFuZFxyXG4gICAgICAgICAqIGRlbHRhWCwgZGVsdGFZIGFuZCBkZWx0YVouICBTb21lIGJyb3dzZXJzIHByb3ZpZGUgb3RoZXIgdmFsdWVzIHRvIG1haW50YWluXHJcbiAgICAgICAgICogYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIGV2ZW50cy4gIFRob3NlIG90aGVyIHZhbHVlcyBoZWxwIHVzXHJcbiAgICAgICAgICogYmV0dGVyIG5vcm1hbGl6ZSBzcGluIHNwZWVkLiAgRXhhbXBsZSBvZiB3aGF0IHRoZSBicm93c2VycyBwcm92aWRlOlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXZlbnQud2hlZWxEZWx0YSB8IGV2ZW50LmRldGFpbFxyXG4gICAgICAgICAqICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICogICAgICAgICAgU2FmYXJpIHY1L09TIFggIHwgICAgICAgLTEyMCAgICAgICB8ICAgICAgIDBcclxuICAgICAgICAgKiAgICAgICAgICBTYWZhcmkgdjUvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxyXG4gICAgICAgICAqICAgICAgICAgQ2hyb21lIHYxNy9PUyBYICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXHJcbiAgICAgICAgICogICAgICAgICBDaHJvbWUgdjE3L1dpbjcgIHwgICAgICAgLTEyMCAgICAgICB8ICAgICAgIDBcclxuICAgICAgICAgKiAgICAgICAgICAgICAgICBJRTkvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICB1bmRlZmluZWRcclxuICAgICAgICAgKiAgICAgICAgIEZpcmVmb3ggdjQvT1MgWCAgfCAgICAgdW5kZWZpbmVkICAgIHwgICAgICAgMVxyXG4gICAgICAgICAqICAgICAgICAgRmlyZWZveCB2NC9XaW43ICB8ICAgICB1bmRlZmluZWQgICAgfCAgICAgICAzXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBub3JtYWxpemVXaGVlbCggLypvYmplY3QqLyBldmVudCApIC8qb2JqZWN0Ki8ge1xyXG4gICAgICAgICAgICAvLyBSZWFzb25hYmxlIGRlZmF1bHRzXHJcbiAgICAgICAgICAgIHZhciBQSVhFTF9TVEVQID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBMSU5FX0hFSUdIVCA9IDQwO1xyXG4gICAgICAgICAgICB2YXIgUEFHRV9IRUlHSFQgPSA4MDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBzWCA9IDAsIHNZID0gMCwgICAgICAgLy8gc3BpblgsIHNwaW5ZXHJcbiAgICAgICAgICAgICAgICBwWCA9IDAsIHBZID0gMDsgICAgICAgLy8gcGl4ZWxYLCBwaXhlbFlcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gTGVnYWN5XHJcbiAgICAgICAgICAgIGlmKCAnZGV0YWlsJyBpbiBldmVudCApIHtcclxuICAgICAgICAgICAgICAgIHNZID0gZXZlbnQuZGV0YWlsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCAnd2hlZWxEZWx0YScgaW4gZXZlbnQgKSB7XHJcbiAgICAgICAgICAgICAgICBzWSA9IC1ldmVudC53aGVlbERlbHRhIC8gMTIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCAnd2hlZWxEZWx0YVknIGluIGV2ZW50ICkge1xyXG4gICAgICAgICAgICAgICAgc1kgPSAtZXZlbnQud2hlZWxEZWx0YVkgLyAxMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoICd3aGVlbERlbHRhWCcgaW4gZXZlbnQgKSB7XHJcbiAgICAgICAgICAgICAgICBzWCA9IC1ldmVudC53aGVlbERlbHRhWCAvIDEyMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBzaWRlIHNjcm9sbGluZyBvbiBGRiB3aXRoIERPTU1vdXNlU2Nyb2xsXHJcbiAgICAgICAgICAgIGlmKCAnYXhpcycgaW4gZXZlbnQgJiYgZXZlbnQuYXhpcyA9PT0gZXZlbnQuSE9SSVpPTlRBTF9BWElTICkge1xyXG4gICAgICAgICAgICAgICAgc1ggPSBzWTtcclxuICAgICAgICAgICAgICAgIHNZID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBwWCA9IHNYICogUElYRUxfU1RFUDtcclxuICAgICAgICAgICAgcFkgPSBzWSAqIFBJWEVMX1NURVA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCAnZGVsdGFZJyBpbiBldmVudCApIHtcclxuICAgICAgICAgICAgICAgIHBZID0gZXZlbnQuZGVsdGFZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCAnZGVsdGFYJyBpbiBldmVudCApIHtcclxuICAgICAgICAgICAgICAgIHBYID0gZXZlbnQuZGVsdGFYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCAocFggfHwgcFkpICYmIGV2ZW50LmRlbHRhTW9kZSApIHtcclxuICAgICAgICAgICAgICAgIGlmKCBldmVudC5kZWx0YU1vZGUgPT09IDEgKSB7ICAgICAgICAgIC8vIGRlbHRhIGluIExJTkUgdW5pdHNcclxuICAgICAgICAgICAgICAgICAgICBwWCAqPSBMSU5FX0hFSUdIVDtcclxuICAgICAgICAgICAgICAgICAgICBwWSAqPSBMSU5FX0hFSUdIVDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWx0YSBpbiBQQUdFIHVuaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgcFggKj0gUEFHRV9IRUlHSFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcFkgKj0gUEFHRV9IRUlHSFQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gRmFsbC1iYWNrIGlmIHNwaW4gY2Fubm90IGJlIGRldGVybWluZWRcclxuICAgICAgICAgICAgaWYoIHBYICYmICFzWCApIHtcclxuICAgICAgICAgICAgICAgIHNYID0gKHBYIDwgMSkgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIHBZICYmICFzWSApIHtcclxuICAgICAgICAgICAgICAgIHNZID0gKHBZIDwgMSkgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNwaW5YOiBzWCxcclxuICAgICAgICAgICAgICAgIHNwaW5ZOiBzWSxcclxuICAgICAgICAgICAgICAgIHBpeGVsWDogcFgsXHJcbiAgICAgICAgICAgICAgICBwaXhlbFk6IHBZXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIFBhcmFsbGF4XHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBhcmFsbGF4VHJhbnNmb3JtKGVsLCBwcm9ncmVzcykge1xyXG4gICAgICAgICAgICBlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICB2YXIgcCwgcFgsIHBZO1xyXG4gICAgICAgICAgICB2YXIgcnRsRmFjdG9yID0gcy5ydGwgPyAtMSA6IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHAgPSBlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheCcpIHx8ICcwJztcclxuICAgICAgICAgICAgcFggPSBlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC14Jyk7XHJcbiAgICAgICAgICAgIHBZID0gZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteScpO1xyXG4gICAgICAgICAgICBpZiAocFggfHwgcFkpIHtcclxuICAgICAgICAgICAgICAgIHBYID0gcFggfHwgJzAnO1xyXG4gICAgICAgICAgICAgICAgcFkgPSBwWSB8fCAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBYID0gcDtcclxuICAgICAgICAgICAgICAgICAgICBwWSA9ICcwJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBZID0gcDtcclxuICAgICAgICAgICAgICAgICAgICBwWCA9ICcwJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoKHBYKS5pbmRleE9mKCclJykgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcFggPSBwYXJzZUludChwWCwgMTApICogcHJvZ3Jlc3MgKiBydGxGYWN0b3IgKyAnJSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwWCA9IHBYICogcHJvZ3Jlc3MgKiBydGxGYWN0b3IgKyAncHgnIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKHBZKS5pbmRleE9mKCclJykgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcFkgPSBwYXJzZUludChwWSwgMTApICogcHJvZ3Jlc3MgKyAnJSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwWSA9IHBZICogcHJvZ3Jlc3MgKyAncHgnIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBlbC50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyBwWCArICcsICcgKyBwWSArICcsMHB4KScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzLnBhcmFsbGF4ID0ge1xyXG4gICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHMuY29udGFpbmVyLmNoaWxkcmVuKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXJhbGxheFRyYW5zZm9ybSh0aGlzLCBzLnByb2dyZXNzKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcy5zbGlkZXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChzbGlkZVswXS5wcm9ncmVzcywgLTEpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFyYWxsYXhUcmFuc2Zvcm0odGhpcywgcHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIGR1cmF0aW9uID0gcy5wYXJhbXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBzLmNvbnRhaW5lci5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbGxheER1cmF0aW9uID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb24nKSwgMTApIHx8IGR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkgcGFyYWxsYXhEdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudHJhbnNpdGlvbihwYXJhbGxheER1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBab29tXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIHMuem9vbSA9IHtcclxuICAgICAgICAgICAgLy8gXCJHbG9iYWxcIiBQcm9wc1xyXG4gICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgY3VycmVudFNjYWxlOiAxLFxyXG4gICAgICAgICAgICBpc1NjYWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBnZXN0dXJlOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVIZWlnaHQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVdyYXA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHpvb21NYXg6IHMucGFyYW1zLnpvb21NYXhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFg6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRZOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtaW5YOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtaW5ZOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtYXhYOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtYXhZOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBzdGFydFg6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0WTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hlc1N0YXJ0OiB7fSxcclxuICAgICAgICAgICAgICAgIHRvdWNoZXNDdXJyZW50OiB7fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZWxvY2l0eToge1xyXG4gICAgICAgICAgICAgICAgeDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgeTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgcHJldlBvc2l0aW9uWDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgcHJldlBvc2l0aW9uWTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgcHJldlRpbWU6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBDYWxjIFNjYWxlIEZyb20gTXVsdGktdG91Y2hlc1xyXG4gICAgICAgICAgICBnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIHZhciB4MSA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICB5MSA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSxcclxuICAgICAgICAgICAgICAgICAgICB4MiA9IGUudGFyZ2V0VG91Y2hlc1sxXS5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICB5MiA9IGUudGFyZ2V0VG91Y2hlc1sxXS5wYWdlWTtcclxuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gRXZlbnRzXHJcbiAgICAgICAgICAgIG9uR2VzdHVyZVN0YXJ0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHogPSBzLnpvb207XHJcbiAgICAgICAgICAgICAgICBpZiAoIXMuc3VwcG9ydC5nZXN0dXJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5zY2FsZVN0YXJ0ID0gei5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuc2xpZGUgfHwgIXouZ2VzdHVyZS5zbGlkZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuc2xpZGUgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh6Lmdlc3R1cmUuc2xpZGUubGVuZ3RoID09PSAwKSB6Lmdlc3R1cmUuc2xpZGUgPSBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2UgPSB6Lmdlc3R1cmUuc2xpZGUuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZVdyYXAgPSB6Lmdlc3R1cmUuaW1hZ2UucGFyZW50KCcuJyArIHMucGFyYW1zLnpvb21Db250YWluZXJDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLnpvb21NYXggPSB6Lmdlc3R1cmUuaW1hZ2VXcmFwLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBzLnBhcmFtcy56b29tTWF4IDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoei5nZXN0dXJlLmltYWdlV3JhcC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlLnRyYW5zaXRpb24oMCk7XHJcbiAgICAgICAgICAgICAgICB6LmlzU2NhbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uR2VzdHVyZUNoYW5nZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzLnN1cHBvcnQuZ2VzdHVyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2htb3ZlJyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLnNjYWxlTW92ZSA9IHouZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghei5nZXN0dXJlLmltYWdlIHx8IHouZ2VzdHVyZS5pbWFnZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQuZ2VzdHVyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB6LnNjYWxlID0gZS5zY2FsZSAqIHouY3VycmVudFNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgei5zY2FsZSA9ICh6Lmdlc3R1cmUuc2NhbGVNb3ZlIC8gei5nZXN0dXJlLnNjYWxlU3RhcnQpICogei5jdXJyZW50U2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoei5zY2FsZSA+IHouZ2VzdHVyZS56b29tTWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgei5zY2FsZSA9IHouZ2VzdHVyZS56b29tTWF4IC0gMSArIE1hdGgucG93KCh6LnNjYWxlIC0gei5nZXN0dXJlLnpvb21NYXggKyAxKSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh6LnNjYWxlIDwgcy5wYXJhbXMuem9vbU1pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHouc2NhbGUgPSAgcy5wYXJhbXMuem9vbU1pbiArIDEgLSBNYXRoLnBvdygocy5wYXJhbXMuem9vbU1pbiAtIHouc2NhbGUgKyAxKSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgnICsgei5zY2FsZSArICcpJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uR2VzdHVyZUVuZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzLnN1cHBvcnQuZ2VzdHVyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghei5nZXN0dXJlLmltYWdlIHx8IHouZ2VzdHVyZS5pbWFnZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHouc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih6LnNjYWxlLCB6Lmdlc3R1cmUuem9vbU1heCksIHMucGFyYW1zLnpvb21NaW4pO1xyXG4gICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlLnRyYW5zaXRpb24ocy5wYXJhbXMuc3BlZWQpLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKCcgKyB6LnNjYWxlICsgJyknKTtcclxuICAgICAgICAgICAgICAgIHouY3VycmVudFNjYWxlID0gei5zY2FsZTtcclxuICAgICAgICAgICAgICAgIHouaXNTY2FsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoei5zY2FsZSA9PT0gMSkgei5nZXN0dXJlLnNsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeiA9IHMuem9vbTtcclxuICAgICAgICAgICAgICAgIGlmICghei5nZXN0dXJlLmltYWdlIHx8IHouZ2VzdHVyZS5pbWFnZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmlzVG91Y2hlZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuZGV2aWNlLm9zID09PSAnYW5kcm9pZCcpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNUb3VjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHouaW1hZ2UudG91Y2hlc1N0YXJ0LnggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLnRvdWNoZXNTdGFydC55ID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuaW1hZ2UgfHwgei5nZXN0dXJlLmltYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXouaW1hZ2UuaXNUb3VjaGVkIHx8ICF6Lmdlc3R1cmUuc2xpZGUpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghei5pbWFnZS5pc01vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgei5pbWFnZS53aWR0aCA9IHouZ2VzdHVyZS5pbWFnZVswXS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB6LmltYWdlLmhlaWdodCA9IHouZ2VzdHVyZS5pbWFnZVswXS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgei5pbWFnZS5zdGFydFggPSBzLmdldFRyYW5zbGF0ZSh6Lmdlc3R1cmUuaW1hZ2VXcmFwWzBdLCAneCcpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei5pbWFnZS5zdGFydFkgPSBzLmdldFRyYW5zbGF0ZSh6Lmdlc3R1cmUuaW1hZ2VXcmFwWzBdLCAneScpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLnNsaWRlV2lkdGggPSB6Lmdlc3R1cmUuc2xpZGVbMF0ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLnNsaWRlSGVpZ2h0ID0gei5nZXN0dXJlLnNsaWRlWzBdLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwLnRyYW5zaXRpb24oMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSB6LmltYWdlLnN0YXJ0WCA9IC16LmltYWdlLnN0YXJ0WDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHouaW1hZ2Uuc3RhcnRZID0gLXouaW1hZ2Uuc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHdlIG5lZWQgaW1hZ2UgZHJhZ1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlZFdpZHRoID0gei5pbWFnZS53aWR0aCAqIHouc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGVkSGVpZ2h0ID0gei5pbWFnZS5oZWlnaHQgKiB6LnNjYWxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHNjYWxlZFdpZHRoIDwgei5nZXN0dXJlLnNsaWRlV2lkdGggJiYgc2NhbGVkSGVpZ2h0IDwgei5nZXN0dXJlLnNsaWRlSGVpZ2h0KSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLm1pblggPSBNYXRoLm1pbigoei5nZXN0dXJlLnNsaWRlV2lkdGggLyAyIC0gc2NhbGVkV2lkdGggLyAyKSwgMCk7XHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLm1heFggPSAtei5pbWFnZS5taW5YO1xyXG4gICAgICAgICAgICAgICAgei5pbWFnZS5taW5ZID0gTWF0aC5taW4oKHouZ2VzdHVyZS5zbGlkZUhlaWdodCAvIDIgLSBzY2FsZWRIZWlnaHQgLyAyKSwgMCk7XHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLm1heFkgPSAtei5pbWFnZS5taW5ZO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgei5pbWFnZS50b3VjaGVzQ3VycmVudC54ID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghei5pbWFnZS5pc01vdmVkICYmICF6LmlzU2NhbGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChNYXRoLmZsb29yKHouaW1hZ2UubWluWCkgPT09IE1hdGguZmxvb3Ioei5pbWFnZS5zdGFydFgpICYmIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA8IHouaW1hZ2UudG91Y2hlc1N0YXJ0LngpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChNYXRoLmZsb29yKHouaW1hZ2UubWF4WCkgPT09IE1hdGguZmxvb3Ioei5pbWFnZS5zdGFydFgpICYmIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA+IHouaW1hZ2UudG91Y2hlc1N0YXJ0LngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LmltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFzLmlzSG9yaXpvbnRhbCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChNYXRoLmZsb29yKHouaW1hZ2UubWluWSkgPT09IE1hdGguZmxvb3Ioei5pbWFnZS5zdGFydFkpICYmIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA8IHouaW1hZ2UudG91Y2hlc1N0YXJ0LnkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChNYXRoLmZsb29yKHouaW1hZ2UubWF4WSkgPT09IE1hdGguZmxvb3Ioei5pbWFnZS5zdGFydFkpICYmIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA+IHouaW1hZ2UudG91Y2hlc1N0YXJ0LnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LmltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRYID0gei5pbWFnZS50b3VjaGVzQ3VycmVudC54IC0gei5pbWFnZS50b3VjaGVzU3RhcnQueCArIHouaW1hZ2Uuc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgei5pbWFnZS5jdXJyZW50WSA9IHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueSAtIHouaW1hZ2UudG91Y2hlc1N0YXJ0LnkgKyB6LmltYWdlLnN0YXJ0WTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRYIDwgei5pbWFnZS5taW5YKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgei5pbWFnZS5jdXJyZW50WCA9ICB6LmltYWdlLm1pblggKyAxIC0gTWF0aC5wb3coKHouaW1hZ2UubWluWCAtIHouaW1hZ2UuY3VycmVudFggKyAxKSwgMC44KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRYID4gei5pbWFnZS5tYXhYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgei5pbWFnZS5jdXJyZW50WCA9IHouaW1hZ2UubWF4WCAtIDEgKyBNYXRoLnBvdygoei5pbWFnZS5jdXJyZW50WCAtIHouaW1hZ2UubWF4WCArIDEpLCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHouaW1hZ2UuY3VycmVudFkgPCB6LmltYWdlLm1pblkpIHtcclxuICAgICAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRZID0gIHouaW1hZ2UubWluWSArIDEgLSBNYXRoLnBvdygoei5pbWFnZS5taW5ZIC0gei5pbWFnZS5jdXJyZW50WSArIDEpLCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHouaW1hZ2UuY3VycmVudFkgPiB6LmltYWdlLm1heFkpIHtcclxuICAgICAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRZID0gei5pbWFnZS5tYXhZIC0gMSArIE1hdGgucG93KCh6LmltYWdlLmN1cnJlbnRZIC0gei5pbWFnZS5tYXhZICsgMSksIDAuOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL1ZlbG9jaXR5XHJcbiAgICAgICAgICAgICAgICBpZiAoIXoudmVsb2NpdHkucHJldlBvc2l0aW9uWCkgei52ZWxvY2l0eS5wcmV2UG9zaXRpb25YID0gei5pbWFnZS50b3VjaGVzQ3VycmVudC54O1xyXG4gICAgICAgICAgICAgICAgaWYgKCF6LnZlbG9jaXR5LnByZXZQb3NpdGlvblkpIHoudmVsb2NpdHkucHJldlBvc2l0aW9uWSA9IHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcclxuICAgICAgICAgICAgICAgIGlmICghei52ZWxvY2l0eS5wcmV2VGltZSkgei52ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICB6LnZlbG9jaXR5LnggPSAoei5pbWFnZS50b3VjaGVzQ3VycmVudC54IC0gei52ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSAvIChEYXRlLm5vdygpIC0gei52ZWxvY2l0eS5wcmV2VGltZSkgLyAyO1xyXG4gICAgICAgICAgICAgICAgei52ZWxvY2l0eS55ID0gKHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueSAtIHoudmVsb2NpdHkucHJldlBvc2l0aW9uWSkgLyAoRGF0ZS5ub3coKSAtIHoudmVsb2NpdHkucHJldlRpbWUpIC8gMjtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh6LmltYWdlLnRvdWNoZXNDdXJyZW50LnggLSB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblgpIDwgMikgei52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblkpIDwgMikgei52ZWxvY2l0eS55ID0gMDtcclxuICAgICAgICAgICAgICAgIHoudmVsb2NpdHkucHJldlBvc2l0aW9uWCA9IHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueDtcclxuICAgICAgICAgICAgICAgIHoudmVsb2NpdHkucHJldlBvc2l0aW9uWSA9IHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcclxuICAgICAgICAgICAgICAgIHoudmVsb2NpdHkucHJldlRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcC50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyB6LmltYWdlLmN1cnJlbnRYICsgJ3B4LCAnICsgei5pbWFnZS5jdXJyZW50WSArICdweCwwKScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHogPSBzLnpvb207XHJcbiAgICAgICAgICAgICAgICBpZiAoIXouZ2VzdHVyZS5pbWFnZSB8fCB6Lmdlc3R1cmUuaW1hZ2UubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIXouaW1hZ2UuaXNUb3VjaGVkIHx8ICF6LmltYWdlLmlzTW92ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB6LmltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNNb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLmlzTW92ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bUR1cmF0aW9uWCA9IDMwMDtcclxuICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bUR1cmF0aW9uWSA9IDMwMDtcclxuICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlWCA9IHoudmVsb2NpdHkueCAqIG1vbWVudHVtRHVyYXRpb25YO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uWCA9IHouaW1hZ2UuY3VycmVudFggKyBtb21lbnR1bURpc3RhbmNlWDtcclxuICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlWSA9IHoudmVsb2NpdHkueSAqIG1vbWVudHVtRHVyYXRpb25ZO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uWSA9IHouaW1hZ2UuY3VycmVudFkgKyBtb21lbnR1bURpc3RhbmNlWTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vRml4IGR1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoei52ZWxvY2l0eS54ICE9PSAwKSBtb21lbnR1bUR1cmF0aW9uWCA9IE1hdGguYWJzKChuZXdQb3NpdGlvblggLSB6LmltYWdlLmN1cnJlbnRYKSAvIHoudmVsb2NpdHkueCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoei52ZWxvY2l0eS55ICE9PSAwKSBtb21lbnR1bUR1cmF0aW9uWSA9IE1hdGguYWJzKChuZXdQb3NpdGlvblkgLSB6LmltYWdlLmN1cnJlbnRZKSAvIHoudmVsb2NpdHkueSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGgubWF4KG1vbWVudHVtRHVyYXRpb25YLCBtb21lbnR1bUR1cmF0aW9uWSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRYID0gbmV3UG9zaXRpb25YO1xyXG4gICAgICAgICAgICAgICAgei5pbWFnZS5jdXJyZW50WSA9IG5ld1Bvc2l0aW9uWTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBpZiB3ZSBuZWVkIGltYWdlIGRyYWdcclxuICAgICAgICAgICAgICAgIHZhciBzY2FsZWRXaWR0aCA9IHouaW1hZ2Uud2lkdGggKiB6LnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlZEhlaWdodCA9IHouaW1hZ2UuaGVpZ2h0ICogei5zY2FsZTtcclxuICAgICAgICAgICAgICAgIHouaW1hZ2UubWluWCA9IE1hdGgubWluKCh6Lmdlc3R1cmUuc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIpLCAwKTtcclxuICAgICAgICAgICAgICAgIHouaW1hZ2UubWF4WCA9IC16LmltYWdlLm1pblg7XHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLm1pblkgPSBNYXRoLm1pbigoei5nZXN0dXJlLnNsaWRlSGVpZ2h0IC8gMiAtIHNjYWxlZEhlaWdodCAvIDIpLCAwKTtcclxuICAgICAgICAgICAgICAgIHouaW1hZ2UubWF4WSA9IC16LmltYWdlLm1pblk7XHJcbiAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRYID0gTWF0aC5tYXgoTWF0aC5taW4oei5pbWFnZS5jdXJyZW50WCwgei5pbWFnZS5tYXhYKSwgei5pbWFnZS5taW5YKTtcclxuICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFkgPSBNYXRoLm1heChNYXRoLm1pbih6LmltYWdlLmN1cnJlbnRZLCB6LmltYWdlLm1heFkpLCB6LmltYWdlLm1pblkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcC50cmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHouaW1hZ2UuY3VycmVudFggKyAncHgsICcgKyB6LmltYWdlLmN1cnJlbnRZICsgJ3B4LDApJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHouZ2VzdHVyZS5zbGlkZSAmJiBzLnByZXZpb3VzSW5kZXggIT09IHMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2UudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSknKTtcclxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLnNsaWRlID0gei5nZXN0dXJlLmltYWdlID0gei5nZXN0dXJlLmltYWdlV3JhcCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB6LnNjYWxlID0gei5jdXJyZW50U2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgWm9vbVxyXG4gICAgICAgICAgICB0b2dnbGVab29tOiBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHogPSBzLnpvb207XHJcbiAgICAgICAgICAgICAgICBpZiAoIXouZ2VzdHVyZS5zbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5zbGlkZSA9IHMuY2xpY2tlZFNsaWRlID8gJChzLmNsaWNrZWRTbGlkZSkgOiBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2UgPSB6Lmdlc3R1cmUuc2xpZGUuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZVdyYXAgPSB6Lmdlc3R1cmUuaW1hZ2UucGFyZW50KCcuJyArIHMucGFyYW1zLnpvb21Db250YWluZXJDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXouZ2VzdHVyZS5pbWFnZSB8fCB6Lmdlc3R1cmUuaW1hZ2UubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hYLCB0b3VjaFksIG9mZnNldFgsIG9mZnNldFksIGRpZmZYLCBkaWZmWSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNjYWxlZFdpZHRoLCBzY2FsZWRIZWlnaHQsIHRyYW5zbGF0ZU1pblgsIHRyYW5zbGF0ZU1pblksIHRyYW5zbGF0ZU1heFgsIHRyYW5zbGF0ZU1heFksIHNsaWRlV2lkdGgsIHNsaWRlSGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB6LmltYWdlLnRvdWNoZXNTdGFydC54ID09PSAndW5kZWZpbmVkJyAmJiBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hYID0gZS50eXBlID09PSAndG91Y2hlbmQnID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hZID0gZS50eXBlID09PSAndG91Y2hlbmQnID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaFggPSB6LmltYWdlLnRvdWNoZXNTdGFydC54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoWSA9IHouaW1hZ2UudG91Y2hlc1N0YXJ0Lnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoei5zY2FsZSAmJiB6LnNjYWxlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gWm9vbSBPdXRcclxuICAgICAgICAgICAgICAgICAgICB6LnNjYWxlID0gei5jdXJyZW50U2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZVdyYXAudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5zbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFpvb20gSW5cclxuICAgICAgICAgICAgICAgICAgICB6LnNjYWxlID0gei5jdXJyZW50U2NhbGUgPSB6Lmdlc3R1cmUuaW1hZ2VXcmFwLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBzLnBhcmFtcy56b29tTWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlV2lkdGggPSB6Lmdlc3R1cmUuc2xpZGVbMF0ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlSGVpZ2h0ID0gei5nZXN0dXJlLnNsaWRlWzBdLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WCA9IHouZ2VzdHVyZS5zbGlkZS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZID0gei5nZXN0dXJlLnNsaWRlLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZlggPSBvZmZzZXRYICsgc2xpZGVXaWR0aC8yIC0gdG91Y2hYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmWSA9IG9mZnNldFkgKyBzbGlkZUhlaWdodC8yIC0gdG91Y2hZO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVdpZHRoID0gei5nZXN0dXJlLmltYWdlWzBdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhlaWdodCA9IHouZ2VzdHVyZS5pbWFnZVswXS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlZFdpZHRoID0gaW1hZ2VXaWR0aCAqIHouc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlZEhlaWdodCA9IGltYWdlSGVpZ2h0ICogei5zY2FsZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlTWluWCA9IE1hdGgubWluKChzbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVNaW5ZID0gTWF0aC5taW4oKHNsaWRlSGVpZ2h0IC8gMiAtIHNjYWxlZEhlaWdodCAvIDIpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlTWF4WCA9IC10cmFuc2xhdGVNaW5YO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVNYXhZID0gLXRyYW5zbGF0ZU1pblk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSBkaWZmWCAqIHouc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSBkaWZmWSAqIHouc2NhbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVYIDwgdHJhbnNsYXRlTWluWCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9ICB0cmFuc2xhdGVNaW5YO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVYID4gdHJhbnNsYXRlTWF4WCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZU1heFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZVkgPCB0cmFuc2xhdGVNaW5ZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gIHRyYW5zbGF0ZU1pblk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVNYXhZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWF4WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCAnICsgdHJhbnNsYXRlWSArICdweCwwKScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZS50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoJyArIHouc2NhbGUgKyAnKScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBBdHRhY2gvRGV0YWNoIEV2ZW50c1xyXG4gICAgICAgICAgICBhdHRhY2hFdmVudHM6IGZ1bmN0aW9uIChkZXRhY2gpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBkZXRhY2ggPyAnb2ZmJyA6ICdvbic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuem9vbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLnNsaWRlcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gcy50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIHMuc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcy5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZX0gOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY2FsZSBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQuZ2VzdHVyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNbYWN0aW9uXSgnZ2VzdHVyZXN0YXJ0Jywgcy56b29tLm9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1thY3Rpb25dKCdnZXN0dXJlY2hhbmdlJywgcy56b29tLm9uR2VzdHVyZUNoYW5nZSwgcGFzc2l2ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNbYWN0aW9uXSgnZ2VzdHVyZWVuZCcsIHMuem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1thY3Rpb25dKHMudG91Y2hFdmVudHMuc3RhcnQsIHMuem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNbYWN0aW9uXShzLnRvdWNoRXZlbnRzLm1vdmUsIHMuem9vbS5vbkdlc3R1cmVDaGFuZ2UsIHBhc3NpdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzW2FjdGlvbl0ocy50b3VjaEV2ZW50cy5lbmQsIHMuem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzW2FjdGlvbl0oJ3RvdWNoU3RhcnQnLCBzLnpvb20ub25Ub3VjaFN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgc2xpZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChzbGlkZSkuZmluZCgnLicgKyBzLnBhcmFtcy56b29tQ29udGFpbmVyQ2xhc3MpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2xpZGUpW2FjdGlvbl0ocy50b3VjaEV2ZW50cy5tb3ZlLCBzLnpvb20ub25Ub3VjaE1vdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc1thY3Rpb25dKCd0b3VjaEVuZCcsIHMuem9vbS5vblRvdWNoRW5kKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY2FsZSBPdXRcclxuICAgICAgICAgICAgICAgICAgICBzW2FjdGlvbl0oJ3RyYW5zaXRpb25FbmQnLCBzLnpvb20ub25UcmFuc2l0aW9uRW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuem9vbVRvZ2dsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLm9uKCdkb3VibGVUYXAnLCBzLnpvb20udG9nZ2xlWm9vbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzLnpvb20uYXR0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHMuem9vbS5hdHRhY2hFdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIFBsdWdpbnMgQVBJLiBDb2xsZWN0IGFsbCBhbmQgaW5pdCBhbGwgcGx1Z2luc1xyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICBzLl9wbHVnaW5zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgcGx1Z2luIGluIHMucGx1Z2lucykge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHMucGx1Z2luc1twbHVnaW5dKHMsIHMucGFyYW1zW3BsdWdpbl0pO1xyXG4gICAgICAgICAgICBpZiAocCkgcy5fcGx1Z2lucy5wdXNoKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBNZXRob2QgdG8gY2FsbCBhbGwgcGx1Z2lucyBldmVudC9tZXRob2RcclxuICAgICAgICBzLmNhbGxQbHVnaW5zID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuX3BsdWdpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgaW4gcy5fcGx1Z2luc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuX3BsdWdpbnNbaV1bZXZlbnROYW1lXShhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0sIGFyZ3VtZW50c1s1XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIEV2ZW50cy9DYWxsYmFja3MvUGx1Z2lucyBFbWl0dGVyXHJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50TmFtZSAoZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUuaW5kZXhPZignb24nKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZVswXSAhPT0gZXZlbnROYW1lWzBdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSAnb24nICsgZXZlbnROYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBldmVudE5hbWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnROYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzLmVtaXR0ZXJFdmVudExpc3RlbmVycyA9IHtcclxuICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMuZW1pdCA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlciBjYWxsYmFja3NcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHMucGFyYW1zW2V2ZW50TmFtZV0oYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdLCBhcmd1bWVudHNbNV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGV2ZW50c1xyXG4gICAgICAgICAgICBpZiAocy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdW2ldKGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSwgYXJndW1lbnRzWzVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHBsdWdpbnNcclxuICAgICAgICAgICAgaWYgKHMuY2FsbFBsdWdpbnMpIHMuY2FsbFBsdWdpbnMoZXZlbnROYW1lLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0sIGFyZ3VtZW50c1s1XSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLm9uID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgICAgICBldmVudE5hbWUgPSBub3JtYWxpemVFdmVudE5hbWUoZXZlbnROYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdKSBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgICAgIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzLm9mZiA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9IG5vcm1hbGl6ZUV2ZW50TmFtZShldmVudE5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGhhbmRsZXJzIGZvciBzdWNoIGV2ZW50XHJcbiAgICAgICAgICAgICAgICBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1baV0gPT09IGhhbmRsZXIpIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcy5vbmNlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgICAgICBldmVudE5hbWUgPSBub3JtYWxpemVFdmVudE5hbWUoZXZlbnROYW1lKTtcclxuICAgICAgICAgICAgdmFyIF9oYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSk7XHJcbiAgICAgICAgICAgICAgICBzLm9mZihldmVudE5hbWUsIF9oYW5kbGVyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcy5vbihldmVudE5hbWUsIF9oYW5kbGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQWNjZXNzaWJpbGl0eSB0b29sc1xyXG4gICAgICAgIHMuYTExeSA9IHtcclxuICAgICAgICAgICAgbWFrZUZvY3VzYWJsZTogZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ3RhYkluZGV4JywgJzAnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkZFJvbGU6IGZ1bmN0aW9uICgkZWwsIHJvbGUpIHtcclxuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdyb2xlJywgcm9sZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBhZGRMYWJlbDogZnVuY3Rpb24gKCRlbCwgbGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGVuYWJsZTogZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBvbkVudGVyS2V5OiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlICE9PSAxMykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyhzLnBhcmFtcy5uZXh0QnV0dG9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMub25DbGlja05leHQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5ub3RpZnkocy5wYXJhbXMubGFzdFNsaWRlTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkubm90aWZ5KHMucGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyhzLnBhcmFtcy5wcmV2QnV0dG9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMub25DbGlja1ByZXYoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzQmVnaW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5ub3RpZnkocy5wYXJhbXMuZmlyc3RTbGlkZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm5vdGlmeShzLnBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKCcuJyArIHMucGFyYW1zLmJ1bGxldENsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KVswXS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsaXZlUmVnaW9uOiAkKCc8c3BhbiBjbGFzcz1cIicgKyBzLnBhcmFtcy5ub3RpZmljYXRpb25DbGFzcyArICdcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIj48L3NwYW4+JyksXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIG5vdGlmeTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHZhciBub3RpZmljYXRpb24gPSBzLmExMXkubGl2ZVJlZ2lvbjtcclxuICAgICAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24ubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uaHRtbChtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0dXAgYWNjZXNzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm1ha2VGb2N1c2FibGUocy5uZXh0QnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkUm9sZShzLm5leHRCdXR0b24sICdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkTGFiZWwocy5uZXh0QnV0dG9uLCBzLnBhcmFtcy5uZXh0U2xpZGVNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuYTExeS5tYWtlRm9jdXNhYmxlKHMucHJldkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZFJvbGUocy5wcmV2QnV0dG9uLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZExhYmVsKHMucHJldkJ1dHRvbiwgcy5wYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkKHMuY29udGFpbmVyKS5hcHBlbmQocy5hMTF5LmxpdmVSZWdpb24pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0UGFnaW5hdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb24gJiYgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSAmJiBzLmJ1bGxldHMgJiYgcy5idWxsZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuYnVsbGV0cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1bGxldCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5tYWtlRm9jdXNhYmxlKGJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5hZGRSb2xlKGJ1bGxldCwgJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkTGFiZWwoYnVsbGV0LCBzLnBhcmFtcy5wYWdpbmF0aW9uQnVsbGV0TWVzc2FnZS5yZXBsYWNlKC97e2luZGV4fX0vLCBidWxsZXQuaW5kZXgoKSArIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuYTExeS5saXZlUmVnaW9uICYmIHMuYTExeS5saXZlUmVnaW9uLmxlbmd0aCA+IDApIHMuYTExeS5saXZlUmVnaW9uLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBJbml0L0Rlc3Ryb3lcclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkgcy5jcmVhdGVMb29wKCk7XHJcbiAgICAgICAgICAgIHMudXBkYXRlQ29udGFpbmVyU2l6ZSgpO1xyXG4gICAgICAgICAgICBzLnVwZGF0ZVNsaWRlc1NpemUoKTtcclxuICAgICAgICAgICAgcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXIgJiYgcy5zY3JvbGxiYXIpIHtcclxuICAgICAgICAgICAgICAgIHMuc2Nyb2xsYmFyLnNldCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckRyYWdnYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuc2Nyb2xsYmFyLmVuYWJsZURyYWdnYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScgJiYgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMubG9vcCkgcy51cGRhdGVQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICAgICAgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0uc2V0VHJhbnNsYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLnBhcmFtcy5pbml0aWFsU2xpZGUgKyBzLmxvb3BlZFNsaWRlcywgMCwgcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLnBhcmFtcy5pbml0aWFsU2xpZGUsIDAsIHMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuaW5pdGlhbFNsaWRlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYWxsYXggJiYgcy5wYXJhbXMucGFyYWxsYXgpIHMucGFyYWxsYXguc2V0VHJhbnNsYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGF6eSAmJiBzLnBhcmFtcy5sYXp5TG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy5hdHRhY2hFdmVudHMoKTtcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm9ic2VydmVyICYmIHMuc3VwcG9ydC5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgcy5pbml0T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZWxvYWRJbWFnZXMgJiYgIXMucGFyYW1zLmxhenlMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzLnByZWxvYWRJbWFnZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuem9vbSAmJiBzLnpvb20pIHtcclxuICAgICAgICAgICAgICAgIHMuem9vbS5pbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBzLnN0YXJ0QXV0b3BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMua2V5Ym9hcmRDb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5lbmFibGVLZXlib2FyZENvbnRyb2wpIHMuZW5hYmxlS2V5Ym9hcmRDb250cm9sKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxDb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCkgcy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIERlcHJlY2F0ZWQgaGFzaG5hdlJlcGxhY2VTdGF0ZSBjaGFuZ2VkIHRvIHJlcGxhY2VTdGF0ZSBmb3IgdXNlIGluIGhhc2huYXYgYW5kIGhpc3RvcnlcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXZSZXBsYWNlU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHMucGFyYW1zLnJlcGxhY2VTdGF0ZSA9IHMucGFyYW1zLmhhc2huYXZSZXBsYWNlU3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhpc3RvcnkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmhpc3RvcnkpIHMuaGlzdG9yeS5pbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmhhc2huYXYpIHMuaGFzaG5hdi5pbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuaW5pdCgpO1xyXG4gICAgICAgICAgICBzLmVtaXQoJ29uSW5pdCcsIHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYW51cCBkeW5hbWljIHN0eWxlc1xyXG4gICAgICAgIHMuY2xlYW51cFN0eWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gQ29udGFpbmVyXHJcbiAgICAgICAgICAgIHMuY29udGFpbmVyLnJlbW92ZUNsYXNzKHMuY2xhc3NOYW1lcy5qb2luKCcgJykpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFdyYXBwZXJcclxuICAgICAgICAgICAgcy53cmFwcGVyLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNsaWRlc1xyXG4gICAgICAgICAgICBpZiAocy5zbGlkZXMgJiYgcy5zbGlkZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzLnNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhbXHJcbiAgICAgICAgICAgICAgICAgICAgICBzLnBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlUHJldkNsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcgJykpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItY29sdW1uJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItcm93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gUGFnaW5hdGlvbi9CdWxsZXRzXHJcbiAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLnJlbW92ZUNsYXNzKHMucGFyYW1zLnBhZ2luYXRpb25IaWRkZW5DbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMuYnVsbGV0cyAmJiBzLmJ1bGxldHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzLmJ1bGxldHMucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEJ1dHRvbnNcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZCdXR0b24pICQocy5wYXJhbXMucHJldkJ1dHRvbikucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uKSAkKHMucGFyYW1zLm5leHRCdXR0b24pLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1dHRvbkRpc2FibGVkQ2xhc3MpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTY3JvbGxiYXJcclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuc2Nyb2xsYmFyLnRyYWNrICYmIHMuc2Nyb2xsYmFyLnRyYWNrLmxlbmd0aCkgcy5zY3JvbGxiYXIudHJhY2sucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzLnNjcm9sbGJhci5kcmFnICYmIHMuc2Nyb2xsYmFyLmRyYWcubGVuZ3RoKSBzLnNjcm9sbGJhci5kcmFnLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERlc3Ryb3lcclxuICAgICAgICBzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZGVsZXRlSW5zdGFuY2UsIGNsZWFudXBTdHlsZXMpIHtcclxuICAgICAgICAgICAgLy8gRGV0YWNoIGV2ZWJ0c1xyXG4gICAgICAgICAgICBzLmRldGFjaEV2ZW50cygpO1xyXG4gICAgICAgICAgICAvLyBTdG9wIGF1dG9wbGF5XHJcbiAgICAgICAgICAgIHMuc3RvcEF1dG9wbGF5KCk7XHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXIgJiYgcy5zY3JvbGxiYXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJEcmFnZ2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRGVzdHJveSBsb29wXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQ2xlYW51cCBzdHlsZXNcclxuICAgICAgICAgICAgaWYgKGNsZWFudXBTdHlsZXMpIHtcclxuICAgICAgICAgICAgICAgIHMuY2xlYW51cFN0eWxlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIERpc2Nvbm5lY3Qgb2JzZXJ2ZXJcclxuICAgICAgICAgICAgcy5kaXNjb25uZWN0T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIERlc3Ryb3kgem9vbVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuem9vbSAmJiBzLnpvb20pIHtcclxuICAgICAgICAgICAgICAgIHMuem9vbS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBrZXlib2FyZC9tb3VzZXdoZWVsXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5rZXlib2FyZENvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmRpc2FibGVLZXlib2FyZENvbnRyb2wpIHMuZGlzYWJsZUtleWJvYXJkQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuZGlzYWJsZU1vdXNld2hlZWxDb250cm9sKSBzLmRpc2FibGVNb3VzZXdoZWVsQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgYTExeVxyXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMuYTExeS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIERlbGV0ZSBoaXN0b3J5IHBvcHN0YXRlXHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5oaXN0b3J5ICYmICFzLnBhcmFtcy5yZXBsYWNlU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHMuaGlzdG9yeS5zZXRIaXN0b3J5UG9wU3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5oYXNobmF2ICYmIHMuaGFzaG5hdikgIHtcclxuICAgICAgICAgICAgICAgIHMuaGFzaG5hdi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRGVzdHJveSBjYWxsYmFja1xyXG4gICAgICAgICAgICBzLmVtaXQoJ29uRGVzdHJveScpO1xyXG4gICAgICAgICAgICAvLyBEZWxldGUgaW5zdGFuY2VcclxuICAgICAgICAgICAgaWYgKGRlbGV0ZUluc3RhbmNlICE9PSBmYWxzZSkgcyA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBzLmluaXQoKTtcclxuICAgICAgICBcclxuXHJcbiAgICBcclxuICAgICAgICAvLyBSZXR1cm4gc3dpcGVyIGluc3RhbmNlXHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIFByb3RvdHlwZVxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBTd2lwZXIucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGlzU2FmYXJpOiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDApO1xyXG4gICAgICAgIH0pKCksXHJcbiAgICAgICAgaXNVaVdlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcbiAgICAgICAgaXNBcnJheTogZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIEJyb3dzZXJcclxuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgICBicm93c2VyOiB7XHJcbiAgICAgICAgICAgIGllOiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkIHx8IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcclxuICAgICAgICAgICAgaWVUb3VjaDogKHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxKSB8fCAod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSksXHJcbiAgICAgICAgICAgIGx0ZUlFOTogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRlbXBvcmFyeSBESVZcclxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIC8vIGFkZCBjb250ZW50IHRvIHRtcCBESVYgd2hpY2ggaXMgd3JhcHBlZCBpbnRvIHRoZSBJRSBIVE1MIGNvbmRpdGlvbmFsIHN0YXRlbWVudFxyXG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9ICc8IS0tW2lmIGx0ZSBJRSA5XT48aT48L2k+PCFbZW5kaWZdLS0+JztcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0cnVlIC8gZmFsc2UgdmFsdWUgYmFzZWQgb24gd2hhdCB3aWxsIGJyb3dzZXIgcmVuZGVyXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpJykubGVuZ3RoID09PSAxO1xyXG4gICAgICAgICAgICB9KSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgRGV2aWNlc1xyXG4gICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICAgIGRldmljZTogKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgICAgIHZhciBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pO1xyXG4gICAgICAgICAgICB2YXIgaXBhZCA9IHVhLm1hdGNoKC8oaVBhZCkuKk9TXFxzKFtcXGRfXSspLyk7XHJcbiAgICAgICAgICAgIHZhciBpcG9kID0gdWEubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKTtcclxuICAgICAgICAgICAgdmFyIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW9zOiBpcGFkIHx8IGlwaG9uZSB8fCBpcG9kLFxyXG4gICAgICAgICAgICAgICAgYW5kcm9pZDogYW5kcm9pZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pKCksXHJcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIEZlYXR1cmUgRGV0ZWN0aW9uXHJcbiAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgc3VwcG9ydDoge1xyXG4gICAgICAgICAgICB0b3VjaCA6ICh3aW5kb3cuTW9kZXJuaXpyICYmIE1vZGVybml6ci50b3VjaCA9PT0gdHJ1ZSkgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhISgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpO1xyXG4gICAgICAgICAgICB9KSgpLFxyXG4gICAgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybXMzZCA6ICh3aW5kb3cuTW9kZXJuaXpyICYmIE1vZGVybml6ci5jc3N0cmFuc2Zvcm1zM2QgPT09IHRydWUpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCd3ZWJraXRQZXJzcGVjdGl2ZScgaW4gZGl2IHx8ICdNb3pQZXJzcGVjdGl2ZScgaW4gZGl2IHx8ICdPUGVyc3BlY3RpdmUnIGluIGRpdiB8fCAnTXNQZXJzcGVjdGl2ZScgaW4gZGl2IHx8ICdwZXJzcGVjdGl2ZScgaW4gZGl2KTtcclxuICAgICAgICAgICAgfSkoKSxcclxuICAgIFxyXG4gICAgICAgICAgICBmbGV4Ym94OiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlcyA9ICgnYWxpZ25JdGVtcyB3ZWJraXRBbGlnbkl0ZW1zIHdlYmtpdEJveEFsaWduIG1zRmxleEFsaWduIG1vekJveEFsaWduIHdlYmtpdEZsZXhEaXJlY3Rpb24gbXNGbGV4RGlyZWN0aW9uIG1vekJveERpcmVjdGlvbiBtb3pCb3hPcmllbnQgd2Via2l0Qm94RGlyZWN0aW9uIHdlYmtpdEJveE9yaWVudCcpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZXNbaV0gaW4gZGl2KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkoKSxcclxuICAgIFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyB8fCAnV2Via2l0TXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KTtcclxuICAgICAgICAgICAgfSkoKSxcclxuICAgIFxyXG4gICAgICAgICAgICBwYXNzaXZlTGlzdGVuZXI6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVMaXN0ZW5lcicsIG51bGwsIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XHJcbiAgICAgICAgICAgIH0pKCksXHJcbiAgICBcclxuICAgICAgICAgICAgZ2VzdHVyZXM6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29uZ2VzdHVyZXN0YXJ0JyBpbiB3aW5kb3c7XHJcbiAgICAgICAgICAgIH0pKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBQbHVnaW5zXHJcbiAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICAgcGx1Z2luczoge31cclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgRG9tNyBMaWJyYXJ5XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgdmFyIERvbTcgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBEb203ID0gZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzLCBpID0gMDtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFycmF5LWxpa2Ugb2JqZWN0XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIF90aGlzW2ldID0gYXJyW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmxlbmd0aCA9IGFyci5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vIFJldHVybiBjb2xsZWN0aW9uIHdpdGggbWV0aG9kc1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciAkID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBbXSwgaSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvciAmJiAhY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0cmluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxzLCB0ZW1wUGFyZW50LCBodG1sID0gc2VsZWN0b3IudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzwnKSA+PSAwICYmIGh0bWwuaW5kZXhPZignPicpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzxsaScpID09PSAwKSB0b0NyZWF0ZSA9ICd1bCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0cicpID09PSAwKSB0b0NyZWF0ZSA9ICd0Ym9keSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0ZCcpID09PSAwIHx8IGh0bWwuaW5kZXhPZignPHRoJykgPT09IDApIHRvQ3JlYXRlID0gJ3RyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRib2R5JykgPT09IDApIHRvQ3JlYXRlID0gJ3RhYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPG9wdGlvbicpID09PSAwKSB0b0NyZWF0ZSA9ICdzZWxlY3QnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0b0NyZWF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXJlbnQuaW5uZXJIVE1MID0gc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0ZW1wUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHRlbXBQYXJlbnQuY2hpbGROb2Rlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGV4dCAmJiBzZWxlY3RvclswXSA9PT0gJyMnICYmICFzZWxlY3Rvci5tYXRjaCgvWyAuPD46fl0vKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHVyZSBJRCBzZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnNwbGl0KCcjJylbMV0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyIHNlbGVjdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzID0gKGNvbnRleHQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbHNbaV0pIGFyci5wdXNoKGVsc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBOb2RlL2VsZW1lbnRcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yID09PSB3aW5kb3cgfHwgc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9BcnJheSBvZiBlbGVtZW50cyBvciBpbnN0YW5jZSBvZiBEb21cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yLmxlbmd0aCA+IDAgJiYgc2VsZWN0b3JbMF0ubm9kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VsZWN0b3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc2VsZWN0b3JbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERvbTcoYXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIERvbTcucHJvdG90eXBlID0ge1xyXG4gICAgICAgICAgICAvLyBDbGFzc2VzIGFuZCBhdHRyaXV0ZXNcclxuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbal0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpc1swXSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpc1swXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tqXS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhdHRyOiBmdW5jdGlvbiAoYXR0cnMsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXR0cnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGF0dHJcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHRoaXNbMF0uZ2V0QXR0cmlidXRlKGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgYXR0cnNcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5zZXRBdHRyaWJ1dGUoYXR0cnMsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldW2F0dHJOYW1lXSA9IGF0dHJzW2F0dHJOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cnNbYXR0ck5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0ucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhS2V5ID0gdGhpc1swXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5KSByZXR1cm4gZGF0YUtleTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpc1swXS5kb203RWxlbWVudERhdGFTdG9yYWdlICYmIChrZXkgaW4gdGhpc1swXS5kb203RWxlbWVudERhdGFTdG9yYWdlKSkgcmV0dXJuIHRoaXNbMF0uZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBUcmFuc2Zvcm1zXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybSA6IGZ1bmN0aW9uICh0cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFN0eWxlID0gdGhpc1tpXS5zdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICBlbFN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGVsU3R5bGUuTXNUcmFuc2Zvcm0gPSBlbFN0eWxlLm1zVHJhbnNmb3JtID0gZWxTdHlsZS5Nb3pUcmFuc2Zvcm0gPSBlbFN0eWxlLk9UcmFuc2Zvcm0gPSBlbFN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk1zVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5tc1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuTW96VHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5PVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL0V2ZW50c1xyXG4gICAgICAgICAgICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVMaXZlRXZlbnQoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuY2FsbCh0YXJnZXQsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50cyA9ICQodGFyZ2V0KS5wYXJlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcGFyZW50cy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQocGFyZW50c1trXSkuaXModGFyZ2V0U2VsZWN0b3IpKSBsaXN0ZW5lci5jYWxsKHBhcmVudHNba10sIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50cyA9IGV2ZW50TmFtZS5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGksIGo7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicgfHwgdGFyZ2V0U2VsZWN0b3IgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzdWFsIGV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBhcmd1bWVudHNbMl0gfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tqXSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0xpdmUgZXZlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tpXS5kb203TGl2ZUxpc3RlbmVycykgdGhpc1tpXS5kb203TGl2ZUxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5kb203TGl2ZUxpc3RlbmVycy5wdXNoKHtsaXN0ZW5lcjogbGlzdGVuZXIsIGxpdmVMaXN0ZW5lcjogaGFuZGxlTGl2ZUV2ZW50fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzW2pdLCBoYW5kbGVMaXZlRXZlbnQsIGNhcHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2ZmOiBmdW5jdGlvbiAoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSBldmVudE5hbWUuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicgfHwgdGFyZ2V0U2VsZWN0b3IgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc3VhbCBldmVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlID0gYXJndW1lbnRzWzJdIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tqXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGl2ZSBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbal0uZG9tN0xpdmVMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXNbal0uZG9tN0xpdmVMaXN0ZW5lcnMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbal0uZG9tN0xpdmVMaXN0ZW5lcnNba10ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCB0aGlzW2pdLmRvbTdMaXZlTGlzdGVuZXJzW2tdLmxpdmVMaXN0ZW5lciwgY2FwdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25jZTogZnVuY3Rpb24gKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG9tID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBhcmd1bWVudHNbMl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcm94eShlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9tLm9mZihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBwcm94eSwgY2FwdHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb20ub24oZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgcHJveHksIGNhcHR1cmUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBldmVudERhdGEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWw6IGV2ZW50RGF0YSwgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldnQuZGV0YWlsID0gZXZlbnREYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCcsICdvVHJhbnNpdGlvbkVuZCcsICdNU1RyYW5zaXRpb25FbmQnLCAnbXNUcmFuc2l0aW9uRW5kJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgaSwgaiwgZG9tID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLm9mZihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb20ub24oZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBTaXppbmcvU3R5bGVzXHJcbiAgICAgICAgICAgIHdpZHRoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc1swXSA9PT0gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnd2lkdGgnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG91dGVyV2lkdGg6IGZ1bmN0aW9uIChpbmNsdWRlTWFyZ2lucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlTWFyZ2lucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGggKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tbGVmdCcpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc1swXSA9PT0gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ2hlaWdodCcpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3V0ZXJIZWlnaHQ6IGZ1bmN0aW9uIChpbmNsdWRlTWFyZ2lucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlTWFyZ2lucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0ICsgcGFyc2VGbG9hdCh0aGlzLmNzcygnbWFyZ2luLXRvcCcpKSArIHBhcnNlRmxvYXQodGhpcy5jc3MoJ21hcmdpbi1ib3R0b20nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsaWVudFRvcCAgPSBlbC5jbGllbnRUb3AgIHx8IGJvZHkuY2xpZW50VG9wICB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGllbnRMZWZ0ID0gZWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wICA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBlbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZWwuc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGJveC50b3AgICsgc2Nyb2xsVG9wICAtIGNsaWVudFRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3NzOiBmdW5jdGlvbiAocHJvcHMsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5zdHlsZVtwcm9wXSA9IHByb3BzW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnN0eWxlW3Byb3BzXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vRG9tIG1hbmlwdWxhdGlvblxyXG4gICAgICAgICAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc1tpXSwgaSwgdGhpc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaHRtbDogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXSA/IHRoaXNbMF0uaW5uZXJIVE1MIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0udGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzWzBdKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcGFyZVdpdGgsIGk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudCkgcmV0dXJuIHNlbGVjdG9yID09PSBkb2N1bWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgPT09IHdpbmRvdykgcmV0dXJuIHNlbGVjdG9yID09PSB3aW5kb3c7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwubWF0Y2hlcykgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZWwubW96TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwubW96TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbC5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IHRoaXNbMF0pIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHJldHVybiB0aGlzWzBdID09PSBkb2N1bWVudDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yID09PSB3aW5kb3cpIHJldHVybiB0aGlzWzBdID09PSB3aW5kb3c7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVXaXRoID0gc2VsZWN0b3Iubm9kZVR5cGUgPyBbc2VsZWN0b3JdIDogc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSB0aGlzWzBdKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRleDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGNoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVxOiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHZhciByZXR1cm5JbmRleDtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IGxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybkluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVybkluZGV4IDwgMCkgcmV0dXJuIG5ldyBEb203KFtdKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbdGhpc1tyZXR1cm5JbmRleF1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1tpbmRleF1dKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXBwZW5kOiBmdW5jdGlvbiAobmV3Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGVtcERpdi5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKHRlbXBEaXYuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZFtqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmVwZW5kOiBmdW5jdGlvbiAobmV3Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSB0ZW1wRGl2LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzW2ldLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG5ld0NoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGRbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJlZm9yZSA9ICQoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlZm9yZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGJlZm9yZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJlZm9yZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmVmb3JlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGJlZm9yZVtqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc2VydEFmdGVyOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZnRlciA9ICQoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlclswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBhZnRlclswXS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFmdGVyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGFmdGVyW2pdLm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKSByZXR1cm4gbmV3IERvbTcoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5leHRBbGw6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRFbHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm4gbmV3IERvbTcoW10pO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKG5leHQpLmlzKHNlbGVjdG9yKSkgbmV4dEVscy5wdXNoKG5leHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIG5leHRFbHMucHVzaChuZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBlbCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcobmV4dEVscyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZXY6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmICQodGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZXZBbGw6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZFbHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm4gbmV3IERvbTcoW10pO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQocHJldikuaXMoc2VsZWN0b3IpKSBwcmV2RWxzLnB1c2gocHJldik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcHJldkVscy5wdXNoKHByZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsID0gcHJldjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhwcmV2RWxzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFyZW50OiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpc1tpXS5wYXJlbnROb2RlKS5pcyhzZWxlY3RvcikpIHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQoJC51bmlxdWUocGFyZW50cykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXJlbnRzOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpc1tpXS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChwYXJlbnQpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2gocGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJCgkLnVuaXF1ZShwYXJlbnRzKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbmQgOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmb3VuZEVsZW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm91bmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRFbGVtZW50cy5wdXNoKGZvdW5kW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcoZm91bmRFbGVtZW50cyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSB0aGlzW2ldLmNoaWxkTm9kZXM7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNoaWxkTm9kZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbal0ubm9kZVR5cGUgPT09IDEpIGNoaWxkcmVuLnB1c2goY2hpbGROb2Rlc1tqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2Rlc1tqXS5ub2RlVHlwZSA9PT0gMSAmJiAkKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNygkLnVuaXF1ZShjaGlsZHJlbikpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUpIHRoaXNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkb20gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIGksIGo7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQWRkID0gJChhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB0b0FkZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21bZG9tLmxlbmd0aF0gPSB0b0FkZFtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLmxlbmd0aCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgICQuZm4gPSBEb203LnByb3RvdHlwZTtcclxuICAgICAgICAkLnVuaXF1ZSA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICAgICAgICAgICAgdmFyIHVuaXF1ZSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVuaXF1ZS5pbmRleE9mKGFycltpXSkgPT09IC0xKSB1bmlxdWUucHVzaChhcnJbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB1bmlxdWU7XHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAkO1xyXG4gICAgfSkoKTtcclxuICAgIFxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgR2V0IERvbSBsaWJyYXJpZXNcclxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgdmFyIHN3aXBlckRvbVBsdWdpbnMgPSBbJ2pRdWVyeScsICdaZXB0bycsICdEb203J107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlckRvbVBsdWdpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIFx0aWYgKHdpbmRvd1tzd2lwZXJEb21QbHVnaW5zW2ldXSkge1xyXG4gICAgXHRcdGFkZExpYnJhcnlQbHVnaW4od2luZG93W3N3aXBlckRvbVBsdWdpbnNbaV1dKTtcclxuICAgIFx0fVxyXG4gICAgfVxyXG4gICAgLy8gUmVxdWlyZWQgRE9NIFBsdWdpbnNcclxuICAgIHZhciBkb21MaWI7XHJcbiAgICBpZiAodHlwZW9mIERvbTcgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBcdGRvbUxpYiA9IHdpbmRvdy5Eb203IHx8IHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICBcdGRvbUxpYiA9IERvbTc7XHJcbiAgICB9XHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEFkZCAuc3dpcGVyIHBsdWdpbiBmcm9tIERvbSBsaWJyYXJpZXNcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBmdW5jdGlvbiBhZGRMaWJyYXJ5UGx1Z2luKGxpYikge1xyXG4gICAgICAgIGxpYi5mbi5zd2lwZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdEluc3RhbmNlO1xyXG4gICAgICAgICAgICBsaWIodGhpcykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG5ldyBTd2lwZXIodGhpcywgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmlyc3RJbnN0YW5jZSkgZmlyc3RJbnN0YW5jZSA9IHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3RJbnN0YW5jZTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoZG9tTGliKSB7XHJcbiAgICAgICAgaWYgKCEoJ3RyYW5zaXRpb25FbmQnIGluIGRvbUxpYi5mbikpIHtcclxuICAgICAgICAgICAgZG9tTGliLmZuLnRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCcsICdvVHJhbnNpdGlvbkVuZCcsICdNU1RyYW5zaXRpb25FbmQnLCAnbXNUcmFuc2l0aW9uRW5kJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgaSwgaiwgZG9tID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLm9mZihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb20ub24oZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISgndHJhbnNmb3JtJyBpbiBkb21MaWIuZm4pKSB7XHJcbiAgICAgICAgICAgIGRvbUxpYi5mbi50cmFuc2Zvcm0gPSBmdW5jdGlvbiAodHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBlbFN0eWxlLk1zVHJhbnNmb3JtID0gZWxTdHlsZS5tc1RyYW5zZm9ybSA9IGVsU3R5bGUuTW96VHJhbnNmb3JtID0gZWxTdHlsZS5PVHJhbnNmb3JtID0gZWxTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEoJ3RyYW5zaXRpb24nIGluIGRvbUxpYi5mbikpIHtcclxuICAgICAgICAgICAgZG9tTGliLmZuLnRyYW5zaXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk1zVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5tc1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuTW96VHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5PVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISgnb3V0ZXJXaWR0aCcgaW4gZG9tTGliLmZuKSkge1xyXG4gICAgICAgICAgICBkb21MaWIuZm4ub3V0ZXJXaWR0aCA9IGZ1bmN0aW9uIChpbmNsdWRlTWFyZ2lucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlTWFyZ2lucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGggKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tbGVmdCcpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LlN3aXBlciA9IFN3aXBlcjtcclxufSkoKTtcclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuU3dpcGVyIEFNRCBFeHBvcnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuaWYgKHR5cGVvZihtb2R1bGUpICE9PSAndW5kZWZpbmVkJylcclxue1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuU3dpcGVyO1xyXG59XHJcbmVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuU3dpcGVyO1xyXG4gICAgfSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwcy9zd2lwZXIuanMubWFwXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zd2lwZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9zd2lwZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5yZXF1aXJlKCcuL3Nhc3Mvc3R5bGUuc2NzcycpO1xyXG5cclxuXHJcbnJlcXVpcmUoJy4vY3NzL3N3aXBlci5jc3MnKTtcclxuXHJcbnJlcXVpcmUoJy4vanMvbmF2aWdhdGlvbi5qcycpO1xyXG5yZXF1aXJlKCcuL2pzL3N3aXBlci5qcycpO1xyXG5yZXF1aXJlKCcuL2pzL3N3aXBlci1zY3JpcHQuanMnKTtcclxucmVxdWlyZSgnLi9qcy9hamF4LXBhZ2luYXRpb24uanMnKTtcclxuXHJcbnJlcXVpcmUoJy4vanMvc2tpcC1saW5rLWZvY3VzLWZpeC5qcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==