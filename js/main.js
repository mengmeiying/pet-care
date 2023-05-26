/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/graph-modal.min.js":
/*!***********************************!*\
  !*** ./src/js/graph-modal.min.js ***!
  \***********************************/
/***/ (() => {

!function (t) {
  var e = {};
  function o(n) {
    if (e[n]) return e[n].exports;
    var i = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
  }
  o.m = t, o.c = e, o.d = function (t, e, n) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) o.d(n, i, function (e) {
      return t[e];
    }.bind(null, i));
    return n;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "", o(o.s = 1);
}([function (t, e, o) {
  "use strict";

  o.d(e, "a", function () {
    return n;
  });
  class n {
    constructor(t) {
      this.options = Object.assign({
        isOpen: () => {},
        isClose: () => {}
      }, t), this.modal = document.querySelector(".graph-modal"), this.speed = 300, this.animation = "fade", this._reOpen = !1, this._nextContainer = !1, this.modalContainer = !1, this.isOpen = !1, this.previousActiveElement = !1, this._focusElements = ["a[href]", "input", "select", "textarea", "button", "iframe", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], this._fixBlocks = document.querySelectorAll(".fix-block"), this.events();
    }
    events() {
      this.modal && (document.addEventListener("click", function (t) {
        const e = t.target.closest("[data-graph-path]");
        if (e) {
          let t = e.dataset.graphPath,
            o = e.dataset.graphAnimation,
            n = e.dataset.graphSpeed;
          return this.animation = o || "fade", this.speed = n ? parseInt(n) : 300, this._nextContainer = document.querySelector(`[data-graph-target="${t}"]`), void this.open();
        }
        t.target.closest(".js-modal-close") && this.close();
      }.bind(this)), window.addEventListener("keydown", function (t) {
        27 == t.keyCode && this.isOpen && this.close(), 9 == t.which && this.isOpen && this.focusCatch(t);
      }.bind(this)), document.addEventListener("click", function (t) {
        t.target.classList.contains("graph-modal") && t.target.classList.contains("is-open") && this.close();
      }.bind(this)));
    }
    open(t) {
      if (this.previousActiveElement = document.activeElement, this.isOpen) return this.reOpen = !0, void this.close();
      this.modalContainer = this._nextContainer, t && (this.modalContainer = document.querySelector(`[data-graph-target="${t}"]`)), this.modalContainer.scrollTo(0, 0), this.modal.style.setProperty("--transition-time", this.speed / 1e3 + "s"), this.modal.classList.add("is-open"), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.disableScroll(), this.modalContainer.classList.add("graph-modal-open"), this.modalContainer.classList.add(this.animation), setTimeout(() => {
        this.options.isOpen(this), this.modalContainer.classList.add("animate-open"), this.isOpen = !0, this.focusTrap();
      }, this.speed);
    }
    close() {
      this.modalContainer && (this.modalContainer.classList.remove("animate-open"), this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.modalContainer.classList.remove("graph-modal-open"), this.enableScroll(), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.options.isClose(this), this.isOpen = !1, this.focusTrap(), this.reOpen && (this.reOpen = !1, this.open()));
    }
    focusCatch(t) {
      const e = this.modalContainer.querySelectorAll(this._focusElements),
        o = Array.prototype.slice.call(e),
        n = o.indexOf(document.activeElement);
      t.shiftKey && 0 === n && (o[o.length - 1].focus(), t.preventDefault()), t.shiftKey || n !== o.length - 1 || (o[0].focus(), t.preventDefault());
    }
    focusTrap() {
      const t = this.modalContainer.querySelectorAll(this._focusElements);
      this.isOpen ? t.length && t[0].focus() : this.previousActiveElement.focus();
    }
    disableScroll() {
      let t = window.scrollY;
      this.lockPadding(), document.body.classList.add("disable-scroll"), document.body.dataset.position = t, document.body.style.top = -t + "px";
    }
    enableScroll() {
      let t = parseInt(document.body.dataset.position, 10);
      this.unlockPadding(), document.body.style.top = "auto", document.body.classList.remove("disable-scroll"), window.scrollTo({
        top: t,
        left: 0
      }), document.body.removeAttribute("data-position");
    }
    lockPadding() {
      let t = window.innerWidth - document.body.offsetWidth + "px";
      this._fixBlocks.forEach(e => {
        e.style.paddingRight = t;
      }), document.body.style.paddingRight = t;
    }
    unlockPadding() {
      this._fixBlocks.forEach(t => {
        t.style.paddingRight = "0px";
      }), document.body.style.paddingRight = "0px";
    }
  }
}, function (t, e, o) {
  "use strict";

  o.r(e), function (t) {
    var e = o(0);
    o(3), o(4);
    t.GraphModal = e.a;
  }.call(this, o(2));
}, function (t, e) {
  var o;
  o = function () {
    return this;
  }();
  try {
    o = o || new Function("return this")();
  } catch (t) {
    "object" == typeof window && (o = window);
  }
  t.exports = o;
}, function (t, e) {
  "undefined" != typeof Element && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
    var e = this;
    do {
      if (e.matches(t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);
    return null;
  }));
}, function (t, e, o) {}]);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph_modal_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-modal.min.js */ "./src/js/graph-modal.min.js");
/* harmony import */ var _graph_modal_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graph_modal_min_js__WEBPACK_IMPORTED_MODULE_0__);

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
const burgerOpen = document.querySelector('.burger-button');
const burgerClose = document.querySelector('.burger-menu__close');
const socialsList = document.querySelector('.burger-menu');
const body = document.querySelector('body');
burgerOpen.addEventListener('click', function () {
  socialsList.classList.add('burger-menu--active');
  body.classList.add('stop-scroll');
});
burgerClose.addEventListener('click', function () {
  socialsList.classList.remove('burger-menu--active');
  body.classList.remove('stop-scroll');
});
const modalOpen = document.querySelector('.slide--dog__button');
modalOpen.addEventListener('click', function () {
  new GraphModal().open('first');
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map