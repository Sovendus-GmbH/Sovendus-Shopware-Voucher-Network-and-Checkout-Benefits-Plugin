var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
(function() {
  "use strict";
  function _mergeNamespaces(n, m) {
    for (var i = 0; i < m.length; i++) {
      const e = m[i];
      if (typeof e !== "string" && !Array.isArray(e)) {
        for (const k in e) {
          if (k !== "default" && !(k in n)) {
            const d = Object.getOwnPropertyDescriptor(e, k);
            if (d) {
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: () => e[k]
              });
            }
          }
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var react = { exports: {} };
  var react_production_min = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReact_production_min;
  function requireReact_production_min() {
    if (hasRequiredReact_production_min) return react_production_min;
    hasRequiredReact_production_min = 1;
    var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r2 = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C = Object.assign, D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X2() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    react_production_min.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    react_production_min.Component = E;
    react_production_min.Fragment = p;
    react_production_min.Profiler = r2;
    react_production_min.PureComponent = G;
    react_production_min.StrictMode = q;
    react_production_min.Suspense = w;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    react_production_min.act = X2;
    react_production_min.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    react_production_min.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M;
    react_production_min.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    react_production_min.isValidElement = O;
    react_production_min.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    react_production_min.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    react_production_min.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    react_production_min.unstable_act = X2;
    react_production_min.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    react_production_min.useContext = function(a) {
      return U.current.useContext(a);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    react_production_min.useId = function() {
      return U.current.useId();
    };
    react_production_min.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    react_production_min.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    react_production_min.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    react_production_min.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    react_production_min.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    react_production_min.useRef = function(a) {
      return U.current.useRef(a);
    };
    react_production_min.useState = function(a) {
      return U.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    react_production_min.useTransition = function() {
      return U.current.useTransition();
    };
    react_production_min.version = "18.3.1";
    return react_production_min;
  }
  var hasRequiredReact;
  function requireReact() {
    if (hasRequiredReact) return react.exports;
    hasRequiredReact = 1;
    {
      react.exports = requireReact_production_min();
    }
    return react.exports;
  }
  var reactExports = requireReact();
  const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
  const React$1 = /* @__PURE__ */ _mergeNamespaces({
    __proto__: null,
    default: React
  }, [reactExports]);
  var client$1 = {};
  var reactDom = { exports: {} };
  var reactDom_production_min = {};
  var scheduler = { exports: {} };
  var scheduler_production_min = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredScheduler_production_min;
  function requireScheduler_production_min() {
    if (hasRequiredScheduler_production_min) return scheduler_production_min;
    hasRequiredScheduler_production_min = 1;
    (function(exports) {
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        var p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var r2 = [], t = [], u = 1, v = null, y = 3, z = false, A = false, B = false, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k(t);
          else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r2, b);
          else break;
          b = h(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A) if (null !== h(r2)) A = true, I(J);
        else {
          var b = h(t);
          null !== b && K(H, b.startTime - a);
        }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r2); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r2) && k(r2);
              G(b);
            } else k(r2);
            v = h(r2);
          }
          if (null !== v) var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false, O = null, L = -1, P = 5, Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        var T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r2);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), null === h(r2) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r2, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    })(scheduler_production_min);
    return scheduler_production_min;
  }
  var hasRequiredScheduler;
  function requireScheduler() {
    if (hasRequiredScheduler) return scheduler.exports;
    hasRequiredScheduler = 1;
    {
      scheduler.exports = requireScheduler_production_min();
    }
    return scheduler.exports;
  }
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactDom_production_min;
  function requireReactDom_production_min() {
    if (hasRequiredReactDom_production_min) return reactDom_production_min;
    hasRequiredReactDom_production_min = 1;
    var aa = requireReact(), ca = requireScheduler();
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++) da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b, c, d) {
      if (null !== c && 0 === c.type) return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d) return false;
          if (null !== c) return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
      if (d) return false;
      if (null !== c) switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
      return false;
    }
    function v(a, b, c, d, e, f, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new v(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new v(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new v(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new v(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new v(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ra,
        sa
      );
      z[b] = new v(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b, c, d) {
      var e = z.hasOwnProperty(b) ? z[b] : null;
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign, La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na) return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b) if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }
          a.call(b.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l) {
            d = l;
          }
          a();
        }
      } catch (l) {
        if (l && d && "string" === typeof l.stack) {
          for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
          for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b) return b.displayName || b.name || null;
          if ("string" === typeof b) return b;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b = a._valueTracker;
      if (!b) return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
      c = Sa(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function ab(a, b) {
      b = b.checked;
      null != b && ta(a, "checked", b, false);
    }
    function bb(a, b) {
      ab(a, b);
      var c = Sa(b.value), d = b.type;
      if (null != c) if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function db(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function cb(a, b, c) {
      if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var eb = Array.isArray;
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
      return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b) throw Error(p(92));
          if (eb(c)) {
            if (1 < c.length) throw Error(p(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function ib(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d && (a.defaultValue = "" + d);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb, nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    }(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
    function ob(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
      });
    });
    function rb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
    }
    function sb(a, b) {
      a = a.style;
      for (var c in b) if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children) throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-")) return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib) return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c) return null;
      var d = Db(c);
      if (null === d) return null;
      c = d[b];
      a: switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia) try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    function Nb(a, b, c, d, e, f, g, h, k) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l);
      } catch (m) {
        this.onError(m);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b, c, d, e, f, g, h, k) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d, e, f, g, h, k) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = true, Rb = l);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate) for (; b.return; ) b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c) return Xb(e), a;
            if (f === d) return Xb(e), b;
            f = f.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f.child; h; ) {
              if (h === c) {
                g = true;
                c = f;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g) throw Error(p(189));
          }
        }
        if (c.alternate !== d) throw Error(p(190));
      }
      if (3 !== c.tag) throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a; ) {
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {
      }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b) {
      var c = a.pendingLanes;
      if (0 === c) return 0;
      var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
      } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
      if (0 === d) return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function vc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b) {
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
        var g = 31 - oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
          if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b = [], c = 0; 31 > c; c++) b.push(a);
      return b;
    }
    function Ac(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - oc(b);
      a[b] = c;
    }
    function Bc(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d = a.eventTimes;
      for (a = a.expirationTimes; 0 < c; ) {
        var e = 31 - oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
      }
    }
    function Cc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c; ) {
        var d = 31 - oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b.pointerId);
      }
    }
    function Tc(a, b, c, d, e, f) {
      if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function Uc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return Lc = Tc(Lc, a, b, c, d, e), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b, c, d, e), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b, c, d, e), true;
        case "pointerover":
          var f = e.pointerId;
          Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function Vc(a) {
      var b = Wc(a.target);
      if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Wb(c), null !== b) {
              a.blockedOn = b;
              Ic(a.priority, function() {
                Gc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn) return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          wb = d;
          c.target.dispatchEvent(d);
          wb = null;
        } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function Zc(a, b, c) {
      Xc(a) && c.delete(b);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b(b2) {
        return ad(b2, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c = 1; c < Kc.length; c++) {
          var d = Kc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b);
      Pc.forEach(b);
      for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function gd(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function fd(a, b, c, d) {
      if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e) hd(a, b, d, id2, c), Sc(a, d);
        else if (Uc(e, a, b, c, d)) d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e; ) {
            var f = Cb(e);
            null !== f && Ec(f);
            f = Yc(a, b, c, d);
            null === f && hd(a, b, d, id2, c);
            if (f === e) break;
            e = f;
          }
          null !== e && d.stopPropagation();
        } else hd(a, b, d, null, c);
      }
    }
    var id2 = null;
    function Yc(a, b, c, d) {
      id2 = null;
      a = xb(d);
      a = Wc(a);
      if (null !== a) if (b = Vb(a), null === b) a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else b !== a && (a = null);
      id2 = a;
      return null;
    }
    function jd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null, ld = null, md = null;
    function nd() {
      if (md) return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++) ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
      return md = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d, e, f, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A({}, ud, { key: function(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (32 !== b.which) return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length) return b.char;
            if (b.which) return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
    }
    function ne(a, b, c, d) {
      Eb(d);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var pe = null, qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b)) return a;
    }
    function ve(a, b) {
      if ("change" === a) return b;
    }
    var we = false;
    if (ia) {
      var xe;
      if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re, b);
      }
    }
    function Ce(a, b, c) {
      "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
    }
    function Ee(a, b) {
      if ("click" === a) return te(b);
    }
    function Fe(a, b) {
      if ("input" === a || "change" === a) return te(b);
    }
    function Ge(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b) {
      if (He(a, b)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length) return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e])) return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ke(a, b) {
      var c = Je(a);
      a = 0;
      for (var d; c; ) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b) return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Je(c);
      }
    }
    function Le(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
          c = false;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
      }
      return b;
    }
    function Ne(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b = Me(), c = a.focusedElem, d = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && Ne(c)) {
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f = Math.min(d.start, e);
            d = void 0 === d.end ? f : Math.min(d.end, e);
            !a.extend && f > d && (e = d, d = f, f = e);
            e = Ke(c, f);
            var g = Ke(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
    function Ue(a, b, c) {
      var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
    }
    function Ve(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a]) return Xe[a];
      if (!We[a]) return a;
      var b = We[a], c;
      for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
      return a;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b) {
      df.set(a, b);
      fa(b, [a]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Ub(d, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f = void 0;
          if (b) for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k = h.instance, l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
          else for (g = 0; g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b) {
      var c = b[of];
      void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
      var d = a + "__bubble";
      c.has(d) || (pf(b, a, 2, false), c.add(d));
    }
    function qf(a, b, c) {
      var d = 0;
      b && (d |= 4);
      pf(c, a, d, b);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
      }
    }
    function pf(a, b, c, d) {
      switch (jd(b)) {
        case 1:
          var e = ed;
          break;
        case 4:
          e = gd;
          break;
        default:
          e = fd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function hd(a, b, c, d, e) {
      var f = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e) break;
          if (4 === g) for (g = d.return; null !== g; ) {
            var k = g.tag;
            if (3 === k || 4 === k) {
              if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
            }
            g = g.return;
          }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g) return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
      Jb(function() {
        var d2 = f, e2 = xb(c), g2 = [];
        a: {
          var h2 = df.get(a);
          if (void 0 !== h2) {
            var k2 = td, n = a;
            switch (a) {
              case "keypress":
                if (0 === od(c)) break a;
              case "keydown":
              case "keyup":
                k2 = Rd;
                break;
              case "focusin":
                n = "focus";
                k2 = Fd;
                break;
              case "focusout":
                n = "blur";
                k2 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k2 = Fd;
                break;
              case "click":
                if (2 === c.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k2 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k2 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k2 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k2 = Hd;
                break;
              case cf:
                k2 = Xd;
                break;
              case "scroll":
                k2 = vd;
                break;
              case "wheel":
                k2 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k2 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k2 = Td;
            }
            var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
            t = [];
            for (var w = d2, u; null !== w; ) {
              u = w;
              var F = u.stateNode;
              5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
              if (J) break;
              w = w.return;
            }
            0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k2 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
            if (k2 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k2) {
                if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
              } else k2 = null, n = d2;
              if (k2 !== n) {
                t = Bd;
                F = "onMouseLeave";
                x = "onMouseEnter";
                w = "mouse";
                if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                J = null == k2 ? h2 : ue(k2);
                u = null == n ? h2 : ue(n);
                h2 = new t(F, w + "leave", k2, c, e2);
                h2.target = J;
                h2.relatedTarget = u;
                F = null;
                Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
                J = F;
                if (k2 && n) b: {
                  t = k2;
                  x = n;
                  w = 0;
                  for (u = t; u; u = vf(u)) w++;
                  u = 0;
                  for (F = x; F; F = vf(F)) u++;
                  for (; 0 < w - u; ) t = vf(t), w--;
                  for (; 0 < u - w; ) x = vf(x), u--;
                  for (; w--; ) {
                    if (t === x || null !== x && t === x.alternate) break b;
                    t = vf(t);
                    x = vf(x);
                  }
                  t = null;
                }
                else t = null;
                null !== k2 && wf(g2, h2, k2, t, false);
                null !== n && null !== J && wf(g2, J, n, t, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k2 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
            else if (me(h2)) if (we) na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
            else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
            if (na && (na = na(a, d2))) {
              ne(g2, na, c, e2);
              break a;
            }
            xa && xa(a, h2, d2);
            "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
          }
          xa = d2 ? ue(d2) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c, e2);
              break;
            case "selectionchange":
              if (Pe) break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var $a;
          if (ae) b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
          else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
        }
        se(g2, b);
      });
    }
    function tf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; null !== a; ) {
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
        a = a.return;
      }
      return d;
    }
    function vf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b, c, d, e) {
      for (var f = b._reactName, g = []; null !== c && c !== d; ) {
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b, c) {
      b = zf(b);
      if (zf(a) !== b && c) throw Error(p(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b) {
      var c = b, d = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      bd(b);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b) break;
          if ("/$" === b) return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b) return a;
            b--;
          } else "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b = a[Of];
      if (b) return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[uf] || c[Of]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
            if (c = a[Of]) return c;
            a = Mf(a);
          }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b;
    }
    var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a, b) {
      var c = a.type.contextTypes;
      if (!c) return Vf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f;
      for (f in c) e[f] = b[f];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b, c) {
      if (H.current !== Vf) throw Error(p(168));
      G(H, b);
      G(Wf, c);
    }
    function bg(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext) return c;
      d = d.getChildContext();
      for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
      return A({}, c, d);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b, c) {
      var d = a.stateNode;
      if (!d) throw Error(p(169));
      c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c);
    }
    var eg = null, fg = false, gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b = C;
        try {
          var c = eg;
          for (C = 1; a < c.length; a++) {
            var d = c[a];
            do
              d = d(true);
            while (null !== d);
          }
          eg = null;
          fg = false;
        } catch (e) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally {
          C = b, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a, b) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b;
    }
    function ug(a, b, c) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d = rg;
      a = sg;
      var e = 32 - oc(d) - 1;
      d &= ~(1 << e);
      c += 1;
      var f = 32 - oc(b) + e;
      if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f + a;
      } else rg = 1 << f | c << e | d, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I = false, zg = null;
    function Ag(a, b) {
      var c = Bg(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function Cg(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b = yg;
        if (b) {
          var c = b;
          if (!Cg(a, b)) {
            if (Dg(a)) throw Error(p(418));
            b = Lf(c.nextSibling);
            var d = xg;
            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a)) throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg) return false;
      if (!I) return Fg(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a)) throw Hg(), Error(p(418));
        for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b--;
              } else "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; ) a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag) throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d) throw Error(p(147, a));
          var e = d, f = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f] : b2[f] = a2;
          };
          b._stringRef = f;
          return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
      }
      return a;
    }
    function Mg(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b = a._init;
      return b(a._payload);
    }
    function Og(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.deletions;
          null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
        }
      }
      function c(c2, d2) {
        if (!a) return null;
        for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Pg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f(b2, c2, d2) {
        b2.index = d2;
        if (!a) return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k(a2, b2, c2, d2) {
        var f2 = c2.type;
        if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
        d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Lg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function m(a2, b2, c2, d2, f2) {
        if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case va:
              return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
            case wa:
              return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
            case Ha:
              var d2 = b2._init;
              return q(a2, d2(b2._payload), c2);
          }
          if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Mg(a2, b2);
        }
        return null;
      }
      function r2(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case va:
              return c2.key === e2 ? k(a2, b2, c2, d2) : null;
            case wa:
              return c2.key === e2 ? l(a2, b2, c2, d2) : null;
            case Ha:
              return e2 = c2._init, r2(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
          Mg(a2, c2);
        }
        return null;
      }
      function y(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case va:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
            case wa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
            case Ha:
              var f2 = d2._init;
              return y(a2, b2, c2, f2(d2._payload), e2);
          }
          if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
          Mg(b2, d2);
        }
        return null;
      }
      function n(e2, g2, h2, k2) {
        for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
          u.index > w ? (x = u, u = null) : x = u.sibling;
          var n2 = r2(e2, u, h2[w], k2);
          if (null === n2) {
            null === u && (u = x);
            break;
          }
          a && u && null === n2.alternate && b(e2, u);
          g2 = f(n2, g2, w);
          null === m2 ? l2 = n2 : m2.sibling = n2;
          m2 = n2;
          u = x;
        }
        if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
        if (null === u) {
          for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
          I && tg(e2, w);
          return l2;
        }
        for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w);
        return l2;
      }
      function t(e2, g2, h2, k2) {
        var l2 = Ka(h2);
        if ("function" !== typeof l2) throw Error(p(150));
        h2 = l2.call(h2);
        if (null == h2) throw Error(p(151));
        for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
          m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
          var t2 = r2(e2, m2, n2.value, k2);
          if (null === t2) {
            null === m2 && (m2 = x);
            break;
          }
          a && m2 && null === t2.alternate && b(e2, m2);
          g2 = f(t2, g2, w);
          null === u ? l2 = t2 : u.sibling = t2;
          u = t2;
          m2 = x;
        }
        if (n2.done) return c(
          e2,
          m2
        ), I && tg(e2, w), l2;
        if (null === m2) {
          for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          I && tg(e2, w);
          return l2;
        }
        for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        a && m2.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w);
        return l2;
      }
      function J(a2, d2, f2, h2) {
        "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
        if ("object" === typeof f2 && null !== f2) {
          switch (f2.$$typeof) {
            case va:
              a: {
                for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                  if (l2.key === k2) {
                    k2 = f2.type;
                    if (k2 === ya) {
                      if (7 === l2.tag) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props);
                      d2.ref = Lg(a2, l2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l2);
                    break;
                  } else b(a2, l2);
                  l2 = l2.sibling;
                }
                f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case wa:
              a: {
                for (l2 = f2.key; null !== d2; ) {
                  if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                  else b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Sg(f2, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ha:
              return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
          }
          if (eb(f2)) return n(a2, d2, f2, h2);
          if (Ka(f2)) return t(a2, d2, f2, h2);
          Mg(a2, f2);
        }
        return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return J;
    }
    var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b = Wg.current;
      E(Wg);
      a._currentValue = b;
    }
    function bh(a, b, c) {
      for (; null !== a; ) {
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
      }
    }
    function ch(a, b) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b = a._currentValue;
      if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
        if (null === Xg) throw Error(p(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
      return b;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b, c, d) {
      var e = b.interleaved;
      null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
      b.interleaved = c;
      return ih(a, d);
    }
    function ih(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b, c) {
      var d = a.updateQueue;
      if (null === d) return null;
      d = d.shared;
      if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return ih(a, c);
      }
      e = d.interleaved;
      null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
      d.interleaved = b;
      return ih(a, c);
    }
    function oh(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    function ph(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f ? e = f = g : f = f.next = g;
            c = c.next;
          } while (null !== c);
          null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function qh(a, b, c, d) {
      var e = a.updateQueue;
      jh = false;
      var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
      }
      if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
          var r2 = h.lane, y = h.eventTime;
          if ((d & r2) === r2) {
            null !== m && (m = m.next = {
              eventTime: y,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var n = a, t = h;
              r2 = b;
              y = c;
              switch (t.tag) {
                case 1:
                  n = t.payload;
                  if ("function" === typeof n) {
                    q = n.call(y, q, r2);
                    break a;
                  }
                  q = n;
                  break a;
                case 3:
                  n.flags = n.flags & -65537 | 128;
                case 0:
                  n = t.payload;
                  r2 = "function" === typeof n ? n.call(y, q, r2) : n;
                  if (null === r2 || void 0 === r2) break a;
                  q = A({}, q, r2);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
          } else y = { eventTime: y, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r2;
          h = h.next;
          if (null === h) if (h = e.shared.pending, null === h) break;
          else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
        } while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        rh |= g;
        a.lanes = g;
        a.memoizedState = q;
      }
    }
    function sh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a) for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e) throw Error(p(191, e));
          e.call(d);
        }
      }
    }
    var th = {}, uh = Uf(th), vh2 = Uf(th), wh = Uf(th);
    function xh(a) {
      if (a === th) throw Error(p(174));
      return a;
    }
    function yh(a, b) {
      G(wh, b);
      G(vh2, a);
      G(uh, th);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
      }
      E(uh);
      G(uh, b);
    }
    function zh() {
      E(uh);
      E(vh2);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b = xh(uh.current);
      var c = lb(b, a.type);
      b !== c && (G(vh2, a), G(uh, c));
    }
    function Bh(a) {
      vh2.current === a && (E(uh), E(vh2));
    }
    var L = Uf(0);
    function Ch(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
    function P() {
      throw Error(p(321));
    }
    function Mh(a, b) {
      if (null === b) return false;
      for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
      return true;
    }
    function Nh(a, b, c, d, e, f) {
      Hh = f;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c(d, e);
      if (Jh) {
        f = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f) throw Error(p(301));
          f += 1;
          O = N = null;
          b.updateQueue = null;
          Fh.current = Qh;
          a = c(d, e);
        } while (Jh);
      }
      Fh.current = Rh;
      b = null !== N && null !== N.next;
      Hh = 0;
      O = N = M = null;
      Ih = false;
      if (b) throw Error(p(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function Uh() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b) O = b, N = a;
      else {
        if (null === a) throw Error(p(310));
        N = a;
        a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function Vh(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Wh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = N, e = d.baseQueue, f = c.pending;
      if (null !== f) {
        if (null !== e) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
      }
      if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
          var m = l.lane;
          if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
          else {
            var q = {
              lane: m,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null
            };
            null === k ? (h = k = q, g = d) : k = k.next = q;
            M.lanes |= m;
            rh |= m;
          }
          l = l.next;
        } while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        He(d, b.memoizedState) || (dh = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f = e.lane, M.lanes |= f, rh |= f, e = e.next;
        while (e !== a);
      } else null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function Xh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f = a(f, g.action), g = g.next;
        while (g !== e);
        He(f, b.memoizedState) || (dh = true);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d];
    }
    function Yh() {
    }
    function Zh(a, b) {
      var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
      f && (d.memoizedState = e, dh = true);
      d = d.queue;
      $h(ai.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        bi(9, ci.bind(null, c, d, e, b), void 0, null);
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(c, b, e);
      }
      return e;
    }
    function di(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function ci(a, b, c, d) {
      b.value = c;
      b.getSnapshot = d;
      ei(b) && fi(a);
    }
    function ai(a, b, c) {
      return c(function() {
        ei(b) && fi(a);
      });
    }
    function ei(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !He(a, c);
      } catch (d) {
        return true;
      }
    }
    function fi(a) {
      var b = ih(a, 1);
      null !== b && gi(b, a, 1, -1);
    }
    function hi(a) {
      var b = Th();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = ii.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function bi(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function ji() {
      return Uh().memoizedState;
    }
    function ki(a, b, c, d) {
      var e = Th();
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function li(a, b, c, d) {
      var e = Uh();
      d = void 0 === d ? null : d;
      var f = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f = g.destroy;
        if (null !== d && Mh(d, g.deps)) {
          e.memoizedState = bi(b, c, f, d);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, f, d);
    }
    function mi(a, b) {
      return ki(8390656, 8, a, b);
    }
    function $h(a, b) {
      return li(2048, 8, a, b);
    }
    function ni(a, b) {
      return li(4, 2, a, b);
    }
    function oi(a, b) {
      return li(4, 4, a, b);
    }
    function pi(a, b) {
      if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
      };
      if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
      };
    }
    function qi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return li(4, 4, pi.bind(null, b, a), c);
    }
    function ri() {
    }
    function si(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ti(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function ui(a, b, c) {
      if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
      He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
      return b;
    }
    function vi(a, b) {
      var c = C;
      C = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b();
      } finally {
        C = c, Gh.transition = d;
      }
    }
    function wi() {
      return Uh().memoizedState;
    }
    function xi(a, b, c) {
      var d = yi(a);
      c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, c);
      else if (c = hh(a, b, c, d), null !== c) {
        var e = R();
        gi(c, a, d, e);
        Bi(c, b, d);
      }
    }
    function ii(a, b, c) {
      var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, e);
      else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
          var g = b.lastRenderedState, h = f(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k = b.interleaved;
            null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l) {
        } finally {
        }
        c = hh(a, b, e, d);
        null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
      }
    }
    function zi(a) {
      var b = a.alternate;
      return a === M || null !== b && b === M;
    }
    function Ai(a, b) {
      Jh = Ih = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Bi(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
      Th().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ki(
        4194308,
        4,
        pi.bind(null, b, a),
        c
      );
    }, useLayoutEffect: function(a, b) {
      return ki(4194308, 4, a, b);
    }, useInsertionEffect: function(a, b) {
      return ki(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = Th();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = Th();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      d.queue = a;
      a = a.dispatch = xi.bind(null, M, a);
      return [d.memoizedState, a];
    }, useRef: function(a) {
      var b = Th();
      a = { current: a };
      return b.memoizedState = a;
    }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
      return Th().memoizedState = a;
    }, useTransition: function() {
      var a = hi(false), b = a[0];
      a = vi.bind(null, a[1]);
      Th().memoizedState = a;
      return [b, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b, c) {
      var d = M, e = Th();
      if (I) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(d, b, c);
      }
      e.memoizedState = c;
      var f = { value: c, getSnapshot: b };
      e.queue = f;
      mi(ai.bind(
        null,
        d,
        f,
        a
      ), [a]);
      d.flags |= 2048;
      bi(9, ci.bind(null, d, f, c, b), void 0, null);
      return c;
    }, useId: function() {
      var a = Th(), b = Q.identifierPrefix;
      if (I) {
        var c = sg;
        var d = rg;
        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Kh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false }, Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function() {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function(a) {
        var b = Uh();
        return ui(b, N.memoizedState, a);
      },
      useTransition: function() {
        var a = Wh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false
    }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
      return Xh(Vh);
    }, useDebugValue: ri, useDeferredValue: function(a) {
      var b = Uh();
      return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
    }, useTransition: function() {
      var a = Xh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
    function Ci(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Di(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : A({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var Ei = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = R(), d = yi(a), e = mh(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = nh(a, e, d);
      null !== b && (gi(b, a, d, c), oh(b, a, d));
    } };
    function Fi(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
    }
    function Gi(a, b, c) {
      var d = false, e = Vf;
      var f = b.contextType;
      "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
      b = new b(c, f);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Ei;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }
    function Hi(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
    }
    function Ii(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = {};
      kh(a);
      var f = b.contextType;
      "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b) {
      try {
        var c = "", d = b;
        do
          c += Pa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return { value: a, source: b, stack: e, digest: null };
    }
    function Ki(a, b, c) {
      return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
    }
    function Li(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Mi = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function() {
        Oi || (Oi = true, Pi = d);
        Li(a, b);
      };
      return c;
    }
    function Qi(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
          return d(e);
        };
        c.callback = function() {
          Li(a, b);
        };
      }
      var f = a.stateNode;
      null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        Li(a, b);
        "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function Si(a, b, c) {
      var d = a.pingCache;
      if (null === d) {
        d = a.pingCache = new Mi();
        var e = /* @__PURE__ */ new Set();
        d.set(b, e);
      } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
    }
    function Ui(a) {
      do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b, c, d, e) {
      if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Wi = ua.ReactCurrentOwner, dh = false;
    function Xi(a, b, c, d) {
      b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
    }
    function Yi(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      ch(b, e);
      d = Nh(a, b, c, d, f, e);
      c = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && c && vg(b);
      b.flags |= 1;
      Xi(a, b, d, e);
      return b.child;
    }
    function $i(a, b, c, d, e) {
      if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
        a = Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f = a.child;
      if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
      }
      b.flags |= 1;
      a = Pg(f, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function bj(a, b, c, d, e) {
      if (null !== a) {
        var f = a.memoizedProps;
        if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
        else return b.lanes = a.lanes, Zi(a, b, e);
      }
      return cj(a, b, c, d, e);
    }
    function dj(a, b, c) {
      var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
      else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f ? f.baseLanes : c;
        G(ej, fj);
        fj |= d;
      }
      else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
      Xi(a, b, e, c);
      return b.child;
    }
    function gj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
    }
    function cj(a, b, c, d, e) {
      var f = Zf(c) ? Xf : H.current;
      f = Yf(b, f);
      ch(b, e);
      c = Nh(a, b, c, d, f, e);
      d = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && d && vg(b);
      b.flags |= 1;
      Xi(a, b, c, e);
      return b.child;
    }
    function hj(a, b, c, d, e) {
      if (Zf(c)) {
        var f = true;
        cg(b);
      } else f = false;
      ch(b, e);
      if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
        jh = false;
        var r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r2 !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        lh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : Ci(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r2 = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r2 !== k) && Hi(b, g, d, k);
        jh = false;
        r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r2 !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r2, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return jj(a, b, c, d, f, e);
    }
    function jj(a, b, c, d, e, f) {
      gj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
      d = b.stateNode;
      Wi.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
      b.memoizedState = d.state;
      e && dg(b, c, true);
      return b.child;
    }
    function kj(a) {
      var b = a.stateNode;
      b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
      yh(a, b.containerInfo);
    }
    function lj(a, b, c, d, e) {
      Ig();
      Jg(e);
      b.flags |= 256;
      Xi(a, b, c, d);
      return b.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b, c) {
      var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h) f = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState) e |= 1;
      G(L, e & 1);
      if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
      }
      e = a.memoizedState;
      if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
      if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = { mode: "hidden", children: d.children };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = mj;
        return d;
      }
      f = a.child;
      a = f.sibling;
      d = Pg(f, { mode: "visible", children: d.children });
      0 === (b.mode & 1) && (d.lanes = c);
      d.return = b;
      d.sibling = null;
      null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
      b.child = d;
      b.memoizedState = null;
      return d;
    }
    function qj(a, b) {
      b = pj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function sj(a, b, c, d) {
      null !== d && Jg(d);
      Ug(b, a.child, null, c);
      a = qj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function rj(a, b, c, d, e, f, g) {
      if (c) {
        if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = pj({ mode: "visible", children: d.children }, e, 0, null);
        f = Tg(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && Ug(b, a.child, null, g);
        b.child.memoizedState = nj(g);
        b.memoizedState = mj;
        return f;
      }
      if (0 === (b.mode & 1)) return sj(a, b, g, null);
      if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error(p(419));
        d = Ki(f, d, void 0);
        return sj(a, b, g, d);
      }
      h = 0 !== (g & a.childLanes);
      if (dh || h) {
        d = Q;
        if (null !== d) {
          switch (g & -g) {
            case 4:
              e = 2;
              break;
            case 16:
              e = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e = 32;
              break;
            case 536870912:
              e = 268435456;
              break;
            default:
              e = 0;
          }
          e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
          0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
        }
        tj();
        d = Ki(Error(p(421)));
        return sj(a, b, g, d);
      }
      if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
      a = f.treeContext;
      yg = Lf(e.nextSibling);
      xg = b;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
      b = qj(b, d.children);
      b.flags |= 4096;
      return b;
    }
    function vj(a, b, c) {
      a.lanes |= b;
      var d = a.alternate;
      null !== d && (d.lanes |= b);
      bh(a.return, b, c);
    }
    function wj(a, b, c, d, e) {
      var f = a.memoizedState;
      null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
    }
    function xj(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f = d.tail;
      Xi(a, b, d.children, c);
      d = L.current;
      if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
          else if (19 === a.tag) vj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d &= 1;
      }
      G(L, d);
      if (0 === (b.mode & 1)) b.memoizedState = null;
      else switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          wj(b, false, e, c, f);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Ch(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f);
          break;
        case "together":
          wj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
      return b.child;
    }
    function ij(a, b) {
      0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function Zi(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      rh |= b.lanes;
      if (0 === (c & b.childLanes)) return null;
      if (null !== a && b.child !== a.child) throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = Pg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function yj(a, b, c) {
      switch (b.tag) {
        case 3:
          kj(b);
          Ig();
          break;
        case 5:
          Ah(b);
          break;
        case 1:
          Zf(b.type) && cg(b);
          break;
        case 4:
          yh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d = b.type._context, e = b.memoizedProps.value;
          G(Wg, d._currentValue);
          d._currentValue = e;
          break;
        case 13:
          d = b.memoizedState;
          if (null !== d) {
            if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
            G(L, L.current & 1);
            a = Zi(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d) return xj(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(L, L.current);
          if (d) break;
          else return null;
        case 22:
        case 23:
          return b.lanes = 0, dj(a, b, c);
      }
      return Zi(a, b, c);
    }
    var zj, Aj, Bj, Cj;
    zj = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b) break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Aj = function() {
    };
    Bj = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        xh(uh.current);
        var f = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f = [];
            break;
          case "select":
            e = A({}, e, { value: void 0 });
            d = A({}, d, { value: void 0 });
            f = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
          var h = e[l];
          for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for (l in d) {
          var k = d[l];
          h = null != e ? e[l] : void 0;
          if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else c || (f || (f = []), f.push(
            l,
            c
          )), c = k;
          else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
      }
    };
    Cj = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Dj(a, b) {
      if (!I) switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d;
      a.childLanes = c;
      return b;
    }
    function Ej(a, b, c) {
      var d = b.pendingProps;
      wg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b), null;
        case 1:
          return Zf(b.type) && $f(), S(b), null;
        case 3:
          d = b.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b);
          S(b);
          return null;
        case 5:
          Bh(b);
          var e = xh(wh.current);
          c = b.type;
          if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode) throw Error(p(166));
              S(b);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.type;
              var f = b.memoizedProps;
              d[Of] = b;
              d[Pf] = f;
              a = 0 !== (b.mode & 1);
              switch (c) {
                case "dialog":
                  D("cancel", d);
                  D("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], d);
                  break;
                case "source":
                  D("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d
                  );
                  D("load", d);
                  break;
                case "details":
                  D("toggle", d);
                  break;
                case "input":
                  Za(d, f);
                  D("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f.multiple };
                  D("invalid", d);
                  break;
                case "textarea":
                  hb(d, f), D("invalid", d);
              }
              ub(c, f);
              e = null;
              for (var g in f) if (f.hasOwnProperty(g)) {
                var h = f[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                  d.textContent,
                  h,
                  a
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
              }
              switch (c) {
                case "input":
                  Va(d);
                  db(d, f, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f.onClick && (d.onclick = Bf);
              }
              d = e;
              b.updateQueue = d;
              null !== d && (b.flags |= 4);
            } else {
              g = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[Of] = b;
              a[Pf] = d;
              zj(a, b, false, false);
              b.stateNode = a;
              a: {
                g = vb(c, d);
                switch (c) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                    e = d;
                    break;
                  case "source":
                    D("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e = d;
                    break;
                  case "details":
                    D("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Za(a, d);
                    e = Ya(a, d);
                    D("invalid", a);
                    break;
                  case "option":
                    e = d;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = A({}, d, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d);
                    e = gb(a, d);
                    D("invalid", a);
                    break;
                  default:
                    e = d;
                }
                ub(c, e);
                h = e;
                for (f in h) if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                }
                switch (c) {
                  case "input":
                    Va(a);
                    db(a, d, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f = d.value;
                    null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                      a,
                      !!d.multiple,
                      d.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Bf);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d = !!d.autoFocus;
                    break a;
                  case "img":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              }
              d && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
            c = xh(wh.current);
            xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.memoizedProps;
              d[Of] = b;
              if (f = d.nodeValue !== c) {
                if (a = xg, null !== a) switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
              }
              f && (b.flags |= 4);
            } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
          }
          S(b);
          return null;
        case 13:
          E(L);
          d = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
            else if (f = Gg(b), null !== d && null !== d.dehydrated) {
              if (null === a) {
                if (!f) throw Error(p(318));
                f = b.memoizedState;
                f = null !== f ? f.dehydrated : null;
                if (!f) throw Error(p(317));
                f[Of] = b;
              } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S(b);
              f = false;
            } else null !== zg && (Fj(zg), zg = null), f = true;
            if (!f) return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128)) return b.lanes = c, b;
          d = null !== d;
          d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          return null;
        case 4:
          return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return ah(b.type._context), S(b), null;
        case 17:
          return Zf(b.type) && $f(), S(b), null;
        case 19:
          E(L);
          f = b.memoizedState;
          if (null === f) return S(b), null;
          d = 0 !== (b.flags & 128);
          g = f.rendering;
          if (null === g) if (d) Dj(f, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
              g = Ch(a);
              if (null !== g) {
                b.flags |= 128;
                Dj(f, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(L, L.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          }
          else {
            if (!d) if (a = Ch(g), null !== a) {
              if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
            } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
          }
          if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b.tag));
    }
    function Ij(a, b) {
      wg(b);
      switch (b.tag) {
        case 1:
          return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
          return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Bh(b), null;
        case 13:
          E(L);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate) throw Error(p(340));
            Ig();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
          return E(L), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
    function Lj(a, b) {
      var c = a.ref;
      if (null !== c) if ("function" === typeof c) try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
      else c.current = null;
    }
    function Mj(a, b, c) {
      try {
        c();
      } catch (d) {
        W(a, b, d);
      }
    }
    var Nj = false;
    function Oj(a, b) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f.nodeType;
            } catch (F) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r2 = null;
            b: for (; ; ) {
              for (var y; ; ) {
                q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                3 === q.nodeType && (g += q.nodeValue.length);
                if (null === (y = q.firstChild)) break;
                r2 = q;
                q = y;
              }
              for (; ; ) {
                if (q === a) break b;
                r2 === c && ++l === e && (h = g);
                r2 === f && ++m === d && (k = g);
                if (null !== (y = q.nextSibling)) break;
                q = r2;
                r2 = q.parentNode;
              }
              q = y;
            }
            c = -1 === h || -1 === k ? null : { start: h, end: k };
          } else c = null;
        }
        c = c || { start: 0, end: 0 };
      } else c = null;
      Df = { focusedElem: a, selectionRange: c };
      dd = false;
      for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
      else for (; null !== V; ) {
        b = V;
        try {
          var n = b.alternate;
          if (0 !== (b.flags & 1024)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== n) {
                var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                x.__reactInternalSnapshotBeforeUpdate = w;
              }
              break;
            case 3:
              var u = b.stateNode.containerInfo;
              1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p(163));
          }
        } catch (F) {
          W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
      n = Nj;
      Nj = false;
      return n;
    }
    function Pj(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f = e.destroy;
            e.destroy = void 0;
            void 0 !== f && Mj(b, c, f);
          }
          e = e.next;
        } while (e !== d);
      }
    }
    function Qj(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = b = b.next;
        do {
          if ((c.tag & a) === a) {
            var d = c.create;
            c.destroy = d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Rj(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c;
            break;
          default:
            a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
      }
    }
    function Sj(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Sj(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a: for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Tj(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Vj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
    }
    function Wj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
    }
    var X2 = null, Xj = false;
    function Yj(a, b, c) {
      for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
    }
    function Zj(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
      switch (c.tag) {
        case 5:
          U || Lj(c, b);
        case 6:
          var d = X2, e = Xj;
          X2 = null;
          Yj(a, b, c);
          X2 = d;
          Xj = e;
          null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
          break;
        case 18:
          null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X2, c.stateNode));
          break;
        case 4:
          d = X2;
          e = Xj;
          X2 = c.stateNode.containerInfo;
          Xj = true;
          Yj(a, b, c);
          X2 = d;
          Xj = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
            e = d = d.next;
            do {
              var f = e, g = f.destroy;
              f = f.tag;
              void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
              e = e.next;
            } while (e !== d);
          }
          Yj(a, b, c);
          break;
        case 1:
          if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
          Yj(a, b, c);
          break;
        case 21:
          Yj(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
          break;
        default:
          Yj(a, b, c);
      }
    }
    function ak(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Kj());
        b.forEach(function(b2) {
          var d = bk.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function ck(a, b) {
      var c = b.deletions;
      if (null !== c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f = a, g = b, h = g;
          a: for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X2 = h.stateNode;
                Xj = false;
                break a;
              case 3:
                X2 = h.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X2 = h.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h = h.return;
          }
          if (null === X2) throw Error(p(160));
          Zj(f, g, e);
          X2 = null;
          Xj = false;
          var k = e.alternate;
          null !== k && (k.return = null);
          e.return = null;
        } catch (l) {
          W(e, b, l);
        }
      }
      if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
    }
    function dk(a, b) {
      var c = a.alternate, d = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b, a);
          ek(a);
          if (d & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t) {
              W(a, a.return, t);
            }
            try {
              Pj(5, a, a.return);
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 1:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          break;
        case 5:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              ob(e, "");
            } catch (t) {
              W(a, a.return, t);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
            a.updateQueue = null;
            if (null !== k) try {
              "input" === h && "radio" === f.type && null != f.name && ab(e, f);
              vb(h, g);
              var l = vb(h, f);
              for (g = 0; g < k.length; g += 2) {
                var m = k[g], q = k[g + 1];
                "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
              }
              switch (h) {
                case "input":
                  bb(e, f);
                  break;
                case "textarea":
                  ib(e, f);
                  break;
                case "select":
                  var r2 = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f.multiple;
                  var y = f.value;
                  null != y ? fb(e, !!f.multiple, y, false) : r2 !== !!f.multiple && (null != f.defaultValue ? fb(
                    e,
                    !!f.multiple,
                    f.defaultValue,
                    true
                  ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
              }
              e[Pf] = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 6:
          ck(b, a);
          ek(a);
          if (d & 4) {
            if (null === a.stateNode) throw Error(p(162));
            e = a.stateNode;
            f = a.memoizedProps;
            try {
              e.nodeValue = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 3:
          ck(b, a);
          ek(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
            bd(b.containerInfo);
          } catch (t) {
            W(a, a.return, t);
          }
          break;
        case 4:
          ck(b, a);
          ek(a);
          break;
        case 13:
          ck(b, a);
          ek(a);
          e = a.child;
          e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
          d & 4 && ak(a);
          break;
        case 22:
          m = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
          ek(a);
          if (d & 8192) {
            l = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
              for (q = V = m; null !== V; ) {
                r2 = V;
                y = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r2, r2.return);
                    break;
                  case 1:
                    Lj(r2, r2.return);
                    var n = r2.stateNode;
                    if ("function" === typeof n.componentWillUnmount) {
                      d = r2;
                      c = r2.return;
                      try {
                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                      } catch (t) {
                        W(d, c, t);
                      }
                    }
                    break;
                  case 5:
                    Lj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      gk(q);
                      continue;
                    }
                }
                null !== y ? (y.return = r2, V = y) : gk(q);
              }
              m = m.sibling;
            }
            a: for (m = null, q = a; ; ) {
              if (5 === q.tag) {
                if (null === m) {
                  m = q;
                  try {
                    e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                  } catch (t) {
                    W(a, a.return, t);
                  }
                }
              } else if (6 === q.tag) {
                if (null === m) try {
                  q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                } catch (t) {
                  W(a, a.return, t);
                }
              } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                q.child.return = q;
                q = q.child;
                continue;
              }
              if (q === a) break a;
              for (; null === q.sibling; ) {
                if (null === q.return || q.return === a) break a;
                m === q && (m = null);
                q = q.return;
              }
              m === q && (m = null);
              q.sibling.return = q.return;
              q = q.sibling;
            }
          }
          break;
        case 19:
          ck(b, a);
          ek(a);
          d & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c; ) {
              if (Tj(c)) {
                var d = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (ob(e, ""), d.flags &= -33);
              var f = Uj(a);
              Wj(a, f, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Uj(a);
              Vj(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k) {
          W(a, a.return, k);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function hk(a, b, c) {
      V = a;
      ik(a);
    }
    function ik(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== V; ) {
        var e = V, f = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || Jj;
          if (!g) {
            var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
            h = Jj;
            var l = U;
            Jj = g;
            if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
            for (; null !== f; ) V = f, ik(f), f = f.sibling;
            V = e;
            Jj = h;
            U = l;
          }
          kk(a);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b = V;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
                var f = b.updateQueue;
                null !== f && sh(b, f, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child) switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && c.focus();
                      break;
                    case "img":
                      k.src && (c.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l = b.alternate;
                  if (null !== l) {
                    var m = l.memoizedState;
                    if (null !== m) {
                      var q = m.dehydrated;
                      null !== q && bd(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
            U || b.flags & 512 && Rj(b);
          } catch (r2) {
            W(b, b.return, r2);
          }
        }
        if (b === a) {
          V = null;
          break;
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function gk(a) {
      for (; null !== V; ) {
        var b = V;
        if (b === a) {
          V = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function jk(a) {
      for (; null !== V; ) {
        var b = V;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c = b.return;
              try {
                Qj(4, b);
              } catch (k) {
                W(b, c, k);
              }
              break;
            case 1:
              var d = b.stateNode;
              if ("function" === typeof d.componentDidMount) {
                var e = b.return;
                try {
                  d.componentDidMount();
                } catch (k) {
                  W(b, e, k);
                }
              }
              var f = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, f, k);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, g, k);
              }
          }
        } catch (k) {
          W(b, b.return, k);
        }
        if (b === a) {
          V = null;
          break;
        }
        var h = b.sibling;
        if (null !== h) {
          h.return = b.return;
          V = h;
          break;
        }
        V = b.return;
      }
    }
    var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
      if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b, c, d) {
      if (50 < yk) throw yk = 0, zk = null, Error(p(185));
      Ac(a, c, d);
      if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b) {
      var c = a.callbackNode;
      wc(a, b);
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          0 === (K & 6) && jg();
        }), c = null;
        else {
          switch (Dc(d)) {
            case 1:
              c = fc;
              break;
            case 4:
              c = gc;
              break;
            case 16:
              c = hc;
              break;
            case 536870912:
              c = jc;
              break;
            default:
              c = hc;
          }
          c = Fk(c, Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Gk(a, b) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K & 6)) throw Error(p(327));
      var c = a.callbackNode;
      if (Hk() && a.callbackNode !== c) return null;
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
      else {
        b = d;
        var e = K;
        K |= 2;
        var f = Jk();
        if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
        do
          try {
            Lk();
            break;
          } catch (h) {
            Mk(a, h);
          }
        while (1);
        $g();
        mk.current = f;
        K = e;
        null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
      }
      if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
        if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        if (6 === b) Ck(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          a.finishedWork = e;
          a.finishedLanes = d;
          switch (b) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d);
              if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                if (0 !== uc(a, 0)) break;
                e = a.suspendedLanes;
                if ((e & d) !== d) {
                  R();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d);
              if ((d & 4194240) === d) break;
              b = a.eventTimes;
              for (e = -1; 0 < d; ) {
                var g = 31 - oc(d);
                f = 1 << g;
                g = b[g];
                g > e && (e = g);
                d &= ~f;
              }
              d = e;
              d = B() - d;
              d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
              if (10 < d) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c ? Gk.bind(null, a) : null;
    }
    function Nk(a, b) {
      var c = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
      a = Ik(a, b);
      2 !== a && (b = tk, tk = c, null !== b && Fj(b));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b = a; ; ) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
            var e = c[d], f = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f(), e)) return false;
            } catch (g) {
              return false;
            }
          }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Ck(a, b) {
      b &= ~rk;
      b &= ~qk;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Ek(a) {
      if (0 !== (K & 6)) throw Error(p(327));
      Hk();
      var b = uc(a, 0);
      if (0 === (b & 1)) return Dk(a, B()), null;
      var c = Ik(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Nk(a, d));
      }
      if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
      if (6 === c) throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b) {
      var c = K;
      K |= 1;
      try {
        return a(b);
      } finally {
        K = c, 0 === K && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
      var b = K;
      K |= 1;
      var c = ok.transition, d = C;
      try {
        if (ok.transition = null, C = 1, a) return a();
      } finally {
        C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Gf(c));
      if (null !== Y) for (c = Y.return; null !== c; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
      Q = a;
      Y = a = Pg(a.current, null);
      Z = fj = b;
      T = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f = c.pending;
          if (null !== f) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }
          c.pending = d;
        }
        fh = null;
      }
      return a;
    }
    function Mk(a, b) {
      do {
        var c = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d = M.memoizedState; null !== d; ) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }
            Ih = false;
          }
          Hh = 0;
          O = N = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c || null === c.return) {
            T = 1;
            pk = b;
            Y = null;
            break;
          }
          a: {
            var f = a, g = c.return, h = c, k = b;
            b = Z;
            h.flags |= 32768;
            if (null !== k && "object" === typeof k && "function" === typeof k.then) {
              var l = k, m = h, q = m.tag;
              if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                var r2 = m.alternate;
                r2 ? (m.updateQueue = r2.updateQueue, m.memoizedState = r2.memoizedState, m.lanes = r2.lanes) : (m.updateQueue = null, m.memoizedState = null);
              }
              var y = Ui(g);
              if (null !== y) {
                y.flags &= -257;
                Vi(y, g, h, f, b);
                y.mode & 1 && Si(f, l, b);
                b = y;
                k = l;
                var n = b.updateQueue;
                if (null === n) {
                  var t = /* @__PURE__ */ new Set();
                  t.add(k);
                  b.updateQueue = t;
                } else n.add(k);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Si(f, l, b);
                  tj();
                  break a;
                }
                k = Error(p(426));
              }
            } else if (I && h.mode & 1) {
              var J = Ui(g);
              if (null !== J) {
                0 === (J.flags & 65536) && (J.flags |= 256);
                Vi(J, g, h, f, b);
                Jg(Ji(k, h));
                break a;
              }
            }
            f = k = Ji(k, h);
            4 !== T && (T = 2);
            null === sk ? sk = [f] : sk.push(f);
            f = g;
            do {
              switch (f.tag) {
                case 3:
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var x = Ni(f, k, b);
                  ph(f, x);
                  break a;
                case 1:
                  h = k;
                  var w = f.type, u = f.stateNode;
                  if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var F = Qi(f, h, b);
                    ph(f, F);
                    break a;
                  }
              }
              f = f.return;
            } while (null !== f);
          }
          Sk(c);
        } catch (na) {
          b = na;
          Y === c && null !== c && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b) {
      var c = K;
      K |= 2;
      var d = Jk();
      if (Q !== a || Z !== b) uk = null, Kk(a, b);
      do
        try {
          Tk();
          break;
        } catch (e) {
          Mk(a, e);
        }
      while (1);
      $g();
      K = c;
      mk.current = d;
      if (null !== Y) throw Error(p(261));
      Q = null;
      Z = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y; ) Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); ) Uk(Y);
    }
    function Uk(a) {
      var b = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b ? Sk(a) : Y = b;
      nk.current = null;
    }
    function Sk(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (c = Ej(c, b, fj), null !== c) {
            Y = c;
            return;
          }
        } else {
          c = Ij(c, b);
          if (null !== c) {
            c.flags &= 32767;
            Y = c;
            return;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (null !== b);
      0 === T && (T = 5);
    }
    function Pk(a, b, c) {
      var d = C, e = ok.transition;
      try {
        ok.transition = null, C = 1, Wk(a, b, c, d);
      } finally {
        ok.transition = e, C = d;
      }
      return null;
    }
    function Wk(a, b, c, d) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K & 6)) throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c) return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current) throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f = c.lanes | c.childLanes;
      Bc(a, f);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f) {
        f = ok.transition;
        ok.transition = null;
        var g = C;
        C = 1;
        var h = K;
        K |= 4;
        nk.current = null;
        Oj(a, c);
        dk(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        hk(c);
        dc();
        K = h;
        C = g;
        ok.transition = f;
      } else a.current = c;
      vk && (vk = false, wk = a, xk = e);
      f = a.pendingLanes;
      0 === f && (Ri = null);
      mc(c.stateNode);
      Dk(a, B());
      if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
      if (Oi) throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f = a.pendingLanes;
      0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b = ok.transition, c = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk) var d = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6)) throw Error(p(331));
            var e = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f = V, g = f.child;
              if (0 !== (V.flags & 16)) {
                var h = f.deletions;
                if (null !== h) {
                  for (var k = 0; k < h.length; k++) {
                    var l = h[k];
                    for (V = l; null !== V; ) {
                      var m = V;
                      switch (m.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m, f);
                      }
                      var q = m.child;
                      if (null !== q) q.return = m, V = q;
                      else for (; null !== V; ) {
                        m = V;
                        var r2 = m.sibling, y = m.return;
                        Sj(m);
                        if (m === l) {
                          V = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y;
                          V = r2;
                          break;
                        }
                        V = y;
                      }
                    }
                  }
                  var n = f.alternate;
                  if (null !== n) {
                    var t = n.child;
                    if (null !== t) {
                      n.child = null;
                      do {
                        var J = t.sibling;
                        t.sibling = null;
                        t = J;
                      } while (null !== t);
                    }
                  }
                  V = f;
                }
              }
              if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
              else b: for (; null !== V; ) {
                f = V;
                if (0 !== (f.flags & 2048)) switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, f, f.return);
                }
                var x = f.sibling;
                if (null !== x) {
                  x.return = f.return;
                  V = x;
                  break b;
                }
                V = f.return;
              }
            }
            var w = a.current;
            for (V = w; null !== V; ) {
              g = V;
              var u = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
              else b: for (g = w; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048)) try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h);
                  }
                } catch (na) {
                  W(h, h.return, na);
                }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F = h.sibling;
                if (null !== F) {
                  F.return = h.return;
                  V = F;
                  break b;
                }
                V = h.return;
              }
            }
            K = e;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
            d = true;
          }
          return d;
        } finally {
          C = c, ok.transition = b;
        }
      }
      return false;
    }
    function Xk(a, b, c) {
      b = Ji(c, b);
      b = Ni(a, b, 1);
      a = nh(a, b, 1);
      b = R();
      null !== a && (Ac(a, 1, b), Dk(a, b));
    }
    function W(a, b, c) {
      if (3 === a.tag) Xk(a, a, c);
      else for (; null !== b; ) {
        if (3 === b.tag) {
          Xk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R();
            null !== b && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
    }
    function Ti(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      b = R();
      a.pingedLanes |= a.suspendedLanes & c;
      Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
      Dk(a, b);
    }
    function Yk(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c = R();
      a = ih(a, b);
      null !== a && (Ac(a, b, c), Dk(a, c));
    }
    function uj(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Yk(a, c);
    }
    function bk(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d && d.delete(b);
      Yk(a, c);
    }
    var Vk;
    Vk = function(a, b, c) {
      if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
      else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          ij(a, b);
          a = b.pendingProps;
          var e = Yf(b, H.current);
          ch(b, c);
          e = Nh(null, b, d, a, e, c);
          var f = Sh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
          return b;
        case 16:
          d = b.elementType;
          a: {
            ij(a, b);
            a = b.pendingProps;
            e = d._init;
            d = e(d._payload);
            b.type = d;
            e = b.tag = Zk(d);
            a = Ci(d, a);
            switch (e) {
              case 0:
                b = cj(null, b, d, a, c);
                break a;
              case 1:
                b = hj(null, b, d, a, c);
                break a;
              case 11:
                b = Yi(null, b, d, a, c);
                break a;
              case 14:
                b = $i(null, b, d, Ci(d.type, a), c);
                break a;
            }
            throw Error(p(
              306,
              d,
              ""
            ));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
        case 3:
          a: {
            kj(b);
            if (null === a) throw Error(p(387));
            d = b.pendingProps;
            f = b.memoizedState;
            e = f.element;
            lh(a, b);
            qh(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = Ji(Error(p(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              Ig();
              if (d === e) {
                b = Zi(a, b, c);
                break a;
              }
              Xi(a, b, d, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
        case 6:
          return null === a && Eg(b), null;
        case 13:
          return oj(a, b, c);
        case 4:
          return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
        case 7:
          return Xi(a, b, b.pendingProps, c), b.child;
        case 8:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            f = b.memoizedProps;
            g = e.value;
            G(Wg, d._currentValue);
            d._currentValue = g;
            if (null !== f) if (He(f.value, g)) {
              if (f.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
              var h = f.dependencies;
              if (null !== h) {
                g = f.child;
                for (var k = h.firstContext; null !== k; ) {
                  if (k.context === d) {
                    if (1 === f.tag) {
                      k = mh(-1, c & -c);
                      k.tag = 2;
                      var l = f.updateQueue;
                      if (null !== l) {
                        l = l.shared;
                        var m = l.pending;
                        null === m ? k.next = k : (k.next = m.next, m.next = k);
                        l.pending = k;
                      }
                    }
                    f.lanes |= c;
                    k = f.alternate;
                    null !== k && (k.lanes |= c);
                    bh(
                      f.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k = k.next;
                }
              } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
              else if (18 === f.tag) {
                g = f.return;
                if (null === g) throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                bh(g, c, b);
                g = f.sibling;
              } else g = f.child;
              if (null !== g) g.return = f;
              else for (g = f; null !== g; ) {
                if (g === b) {
                  g = null;
                  break;
                }
                f = g.sibling;
                if (null !== f) {
                  f.return = g.return;
                  g = f;
                  break;
                }
                g = g.return;
              }
              f = g;
            }
            Xi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
        case 14:
          return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
        case 15:
          return bj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
        case 19:
          return xj(a, b, c);
        case 22:
          return dj(a, b, c);
      }
      throw Error(p(156, b.tag));
    };
    function Fk(a, b) {
      return ac(a, b);
    }
    function $k(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b, c, d) {
      return new $k(a, b, c, d);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a) return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function Pg(a, b) {
      var c = a.alternate;
      null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Rg(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if ("function" === typeof a) aj(a) && (g = 1);
      else if ("string" === typeof a) g = 5;
      else a: switch (a) {
        case ya:
          return Tg(c.children, e, f, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
          return pj(c, e, f, b);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g = 10;
              break a;
            case Ca:
              g = 9;
              break a;
            case Da:
              g = 11;
              break a;
            case Ga:
              g = 14;
              break a;
            case Ha:
              g = 16;
              d = null;
              break a;
          }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
      b = Bg(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f;
      return b;
    }
    function Tg(a, b, c, d) {
      a = Bg(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function pj(a, b, c, d) {
      a = Bg(22, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b, c) {
      a = Bg(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Sg(a, b, c) {
      b = Bg(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function al(a, b, c, d, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b, c, d, e, f, g, h, k) {
      a = new al(a, b, c, h, k);
      1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
      f = Bg(3, null, null, b);
      a.current = f;
      f.stateNode = a;
      f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f);
      return a;
    }
    function cl(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function dl(a) {
      if (!a) return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Zf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (Zf(c)) return bg(a, c, b);
      }
      return b;
    }
    function el(a, b, c, d, e, f, g, h, k) {
      a = bl(c, d, true, a, e, f, g, h, k);
      a.context = dl(null);
      c = a.current;
      d = R();
      e = yi(c);
      f = mh(d, e);
      f.callback = void 0 !== b && null !== b ? b : null;
      nh(c, f, e);
      a.current.lanes = e;
      Ac(a, e, d);
      Dk(a, d);
      return a;
    }
    function fl(a, b, c, d) {
      var e = b.current, f = R(), g = yi(e);
      c = dl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = mh(f, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      a = nh(e, b, g);
      null !== a && (gi(a, e, g, f), oh(a, e, g));
      return g;
    }
    function gl(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function il(a, b) {
      hl(a, b);
      (a = a.alternate) && hl(a, b);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function(a) {
      var b = this._internalRoot;
      if (null === b) throw Error(p(409));
      fl(a, b, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Rk(function() {
          fl(null, a, null, null);
        });
        b[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b = Hc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b, c, d, e) {
      if (e) {
        if ("function" === typeof d) {
          var f = d;
          d = function() {
            var a2 = gl(g);
            f.call(a2);
          };
        }
        var g = el(b, d, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g;
      }
      for (; e = a.lastChild; ) a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function() {
          var a2 = gl(k);
          h.call(a2);
        };
      }
      var k = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k;
      a[uf] = k.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b, k, c, d);
      });
      return k;
    }
    function rl(a, b, c, d, e) {
      var f = c._reactRootContainer;
      if (f) {
        var g = f;
        if ("function" === typeof e) {
          var h = e;
          e = function() {
            var a2 = gl(g);
            h.call(a2);
          };
        }
        fl(b, g, a, e);
      } else g = ql(c, b, a, e, d);
      return gl(g);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = tc(b.pendingLanes);
            0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function() {
            var b2 = ih(a, 1);
            if (null !== b2) {
              var c2 = R();
              gi(b2, a, 1, c2);
            }
          }), il(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b = ih(a, 134217728);
        if (null !== b) {
          var c = R();
          gi(b, a, 134217728, c);
        }
        il(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b = yi(a), c = ih(a, b);
        if (null !== c) {
          var d = R();
          gi(c, a, b, d);
        }
        il(a, b);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b) {
      var c = C;
      try {
        return C = a, b();
      } finally {
        C = c;
      }
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          bb(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; ) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e) throw Error(p(90));
                Wa(d);
                bb(d, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, null != b && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber) try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    reactDom_production_min.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b)) throw Error(p(200));
      return cl(a, b, null, c);
    };
    reactDom_production_min.createRoot = function(a, b) {
      if (!nl(a)) throw Error(p(299));
      var c = false, d = "", e = kl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = bl(a, 1, false, null, null, c, false, d, e);
      a[uf] = b.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b);
    };
    reactDom_production_min.findDOMNode = function(a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function(a) {
      return Rk(a);
    };
    reactDom_production_min.hydrate = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, true, c);
    };
    reactDom_production_min.hydrateRoot = function(a, b, c) {
      if (!nl(a)) throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
      a[uf] = b.current;
      sf(a);
      if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
      return new ml(b);
    };
    reactDom_production_min.render = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, false, c);
    };
    reactDom_production_min.unmountComponentAtNode = function(a) {
      if (!ol(a)) throw Error(p(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Qk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!ol(c)) throw Error(p(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p(38));
      return rl(a, b, c, false, d);
    };
    reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
    return reactDom_production_min;
  }
  var hasRequiredReactDom;
  function requireReactDom() {
    if (hasRequiredReactDom) return reactDom.exports;
    hasRequiredReactDom = 1;
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = requireReactDom_production_min();
    }
    return reactDom.exports;
  }
  var hasRequiredClient$1;
  function requireClient$1() {
    if (hasRequiredClient$1) return client$1;
    hasRequiredClient$1 = 1;
    var m = requireReactDom();
    {
      client$1.createRoot = m.createRoot;
      client$1.hydrateRoot = m.hydrateRoot;
    }
    return client$1;
  }
  var clientExports = requireClient$1();
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f = requireReact(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    return reactJsxRuntime_production_min;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  var reactDomExports = requireReactDom();
  const ReactDOM__default = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
  (function() {
    try {
      if (typeof document != "undefined") {
        var elementStyle = document.createElement("style");
        elementStyle.appendChild(document.createTextNode('/*! tailwindcss v4.1.3 | MIT License | https://tailwindcss.com */\n@layer properties {\n  @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {\n    *, :before, :after, ::backdrop {\n      --tw-translate-x: 0;\n      --tw-translate-y: 0;\n      --tw-translate-z: 0;\n      --tw-space-y-reverse: 0;\n      --tw-space-x-reverse: 0;\n      --tw-border-style: solid;\n      --tw-gradient-position: initial;\n      --tw-gradient-from: #0000;\n      --tw-gradient-via: #0000;\n      --tw-gradient-to: #0000;\n      --tw-gradient-stops: initial;\n      --tw-gradient-via-stops: initial;\n      --tw-gradient-from-position: 0%;\n      --tw-gradient-via-position: 50%;\n      --tw-gradient-to-position: 100%;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-duration: initial;\n    }\n  }\n}\n\n@layer theme {\n  :root, :host {\n    --tw-font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    --tw-font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n    --tw-color-red-50: oklch(97.1% .013 17.38);\n    --tw-color-red-200: oklch(88.5% .062 18.334);\n    --tw-color-red-500: oklch(63.7% .237 25.331);\n    --tw-color-red-600: oklch(57.7% .245 27.325);\n    --tw-color-red-700: oklch(50.5% .213 27.518);\n    --tw-color-green-50: oklch(98.2% .018 155.826);\n    --tw-color-green-100: oklch(96.2% .044 156.743);\n    --tw-color-green-200: oklch(92.5% .084 155.995);\n    --tw-color-green-500: oklch(72.3% .219 149.579);\n    --tw-color-green-600: oklch(62.7% .194 149.214);\n    --tw-color-green-700: oklch(52.7% .154 150.069);\n    --tw-color-green-800: oklch(44.8% .119 151.328);\n    --tw-color-teal-600: oklch(60% .118 184.704);\n    --tw-color-blue-50: oklch(97% .014 254.604);\n    --tw-color-blue-100: oklch(93.2% .032 255.585);\n    --tw-color-blue-200: oklch(88.2% .059 254.128);\n    --tw-color-blue-500: oklch(62.3% .214 259.815);\n    --tw-color-blue-600: oklch(54.6% .245 262.881);\n    --tw-color-blue-700: oklch(48.8% .243 264.376);\n    --tw-color-indigo-600: oklch(51.1% .262 276.966);\n    --tw-color-purple-100: oklch(94.6% .033 307.174);\n    --tw-color-purple-500: oklch(62.7% .265 303.9);\n    --tw-color-purple-600: oklch(55.8% .288 302.321);\n    --tw-color-gray-50: oklch(98.5% .002 247.839);\n    --tw-color-gray-100: oklch(96.7% .003 264.542);\n    --tw-color-gray-200: oklch(92.8% .006 264.531);\n    --tw-color-gray-600: oklch(44.6% .03 256.802);\n    --tw-color-gray-700: oklch(37.3% .034 259.733);\n    --tw-color-gray-800: oklch(27.8% .033 256.848);\n    --tw-color-black: #000;\n    --tw-color-white: #fff;\n    --tw-spacing: .25rem;\n    --tw-container-lg: 32rem;\n    --tw-container-2xl: 42rem;\n    --tw-text-xs: .75rem;\n    --tw-text-xs--line-height: calc(1 / .75);\n    --tw-text-sm: .875rem;\n    --tw-text-sm--line-height: calc(1.25 / .875);\n    --tw-text-base: 1rem;\n    --tw-text-base--line-height: calc(1.5 / 1);\n    --tw-text-lg: 1.125rem;\n    --tw-text-lg--line-height: calc(1.75 / 1.125);\n    --tw-text-xl: 1.25rem;\n    --tw-text-xl--line-height: calc(1.75 / 1.25);\n    --tw-text-2xl: 1.5rem;\n    --tw-text-2xl--line-height: calc(2 / 1.5);\n    --tw-text-3xl: 1.875rem;\n    --tw-text-3xl--line-height: calc(2.25 / 1.875);\n    --tw-text-4xl: 2.25rem;\n    --tw-text-4xl--line-height: calc(2.5 / 2.25);\n    --tw-font-weight-medium: 500;\n    --tw-font-weight-semibold: 600;\n    --tw-font-weight-bold: 700;\n    --tw-tracking-tight: -.025em;\n    --tw-tracking-widest: .1em;\n    --tw-leading-relaxed: 1.625;\n    --tw-radius-sm: calc(var(--radius)  - 4px);\n    --tw-radius-md: calc(var(--radius)  - 2px);\n    --tw-radius-lg: var(--radius);\n    --tw-radius-xl: .75rem;\n    --tw-animate-spin: spin 1s linear infinite;\n    --tw-default-transition-duration: .15s;\n    --tw-default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    --tw-default-font-family: var(--tw-font-sans);\n    --tw-default-mono-font-family: var(--tw-font-mono);\n    --tw-color-background: hsl(var(--background));\n    --tw-color-foreground: hsl(var(--foreground));\n    --tw-color-card: hsl(var(--card));\n    --tw-color-card-foreground: hsl(var(--card-foreground));\n    --tw-color-popover: hsl(var(--popover));\n    --tw-color-popover-foreground: hsl(var(--popover-foreground));\n    --tw-color-primary: hsl(var(--primary));\n    --tw-color-primary-foreground: hsl(var(--primary-foreground));\n    --tw-color-secondary: hsl(var(--secondary));\n    --tw-color-secondary-foreground: hsl(var(--secondary-foreground));\n    --tw-color-muted: hsl(var(--muted));\n    --tw-color-muted-foreground: hsl(var(--muted-foreground));\n    --tw-color-accent: hsl(var(--accent));\n    --tw-color-accent-foreground: hsl(var(--accent-foreground));\n    --tw-color-destructive: hsl(var(--destructive));\n    --tw-color-destructive-foreground: hsl(var(--destructive-foreground));\n    --tw-color-border: hsl(var(--border));\n    --tw-color-input: hsl(var(--input));\n    --tw-color-ring: hsl(var(--ring));\n  }\n}\n\n@layer base {\n  *, :after, :before, ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  ::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  html, :host {\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--tw-default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");\n    font-feature-settings: var(--tw-default-font-feature-settings, normal);\n    font-variation-settings: var(--tw-default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  b, strong {\n    font-weight: bolder;\n  }\n\n  code, kbd, samp, pre {\n    font-family: var(--tw-default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);\n    font-feature-settings: var(--tw-default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--tw-default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub, sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n\n  sub {\n    bottom: -.25em;\n  }\n\n  sup {\n    top: -.5em;\n  }\n\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n\n  :-moz-focusring {\n    outline: auto;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  ol, ul, menu {\n    list-style: none;\n  }\n\n  img, svg, video, canvas, audio, iframe, embed, object {\n    vertical-align: middle;\n    display: block;\n  }\n\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  button, input, select, optgroup, textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  @supports (not ((-webkit-appearance: -apple-pay-button))) or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: currentColor;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  button, input:where([type="button"], [type="reset"], [type="submit"]) {\n    appearance: button;\n  }\n\n  ::file-selector-button {\n    appearance: button;\n  }\n\n  ::-webkit-inner-spin-button {\n    height: auto;\n  }\n\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [hidden]:where(:not([hidden="until-found"])) {\n    display: none !important;\n  }\n\n  *, :after, :before, ::backdrop {\n    border-color: var(--color-gray-200, currentColor);\n  }\n\n  ::file-selector-button {\n    border-color: var(--color-gray-200, currentColor);\n  }\n\n  :root {\n    --background: 0 0% 100%;\n    --foreground: 240 10% 3.9%;\n    --card: 0 0% 100%;\n    --card-foreground: 240 10% 3.9%;\n    --popover: 0 0% 100%;\n    --popover-foreground: 240 10% 3.9%;\n    --primary: 240 5.9% 10%;\n    --primary-foreground: 0 0% 98%;\n    --secondary: 240 4.8% 95.9%;\n    --secondary-foreground: 240 5.9% 10%;\n    --muted: 240 4.8% 95.9%;\n    --muted-foreground: 240 3.8% 46.1%;\n    --accent: 240 4.8% 95.9%;\n    --accent-foreground: 240 5.9% 10%;\n    --destructive: 0 84.2% 60.2%;\n    --destructive-foreground: 0 0% 98%;\n    --border: 240 5.9% 90%;\n    --input: 240 5.9% 90%;\n    --ring: 240 10% 3.9%;\n    --chart-1: 12 76% 61%;\n    --chart-2: 173 58% 39%;\n    --chart-3: 197 37% 24%;\n    --chart-4: 43 74% 66%;\n    --chart-5: 27 87% 67%;\n    --radius: .5rem;\n    --sidebar-background: 0 0% 98%;\n    --sidebar-foreground: 240 5.3% 26.1%;\n    --sidebar-primary: 240 5.9% 10%;\n    --sidebar-primary-foreground: 0 0% 98%;\n    --sidebar-accent: 240 4.8% 95.9%;\n    --sidebar-accent-foreground: 240 5.9% 10%;\n    --sidebar-border: 220 13% 91%;\n    --sidebar-ring: 217.2 91.2% 59.8%;\n  }\n\n  .dark {\n    --background: 240 10% 3.9%;\n    --foreground: 0 0% 98%;\n    --card: 240 10% 3.9%;\n    --card-foreground: 0 0% 98%;\n    --popover: 240 10% 3.9%;\n    --popover-foreground: 0 0% 98%;\n    --primary: 0 0% 98%;\n    --primary-foreground: 240 5.9% 10%;\n    --secondary: 240 3.7% 15.9%;\n    --secondary-foreground: 0 0% 98%;\n    --muted: 240 3.7% 15.9%;\n    --muted-foreground: 240 5% 64.9%;\n    --accent: 240 3.7% 15.9%;\n    --accent-foreground: 0 0% 98%;\n    --destructive: 0 62.8% 30.6%;\n    --destructive-foreground: 0 0% 98%;\n    --border: 240 3.7% 15.9%;\n    --input: 240 3.7% 15.9%;\n    --ring: 240 4.9% 83.9%;\n    --chart-1: 220 70% 50%;\n    --chart-2: 160 60% 45%;\n    --chart-3: 30 80% 55%;\n    --chart-4: 280 65% 60%;\n    --chart-5: 340 75% 55%;\n    --sidebar-background: 240 5.9% 10%;\n    --sidebar-foreground: 240 4.8% 95.9%;\n    --sidebar-primary: 224.3 76.3% 48%;\n    --sidebar-primary-foreground: 0 0% 100%;\n    --sidebar-accent: 240 3.7% 15.9%;\n    --sidebar-accent-foreground: 240 4.8% 95.9%;\n    --sidebar-border: 240 3.7% 15.9%;\n    --sidebar-ring: 217.2 91.2% 59.8%;\n  }\n\n  * {\n    border-color: var(--tw-color-border);\n  }\n\n  body {\n    background-color: var(--tw-color-background);\n    color: var(--tw-color-foreground);\n  }\n}\n\n@layer components;\n\n@layer utilities {\n  .tw\\:pointer-events-none {\n    pointer-events: none;\n  }\n\n  .tw\\:sr-only {\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    position: absolute;\n    overflow: hidden;\n  }\n\n  .tw\\:absolute {\n    position: absolute;\n  }\n\n  .tw\\:fixed {\n    position: fixed;\n  }\n\n  .tw\\:relative {\n    position: relative;\n  }\n\n  .tw\\:sticky {\n    position: sticky;\n  }\n\n  .tw\\:inset-0 {\n    inset: calc(var(--tw-spacing) * 0);\n  }\n\n  .tw\\:top-0 {\n    top: calc(var(--tw-spacing) * 0);\n  }\n\n  .tw\\:top-4 {\n    top: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:top-\\[50\\%\\] {\n    top: 50%;\n  }\n\n  .tw\\:right-2 {\n    right: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:right-4 {\n    right: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:bottom-4 {\n    bottom: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:left-\\[50\\%\\] {\n    left: 50%;\n  }\n\n  .tw\\:z-48 {\n    z-index: 48;\n  }\n\n  .tw\\:z-49 {\n    z-index: 49;\n  }\n\n  .tw\\:z-50 {\n    z-index: 50;\n  }\n\n  .tw\\:container {\n    width: 100%;\n  }\n\n  @media (min-width: 40rem) {\n    .tw\\:container {\n      max-width: 40rem;\n    }\n  }\n\n  @media (min-width: 48rem) {\n    .tw\\:container {\n      max-width: 48rem;\n    }\n  }\n\n  @media (min-width: 64rem) {\n    .tw\\:container {\n      max-width: 64rem;\n    }\n  }\n\n  @media (min-width: 80rem) {\n    .tw\\:container {\n      max-width: 80rem;\n    }\n  }\n\n  @media (min-width: 96rem) {\n    .tw\\:container {\n      max-width: 96rem;\n    }\n  }\n\n  .tw\\:-mx-1 {\n    margin-inline: calc(var(--tw-spacing) * -1);\n  }\n\n  .tw\\:mx-1 {\n    margin-inline: calc(var(--tw-spacing) * 1);\n  }\n\n  .tw\\:mx-auto {\n    margin-inline: auto;\n  }\n\n  .tw\\:my-1 {\n    margin-block: calc(var(--tw-spacing) * 1);\n  }\n\n  .tw\\:mt-1 {\n    margin-top: calc(var(--tw-spacing) * 1);\n  }\n\n  .tw\\:mt-2 {\n    margin-top: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:mt-4 {\n    margin-top: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:mt-6 {\n    margin-top: calc(var(--tw-spacing) * 6);\n  }\n\n  .tw\\:mt-8 {\n    margin-top: calc(var(--tw-spacing) * 8);\n  }\n\n  .tw\\:mt-\\[-55px\\] {\n    margin-top: -55px;\n  }\n\n  .tw\\:mr-2 {\n    margin-right: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:mb-1 {\n    margin-bottom: calc(var(--tw-spacing) * 1);\n  }\n\n  .tw\\:mb-2 {\n    margin-bottom: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:mb-4 {\n    margin-bottom: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:mb-6 {\n    margin-bottom: calc(var(--tw-spacing) * 6);\n  }\n\n  .tw\\:mb-8 {\n    margin-bottom: calc(var(--tw-spacing) * 8);\n  }\n\n  .tw\\:ml-2 {\n    margin-left: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:ml-4 {\n    margin-left: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:ml-auto {\n    margin-left: auto;\n  }\n\n  .tw\\:block {\n    display: block;\n  }\n\n  .tw\\:flex {\n    display: flex;\n  }\n\n  .tw\\:grid {\n    display: grid;\n  }\n\n  .tw\\:inline-flex {\n    display: inline-flex;\n  }\n\n  .tw\\:h-3\\.5 {\n    height: calc(var(--tw-spacing) * 3.5);\n  }\n\n  .tw\\:h-4 {\n    height: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:h-5 {\n    height: calc(var(--tw-spacing) * 5);\n  }\n\n  .tw\\:h-6 {\n    height: calc(var(--tw-spacing) * 6);\n  }\n\n  .tw\\:h-8 {\n    height: calc(var(--tw-spacing) * 8);\n  }\n\n  .tw\\:h-9 {\n    height: calc(var(--tw-spacing) * 9);\n  }\n\n  .tw\\:h-\\[55px\\] {\n    height: 55px;\n  }\n\n  .tw\\:h-\\[var\\(--radix-select-trigger-height\\)\\] {\n    height: var(--radix-select-trigger-height);\n  }\n\n  .tw\\:h-full {\n    height: 100%;\n  }\n\n  .tw\\:h-px {\n    height: 1px;\n  }\n\n  .tw\\:max-h-96 {\n    max-height: calc(var(--tw-spacing) * 96);\n  }\n\n  .tw\\:max-h-\\[90vh\\] {\n    max-height: 90vh;\n  }\n\n  .tw\\:max-h-\\[300px\\] {\n    max-height: 300px;\n  }\n\n  .tw\\:min-h-\\[60px\\] {\n    min-height: 60px;\n  }\n\n  .tw\\:w-3\\.5 {\n    width: calc(var(--tw-spacing) * 3.5);\n  }\n\n  .tw\\:w-4 {\n    width: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:w-5 {\n    width: calc(var(--tw-spacing) * 5);\n  }\n\n  .tw\\:w-6 {\n    width: calc(var(--tw-spacing) * 6);\n  }\n\n  .tw\\:w-9 {\n    width: calc(var(--tw-spacing) * 9);\n  }\n\n  .tw\\:w-72 {\n    width: calc(var(--tw-spacing) * 72);\n  }\n\n  .tw\\:w-full {\n    width: 100%;\n  }\n\n  .tw\\:max-w-2xl {\n    max-width: var(--tw-container-2xl);\n  }\n\n  .tw\\:max-w-\\[1200px\\] {\n    max-width: 1200px;\n  }\n\n  .tw\\:max-w-lg {\n    max-width: var(--tw-container-lg);\n  }\n\n  .tw\\:min-w-\\[8rem\\] {\n    min-width: 8rem;\n  }\n\n  .tw\\:flex-1 {\n    flex: 1;\n  }\n\n  .tw\\:flex-shrink-0, .tw\\:shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .tw\\:translate-x-\\[-50\\%\\] {\n    --tw-translate-x: -50%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .tw\\:translate-y-\\[-50\\%\\] {\n    --tw-translate-y: -50%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .tw\\:animate-spin {\n    animation: var(--tw-animate-spin);\n  }\n\n  .tw\\:cursor-default {\n    cursor: default;\n  }\n\n  .tw\\:cursor-not-allowed {\n    cursor: not-allowed;\n  }\n\n  .tw\\:cursor-pointer {\n    cursor: pointer;\n  }\n\n  .tw\\:list-inside {\n    list-style-position: inside;\n  }\n\n  .tw\\:list-decimal {\n    list-style-type: decimal;\n  }\n\n  .tw\\:list-disc {\n    list-style-type: disc;\n  }\n\n  .tw\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .tw\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .tw\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .tw\\:flex-col {\n    flex-direction: column;\n  }\n\n  .tw\\:flex-col-reverse {\n    flex-direction: column-reverse;\n  }\n\n  .tw\\:flex-wrap {\n    flex-wrap: wrap;\n  }\n\n  .tw\\:items-center {\n    align-items: center;\n  }\n\n  .tw\\:items-start {\n    align-items: flex-start;\n  }\n\n  .tw\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .tw\\:justify-center {\n    justify-content: center;\n  }\n\n  .tw\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .tw\\:gap-2 {\n    gap: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:gap-4 {\n    gap: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:gap-6 {\n    gap: calc(var(--tw-spacing) * 6);\n  }\n\n  .tw\\:gap-8 {\n    gap: calc(var(--tw-spacing) * 8);\n  }\n\n  :where(.tw\\:space-y-1 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--tw-spacing) * 1) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--tw-spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.tw\\:space-y-1\\.5 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--tw-spacing) * 1.5) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--tw-spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.tw\\:space-y-2 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--tw-spacing) * 2) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--tw-spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.tw\\:space-y-4 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--tw-spacing) * 4) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--tw-spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.tw\\:space-y-6 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--tw-spacing) * 6) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--tw-spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.tw\\:space-y-8 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--tw-spacing) * 8) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--tw-spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.tw\\:space-x-2 > :not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--tw-spacing) * 2) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--tw-spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  :where(.tw\\:space-x-3 > :not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--tw-spacing) * 3) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--tw-spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  :where(.tw\\:space-x-4 > :not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--tw-spacing) * 4) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--tw-spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .tw\\:overflow-hidden {\n    overflow: hidden;\n  }\n\n  .tw\\:overflow-x-hidden {\n    overflow-x: hidden;\n  }\n\n  .tw\\:overflow-y-auto {\n    overflow-y: auto;\n  }\n\n  .tw\\:rounded-full {\n    border-radius: 3.40282e38px;\n  }\n\n  .tw\\:rounded-lg {\n    border-radius: var(--tw-radius-lg);\n  }\n\n  .tw\\:rounded-md {\n    border-radius: var(--tw-radius-md);\n  }\n\n  .tw\\:rounded-sm {\n    border-radius: var(--tw-radius-sm);\n  }\n\n  .tw\\:rounded-xl {\n    border-radius: var(--tw-radius-xl);\n  }\n\n  .tw\\:border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n\n  .tw\\:border-2 {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n\n  .tw\\:border-b {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n\n  .tw\\:border-blue-200 {\n    border-color: var(--tw-color-blue-200);\n  }\n\n  .tw\\:border-blue-500 {\n    border-color: var(--tw-color-blue-500);\n  }\n\n  .tw\\:border-destructive\\/50 {\n    border-color: var(--tw-color-destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .tw\\:border-destructive\\/50 {\n      border-color: color-mix(in oklab, var(--tw-color-destructive) 50%, transparent);\n    }\n  }\n\n  .tw\\:border-green-200 {\n    border-color: var(--tw-color-green-200);\n  }\n\n  .tw\\:border-green-500 {\n    border-color: var(--tw-color-green-500);\n  }\n\n  .tw\\:border-input {\n    border-color: var(--tw-color-input);\n  }\n\n  .tw\\:border-primary {\n    border-color: var(--tw-color-primary);\n  }\n\n  .tw\\:border-purple-500 {\n    border-color: var(--tw-color-purple-500);\n  }\n\n  .tw\\:border-red-200 {\n    border-color: var(--tw-color-red-200);\n  }\n\n  .tw\\:border-transparent {\n    border-color: #0000;\n  }\n\n  .tw\\:bg-background {\n    background-color: var(--tw-color-background);\n  }\n\n  .tw\\:bg-black\\/80 {\n    background-color: var(--tw-color-black);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .tw\\:bg-black\\/80 {\n      background-color: color-mix(in oklab, var(--tw-color-black) 80%, transparent);\n    }\n  }\n\n  .tw\\:bg-blue-50 {\n    background-color: var(--tw-color-blue-50);\n  }\n\n  .tw\\:bg-blue-100 {\n    background-color: var(--tw-color-blue-100);\n  }\n\n  .tw\\:bg-blue-500 {\n    background-color: var(--tw-color-blue-500);\n  }\n\n  .tw\\:bg-border {\n    background-color: var(--tw-color-border);\n  }\n\n  .tw\\:bg-card {\n    background-color: var(--tw-color-card);\n  }\n\n  .tw\\:bg-destructive {\n    background-color: var(--tw-color-destructive);\n  }\n\n  .tw\\:bg-gray-50 {\n    background-color: var(--tw-color-gray-50);\n  }\n\n  .tw\\:bg-gray-100 {\n    background-color: var(--tw-color-gray-100);\n  }\n\n  .tw\\:bg-green-50 {\n    background-color: var(--tw-color-green-50);\n  }\n\n  .tw\\:bg-green-100 {\n    background-color: var(--tw-color-green-100);\n  }\n\n  .tw\\:bg-green-500 {\n    background-color: var(--tw-color-green-500);\n  }\n\n  .tw\\:bg-muted {\n    background-color: var(--tw-color-muted);\n  }\n\n  .tw\\:bg-popover {\n    background-color: var(--tw-color-popover);\n  }\n\n  .tw\\:bg-primary {\n    background-color: var(--tw-color-primary);\n  }\n\n  .tw\\:bg-purple-100 {\n    background-color: var(--tw-color-purple-100);\n  }\n\n  .tw\\:bg-red-50 {\n    background-color: var(--tw-color-red-50);\n  }\n\n  .tw\\:bg-red-500 {\n    background-color: var(--tw-color-red-500);\n  }\n\n  .tw\\:bg-secondary {\n    background-color: var(--tw-color-secondary);\n  }\n\n  .tw\\:bg-transparent {\n    background-color: #0000;\n  }\n\n  .tw\\:bg-white {\n    background-color: var(--tw-color-white);\n  }\n\n  .tw\\:bg-gradient-to-r {\n    --tw-gradient-position: to right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n\n  .tw\\:from-blue-600 {\n    --tw-gradient-from: var(--tw-color-blue-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .tw\\:from-green-600 {\n    --tw-gradient-from: var(--tw-color-green-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .tw\\:from-purple-600 {\n    --tw-gradient-from: var(--tw-color-purple-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .tw\\:to-indigo-600 {\n    --tw-gradient-to: var(--tw-color-indigo-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .tw\\:to-teal-600 {\n    --tw-gradient-to: var(--tw-color-teal-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .tw\\:p-0 {\n    padding: calc(var(--tw-spacing) * 0);\n  }\n\n  .tw\\:p-1 {\n    padding: calc(var(--tw-spacing) * 1);\n  }\n\n  .tw\\:p-2 {\n    padding: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:p-4 {\n    padding: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:p-6 {\n    padding: calc(var(--tw-spacing) * 6);\n  }\n\n  .tw\\:p-8 {\n    padding: calc(var(--tw-spacing) * 8);\n  }\n\n  .tw\\:px-2 {\n    padding-inline: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:px-2\\.5 {\n    padding-inline: calc(var(--tw-spacing) * 2.5);\n  }\n\n  .tw\\:px-3 {\n    padding-inline: calc(var(--tw-spacing) * 3);\n  }\n\n  .tw\\:px-4 {\n    padding-inline: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:px-8 {\n    padding-inline: calc(var(--tw-spacing) * 8);\n  }\n\n  .tw\\:py-0\\.5 {\n    padding-block: calc(var(--tw-spacing) * .5);\n  }\n\n  .tw\\:py-1 {\n    padding-block: calc(var(--tw-spacing) * 1);\n  }\n\n  .tw\\:py-1\\.5 {\n    padding-block: calc(var(--tw-spacing) * 1.5);\n  }\n\n  .tw\\:py-2 {\n    padding-block: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:py-3 {\n    padding-block: calc(var(--tw-spacing) * 3);\n  }\n\n  .tw\\:py-4 {\n    padding-block: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:py-6 {\n    padding-block: calc(var(--tw-spacing) * 6);\n  }\n\n  .tw\\:pt-0 {\n    padding-top: calc(var(--tw-spacing) * 0);\n  }\n\n  .tw\\:pt-4 {\n    padding-top: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:pt-6 {\n    padding-top: calc(var(--tw-spacing) * 6);\n  }\n\n  .tw\\:pr-8 {\n    padding-right: calc(var(--tw-spacing) * 8);\n  }\n\n  .tw\\:pb-4 {\n    padding-bottom: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:pb-6 {\n    padding-bottom: calc(var(--tw-spacing) * 6);\n  }\n\n  .tw\\:pb-8 {\n    padding-bottom: calc(var(--tw-spacing) * 8);\n  }\n\n  .tw\\:pl-2 {\n    padding-left: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:text-center {\n    text-align: center;\n  }\n\n  .tw\\:text-left {\n    text-align: left;\n  }\n\n  .tw\\:text-2xl {\n    font-size: var(--tw-text-2xl);\n    line-height: var(--tw-leading, var(--tw-text-2xl--line-height));\n  }\n\n  .tw\\:text-3xl {\n    font-size: var(--tw-text-3xl);\n    line-height: var(--tw-leading, var(--tw-text-3xl--line-height));\n  }\n\n  .tw\\:text-4xl {\n    font-size: var(--tw-text-4xl);\n    line-height: var(--tw-leading, var(--tw-text-4xl--line-height));\n  }\n\n  .tw\\:text-base {\n    font-size: var(--tw-text-base);\n    line-height: var(--tw-leading, var(--tw-text-base--line-height));\n  }\n\n  .tw\\:text-lg {\n    font-size: var(--tw-text-lg);\n    line-height: var(--tw-leading, var(--tw-text-lg--line-height));\n  }\n\n  .tw\\:text-sm {\n    font-size: var(--tw-text-sm);\n    line-height: var(--tw-leading, var(--tw-text-sm--line-height));\n  }\n\n  .tw\\:text-xl {\n    font-size: var(--tw-text-xl);\n    line-height: var(--tw-leading, var(--tw-text-xl--line-height));\n  }\n\n  .tw\\:text-xs {\n    font-size: var(--tw-text-xs);\n    line-height: var(--tw-leading, var(--tw-text-xs--line-height));\n  }\n\n  .tw\\:leading-none {\n    --tw-leading: 1;\n    line-height: 1;\n  }\n\n  .tw\\:font-bold {\n    --tw-font-weight: var(--tw-font-weight-bold);\n    font-weight: var(--tw-font-weight-bold);\n  }\n\n  .tw\\:font-medium {\n    --tw-font-weight: var(--tw-font-weight-medium);\n    font-weight: var(--tw-font-weight-medium);\n  }\n\n  .tw\\:font-semibold {\n    --tw-font-weight: var(--tw-font-weight-semibold);\n    font-weight: var(--tw-font-weight-semibold);\n  }\n\n  .tw\\:tracking-tight {\n    --tw-tracking: var(--tw-tracking-tight);\n    letter-spacing: var(--tw-tracking-tight);\n  }\n\n  .tw\\:tracking-widest {\n    --tw-tracking: var(--tw-tracking-widest);\n    letter-spacing: var(--tw-tracking-widest);\n  }\n\n  .tw\\:whitespace-nowrap {\n    white-space: nowrap;\n  }\n\n  .tw\\:text-blue-500 {\n    color: var(--tw-color-blue-500);\n  }\n\n  .tw\\:text-blue-600 {\n    color: var(--tw-color-blue-600);\n  }\n\n  .tw\\:text-blue-700 {\n    color: var(--tw-color-blue-700);\n  }\n\n  .tw\\:text-card-foreground {\n    color: var(--tw-color-card-foreground);\n  }\n\n  .tw\\:text-current {\n    color: currentColor;\n  }\n\n  .tw\\:text-destructive {\n    color: var(--tw-color-destructive);\n  }\n\n  .tw\\:text-destructive-foreground {\n    color: var(--tw-color-destructive-foreground);\n  }\n\n  .tw\\:text-foreground {\n    color: var(--tw-color-foreground);\n  }\n\n  .tw\\:text-gray-600 {\n    color: var(--tw-color-gray-600);\n  }\n\n  .tw\\:text-gray-700 {\n    color: var(--tw-color-gray-700);\n  }\n\n  .tw\\:text-gray-800 {\n    color: var(--tw-color-gray-800);\n  }\n\n  .tw\\:text-green-500 {\n    color: var(--tw-color-green-500);\n  }\n\n  .tw\\:text-green-600 {\n    color: var(--tw-color-green-600);\n  }\n\n  .tw\\:text-green-700 {\n    color: var(--tw-color-green-700);\n  }\n\n  .tw\\:text-green-800 {\n    color: var(--tw-color-green-800);\n  }\n\n  .tw\\:text-muted-foreground {\n    color: var(--tw-color-muted-foreground);\n  }\n\n  .tw\\:text-popover-foreground {\n    color: var(--tw-color-popover-foreground);\n  }\n\n  .tw\\:text-primary {\n    color: var(--tw-color-primary);\n  }\n\n  .tw\\:text-primary-foreground {\n    color: var(--tw-color-primary-foreground);\n  }\n\n  .tw\\:text-purple-500 {\n    color: var(--tw-color-purple-500);\n  }\n\n  .tw\\:text-purple-600 {\n    color: var(--tw-color-purple-600);\n  }\n\n  .tw\\:text-red-500 {\n    color: var(--tw-color-red-500);\n  }\n\n  .tw\\:text-red-600 {\n    color: var(--tw-color-red-600);\n  }\n\n  .tw\\:text-red-700 {\n    color: var(--tw-color-red-700);\n  }\n\n  .tw\\:text-secondary-foreground {\n    color: var(--tw-color-secondary-foreground);\n  }\n\n  .tw\\:text-white {\n    color: var(--tw-color-white);\n  }\n\n  .tw\\:underline-offset-4 {\n    text-underline-offset: 4px;\n  }\n\n  .tw\\:opacity-25 {\n    opacity: .25;\n  }\n\n  .tw\\:opacity-50 {\n    opacity: .5;\n  }\n\n  .tw\\:opacity-70 {\n    opacity: .7;\n  }\n\n  .tw\\:opacity-75 {\n    opacity: .75;\n  }\n\n  .tw\\:shadow {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:shadow-lg {\n    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:shadow-md {\n    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:shadow-sm {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:ring-0 {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:ring-offset-background {\n    --tw-ring-offset-color: var(--tw-color-background);\n  }\n\n  .tw\\:transition-all {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--tw-default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--tw-default-transition-duration));\n  }\n\n  .tw\\:transition-colors {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--tw-default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--tw-default-transition-duration));\n  }\n\n  .tw\\:transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--tw-default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--tw-default-transition-duration));\n  }\n\n  .tw\\:transition-transform {\n    transition-property: transform, translate, scale, rotate;\n    transition-timing-function: var(--tw-ease, var(--tw-default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--tw-default-transition-duration));\n  }\n\n  .tw\\:duration-200 {\n    --tw-duration: .2s;\n    transition-duration: .2s;\n  }\n\n  .tw\\:outline-none {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  .tw\\:select-none {\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .tw\\:duration-200 {\n    animation-duration: .2s;\n  }\n\n  .tw\\:peer-disabled\\:cursor-not-allowed:is(:where(.tw\\:peer):disabled ~ *) {\n    cursor: not-allowed;\n  }\n\n  .tw\\:peer-disabled\\:opacity-70:is(:where(.tw\\:peer):disabled ~ *) {\n    opacity: .7;\n  }\n\n  .tw\\:file\\:border-0::file-selector-button {\n    border-style: var(--tw-border-style);\n    border-width: 0;\n  }\n\n  .tw\\:file\\:bg-transparent::file-selector-button {\n    background-color: #0000;\n  }\n\n  .tw\\:file\\:text-sm::file-selector-button {\n    font-size: var(--tw-text-sm);\n    line-height: var(--tw-leading, var(--tw-text-sm--line-height));\n  }\n\n  .tw\\:file\\:font-medium::file-selector-button {\n    --tw-font-weight: var(--tw-font-weight-medium);\n    font-weight: var(--tw-font-weight-medium);\n  }\n\n  .tw\\:file\\:text-foreground::file-selector-button {\n    color: var(--tw-color-foreground);\n  }\n\n  .tw\\:placeholder\\:text-muted-foreground::placeholder {\n    color: var(--tw-color-muted-foreground);\n  }\n\n  @media (hover: hover) {\n    .tw\\:hover\\:bg-accent:hover {\n      background-color: var(--tw-color-accent);\n    }\n\n    .tw\\:hover\\:bg-blue-100:hover {\n      background-color: var(--tw-color-blue-100);\n    }\n\n    .tw\\:hover\\:bg-destructive\\/80:hover {\n      background-color: var(--tw-color-destructive);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .tw\\:hover\\:bg-destructive\\/80:hover {\n        background-color: color-mix(in oklab, var(--tw-color-destructive) 80%, transparent);\n      }\n    }\n\n    .tw\\:hover\\:bg-destructive\\/90:hover {\n      background-color: var(--tw-color-destructive);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .tw\\:hover\\:bg-destructive\\/90:hover {\n        background-color: color-mix(in oklab, var(--tw-color-destructive) 90%, transparent);\n      }\n    }\n\n    .tw\\:hover\\:bg-gray-100:hover {\n      background-color: var(--tw-color-gray-100);\n    }\n\n    .tw\\:hover\\:bg-gray-200:hover {\n      background-color: var(--tw-color-gray-200);\n    }\n\n    .tw\\:hover\\:bg-green-100:hover {\n      background-color: var(--tw-color-green-100);\n    }\n\n    .tw\\:hover\\:bg-primary\\/80:hover {\n      background-color: var(--tw-color-primary);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .tw\\:hover\\:bg-primary\\/80:hover {\n        background-color: color-mix(in oklab, var(--tw-color-primary) 80%, transparent);\n      }\n    }\n\n    .tw\\:hover\\:bg-primary\\/90:hover {\n      background-color: var(--tw-color-primary);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .tw\\:hover\\:bg-primary\\/90:hover {\n        background-color: color-mix(in oklab, var(--tw-color-primary) 90%, transparent);\n      }\n    }\n\n    .tw\\:hover\\:bg-purple-100:hover {\n      background-color: var(--tw-color-purple-100);\n    }\n\n    .tw\\:hover\\:bg-secondary\\/80:hover {\n      background-color: var(--tw-color-secondary);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .tw\\:hover\\:bg-secondary\\/80:hover {\n        background-color: color-mix(in oklab, var(--tw-color-secondary) 80%, transparent);\n      }\n    }\n\n    .tw\\:hover\\:text-accent-foreground:hover {\n      color: var(--tw-color-accent-foreground);\n    }\n\n    .tw\\:hover\\:underline:hover {\n      text-decoration-line: underline;\n    }\n\n    .tw\\:hover\\:opacity-100:hover {\n      opacity: 1;\n    }\n  }\n\n  .tw\\:focus\\:bg-accent:focus {\n    background-color: var(--tw-color-accent);\n  }\n\n  .tw\\:focus\\:ring-1:focus {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:focus\\:ring-2:focus {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:focus\\:ring-ring:focus {\n    --tw-ring-color: var(--tw-color-ring);\n  }\n\n  .tw\\:focus\\:ring-offset-2:focus {\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n\n  .tw\\:focus\\:outline-none:focus {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  .tw\\:focus-visible\\:ring-1:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:focus-visible\\:ring-2:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:focus-visible\\:ring-ring:focus-visible {\n    --tw-ring-color: var(--tw-color-ring);\n  }\n\n  .tw\\:focus-visible\\:ring-offset-2:focus-visible {\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n\n  .tw\\:focus-visible\\:ring-offset-background:focus-visible {\n    --tw-ring-offset-color: var(--tw-color-background);\n  }\n\n  .tw\\:focus-visible\\:outline-none:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  .tw\\:disabled\\:pointer-events-none:disabled {\n    pointer-events: none;\n  }\n\n  .tw\\:disabled\\:cursor-not-allowed:disabled {\n    cursor: not-allowed;\n  }\n\n  .tw\\:disabled\\:opacity-50:disabled {\n    opacity: .5;\n  }\n\n  .tw\\:aria-selected\\:bg-accent[aria-selected="true"] {\n    background-color: var(--tw-color-accent);\n  }\n\n  .tw\\:aria-selected\\:text-accent-foreground[aria-selected="true"] {\n    color: var(--tw-color-accent-foreground);\n  }\n\n  .tw\\:data-\\[disabled\\]\\:pointer-events-none[data-disabled] {\n    pointer-events: none;\n  }\n\n  .tw\\:data-\\[disabled\\]\\:opacity-50[data-disabled] {\n    opacity: .5;\n  }\n\n  .tw\\:data-\\[side\\=bottom\\]\\:translate-y-1[data-side="bottom"] {\n    --tw-translate-y: calc(var(--tw-spacing) * 1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .tw\\:data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side="bottom"] {\n    --tw-enter-translate-y: -2;\n  }\n\n  .tw\\:data-\\[side\\=left\\]\\:-translate-x-1[data-side="left"] {\n    --tw-translate-x: calc(var(--tw-spacing) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .tw\\:data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side="left"] {\n    --tw-enter-translate-x: 2;\n  }\n\n  .tw\\:data-\\[side\\=right\\]\\:translate-x-1[data-side="right"] {\n    --tw-translate-x: calc(var(--tw-spacing) * 1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .tw\\:data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side="right"] {\n    --tw-enter-translate-x: -2;\n  }\n\n  .tw\\:data-\\[side\\=top\\]\\:-translate-y-1[data-side="top"] {\n    --tw-translate-y: calc(var(--tw-spacing) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .tw\\:data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side="top"] {\n    --tw-enter-translate-y: 2;\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:border-b-2[data-state="active"] {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 2px;\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:bg-background[data-state="active"] {\n    background-color: var(--tw-color-background);\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:bg-blue-600[data-state="active"] {\n    background-color: var(--tw-color-blue-600);\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:bg-green-100[data-state="active"] {\n    background-color: var(--tw-color-green-100);\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:bg-green-600[data-state="active"] {\n    background-color: var(--tw-color-green-600);\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:bg-purple-600[data-state="active"] {\n    background-color: var(--tw-color-purple-600);\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:text-foreground[data-state="active"] {\n    color: var(--tw-color-foreground);\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:text-green-800[data-state="active"] {\n    color: var(--tw-color-green-800);\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:text-white[data-state="active"] {\n    color: var(--tw-color-white);\n  }\n\n  .tw\\:data-\\[state\\=active\\]\\:shadow[data-state="active"] {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .tw\\:data-\\[state\\=checked\\]\\:translate-x-4[data-state="checked"] {\n    --tw-translate-x: calc(var(--tw-spacing) * 4);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .tw\\:data-\\[state\\=checked\\]\\:bg-primary[data-state="checked"] {\n    background-color: var(--tw-color-primary);\n  }\n\n  .tw\\:data-\\[state\\=checked\\]\\:text-primary-foreground[data-state="checked"] {\n    color: var(--tw-color-primary-foreground);\n  }\n\n  .tw\\:data-\\[state\\=closed\\]\\:animate-out[data-state="closed"] {\n    --tw-exit-opacity: initial;\n    --tw-exit-scale: initial;\n    --tw-exit-rotate: initial;\n    --tw-exit-translate-x: initial;\n    --tw-exit-translate-y: initial;\n    animation-name: exit;\n    animation-duration: .15s;\n  }\n\n  .tw\\:data-\\[state\\=closed\\]\\:fade-out-0[data-state="closed"] {\n    --tw-exit-opacity: 0;\n  }\n\n  .tw\\:data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state="closed"] {\n    --tw-exit-translate-x: -50%;\n  }\n\n  .tw\\:data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state="closed"] {\n    --tw-exit-translate-y: -48%;\n  }\n\n  .tw\\:data-\\[state\\=closed\\]\\:zoom-out-95[data-state="closed"] {\n    --tw-exit-scale: .95;\n  }\n\n  .tw\\:data-\\[state\\=open\\]\\:bg-accent[data-state="open"] {\n    background-color: var(--tw-color-accent);\n  }\n\n  .tw\\:data-\\[state\\=open\\]\\:text-muted-foreground[data-state="open"] {\n    color: var(--tw-color-muted-foreground);\n  }\n\n  .tw\\:data-\\[state\\=open\\]\\:animate-in[data-state="open"] {\n    --tw-enter-opacity: initial;\n    --tw-enter-scale: initial;\n    --tw-enter-rotate: initial;\n    --tw-enter-translate-x: initial;\n    --tw-enter-translate-y: initial;\n    animation-name: enter;\n    animation-duration: .15s;\n  }\n\n  .tw\\:data-\\[state\\=open\\]\\:fade-in-0[data-state="open"] {\n    --tw-enter-opacity: 0;\n  }\n\n  .tw\\:data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state="open"] {\n    --tw-enter-translate-x: -50%;\n  }\n\n  .tw\\:data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state="open"] {\n    --tw-enter-translate-y: -48%;\n  }\n\n  .tw\\:data-\\[state\\=open\\]\\:zoom-in-95[data-state="open"] {\n    --tw-enter-scale: .95;\n  }\n\n  .tw\\:data-\\[state\\=unchecked\\]\\:translate-x-0[data-state="unchecked"] {\n    --tw-translate-x: calc(var(--tw-spacing) * 0);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .tw\\:data-\\[state\\=unchecked\\]\\:bg-input[data-state="unchecked"] {\n    background-color: var(--tw-color-input);\n  }\n\n  @media (min-width: 40rem) {\n    .tw\\:sm\\:w-auto {\n      width: auto;\n    }\n\n    .tw\\:sm\\:flex-row {\n      flex-direction: row;\n    }\n\n    .tw\\:sm\\:justify-end {\n      justify-content: flex-end;\n    }\n\n    :where(.tw\\:sm\\:space-x-2 > :not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--tw-spacing) * 2) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--tw-spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));\n    }\n\n    .tw\\:sm\\:rounded-lg {\n      border-radius: var(--tw-radius-lg);\n    }\n\n    .tw\\:sm\\:text-left {\n      text-align: left;\n    }\n  }\n\n  @media (min-width: 48rem) {\n    .tw\\:md\\:grid-cols-2 {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .tw\\:md\\:grid-cols-3 {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n\n    .tw\\:md\\:text-sm {\n      font-size: var(--tw-text-sm);\n      line-height: var(--tw-leading, var(--tw-text-sm--line-height));\n    }\n  }\n\n  .tw\\:dark\\:border-destructive:is(.dark *) {\n    border-color: var(--tw-color-destructive);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading] {\n    padding-inline: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading] {\n    padding-block: calc(var(--tw-spacing) * 1.5);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading] {\n    font-size: var(--tw-text-xs);\n    line-height: var(--tw-leading, var(--tw-text-xs--line-height));\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading] {\n    --tw-font-weight: var(--tw-font-weight-medium);\n    font-weight: var(--tw-font-weight-medium);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading] {\n    color: var(--tw-color-muted-foreground);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group] {\n    padding-inline: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden]) ~ [cmdk-group] {\n    padding-top: calc(var(--tw-spacing) * 0);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg {\n    height: calc(var(--tw-spacing) * 5);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg {\n    width: calc(var(--tw-spacing) * 5);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input] {\n    height: calc(var(--tw-spacing) * 12);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item] {\n    padding-inline: calc(var(--tw-spacing) * 2);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item] {\n    padding-block: calc(var(--tw-spacing) * 3);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg {\n    height: calc(var(--tw-spacing) * 5);\n  }\n\n  .tw\\:\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg {\n    width: calc(var(--tw-spacing) * 5);\n  }\n\n  .tw\\:\\[\\&_p\\]\\:leading-relaxed p {\n    --tw-leading: var(--tw-leading-relaxed);\n    line-height: var(--tw-leading-relaxed);\n  }\n\n  .tw\\:\\[\\&_svg\\]\\:pointer-events-none svg {\n    pointer-events: none;\n  }\n\n  .tw\\:\\[\\&_svg\\]\\:size-4 svg {\n    width: calc(var(--tw-spacing) * 4);\n    height: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:\\[\\&_svg\\]\\:shrink-0 svg {\n    flex-shrink: 0;\n  }\n\n  .tw\\:\\[\\&\\>span\\]\\:line-clamp-1 > span {\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n  }\n\n  .tw\\:\\[\\&\\>svg\\]\\:absolute > svg {\n    position: absolute;\n  }\n\n  .tw\\:\\[\\&\\>svg\\]\\:top-4 > svg {\n    top: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:\\[\\&\\>svg\\]\\:left-4 > svg {\n    left: calc(var(--tw-spacing) * 4);\n  }\n\n  .tw\\:\\[\\&\\>svg\\]\\:text-destructive > svg {\n    color: var(--tw-color-destructive);\n  }\n\n  .tw\\:\\[\\&\\>svg\\]\\:text-foreground > svg {\n    color: var(--tw-color-foreground);\n  }\n\n  .tw\\:\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\] > svg + div {\n    --tw-translate-y: -3px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .tw\\:\\[\\&\\>svg\\~\\*\\]\\:pl-7 > svg ~ * {\n    padding-left: calc(var(--tw-spacing) * 7);\n  }\n\n  body {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n}\n\n@keyframes enter {\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n\n@keyframes exit {\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n\n@property --tw-translate-x {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-translate-y {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-translate-z {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-space-y-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-space-x-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-border-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n\n@property --tw-gradient-position {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-gradient-from {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n\n@property --tw-gradient-via {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n\n@property --tw-gradient-to {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n\n@property --tw-gradient-stops {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-gradient-via-stops {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-gradient-from-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 0%;\n}\n\n@property --tw-gradient-via-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 50%;\n}\n\n@property --tw-gradient-to-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-leading {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-font-weight {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-tracking {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-shadow-color {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-inset-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-inset-shadow-color {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-inset-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-ring-color {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-ring-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-inset-ring-color {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-inset-ring-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-ring-inset {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-ring-offset-width {\n  syntax: "<length>";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-ring-offset-color {\n  syntax: "*";\n  inherits: false;\n  initial-value: #fff;\n}\n\n@property --tw-ring-offset-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-duration {\n  syntax: "*";\n  inherits: false\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}'));
        document.head.appendChild(elementStyle);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __async2 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
  );
  const toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Icon = reactExports.forwardRef(
    (_a, ref) => {
      var _b = _a, {
        color: color2 = "currentColor",
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        className = "",
        children,
        iconNode
      } = _b, rest = __objRest(_b, [
        "color",
        "size",
        "strokeWidth",
        "absoluteStrokeWidth",
        "className",
        "children",
        "iconNode"
      ]);
      return reactExports.createElement(
        "svg",
        __spreadValues(__spreadProps(__spreadValues({
          ref
        }, defaultAttributes), {
          width: size,
          height: size,
          stroke: color2,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: mergeClasses("lucide", className)
        }), rest),
        [
          ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const createLucideIcon = (iconName, iconNode) => {
    const Component2 = reactExports.forwardRef(
      (_a, ref) => {
        var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
        return reactExports.createElement(Icon, __spreadValues({
          ref,
          iconNode,
          className: mergeClasses(
            `lucide-${toKebabCase(toPascalCase(iconName))}`,
            `lucide-${iconName}`,
            className
          )
        }, props));
      }
    );
    Component2.displayName = toPascalCase(iconName);
    return Component2;
  };
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$g = [
    ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
    ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
    ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
  ];
  const ChartNoAxesColumnIncreasing = createLucideIcon("chart-no-axes-column-increasing", __iconNode$g);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$f = [
    ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
    ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
    ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
  ];
  const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", __iconNode$f);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$e = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
  const ChevronDown = createLucideIcon("chevron-down", __iconNode$e);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$d = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
  const ChevronRight = createLucideIcon("chevron-right", __iconNode$d);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$c = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
  ];
  const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$c);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$b = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }]
  ];
  const CircleX = createLucideIcon("circle-x", __iconNode$b);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$a = [
    ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
    ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 22v-2", key: "1osdcq" }],
    ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
    ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
    ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
    ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
    ["path", { d: "M14 12h8", key: "4f43i9" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
    ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
    ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
    ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }]
  ];
  const Cog = createLucideIcon("cog", __iconNode$a);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$9 = [
    ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
  ];
  const CreditCard = createLucideIcon("credit-card", __iconNode$9);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$8 = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
  ];
  const ExternalLink = createLucideIcon("external-link", __iconNode$8);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$7 = [
    ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
    ["path", { d: "M12 8v13", key: "1c76mn" }],
    ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
    [
      "path",
      {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl"
      }
    ]
  ];
  const Gift = createLucideIcon("gift", __iconNode$7);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$6 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }]
  ];
  const Globe = createLucideIcon("globe", __iconNode$6);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$5 = [
    [
      "path",
      {
        d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
        key: "1a0edw"
      }
    ],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
  ];
  const Package = createLucideIcon("package", __iconNode$5);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$4 = [
    ["path", { d: "M2 3h20", key: "91anmk" }],
    ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
    ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
  ];
  const Presentation = createLucideIcon("presentation", __iconNode$4);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$3 = [
    ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
  ];
  const ShoppingBag = createLucideIcon("shopping-bag", __iconNode$3);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
  ];
  const Target = createLucideIcon("target", __iconNode$2);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$1 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
  ];
  const Users = createLucideIcon("users", __iconNode$1);
  /**
   * @license lucide-react v0.487.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ];
  const X = createLucideIcon("x", __iconNode);
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  const COUNTRIES = {
    [
      "AT"
      /* AT */
    ]: "Austria",
    [
      "BE"
      /* BE */
    ]: "Belgium",
    [
      "DK"
      /* DK */
    ]: "Denmark",
    // [CountryCodes.FI]: "Finland",
    [
      "FR"
      /* FR */
    ]: "France",
    [
      "DE"
      /* DE */
    ]: "Germany",
    [
      "IE"
      /* IE */
    ]: "Ireland",
    [
      "IT"
      /* IT */
    ]: "Italy",
    [
      "NL"
      /* NL */
    ]: "Netherlands",
    [
      "NO"
      /* NO */
    ]: "Norway",
    [
      "PL"
      /* PL */
    ]: "Poland",
    // [CountryCodes.PT]: "Portugal",
    [
      "ES"
      /* ES */
    ]: "Spain",
    [
      "SE"
      /* SE */
    ]: "Sweden",
    [
      "CH"
      /* CH */
    ]: "Switzerland French",
    [
      "GB"
      /* GB */
    ]: "United Kingdom"
  };
  const LANGUAGES_BY_COUNTRIES = {
    [
      "AT"
      /* AT */
    ]: { [
      "DE"
      /* DE */
    ]: "Austria" },
    [
      "BE"
      /* BE */
    ]: {
      [
        "FR"
        /* FR */
      ]: "Belgium French",
      [
        "NL"
        /* NL */
      ]: "Belgium Dutch"
    },
    [
      "DK"
      /* DK */
    ]: { [
      "DA"
      /* DA */
    ]: "Denmark" },
    // [CountryCodes.FI]: { [LanguageCodes.FI]: "Finland" },
    [
      "FR"
      /* FR */
    ]: { [
      "FR"
      /* FR */
    ]: "France" },
    [
      "DE"
      /* DE */
    ]: { [
      "DE"
      /* DE */
    ]: "Germany" },
    [
      "IE"
      /* IE */
    ]: { [
      "EN"
      /* EN */
    ]: "Ireland" },
    [
      "IT"
      /* IT */
    ]: { [
      "IT"
      /* IT */
    ]: "Italy" },
    [
      "NL"
      /* NL */
    ]: { [
      "NL"
      /* NL */
    ]: "Netherlands" },
    [
      "NO"
      /* NO */
    ]: { [
      "NB"
      /* NB */
    ]: "Norway" },
    [
      "PL"
      /* PL */
    ]: { [
      "PL"
      /* PL */
    ]: "Poland" },
    // [CountryCodes.PT]: { [LanguageCodes.PT]: "Portugal" },
    [
      "ES"
      /* ES */
    ]: { [
      "ES"
      /* ES */
    ]: "Spain" },
    [
      "SE"
      /* SE */
    ]: { [
      "SV"
      /* SV */
    ]: "Sweden" },
    [
      "CH"
      /* CH */
    ]: {
      [
        "FR"
        /* FR */
      ]: "Switzerland French",
      [
        "DE"
        /* DE */
      ]: "Switzerland German",
      [
        "IT"
        /* IT */
      ]: "Switzerland Italian"
    },
    [
      "GB"
      /* GB */
    ]: { [
      "EN"
      /* EN */
    ]: "United Kingdom" }
  };
  var Versions$1 = /* @__PURE__ */ ((Versions2) => {
    Versions2["ONE"] = "1";
    Versions2["TWO"] = "2";
    Versions2["THREE"] = "3";
    return Versions2;
  })(Versions$1 || {});
  var SettingsType = /* @__PURE__ */ ((SettingsType2) => {
    SettingsType2["SIMPLE"] = "simple";
    SettingsType2["COUNTRY"] = "country";
    return SettingsType2;
  })(SettingsType || {});
  const CLASS_PART_SEPARATOR = "-";
  const createClassGroupUtils = (config) => {
    const classMap = createClassMap(config);
    const {
      conflictingClassGroups,
      conflictingClassGroupModifiers
    } = config;
    const getClassGroupId = (className) => {
      const classParts = className.split(CLASS_PART_SEPARATOR);
      if (classParts[0] === "" && classParts.length !== 1) {
        classParts.shift();
      }
      return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
      const conflicts = conflictingClassGroups[classGroupId] || [];
      if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
        return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
      }
      return conflicts;
    };
    return {
      getClassGroupId,
      getConflictingClassGroupIds
    };
  };
  const getGroupRecursive = (classParts, classPartObject) => {
    var _a;
    if (classParts.length === 0) {
      return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
    if (classGroupFromNextClassPart) {
      return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
      return void 0;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return (_a = classPartObject.validators.find(({
      validator
    }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
  };
  const arbitraryPropertyRegex = /^\[(.+)\]$/;
  const getGroupIdForArbitraryProperty = (className) => {
    if (arbitraryPropertyRegex.test(className)) {
      const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
      const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
      if (property) {
        return "arbitrary.." + property;
      }
    }
  };
  const createClassMap = (config) => {
    const {
      theme,
      classGroups
    } = config;
    const classMap = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    for (const classGroupId in classGroups) {
      processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
    }
    return classMap;
  };
  const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
    classGroup.forEach((classDefinition) => {
      if (typeof classDefinition === "string") {
        const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
        classPartObjectToEdit.classGroupId = classGroupId;
        return;
      }
      if (typeof classDefinition === "function") {
        if (isThemeGetter(classDefinition)) {
          processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
          return;
        }
        classPartObject.validators.push({
          validator: classDefinition,
          classGroupId
        });
        return;
      }
      Object.entries(classDefinition).forEach(([key, classGroup2]) => {
        processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
      });
    });
  };
  const getPart = (classPartObject, path) => {
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
      if (!currentClassPartObject.nextPart.has(pathPart)) {
        currentClassPartObject.nextPart.set(pathPart, {
          nextPart: /* @__PURE__ */ new Map(),
          validators: []
        });
      }
      currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
  };
  const isThemeGetter = (func) => func.isThemeGetter;
  const createLruCache = (maxCacheSize) => {
    if (maxCacheSize < 1) {
      return {
        get: () => void 0,
        set: () => {
        }
      };
    }
    let cacheSize = 0;
    let cache = /* @__PURE__ */ new Map();
    let previousCache = /* @__PURE__ */ new Map();
    const update = (key, value) => {
      cache.set(key, value);
      cacheSize++;
      if (cacheSize > maxCacheSize) {
        cacheSize = 0;
        previousCache = cache;
        cache = /* @__PURE__ */ new Map();
      }
    };
    return {
      get(key) {
        let value = cache.get(key);
        if (value !== void 0) {
          return value;
        }
        if ((value = previousCache.get(key)) !== void 0) {
          update(key, value);
          return value;
        }
      },
      set(key, value) {
        if (cache.has(key)) {
          cache.set(key, value);
        } else {
          update(key, value);
        }
      }
    };
  };
  const IMPORTANT_MODIFIER = "!";
  const MODIFIER_SEPARATOR = ":";
  const MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
  const createParseClassName = (config) => {
    const {
      prefix,
      experimentalParseClassName
    } = config;
    let parseClassName = (className) => {
      const modifiers = [];
      let bracketDepth = 0;
      let parenDepth = 0;
      let modifierStart = 0;
      let postfixModifierPosition;
      for (let index = 0; index < className.length; index++) {
        let currentCharacter = className[index];
        if (bracketDepth === 0 && parenDepth === 0) {
          if (currentCharacter === MODIFIER_SEPARATOR) {
            modifiers.push(className.slice(modifierStart, index));
            modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
            continue;
          }
          if (currentCharacter === "/") {
            postfixModifierPosition = index;
            continue;
          }
        }
        if (currentCharacter === "[") {
          bracketDepth++;
        } else if (currentCharacter === "]") {
          bracketDepth--;
        } else if (currentCharacter === "(") {
          parenDepth++;
        } else if (currentCharacter === ")") {
          parenDepth--;
        }
      }
      const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
      const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
      const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
      const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
      return {
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      };
    };
    if (prefix) {
      const fullPrefix = prefix + MODIFIER_SEPARATOR;
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
        isExternal: true,
        modifiers: [],
        hasImportantModifier: false,
        baseClassName: className,
        maybePostfixModifierPosition: void 0
      };
    }
    if (experimentalParseClassName) {
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => experimentalParseClassName({
        className,
        parseClassName: parseClassNameOriginal
      });
    }
    return parseClassName;
  };
  const stripImportantModifier = (baseClassName) => {
    if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
      return baseClassName.substring(0, baseClassName.length - 1);
    }
    if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
      return baseClassName.substring(1);
    }
    return baseClassName;
  };
  const createSortModifiers = (config) => {
    const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
    const sortModifiers = (modifiers) => {
      if (modifiers.length <= 1) {
        return modifiers;
      }
      const sortedModifiers = [];
      let unsortedModifiers = [];
      modifiers.forEach((modifier) => {
        const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
        if (isPositionSensitive) {
          sortedModifiers.push(...unsortedModifiers.sort(), modifier);
          unsortedModifiers = [];
        } else {
          unsortedModifiers.push(modifier);
        }
      });
      sortedModifiers.push(...unsortedModifiers.sort());
      return sortedModifiers;
    };
    return sortModifiers;
  };
  const createConfigUtils = (config) => __spreadValues({
    cache: createLruCache(config.cacheSize),
    parseClassName: createParseClassName(config),
    sortModifiers: createSortModifiers(config)
  }, createClassGroupUtils(config));
  const SPLIT_CLASSES_REGEX = /\s+/;
  const mergeClassList = (classList, configUtils) => {
    const {
      parseClassName,
      getClassGroupId,
      getConflictingClassGroupIds,
      sortModifiers
    } = configUtils;
    const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = "";
    for (let index = classNames.length - 1; index >= 0; index -= 1) {
      const originalClassName = classNames[index];
      const {
        isExternal,
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      } = parseClassName(originalClassName);
      if (isExternal) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      let hasPostfixModifier = !!maybePostfixModifierPosition;
      let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
      if (!classGroupId) {
        if (!hasPostfixModifier) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        classGroupId = getClassGroupId(baseClassName);
        if (!classGroupId) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        hasPostfixModifier = false;
      }
      const variantModifier = sortModifiers(modifiers).join(":");
      const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
      const classId = modifierId + classGroupId;
      if (classGroupsInConflict.includes(classId)) {
        continue;
      }
      classGroupsInConflict.push(classId);
      const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
      for (let i = 0; i < conflictGroups.length; ++i) {
        const group = conflictGroups[i];
        classGroupsInConflict.push(modifierId + group);
      }
      result = originalClassName + (result.length > 0 ? " " + result : result);
    }
    return result;
  };
  function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = "";
    while (index < arguments.length) {
      if (argument = arguments[index++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  const toValue = (mix2) => {
    if (typeof mix2 === "string") {
      return mix2;
    }
    let resolvedValue;
    let string = "";
    for (let k = 0; k < mix2.length; k++) {
      if (mix2[k]) {
        if (resolvedValue = toValue(mix2[k])) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  };
  function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
      const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
      configUtils = createConfigUtils(config);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
      const cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      const result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    }
    return function callTailwindMerge() {
      return functionToCall(twJoin.apply(null, arguments));
    };
  }
  const fromTheme = (key) => {
    const themeGetter = (theme) => theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
  };
  const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
  const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
  const fractionRegex = /^\d+\/\d+$/;
  const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  const isFraction = (value) => fractionRegex.test(value);
  const isNumber = (value) => !!value && !Number.isNaN(Number(value));
  const isInteger = (value) => !!value && Number.isInteger(Number(value));
  const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
  const isTshirtSize = (value) => tshirtUnitRegex.test(value);
  const isAny = () => true;
  const isLengthOnly = (value) => (
    // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
  );
  const isNever = () => false;
  const isShadow = (value) => shadowRegex.test(value);
  const isImage = (value) => imageRegex.test(value);
  const isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
  const isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
  const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
  const isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
  const isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
  const isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
  const isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
  const isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
  const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
  const isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
  const isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
  const isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
  const isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
  const isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
  const isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
  const getIsArbitraryValue = (value, testLabel, testValue) => {
    const result = arbitraryValueRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return testValue(result[2]);
    }
    return false;
  };
  const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
    const result = arbitraryVariableRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return shouldMatchNoLabel;
    }
    return false;
  };
  const isLabelPosition = (label) => label === "position" || label === "percentage";
  const isLabelImage = (label) => label === "image" || label === "url";
  const isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
  const isLabelLength = (label) => label === "length";
  const isLabelNumber = (label) => label === "number";
  const isLabelFamilyName = (label) => label === "family-name";
  const isLabelShadow = (label) => label === "shadow";
  const getDefaultConfig = () => {
    const themeColor = fromTheme("color");
    const themeFont = fromTheme("font");
    const themeText = fromTheme("text");
    const themeFontWeight = fromTheme("font-weight");
    const themeTracking = fromTheme("tracking");
    const themeLeading = fromTheme("leading");
    const themeBreakpoint = fromTheme("breakpoint");
    const themeContainer = fromTheme("container");
    const themeSpacing = fromTheme("spacing");
    const themeRadius = fromTheme("radius");
    const themeShadow = fromTheme("shadow");
    const themeInsetShadow = fromTheme("inset-shadow");
    const themeTextShadow = fromTheme("text-shadow");
    const themeDropShadow = fromTheme("drop-shadow");
    const themeBlur = fromTheme("blur");
    const themePerspective = fromTheme("perspective");
    const themeAspect = fromTheme("aspect");
    const themeEase = fromTheme("ease");
    const themeAnimate = fromTheme("animate");
    const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
    const scalePosition = () => [
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "left-top",
      "top-right",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "right-top",
      "bottom-right",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "right-bottom",
      "bottom-left",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "left-bottom"
    ];
    const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
    const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
    const scaleOverscroll = () => ["auto", "contain", "none"];
    const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
    const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
    const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
    const scaleGridColRowStartAndEnd = () => ["auto", {
      span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
    }, isInteger, isArbitraryVariable, isArbitraryValue];
    const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
    const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
    const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
    const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
    const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
    const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
    const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
    const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
      position: [isArbitraryVariable, isArbitraryValue]
    }];
    const scaleBgRepeat = () => ["no-repeat", {
      repeat: ["", "x", "y", "space", "round"]
    }];
    const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
      size: [isArbitraryVariable, isArbitraryValue]
    }];
    const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
    const scaleRadius = () => [
      // Deprecated since Tailwind CSS v4.0.0
      "",
      "none",
      "full",
      themeRadius,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
    const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
    const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
    const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
    const scaleBlur = () => [
      // Deprecated since Tailwind CSS v4.0.0
      "",
      "none",
      themeBlur,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [isTshirtSize],
        breakpoint: [isTshirtSize],
        color: [isAny],
        container: [isTshirtSize],
        "drop-shadow": [isTshirtSize],
        ease: ["in", "out", "in-out"],
        font: [isAnyNonArbitrary],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [isTshirtSize],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [isTshirtSize],
        shadow: [isTshirtSize],
        spacing: ["px", isNumber],
        text: [isTshirtSize],
        "text-shadow": [isTshirtSize],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        // --------------
        // --- Layout ---
        // --------------
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [{
          aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
        }],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         * @deprecated since Tailwind CSS v4.0.0
         */
        container: ["container"],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [{
          columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
        }],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        "break-after": [{
          "break-after": scaleBreak()
        }],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        "break-before": [{
          "break-before": scaleBreak()
        }],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [{
          box: ["border", "content"]
        }],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        /**
         * Screen Reader Only
         * @see https://tailwindcss.com/docs/display#screen-reader-only
         */
        sr: ["sr-only", "not-sr-only"],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ["isolate", "isolation-auto"],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        "object-position": [{
          object: scalePositionWithArbitrary()
        }],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [{
          overflow: scaleOverflow()
        }],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-x": [{
          "overflow-x": scaleOverflow()
        }],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-y": [{
          "overflow-y": scaleOverflow()
        }],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [{
          overscroll: scaleOverscroll()
        }],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-x": [{
          "overscroll-x": scaleOverscroll()
        }],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-y": [{
          "overscroll-y": scaleOverscroll()
        }],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        /**
         * Top / Right / Bottom / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [{
          inset: scaleInset()
        }],
        /**
         * Right / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-x": [{
          "inset-x": scaleInset()
        }],
        /**
         * Top / Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-y": [{
          "inset-y": scaleInset()
        }],
        /**
         * Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        start: [{
          start: scaleInset()
        }],
        /**
         * End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        end: [{
          end: scaleInset()
        }],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [{
          top: scaleInset()
        }],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [{
          right: scaleInset()
        }],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [{
          bottom: scaleInset()
        }],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [{
          left: scaleInset()
        }],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ["visible", "invisible", "collapse"],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [{
          z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
        }],
        // ------------------------
        // --- Flexbox and Grid ---
        // ------------------------
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [{
          basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
        }],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [{
          flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
        }],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [{
          grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [{
          shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [{
          order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        "grid-cols": [{
          "grid-cols": scaleGridTemplateColsRows()
        }],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start-end": [{
          col: scaleGridColRowStartAndEnd()
        }],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start": [{
          "col-start": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-end": [{
          "col-end": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        "grid-rows": [{
          "grid-rows": scaleGridTemplateColsRows()
        }],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start-end": [{
          row: scaleGridColRowStartAndEnd()
        }],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start": [{
          "row-start": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-end": [{
          "row-end": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        "auto-cols": [{
          "auto-cols": scaleGridAutoColsRows()
        }],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        "auto-rows": [{
          "auto-rows": scaleGridAutoColsRows()
        }],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [{
          gap: scaleUnambiguousSpacing()
        }],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-x": [{
          "gap-x": scaleUnambiguousSpacing()
        }],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-y": [{
          "gap-y": scaleUnambiguousSpacing()
        }],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        "justify-content": [{
          justify: [...scaleAlignPrimaryAxis(), "normal"]
        }],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        "justify-items": [{
          "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
        }],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        "justify-self": [{
          "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
        }],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        "align-content": [{
          content: ["normal", ...scaleAlignPrimaryAxis()]
        }],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        "align-items": [{
          items: [...scaleAlignSecondaryAxis(), {
            baseline: ["", "last"]
          }]
        }],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        "align-self": [{
          self: ["auto", ...scaleAlignSecondaryAxis(), {
            baseline: ["", "last"]
          }]
        }],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        "place-content": [{
          "place-content": scaleAlignPrimaryAxis()
        }],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        "place-items": [{
          "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
        }],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        "place-self": [{
          "place-self": ["auto", ...scaleAlignSecondaryAxis()]
        }],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [{
          p: scaleUnambiguousSpacing()
        }],
        /**
         * Padding X
         * @see https://tailwindcss.com/docs/padding
         */
        px: [{
          px: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Y
         * @see https://tailwindcss.com/docs/padding
         */
        py: [{
          py: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [{
          ps: scaleUnambiguousSpacing()
        }],
        /**
         * Padding End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [{
          pe: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [{
          pt: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [{
          pr: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [{
          pb: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [{
          pl: scaleUnambiguousSpacing()
        }],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [{
          m: scaleMargin()
        }],
        /**
         * Margin X
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [{
          mx: scaleMargin()
        }],
        /**
         * Margin Y
         * @see https://tailwindcss.com/docs/margin
         */
        my: [{
          my: scaleMargin()
        }],
        /**
         * Margin Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [{
          ms: scaleMargin()
        }],
        /**
         * Margin End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [{
          me: scaleMargin()
        }],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [{
          mt: scaleMargin()
        }],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [{
          mr: scaleMargin()
        }],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [{
          mb: scaleMargin()
        }],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [{
          ml: scaleMargin()
        }],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-x": [{
          "space-x": scaleUnambiguousSpacing()
        }],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-x-reverse": ["space-x-reverse"],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-y": [{
          "space-y": scaleUnambiguousSpacing()
        }],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-y-reverse": ["space-y-reverse"],
        // --------------
        // --- Sizing ---
        // --------------
        /**
         * Size
         * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
         */
        size: [{
          size: scaleSizing()
        }],
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [{
          w: [themeContainer, "screen", ...scaleSizing()]
        }],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-w": [{
          "min-w": [
            themeContainer,
            "screen",
            /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            "none",
            ...scaleSizing()
          ]
        }],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-w": [{
          "max-w": [
            themeContainer,
            "screen",
            "none",
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            "prose",
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            {
              screen: [themeBreakpoint]
            },
            ...scaleSizing()
          ]
        }],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [{
          h: ["screen", ...scaleSizing()]
        }],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-h": [{
          "min-h": ["screen", "none", ...scaleSizing()]
        }],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-h": [{
          "max-h": ["screen", ...scaleSizing()]
        }],
        // ------------------
        // --- Typography ---
        // ------------------
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        "font-size": [{
          text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
        }],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        "font-style": ["italic", "not-italic"],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        "font-weight": [{
          font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
        }],
        /**
         * Font Stretch
         * @see https://tailwindcss.com/docs/font-stretch
         */
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
        }],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        "font-family": [{
          font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
        }],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-normal": ["normal-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-ordinal": ["ordinal"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-slashed-zero": ["slashed-zero"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [{
          tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        "line-clamp": [{
          "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
        }],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [{
          leading: [
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            themeLeading,
            ...scaleUnambiguousSpacing()
          ]
        }],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        "list-image": [{
          "list-image": ["none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        "list-style-type": [{
          list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://v3.tailwindcss.com/docs/placeholder-color
         */
        "placeholder-color": [{
          placeholder: scaleColor()
        }],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        "text-color": [{
          text: scaleColor()
        }],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        "text-decoration-style": [{
          decoration: [...scaleLineStyle(), "wavy"]
        }],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        "text-decoration-thickness": [{
          decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
        }],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        "text-decoration-color": [{
          decoration: scaleColor()
        }],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        "underline-offset": [{
          "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        /**
         * Text Wrap
         * @see https://tailwindcss.com/docs/text-wrap
         */
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [{
          indent: scaleUnambiguousSpacing()
        }],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        /**
         * Overflow Wrap
         * @see https://tailwindcss.com/docs/overflow-wrap
         */
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [{
          content: ["none", isArbitraryVariable, isArbitraryValue]
        }],
        // -------------------
        // --- Backgrounds ---
        // -------------------
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        "bg-position": [{
          bg: scaleBgPosition()
        }],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        "bg-repeat": [{
          bg: scaleBgRepeat()
        }],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        "bg-size": [{
          bg: scaleBgSize()
        }],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, isInteger, isArbitraryVariable, isArbitraryValue],
            radial: ["", isArbitraryVariable, isArbitraryValue],
            conic: [isInteger, isArbitraryVariable, isArbitraryValue]
          }, isArbitraryVariableImage, isArbitraryImage]
        }],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        "bg-color": [{
          bg: scaleColor()
        }],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from-pos": [{
          from: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via-pos": [{
          via: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to-pos": [{
          to: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from": [{
          from: scaleColor()
        }],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via": [{
          via: scaleColor()
        }],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to": [{
          to: scaleColor()
        }],
        // ---------------
        // --- Borders ---
        // ---------------
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [{
          rounded: scaleRadius()
        }],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-s": [{
          "rounded-s": scaleRadius()
        }],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-e": [{
          "rounded-e": scaleRadius()
        }],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-t": [{
          "rounded-t": scaleRadius()
        }],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-r": [{
          "rounded-r": scaleRadius()
        }],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-b": [{
          "rounded-b": scaleRadius()
        }],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-l": [{
          "rounded-l": scaleRadius()
        }],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ss": [{
          "rounded-ss": scaleRadius()
        }],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-se": [{
          "rounded-se": scaleRadius()
        }],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ee": [{
          "rounded-ee": scaleRadius()
        }],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-es": [{
          "rounded-es": scaleRadius()
        }],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tl": [{
          "rounded-tl": scaleRadius()
        }],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tr": [{
          "rounded-tr": scaleRadius()
        }],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-br": [{
          "rounded-br": scaleRadius()
        }],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-bl": [{
          "rounded-bl": scaleRadius()
        }],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w": [{
          border: scaleBorderWidth()
        }],
        /**
         * Border Width X
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-x": [{
          "border-x": scaleBorderWidth()
        }],
        /**
         * Border Width Y
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-y": [{
          "border-y": scaleBorderWidth()
        }],
        /**
         * Border Width Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-s": [{
          "border-s": scaleBorderWidth()
        }],
        /**
         * Border Width End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-e": [{
          "border-e": scaleBorderWidth()
        }],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-t": [{
          "border-t": scaleBorderWidth()
        }],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-r": [{
          "border-r": scaleBorderWidth()
        }],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-b": [{
          "border-b": scaleBorderWidth()
        }],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-l": [{
          "border-l": scaleBorderWidth()
        }],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-x": [{
          "divide-x": scaleBorderWidth()
        }],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-x-reverse": ["divide-x-reverse"],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-y": [{
          "divide-y": scaleBorderWidth()
        }],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-y-reverse": ["divide-y-reverse"],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        "border-style": [{
          border: [...scaleLineStyle(), "hidden", "none"]
        }],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
         */
        "divide-style": [{
          divide: [...scaleLineStyle(), "hidden", "none"]
        }],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color": [{
          border: scaleColor()
        }],
        /**
         * Border Color X
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-x": [{
          "border-x": scaleColor()
        }],
        /**
         * Border Color Y
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-y": [{
          "border-y": scaleColor()
        }],
        /**
         * Border Color S
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-s": [{
          "border-s": scaleColor()
        }],
        /**
         * Border Color E
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-e": [{
          "border-e": scaleColor()
        }],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-t": [{
          "border-t": scaleColor()
        }],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-r": [{
          "border-r": scaleColor()
        }],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-b": [{
          "border-b": scaleColor()
        }],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-l": [{
          "border-l": scaleColor()
        }],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        "divide-color": [{
          divide: scaleColor()
        }],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        "outline-style": [{
          outline: [...scaleLineStyle(), "none", "hidden"]
        }],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        "outline-offset": [{
          "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        "outline-w": [{
          outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
        }],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        "outline-color": [{
          outline: scaleColor()
        }],
        // ---------------
        // --- Effects ---
        // ---------------
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [{
          shadow: [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow
          ]
        }],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
         */
        "shadow-color": [{
          shadow: scaleColor()
        }],
        /**
         * Inset Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
         */
        "inset-shadow": [{
          "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
        }],
        /**
         * Inset Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
         */
        "inset-shadow-color": [{
          "inset-shadow": scaleColor()
        }],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
         */
        "ring-w": [{
          ring: scaleBorderWidth()
        }],
        /**
         * Ring Width Inset
         * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-w-inset": ["ring-inset"],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
         */
        "ring-color": [{
          ring: scaleColor()
        }],
        /**
         * Ring Offset Width
         * @see https://v3.tailwindcss.com/docs/ring-offset-width
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-offset-w": [{
          "ring-offset": [isNumber, isArbitraryLength]
        }],
        /**
         * Ring Offset Color
         * @see https://v3.tailwindcss.com/docs/ring-offset-color
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-offset-color": [{
          "ring-offset": scaleColor()
        }],
        /**
         * Inset Ring Width
         * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
         */
        "inset-ring-w": [{
          "inset-ring": scaleBorderWidth()
        }],
        /**
         * Inset Ring Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
         */
        "inset-ring-color": [{
          "inset-ring": scaleColor()
        }],
        /**
         * Text Shadow
         * @see https://tailwindcss.com/docs/text-shadow
         */
        "text-shadow": [{
          "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
        }],
        /**
         * Text Shadow Color
         * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
         */
        "text-shadow-color": [{
          "text-shadow": scaleColor()
        }],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [{
          opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        "mix-blend": [{
          "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
        }],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        "bg-blend": [{
          "bg-blend": scaleBlendMode()
        }],
        /**
         * Mask Clip
         * @see https://tailwindcss.com/docs/mask-clip
         */
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        /**
         * Mask Composite
         * @see https://tailwindcss.com/docs/mask-composite
         */
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        /**
         * Mask Image
         * @see https://tailwindcss.com/docs/mask-image
         */
        "mask-image-linear-pos": [{
          "mask-linear": [isNumber]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": scaleMaskImagePosition()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": scaleMaskImagePosition()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": scaleColor()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": scaleColor()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": scaleMaskImagePosition()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": scaleMaskImagePosition()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": scaleColor()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": scaleColor()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": scaleMaskImagePosition()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": scaleMaskImagePosition()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": scaleColor()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": scaleColor()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": scaleMaskImagePosition()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": scaleMaskImagePosition()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": scaleColor()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": scaleColor()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": scaleMaskImagePosition()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": scaleMaskImagePosition()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": scaleColor()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": scaleColor()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": scaleMaskImagePosition()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": scaleMaskImagePosition()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": scaleColor()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": scaleColor()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": scaleMaskImagePosition()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": scaleMaskImagePosition()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": scaleColor()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": scaleColor()
        }],
        "mask-image-radial": [{
          "mask-radial": [isArbitraryVariable, isArbitraryValue]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": scaleMaskImagePosition()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": scaleMaskImagePosition()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": scaleColor()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": scaleColor()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": scalePosition()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [isNumber]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": scaleMaskImagePosition()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": scaleMaskImagePosition()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": scaleColor()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": scaleColor()
        }],
        /**
         * Mask Mode
         * @see https://tailwindcss.com/docs/mask-mode
         */
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        /**
         * Mask Origin
         * @see https://tailwindcss.com/docs/mask-origin
         */
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        /**
         * Mask Position
         * @see https://tailwindcss.com/docs/mask-position
         */
        "mask-position": [{
          mask: scaleBgPosition()
        }],
        /**
         * Mask Repeat
         * @see https://tailwindcss.com/docs/mask-repeat
         */
        "mask-repeat": [{
          mask: scaleBgRepeat()
        }],
        /**
         * Mask Size
         * @see https://tailwindcss.com/docs/mask-size
         */
        "mask-size": [{
          mask: scaleBgSize()
        }],
        /**
         * Mask Type
         * @see https://tailwindcss.com/docs/mask-type
         */
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        /**
         * Mask Image
         * @see https://tailwindcss.com/docs/mask-image
         */
        "mask-image": [{
          mask: ["none", isArbitraryVariable, isArbitraryValue]
        }],
        // ---------------
        // --- Filters ---
        // ---------------
        /**
         * Filter
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [{
          filter: [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue
          ]
        }],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [{
          blur: scaleBlur()
        }],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [{
          brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [{
          contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        "drop-shadow": [{
          "drop-shadow": [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeDropShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow
          ]
        }],
        /**
         * Drop Shadow Color
         * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
         */
        "drop-shadow-color": [{
          "drop-shadow": scaleColor()
        }],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [{
          grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        "hue-rotate": [{
          "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [{
          invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [{
          saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [{
          sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Filter
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        "backdrop-filter": [{
          "backdrop-filter": [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue
          ]
        }],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        "backdrop-blur": [{
          "backdrop-blur": scaleBlur()
        }],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        "backdrop-brightness": [{
          "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        "backdrop-contrast": [{
          "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        "backdrop-invert": [{
          "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        "backdrop-opacity": [{
          "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        "backdrop-saturate": [{
          "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        "backdrop-sepia": [{
          "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        // --------------
        // --- Tables ---
        // --------------
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing": [{
          "border-spacing": scaleUnambiguousSpacing()
        }],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-x": [{
          "border-spacing-x": scaleUnambiguousSpacing()
        }],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-y": [{
          "border-spacing-y": scaleUnambiguousSpacing()
        }],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [{
          caption: ["top", "bottom"]
        }],
        // ---------------------------------
        // --- Transitions and Animation ---
        // ---------------------------------
        /**
         * Transition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Behavior
         * @see https://tailwindcss.com/docs/transition-behavior
         */
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [{
          duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [{
          ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [{
          delay: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [{
          animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
        }],
        // ------------------
        // --- Transforms ---
        // ------------------
        /**
         * Backface Visibility
         * @see https://tailwindcss.com/docs/backface-visibility
         */
        backface: [{
          backface: ["hidden", "visible"]
        }],
        /**
         * Perspective
         * @see https://tailwindcss.com/docs/perspective
         */
        perspective: [{
          perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Perspective Origin
         * @see https://tailwindcss.com/docs/perspective-origin
         */
        "perspective-origin": [{
          "perspective-origin": scalePositionWithArbitrary()
        }],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [{
          rotate: scaleRotate()
        }],
        /**
         * Rotate X
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-x": [{
          "rotate-x": scaleRotate()
        }],
        /**
         * Rotate Y
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-y": [{
          "rotate-y": scaleRotate()
        }],
        /**
         * Rotate Z
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-z": [{
          "rotate-z": scaleRotate()
        }],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [{
          scale: scaleScale()
        }],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-x": [{
          "scale-x": scaleScale()
        }],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-y": [{
          "scale-y": scaleScale()
        }],
        /**
         * Scale Z
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-z": [{
          "scale-z": scaleScale()
        }],
        /**
         * Scale 3D
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-3d": ["scale-3d"],
        /**
         * Skew
         * @see https://tailwindcss.com/docs/skew
         */
        skew: [{
          skew: scaleSkew()
        }],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-x": [{
          "skew-x": scaleSkew()
        }],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-y": [{
          "skew-y": scaleSkew()
        }],
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [{
          transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
        }],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        "transform-origin": [{
          origin: scalePositionWithArbitrary()
        }],
        /**
         * Transform Style
         * @see https://tailwindcss.com/docs/transform-style
         */
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        /**
         * Translate
         * @see https://tailwindcss.com/docs/translate
         */
        translate: [{
          translate: scaleTranslate()
        }],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-x": [{
          "translate-x": scaleTranslate()
        }],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-y": [{
          "translate-y": scaleTranslate()
        }],
        /**
         * Translate Z
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-z": [{
          "translate-z": scaleTranslate()
        }],
        /**
         * Translate None
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-none": ["translate-none"],
        // ---------------------
        // --- Interactivity ---
        // ---------------------
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [{
          accent: scaleColor()
        }],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: [{
          appearance: ["none", "auto"]
        }],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        "caret-color": [{
          caret: scaleColor()
        }],
        /**
         * Color Scheme
         * @see https://tailwindcss.com/docs/color-scheme
         */
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Field Sizing
         * @see https://tailwindcss.com/docs/field-sizing
         */
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-m": [{
          "scroll-m": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin X
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mx": [{
          "scroll-mx": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Y
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-my": [{
          "scroll-my": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ms": [{
          "scroll-ms": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-me": [{
          "scroll-me": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mt": [{
          "scroll-mt": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mr": [{
          "scroll-mr": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mb": [{
          "scroll-mb": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ml": [{
          "scroll-ml": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-p": [{
          "scroll-p": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding X
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-px": [{
          "scroll-px": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Y
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-py": [{
          "scroll-py": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-ps": [{
          "scroll-ps": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pe": [{
          "scroll-pe": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pt": [{
          "scroll-pt": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pr": [{
          "scroll-pr": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pb": [{
          "scroll-pb": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pl": [{
          "scroll-pl": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        /**
         * Touch Action X
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        /**
         * Touch Action Y
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        /**
         * Touch Action Pinch Zoom
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-pz": ["touch-pinch-zoom"],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
        }],
        // -----------
        // --- SVG ---
        // -----------
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [{
          fill: ["none", ...scaleColor()]
        }],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        "stroke-w": [{
          stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
        }],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [{
          stroke: ["none", ...scaleColor()]
        }],
        // ---------------------
        // --- Accessibility ---
        // ---------------------
        /**
         * Forced Color Adjust
         * @see https://tailwindcss.com/docs/forced-color-adjust
         */
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    };
  };
  const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
  function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  function loggerError(message, ...other) {
    console.error(`[Sovendus App Settings] - ${message}`, ...other);
  }
  function loggerInfo(message, ...other) {
    console.log(`[Sovendus App Settings] - ${message}`, ...other);
  }
  function cleanConfig(unParsedConfig) {
    var _a, _b, _c, _d, _e, _f, _g;
    const config = typeof unParsedConfig === "string" ? JSON.parse(unParsedConfig) : unParsedConfig;
    const cleanedConfig = {
      version: Versions$1.THREE
    };
    if (config.checkoutProducts) {
      cleanedConfig.checkoutProducts = config.checkoutProducts;
    }
    if (config.employeeBenefits) {
      cleanedConfig.employeeBenefits = config.employeeBenefits;
    }
    const optimize = {};
    let hasOptimizeConfig = false;
    const settingsType = (_a = config.optimize) == null ? void 0 : _a.settingsType;
    if (settingsType) {
      optimize.settingsType = settingsType;
      hasOptimizeConfig = true;
    }
    const optimizeCountries = (_b = config.optimize) == null ? void 0 : _b.countries;
    if (optimizeCountries) {
      optimize.countries = optimizeCountries;
      hasOptimizeConfig = true;
    }
    const optimizeSimple = (_c = config.optimize) == null ? void 0 : _c.simple;
    if (optimizeSimple) {
      optimize.simple = optimizeSimple;
      hasOptimizeConfig = true;
    }
    if (hasOptimizeConfig) {
      cleanedConfig.optimize = optimize;
    }
    const voucherNetwork = {};
    let hasVoucherNetworkConfig = false;
    const voucherNetworkSettingType = (_d = config.voucherNetwork) == null ? void 0 : _d.settingType;
    if (voucherNetworkSettingType) {
      voucherNetwork.settingType = voucherNetworkSettingType;
      hasVoucherNetworkConfig = true;
    }
    const voucherNetworkSimple = (_e = config.voucherNetwork) == null ? void 0 : _e.simple;
    if (voucherNetworkSimple) {
      voucherNetwork.simple = voucherNetworkSimple;
      hasVoucherNetworkConfig = true;
    }
    const voucherNetworkCookieTracking = (_f = config.voucherNetwork) == null ? void 0 : _f.cookieTracking;
    if (voucherNetworkCookieTracking) {
      voucherNetwork.cookieTracking = voucherNetworkCookieTracking;
      hasVoucherNetworkConfig = true;
    }
    const voucherNetworkCountries = (_g = config.voucherNetwork) == null ? void 0 : _g.countries;
    if (voucherNetworkCountries) {
      voucherNetwork.countries = voucherNetworkCountries;
      hasVoucherNetworkConfig = true;
    }
    if (hasVoucherNetworkConfig) {
      cleanedConfig.voucherNetwork = voucherNetwork;
    }
    return cleanedConfig;
  }
  const LayoutGroupContext = reactExports.createContext({});
  function useConstant(init) {
    const ref = reactExports.useRef(null);
    if (ref.current === null) {
      ref.current = init();
    }
    return ref.current;
  }
  const isBrowser = typeof window !== "undefined";
  const useIsomorphicLayoutEffect$1 = isBrowser ? reactExports.useLayoutEffect : reactExports.useEffect;
  const PresenceContext = /* @__PURE__ */ reactExports.createContext(null);
  const MotionConfigContext = reactExports.createContext({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never"
  });
  class PopChildMeasure extends reactExports.Component {
    getSnapshotBeforeUpdate(prevProps) {
      const element = this.props.childRef.current;
      if (element && prevProps.isPresent && !this.props.isPresent) {
        const parent = element.offsetParent;
        const parentWidth = parent instanceof HTMLElement ? parent.offsetWidth || 0 : 0;
        const size = this.props.sizeRef.current;
        size.height = element.offsetHeight || 0;
        size.width = element.offsetWidth || 0;
        size.top = element.offsetTop;
        size.left = element.offsetLeft;
        size.right = parentWidth - size.width - size.left;
      }
      return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  }
  function PopChild({ children, isPresent, anchorX }) {
    const id2 = reactExports.useId();
    const ref = reactExports.useRef(null);
    const size = reactExports.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0
    });
    const { nonce } = reactExports.useContext(MotionConfigContext);
    reactExports.useInsertionEffect(() => {
      const { width, height, top, left, right } = size.current;
      if (isPresent || !ref.current || !width || !height)
        return;
      const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
      ref.current.dataset.motionPopId = id2;
      const style = document.createElement("style");
      if (nonce)
        style.nonce = nonce;
      document.head.appendChild(style);
      if (style.sheet) {
        style.sheet.insertRule(`
          [data-motion-pop-id="${id2}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            top: ${top}px !important;
          }
        `);
      }
      return () => {
        document.head.removeChild(style);
      };
    }, [isPresent]);
    return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, children: reactExports.cloneElement(children, { ref }) });
  }
  const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX }) => {
    const presenceChildren = useConstant(newChildrenMap);
    const id2 = reactExports.useId();
    const memoizedOnExitComplete = reactExports.useCallback((childId) => {
      presenceChildren.set(childId, true);
      for (const isComplete of presenceChildren.values()) {
        if (!isComplete)
          return;
      }
      onExitComplete && onExitComplete();
    }, [presenceChildren, onExitComplete]);
    const context = reactExports.useMemo(
      () => ({
        id: id2,
        initial,
        isPresent,
        custom,
        onExitComplete: memoizedOnExitComplete,
        register: (childId) => {
          presenceChildren.set(childId, false);
          return () => presenceChildren.delete(childId);
        }
      }),
      /**
       * If the presence of a child affects the layout of the components around it,
       * we want to make a new context value to ensure they get re-rendered
       * so they can detect that layout change.
       */
      presenceAffectsLayout ? [Math.random(), memoizedOnExitComplete] : [isPresent, memoizedOnExitComplete]
    );
    reactExports.useMemo(() => {
      presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    reactExports.useEffect(() => {
      !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
      children = jsxRuntimeExports.jsx(PopChild, { isPresent, anchorX, children });
    }
    return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
  };
  function newChildrenMap() {
    return /* @__PURE__ */ new Map();
  }
  function usePresence$1(subscribe = true) {
    const context = reactExports.useContext(PresenceContext);
    if (context === null)
      return [true, null];
    const { isPresent, onExitComplete, register } = context;
    const id2 = reactExports.useId();
    reactExports.useEffect(() => {
      if (subscribe) {
        return register(id2);
      }
    }, [subscribe]);
    const safeToRemove = reactExports.useCallback(() => subscribe && onExitComplete && onExitComplete(id2), [id2, onExitComplete, subscribe]);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
  }
  const getChildKey = (child) => child.key || "";
  function onlyElements(children) {
    const filtered = [];
    reactExports.Children.forEach(children, (child) => {
      if (reactExports.isValidElement(child))
        filtered.push(child);
    });
    return filtered;
  }
  const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left" }) => {
    const [isParentPresent, safeToRemove] = usePresence$1(propagate);
    const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
    const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
    const isInitialRender = reactExports.useRef(true);
    const pendingPresentChildren = reactExports.useRef(presentChildren);
    const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
    const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
    const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
    useIsomorphicLayoutEffect$1(() => {
      isInitialRender.current = false;
      pendingPresentChildren.current = presentChildren;
      for (let i = 0; i < renderedChildren.length; i++) {
        const key = getChildKey(renderedChildren[i]);
        if (!presentKeys.includes(key)) {
          if (exitComplete.get(key) !== true) {
            exitComplete.set(key, false);
          }
        } else {
          exitComplete.delete(key);
        }
      }
    }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
      let nextChildren = [...presentChildren];
      for (let i = 0; i < renderedChildren.length; i++) {
        const child = renderedChildren[i];
        const key = getChildKey(child);
        if (!presentKeys.includes(key)) {
          nextChildren.splice(i, 0, child);
          exitingChildren.push(child);
        }
      }
      if (mode === "wait" && exitingChildren.length) {
        nextChildren = exitingChildren;
      }
      setRenderedChildren(onlyElements(nextChildren));
      setDiffedChildren(presentChildren);
      return null;
    }
    const { forceRender } = reactExports.useContext(LayoutGroupContext);
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
      const key = getChildKey(child);
      const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
      const onExit = () => {
        if (exitComplete.has(key)) {
          exitComplete.set(key, true);
        } else {
          return;
        }
        let isEveryExitComplete = true;
        exitComplete.forEach((isExitComplete) => {
          if (!isExitComplete)
            isEveryExitComplete = false;
        });
        if (isEveryExitComplete) {
          forceRender == null ? void 0 : forceRender();
          setRenderedChildren(pendingPresentChildren.current);
          propagate && (safeToRemove == null ? void 0 : safeToRemove());
          onExitComplete && onExitComplete();
        }
      };
      return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, onExitComplete: isPresent ? void 0 : onExit, anchorX, children: child }, key);
    }) });
  };
  function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
      arr.push(item);
  }
  function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
      arr.splice(index, 1);
  }
  let invariant = () => {
  };
  const MotionGlobalConfig = {
    useManualTiming: false
  };
  // @__NO_SIDE_EFFECTS__
  function memo(callback) {
    let result;
    return () => {
      if (result === void 0)
        result = callback();
      return result;
    };
  }
  const noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
  const progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
  };
  class SubscriptionManager {
    constructor() {
      this.subscriptions = [];
    }
    add(handler) {
      addUniqueItem(this.subscriptions, handler);
      return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
      const numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions)
        return;
      if (numSubscriptions === 1) {
        this.subscriptions[0](a, b, c);
      } else {
        for (let i = 0; i < numSubscriptions; i++) {
          const handler = this.subscriptions[i];
          handler && handler(a, b, c);
        }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  const secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
  const millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
  function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1e3 / frameDuration) : 0;
  }
  const supportsScrollTimeline = /* @__PURE__ */ memo(() => window.ScrollTimeline !== void 0);
  class GroupAnimation {
    constructor(animations2) {
      this.stop = () => this.runAll("stop");
      this.animations = animations2.filter(Boolean);
    }
    get finished() {
      return Promise.all(this.animations.map((animation) => animation.finished));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */
    getAll(propName) {
      return this.animations[0][propName];
    }
    setAll(propName, newValue) {
      for (let i = 0; i < this.animations.length; i++) {
        this.animations[i][propName] = newValue;
      }
    }
    attachTimeline(timeline, fallback) {
      const subscriptions = this.animations.map((animation) => {
        if (supportsScrollTimeline() && animation.attachTimeline) {
          return animation.attachTimeline(timeline);
        } else if (typeof fallback === "function") {
          return fallback(animation);
        }
      });
      return () => {
        subscriptions.forEach((cancel, i) => {
          cancel && cancel();
          this.animations[i].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(time2) {
      this.setAll("time", time2);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(speed) {
      this.setAll("speed", speed);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let max = 0;
      for (let i = 0; i < this.animations.length; i++) {
        max = Math.max(max, this.animations[i].duration);
      }
      return max;
    }
    runAll(methodName) {
      this.animations.forEach((controls) => controls[methodName]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  class GroupAnimationWithThen extends GroupAnimation {
    then(onResolve, _onReject) {
      return this.finished.finally(onResolve).then(() => {
      });
    }
  }
  const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";
  const supportsFlags = {};
  function memoSupports(callback, supportsFlag) {
    const memoized = /* @__PURE__ */ memo(callback);
    return () => {
      var _a;
      return (_a = supportsFlags[supportsFlag]) != null ? _a : memoized();
    };
  }
  const supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e) {
      return false;
    }
    return true;
  }, "linearEasing");
  const generateLinearEasing = (easing, duration, resolution = 10) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i = 0; i < numPoints; i++) {
      points += easing(i / (numPoints - 1)) + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
  };
  const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
  const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
  };
  function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
      return void 0;
    } else if (typeof easing === "function" && supportsLinearEasing()) {
      return generateLinearEasing(easing, duration);
    } else if (isBezierDefinition(easing)) {
      return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
      return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    } else {
      return supportedWaapiEasing[easing];
    }
  }
  function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeInOut", times } = {}, pseudoElement = void 0) {
    const keyframeOptions = {
      [valueName]: keyframes2
    };
    if (times)
      keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease2, duration);
    if (Array.isArray(easing))
      keyframeOptions.easing = easing;
    const animation = element.animate(keyframeOptions, {
      delay: delay2,
      duration,
      easing: !Array.isArray(easing) ? easing : "linear",
      fill: "both",
      iterations: repeat + 1,
      direction: repeatType === "reverse" ? "alternate" : "normal",
      pseudoElement
    });
    return animation;
  }
  function isGenerator(type) {
    return typeof type === "function" && "applyToOptions" in type;
  }
  function getValueTransition(transition, key) {
    var _a, _b;
    return (_b = (_a = transition == null ? void 0 : transition[key]) != null ? _a : transition == null ? void 0 : transition["default"]) != null ? _b : transition;
  }
  const maxGeneratorDuration = 2e4;
  function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
      duration += timeStep;
      state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
  }
  function createGeneratorEasing(options2, scale2 = 100, createGenerator) {
    const generator = createGenerator(__spreadProps(__spreadValues({}, options2), { keyframes: [0, scale2] }));
    const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
    return {
      type: "keyframes",
      ease: (progress2) => {
        return generator.next(duration * progress2).value / scale2;
      },
      duration: /* @__PURE__ */ millisecondsToSeconds(duration)
    };
  }
  function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && supportsLinearEasing() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
  }
  function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
  }
  const stepsOrder = [
    "read",
    // Read
    "resolveKeyframes",
    // Write/Read/Write/Read
    "update",
    // Compute
    "preRender",
    // Compute
    "render",
    // Write
    "postRender"
    // Compute
  ];
  function createRenderStep(runNextFrame, stepName) {
    let thisFrame = /* @__PURE__ */ new Set();
    let nextFrame = /* @__PURE__ */ new Set();
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = /* @__PURE__ */ new WeakSet();
    let latestFrameData = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    function triggerCallback(callback) {
      if (toKeepAlive.has(callback)) {
        step.schedule(callback);
        runNextFrame();
      }
      callback(latestFrameData);
    }
    const step = {
      /**
       * Schedule a process to run on the next frame.
       */
      schedule: (callback, keepAlive = false, immediate = false) => {
        const addToCurrentFrame = immediate && isProcessing;
        const queue = addToCurrentFrame ? thisFrame : nextFrame;
        if (keepAlive)
          toKeepAlive.add(callback);
        if (!queue.has(callback))
          queue.add(callback);
        return callback;
      },
      /**
       * Cancel the provided callback from running on the next frame.
       */
      cancel: (callback) => {
        nextFrame.delete(callback);
        toKeepAlive.delete(callback);
      },
      /**
       * Execute all schedule callbacks.
       */
      process: (frameData2) => {
        latestFrameData = frameData2;
        if (isProcessing) {
          flushNextFrame = true;
          return;
        }
        isProcessing = true;
        [thisFrame, nextFrame] = [nextFrame, thisFrame];
        thisFrame.forEach(triggerCallback);
        thisFrame.clear();
        isProcessing = false;
        if (flushNextFrame) {
          flushNextFrame = false;
          step.process(frameData2);
        }
      }
    };
    return step;
  }
  const maxElapsed = 40;
  function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    const flagRunNextFrame = () => runNextFrame = true;
    const steps = stepsOrder.reduce((acc, key) => {
      acc[key] = createRenderStep(flagRunNextFrame);
      return acc;
    }, {});
    const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
    const processBatch = () => {
      const timestamp = performance.now();
      runNextFrame = false;
      {
        state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
      }
      state.timestamp = timestamp;
      state.isProcessing = true;
      read.process(state);
      resolveKeyframes.process(state);
      update.process(state);
      preRender.process(state);
      render.process(state);
      postRender.process(state);
      state.isProcessing = false;
      if (runNextFrame && allowKeepAlive) {
        useDefaultElapsed = false;
        scheduleNextBatch(processBatch);
      }
    };
    const wake = () => {
      runNextFrame = true;
      useDefaultElapsed = true;
      if (!state.isProcessing) {
        scheduleNextBatch(processBatch);
      }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
      const step = steps[key];
      acc[key] = (process2, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
          wake();
        return step.schedule(process2, keepAlive, immediate);
      };
      return acc;
    }, {});
    const cancel = (process2) => {
      for (let i = 0; i < stepsOrder.length; i++) {
        steps[stepsOrder[i]].cancel(process2);
      }
    };
    return { schedule, cancel, state, steps };
  }
  const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
  const { schedule: microtask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);
  let now;
  function clearTime() {
    now = void 0;
  }
  const time = {
    now: () => {
      if (now === void 0) {
        time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
      }
      return now;
    },
    set: (newTime) => {
      now = newTime;
      queueMicrotask(clearTime);
    }
  };
  const isDragging = {
    x: false,
    y: false
  };
  function isDragActive() {
    return isDragging.x || isDragging.y;
  }
  function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
      if (isDragging[axis]) {
        return null;
      } else {
        isDragging[axis] = true;
        return () => {
          isDragging[axis] = false;
        };
      }
    } else {
      if (isDragging.x || isDragging.y) {
        return null;
      } else {
        isDragging.x = isDragging.y = true;
        return () => {
          isDragging.x = isDragging.y = false;
        };
      }
    }
  }
  function resolveElements(elementOrSelector, scope, selectorCache) {
    if (elementOrSelector instanceof EventTarget) {
      return [elementOrSelector];
    } else if (typeof elementOrSelector === "string") {
      let root = document;
      const elements = root.querySelectorAll(elementOrSelector);
      return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
  }
  function setupGesture(elementOrSelector, options2) {
    const elements = resolveElements(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = __spreadProps(__spreadValues({
      passive: true
    }, options2), {
      signal: gestureAbortController.signal
    });
    const cancel = () => gestureAbortController.abort();
    return [elements, eventOptions, cancel];
  }
  function isValidHover(event) {
    return !(event.pointerType === "touch" || isDragActive());
  }
  function hover(elementOrSelector, onHoverStart, options2 = {}) {
    const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options2);
    const onPointerEnter = (enterEvent) => {
      if (!isValidHover(enterEvent))
        return;
      const { target } = enterEvent;
      const onHoverEnd = onHoverStart(target, enterEvent);
      if (typeof onHoverEnd !== "function" || !target)
        return;
      const onPointerLeave = (leaveEvent) => {
        if (!isValidHover(leaveEvent))
          return;
        onHoverEnd(leaveEvent);
        target.removeEventListener("pointerleave", onPointerLeave);
      };
      target.addEventListener("pointerleave", onPointerLeave, eventOptions);
    };
    elements.forEach((element) => {
      element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    });
    return cancel;
  }
  const isNodeOrChild = (parent, child) => {
    if (!child) {
      return false;
    } else if (parent === child) {
      return true;
    } else {
      return isNodeOrChild(parent, child.parentElement);
    }
  };
  const isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
      return typeof event.button !== "number" || event.button <= 0;
    } else {
      return event.isPrimary !== false;
    }
  };
  const focusableElements = /* @__PURE__ */ new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
  ]);
  function isElementKeyboardAccessible(element) {
    return focusableElements.has(element.tagName) || element.tabIndex !== -1;
  }
  const isPressing = /* @__PURE__ */ new WeakSet();
  function filterEvents(callback) {
    return (event) => {
      if (event.key !== "Enter")
        return;
      callback(event);
    };
  }
  function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
  }
  const enableKeyboardPress = (focusEvent, eventOptions) => {
    const element = focusEvent.currentTarget;
    if (!element)
      return;
    const handleKeydown = filterEvents(() => {
      if (isPressing.has(element))
        return;
      firePointerEvent(element, "down");
      const handleKeyup = filterEvents(() => {
        firePointerEvent(element, "up");
      });
      const handleBlur = () => firePointerEvent(element, "cancel");
      element.addEventListener("keyup", handleKeyup, eventOptions);
      element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
  };
  function isValidPressEvent(event) {
    return isPrimaryPointer(event) && !isDragActive();
  }
  function press(targetOrSelector, onPressStart, options2 = {}) {
    const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options2);
    const startPress = (startEvent) => {
      const target = startEvent.currentTarget;
      if (!isValidPressEvent(startEvent) || isPressing.has(target))
        return;
      isPressing.add(target);
      const onPressEnd = onPressStart(target, startEvent);
      const onPointerEnd = (endEvent, success) => {
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerCancel);
        if (!isValidPressEvent(endEvent) || !isPressing.has(target)) {
          return;
        }
        isPressing.delete(target);
        if (typeof onPressEnd === "function") {
          onPressEnd(endEvent, { success });
        }
      };
      const onPointerUp = (upEvent) => {
        onPointerEnd(upEvent, target === window || target === document || options2.useGlobalTarget || isNodeOrChild(target, upEvent.target));
      };
      const onPointerCancel = (cancelEvent) => {
        onPointerEnd(cancelEvent, false);
      };
      window.addEventListener("pointerup", onPointerUp, eventOptions);
      window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    targets.forEach((target) => {
      const pointerDownTarget = options2.useGlobalTarget ? window : target;
      pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
      if (target instanceof HTMLElement) {
        target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
        if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) {
          target.tabIndex = 0;
        }
      }
    });
    return cancelEvents;
  }
  const MAX_VELOCITY_DELTA = 30;
  const isFloat = (value) => {
    return !isNaN(parseFloat(value));
  };
  class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     */
    constructor(init, options2 = {}) {
      this.version = "12.6.3";
      this.canTrackVelocity = null;
      this.events = {};
      this.updateAndNotify = (v, render = true) => {
        const currentTime = time.now();
        if (this.updatedAt !== currentTime) {
          this.setPrevFrameValue();
        }
        this.prev = this.current;
        this.setCurrent(v);
        if (this.current !== this.prev && this.events.change) {
          this.events.change.notify(this.current);
        }
        if (render && this.events.renderRequest) {
          this.events.renderRequest.notify(this.current);
        }
      };
      this.hasAnimated = false;
      this.setCurrent(init);
      this.owner = options2.owner;
    }
    setCurrent(current) {
      this.current = current;
      this.updatedAt = time.now();
      if (this.canTrackVelocity === null && current !== void 0) {
        this.canTrackVelocity = isFloat(this.current);
      }
    }
    setPrevFrameValue(prevFrameValue = this.current) {
      this.prevFrameValue = prevFrameValue;
      this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
      return this.on("change", subscription);
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      const unsubscribe = this.events[eventName].add(callback);
      if (eventName === "change") {
        return () => {
          unsubscribe();
          frame.read(() => {
            if (!this.events.change.getSize()) {
              this.stop();
            }
          });
        };
      }
      return unsubscribe;
    }
    clearListeners() {
      for (const eventManagers in this.events) {
        this.events[eventManagers].clear();
      }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     */
    attach(passiveEffect, stopPassiveEffect) {
      this.passiveEffect = passiveEffect;
      this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
      if (!render || !this.passiveEffect) {
        this.updateAndNotify(v, render);
      } else {
        this.passiveEffect(v, this.updateAndNotify);
      }
    }
    setWithVelocity(prev, current, delta) {
      this.set(current);
      this.prev = void 0;
      this.prevFrameValue = prev;
      this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v, endAnimation = true) {
      this.updateAndNotify(v);
      this.prev = v;
      this.prevUpdatedAt = this.prevFrameValue = void 0;
      endAnimation && this.stop();
      if (this.stopPassiveEffect)
        this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
      return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
      return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
      const currentTime = time.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
        return 0;
      }
      const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
      return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     */
    start(startAnimation) {
      this.stop();
      return new Promise((resolve) => {
        this.hasAnimated = true;
        this.animation = startAnimation(resolve);
        if (this.events.animationStart) {
          this.events.animationStart.notify();
        }
      }).then(() => {
        if (this.events.animationComplete) {
          this.events.animationComplete.notify();
        }
        this.clearAnimation();
      });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
      if (this.animation) {
        this.animation.stop();
        if (this.events.animationCancel) {
          this.events.animationCancel.notify();
        }
      }
      this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
      this.clearListeners();
      this.stop();
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
  }
  function motionValue(init, options2) {
    return new MotionValue(init, options2);
  }
  const LazyContext = reactExports.createContext({ strict: false });
  const featureProps = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  };
  const featureDefinitions = {};
  for (const key in featureProps) {
    featureDefinitions[key] = {
      isEnabled: (props) => featureProps[key].some((name) => !!props[name])
    };
  }
  function loadFeatures(features) {
    for (const key in features) {
      featureDefinitions[key] = __spreadValues(__spreadValues({}, featureDefinitions[key]), features[key]);
    }
  }
  const validMotionProps = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport"
  ]);
  function isValidMotionProp(key) {
    return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
  }
  let shouldForward = (key) => !isValidMotionProp(key);
  function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
      return;
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  }
  try {
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
  } catch (e) {
  }
  function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
      if (key === "values" && typeof props.values === "object")
        continue;
      if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
      props["draggable"] && key.startsWith("onDrag")) {
        filteredProps[key] = props[key];
      }
    }
    return filteredProps;
  }
  function createDOMMotionComponentProxy(componentFactory) {
    if (typeof Proxy === "undefined") {
      return componentFactory;
    }
    const componentCache = /* @__PURE__ */ new Map();
    const deprecatedFactoryFunction = (...args) => {
      return componentFactory(...args);
    };
    return new Proxy(deprecatedFactoryFunction, {
      /**
       * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
       * The prop name is passed through as `key` and we can use that to generate a `motion`
       * DOM component with that name.
       */
      get: (_target, key) => {
        if (key === "create")
          return componentFactory;
        if (!componentCache.has(key)) {
          componentCache.set(key, componentFactory(key));
        }
        return componentCache.get(key);
      }
    });
  }
  const MotionContext = /* @__PURE__ */ reactExports.createContext({});
  function isAnimationControls(v) {
    return v !== null && typeof v === "object" && typeof v.start === "function";
  }
  function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
  }
  const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ];
  const variantProps = ["initial", ...variantPriorityOrder];
  function isControllingVariants(props) {
    return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
  }
  function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
  }
  function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
      const { initial, animate } = props;
      return {
        initial: initial === false || isVariantLabel(initial) ? initial : void 0,
        animate: isVariantLabel(animate) ? animate : void 0
      };
    }
    return props.inherit !== false ? context : {};
  }
  function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, reactExports.useContext(MotionContext));
    return reactExports.useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
  }
  function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
  }
  const motionComponentSymbol = Symbol.for("motionComponentSymbol");
  function isRefObject(ref) {
    return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
  }
  function useMotionRef(visualState, visualElement, externalRef) {
    return reactExports.useCallback(
      (instance) => {
        if (instance) {
          visualState.onMount && visualState.onMount(instance);
        }
        if (visualElement) {
          if (instance) {
            visualElement.mount(instance);
          } else {
            visualElement.unmount();
          }
        }
        if (externalRef) {
          if (typeof externalRef === "function") {
            externalRef(instance);
          } else if (isRefObject(externalRef)) {
            externalRef.current = instance;
          }
        }
      },
      /**
       * Only pass a new ref callback to React if we've received a visual element
       * factory. Otherwise we'll be mounting/remounting every time externalRef
       * or other dependencies change.
       */
      [visualElement]
    );
  }
  const camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
  const optimizedAppearDataId = "framerAppearId";
  const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);
  const SwitchLayoutGroupContext = reactExports.createContext({});
  function useVisualElement(Component2, visualState, props, createVisualElement, ProjectionNodeConstructor) {
    var _a, _b;
    const { visualElement: parent } = reactExports.useContext(MotionContext);
    const lazyContext = reactExports.useContext(LazyContext);
    const presenceContext = reactExports.useContext(PresenceContext);
    const reducedMotionConfig = reactExports.useContext(MotionConfigContext).reducedMotion;
    const visualElementRef = reactExports.useRef(null);
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
      visualElementRef.current = createVisualElement(Component2, {
        visualState,
        parent,
        props,
        presenceContext,
        blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
        reducedMotionConfig
      });
    }
    const visualElement = visualElementRef.current;
    const initialLayoutGroupConfig = reactExports.useContext(SwitchLayoutGroupContext);
    if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
      createProjectionNode$1(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    }
    const isMounted = reactExports.useRef(false);
    reactExports.useInsertionEffect(() => {
      if (visualElement && isMounted.current) {
        visualElement.update(props, presenceContext);
      }
    });
    const optimisedAppearId = props[optimizedAppearDataAttribute];
    const wantsHandoff = reactExports.useRef(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) == null ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) == null ? void 0 : _b.call(window, optimisedAppearId)));
    useIsomorphicLayoutEffect$1(() => {
      if (!visualElement)
        return;
      isMounted.current = true;
      window.MotionIsMounted = true;
      visualElement.updateFeatures();
      microtask.render(visualElement.render);
      if (wantsHandoff.current && visualElement.animationState) {
        visualElement.animationState.animateChanges();
      }
    });
    reactExports.useEffect(() => {
      if (!visualElement)
        return;
      if (!wantsHandoff.current && visualElement.animationState) {
        visualElement.animationState.animateChanges();
      }
      if (wantsHandoff.current) {
        queueMicrotask(() => {
          var _a2;
          (_a2 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a2.call(window, optimisedAppearId);
        });
        wantsHandoff.current = false;
      }
    });
    return visualElement;
  }
  function createProjectionNode$1(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot } = props;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
      layoutId,
      layout: layout2,
      alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
      visualElement,
      /**
       * TODO: Update options in an effect. This could be tricky as it'll be too late
       * to update by the time layout animations run.
       * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
       * ensuring it gets called if there's no potential layout animations.
       *
       */
      animationType: typeof layout2 === "string" ? layout2 : "both",
      initialPromotionConfig,
      layoutScroll,
      layoutRoot
    });
  }
  function getClosestProjectingNode(visualElement) {
    if (!visualElement)
      return void 0;
    return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
  }
  function createRendererMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component: Component2 }) {
    var _a, _b;
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
      let MeasureLayout2;
      const configAndProps = __spreadProps(__spreadValues(__spreadValues({}, reactExports.useContext(MotionConfigContext)), props), {
        layoutId: useLayoutId(props)
      });
      const { isStatic } = configAndProps;
      const context = useCreateMotionContext(props);
      const visualState = useVisualState(props, isStatic);
      if (!isStatic && isBrowser) {
        useStrictMode();
        const layoutProjection = getProjectionFunctionality(configAndProps);
        MeasureLayout2 = layoutProjection.MeasureLayout;
        context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
      }
      return jsxRuntimeExports.jsxs(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? jsxRuntimeExports.jsx(MeasureLayout2, __spreadValues({ visualElement: context.visualElement }, configAndProps)) : null, useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)] });
    }
    MotionComponent.displayName = `motion.${typeof Component2 === "string" ? Component2 : `create(${(_b = (_a = Component2.displayName) != null ? _a : Component2.name) != null ? _b : ""})`}`;
    const ForwardRefMotionComponent = reactExports.forwardRef(MotionComponent);
    ForwardRefMotionComponent[motionComponentSymbol] = Component2;
    return ForwardRefMotionComponent;
  }
  function useLayoutId({ layoutId }) {
    const layoutGroupId = reactExports.useContext(LayoutGroupContext).id;
    return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
  }
  function useStrictMode(configAndProps, preloadedFeatures) {
    reactExports.useContext(LazyContext).strict;
  }
  function getProjectionFunctionality(props) {
    const { drag: drag2, layout: layout2 } = featureDefinitions;
    if (!drag2 && !layout2)
      return {};
    const combined = __spreadValues(__spreadValues({}, drag2), layout2);
    return {
      MeasureLayout: (drag2 == null ? void 0 : drag2.isEnabled(props)) || (layout2 == null ? void 0 : layout2.isEnabled(props)) ? combined.MeasureLayout : void 0,
      ProjectionNode: combined.ProjectionNode
    };
  }
  const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
  const isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
  const startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
  const isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
      return false;
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
  };
  const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  const scaleCorrectors = {};
  function addScaleCorrector(correctors) {
    for (const key in correctors) {
      scaleCorrectors[key] = correctors[key];
      if (isCSSVariableName(key)) {
        scaleCorrectors[key].isCSSVariable = true;
      }
    }
  }
  const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
  ];
  const transformProps = new Set(transformPropOrder);
  function isForcedMotionValue(key, { layout: layout2, layoutId }) {
    return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
  }
  const isMotionValue = (value) => Boolean(value && value.getVelocity);
  const getValueAsType = (value, type) => {
    return type && typeof value === "number" ? type.transform(value) : value;
  };
  const clamp = (min, max, v) => {
    if (v > max)
      return max;
    if (v < min)
      return min;
    return v;
  };
  const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v
  };
  const alpha = __spreadProps(__spreadValues({}, number), {
    transform: (v) => clamp(0, 1, v)
  });
  const scale = __spreadProps(__spreadValues({}, number), {
    default: 1
  });
  const createUnitType = (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`
  });
  const degrees = /* @__PURE__ */ createUnitType("deg");
  const percent = /* @__PURE__ */ createUnitType("%");
  const px = /* @__PURE__ */ createUnitType("px");
  const vh = /* @__PURE__ */ createUnitType("vh");
  const vw = /* @__PURE__ */ createUnitType("vw");
  const progressPercentage = __spreadProps(__spreadValues({}, percent), {
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100)
  });
  const browserNumberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    // Misc
    backgroundPositionX: px,
    backgroundPositionY: px
  };
  const transformValueTypes = {
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px
  };
  const int = __spreadProps(__spreadValues({}, number), {
    transform: Math.round
  });
  const numberValueTypes = __spreadProps(__spreadValues(__spreadValues({}, browserNumberValueTypes), transformValueTypes), {
    zIndex: int,
    size: px,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int
  });
  const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  const numTransforms = transformPropOrder.length;
  function buildTransform(latestValues, transform, transformTemplate) {
    let transformString = "";
    let transformIsDefault = true;
    for (let i = 0; i < numTransforms; i++) {
      const key = transformPropOrder[i];
      const value = latestValues[key];
      if (value === void 0)
        continue;
      let valueIsDefault = true;
      if (typeof value === "number") {
        valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
      } else {
        valueIsDefault = parseFloat(value) === 0;
      }
      if (!valueIsDefault || transformTemplate) {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (!valueIsDefault) {
          transformIsDefault = false;
          const transformName = translateAlias[key] || key;
          transformString += `${transformName}(${valueAsType}) `;
        }
        if (transformTemplate) {
          transform[key] = valueAsType;
        }
      }
    }
    transformString = transformString.trim();
    if (transformTemplate) {
      transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    } else if (transformIsDefault) {
      transformString = "none";
    }
    return transformString;
  }
  function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    let hasTransform2 = false;
    let hasTransformOrigin = false;
    for (const key in latestValues) {
      const value = latestValues[key];
      if (transformProps.has(key)) {
        hasTransform2 = true;
        continue;
      } else if (isCSSVariableName(key)) {
        vars[key] = value;
        continue;
      } else {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (key.startsWith("origin")) {
          hasTransformOrigin = true;
          transformOrigin[key] = valueAsType;
        } else {
          style[key] = valueAsType;
        }
      }
    }
    if (!latestValues.transform) {
      if (hasTransform2 || transformTemplate) {
        style.transform = buildTransform(latestValues, state.transform, transformTemplate);
      } else if (style.transform) {
        style.transform = "none";
      }
    }
    if (hasTransformOrigin) {
      const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
      style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
  }
  const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
      if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
        target[key] = source[key];
      }
    }
  }
  function useInitialMotionValues({ transformTemplate }, visualState) {
    return reactExports.useMemo(() => {
      const state = createHtmlRenderState();
      buildHTMLStyles(state, visualState, transformTemplate);
      return Object.assign({}, state.vars, state.style);
    }, [visualState]);
  }
  function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
  }
  function useHTMLProps(props, visualState) {
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
      htmlProps.draggable = false;
      style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
      style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
      htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
  }
  const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
  ];
  function isSVGComponent(Component2) {
    if (
      /**
       * If it's not a string, it's a custom React component. Currently we only support
       * HTML custom React components.
       */
      typeof Component2 !== "string" || /**
      * If it contains a dash, the element is a custom HTML webcomponent.
      */
      Component2.includes("-")
    ) {
      return false;
    } else if (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      lowercaseSVGElements.indexOf(Component2) > -1 || /**
      * If it contains a capital letter, it's an SVG component
      */
      /[A-Z]/u.test(Component2)
    ) {
      return true;
    }
    return false;
  }
  const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    attrs.pathLength = 1;
    const keys = useDashCase ? dashKeys : camelKeys;
    attrs[keys.offset] = px.transform(-offset);
    const pathLength = px.transform(length);
    const pathSpacing = px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
  }
  function calcOrigin$1(origin, offset, size) {
    return typeof origin === "string" ? origin : px.transform(offset + size * origin);
  }
  function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
  }
  function buildSVGAttrs(state, _c, isSVGTag2, transformTemplate) {
    var _d = _c, {
      attrX,
      attrY,
      attrScale,
      originX,
      originY,
      pathLength,
      pathSpacing = 1,
      pathOffset = 0
    } = _d, latest = __objRest(_d, [
      "attrX",
      "attrY",
      "attrScale",
      "originX",
      "originY",
      "pathLength",
      "pathSpacing",
      "pathOffset"
    ]);
    buildHTMLStyles(state, latest, transformTemplate);
    if (isSVGTag2) {
      if (state.style.viewBox) {
        state.attrs.viewBox = state.style.viewBox;
      }
      return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    if (attrs.transform) {
      if (dimensions)
        style.transform = attrs.transform;
      delete attrs.transform;
    }
    if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
      style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
    }
    if (attrX !== void 0)
      attrs.x = attrX;
    if (attrY !== void 0)
      attrs.y = attrY;
    if (attrScale !== void 0)
      attrs.scale = attrScale;
    if (pathLength !== void 0) {
      buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
  }
  const createSvgRenderState = () => __spreadProps(__spreadValues({}, createHtmlRenderState()), {
    attrs: {}
  });
  const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
  function useSVGProps(props, visualState, _isStatic, Component2) {
    const visualProps = reactExports.useMemo(() => {
      const state = createSvgRenderState();
      buildSVGAttrs(state, visualState, isSVGTag(Component2), props.transformTemplate);
      return __spreadProps(__spreadValues({}, state.attrs), {
        style: __spreadValues({}, state.style)
      });
    }, [visualState]);
    if (props.style) {
      const rawStyles = {};
      copyRawValuesOnly(rawStyles, props.style, props);
      visualProps.style = __spreadValues(__spreadValues({}, rawStyles), visualProps.style);
    }
    return visualProps;
  }
  function createUseRender(forwardMotionProps = false) {
    const useRender = (Component2, props, ref, { latestValues }, isStatic) => {
      const useVisualProps = isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
      const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
      const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
      const elementProps = Component2 !== reactExports.Fragment ? __spreadProps(__spreadValues(__spreadValues({}, filteredProps), visualProps), { ref }) : {};
      const { children } = props;
      const renderedChildren = reactExports.useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
      return reactExports.createElement(Component2, __spreadProps(__spreadValues({}, elementProps), {
        children: renderedChildren
      }));
    };
    return useRender;
  }
  function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement == null ? void 0 : visualElement.values.forEach((value, key) => {
      state[0][key] = value.get();
      state[1][key] = value.getVelocity();
    });
    return state;
  }
  function resolveVariantFromProps(props, definition, custom, visualElement) {
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    if (typeof definition === "string") {
      definition = props.variants && props.variants[definition];
    }
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    return definition;
  }
  const isKeyframesTarget = (v) => {
    return Array.isArray(v);
  };
  const isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
  };
  const resolveFinalValueInKeyframes = (v) => {
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
  };
  function resolveMotionValue(value) {
    const unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
  }
  function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2, createRenderState, onUpdate }, props, context, presenceContext) {
    const state = {
      latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps2),
      renderState: createRenderState()
    };
    if (onUpdate) {
      state.onMount = (instance) => onUpdate(__spreadValues({ props, current: instance }, state));
      state.onUpdate = (visualElement) => onUpdate(visualElement);
    }
    return state;
  }
  const makeUseVisualState = (config) => (props, isStatic) => {
    const context = reactExports.useContext(MotionContext);
    const presenceContext = reactExports.useContext(PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : useConstant(make);
  };
  function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
      values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
      if (initial === void 0)
        initial = context.initial;
      if (animate === void 0)
        animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
      const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
      for (let i = 0; i < list.length; i++) {
        const resolved = resolveVariantFromProps(props, list[i]);
        if (resolved) {
          const _a = resolved, { transitionEnd, transition } = _a, target = __objRest(_a, ["transitionEnd", "transition"]);
          for (const key in target) {
            let valueTarget = target[key];
            if (Array.isArray(valueTarget)) {
              const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
              valueTarget = valueTarget[index];
            }
            if (valueTarget !== null) {
              values[key] = valueTarget;
            }
          }
          for (const key in transitionEnd) {
            values[key] = transitionEnd[key];
          }
        }
      }
    }
    return values;
  }
  function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
    var _a;
    const { style } = props;
    const newValues = {};
    for (const key in style) {
      if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || ((_a = visualElement == null ? void 0 : visualElement.getValue(key)) == null ? void 0 : _a.liveStyle) !== void 0) {
        newValues[key] = style[key];
      }
    }
    return newValues;
  }
  const htmlMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
      createRenderState: createHtmlRenderState
    })
  };
  function updateSVGDimensions(instance, renderState) {
    try {
      renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
    } catch (e) {
      renderState.dimensions = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
  }
  function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    for (const key in vars) {
      element.style.setProperty(key, vars[key]);
    }
  }
  const camelCaseAttributes = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]);
  function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, void 0, projection);
    for (const key in renderState.attrs) {
      element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
  }
  function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
    for (const key in props) {
      if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
        const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
        newValues[targetKey] = props[key];
      }
    }
    return newValues;
  }
  const layoutProps = ["x", "y", "width", "height", "cx", "cy", "r"];
  const svgMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps,
      createRenderState: createSvgRenderState,
      onUpdate: ({ props, prevProps, current, renderState, latestValues }) => {
        if (!current)
          return;
        let hasTransform2 = !!props.drag;
        if (!hasTransform2) {
          for (const key in latestValues) {
            if (transformProps.has(key)) {
              hasTransform2 = true;
              break;
            }
          }
        }
        if (!hasTransform2)
          return;
        let needsMeasure = !prevProps;
        if (prevProps) {
          for (let i = 0; i < layoutProps.length; i++) {
            const key = layoutProps[i];
            if (props[key] !== prevProps[key]) {
              needsMeasure = true;
            }
          }
        }
        if (!needsMeasure)
          return;
        frame.read(() => {
          updateSVGDimensions(current, renderState);
          frame.render(() => {
            buildSVGAttrs(renderState, latestValues, isSVGTag(current.tagName), props.transformTemplate);
            renderSVG(current, renderState);
          });
        });
      }
    })
  };
  function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
    return function createMotionComponent2(Component2, { forwardMotionProps } = { forwardMotionProps: false }) {
      const baseConfig = isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig;
      const config = __spreadProps(__spreadValues({}, baseConfig), {
        preloadedFeatures,
        useRender: createUseRender(forwardMotionProps),
        createVisualElement,
        Component: Component2
      });
      return createRendererMotionComponent(config);
    };
  }
  function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
  }
  const positionalKeys = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...transformPropOrder
  ]);
  function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
      visualElement.getValue(key).set(value);
    } else {
      visualElement.addValue(key, motionValue(value));
    }
  }
  function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let _a = resolved || {}, { transitionEnd = {}, transition = {} } = _a, target = __objRest(_a, ["transitionEnd", "transition"]);
    target = __spreadValues(__spreadValues({}, target), transitionEnd);
    for (const key in target) {
      const value = resolveFinalValueInKeyframes(target[key]);
      setMotionValue(visualElement, key, value);
    }
  }
  function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
  }
  function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    if (isWillChangeMotionValue(willChange)) {
      return willChange.add(key);
    }
  }
  function getOptimisedAppearId(visualElement) {
    return visualElement.props[optimizedAppearDataAttribute];
  }
  const calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
  const subdivisionPrecision = 1e-7;
  const subdivisionMaxIterations = 12;
  function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
      currentT = lowerBound + (upperBound - lowerBound) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - x;
      if (currentX > 0) {
        upperBound = currentT;
      } else {
        lowerBound = currentT;
      }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
  }
  function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
      return noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
  }
  const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  const reverseEasing = (easing) => (p) => 1 - easing(1 - p);
  const backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
  const backIn = /* @__PURE__ */ reverseEasing(backOut);
  const backInOut = /* @__PURE__ */ mirrorEasing(backIn);
  const anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  const circIn = (p) => 1 - Math.sin(Math.acos(p));
  const circOut = reverseEasing(circIn);
  const circInOut = mirrorEasing(circIn);
  const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);
  function isNone(value) {
    if (typeof value === "number") {
      return value === 0;
    } else if (value !== null) {
      return value === "none" || value === "0" || isZeroValueString(value);
    } else {
      return true;
    }
  }
  const sanitize = (v) => Math.round(v * 1e5) / 1e5;
  const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function isNullish(v) {
    return v == null;
  }
  const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
  const isColorString = (type, testProp) => (v) => {
    return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
  };
  const splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
      return v;
    const [a, b, c, alpha2] = v.match(floatRegex);
    return {
      [aName]: parseFloat(a),
      [bName]: parseFloat(b),
      [cName]: parseFloat(c),
      alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
    };
  };
  const clampRgbUnit = (v) => clamp(0, 255, v);
  const rgbUnit = __spreadProps(__spreadValues({}, number), {
    transform: (v) => Math.round(clampRgbUnit(v))
  });
  const rgba = {
    test: /* @__PURE__ */ isColorString("rgb", "red"),
    parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
  };
  function parseHex(v) {
    let r2 = "";
    let g = "";
    let b = "";
    let a = "";
    if (v.length > 5) {
      r2 = v.substring(1, 3);
      g = v.substring(3, 5);
      b = v.substring(5, 7);
      a = v.substring(7, 9);
    } else {
      r2 = v.substring(1, 2);
      g = v.substring(2, 3);
      b = v.substring(3, 4);
      a = v.substring(4, 5);
      r2 += r2;
      g += g;
      b += b;
      a += a;
    }
    return {
      red: parseInt(r2, 16),
      green: parseInt(g, 16),
      blue: parseInt(b, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
    };
  }
  const hex = {
    test: /* @__PURE__ */ isColorString("#"),
    parse: parseHex,
    transform: rgba.transform
  };
  const hsla = {
    test: /* @__PURE__ */ isColorString("hsl", "hue"),
    parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
      return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
  };
  const color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
      if (rgba.test(v)) {
        return rgba.parse(v);
      } else if (hsla.test(v)) {
        return hsla.parse(v);
      } else {
        return hex.parse(v);
      }
    },
    transform: (v) => {
      return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
    }
  };
  const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function test(v) {
    var _a, _b;
    return isNaN(v) && typeof v === "string" && (((_a = v.match(floatRegex)) == null ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) == null ? void 0 : _b.length) || 0) > 0;
  }
  const NUMBER_TOKEN = "number";
  const COLOR_TOKEN = "color";
  const VAR_TOKEN = "var";
  const VAR_FUNCTION_TOKEN = "var(";
  const SPLIT_TOKEN = "${}";
  const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
      color: [],
      number: [],
      var: []
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
      if (color.test(parsedValue)) {
        indexes.color.push(i);
        types.push(COLOR_TOKEN);
        values.push(color.parse(parsedValue));
      } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
        indexes.var.push(i);
        types.push(VAR_TOKEN);
        values.push(parsedValue);
      } else {
        indexes.number.push(i);
        types.push(NUMBER_TOKEN);
        values.push(parseFloat(parsedValue));
      }
      ++i;
      return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
  }
  function parseComplexValue(v) {
    return analyseComplexValue(v).values;
  }
  function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v) => {
      let output = "";
      for (let i = 0; i < numSections; i++) {
        output += split[i];
        if (v[i] !== void 0) {
          const type = types[i];
          if (type === NUMBER_TOKEN) {
            output += sanitize(v[i]);
          } else if (type === COLOR_TOKEN) {
            output += color.transform(v[i]);
          } else {
            output += v[i];
          }
        }
      }
      return output;
    };
  }
  const convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
  function getAnimatableNone$1(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
  }
  const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone: getAnimatableNone$1
  };
  const maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
      return v;
    const [number2] = value.match(floatRegex) || [];
    if (!number2)
      return v;
    const unit = value.replace(number2, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number2 !== value)
      defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
  }
  const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
  const filter = __spreadProps(__spreadValues({}, complex), {
    getAnimatableNone: (v) => {
      const functions = v.match(functionRegex);
      return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
  });
  const defaultValueTypes = __spreadProps(__spreadValues({}, numberValueTypes), {
    // Color props
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter
  });
  const getDefaultValueType = (key) => defaultValueTypes[key];
  function getAnimatableNone(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
      defaultValueType = complex;
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
  }
  const invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = void 0;
    while (i < unresolvedKeyframes.length && !animatableTemplate) {
      const keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
        animatableTemplate = unresolvedKeyframes[i];
      }
      i++;
    }
    if (animatableTemplate && name) {
      for (const noneIndex of noneKeyframeIndexes) {
        unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
      }
    }
  }
  const radToDeg = (rad) => rad * 180 / Math.PI;
  const rotate = (v) => {
    const angle = radToDeg(Math.atan2(v[1], v[0]));
    return rebaseAngle(angle);
  };
  const matrix2dParsers = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
    rotate,
    rotateZ: rotate,
    skewX: (v) => radToDeg(Math.atan(v[1])),
    skewY: (v) => radToDeg(Math.atan(v[2])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
  };
  const rebaseAngle = (angle) => {
    angle = angle % 360;
    if (angle < 0)
      angle += 360;
    return angle;
  };
  const rotateZ = rotate;
  const scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
  const scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
  const matrix3dParsers = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX,
    scaleY,
    scale: (v) => (scaleX(v) + scaleY(v)) / 2,
    rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
    rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
    rotateZ,
    rotate: rotateZ,
    skewX: (v) => radToDeg(Math.atan(v[4])),
    skewY: (v) => radToDeg(Math.atan(v[1])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
  };
  function defaultTransformValue(name) {
    return name.includes("scale") ? 1 : 0;
  }
  function parseValueFromTransform(transform, name) {
    if (!transform || transform === "none") {
      return defaultTransformValue(name);
    }
    const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let parsers;
    let match;
    if (matrix3dMatch) {
      parsers = matrix3dParsers;
      match = matrix3dMatch;
    } else {
      const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      parsers = matrix2dParsers;
      match = matrix2dMatch;
    }
    if (!match) {
      return defaultTransformValue(name);
    }
    const valueParser = parsers[name];
    const values = match[1].split(",").map(convertTransformToNumber);
    return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
  }
  const readTransformValue = (instance, name) => {
    const { transform = "none" } = getComputedStyle(instance);
    return parseValueFromTransform(transform, name);
  };
  function convertTransformToNumber(value) {
    return parseFloat(value.trim());
  }
  const isNumOrPxType = (v) => v === number || v === px;
  const transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
  const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
  function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
      const value = visualElement.getValue(key);
      if (value !== void 0) {
        removedTransforms.push([key, value.get()]);
        value.set(key.startsWith("scale") ? 1 : 0);
      }
    });
    return removedTransforms;
  }
  const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
    y: (_bbox, { transform }) => parseValueFromTransform(transform, "y")
  };
  positionalValues.translateX = positionalValues.x;
  positionalValues.translateY = positionalValues.y;
  const toResolve = /* @__PURE__ */ new Set();
  let isScheduled = false;
  let anyNeedsMeasurement = false;
  function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
      const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
      const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
      const transformsToRestore = /* @__PURE__ */ new Map();
      elementsToMeasure.forEach((element) => {
        const removedTransforms = removeNonTranslationalTransform(element);
        if (!removedTransforms.length)
          return;
        transformsToRestore.set(element, removedTransforms);
        element.render();
      });
      resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
      elementsToMeasure.forEach((element) => {
        element.render();
        const restore = transformsToRestore.get(element);
        if (restore) {
          restore.forEach(([key, value]) => {
            var _a;
            (_a = element.getValue(key)) == null ? void 0 : _a.set(value);
          });
        }
      });
      resolversToMeasure.forEach((resolver) => resolver.measureEndState());
      resolversToMeasure.forEach((resolver) => {
        if (resolver.suspendedScrollY !== void 0) {
          window.scrollTo(0, resolver.suspendedScrollY);
        }
      });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete());
    toResolve.clear();
  }
  function readAllKeyframes() {
    toResolve.forEach((resolver) => {
      resolver.readKeyframes();
      if (resolver.needsMeasurement) {
        anyNeedsMeasurement = true;
      }
    });
  }
  function flushKeyframeResolvers() {
    readAllKeyframes();
    measureAllKeyframes();
  }
  class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
      this.isComplete = false;
      this.isAsync = false;
      this.needsMeasurement = false;
      this.isScheduled = false;
      this.unresolvedKeyframes = [...unresolvedKeyframes];
      this.onComplete = onComplete;
      this.name = name;
      this.motionValue = motionValue2;
      this.element = element;
      this.isAsync = isAsync;
    }
    scheduleResolve() {
      this.isScheduled = true;
      if (this.isAsync) {
        toResolve.add(this);
        if (!isScheduled) {
          isScheduled = true;
          frame.read(readAllKeyframes);
          frame.resolveKeyframes(measureAllKeyframes);
        }
      } else {
        this.readKeyframes();
        this.complete();
      }
    }
    readKeyframes() {
      const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        if (unresolvedKeyframes[i] === null) {
          if (i === 0) {
            const currentValue = motionValue2 == null ? void 0 : motionValue2.get();
            const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
            if (currentValue !== void 0) {
              unresolvedKeyframes[0] = currentValue;
            } else if (element && name) {
              const valueAsRead = element.readValue(name, finalKeyframe);
              if (valueAsRead !== void 0 && valueAsRead !== null) {
                unresolvedKeyframes[0] = valueAsRead;
              }
            }
            if (unresolvedKeyframes[0] === void 0) {
              unresolvedKeyframes[0] = finalKeyframe;
            }
            if (motionValue2 && currentValue === void 0) {
              motionValue2.set(unresolvedKeyframes[0]);
            }
          } else {
            unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
          }
        }
      }
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete() {
      this.isComplete = true;
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
      toResolve.delete(this);
    }
    cancel() {
      if (!this.isComplete) {
        this.isScheduled = false;
        toResolve.delete(this);
      }
    }
    resume() {
      if (!this.isComplete)
        this.scheduleResolve();
    }
  }
  const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
  const splitCSSVariableRegex = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
  );
  function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
      return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 != null ? token1 : token2}`, fallback];
  }
  function getVariableValue(current, element, depth = 1) {
    const [token, fallback] = parseCSSVariable(current);
    if (!token)
      return;
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
      const trimmed = resolved.trim();
      return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
  }
  const testValueType = (v) => (type) => type.test(v);
  const auto = {
    test: (v) => v === "auto",
    parse: (v) => v
  };
  const dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
  const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));
  class DOMKeyframesResolver extends KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
      super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes, element, name } = this;
      if (!element || !element.current)
        return;
      super.readKeyframes();
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        let keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string") {
          keyframe = keyframe.trim();
          if (isCSSVariableToken(keyframe)) {
            const resolved = getVariableValue(keyframe, element.current);
            if (resolved !== void 0) {
              unresolvedKeyframes[i] = resolved;
            }
            if (i === unresolvedKeyframes.length - 1) {
              this.finalKeyframe = keyframe;
            }
          }
        }
      }
      this.resolveNoneKeyframes();
      if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
        return;
      }
      const [origin, target] = unresolvedKeyframes;
      const originType = findDimensionValueType(origin);
      const targetType = findDimensionValueType(target);
      if (originType === targetType)
        return;
      if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
          const value = unresolvedKeyframes[i];
          if (typeof value === "string") {
            unresolvedKeyframes[i] = parseFloat(value);
          }
        }
      } else {
        this.needsMeasurement = true;
      }
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes, name } = this;
      const noneKeyframeIndexes = [];
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        if (isNone(unresolvedKeyframes[i])) {
          noneKeyframeIndexes.push(i);
        }
      }
      if (noneKeyframeIndexes.length) {
        makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
      }
    }
    measureInitialState() {
      const { element, unresolvedKeyframes, name } = this;
      if (!element || !element.current)
        return;
      if (name === "height") {
        this.suspendedScrollY = window.pageYOffset;
      }
      this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      unresolvedKeyframes[0] = this.measuredOrigin;
      const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (measureKeyframe !== void 0) {
        element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
      }
    }
    measureEndState() {
      var _a;
      const { element, name, unresolvedKeyframes } = this;
      if (!element || !element.current)
        return;
      const value = element.getValue(name);
      value && value.jump(this.measuredOrigin, false);
      const finalKeyframeIndex = unresolvedKeyframes.length - 1;
      const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
      unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      if (finalKeyframe !== null && this.finalKeyframe === void 0) {
        this.finalKeyframe = finalKeyframe;
      }
      if ((_a = this.removedTransforms) == null ? void 0 : _a.length) {
        this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
          element.getValue(unsetTransformName).set(unsetTransformValue);
        });
      }
      this.resolveNoneKeyframes();
    }
  }
  const isAnimatable = (value, name) => {
    if (name === "zIndex")
      return false;
    if (typeof value === "number" || Array.isArray(value))
      return true;
    if (typeof value === "string" && // It's animatable if we have a string
    (complex.test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(")) {
      return true;
    }
    return false;
  };
  function hasKeyframesChanged(keyframes2) {
    const current = keyframes2[0];
    if (keyframes2.length === 1)
      return true;
    for (let i = 0; i < keyframes2.length; i++) {
      if (keyframes2[i] !== current)
        return true;
    }
  }
  function canAnimate(keyframes2, name, type, velocity) {
    const originKeyframe = keyframes2[0];
    if (originKeyframe === null)
      return false;
    if (name === "display" || name === "visibility")
      return true;
    const targetKeyframe = keyframes2[keyframes2.length - 1];
    const isOriginAnimatable = isAnimatable(originKeyframe, name);
    const isTargetAnimatable = isAnimatable(targetKeyframe, name);
    if (!isOriginAnimatable || !isTargetAnimatable) {
      return false;
    }
    return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
  }
  const isNotNull = (value) => value !== null;
  function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes2.filter(isNotNull);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
  }
  const MAX_RESOLVE_DELAY = 40;
  class BaseAnimation {
    constructor(_e) {
      var _f = _e, { autoplay = true, delay: delay2 = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop" } = _f, options2 = __objRest(_f, ["autoplay", "delay", "type", "repeat", "repeatDelay", "repeatType"]);
      this.isStopped = false;
      this.hasAttemptedResolve = false;
      this.createdAt = time.now();
      this.options = __spreadValues({
        autoplay,
        delay: delay2,
        type,
        repeat,
        repeatDelay,
        repeatType
      }, options2);
      this.updateFinishedPromise();
    }
    /**
     * This method uses the createdAt and resolvedAt to calculate the
     * animation startTime. *Ideally*, we would use the createdAt time as t=0
     * as the following frame would then be the first frame of the animation in
     * progress, which would feel snappier.
     *
     * However, if there's a delay (main thread work) between the creation of
     * the animation and the first commited frame, we prefer to use resolvedAt
     * to avoid a sudden jump into the animation.
     */
    calcStartTime() {
      if (!this.resolvedAt)
        return this.createdAt;
      return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */
    get resolved() {
      if (!this._resolved && !this.hasAttemptedResolve) {
        flushKeyframeResolvers();
      }
      return this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
    onKeyframesResolved(keyframes2, finalKeyframe) {
      this.resolvedAt = time.now();
      this.hasAttemptedResolve = true;
      const { name, type, velocity, delay: delay2, onComplete, onUpdate, isGenerator: isGenerator2 } = this.options;
      if (!isGenerator2 && !canAnimate(keyframes2, name, type, velocity)) {
        if (!delay2) {
          onUpdate && onUpdate(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
          onComplete && onComplete();
          this.resolveFinishedPromise();
          return;
        } else {
          this.options.duration = 0;
        }
      }
      const resolvedAnimation = this.initPlayback(keyframes2, finalKeyframe);
      if (resolvedAnimation === false)
        return;
      this._resolved = __spreadValues({
        keyframes: keyframes2,
        finalKeyframe
      }, resolvedAnimation);
      this.onPostResolved();
    }
    onPostResolved() {
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve, reject) {
      return this.currentFinishedPromise.then(resolve, reject);
    }
    flatten() {
      if (!this.options.allowFlatten)
        return;
      this.options.type = "keyframes";
      this.options.ease = "linear";
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((resolve) => {
        this.resolveFinishedPromise = resolve;
      });
    }
  }
  const mixNumber$1 = (from, to, progress2) => {
    return from + (to - from) * progress2;
  };
  function hueToRgb(p, q, t) {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
      red = green = blue = lightness;
    } else {
      const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
      const p = 2 * lightness - q;
      red = hueToRgb(p, q, hue + 1 / 3);
      green = hueToRgb(p, q, hue);
      blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
      red: Math.round(red * 255),
      green: Math.round(green * 255),
      blue: Math.round(blue * 255),
      alpha: alpha2
    };
  }
  function mixImmediate(a, b) {
    return (p) => p > 0 ? b : a;
  }
  const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
  };
  const colorTypes = [hex, rgba, hsla];
  const getColorType = (v) => colorTypes.find((type) => type.test(v));
  function asRGBA(color2) {
    const type = getColorType(color2);
    if (!Boolean(type))
      return false;
    let model = type.parse(color2);
    if (type === hsla) {
      model = hslaToRgba(model);
    }
    return model;
  }
  const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
      return mixImmediate(from, to);
    }
    const blended = __spreadValues({}, fromRGBA);
    return (v) => {
      blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
      blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
      blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
      blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v);
      return rgba.transform(blended);
    };
  };
  const combineFunctions = (a, b) => (v) => b(a(v));
  const pipe = (...transformers) => transformers.reduce(combineFunctions);
  const invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
  function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
      return (p) => p <= 0 ? origin : target;
    } else {
      return (p) => p >= 1 ? target : origin;
    }
  }
  function mixNumber(a, b) {
    return (p) => mixNumber$1(a, b, p);
  }
  function getMixer(a) {
    if (typeof a === "number") {
      return mixNumber;
    } else if (typeof a === "string") {
      return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
    } else if (Array.isArray(a)) {
      return mixArray;
    } else if (typeof a === "object") {
      return color.test(a) ? mixColor : mixObject;
    }
    return mixImmediate;
  }
  function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
    return (p) => {
      for (let i = 0; i < numValues; i++) {
        output[i] = blendValue[i](p);
      }
      return output;
    };
  }
  function mixObject(a, b) {
    const output = __spreadValues(__spreadValues({}, a), b);
    const blendValue = {};
    for (const key in output) {
      if (a[key] !== void 0 && b[key] !== void 0) {
        blendValue[key] = getMixer(a[key])(a[key], b[key]);
      }
    }
    return (v) => {
      for (const key in blendValue) {
        output[key] = blendValue[key](v);
      }
      return output;
    };
  }
  function matchOrder(origin, target) {
    var _a;
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < target.values.length; i++) {
      const type = target.types[i];
      const originIndex = origin.indexes[type][pointers[type]];
      const originValue = (_a = origin.values[originIndex]) != null ? _a : 0;
      orderedOrigin[i] = originValue;
      pointers[type]++;
    }
    return orderedOrigin;
  }
  const mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyseComplexValue(origin);
    const targetStats = analyseComplexValue(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
      if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
        return mixVisibility(origin, target);
      }
      return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
      return mixImmediate(origin, target);
    }
  };
  function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
      return mixNumber$1(from, to, p);
    }
    const mixer = getMixer(from);
    return mixer(from, to);
  }
  const velocitySampleDuration = 5;
  function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t - prevT);
  }
  const springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    // Default duration/bounce-based options
    duration: 800,
    // in ms
    bounce: 0.3,
    visualDuration: 0.3,
    // in seconds
    // Rest thresholds
    restSpeed: {
      granular: 0.01,
      default: 2
    },
    restDelta: {
      granular: 5e-3,
      default: 0.5
    },
    // Limits
    minDuration: 0.01,
    // in seconds
    maxDuration: 10,
    // in seconds
    minDamping: 0.05,
    maxDamping: 1
  };
  const safeMin = 1e-3;
  function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
    let envelope;
    let derivative;
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
    duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
      envelope = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const a = exponentialDecay - velocity;
        const b = calcAngularFreq(undampedFreq2, dampingRatio);
        const c = Math.exp(-delta);
        return safeMin - a / b * c;
      };
      derivative = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const d = delta * velocity + velocity;
        const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
        const f = Math.exp(-delta);
        const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
        const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
        return factor * ((d - e) * f) / g;
      };
    } else {
      envelope = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (undampedFreq2 - velocity) * duration + 1;
        return -1e-3 + a * b;
      };
      derivative = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (velocity - undampedFreq2) * (duration * duration);
        return a * b;
      };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = /* @__PURE__ */ secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
      return {
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        duration
      };
    } else {
      const stiffness = Math.pow(undampedFreq, 2) * mass;
      return {
        stiffness,
        damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        duration
      };
    }
  }
  const rootIterations = 12;
  function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
      result = result - envelope(result) / derivative(result);
    }
    return result;
  }
  function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
  }
  const durationKeys = ["duration", "bounce"];
  const physicsKeys = ["stiffness", "damping", "mass"];
  function isSpringType(options2, keys) {
    return keys.some((key) => options2[key] !== void 0);
  }
  function getSpringOptions(options2) {
    let springOptions = __spreadValues({
      velocity: springDefaults.velocity,
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      mass: springDefaults.mass,
      isResolvedFromDuration: false
    }, options2);
    if (!isSpringType(options2, physicsKeys) && isSpringType(options2, durationKeys)) {
      if (options2.visualDuration) {
        const visualDuration = options2.visualDuration;
        const root = 2 * Math.PI / (visualDuration * 1.2);
        const stiffness = root * root;
        const damping = 2 * clamp(0.05, 1, 1 - (options2.bounce || 0)) * Math.sqrt(stiffness);
        springOptions = __spreadProps(__spreadValues({}, springOptions), {
          mass: springDefaults.mass,
          stiffness,
          damping
        });
      } else {
        const derived = findSpring(options2);
        springOptions = __spreadProps(__spreadValues(__spreadValues({}, springOptions), derived), {
          mass: springDefaults.mass
        });
        springOptions.isResolvedFromDuration = true;
      }
    }
    return springOptions;
  }
  function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
    const options2 = typeof optionsOrVisualDuration !== "object" ? {
      visualDuration: optionsOrVisualDuration,
      keyframes: [0, 1],
      bounce
    } : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options2;
    const origin = options2.keyframes[0];
    const target = options2.keyframes[options2.keyframes.length - 1];
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions(__spreadProps(__spreadValues({}, options2), {
      velocity: -/* @__PURE__ */ millisecondsToSeconds(options2.velocity || 0)
    }));
    const initialVelocity = velocity || 0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(stiffness / mass));
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
    let resolveSpring;
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
    const generator = {
      calculatedDuration: isResolvedFromDuration ? duration || null : null,
      next: (t) => {
        const current = resolveSpring(t);
        if (!isResolvedFromDuration) {
          let currentVelocity = 0;
          if (dampingRatio < 1) {
            currentVelocity = t === 0 ? /* @__PURE__ */ secondsToMilliseconds(initialVelocity) : calcGeneratorVelocity(resolveSpring, t, current);
          }
          const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
          const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
          state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        } else {
          state.done = t >= duration;
        }
        state.value = state.done ? target : current;
        return state;
      },
      toString: () => {
        const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
        const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
        return calculatedDuration + "ms " + easing;
      },
      toTransition: () => {
      }
    };
    return generator;
  }
  spring.applyToOptions = (options2) => {
    const generatorOptions = createGeneratorEasing(options2, 100, spring);
    options2.ease = supportsLinearEasing() ? generatorOptions.ease : "easeOut";
    options2.duration = /* @__PURE__ */ secondsToMilliseconds(generatorOptions.duration);
    options2.type = "keyframes";
    return options2;
  };
  function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const origin = keyframes2[0];
    const state = {
      done: false,
      value: origin
    };
    const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
    const nearestBoundary = (v) => {
      if (min === void 0)
        return max;
      if (max === void 0)
        return min;
      return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
    if (target !== ideal)
      amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
      const delta = calcDelta(t);
      const latest = calcLatest(t);
      state.done = Math.abs(delta) <= restDelta;
      state.value = state.done ? target : latest;
    };
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
      if (!isOutOfBounds(state.value))
        return;
      timeReachedBoundary = t;
      spring$1 = spring({
        keyframes: [state.value, nearestBoundary(state.value)],
        velocity: calcGeneratorVelocity(calcLatest, t, state.value),
        // TODO: This should be passing * 1000
        damping: bounceDamping,
        stiffness: bounceStiffness,
        restDelta,
        restSpeed
      });
    };
    checkCatchBoundary(0);
    return {
      calculatedDuration: null,
      next: (t) => {
        let hasUpdatedFrame = false;
        if (!spring$1 && timeReachedBoundary === void 0) {
          hasUpdatedFrame = true;
          applyFriction(t);
          checkCatchBoundary(t);
        }
        if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
          return spring$1.next(t - timeReachedBoundary);
        } else {
          !hasUpdatedFrame && applyFriction(t);
          return state;
        }
      }
    };
  }
  const easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
  const easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
  const easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);
  const isEasingArray = (ease2) => {
    return Array.isArray(ease2) && typeof ease2[0] !== "number";
  };
  const easingLookup = {
    linear: noop,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate
  };
  const easingDefinitionToFunction = (definition) => {
    if (isBezierDefinition(definition)) {
      invariant(definition.length === 4);
      const [x1, y1, x2, y2] = definition;
      return cubicBezier(x1, y1, x2, y2);
    } else if (typeof definition === "string") {
      return easingLookup[definition];
    }
    return definition;
  };
  function createMixers(output, ease2, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || mix;
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
      let mixer = mixerFactory(output[i], output[i + 1]);
      if (ease2) {
        const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
        mixer = pipe(easingFunction, mixer);
      }
      mixers.push(mixer);
    }
    return mixers;
  }
  function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length);
    if (inputLength === 1)
      return () => output[0];
    if (inputLength === 2 && output[0] === output[1])
      return () => output[1];
    const isZeroDeltaRange = input[0] === input[1];
    if (input[0] > input[inputLength - 1]) {
      input = [...input].reverse();
      output = [...output].reverse();
    }
    const mixers = createMixers(output, ease2, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
      if (isZeroDeltaRange && v < input[0])
        return output[0];
      let i = 0;
      if (numMixers > 1) {
        for (; i < input.length - 2; i++) {
          if (v < input[i + 1])
            break;
        }
      }
      const progressInRange = /* @__PURE__ */ progress(input[i], input[i + 1], v);
      return mixers[i](progressInRange);
    };
    return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
  }
  function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
      const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
      offset.push(mixNumber$1(min, 1, offsetProgress));
    }
  }
  function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
  }
  function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
  }
  function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
  }
  function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
    const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
    const state = {
      done: false,
      value: keyframeValues[0]
    };
    const absoluteTimes = convertOffsetToTimes(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
      duration
    );
    const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
      ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
      calculatedDuration: duration,
      next: (t) => {
        state.value = mapTimeToKeyframe(t);
        state.done = t >= duration;
        return state;
      }
    };
  }
  const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
      start: () => frame.update(passTimestamp, true),
      stop: () => cancelFrame(passTimestamp),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => frameData.isProcessing ? frameData.timestamp : time.now()
    };
  };
  const generators = {
    decay: inertia,
    inertia,
    tween: keyframes,
    keyframes,
    spring
  };
  const percentToProgress = (percent2) => percent2 / 100;
  class MainThreadAnimation extends BaseAnimation {
    constructor(options2) {
      super(options2);
      this.holdTime = null;
      this.cancelTime = null;
      this.currentTime = 0;
      this.playbackSpeed = 1;
      this.pendingPlayState = "running";
      this.startTime = null;
      this.state = "idle";
      this.stop = () => {
        this.resolver.cancel();
        this.isStopped = true;
        if (this.state === "idle")
          return;
        this.teardown();
        const { onStop } = this.options;
        onStop && onStop();
      };
      const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
      const KeyframeResolver$1 = (element == null ? void 0 : element.KeyframeResolver) || KeyframeResolver;
      const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
      this.resolver = new KeyframeResolver$1(keyframes2, onResolved, name, motionValue2, element);
      this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten();
      if (this._resolved) {
        Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
      }
    }
    initPlayback(keyframes$1) {
      const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = this.options;
      const generatorFactory = isGenerator(type) ? type : generators[type] || keyframes;
      let mapPercentToKeyframes;
      let mirroredGenerator;
      if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
        mapPercentToKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
        keyframes$1 = [0, 100];
      }
      const generator = generatorFactory(__spreadProps(__spreadValues({}, this.options), { keyframes: keyframes$1 }));
      if (repeatType === "mirror") {
        mirroredGenerator = generatorFactory(__spreadProps(__spreadValues({}, this.options), {
          keyframes: [...keyframes$1].reverse(),
          velocity: -velocity
        }));
      }
      if (generator.calculatedDuration === null) {
        generator.calculatedDuration = calcGeneratorDuration(generator);
      }
      const { calculatedDuration } = generator;
      const resolvedDuration = calculatedDuration + repeatDelay;
      const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
      return {
        generator,
        mirroredGenerator,
        mapPercentToKeyframes,
        calculatedDuration,
        resolvedDuration,
        totalDuration
      };
    }
    onPostResolved() {
      const { autoplay = true } = this.options;
      this.play();
      if (this.pendingPlayState === "paused" || !autoplay) {
        this.pause();
      } else {
        this.state = this.pendingPlayState;
      }
    }
    tick(timestamp, sample = false) {
      const { resolved } = this;
      if (!resolved) {
        const { keyframes: keyframes3 } = this.options;
        return { done: true, value: keyframes3[keyframes3.length - 1] };
      }
      const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes: keyframes2, calculatedDuration, totalDuration, resolvedDuration } = resolved;
      if (this.startTime === null)
        return generator.next(0);
      const { delay: delay2, repeat, repeatType, repeatDelay, onUpdate } = this.options;
      if (this.speed > 0) {
        this.startTime = Math.min(this.startTime, timestamp);
      } else if (this.speed < 0) {
        this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
      }
      if (sample) {
        this.currentTime = timestamp;
      } else if (this.holdTime !== null) {
        this.currentTime = this.holdTime;
      } else {
        this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
      }
      const timeWithoutDelay = this.currentTime - delay2 * (this.speed >= 0 ? 1 : -1);
      const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
      this.currentTime = Math.max(timeWithoutDelay, 0);
      if (this.state === "finished" && this.holdTime === null) {
        this.currentTime = totalDuration;
      }
      let elapsed = this.currentTime;
      let frameGenerator = generator;
      if (repeat) {
        const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
        let currentIteration = Math.floor(progress2);
        let iterationProgress = progress2 % 1;
        if (!iterationProgress && progress2 >= 1) {
          iterationProgress = 1;
        }
        iterationProgress === 1 && currentIteration--;
        currentIteration = Math.min(currentIteration, repeat + 1);
        const isOddIteration = Boolean(currentIteration % 2);
        if (isOddIteration) {
          if (repeatType === "reverse") {
            iterationProgress = 1 - iterationProgress;
            if (repeatDelay) {
              iterationProgress -= repeatDelay / resolvedDuration;
            }
          } else if (repeatType === "mirror") {
            frameGenerator = mirroredGenerator;
          }
        }
        elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
      }
      const state = isInDelayPhase ? { done: false, value: keyframes2[0] } : frameGenerator.next(elapsed);
      if (mapPercentToKeyframes) {
        state.value = mapPercentToKeyframes(state.value);
      }
      let { done } = state;
      if (!isInDelayPhase && calculatedDuration !== null) {
        done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
      }
      const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
      if (isAnimationFinished && finalKeyframe !== void 0) {
        state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe);
      }
      if (onUpdate) {
        onUpdate(state.value);
      }
      if (isAnimationFinished) {
        this.finish();
      }
      return state;
    }
    get duration() {
      const { resolved } = this;
      return resolved ? /* @__PURE__ */ millisecondsToSeconds(resolved.calculatedDuration) : 0;
    }
    get time() {
      return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
    }
    set time(newTime) {
      newTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
      this.currentTime = newTime;
      if (this.holdTime !== null || this.speed === 0) {
        this.holdTime = newTime;
      } else if (this.driver) {
        this.startTime = this.driver.now() - newTime / this.speed;
      }
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(newSpeed) {
      const hasChanged = this.playbackSpeed !== newSpeed;
      this.playbackSpeed = newSpeed;
      if (hasChanged) {
        this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
      }
    }
    play() {
      if (!this.resolver.isScheduled) {
        this.resolver.resume();
      }
      if (!this._resolved) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped)
        return;
      const { driver = frameloopDriver, onPlay, startTime } = this.options;
      if (!this.driver) {
        this.driver = driver((timestamp) => this.tick(timestamp));
      }
      onPlay && onPlay();
      const now2 = this.driver.now();
      if (this.holdTime !== null) {
        this.startTime = now2 - this.holdTime;
      } else if (!this.startTime) {
        this.startTime = startTime != null ? startTime : this.calcStartTime();
      } else if (this.state === "finished") {
        this.startTime = now2;
      }
      if (this.state === "finished") {
        this.updateFinishedPromise();
      }
      this.cancelTime = this.startTime;
      this.holdTime = null;
      this.state = "running";
      this.driver.start();
    }
    pause() {
      var _a;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      this.state = "paused";
      this.holdTime = (_a = this.currentTime) != null ? _a : 0;
    }
    complete() {
      if (this.state !== "running") {
        this.play();
      }
      this.pendingPlayState = this.state = "finished";
      this.holdTime = null;
    }
    finish() {
      this.teardown();
      this.state = "finished";
      const { onComplete } = this.options;
      onComplete && onComplete();
    }
    cancel() {
      if (this.cancelTime !== null) {
        this.tick(this.cancelTime);
      }
      this.teardown();
      this.updateFinishedPromise();
    }
    teardown() {
      this.state = "idle";
      this.stopDriver();
      this.resolveFinishedPromise();
      this.updateFinishedPromise();
      this.startTime = this.cancelTime = null;
      this.resolver.cancel();
    }
    stopDriver() {
      if (!this.driver)
        return;
      this.driver.stop();
      this.driver = void 0;
    }
    sample(time2) {
      this.startTime = 0;
      return this.tick(time2, true);
    }
    get finished() {
      return this.currentFinishedPromise;
    }
  }
  const acceleratedValues = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
  ]);
  const supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  const sampleDelta = 10;
  const maxDuration = 2e4;
  function requiresPregeneratedKeyframes(options2) {
    return isGenerator(options2.type) || options2.type === "spring" || !isWaapiSupportedEasing(options2.ease);
  }
  function pregenerateKeyframes(keyframes2, options2) {
    const sampleAnimation = new MainThreadAnimation(__spreadProps(__spreadValues({}, options2), {
      keyframes: keyframes2,
      repeat: 0,
      delay: 0,
      isGenerator: true
    }));
    let state = { done: false, value: keyframes2[0] };
    const pregeneratedKeyframes = [];
    let t = 0;
    while (!state.done && t < maxDuration) {
      state = sampleAnimation.sample(t);
      pregeneratedKeyframes.push(state.value);
      t += sampleDelta;
    }
    return {
      times: void 0,
      keyframes: pregeneratedKeyframes,
      duration: t - sampleDelta,
      ease: "linear"
    };
  }
  const unsupportedEasingFunctions = {
    anticipate,
    backInOut,
    circInOut
  };
  function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
  }
  class AcceleratedAnimation extends BaseAnimation {
    constructor(options2) {
      super(options2);
      const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
      this.resolver = new DOMKeyframesResolver(keyframes2, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue2, element);
      this.resolver.scheduleResolve();
    }
    initPlayback(keyframes2, finalKeyframe) {
      let { duration = 300, times, ease: ease2, type, motionValue: motionValue2, name, startTime } = this.options;
      if (!motionValue2.owner || !motionValue2.owner.current) {
        return false;
      }
      if (typeof ease2 === "string" && supportsLinearEasing() && isUnsupportedEase(ease2)) {
        ease2 = unsupportedEasingFunctions[ease2];
      }
      if (requiresPregeneratedKeyframes(this.options)) {
        const _a = this.options, { onComplete, onUpdate, motionValue: motionValue3, element } = _a, options2 = __objRest(_a, ["onComplete", "onUpdate", "motionValue", "element"]);
        const pregeneratedAnimation = pregenerateKeyframes(keyframes2, options2);
        keyframes2 = pregeneratedAnimation.keyframes;
        if (keyframes2.length === 1) {
          keyframes2[1] = keyframes2[0];
        }
        duration = pregeneratedAnimation.duration;
        times = pregeneratedAnimation.times;
        ease2 = pregeneratedAnimation.ease;
        type = "keyframes";
      }
      const animation = startWaapiAnimation(motionValue2.owner.current, name, keyframes2, __spreadProps(__spreadValues({}, this.options), { duration, times, ease: ease2 }));
      animation.startTime = startTime != null ? startTime : this.calcStartTime();
      if (this.pendingTimeline) {
        attachTimeline(animation, this.pendingTimeline);
        this.pendingTimeline = void 0;
      } else {
        animation.onfinish = () => {
          const { onComplete } = this.options;
          motionValue2.set(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
          onComplete && onComplete();
          this.cancel();
          this.resolveFinishedPromise();
        };
      }
      return {
        animation,
        duration,
        times,
        type,
        ease: ease2,
        keyframes: keyframes2
      };
    }
    get duration() {
      const { resolved } = this;
      if (!resolved)
        return 0;
      const { duration } = resolved;
      return /* @__PURE__ */ millisecondsToSeconds(duration);
    }
    get time() {
      const { resolved } = this;
      if (!resolved)
        return 0;
      const { animation } = resolved;
      return /* @__PURE__ */ millisecondsToSeconds(animation.currentTime || 0);
    }
    set time(newTime) {
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation } = resolved;
      animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
    }
    get speed() {
      const { resolved } = this;
      if (!resolved)
        return 1;
      const { animation } = resolved;
      return animation.playbackRate;
    }
    get finished() {
      return this.resolved.animation.finished;
    }
    set speed(newSpeed) {
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation } = resolved;
      animation.playbackRate = newSpeed;
    }
    get state() {
      const { resolved } = this;
      if (!resolved)
        return "idle";
      const { animation } = resolved;
      return animation.playState;
    }
    get startTime() {
      const { resolved } = this;
      if (!resolved)
        return null;
      const { animation } = resolved;
      return animation.startTime;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */
    attachTimeline(timeline) {
      if (!this._resolved) {
        this.pendingTimeline = timeline;
      } else {
        const { resolved } = this;
        if (!resolved)
          return noop;
        const { animation } = resolved;
        attachTimeline(animation, timeline);
      }
      return noop;
    }
    play() {
      if (this.isStopped)
        return;
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation } = resolved;
      if (animation.playState === "finished") {
        this.updateFinishedPromise();
      }
      animation.play();
    }
    pause() {
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation } = resolved;
      animation.pause();
    }
    stop() {
      this.resolver.cancel();
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.resolveFinishedPromise();
      this.updateFinishedPromise();
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation, keyframes: keyframes2, duration, type, ease: ease2, times } = resolved;
      if (animation.playState === "idle" || animation.playState === "finished") {
        return;
      }
      if (this.time) {
        const _a = this.options, { motionValue: motionValue2, onUpdate, onComplete, element } = _a, options2 = __objRest(_a, ["motionValue", "onUpdate", "onComplete", "element"]);
        const sampleAnimation = new MainThreadAnimation(__spreadProps(__spreadValues({}, options2), {
          keyframes: keyframes2,
          duration,
          type,
          ease: ease2,
          times,
          isGenerator: true
        }));
        const sampleTime = /* @__PURE__ */ secondsToMilliseconds(this.time);
        motionValue2.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
      }
      const { onStop } = this.options;
      onStop && onStop();
      this.cancel();
    }
    complete() {
      const { resolved } = this;
      if (!resolved)
        return;
      resolved.animation.finish();
    }
    cancel() {
      const { resolved } = this;
      if (!resolved)
        return;
      resolved.animation.cancel();
    }
    static supports(options2) {
      const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type } = options2;
      if (!motionValue2 || !motionValue2.owner || !(motionValue2.owner.current instanceof HTMLElement)) {
        return false;
      }
      const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
      return supportsWaapi() && name && acceleratedValues.has(name) && (name !== "transform" || !transformTemplate) && /**
      * If we're outputting values to onUpdate then we can't use WAAPI as there's
      * no way to read the value from WAAPI every frame.
      */
      !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
    }
  }
  const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
  const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  });
  const keyframesTransition = {
    type: "keyframes",
    duration: 0.8
  };
  const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  };
  const getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
    if (keyframes2.length > 2) {
      return keyframesTransition;
    } else if (transformProps.has(valueKey)) {
      return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
    }
    return ease;
  };
  function isTransitionDefined(_g) {
    var _h = _g, { when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed } = _h, transition = __objRest(_h, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
    return !!Object.keys(transition).length;
  }
  const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = getValueTransition(transition, name) || {};
    const delay2 = valueTransition.delay || transition.delay || 0;
    let { elapsed = 0 } = transition;
    elapsed = elapsed - /* @__PURE__ */ secondsToMilliseconds(delay2);
    let options2 = __spreadProps(__spreadValues({
      keyframes: Array.isArray(target) ? target : [null, target],
      ease: "easeOut",
      velocity: value.getVelocity()
    }, valueTransition), {
      delay: -elapsed,
      onUpdate: (v) => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      },
      name,
      motionValue: value,
      element: isHandoff ? void 0 : element
    });
    if (!isTransitionDefined(valueTransition)) {
      options2 = __spreadValues(__spreadValues({}, options2), getDefaultTransition(name, options2));
    }
    if (options2.duration) {
      options2.duration = /* @__PURE__ */ secondsToMilliseconds(options2.duration);
    }
    if (options2.repeatDelay) {
      options2.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options2.repeatDelay);
    }
    if (options2.from !== void 0) {
      options2.keyframes[0] = options2.from;
    }
    let shouldSkip = false;
    if (options2.type === false || options2.duration === 0 && !options2.repeatDelay) {
      options2.duration = 0;
      if (options2.delay === 0) {
        shouldSkip = true;
      }
    }
    options2.allowFlatten = !valueTransition.type && !valueTransition.ease;
    if (shouldSkip && !isHandoff && value.get() !== void 0) {
      const finalKeyframe = getFinalKeyframe(options2.keyframes, valueTransition);
      if (finalKeyframe !== void 0) {
        frame.update(() => {
          options2.onUpdate(finalKeyframe);
          options2.onComplete();
        });
        return new GroupAnimationWithThen([]);
      }
    }
    if (!isHandoff && AcceleratedAnimation.supports(options2)) {
      return new AcceleratedAnimation(options2);
    } else {
      return new MainThreadAnimation(options2);
    }
  };
  function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
  }
  function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
    var _b;
    let _a = targetAndTransition, { transition = visualElement.getDefaultTransition(), transitionEnd } = _a, target = __objRest(_a, ["transition", "transitionEnd"]);
    if (transitionOverride)
      transition = transitionOverride;
    const animations2 = [];
    const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    for (const key in target) {
      const value = visualElement.getValue(key, (_b = visualElement.latestValues[key]) != null ? _b : null);
      const valueTarget = target[key];
      if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
        continue;
      }
      const valueTransition = __spreadValues({
        delay: delay2
      }, getValueTransition(transition || {}, key));
      let isHandoff = false;
      if (window.MotionHandoffAnimation) {
        const appearId = getOptimisedAppearId(visualElement);
        if (appearId) {
          const startTime = window.MotionHandoffAnimation(appearId, key, frame);
          if (startTime !== null) {
            valueTransition.startTime = startTime;
            isHandoff = true;
          }
        }
      }
      addValueToWillChange(visualElement, key);
      value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
      const animation = value.animation;
      if (animation) {
        animations2.push(animation);
      }
    }
    if (transitionEnd) {
      Promise.all(animations2).then(() => {
        frame.update(() => {
          transitionEnd && setTarget(visualElement, transitionEnd);
        });
      });
    }
    return animations2;
  }
  function animateVariant(visualElement, variant, options2 = {}) {
    var _a;
    const resolved = resolveVariant(visualElement, variant, options2.type === "exit" ? (_a = visualElement.presenceContext) == null ? void 0 : _a.custom : void 0);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options2.transitionOverride) {
      transition = options2.transitionOverride;
    }
    const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options2)) : () => Promise.resolve();
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
      const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
      return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options2);
    } : () => Promise.resolve();
    const { when } = transition;
    if (when) {
      const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
      return first().then(() => last());
    } else {
      return Promise.all([getAnimation(), getChildAnimations(options2.delay)]);
    }
  }
  function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options2) {
    const animations2 = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
      child.notify("AnimationStart", variant);
      animations2.push(animateVariant(child, variant, __spreadProps(__spreadValues({}, options2), {
        delay: delayChildren + generateStaggerDuration(i)
      })).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations2);
  }
  function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
  }
  function animateVisualElement(visualElement, definition, options2 = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
      const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options2));
      animation = Promise.all(animations2);
    } else if (typeof definition === "string") {
      animation = animateVariant(visualElement, definition, options2);
    } else {
      const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options2.custom) : definition;
      animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options2));
    }
    return animation.then(() => {
      visualElement.notify("AnimationComplete", definition);
    });
  }
  function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
      return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
      return false;
    for (let i = 0; i < prevLength; i++) {
      if (prev[i] !== next[i])
        return false;
    }
    return true;
  }
  const numVariantProps = variantProps.length;
  function getVariantContext(visualElement) {
    if (!visualElement)
      return void 0;
    if (!visualElement.isControllingVariants) {
      const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
      if (visualElement.props.initial !== void 0) {
        context2.initial = visualElement.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps[i];
      const prop = visualElement.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }
  const reversePriorityOrder = [...variantPriorityOrder].reverse();
  const numAnimationTypes = variantPriorityOrder.length;
  function animateList(visualElement) {
    return (animations2) => Promise.all(animations2.map(({ animation, options: options2 }) => animateVisualElement(visualElement, animation, options2)));
  }
  function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    let state = createState();
    let isInitialRender = true;
    const buildResolvedTypeValues = (type) => (acc, definition) => {
      var _a;
      const resolved = resolveVariant(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) == null ? void 0 : _a.custom : void 0);
      if (resolved) {
        const _b = resolved, { transition, transitionEnd } = _b, target = __objRest(_b, ["transition", "transitionEnd"]);
        acc = __spreadValues(__spreadValues(__spreadValues({}, acc), target), transitionEnd);
      }
      return acc;
    };
    function setAnimateFunction(makeAnimator) {
      animate = makeAnimator(visualElement);
    }
    function animateChanges(changedActiveType) {
      const { props } = visualElement;
      const context = getVariantContext(visualElement.parent) || {};
      const animations2 = [];
      const removedKeys = /* @__PURE__ */ new Set();
      let encounteredKeys = {};
      let removedVariantIndex = Infinity;
      for (let i = 0; i < numAnimationTypes; i++) {
        const type = reversePriorityOrder[i];
        const typeState = state[type];
        const prop = props[type] !== void 0 ? props[type] : context[type];
        const propIsVariant = isVariantLabel(prop);
        const activeDelta = type === changedActiveType ? typeState.isActive : null;
        if (activeDelta === false)
          removedVariantIndex = i;
        let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
        if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
          isInherited = false;
        }
        typeState.protectedKeys = __spreadValues({}, encounteredKeys);
        if (
          // If it isn't active and hasn't *just* been set as inactive
          !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
          !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
          isAnimationControls(prop) || typeof prop === "boolean"
        ) {
          continue;
        }
        const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
        let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
        type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
        i > removedVariantIndex && propIsVariant;
        let handledRemovedValues = false;
        const definitionList = Array.isArray(prop) ? prop : [prop];
        let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
        if (activeDelta === false)
          resolvedValues = {};
        const { prevResolvedValues = {} } = typeState;
        const allKeys = __spreadValues(__spreadValues({}, prevResolvedValues), resolvedValues);
        const markToAnimate = (key) => {
          shouldAnimateType = true;
          if (removedKeys.has(key)) {
            handledRemovedValues = true;
            removedKeys.delete(key);
          }
          typeState.needsAnimating[key] = true;
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = false;
        };
        for (const key in allKeys) {
          const next = resolvedValues[key];
          const prev = prevResolvedValues[key];
          if (encounteredKeys.hasOwnProperty(key))
            continue;
          let valueHasChanged = false;
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            valueHasChanged = !shallowCompare(next, prev);
          } else {
            valueHasChanged = next !== prev;
          }
          if (valueHasChanged) {
            if (next !== void 0 && next !== null) {
              markToAnimate(key);
            } else {
              removedKeys.add(key);
            }
          } else if (next !== void 0 && removedKeys.has(key)) {
            markToAnimate(key);
          } else {
            typeState.protectedKeys[key] = true;
          }
        }
        typeState.prevProp = prop;
        typeState.prevResolvedValues = resolvedValues;
        if (typeState.isActive) {
          encounteredKeys = __spreadValues(__spreadValues({}, encounteredKeys), resolvedValues);
        }
        if (isInitialRender && visualElement.blockInitialAnimation) {
          shouldAnimateType = false;
        }
        const willAnimateViaParent = isInherited && variantDidChange;
        const needsAnimating = !willAnimateViaParent || handledRemovedValues;
        if (shouldAnimateType && needsAnimating) {
          animations2.push(...definitionList.map((animation) => ({
            animation,
            options: { type }
          })));
        }
      }
      if (removedKeys.size) {
        const fallbackAnimation = {};
        if (typeof props.initial !== "boolean") {
          const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
          if (initialTransition && initialTransition.transition) {
            fallbackAnimation.transition = initialTransition.transition;
          }
        }
        removedKeys.forEach((key) => {
          const fallbackTarget = visualElement.getBaseTarget(key);
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = true;
          fallbackAnimation[key] = fallbackTarget != null ? fallbackTarget : null;
        });
        animations2.push({ animation: fallbackAnimation });
      }
      let shouldAnimate = Boolean(animations2.length);
      if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
        shouldAnimate = false;
      }
      isInitialRender = false;
      return shouldAnimate ? animate(animations2) : Promise.resolve();
    }
    function setActive(type, isActive) {
      var _a;
      if (state[type].isActive === isActive)
        return Promise.resolve();
      (_a = visualElement.variantChildren) == null ? void 0 : _a.forEach((child) => {
        var _a2;
        return (_a2 = child.animationState) == null ? void 0 : _a2.setActive(type, isActive);
      });
      state[type].isActive = isActive;
      const animations2 = animateChanges(type);
      for (const key in state) {
        state[key].protectedKeys = {};
      }
      return animations2;
    }
    return {
      animateChanges,
      setActive,
      setAnimateFunction,
      getState: () => state,
      reset: () => {
        state = createState();
        isInitialRender = true;
      }
    };
  }
  function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
      return next !== prev;
    } else if (Array.isArray(next)) {
      return !shallowCompare(next, prev);
    }
    return false;
  }
  function createTypeState(isActive = false) {
    return {
      isActive,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function createState() {
    return {
      animate: createTypeState(true),
      whileInView: createTypeState(),
      whileHover: createTypeState(),
      whileTap: createTypeState(),
      whileDrag: createTypeState(),
      whileFocus: createTypeState(),
      exit: createTypeState()
    };
  }
  class Feature {
    constructor(node) {
      this.isMounted = false;
      this.node = node;
    }
    update() {
    }
  }
  class AnimationFeature extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
      super(node);
      node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
      const { animate } = this.node.getProps();
      if (isAnimationControls(animate)) {
        this.unmountControls = animate.subscribe(this.node);
      }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate } = this.node.getProps();
      const { animate: prevAnimate } = this.node.prevProps || {};
      if (animate !== prevAnimate) {
        this.updateAnimationControlsSubscription();
      }
    }
    unmount() {
      var _a;
      this.node.animationState.reset();
      (_a = this.unmountControls) == null ? void 0 : _a.call(this);
    }
  }
  let id$1 = 0;
  class ExitAnimationFeature extends Feature {
    constructor() {
      super(...arguments);
      this.id = id$1++;
    }
    update() {
      if (!this.node.presenceContext)
        return;
      const { isPresent, onExitComplete } = this.node.presenceContext;
      const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || isPresent === prevIsPresent) {
        return;
      }
      const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
      if (onExitComplete && !isPresent) {
        exitAnimation.then(() => {
          onExitComplete(this.id);
        });
      }
    }
    mount() {
      const { register, onExitComplete } = this.node.presenceContext || {};
      if (onExitComplete) {
        onExitComplete(this.id);
      }
      if (register) {
        this.unmount = register(this.id);
      }
    }
    unmount() {
    }
  }
  const animations = {
    animation: {
      Feature: AnimationFeature
    },
    exit: {
      Feature: ExitAnimationFeature
    }
  };
  function addDomEvent(target, eventName, handler, options2 = { passive: true }) {
    target.addEventListener(eventName, handler, options2);
    return () => target.removeEventListener(eventName, handler);
  }
  function extractEventInfo(event) {
    return {
      point: {
        x: event.pageX,
        y: event.pageY
      }
    };
  }
  const addPointerInfo = (handler) => {
    return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
  };
  function addPointerEvent(target, eventName, handler, options2) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options2);
  }
  function convertBoundingBoxToBox({ top, left, right, bottom }) {
    return {
      x: { min: left, max: right },
      y: { min: top, max: bottom }
    };
  }
  function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
  }
  function transformBoxPoints(point, transformPoint2) {
    if (!transformPoint2)
      return point;
    const topLeft = transformPoint2({ x: point.left, y: point.top });
    const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
    return {
      top: topLeft.y,
      left: topLeft.x,
      bottom: bottomRight.y,
      right: bottomRight.x
    };
  }
  const SCALE_PRECISION = 1e-4;
  const SCALE_MIN = 1 - SCALE_PRECISION;
  const SCALE_MAX = 1 + SCALE_PRECISION;
  const TRANSLATE_PRECISION = 0.01;
  const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
  const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
  function calcLength(axis) {
    return axis.max - axis.min;
  }
  function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
  }
  function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = mixNumber$1(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate = mixNumber$1(target.min, target.max, delta.origin) - delta.originPoint;
    if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
      delta.scale = 1;
    }
    if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
      delta.translate = 0;
    }
  }
  function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
  }
  function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
  }
  function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
  }
  function calcRelativeAxisPosition(target, layout2, parent) {
    target.min = layout2.min - parent.min;
    target.max = target.min + calcLength(layout2);
  }
  function calcRelativePosition(target, layout2, parent) {
    calcRelativeAxisPosition(target.x, layout2.x, parent.x);
    calcRelativeAxisPosition(target.y, layout2.y, parent.y);
  }
  const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  });
  const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta()
  });
  const createAxis = () => ({ min: 0, max: 0 });
  const createBox = () => ({
    x: createAxis(),
    y: createAxis()
  });
  function eachAxis(callback) {
    return [callback("x"), callback("y")];
  }
  function isIdentityScale(scale2) {
    return scale2 === void 0 || scale2 === 1;
  }
  function hasScale({ scale: scale2, scaleX: scaleX2, scaleY: scaleY2 }) {
    return !isIdentityScale(scale2) || !isIdentityScale(scaleX2) || !isIdentityScale(scaleY2);
  }
  function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
  }
  function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
  }
  function is2DTranslate(value) {
    return value && value !== "0%";
  }
  function scalePoint(point, scale2, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale2 * distanceFromOrigin;
    return originPoint + scaled;
  }
  function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
    if (boxScale !== void 0) {
      point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale2, originPoint) + translate;
  }
  function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
  }
  const TREE_SCALE_SNAP_MIN = 0.999999999999;
  const TREE_SCALE_SNAP_MAX = 1.0000000000001;
  function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
      return;
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
      node = treePath[i];
      delta = node.projectionDelta;
      const { visualElement } = node.options;
      if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
        continue;
      }
      if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
        transformBox(box, {
          x: -node.scroll.offset.x,
          y: -node.scroll.offset.y
        });
      }
      if (delta) {
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        applyBoxDelta(box, delta);
      }
      if (isSharedTransition && hasTransform(node.latestValues)) {
        transformBox(box, node.latestValues);
      }
    }
    if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
      treeScale.x = 1;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
      treeScale.y = 1;
    }
  }
  function translateAxis(axis, distance2) {
    axis.min = axis.min + distance2;
    axis.max = axis.max + distance2;
  }
  function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = mixNumber$1(axis.min, axis.max, axisOrigin);
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
  }
  function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
  }
  function measureViewportBox(instance, transformPoint2) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
  }
  function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode2;
    if (scroll) {
      translateAxis(viewportBox.x, scroll.offset.x);
      translateAxis(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
  }
  const getContextWindow = ({ current }) => {
    return current ? current.ownerDocument.defaultView : null;
  };
  const distance = (a, b) => Math.abs(a - b);
  function distance2D(a, b) {
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(__pow(xDelta, 2) + __pow(yDelta, 2));
  }
  class PanSession {
    constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false } = {}) {
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.handlers = {};
      this.contextWindow = window;
      this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
        const isPanStarted = this.startEvent !== null;
        const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= 3;
        if (!isPanStarted && !isDistancePastThreshold)
          return;
        const { point: point2 } = info2;
        const { timestamp: timestamp2 } = frameData;
        this.history.push(__spreadProps(__spreadValues({}, point2), { timestamp: timestamp2 }));
        const { onStart, onMove } = this.handlers;
        if (!isPanStarted) {
          onStart && onStart(this.lastMoveEvent, info2);
          this.startEvent = this.lastMoveEvent;
        }
        onMove && onMove(this.lastMoveEvent, info2);
      };
      this.handlePointerMove = (event2, info2) => {
        this.lastMoveEvent = event2;
        this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
        frame.update(this.updatePoint, true);
      };
      this.handlePointerUp = (event2, info2) => {
        this.end();
        const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
        if (this.dragSnapToOrigin)
          resumeAnimation && resumeAnimation();
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
        if (this.startEvent && onEnd) {
          onEnd(event2, panInfo);
        }
        onSessionEnd && onSessionEnd(event2, panInfo);
      };
      if (!isPrimaryPointer(event))
        return;
      this.dragSnapToOrigin = dragSnapToOrigin;
      this.handlers = handlers;
      this.transformPagePoint = transformPagePoint;
      this.contextWindow = contextWindow || window;
      const info = extractEventInfo(event);
      const initialInfo = transformPoint(info, this.transformPagePoint);
      const { point } = initialInfo;
      const { timestamp } = frameData;
      this.history = [__spreadProps(__spreadValues({}, point), { timestamp })];
      const { onSessionStart } = handlers;
      onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
      this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(handlers) {
      this.handlers = handlers;
    }
    end() {
      this.removeListeners && this.removeListeners();
      cancelFrame(this.updatePoint);
    }
  }
  function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
  }
  function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
  }
  function getPanInfo({ point }, history) {
    return {
      point,
      delta: subtractPoint(point, lastDevicePoint(history)),
      offset: subtractPoint(point, startDevicePoint(history)),
      velocity: getVelocity(history, 0.1)
    };
  }
  function startDevicePoint(history) {
    return history[0];
  }
  function lastDevicePoint(history) {
    return history[history.length - 1];
  }
  function getVelocity(history, timeDelta) {
    if (history.length < 2) {
      return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
      timestampedPoint = history[i];
      if (lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta)) {
        break;
      }
      i--;
    }
    if (!timestampedPoint) {
      return { x: 0, y: 0 };
    }
    const time2 = /* @__PURE__ */ millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time2 === 0) {
      return { x: 0, y: 0 };
    }
    const currentVelocity = {
      x: (lastPoint.x - timestampedPoint.x) / time2,
      y: (lastPoint.y - timestampedPoint.y) / time2
    };
    if (currentVelocity.x === Infinity) {
      currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
      currentVelocity.y = 0;
    }
    return currentVelocity;
  }
  function applyConstraints(point, { min, max }, elastic) {
    if (min !== void 0 && point < min) {
      point = elastic ? mixNumber$1(min, point, elastic.min) : Math.max(point, min);
    } else if (max !== void 0 && point > max) {
      point = elastic ? mixNumber$1(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
  }
  function calcRelativeAxisConstraints(axis, min, max) {
    return {
      min: min !== void 0 ? axis.min + min : void 0,
      max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
    };
  }
  function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
      x: calcRelativeAxisConstraints(layoutBox.x, left, right),
      y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
  }
  function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
      [min, max] = [max, min];
    }
    return { min, max };
  }
  function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
      x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
      y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
  }
  function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = calcLength(source);
    const targetLength = calcLength(target);
    if (targetLength > sourceLength) {
      origin = /* @__PURE__ */ progress(target.min, target.max - sourceLength, source.min);
    } else if (sourceLength > targetLength) {
      origin = /* @__PURE__ */ progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
  }
  function rebaseAxisConstraints(layout2, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== void 0) {
      relativeConstraints.min = constraints.min - layout2.min;
    }
    if (constraints.max !== void 0) {
      relativeConstraints.max = constraints.max - layout2.min;
    }
    return relativeConstraints;
  }
  const defaultElastic = 0.35;
  function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
      dragElastic = 0;
    } else if (dragElastic === true) {
      dragElastic = defaultElastic;
    }
    return {
      x: resolveAxisElastic(dragElastic, "left", "right"),
      y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
  }
  function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
      min: resolvePointElastic(dragElastic, minLabel),
      max: resolvePointElastic(dragElastic, maxLabel)
    };
  }
  function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
  }
  const elementDragControls = /* @__PURE__ */ new WeakMap();
  class VisualElementDragControls {
    constructor(visualElement) {
      this.openDragLock = null;
      this.isDragging = false;
      this.currentDirection = null;
      this.originPoint = { x: 0, y: 0 };
      this.constraints = false;
      this.hasMutatedConstraints = false;
      this.elastic = createBox();
      this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false } = {}) {
      const { presenceContext } = this.visualElement;
      if (presenceContext && presenceContext.isPresent === false)
        return;
      const onSessionStart = (event) => {
        const { dragSnapToOrigin: dragSnapToOrigin2 } = this.getProps();
        dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
        if (snapToCursor) {
          this.snapToCursor(extractEventInfo(event).point);
        }
      };
      const onStart = (event, info) => {
        const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
        if (drag2 && !dragPropagation) {
          if (this.openDragLock)
            this.openDragLock();
          this.openDragLock = setDragLock(drag2);
          if (!this.openDragLock)
            return;
        }
        this.isDragging = true;
        this.currentDirection = null;
        this.resolveConstraints();
        if (this.visualElement.projection) {
          this.visualElement.projection.isAnimationBlocked = true;
          this.visualElement.projection.target = void 0;
        }
        eachAxis((axis) => {
          let current = this.getAxisMotionValue(axis).get() || 0;
          if (percent.test(current)) {
            const { projection } = this.visualElement;
            if (projection && projection.layout) {
              const measuredAxis = projection.layout.layoutBox[axis];
              if (measuredAxis) {
                const length = calcLength(measuredAxis);
                current = length * (parseFloat(current) / 100);
              }
            }
          }
          this.originPoint[axis] = current;
        });
        if (onDragStart) {
          frame.postRender(() => onDragStart(event, info));
        }
        addValueToWillChange(this.visualElement, "transform");
        const { animationState } = this.visualElement;
        animationState && animationState.setActive("whileDrag", true);
      };
      const onMove = (event, info) => {
        const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
        if (!dragPropagation && !this.openDragLock)
          return;
        const { offset } = info;
        if (dragDirectionLock && this.currentDirection === null) {
          this.currentDirection = getCurrentDirection(offset);
          if (this.currentDirection !== null) {
            onDirectionLock && onDirectionLock(this.currentDirection);
          }
          return;
        }
        this.updateAxis("x", info.point, offset);
        this.updateAxis("y", info.point, offset);
        this.visualElement.render();
        onDrag && onDrag(event, info);
      };
      const onSessionEnd = (event, info) => this.stop(event, info);
      const resumeAnimation = () => eachAxis((axis) => {
        var _a;
        return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) == null ? void 0 : _a.play());
      });
      const { dragSnapToOrigin } = this.getProps();
      this.panSession = new PanSession(originEvent, {
        onSessionStart,
        onStart,
        onMove,
        onSessionEnd,
        resumeAnimation
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin,
        contextWindow: getContextWindow(this.visualElement)
      });
    }
    stop(event, info) {
      const isDragging2 = this.isDragging;
      this.cancel();
      if (!isDragging2)
        return;
      const { velocity } = info;
      this.startAnimation(velocity);
      const { onDragEnd } = this.getProps();
      if (onDragEnd) {
        frame.postRender(() => onDragEnd(event, info));
      }
    }
    cancel() {
      this.isDragging = false;
      const { projection, animationState } = this.visualElement;
      if (projection) {
        projection.isAnimationBlocked = false;
      }
      this.panSession && this.panSession.end();
      this.panSession = void 0;
      const { dragPropagation } = this.getProps();
      if (!dragPropagation && this.openDragLock) {
        this.openDragLock();
        this.openDragLock = null;
      }
      animationState && animationState.setActive("whileDrag", false);
    }
    updateAxis(axis, _point, offset) {
      const { drag: drag2 } = this.getProps();
      if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      let next = this.originPoint[axis] + offset[axis];
      if (this.constraints && this.constraints[axis]) {
        next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
      }
      axisValue.set(next);
    }
    resolveConstraints() {
      var _a;
      const { dragConstraints, dragElastic } = this.getProps();
      const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) == null ? void 0 : _a.layout;
      const prevConstraints = this.constraints;
      if (dragConstraints && isRefObject(dragConstraints)) {
        if (!this.constraints) {
          this.constraints = this.resolveRefConstraints();
        }
      } else {
        if (dragConstraints && layout2) {
          this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
        } else {
          this.constraints = false;
        }
      }
      this.elastic = resolveDragElastic(dragElastic);
      if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
        eachAxis((axis) => {
          if (this.constraints !== false && this.getAxisMotionValue(axis)) {
            this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
          }
        });
      }
    }
    resolveRefConstraints() {
      const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
      if (!constraints || !isRefObject(constraints))
        return false;
      const constraintsElement = constraints.current;
      const { projection } = this.visualElement;
      if (!projection || !projection.layout)
        return false;
      const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
      let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
      if (onMeasureDragConstraints) {
        const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
        this.hasMutatedConstraints = !!userConstraints;
        if (userConstraints) {
          measuredConstraints = convertBoundingBoxToBox(userConstraints);
        }
      }
      return measuredConstraints;
    }
    startAnimation(velocity) {
      const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
      const constraints = this.constraints || {};
      const momentumAnimations = eachAxis((axis) => {
        if (!shouldDrag(axis, drag2, this.currentDirection)) {
          return;
        }
        let transition = constraints && constraints[axis] || {};
        if (dragSnapToOrigin)
          transition = { min: 0, max: 0 };
        const bounceStiffness = dragElastic ? 200 : 1e6;
        const bounceDamping = dragElastic ? 40 : 1e7;
        const inertia2 = __spreadValues(__spreadValues({
          type: "inertia",
          velocity: dragMomentum ? velocity[axis] : 0,
          bounceStiffness,
          bounceDamping,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10
        }, dragTransition), transition);
        return this.startAxisValueAnimation(axis, inertia2);
      });
      return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
      const axisValue = this.getAxisMotionValue(axis);
      addValueToWillChange(this.visualElement, axis);
      return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
      eachAxis((axis) => this.getAxisMotionValue(axis).stop());
    }
    pauseAnimation() {
      eachAxis((axis) => {
        var _a;
        return (_a = this.getAxisMotionValue(axis).animation) == null ? void 0 : _a.pause();
      });
    }
    getAnimationState(axis) {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) == null ? void 0 : _a.state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
      const dragKey = `_drag${axis.toUpperCase()}`;
      const props = this.visualElement.getProps();
      const externalMotionValue = props[dragKey];
      return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
    }
    snapToCursor(point) {
      eachAxis((axis) => {
        const { drag: drag2 } = this.getProps();
        if (!shouldDrag(axis, drag2, this.currentDirection))
          return;
        const { projection } = this.visualElement;
        const axisValue = this.getAxisMotionValue(axis);
        if (projection && projection.layout) {
          const { min, max } = projection.layout.layoutBox[axis];
          axisValue.set(point[axis] - mixNumber$1(min, max, 0.5));
        }
      });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
      if (!this.visualElement.current)
        return;
      const { drag: drag2, dragConstraints } = this.getProps();
      const { projection } = this.visualElement;
      if (!isRefObject(dragConstraints) || !projection || !this.constraints)
        return;
      this.stopAnimation();
      const boxProgress = { x: 0, y: 0 };
      eachAxis((axis) => {
        const axisValue = this.getAxisMotionValue(axis);
        if (axisValue && this.constraints !== false) {
          const latest = axisValue.get();
          boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
        }
      });
      const { transformTemplate } = this.visualElement.getProps();
      this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
      this.resolveConstraints();
      eachAxis((axis) => {
        if (!shouldDrag(axis, drag2, null))
          return;
        const axisValue = this.getAxisMotionValue(axis);
        const { min, max } = this.constraints[axis];
        axisValue.set(mixNumber$1(min, max, boxProgress[axis]));
      });
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      elementDragControls.set(this.visualElement, this);
      const element = this.visualElement.current;
      const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
        const { drag: drag2, dragListener = true } = this.getProps();
        drag2 && dragListener && this.start(event);
      });
      const measureDragConstraints = () => {
        const { dragConstraints } = this.getProps();
        if (isRefObject(dragConstraints) && dragConstraints.current) {
          this.constraints = this.resolveRefConstraints();
        }
      };
      const { projection } = this.visualElement;
      const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
      if (projection && !projection.layout) {
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
      }
      frame.read(measureDragConstraints);
      const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
      const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
        if (this.isDragging && hasLayoutChanged) {
          eachAxis((axis) => {
            const motionValue2 = this.getAxisMotionValue(axis);
            if (!motionValue2)
              return;
            this.originPoint[axis] += delta[axis].translate;
            motionValue2.set(motionValue2.get() + delta[axis].translate);
          });
          this.visualElement.render();
        }
      });
      return () => {
        stopResizeListener();
        stopPointerListener();
        stopMeasureLayoutListener();
        stopLayoutUpdateListener && stopLayoutUpdateListener();
      };
    }
    getProps() {
      const props = this.visualElement.getProps();
      const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
      return __spreadProps(__spreadValues({}, props), {
        drag: drag2,
        dragDirectionLock,
        dragPropagation,
        dragConstraints,
        dragElastic,
        dragMomentum
      });
    }
  }
  function shouldDrag(direction, drag2, currentDirection) {
    return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
  }
  function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
      direction = "y";
    } else if (Math.abs(offset.x) > lockThreshold) {
      direction = "x";
    }
    return direction;
  }
  class DragGesture extends Feature {
    constructor(node) {
      super(node);
      this.removeGroupControls = noop;
      this.removeListeners = noop;
      this.controls = new VisualElementDragControls(node);
    }
    mount() {
      const { dragControls } = this.node.getProps();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
      this.removeListeners = this.controls.addListeners() || noop;
    }
    unmount() {
      this.removeGroupControls();
      this.removeListeners();
    }
  }
  const asyncHandler = (handler) => (event, info) => {
    if (handler) {
      frame.postRender(() => handler(event, info));
    }
  };
  class PanGesture extends Feature {
    constructor() {
      super(...arguments);
      this.removePointerDownListener = noop;
    }
    onPointerDown(pointerDownEvent) {
      this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: getContextWindow(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
      return {
        onSessionStart: asyncHandler(onPanSessionStart),
        onStart: asyncHandler(onPanStart),
        onMove: onPan,
        onEnd: (event, info) => {
          delete this.session;
          if (onPanEnd) {
            frame.postRender(() => onPanEnd(event, info));
          }
        }
      };
    }
    mount() {
      this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener();
      this.session && this.session.end();
    }
  }
  const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false
  };
  function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
      return 0;
    return pixels / (axis.max - axis.min) * 100;
  }
  const correctBorderRadius = {
    correct: (latest, node) => {
      if (!node.target)
        return latest;
      if (typeof latest === "string") {
        if (px.test(latest)) {
          latest = parseFloat(latest);
        } else {
          return latest;
        }
      }
      const x = pixelsToPercent(latest, node.target.x);
      const y = pixelsToPercent(latest, node.target.y);
      return `${x}% ${y}%`;
    }
  };
  const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
      const original = latest;
      const shadow = complex.parse(latest);
      if (shadow.length > 5)
        return original;
      const template = complex.createTransformer(latest);
      const offset = typeof shadow[0] !== "number" ? 1 : 0;
      const xScale = projectionDelta.x.scale * treeScale.x;
      const yScale = projectionDelta.y.scale * treeScale.y;
      shadow[0 + offset] /= xScale;
      shadow[1 + offset] /= yScale;
      const averageScale = mixNumber$1(xScale, yScale, 0.5);
      if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
      if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
      return template(shadow);
    }
  };
  class MeasureLayoutWithContext extends reactExports.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
      const { projection } = visualElement;
      addScaleCorrector(defaultScaleCorrectors);
      if (projection) {
        if (layoutGroup.group)
          layoutGroup.group.add(projection);
        if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
          switchLayoutGroup.register(projection);
        }
        projection.root.didUpdate();
        projection.addEventListener("animationComplete", () => {
          this.safeToRemove();
        });
        projection.setOptions(__spreadProps(__spreadValues({}, projection.options), {
          onExitComplete: () => this.safeToRemove()
        }));
      }
      globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
      const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
      const projection = visualElement.projection;
      if (!projection)
        return null;
      projection.isPresent = isPresent;
      if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
        projection.willUpdate();
      } else {
        this.safeToRemove();
      }
      if (prevProps.isPresent !== isPresent) {
        if (isPresent) {
          projection.promote();
        } else if (!projection.relegate()) {
          frame.postRender(() => {
            const stack = projection.getStack();
            if (!stack || !stack.members.length) {
              this.safeToRemove();
            }
          });
        }
      }
      return null;
    }
    componentDidUpdate() {
      const { projection } = this.props.visualElement;
      if (projection) {
        projection.root.didUpdate();
        microtask.postRender(() => {
          if (!projection.currentAnimation && projection.isLead()) {
            this.safeToRemove();
          }
        });
      }
    }
    componentWillUnmount() {
      const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
      const { projection } = visualElement;
      if (projection) {
        projection.scheduleCheckAfterUnmount();
        if (layoutGroup && layoutGroup.group)
          layoutGroup.group.remove(projection);
        if (promoteContext && promoteContext.deregister)
          promoteContext.deregister(projection);
      }
    }
    safeToRemove() {
      const { safeToRemove } = this.props;
      safeToRemove && safeToRemove();
    }
    render() {
      return null;
    }
  }
  function MeasureLayout(props) {
    const [isPresent, safeToRemove] = usePresence$1();
    const layoutGroup = reactExports.useContext(LayoutGroupContext);
    return jsxRuntimeExports.jsx(MeasureLayoutWithContext, __spreadProps(__spreadValues({}, props), { layoutGroup, switchLayoutGroup: reactExports.useContext(SwitchLayoutGroupContext), isPresent, safeToRemove }));
  }
  const defaultScaleCorrectors = {
    borderRadius: __spreadProps(__spreadValues({}, correctBorderRadius), {
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    }),
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow
  };
  function animateSingleValue(value, keyframes2, options2) {
    const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options2));
    return motionValue$1.animation;
  }
  function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
  }
  const compareByDepth = (a, b) => a.depth - b.depth;
  class FlatTree {
    constructor() {
      this.children = [];
      this.isDirty = false;
    }
    add(child) {
      addUniqueItem(this.children, child);
      this.isDirty = true;
    }
    remove(child) {
      removeItem(this.children, child);
      this.isDirty = true;
    }
    forEach(callback) {
      this.isDirty && this.children.sort(compareByDepth);
      this.isDirty = false;
      this.children.forEach(callback);
    }
  }
  function delay(callback, timeout) {
    const start = time.now();
    const checkElapsed = ({ timestamp }) => {
      const elapsed = timestamp - start;
      if (elapsed >= timeout) {
        cancelFrame(checkElapsed);
        callback(elapsed - timeout);
      }
    };
    frame.read(checkElapsed, true);
    return () => cancelFrame(checkElapsed);
  }
  const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
  const numBorders = borders.length;
  const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
  const isPx = (value) => typeof value === "number" || px.test(value);
  function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
      target.opacity = mixNumber$1(
        0,
        // TODO Reinstate this if only child
        lead.opacity !== void 0 ? lead.opacity : 1,
        easeCrossfadeIn(progress2)
      );
      target.opacityExit = mixNumber$1(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2));
    } else if (isOnlyMember) {
      target.opacity = mixNumber$1(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2);
    }
    for (let i = 0; i < numBorders; i++) {
      const borderLabel = `border${borders[i]}Radius`;
      let followRadius = getRadius(follow, borderLabel);
      let leadRadius = getRadius(lead, borderLabel);
      if (followRadius === void 0 && leadRadius === void 0)
        continue;
      followRadius || (followRadius = 0);
      leadRadius || (leadRadius = 0);
      const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
      if (canMix) {
        target[borderLabel] = Math.max(mixNumber$1(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
        if (percent.test(leadRadius) || percent.test(followRadius)) {
          target[borderLabel] += "%";
        }
      } else {
        target[borderLabel] = leadRadius;
      }
    }
    if (follow.rotate || lead.rotate) {
      target.rotate = mixNumber$1(follow.rotate || 0, lead.rotate || 0, progress2);
    }
  }
  function getRadius(values, radiusName) {
    return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
  }
  const easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
  const easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
  function compress(min, max, easing) {
    return (p) => {
      if (p < min)
        return 0;
      if (p > max)
        return 1;
      return easing(/* @__PURE__ */ progress(min, max, p));
    };
  }
  function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
  }
  function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
  }
  function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
  }
  function removePointDelta(point, translate, scale2, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale2, originPoint);
    if (boxScale !== void 0) {
      point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
  }
  function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (percent.test(translate)) {
      translate = parseFloat(translate);
      const relativeProgress = mixNumber$1(sourceAxis.min, sourceAxis.max, translate / 100);
      translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
      return;
    let originPoint = mixNumber$1(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
      originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
  }
  const xKeys = ["x", "scaleX", "originX"];
  const yKeys = ["y", "scaleY", "originY"];
  function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
  }
  function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
  }
  function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
  }
  function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
  }
  function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
  }
  function axisEqualsRounded(a, b) {
    return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
  }
  function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
  }
  function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
  }
  function axisDeltaEquals(a, b) {
    return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
  }
  class NodeStack {
    constructor() {
      this.members = [];
    }
    add(node) {
      addUniqueItem(this.members, node);
      node.scheduleRender();
    }
    remove(node) {
      removeItem(this.members, node);
      if (node === this.prevLead) {
        this.prevLead = void 0;
      }
      if (node === this.lead) {
        const prevLead = this.members[this.members.length - 1];
        if (prevLead) {
          this.promote(prevLead);
        }
      }
    }
    relegate(node) {
      const indexOfNode = this.members.findIndex((member) => node === member);
      if (indexOfNode === 0)
        return false;
      let prevLead;
      for (let i = indexOfNode; i >= 0; i--) {
        const member = this.members[i];
        if (member.isPresent !== false) {
          prevLead = member;
          break;
        }
      }
      if (prevLead) {
        this.promote(prevLead);
        return true;
      } else {
        return false;
      }
    }
    promote(node, preserveFollowOpacity) {
      const prevLead = this.lead;
      if (node === prevLead)
        return;
      this.prevLead = prevLead;
      this.lead = node;
      node.show();
      if (prevLead) {
        prevLead.instance && prevLead.scheduleRender();
        node.scheduleRender();
        node.resumeFrom = prevLead;
        if (preserveFollowOpacity) {
          node.resumeFrom.preserveOpacity = true;
        }
        if (prevLead.snapshot) {
          node.snapshot = prevLead.snapshot;
          node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        }
        if (node.root && node.root.isUpdating) {
          node.isLayoutDirty = true;
        }
        const { crossfade } = node.options;
        if (crossfade === false) {
          prevLead.hide();
        }
      }
    }
    exitAnimationComplete() {
      this.members.forEach((node) => {
        const { options: options2, resumingFrom } = node;
        options2.onExitComplete && options2.onExitComplete();
        if (resumingFrom) {
          resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
        }
      });
    }
    scheduleRender() {
      this.members.forEach((node) => {
        node.instance && node.scheduleRender(false);
      });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
      if (this.lead && this.lead.snapshot) {
        this.lead.snapshot = void 0;
      }
    }
  }
  function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = (latestTransform == null ? void 0 : latestTransform.z) || 0;
    if (xTranslate || yTranslate || zTranslate) {
      transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    }
    if (treeScale.x !== 1 || treeScale.y !== 1) {
      transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
      const { transformPerspective, rotate: rotate2, rotateX, rotateY, skewX, skewY } = latestTransform;
      if (transformPerspective)
        transform = `perspective(${transformPerspective}px) ${transform}`;
      if (rotate2)
        transform += `rotate(${rotate2}deg) `;
      if (rotateX)
        transform += `rotateX(${rotateX}deg) `;
      if (rotateY)
        transform += `rotateY(${rotateY}deg) `;
      if (skewX)
        transform += `skewX(${skewX}deg) `;
      if (skewY)
        transform += `skewY(${skewY}deg) `;
    }
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
      transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
  }
  const transformAxes = ["", "X", "Y", "Z"];
  const hiddenVisibility = { visibility: "hidden" };
  const animationTarget = 1e3;
  let id = 0;
  function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    if (latestValues[key]) {
      values[key] = latestValues[key];
      visualElement.setStaticValue(key, 0);
      if (sharedAnimationValues) {
        sharedAnimationValues[key] = 0;
      }
    }
  }
  function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode)
      return;
    const { visualElement } = projectionNode.options;
    if (!visualElement)
      return;
    const appearId = getOptimisedAppearId(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
      const { layout: layout2, layoutId } = projectionNode.options;
      window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) {
      cancelTreeOptimisedTransformAnimations(parent);
    }
  }
  function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
    return class ProjectionNode {
      constructor(latestValues = {}, parent = defaultParent == null ? void 0 : defaultParent()) {
        this.id = id++;
        this.animationId = 0;
        this.children = /* @__PURE__ */ new Set();
        this.options = {};
        this.isTreeAnimating = false;
        this.isAnimationBlocked = false;
        this.isLayoutDirty = false;
        this.isProjectionDirty = false;
        this.isSharedProjectionDirty = false;
        this.isTransformDirty = false;
        this.updateManuallyBlocked = false;
        this.updateBlockedByResize = false;
        this.isUpdating = false;
        this.isSVG = false;
        this.needsReset = false;
        this.shouldResetTransform = false;
        this.hasCheckedOptimisedAppear = false;
        this.treeScale = { x: 1, y: 1 };
        this.eventHandlers = /* @__PURE__ */ new Map();
        this.hasTreeAnimated = false;
        this.updateScheduled = false;
        this.scheduleUpdate = () => this.update();
        this.projectionUpdateScheduled = false;
        this.checkUpdateFailed = () => {
          if (this.isUpdating) {
            this.isUpdating = false;
            this.clearAllSnapshots();
          }
        };
        this.updateProjection = () => {
          this.projectionUpdateScheduled = false;
          this.nodes.forEach(propagateDirtyNodes);
          this.nodes.forEach(resolveTargetDelta);
          this.nodes.forEach(calcProjection);
          this.nodes.forEach(cleanDirtyNodes);
        };
        this.resolvedRelativeTargetAt = 0;
        this.hasProjected = false;
        this.isVisible = true;
        this.animationProgress = 0;
        this.sharedNodes = /* @__PURE__ */ new Map();
        this.latestValues = latestValues;
        this.root = parent ? parent.root || parent : this;
        this.path = parent ? [...parent.path, parent] : [];
        this.parent = parent;
        this.depth = parent ? parent.depth + 1 : 0;
        for (let i = 0; i < this.path.length; i++) {
          this.path[i].shouldResetTransform = true;
        }
        if (this.root === this)
          this.nodes = new FlatTree();
      }
      addEventListener(name, handler) {
        if (!this.eventHandlers.has(name)) {
          this.eventHandlers.set(name, new SubscriptionManager());
        }
        return this.eventHandlers.get(name).add(handler);
      }
      notifyListeners(name, ...args) {
        const subscriptionManager = this.eventHandlers.get(name);
        subscriptionManager && subscriptionManager.notify(...args);
      }
      hasListeners(name) {
        return this.eventHandlers.has(name);
      }
      /**
       * Lifecycles
       */
      mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
        if (this.instance)
          return;
        this.isSVG = isSVGElement(instance);
        this.instance = instance;
        const { layoutId, layout: layout2, visualElement } = this.options;
        if (visualElement && !visualElement.current) {
          visualElement.mount(instance);
        }
        this.root.nodes.add(this);
        this.parent && this.parent.children.add(this);
        if (isLayoutDirty && (layout2 || layoutId)) {
          this.isLayoutDirty = true;
        }
        if (attachResizeListener) {
          let cancelDelay;
          const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
          attachResizeListener(instance, () => {
            this.root.updateBlockedByResize = true;
            cancelDelay && cancelDelay();
            cancelDelay = delay(resizeUnblockUpdate, 250);
            if (globalProjectionState.hasAnimatedSinceResize) {
              globalProjectionState.hasAnimatedSinceResize = false;
              this.nodes.forEach(finishAnimation);
            }
          });
        }
        if (layoutId) {
          this.root.registerSharedNode(layoutId, this);
        }
        if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
          this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
            if (this.isTreeAnimationBlocked()) {
              this.target = void 0;
              this.relativeTarget = void 0;
              return;
            }
            const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
            const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
            const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
            const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
            if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
              if (this.resumeFrom) {
                this.resumingFrom = this.resumeFrom;
                this.resumingFrom.resumingFrom = void 0;
              }
              this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
              const animationOptions = __spreadProps(__spreadValues({}, getValueTransition(layoutTransition, "layout")), {
                onPlay: onLayoutAnimationStart,
                onComplete: onLayoutAnimationComplete
              });
              if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
                animationOptions.delay = 0;
                animationOptions.type = false;
              }
              this.startAnimation(animationOptions);
            } else {
              if (!hasLayoutChanged) {
                finishAnimation(this);
              }
              if (this.isLead() && this.options.onExitComplete) {
                this.options.onExitComplete();
              }
            }
            this.targetLayout = newLayout;
          });
        }
      }
      unmount() {
        this.options.layoutId && this.willUpdate();
        this.root.nodes.remove(this);
        const stack = this.getStack();
        stack && stack.remove(this);
        this.parent && this.parent.children.delete(this);
        this.instance = void 0;
        cancelFrame(this.updateProjection);
      }
      // only on the root
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      // Note: currently only running on root node
      startUpdate() {
        if (this.isUpdateBlocked())
          return;
        this.isUpdating = true;
        this.nodes && this.nodes.forEach(resetSkewAndRotation);
        this.animationId++;
      }
      getTransformTemplate() {
        const { visualElement } = this.options;
        return visualElement && visualElement.getProps().transformTemplate;
      }
      willUpdate(shouldNotifyListeners = true) {
        this.root.hasTreeAnimated = true;
        if (this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
          cancelTreeOptimisedTransformAnimations(this);
        }
        !this.root.isUpdating && this.root.startUpdate();
        if (this.isLayoutDirty)
          return;
        this.isLayoutDirty = true;
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.shouldResetTransform = true;
          node.updateScroll("snapshot");
          if (node.options.layoutRoot) {
            node.willUpdate(false);
          }
        }
        const { layoutId, layout: layout2 } = this.options;
        if (layoutId === void 0 && !layout2)
          return;
        const transformTemplate = this.getTransformTemplate();
        this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
        this.updateSnapshot();
        shouldNotifyListeners && this.notifyListeners("willUpdate");
      }
      update() {
        this.updateScheduled = false;
        const updateWasBlocked = this.isUpdateBlocked();
        if (updateWasBlocked) {
          this.unblockUpdate();
          this.clearAllSnapshots();
          this.nodes.forEach(clearMeasurements);
          return;
        }
        if (!this.isUpdating) {
          this.nodes.forEach(clearIsLayoutDirty);
        }
        this.isUpdating = false;
        this.nodes.forEach(resetTransformStyle);
        this.nodes.forEach(updateLayout);
        this.nodes.forEach(notifyLayoutUpdate);
        this.clearAllSnapshots();
        const now2 = time.now();
        frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
        frameData.timestamp = now2;
        frameData.isProcessing = true;
        frameSteps.update.process(frameData);
        frameSteps.preRender.process(frameData);
        frameSteps.render.process(frameData);
        frameData.isProcessing = false;
      }
      didUpdate() {
        if (!this.updateScheduled) {
          this.updateScheduled = true;
          microtask.read(this.scheduleUpdate);
        }
      }
      clearAllSnapshots() {
        this.nodes.forEach(clearSnapshot);
        this.sharedNodes.forEach(removeLeadSnapshots);
      }
      scheduleUpdateProjection() {
        if (!this.projectionUpdateScheduled) {
          this.projectionUpdateScheduled = true;
          frame.preRender(this.updateProjection, false, true);
        }
      }
      scheduleCheckAfterUnmount() {
        frame.postRender(() => {
          if (this.isLayoutDirty) {
            this.root.didUpdate();
          } else {
            this.root.checkUpdateFailed();
          }
        });
      }
      /**
       * Update measurements
       */
      updateSnapshot() {
        if (this.snapshot || !this.instance)
          return;
        this.snapshot = this.measure();
        if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
          this.snapshot = void 0;
        }
      }
      updateLayout() {
        if (!this.instance)
          return;
        this.updateScroll();
        if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
          return;
        }
        if (this.resumeFrom && !this.resumeFrom.instance) {
          for (let i = 0; i < this.path.length; i++) {
            const node = this.path[i];
            node.updateScroll();
          }
        }
        const prevLayout = this.layout;
        this.layout = this.measure(false);
        this.layoutCorrected = createBox();
        this.isLayoutDirty = false;
        this.projectionDelta = void 0;
        this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement } = this.options;
        visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
      }
      updateScroll(phase = "measure") {
        let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
          needsMeasurement = false;
        }
        if (needsMeasurement) {
          const isRoot = checkIsScrollRoot(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase,
            isRoot,
            offset: measureScroll(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : isRoot
          };
        }
      }
      resetTransform() {
        if (!resetTransform)
          return;
        const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
        const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
        const transformTemplate = this.getTransformTemplate();
        const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
        const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
        if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
          resetTransform(this.instance, transformTemplateValue);
          this.shouldResetTransform = false;
          this.scheduleRender();
        }
      }
      measure(removeTransform = true) {
        const pageBox = this.measurePageBox();
        let layoutBox = this.removeElementScroll(pageBox);
        if (removeTransform) {
          layoutBox = this.removeTransform(layoutBox);
        }
        roundBox(layoutBox);
        return {
          animationId: this.root.animationId,
          measuredBox: pageBox,
          layoutBox,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        var _a;
        const { visualElement } = this.options;
        if (!visualElement)
          return createBox();
        const box = visualElement.measureViewportBox();
        const wasInScrollRoot = ((_a = this.scroll) == null ? void 0 : _a.wasRoot) || this.path.some(checkNodeWasScrollRoot);
        if (!wasInScrollRoot) {
          const { scroll } = this.root;
          if (scroll) {
            translateAxis(box.x, scroll.offset.x);
            translateAxis(box.y, scroll.offset.y);
          }
        }
        return box;
      }
      removeElementScroll(box) {
        var _a;
        const boxWithoutScroll = createBox();
        copyBoxInto(boxWithoutScroll, box);
        if ((_a = this.scroll) == null ? void 0 : _a.wasRoot) {
          return boxWithoutScroll;
        }
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          const { scroll, options: options2 } = node;
          if (node !== this.root && scroll && options2.layoutScroll) {
            if (scroll.wasRoot) {
              copyBoxInto(boxWithoutScroll, box);
            }
            translateAxis(boxWithoutScroll.x, scroll.offset.x);
            translateAxis(boxWithoutScroll.y, scroll.offset.y);
          }
        }
        return boxWithoutScroll;
      }
      applyTransform(box, transformOnly = false) {
        const withTransforms = createBox();
        copyBoxInto(withTransforms, box);
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
            transformBox(withTransforms, {
              x: -node.scroll.offset.x,
              y: -node.scroll.offset.y
            });
          }
          if (!hasTransform(node.latestValues))
            continue;
          transformBox(withTransforms, node.latestValues);
        }
        if (hasTransform(this.latestValues)) {
          transformBox(withTransforms, this.latestValues);
        }
        return withTransforms;
      }
      removeTransform(box) {
        const boxWithoutTransform = createBox();
        copyBoxInto(boxWithoutTransform, box);
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          if (!node.instance)
            continue;
          if (!hasTransform(node.latestValues))
            continue;
          hasScale(node.latestValues) && node.updateSnapshot();
          const sourceBox = createBox();
          const nodeBox = node.measurePageBox();
          copyBoxInto(sourceBox, nodeBox);
          removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
        }
        if (hasTransform(this.latestValues)) {
          removeBoxTransforms(boxWithoutTransform, this.latestValues);
        }
        return boxWithoutTransform;
      }
      setTargetDelta(delta) {
        this.targetDelta = delta;
        this.root.scheduleUpdateProjection();
        this.isProjectionDirty = true;
      }
      setOptions(options2) {
        this.options = __spreadProps(__spreadValues(__spreadValues({}, this.options), options2), {
          crossfade: options2.crossfade !== void 0 ? options2.crossfade : true
        });
      }
      clearMeasurements() {
        this.scroll = void 0;
        this.layout = void 0;
        this.snapshot = void 0;
        this.prevTransformTemplateValue = void 0;
        this.targetDelta = void 0;
        this.target = void 0;
        this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        if (!this.relativeParent)
          return;
        if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
          this.relativeParent.resolveTargetDelta(true);
        }
      }
      resolveTargetDelta(forceRecalculation = false) {
        var _a;
        const lead = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
        this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
        const isShared = Boolean(this.resumingFrom) || this !== lead;
        const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) == null ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
        if (canSkip)
          return;
        const { layout: layout2, layoutId } = this.options;
        if (!this.layout || !(layout2 || layoutId))
          return;
        this.resolvedRelativeTargetAt = frameData.timestamp;
        if (!this.targetDelta && !this.relativeTarget) {
          const relativeParent = this.getClosestProjectingParent();
          if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
            this.relativeParent = relativeParent;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          } else {
            this.relativeParent = this.relativeTarget = void 0;
          }
        }
        if (!this.relativeTarget && !this.targetDelta)
          return;
        if (!this.target) {
          this.target = createBox();
          this.targetWithTransforms = createBox();
        }
        if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
          this.forceRelativeParentToResolveTarget();
          calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
        } else if (this.targetDelta) {
          if (Boolean(this.resumingFrom)) {
            this.target = this.applyTransform(this.layout.layoutBox);
          } else {
            copyBoxInto(this.target, this.layout.layoutBox);
          }
          applyBoxDelta(this.target, this.targetDelta);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          const relativeParent = this.getClosestProjectingParent();
          if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
            this.relativeParent = relativeParent;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          } else {
            this.relativeParent = this.relativeTarget = void 0;
          }
        }
      }
      getClosestProjectingParent() {
        if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
          return void 0;
        }
        if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
      isProjecting() {
        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var _a;
        const lead = this.getLead();
        const isShared = Boolean(this.resumingFrom) || this !== lead;
        let canSkip = true;
        if (this.isProjectionDirty || ((_a = this.parent) == null ? void 0 : _a.isProjectionDirty)) {
          canSkip = false;
        }
        if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
          canSkip = false;
        }
        if (this.resolvedRelativeTargetAt === frameData.timestamp) {
          canSkip = false;
        }
        if (canSkip)
          return;
        const { layout: layout2, layoutId } = this.options;
        this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
        if (!this.isTreeAnimating) {
          this.targetDelta = this.relativeTarget = void 0;
        }
        if (!this.layout || !(layout2 || layoutId))
          return;
        copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
        const prevTreeScaleX = this.treeScale.x;
        const prevTreeScaleY = this.treeScale.y;
        applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
        if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
          lead.target = lead.layout.layoutBox;
          lead.targetWithTransforms = createBox();
        }
        const { target } = lead;
        if (!target) {
          if (this.prevProjectionDelta) {
            this.createProjectionDeltas();
            this.scheduleRender();
          }
          return;
        }
        if (!this.projectionDelta || !this.prevProjectionDelta) {
          this.createProjectionDeltas();
        } else {
          copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
          copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
        }
        calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
        if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners("projectionUpdate", target);
        }
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(notifyAll = true) {
        var _a;
        (_a = this.options.visualElement) == null ? void 0 : _a.scheduleRender();
        if (notifyAll) {
          const stack = this.getStack();
          stack && stack.scheduleRender();
        }
        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = void 0;
        }
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = createDelta();
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
        const snapshot = this.snapshot;
        const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
        const mixedValues = __spreadValues({}, this.latestValues);
        const targetDelta = createDelta();
        if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
          this.relativeTarget = this.relativeTargetOrigin = void 0;
        }
        this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
        const relativeLayout = createBox();
        const snapshotSource = snapshot ? snapshot.source : void 0;
        const layoutSource = this.layout ? this.layout.source : void 0;
        const isSharedLayoutAnimation = snapshotSource !== layoutSource;
        const stack = this.getStack();
        const isOnlyMember = !stack || stack.members.length <= 1;
        const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
        this.animationProgress = 0;
        let prevRelativeTarget;
        this.mixTargetDelta = (latest) => {
          const progress2 = latest / 1e3;
          mixAxisDelta(targetDelta.x, delta.x, progress2);
          mixAxisDelta(targetDelta.y, delta.y, progress2);
          this.setTargetDelta(targetDelta);
          if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
            mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
            if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
              this.isProjectionDirty = false;
            }
            if (!prevRelativeTarget)
              prevRelativeTarget = createBox();
            copyBoxInto(prevRelativeTarget, this.relativeTarget);
          }
          if (isSharedLayoutAnimation) {
            this.animationValues = mixedValues;
            mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
          }
          this.root.scheduleUpdateProjection();
          this.scheduleRender();
          this.animationProgress = progress2;
        };
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(options2) {
        this.notifyListeners("animationStart");
        this.currentAnimation && this.currentAnimation.stop();
        if (this.resumingFrom && this.resumingFrom.currentAnimation) {
          this.resumingFrom.currentAnimation.stop();
        }
        if (this.pendingAnimation) {
          cancelFrame(this.pendingAnimation);
          this.pendingAnimation = void 0;
        }
        this.pendingAnimation = frame.update(() => {
          globalProjectionState.hasAnimatedSinceResize = true;
          this.currentAnimation = animateSingleValue(0, animationTarget, __spreadProps(__spreadValues({}, options2), {
            onUpdate: (latest) => {
              this.mixTargetDelta(latest);
              options2.onUpdate && options2.onUpdate(latest);
            },
            onStop: () => {
            },
            onComplete: () => {
              options2.onComplete && options2.onComplete();
              this.completeAnimation();
            }
          }));
          if (this.resumingFrom) {
            this.resumingFrom.currentAnimation = this.currentAnimation;
          }
          this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = void 0;
          this.resumingFrom.preserveOpacity = void 0;
        }
        const stack = this.getStack();
        stack && stack.exitAnimationComplete();
        this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
        this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        if (this.currentAnimation) {
          this.mixTargetDelta && this.mixTargetDelta(animationTarget);
          this.currentAnimation.stop();
        }
        this.completeAnimation();
      }
      applyTransformsToTarget() {
        const lead = this.getLead();
        let { targetWithTransforms, target, layout: layout2, latestValues } = lead;
        if (!targetWithTransforms || !target || !layout2)
          return;
        if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
          target = this.target || createBox();
          const xLength = calcLength(this.layout.layoutBox.x);
          target.x.min = lead.target.x.min;
          target.x.max = target.x.min + xLength;
          const yLength = calcLength(this.layout.layoutBox.y);
          target.y.min = lead.target.y.min;
          target.y.max = target.y.min + yLength;
        }
        copyBoxInto(targetWithTransforms, target);
        transformBox(targetWithTransforms, latestValues);
        calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
      }
      registerSharedNode(layoutId, node) {
        if (!this.sharedNodes.has(layoutId)) {
          this.sharedNodes.set(layoutId, new NodeStack());
        }
        const stack = this.sharedNodes.get(layoutId);
        stack.add(node);
        const config = node.options.initialPromotionConfig;
        node.promote({
          transition: config ? config.transition : void 0,
          preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
        });
      }
      isLead() {
        const stack = this.getStack();
        return stack ? stack.lead === this : true;
      }
      getLead() {
        var _a;
        const { layoutId } = this.options;
        return layoutId ? ((_a = this.getStack()) == null ? void 0 : _a.lead) || this : this;
      }
      getPrevLead() {
        var _a;
        const { layoutId } = this.options;
        return layoutId ? (_a = this.getStack()) == null ? void 0 : _a.prevLead : void 0;
      }
      getStack() {
        const { layoutId } = this.options;
        if (layoutId)
          return this.root.sharedNodes.get(layoutId);
      }
      promote({ needsReset, transition, preserveFollowOpacity } = {}) {
        const stack = this.getStack();
        if (stack)
          stack.promote(this, preserveFollowOpacity);
        if (needsReset) {
          this.projectionDelta = void 0;
          this.needsReset = true;
        }
        if (transition)
          this.setOptions({ transition });
      }
      relegate() {
        const stack = this.getStack();
        if (stack) {
          return stack.relegate(this);
        } else {
          return false;
        }
      }
      resetSkewAndRotation() {
        const { visualElement } = this.options;
        if (!visualElement)
          return;
        let hasDistortingTransform = false;
        const { latestValues } = visualElement;
        if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
          hasDistortingTransform = true;
        }
        if (!hasDistortingTransform)
          return;
        const resetValues = {};
        if (latestValues.z) {
          resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
        }
        for (let i = 0; i < transformAxes.length; i++) {
          resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
          resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        }
        visualElement.render();
        for (const key in resetValues) {
          visualElement.setStaticValue(key, resetValues[key]);
          if (this.animationValues) {
            this.animationValues[key] = resetValues[key];
          }
        }
        visualElement.scheduleRender();
      }
      getProjectionStyles(styleProp) {
        var _a, _b;
        if (!this.instance || this.isSVG)
          return void 0;
        if (!this.isVisible) {
          return hiddenVisibility;
        }
        const styles = {
          visibility: ""
        };
        const transformTemplate = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false;
          styles.opacity = "";
          styles.pointerEvents = resolveMotionValue(styleProp == null ? void 0 : styleProp.pointerEvents) || "";
          styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
          return styles;
        }
        const lead = this.getLead();
        if (!this.projectionDelta || !this.layout || !lead.target) {
          const emptyStyles = {};
          if (this.options.layoutId) {
            emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
            emptyStyles.pointerEvents = resolveMotionValue(styleProp == null ? void 0 : styleProp.pointerEvents) || "";
          }
          if (this.hasProjected && !hasTransform(this.latestValues)) {
            emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
            this.hasProjected = false;
          }
          return emptyStyles;
        }
        const valuesToRender = lead.animationValues || lead.latestValues;
        this.applyTransformsToTarget();
        styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
        if (transformTemplate) {
          styles.transform = transformTemplate(valuesToRender, styles.transform);
        }
        const { x, y } = this.projectionDelta;
        styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
        if (lead.animationValues) {
          styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) != null ? _a : this.latestValues.opacity) != null ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
        } else {
          styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
        }
        for (const key in scaleCorrectors) {
          if (valuesToRender[key] === void 0)
            continue;
          const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
          const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
          if (applyTo) {
            const num = applyTo.length;
            for (let i = 0; i < num; i++) {
              styles[applyTo[i]] = corrected;
            }
          } else {
            if (isCSSVariable) {
              this.options.visualElement.renderState.vars[key] = corrected;
            } else {
              styles[key] = corrected;
            }
          }
        }
        if (this.options.layoutId) {
          styles.pointerEvents = lead === this ? resolveMotionValue(styleProp == null ? void 0 : styleProp.pointerEvents) || "" : "none";
        }
        return styles;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((node) => {
          var _a;
          return (_a = node.currentAnimation) == null ? void 0 : _a.stop();
        });
        this.root.nodes.forEach(clearMeasurements);
        this.root.sharedNodes.clear();
      }
    };
  }
  function updateLayout(node) {
    node.updateLayout();
  }
  function notifyLayoutUpdate(node) {
    var _a;
    const snapshot = ((_a = node.resumeFrom) == null ? void 0 : _a.snapshot) || node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
      const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
      const { animationType } = node.options;
      const isShared = snapshot.source !== node.layout.source;
      if (animationType === "size") {
        eachAxis((axis) => {
          const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
          const length = calcLength(axisSnapshot);
          axisSnapshot.min = layout2[axis].min;
          axisSnapshot.max = axisSnapshot.min + length;
        });
      } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
        eachAxis((axis) => {
          const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
          const length = calcLength(layout2[axis]);
          axisSnapshot.max = axisSnapshot.min + length;
          if (node.relativeTarget && !node.currentAnimation) {
            node.isProjectionDirty = true;
            node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
          }
        });
      }
      const layoutDelta = createDelta();
      calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
      const visualDelta = createDelta();
      if (isShared) {
        calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
      } else {
        calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
      }
      const hasLayoutChanged = !isDeltaZero(layoutDelta);
      let hasRelativeLayoutChanged = false;
      if (!node.resumeFrom) {
        const relativeParent = node.getClosestProjectingParent();
        if (relativeParent && !relativeParent.resumeFrom) {
          const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
          if (parentSnapshot && parentLayout) {
            const relativeSnapshot = createBox();
            calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
            const relativeLayout = createBox();
            calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
            if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
              hasRelativeLayoutChanged = true;
            }
            if (relativeParent.options.layoutRoot) {
              node.relativeTarget = relativeLayout;
              node.relativeTargetOrigin = relativeSnapshot;
              node.relativeParent = relativeParent;
            }
          }
        }
      }
      node.notifyListeners("didUpdate", {
        layout: layout2,
        snapshot,
        delta: visualDelta,
        layoutDelta,
        hasLayoutChanged,
        hasRelativeLayoutChanged
      });
    } else if (node.isLead()) {
      const { onExitComplete } = node.options;
      onExitComplete && onExitComplete();
    }
    node.options.transition = void 0;
  }
  function propagateDirtyNodes(node) {
    if (!node.parent)
      return;
    if (!node.isProjecting()) {
      node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
  }
  function cleanDirtyNodes(node) {
    node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
  }
  function clearSnapshot(node) {
    node.clearSnapshot();
  }
  function clearMeasurements(node) {
    node.clearMeasurements();
  }
  function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
  }
  function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
      visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
  }
  function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = void 0;
    node.isProjectionDirty = true;
  }
  function resolveTargetDelta(node) {
    node.resolveTargetDelta();
  }
  function calcProjection(node) {
    node.calcProjection();
  }
  function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
  }
  function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
  }
  function mixAxisDelta(output, delta, p) {
    output.translate = mixNumber$1(delta.translate, 0, p);
    output.scale = mixNumber$1(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
  }
  function mixAxis(output, from, to, p) {
    output.min = mixNumber$1(from.min, to.min, p);
    output.max = mixNumber$1(from.max, to.max, p);
  }
  function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
  }
  function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== void 0;
  }
  const defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  const userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
  const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
  function roundAxis(axis) {
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
  }
  function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
  }
  function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
    return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
  }
  function checkNodeWasScrollRoot(node) {
    var _a;
    return node !== node.root && ((_a = node.scroll) == null ? void 0 : _a.wasRoot);
  }
  const DocumentProjectionNode = createProjectionNode({
    attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => true
  });
  const rootProjectionNode = {
    current: void 0
  };
  const HTMLProjectionNode = createProjectionNode({
    measureScroll: (instance) => ({
      x: instance.scrollLeft,
      y: instance.scrollTop
    }),
    defaultParent: () => {
      if (!rootProjectionNode.current) {
        const documentNode = new DocumentProjectionNode({});
        documentNode.mount(window);
        documentNode.setOptions({ layoutScroll: true });
        rootProjectionNode.current = documentNode;
      }
      return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
      instance.style.transform = value !== void 0 ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
  });
  const drag = {
    pan: {
      Feature: PanGesture
    },
    drag: {
      Feature: DragGesture,
      ProjectionNode: HTMLProjectionNode,
      MeasureLayout
    }
  };
  function handleHoverEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", lifecycle === "Start");
    }
    const eventName = "onHover" + lifecycle;
    const callback = props[eventName];
    if (callback) {
      frame.postRender(() => callback(event, extractEventInfo(event)));
    }
  }
  class HoverGesture extends Feature {
    mount() {
      const { current } = this.node;
      if (!current)
        return;
      this.unmount = hover(current, (_element, startEvent) => {
        handleHoverEvent(this.node, startEvent, "Start");
        return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
      });
    }
    unmount() {
    }
  }
  class FocusGesture extends Feature {
    constructor() {
      super(...arguments);
      this.isActive = false;
    }
    onFocus() {
      let isFocusVisible = false;
      try {
        isFocusVisible = this.node.current.matches(":focus-visible");
      } catch (e) {
        isFocusVisible = true;
      }
      if (!isFocusVisible || !this.node.animationState)
        return;
      this.node.animationState.setActive("whileFocus", true);
      this.isActive = true;
    }
    onBlur() {
      if (!this.isActive || !this.node.animationState)
        return;
      this.node.animationState.setActive("whileFocus", false);
      this.isActive = false;
    }
    mount() {
      this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  function handlePressEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.current instanceof HTMLButtonElement && node.current.disabled) {
      return;
    }
    if (node.animationState && props.whileTap) {
      node.animationState.setActive("whileTap", lifecycle === "Start");
    }
    const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
    const callback = props[eventName];
    if (callback) {
      frame.postRender(() => callback(event, extractEventInfo(event)));
    }
  }
  class PressGesture extends Feature {
    mount() {
      const { current } = this.node;
      if (!current)
        return;
      this.unmount = press(current, (_element, startEvent) => {
        handlePressEvent(this.node, startEvent, "Start");
        return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
      }, { useGlobalTarget: this.node.props.globalTapTarget });
    }
    unmount() {
    }
  }
  const observerCallbacks = /* @__PURE__ */ new WeakMap();
  const observers = /* @__PURE__ */ new WeakMap();
  const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
  };
  const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
  };
  function initIntersectionObserver(_i) {
    var _j = _i, { root } = _j, options2 = __objRest(_j, ["root"]);
    const lookupRoot = root || document;
    if (!observers.has(lookupRoot)) {
      observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options2);
    if (!rootObservers[key]) {
      rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __spreadValues({ root }, options2));
    }
    return rootObservers[key];
  }
  function observeIntersection(element, options2, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options2);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
      observerCallbacks.delete(element);
      rootInteresectionObserver.unobserve(element);
    };
  }
  const thresholdNames = {
    some: 0,
    all: 1
  };
  class InViewFeature extends Feature {
    constructor() {
      super(...arguments);
      this.hasEnteredView = false;
      this.isInView = false;
    }
    startObserver() {
      this.unmount();
      const { viewport = {} } = this.node.getProps();
      const { root, margin: rootMargin, amount = "some", once } = viewport;
      const options2 = {
        root: root ? root.current : void 0,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholdNames[amount]
      };
      const onIntersectionUpdate = (entry) => {
        const { isIntersecting } = entry;
        if (this.isInView === isIntersecting)
          return;
        this.isInView = isIntersecting;
        if (once && !isIntersecting && this.hasEnteredView) {
          return;
        } else if (isIntersecting) {
          this.hasEnteredView = true;
        }
        if (this.node.animationState) {
          this.node.animationState.setActive("whileInView", isIntersecting);
        }
        const { onViewportEnter, onViewportLeave } = this.node.getProps();
        const callback = isIntersecting ? onViewportEnter : onViewportLeave;
        callback && callback(entry);
      };
      return observeIntersection(this.node.current, options2, onIntersectionUpdate);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver === "undefined")
        return;
      const { props, prevProps } = this.node;
      const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
      if (hasOptionsChanged) {
        this.startObserver();
      }
    }
    unmount() {
    }
  }
  function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
  }
  const gestureAnimations = {
    inView: {
      Feature: InViewFeature
    },
    tap: {
      Feature: PressGesture
    },
    focus: {
      Feature: FocusGesture
    },
    hover: {
      Feature: HoverGesture
    }
  };
  const layout = {
    layout: {
      ProjectionNode: HTMLProjectionNode,
      MeasureLayout
    }
  };
  const prefersReducedMotion = { current: null };
  const hasReducedMotionListener = { current: false };
  function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser)
      return;
    if (window.matchMedia) {
      const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
      const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
      motionMediaQuery.addListener(setReducedMotionPreferences);
      setReducedMotionPreferences();
    } else {
      prefersReducedMotion.current = false;
    }
  }
  const valueTypes = [...dimensionValueTypes, color, complex];
  const findValueType = (v) => valueTypes.find(testValueType(v));
  const visualElementStore = /* @__PURE__ */ new WeakMap();
  function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
      const nextValue = next[key];
      const prevValue = prev[key];
      if (isMotionValue(nextValue)) {
        element.addValue(key, nextValue);
      } else if (isMotionValue(prevValue)) {
        element.addValue(key, motionValue(nextValue, { owner: element }));
      } else if (prevValue !== nextValue) {
        if (element.hasValue(key)) {
          const existingValue = element.getValue(key);
          if (existingValue.liveStyle === true) {
            existingValue.jump(nextValue);
          } else if (!existingValue.hasAnimated) {
            existingValue.set(nextValue);
          }
        } else {
          const latestValue = element.getStaticValue(key);
          element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
        }
      }
    }
    for (const key in prev) {
      if (next[key] === void 0)
        element.removeValue(key);
    }
    return next;
  }
  const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  class VisualElement {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
      return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options2 = {}) {
      this.current = null;
      this.children = /* @__PURE__ */ new Set();
      this.isVariantNode = false;
      this.isControllingVariants = false;
      this.shouldReduceMotion = null;
      this.values = /* @__PURE__ */ new Map();
      this.KeyframeResolver = KeyframeResolver;
      this.features = {};
      this.valueSubscriptions = /* @__PURE__ */ new Map();
      this.prevMotionValues = {};
      this.events = {};
      this.propEventSubscriptions = {};
      this.notifyUpdate = () => this.notify("Update", this.latestValues);
      this.render = () => {
        if (!this.current)
          return;
        this.triggerBuild();
        this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
      };
      this.renderScheduledAt = 0;
      this.scheduleRender = () => {
        const now2 = time.now();
        if (this.renderScheduledAt < now2) {
          this.renderScheduledAt = now2;
          frame.render(this.render, false, true);
        }
      };
      const { latestValues, renderState, onUpdate } = visualState;
      this.onUpdate = onUpdate;
      this.latestValues = latestValues;
      this.baseTarget = __spreadValues({}, latestValues);
      this.initialValues = props.initial ? __spreadValues({}, latestValues) : {};
      this.renderState = renderState;
      this.parent = parent;
      this.props = props;
      this.presenceContext = presenceContext;
      this.depth = parent ? parent.depth + 1 : 0;
      this.reducedMotionConfig = reducedMotionConfig;
      this.options = options2;
      this.blockInitialAnimation = Boolean(blockInitialAnimation);
      this.isControllingVariants = isControllingVariants(props);
      this.isVariantNode = isVariantNode(props);
      if (this.isVariantNode) {
        this.variantChildren = /* @__PURE__ */ new Set();
      }
      this.manuallyAnimateOnMount = Boolean(parent && parent.current);
      const _a = this.scrapeMotionValuesFromProps(props, {}, this), { willChange } = _a, initialMotionValues = __objRest(_a, ["willChange"]);
      for (const key in initialMotionValues) {
        const value = initialMotionValues[key];
        if (latestValues[key] !== void 0 && isMotionValue(value)) {
          value.set(latestValues[key], false);
        }
      }
    }
    mount(instance) {
      this.current = instance;
      visualElementStore.set(instance, this);
      if (this.projection && !this.projection.instance) {
        this.projection.mount(instance);
      }
      if (this.parent && this.isVariantNode && !this.isControllingVariants) {
        this.removeFromVariantTree = this.parent.addVariantChild(this);
      }
      this.values.forEach((value, key) => this.bindToMotionValue(key, value));
      if (!hasReducedMotionListener.current) {
        initPrefersReducedMotion();
      }
      this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
      if (this.parent)
        this.parent.children.add(this);
      this.update(this.props, this.presenceContext);
    }
    unmount() {
      this.projection && this.projection.unmount();
      cancelFrame(this.notifyUpdate);
      cancelFrame(this.render);
      this.valueSubscriptions.forEach((remove) => remove());
      this.valueSubscriptions.clear();
      this.removeFromVariantTree && this.removeFromVariantTree();
      this.parent && this.parent.children.delete(this);
      for (const key in this.events) {
        this.events[key].clear();
      }
      for (const key in this.features) {
        const feature = this.features[key];
        if (feature) {
          feature.unmount();
          feature.isMounted = false;
        }
      }
      this.current = null;
    }
    bindToMotionValue(key, value) {
      if (this.valueSubscriptions.has(key)) {
        this.valueSubscriptions.get(key)();
      }
      const valueIsTransform = transformProps.has(key);
      if (valueIsTransform && this.onBindTransform) {
        this.onBindTransform();
      }
      const removeOnChange = value.on("change", (latestValue) => {
        this.latestValues[key] = latestValue;
        this.props.onUpdate && frame.preRender(this.notifyUpdate);
        if (valueIsTransform && this.projection) {
          this.projection.isTransformDirty = true;
        }
      });
      const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
      let removeSyncCheck;
      if (window.MotionCheckAppearSync) {
        removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
      }
      this.valueSubscriptions.set(key, () => {
        removeOnChange();
        removeOnRenderRequest();
        if (removeSyncCheck)
          removeSyncCheck();
        if (value.owner)
          value.stop();
      });
    }
    sortNodePosition(other) {
      if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
        return 0;
      }
      return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
      let key = "animation";
      for (key in featureDefinitions) {
        const featureDefinition = featureDefinitions[key];
        if (!featureDefinition)
          continue;
        const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
        if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
          this.features[key] = new FeatureConstructor(this);
        }
        if (this.features[key]) {
          const feature = this.features[key];
          if (feature.isMounted) {
            feature.update();
          } else {
            feature.mount();
            feature.isMounted = true;
          }
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
    }
    getStaticValue(key) {
      return this.latestValues[key];
    }
    setStaticValue(key, value) {
      this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
      if (props.transformTemplate || this.props.transformTemplate) {
        this.scheduleRender();
      }
      this.prevProps = this.props;
      this.props = props;
      this.prevPresenceContext = this.presenceContext;
      this.presenceContext = presenceContext;
      for (let i = 0; i < propEventHandlers.length; i++) {
        const key = propEventHandlers[i];
        if (this.propEventSubscriptions[key]) {
          this.propEventSubscriptions[key]();
          delete this.propEventSubscriptions[key];
        }
        const listenerName = "on" + key;
        const listener = props[listenerName];
        if (listener) {
          this.propEventSubscriptions[key] = this.on(key, listener);
        }
      }
      this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
      if (this.handleChildMotionValue) {
        this.handleChildMotionValue();
      }
      this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
      return this.props.variants ? this.props.variants[name] : void 0;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
      const closestVariantNode = this.getClosestVariantNode();
      if (closestVariantNode) {
        closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
        return () => closestVariantNode.variantChildren.delete(child);
      }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
      const existingValue = this.values.get(key);
      if (value !== existingValue) {
        if (existingValue)
          this.removeValue(key);
        this.bindToMotionValue(key, value);
        this.values.set(key, value);
        this.latestValues[key] = value.get();
      }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
      this.values.delete(key);
      const unsubscribe = this.valueSubscriptions.get(key);
      if (unsubscribe) {
        unsubscribe();
        this.valueSubscriptions.delete(key);
      }
      delete this.latestValues[key];
      this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
      return this.values.has(key);
    }
    getValue(key, defaultValue) {
      if (this.props.values && this.props.values[key]) {
        return this.props.values[key];
      }
      let value = this.values.get(key);
      if (value === void 0 && defaultValue !== void 0) {
        value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
        this.addValue(key, value);
      }
      return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key, target) {
      var _a;
      let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) != null ? _a : this.readValueFromInstance(this.current, key, this.options);
      if (value !== void 0 && value !== null) {
        if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
          value = parseFloat(value);
        } else if (!findValueType(value) && complex.test(target)) {
          value = getAnimatableNone(key, target);
        }
        this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
      }
      return isMotionValue(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
      this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
      var _a;
      const { initial } = this.props;
      let valueFromInitial;
      if (typeof initial === "string" || typeof initial === "object") {
        const variant = resolveVariantFromProps(this.props, initial, (_a = this.presenceContext) == null ? void 0 : _a.custom);
        if (variant) {
          valueFromInitial = variant[key];
        }
      }
      if (initial && valueFromInitial !== void 0) {
        return valueFromInitial;
      }
      const target = this.getBaseTargetFromProps(this.props, key);
      if (target !== void 0 && !isMotionValue(target))
        return target;
      return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
      if (this.events[eventName]) {
        this.events[eventName].notify(...args);
      }
    }
  }
  class DOMVisualElement extends VisualElement {
    constructor() {
      super(...arguments);
      this.KeyframeResolver = DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
      return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
      return props.style ? props.style[key] : void 0;
    }
    removeValueFromRenderState(key, { vars, style }) {
      delete vars[key];
      delete style[key];
    }
    handleChildMotionValue() {
      if (this.childSubscription) {
        this.childSubscription();
        delete this.childSubscription;
      }
      const { children } = this.props;
      if (isMotionValue(children)) {
        this.childSubscription = children.on("change", (latest) => {
          if (this.current) {
            this.current.textContent = `${latest}`;
          }
        });
      }
    }
  }
  function getComputedStyle$1(element) {
    return window.getComputedStyle(element);
  }
  class HTMLVisualElement extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "html";
      this.renderInstance = renderHTML;
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        return readTransformValue(instance, key);
      } else {
        const computedStyle = getComputedStyle$1(instance);
        const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
        return typeof value === "string" ? value.trim() : value;
      }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
      return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
      buildHTMLStyles(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
    }
  }
  class SVGVisualElement extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "svg";
      this.isSVGTag = false;
      this.measureInstanceViewportBox = createBox;
      this.updateDimensions = () => {
        if (this.current && !this.renderState.dimensions) {
          updateSVGDimensions(this.current, this.renderState);
        }
      };
    }
    getBaseTargetFromProps(props, key) {
      return props[key];
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        const defaultType = getDefaultValueType(key);
        return defaultType ? defaultType.default || 0 : 0;
      }
      key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps(props, prevProps, visualElement);
    }
    onBindTransform() {
      if (this.current && !this.renderState.dimensions) {
        frame.postRender(this.updateDimensions);
      }
    }
    build(renderState, latestValues, props) {
      buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
      renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
      this.isSVGTag = isSVGTag(instance.tagName);
      super.mount(instance);
    }
  }
  const createDomVisualElement = (Component2, options2) => {
    return isSVGComponent(Component2) ? new SVGVisualElement(options2) : new HTMLVisualElement(options2, {
      allowProjection: Component2 !== reactExports.Fragment
    });
  };
  const createMotionComponent = /* @__PURE__ */ createMotionComponentFactory(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, animations), gestureAnimations), drag), layout), createDomVisualElement);
  const motion = /* @__PURE__ */ createDOMMotionComponentProxy(createMotionComponent);
  const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
  const cx = clsx;
  const cva = (base, config) => (props) => {
    var _config_compoundVariants;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null) return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
      let _a = param, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
      return Object.entries(compoundVariantOptions).every((param2) => {
        let [key, value] = param2;
        return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
  const alertVariants = cva(
    "tw:relative tw:w-full tw:rounded-lg tw:border tw:px-4 tw:py-3 tw:text-sm tw:[&>svg+div]:translate-y-[-3px] tw:[&>svg]:absolute tw:[&>svg]:left-4 tw:[&>svg]:top-4 tw:[&>svg]:text-foreground tw:[&>svg~*]:pl-7",
    {
      variants: {
        variant: {
          default: "tw:bg-background tw:text-foreground tw:text-base",
          destructive: "tw:border-destructive/50 tw:text-destructive tw:dark:border-destructive tw:[&>svg]:text-destructive"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
  );
  const Alert = reactExports.forwardRef((_k, ref) => {
    var _l = _k, { className, variant } = _l, props = __objRest(_l, ["className", "variant"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadValues({
        ref,
        role: "alert",
        className: cn(alertVariants({ variant }), className)
      }, props)
    );
  });
  Alert.displayName = "Alert";
  const AlertTitle = reactExports.forwardRef((_m, ref) => {
    var _n = _m, { className } = _n, props = __objRest(_n, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadValues({
        ref,
        className: cn(
          "tw:mb-1 tw:text-lg tw:leading-none tw:tracking-tight",
          className
        )
      }, props)
    );
  });
  AlertTitle.displayName = "AlertTitle";
  const AlertDescription = reactExports.forwardRef((_o, ref) => {
    var _p = _o, { className } = _p, props = __objRest(_p, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadValues({
        ref,
        className: cn("tw:text-sm tw:[&_p]:leading-relaxed", className)
      }, props)
    );
  });
  AlertDescription.displayName = "AlertDescription";
  function setRef(ref, value) {
    if (typeof ref === "function") {
      return ref(value);
    } else if (ref !== null && ref !== void 0) {
      ref.current = value;
    }
  }
  function composeRefs(...refs) {
    return (node) => {
      let hasCleanup = false;
      const cleanups = refs.map((ref) => {
        const cleanup = setRef(ref, node);
        if (!hasCleanup && typeof cleanup == "function") {
          hasCleanup = true;
        }
        return cleanup;
      });
      if (hasCleanup) {
        return () => {
          for (let i = 0; i < cleanups.length; i++) {
            const cleanup = cleanups[i];
            if (typeof cleanup == "function") {
              cleanup();
            } else {
              setRef(refs[i], null);
            }
          }
        };
      }
    };
  }
  function useComposedRefs(...refs) {
    return reactExports.useCallback(composeRefs(...refs), refs);
  }
  var Slot = reactExports.forwardRef((props, forwardedRef) => {
    const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
    const childrenArray = reactExports.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
          return reactExports.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null }));
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children }));
  });
  Slot.displayName = "Slot";
  var SlotClone = reactExports.forwardRef((props, forwardedRef) => {
    const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
    if (reactExports.isValidElement(children)) {
      const childrenRef = getElementRef$1(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== reactExports.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return reactExports.cloneElement(children, props2);
    }
    return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
  });
  SlotClone.displayName = "SlotClone";
  var Slottable = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  };
  function isSlottable(child) {
    return reactExports.isValidElement(child) && child.type === Slottable;
  }
  function mergeProps(slotProps, childProps) {
    const overrideProps = __spreadValues({}, childProps);
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue) {
          overrideProps[propName] = (...args) => {
            childPropValue(...args);
            slotPropValue(...args);
          };
        } else if (slotPropValue) {
          overrideProps[propName] = slotPropValue;
        }
      } else if (propName === "style") {
        overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
      } else if (propName === "className") {
        overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
      }
    }
    return __spreadValues(__spreadValues({}, slotProps), overrideProps);
  }
  function getElementRef$1(element) {
    var _a, _b;
    let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }
  const buttonVariants = cva(
    "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:whitespace-nowrap tw:rounded-md tw:text-base tw:font-medium tw:transition-colors tw:focus-visible:outline-none tw:focus-visible:ring-1 tw:focus-visible:ring-ring tw:disabled:pointer-events-none tw:disabled:opacity-50 tw:[&_svg]:pointer-events-none tw:[&_svg]:size-4 tw:[&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "tw:bg-primary tw:text-primary-foreground tw:shadow tw:hover:bg-primary/90",
          destructive: "tw:bg-destructive tw:text-destructive-foreground tw:shadow-sm tw:hover:bg-destructive/90",
          outline: "tw:border tw:border-input tw:bg-background tw:shadow-sm tw:hover:bg-accent tw:hover:text-accent-foreground",
          secondary: "tw:bg-secondary tw:text-secondary-foreground tw:shadow-sm hover:bg-secondary/80",
          ghost: "tw:hover:bg-accent tw:hover:text-accent-foreground",
          link: "tw:text-primary tw:underline-offset-4 tw:hover:underline",
          unstyled: ""
        },
        size: {
          default: "tw:px-4 tw:py-2 tw:text-md",
          sm: "tw:h-8 tw:rounded-md tw:px-4 tw:py-3 tw:text-xs tw:text-lg",
          lg: "tw:rounded-md tw:px-8 tw:py-3 tw:text-xl",
          unstyled: "",
          icon: "tw:h-9 tw:w-9"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }
  );
  const Button = reactExports.forwardRef(
    (_q, ref) => {
      var _r = _q, { className, variant, size, asChild = false, disabled } = _r, props = __objRest(_r, ["className", "variant", "size", "asChild", "disabled"]);
      const Comp = asChild ? Slot : "div";
      const computedClassName = cn(
        buttonVariants({ variant, size, className }),
        disabled ? "tw:cursor-not-allowed tw:opacity-50 tw:pointer-events-none" : "tw:cursor-pointer"
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Comp,
        __spreadValues(__spreadValues({
          className: computedClassName,
          ref,
          "aria-disabled": disabled
        }, asChild ? { disabled } : {}), props)
      );
    }
  );
  Button.displayName = "Button";
  const SubmitButton = reactExports.forwardRef(
    (_s, ref) => {
      var _t = _s, { className, variant, size, disabled } = _t, props = __objRest(_t, ["className", "variant", "size", "disabled"]);
      const computedClassName = cn(
        buttonVariants({ variant, size, className }),
        disabled ? "tw:cursor-not-allowed tw:opacity-50 tw:pointer-events-none" : "tw:cursor-pointer"
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        __spreadProps(__spreadValues({
          className: computedClassName,
          ref,
          "aria-disabled": disabled
        }, props), {
          type: "submit"
        })
      );
    }
  );
  SubmitButton.displayName = "SubmitButton";
  const Card = reactExports.forwardRef((_u, ref) => {
    var _v = _u, { className } = _v, props = __objRest(_v, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadValues({
        ref,
        className: cn(
          "tw:rounded-xl tw:border tw:bg-card tw:text-card-foreground tw:shadow",
          className
        )
      }, props)
    );
  });
  Card.displayName = "Card";
  const CardHeader = reactExports.forwardRef((_w, ref) => {
    var _x = _w, { className } = _x, props = __objRest(_x, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadValues({
        ref,
        className: cn("tw:flex tw:flex-col tw:space-y-1.5 tw:p-6", className)
      }, props)
    );
  });
  CardHeader.displayName = "CardHeader";
  const CardTitle = reactExports.forwardRef((_y, ref) => {
    var _z = _y, { className } = _z, props = __objRest(_z, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadValues({
        ref,
        className: cn(
          "tw:font-semibold tw:leading-none tw:tracking-tight",
          className
        )
      }, props)
    );
  });
  CardTitle.displayName = "CardTitle";
  const CardDescription = reactExports.forwardRef((_A, ref) => {
    var _B = _A, { className } = _B, props = __objRest(_B, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadValues({
        ref,
        className: cn("tw:text-sm tw:text-muted-foreground", className)
      }, props)
    );
  });
  CardDescription.displayName = "CardDescription";
  const CardContent = reactExports.forwardRef((_C, ref) => {
    var _D = _C, { className } = _D, props = __objRest(_D, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ ref, className: cn("tw:p-6 tw:pt-0", className) }, props));
  });
  CardContent.displayName = "CardContent";
  const CardFooter = reactExports.forwardRef((_E, ref) => {
    var _F = _E, { className } = _F, props = __objRest(_F, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadValues({
        ref,
        className: cn("tw:flex tw:items-center tw:p-6 tw:pt-0", className)
      }, props)
    );
  });
  CardFooter.displayName = "CardFooter";
  var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ];
  var Primitive = NODES.reduce((primitive, node) => {
    const Node = reactExports.forwardRef((props, forwardedRef) => {
      const _a = props, { asChild } = _a, primitiveProps = __objRest(_a, ["asChild"]);
      const Comp = asChild ? Slot : node;
      if (typeof window !== "undefined") {
        window[Symbol.for("radix-ui")] = true;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, __spreadProps(__spreadValues({}, primitiveProps), { ref: forwardedRef }));
    });
    Node.displayName = `Primitive.${node}`;
    return __spreadProps(__spreadValues({}, primitive), { [node]: Node });
  }, {});
  function dispatchDiscreteCustomEvent(target, event) {
    if (target) reactDomExports.flushSync(() => target.dispatchEvent(event));
  }
  var NAME = "Label";
  var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.label,
      __spreadProps(__spreadValues({}, props), {
        ref: forwardedRef,
        onMouseDown: (event) => {
          var _a;
          const target = event.target;
          if (target.closest("button, input, select, textarea")) return;
          (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
      })
    );
  });
  Label$1.displayName = NAME;
  var Root$4 = Label$1;
  const labelVariants = cva(
    "tw:text-sm tw:font-medium tw:leading-none tw:peer-disabled:cursor-not-allowed tw:peer-disabled:opacity-70"
  );
  const Label = reactExports.forwardRef((_G, ref) => {
    var _H = _G, { className } = _H, props = __objRest(_H, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root$4,
      __spreadValues({
        ref,
        className: cn(labelVariants(), className)
      }, props)
    );
  });
  Label.displayName = Root$4.displayName;
  function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
      originalEventHandler == null ? void 0 : originalEventHandler(event);
      if (checkForDefaultPrevented === false || !event.defaultPrevented) {
        return ourEventHandler == null ? void 0 : ourEventHandler(event);
      }
    };
  }
  function createContext2(rootComponentName, defaultContext) {
    const Context = reactExports.createContext(defaultContext);
    const Provider = (props) => {
      const _a = props, { children } = _a, context = __objRest(_a, ["children"]);
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
      const BaseContext = reactExports.createContext(defaultContext);
      const index = defaultContexts.length;
      defaultContexts = [...defaultContexts, defaultContext];
      const Provider = (props) => {
        var _b;
        const _a = props, { scope, children } = _a, context = __objRest(_a, ["scope", "children"]);
        const Context = ((_b = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _b[index]) || BaseContext;
        const value = reactExports.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
      };
      Provider.displayName = rootComponentName + "Provider";
      function useContext2(consumerName, scope) {
        var _a;
        const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
        const context = reactExports.useContext(Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      return [Provider, useContext2];
    }
    const createScope = () => {
      const scopeContexts = defaultContexts.map((defaultContext) => {
        return reactExports.createContext(defaultContext);
      });
      return function useScope(scope) {
        const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
        return reactExports.useMemo(
          () => ({ [`__scope${scopeName}`]: __spreadProps(__spreadValues({}, scope), { [scopeName]: contexts }) }),
          [scope, contexts]
        );
      };
    };
    createScope.scopeName = scopeName;
    return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
  }
  function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = () => {
      const scopeHooks = scopes.map((createScope2) => ({
        useScope: createScope2(),
        scopeName: createScope2.scopeName
      }));
      return function useComposedScopes(overrideScopes) {
        const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
          const scopeProps = useScope(overrideScopes);
          const currentScope = scopeProps[`__scope${scopeName}`];
          return __spreadValues(__spreadValues({}, nextScopes2), currentScope);
        }, {});
        return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
      };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
  }
  function useCallbackRef$1(callback) {
    const callbackRef = reactExports.useRef(callback);
    reactExports.useEffect(() => {
      callbackRef.current = callback;
    });
    return reactExports.useMemo(() => (...args) => {
      var _a;
      return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
    }, []);
  }
  function useControllableState({
    prop,
    defaultProp,
    onChange = () => {
    }
  }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = useCallbackRef$1(onChange);
    const setValue = reactExports.useCallback(
      (nextValue) => {
        if (isControlled) {
          const setter = nextValue;
          const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
          if (value2 !== prop) handleChange(value2);
        } else {
          setUncontrolledProp(nextValue);
        }
      },
      [isControlled, prop, setUncontrolledProp, handleChange]
    );
    return [value, setValue];
  }
  function useUncontrolledState({
    defaultProp,
    onChange
  }) {
    const uncontrolledState = reactExports.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = reactExports.useRef(value);
    const handleChange = useCallbackRef$1(onChange);
    reactExports.useEffect(() => {
      if (prevValueRef.current !== value) {
        handleChange(value);
        prevValueRef.current = value;
      }
    }, [value, prevValueRef, handleChange]);
    return uncontrolledState;
  }
  function usePrevious(value) {
    const ref = reactExports.useRef({ value, previous: value });
    return reactExports.useMemo(() => {
      if (ref.current.value !== value) {
        ref.current.previous = ref.current.value;
        ref.current.value = value;
      }
      return ref.current.previous;
    }, [value]);
  }
  var useLayoutEffect2 = Boolean(globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
  };
  function useSize(element) {
    const [size, setSize] = reactExports.useState(void 0);
    useLayoutEffect2(() => {
      if (element) {
        setSize({ width: element.offsetWidth, height: element.offsetHeight });
        const resizeObserver = new ResizeObserver((entries) => {
          if (!Array.isArray(entries)) {
            return;
          }
          if (!entries.length) {
            return;
          }
          const entry = entries[0];
          let width;
          let height;
          if ("borderBoxSize" in entry) {
            const borderSizeEntry = entry["borderBoxSize"];
            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
            width = borderSize["inlineSize"];
            height = borderSize["blockSize"];
          } else {
            width = element.offsetWidth;
            height = element.offsetHeight;
          }
          setSize({ width, height });
        });
        resizeObserver.observe(element, { box: "border-box" });
        return () => resizeObserver.unobserve(element);
      } else {
        setSize(void 0);
      }
    }, [element]);
    return size;
  }
  var SWITCH_NAME = "Switch";
  var [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME);
  var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
  var Switch$1 = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        __scopeSwitch,
        name,
        checked: checkedProp,
        defaultChecked,
        required,
        disabled,
        value = "on",
        onCheckedChange,
        form
      } = _a, switchProps = __objRest(_a, [
        "__scopeSwitch",
        "name",
        "checked",
        "defaultChecked",
        "required",
        "disabled",
        "value",
        "onCheckedChange",
        "form"
      ]);
      const [button, setButton] = reactExports.useState(null);
      const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
      const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
      const isFormControl = button ? form || !!button.closest("form") : true;
      const [checked = false, setChecked] = useControllableState({
        prop: checkedProp,
        defaultProp: defaultChecked,
        onChange: onCheckedChange
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          __spreadProps(__spreadValues({
            type: "button",
            role: "switch",
            "aria-checked": checked,
            "aria-required": required,
            "data-state": getState$3(checked),
            "data-disabled": disabled ? "" : void 0,
            disabled,
            value
          }, switchProps), {
            ref: composedRefs,
            onClick: composeEventHandlers(props.onClick, (event) => {
              setChecked((prevChecked) => !prevChecked);
              if (isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
              }
            })
          })
        ),
        isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
          BubbleInput,
          {
            control: button,
            bubbles: !hasConsumerStoppedPropagationRef.current,
            name,
            value,
            checked,
            required,
            disabled,
            form,
            style: { transform: "translateX(-100%)" }
          }
        )
      ] });
    }
  );
  Switch$1.displayName = SWITCH_NAME;
  var THUMB_NAME = "SwitchThumb";
  var SwitchThumb = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeSwitch } = _a, thumbProps = __objRest(_a, ["__scopeSwitch"]);
      const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.span,
        __spreadProps(__spreadValues({
          "data-state": getState$3(context.checked),
          "data-disabled": context.disabled ? "" : void 0
        }, thumbProps), {
          ref: forwardedRef
        })
      );
    }
  );
  SwitchThumb.displayName = THUMB_NAME;
  var BubbleInput = (props) => {
    const _a = props, { control, checked, bubbles = true } = _a, inputProps = __objRest(_a, ["control", "checked", "bubbles"]);
    const ref = reactExports.useRef(null);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      __spreadProps(__spreadValues({
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked
      }, inputProps), {
        tabIndex: -1,
        ref,
        style: __spreadProps(__spreadValues(__spreadValues({}, props.style), controlSize), {
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      })
    );
  };
  function getState$3(checked) {
    return checked ? "checked" : "unchecked";
  }
  var Root$3 = Switch$1;
  var Thumb = SwitchThumb;
  const Switch = reactExports.forwardRef((_I, ref) => {
    var _J = _I, { className } = _J, props = __objRest(_J, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root$3,
      __spreadProps(__spreadValues({
        className: cn(
          "tw:peer tw:inline-flex tw:h-5 tw:w-9 tw:shrink-0 tw:cursor-pointer tw:items-center tw:rounded-full tw:border-2 tw:border-transparent tw:shadow-sm tw:transition-colors tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-ring tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-background tw:disabled:cursor-not-allowed tw:disabled:opacity-50 tw:data-[state=checked]:bg-primary tw:data-[state=unchecked]:bg-input",
          className
        )
      }, props), {
        ref,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Thumb,
          {
            className: cn(
              "tw:pointer-events-none tw:block tw:h-4 tw:w-4 tw:rounded-full tw:bg-background tw:shadow-lg tw:ring-0 tw:transition-transform tw:data-[state=checked]:translate-x-4 tw:data-[state=unchecked]:translate-x-0"
            )
          }
        )
      })
    );
  });
  Switch.displayName = Root$3.displayName;
  function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
      PROVIDER_NAME,
      { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
    );
    const CollectionProvider = (props) => {
      const { scope, children } = props;
      const ref = React.useRef(null);
      const itemMap = React.useRef(/* @__PURE__ */ new Map()).current;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlot = React.forwardRef(
      (props, forwardedRef) => {
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Slot, { ref: composedRefs, children });
      }
    );
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlot = React.forwardRef(
      (props, forwardedRef) => {
        const _a = props, { scope, children } = _a, itemData = __objRest(_a, ["scope", "children"]);
        const ref = React.useRef(null);
        const composedRefs = useComposedRefs(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        React.useEffect(() => {
          context.itemMap.set(ref, __spreadValues({ ref }, itemData));
          return () => void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Slot, __spreadProps(__spreadValues({}, { [ITEM_DATA_ATTR]: "" }), { ref: composedRefs, children }));
      }
    );
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection2(scope) {
      const context = useCollectionContext(name + "CollectionConsumer", scope);
      const getItems = React.useCallback(() => {
        const collectionNode = context.collectionRef.current;
        if (!collectionNode) return [];
        const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
        const items = Array.from(context.itemMap.values());
        const orderedItems = items.sort(
          (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
        );
        return orderedItems;
      }, [context.collectionRef, context.itemMap]);
      return getItems;
    }
    return [
      { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
      useCollection2,
      createCollectionScope2
    ];
  }
  var useReactId = React$1["useId".toString()] || (() => void 0);
  var count$1 = 0;
  function useId(deterministicId) {
    const [id2, setId] = reactExports.useState(useReactId());
    useLayoutEffect2(() => {
      setId((reactId) => reactId != null ? reactId : String(count$1++));
    }, [deterministicId]);
    return deterministicId || (id2 ? `radix-${id2}` : "");
  }
  var DirectionContext = reactExports.createContext(void 0);
  function useDirection(localDir) {
    const globalDir = reactExports.useContext(DirectionContext);
    return localDir || globalDir || "ltr";
  }
  var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
  var EVENT_OPTIONS$1 = { bubbles: false, cancelable: true };
  var GROUP_NAME = "RovingFocusGroup";
  var [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(GROUP_NAME);
  var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
    GROUP_NAME,
    [createCollectionScope$1]
  );
  var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
  var RovingFocusGroup = reactExports.forwardRef(
    (props, forwardedRef) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection$1.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection$1.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RovingFocusGroupImpl, __spreadProps(__spreadValues({}, props), { ref: forwardedRef })) }) });
    }
  );
  RovingFocusGroup.displayName = GROUP_NAME;
  var RovingFocusGroupImpl = reactExports.forwardRef((props, forwardedRef) => {
    const _a = props, {
      __scopeRovingFocusGroup,
      orientation,
      loop = false,
      dir,
      currentTabStopId: currentTabStopIdProp,
      defaultCurrentTabStopId,
      onCurrentTabStopIdChange,
      onEntryFocus,
      preventScrollOnEntryFocus = false
    } = _a, groupProps = __objRest(_a, [
      "__scopeRovingFocusGroup",
      "orientation",
      "loop",
      "dir",
      "currentTabStopId",
      "defaultCurrentTabStopId",
      "onCurrentTabStopIdChange",
      "onEntryFocus",
      "preventScrollOnEntryFocus"
    ]);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const direction = useDirection(dir);
    const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
      prop: currentTabStopIdProp,
      defaultProp: defaultCurrentTabStopId,
      onChange: onCurrentTabStopIdChange
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = reactExports.useState(false);
    const handleEntryFocus = useCallbackRef$1(onEntryFocus);
    const getItems = useCollection$1(__scopeRovingFocusGroup);
    const isClickFocusRef = reactExports.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = reactExports.useState(0);
    reactExports.useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
        return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
      }
    }, [handleEntryFocus]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RovingFocusProvider,
      {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: reactExports.useCallback(
          (tabStopId) => setCurrentTabStopId(tabStopId),
          [setCurrentTabStopId]
        ),
        onItemShiftTab: reactExports.useCallback(() => setIsTabbingBackOut(true), []),
        onFocusableItemAdd: reactExports.useCallback(
          () => setFocusableItemsCount((prevCount) => prevCount + 1),
          []
        ),
        onFocusableItemRemove: reactExports.useCallback(
          () => setFocusableItemsCount((prevCount) => prevCount - 1),
          []
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          __spreadProps(__spreadValues({
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation
          }, groupProps), {
            ref: composedRefs,
            style: __spreadValues({ outline: "none" }, props.style),
            onMouseDown: composeEventHandlers(props.onMouseDown, () => {
              isClickFocusRef.current = true;
            }),
            onFocus: composeEventHandlers(props.onFocus, (event) => {
              const isKeyboardFocus = !isClickFocusRef.current;
              if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS$1);
                event.currentTarget.dispatchEvent(entryFocusEvent);
                if (!entryFocusEvent.defaultPrevented) {
                  const items = getItems().filter((item) => item.focusable);
                  const activeItem = items.find((item) => item.active);
                  const currentItem = items.find((item) => item.id === currentTabStopId);
                  const candidateItems = [activeItem, currentItem, ...items].filter(
                    Boolean
                  );
                  const candidateNodes = candidateItems.map((item) => item.ref.current);
                  focusFirst$1(candidateNodes, preventScrollOnEntryFocus);
                }
              }
              isClickFocusRef.current = false;
            }),
            onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
          })
        )
      }
    );
  });
  var ITEM_NAME$1 = "RovingFocusGroupItem";
  var RovingFocusGroupItem = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        __scopeRovingFocusGroup,
        focusable = true,
        active = false,
        tabStopId
      } = _a, itemProps = __objRest(_a, [
        "__scopeRovingFocusGroup",
        "focusable",
        "active",
        "tabStopId"
      ]);
      const autoId = useId();
      const id2 = tabStopId || autoId;
      const context = useRovingFocusContext(ITEM_NAME$1, __scopeRovingFocusGroup);
      const isCurrentTabStop = context.currentTabStopId === id2;
      const getItems = useCollection$1(__scopeRovingFocusGroup);
      const { onFocusableItemAdd, onFocusableItemRemove } = context;
      reactExports.useEffect(() => {
        if (focusable) {
          onFocusableItemAdd();
          return () => onFocusableItemRemove();
        }
      }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Collection$1.ItemSlot,
        {
          scope: __scopeRovingFocusGroup,
          id: id2,
          focusable,
          active,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.span,
            __spreadProps(__spreadValues({
              tabIndex: isCurrentTabStop ? 0 : -1,
              "data-orientation": context.orientation
            }, itemProps), {
              ref: forwardedRef,
              onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id2);
              }),
              onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id2)),
              onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                if (event.key === "Tab" && event.shiftKey) {
                  context.onItemShiftTab();
                  return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                  if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                  event.preventDefault();
                  const items = getItems().filter((item) => item.focusable);
                  let candidateNodes = items.map((item) => item.ref.current);
                  if (focusIntent === "last") candidateNodes.reverse();
                  else if (focusIntent === "prev" || focusIntent === "next") {
                    if (focusIntent === "prev") candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                  }
                  setTimeout(() => focusFirst$1(candidateNodes));
                }
              })
            })
          )
        }
      );
    }
  );
  RovingFocusGroupItem.displayName = ITEM_NAME$1;
  var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
  }
  function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
    if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
  }
  function focusFirst$1(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
      candidate.focus({ preventScroll });
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
  }
  function wrapArray(array, startIndex) {
    return array.map((_, index) => array[(startIndex + index) % array.length]);
  }
  var Root$2 = RovingFocusGroup;
  var Item$1 = RovingFocusGroupItem;
  function useStateMachine(initialState, machine) {
    return reactExports.useReducer((state, event) => {
      const nextState = machine[state][event];
      return nextState != null ? nextState : state;
    }, initialState);
  }
  var Presence = (props) => {
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({ present: presence.isPresent }) : reactExports.Children.only(children);
    const ref = useComposedRefs(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? reactExports.cloneElement(child, { ref }) : null;
  };
  Presence.displayName = "Presence";
  function usePresence(present) {
    const [node, setNode] = reactExports.useState();
    const stylesRef = reactExports.useRef({});
    const prevPresentRef = reactExports.useRef(present);
    const prevAnimationNameRef = reactExports.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    reactExports.useEffect(() => {
      const currentAnimationName = getAnimationName(stylesRef.current);
      prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [state]);
    useLayoutEffect2(() => {
      const styles = stylesRef.current;
      const wasPresent = prevPresentRef.current;
      const hasPresentChanged = wasPresent !== present;
      if (hasPresentChanged) {
        const prevAnimationName = prevAnimationNameRef.current;
        const currentAnimationName = getAnimationName(styles);
        if (present) {
          send("MOUNT");
        } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
          send("UNMOUNT");
        } else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (wasPresent && isAnimating) {
            send("ANIMATION_OUT");
          } else {
            send("UNMOUNT");
          }
        }
        prevPresentRef.current = present;
      }
    }, [present, send]);
    useLayoutEffect2(() => {
      var _a;
      if (node) {
        let timeoutId;
        const ownerWindow = (_a = node.ownerDocument.defaultView) != null ? _a : window;
        const handleAnimationEnd = (event) => {
          const currentAnimationName = getAnimationName(stylesRef.current);
          const isCurrentAnimation = currentAnimationName.includes(event.animationName);
          if (event.target === node && isCurrentAnimation) {
            send("ANIMATION_END");
            if (!prevPresentRef.current) {
              const currentFillMode = node.style.animationFillMode;
              node.style.animationFillMode = "forwards";
              timeoutId = ownerWindow.setTimeout(() => {
                if (node.style.animationFillMode === "forwards") {
                  node.style.animationFillMode = currentFillMode;
                }
              });
            }
          }
        };
        const handleAnimationStart = (event) => {
          if (event.target === node) {
            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
          }
        };
        node.addEventListener("animationstart", handleAnimationStart);
        node.addEventListener("animationcancel", handleAnimationEnd);
        node.addEventListener("animationend", handleAnimationEnd);
        return () => {
          ownerWindow.clearTimeout(timeoutId);
          node.removeEventListener("animationstart", handleAnimationStart);
          node.removeEventListener("animationcancel", handleAnimationEnd);
          node.removeEventListener("animationend", handleAnimationEnd);
        };
      } else {
        send("ANIMATION_END");
      }
    }, [node, send]);
    return {
      isPresent: ["mounted", "unmountSuspended"].includes(state),
      ref: reactExports.useCallback((node2) => {
        if (node2) stylesRef.current = getComputedStyle(node2);
        setNode(node2);
      }, [])
    };
  }
  function getAnimationName(styles) {
    return (styles == null ? void 0 : styles.animationName) || "none";
  }
  function getElementRef(element) {
    var _a, _b;
    let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }
  var TABS_NAME = "Tabs";
  var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
    createRovingFocusGroupScope
  ]);
  var useRovingFocusGroupScope = createRovingFocusGroupScope();
  var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
  var Tabs$1 = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        __scopeTabs,
        value: valueProp,
        onValueChange,
        defaultValue,
        orientation = "horizontal",
        dir,
        activationMode = "automatic"
      } = _a, tabsProps = __objRest(_a, [
        "__scopeTabs",
        "value",
        "onValueChange",
        "defaultValue",
        "orientation",
        "dir",
        "activationMode"
      ]);
      const direction = useDirection(dir);
      const [value, setValue] = useControllableState({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsProvider,
        {
          scope: __scopeTabs,
          baseId: useId(),
          value,
          onValueChange: setValue,
          orientation,
          dir: direction,
          activationMode,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.div,
            __spreadProps(__spreadValues({
              dir: direction,
              "data-orientation": orientation
            }, tabsProps), {
              ref: forwardedRef
            })
          )
        }
      );
    }
  );
  Tabs$1.displayName = TABS_NAME;
  var TAB_LIST_NAME = "TabsList";
  var TabsList$1 = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeTabs, loop = true } = _a, listProps = __objRest(_a, ["__scopeTabs", "loop"]);
      const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Root$2,
        __spreadProps(__spreadValues({
          asChild: true
        }, rovingFocusGroupScope), {
          orientation: context.orientation,
          dir: context.dir,
          loop,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.div,
            __spreadProps(__spreadValues({
              role: "tablist",
              "aria-orientation": context.orientation
            }, listProps), {
              ref: forwardedRef
            })
          )
        })
      );
    }
  );
  TabsList$1.displayName = TAB_LIST_NAME;
  var TRIGGER_NAME$3 = "TabsTrigger";
  var TabsTrigger$1 = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeTabs, value, disabled = false } = _a, triggerProps = __objRest(_a, ["__scopeTabs", "value", "disabled"]);
      const context = useTabsContext(TRIGGER_NAME$3, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      const isSelected = value === context.value;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Item$1,
        __spreadProps(__spreadValues({
          asChild: true
        }, rovingFocusGroupScope), {
          focusable: !disabled,
          active: isSelected,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.button,
            __spreadProps(__spreadValues({
              type: "button",
              role: "tab",
              "aria-selected": isSelected,
              "aria-controls": contentId,
              "data-state": isSelected ? "active" : "inactive",
              "data-disabled": disabled ? "" : void 0,
              disabled,
              id: triggerId
            }, triggerProps), {
              ref: forwardedRef,
              onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                  context.onValueChange(value);
                } else {
                  event.preventDefault();
                }
              }),
              onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
              }),
              onFocus: composeEventHandlers(props.onFocus, () => {
                const isAutomaticActivation = context.activationMode !== "manual";
                if (!isSelected && !disabled && isAutomaticActivation) {
                  context.onValueChange(value);
                }
              })
            })
          )
        })
      );
    }
  );
  TabsTrigger$1.displayName = TRIGGER_NAME$3;
  var CONTENT_NAME$3 = "TabsContent";
  var TabsContent$1 = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeTabs, value, forceMount, children } = _a, contentProps = __objRest(_a, ["__scopeTabs", "value", "forceMount", "children"]);
      const context = useTabsContext(CONTENT_NAME$3, __scopeTabs);
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      const isSelected = value === context.value;
      const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
      reactExports.useEffect(() => {
        const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
        return () => cancelAnimationFrame(rAF);
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        __spreadProps(__spreadValues({
          "data-state": isSelected ? "active" : "inactive",
          "data-orientation": context.orientation,
          role: "tabpanel",
          "aria-labelledby": triggerId,
          hidden: !present,
          id: contentId,
          tabIndex: 0
        }, contentProps), {
          ref: forwardedRef,
          style: __spreadProps(__spreadValues({}, props.style), {
            animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
          }),
          children: present && children
        })
      ) });
    }
  );
  TabsContent$1.displayName = CONTENT_NAME$3;
  function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
  }
  function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
  }
  var Root2$1 = Tabs$1;
  var List = TabsList$1;
  var Trigger$1 = TabsTrigger$1;
  var Content$2 = TabsContent$1;
  const Tabs = Root2$1;
  const TabsList = reactExports.forwardRef((_K, ref) => {
    var _L = _K, { className } = _L, props = __objRest(_L, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      List,
      __spreadValues({
        ref,
        className: cn(
          "tw:inline-flex tw:items-center tw:justify-center tw:rounded-lg tw:bg-muted tw:p-1 tw:text-muted-foreground tw:gap-2",
          className
        )
      }, props)
    );
  });
  TabsList.displayName = List.displayName;
  const TabsTrigger = reactExports.forwardRef((_M, ref) => {
    var _N = _M, { className, children } = _N, props = __objRest(_N, ["className", "children"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger$1, __spreadProps(__spreadValues({ asChild: true, ref }, props), { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "tw:cursor-pointer tw:inline-flex tw:items-center tw:justify-center tw:whitespace-nowrap tw:rounded-md tw:px-3 tw:py-1 tw:text-sm tw:font-medium tw:ring-offset-background tw:transition-all tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-ring tw:focus-visible:ring-offset-2 tw:disabled:pointer-events-none tw:disabled:opacity-50 tw:data-[state=active]:bg-background tw:data-[state=active]:text-foreground tw:data-[state=active]:shadow",
          className
        ),
        children
      }
    ) }));
  });
  TabsTrigger.displayName = Trigger$1.displayName;
  const TabsContent = reactExports.forwardRef((_O, ref) => {
    var _P = _O, { className } = _P, props = __objRest(_P, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content$2,
      __spreadValues({
        ref,
        className: cn(
          "tw:mt-2 tw:ring-offset-background tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-ring tw:focus-visible:ring-offset-2",
          className
        )
      }, props)
    );
  });
  TabsContent.displayName = Content$2.displayName;
  function SovendusCheckoutProducts({
    enabled,
    setCurrentSettings,
    additionalSteps
  }) {
    const onStateChange = (checked) => {
      setCurrentSettings((prevState) => __spreadProps(__spreadValues({}, prevState), {
        checkoutProducts: checked
      }));
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        className: cn("tw:space-y-6 tw:pb-8"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "tw:bg-gradient-to-r tw:from-purple-600 tw:to-indigo-600 tw:text-white tw:p-8 tw:rounded-lg tw:shadow-lg"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:text-3xl tw:font-bold tw:mb-4 tw:text-white"), children: "Checkout Products: Your Gateway to Exponential Growth" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("tw:text-xl tw:mb-6"), children: "Market your products to a network of over 24 million active online shoppers every month and see an increase in new customers and sales." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    onClick: () => void window.open(DEMO_REQUEST_URL, "_blank"),
                    className: cn(
                      "tw:bg-white tw:text-purple-600 tw:hover:bg-purple-100"
                    ),
                    children: [
                      "Schedule Your Personalized Demo",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: cn("tw:ml-2 tw:h-4 tw:w-4") })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { className: cn("tw:mb-4 tw:bg-blue-50 tw:border-blue-200"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: cn("tw:text-blue-700 tw:font-semibold"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important:" }),
            " The first step to activate Checkout Products is to contact Sovendus for a personalized demo and setup. Our team will guide you through the entire process."
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "configure", className: cn("tw:w-full"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: cn("tw:grid tw:w-full tw:grid-cols-3 tw:mb-8"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "configure",
                  className: cn(
                    "tw:text-lg tw:font-semibold tw:py-3 tw:bg-purple-100 tw:data-[state=active]:bg-purple-600 tw:data-[state=active]:text-white"
                  ),
                  children: "Configure"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "benefits",
                  className: cn(
                    "tw:text-lg tw:font-semibold tw:py-3 tw:bg-purple-100 tw:data-[state=active]:bg-purple-600 tw:data-[state=active]:text-white"
                  ),
                  children: "Key Benefits"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "how-it-works",
                  className: cn(
                    "tw:text-lg tw:font-semibold tw:py-3 tw:bg-purple-100 tw:data-[state=active]:bg-purple-600 tw:data-[state=active]:text-white"
                  ),
                  children: "How It Works"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "configure", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-6"), children: [
              additionalSteps && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("tw:border-2 tw:border-purple-500"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  CardTitle,
                  {
                    className: cn(
                      "tw:text-xl tw:font-semibold tw:flex tw:items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn("tw:w-6 tw:h-6 tw:mr-2 tw:text-purple-500")
                        }
                      ),
                      "Additional Setup Steps"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:font-semibold tw:mb-2"), children: additionalSteps.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: cn(
                        "tw:list-decimal tw:list-inside tw:space-y-2"
                      ),
                      children: additionalSteps.subSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: step }, index))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "tw:flex tw:items-center tw:space-x-4 tw:pt-4 tw:ml-2"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Switch,
                      {
                        id: "checkout-products-enabled",
                        checked: enabled,
                        onCheckedChange: onStateChange
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "checkout-products-enabled",
                        className: cn("tw:text-lg tw:font-semibold"),
                        children: "Enable Sovendus Checkout Products"
                      }
                    )
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "benefits", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "tw:grid tw:grid-cols-1 tw:md:grid-cols-3 tw:gap-6 tw:mt-6"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      CardTitle,
                      {
                        className: cn("tw:flex tw:items-center tw:text-blue-600"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: cn("tw:mr-2 tw:h-5 tw:w-5") }),
                          "Massive Reach"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tap into a network of 300+ partner shops and 185 million annual ad impressions." }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      CardTitle,
                      {
                        className: cn("tw:flex tw:items-center tw:text-green-600"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: cn("tw:mr-2 tw:h-5 tw:w-5") }),
                          "High Conversion"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Experience a 1-3% order rate, contributing to 3.6 million orders across our network yearly." }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      CardTitle,
                      {
                        className: cn("tw:flex tw:items-center tw:text-purple-600"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: cn("tw:mr-2 tw:h-5 tw:w-5") }),
                          "Risk-Free Revenue"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Generate additional income with zero risk, no setup costs, and no minimum contract duration." }) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "how-it-works", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "tw:bg-gray-50 tw:p-6 tw:rounded-lg tw:mt-6 tw:space-y-4"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:text-2xl tw:font-semibold tw:mb-4"), children: "How Checkout Products Works" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-4"), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Seamless Integration:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "After your personalized setup with Sovendus, your offers will appear on partner shops' checkout pages, presented as exclusive deals to their customers." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Smart Targeting:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Through data-based targeting, our algorithm presents your offers to the most relevant customers based on their shopping behavior and preferences." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Traffic Boost:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Interested customers click through to your shop, potentially becoming new, high-intent customers and increasing your sales." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Continuous Optimization:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our team works with you to continuously refine and optimize your campaigns for maximum performance." })
                      ] })
                    ] })
                  ] })
                ]
              }
            ) })
          ] })
        ]
      }
    );
  }
  function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
    const onEscapeKeyDown = useCallbackRef$1(onEscapeKeyDownProp);
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          onEscapeKeyDown(event);
        }
      };
      ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
      return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
    }, [onEscapeKeyDown, ownerDocument]);
  }
  var DISMISSABLE_LAYER_NAME = "DismissableLayer";
  var CONTEXT_UPDATE = "dismissableLayer.update";
  var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
  var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
  var originalBodyPointerEvents;
  var DismissableLayerContext = reactExports.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  });
  var DismissableLayer = reactExports.forwardRef(
    (props, forwardedRef) => {
      var _b;
      const _a = props, {
        disableOutsidePointerEvents = false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        onDismiss
      } = _a, layerProps = __objRest(_a, [
        "disableOutsidePointerEvents",
        "onEscapeKeyDown",
        "onPointerDownOutside",
        "onFocusOutside",
        "onInteractOutside",
        "onDismiss"
      ]);
      const context = reactExports.useContext(DismissableLayerContext);
      const [node, setNode] = reactExports.useState(null);
      const ownerDocument = (_b = node == null ? void 0 : node.ownerDocument) != null ? _b : globalThis == null ? void 0 : globalThis.document;
      const [, force] = reactExports.useState({});
      const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
      const layers = Array.from(context.layers);
      const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      const index = node ? layers.indexOf(node) : -1;
      const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
      const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
      const pointerDownOutside = usePointerDownOutside((event) => {
        const target = event.target;
        const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
        onInteractOutside == null ? void 0 : onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
      }, ownerDocument);
      const focusOutside = useFocusOutside((event) => {
        const target = event.target;
        const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
        if (isFocusInBranch) return;
        onFocusOutside == null ? void 0 : onFocusOutside(event);
        onInteractOutside == null ? void 0 : onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
      }, ownerDocument);
      useEscapeKeydown((event) => {
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
          event.preventDefault();
          onDismiss();
        }
      }, ownerDocument);
      reactExports.useEffect(() => {
        if (!node) return;
        if (disableOutsidePointerEvents) {
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
            ownerDocument.body.style.pointerEvents = "none";
          }
          context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return () => {
          if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
            ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
          }
        };
      }, [node, ownerDocument, disableOutsidePointerEvents, context]);
      reactExports.useEffect(() => {
        return () => {
          if (!node) return;
          context.layers.delete(node);
          context.layersWithOutsidePointerEventsDisabled.delete(node);
          dispatchUpdate();
        };
      }, [node, context]);
      reactExports.useEffect(() => {
        const handleUpdate = () => force({});
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        __spreadProps(__spreadValues({}, layerProps), {
          ref: composedRefs,
          style: __spreadValues({
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0
          }, props.style),
          onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
          onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
          onPointerDownCapture: composeEventHandlers(
            props.onPointerDownCapture,
            pointerDownOutside.onPointerDownCapture
          )
        })
      );
    }
  );
  DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
  var BRANCH_NAME = "DismissableLayerBranch";
  var DismissableLayerBranch = reactExports.forwardRef((props, forwardedRef) => {
    const context = reactExports.useContext(DismissableLayerContext);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    reactExports.useEffect(() => {
      const node = ref.current;
      if (node) {
        context.branches.add(node);
        return () => {
          context.branches.delete(node);
        };
      }
    }, [context.branches]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, __spreadProps(__spreadValues({}, props), { ref: composedRefs }));
  });
  DismissableLayerBranch.displayName = BRANCH_NAME;
  function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
    const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
    const isPointerInsideReactTreeRef = reactExports.useRef(false);
    const handleClickRef = reactExports.useRef(() => {
    });
    reactExports.useEffect(() => {
      const handlePointerDown = (event) => {
        if (event.target && !isPointerInsideReactTreeRef.current) {
          let handleAndDispatchPointerDownOutsideEvent2 = function() {
            handleAndDispatchCustomEvent(
              POINTER_DOWN_OUTSIDE,
              handlePointerDownOutside,
              eventDetail,
              { discrete: true }
            );
          };
          const eventDetail = { originalEvent: event };
          if (event.pointerType === "touch") {
            ownerDocument.removeEventListener("click", handleClickRef.current);
            handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
            ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
          } else {
            handleAndDispatchPointerDownOutsideEvent2();
          }
        } else {
          ownerDocument.removeEventListener("click", handleClickRef.current);
        }
        isPointerInsideReactTreeRef.current = false;
      };
      const timerId = window.setTimeout(() => {
        ownerDocument.addEventListener("pointerdown", handlePointerDown);
      }, 0);
      return () => {
        window.clearTimeout(timerId);
        ownerDocument.removeEventListener("pointerdown", handlePointerDown);
        ownerDocument.removeEventListener("click", handleClickRef.current);
      };
    }, [ownerDocument, handlePointerDownOutside]);
    return {
      // ensures we check React component tree (not just DOM tree)
      onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
    };
  }
  function useFocusOutside(onFocusOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
    const handleFocusOutside = useCallbackRef$1(onFocusOutside);
    const isFocusInsideReactTreeRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      const handleFocus = (event) => {
        if (event.target && !isFocusInsideReactTreeRef.current) {
          const eventDetail = { originalEvent: event };
          handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
            discrete: false
          });
        }
      };
      ownerDocument.addEventListener("focusin", handleFocus);
      return () => ownerDocument.removeEventListener("focusin", handleFocus);
    }, [ownerDocument, handleFocusOutside]);
    return {
      onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
      onBlurCapture: () => isFocusInsideReactTreeRef.current = false
    };
  }
  function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
  }
  function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
    if (handler) target.addEventListener(name, handler, { once: true });
    if (discrete) {
      dispatchDiscreteCustomEvent(target, event);
    } else {
      target.dispatchEvent(event);
    }
  }
  var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
  var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
  var EVENT_OPTIONS = { bubbles: false, cancelable: true };
  var FOCUS_SCOPE_NAME = "FocusScope";
  var FocusScope = reactExports.forwardRef((props, forwardedRef) => {
    const _a = props, {
      loop = false,
      trapped = false,
      onMountAutoFocus: onMountAutoFocusProp,
      onUnmountAutoFocus: onUnmountAutoFocusProp
    } = _a, scopeProps = __objRest(_a, [
      "loop",
      "trapped",
      "onMountAutoFocus",
      "onUnmountAutoFocus"
    ]);
    const [container, setContainer] = reactExports.useState(null);
    const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
    const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
    const lastFocusedElementRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
    const focusScope = reactExports.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    reactExports.useEffect(() => {
      if (trapped) {
        let handleFocusIn2 = function(event) {
          if (focusScope.paused || !container) return;
          const target = event.target;
          if (container.contains(target)) {
            lastFocusedElementRef.current = target;
          } else {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleFocusOut2 = function(event) {
          if (focusScope.paused || !container) return;
          const relatedTarget = event.relatedTarget;
          if (relatedTarget === null) return;
          if (!container.contains(relatedTarget)) {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleMutations2 = function(mutations) {
          const focusedElement = document.activeElement;
          if (focusedElement !== document.body) return;
          for (const mutation of mutations) {
            if (mutation.removedNodes.length > 0) focus(container);
          }
        };
        document.addEventListener("focusin", handleFocusIn2);
        document.addEventListener("focusout", handleFocusOut2);
        const mutationObserver = new MutationObserver(handleMutations2);
        if (container) mutationObserver.observe(container, { childList: true, subtree: true });
        return () => {
          document.removeEventListener("focusin", handleFocusIn2);
          document.removeEventListener("focusout", handleFocusOut2);
          mutationObserver.disconnect();
        };
      }
    }, [trapped, container, focusScope.paused]);
    reactExports.useEffect(() => {
      if (container) {
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
            if (document.activeElement === previouslyFocusedElement) {
              focus(container);
            }
          }
        }
        return () => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          setTimeout(() => {
            const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented) {
              focus(previouslyFocusedElement != null ? previouslyFocusedElement : document.body, { select: true });
            }
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            focusScopesStack.remove(focusScope);
          }, 0);
        };
      }
    }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
    const handleKeyDown = reactExports.useCallback(
      (event) => {
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
          const container2 = event.currentTarget;
          const [first, last] = getTabbableEdges(container2);
          const hasTabbableElementsInside = first && last;
          if (!hasTabbableElementsInside) {
            if (focusedElement === container2) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (loop) focus(first, { select: true });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (loop) focus(last, { select: true });
            }
          }
        }
      },
      [loop, trapped, focusScope.paused]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, __spreadProps(__spreadValues({ tabIndex: -1 }, scopeProps), { ref: composedRefs, onKeyDown: handleKeyDown }));
  });
  FocusScope.displayName = FOCUS_SCOPE_NAME;
  function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates) {
      focus(candidate, { select });
      if (document.activeElement !== previouslyFocusedElement) return;
    }
  }
  function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [first, last];
  }
  function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (node) => {
        const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
        if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
        return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }
  function findVisible(elements, container) {
    for (const element of elements) {
      if (!isHidden(element, { upTo: container })) return element;
    }
  }
  function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while (node) {
      if (upTo !== void 0 && node === upTo) return false;
      if (getComputedStyle(node).display === "none") return true;
      node = node.parentElement;
    }
    return false;
  }
  function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
  }
  function focus(element, { select = false } = {}) {
    if (element && element.focus) {
      const previouslyFocusedElement = document.activeElement;
      element.focus({ preventScroll: true });
      if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
        element.select();
    }
  }
  var focusScopesStack = createFocusScopesStack();
  function createFocusScopesStack() {
    let stack = [];
    return {
      add(focusScope) {
        const activeFocusScope = stack[0];
        if (focusScope !== activeFocusScope) {
          activeFocusScope == null ? void 0 : activeFocusScope.pause();
        }
        stack = arrayRemove(stack, focusScope);
        stack.unshift(focusScope);
      },
      remove(focusScope) {
        var _a;
        stack = arrayRemove(stack, focusScope);
        (_a = stack[0]) == null ? void 0 : _a.resume();
      }
    };
  }
  function arrayRemove(array, item) {
    const updatedArray = [...array];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
      updatedArray.splice(index, 1);
    }
    return updatedArray;
  }
  function removeLinks(items) {
    return items.filter((item) => item.tagName !== "A");
  }
  var PORTAL_NAME$1 = "Portal";
  var Portal$1 = reactExports.forwardRef((props, forwardedRef) => {
    var _b;
    const _a = props, { container: containerProp } = _a, portalProps = __objRest(_a, ["container"]);
    const [mounted, setMounted] = reactExports.useState(false);
    useLayoutEffect2(() => setMounted(true), []);
    const container = containerProp || mounted && ((_b = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _b.body);
    return container ? ReactDOM__default.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, __spreadProps(__spreadValues({}, portalProps), { ref: forwardedRef })), container) : null;
  });
  Portal$1.displayName = PORTAL_NAME$1;
  var count = 0;
  function useFocusGuards() {
    reactExports.useEffect(() => {
      var _a, _b;
      const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
      document.body.insertAdjacentElement("afterbegin", (_a = edgeGuards[0]) != null ? _a : createFocusGuard());
      document.body.insertAdjacentElement("beforeend", (_b = edgeGuards[1]) != null ? _b : createFocusGuard());
      count++;
      return () => {
        if (count === 1) {
          document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
        }
        count--;
      };
    }, []);
  }
  function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __spreadArray(to, from, pack) {
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  var zeroRightClassName = "right-scroll-bar-position";
  var fullWidthClassName = "width-before-scroll-bar";
  var noScrollbarsClassName = "with-scroll-bars-hidden";
  var removedBarSizeVariable = "--removed-body-scroll-bar-size";
  function assignRef(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
    return ref;
  }
  function useCallbackRef(initialValue, callback) {
    var ref = reactExports.useState(function() {
      return {
        // value
        value: initialValue,
        // last callback
        callback,
        // "memoized" public interface
        facade: {
          get current() {
            return ref.value;
          },
          set current(value) {
            var last = ref.value;
            if (last !== value) {
              ref.value = value;
              ref.callback(value, last);
            }
          }
        }
      };
    })[0];
    ref.callback = callback;
    return ref.facade;
  }
  var useIsomorphicLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
  var currentValues = /* @__PURE__ */ new WeakMap();
  function useMergeRefs(refs, defaultValue) {
    var callbackRef = useCallbackRef(null, function(newValue) {
      return refs.forEach(function(ref) {
        return assignRef(ref, newValue);
      });
    });
    useIsomorphicLayoutEffect(function() {
      var oldValue = currentValues.get(callbackRef);
      if (oldValue) {
        var prevRefs_1 = new Set(oldValue);
        var nextRefs_1 = new Set(refs);
        var current_1 = callbackRef.current;
        prevRefs_1.forEach(function(ref) {
          if (!nextRefs_1.has(ref)) {
            assignRef(ref, null);
          }
        });
        nextRefs_1.forEach(function(ref) {
          if (!prevRefs_1.has(ref)) {
            assignRef(ref, current_1);
          }
        });
      }
      currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
  }
  function ItoI(a) {
    return a;
  }
  function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
      middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
      read: function() {
        if (assigned) {
          throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        }
        if (buffer.length) {
          return buffer[buffer.length - 1];
        }
        return defaults;
      },
      useMedium: function(data) {
        var item = middleware(data, assigned);
        buffer.push(item);
        return function() {
          buffer = buffer.filter(function(x) {
            return x !== item;
          });
        };
      },
      assignSyncMedium: function(cb) {
        assigned = true;
        while (buffer.length) {
          var cbs = buffer;
          buffer = [];
          cbs.forEach(cb);
        }
        buffer = {
          push: function(x) {
            return cb(x);
          },
          filter: function() {
            return buffer;
          }
        };
      },
      assignMedium: function(cb) {
        assigned = true;
        var pendingQueue = [];
        if (buffer.length) {
          var cbs = buffer;
          buffer = [];
          cbs.forEach(cb);
          pendingQueue = buffer;
        }
        var executeQueue = function() {
          var cbs2 = pendingQueue;
          pendingQueue = [];
          cbs2.forEach(cb);
        };
        var cycle = function() {
          return Promise.resolve().then(executeQueue);
        };
        cycle();
        buffer = {
          push: function(x) {
            pendingQueue.push(x);
            cycle();
          },
          filter: function(filter2) {
            pendingQueue = pendingQueue.filter(filter2);
            return buffer;
          }
        };
      }
    };
    return medium;
  }
  function createSidecarMedium(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options2);
    return medium;
  }
  var SideCar$1 = function(_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
      throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    }
    var Target2 = sideCar.read();
    if (!Target2) {
      throw new Error("Sidecar medium not found");
    }
    return reactExports.createElement(Target2, __assign({}, rest));
  };
  SideCar$1.isSideCarExport = true;
  function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar$1;
  }
  var effectCar = createSidecarMedium();
  var nothing = function() {
    return;
  };
  var RemoveScroll = reactExports.forwardRef(function(props, parentRef) {
    var ref = reactExports.useRef(null);
    var _a = reactExports.useState({
      onScrollCapture: nothing,
      onWheelCapture: nothing,
      onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var SideCar2 = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return reactExports.createElement(
      reactExports.Fragment,
      null,
      enabled && reactExports.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
      forwardProps ? reactExports.cloneElement(reactExports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : reactExports.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
    );
  });
  RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
  };
  RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName
  };
  var getNonce = function() {
    if (typeof __webpack_nonce__ !== "undefined") {
      return __webpack_nonce__;
    }
    return void 0;
  };
  function makeStyleTag() {
    if (!document)
      return null;
    var tag = document.createElement("style");
    tag.type = "text/css";
    var nonce = getNonce();
    if (nonce) {
      tag.setAttribute("nonce", nonce);
    }
    return tag;
  }
  function injectStyles(tag, css) {
    if (tag.styleSheet) {
      tag.styleSheet.cssText = css;
    } else {
      tag.appendChild(document.createTextNode(css));
    }
  }
  function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(tag);
  }
  var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
      add: function(style) {
        if (counter == 0) {
          if (stylesheet = makeStyleTag()) {
            injectStyles(stylesheet, style);
            insertStyleTag(stylesheet);
          }
        }
        counter++;
      },
      remove: function() {
        counter--;
        if (!counter && stylesheet) {
          stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
          stylesheet = null;
        }
      }
    };
  };
  var styleHookSingleton = function() {
    var sheet = stylesheetSingleton();
    return function(styles, isDynamic) {
      reactExports.useEffect(function() {
        sheet.add(styles);
        return function() {
          sheet.remove();
        };
      }, [styles && isDynamic]);
    };
  };
  var styleSingleton = function() {
    var useStyle2 = styleHookSingleton();
    var Sheet = function(_a) {
      var styles = _a.styles, dynamic = _a.dynamic;
      useStyle2(styles, dynamic);
      return null;
    };
    return Sheet;
  };
  var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  };
  var parse = function(x) {
    return parseInt(x || "", 10) || 0;
  };
  var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
    var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
    var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
    return [parse(left), parse(top), parse(right)];
  };
  var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
      gapMode = "margin";
    }
    if (typeof window === "undefined") {
      return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
      left: offsets[0],
      top: offsets[1],
      right: offsets[2],
      gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
  };
  var Style = styleSingleton();
  var lockAttribute = "data-scroll-locked";
  var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
      gapMode = "margin";
    }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
      allowRelative && "position: relative ".concat(important, ";"),
      gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
      gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
  };
  var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
    return isFinite(counter) ? counter : 0;
  };
  var useLockAttribute = function() {
    reactExports.useEffect(function() {
      document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
      return function() {
        var newCounter = getCurrentUseCounter() - 1;
        if (newCounter <= 0) {
          document.body.removeAttribute(lockAttribute);
        } else {
          document.body.setAttribute(lockAttribute, newCounter.toString());
        }
      };
    }, []);
  };
  var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
    useLockAttribute();
    var gap = reactExports.useMemo(function() {
      return getGapWidth(gapMode);
    }, [gapMode]);
    return reactExports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
  };
  var passiveSupported = false;
  if (typeof window !== "undefined") {
    try {
      var options = Object.defineProperty({}, "passive", {
        get: function() {
          passiveSupported = true;
          return true;
        }
      });
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (err) {
      passiveSupported = false;
    }
  }
  var nonPassive = passiveSupported ? { passive: false } : false;
  var alwaysContainsScroll = function(node) {
    return node.tagName === "TEXTAREA";
  };
  var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
      return false;
    }
    var styles = window.getComputedStyle(node);
    return (
      // not-not-scrollable
      styles[overflow] !== "hidden" && // contains scroll inside self
      !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
    );
  };
  var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, "overflowY");
  };
  var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, "overflowX");
  };
  var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
      if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
        current = current.host;
      }
      var isScrollable = elementCouldBeScrolled(axis, current);
      if (isScrollable) {
        var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
        if (scrollHeight > clientHeight) {
          return true;
        }
      }
      current = current.parentNode;
    } while (current && current !== ownerDocument.body);
    return false;
  };
  var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
      scrollTop,
      scrollHeight,
      clientHeight
    ];
  };
  var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
      scrollLeft,
      scrollWidth,
      clientWidth
    ];
  };
  var elementCouldBeScrolled = function(axis, node) {
    return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
  };
  var getScrollVariables = function(axis, node) {
    return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
  };
  var getDirectionFactor = function(axis, direction) {
    return axis === "h" && direction === "rtl" ? -1 : 1;
  };
  var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
      var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
      var elementScroll = scroll_1 - capacity - directionFactor * position;
      if (position || elementScroll) {
        if (elementCouldBeScrolled(axis, target)) {
          availableScroll += elementScroll;
          availableScrollTop += position;
        }
      }
      if (target instanceof ShadowRoot) {
        target = target.host;
      } else {
        target = target.parentNode;
      }
    } while (
      // portaled content
      !targetInLock && target !== document.body || // self content
      targetInLock && (endTarget.contains(target) || endTarget === target)
    );
    if (isDeltaPositive && (Math.abs(availableScroll) < 1 || false)) {
      shouldCancelScroll = true;
    } else if (!isDeltaPositive && (Math.abs(availableScrollTop) < 1 || false)) {
      shouldCancelScroll = true;
    }
    return shouldCancelScroll;
  };
  var getTouchXY = function(event) {
    return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
  };
  var getDeltaXY = function(event) {
    return [event.deltaX, event.deltaY];
  };
  var extractRef = function(ref) {
    return ref && "current" in ref ? ref.current : ref;
  };
  var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
  };
  var generateStyle = function(id2) {
    return "\n  .block-interactivity-".concat(id2, " {pointer-events: none;}\n  .allow-interactivity-").concat(id2, " {pointer-events: all;}\n");
  };
  var idCounter = 0;
  var lockStack = [];
  function RemoveScrollSideCar(props) {
    var shouldPreventQueue = reactExports.useRef([]);
    var touchStartRef = reactExports.useRef([0, 0]);
    var activeAxis = reactExports.useRef();
    var id2 = reactExports.useState(idCounter++)[0];
    var Style2 = reactExports.useState(styleSingleton)[0];
    var lastProps = reactExports.useRef(props);
    reactExports.useEffect(function() {
      lastProps.current = props;
    }, [props]);
    reactExports.useEffect(function() {
      if (props.inert) {
        document.body.classList.add("block-interactivity-".concat(id2));
        var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef)).filter(Boolean);
        allow_1.forEach(function(el) {
          return el.classList.add("allow-interactivity-".concat(id2));
        });
        return function() {
          document.body.classList.remove("block-interactivity-".concat(id2));
          allow_1.forEach(function(el) {
            return el.classList.remove("allow-interactivity-".concat(id2));
          });
        };
      }
      return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = reactExports.useCallback(function(event, parent) {
      if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
        return !lastProps.current.allowPinchZoom;
      }
      var touch = getTouchXY(event);
      var touchStart = touchStartRef.current;
      var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
      var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
      var currentAxis;
      var target = event.target;
      var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
      if ("touches" in event && moveDirection === "h" && target.type === "range") {
        return false;
      }
      var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
      if (!canBeScrolledInMainDirection) {
        return true;
      }
      if (canBeScrolledInMainDirection) {
        currentAxis = moveDirection;
      } else {
        currentAxis = moveDirection === "v" ? "h" : "v";
        canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
      }
      if (!canBeScrolledInMainDirection) {
        return false;
      }
      if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
        activeAxis.current = currentAxis;
      }
      if (!currentAxis) {
        return true;
      }
      var cancelingAxis = activeAxis.current || currentAxis;
      return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY);
    }, []);
    var shouldPrevent = reactExports.useCallback(function(_event) {
      var event = _event;
      if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
        return;
      }
      var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
      var sourceEvent = shouldPreventQueue.current.filter(function(e) {
        return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
      })[0];
      if (sourceEvent && sourceEvent.should) {
        if (event.cancelable) {
          event.preventDefault();
        }
        return;
      }
      if (!sourceEvent) {
        var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
          return node.contains(event.target);
        });
        var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
        if (shouldStop) {
          if (event.cancelable) {
            event.preventDefault();
          }
        }
      }
    }, []);
    var shouldCancel = reactExports.useCallback(function(name, delta, target, should) {
      var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
      shouldPreventQueue.current.push(event);
      setTimeout(function() {
        shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
          return e !== event;
        });
      }, 1);
    }, []);
    var scrollTouchStart = reactExports.useCallback(function(event) {
      touchStartRef.current = getTouchXY(event);
      activeAxis.current = void 0;
    }, []);
    var scrollWheel = reactExports.useCallback(function(event) {
      shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = reactExports.useCallback(function(event) {
      shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    reactExports.useEffect(function() {
      lockStack.push(Style2);
      props.setCallbacks({
        onScrollCapture: scrollWheel,
        onWheelCapture: scrollWheel,
        onTouchMoveCapture: scrollTouchMove
      });
      document.addEventListener("wheel", shouldPrevent, nonPassive);
      document.addEventListener("touchmove", shouldPrevent, nonPassive);
      document.addEventListener("touchstart", scrollTouchStart, nonPassive);
      return function() {
        lockStack = lockStack.filter(function(inst) {
          return inst !== Style2;
        });
        document.removeEventListener("wheel", shouldPrevent, nonPassive);
        document.removeEventListener("touchmove", shouldPrevent, nonPassive);
        document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
      };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return reactExports.createElement(
      reactExports.Fragment,
      null,
      inert ? reactExports.createElement(Style2, { styles: generateStyle(id2) }) : null,
      removeScrollBar ? reactExports.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
    );
  }
  function getOutermostShadowParent(node) {
    var shadowParent = null;
    while (node !== null) {
      if (node instanceof ShadowRoot) {
        shadowParent = node.host;
        node = node.host;
      }
      node = node.parentNode;
    }
    return shadowParent;
  }
  const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
  var ReactRemoveScroll = reactExports.forwardRef(function(props, ref) {
    return reactExports.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
  });
  ReactRemoveScroll.classNames = RemoveScroll.classNames;
  var getDefaultParent = function(originalTarget) {
    if (typeof document === "undefined") {
      return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
  };
  var counterMap = /* @__PURE__ */ new WeakMap();
  var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
  var markerMap = {};
  var lockCount = 0;
  var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
  };
  var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
      if (parent.contains(target)) {
        return target;
      }
      var correctedTarget = unwrapHost(target);
      if (correctedTarget && parent.contains(correctedTarget)) {
        return correctedTarget;
      }
      console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
      return null;
    }).filter(function(x) {
      return Boolean(x);
    });
  };
  var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
      markerMap[markerName] = /* @__PURE__ */ new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = /* @__PURE__ */ new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
      if (!el || elementsToKeep.has(el)) {
        return;
      }
      elementsToKeep.add(el);
      keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
      if (!parent || elementsToStop.has(parent)) {
        return;
      }
      Array.prototype.forEach.call(parent.children, function(node) {
        if (elementsToKeep.has(node)) {
          deep(node);
        } else {
          try {
            var attr = node.getAttribute(controlAttribute);
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute(controlAttribute, "true");
            }
          } catch (e) {
            console.error("aria-hidden: cannot operate on ", node, e);
          }
        }
      });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
      hiddenNodes.forEach(function(node) {
        var counterValue = counterMap.get(node) - 1;
        var markerValue = markerCounter.get(node) - 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        if (!counterValue) {
          if (!uncontrolledNodes.has(node)) {
            node.removeAttribute(controlAttribute);
          }
          uncontrolledNodes.delete(node);
        }
        if (!markerValue) {
          node.removeAttribute(markerName);
        }
      });
      lockCount--;
      if (!lockCount) {
        counterMap = /* @__PURE__ */ new WeakMap();
        counterMap = /* @__PURE__ */ new WeakMap();
        uncontrolledNodes = /* @__PURE__ */ new WeakMap();
        markerMap = {};
      }
    };
  };
  var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
      markerName = "data-aria-hidden";
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = getDefaultParent(originalTarget);
    if (!activeParentNode) {
      return function() {
        return null;
      };
    }
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
    return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
  };
  var DIALOG_NAME = "Dialog";
  var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
  var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
  var Dialog$1 = (props) => {
    const {
      __scopeDialog,
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      modal = true
    } = props;
    const triggerRef = reactExports.useRef(null);
    const contentRef = reactExports.useRef(null);
    const [open = false, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogProvider,
      {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: useId(),
        titleId: useId(),
        descriptionId: useId(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        modal,
        children
      }
    );
  };
  Dialog$1.displayName = DIALOG_NAME;
  var TRIGGER_NAME$2 = "DialogTrigger";
  var DialogTrigger = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeDialog } = _a, triggerProps = __objRest(_a, ["__scopeDialog"]);
      const context = useDialogContext(TRIGGER_NAME$2, __scopeDialog);
      const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        __spreadProps(__spreadValues({
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": context.open,
          "aria-controls": context.contentId,
          "data-state": getState$2(context.open)
        }, triggerProps), {
          ref: composedTriggerRef,
          onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
        })
      );
    }
  );
  DialogTrigger.displayName = TRIGGER_NAME$2;
  var PORTAL_NAME = "DialogPortal";
  var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
    forceMount: void 0
  });
  var DialogPortal$1 = (props) => {
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeDialog, forceMount, children: reactExports.Children.map(children, (child) => /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children: child }) })) });
  };
  DialogPortal$1.displayName = PORTAL_NAME;
  var OVERLAY_NAME = "DialogOverlay";
  var DialogOverlay$1 = reactExports.forwardRef(
    (props, forwardedRef) => {
      const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
      const _a = props, { forceMount = portalContext.forceMount } = _a, overlayProps = __objRest(_a, ["forceMount"]);
      const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
      return context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlayImpl, __spreadProps(__spreadValues({}, overlayProps), { ref: forwardedRef })) }) : null;
    }
  );
  DialogOverlay$1.displayName = OVERLAY_NAME;
  var DialogOverlayImpl = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeDialog } = _a, overlayProps = __objRest(_a, ["__scopeDialog"]);
      const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
      return (
        // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
        // ie. when `Overlay` and `Content` are siblings
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          __spreadProps(__spreadValues({
            "data-state": getState$2(context.open)
          }, overlayProps), {
            ref: forwardedRef,
            style: __spreadValues({ pointerEvents: "auto" }, overlayProps.style)
          })
        ) })
      );
    }
  );
  var CONTENT_NAME$2 = "DialogContent";
  var DialogContent$1 = reactExports.forwardRef(
    (props, forwardedRef) => {
      const portalContext = usePortalContext(CONTENT_NAME$2, props.__scopeDialog);
      const _a = props, { forceMount = portalContext.forceMount } = _a, contentProps = __objRest(_a, ["forceMount"]);
      const context = useDialogContext(CONTENT_NAME$2, props.__scopeDialog);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentModal, __spreadProps(__spreadValues({}, contentProps), { ref: forwardedRef })) : /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentNonModal, __spreadProps(__spreadValues({}, contentProps), { ref: forwardedRef })) });
    }
  );
  DialogContent$1.displayName = CONTENT_NAME$2;
  var DialogContentModal = reactExports.forwardRef(
    (props, forwardedRef) => {
      const context = useDialogContext(CONTENT_NAME$2, props.__scopeDialog);
      const contentRef = reactExports.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
      reactExports.useEffect(() => {
        const content = contentRef.current;
        if (content) return hideOthers(content);
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        DialogContentImpl,
        __spreadProps(__spreadValues({}, props), {
          ref: composedRefs,
          trapFocus: context.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
            var _a;
            event.preventDefault();
            (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
          }),
          onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
          }),
          onFocusOutside: composeEventHandlers(
            props.onFocusOutside,
            (event) => event.preventDefault()
          )
        })
      );
    }
  );
  var DialogContentNonModal = reactExports.forwardRef(
    (props, forwardedRef) => {
      const context = useDialogContext(CONTENT_NAME$2, props.__scopeDialog);
      const hasInteractedOutsideRef = reactExports.useRef(false);
      const hasPointerDownOutsideRef = reactExports.useRef(false);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        DialogContentImpl,
        __spreadProps(__spreadValues({}, props), {
          ref: forwardedRef,
          trapFocus: false,
          disableOutsidePointerEvents: false,
          onCloseAutoFocus: (event) => {
            var _a, _b;
            (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented) {
              if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
              event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
          },
          onInteractOutside: (event) => {
            var _a, _b;
            (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented) {
              hasInteractedOutsideRef.current = true;
              if (event.detail.originalEvent.type === "pointerdown") {
                hasPointerDownOutsideRef.current = true;
              }
            }
            const target = event.target;
            const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
              event.preventDefault();
            }
          }
        })
      );
    }
  );
  var DialogContentImpl = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus } = _a, contentProps = __objRest(_a, ["__scopeDialog", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus"]);
      const context = useDialogContext(CONTENT_NAME$2, __scopeDialog);
      const contentRef = reactExports.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, contentRef);
      useFocusGuards();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FocusScope,
          {
            asChild: true,
            loop: true,
            trapped: trapFocus,
            onMountAutoFocus: onOpenAutoFocus,
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DismissableLayer,
              __spreadProps(__spreadValues({
                role: "dialog",
                id: context.contentId,
                "aria-describedby": context.descriptionId,
                "aria-labelledby": context.titleId,
                "data-state": getState$2(context.open)
              }, contentProps), {
                ref: composedRefs,
                onDismiss: () => context.onOpenChange(false)
              })
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TitleWarning, { titleId: context.titleId }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
        ] })
      ] });
    }
  );
  var TITLE_NAME = "DialogTitle";
  var DialogTitle$1 = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeDialog } = _a, titleProps = __objRest(_a, ["__scopeDialog"]);
      const context = useDialogContext(TITLE_NAME, __scopeDialog);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.h2, __spreadProps(__spreadValues({ id: context.titleId }, titleProps), { ref: forwardedRef }));
    }
  );
  DialogTitle$1.displayName = TITLE_NAME;
  var DESCRIPTION_NAME = "DialogDescription";
  var DialogDescription$1 = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeDialog } = _a, descriptionProps = __objRest(_a, ["__scopeDialog"]);
      const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.p, __spreadProps(__spreadValues({ id: context.descriptionId }, descriptionProps), { ref: forwardedRef }));
    }
  );
  DialogDescription$1.displayName = DESCRIPTION_NAME;
  var CLOSE_NAME = "DialogClose";
  var DialogClose = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeDialog } = _a, closeProps = __objRest(_a, ["__scopeDialog"]);
      const context = useDialogContext(CLOSE_NAME, __scopeDialog);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        __spreadProps(__spreadValues({
          type: "button"
        }, closeProps), {
          ref: forwardedRef,
          onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
        })
      );
    }
  );
  DialogClose.displayName = CLOSE_NAME;
  function getState$2(open) {
    return open ? "open" : "closed";
  }
  var TITLE_WARNING_NAME = "DialogTitleWarning";
  var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME$2,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
  });
  var TitleWarning = ({ titleId }) => {
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    reactExports.useEffect(() => {
      if (titleId) {
        const hasTitle = document.getElementById(titleId);
        if (!hasTitle) console.error(MESSAGE);
      }
    }, [MESSAGE, titleId]);
    return null;
  };
  var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
  var DescriptionWarning = ({ contentRef, descriptionId }) => {
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    reactExports.useEffect(() => {
      var _a;
      const describedById = (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby");
      if (descriptionId && describedById) {
        const hasDescription = document.getElementById(descriptionId);
        if (!hasDescription) console.warn(MESSAGE);
      }
    }, [MESSAGE, contentRef, descriptionId]);
    return null;
  };
  var Root$1 = Dialog$1;
  var Portal = DialogPortal$1;
  var Overlay = DialogOverlay$1;
  var Content$1 = DialogContent$1;
  var Title = DialogTitle$1;
  var Description = DialogDescription$1;
  var Close = DialogClose;
  const Dialog = Root$1;
  const DialogPortal = Portal;
  const DialogOverlay = React.forwardRef((_Q, ref) => {
    var _R = _Q, { className } = _R, props = __objRest(_R, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Overlay,
      __spreadValues({
        ref,
        className: cn(
          "tw:fixed tw:inset-0 tw:z-48 tw:bg-black/80  tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
          className
        )
      }, props)
    );
  });
  DialogOverlay.displayName = Overlay.displayName;
  const DialogContent = React.forwardRef((_S, ref) => {
    var _T = _S, { className, children, withClose } = _T, props = __objRest(_T, ["className", "children", "withClose"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Content$1,
        __spreadProps(__spreadValues({
          ref,
          className: cn(
            "tw:fixed tw:left-[50%] tw:top-[50%] tw:z-49 tw:grid tw:w-full tw:max-w-lg tw:translate-x-[-50%] tw:translate-y-[-50%] tw:gap-4 tw:border tw:bg-background tw:p-6 tw:shadow-lg tw:duration-200 tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0 tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95 tw:data-[state=closed]:slide-out-to-left-1/2 tw:data-[state=closed]:slide-out-to-top-[48%] tw:data-[state=open]:slide-in-from-left-1/2 tw:data-[state=open]:slide-in-from-top-[48%] tw:sm:rounded-lg",
            className
          )
        }, props), {
          children: [
            children,
            withClose ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "tw:absolute tw:right-4 tw:top-4 tw:rounded-sm tw:opacity-70 tw:ring-offset-tw:background tw:transition-opacity tw:hover:opacity-100 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2 tw:disabled:pointer-events-none tw:data-[state=open]:bg-accent tw:data-[state=open]:text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: cn("tw:h-4 tw:w-4") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:sr-only", children: "Close" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
          ]
        })
      )
    ] });
  });
  DialogContent.displayName = Content$1.displayName;
  const DialogHeader = (_U) => {
    var _V = _U, {
      className
    } = _V, props = __objRest(_V, [
      "className"
    ]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadValues({
        className: cn(
          "tw:flex tw:flex-col tw:space-y-1.5 tw:text-center tw:sm:text-left",
          className
        )
      }, props)
    );
  };
  DialogHeader.displayName = "DialogHeader";
  const DialogTitle = React.forwardRef((_W, ref) => {
    var _X = _W, { className } = _X, props = __objRest(_X, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Title,
      __spreadValues({
        ref,
        className: cn(
          "tw:text-lg tw:font-semibold tw:leading-none tw:tracking-tight",
          className
        )
      }, props)
    );
  });
  DialogTitle.displayName = Title.displayName;
  const DialogDescription = React.forwardRef((_Y, ref) => {
    var _Z = _Y, { className } = _Z, props = __objRest(_Z, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Description,
      __spreadValues({
        ref,
        className: cn("tw:text-sm tw:text-muted-tw:foreground", className)
      }, props)
    );
  });
  DialogDescription.displayName = Description.displayName;
  function ConfigurationDialog({
    open,
    onOpenChange,
    title,
    children,
    zoomedVersion
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: cn("tw:max-w-[1200px] tw:max-h-[90vh] tw:overflow-y-auto", {
          zoomed: zoomedVersion
        }),
        withClose: false,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "tw:sticky tw:top-0 z-50 tw:flex tw:justify-end tw:h-[55px]"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:flex tw:items-center tw:gap-2"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "unstyled",
                  size: "unstyled",
                  onClick: () => onOpenChange(false),
                  className: cn(
                    "tw:p-2 tw:rounded-full tw:bg-gray-100 tw:hover:bg-gray-200 tw:transition-colors"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { style: { width: "unset", height: "unset" } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("tw:sr-only"), children: "Close" })
                  ]
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: cn("tw:pb-6 tw:mt-[-55px]"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: cn("tw:text-2xl"), children: title }) }),
          children
        ]
      }
    ) });
  }
  const version = "4.2.13";
  function Footer() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: cn("tw:w-full"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: cn("tw:border-b p-4"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:text-sm tw:text-gray-700 tw:text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "sovendus-integration-settings-ui" }),
      " - Version: ",
      version,
      " -",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/Sovendus-GmbH/sovendus-integration-settings-ui#readme",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "tw:text-blue-500 tw:hover:underline",
          children: "View on GitHub"
        }
      )
    ] }) }) });
  }
  function Notification({
    message,
    type
  }) {
    const [isVisible, setIsVisible] = reactExports.useState(true);
    reactExports.useEffect(() => {
      if (type !== "loading") {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 5e3);
        return () => {
          clearTimeout(timer);
          setIsVisible(false);
        };
      }
      setIsVisible(true);
      return;
    }, [type]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        className: cn("tw:fixed tw:bottom-4 tw:right-4 tw:z-50"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              `tw:rounded-lg tw:shadow-lg tw:p-4 tw:flex tw:items-center tw:space-x-3 ${type === "success" ? "tw:bg-green-500" : type === "error" ? "tw:bg-red-500" : "tw:bg-blue-500"} tw:text-white`
            ),
            children: [
              type === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: cn("tw:h-6 tw:w-6") }),
              type === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: cn("tw:h-6 tw:w-6") }),
              type === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: cn("tw:animate-spin tw:h-6 tw:w-6"),
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        className: cn("tw:opacity-25"),
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        fill: "none"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        className: cn("tw:opacity-75"),
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: message })
            ]
          }
        )
      }
    ) });
  }
  var COLLAPSIBLE_NAME = "Collapsible";
  var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
  var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
  var Collapsible = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        __scopeCollapsible,
        open: openProp,
        defaultOpen,
        disabled,
        onOpenChange
      } = _a, collapsibleProps = __objRest(_a, [
        "__scopeCollapsible",
        "open",
        "defaultOpen",
        "disabled",
        "onOpenChange"
      ]);
      const [open = false, setOpen] = useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        CollapsibleProvider,
        {
          scope: __scopeCollapsible,
          disabled,
          contentId: useId(),
          open,
          onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.div,
            __spreadProps(__spreadValues({
              "data-state": getState$1(open),
              "data-disabled": disabled ? "" : void 0
            }, collapsibleProps), {
              ref: forwardedRef
            })
          )
        }
      );
    }
  );
  Collapsible.displayName = COLLAPSIBLE_NAME;
  var TRIGGER_NAME$1 = "CollapsibleTrigger";
  var CollapsibleTrigger = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeCollapsible } = _a, triggerProps = __objRest(_a, ["__scopeCollapsible"]);
      const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        __spreadProps(__spreadValues({
          type: "button",
          "aria-controls": context.contentId,
          "aria-expanded": context.open || false,
          "data-state": getState$1(context.open),
          "data-disabled": context.disabled ? "" : void 0,
          disabled: context.disabled
        }, triggerProps), {
          ref: forwardedRef,
          onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
        })
      );
    }
  );
  CollapsibleTrigger.displayName = TRIGGER_NAME$1;
  var CONTENT_NAME$1 = "CollapsibleContent";
  var CollapsibleContent = reactExports.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { forceMount } = _a, contentProps = __objRest(_a, ["forceMount"]);
      const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, __spreadProps(__spreadValues({}, contentProps), { ref: forwardedRef, present })) });
    }
  );
  CollapsibleContent.displayName = CONTENT_NAME$1;
  var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
    const _a = props, { __scopeCollapsible, present, children } = _a, contentProps = __objRest(_a, ["__scopeCollapsible", "present", "children"]);
    const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
    const [isPresent, setIsPresent] = reactExports.useState(present);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const heightRef = reactExports.useRef(0);
    const height = heightRef.current;
    const widthRef = reactExports.useRef(0);
    const width = widthRef.current;
    const isOpen = context.open || isPresent;
    const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
    const originalStylesRef = reactExports.useRef(void 0);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    useLayoutEffect2(() => {
      const node = ref.current;
      if (node) {
        originalStylesRef.current = originalStylesRef.current || {
          transitionDuration: node.style.transitionDuration,
          animationName: node.style.animationName
        };
        node.style.transitionDuration = "0s";
        node.style.animationName = "none";
        const rect = node.getBoundingClientRect();
        heightRef.current = rect.height;
        widthRef.current = rect.width;
        if (!isMountAnimationPreventedRef.current) {
          node.style.transitionDuration = originalStylesRef.current.transitionDuration;
          node.style.animationName = originalStylesRef.current.animationName;
        }
        setIsPresent(present);
      }
    }, [context.open, present]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      __spreadProps(__spreadValues({
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        id: context.contentId,
        hidden: !isOpen
      }, contentProps), {
        ref: composedRefs,
        style: __spreadValues({
          [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
          [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0
        }, props.style),
        children: isOpen && children
      })
    );
  });
  function getState$1(open) {
    return open ? "open" : "closed";
  }
  var Root = Collapsible;
  var Trigger = CollapsibleTrigger;
  var Content = CollapsibleContent;
  var ACCORDION_NAME = "Accordion";
  var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
  var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
  var [createAccordionContext, createAccordionScope] = createContextScope(ACCORDION_NAME, [
    createCollectionScope,
    createCollapsibleScope
  ]);
  var useCollapsibleScope = createCollapsibleScope();
  var Accordion$1 = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { type } = _a, accordionProps = __objRest(_a, ["type"]);
      const singleProps = accordionProps;
      const multipleProps = accordionProps;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, __spreadProps(__spreadValues({}, multipleProps), { ref: forwardedRef })) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, __spreadProps(__spreadValues({}, singleProps), { ref: forwardedRef })) });
    }
  );
  Accordion$1.displayName = ACCORDION_NAME;
  var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
  var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
    ACCORDION_NAME,
    { collapsible: false }
  );
  var AccordionImplSingle = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        value: valueProp,
        defaultValue,
        onValueChange = () => {
        },
        collapsible = false
      } = _a, accordionSingleProps = __objRest(_a, [
        "value",
        "defaultValue",
        "onValueChange",
        "collapsible"
      ]);
      const [value, setValue] = useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        AccordionValueProvider,
        {
          scope: props.__scopeAccordion,
          value: value ? [value] : [],
          onItemOpen: setValue,
          onItemClose: React.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, __spreadProps(__spreadValues({}, accordionSingleProps), { ref: forwardedRef })) })
        }
      );
    }
  );
  var AccordionImplMultiple = React.forwardRef((props, forwardedRef) => {
    const _a = props, {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      }
    } = _a, accordionMultipleProps = __objRest(_a, [
      "value",
      "defaultValue",
      "onValueChange"
    ]);
    const [value = [], setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChange
    });
    const handleItemOpen = React.useCallback(
      (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
      [setValue]
    );
    const handleItemClose = React.useCallback(
      (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
      [setValue]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value,
        onItemOpen: handleItemOpen,
        onItemClose: handleItemClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, __spreadProps(__spreadValues({}, accordionMultipleProps), { ref: forwardedRef })) })
      }
    );
  });
  var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
  var AccordionImpl = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeAccordion, disabled, dir, orientation = "vertical" } = _a, accordionProps = __objRest(_a, ["__scopeAccordion", "disabled", "dir", "orientation"]);
      const accordionRef = React.useRef(null);
      const composedRefs = useComposedRefs(accordionRef, forwardedRef);
      const getItems = useCollection(__scopeAccordion);
      const direction = useDirection(dir);
      const isDirectionLTR = direction === "ltr";
      const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
        var _a2;
        if (!ACCORDION_KEYS.includes(event.key)) return;
        const target = event.target;
        const triggerCollection = getItems().filter((item) => {
          var _a3;
          return !((_a3 = item.ref.current) == null ? void 0 : _a3.disabled);
        });
        const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
        const triggerCount = triggerCollection.length;
        if (triggerIndex === -1) return;
        event.preventDefault();
        let nextIndex = triggerIndex;
        const homeIndex = 0;
        const endIndex = triggerCount - 1;
        const moveNext = () => {
          nextIndex = triggerIndex + 1;
          if (nextIndex > endIndex) {
            nextIndex = homeIndex;
          }
        };
        const movePrev = () => {
          nextIndex = triggerIndex - 1;
          if (nextIndex < homeIndex) {
            nextIndex = endIndex;
          }
        };
        switch (event.key) {
          case "Home":
            nextIndex = homeIndex;
            break;
          case "End":
            nextIndex = endIndex;
            break;
          case "ArrowRight":
            if (orientation === "horizontal") {
              if (isDirectionLTR) {
                moveNext();
              } else {
                movePrev();
              }
            }
            break;
          case "ArrowDown":
            if (orientation === "vertical") {
              moveNext();
            }
            break;
          case "ArrowLeft":
            if (orientation === "horizontal") {
              if (isDirectionLTR) {
                movePrev();
              } else {
                moveNext();
              }
            }
            break;
          case "ArrowUp":
            if (orientation === "vertical") {
              movePrev();
            }
            break;
        }
        const clampedIndex = nextIndex % triggerCount;
        (_a2 = triggerCollection[clampedIndex].ref.current) == null ? void 0 : _a2.focus();
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        AccordionImplProvider,
        {
          scope: __scopeAccordion,
          disabled,
          direction: dir,
          orientation,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.div,
            __spreadProps(__spreadValues({}, accordionProps), {
              "data-orientation": orientation,
              ref: composedRefs,
              onKeyDown: disabled ? void 0 : handleKeyDown
            })
          ) })
        }
      );
    }
  );
  var ITEM_NAME = "AccordionItem";
  var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
  var AccordionItem$1 = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeAccordion, value } = _a, accordionItemProps = __objRest(_a, ["__scopeAccordion", "value"]);
      const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
      const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
      const collapsibleScope = useCollapsibleScope(__scopeAccordion);
      const triggerId = useId();
      const open = value && valueContext.value.includes(value) || false;
      const disabled = accordionContext.disabled || props.disabled;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        AccordionItemProvider,
        {
          scope: __scopeAccordion,
          open,
          disabled,
          triggerId,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Root,
            __spreadProps(__spreadValues(__spreadValues({
              "data-orientation": accordionContext.orientation,
              "data-state": getState(open)
            }, collapsibleScope), accordionItemProps), {
              ref: forwardedRef,
              disabled,
              open,
              onOpenChange: (open2) => {
                if (open2) {
                  valueContext.onItemOpen(value);
                } else {
                  valueContext.onItemClose(value);
                }
              }
            })
          )
        }
      );
    }
  );
  AccordionItem$1.displayName = ITEM_NAME;
  var HEADER_NAME = "AccordionHeader";
  var AccordionHeader = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeAccordion } = _a, headerProps = __objRest(_a, ["__scopeAccordion"]);
      const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
      const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.h3,
        __spreadProps(__spreadValues({
          "data-orientation": accordionContext.orientation,
          "data-state": getState(itemContext.open),
          "data-disabled": itemContext.disabled ? "" : void 0
        }, headerProps), {
          ref: forwardedRef
        })
      );
    }
  );
  AccordionHeader.displayName = HEADER_NAME;
  var TRIGGER_NAME = "AccordionTrigger";
  var AccordionTrigger$1 = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeAccordion } = _a, triggerProps = __objRest(_a, ["__scopeAccordion"]);
      const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
      const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
      const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
      const collapsibleScope = useCollapsibleScope(__scopeAccordion);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Trigger,
        __spreadProps(__spreadValues(__spreadValues({
          "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
          "data-orientation": accordionContext.orientation,
          id: itemContext.triggerId
        }, collapsibleScope), triggerProps), {
          ref: forwardedRef
        })
      ) });
    }
  );
  AccordionTrigger$1.displayName = TRIGGER_NAME;
  var CONTENT_NAME = "AccordionContent";
  var AccordionContent$1 = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeAccordion } = _a, contentProps = __objRest(_a, ["__scopeAccordion"]);
      const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
      const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
      const collapsibleScope = useCollapsibleScope(__scopeAccordion);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Content,
        __spreadProps(__spreadValues(__spreadValues({
          role: "region",
          "aria-labelledby": itemContext.triggerId,
          "data-orientation": accordionContext.orientation
        }, collapsibleScope), contentProps), {
          ref: forwardedRef,
          style: __spreadValues({
            ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
            ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)"
          }, props.style)
        })
      );
    }
  );
  AccordionContent$1.displayName = CONTENT_NAME;
  function getState(open) {
    return open ? "open" : "closed";
  }
  var Root2 = Accordion$1;
  var Item = AccordionItem$1;
  var Header = AccordionHeader;
  var Trigger2 = AccordionTrigger$1;
  var Content2 = AccordionContent$1;
  const Accordion = Root2;
  const AccordionItem = reactExports.forwardRef((__, ref) => {
    var _$ = __, { className } = _$, props = __objRest(_$, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      __spreadValues({
        ref,
        className: cn("tw:border-b", className)
      }, props)
    );
  });
  AccordionItem.displayName = "AccordionItem";
  const AccordionTrigger = reactExports.forwardRef((_aa, ref) => {
    var _ba = _aa, { className, children } = _ba, props = __objRest(_ba, ["className", "children"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: cn("tw:flex"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger2, __spreadProps(__spreadValues({ asChild: true, ref }, props), { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "tw:flex tw:flex-1 tw:items-center tw:justify-between tw:py-4 tw:text-sm tw:font-medium tw:transition-all tw:hover:underline tw:text-left tw:[&[data-state=open]>svg]:tw:rotate-180 tw:cursor-pointer",
          className
        ),
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "tw:h-4 tw:w-4 tw:shrink-0 tw:text-muted-foreground tw:transition-transform tw:duration-200" })
        ]
      }
    ) })) });
  });
  AccordionTrigger.displayName = Trigger2.displayName;
  const AccordionContent = reactExports.forwardRef((_ca, ref) => {
    var _da = _ca, { className, children } = _da, props = __objRest(_da, ["className", "children"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      __spreadProps(__spreadValues({
        ref,
        className: "tw:overflow-hidden tw:text-sm tw:data-[state=closed]:animate-accordion-up tw:data-[state=open]:animate-accordion-down"
      }, props), {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:pb-4 tw:pt-0", className), children })
      })
    );
  });
  AccordionContent.displayName = Content2.displayName;
  const badgeVariants = cva(
    "tw:inline-flex tw:items-center tw:rounded-md tw:border tw:px-2.5 tw:py-0.5 tw:text-xs tw:font-semibold tw:transition-colors tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2",
    {
      variants: {
        variant: {
          default: "tw:border-transparent tw:bg-primary tw:text-primary-foreground tw:shadow tw:hover:bg-primary/80 tw:text-sm",
          secondary: "tw:border-transparent tw:bg-secondary tw:text-secondary-foreground tw:hover:bg-secondary/80 tw:text-sm",
          destructive: "tw:border-transparent tw:bg-destructive tw:text-destructive-foreground tw:shadow tw:hover:bg-destructive/80 tw:text-sm",
          outline: "tw:text-foreground"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
  );
  function Badge(_ea) {
    var _fa = _ea, {
      className,
      variant
    } = _fa, props = __objRest(_fa, [
      "className",
      "variant"
    ]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ className: cn(badgeVariants({ variant }), className) }, props));
  }
  const Input = reactExports.forwardRef(
    (_ga, ref) => {
      var _ha = _ga, { className, type } = _ha, props = __objRest(_ha, ["className", "type"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        __spreadValues({
          type,
          className: cn(
            "tw:flex tw:h-9 tw:w-full tw:rounded-md tw:border tw:border-input tw:bg-transparent tw:px-3 tw:py-1 tw:text-base tw:shadow-sm tw:transition-colors tw:file:border-0 tw:file:bg-transparent tw:file:text-sm tw:file:font-medium tw:file:text-foreground tw:placeholder:text-muted-foreground tw:focus-visible:outline-none tw:focus-visible:ring-1 tw:focus-visible:ring-ring tw:disabled:cursor-not-allowed tw:disabled:opacity-50 tw:md:text-sm",
            className
          ),
          ref
        }, props)
      );
    }
  );
  Input.displayName = "Input";
  function CountryOptions$1({
    currentSettings,
    setCurrentSettings,
    countryCodes
  }) {
    const getCountryStatus = (countryKey) => {
      var _a, _b;
      const country = (_b = (_a = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _a.ids) == null ? void 0 : _b[countryKey];
      if (!(country == null ? void 0 : country.optimizeId)) {
        return "Not configured";
      }
      if (!country.isEnabled) {
        return "Disabled";
      }
      return `Optimize ID: ${country.optimizeId}`;
    };
    const handleEnabledChange = (countryKey, checked) => {
      setCurrentSettings((prevState) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __spreadProps(__spreadValues({}, prevState), {
          optimize: __spreadProps(__spreadValues({
            settingsType: SettingsType.COUNTRY
          }, prevState.optimize), {
            countries: __spreadProps(__spreadValues({
              fallBackEnabled: false,
              fallBackId: void 0
            }, (_b = (_a = prevState.optimize) == null ? void 0 : _a.countries) == null ? void 0 : _b.ids), {
              ids: __spreadProps(__spreadValues({}, (_d = (_c = prevState.optimize) == null ? void 0 : _c.countries) == null ? void 0 : _d.ids), {
                [countryKey]: __spreadProps(__spreadValues({}, (_f = (_e = prevState.optimize) == null ? void 0 : _e.countries) == null ? void 0 : _f.ids[countryKey]), {
                  isEnabled: isOptimizeElementEnabled(
                    (_h = (_g = prevState.optimize) == null ? void 0 : _g.countries) == null ? void 0 : _h.ids[countryKey],
                    checked
                  )
                })
              })
            })
          })
        });
      });
    };
    const handleCountryChange = (countryKey, newOptimizeId) => {
      const newOptimizeIdString = String(newOptimizeId);
      setCurrentSettings((prevState) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        if (((_c = (_b = (_a = prevState.optimize) == null ? void 0 : _a.countries) == null ? void 0 : _b.ids[countryKey]) == null ? void 0 : _c.optimizeId) !== newOptimizeIdString) {
          const newCountrySettings = __spreadProps(__spreadValues({}, (_e = (_d = prevState.optimize) == null ? void 0 : _d.countries) == null ? void 0 : _e.ids[countryKey]), {
            optimizeId: newOptimizeIdString,
            isEnabled: !!newOptimizeIdString
          });
          newCountrySettings.isEnabled = isOptimizeElementEnabled(
            newCountrySettings,
            !!newOptimizeIdString
          );
          return __spreadProps(__spreadValues({}, prevState), {
            optimize: __spreadProps(__spreadValues({}, prevState.optimize), {
              settingsType: SettingsType.COUNTRY,
              countries: __spreadProps(__spreadValues({
                fallBackEnabled: false,
                fallBackId: void 0
              }, (_g = (_f = prevState.optimize) == null ? void 0 : _f.countries) == null ? void 0 : _g.ids), {
                ids: __spreadProps(__spreadValues({}, (_i = (_h = prevState.optimize) == null ? void 0 : _h.countries) == null ? void 0 : _i.ids), {
                  [countryKey]: newCountrySettings
                })
              })
            })
          });
        }
        return prevState;
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: cn("tw:w-full"), children: countryCodes.map((countryKey) => {
      var _a, _b, _c, _d, _e;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: countryKey, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "tw:flex tw:items-center tw:justify-between tw:w-full"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: COUNTRIES[countryKey] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-center tw:space-x-2"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("tw:text-sm tw:text-muted-foreground"), children: getCountryStatus(countryKey) }),
                isOptimizeElementEnabled(
                  (_a = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _a.ids[countryKey]
                ) && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("tw:ml-2"), children: "Enabled" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-4 tw:mx-1"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-center tw:space-x-2"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                id: `${countryKey}-enabled`,
                checked: ((_c = (_b = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _b.ids[countryKey]) == null ? void 0 : _c.isEnabled) || false,
                onCheckedChange: (checked) => handleEnabledChange(countryKey, checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: `${countryKey}-enabled`, children: [
              "Enable for ",
              COUNTRIES[countryKey]
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-2"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `${countryKey}-id`, children: "Optimize ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: `${countryKey}-id`,
                value: ((_e = (_d = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _d.ids[countryKey]) == null ? void 0 : _e.optimizeId) || "",
                onChange: (e) => handleCountryChange(countryKey, e.target.value),
                placeholder: "Enter Optimize ID"
              }
            )
          ] })
        ] }) })
      ] }, countryKey);
    }) });
  }
  function EnabledOptimizeCountries({
    currentSettings
  }) {
    var _a, _b, _c;
    let statusMessage;
    if (isOptimizeSimpleEnabled(currentSettings)) {
      statusMessage = `Enabled in all Countries (${currentSettings == null ? void 0 : currentSettings.simple.optimizeId})`;
    } else if (((_a = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _a.ids) && (currentSettings == null ? void 0 : currentSettings.settingsType) === SettingsType.COUNTRY) {
      const enabledCountries = ((_b = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _b.ids) ? Object.entries((_c = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _c.ids).filter(
        ([countryKey, data]) => isOptimizeElementEnabled(data) && COUNTRIES[countryKey]
      ).map(([countryKey]) => COUNTRIES[countryKey]).join(", ") : void 0;
      statusMessage = enabledCountries ? `Enabled for: ${enabledCountries}` : "No countries enabled";
    } else {
      statusMessage = "No countries enabled";
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: cn(
          "tw:text-sm",
          isOptimizeEnabled(currentSettings) ? "tw:text-green-600" : "tw:text-red-600"
        ),
        children: statusMessage
      }
    );
  }
  function isOptimizeElementEnabled(currentSettings, newEnableState) {
    if ((currentSettings == null ? void 0 : currentSettings.optimizeId) && typeof currentSettings.optimizeId !== "string") {
      throw new Error("optimizeId must be a string");
    }
    return !!((newEnableState !== void 0 ? newEnableState : currentSettings == null ? void 0 : currentSettings.isEnabled) && (currentSettings == null ? void 0 : currentSettings.optimizeId) && !/^\d+$/.test(currentSettings.optimizeId));
  }
  function isOptimizeEnabled(currentSettings) {
    return !!(isOptimizeSimpleEnabled(currentSettings) || isOptimizeCountryEnabled(currentSettings));
  }
  function isOptimizeCountryEnabled(currentSettings) {
    var _a;
    return !!((currentSettings == null ? void 0 : currentSettings.settingsType) === SettingsType.COUNTRY && ((_a = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _a.ids) && Object.values(currentSettings.countries.ids).some(
      (country) => isOptimizeElementEnabled(country)
    ));
  }
  function isOptimizeSimpleEnabled(currentSettings) {
    return !!((currentSettings == null ? void 0 : currentSettings.settingsType) === SettingsType.SIMPLE && isOptimizeElementEnabled(currentSettings == null ? void 0 : currentSettings.simple));
  }
  function SovendusOptimize({
    currentOptimizeSettings,
    setCurrentSettings,
    additionalSteps
  }) {
    var _a, _b;
    const handleGlobalChange = (value) => {
      setCurrentSettings((prevState) => {
        var _a2;
        const newSettings = __spreadProps(__spreadValues({}, (_a2 = prevState.optimize) == null ? void 0 : _a2.simple), {
          isEnabled: !!value,
          optimizeId: String(value)
        });
        newSettings.isEnabled = isOptimizeElementEnabled(newSettings, !!value);
        return __spreadProps(__spreadValues({}, prevState), {
          optimize: __spreadProps(__spreadValues({}, prevState.optimize), {
            settingsType: SettingsType.SIMPLE,
            simple: newSettings
          })
        });
      });
    };
    const handleGlobalToggle = (value) => {
      setCurrentSettings((prevState) => {
        var _a2, _b2, _c;
        const newSettings = __spreadProps(__spreadValues({
          optimizeId: ""
        }, (_a2 = prevState.optimize) == null ? void 0 : _a2.simple), {
          isEnabled: value && !!((_c = (_b2 = prevState.optimize) == null ? void 0 : _b2.simple) == null ? void 0 : _c.optimizeId)
        });
        newSettings.isEnabled = isOptimizeElementEnabled(newSettings, !!value);
        return __spreadProps(__spreadValues({}, prevState), {
          optimize: __spreadProps(__spreadValues({}, prevState.optimize), {
            settingsType: SettingsType.SIMPLE,
            simple: newSettings
          })
        });
      });
    };
    const handleGlobalOptimizeIdChange = (value) => {
      setCurrentSettings(
        (prevState) => __spreadProps(__spreadValues({}, prevState), {
          optimize: __spreadProps(__spreadValues({}, prevState.optimize), {
            settingsType: value
          })
        })
      );
    };
    const optimizeEnabled = isOptimizeEnabled(currentOptimizeSettings);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        className: cn("tw:space-y-6 tw:pb-8"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "tw:bg-gradient-to-r tw:from-green-600 tw:to-teal-600 tw:text-white tw:p-8 tw:rounded-lg tw:shadow-lg"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("ttw:ext-3xl tw:font-bold tw:mb-4 tw:text-white"), children: "Optimize: Supercharge Your Conversions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("tw:text-xl tw:mb-6"), children: "Transform passive visitors into active customers and reduce bounce rates with Sovendus Optimize. Boost your conversion rates and build long-term customer relationships." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    onClick: () => void window.open(DEMO_REQUEST_URL, "_blank"),
                    className: cn("tw:w-full tw:sm:w-auto tw:mt-4"),
                    children: [
                      "Schedule Your Personalized Demo",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: cn("tw:ml-2 tw:h-4 tw:w-4") })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { className: cn("tw:mb-4 tw:bg-blue-50 tw:border-blue-200"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: cn("tw:text-blue-700 tw:font-semibold"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important:" }),
            " To activate and configure Optimize, contact Sovendus for a personalized demo and setup. Our team will guide you through the entire process."
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "configure", className: cn("tw:w-full"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: cn("tw:grid tw:w-full tw:grid-cols-3 tw:mb-8"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "configure",
                  className: cn(
                    "tw:text-lg tw:font-semibold tw:py-3 tw:bg-green-100 tw:data-[state=active]:bg-green-600 tw:data-[state=active]:text-white"
                  ),
                  children: "Configure"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "benefits",
                  className: cn(
                    "tw:text-lg tw:font-semibold tw:py-3 tw:bg-green-100 tw:data-[state=active]:bg-green-600 tw:data-[state=active]:text-white"
                  ),
                  children: "Key Benefits"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "how-it-works",
                  className: cn(
                    "tw:text-lg tw:font-semibold tw:py-3 tw:bg-green-100 tw:data-[state=active]:bg-green-600 tw:data-[state=active]:text-white"
                  ),
                  children: "How It Works"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "configure", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-6"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Alert,
                {
                  className: `${optimizeEnabled ? "tw:bg-green-50 tw:border-green-200" : "tw:bg-red-50 tw:border-red-200"} tw:mt-2`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AlertDescription,
                    {
                      className: optimizeEnabled ? "tw:text-green-700" : "tw:text-red-700",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        EnabledOptimizeCountries,
                        {
                          currentSettings: currentOptimizeSettings
                        }
                      )
                    }
                  )
                }
              ),
              additionalSteps && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("tw:border-2 tw:border-green-500"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  CardTitle,
                  {
                    className: cn(
                      "tw:text-xl tw:font-semibold tw:flex tw:items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn("tw:w-6 tw:h-6 tw:mr-2 tw:text-green-500")
                        }
                      ),
                      "Additional Setup Steps"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:font-semibold tw:mb-2"), children: additionalSteps.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "ol",
                    {
                      className: cn(
                        "tw:list-decimal tw:list-inside tw:space-y-2"
                      ),
                      children: additionalSteps.subSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: step }, index))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Accordion,
                {
                  type: "single",
                  defaultValue: "optimize-settings",
                  collapsible: true,
                  className: cn("tw:w-full tw:mt-8"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    AccordionItem,
                    {
                      value: "optimize-settings",
                      className: cn(
                        "tw:border-2 tw:border-green-500 tw:rounded-lg tw:overflow-hidden"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          AccordionTrigger,
                          {
                            className: cn(
                              "tw:bg-green-50 tw:p-4 tw:text-xl tw:font-semibold"
                            ),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-center"), children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Cog,
                                {
                                  className: cn("tw:w-6 tw:h-6 tw:mr-2 tw:text-green-500")
                                }
                              ),
                              "Configure Optimize Settings"
                            ] })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: cn("tw:p-4 tw:bg-white"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Tabs,
                          {
                            defaultValue: (currentOptimizeSettings == null ? void 0 : currentOptimizeSettings.settingsType) || "simple",
                            onValueChange: (value) => handleGlobalOptimizeIdChange(value),
                            className: cn("tw:border tw:rounded-md"),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                TabsList,
                                {
                                  className: cn("tw:grid tw:w-full tw:grid-cols-2 tw:mb-2"),
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      TabsTrigger,
                                      {
                                        value: "simple",
                                        className: cn(
                                          "tw:data-[state=active]:bg-green-100 tw:data-[state=active]:text-green-800 tw:data-[state=active]:border-b-2"
                                        ),
                                        children: "Global Optimize ID"
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      TabsTrigger,
                                      {
                                        value: "country",
                                        className: cn(
                                          "tw:data-[state=active]:bg-green-100 tw:data-[state=active]:text-green-800 tw:data-[state=active]:border-b-2"
                                        ),
                                        children: "Country-specific Optimize ID's"
                                      }
                                    )
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "simple", className: cn("tw:p-4"), children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { className: cn("tw:bg-blue-50 tw:border-blue-200"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: cn("text-blue-700"), children: "Use one Optimize ID for all countries" }) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-4 tw:mt-4"), children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      className: cn("tw:flex tw:items-center tw:space-x-2"),
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          Switch,
                                          {
                                            id: "simple-id-enabled",
                                            checked: ((_a = currentOptimizeSettings == null ? void 0 : currentOptimizeSettings.simple) == null ? void 0 : _a.isEnabled) || false,
                                            onCheckedChange: (checked) => handleGlobalToggle(checked)
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "simple-id-enabled", children: "Enable Global ID" })
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-2"), children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "simple-id", children: "Global Optimize ID" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      Input,
                                      {
                                        id: "simple-id",
                                        value: ((_b = currentOptimizeSettings == null ? void 0 : currentOptimizeSettings.simple) == null ? void 0 : _b.optimizeId) || "",
                                        onChange: (e) => handleGlobalChange(e.target.value),
                                        placeholder: "Enter Global Optimize ID"
                                      }
                                    )
                                  ] })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "country", className: cn("tw:p-4"), children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { className: cn("tw:bg-blue-50 tw:border-blue-200"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: cn("tw:text-blue-700"), children: "Use different Optimize ID's for each country" }) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:space-y-4 tw:mt-4"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  CountryOptions$1,
                                  {
                                    currentSettings: currentOptimizeSettings,
                                    setCurrentSettings,
                                    countryCodes: Object.keys(COUNTRIES)
                                  }
                                ) })
                              ] })
                            ]
                          }
                        ) })
                      ]
                    }
                  )
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "benefits", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "tw:grid tw:grid-cols-1 tw:md:grid-cols-3 tw:gap-6 tw:mb-8"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: cn("tw:flex tw:items-center"), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Target,
                          {
                            className: cn("tw:mr-2 tw:h-5 tw:w-5 tw:text-red-500")
                          }
                        ),
                        "Precision Targeting"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Deliver the right offer to the right customer at the perfect moment, based on user behavior and traffic sources." }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: cn("tw:flex tw:items-center"), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChartNoAxesColumnIncreasing,
                          {
                            className: cn("tw:mr-2 tw:h-5 tw:w-5 tw:text-blue-500")
                          }
                        ),
                        "Data-Driven Insights"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Leverage powerful analytics to gain deeper insights, optimize your strategies, and continuously enhance your shop's performance by understanding customer behavior." }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: cn("tw:flex tw:items-center"), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Globe,
                          {
                            className: cn("tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500")
                          }
                        ),
                        "Seamless Integration"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Easy integration into any online shop, with customized design to match your brand." }) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:bg-gray-100 tw:p-6 tw:rounded-lg tw:mb-8"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:text-2xl tw:font-semibold tw:mb-4"), children: "Key Benefits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: cn("tw:list-disc tw:list-inside tw:space-y-2"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increase conversion rates by up to 10%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reduce cart abandonment by 5%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Boost newsletter sign-ups by 15%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Performance-based pricing with no hidden costs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No minimum contract duration" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "how-it-works", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "tw:bg-gray-50 tw:p-6 tw:rounded-lg tw:mt-6 tw:space-y-4"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:text-2xl tw:font-semibold tw:mb-4"), children: "How Optimize Works" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: cn("tw:space-y-4"), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Intelligent Analysis:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our system analyzes user behavior, traffic sources, and on-site interactions in real-time." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Targeted Interventions:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sovendus Optimize is designed to intelligently analyze user behavior and implement targeted interventions to enhance user engagement and reduce bounce and cart abandonment rates." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Conversion Boost:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "By focusing on personalized strategies, Sovendus Optimize helps businesses reduce bounce and cart abandonment rates, driving higher conversions and improving overall customer retention." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Continuous Optimization:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our team works with you to refine strategies and improve performance based on ongoing data analysis." })
                      ] })
                    ] })
                  ] })
                ]
              }
            ) })
          ] })
        ]
      }
    );
  }
  function ProductCard({
    title,
    description,
    icon,
    status,
    metrics,
    onConfigure,
    buttonsDisabled
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("tw:w-full"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: cn("tw:border-b"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-start tw:justify-between"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-1"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: cn("tw:flex tw:items-center tw:text-2xl"), children: [
            icon,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("tw:ml-2"), children: title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: cn("tw:text-sm tw:text-muted-foreground tw:max-w-2xl"),
              children: description
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: status.active ? "default" : "secondary",
            className: cn(
              "tw:ml-4",
              status.active ? "tw:bg-green-100 tw:text-green-800 tw:hover:bg-green-100" : "tw:bg-gray-100 tw:text-gray-800 tw:hover:bg-gray-100"
            ),
            children: status.active ? "Active" : "Not Active"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: cn("tw:pt-6"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-4"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:flex tw:flex-wrap tw:gap-8"), children: metrics.map((metric, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-1"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("tw:text-sm tw:text-muted-foreground"), children: metric.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("tw:text-2xl tw:font-bold"), children: metric.value })
              ] }, index)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:gap-2"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: onConfigure, children: [
                  "Learn more",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Presentation, { className: cn("tw:ml-2 tw:h-4 tw:w-4") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onConfigure, disabled: buttonsDisabled, children: [
                  "Configure",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: cn("tw:ml-2 tw:h-4 tw:w-4") })
                ] })
              ] })
            ]
          }
        ),
        status.details && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:mt-4 tw:p-4 tw:bg-gray-50 tw:rounded-lg"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:text-sm tw:font-semibold tw:mb-2"), children: "Current Configuration" }),
          status.details
        ] })
      ] })
    ] });
  }
  function CountryOptions({
    currentSettings,
    setCurrentSettings,
    countryCodes
  }) {
    const getCountryStatus = (countryKey, languageKey) => {
      var _a, _b, _c;
      const country = (_c = (_b = (_a = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _a.ids) == null ? void 0 : _b[countryKey]) == null ? void 0 : _c.languages[languageKey];
      if (!(country == null ? void 0 : country.trafficMediumNumber) || !(country == null ? void 0 : country.trafficSourceNumber)) {
        return "Not configured";
      }
      if (!(country == null ? void 0 : country.isEnabled)) {
        return "Disabled";
      }
      return `Source: ${country.trafficSourceNumber}, Medium: ${country.trafficMediumNumber}`;
    };
    const isCountryEnabled = (country, isEnabled) => {
      const _isEnabled = !!((isEnabled !== void 0 ? isEnabled : country == null ? void 0 : country.isEnabled) && (country == null ? void 0 : country.trafficSourceNumber) && (country == null ? void 0 : country.trafficMediumNumber));
      return _isEnabled;
    };
    const handleEnabledChange = (countryKey, languageKey, checked) => {
      setCurrentSettings((prevState) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
        const element = (_e = (_d = (_c = (_b = (_a = prevState.voucherNetwork) == null ? void 0 : _a.countries) == null ? void 0 : _b.ids) == null ? void 0 : _c[countryKey]) == null ? void 0 : _d.languages) == null ? void 0 : _e[languageKey];
        if (element) {
          const newState = __spreadProps(__spreadValues({}, prevState), {
            voucherNetwork: __spreadProps(__spreadValues({}, prevState.voucherNetwork), {
              countries: __spreadProps(__spreadValues({
                fallBackIds: void 0,
                iframeContainerQuerySelector: void 0
              }, (_f = prevState.voucherNetwork) == null ? void 0 : _f.countries), {
                ids: __spreadProps(__spreadValues({}, (_h = (_g = prevState.voucherNetwork) == null ? void 0 : _g.countries) == null ? void 0 : _h.ids), {
                  [countryKey]: __spreadProps(__spreadValues({}, (_k = (_j = (_i = prevState.voucherNetwork) == null ? void 0 : _i.countries) == null ? void 0 : _j.ids) == null ? void 0 : _k[countryKey]), {
                    languages: __spreadProps(__spreadValues({}, (_o = (_n = (_m = (_l = prevState.voucherNetwork) == null ? void 0 : _l.countries) == null ? void 0 : _m.ids) == null ? void 0 : _n[countryKey]) == null ? void 0 : _o.languages), {
                      [languageKey]: __spreadProps(__spreadValues({}, element), {
                        isEnabled: checked
                      })
                    })
                  })
                })
              })
            })
          });
          return newState;
        }
        return prevState;
      });
    };
    const handleIdChange = (countryKey, languageKey, field, value) => {
      setCurrentSettings((prevState) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
        const newValue = parseInt(`${value}`, 10);
        const cleanedValue = isNaN(parseInt(String(newValue), 10)) ? "" : String(newValue);
        const element = (_e = (_d = (_c = (_b = (_a = prevState.voucherNetwork) == null ? void 0 : _a.countries) == null ? void 0 : _b.ids) == null ? void 0 : _c[countryKey]) == null ? void 0 : _d.languages) == null ? void 0 : _e[languageKey];
        if ((element == null ? void 0 : element[field]) !== cleanedValue) {
          const newElement = __spreadProps(__spreadValues({
            iframeContainerQuerySelector: void 0,
            trafficMediumNumber: "",
            trafficSourceNumber: "",
            isEnabled: false
          }, element), {
            [field]: cleanedValue
          });
          const isEnabled = isCountryEnabled(newElement, true);
          const newState = __spreadProps(__spreadValues({}, prevState), {
            voucherNetwork: __spreadProps(__spreadValues({}, prevState.voucherNetwork), {
              settingType: SettingsType.COUNTRY,
              cookieTracking: true,
              countries: __spreadProps(__spreadValues({}, (_f = prevState.voucherNetwork) == null ? void 0 : _f.countries), {
                fallBackIds: void 0,
                iframeContainerQuerySelector: void 0,
                ids: __spreadProps(__spreadValues({}, (_h = (_g = prevState.voucherNetwork) == null ? void 0 : _g.countries) == null ? void 0 : _h.ids), {
                  [countryKey]: __spreadProps(__spreadValues({}, (_k = (_j = (_i = prevState.voucherNetwork) == null ? void 0 : _i.countries) == null ? void 0 : _j.ids) == null ? void 0 : _k[countryKey]), {
                    languages: __spreadProps(__spreadValues({}, (_o = (_n = (_m = (_l = prevState.voucherNetwork) == null ? void 0 : _l.countries) == null ? void 0 : _m.ids) == null ? void 0 : _n[countryKey]) == null ? void 0 : _o.languages), {
                      [languageKey]: __spreadProps(__spreadValues({}, newElement), {
                        isEnabled
                      })
                    })
                  })
                })
              })
            })
          });
          return newState;
        }
        return prevState;
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: cn("tw:w-full"), children: countryCodes.map(
      (countryKey) => Object.entries(LANGUAGES_BY_COUNTRIES[countryKey]).map(
        ([languageKey, countryName]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CountrySettings,
          {
            countryKey,
            languageKey,
            countryName,
            currentSettings,
            getCountryStatus,
            isCountryEnabled,
            handleEnabledChange,
            handleIdChange
          },
          `${countryKey}-${languageKey}`
        )
      )
    ) });
  }
  function CountrySettings({
    countryName,
    currentSettings,
    countryKey,
    languageKey,
    getCountryStatus,
    isCountryEnabled,
    handleEnabledChange,
    handleIdChange
  }) {
    var _a, _b, _c, _d;
    const currentElement = (_d = (_c = (_b = (_a = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _a.ids) == null ? void 0 : _b[countryKey]) == null ? void 0 : _c.languages) == null ? void 0 : _d[languageKey];
    const isEnabled = isCountryEnabled(currentElement);
    const trafficSourceNumber = parseInt(
      (currentElement == null ? void 0 : currentElement.trafficSourceNumber) || ""
    );
    const trafficMediumNumber = parseInt(
      (currentElement == null ? void 0 : currentElement.trafficMediumNumber) || ""
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: countryKey, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn("tw:flex tw:items-center tw:justify-between tw:w-full"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: countryName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-center tw:space-x-2"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("tw:text-sm tw:text-muted-foreground"), children: getCountryStatus(countryKey, languageKey) }),
              isEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "default",
                  className: cn(
                    "tw:ml-2 tw:bg-green-100 tw:text-green-800 tw:hover:bg-green-100"
                  ),
                  children: "Enabled"
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-4 tw:mx-1"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-center tw:space-x-2"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              id: `${countryKey}-enabled`,
              checked: isEnabled,
              onCheckedChange: (checked) => handleEnabledChange(countryKey, languageKey, checked)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: `${countryKey}-enabled`, children: [
            "Enable for ",
            countryName
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:grid tw:grid-cols-2 tw:gap-4"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-2"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `${countryKey}-source`, children: "Traffic Source Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: `${countryKey}-source`,
                value: trafficSourceNumber || "",
                onChange: (e) => handleIdChange(
                  countryKey,
                  languageKey,
                  "trafficSourceNumber",
                  e.target.value
                ),
                placeholder: "Enter Traffic Source Number"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-2"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `${countryKey}-medium`, children: "Traffic Medium Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: `${countryKey}-medium`,
                value: trafficMediumNumber || "",
                onChange: (e) => handleIdChange(
                  countryKey,
                  languageKey,
                  "trafficMediumNumber",
                  e.target.value
                ),
                placeholder: "Enter Traffic Medium Number"
              }
            )
          ] })
        ] })
      ] }) })
    ] }, countryKey);
  }
  function EnabledVoucherNetworkCountries({
    currentSettings
  }) {
    var _a;
    const enabledLocales = [];
    if ((_a = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _a.ids) {
      for (const [countryCode, country] of Object.entries(
        currentSettings.countries.ids
      )) {
        if (country.languages) {
          for (const [languageKey, language] of Object.entries(
            country.languages
          )) {
            if (language.isEnabled && language.trafficMediumNumber && language.trafficSourceNumber) {
              const countryName = LANGUAGES_BY_COUNTRIES[countryCode][languageKey];
              enabledLocales.push(countryName);
            }
          }
        }
      }
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: cn(
          "tw:text-sm",
          isVnEnabled(currentSettings) ? "tw:text-green-600" : "tw:text-red-600"
        ),
        children: enabledLocales.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Enabled for: " }),
          enabledLocales.join(", ")
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No countries enabled" })
      }
    );
  }
  function isVnEnabled(currentSettings, isEnabled) {
    var _a, _b;
    return ((_a = currentSettings == null ? void 0 : currentSettings.countries) == null ? void 0 : _a.ids) ? Object.values((_b = currentSettings.countries) == null ? void 0 : _b.ids).some(
      (country) => {
        var _a2;
        return (_a2 = Object.values(country.languages)) == null ? void 0 : _a2.some(
          (lang) => lang.isEnabled && lang.trafficMediumNumber && lang.trafficSourceNumber
        );
      }
    ) : false;
  }
  function SovendusVoucherNetwork({
    currentSettings,
    setCurrentSettings,
    additionalSteps
  }) {
    const vnEnabled = isVnEnabled(currentSettings);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        className: cn("tw:space-y-6 tw:pb-8"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "tw:bg-gradient-to-r tw:from-blue-600 tw:to-indigo-600 tw:text-white tw:p-8 tw:rounded-lg tw:shadow-lg"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:text-3xl tw:font-bold tw:mb-4 tw:text-white"), children: "Voucher Network & Checkout Benefits: Dual Revenue Streams" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("tw:text-xl tw:mb-6"), children: "Boost traffic and sales with our closed voucher network, while rewarding customers at checkout and earning extra revenue." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    onClick: () => void window.open(DEMO_REQUEST_URL, "_blank"),
                    className: cn("tw:bg-white tw:text-blue-600 tw:hover:bg-blue-100"),
                    children: [
                      "Schedule Your Personalized Demo",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: cn("tw:ml-2 tw:h-4 tw:w-4") })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { className: cn("tw:mb-4 tw:bg-blue-50 tw:border-blue-200"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: cn("tw:text-blue-700 tw:font-semibold"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important:" }),
            " To activate Voucher Network and/or Checkout Benefits, contact Sovendus for a personalized demo and setup. Our team will guide you through the entire process."
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "configure", className: cn("tw:w-full"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: cn("tw:grid tw:w-full tw:grid-cols-3 tw:mb-8"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "configure",
                  className: cn(
                    "tw:text-lg tw:font-semibold tw:py-3 tw:bg-blue-100 tw:data-[state=active]:bg-blue-600 tw:data-[state=active]:text-white"
                  ),
                  children: "Configure"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "benefits",
                  className: cn(
                    "tw:text-lg tw:font-semibold tw:py-3 tw:bg-blue-100 tw:data-[state=active]:bg-blue-600 tw:data-[state=active]:text-white"
                  ),
                  children: "Key Benefits"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "how-it-works",
                  className: cn(
                    "tw:text-lg tw:font-semibold tw:py-3 tw:bg-blue-100 tw:data-[state=active]:bg-blue-600 tw:data-[state=active]:text-white"
                  ),
                  children: "How It Works"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "configure", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:space-y-6"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Alert,
                {
                  className: cn(
                    `${vnEnabled ? "tw:bg-green-50 tw:border-green-200" : "tw:bg-red-50 tw:border-red-200"} tw:mt-2`
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AlertDescription,
                    {
                      className: cn(
                        vnEnabled ? "tw:text-green-700" : "tw:text-red-700"
                      ),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        EnabledVoucherNetworkCountries,
                        {
                          currentSettings
                        }
                      )
                    }
                  )
                }
              ),
              additionalSteps && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("tw:border-2 tw:border-blue-500"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  CardTitle,
                  {
                    className: cn(
                      "tw:text-xl tw:font-semibold tw:flex tw:items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn("tw:w-6 tw:h-6 tw:mr-2 tw:text-blue-500")
                        }
                      ),
                      "Additional Setup Steps"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:font-semibold tw:mb-2"), children: additionalSteps.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "ol",
                    {
                      className: cn(
                        "tw:list-decimal tw:list-inside tw:space-y-2"
                      ),
                      children: additionalSteps.subSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: step }, index))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Accordion,
                {
                  type: "single",
                  defaultValue: "step1",
                  collapsible: true,
                  className: cn("tw:w-full tw:mt-8"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    AccordionItem,
                    {
                      value: "step1",
                      className: cn(
                        "tw:border-2 tw:border-blue-500 tw:rounded-lg tw:overflow-hidden"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          AccordionTrigger,
                          {
                            className: cn(
                              "tw:bg-blue-50 tw:p-4 tw:text-xl tw:font-semibold"
                            ),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:flex tw:items-center"), children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Cog,
                                {
                                  className: cn("tw:w-6 tw:h-6 tw:mr-2 tw:text-blue-500")
                                }
                              ),
                              "Configure Voucher Network & Checkout Benefits"
                            ] })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionContent, { className: cn("tw:p-4 tw:bg-white"), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("tw:mb-4 tw:text-lg"), children: "Maximize your revenue potential by setting up Voucher Network and Checkout Benefits for multiple countries and languages. This configuration applies to both products, unlocking new markets and opportunities for growth." }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            CountryOptions,
                            {
                              currentSettings,
                              setCurrentSettings,
                              countryCodes: Object.keys(LANGUAGES_BY_COUNTRIES)
                            }
                          )
                        ] })
                      ]
                    }
                  )
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "benefits", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-6 tw:mb-8"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: cn("tw:flex tw:items-center"), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Gift,
                          {
                            className: cn("tw:mr-2 tw:h-5 tw:w-5 tw:text-blue-500")
                          }
                        ),
                        "Voucher Network"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Gain traffic and new sales through our closed voucher network with over 7 million online shoppers every month." }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: cn("tw:flex tw:items-center"), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ShoppingBag,
                          {
                            className: cn("tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500")
                          }
                        ),
                        "Checkout Benefits"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Generate additional revenue by displaying offers from other shops on your checkout page. Earn commissions when your customers make purchases from these partner offers." }) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:bg-gray-100 tw:p-6 tw:rounded-lg tw:mb-8"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:text-2xl tw:font-semibold tw:mb-4"), children: "Key Benefits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: cn("tw:list-disc tw:list-inside tw:space-y-2"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Massive Reach:" }),
                    " Connect with 7 million online shoppers monthly through our network of 2,300+ European partners."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Performance-Based:" }),
                    " Pay only for generated purchases in your shop, with no minimum contract duration."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dual Revenue Streams:" }),
                    " Attract new customers through Voucher Network and earn additional revenue with Checkout Benefits."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Seamless Integration:" }),
                    " Easy setup process for both products with a single configuration."
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "how-it-works", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "tw:bg-gray-50 tw:p-6 tw:rounded-lg tw:mt-6 tw:space-y-4"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:text-2xl tw:font-semibold tw:mb-4"), children: "How Voucher Network & Checkout Benefits Work" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: cn("tw:space-y-4"), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Voucher Network Integration:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "After setup, your shop's vouchers are displayed on partner checkout pages, attracting new customers to your store." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Checkout Benefits Display:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Partner offers are shown on your checkout page, providing additional value to your customers and generating commission for you." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Dual Revenue Generation:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Benefit from new customer acquisitions through your vouchers and earn commissions from partner sales." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: cn("tw:flex tw:items-start"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: cn(
                            "tw:mr-2 tw:h-5 tw:w-5 tw:text-green-500 tw:mt-1 tw:flex-shrink-0"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cn("tw:text-lg"), children: "Continuous Optimization:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our team works with you to refine your offers and placements for maximum performance and revenue." })
                      ] })
                    ] })
                  ] })
                ]
              }
            ) })
          ] })
        ]
      }
    );
  }
  const DEMO_REQUEST_URL = "https://online.sovendus.com/kontakt/demo-tour-kontaktformular/#";
  function SovendusBackendForm({
    currentStoredSettings: _currentStoredSettings,
    saveSettings,
    additionalSteps,
    zoomedVersion = false,
    callSaveOnLoad,
    debug = false
  }) {
    const [currentStoredSettings, setCurrentStoredSettings] = reactExports.useState(() => cleanConfig(_currentStoredSettings));
    const [currentSettings, setCurrentSettings] = reactExports.useState(
      currentStoredSettings
    );
    if (debug) {
      loggerInfo("Current settings:", currentSettings);
      loggerInfo("Current stored settings:", currentStoredSettings);
    }
    const [activeConfig, setActiveConfig] = reactExports.useState(null);
    const [notificationState, setNotificationState] = reactExports.useState(null);
    useSettingsSaveOnLoad(saveSettings, currentStoredSettings, callSaveOnLoad);
    return reactExports.useMemo(() => {
      const buttonsDisabled = (notificationState == null ? void 0 : notificationState.type) === "loading";
      const handleSave = (open) => __async2(this, null, function* () {
        if (!open) {
          const hasUnsavedChanges = JSON.stringify(currentSettings) !== JSON.stringify(currentStoredSettings);
          const prevActiveConfig = activeConfig;
          try {
            setActiveConfig(null);
            if (hasUnsavedChanges) {
              setNotificationState({
                message: "Saving settings...",
                type: "loading"
              });
              const updatedSettings = yield saveSettings(currentSettings);
              setCurrentStoredSettings(updatedSettings);
              setCurrentSettings(updatedSettings);
              setNotificationState({
                message: "Settings saved successfully",
                type: "success"
              });
            }
          } catch (error) {
            setActiveConfig(prevActiveConfig);
            setNotificationState({
              message: `Failed to save settings, error: ${(error == null ? void 0 : error.message) || JSON.stringify(error)}`,
              type: "error"
            });
          }
        }
      });
      const getVoucherNetworkStatus = () => {
        var _a, _b;
        const enabledCountries = ((_b = (_a = currentSettings.voucherNetwork) == null ? void 0 : _a.countries) == null ? void 0 : _b.ids) && Object.entries(currentSettings.voucherNetwork.countries.ids).filter(
          ([_, country]) => country.languages && Object.values(country.languages).some((lang) => lang.isEnabled)
        ).map(([code]) => code);
        const isActive = (enabledCountries == null ? void 0 : enabledCountries.length) ? enabledCountries.length > 0 : false;
        return {
          active: isActive,
          details: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EnabledVoucherNetworkCountries,
            {
              currentSettings: currentSettings.voucherNetwork
            }
          )
        };
      };
      const getOptimizeStatus = () => {
        var _a, _b, _c, _d, _e, _f;
        const isGlobalEnabled = ((_b = (_a = currentSettings.optimize) == null ? void 0 : _a.simple) == null ? void 0 : _b.optimizeId) && ((_d = (_c = currentSettings.optimize) == null ? void 0 : _c.simple) == null ? void 0 : _d.isEnabled);
        const enabledCountries = ((_e = currentSettings.optimize) == null ? void 0 : _e.countries) && Object.entries((_f = currentSettings.optimize) == null ? void 0 : _f.countries.ids).filter(([_, data]) => data.isEnabled).map(([code]) => code);
        const isActive = isGlobalEnabled || (enabledCountries == null ? void 0 : enabledCountries.length) && enabledCountries.length > 0 || false;
        return {
          active: isActive,
          details: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EnabledOptimizeCountries,
            {
              currentSettings: currentSettings.optimize
            }
          )
        };
      };
      const getCheckoutProductsStatus = () => {
        return {
          active: currentSettings.checkoutProducts || false,
          details: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: cn(
                "tw:text-sm",
                currentSettings.checkoutProducts ? "tw:text-green-600" : "tw:text-red-600"
              ),
              children: currentSettings.checkoutProducts ? "Ready to receive traffic from partner shops." : "Not active"
            }
          )
        };
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn("tw:container tw:mx-auto tw:p-6 tw:space-y-8", {
            zoomed: zoomedVersion
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:flex tw:justify-between tw:items-center"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tw:text-4xl tw:font-bold"), children: "Sovendus App" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: cn("tw:bg-blue-50 tw:border-blue-200"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTitle, { className: cn("tw:text-blue-700 tw:font-semibold"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Welcome to your Sovendus configuration dashboard." }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: cn("tw:text-blue-700 tw:font-semibold"), children: "To get started or make changes to your setup, please contact Sovendus for a personalized demo and configuration process." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("tw:grid tw:gap-6"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProductCard,
                {
                  title: "Voucher Network & Checkout Benefits",
                  description: "Drive sales with post-purchase vouchers and earn revenue from partner offers",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: cn("tw:h-6 tw:w-6 tw:text-blue-500") }),
                  status: getVoucherNetworkStatus(),
                  buttonsDisabled,
                  metrics: [
                    { label: "Network Reach", value: "7M+" },
                    { label: "Partner Shops", value: "2,300+" },
                    { label: "Available Countries", value: "14" }
                  ],
                  onConfigure: () => setActiveConfig("voucherNetwork")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProductCard,
                {
                  title: "Optimize",
                  description: "Boost conversions with intelligent on-site optimization",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: cn("tw:h-6 tw:w-6 tw:text-green-500") }),
                  status: getOptimizeStatus(),
                  buttonsDisabled,
                  metrics: [
                    { label: "Conversion Boost", value: "10%" },
                    { label: "Bounce Rate Reduction", value: "5%" },
                    { label: "Newsletter Sign-up Boost ", value: "15%" }
                  ],
                  onConfigure: () => setActiveConfig("optimize")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProductCard,
                {
                  title: "Checkout Products",
                  description: "Reach 24 million potential customers a month with your product",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ShoppingBag,
                    {
                      className: cn("tw:h-6 tw:w-6 tw:text-purple-500")
                    }
                  ),
                  status: getCheckoutProductsStatus(),
                  buttonsDisabled,
                  metrics: [
                    { label: "Annual Orders", value: "3.6M+" },
                    { label: "Conversion Rate", value: "1-3%" },
                    { label: "Ad Impressions", value: "185M+" }
                  ],
                  onConfigure: () => setActiveConfig("checkoutProducts")
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
            notificationState && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Notification,
              {
                message: notificationState.message,
                type: notificationState.type
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ConfigurationDialog,
              {
                open: activeConfig === "voucherNetwork",
                onOpenChange: (open) => void handleSave(open),
                title: "Configure Voucher Network & Checkout Benefits",
                zoomedVersion,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SovendusVoucherNetwork,
                  {
                    currentSettings: currentSettings.voucherNetwork,
                    setCurrentSettings,
                    additionalSteps: additionalSteps == null ? void 0 : additionalSteps.voucherNetwork
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ConfigurationDialog,
              {
                open: activeConfig === "optimize",
                onOpenChange: (open) => void handleSave(open),
                title: "Configure Optimize",
                zoomedVersion,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SovendusOptimize,
                  {
                    currentOptimizeSettings: currentSettings.optimize,
                    savedOptimizeSettings: currentStoredSettings.optimize,
                    setCurrentSettings,
                    additionalSteps: additionalSteps == null ? void 0 : additionalSteps.optimize
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ConfigurationDialog,
              {
                open: activeConfig === "checkoutProducts",
                onOpenChange: (open) => void handleSave(open),
                title: "Configure Checkout Products",
                zoomedVersion,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SovendusCheckoutProducts,
                  {
                    enabled: currentSettings.checkoutProducts || false,
                    setCurrentSettings,
                    additionalSteps: additionalSteps == null ? void 0 : additionalSteps.checkoutProducts
                  }
                )
              }
            )
          ]
        }
      );
    }, [
      notificationState,
      zoomedVersion,
      activeConfig,
      currentSettings,
      additionalSteps,
      currentStoredSettings,
      saveSettings
    ]);
  }
  function useSettingsSaveOnLoad(saveSettings, currentStoredSettings, callSaveOnLoad) {
    reactExports.useEffect(() => {
      if (callSaveOnLoad) {
        void saveSettings(currentStoredSettings);
      }
    }, []);
  }
  var client = {};
  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client;
    hasRequiredClient = 1;
    var m = ReactDOM__default;
    {
      client.createRoot = m.createRoot;
      client.hydrateRoot = m.hydrateRoot;
    }
    return client;
  }
  requireClient();
  var Versions = /* @__PURE__ */ ((Versions2) => {
    Versions2["ONE"] = "1";
    Versions2["TWO"] = "2";
    Versions2["THREE"] = "3";
    return Versions2;
  })(Versions || {});
  const DEFAULT_SETTINGS = {
    version: Versions.THREE
    // Add other default settings here as needed
  };
  function loadSettingsUi() {
    try {
      loggerInfo("Initializing Sovendus settings UI");
      if (!window.sovendusSettings) {
        throw new Error(
          "window.sovendusSettings is not defined - make sure it's correctly initialized"
        );
      }
      const currentSettings = window.sovendusSettings.settings || DEFAULT_SETTINGS;
      const saveUrl = window.sovendusSettings.ajaxurl;
      if (!saveUrl) {
        throw new Error(
          "AJAX URL is not defined - make sure it's correctly initialized"
        );
      }
      const containerId = "sovendus-settings-container";
      const container = document.getElementById(containerId);
      if (!container) {
        throw new Error(
          `Container with id ${containerId} not found - make sure the container exists`
        );
      }
      const handleSettingsUpdate = (updatedSettings) => __async(this, null, function* () {
        try {
          const response = yield fetch(saveUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
              "X-CSRF-Token": window.sovendusSettings.nonce
            },
            body: JSON.stringify({ settings: updatedSettings })
          });
          if (!response.ok) {
            const errorText = yield response.text();
            throw new Error(errorText);
          }
          loggerInfo("Settings saved successfully");
          return updatedSettings;
        } catch (error) {
          loggerError("Save failed:", error);
          throw error;
        }
      });
      container.innerHTML = "";
      const root = clientExports.createRoot(container);
      loggerInfo("Rendering Sovendus settings form");
      root.render(
        React.createElement(SovendusBackendForm, {
          currentStoredSettings: currentSettings,
          saveSettings: handleSettingsUpdate,
          callSaveOnLoad: false
        })
      );
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      loggerError(`Failed to initialize settings UI: ${errorMessage}`);
      const container = document.getElementById("sovendus-settings-container");
      if (container) {
        container.innerHTML = `<div style="color: red; padding: 20px; border: 1px solid red; margin: 20px 0;">Error loading Sovendus settings: ${errorMessage}</div>`;
      }
    }
  }
  loadSettingsUi();
})();
//# sourceMappingURL=frontend_react_loader.js.map
