!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t || self).LocomotiveScroll = e());
})(this, function () {
  function t() {
    return (
      (t = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
            }
            return t;
          }),
      t.apply(this, arguments)
    );
  }
  function e(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
    return s;
  }
  function i(t, i) {
    var s =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (s) return (s = s.call(t)).next.bind(s);
    if (
      Array.isArray(t) ||
      (s = (function (t, i) {
        if (t) {
          if ("string" == typeof t) return e(t, i);
          var s = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === s && t.constructor && (s = t.constructor.name),
            "Map" === s || "Set" === s
              ? Array.from(t)
              : "Arguments" === s ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
              ? e(t, i)
              : void 0
          );
        }
      })(t)) ||
      (i && t && "number" == typeof t.length)
    ) {
      s && (t = s);
      var n = 0;
      return function () {
        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function s() {
    return (
      (s = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
            }
            return t;
          }),
      s.apply(this, arguments)
    );
  }
  function n(t, e, i) {
    return Math.max(t, Math.min(e, i));
  }
  class r {
    advance(t) {
      var e;
      if (!this.isRunning) return;
      let i = !1;
      if (this.lerp)
        (this.value = (1 - (s = this.lerp)) * this.value + s * this.to),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (i = !0));
      else {
        this.currentTime += t;
        const e = n(0, this.currentTime / this.duration, 1);
        i = e >= 1;
        const s = i ? 1 : this.easing(e);
        this.value = this.from + (this.to - this.from) * s;
      }
      var s;
      null == (e = this.onUpdate) || e.call(this, this.value, { completed: i }),
        i && this.stop();
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(
      t,
      e,
      { lerp: i = 0.1, duration: s = 1, easing: n = (t) => t, onUpdate: r }
    ) {
      (this.from = this.value = t),
        (this.to = e),
        (this.lerp = i),
        (this.duration = s),
        (this.easing = n),
        (this.currentTime = 0),
        (this.isRunning = !0),
        (this.onUpdate = r);
    }
  }
  function o(t, e) {
    let i;
    return function () {
      let s = arguments,
        n = this;
      clearTimeout(i),
        (i = setTimeout(function () {
          t.apply(n, s);
        }, e));
    };
  }
  class l {
    constructor(t, e) {
      (this.onWindowResize = () => {
        (this.width = window.innerWidth), (this.height = window.innerHeight);
      }),
        (this.onWrapperResize = () => {
          (this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight);
        }),
        (this.onContentResize = () => {
          const t =
            this.wrapper === window ? document.documentElement : this.wrapper;
          (this.scrollHeight = t.scrollHeight),
            (this.scrollWidth = t.scrollWidth);
        }),
        (this.wrapper = t),
        (this.content = e),
        this.wrapper === window
          ? (window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize())
          : ((this.wrapperResizeObserver = new ResizeObserver(
              o(this.onWrapperResize, 100)
            )),
            this.wrapperResizeObserver.observe(this.wrapper),
            this.onWrapperResize()),
        (this.contentResizeObserver = new ResizeObserver(
          o(this.onContentResize, 100)
        )),
        this.contentResizeObserver.observe(this.content),
        this.onContentResize();
    }
    destroy() {
      var t, e;
      window.removeEventListener("resize", this.onWindowResize, !1),
        null == (t = this.wrapperResizeObserver) || t.disconnect(),
        null == (e = this.contentResizeObserver) || e.disconnect();
    }
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  }
  let a = () => ({
    events: {},
    emit(t, ...e) {
      let i = this.events[t] || [];
      for (let t = 0, s = i.length; t < s; t++) i[t](...e);
    },
    on(t, e) {
      var i;
      return (
        (null == (i = this.events[t]) ? void 0 : i.push(e)) ||
          (this.events[t] = [e]),
        () => {
          var i;
          this.events[t] =
            null == (i = this.events[t]) ? void 0 : i.filter((t) => e !== t);
        }
      );
    },
  });
  class h {
    constructor(
      t,
      { wheelMultiplier: e = 1, touchMultiplier: i = 2, normalizeWheel: s = !1 }
    ) {
      (this.onTouchStart = (t) => {
        const { clientX: e, clientY: i } = t.targetTouches
          ? t.targetTouches[0]
          : t;
        (this.touchStart.x = e),
          (this.touchStart.y = i),
          (this.lastDelta = { x: 0, y: 0 });
      }),
        (this.onTouchMove = (t) => {
          const { clientX: e, clientY: i } = t.targetTouches
              ? t.targetTouches[0]
              : t,
            s = -(e - this.touchStart.x) * this.touchMultiplier,
            n = -(i - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = i),
            (this.lastDelta = { x: s, y: n }),
            this.emitter.emit("scroll", {
              type: "touch",
              deltaX: s,
              deltaY: n,
              event: t,
            });
        }),
        (this.onTouchEnd = (t) => {
          this.emitter.emit("scroll", {
            type: "touch",
            inertia: !0,
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t,
          });
        }),
        (this.onWheel = (t) => {
          let { deltaX: e, deltaY: i } = t;
          this.normalizeWheel && ((e = n(-100, e, 100)), (i = n(-100, i, 100))),
            (e *= this.wheelMultiplier),
            (i *= this.wheelMultiplier),
            this.emitter.emit("scroll", {
              type: "wheel",
              deltaX: e,
              deltaY: i,
              event: t,
            });
        }),
        (this.element = t),
        (this.wheelMultiplier = e),
        (this.touchMultiplier = i),
        (this.normalizeWheel = s),
        (this.touchStart = { x: null, y: null }),
        (this.emitter = a()),
        this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
          passive: !1,
        });
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    destroy() {
      (this.emitter.events = {}),
        this.element.removeEventListener("wheel", this.onWheel, {
          passive: !1,
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        }),
        this.element.removeEventListener("touchend", this.onTouchEnd, {
          passive: !1,
        });
    }
  }
  class c {
    constructor({
      direction: t,
      gestureDirection: e,
      mouseMultiplier: i,
      smooth: n,
      wrapper: o = window,
      content: c = document.documentElement,
      wheelEventsTarget: u = o,
      smoothWheel: d = null == n || n,
      smoothTouch: m = !1,
      syncTouch: v = !1,
      syncTouchLerp: p = 0.1,
      touchInertiaMultiplier: f = 35,
      duration: g,
      easing: b = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: S = g ? null : 0.1,
      infinite: w = !1,
      orientation: E = null != t ? t : "vertical",
      gestureOrientation: I = null != e ? e : "vertical",
      touchMultiplier: O = 1,
      wheelMultiplier: y = null != i ? i : 1,
      normalizeWheel: R = !1,
    } = {}) {
      (this.onVirtualScroll = ({
        type: t,
        inertia: e,
        deltaX: i,
        deltaY: n,
        event: r,
      }) => {
        if (r.ctrlKey) return;
        const o = "touch" === t,
          l = "wheel" === t;
        if (
          ("vertical" === this.options.gestureOrientation && 0 === n) ||
          ("horizontal" === this.options.gestureOrientation && 0 === i) ||
          (o &&
            "vertical" === this.options.gestureOrientation &&
            0 === this.scroll &&
            !this.options.infinite &&
            n <= 0)
        )
          return;
        if (
          r
            .composedPath()
            .find((t) =>
              null == t || null == t.hasAttribute
                ? void 0
                : t.hasAttribute("data-lenis-prevent")
            )
        )
          return;
        if (this.isStopped || this.isLocked) return void r.preventDefault();
        if (
          ((this.isSmooth =
            ((this.options.smoothTouch || this.options.syncTouch) && o) ||
            (this.options.smoothWheel && l)),
          !this.isSmooth)
        )
          return (this.isScrolling = !1), void this.animate.stop();
        r.preventDefault();
        let a = n;
        "both" === this.options.gestureOrientation
          ? (a = Math.abs(n) > Math.abs(i) ? n : i)
          : "horizontal" === this.options.gestureOrientation && (a = i);
        const h = o && this.options.syncTouch,
          c = o && e && Math.abs(a) > 1;
        c && (a = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + a,
            s({ programmatic: !1 }, h && { lerp: c ? this.syncTouchLerp : 0.4 })
          );
      }),
        (this.onScroll = () => {
          if (!this.isScrolling) {
            const t = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.velocity = 0),
              (this.direction = Math.sign(this.animatedScroll - t)),
              this.emit();
          }
        }),
        t &&
          console.warn(
            "Lenis: `direction` option is deprecated, use `orientation` instead"
          ),
        e &&
          console.warn(
            "Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"
          ),
        i &&
          console.warn(
            "Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"
          ),
        n &&
          console.warn(
            "Lenis: `smooth` option is deprecated, use `smoothWheel` instead"
          ),
        (window.lenisVersion = "1.0.11"),
        (o !== document.documentElement && o !== document.body) || (o = window),
        (this.options = {
          wrapper: o,
          content: c,
          wheelEventsTarget: u,
          smoothWheel: d,
          smoothTouch: m,
          syncTouch: v,
          syncTouchLerp: p,
          touchInertiaMultiplier: f,
          duration: g,
          easing: b,
          lerp: S,
          infinite: w,
          gestureOrientation: I,
          orientation: E,
          touchMultiplier: O,
          wheelMultiplier: y,
          normalizeWheel: R,
        }),
        (this.dimensions = new l(o, c)),
        this.rootElement.classList.add("lenis"),
        (this.velocity = 0),
        (this.isStopped = !1),
        (this.isSmooth = d || m),
        (this.isScrolling = !1),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        (this.animate = new r()),
        (this.emitter = a()),
        this.options.wrapper.addEventListener("scroll", this.onScroll, {
          passive: !1,
        }),
        (this.virtualScroll = new h(u, {
          touchMultiplier: O,
          wheelMultiplier: y,
          normalizeWheel: R,
        })),
        this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      (this.emitter.events = {}),
        this.options.wrapper.removeEventListener("scroll", this.onScroll, {
          passive: !1,
        }),
        this.virtualScroll.destroy();
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    off(t, e) {
      var i;
      this.emitter.events[t] =
        null == (i = this.emitter.events[t])
          ? void 0
          : i.filter((t) => e !== t);
    }
    setScroll(t) {
      this.isHorizontal
        ? (this.rootElement.scrollLeft = t)
        : (this.rootElement.scrollTop = t);
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      (this.isLocked = !1),
        (this.isScrolling = !1),
        (this.velocity = 0),
        this.animate.stop();
    }
    start() {
      (this.isStopped = !1), this.reset();
    }
    stop() {
      (this.isStopped = !0), this.animate.stop(), this.reset();
    }
    raf(t) {
      const e = t - (this.time || t);
      (this.time = t), this.animate.advance(0.001 * e);
    }
    scrollTo(
      t,
      {
        offset: e = 0,
        immediate: i = !1,
        lock: s = !1,
        duration: r = this.options.duration,
        easing: o = this.options.easing,
        lerp: l = !r && this.options.lerp,
        onComplete: a = null,
        force: h = !1,
        programmatic: c = !0,
      } = {}
    ) {
      if (!this.isStopped || h) {
        if (["top", "left", "start"].includes(t)) t = 0;
        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
        else {
          var u;
          let i;
          if (
            ("string" == typeof t
              ? (i = document.querySelector(t))
              : null != (u = t) && u.nodeType && (i = t),
            i)
          ) {
            if (this.options.wrapper !== window) {
              const t = this.options.wrapper.getBoundingClientRect();
              e -= this.isHorizontal ? t.left : t.top;
            }
            const s = i.getBoundingClientRect();
            t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof t) {
          if (
            ((t += e),
            (t = Math.round(t)),
            this.options.infinite
              ? c && (this.targetScroll = this.animatedScroll = this.scroll)
              : (t = n(0, t, this.limit)),
            i)
          )
            return (
              (this.animatedScroll = this.targetScroll = t),
              this.setScroll(this.scroll),
              this.reset(),
              this.emit(),
              void (null == a || a())
            );
          if (!c) {
            if (t === this.targetScroll) return;
            this.targetScroll = t;
          }
          this.animate.fromTo(this.animatedScroll, t, {
            duration: r,
            easing: o,
            lerp: l,
            onUpdate: (t, { completed: e }) => {
              s && (this.isLocked = !0),
                (this.isScrolling = !0),
                (this.velocity = t - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = t),
                this.setScroll(this.scroll),
                c && (this.targetScroll = t),
                e &&
                  (s && (this.isLocked = !1),
                  requestAnimationFrame(() => {
                    this.isScrolling = !1;
                  }),
                  (this.velocity = 0),
                  null == a || a()),
                this.emit();
            },
          });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window
        ? this.options.content
        : this.options.wrapper;
    }
    get limit() {
      return this.isHorizontal
        ? this.dimensions.limit.x
        : this.dimensions.limit.y;
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      return this.isHorizontal
        ? this.rootElement.scrollLeft
        : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? (function (t, e) {
            let i = t % e;
            return ((e > 0 && i < 0) || (e < 0 && i > 0)) && (i += e), i;
          })(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(t) {
      this.__isSmooth !== t &&
        (this.rootElement.classList.toggle("lenis-smooth", t),
        (this.__isSmooth = t));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t) {
      this.__isScrolling !== t &&
        (this.rootElement.classList.toggle("lenis-scrolling", t),
        (this.__isScrolling = t));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t) {
      this.__isStopped !== t &&
        (this.rootElement.classList.toggle("lenis-stopped", t),
        (this.__isStopped = t));
    }
  }
  var u = /*#__PURE__*/ (function () {
    function t(t) {
      var e = t.scrollElements,
        i = t.rootMargin,
        s = void 0 === i ? "-1px -1px -1px -1px" : i,
        n = t.IORaf;
      (this.scrollElements = void 0),
        (this.rootMargin = void 0),
        (this.IORaf = void 0),
        (this.observer = void 0),
        (this.scrollElements = e),
        (this.rootMargin = s),
        (this.IORaf = n),
        this._init();
    }
    var e = t.prototype;
    return (
      (e._init = function () {
        var t = this;
        this.observer = new IntersectionObserver(
          function (e) {
            e.forEach(function (e) {
              var i = t.scrollElements.find(function (t) {
                return t.$el === e.target;
              });
              e.isIntersecting
                ? (i && (i.isAlreadyIntersected = !0), t._setInview(e))
                : i && i.isAlreadyIntersected && t._setOutOfView(e);
            });
          },
          { rootMargin: this.rootMargin }
        );
        for (var e, s = i(this.scrollElements); !(e = s()).done; )
          this.observe(e.value.$el);
      }),
      (e.destroy = function () {
        this.observer.disconnect();
      }),
      (e.observe = function (t) {
        t && this.observer.observe(t);
      }),
      (e.unobserve = function (t) {
        t && this.observer.unobserve(t);
      }),
      (e._setInview = function (t) {
        var e = this.scrollElements.find(function (e) {
          return e.$el === t.target;
        });
        this.IORaf && (null == e || e.setInteractivityOn()),
          !this.IORaf && (null == e || e.setInview());
      }),
      (e._setOutOfView = function (t) {
        var e = this.scrollElements.find(function (e) {
          return e.$el === t.target;
        });
        this.IORaf && (null == e || e.setInteractivityOff()),
          !this.IORaf && (null == e || e.setOutOfView()),
          (null != e && e.attributes.scrollRepeat) ||
            this.IORaf ||
            this.unobserve(t.target);
      }),
      t
    );
  })();
  function d(t, e, i, s, n) {
    return i + (((n - t) / (e - t)) * (s - i) || 0);
  }
  function m(t, e) {
    return t.reduce(function (t, i) {
      return Math.abs(i - e) < Math.abs(t - e) ? i : t;
    });
  }
  var v = /*#__PURE__*/ (function () {
      function t(t) {
        var e,
          i,
          s,
          n,
          r,
          o = t.$el,
          l = t.id,
          a = t.modularInstance,
          h = t.subscribeElementUpdateFn,
          c = t.unsubscribeElementUpdateFn,
          u = t.needRaf,
          d = t.scrollOrientation;
        (this.$el = void 0),
          (this.id = void 0),
          (this.needRaf = void 0),
          (this.attributes = void 0),
          (this.scrollOrientation = void 0),
          (this.isAlreadyIntersected = void 0),
          (this.intersection = void 0),
          (this.metrics = void 0),
          (this.currentScroll = void 0),
          (this.translateValue = void 0),
          (this.progress = void 0),
          (this.lastProgress = void 0),
          (this.modularInstance = void 0),
          (this.progressModularModules = void 0),
          (this.isInview = void 0),
          (this.isInteractive = void 0),
          (this.isInFold = void 0),
          (this.isFirstResize = void 0),
          (this.subscribeElementUpdateFn = void 0),
          (this.unsubscribeElementUpdateFn = void 0),
          (this.$el = o),
          (this.id = l),
          (this.needRaf = u),
          (this.scrollOrientation = d),
          (this.modularInstance = a),
          (this.subscribeElementUpdateFn = h),
          (this.unsubscribeElementUpdateFn = c),
          (this.attributes = {
            scrollClass:
              null != (e = this.$el.dataset.scrollClass) ? e : "is-inview",
            scrollOffset:
              null != (i = this.$el.dataset.scrollOffset) ? i : "0,0",
            scrollPosition:
              null != (s = this.$el.dataset.scrollPosition) ? s : "start,end",
            scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress,
            scrollCssProgress: null != this.$el.dataset.scrollCssProgress,
            scrollEventProgress:
              null != (n = this.$el.dataset.scrollEventProgress) ? n : null,
            scrollSpeed:
              null != this.$el.dataset.scrollSpeed
                ? parseFloat(this.$el.dataset.scrollSpeed)
                : null,
            scrollRepeat: null != this.$el.dataset.scrollRepeat,
            scrollCall: null != (r = this.$el.dataset.scrollCall) ? r : null,
            scrollCallSelf: null != this.$el.dataset.scrollCallSelf,
            scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold,
            scrollEnableTouchSpeed:
              null != this.$el.dataset.scrollEnableTouchSpeed,
          }),
          (this.intersection = { start: 0, end: 0 }),
          (this.metrics = { offsetStart: 0, offsetEnd: 0, bcr: {} }),
          (this.currentScroll =
            "vertical" === this.scrollOrientation
              ? window.scrollY
              : window.scrollX),
          (this.translateValue = 0),
          (this.progress = 0),
          (this.lastProgress = null),
          (this.progressModularModules = []),
          (this.isInview = !1),
          (this.isInteractive = !1),
          (this.isAlreadyIntersected = !1),
          (this.isInFold = !1),
          (this.isFirstResize = !0),
          this._init();
      }
      var e = t.prototype;
      return (
        (e._init = function () {
          this.needRaf &&
            (this.modularInstance &&
              this.attributes.scrollModuleProgress &&
              this._getProgressModularModules(),
            this._resize());
        }),
        (e.onResize = function (t) {
          (this.currentScroll = t.currentScroll), this._resize();
        }),
        (e.onRender = function (t) {
          var e = t.smooth,
            i =
              "vertical" === this.scrollOrientation
                ? window.innerHeight
                : window.innerWidth;
          if (
            ((this.currentScroll = t.currentScroll),
            this._computeProgress(),
            this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
          )
            if (this.attributes.scrollEnableTouchSpeed || e) {
              if (this.isInFold) {
                var s = Math.max(0, this.progress);
                this.translateValue = s * i * this.attributes.scrollSpeed * -1;
              } else {
                var n = d(0, 1, -1, 1, this.progress);
                this.translateValue = n * i * this.attributes.scrollSpeed * -1;
              }
              this.$el.style.transform =
                "vertical" === this.scrollOrientation
                  ? "translate3d(0, " + this.translateValue + "px, 0)"
                  : "translate3d(" + this.translateValue + "px, 0, 0)";
            } else
              this.translateValue &&
                (this.$el.style.transform = "translate3d(0, 0, 0)"),
                (this.translateValue = 0);
        }),
        (e.setInview = function () {
          if (!this.isInview) {
            (this.isInview = !0),
              this.$el.classList.add(this.attributes.scrollClass);
            var t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("enter", t);
          }
        }),
        (e.setOutOfView = function () {
          if (this.isInview && this.attributes.scrollRepeat) {
            (this.isInview = !1),
              this.$el.classList.remove(this.attributes.scrollClass);
            var t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("leave", t);
          }
        }),
        (e.setInteractivityOn = function () {
          this.isInteractive ||
            ((this.isInteractive = !0), this.subscribeElementUpdateFn(this));
        }),
        (e.setInteractivityOff = function () {
          this.isInteractive &&
            ((this.isInteractive = !1),
            this.unsubscribeElementUpdateFn(this),
            null != this.lastProgress &&
              this._computeProgress(m([0, 1], this.lastProgress)));
        }),
        (e._resize = function () {
          (this.metrics.bcr = this.$el.getBoundingClientRect()),
            this._computeMetrics(),
            this._computeIntersection(),
            this.isFirstResize &&
              ((this.isFirstResize = !1), this.isInFold && this.setInview());
        }),
        (e._computeMetrics = function () {
          var t = this.metrics.bcr,
            e =
              "vertical" === this.scrollOrientation
                ? window.innerHeight
                : window.innerWidth,
            i = "vertical" === this.scrollOrientation ? t.height : t.width;
          (this.metrics.offsetStart =
            this.currentScroll +
            ("vertical" === this.scrollOrientation ? t.top : t.left) -
            this.translateValue),
            (this.metrics.offsetEnd = this.metrics.offsetStart + i),
            (this.isInFold =
              this.metrics.offsetStart < e &&
              !this.attributes.scrollIgnoreFold);
        }),
        (e._computeIntersection = function () {
          var t =
              "vertical" === this.scrollOrientation
                ? window.innerHeight
                : window.innerWidth,
            e =
              "vertical" === this.scrollOrientation
                ? this.metrics.bcr.height
                : this.metrics.bcr.width,
            i = this.attributes.scrollOffset.split(","),
            s = null != i[0] ? i[0].trim() : "0",
            n = null != i[1] ? i[1].trim() : "0",
            r = this.attributes.scrollPosition.split(","),
            o = null != r[0] ? r[0].trim() : "start",
            l = null != r[1] ? r[1].trim() : "end",
            a = s.includes("%")
              ? t * parseInt(s.replace("%", "").trim()) * 0.01
              : parseInt(s),
            h = n.includes("%")
              ? t * parseInt(n.replace("%", "").trim()) * 0.01
              : parseInt(n);
          switch ((this.isInFold && (o = "fold"), o)) {
            case "start":
            default:
              this.intersection.start = this.metrics.offsetStart - t + a;
              break;
            case "middle":
              this.intersection.start =
                this.metrics.offsetStart - t + a + 0.5 * e;
              break;
            case "end":
              this.intersection.start = this.metrics.offsetStart - t + a + e;
              break;
            case "fold":
              this.intersection.start = 0;
          }
          switch (l) {
            case "start":
              this.intersection.end = this.metrics.offsetStart - h;
              break;
            case "middle":
              this.intersection.end = this.metrics.offsetStart - h + 0.5 * e;
              break;
            default:
              this.intersection.end = this.metrics.offsetStart - h + e;
          }
          if (this.intersection.end <= this.intersection.start)
            switch (l) {
              case "start":
              default:
                this.intersection.end = this.intersection.start + 1;
                break;
              case "middle":
                this.intersection.end = this.intersection.start + 0.5 * e;
                break;
              case "end":
                this.intersection.end = this.intersection.start + e;
            }
        }),
        (e._computeProgress = function (t) {
          var e,
            s =
              null != t
                ? t
                : (e = d(
                    this.intersection.start,
                    this.intersection.end,
                    0,
                    1,
                    this.currentScroll
                  )) < 0
                ? 0
                : e > 1
                ? 1
                : e;
          if (((this.progress = s), s != this.lastProgress)) {
            if (
              ((this.lastProgress = s),
              this.attributes.scrollCssProgress && this._setCssProgress(s),
              this.attributes.scrollEventProgress &&
                this._setCustomEventProgress(s),
              this.attributes.scrollModuleProgress)
            )
              for (
                var n, r = i(this.progressModularModules);
                !(n = r()).done;

              ) {
                var o = n.value;
                this.modularInstance &&
                  this.modularInstance.call(
                    "onScrollProgress",
                    s,
                    o.moduleName,
                    o.moduleId
                  );
              }
            s > 0 && s < 1 && this.setInview(),
              0 === s && this.setOutOfView(),
              1 === s && this.setOutOfView();
          }
        }),
        (e._setCssProgress = function (t) {
          void 0 === t && (t = 0),
            this.$el.style.setProperty("--progress", t.toString());
        }),
        (e._setCustomEventProgress = function (t) {
          void 0 === t && (t = 0);
          var e = this.attributes.scrollEventProgress;
          if (e) {
            var i = new CustomEvent(e, {
              detail: { target: this.$el, progress: t },
            });
            window.dispatchEvent(i);
          }
        }),
        (e._getProgressModularModules = function () {
          if (this.modularInstance) {
            var t = Object.keys(this.$el.dataset).filter(function (t) {
                return t.includes("module");
              }),
              e = Object.entries(this.modularInstance.modules);
            if (t.length)
              for (var s, n = i(t); !(s = n()).done; ) {
                var r = this.$el.dataset[s.value];
                if (!r) return;
                for (var o, l = i(e); !(o = l()).done; ) {
                  var a = o.value;
                  r in a[1] &&
                    this.progressModularModules.push({
                      moduleName: a[0],
                      moduleId: r,
                    });
                }
              }
          }
        }),
        (e._getScrollCallFrom = function () {
          var t = m(
            [this.intersection.start, this.intersection.end],
            this.currentScroll
          );
          return this.intersection.start === t ? "start" : "end";
        }),
        (e._dispatchCall = function (t, e) {
          var i,
            s,
            n =
              null == (i = this.attributes.scrollCall) ? void 0 : i.split(","),
            r = null == (s = this.attributes) ? void 0 : s.scrollCallSelf;
          if (n && n.length > 1) {
            var o,
              l,
              a = n[0],
              h = n[1],
              c = n[2];
            (l = r ? this.$el.dataset["module" + h.trim()] : c),
              this.modularInstance &&
                this.modularInstance.call(
                  a.trim(),
                  { target: this.$el, way: t, from: e },
                  h.trim(),
                  null == (o = l) ? void 0 : o.trim()
                );
          } else if (n) {
            var u = new CustomEvent(n[0], {
              detail: { target: this.$el, way: t, from: e },
            });
            window.dispatchEvent(u);
          }
        }),
        t
      );
    })(),
    p = [
      "scrollOffset",
      "scrollPosition",
      "scrollModuleProgress",
      "scrollCssProgress",
      "scrollEventProgress",
      "scrollSpeed",
    ],
    f = /*#__PURE__*/ (function () {
      function t(t) {
        var e = t.$el,
          i = t.modularInstance,
          s = t.triggerRootMargin,
          n = t.rafRootMargin,
          r = t.scrollOrientation;
        (this.$scrollContainer = void 0),
          (this.modularInstance = void 0),
          (this.triggerRootMargin = void 0),
          (this.rafRootMargin = void 0),
          (this.scrollElements = void 0),
          (this.triggeredScrollElements = void 0),
          (this.RAFScrollElements = void 0),
          (this.scrollElementsToUpdate = void 0),
          (this.IOTriggerInstance = void 0),
          (this.IORafInstance = void 0),
          (this.scrollOrientation = void 0),
          e
            ? ((this.$scrollContainer = e),
              (this.modularInstance = i),
              (this.scrollOrientation = r),
              (this.triggerRootMargin = null != s ? s : "-1px -1px -1px -1px"),
              (this.rafRootMargin = null != n ? n : "100% 100% 100% 100%"),
              (this.scrollElements = []),
              (this.triggeredScrollElements = []),
              (this.RAFScrollElements = []),
              (this.scrollElementsToUpdate = []),
              this._init())
            : console.error("Please provide a DOM Element as scrollContainer");
      }
      var e = t.prototype;
      return (
        (e._init = function () {
          var t = this.$scrollContainer.querySelectorAll("[data-scroll]"),
            e = Array.from(t);
          this._subscribeScrollElements(e),
            (this.IOTriggerInstance = new u({
              scrollElements: [].concat(this.triggeredScrollElements),
              rootMargin: this.triggerRootMargin,
              IORaf: !1,
            })),
            (this.IORafInstance = new u({
              scrollElements: [].concat(this.RAFScrollElements),
              rootMargin: this.rafRootMargin,
              IORaf: !0,
            }));
        }),
        (e.destroy = function () {
          this.IOTriggerInstance.destroy(),
            this.IORafInstance.destroy(),
            this._unsubscribeAllScrollElements();
        }),
        (e.onResize = function (t) {
          for (
            var e, s = t.currentScroll, n = i(this.RAFScrollElements);
            !(e = n()).done;

          )
            e.value.onResize({ currentScroll: s });
        }),
        (e.onRender = function (t) {
          for (
            var e,
              s = t.currentScroll,
              n = t.smooth,
              r = i(this.scrollElementsToUpdate);
            !(e = r()).done;

          )
            e.value.onRender({ currentScroll: s, smooth: n });
        }),
        (e.removeScrollElements = function (t) {
          var e = this,
            i = t.querySelectorAll("[data-scroll]");
          if (i.length) {
            for (var s = 0; s < this.triggeredScrollElements.length; s++) {
              var n = this.triggeredScrollElements[s];
              Array.from(i).indexOf(n.$el) > -1 &&
                (this.IOTriggerInstance.unobserve(n.$el),
                this.triggeredScrollElements.splice(s, 1));
            }
            for (var r = 0; r < this.RAFScrollElements.length; r++) {
              var o = this.RAFScrollElements[r];
              Array.from(i).indexOf(o.$el) > -1 &&
                (this.IORafInstance.unobserve(o.$el),
                this.RAFScrollElements.splice(r, 1));
            }
            i.forEach(function (t) {
              var i = e.scrollElementsToUpdate.find(function (e) {
                  return e.$el === t;
                }),
                s = e.scrollElements.find(function (e) {
                  return e.$el === t;
                });
              i && e._unsubscribeElementUpdate(i),
                s &&
                  (e.scrollElements = e.scrollElements.filter(function (t) {
                    return t.id != s.id;
                  }));
            });
          }
        }),
        (e.addScrollElements = function (t) {
          var e = t.querySelectorAll("[data-scroll]"),
            i = [];
          this.scrollElements.forEach(function (t) {
            i.push(t.id);
          });
          var s = Math.max.apply(Math, i) + 1,
            n = Array.from(e);
          this._subscribeScrollElements(n, s, !0);
        }),
        (e._subscribeScrollElements = function (t, e, i) {
          void 0 === e && (e = 0), void 0 === i && (i = !1);
          for (var s = 0; s < t.length; s++) {
            var n = t[s],
              r = this._checkRafNeeded(n),
              o = new v({
                $el: n,
                id: e + s,
                scrollOrientation: this.scrollOrientation,
                modularInstance: this.modularInstance,
                subscribeElementUpdateFn:
                  this._subscribeElementUpdate.bind(this),
                unsubscribeElementUpdateFn:
                  this._unsubscribeElementUpdate.bind(this),
                needRaf: r,
              });
            this.scrollElements.push(o),
              r
                ? (this.RAFScrollElements.push(o),
                  i &&
                    (this.IORafInstance.scrollElements.push(o),
                    this.IORafInstance.observe(o.$el)))
                : (this.triggeredScrollElements.push(o),
                  i &&
                    (this.IOTriggerInstance.scrollElements.push(o),
                    this.IOTriggerInstance.observe(o.$el)));
          }
        }),
        (e._unsubscribeAllScrollElements = function () {
          (this.scrollElements = []),
            (this.RAFScrollElements = []),
            (this.triggeredScrollElements = []),
            (this.scrollElementsToUpdate = []);
        }),
        (e._subscribeElementUpdate = function (t) {
          this.scrollElementsToUpdate.push(t);
        }),
        (e._unsubscribeElementUpdate = function (t) {
          this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(
            function (e) {
              return e.id != t.id;
            }
          );
        }),
        (e._checkRafNeeded = function (t) {
          var e = [].concat(p),
            s = function (t) {
              e = e.filter(function (e) {
                return e != t;
              });
            };
          if (t.dataset.scrollOffset) {
            if (
              "0,0" !=
              t.dataset.scrollOffset
                .split(",")
                .map(function (t) {
                  return t.replace("%", "").trim();
                })
                .join(",")
            )
              return !0;
            s("scrollOffset");
          } else s("scrollOffset");
          if (t.dataset.scrollPosition) {
            if ("top,bottom" != t.dataset.scrollPosition.trim()) return !0;
            s("scrollPosition");
          } else s("scrollPosition");
          if (
            t.dataset.scrollSpeed &&
            !isNaN(parseFloat(t.dataset.scrollSpeed))
          )
            return !0;
          s("scrollSpeed");
          for (var n, r = i(e); !(n = r()).done; )
            if (n.value in t.dataset) return !0;
          return !1;
        }),
        t
      );
    })(),
    g = /*#__PURE__*/ (function () {
      function t(t) {
        var e = t.resizeElements,
          i = t.resizeCallback,
          s = void 0 === i ? function () {} : i;
        (this.$resizeElements = void 0),
          (this.isFirstObserve = void 0),
          (this.observer = void 0),
          (this.resizeCallback = void 0),
          (this.$resizeElements = e),
          (this.resizeCallback = s),
          (this.isFirstObserve = !0),
          this._init();
      }
      var e = t.prototype;
      return (
        (e._init = function () {
          var t = this;
          this.observer = new ResizeObserver(function (e) {
            !t.isFirstObserve &&
              (null == t.resizeCallback || t.resizeCallback()),
              (t.isFirstObserve = !1);
          });
          for (var e, s = i(this.$resizeElements); !(e = s()).done; )
            this.observer.observe(e.value);
        }),
        (e.destroy = function () {
          this.observer.disconnect();
        }),
        t
      );
    })(),
    b = {
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      duration: 1.2,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !0,
      smoothTouch: !1,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: !0,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
    }; /*#__PURE__*/
  return (function () {
    function e(e) {
      var i = void 0 === e ? {} : e,
        s = i.lenisOptions,
        n = void 0 === s ? {} : s,
        r = i.modularInstance,
        o = i.triggerRootMargin,
        l = i.rafRootMargin,
        a = i.autoResize,
        h = void 0 === a || a,
        c = i.autoStart,
        u = void 0 === c || c,
        d = i.scrollCallback,
        m = void 0 === d ? function () {} : d,
        v = i.initCustomTicker,
        p = i.destroyCustomTicker;
      (this.rafPlaying = void 0),
        (this.lenisInstance = void 0),
        (this.coreInstance = void 0),
        (this.lenisOptions = void 0),
        (this.modularInstance = void 0),
        (this.triggerRootMargin = void 0),
        (this.rafRootMargin = void 0),
        (this.rafInstance = void 0),
        (this.autoResize = void 0),
        (this.autoStart = void 0),
        (this.ROInstance = void 0),
        (this.initCustomTicker = void 0),
        (this.destroyCustomTicker = void 0),
        (this._onRenderBind = void 0),
        (this._onResizeBind = void 0),
        (this._onScrollToBind = void 0),
        (this.lenisOptions = t({}, b, n)),
        Object.assign(this, {
          lenisOptions: n,
          modularInstance: r,
          triggerRootMargin: o,
          rafRootMargin: l,
          autoResize: h,
          autoStart: u,
          scrollCallback: m,
          initCustomTicker: v,
          destroyCustomTicker: p,
        }),
        (this._onRenderBind = this._onRender.bind(this)),
        (this._onScrollToBind = this._onScrollTo.bind(this)),
        (this._onResizeBind = this._onResize.bind(this)),
        (this.rafPlaying = !1),
        this._init();
    }
    var i = e.prototype;
    return (
      (i._init = function () {
        var t,
          e = this;
        (this.lenisInstance = new c({
          wrapper: this.lenisOptions.wrapper,
          content: this.lenisOptions.content,
          lerp: this.lenisOptions.lerp,
          duration: this.lenisOptions.duration,
          orientation: this.lenisOptions.orientation,
          gestureOrientation: this.lenisOptions.gestureOrientation,
          smoothWheel: this.lenisOptions.smoothWheel,
          smoothTouch: this.lenisOptions.smoothTouch,
          wheelMultiplier: this.lenisOptions.wheelMultiplier,
          touchMultiplier: this.lenisOptions.touchMultiplier,
          normalizeWheel: this.lenisOptions.normalizeWheel,
          easing: this.lenisOptions.easing,
        })),
          null == (t = this.lenisInstance) ||
            t.on("scroll", this.scrollCallback),
          document.documentElement.setAttribute(
            "data-scroll-orientation",
            this.lenisInstance.options.orientation
          ),
          requestAnimationFrame(function () {
            (e.coreInstance = new f({
              $el: e.lenisInstance.rootElement,
              modularInstance: e.modularInstance,
              triggerRootMargin: e.triggerRootMargin,
              rafRootMargin: e.rafRootMargin,
              scrollOrientation: e.lenisInstance.options.orientation,
            })),
              e._bindEvents(),
              e.initCustomTicker && !e.destroyCustomTicker
                ? console.warn(
                    "initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble."
                  )
                : !e.initCustomTicker &&
                  e.destroyCustomTicker &&
                  console.warn(
                    "destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."
                  ),
              e.autoStart && e.start();
          });
      }),
      (i.destroy = function () {
        this.stop(),
          this._unbindEvents(),
          this.lenisInstance.destroy(),
          this.coreInstance.destroy();
      }),
      (i._bindEvents = function () {
        this._bindScrollToEvents(),
          this.autoResize &&
            ("ResizeObserver" in window
              ? (this.ROInstance = new g({
                  resizeElements: [document.body],
                  resizeCallback: this._onResizeBind,
                }))
              : window.addEventListener("resize", this._onResizeBind));
      }),
      (i._unbindEvents = function () {
        this._unbindScrollToEvents(),
          this.autoResize &&
            ("ResizeObserver" in window
              ? this.ROInstance && this.ROInstance.destroy()
              : window.removeEventListener("resize", this._onResizeBind));
      }),
      (i._bindScrollToEvents = function (t) {
        var e = this,
          i = t || this.lenisInstance.rootElement,
          s = null == i ? void 0 : i.querySelectorAll("[data-scroll-to]");
        (null == s ? void 0 : s.length) &&
          s.forEach(function (t) {
            t.addEventListener("click", e._onScrollToBind, !1);
          });
      }),
      (i._unbindScrollToEvents = function (t) {
        var e = this,
          i = t || this.lenisInstance.rootElement,
          s = null == i ? void 0 : i.querySelectorAll("[data-scroll-to]");
        (null == s ? void 0 : s.length) &&
          s.forEach(function (t) {
            t.removeEventListener("click", e._onScrollToBind, !1);
          });
      }),
      (i._onResize = function () {
        var t = this;
        requestAnimationFrame(function () {
          var e;
          null == (e = t.coreInstance) ||
            e.onResize({ currentScroll: t.lenisInstance.scroll });
        });
      }),
      (i._onRender = function () {
        var t, e;
        null == (t = this.lenisInstance) || t.raf(Date.now()),
          null == (e = this.coreInstance) ||
            e.onRender({
              currentScroll: this.lenisInstance.scroll,
              smooth: this.lenisInstance.isSmooth,
            });
      }),
      (i._onScrollTo = function (t) {
        var e;
        t.preventDefault();
        var i = null != (e = t.currentTarget) ? e : null;
        if (i) {
          var s =
              i.getAttribute("data-scroll-to-href") || i.getAttribute("href"),
            n = i.getAttribute("data-scroll-to-offset") || 0,
            r =
              i.getAttribute("data-scroll-to-duration") ||
              this.lenisOptions.duration ||
              b.duration;
          s &&
            this.scrollTo(s, {
              offset: "string" == typeof n ? parseInt(n) : n,
              duration: "string" == typeof r ? parseInt(r) : r,
            });
        }
      }),
      (i.start = function () {
        this.rafPlaying ||
          ((this.rafPlaying = !0),
          this.initCustomTicker
            ? this.initCustomTicker(this._onRenderBind)
            : this._raf());
      }),
      (i.stop = function () {
        this.rafPlaying &&
          ((this.rafPlaying = !1),
          this.destroyCustomTicker
            ? this.destroyCustomTicker(this._onRenderBind)
            : this.rafInstance && cancelAnimationFrame(this.rafInstance));
      }),
      (i.removeScrollElements = function (t) {
        var e;
        t
          ? (this._unbindScrollToEvents(t),
            null == (e = this.coreInstance) || e.removeScrollElements(t))
          : console.error("Please provide a DOM Element as $oldContainer");
      }),
      (i.addScrollElements = function (t) {
        var e,
          i = this;
        t
          ? (null == (e = this.coreInstance) || e.addScrollElements(t),
            requestAnimationFrame(function () {
              i._bindScrollToEvents(t);
            }))
          : console.error("Please provide a DOM Element as $newContainer");
      }),
      (i.resize = function () {
        this._onResizeBind();
      }),
      (i.scrollTo = function (t, e) {
        var i;
        null == (i = this.lenisInstance) ||
          i.scrollTo(t, {
            offset: null == e ? void 0 : e.offset,
            lerp: null == e ? void 0 : e.lerp,
            duration: null == e ? void 0 : e.duration,
            immediate: null == e ? void 0 : e.immediate,
            lock: null == e ? void 0 : e.lock,
            force: null == e ? void 0 : e.force,
            easing: null == e ? void 0 : e.easing,
            onComplete: null == e ? void 0 : e.onComplete,
          });
      }),
      (i._raf = function () {
        var t = this;
        this._onRenderBind(),
          (this.rafInstance = requestAnimationFrame(function () {
            return t._raf();
          }));
      }),
      e
    );
  })();
});
