(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    r(i);
  new MutationObserver(i => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
  }
  ).observe(document, {
    childList: !0,
    subtree: !0
  });
  function n(i) {
    const o = {};
    return i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
      o
  }
  function r(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o)
  }
}
)();
var zf = {
  exports: {}
}
  , To = {}
  , Bf = {
    exports: {}
  }
  , j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr = Symbol.for("react.element")
  , Vm = Symbol.for("react.portal")
  , Dm = Symbol.for("react.fragment")
  , Lm = Symbol.for("react.strict_mode")
  , Rm = Symbol.for("react.profiler")
  , jm = Symbol.for("react.provider")
  , _m = Symbol.for("react.context")
  , Fm = Symbol.for("react.forward_ref")
  , Im = Symbol.for("react.suspense")
  , Om = Symbol.for("react.memo")
  , zm = Symbol.for("react.lazy")
  , pu = Symbol.iterator;
function Bm(e) {
  return e === null || typeof e != "object" ? null : (e = pu && e[pu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Uf = {
  isMounted: function () {
    return !1
  },
  enqueueForceUpdate: function () { },
  enqueueReplaceState: function () { },
  enqueueSetState: function () { }
}
  , $f = Object.assign
  , Wf = {};
function Gn(e, t, n) {
  this.props = e,
    this.context = t,
    this.refs = Wf,
    this.updater = n || Uf
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}
  ;
Gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
  ;
function Hf() { }
Hf.prototype = Gn.prototype;
function Wl(e, t, n) {
  this.props = e,
    this.context = t,
    this.refs = Wf,
    this.updater = n || Uf
}
var Hl = Wl.prototype = new Hf;
Hl.constructor = Wl;
$f(Hl, Gn.prototype);
Hl.isPureReactComponent = !0;
var mu = Array.isArray
  , Kf = Object.prototype.hasOwnProperty
  , Kl = {
    current: null
  }
  , bf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function Gf(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t)
      Kf.call(t, r) && !bf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1)
    i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++)
      a[u] = arguments[u + 2];
    i.children = a
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps,
      l)
      i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Xr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Kl.current
  }
}
function Um(e, t) {
  return {
    $$typeof: Xr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function bl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xr
}
function $m(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (n) {
    return t[n]
  })
}
var gu = /\/+/g;
function Wo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? $m("" + e.key) : t.toString(36)
}
function Ai(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null)
    s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xr:
          case Vm:
            s = !0
        }
    }
  if (s)
    return s = e,
      i = i(s),
      e = r === "" ? "." + Wo(s, 0) : r,
      mu(i) ? (n = "",
        e != null && (n = e.replace(gu, "$&/") + "/"),
        Ai(i, t, n, "", function (u) {
          return u
        })) : i != null && (bl(i) && (i = Um(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(gu, "$&/") + "/") + e)),
          t.push(i)),
      1;
  if (s = 0,
    r = r === "" ? "." : r + ":",
    mu(e))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Wo(o, l);
      s += Ai(o, t, n, a, i)
    }
  else if (a = Bm(e),
    typeof a == "function")
    for (e = a.call(e),
      l = 0; !(o = e.next()).done;)
      o = o.value,
        a = r + Wo(o, l++),
        s += Ai(o, t, n, a, i);
  else if (o === "object")
    throw t = String(e),
    Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s
}
function ui(e, t, n) {
  if (e == null)
    return e;
  var r = []
    , i = 0;
  return Ai(e, r, "", "", function (o) {
    return t.call(n, o, i++)
  }),
    r
}
function Wm(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(),
      t.then(function (n) {
        (e._status === 0 || e._status === -1) && (e._status = 1,
          e._result = n)
      }, function (n) {
        (e._status === 0 || e._status === -1) && (e._status = 2,
          e._result = n)
      }),
      e._status === -1 && (e._status = 0,
        e._result = t)
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result
}
var we = {
  current: null
}
  , Vi = {
    transition: null
  }
  , Hm = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Vi,
    ReactCurrentOwner: Kl
  };
function Qf() {
  throw Error("act(...) is not supported in production builds of React.")
}
j.Children = {
  map: ui,
  forEach: function (e, t, n) {
    ui(e, function () {
      t.apply(this, arguments)
    }, n)
  },
  count: function (e) {
    var t = 0;
    return ui(e, function () {
      t++
    }),
      t
  },
  toArray: function (e) {
    return ui(e, function (t) {
      return t
    }) || []
  },
  only: function (e) {
    if (!bl(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
j.Component = Gn;
j.Fragment = Dm;
j.Profiler = Rm;
j.PureComponent = Wl;
j.StrictMode = Lm;
j.Suspense = Im;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm;
j.act = Qf;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = $f({}, e.props)
    , i = e.key
    , o = e.ref
    , s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref,
      s = Kl.current),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (a in t)
      Kf.call(t, a) && !bf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
  }
  var a = arguments.length - 2;
  if (a === 1)
    r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++)
      l[u] = arguments[u + 2];
    r.children = l
  }
  return {
    $$typeof: Xr,
    type: e.type,
    key: i,
    ref: o,
    props: r,
    _owner: s
  }
}
  ;
j.createContext = function (e) {
  return e = {
    $$typeof: _m,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  },
    e.Provider = {
      $$typeof: jm,
      _context: e
    },
    e.Consumer = e
}
  ;
j.createElement = Gf;
j.createFactory = function (e) {
  var t = Gf.bind(null, e);
  return t.type = e,
    t
}
  ;
j.createRef = function () {
  return {
    current: null
  }
}
  ;
j.forwardRef = function (e) {
  return {
    $$typeof: Fm,
    render: e
  }
}
  ;
j.isValidElement = bl;
j.lazy = function (e) {
  return {
    $$typeof: zm,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: Wm
  }
}
  ;
j.memo = function (e, t) {
  return {
    $$typeof: Om,
    type: e,
    compare: t === void 0 ? null : t
  }
}
  ;
j.startTransition = function (e) {
  var t = Vi.transition;
  Vi.transition = {};
  try {
    e()
  } finally {
    Vi.transition = t
  }
}
  ;
j.unstable_act = Qf;
j.useCallback = function (e, t) {
  return we.current.useCallback(e, t)
}
  ;
j.useContext = function (e) {
  return we.current.useContext(e)
}
  ;
j.useDebugValue = function () { }
  ;
j.useDeferredValue = function (e) {
  return we.current.useDeferredValue(e)
}
  ;
j.useEffect = function (e, t) {
  return we.current.useEffect(e, t)
}
  ;
j.useId = function () {
  return we.current.useId()
}
  ;
j.useImperativeHandle = function (e, t, n) {
  return we.current.useImperativeHandle(e, t, n)
}
  ;
j.useInsertionEffect = function (e, t) {
  return we.current.useInsertionEffect(e, t)
}
  ;
j.useLayoutEffect = function (e, t) {
  return we.current.useLayoutEffect(e, t)
}
  ;
j.useMemo = function (e, t) {
  return we.current.useMemo(e, t)
}
  ;
j.useReducer = function (e, t, n) {
  return we.current.useReducer(e, t, n)
}
  ;
j.useRef = function (e) {
  return we.current.useRef(e)
}
  ;
j.useState = function (e) {
  return we.current.useState(e)
}
  ;
j.useSyncExternalStore = function (e, t, n) {
  return we.current.useSyncExternalStore(e, t, n)
}
  ;
j.useTransition = function () {
  return we.current.useTransition()
}
  ;
j.version = "18.3.1";
Bf.exports = j;
var L = Bf.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Km = L
  , bm = Symbol.for("react.element")
  , Gm = Symbol.for("react.fragment")
  , Qm = Object.prototype.hasOwnProperty
  , Ym = Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Xm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function Yf(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Qm.call(t, r) && !Xm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps,
      t)
      i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: bm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Ym.current
  }
}
To.Fragment = Gm;
To.jsx = Yf;
To.jsxs = Yf;
zf.exports = To;
var y = zf.exports
  , Xf = {
    exports: {}
  }
  , Le = {}
  , Zf = {
    exports: {}
  }
  , qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(N, A) {
    var R = N.length;
    N.push(A);
    e: for (; 0 < R;) {
      var H = R - 1 >>> 1
        , oe = N[H];
      if (0 < i(oe, A))
        N[H] = A,
          N[R] = oe,
          R = H;
      else
        break e
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0)
      return null;
    var A = N[0]
      , R = N.pop();
    if (R !== A) {
      N[0] = R;
      e: for (var H = 0, oe = N.length, li = oe >>> 1; H < li;) {
        var Ht = 2 * (H + 1) - 1
          , $o = N[Ht]
          , Kt = Ht + 1
          , ai = N[Kt];
        if (0 > i($o, R))
          Kt < oe && 0 > i(ai, $o) ? (N[H] = ai,
            N[Kt] = R,
            H = Kt) : (N[H] = $o,
              N[Ht] = R,
              H = Ht);
        else if (Kt < oe && 0 > i(ai, R))
          N[H] = ai,
            N[Kt] = R,
            H = Kt;
        else
          break e
      }
    }
    return A
  }
  function i(N, A) {
    var R = N.sortIndex - A.sortIndex;
    return R !== 0 ? R : N.id - A.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var s = Date
      , l = s.now();
    e.unstable_now = function () {
      return s.now() - l
    }
  }
  var a = []
    , u = []
    , c = 1
    , f = null
    , d = 3
    , g = !1
    , v = !1
    , x = !1
    , C = typeof setTimeout == "function" ? setTimeout : null
    , p = typeof clearTimeout == "function" ? clearTimeout : null
    , h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var A = n(u); A !== null;) {
      if (A.callback === null)
        r(u);
      else if (A.startTime <= N)
        r(u),
          A.sortIndex = A.expirationTime,
          t(a, A);
      else
        break;
      A = n(u)
    }
  }
  function w(N) {
    if (x = !1,
      m(N),
      !v)
      if (n(a) !== null)
        v = !0,
          si(S);
      else {
        var A = n(u);
        A !== null && Z(w, A.startTime - N)
      }
  }
  function S(N, A) {
    v = !1,
      x && (x = !1,
        p(T),
        T = -1),
      g = !0;
    var R = d;
    try {
      for (m(A),
        f = n(a); f !== null && (!(f.expirationTime > A) || N && !ie());) {
        var H = f.callback;
        if (typeof H == "function") {
          f.callback = null,
            d = f.priorityLevel;
          var oe = H(f.expirationTime <= A);
          A = e.unstable_now(),
            typeof oe == "function" ? f.callback = oe : f === n(a) && r(a),
            m(A)
        } else
          r(a);
        f = n(a)
      }
      if (f !== null)
        var li = !0;
      else {
        var Ht = n(u);
        Ht !== null && Z(w, Ht.startTime - A),
          li = !1
      }
      return li
    } finally {
      f = null,
        d = R,
        g = !1
    }
  }
  var P = !1
    , E = null
    , T = -1
    , _ = 5
    , V = -1;
  function ie() {
    return !(e.unstable_now() - V < _)
  }
  function vt() {
    if (E !== null) {
      var N = e.unstable_now();
      V = N;
      var A = !0;
      try {
        A = E(!0, N)
      } finally {
        A ? Wt() : (P = !1,
          E = null)
      }
    } else
      P = !1
  }
  var Wt;
  if (typeof h == "function")
    Wt = function () {
      h(vt)
    }
      ;
  else if (typeof MessageChannel < "u") {
    var Jn = new MessageChannel
      , oi = Jn.port2;
    Jn.port1.onmessage = vt,
      Wt = function () {
        oi.postMessage(null)
      }
  } else
    Wt = function () {
      C(vt, 0)
    }
      ;
  function si(N) {
    E = N,
      P || (P = !0,
        Wt())
  }
  function Z(N, A) {
    T = C(function () {
      N(e.unstable_now())
    }, A)
  }
  e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function (N) {
      N.callback = null
    }
    ,
    e.unstable_continueExecution = function () {
      v || g || (v = !0,
        si(S))
    }
    ,
    e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function () {
      return d
    }
    ,
    e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }
    ,
    e.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d
      }
      var R = d;
      d = A;
      try {
        return N()
      } finally {
        d = R
      }
    }
    ,
    e.unstable_pauseExecution = function () { }
    ,
    e.unstable_requestPaint = function () { }
    ,
    e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3
      }
      var R = d;
      d = N;
      try {
        return A()
      } finally {
        d = R
      }
    }
    ,
    e.unstable_scheduleCallback = function (N, A, R) {
      var H = e.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? H + R : H) : R = H,
      N) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3
      }
      return oe = R + oe,
        N = {
          id: c++,
          callback: A,
          priorityLevel: N,
          startTime: R,
          expirationTime: oe,
          sortIndex: -1
        },
        R > H ? (N.sortIndex = R,
          t(u, N),
          n(a) === null && N === n(u) && (x ? (p(T),
            T = -1) : x = !0,
            Z(w, R - H))) : (N.sortIndex = oe,
              t(a, N),
              v || g || (v = !0,
                si(S))),
        N
    }
    ,
    e.unstable_shouldYield = ie,
    e.unstable_wrapCallback = function (N) {
      var A = d;
      return function () {
        var R = d;
        d = A;
        try {
          return N.apply(this, arguments)
        } finally {
          d = R
        }
      }
    }
}
)(qf);
Zf.exports = qf;
var Zm = Zf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qm = L
  , De = Zm;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Jf = new Set
  , Nr = {};
function fn(e, t) {
  On(e, t),
    On(e + "Capture", t)
}
function On(e, t) {
  for (Nr[e] = t,
    e = 0; e < t.length; e++)
    Jf.add(t[e])
}
var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Vs = Object.prototype.hasOwnProperty
  , Jm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , yu = {}
  , vu = {};
function eg(e) {
  return Vs.call(vu, e) ? !0 : Vs.call(yu, e) ? !1 : Jm.test(e) ? vu[e] = !0 : (yu[e] = !0,
    !1)
}
function tg(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}
function ng(e, t, n, r) {
  if (t === null || typeof t > "u" || tg(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Se(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  fe[e] = new Se(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
  var t = e[0];
  fe[t] = new Se(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new Se(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
  fe[e] = new Se(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new Se(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Gl = /[\-:]([a-z])/g;
function Ql(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(Gl, Ql);
  fe[t] = new Se(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Gl, Ql);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gl, Ql);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
fe.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function Yl(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ng(t, n, i, r) && (n = null),
    r || i === null ? eg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
      r = i.attributeNamespace,
      n === null ? e.removeAttribute(t) : (i = i.type,
        n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var yt = qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ci = Symbol.for("react.element")
  , pn = Symbol.for("react.portal")
  , mn = Symbol.for("react.fragment")
  , Xl = Symbol.for("react.strict_mode")
  , Ds = Symbol.for("react.profiler")
  , ed = Symbol.for("react.provider")
  , td = Symbol.for("react.context")
  , Zl = Symbol.for("react.forward_ref")
  , Ls = Symbol.for("react.suspense")
  , Rs = Symbol.for("react.suspense_list")
  , ql = Symbol.for("react.memo")
  , St = Symbol.for("react.lazy")
  , nd = Symbol.for("react.offscreen")
  , xu = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object" ? null : (e = xu && e[xu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Q = Object.assign, Ho;
function ur(e) {
  if (Ho === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ho = t && t[1] || ""
    }
  return `
` + Ho + e
}
var Ko = !1;
function bo(e, t) {
  if (!e || Ko)
    return "";
  Ko = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function () {
        throw Error()
      }
        ,
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l];)
        l--;
      for (; 1 <= s && 0 <= l; s-- ,
        l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if (s-- ,
                l-- ,
                0 > l || i[s] !== o[l]) {
                var a = `
` + i[s].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                  a
              }
            while (1 <= s && 0 <= l);
          break
        }
    }
  } finally {
    Ko = !1,
      Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? ur(e) : ""
}
function rg(e) {
  switch (e.tag) {
    case 5:
      return ur(e.type);
    case 16:
      return ur("Lazy");
    case 13:
      return ur("Suspense");
    case 19:
      return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = bo(e.type, !1),
        e;
    case 11:
      return e = bo(e.type.render, !1),
        e;
    case 1:
      return e = bo(e.type, !0),
        e;
    default:
      return ""
  }
}
function js(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case mn:
      return "Fragment";
    case pn:
      return "Portal";
    case Ds:
      return "Profiler";
    case Xl:
      return "StrictMode";
    case Ls:
      return "Suspense";
    case Rs:
      return "SuspenseList"
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case td:
        return (e.displayName || "Context") + ".Consumer";
      case ed:
        return (e._context.displayName || "Context") + ".Provider";
      case Zl:
        var t = e.render;
        return e = e.displayName,
          e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
          e;
      case ql:
        return t = e.displayName || null,
          t !== null ? t : js(e.type) || "Memo";
      case St:
        t = e._payload,
          e = e._init;
        try {
          return js(e(t))
        } catch { }
    }
  return null
}
function ig(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return js(t);
    case 8:
      return t === Xl ? "StrictMode" : "Mode";
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
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t
  }
  return null
}
function _t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}
function rd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function og(e) {
  var t = rd(e) ? "checked" : "value"
    , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    , r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get
      , o = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function () {
        return i.call(this)
      },
      set: function (s) {
        r = "" + s,
          o.call(this, s)
      }
    }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }),
    {
      getValue: function () {
        return r
      },
      setValue: function (s) {
        r = "" + s
      },
      stopTracking: function () {
        e._valueTracker = null,
          delete e[t]
      }
    }
  }
}
function fi(e) {
  e._valueTracker || (e._valueTracker = og(e))
}
function id(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue()
    , r = "";
  return e && (r = rd(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
      !0) : !1
}
function Ki(e) {
  if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function _s(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function wu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue
    , r = t.checked != null ? t.checked : t.defaultChecked;
  n = _t(t.value != null ? t.value : n),
    e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function od(e, t) {
  t = t.checked,
    t != null && Yl(e, "checked", t, !1)
}
function Fs(e, t) {
  od(e, t);
  var n = _t(t.value)
    , r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? Is(e, t.type, n) : t.hasOwnProperty("defaultValue") && Is(e, t.type, _t(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Su(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue,
      n || t === e.value || (e.value = t),
      e.defaultValue = t
  }
  n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Is(e, t, n) {
  (t !== "number" || Ki(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var cr = Array.isArray;
function Dn(e, t, n, r) {
  if (e = e.options,
    t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + _t(n),
      t = null,
      i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0,
          r && (e[i].defaultSelected = !0);
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Os(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(k(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}
function ku(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children,
      t = t.defaultValue,
      n != null) {
      if (t != null)
        throw Error(k(92));
      if (cr(n)) {
        if (1 < n.length)
          throw Error(k(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""),
      n = t
  }
  e._wrapperState = {
    initialValue: _t(n)
  }
}
function sd(e, t) {
  var n = _t(t.value)
    , r = _t(t.defaultValue);
  n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Tu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ld(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function zs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ld(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var di, ad = function (e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function () {
      return e(t, n, r, i)
    })
  }
    : e
}(function (e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (di = di || document.createElement("div"),
      di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
      t = di.firstChild; e.firstChild;)
      e.removeChild(e.firstChild);
    for (; t.firstChild;)
      e.appendChild(t.firstChild)
  }
});
function Mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var pr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}
  , sg = ["Webkit", "ms", "Moz", "O"];
Object.keys(pr).forEach(function (e) {
  sg.forEach(function (t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1),
      pr[t] = pr[e]
  })
});
function ud(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || pr.hasOwnProperty(e) && pr[e] ? ("" + t).trim() : t + "px"
}
function cd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0
        , i = ud(n, t[n], r);
      n === "float" && (n = "cssFloat"),
        r ? e.setProperty(n, i) : e[n] = i
    }
}
var lg = Q({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
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
});
function Bs(e, t) {
  if (t) {
    if (lg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(k(61))
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(k(62))
  }
}
function Us(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var $s = null;
function Jl(e) {
  return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ws = null
  , Ln = null
  , Rn = null;
function Pu(e) {
  if (e = Jr(e)) {
    if (typeof Ws != "function")
      throw Error(k(280));
    var t = e.stateNode;
    t && (t = Mo(t),
      Ws(e.stateNode, e.type, t))
  }
}
function fd(e) {
  Ln ? Rn ? Rn.push(e) : Rn = [e] : Ln = e
}
function dd() {
  if (Ln) {
    var e = Ln
      , t = Rn;
    if (Rn = Ln = null,
      Pu(e),
      t)
      for (e = 0; e < t.length; e++)
        Pu(t[e])
  }
}
function hd(e, t) {
  return e(t)
}
function pd() { }
var Go = !1;
function md(e, t, n) {
  if (Go)
    return e(t, n);
  Go = !0;
  try {
    return hd(e, t, n)
  } finally {
    Go = !1,
      (Ln !== null || Rn !== null) && (pd(),
        dd())
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Mo(n);
  if (r === null)
    return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
      break e;
    default:
      e = !1
  }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(k(231, t, typeof n));
  return n
}
var Hs = !1;
if (ft)
  try {
    var tr = {};
    Object.defineProperty(tr, "passive", {
      get: function () {
        Hs = !0
      }
    }),
      window.addEventListener("test", tr, tr),
      window.removeEventListener("test", tr, tr)
  } catch {
    Hs = !1
  }
function ag(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var mr = !1
  , bi = null
  , Gi = !1
  , Ks = null
  , ug = {
    onError: function (e) {
      mr = !0,
        bi = e
    }
  };
function cg(e, t, n, r, i, o, s, l, a) {
  mr = !1,
    bi = null,
    ag.apply(ug, arguments)
}
function fg(e, t, n, r, i, o, s, l, a) {
  if (cg.apply(this, arguments),
    mr) {
    if (mr) {
      var u = bi;
      mr = !1,
        bi = null
    } else
      throw Error(k(198));
    Gi || (Gi = !0,
      Ks = u)
  }
}
function dn(e) {
  var t = e
    , n = e;
  if (e.alternate)
    for (; t.return;)
      t = t.return;
  else {
    e = t;
    do
      t = e,
        t.flags & 4098 && (n = t.return),
        e = t.return;
    while (e)
  }
  return t.tag === 3 ? n : null
}
function gd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate,
      e !== null && (t = e.memoizedState)),
      t !== null)
      return t.dehydrated
  }
  return null
}
function Cu(e) {
  if (dn(e) !== e)
    throw Error(k(188))
}
function dg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = dn(e),
      t === null)
      throw Error(k(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t; ;) {
    var i = n.return;
    if (i === null)
      break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return,
        r !== null) {
        n = r;
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o;) {
        if (o === n)
          return Cu(i),
            e;
        if (o === r)
          return Cu(i),
            t;
        o = o.sibling
      }
      throw Error(k(188))
    }
    if (n.return !== r.return)
      n = i,
        r = o;
    else {
      for (var s = !1, l = i.child; l;) {
        if (l === n) {
          s = !0,
            n = i,
            r = o;
          break
        }
        if (l === r) {
          s = !0,
            r = i,
            n = o;
          break
        }
        l = l.sibling
      }
      if (!s) {
        for (l = o.child; l;) {
          if (l === n) {
            s = !0,
              n = o,
              r = i;
            break
          }
          if (l === r) {
            s = !0,
              r = o,
              n = i;
            break
          }
          l = l.sibling
        }
        if (!s)
          throw Error(k(189))
      }
    }
    if (n.alternate !== r)
      throw Error(k(190))
  }
  if (n.tag !== 3)
    throw Error(k(188));
  return n.stateNode.current === n ? e : t
}
function yd(e) {
  return e = dg(e),
    e !== null ? vd(e) : null
}
function vd(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null;) {
    var t = vd(e);
    if (t !== null)
      return t;
    e = e.sibling
  }
  return null
}
var xd = De.unstable_scheduleCallback
  , Eu = De.unstable_cancelCallback
  , hg = De.unstable_shouldYield
  , pg = De.unstable_requestPaint
  , q = De.unstable_now
  , mg = De.unstable_getCurrentPriorityLevel
  , ea = De.unstable_ImmediatePriority
  , wd = De.unstable_UserBlockingPriority
  , Qi = De.unstable_NormalPriority
  , gg = De.unstable_LowPriority
  , Sd = De.unstable_IdlePriority
  , Po = null
  , nt = null;
function yg(e) {
  if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
      nt.onCommitFiberRoot(Po, e, void 0, (e.current.flags & 128) === 128)
    } catch { }
}
var Ye = Math.clz32 ? Math.clz32 : wg
  , vg = Math.log
  , xg = Math.LN2;
function wg(e) {
  return e >>>= 0,
    e === 0 ? 32 : 31 - (vg(e) / xg | 0) | 0
}
var hi = 64
  , pi = 4194304;
function fr(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}
function Yi(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0
    , i = e.suspendedLanes
    , o = e.pingedLanes
    , s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? r = fr(l) : (o &= s,
      o !== 0 && (r = fr(o)))
  } else
    s = n & ~i,
      s !== 0 ? r = fr(s) : o !== 0 && (r = fr(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
    for (e = e.entanglements,
      t &= r; 0 < t;)
      n = 31 - Ye(t),
        i = 1 << n,
        r |= e[n],
        t &= ~i;
  return r
}
function Sg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
      return -1
  }
}
function kg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
    var s = 31 - Ye(o)
      , l = 1 << s
      , a = i[s];
    a === -1 ? (!(l & n) || l & r) && (i[s] = Sg(l, t)) : a <= t && (e.expiredLanes |= l),
      o &= ~l
  }
}
function bs(e) {
  return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function kd() {
  var e = hi;
  return hi <<= 1,
    !(hi & 4194240) && (hi = 64),
    e
}
function Qo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t
}
function Zr(e, t, n) {
  e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
      e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ye(t),
    e[t] = n
}
function Tg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - Ye(n)
      , o = 1 << i;
    t[i] = 0,
      r[i] = -1,
      e[i] = -1,
      n &= ~o
  }
}
function ta(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - Ye(n)
      , i = 1 << r;
    i & t | e[r] & t && (e[r] |= t),
      n &= ~i
  }
}
var I = 0;
function Td(e) {
  return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Pd, na, Cd, Ed, Nd, Gs = !1, mi = [], Nt = null, Mt = null, At = null, Vr = new Map, Dr = new Map, Tt = [], Pg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Nu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      Vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dr.delete(t.pointerId)
  }
}
function nr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: o,
    targetContainers: [i]
  },
    t !== null && (t = Jr(t),
      t !== null && na(t)),
    e) : (e.eventSystemFlags |= r,
      t = e.targetContainers,
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function Cg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Nt = nr(Nt, e, t, n, r, i),
        !0;
    case "dragenter":
      return Mt = nr(Mt, e, t, n, r, i),
        !0;
    case "mouseover":
      return At = nr(At, e, t, n, r, i),
        !0;
    case "pointerover":
      var o = i.pointerId;
      return Vr.set(o, nr(Vr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
      return o = i.pointerId,
        Dr.set(o, nr(Dr.get(o) || null, e, t, n, r, i)),
        !0
  }
  return !1
}
function Md(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (t = n.tag,
        t === 13) {
        if (t = gd(n),
          t !== null) {
          e.blockedOn = t,
            Nd(e.priority, function () {
              Cd(n)
            });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}
function Di(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = Qs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      $s = r,
        n.target.dispatchEvent(r),
        $s = null
    } else
      return t = Jr(n),
        t !== null && na(t),
        e.blockedOn = n,
        !1;
    t.shift()
  }
  return !0
}
function Mu(e, t, n) {
  Di(e) && n.delete(t)
}
function Eg() {
  Gs = !1,
    Nt !== null && Di(Nt) && (Nt = null),
    Mt !== null && Di(Mt) && (Mt = null),
    At !== null && Di(At) && (At = null),
    Vr.forEach(Mu),
    Dr.forEach(Mu)
}
function rr(e, t) {
  e.blockedOn === t && (e.blockedOn = null,
    Gs || (Gs = !0,
      De.unstable_scheduleCallback(De.unstable_NormalPriority, Eg)))
}
function Lr(e) {
  function t(i) {
    return rr(i, e)
  }
  if (0 < mi.length) {
    rr(mi[0], e);
    for (var n = 1; n < mi.length; n++) {
      var r = mi[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (Nt !== null && rr(Nt, e),
    Mt !== null && rr(Mt, e),
    At !== null && rr(At, e),
    Vr.forEach(t),
    Dr.forEach(t),
    n = 0; n < Tt.length; n++)
    r = Tt[n],
      r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0],
    n.blockedOn === null);)
    Md(n),
      n.blockedOn === null && Tt.shift()
}
var jn = yt.ReactCurrentBatchConfig
  , Xi = !0;
function Ng(e, t, n, r) {
  var i = I
    , o = jn.transition;
  jn.transition = null;
  try {
    I = 1,
      ra(e, t, n, r)
  } finally {
    I = i,
      jn.transition = o
  }
}
function Mg(e, t, n, r) {
  var i = I
    , o = jn.transition;
  jn.transition = null;
  try {
    I = 4,
      ra(e, t, n, r)
  } finally {
    I = i,
      jn.transition = o
  }
}
function ra(e, t, n, r) {
  if (Xi) {
    var i = Qs(e, t, n, r);
    if (i === null)
      is(e, t, r, Zi, n),
        Nu(e, r);
    else if (Cg(i, e, t, n, r))
      r.stopPropagation();
    else if (Nu(e, r),
      t & 4 && -1 < Pg.indexOf(e)) {
      for (; i !== null;) {
        var o = Jr(i);
        if (o !== null && Pd(o),
          o = Qs(e, t, n, r),
          o === null && is(e, t, r, Zi, n),
          o === i)
          break;
        i = o
      }
      i !== null && r.stopPropagation()
    } else
      is(e, t, r, null, n)
  }
}
var Zi = null;
function Qs(e, t, n, r) {
  if (Zi = null,
    e = Jl(r),
    e = Xt(e),
    e !== null)
    if (t = dn(e),
      t === null)
      e = null;
    else if (n = t.tag,
      n === 13) {
      if (e = gd(t),
        e !== null)
        return e;
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null
    } else
      t !== e && (e = null);
  return Zi = e,
    null
}
function Ad(e) {
  switch (e) {
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
      switch (mg()) {
        case ea:
          return 1;
        case wd:
          return 4;
        case Qi:
        case gg:
          return 16;
        case Sd:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var Ct = null
  , ia = null
  , Li = null;
function Vd() {
  if (Li)
    return Li;
  var e, t = ia, n = t.length, r, i = "value" in Ct ? Ct.value : Ct.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
    ;
  return Li = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Ri(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function gi() {
  return !0
}
function Au() {
  return !1
}
function Re(e) {
  function t(n, r, i, o, s) {
    this._reactName = n,
      this._targetInst = i,
      this.type = r,
      this.nativeEvent = o,
      this.target = s,
      this.currentTarget = null;
    for (var l in e)
      e.hasOwnProperty(l) && (n = e[l],
        this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? gi : Au,
      this.isPropagationStopped = Au,
      this
  }
  return Q(t.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
        this.isDefaultPrevented = gi)
    },
    stopPropagation: function () {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
        this.isPropagationStopped = gi)
    },
    persist: function () { },
    isPersistent: gi
  }),
    t
}
var Qn = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (e) {
    return e.timeStamp || Date.now()
  },
  defaultPrevented: 0,
  isTrusted: 0
}, oa = Re(Qn), qr = Q({}, Qn, {
  view: 0,
  detail: 0
}), Ag = Re(qr), Yo, Xo, ir, Co = Q({}, qr, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: sa,
  button: 0,
  buttons: 0,
  relatedTarget: function (e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
  },
  movementX: function (e) {
    return "movementX" in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (Yo = e.screenX - ir.screenX,
      Xo = e.screenY - ir.screenY) : Xo = Yo = 0,
      ir = e),
      Yo)
  },
  movementY: function (e) {
    return "movementY" in e ? e.movementY : Xo
  }
}), Vu = Re(Co), Vg = Q({}, Co, {
  dataTransfer: 0
}), Dg = Re(Vg), Lg = Q({}, qr, {
  relatedTarget: 0
}), Zo = Re(Lg), Rg = Q({}, Qn, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), jg = Re(Rg), _g = Q({}, Qn, {
  clipboardData: function (e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData
  }
}), Fg = Re(_g), Ig = Q({}, Qn, {
  data: 0
}), Du = Re(Ig), Og = {
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
}, zg = {
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
}, Bg = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function Ug(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Bg[e]) ? !!t[e] : !1
}
function sa() {
  return Ug
}
var $g = Q({}, qr, {
  key: function (e) {
    if (e.key) {
      var t = Og[e.key] || e.key;
      if (t !== "Unidentified")
        return t
    }
    return e.type === "keypress" ? (e = Ri(e),
      e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zg[e.keyCode] || "Unidentified" : ""
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: sa,
  charCode: function (e) {
    return e.type === "keypress" ? Ri(e) : 0
  },
  keyCode: function (e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  },
  which: function (e) {
    return e.type === "keypress" ? Ri(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  }
})
  , Wg = Re($g)
  , Hg = Q({}, Co, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  })
  , Lu = Re(Hg)
  , Kg = Q({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sa
  })
  , bg = Re(Kg)
  , Gg = Q({}, Qn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })
  , Qg = Re(Gg)
  , Yg = Q({}, Co, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  })
  , Xg = Re(Yg)
  , Zg = [9, 13, 27, 32]
  , la = ft && "CompositionEvent" in window
  , gr = null;
ft && "documentMode" in document && (gr = document.documentMode);
var qg = ft && "TextEvent" in window && !gr
  , Dd = ft && (!la || gr && 8 < gr && 11 >= gr)
  , Ru = " "
  , ju = !1;
function Ld(e, t) {
  switch (e) {
    case "keyup":
      return Zg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}
function Rd(e) {
  return e = e.detail,
    typeof e == "object" && "data" in e ? e.data : null
}
var gn = !1;
function Jg(e, t) {
  switch (e) {
    case "compositionend":
      return Rd(t);
    case "keypress":
      return t.which !== 32 ? null : (ju = !0,
        Ru);
    case "textInput":
      return e = t.data,
        e === Ru && ju ? null : e;
    default:
      return null
  }
}
function ey(e, t) {
  if (gn)
    return e === "compositionend" || !la && Ld(e, t) ? (e = Vd(),
      Li = ia = Ct = null,
      gn = !1,
      e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return Dd && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var ty = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ty[e.type] : t === "textarea"
}
function jd(e, t, n, r) {
  fd(r),
    t = qi(t, "onChange"),
    0 < t.length && (n = new oa("onChange", "change", null, n, r),
      e.push({
        event: n,
        listeners: t
      }))
}
var yr = null
  , Rr = null;
function ny(e) {
  Kd(e, 0)
}
function Eo(e) {
  var t = xn(e);
  if (id(t))
    return e
}
function ry(e, t) {
  if (e === "change")
    return t
}
var _d = !1;
if (ft) {
  var qo;
  if (ft) {
    var Jo = "oninput" in document;
    if (!Jo) {
      var Fu = document.createElement("div");
      Fu.setAttribute("oninput", "return;"),
        Jo = typeof Fu.oninput == "function"
    }
    qo = Jo
  } else
    qo = !1;
  _d = qo && (!document.documentMode || 9 < document.documentMode)
}
function Iu() {
  yr && (yr.detachEvent("onpropertychange", Fd),
    Rr = yr = null)
}
function Fd(e) {
  if (e.propertyName === "value" && Eo(Rr)) {
    var t = [];
    jd(t, Rr, e, Jl(e)),
      md(ny, t)
  }
}
function iy(e, t, n) {
  e === "focusin" ? (Iu(),
    yr = t,
    Rr = n,
    yr.attachEvent("onpropertychange", Fd)) : e === "focusout" && Iu()
}
function oy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Eo(Rr)
}
function sy(e, t) {
  if (e === "click")
    return Eo(t)
}
function ly(e, t) {
  if (e === "input" || e === "change")
    return Eo(t)
}
function ay(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ze = typeof Object.is == "function" ? Object.is : ay;
function jr(e, t) {
  if (Ze(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e)
    , r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Vs.call(t, i) || !Ze(e[i], t[i]))
      return !1
  }
  return !0
}
function Ou(e) {
  for (; e && e.firstChild;)
    e = e.firstChild;
  return e
}
function zu(e, t) {
  var n = Ou(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length,
        e <= t && r >= t)
        return {
          node: n,
          offset: t - e
        };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Ou(n)
  }
}
function Id(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Id(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Od() {
  for (var e = window, t = Ki(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Ki(e.document)
  }
  return t
}
function aa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function uy(e) {
  var t = Od()
    , n = e.focusedElem
    , r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Id(n.ownerDocument.documentElement, n)) {
    if (r !== null && aa(n)) {
      if (t = r.start,
        e = r.end,
        e === void 0 && (e = t),
        "selectionStart" in n)
        n.selectionStart = t,
          n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
        e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length
          , o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i),
          !e.extend && o > r && (i = r,
            r = o,
            o = i),
          i = zu(n, o);
        var s = zu(n, r);
        i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r ? (e.addRange(t),
            e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
              e.addRange(t)))
      }
    }
    for (t = [],
      e = n; e = e.parentNode;)
      e.nodeType === 1 && t.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
    for (typeof n.focus == "function" && n.focus(),
      n = 0; n < t.length; n++)
      e = t[n],
        e.element.scrollLeft = e.left,
        e.element.scrollTop = e.top
  }
}
var cy = ft && "documentMode" in document && 11 >= document.documentMode
  , yn = null
  , Ys = null
  , vr = null
  , Xs = !1;
function Bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xs || yn == null || yn !== Ki(r) || (r = yn,
    "selectionStart" in r && aa(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
      r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      }),
    vr && jr(vr, r) || (vr = r,
      r = qi(Ys, "onSelect"),
      0 < r.length && (t = new oa("onSelect", "select", null, t, n),
        e.push({
          event: t,
          listeners: r
        }),
        t.target = yn)))
}
function yi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var vn = {
  animationend: yi("Animation", "AnimationEnd"),
  animationiteration: yi("Animation", "AnimationIteration"),
  animationstart: yi("Animation", "AnimationStart"),
  transitionend: yi("Transition", "TransitionEnd")
}
  , es = {}
  , zd = {};
ft && (zd = document.createElement("div").style,
  "AnimationEvent" in window || (delete vn.animationend.animation,
    delete vn.animationiteration.animation,
    delete vn.animationstart.animation),
  "TransitionEvent" in window || delete vn.transitionend.transition);
function No(e) {
  if (es[e])
    return es[e];
  if (!vn[e])
    return e;
  var t = vn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in zd)
      return es[e] = t[n];
  return e
}
var Bd = No("animationend")
  , Ud = No("animationiteration")
  , $d = No("animationstart")
  , Wd = No("transitionend")
  , Hd = new Map
  , Uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zt(e, t) {
  Hd.set(e, t),
    fn(t, [e])
}
for (var ts = 0; ts < Uu.length; ts++) {
  var ns = Uu[ts]
    , fy = ns.toLowerCase()
    , dy = ns[0].toUpperCase() + ns.slice(1);
  zt(fy, "on" + dy)
}
zt(Bd, "onAnimationEnd");
zt(Ud, "onAnimationIteration");
zt($d, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Wd, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function $u(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n,
    fg(r, t, void 0, e),
    e.currentTarget = null
}
function Kd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n]
      , i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s]
            , a = l.instance
            , u = l.currentTarget;
          if (l = l.listener,
            a !== o && i.isPropagationStopped())
            break e;
          $u(i, l, u),
            o = a
        }
      else
        for (s = 0; s < r.length; s++) {
          if (l = r[s],
            a = l.instance,
            u = l.currentTarget,
            l = l.listener,
            a !== o && i.isPropagationStopped())
            break e;
          $u(i, l, u),
            o = a
        }
    }
  }
  if (Gi)
    throw e = Ks,
    Gi = !1,
    Ks = null,
    e
}
function z(e, t) {
  var n = t[tl];
  n === void 0 && (n = t[tl] = new Set);
  var r = e + "__bubble";
  n.has(r) || (bd(t, e, 2, !1),
    n.add(r))
}
function rs(e, t, n) {
  var r = 0;
  t && (r |= 4),
    bd(n, e, r, t)
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[vi]) {
    e[vi] = !0,
      Jf.forEach(function (n) {
        n !== "selectionchange" && (hy.has(n) || rs(n, !1, e),
          rs(n, !0, e))
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vi] || (t[vi] = !0,
      rs("selectionchange", !1, t))
  }
}
function bd(e, t, n, r) {
  switch (Ad(t)) {
    case 1:
      var i = Ng;
      break;
    case 4:
      i = Mg;
      break;
    default:
      i = ra
  }
  n = i.bind(null, t, n, e),
    i = void 0,
    !Hs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1)
}
function is(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (; ;) {
      if (r === null)
        return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || l.nodeType === 8 && l.parentNode === i)
          break;
        if (s === 4)
          for (s = r.return; s !== null;) {
            var a = s.tag;
            if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
              a === i || a.nodeType === 8 && a.parentNode === i))
              return;
            s = s.return
          }
        for (; l !== null;) {
          if (s = Xt(l),
            s === null)
            return;
          if (a = s.tag,
            a === 5 || a === 6) {
            r = o = s;
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  md(function () {
    var u = o
      , c = Jl(n)
      , f = [];
    e: {
      var d = Hd.get(e);
      if (d !== void 0) {
        var g = oa
          , v = e;
        switch (e) {
          case "keypress":
            if (Ri(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = Wg;
            break;
          case "focusin":
            v = "focus",
              g = Zo;
            break;
          case "focusout":
            v = "blur",
              g = Zo;
            break;
          case "beforeblur":
          case "afterblur":
            g = Zo;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Dg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = bg;
            break;
          case Bd:
          case Ud:
          case $d:
            g = jg;
            break;
          case Wd:
            g = Qg;
            break;
          case "scroll":
            g = Ag;
            break;
          case "wheel":
            g = Xg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Fg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Lu
        }
        var x = (t & 4) !== 0
          , C = !x && e === "scroll"
          , p = x ? d !== null ? d + "Capture" : null : d;
        x = [];
        for (var h = u, m; h !== null;) {
          m = h;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w,
            p !== null && (w = Ar(h, p),
              w != null && x.push(Fr(h, w, m)))),
            C)
            break;
          h = h.return
        }
        0 < x.length && (d = new g(d, v, null, n, c),
          f.push({
            event: d,
            listeners: x
          }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover",
          g = e === "mouseout" || e === "pointerout",
          d && n !== $s && (v = n.relatedTarget || n.fromElement) && (Xt(v) || v[dt]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
          g ? (v = n.relatedTarget || n.toElement,
            g = u,
            v = v ? Xt(v) : null,
            v !== null && (C = dn(v),
              v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null,
                v = u),
          g !== v)) {
          if (x = Vu,
            w = "onMouseLeave",
            p = "onMouseEnter",
            h = "mouse",
            (e === "pointerout" || e === "pointerover") && (x = Lu,
              w = "onPointerLeave",
              p = "onPointerEnter",
              h = "pointer"),
            C = g == null ? d : xn(g),
            m = v == null ? d : xn(v),
            d = new x(w, h + "leave", g, n, c),
            d.target = C,
            d.relatedTarget = m,
            w = null,
            Xt(c) === u && (x = new x(p, h + "enter", v, n, c),
              x.target = m,
              x.relatedTarget = C,
              w = x),
            C = w,
            g && v)
            t: {
              for (x = g,
                p = v,
                h = 0,
                m = x; m; m = hn(m))
                h++;
              for (m = 0,
                w = p; w; w = hn(w))
                m++;
              for (; 0 < h - m;)
                x = hn(x),
                  h--;
              for (; 0 < m - h;)
                p = hn(p),
                  m--;
              for (; h--;) {
                if (x === p || p !== null && x === p.alternate)
                  break t;
                x = hn(x),
                  p = hn(p)
              }
              x = null
            }
          else
            x = null;
          g !== null && Wu(f, d, g, x, !1),
            v !== null && C !== null && Wu(f, C, v, x, !0)
        }
      }
      e: {
        if (d = u ? xn(u) : window,
          g = d.nodeName && d.nodeName.toLowerCase(),
          g === "select" || g === "input" && d.type === "file")
          var S = ry;
        else if (_u(d))
          if (_d)
            S = ly;
          else {
            S = oy;
            var P = iy
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = sy);
        if (S && (S = S(e, u))) {
          jd(f, S, n, c);
          break e
        }
        P && P(e, d, u),
          e === "focusout" && (P = d._wrapperState) && P.controlled && d.type === "number" && Is(d, "number", d.value)
      }
      switch (P = u ? xn(u) : window,
      e) {
        case "focusin":
          (_u(P) || P.contentEditable === "true") && (yn = P,
            Ys = u,
            vr = null);
          break;
        case "focusout":
          vr = Ys = yn = null;
          break;
        case "mousedown":
          Xs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xs = !1,
            Bu(f, n, c);
          break;
        case "selectionchange":
          if (cy)
            break;
        case "keydown":
        case "keyup":
          Bu(f, n, c)
      }
      var E;
      if (la)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e
          }
          T = void 0
        }
      else
        gn ? Ld(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Dd && n.locale !== "ko" && (gn || T !== "onCompositionStart" ? T === "onCompositionEnd" && gn && (E = Vd()) : (Ct = c,
        ia = "value" in Ct ? Ct.value : Ct.textContent,
        gn = !0)),
        P = qi(u, T),
        0 < P.length && (T = new Du(T, e, null, n, c),
          f.push({
            event: T,
            listeners: P
          }),
          E ? T.data = E : (E = Rd(n),
            E !== null && (T.data = E)))),
        (E = qg ? Jg(e, n) : ey(e, n)) && (u = qi(u, "onBeforeInput"),
          0 < u.length && (c = new Du("onBeforeInput", "beforeinput", null, n, c),
            f.push({
              event: c,
              listeners: u
            }),
            c.data = E))
    }
    Kd(f, t)
  })
}
function Fr(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}
function qi(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var i = e
      , o = i.stateNode;
    i.tag === 5 && o !== null && (i = o,
      o = Ar(e, n),
      o != null && r.unshift(Fr(e, o, i)),
      o = Ar(e, t),
      o != null && r.push(Fr(e, o, i))),
      e = e.return
  }
  return r
}
function hn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null
}
function Wu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r;) {
    var l = n
      , a = l.alternate
      , u = l.stateNode;
    if (a !== null && a === r)
      break;
    l.tag === 5 && u !== null && (l = u,
      i ? (a = Ar(n, o),
        a != null && s.unshift(Fr(n, a, l))) : i || (a = Ar(n, o),
          a != null && s.push(Fr(n, a, l)))),
      n = n.return
  }
  s.length !== 0 && e.push({
    event: t,
    listeners: s
  })
}
var py = /\r\n?/g
  , my = /\u0000|\uFFFD/g;
function Hu(e) {
  return (typeof e == "string" ? e : "" + e).replace(py, `
`).replace(my, "")
}
function xi(e, t, n) {
  if (t = Hu(t),
    Hu(e) !== t && n)
    throw Error(k(425))
}
function Ji() { }
var Zs = null
  , qs = null;
function Js(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var el = typeof setTimeout == "function" ? setTimeout : void 0
  , gy = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Ku = typeof Promise == "function" ? Promise : void 0
  , yy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ku < "u" ? function (e) {
    return Ku.resolve(null).then(e).catch(vy)
  }
    : el;
function vy(e) {
  setTimeout(function () {
    throw e
  })
}
function os(e, t) {
  var n = t
    , r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n),
      i && i.nodeType === 8)
      if (n = i.data,
        n === "/$") {
        if (r === 0) {
          e.removeChild(i),
            Lr(t);
          return
        }
        r--
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i
  } while (n);
  Lr(t)
}
function Vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data,
        t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null
    }
  }
  return e
}
function bu(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--
      } else
        n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var Yn = Math.random().toString(36).slice(2)
  , tt = "__reactFiber$" + Yn
  , Ir = "__reactProps$" + Yn
  , dt = "__reactContainer$" + Yn
  , tl = "__reactEvents$" + Yn
  , xy = "__reactListeners$" + Yn
  , wy = "__reactHandles$" + Yn;
function Xt(e) {
  var t = e[tt];
  if (t)
    return t;
  for (var n = e.parentNode; n;) {
    if (t = n[dt] || n[tt]) {
      if (n = t.alternate,
        t.child !== null || n !== null && n.child !== null)
        for (e = bu(e); e !== null;) {
          if (n = e[tt])
            return n;
          e = bu(e)
        }
      return t
    }
    e = n,
      n = e.parentNode
  }
  return null
}
function Jr(e) {
  return e = e[tt] || e[dt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(k(33))
}
function Mo(e) {
  return e[Ir] || null
}
var nl = []
  , wn = -1;
function Bt(e) {
  return {
    current: e
  }
}
function B(e) {
  0 > wn || (e.current = nl[wn],
    nl[wn] = null,
    wn--)
}
function O(e, t) {
  wn++ ,
    nl[wn] = e.current,
    e.current = t
}
var Ft = {}
  , ge = Bt(Ft)
  , Ce = Bt(!1)
  , sn = Ft;
function zn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = t[o];
  return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ee(e) {
  return e = e.childContextTypes,
    e != null
}
function eo() {
  B(Ce),
    B(ge)
}
function Gu(e, t, n) {
  if (ge.current !== Ft)
    throw Error(k(168));
  O(ge, t),
    O(Ce, n)
}
function Gd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(k(108, ig(e) || "Unknown", i));
  return Q({}, n, r)
}
function to(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft,
    sn = ge.current,
    O(ge, e),
    O(Ce, Ce.current),
    !0
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(k(169));
  n ? (e = Gd(e, t, sn),
    r.__reactInternalMemoizedMergedChildContext = e,
    B(Ce),
    B(ge),
    O(ge, e)) : B(Ce),
    O(Ce, n)
}
var lt = null
  , Ao = !1
  , ss = !1;
function Qd(e) {
  lt === null ? lt = [e] : lt.push(e)
}
function Sy(e) {
  Ao = !0,
    Qd(e)
}
function Ut() {
  if (!ss && lt !== null) {
    ss = !0;
    var e = 0
      , t = I;
    try {
      var n = lt;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null)
      }
      lt = null,
        Ao = !1
    } catch (i) {
      throw lt !== null && (lt = lt.slice(e + 1)),
      xd(ea, Ut),
      i
    } finally {
      I = t,
        ss = !1
    }
  }
  return null
}
var Sn = []
  , kn = 0
  , no = null
  , ro = 0
  , _e = []
  , Fe = 0
  , ln = null
  , at = 1
  , ut = "";
function Gt(e, t) {
  Sn[kn++] = ro,
    Sn[kn++] = no,
    no = e,
    ro = t
}
function Yd(e, t, n) {
  _e[Fe++] = at,
    _e[Fe++] = ut,
    _e[Fe++] = ln,
    ln = e;
  var r = at;
  e = ut;
  var i = 32 - Ye(r) - 1;
  r &= ~(1 << i),
    n += 1;
  var o = 32 - Ye(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32),
      r >>= s,
      i -= s,
      at = 1 << 32 - Ye(t) + i | n << i | r,
      ut = o + e
  } else
    at = 1 << o | n << i | r,
      ut = e
}
function ua(e) {
  e.return !== null && (Gt(e, 1),
    Yd(e, 1, 0))
}
function ca(e) {
  for (; e === no;)
    no = Sn[--kn],
      Sn[kn] = null,
      ro = Sn[--kn],
      Sn[kn] = null;
  for (; e === ln;)
    ln = _e[--Fe],
      _e[Fe] = null,
      ut = _e[--Fe],
      _e[Fe] = null,
      at = _e[--Fe],
      _e[Fe] = null
}
var Ve = null
  , Ae = null
  , $ = !1
  , Qe = null;
function Xd(e, t) {
  var n = Ie(5, null, null, 0);
  n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
      e.flags |= 16) : t.push(n)
}
function Yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
          Ve = e,
          Ae = Vt(t.firstChild),
          !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
          Ve = e,
          Ae = null,
          !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = ln !== null ? {
          id: at,
          overflow: ut
        } : null,
          e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
          },
          n = Ie(18, null, null, 0),
          n.stateNode = t,
          n.return = e,
          e.child = n,
          Ve = e,
          Ae = null,
          !0) : !1;
    default:
      return !1
  }
}
function rl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function il(e) {
  if ($) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Yu(e, t)) {
        if (rl(e))
          throw Error(k(418));
        t = Vt(n.nextSibling);
        var r = Ve;
        t && Yu(e, t) ? Xd(r, n) : (e.flags = e.flags & -4097 | 2,
          $ = !1,
          Ve = e)
      }
    } else {
      if (rl(e))
        throw Error(k(418));
      e.flags = e.flags & -4097 | 2,
        $ = !1,
        Ve = e
    }
  }
}
function Xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  Ve = e
}
function wi(e) {
  if (e !== Ve)
    return !1;
  if (!$)
    return Xu(e),
      $ = !0,
      !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Js(e.type, e.memoizedProps)),
    t && (t = Ae)) {
    if (rl(e))
      throw Zd(),
      Error(k(418));
    for (; t;)
      Xd(e, t),
        t = Vt(t.nextSibling)
  }
  if (Xu(e),
    e.tag === 13) {
    if (e = e.memoizedState,
      e = e !== null ? e.dehydrated : null,
      !e)
      throw Error(k(317));
    e: {
      for (e = e.nextSibling,
        t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Vt(e.nextSibling);
              break e
            }
            t--
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      Ae = null
    }
  } else
    Ae = Ve ? Vt(e.stateNode.nextSibling) : null;
  return !0
}
function Zd() {
  for (var e = Ae; e;)
    e = Vt(e.nextSibling)
}
function Bn() {
  Ae = Ve = null,
    $ = !1
}
function fa(e) {
  Qe === null ? Qe = [e] : Qe.push(e)
}
var ky = yt.ReactCurrentBatchConfig;
function or(e, t, n) {
  if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner,
        n) {
        if (n.tag !== 1)
          throw Error(k(309));
        var r = n.stateNode
      }
      if (!r)
        throw Error(k(147, e));
      var i = r
        , o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) {
        var l = i.refs;
        s === null ? delete l[o] : l[o] = s
      }
        ,
        t._stringRef = o,
        t)
    }
    if (typeof e != "string")
      throw Error(k(284));
    if (!n._owner)
      throw Error(k(290, e))
  }
  return e
}
function Si(e, t) {
  throw e = Object.prototype.toString.call(t),
  Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Zu(e) {
  var t = e._init;
  return t(e._payload)
}
function qd(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? (p.deletions = [h],
        p.flags |= 16) : m.push(h)
    }
  }
  function n(p, h) {
    if (!e)
      return null;
    for (; h !== null;)
      t(p, h),
        h = h.sibling;
    return null
  }
  function r(p, h) {
    for (p = new Map; h !== null;)
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
        h = h.sibling;
    return p
  }
  function i(p, h) {
    return p = jt(p, h),
      p.index = 0,
      p.sibling = null,
      p
  }
  function o(p, h, m) {
    return p.index = m,
      e ? (m = p.alternate,
        m !== null ? (m = m.index,
          m < h ? (p.flags |= 2,
            h) : m) : (p.flags |= 2,
              h)) : (p.flags |= 1048576,
                h)
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2),
      p
  }
  function l(p, h, m, w) {
    return h === null || h.tag !== 6 ? (h = hs(m, p.mode, w),
      h.return = p,
      h) : (h = i(h, m),
        h.return = p,
        h)
  }
  function a(p, h, m, w) {
    var S = m.type;
    return S === mn ? c(p, h, m.props.children, w, m.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === St && Zu(S) === h.type) ? (w = i(h, m.props),
      w.ref = or(p, h, m),
      w.return = p,
      w) : (w = Bi(m.type, m.key, m.props, null, p.mode, w),
        w.ref = or(p, h, m),
        w.return = p,
        w)
  }
  function u(p, h, m, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = ps(m, p.mode, w),
      h.return = p,
      h) : (h = i(h, m.children || []),
        h.return = p,
        h)
  }
  function c(p, h, m, w, S) {
    return h === null || h.tag !== 7 ? (h = nn(m, p.mode, w, S),
      h.return = p,
      h) : (h = i(h, m),
        h.return = p,
        h)
  }
  function f(p, h, m) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = hs("" + h, p.mode, m),
        h.return = p,
        h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ci:
          return m = Bi(h.type, h.key, h.props, null, p.mode, m),
            m.ref = or(p, null, h),
            m.return = p,
            m;
        case pn:
          return h = ps(h, p.mode, m),
            h.return = p,
            h;
        case St:
          var w = h._init;
          return f(p, w(h._payload), m)
      }
      if (cr(h) || er(h))
        return h = nn(h, p.mode, m, null),
          h.return = p,
          h;
      Si(p, h)
    }
    return null
  }
  function d(p, h, m, w) {
    var S = h !== null ? h.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return S !== null ? null : l(p, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ci:
          return m.key === S ? a(p, h, m, w) : null;
        case pn:
          return m.key === S ? u(p, h, m, w) : null;
        case St:
          return S = m._init,
            d(p, h, S(m._payload), w)
      }
      if (cr(m) || er(m))
        return S !== null ? null : c(p, h, m, w, null);
      Si(p, m)
    }
    return null
  }
  function g(p, h, m, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return p = p.get(m) || null,
        l(h, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ci:
          return p = p.get(w.key === null ? m : w.key) || null,
            a(h, p, w, S);
        case pn:
          return p = p.get(w.key === null ? m : w.key) || null,
            u(h, p, w, S);
        case St:
          var P = w._init;
          return g(p, h, m, P(w._payload), S)
      }
      if (cr(w) || er(w))
        return p = p.get(m) || null,
          c(h, p, w, S, null);
      Si(h, w)
    }
    return null
  }
  function v(p, h, m, w) {
    for (var S = null, P = null, E = h, T = h = 0, _ = null; E !== null && T < m.length; T++) {
      E.index > T ? (_ = E,
        E = null) : _ = E.sibling;
      var V = d(p, E, m[T], w);
      if (V === null) {
        E === null && (E = _);
        break
      }
      e && E && V.alternate === null && t(p, E),
        h = o(V, h, T),
        P === null ? S = V : P.sibling = V,
        P = V,
        E = _
    }
    if (T === m.length)
      return n(p, E),
        $ && Gt(p, T),
        S;
    if (E === null) {
      for (; T < m.length; T++)
        E = f(p, m[T], w),
          E !== null && (h = o(E, h, T),
            P === null ? S = E : P.sibling = E,
            P = E);
      return $ && Gt(p, T),
        S
    }
    for (E = r(p, E); T < m.length; T++)
      _ = g(E, p, T, m[T], w),
        _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? T : _.key),
          h = o(_, h, T),
          P === null ? S = _ : P.sibling = _,
          P = _);
    return e && E.forEach(function (ie) {
      return t(p, ie)
    }),
      $ && Gt(p, T),
      S
  }
  function x(p, h, m, w) {
    var S = er(m);
    if (typeof S != "function")
      throw Error(k(150));
    if (m = S.call(m),
      m == null)
      throw Error(k(151));
    for (var P = S = null, E = h, T = h = 0, _ = null, V = m.next(); E !== null && !V.done; T++ ,
      V = m.next()) {
      E.index > T ? (_ = E,
        E = null) : _ = E.sibling;
      var ie = d(p, E, V.value, w);
      if (ie === null) {
        E === null && (E = _);
        break
      }
      e && E && ie.alternate === null && t(p, E),
        h = o(ie, h, T),
        P === null ? S = ie : P.sibling = ie,
        P = ie,
        E = _
    }
    if (V.done)
      return n(p, E),
        $ && Gt(p, T),
        S;
    if (E === null) {
      for (; !V.done; T++ ,
        V = m.next())
        V = f(p, V.value, w),
          V !== null && (h = o(V, h, T),
            P === null ? S = V : P.sibling = V,
            P = V);
      return $ && Gt(p, T),
        S
    }
    for (E = r(p, E); !V.done; T++ ,
      V = m.next())
      V = g(E, p, T, V.value, w),
        V !== null && (e && V.alternate !== null && E.delete(V.key === null ? T : V.key),
          h = o(V, h, T),
          P === null ? S = V : P.sibling = V,
          P = V);
    return e && E.forEach(function (vt) {
      return t(p, vt)
    }),
      $ && Gt(p, T),
      S
  }
  function C(p, h, m, w) {
    if (typeof m == "object" && m !== null && m.type === mn && m.key === null && (m = m.props.children),
      typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ci:
          e: {
            for (var S = m.key, P = h; P !== null;) {
              if (P.key === S) {
                if (S = m.type,
                  S === mn) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      h = i(P, m.props.children),
                      h.return = p,
                      p = h;
                    break e
                  }
                } else if (P.elementType === S || typeof S == "object" && S !== null && S.$$typeof === St && Zu(S) === P.type) {
                  n(p, P.sibling),
                    h = i(P, m.props),
                    h.ref = or(p, P, m),
                    h.return = p,
                    p = h;
                  break e
                }
                n(p, P);
                break
              } else
                t(p, P);
              P = P.sibling
            }
            m.type === mn ? (h = nn(m.props.children, p.mode, w, m.key),
              h.return = p,
              p = h) : (w = Bi(m.type, m.key, m.props, null, p.mode, w),
                w.ref = or(p, h, m),
                w.return = p,
                p = w)
          }
          return s(p);
        case pn:
          e: {
            for (P = m.key; h !== null;) {
              if (h.key === P)
                if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                  n(p, h.sibling),
                    h = i(h, m.children || []),
                    h.return = p,
                    p = h;
                  break e
                } else {
                  n(p, h);
                  break
                }
              else
                t(p, h);
              h = h.sibling
            }
            h = ps(m, p.mode, w),
              h.return = p,
              p = h
          }
          return s(p);
        case St:
          return P = m._init,
            C(p, h, P(m._payload), w)
      }
      if (cr(m))
        return v(p, h, m, w);
      if (er(m))
        return x(p, h, m, w);
      Si(p, m)
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
      h !== null && h.tag === 6 ? (n(p, h.sibling),
        h = i(h, m),
        h.return = p,
        p = h) : (n(p, h),
          h = hs(m, p.mode, w),
          h.return = p,
          p = h),
      s(p)) : n(p, h)
  }
  return C
}
var Un = qd(!0)
  , Jd = qd(!1)
  , io = Bt(null)
  , oo = null
  , Tn = null
  , da = null;
function ha() {
  da = Tn = oo = null
}
function pa(e) {
  var t = io.current;
  B(io),
    e._currentValue = t
}
function ol(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t,
      r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
      break;
    e = e.return
  }
}
function _n(e, t) {
  oo = e,
    da = Tn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0),
      e.firstContext = null)
}
function Ue(e) {
  var t = e._currentValue;
  if (da !== e)
    if (e = {
      context: e,
      memoizedValue: t,
      next: null
    },
      Tn === null) {
      if (oo === null)
        throw Error(k(308));
      Tn = e,
        oo.dependencies = {
          lanes: 0,
          firstContext: e
        }
    } else
      Tn = Tn.next = e;
  return t
}
var Zt = null;
function ma(e) {
  Zt === null ? Zt = [e] : Zt.push(e)
}
function eh(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n,
    ma(t)) : (n.next = i.next,
      i.next = n),
    t.interleaved = n,
    ht(e, r)
}
function ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null;)
    e.childLanes |= t,
      n = e.alternate,
      n !== null && (n.childLanes |= t),
      n = e,
      e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var kt = !1;
function ga(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}
function th(e, t) {
  e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    })
}
function ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared,
    F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next,
      i.next = t),
      r.pending = t,
      ht(e, n)
  }
  return i = r.interleaved,
    i === null ? (t.next = t,
      ma(r)) : (t.next = i.next,
        i.next = t),
    r.interleaved = t,
    ht(e, n)
}
function ji(e, t, n) {
  if (t = t.updateQueue,
    t !== null && (t = t.shared,
      (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      ta(e, n)
  }
}
function qu(e, t) {
  var n = e.updateQueue
    , r = e.alternate;
  if (r !== null && (r = r.updateQueue,
    n === r)) {
    var i = null
      , o = null;
    if (n = n.firstBaseUpdate,
      n !== null) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        o === null ? i = o = s : o = o.next = s,
          n = n.next
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t
    } else
      i = o = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    },
      e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function so(e, t, n, r) {
  var i = e.updateQueue;
  kt = !1;
  var o = i.firstBaseUpdate
    , s = i.lastBaseUpdate
    , l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l
      , u = a.next;
    a.next = null,
      s === null ? o = u : s.next = u,
      s = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue,
      l = c.lastBaseUpdate,
      l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
  }
  if (o !== null) {
    var f = i.baseState;
    s = 0,
      c = u = a = null,
      l = o;
    do {
      var d = l.lane
        , g = l.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var v = e
            , x = l;
          switch (d = t,
          g = n,
          x.tag) {
            case 1:
              if (v = x.payload,
                typeof v == "function") {
                f = v.call(g, f, d);
                break e
              }
              f = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = x.payload,
                d = typeof v == "function" ? v.call(g, f, d) : v,
                d == null)
                break e;
              f = Q({}, f, d);
              break e;
            case 2:
              kt = !0
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64,
          d = i.effects,
          d === null ? i.effects = [l] : d.push(l))
      } else
        g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        },
          c === null ? (u = c = g,
            a = f) : c = c.next = g,
          s |= d;
      if (l = l.next,
        l === null) {
        if (l = i.shared.pending,
          l === null)
          break;
        d = l,
          l = d.next,
          d.next = null,
          i.lastBaseUpdate = d,
          i.shared.pending = null
      }
    } while (!0);
    if (c === null && (a = f),
      i.baseState = a,
      i.firstBaseUpdate = u,
      i.lastBaseUpdate = c,
      t = i.shared.interleaved,
      t !== null) {
      i = t;
      do
        s |= i.lane,
          i = i.next;
      while (i !== t)
    } else
      o === null && (i.shared.lanes = 0);
    un |= s,
      e.lanes = s,
      e.memoizedState = f
  }
}
function Ju(e, t, n) {
  if (e = t.effects,
    t.effects = null,
    e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t]
        , i = r.callback;
      if (i !== null) {
        if (r.callback = null,
          r = n,
          typeof i != "function")
          throw Error(k(191, i));
        i.call(r)
      }
    }
}
var ei = {}
  , rt = Bt(ei)
  , Or = Bt(ei)
  , zr = Bt(ei);
function qt(e) {
  if (e === ei)
    throw Error(k(174));
  return e
}
function ya(e, t) {
  switch (O(zr, t),
  O(Or, e),
  O(rt, ei),
  e = t.nodeType,
  e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = zs(t, e)
  }
  B(rt),
    O(rt, t)
}
function $n() {
  B(rt),
    B(Or),
    B(zr)
}
function nh(e) {
  qt(zr.current);
  var t = qt(rt.current)
    , n = zs(t, e.type);
  t !== n && (O(Or, e),
    O(rt, n))
}
function va(e) {
  Or.current === e && (B(rt),
    B(Or))
}
var K = Bt(0);
function lo(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated,
        n === null || n.data === "$?" || n.data === "$!"))
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t
    } else if (t.child !== null) {
      t.child.return = t,
        t = t.child;
      continue
    }
    if (t === e)
      break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return
    }
    t.sibling.return = t.return,
      t = t.sibling
  }
  return null
}
var ls = [];
function xa() {
  for (var e = 0; e < ls.length; e++)
    ls[e]._workInProgressVersionPrimary = null;
  ls.length = 0
}
var _i = yt.ReactCurrentDispatcher
  , as = yt.ReactCurrentBatchConfig
  , an = 0
  , G = null
  , ne = null
  , se = null
  , ao = !1
  , xr = !1
  , Br = 0
  , Ty = 0;
function de() {
  throw Error(k(321))
}
function wa(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n]))
      return !1;
  return !0
}
function Sa(e, t, n, r, i, o) {
  if (an = o,
    G = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    _i.current = e === null || e.memoizedState === null ? Ny : My,
    e = n(r, i),
    xr) {
    o = 0;
    do {
      if (xr = !1,
        Br = 0,
        25 <= o)
        throw Error(k(301));
      o += 1,
        se = ne = null,
        t.updateQueue = null,
        _i.current = Ay,
        e = n(r, i)
    } while (xr)
  }
  if (_i.current = uo,
    t = ne !== null && ne.next !== null,
    an = 0,
    se = ne = G = null,
    ao = !1,
    t)
    throw Error(k(300));
  return e
}
function ka() {
  var e = Br !== 0;
  return Br = 0,
    e
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return se === null ? G.memoizedState = se = e : se = se.next = e,
    se
}
function $e() {
  if (ne === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null
  } else
    e = ne.next;
  var t = se === null ? G.memoizedState : se.next;
  if (t !== null)
    se = t,
      ne = e;
  else {
    if (e === null)
      throw Error(k(310));
    ne = e,
      e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null
      },
      se === null ? G.memoizedState = se = e : se = se.next = e
  }
  return se
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t
}
function us(e) {
  var t = $e()
    , n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ne
    , i = r.baseQueue
    , o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      i.next = o.next,
        o.next = s
    }
    r.baseQueue = i = o,
      n.pending = null
  }
  if (i !== null) {
    o = i.next,
      r = r.baseState;
    var l = s = null
      , a = null
      , u = o;
    do {
      var c = u.lane;
      if ((an & c) === c)
        a !== null && (a = a.next = {
          lane: 0,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }),
          r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f,
          s = r) : a = a.next = f,
          G.lanes |= c,
          un |= c
      }
      u = u.next
    } while (u !== null && u !== o);
    a === null ? s = r : a.next = l,
      Ze(r, t.memoizedState) || (Te = !0),
      t.memoizedState = r,
      t.baseState = s,
      t.baseQueue = a,
      n.lastRenderedState = r
  }
  if (e = n.interleaved,
    e !== null) {
    i = e;
    do
      o = i.lane,
        G.lanes |= o,
        un |= o,
        i = i.next;
    while (i !== e)
  } else
    i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}
function cs(e) {
  var t = $e()
    , n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch
    , i = n.pending
    , o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
      o = e(o, s.action),
        s = s.next;
    while (s !== i);
    Ze(o, t.memoizedState) || (Te = !0),
      t.memoizedState = o,
      t.baseQueue === null && (t.baseState = o),
      n.lastRenderedState = o
  }
  return [o, r]
}
function rh() { }
function ih(e, t) {
  var n = G
    , r = $e()
    , i = t()
    , o = !Ze(r.memoizedState, i);
  if (o && (r.memoizedState = i,
    Te = !0),
    r = r.queue,
    Ta(lh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048,
      $r(9, sh.bind(null, n, r, i, t), void 0, null),
      le === null)
      throw Error(k(349));
    an & 30 || oh(n, t, i)
  }
  return i
}
function oh(e, t, n) {
  e.flags |= 16384,
    e = {
      getSnapshot: t,
      value: n
    },
    t = G.updateQueue,
    t === null ? (t = {
      lastEffect: null,
      stores: null
    },
      G.updateQueue = t,
      t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
}
function sh(e, t, n, r) {
  t.value = n,
    t.getSnapshot = r,
    ah(t) && uh(e)
}
function lh(e, t, n) {
  return n(function () {
    ah(t) && uh(e)
  })
}
function ah(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n)
  } catch {
    return !0
  }
}
function uh(e) {
  var t = ht(e, 1);
  t !== null && Xe(t, e, 1, -1)
}
function ec(e) {
  var t = et();
  return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Ey.bind(null, G, e),
    [t.memoizedState, e]
}
function $r(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  },
    t = G.updateQueue,
    t === null ? (t = {
      lastEffect: null,
      stores: null
    },
      G.updateQueue = t,
      t.lastEffect = e.next = e) : (n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (r = n.next,
          n.next = e,
          e.next = r,
          t.lastEffect = e)),
    e
}
function ch() {
  return $e().memoizedState
}
function Fi(e, t, n, r) {
  var i = et();
  G.flags |= e,
    i.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r)
}
function Vo(e, t, n, r) {
  var i = $e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var s = ne.memoizedState;
    if (o = s.destroy,
      r !== null && wa(r, s.deps)) {
      i.memoizedState = $r(t, n, o, r);
      return
    }
  }
  G.flags |= e,
    i.memoizedState = $r(1 | t, n, o, r)
}
function tc(e, t) {
  return Fi(8390656, 8, e, t)
}
function Ta(e, t) {
  return Vo(2048, 8, e, t)
}
function fh(e, t) {
  return Vo(4, 2, e, t)
}
function dh(e, t) {
  return Vo(4, 4, e, t)
}
function hh(e, t) {
  if (typeof t == "function")
    return e = e(),
      t(e),
      function () {
        t(null)
      }
      ;
  if (t != null)
    return e = e(),
      t.current = e,
      function () {
        t.current = null
      }
}
function ph(e, t, n) {
  return n = n != null ? n.concat([e]) : null,
    Vo(4, 4, hh.bind(null, t, e), n)
}
function Pa() { }
function mh(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function gh(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function yh(e, t, n) {
  return an & 21 ? (Ze(n, t) || (n = kd(),
    G.lanes |= n,
    un |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
      Te = !0),
      e.memoizedState = n)
}
function Py(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4,
    e(!0);
  var r = as.transition;
  as.transition = {};
  try {
    e(!1),
      t()
  } finally {
    I = n,
      as.transition = r
  }
}
function vh() {
  return $e().memoizedState
}
function Cy(e, t, n) {
  var r = Rt(e);
  if (n = {
    lane: r,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
  },
    xh(e))
    wh(t, n);
  else if (n = eh(e, t, n, r),
    n !== null) {
    var i = xe();
    Xe(n, e, r, i),
      Sh(n, t, r)
  }
}
function Ey(e, t, n) {
  var r = Rt(e)
    , i = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (xh(e))
    wh(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
      o !== null))
      try {
        var s = t.lastRenderedState
          , l = o(s, n);
        if (i.hasEagerState = !0,
          i.eagerState = l,
          Ze(l, s)) {
          var a = t.interleaved;
          a === null ? (i.next = i,
            ma(t)) : (i.next = a.next,
              a.next = i),
            t.interleaved = i;
          return
        }
      } catch { } finally { }
    n = eh(e, t, i, r),
      n !== null && (i = xe(),
        Xe(n, e, r, i),
        Sh(n, t, r))
  }
}
function xh(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G
}
function wh(e, t) {
  xr = ao = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Sh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      ta(e, n)
  }
}
var uo = {
  readContext: Ue,
  useCallback: de,
  useContext: de,
  useEffect: de,
  useImperativeHandle: de,
  useInsertionEffect: de,
  useLayoutEffect: de,
  useMemo: de,
  useReducer: de,
  useRef: de,
  useState: de,
  useDebugValue: de,
  useDeferredValue: de,
  useTransition: de,
  useMutableSource: de,
  useSyncExternalStore: de,
  useId: de,
  unstable_isNewReconciler: !1
}
  , Ny = {
    readContext: Ue,
    useCallback: function (e, t) {
      return et().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ue,
    useEffect: tc,
    useImperativeHandle: function (e, t, n) {
      return n = n != null ? n.concat([e]) : null,
        Fi(4194308, 4, hh.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return Fi(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Fi(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = et();
      return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function (e, t, n) {
      var r = et();
      return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Cy.bind(null, G, e),
        [r.memoizedState, e]
    },
    useRef: function (e) {
      var t = et();
      return e = {
        current: e
      },
        t.memoizedState = e
    },
    useState: ec,
    useDebugValue: Pa,
    useDeferredValue: function (e) {
      return et().memoizedState = e
    },
    useTransition: function () {
      var e = ec(!1)
        , t = e[0];
      return e = Py.bind(null, e[1]),
        et().memoizedState = e,
        [t, e]
    },
    useMutableSource: function () { },
    useSyncExternalStore: function (e, t, n) {
      var r = G
        , i = et();
      if ($) {
        if (n === void 0)
          throw Error(k(407));
        n = n()
      } else {
        if (n = t(),
          le === null)
          throw Error(k(349));
        an & 30 || oh(r, t, n)
      }
      i.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return i.queue = o,
        tc(lh.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        $r(9, sh.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function () {
      var e = et()
        , t = le.identifierPrefix;
      if ($) {
        var n = ut
          , r = at;
        n = (r & ~(1 << 32 - Ye(r) - 1)).toString(32) + n,
          t = ":" + t + "R" + n,
          n = Br++ ,
          0 < n && (t += "H" + n.toString(32)),
          t += ":"
      } else
        n = Ty++ ,
          t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  }
  , My = {
    readContext: Ue,
    useCallback: mh,
    useContext: Ue,
    useEffect: Ta,
    useImperativeHandle: ph,
    useInsertionEffect: fh,
    useLayoutEffect: dh,
    useMemo: gh,
    useReducer: us,
    useRef: ch,
    useState: function () {
      return us(Ur)
    },
    useDebugValue: Pa,
    useDeferredValue: function (e) {
      var t = $e();
      return yh(t, ne.memoizedState, e)
    },
    useTransition: function () {
      var e = us(Ur)[0]
        , t = $e().memoizedState;
      return [e, t]
    },
    useMutableSource: rh,
    useSyncExternalStore: ih,
    useId: vh,
    unstable_isNewReconciler: !1
  }
  , Ay = {
    readContext: Ue,
    useCallback: mh,
    useContext: Ue,
    useEffect: Ta,
    useImperativeHandle: ph,
    useInsertionEffect: fh,
    useLayoutEffect: dh,
    useMemo: gh,
    useReducer: cs,
    useRef: ch,
    useState: function () {
      return cs(Ur)
    },
    useDebugValue: Pa,
    useDeferredValue: function (e) {
      var t = $e();
      return ne === null ? t.memoizedState = e : yh(t, ne.memoizedState, e)
    },
    useTransition: function () {
      var e = cs(Ur)[0]
        , t = $e().memoizedState;
      return [e, t]
    },
    useMutableSource: rh,
    useSyncExternalStore: ih,
    useId: vh,
    unstable_isNewReconciler: !1
  };
function be(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t),
      e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}
function sl(e, t, n, r) {
  t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Q({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Do = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe()
      , i = Rt(e)
      , o = ct(r, i);
    o.payload = t,
      n != null && (o.callback = n),
      t = Dt(e, o, i),
      t !== null && (Xe(t, e, i, r),
        ji(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe()
      , i = Rt(e)
      , o = ct(r, i);
    o.tag = 1,
      o.payload = t,
      n != null && (o.callback = n),
      t = Dt(e, o, i),
      t !== null && (Xe(t, e, i, r),
        ji(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe()
      , r = Rt(e)
      , i = ct(n, r);
    i.tag = 2,
      t != null && (i.callback = t),
      t = Dt(e, i, r),
      t !== null && (Xe(t, e, r, n),
        ji(t, e, r))
  }
};
function nc(e, t, n, r, i, o, s) {
  return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, r) || !jr(i, o) : !0
}
function kh(e, t, n) {
  var r = !1
    , i = Ft
    , o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ue(o) : (i = Ee(t) ? sn : ge.current,
    r = t.contextTypes,
    o = (r = r != null) ? zn(e, i) : Ft),
    t = new t(n, o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Do,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
      e.__reactInternalMemoizedUnmaskedChildContext = i,
      e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function rc(e, t, n, r) {
  e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Do.enqueueReplaceState(t, t.state, null)
}
function ll(e, t, n, r) {
  var i = e.stateNode;
  i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    ga(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Ue(o) : (o = Ee(t) ? sn : ge.current,
    i.context = zn(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (sl(e, t, o, n),
      i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && Do.enqueueReplaceState(i, i.state, null),
      so(e, n, i, r),
      i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Wn(e, t) {
  try {
    var n = ""
      , r = t;
    do
      n += rg(r),
        r = r.return;
    while (r);
    var i = n
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack
  }
  return {
    value: e,
    source: t,
    stack: i,
    digest: null
  }
}
function fs(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  }
}
function al(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Vy = typeof WeakMap == "function" ? WeakMap : Map;
function Th(e, t, n) {
  n = ct(-1, n),
    n.tag = 3,
    n.payload = {
      element: null
    };
  var r = t.value;
  return n.callback = function () {
    fo || (fo = !0,
      vl = r),
      al(e, t)
  }
    ,
    n
}
function Ph(e, t, n) {
  n = ct(-1, n),
    n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function () {
      return r(i)
    }
      ,
      n.callback = function () {
        al(e, t)
      }
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
    al(e, t),
      typeof r != "function" && (Lt === null ? Lt = new Set([this]) : Lt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: s !== null ? s : ""
    })
  }
  ),
    n
}
function ic(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vy;
    var i = new Set;
    r.set(t, i)
  } else
    i = r.get(t),
      i === void 0 && (i = new Set,
        r.set(t, i));
  i.has(n) || (i.add(n),
    e = Hy.bind(null, e, t, n),
    t.then(e, e))
}
function oc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState,
      t = t !== null ? t.dehydrated !== null : !0),
      t)
      return e;
    e = e.return
  } while (e !== null);
  return null
}
function sc(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
      n.flags |= 131072,
      n.flags &= -52805,
      n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ct(-1, 1),
        t.tag = 2,
        Dt(n, t, 1))),
      n.lanes |= 1),
      e)
}
var Dy = yt.ReactCurrentOwner
  , Te = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Jd(t, null, n, r) : Un(t, e.child, n, r)
}
function lc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return _n(t, i),
    r = Sa(e, t, n, r, o, i),
    n = ka(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
      t.flags &= -2053,
      e.lanes &= ~i,
      pt(e, t, i)) : ($ && n && ua(t),
        t.flags |= 1,
        ye(e, t, r, i),
        t.child)
}
function ac(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !La(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
      t.type = o,
      Ch(e, t, o, r, i)) : (e = Bi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
  }
  if (o = e.child,
    !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare,
      n = n !== null ? n : jr,
      n(s, r) && e.ref === t.ref)
      return pt(e, t, i)
  }
  return t.flags |= 1,
    e = jt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Ch(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (jr(o, r) && e.ref === t.ref)
      if (Te = !1,
        t.pendingProps = r = o,
        (e.lanes & i) !== 0)
        e.flags & 131072 && (Te = !0);
      else
        return t.lanes = e.lanes,
          pt(e, t, i)
  }
  return ul(e, t, n, r, i)
}
function Eh(e, t, n) {
  var r = t.pendingProps
    , i = r.children
    , o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      },
        O(Cn, Me),
        Me |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n,
          t.lanes = t.childLanes = 1073741824,
          t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          },
          t.updateQueue = null,
          O(Cn, Me),
          Me |= e,
          null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      },
        r = o !== null ? o.baseLanes : n,
        O(Cn, Me),
        Me |= r
    }
  else
    o !== null ? (r = o.baseLanes | n,
      t.memoizedState = null) : r = n,
      O(Cn, Me),
      Me |= r;
  return ye(e, t, i, n),
    t.child
}
function Nh(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ul(e, t, n, r, i) {
  var o = Ee(n) ? sn : ge.current;
  return o = zn(t, o),
    _n(t, i),
    n = Sa(e, t, n, r, o, i),
    r = ka(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
      t.flags &= -2053,
      e.lanes &= ~i,
      pt(e, t, i)) : ($ && r && ua(t),
        t.flags |= 1,
        ye(e, t, n, i),
        t.child)
}
function uc(e, t, n, r, i) {
  if (Ee(n)) {
    var o = !0;
    to(t)
  } else
    o = !1;
  if (_n(t, i),
    t.stateNode === null)
    Ii(e, t),
      kh(t, n, r),
      ll(t, n, r, i),
      r = !0;
  else if (e === null) {
    var s = t.stateNode
      , l = t.memoizedProps;
    s.props = l;
    var a = s.context
      , u = n.contextType;
    typeof u == "object" && u !== null ? u = Ue(u) : (u = Ee(n) ? sn : ge.current,
      u = zn(t, u));
    var c = n.getDerivedStateFromProps
      , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && rc(t, s, r, u),
      kt = !1;
    var d = t.memoizedState;
    s.state = d,
      so(t, r, s, i),
      a = t.memoizedState,
      l !== r || d !== a || Ce.current || kt ? (typeof c == "function" && (sl(t, n, c, r),
        a = t.memoizedState),
        (l = kt || nc(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
          typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          r = !1)
  } else {
    s = t.stateNode,
      th(e, t),
      l = t.memoizedProps,
      u = t.type === t.elementType ? l : be(t.type, l),
      s.props = u,
      f = t.pendingProps,
      d = s.context,
      a = n.contextType,
      typeof a == "object" && a !== null ? a = Ue(a) : (a = Ee(n) ? sn : ge.current,
        a = zn(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && rc(t, s, r, a),
      kt = !1,
      d = t.memoizedState,
      s.state = d,
      so(t, r, s, i);
    var v = t.memoizedState;
    l !== f || d !== v || Ce.current || kt ? (typeof g == "function" && (sl(t, n, g, r),
      v = t.memoizedState),
      (u = kt || nc(t, n, u, r, d, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
          t.memoizedProps = r,
          t.memoizedState = v),
      s.props = r,
      s.state = v,
      s.context = a,
      r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
  }
  return cl(e, t, n, r, o, i)
}
function cl(e, t, n, r, i, o) {
  Nh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return i && Qu(t, n, !1),
      pt(e, t, o);
  r = t.stateNode,
    Dy.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1,
    e !== null && s ? (t.child = Un(t, e.child, null, o),
      t.child = Un(t, null, l, o)) : ye(e, t, l, o),
    t.memoizedState = r.state,
    i && Qu(t, n, !0),
    t.child
}
function Mh(e) {
  var t = e.stateNode;
  t.pendingContext ? Gu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gu(e, t.context, !1),
    ya(e, t.containerInfo)
}
function cc(e, t, n, r, i) {
  return Bn(),
    fa(i),
    t.flags |= 256,
    ye(e, t, n, r),
    t.child
}
var fl = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function dl(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}
function Ah(e, t, n) {
  var r = t.pendingProps, i = K.current, o = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
      t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    O(K, i & 1),
    e === null)
    return il(t),
      e = t.memoizedState,
      e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
          null) : (s = r.children,
            e = r.fallback,
            o ? (r = t.mode,
              o = t.child,
              s = {
                mode: "hidden",
                children: s
              },
              !(r & 1) && o !== null ? (o.childLanes = 0,
                o.pendingProps = s) : o = jo(s, r, 0, null),
              e = nn(e, r, n, null),
              o.return = t,
              e.return = t,
              o.sibling = e,
              t.child = o,
              t.child.memoizedState = dl(n),
              t.memoizedState = fl,
              e) : Ca(t, s));
  if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
      l !== null))
    return Ly(e, t, s, r, l, i, n);
  if (o) {
    o = r.fallback,
      s = t.mode,
      i = e.child,
      l = i.sibling;
    var a = {
      mode: "hidden",
      children: r.children
    };
    return !(s & 1) && t.child !== i ? (r = t.child,
      r.childLanes = 0,
      r.pendingProps = a,
      t.deletions = null) : (r = jt(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
      l !== null ? o = jt(l, o) : (o = nn(o, s, n, null),
        o.flags |= 2),
      o.return = t,
      r.return = t,
      r.sibling = o,
      t.child = r,
      r = o,
      o = t.child,
      s = e.child.memoizedState,
      s = s === null ? dl(n) : {
        baseLanes: s.baseLanes | n,
        cachePool: null,
        transitions: s.transitions
      },
      o.memoizedState = s,
      o.childLanes = e.childLanes & ~n,
      t.memoizedState = fl,
      r
  }
  return o = e.child,
    e = o.sibling,
    r = jt(o, {
      mode: "visible",
      children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
      n === null ? (t.deletions = [e],
        t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ca(e, t) {
  return t = jo({
    mode: "visible",
    children: t
  }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ki(e, t, n, r) {
  return r !== null && fa(r),
    Un(t, e.child, null, n),
    e = Ca(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Ly(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257,
      r = fs(Error(k(422))),
      ki(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
          i = t.mode,
          r = jo({
            mode: "visible",
            children: r.children
          }, i, 0, null),
          o = nn(o, i, s, null),
          o.flags |= 2,
          r.return = t,
          o.return = t,
          r.sibling = o,
          t.child = r,
          t.mode & 1 && Un(t, e.child, null, s),
          t.child.memoizedState = dl(s),
          t.memoizedState = fl,
          o);
  if (!(t.mode & 1))
    return ki(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset,
      r)
      var l = r.dgst;
    return r = l,
      o = Error(k(419)),
      r = fs(o, r, void 0),
      ki(e, t, s, r)
  }
  if (l = (s & e.childLanes) !== 0,
    Te || l) {
    if (r = le,
      r !== null) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0
      }
      i = i & (r.suspendedLanes | s) ? 0 : i,
        i !== 0 && i !== o.retryLane && (o.retryLane = i,
          ht(e, i),
          Xe(r, e, i, -1))
    }
    return Da(),
      r = fs(Error(k(421))),
      ki(e, t, s, r)
  }
  return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Ky.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
      Ae = Vt(i.nextSibling),
      Ve = t,
      $ = !0,
      Qe = null,
      e !== null && (_e[Fe++] = at,
        _e[Fe++] = ut,
        _e[Fe++] = ln,
        at = e.id,
        ut = e.overflow,
        ln = t),
      t = Ca(t, r.children),
      t.flags |= 4096,
      t)
}
function fc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t),
    ol(e.return, t, n)
}
function ds(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: i
  } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Vh(e, t, n) {
  var r = t.pendingProps
    , i = r.revealOrder
    , o = r.tail;
  if (ye(e, t, r.children, n),
    r = K.current,
    r & 2)
    r = r & 1 | 2,
      t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13)
          e.memoizedState !== null && fc(e, n, t);
        else if (e.tag === 19)
          fc(e, n, t);
        else if (e.child !== null) {
          e.child.return = e,
            e = e.child;
          continue
        }
        if (e === t)
          break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return
        }
        e.sibling.return = e.return,
          e = e.sibling
      }
    r &= 1
  }
  if (O(K, r),
    !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child,
          i = null; n !== null;)
          e = n.alternate,
            e !== null && lo(e) === null && (i = n),
            n = n.sibling;
        n = i,
          n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
              n.sibling = null),
          ds(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null,
          i = t.child,
          t.child = null; i !== null;) {
          if (e = i.alternate,
            e !== null && lo(e) === null) {
            t.child = i;
            break
          }
          e = i.sibling,
            i.sibling = n,
            n = i,
            i = e
        }
        ds(t, !0, n, null, o);
        break;
      case "together":
        ds(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null
    }
  return t.child
}
function Ii(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies),
    un |= t.lanes,
    !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child,
      n = jt(e, e.pendingProps),
      t.child = n,
      n.return = t; e.sibling !== null;)
      e = e.sibling,
        n = n.sibling = jt(e, e.pendingProps),
        n.return = t;
    n.sibling = null
  }
  return t.child
}
function Ry(e, t, n) {
  switch (t.tag) {
    case 3:
      Mh(t),
        Bn();
      break;
    case 5:
      nh(t);
      break;
    case 1:
      Ee(t.type) && to(t);
      break;
    case 4:
      ya(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context
        , i = t.memoizedProps.value;
      O(io, r._currentValue),
        r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState,
        r !== null)
        return r.dehydrated !== null ? (O(K, K.current & 1),
          t.flags |= 128,
          null) : n & t.child.childLanes ? Ah(e, t, n) : (O(K, K.current & 1),
            e = pt(e, t, n),
            e !== null ? e.sibling : null);
      O(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
        if (r)
          return Vh(e, t, n);
        t.flags |= 128
      }
      if (i = t.memoizedState,
        i !== null && (i.rendering = null,
          i.tail = null,
          i.lastEffect = null),
        O(K, K.current),
        r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0,
        Eh(e, t, n)
  }
  return pt(e, t, n)
}
var Dh, hl, Lh, Rh;
Dh = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n,
        n = n.child;
      continue
    }
    if (n === t)
      break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t)
        return;
      n = n.return
    }
    n.sibling.return = n.return,
      n = n.sibling
  }
}
  ;
hl = function () { }
  ;
Lh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode,
      qt(rt.current);
    var o = null;
    switch (n) {
      case "input":
        i = _s(e, i),
          r = _s(e, r),
          o = [];
        break;
      case "select":
        i = Q({}, i, {
          value: void 0
        }),
          r = Q({}, r, {
            value: void 0
          }),
          o = [];
        break;
      case "textarea":
        i = Os(e, i),
          r = Os(e, r),
          o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ji)
    }
    Bs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l)
            l.hasOwnProperty(s) && (n || (n = {}),
              n[s] = "")
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Nr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = i != null ? i[u] : void 0,
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                n[s] = "");
            for (s in a)
              a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                n[s] = a[s])
          } else
            n || (o || (o = []),
              o.push(u, n)),
              n = a;
        else
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
            l = l ? l.__html : void 0,
            a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Nr.hasOwnProperty(u) ? (a != null && u === "onScroll" && z("scroll", e),
              o || l === a || (o = [])) : (o = o || []).push(u, a))
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4)
  }
}
  ;
Rh = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
  ;
function sr(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          t.alternate !== null && (n = t),
            t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          n.alternate !== null && (r = n),
            n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child
    , n = 0
    , r = 0;
  if (t)
    for (var i = e.child; i !== null;)
      n |= i.lanes | i.childLanes,
        r |= i.subtreeFlags & 14680064,
        r |= i.flags & 14680064,
        i.return = e,
        i = i.sibling;
  else
    for (i = e.child; i !== null;)
      n |= i.lanes | i.childLanes,
        r |= i.subtreeFlags,
        r |= i.flags,
        i.return = e,
        i = i.sibling;
  return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function jy(e, t, n) {
  var r = t.pendingProps;
  switch (ca(t),
  t.tag) {
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
      return he(t),
        null;
    case 1:
      return Ee(t.type) && eo(),
        he(t),
        null;
    case 3:
      return r = t.stateNode,
        $n(),
        B(Ce),
        B(ge),
        xa(),
        r.pendingContext && (r.context = r.pendingContext,
          r.pendingContext = null),
        (e === null || e.child === null) && (wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
          Qe !== null && (Sl(Qe),
            Qe = null))),
        hl(e, t),
        he(t),
        null;
    case 5:
      va(t);
      var i = qt(zr.current);
      if (n = t.type,
        e !== null && t.stateNode != null)
        Lh(e, t, n, r, i),
          e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(k(166));
          return he(t),
            null
        }
        if (e = qt(rt.current),
          wi(t)) {
          r = t.stateNode,
            n = t.type;
          var o = t.memoizedProps;
          switch (r[tt] = t,
          r[Ir] = o,
          e = (t.mode & 1) !== 0,
          n) {
            case "dialog":
              z("cancel", r),
                z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              z("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < dr.length; i++)
                z(dr[i], r);
              break;
            case "source":
              z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              z("error", r),
                z("load", r);
              break;
            case "details":
              z("toggle", r);
              break;
            case "input":
              wu(r, o),
                z("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!o.multiple
              },
                z("invalid", r);
              break;
            case "textarea":
              ku(r, o),
                z("invalid", r)
          }
          Bs(n, o),
            i = null;
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && xi(r.textContent, l, e),
                i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && xi(r.textContent, l, e),
                  i = ["children", "" + l]) : Nr.hasOwnProperty(s) && l != null && s === "onScroll" && z("scroll", r)
            }
          switch (n) {
            case "input":
              fi(r),
                Su(r, o, !0);
              break;
            case "textarea":
              fi(r),
                Tu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ji)
          }
          r = i,
            t.updateQueue = r,
            r !== null && (t.flags |= 4)
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument,
            e === "http://www.w3.org/1999/xhtml" && (e = ld(n)),
            e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
              e.innerHTML = "<script><\/script>",
              e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                is: r.is
              }) : (e = s.createElement(n),
                n === "select" && (s = e,
                  r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
            e[tt] = t,
            e[Ir] = r,
            Dh(e, t, !1, !1),
            t.stateNode = e;
          e: {
            switch (s = Us(n, r),
            n) {
              case "dialog":
                z("cancel", e),
                  z("close", e),
                  i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                z("load", e),
                  i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < dr.length; i++)
                  z(dr[i], e);
                i = r;
                break;
              case "source":
                z("error", e),
                  i = r;
                break;
              case "img":
              case "image":
              case "link":
                z("error", e),
                  z("load", e),
                  i = r;
                break;
              case "details":
                z("toggle", e),
                  i = r;
                break;
              case "input":
                wu(e, r),
                  i = _s(e, r),
                  z("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                },
                  i = Q({}, r, {
                    value: void 0
                  }),
                  z("invalid", e);
                break;
              case "textarea":
                ku(e, r),
                  i = Os(e, r),
                  z("invalid", e);
                break;
              default:
                i = r
            }
            Bs(n, i),
              l = i;
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style" ? cd(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                  a != null && ad(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Mr(e, a) : typeof a == "number" && Mr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Nr.hasOwnProperty(o) ? a != null && o === "onScroll" && z("scroll", e) : a != null && Yl(e, o, a, s))
              }
            switch (n) {
              case "input":
                fi(e),
                  Su(e, r, !1);
                break;
              case "textarea":
                fi(e),
                  Tu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple,
                  o = r.value,
                  o != null ? Dn(e, !!r.multiple, o, !1) : r.defaultValue != null && Dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ji)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512,
          t.flags |= 2097152)
      }
      return he(t),
        null;
    case 6:
      if (e && t.stateNode != null)
        Rh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(k(166));
        if (n = qt(zr.current),
          qt(rt.current),
          wi(t)) {
          if (r = t.stateNode,
            n = t.memoizedProps,
            r[tt] = t,
            (o = r.nodeValue !== n) && (e = Ve,
              e !== null))
            switch (e.tag) {
              case 3:
                xi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && xi(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
            r[tt] = t,
            t.stateNode = r
      }
      return he(t),
        null;
    case 13:
      if (B(K),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Zd(),
            Bn(),
            t.flags |= 98560,
            o = !1;
        else if (o = wi(t),
          r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(k(318));
            if (o = t.memoizedState,
              o = o !== null ? o.dehydrated : null,
              !o)
              throw Error(k(317));
            o[tt] = t
          } else
            Bn(),
              !(t.flags & 128) && (t.memoizedState = null),
              t.flags |= 4;
          he(t),
            o = !1
        } else
          Qe !== null && (Sl(Qe),
            Qe = null),
            o = !0;
        if (!o)
          return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
          r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
            t.mode & 1 && (e === null || K.current & 1 ? re === 0 && (re = 3) : Da())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return $n(),
        hl(e, t),
        e === null && _r(t.stateNode.containerInfo),
        he(t),
        null;
    case 10:
      return pa(t.type._context),
        he(t),
        null;
    case 17:
      return Ee(t.type) && eo(),
        he(t),
        null;
    case 19:
      if (B(K),
        o = t.memoizedState,
        o === null)
        return he(t),
          null;
      if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
        if (r)
          sr(o, !1);
        else {
          if (re !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (s = lo(e),
                s !== null) {
                for (t.flags |= 128,
                  sr(o, !1),
                  r = s.updateQueue,
                  r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                  t.subtreeFlags = 0,
                  r = n,
                  n = t.child; n !== null;)
                  o = n,
                    e = r,
                    o.flags &= 14680066,
                    s = o.alternate,
                    s === null ? (o.childLanes = 0,
                      o.lanes = e,
                      o.child = null,
                      o.subtreeFlags = 0,
                      o.memoizedProps = null,
                      o.memoizedState = null,
                      o.updateQueue = null,
                      o.dependencies = null,
                      o.stateNode = null) : (o.childLanes = s.childLanes,
                        o.lanes = s.lanes,
                        o.child = s.child,
                        o.subtreeFlags = 0,
                        o.deletions = null,
                        o.memoizedProps = s.memoizedProps,
                        o.memoizedState = s.memoizedState,
                        o.updateQueue = s.updateQueue,
                        o.type = s.type,
                        e = s.dependencies,
                        o.dependencies = e === null ? null : {
                          lanes: e.lanes,
                          firstContext: e.firstContext
                        }),
                    n = n.sibling;
                return O(K, K.current & 1 | 2),
                  t.child
              }
              e = e.sibling
            }
          o.tail !== null && q() > Hn && (t.flags |= 128,
            r = !0,
            sr(o, !1),
            t.lanes = 4194304)
        }
      else {
        if (!r)
          if (e = lo(s),
            e !== null) {
            if (t.flags |= 128,
              r = !0,
              n = e.updateQueue,
              n !== null && (t.updateQueue = n,
                t.flags |= 4),
              sr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !$)
              return he(t),
                null
          } else
            2 * q() - o.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128,
              r = !0,
              sr(o, !1),
              t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child,
          t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
      }
      return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = q(),
        t.sibling = null,
        n = K.current,
        O(K, r ? n & 1 | 2 : n & 1),
        t) : (he(t),
          null);
    case 22:
    case 23:
      return Va(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Me & 1073741824 && (he(t),
          t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t),
        null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(k(156, t.tag))
}
function _y(e, t) {
  switch (ca(t),
  t.tag) {
    case 1:
      return Ee(t.type) && eo(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
          t) : null;
    case 3:
      return $n(),
        B(Ce),
        B(ge),
        xa(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
          t) : null;
    case 5:
      return va(t),
        null;
    case 13:
      if (B(K),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(k(340));
        Bn()
      }
      return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
          t) : null;
    case 19:
      return B(K),
        null;
    case 4:
      return $n(),
        null;
    case 10:
      return pa(t.type._context),
        null;
    case 22:
    case 23:
      return Va(),
        null;
    case 24:
      return null;
    default:
      return null
  }
}
var Ti = !1
  , pe = !1
  , Fy = typeof WeakSet == "function" ? WeakSet : Set
  , M = null;
function Pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null)
      } catch (r) {
        X(e, t, r)
      }
    else
      n.current = null
}
function pl(e, t, n) {
  try {
    n()
  } catch (r) {
    X(e, t, r)
  }
}
var dc = !1;
function Iy(e, t) {
  if (Zs = Xi,
    e = Od(),
    aa(e)) {
    if ("selectionStart" in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset
            , o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType,
              o.nodeType
          } catch {
            n = null;
            break e
          }
          var s = 0
            , l = -1
            , a = -1
            , u = 0
            , c = 0
            , f = e
            , d = null;
          t: for (; ;) {
            for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i),
              f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r),
              f.nodeType === 3 && (s += f.nodeValue.length),
              (g = f.firstChild) !== null;)
              d = f,
                f = g;
            for (; ;) {
              if (f === e)
                break t;
              if (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (g = f.nextSibling) !== null)
                break;
              f = d,
                d = f.parentNode
            }
            f = g
          }
          n = l === -1 || a === -1 ? null : {
            start: l,
            end: a
          }
        } else
          n = null
      }
    n = n || {
      start: 0,
      end: 0
    }
  } else
    n = null;
  for (qs = {
    focusedElem: e,
    selectionRange: n
  },
    Xi = !1,
    M = t; M !== null;)
    if (t = M,
      e = t.child,
      (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t,
        M = e;
    else
      for (; M !== null;) {
        t = M;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps
                    , C = v.memoizedState
                    , p = t.stateNode
                    , h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : be(t.type, x), C);
                  p.__reactInternalSnapshotBeforeUpdate = h
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163))
            }
        } catch (w) {
          X(t, t.return, w)
        }
        if (e = t.sibling,
          e !== null) {
          e.return = t.return,
            M = e;
          break
        }
        M = t.return
      }
  return v = dc,
    dc = !1,
    v
}
function wr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null,
    r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0,
          o !== void 0 && pl(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function Lo(e, t) {
  if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function ml(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}
function jh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null,
    jh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
      t !== null && (delete t[tt],
        delete t[Ir],
        delete t[tl],
        delete t[xy],
        delete t[wy])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function _h(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function hc(e) {
  e: for (; ;) {
    for (; e.sibling === null;) {
      if (e.return === null || _h(e.return))
        return null;
      e = e.return
    }
    for (e.sibling.return = e.return,
      e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4)
        continue e;
      e.child.return = e,
        e = e.child
    }
    if (!(e.flags & 2))
      return e.stateNode
  }
}
function gl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode,
      t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
          t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ji));
  else if (r !== 4 && (e = e.child,
    e !== null))
    for (gl(e, t, n),
      e = e.sibling; e !== null;)
      gl(e, t, n),
        e = e.sibling
}
function yl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode,
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child,
    e !== null))
    for (yl(e, t, n),
      e = e.sibling; e !== null;)
      yl(e, t, n),
        e = e.sibling
}
var ae = null
  , Ge = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null;)
    Fh(e, t, n),
      n = n.sibling
}
function Fh(e, t, n) {
  if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
      nt.onCommitFiberUnmount(Po, n)
    } catch { }
  switch (n.tag) {
    case 5:
      pe || Pn(n, t);
    case 6:
      var r = ae
        , i = Ge;
      ae = null,
        xt(e, t, n),
        ae = r,
        Ge = i,
        ae !== null && (Ge ? (e = ae,
          n = n.stateNode,
          e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Ge ? (e = ae,
        n = n.stateNode,
        e.nodeType === 8 ? os(e.parentNode, n) : e.nodeType === 1 && os(e, n),
        Lr(e)) : os(ae, n.stateNode));
      break;
    case 4:
      r = ae,
        i = Ge,
        ae = n.stateNode.containerInfo,
        Ge = !0,
        xt(e, t, n),
        ae = r,
        Ge = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
          r !== null))) {
        i = r = r.next;
        do {
          var o = i
            , s = o.destroy;
          o = o.tag,
            s !== void 0 && (o & 2 || o & 4) && pl(n, t, s),
            i = i.next
        } while (i !== r)
      }
      xt(e, t, n);
      break;
    case 1:
      if (!pe && (Pn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps,
            r.state = n.memoizedState,
            r.componentWillUnmount()
        } catch (l) {
          X(n, t, l)
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null,
        xt(e, t, n),
        pe = r) : xt(e, t, n);
      break;
    default:
      xt(e, t, n)
  }
}
function pc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fy),
      t.forEach(function (r) {
        var i = by.bind(null, e, r);
        n.has(r) || (n.add(r),
          r.then(i, i))
      })
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e
          , s = t
          , l = s;
        e: for (; l !== null;) {
          switch (l.tag) {
            case 5:
              ae = l.stateNode,
                Ge = !1;
              break e;
            case 3:
              ae = l.stateNode.containerInfo,
                Ge = !0;
              break e;
            case 4:
              ae = l.stateNode.containerInfo,
                Ge = !0;
              break e
          }
          l = l.return
        }
        if (ae === null)
          throw Error(k(160));
        Fh(o, s, i),
          ae = null,
          Ge = !1;
        var a = i.alternate;
        a !== null && (a.return = null),
          i.return = null
      } catch (u) {
        X(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
      Ih(t, e),
        t = t.sibling
}
function Ih(e, t) {
  var n = e.alternate
    , r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (We(t, e),
        Je(e),
        r & 4) {
        try {
          wr(3, e, e.return),
            Lo(3, e)
        } catch (x) {
          X(e, e.return, x)
        }
        try {
          wr(5, e, e.return)
        } catch (x) {
          X(e, e.return, x)
        }
      }
      break;
    case 1:
      We(t, e),
        Je(e),
        r & 512 && n !== null && Pn(n, n.return);
      break;
    case 5:
      if (We(t, e),
        Je(e),
        r & 512 && n !== null && Pn(n, n.return),
        e.flags & 32) {
        var i = e.stateNode;
        try {
          Mr(i, "")
        } catch (x) {
          X(e, e.return, x)
        }
      }
      if (r & 4 && (i = e.stateNode,
        i != null)) {
        var o = e.memoizedProps
          , s = n !== null ? n.memoizedProps : o
          , l = e.type
          , a = e.updateQueue;
        if (e.updateQueue = null,
          a !== null)
          try {
            l === "input" && o.type === "radio" && o.name != null && od(i, o),
              Us(l, s);
            var u = Us(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s]
                , f = a[s + 1];
              c === "style" ? cd(i, f) : c === "dangerouslySetInnerHTML" ? ad(i, f) : c === "children" ? Mr(i, f) : Yl(i, c, f, u)
            }
            switch (l) {
              case "input":
                Fs(i, o);
                break;
              case "textarea":
                sd(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? Dn(i, !!o.multiple, g, !1) : d !== !!o.multiple && (o.defaultValue != null ? Dn(i, !!o.multiple, o.defaultValue, !0) : Dn(i, !!o.multiple, o.multiple ? [] : "", !1))
            }
            i[Ir] = o
          } catch (x) {
            X(e, e.return, x)
          }
      }
      break;
    case 6:
      if (We(t, e),
        Je(e),
        r & 4) {
        if (e.stateNode === null)
          throw Error(k(162));
        i = e.stateNode,
          o = e.memoizedProps;
        try {
          i.nodeValue = o
        } catch (x) {
          X(e, e.return, x)
        }
      }
      break;
    case 3:
      if (We(t, e),
        Je(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Lr(t.containerInfo)
        } catch (x) {
          X(e, e.return, x)
        }
      break;
    case 4:
      We(t, e),
        Je(e);
      break;
    case 13:
      We(t, e),
        Je(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
          i.stateNode.isHidden = o,
          !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ma = q())),
        r & 4 && pc(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (pe = (u = pe) || c,
          We(t, e),
          pe = u) : We(t, e),
        Je(e),
        r & 8192) {
        if (u = e.memoizedState !== null,
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (M = e,
            c = e.child; c !== null;) {
            for (f = M = c; M !== null;) {
              switch (d = M,
              g = d.child,
              d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wr(4, d, d.return);
                  break;
                case 1:
                  Pn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = d,
                      n = d.return;
                    try {
                      t = r,
                        v.props = t.memoizedProps,
                        v.state = t.memoizedState,
                        v.componentWillUnmount()
                    } catch (x) {
                      X(r, n, x)
                    }
                  }
                  break;
                case 5:
                  Pn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    gc(f);
                    continue
                  }
              }
              g !== null ? (g.return = d,
                M = g) : gc(f)
            }
            c = c.sibling
          }
        e: for (c = null,
          f = e; ;) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode,
                  u ? (o = i.style,
                    typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                      a = f.memoizedProps.style,
                      s = a != null && a.hasOwnProperty("display") ? a.display : null,
                      l.style.display = ud("display", s))
              } catch (x) {
                X(e, e.return, x)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps
              } catch (x) {
                X(e, e.return, x)
              }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f,
              f = f.child;
            continue
          }
          if (f === e)
            break e;
          for (; f.sibling === null;) {
            if (f.return === null || f.return === e)
              break e;
            c === f && (c = null),
              f = f.return
          }
          c === f && (c = null),
            f.sibling.return = f.return,
            f = f.sibling
        }
      }
      break;
    case 19:
      We(t, e),
        Je(e),
        r & 4 && pc(e);
      break;
    case 21:
      break;
    default:
      We(t, e),
        Je(e)
  }
}
function Je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (_h(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error(k(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Mr(i, ""),
            r.flags &= -33);
          var o = hc(e);
          yl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo
            , l = hc(e);
          gl(e, l, s);
          break;
        default:
          throw Error(k(161))
      }
    } catch (a) {
      X(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Oy(e, t, n) {
  M = e,
    Oh(e)
}
function Oh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null;) {
    var i = M
      , o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ti;
      if (!s) {
        var l = i.alternate
          , a = l !== null && l.memoizedState !== null || pe;
        l = Ti;
        var u = pe;
        if (Ti = s,
          (pe = a) && !u)
          for (M = i; M !== null;)
            s = M,
              a = s.child,
              s.tag === 22 && s.memoizedState !== null ? yc(i) : a !== null ? (a.return = s,
                M = a) : yc(i);
        for (; o !== null;)
          M = o,
            Oh(o),
            o = o.sibling;
        M = i,
          Ti = l,
          pe = u
      }
      mc(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i,
        M = o) : mc(e)
  }
}
function mc(e) {
  for (; M !== null;) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                }
              var o = t.updateQueue;
              o !== null && Ju(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null,
                  t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode
                  }
                Ju(t, s, n)
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src)
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Lr(f)
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
              throw Error(k(163))
          }
        pe || t.flags & 512 && ml(t)
      } catch (d) {
        X(t, t.return, d)
      }
    }
    if (t === e) {
      M = null;
      break
    }
    if (n = t.sibling,
      n !== null) {
      n.return = t.return,
        M = n;
      break
    }
    M = t.return
  }
}
function gc(e) {
  for (; M !== null;) {
    var t = M;
    if (t === e) {
      M = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return,
        M = n;
      break
    }
    M = t.return
  }
}
function yc(e) {
  for (; M !== null;) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lo(4, t)
          } catch (a) {
            X(t, n, a)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount()
            } catch (a) {
              X(t, i, a)
            }
          }
          var o = t.return;
          try {
            ml(t)
          } catch (a) {
            X(t, o, a)
          }
          break;
        case 5:
          var s = t.return;
          try {
            ml(t)
          } catch (a) {
            X(t, s, a)
          }
      }
    } catch (a) {
      X(t, t.return, a)
    }
    if (t === e) {
      M = null;
      break
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return,
        M = l;
      break
    }
    M = t.return
  }
}
var zy = Math.ceil
  , co = yt.ReactCurrentDispatcher
  , Ea = yt.ReactCurrentOwner
  , ze = yt.ReactCurrentBatchConfig
  , F = 0
  , le = null
  , ee = null
  , ce = 0
  , Me = 0
  , Cn = Bt(0)
  , re = 0
  , Wr = null
  , un = 0
  , Ro = 0
  , Na = 0
  , Sr = null
  , ke = null
  , Ma = 0
  , Hn = 1 / 0
  , st = null
  , fo = !1
  , vl = null
  , Lt = null
  , Pi = !1
  , Et = null
  , ho = 0
  , kr = 0
  , xl = null
  , Oi = -1
  , zi = 0;
function xe() {
  return F & 6 ? q() : Oi !== -1 ? Oi : Oi = q()
}
function Rt(e) {
  return e.mode & 1 ? F & 2 && ce !== 0 ? ce & -ce : ky.transition !== null ? (zi === 0 && (zi = kd()),
    zi) : (e = I,
      e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : Ad(e.type)),
      e) : 1
}
function Xe(e, t, n, r) {
  if (50 < kr)
    throw kr = 0,
    xl = null,
    Error(k(185));
  Zr(e, n, r),
    (!(F & 2) || e !== le) && (e === le && (!(F & 2) && (Ro |= n),
      re === 4 && Pt(e, ce)),
      Ne(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && (Hn = q() + 500,
        Ao && Ut()))
}
function Ne(e, t) {
  var n = e.callbackNode;
  kg(e, t);
  var r = Yi(e, e === le ? ce : 0);
  if (r === 0)
    n !== null && Eu(n),
      e.callbackNode = null,
      e.callbackPriority = 0;
  else if (t = r & -r,
    e.callbackPriority !== t) {
    if (n != null && Eu(n),
      t === 1)
      e.tag === 0 ? Sy(vc.bind(null, e)) : Qd(vc.bind(null, e)),
        yy(function () {
          !(F & 6) && Ut()
        }),
        n = null;
    else {
      switch (Td(r)) {
        case 1:
          n = ea;
          break;
        case 4:
          n = wd;
          break;
        case 16:
          n = Qi;
          break;
        case 536870912:
          n = Sd;
          break;
        default:
          n = Qi
      }
      n = bh(n, zh.bind(null, e))
    }
    e.callbackPriority = t,
      e.callbackNode = n
  }
}
function zh(e, t) {
  if (Oi = -1,
    zi = 0,
    F & 6)
    throw Error(k(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n)
    return null;
  var r = Yi(e, e === le ? ce : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = po(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = Uh();
    (le !== e || ce !== t) && (st = null,
      Hn = q() + 500,
      tn(e, t));
    do
      try {
        $y();
        break
      } catch (l) {
        Bh(e, l)
      }
    while (!0);
    ha(),
      co.current = o,
      F = i,
      ee !== null ? t = 0 : (le = null,
        ce = 0,
        t = re)
  }
  if (t !== 0) {
    if (t === 2 && (i = bs(e),
      i !== 0 && (r = i,
        t = wl(e, i))),
      t === 1)
      throw n = Wr,
      tn(e, 0),
      Pt(e, r),
      Ne(e, q()),
      n;
    if (t === 6)
      Pt(e, r);
    else {
      if (i = e.current.alternate,
        !(r & 30) && !By(i) && (t = po(e, r),
          t === 2 && (o = bs(e),
            o !== 0 && (r = o,
              t = wl(e, o))),
          t === 1))
        throw n = Wr,
        tn(e, 0),
        Pt(e, r),
        Ne(e, q()),
        n;
      switch (e.finishedWork = i,
      e.finishedLanes = r,
      t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Qt(e, ke, st);
          break;
        case 3:
          if (Pt(e, r),
            (r & 130023424) === r && (t = Ma + 500 - q(),
              10 < t)) {
            if (Yi(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes,
              (i & r) !== r) {
              xe(),
                e.pingedLanes |= e.suspendedLanes & i;
              break
            }
            e.timeoutHandle = el(Qt.bind(null, e, ke, st), t);
            break
          }
          Qt(e, ke, st);
          break;
        case 4:
          if (Pt(e, r),
            (r & 4194240) === r)
            break;
          for (t = e.eventTimes,
            i = -1; 0 < r;) {
            var s = 31 - Ye(r);
            o = 1 << s,
              s = t[s],
              s > i && (i = s),
              r &= ~o
          }
          if (r = i,
            r = q() - r,
            r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zy(r / 1960)) - r,
            10 < r) {
            e.timeoutHandle = el(Qt.bind(null, e, ke, st), r);
            break
          }
          Qt(e, ke, st);
          break;
        case 5:
          Qt(e, ke, st);
          break;
        default:
          throw Error(k(329))
      }
    }
  }
  return Ne(e, q()),
    e.callbackNode === n ? zh.bind(null, e) : null
}
function wl(e, t) {
  var n = Sr;
  return e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256),
    e = po(e, t),
    e !== 2 && (t = ke,
      ke = n,
      t !== null && Sl(t)),
    e
}
function Sl(e) {
  ke === null ? ke = e : ke.push.apply(ke, e)
}
function By(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores,
        n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r]
            , o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(o(), i))
              return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child,
      t.subtreeFlags & 16384 && n !== null)
      n.return = t,
        t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return
      }
      t.sibling.return = t.return,
        t = t.sibling
    }
  }
  return !0
}
function Pt(e, t) {
  for (t &= ~Na,
    t &= ~Ro,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t;) {
    var n = 31 - Ye(t)
      , r = 1 << n;
    e[n] = -1,
      t &= ~r
  }
}
function vc(e) {
  if (F & 6)
    throw Error(k(327));
  Fn();
  var t = Yi(e, 0);
  if (!(t & 1))
    return Ne(e, q()),
      null;
  var n = po(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bs(e);
    r !== 0 && (t = r,
      n = wl(e, r))
  }
  if (n === 1)
    throw n = Wr,
    tn(e, 0),
    Pt(e, t),
    Ne(e, q()),
    n;
  if (n === 6)
    throw Error(k(345));
  return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Qt(e, ke, st),
    Ne(e, q()),
    null
}
function Aa(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t)
  } finally {
    F = n,
      F === 0 && (Hn = q() + 500,
        Ao && Ut())
  }
}
function cn(e) {
  Et !== null && Et.tag === 0 && !(F & 6) && Fn();
  var t = F;
  F |= 1;
  var n = ze.transition
    , r = I;
  try {
    if (ze.transition = null,
      I = 1,
      e)
      return e()
  } finally {
    I = r,
      ze.transition = n,
      F = t,
      !(F & 6) && Ut()
  }
}
function Va() {
  Me = Cn.current,
    B(Cn)
}
function tn(e, t) {
  e.finishedWork = null,
    e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1,
    gy(n)),
    ee !== null)
    for (n = ee.return; n !== null;) {
      var r = n;
      switch (ca(r),
      r.tag) {
        case 1:
          r = r.type.childContextTypes,
            r != null && eo();
          break;
        case 3:
          $n(),
            B(Ce),
            B(ge),
            xa();
          break;
        case 5:
          va(r);
          break;
        case 4:
          $n();
          break;
        case 13:
          B(K);
          break;
        case 19:
          B(K);
          break;
        case 10:
          pa(r.type._context);
          break;
        case 22:
        case 23:
          Va()
      }
      n = n.return
    }
  if (le = e,
    ee = e = jt(e.current, null),
    ce = Me = t,
    re = 0,
    Wr = null,
    Na = Ro = un = 0,
    ke = Sr = null,
    Zt !== null) {
    for (t = 0; t < Zt.length; t++)
      if (n = Zt[t],
        r = n.interleaved,
        r !== null) {
        n.interleaved = null;
        var i = r.next
          , o = n.pending;
        if (o !== null) {
          var s = o.next;
          o.next = i,
            r.next = s
        }
        n.pending = r
      }
    Zt = null
  }
  return e
}
function Bh(e, t) {
  do {
    var n = ee;
    try {
      if (ha(),
        _i.current = uo,
        ao) {
        for (var r = G.memoizedState; r !== null;) {
          var i = r.queue;
          i !== null && (i.pending = null),
            r = r.next
        }
        ao = !1
      }
      if (an = 0,
        se = ne = G = null,
        xr = !1,
        Br = 0,
        Ea.current = null,
        n === null || n.return === null) {
        re = 1,
          Wr = t,
          ee = null;
        break
      }
      e: {
        var o = e
          , s = n.return
          , l = n
          , a = t;
        if (t = ce,
          l.flags |= 32768,
          a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a
            , c = l
            , f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue,
              c.memoizedState = d.memoizedState,
              c.lanes = d.lanes) : (c.updateQueue = null,
                c.memoizedState = null)
          }
          var g = oc(s);
          if (g !== null) {
            g.flags &= -257,
              sc(g, s, l, o, t),
              g.mode & 1 && ic(o, u, t),
              t = g,
              a = u;
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set;
              x.add(a),
                t.updateQueue = x
            } else
              v.add(a);
            break e
          } else {
            if (!(t & 1)) {
              ic(o, u, t),
                Da();
              break e
            }
            a = Error(k(426))
          }
        } else if ($ && l.mode & 1) {
          var C = oc(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              sc(C, s, l, o, t),
              fa(Wn(a, l));
            break e
          }
        }
        o = a = Wn(a, l),
          re !== 4 && (re = 2),
          Sr === null ? Sr = [o] : Sr.push(o),
          o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536,
                t &= -t,
                o.lanes |= t;
              var p = Th(o, a, t);
              qu(o, p);
              break e;
            case 1:
              l = a;
              var h = o.type
                , m = o.stateNode;
              if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Lt === null || !Lt.has(m)))) {
                o.flags |= 65536,
                  t &= -t,
                  o.lanes |= t;
                var w = Ph(o, l, t);
                qu(o, w);
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      Wh(n)
    } catch (S) {
      t = S,
        ee === n && n !== null && (ee = n = n.return);
      continue
    }
    break
  } while (!0)
}
function Uh() {
  var e = co.current;
  return co.current = uo,
    e === null ? uo : e
}
function Da() {
  (re === 0 || re === 3 || re === 2) && (re = 4),
    le === null || !(un & 268435455) && !(Ro & 268435455) || Pt(le, ce)
}
function po(e, t) {
  var n = F;
  F |= 2;
  var r = Uh();
  (le !== e || ce !== t) && (st = null,
    tn(e, t));
  do
    try {
      Uy();
      break
    } catch (i) {
      Bh(e, i)
    }
  while (!0);
  if (ha(),
    F = n,
    co.current = r,
    ee !== null)
    throw Error(k(261));
  return le = null,
    ce = 0,
    re
}
function Uy() {
  for (; ee !== null;)
    $h(ee)
}
function $y() {
  for (; ee !== null && !hg();)
    $h(ee)
}
function $h(e) {
  var t = Kh(e.alternate, e, Me);
  e.memoizedProps = e.pendingProps,
    t === null ? Wh(e) : ee = t,
    Ea.current = null
}
function Wh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return,
      t.flags & 32768) {
      if (n = _y(n, t),
        n !== null) {
        n.flags &= 32767,
          ee = n;
        return
      }
      if (e !== null)
        e.flags |= 32768,
          e.subtreeFlags = 0,
          e.deletions = null;
      else {
        re = 6,
          ee = null;
        return
      }
    } else if (n = jy(n, t, Me),
      n !== null) {
      ee = n;
      return
    }
    if (t = t.sibling,
      t !== null) {
      ee = t;
      return
    }
    ee = t = e
  } while (t !== null);
  re === 0 && (re = 5)
}
function Qt(e, t, n) {
  var r = I
    , i = ze.transition;
  try {
    ze.transition = null,
      I = 1,
      Wy(e, t, n, r)
  } finally {
    ze.transition = i,
      I = r
  }
  return null
}
function Wy(e, t, n, r) {
  do
    Fn();
  while (Et !== null);
  if (F & 6)
    throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
    throw Error(k(177));
  e.callbackNode = null,
    e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Tg(e, o),
    e === le && (ee = le = null,
      ce = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pi || (Pi = !0,
      bh(Qi, function () {
        return Fn(),
          null
      })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
    o = ze.transition,
      ze.transition = null;
    var s = I;
    I = 1;
    var l = F;
    F |= 4,
      Ea.current = null,
      Iy(e, n),
      Ih(n, e),
      uy(qs),
      Xi = !!Zs,
      qs = Zs = null,
      e.current = n,
      Oy(n),
      pg(),
      F = l,
      I = s,
      ze.transition = o
  } else
    e.current = n;
  if (Pi && (Pi = !1,
    Et = e,
    ho = i),
    o = e.pendingLanes,
    o === 0 && (Lt = null),
    yg(n.stateNode),
    Ne(e, q()),
    t !== null)
    for (r = e.onRecoverableError,
      n = 0; n < t.length; n++)
      i = t[n],
        r(i.value, {
          componentStack: i.stack,
          digest: i.digest
        });
  if (fo)
    throw fo = !1,
    e = vl,
    vl = null,
    e;
  return ho & 1 && e.tag !== 0 && Fn(),
    o = e.pendingLanes,
    o & 1 ? e === xl ? kr++ : (kr = 0,
      xl = e) : kr = 0,
    Ut(),
    null
}
function Fn() {
  if (Et !== null) {
    var e = Td(ho)
      , t = ze.transition
      , n = I;
    try {
      if (ze.transition = null,
        I = 16 > e ? 16 : e,
        Et === null)
        var r = !1;
      else {
        if (e = Et,
          Et = null,
          ho = 0,
          F & 6)
          throw Error(k(331));
        var i = F;
        for (F |= 4,
          M = e.current; M !== null;) {
          var o = M
            , s = o.child;
          if (M.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (M = u; M !== null;) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(8, c, o)
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c,
                      M = f;
                  else
                    for (; M !== null;) {
                      c = M;
                      var d = c.sibling
                        , g = c.return;
                      if (jh(c),
                        c === u) {
                        M = null;
                        break
                      }
                      if (d !== null) {
                        d.return = g,
                          M = d;
                        break
                      }
                      M = g
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var C = x.sibling;
                    x.sibling = null,
                      x = C
                  } while (x !== null)
                }
              }
              M = o
            }
          }
          if (o.subtreeFlags & 2064 && s !== null)
            s.return = o,
              M = s;
          else
            e: for (; M !== null;) {
              if (o = M,
                o.flags & 2048)
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wr(9, o, o.return)
                }
              var p = o.sibling;
              if (p !== null) {
                p.return = o.return,
                  M = p;
                break e
              }
              M = o.return
            }
        }
        var h = e.current;
        for (M = h; M !== null;) {
          s = M;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null)
            m.return = s,
              M = m;
          else
            e: for (s = h; M !== null;) {
              if (l = M,
                l.flags & 2048)
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(9, l)
                  }
                } catch (S) {
                  X(l, l.return, S)
                }
              if (l === s) {
                M = null;
                break e
              }
              var w = l.sibling;
              if (w !== null) {
                w.return = l.return,
                  M = w;
                break e
              }
              M = l.return
            }
        }
        if (F = i,
          Ut(),
          nt && typeof nt.onPostCommitFiberRoot == "function")
          try {
            nt.onPostCommitFiberRoot(Po, e)
          } catch { }
        r = !0
      }
      return r
    } finally {
      I = n,
        ze.transition = t
    }
  }
  return !1
}
function xc(e, t, n) {
  t = Wn(n, t),
    t = Th(e, t, 1),
    e = Dt(e, t, 1),
    t = xe(),
    e !== null && (Zr(e, 1, t),
      Ne(e, t))
}
function X(e, t, n) {
  if (e.tag === 3)
    xc(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        xc(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Lt === null || !Lt.has(r))) {
          e = Wn(n, e),
            e = Ph(t, e, 1),
            t = Dt(t, e, 1),
            e = xe(),
            t !== null && (Zr(t, 1, e),
              Ne(t, e));
          break
        }
      }
      t = t.return
    }
}
function Hy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    t = xe(),
    e.pingedLanes |= e.suspendedLanes & n,
    le === e && (ce & n) === n && (re === 4 || re === 3 && (ce & 130023424) === ce && 500 > q() - Ma ? tn(e, 0) : Na |= n),
    Ne(e, t)
}
function Hh(e, t) {
  t === 0 && (e.mode & 1 ? (t = pi,
    pi <<= 1,
    !(pi & 130023424) && (pi = 4194304)) : t = 1);
  var n = xe();
  e = ht(e, t),
    e !== null && (Zr(e, t, n),
      Ne(e, n))
}
function Ky(e) {
  var t = e.memoizedState
    , n = 0;
  t !== null && (n = t.retryLane),
    Hh(e, n)
}
function by(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode
        , i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314))
  }
  r !== null && r.delete(t),
    Hh(e, n)
}
var Kh;
Kh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current)
      Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Te = !1,
          Ry(e, t, n);
      Te = !!(e.flags & 131072)
    }
  else
    Te = !1,
      $ && t.flags & 1048576 && Yd(t, ro, t.index);
  switch (t.lanes = 0,
  t.tag) {
    case 2:
      var r = t.type;
      Ii(e, t),
        e = t.pendingProps;
      var i = zn(t, ge.current);
      _n(t, n),
        i = Sa(null, t, r, e, i, n);
      var o = ka();
      return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
          t.memoizedState = null,
          t.updateQueue = null,
          Ee(r) ? (o = !0,
            to(t)) : o = !1,
          t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
          ga(t),
          i.updater = Do,
          t.stateNode = i,
          i._reactInternals = t,
          ll(t, r, e, n),
          t = cl(null, t, r, !0, o, n)) : (t.tag = 0,
            $ && o && ua(t),
            ye(null, t, i, n),
            t = t.child),
        t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ii(e, t),
        e = t.pendingProps,
        i = r._init,
        r = i(r._payload),
        t.type = r,
        i = t.tag = Qy(r),
        e = be(r, e),
        i) {
          case 0:
            t = ul(null, t, r, e, n);
            break e;
          case 1:
            t = uc(null, t, r, e, n);
            break e;
          case 11:
            t = lc(null, t, r, e, n);
            break e;
          case 14:
            t = ac(null, t, r, be(r.type, e), n);
            break e
        }
        throw Error(k(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        ul(e, t, r, i, n);
    case 1:
      return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        uc(e, t, r, i, n);
    case 3:
      e: {
        if (Mh(t),
          e === null)
          throw Error(k(387));
        r = t.pendingProps,
          o = t.memoizedState,
          i = o.element,
          th(e, t),
          so(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element,
          o.isDehydrated)
          if (o = {
            element: r,
            isDehydrated: !1,
            cache: s.cache,
            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
            transitions: s.transitions
          },
            t.updateQueue.baseState = o,
            t.memoizedState = o,
            t.flags & 256) {
            i = Wn(Error(k(423)), t),
              t = cc(e, t, r, n, i);
            break e
          } else if (r !== i) {
            i = Wn(Error(k(424)), t),
              t = cc(e, t, r, n, i);
            break e
          } else
            for (Ae = Vt(t.stateNode.containerInfo.firstChild),
              Ve = t,
              $ = !0,
              Qe = null,
              n = Jd(t, null, r, n),
              t.child = n; n;)
              n.flags = n.flags & -3 | 4096,
                n = n.sibling;
        else {
          if (Bn(),
            r === i) {
            t = pt(e, t, n);
            break e
          }
          ye(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return nh(t),
        e === null && il(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        Js(r, i) ? s = null : o !== null && Js(r, o) && (t.flags |= 32),
        Nh(e, t),
        ye(e, t, s, n),
        t.child;
    case 6:
      return e === null && il(t),
        null;
    case 13:
      return Ah(e, t, n);
    case 4:
      return ya(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Un(t, null, r, n) : ye(e, t, r, n),
        t.child;
    case 11:
      return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        lc(e, t, r, i, n);
    case 7:
      return ye(e, t, t.pendingProps, n),
        t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
      e: {
        if (r = t.type._context,
          i = t.pendingProps,
          o = t.memoizedProps,
          s = i.value,
          O(io, r._currentValue),
          r._currentValue = s,
          o !== null)
          if (Ze(o.value, s)) {
            if (o.children === i.children && !Ce.current) {
              t = pt(e, t, n);
              break e
            }
          } else
            for (o = t.child,
              o !== null && (o.return = t); o !== null;) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null;) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      a = ct(-1, n & -n),
                        a.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next,
                          c.next = a),
                          u.pending = a
                      }
                    }
                    o.lanes |= n,
                      a = o.alternate,
                      a !== null && (a.lanes |= n),
                      ol(o.return, n, t),
                      l.lanes |= n;
                    break
                  }
                  a = a.next
                }
              } else if (o.tag === 10)
                s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (s = o.return,
                  s === null)
                  throw Error(k(341));
                s.lanes |= n,
                  l = s.alternate,
                  l !== null && (l.lanes |= n),
                  ol(s, n, t),
                  s = o.sibling
              } else
                s = o.child;
              if (s !== null)
                s.return = o;
              else
                for (s = o; s !== null;) {
                  if (s === t) {
                    s = null;
                    break
                  }
                  if (o = s.sibling,
                    o !== null) {
                    o.return = s.return,
                      s = o;
                    break
                  }
                  s = s.return
                }
              o = s
            }
        ye(e, t, i.children, n),
          t = t.child
      }
      return t;
    case 9:
      return i = t.type,
        r = t.pendingProps.children,
        _n(t, n),
        i = Ue(i),
        r = r(i),
        t.flags |= 1,
        ye(e, t, r, n),
        t.child;
    case 14:
      return r = t.type,
        i = be(r, t.pendingProps),
        i = be(r.type, i),
        ac(e, t, r, i, n);
    case 15:
      return Ch(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        Ii(e, t),
        t.tag = 1,
        Ee(r) ? (e = !0,
          to(t)) : e = !1,
        _n(t, n),
        kh(t, r, i),
        ll(t, r, i, n),
        cl(null, t, r, !0, e, n);
    case 19:
      return Vh(e, t, n);
    case 22:
      return Eh(e, t, n)
  }
  throw Error(k(156, t.tag))
}
  ;
function bh(e, t) {
  return xd(e, t)
}
function Gy(e, t, n, r) {
  this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ie(e, t, n, r) {
  return new Gy(e, t, n, r)
}
function La(e) {
  return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Qy(e) {
  if (typeof e == "function")
    return La(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof,
      e === Zl)
      return 11;
    if (e === ql)
      return 14
  }
  return 2
}
function jt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ie(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
      n.type = e.type,
      n.flags = 0,
      n.subtreeFlags = 0,
      n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Bi(e, t, n, r, i, o) {
  var s = 2;
  if (r = e,
    typeof e == "function")
    La(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e: switch (e) {
      case mn:
        return nn(n.children, i, o, t);
      case Xl:
        s = 8,
          i |= 8;
        break;
      case Ds:
        return e = Ie(12, n, t, i | 2),
          e.elementType = Ds,
          e.lanes = o,
          e;
      case Ls:
        return e = Ie(13, n, t, i),
          e.elementType = Ls,
          e.lanes = o,
          e;
      case Rs:
        return e = Ie(19, n, t, i),
          e.elementType = Rs,
          e.lanes = o,
          e;
      case nd:
        return jo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ed:
              s = 10;
              break e;
            case td:
              s = 9;
              break e;
            case Zl:
              s = 11;
              break e;
            case ql:
              s = 14;
              break e;
            case St:
              s = 16,
                r = null;
              break e
          }
        throw Error(k(130, e == null ? e : typeof e, ""))
    }
  return t = Ie(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function nn(e, t, n, r) {
  return e = Ie(7, e, r, t),
    e.lanes = n,
    e
}
function jo(e, t, n, r) {
  return e = Ie(22, e, r, t),
    e.elementType = nd,
    e.lanes = n,
    e.stateNode = {
      isHidden: !1
    },
    e
}
function hs(e, t, n) {
  return e = Ie(6, e, null, t),
    e.lanes = n,
    e
}
function ps(e, t, n) {
  return t = Ie(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    },
    t
}
function Yy(e, t, n, r, i) {
  this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Qo(0),
    this.expirationTimes = Qo(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Qo(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Ra(e, t, n, r, i, o, s, l, a) {
  return e = new Yy(e, t, n, l, a),
    t === 1 ? (t = 1,
      o === !0 && (t |= 8)) : t = 0,
    o = Ie(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    },
    ga(o),
    e
}
function Xy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: pn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function Gh(e) {
  if (!e)
    return Ft;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1)
      throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(k(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n))
      return Gd(e, n, t)
  }
  return t
}
function Qh(e, t, n, r, i, o, s, l, a) {
  return e = Ra(n, r, !0, e, i, o, s, l, a),
    e.context = Gh(null),
    n = e.current,
    r = xe(),
    i = Rt(n),
    o = ct(r, i),
    o.callback = t ?? null,
    Dt(n, o, i),
    e.current.lanes = i,
    Zr(e, i, r),
    Ne(e, r),
    e
}
function _o(e, t, n, r) {
  var i = t.current
    , o = xe()
    , s = Rt(i);
  return n = Gh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = ct(o, s),
    t.payload = {
      element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Dt(i, t, s),
    e !== null && (Xe(e, i, s, o),
      ji(e, i, s)),
    s
}
function mo(e) {
  if (e = e.current,
    !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}
function wc(e, t) {
  if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function ja(e, t) {
  wc(e, t),
    (e = e.alternate) && wc(e, t)
}
function Zy() {
  return null
}
var Yh = typeof reportError == "function" ? reportError : function (e) {
  console.error(e)
}
  ;
function _a(e) {
  this._internalRoot = e
}
Fo.prototype.render = _a.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(k(409));
  _o(e, t, null, null)
}
  ;
Fo.prototype.unmount = _a.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cn(function () {
      _o(null, e, null, null)
    }),
      t[dt] = null
  }
}
  ;
function Fo(e) {
  this._internalRoot = e
}
Fo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ed();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++)
      ;
    Tt.splice(n, 0, e),
      n === 0 && Md(e)
  }
}
  ;
function Fa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Io(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Sc() { }
function qy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = mo(s);
        o.call(u)
      }
    }
    var s = Qh(t, r, e, 0, null, !1, !1, "", Sc);
    return e._reactRootContainer = s,
      e[dt] = s.current,
      _r(e.nodeType === 8 ? e.parentNode : e),
      cn(),
      s
  }
  for (; i = e.lastChild;)
    e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = mo(a);
      l.call(u)
    }
  }
  var a = Ra(e, 0, !1, null, null, !1, !1, "", Sc);
  return e._reactRootContainer = a,
    e[dt] = a.current,
    _r(e.nodeType === 8 ? e.parentNode : e),
    cn(function () {
      _o(t, a, n, r)
    }),
    a
}
function Oo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = mo(s);
        l.call(a)
      }
    }
    _o(t, s, e, i)
  } else
    s = qy(n, t, e, i, r);
  return mo(s)
}
Pd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fr(t.pendingLanes);
        n !== 0 && (ta(t, n | 1),
          Ne(t, q()),
          !(F & 6) && (Hn = q() + 500,
            Ut()))
      }
      break;
    case 13:
      cn(function () {
        var r = ht(e, 1);
        if (r !== null) {
          var i = xe();
          Xe(r, e, 1, i)
        }
      }),
        ja(e, 1)
  }
}
  ;
na = function (e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728);
    if (t !== null) {
      var n = xe();
      Xe(t, e, 134217728, n)
    }
    ja(e, 134217728)
  }
}
  ;
Cd = function (e) {
  if (e.tag === 13) {
    var t = Rt(e)
      , n = ht(e, t);
    if (n !== null) {
      var r = xe();
      Xe(n, e, t, r)
    }
    ja(e, t)
  }
}
  ;
Ed = function () {
  return I
}
  ;
Nd = function (e, t) {
  var n = I;
  try {
    return I = e,
      t()
  } finally {
    I = n
  }
}
  ;
Ws = function (e, t, n) {
  switch (t) {
    case "input":
      if (Fs(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
        for (n = e; n.parentNode;)
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
          t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Mo(r);
            if (!i)
              throw Error(k(90));
            id(r),
              Fs(r, i)
          }
        }
      }
      break;
    case "textarea":
      sd(e, n);
      break;
    case "select":
      t = n.value,
        t != null && Dn(e, !!n.multiple, t, !1)
  }
}
  ;
hd = Aa;
pd = cn;
var Jy = {
  usingClientEntryPoint: !1,
  Events: [Jr, xn, Mo, fd, dd, Aa]
}
  , lr = {
    findFiberByHostInstance: Xt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }
  , e0 = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return e = yd(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || Zy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ci.isDisabled && Ci.supportsFiber)
    try {
      Po = Ci.inject(e0),
        nt = Ci
    } catch { }
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fa(t))
    throw Error(k(200));
  return Xy(e, t, null, n)
}
  ;
Le.createRoot = function (e, t) {
  if (!Fa(e))
    throw Error(k(299));
  var n = !1
    , r = ""
    , i = Yh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Ra(e, 1, !1, null, null, n, !1, r, i),
    e[dt] = t.current,
    _r(e.nodeType === 8 ? e.parentNode : e),
    new _a(t)
}
  ;
Le.findDOMNode = function (e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","),
      Error(k(268, e)));
  return e = yd(t),
    e = e === null ? null : e.stateNode,
    e
}
  ;
Le.flushSync = function (e) {
  return cn(e)
}
  ;
Le.hydrate = function (e, t, n) {
  if (!Io(t))
    throw Error(k(200));
  return Oo(null, e, t, !0, n)
}
  ;
Le.hydrateRoot = function (e, t, n) {
  if (!Fa(e))
    throw Error(k(405));
  var r = n != null && n.hydratedSources || null
    , i = !1
    , o = ""
    , s = Yh;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Qh(t, null, e, 1, n ?? null, i, !1, o, s),
    e[dt] = t.current,
    _r(e),
    r)
    for (e = 0; e < r.length; e++)
      n = r[e],
        i = n._getVersion,
        i = i(n._source),
        t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
  return new Fo(t)
}
  ;
Le.render = function (e, t, n) {
  if (!Io(t))
    throw Error(k(200));
  return Oo(null, e, t, !1, n)
}
  ;
Le.unmountComponentAtNode = function (e) {
  if (!Io(e))
    throw Error(k(40));
  return e._reactRootContainer ? (cn(function () {
    Oo(null, null, e, !1, function () {
      e._reactRootContainer = null,
        e[dt] = null
    })
  }),
    !0) : !1
}
  ;
Le.unstable_batchedUpdates = Aa;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Io(n))
    throw Error(k(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(k(38));
  return Oo(e, t, n, !1, r)
}
  ;
Le.version = "18.3.1-next-f1338f8080-20240426";
function Xh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xh)
    } catch (e) {
      console.error(e)
    }
}
Xh(),
  Xf.exports = Le;
var t0 = Xf.exports, Zh, kc = t0;
Zh = kc.createRoot,
  kc.hydrateRoot;
const qh = L.createContext({});
function n0(e) {
  const t = L.useRef(null);
  return t.current === null && (t.current = e()),
    t.current
}
const Ia = typeof window < "u"
  , r0 = Ia ? L.useLayoutEffect : L.useEffect
  , Oa = L.createContext(null);
function za(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function Ba(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1)
}
const mt = (e, t, n) => n > t ? t : n < e ? e : n;
let go = () => { }
  ;
const gt = {}
  , Jh = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function ep(e) {
  return typeof e == "object" && e !== null
}
const tp = e => /^0[^.\s]+$/u.test(e);
function Ua(e) {
  let t;
  return () => (t === void 0 && (t = e()),
    t)
}
const Be = e => e
  , i0 = (e, t) => n => t(e(n))
  , ti = (...e) => e.reduce(i0)
  , Hr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
  }
  ;
class $a {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return za(this.subscriptions, t),
      () => Ba(this.subscriptions, t)
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const it = e => e * 1e3
  , Oe = e => e / 1e3;
function np(e, t) {
  return t ? e * (1e3 / t) : 0
}
const rp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , o0 = 1e-7
  , s0 = 12;
function l0(e, t, n, r, i) {
  let o, s, l = 0;
  do
    s = t + (n - t) / 2,
      o = rp(s, r, i) - e,
      o > 0 ? n = s : t = s;
  while (Math.abs(o) > o0 && ++l < s0);
  return s
}
function ni(e, t, n, r) {
  if (e === t && n === r)
    return Be;
  const i = o => l0(o, 0, 1, e, n);
  return o => o === 0 || o === 1 ? o : rp(i(o), t, r)
}
const ip = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , op = e => t => 1 - e(1 - t)
  , sp = ni(.33, 1.53, .69, .99)
  , Wa = op(sp)
  , lp = ip(Wa)
  , ap = e => (e *= 2) < 1 ? .5 * Wa(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Ha = e => 1 - Math.sin(Math.acos(e))
  , up = op(Ha)
  , cp = ip(Ha)
  , a0 = ni(.42, 0, 1, 1)
  , u0 = ni(0, 0, .58, 1)
  , fp = ni(.42, 0, .58, 1)
  , c0 = e => Array.isArray(e) && typeof e[0] != "number"
  , dp = e => Array.isArray(e) && typeof e[0] == "number"
  , Tc = {
    linear: Be,
    easeIn: a0,
    easeInOut: fp,
    easeOut: u0,
    circIn: Ha,
    circInOut: cp,
    circOut: up,
    backIn: Wa,
    backInOut: lp,
    backOut: sp,
    anticipate: ap
  }
  , f0 = e => typeof e == "string"
  , Pc = e => {
    if (dp(e)) {
      go(e.length === 4);
      const [t, n, r, i] = e;
      return ni(t, n, r, i)
    } else if (f0(e))
      return go(Tc[e] !== void 0),
        Tc[e];
    return e
  }
  , Ei = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Cc = {
    value: null,
    addProjectionMetrics: null
  };
function d0(e, t) {
  let n = new Set
    , r = new Set
    , i = !1
    , o = !1;
  const s = new WeakSet;
  let l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }
    , a = 0;
  function u(f) {
    s.has(f) && (c.schedule(f),
      e()),
      a++ ,
      f(l)
  }
  const c = {
    schedule: (f, d = !1, g = !1) => {
      const x = g && i ? n : r;
      return d && s.add(f),
        x.has(f) || x.add(f),
        f
    }
    ,
    cancel: f => {
      r.delete(f),
        s.delete(f)
    }
    ,
    process: f => {
      if (l = f,
        i) {
        o = !0;
        return
      }
      i = !0,
        [n, r] = [r, n],
        n.forEach(u),
        t && Cc.value && Cc.value.frameloop[t].push(a),
        a = 0,
        n.clear(),
        i = !1,
        o && (o = !1,
          c.process(f))
    }
  };
  return c
}
const h0 = 40;
function hp(e, t) {
  let n = !1
    , r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }
    , o = () => n = !0
    , s = Ei.reduce((m, w) => (m[w] = d0(o, t ? w : void 0),
      m), {})
    , { setup: l, read: a, resolveKeyframes: u, preUpdate: c, update: f, preRender: d, render: g, postRender: v } = s
    , x = () => {
      const m = gt.useManualTiming ? i.timestamp : performance.now();
      n = !1,
        gt.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, h0), 1)),
        i.timestamp = m,
        i.isProcessing = !0,
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        g.process(i),
        v.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
          e(x))
    }
    , C = () => {
      n = !0,
        r = !0,
        i.isProcessing || e(x)
    }
    ;
  return {
    schedule: Ei.reduce((m, w) => {
      const S = s[w];
      return m[w] = (P, E = !1, T = !1) => (n || C(),
        S.schedule(P, E, T)),
        m
    }
      , {}),
    cancel: m => {
      for (let w = 0; w < Ei.length; w++)
        s[Ei[w]].cancel(m)
    }
    ,
    state: i,
    steps: s
  }
}
const { schedule: W, cancel: It, state: ue, steps: ms } = hp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0);
let Ui;
function p0() {
  Ui = void 0
}
const Pe = {
  now: () => (Ui === void 0 && Pe.set(ue.isProcessing || gt.useManualTiming ? ue.timestamp : performance.now()),
    Ui),
  set: e => {
    Ui = e,
      queueMicrotask(p0)
  }
}
  , pp = e => t => typeof t == "string" && t.startsWith(e)
  , Ka = pp("--")
  , m0 = pp("var(--")
  , ba = e => m0(e) ? g0.test(e.split("/*")[0].trim()) : !1
  , g0 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Xn = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
  }
  , Kr = {
    ...Xn,
    transform: e => mt(0, 1, e)
  }
  , Ni = {
    ...Xn,
    default: 1
  }
  , Tr = e => Math.round(e * 1e5) / 1e5
  , Ga = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function y0(e) {
  return e == null
}
const v0 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Qa = (e, t) => n => !!(typeof n == "string" && v0.test(n) && n.startsWith(e) || t && !y0(n) && Object.prototype.hasOwnProperty.call(n, t))
  , mp = (e, t, n) => r => {
    if (typeof r != "string")
      return r;
    const [i, o, s, l] = r.match(Ga);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1
    }
  }
  , x0 = e => mt(0, 255, e)
  , gs = {
    ...Xn,
    transform: e => Math.round(x0(e))
  }
  , Jt = {
    test: Qa("rgb", "red"),
    parse: mp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + gs.transform(e) + ", " + gs.transform(t) + ", " + gs.transform(n) + ", " + Tr(Kr.transform(r)) + ")"
  };
function w0(e) {
  let t = ""
    , n = ""
    , r = ""
    , i = "";
  return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
      n = e.substring(2, 3),
      r = e.substring(3, 4),
      i = e.substring(4, 5),
      t += t,
      n += n,
      r += r,
      i += i),
  {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  }
}
const kl = {
  test: Qa("#"),
  parse: w0,
  transform: Jt.transform
}
  , ri = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
  })
  , wt = ri("deg")
  , ot = ri("%")
  , D = ri("px")
  , S0 = ri("vh")
  , k0 = ri("vw")
  , Ec = {
    ...ot,
    parse: e => ot.parse(e) / 100,
    transform: e => ot.transform(e * 100)
  }
  , En = {
    test: Qa("hsl", "hue"),
    parse: mp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + ot.transform(Tr(t)) + ", " + ot.transform(Tr(n)) + ", " + Tr(Kr.transform(r)) + ")"
  }
  , J = {
    test: e => Jt.test(e) || kl.test(e) || En.test(e),
    parse: e => Jt.test(e) ? Jt.parse(e) : En.test(e) ? En.parse(e) : kl.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Jt.transform(e) : En.transform(e),
    getAnimatableNone: e => {
      const t = J.parse(e);
      return t.alpha = 0,
        J.transform(t)
    }
  }
  , T0 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function P0(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Ga)) == null ? void 0 : t.length) || 0) + (((n = e.match(T0)) == null ? void 0 : n.length) || 0) > 0
}
const gp = "number"
  , yp = "color"
  , C0 = "var"
  , E0 = "var("
  , Nc = "${}"
  , N0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function br(e) {
  const t = e.toString()
    , n = []
    , r = {
      color: [],
      number: [],
      var: []
    }
    , i = [];
  let o = 0;
  const l = t.replace(N0, a => (J.test(a) ? (r.color.push(o),
    i.push(yp),
    n.push(J.parse(a))) : a.startsWith(E0) ? (r.var.push(o),
      i.push(C0),
      n.push(a)) : (r.number.push(o),
        i.push(gp),
        n.push(parseFloat(a))),
    ++o,
    Nc)).split(Nc);
  return {
    values: n,
    split: l,
    indexes: r,
    types: i
  }
}
function vp(e) {
  return br(e).values
}
function xp(e) {
  const { split: t, types: n } = br(e)
    , r = t.length;
  return i => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (o += t[s],
        i[s] !== void 0) {
        const l = n[s];
        l === gp ? o += Tr(i[s]) : l === yp ? o += J.transform(i[s]) : o += i[s]
      }
    return o
  }
}
const M0 = e => typeof e == "number" ? 0 : J.test(e) ? J.getAnimatableNone(e) : e;
function A0(e) {
  const t = vp(e);
  return xp(e)(t.map(M0))
}
const Ot = {
  test: P0,
  parse: vp,
  createTransformer: xp,
  getAnimatableNone: A0
};
function ys(e, t, n) {
  return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function V0({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360,
    t /= 100,
    n /= 100;
  let i = 0
    , o = 0
    , s = 0;
  if (!t)
    i = o = s = n;
  else {
    const l = n < .5 ? n * (1 + t) : n + t - n * t
      , a = 2 * n - l;
    i = ys(a, l, e + 1 / 3),
      o = ys(a, l, e),
      s = ys(a, l, e - 1 / 3)
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r
  }
}
function yo(e, t) {
  return n => n > 0 ? t : e
}
const b = (e, t, n) => e + (t - e) * n
  , vs = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
  }
  , D0 = [kl, Jt, En]
  , L0 = e => D0.find(t => t.test(e));
function Mc(e) {
  const t = L0(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === En && (n = V0(n)),
    n
}
const Ac = (e, t) => {
  const n = Mc(e)
    , r = Mc(t);
  if (!n || !r)
    return yo(e, t);
  const i = {
    ...n
  };
  return o => (i.red = vs(n.red, r.red, o),
    i.green = vs(n.green, r.green, o),
    i.blue = vs(n.blue, r.blue, o),
    i.alpha = b(n.alpha, r.alpha, o),
    Jt.transform(i))
}
  , Tl = new Set(["none", "hidden"]);
function R0(e, t) {
  return Tl.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function j0(e, t) {
  return n => b(e, t, n)
}
function Ya(e) {
  return typeof e == "number" ? j0 : typeof e == "string" ? ba(e) ? yo : J.test(e) ? Ac : I0 : Array.isArray(e) ? wp : typeof e == "object" ? J.test(e) ? Ac : _0 : yo
}
function wp(e, t) {
  const n = [...e]
    , r = n.length
    , i = e.map((o, s) => Ya(o)(o, t[s]));
  return o => {
    for (let s = 0; s < r; s++)
      n[s] = i[s](o);
    return n
  }
}
function _0(e, t) {
  const n = {
    ...e,
    ...t
  }
    , r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ya(e[i])(e[i], t[i]));
  return i => {
    for (const o in r)
      n[o] = r[o](i);
    return n
  }
}
function F0(e, t) {
  const n = []
    , r = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i]
      , s = e.indexes[o][r[o]]
      , l = e.values[s] ?? 0;
    n[i] = l,
      r[o]++
  }
  return n
}
const I0 = (e, t) => {
  const n = Ot.createTransformer(t)
    , r = br(e)
    , i = br(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Tl.has(e) && !i.values.length || Tl.has(t) && !r.values.length ? R0(e, t) : ti(wp(F0(r, i), i.values), n) : yo(e, t)
}
  ;
function Sp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? b(e, t, n) : Ya(e)(e, t)
}
const O0 = e => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => W.update(t, n),
    stop: () => It(t),
    now: () => ue.isProcessing ? ue.timestamp : Pe.now()
  }
}
  , kp = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
      r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
  }
  , vo = 2e4;
function Xa(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < vo;)
    t += n,
      r = e.next(t);
  return t >= vo ? 1 / 0 : t
}
function z0(e, t = 100, n) {
  const r = n({
    ...e,
    keyframes: [0, t]
  })
    , i = Math.min(Xa(r), vo);
  return {
    type: "keyframes",
    ease: o => r.next(i * o).value / t,
    duration: Oe(i)
  }
}
const B0 = 5;
function Tp(e, t, n) {
  const r = Math.max(t - B0, 0);
  return np(n - e(r), t - r)
}
const Y = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: .3,
  visualDuration: .3,
  restSpeed: {
    granular: .01,
    default: 2
  },
  restDelta: {
    granular: .005,
    default: .5
  },
  minDuration: .01,
  maxDuration: 10,
  minDamping: .05,
  maxDamping: 1
}
  , xs = .001;
function U0({ duration: e = Y.duration, bounce: t = Y.bounce, velocity: n = Y.velocity, mass: r = Y.mass }) {
  let i, o, s = 1 - t;
  s = mt(Y.minDamping, Y.maxDamping, s),
    e = mt(Y.minDuration, Y.maxDuration, Oe(e)),
    s < 1 ? (i = u => {
      const c = u * s
        , f = c * e
        , d = c - n
        , g = Pl(u, s)
        , v = Math.exp(-f);
      return xs - d / g * v
    }
      ,
      o = u => {
        const f = u * s * e
          , d = f * n + n
          , g = Math.pow(s, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-f)
          , x = Pl(Math.pow(u, 2), s);
        return (-i(u) + xs > 0 ? -1 : 1) * ((d - g) * v) / x
      }
    ) : (i = u => {
      const c = Math.exp(-u * e)
        , f = (u - n) * e + 1;
      return -xs + c * f
    }
      ,
      o = u => {
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
      }
      );
  const l = 5 / e
    , a = W0(i, o, l);
  if (e = it(e),
    isNaN(a))
    return {
      stiffness: Y.stiffness,
      damping: Y.damping,
      duration: e
    };
  {
    const u = Math.pow(a, 2) * r;
    return {
      stiffness: u,
      damping: s * 2 * Math.sqrt(r * u),
      duration: e
    }
  }
}
const $0 = 12;
function W0(e, t, n) {
  let r = n;
  for (let i = 1; i < $0; i++)
    r = r - e(r) / t(r);
  return r
}
function Pl(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const H0 = ["duration", "bounce"]
  , K0 = ["stiffness", "damping", "mass"];
function Vc(e, t) {
  return t.some(n => e[n] !== void 0)
}
function b0(e) {
  let t = {
    velocity: Y.velocity,
    stiffness: Y.stiffness,
    damping: Y.damping,
    mass: Y.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Vc(e, K0) && Vc(e, H0))
    if (e.visualDuration) {
      const n = e.visualDuration
        , r = 2 * Math.PI / (n * 1.2)
        , i = r * r
        , o = 2 * mt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: Y.mass,
        stiffness: i,
        damping: o
      }
    } else {
      const n = U0(e);
      t = {
        ...t,
        ...n,
        mass: Y.mass
      },
        t.isResolvedFromDuration = !0
    }
  return t
}
function xo(e = Y.visualDuration, t = Y.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0]
    , s = n.keyframes[n.keyframes.length - 1]
    , l = {
      done: !1,
      value: o
    }
    , { stiffness: a, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: g } = b0({
      ...n,
      velocity: -Oe(n.velocity || 0)
    })
    , v = d || 0
    , x = u / (2 * Math.sqrt(a * c))
    , C = s - o
    , p = Oe(Math.sqrt(a / c))
    , h = Math.abs(C) < 5;
  r || (r = h ? Y.restSpeed.granular : Y.restSpeed.default),
    i || (i = h ? Y.restDelta.granular : Y.restDelta.default);
  let m;
  if (x < 1) {
    const S = Pl(p, x);
    m = P => {
      const E = Math.exp(-x * p * P);
      return s - E * ((v + x * p * C) / S * Math.sin(S * P) + C * Math.cos(S * P))
    }
  } else if (x === 1)
    m = S => s - Math.exp(-p * S) * (C + (v + p * C) * S);
  else {
    const S = p * Math.sqrt(x * x - 1);
    m = P => {
      const E = Math.exp(-x * p * P)
        , T = Math.min(S * P, 300);
      return s - E * ((v + x * p * C) * Math.sinh(T) + S * C * Math.cosh(T)) / S
    }
  }
  const w = {
    calculatedDuration: g && f || null,
    next: S => {
      const P = m(S);
      if (g)
        l.done = S >= f;
      else {
        let E = S === 0 ? v : 0;
        x < 1 && (E = S === 0 ? it(v) : Tp(m, S, P));
        const T = Math.abs(E) <= r
          , _ = Math.abs(s - P) <= i;
        l.done = T && _
      }
      return l.value = l.done ? s : P,
        l
    }
    ,
    toString: () => {
      const S = Math.min(Xa(w), vo)
        , P = kp(E => w.next(S * E).value, S, 30);
      return S + "ms " + P
    }
    ,
    toTransition: () => { }
  };
  return w
}
xo.applyToOptions = e => {
  const t = z0(e, 100, xo);
  return e.ease = t.ease,
    e.duration = it(t.duration),
    e.type = "keyframes",
    e
}
  ;
function Cl({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: l, max: a, restDelta: u = .5, restSpeed: c }) {
  const f = e[0]
    , d = {
      done: !1,
      value: f
    }
    , g = T => l !== void 0 && T < l || a !== void 0 && T > a
    , v = T => l === void 0 ? a : a === void 0 || Math.abs(l - T) < Math.abs(a - T) ? l : a;
  let x = n * t;
  const C = f + x
    , p = s === void 0 ? C : s(C);
  p !== C && (x = p - f);
  const h = T => -x * Math.exp(-T / r)
    , m = T => p + h(T)
    , w = T => {
      const _ = h(T)
        , V = m(T);
      d.done = Math.abs(_) <= u,
        d.value = d.done ? p : V
    }
    ;
  let S, P;
  const E = T => {
    g(d.value) && (S = T,
      P = xo({
        keyframes: [d.value, v(d.value)],
        velocity: Tp(m, T, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c
      }))
  }
    ;
  return E(0),
  {
    calculatedDuration: null,
    next: T => {
      let _ = !1;
      return !P && S === void 0 && (_ = !0,
        w(T),
        E(T)),
        S !== void 0 && T >= S ? P.next(T - S) : (!_ && w(T),
          d)
    }
  }
}
function G0(e, t, n) {
  const r = []
    , i = n || gt.mix || Sp
    , o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || Be : t;
      l = ti(a, l)
    }
    r.push(l)
  }
  return r
}
function Q0(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (go(o === t.length),
    o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
  const l = G0(t, r, i)
    , a = l.length
    , u = c => {
      if (s && c < e[0])
        return t[0];
      let f = 0;
      if (a > 1)
        for (; f < e.length - 2 && !(c < e[f + 1]); f++)
          ;
      const d = Hr(e[f], e[f + 1], c);
      return l[f](d)
    }
    ;
  return n ? c => u(mt(e[0], e[o - 1], c)) : u
}
function Y0(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Hr(0, t, r);
    e.push(b(n, 1, i))
  }
}
function X0(e) {
  const t = [0];
  return Y0(t, e.length - 1),
    t
}
function Z0(e, t) {
  return e.map(n => n * t)
}
function q0(e, t) {
  return e.map(() => t || fp).splice(0, e.length - 1)
}
function Pr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = c0(r) ? r.map(Pc) : Pc(r)
    , o = {
      done: !1,
      value: t[0]
    }
    , s = Z0(n && n.length === t.length ? n : X0(t), e)
    , l = Q0(s, t, {
      ease: Array.isArray(i) ? i : q0(t, i)
    });
  return {
    calculatedDuration: e,
    next: a => (o.value = l(a),
      o.done = a >= e,
      o)
  }
}
const J0 = e => e !== null;
function Za(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const o = e.filter(J0)
    , l = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !l || r === void 0 ? o[l] : r
}
const ev = {
  decay: Cl,
  inertia: Cl,
  tween: Pr,
  keyframes: Pr,
  spring: xo
};
function Pp(e) {
  typeof e.type == "string" && (e.type = ev[e.type])
}
class qa {
  constructor() {
    this.updateFinished()
  }
  get finished() {
    return this._finished
  }
  updateFinished() {
    this._finished = new Promise(t => {
      this.resolve = t
    }
    )
  }
  notifyFinished() {
    this.resolve()
  }
  then(t, n) {
    return this.finished.then(t, n)
  }
}
const tv = e => e / 100;
class Ja extends qa {
  constructor(t) {
    super(),
      this.state = "idle",
      this.startTime = null,
      this.isStopped = !1,
      this.currentTime = 0,
      this.holdTime = null,
      this.playbackSpeed = 1,
      this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== Pe.now() && this.tick(Pe.now()),
          this.isStopped = !0,
          this.state !== "idle" && (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r))
      }
      ,
      this.options = t,
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause()
  }
  initAnimation() {
    const { options: t } = this;
    Pp(t);
    const { type: n = Pr, repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = t;
    let { keyframes: l } = t;
    const a = n || Pr;
    a !== Pr && typeof l[0] != "number" && (this.mixKeyframes = ti(tv, Sp(l[0], l[1])),
      l = [0, 100]);
    const u = a({
      ...t,
      keyframes: l
    });
    o === "mirror" && (this.mirroredGenerator = a({
      ...t,
      keyframes: [...l].reverse(),
      velocity: -s
    })),
      u.calculatedDuration === null && (u.calculatedDuration = Xa(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c,
      this.resolvedDuration = c + i,
      this.totalDuration = this.resolvedDuration * (r + 1) - i,
      this.generator = u
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: i, mixKeyframes: o, mirroredGenerator: s, resolvedDuration: l, calculatedDuration: a } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: u = 0, keyframes: c, repeat: f, repeatType: d, repeatDelay: g, type: v, onUpdate: x, finalKeyframe: C } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? this.currentTime = t : this.updateTime(t);
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
      , h = this.playbackSpeed >= 0 ? p < 0 : p > i;
    this.currentTime = Math.max(p, 0),
      this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let m = this.currentTime
      , w = r;
    if (f) {
      const T = Math.min(this.currentTime, i) / l;
      let _ = Math.floor(T)
        , V = T % 1;
      !V && T >= 1 && (V = 1),
        V === 1 && _-- ,
        _ = Math.min(_, f + 1),
        !!(_ % 2) && (d === "reverse" ? (V = 1 - V,
          g && (V -= g / l)) : d === "mirror" && (w = s)),
        m = mt(0, 1, V) * l
    }
    const S = h ? {
      done: !1,
      value: c[0]
    } : w.next(m);
    o && (S.value = o(S.value));
    let { done: P } = S;
    !h && a !== null && (P = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
    return E && v !== Cl && (S.value = Za(c, this.options, C, this.speed)),
      x && x(S.value),
      E && this.finish(),
      S
  }
  then(t, n) {
    return this.finished.then(t, n)
  }
  get duration() {
    return Oe(this.calculatedDuration)
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Oe(t)
  }
  get time() {
    return Oe(this.currentTime)
  }
  set time(t) {
    var n;
    t = it(t),
      this.currentTime = t,
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(t) {
    this.updateTime(Pe.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t,
      n && (this.time = Oe(this.currentTime))
  }
  play() {
    var i, o;
    if (this.isStopped)
      return;
    const { driver: t = O0, startTime: n } = this.options;
    this.driver || (this.driver = t(s => this.tick(s))),
      (o = (i = this.options).onPlay) == null || o.call(i);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(),
      this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      this.holdTime = null,
      this.state = "running",
      this.driver.start()
  }
  pause() {
    this.state = "paused",
      this.updateTime(Pe.now()),
      this.holdTime = this.currentTime
  }
  complete() {
    this.state !== "running" && this.play(),
      this.state = "finished",
      this.holdTime = null
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      this.state = "finished",
      (n = (t = this.options).onComplete) == null || n.call(t)
  }
  cancel() {
    var t, n;
    this.holdTime = null,
      this.startTime = 0,
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t)
  }
  teardown() {
    this.state = "idle",
      this.stopDriver(),
      this.startTime = this.holdTime = null
  }
  stopDriver() {
    this.driver && (this.driver.stop(),
      this.driver = void 0)
  }
  sample(t) {
    return this.startTime = 0,
      this.tick(t, !0)
  }
  attachTimeline(t) {
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes",
      this.options.ease = "linear",
      this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
  }
}
function nv(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1])
}
const en = e => e * 180 / Math.PI
  , El = e => {
    const t = en(Math.atan2(e[1], e[0]));
    return Nl(t)
  }
  , rv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: El,
    rotateZ: El,
    skewX: e => en(Math.atan(e[1])),
    skewY: e => en(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
  }
  , Nl = e => (e = e % 360,
    e < 0 && (e += 360),
    e)
  , Dc = El
  , Lc = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Rc = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , iv = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Lc,
    scaleY: Rc,
    scale: e => (Lc(e) + Rc(e)) / 2,
    rotateX: e => Nl(en(Math.atan2(e[6], e[5]))),
    rotateY: e => Nl(en(Math.atan2(-e[2], e[0]))),
    rotateZ: Dc,
    rotate: Dc,
    skewX: e => en(Math.atan(e[4])),
    skewY: e => en(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
  };
function Ml(e) {
  return e.includes("scale") ? 1 : 0
}
function Al(e, t) {
  if (!e || e === "none")
    return Ml(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n)
    r = iv,
      i = n;
  else {
    const l = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = rv,
      i = l
  }
  if (!i)
    return Ml(t);
  const o = r[t]
    , s = i[1].split(",").map(sv);
  return typeof o == "function" ? o(s) : s[o]
}
const ov = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Al(n, t)
}
  ;
function sv(e) {
  return parseFloat(e.trim())
}
const Zn = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , qn = new Set(Zn)
  , jc = e => e === Xn || e === D
  , lv = new Set(["x", "y", "z"])
  , av = Zn.filter(e => !lv.has(e));
function uv(e) {
  const t = [];
  return av.forEach(n => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]),
      r.set(n.startsWith("scale") ? 1 : 0))
  }
  ),
    t
}
const rn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Al(t, "x"),
  y: (e, { transform: t }) => Al(t, "y")
};
rn.translateX = rn.x;
rn.translateY = rn.y;
const on = new Set;
let Vl = !1
  , Dl = !1
  , Ll = !1;
function Cp() {
  if (Dl) {
    const e = Array.from(on).filter(r => r.needsMeasurement)
      , t = new Set(e.map(r => r.element))
      , n = new Map;
    t.forEach(r => {
      const i = uv(r);
      i.length && (n.set(r, i),
        r.render())
    }
    ),
      e.forEach(r => r.measureInitialState()),
      t.forEach(r => {
        r.render();
        const i = n.get(r);
        i && i.forEach(([o, s]) => {
          var l;
          (l = r.getValue(o)) == null || l.set(s)
        }
        )
      }
      ),
      e.forEach(r => r.measureEndState()),
      e.forEach(r => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
      }
      )
  }
  Dl = !1,
    Vl = !1,
    on.forEach(e => e.complete(Ll)),
    on.clear()
}
function Ep() {
  on.forEach(e => {
    e.readKeyframes(),
      e.needsMeasurement && (Dl = !0)
  }
  )
}
function cv() {
  Ll = !0,
    Ep(),
    Cp(),
    Ll = !1
}
class eu {
  constructor(t, n, r, i, o, s = !1) {
    this.state = "pending",
      this.isAsync = !1,
      this.needsMeasurement = !1,
      this.unresolvedKeyframes = [...t],
      this.onComplete = n,
      this.name = r,
      this.motionValue = i,
      this.element = o,
      this.isAsync = s
  }
  scheduleResolve() {
    this.state = "scheduled",
      this.isAsync ? (on.add(this),
        Vl || (Vl = !0,
          W.read(Ep),
          W.resolveKeyframes(Cp))) : (this.readKeyframes(),
            this.complete())
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    if (t[0] === null) {
      const o = i == null ? void 0 : i.get()
        , s = t[t.length - 1];
      if (o !== void 0)
        t[0] = o;
      else if (r && n) {
        const l = r.readValue(n, s);
        l != null && (t[0] = l)
      }
      t[0] === void 0 && (t[0] = s),
        i && o === void 0 && i.set(t[0])
    }
    nv(t)
  }
  setFinalKeyframe() { }
  measureInitialState() { }
  renderEndStyles() { }
  measureEndState() { }
  complete(t = !1) {
    this.state = "complete",
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      on.delete(this)
  }
  cancel() {
    this.state === "scheduled" && (on.delete(this),
      this.state = "pending")
  }
  resume() {
    this.state === "pending" && this.scheduleResolve()
  }
}
const fv = e => e.startsWith("--");
function dv(e, t, n) {
  fv(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const hv = Ua(() => window.ScrollTimeline !== void 0)
  , pv = {};
function mv(e, t) {
  const n = Ua(e);
  return () => pv[t] ?? n()
}
const Np = mv(() => {
  try {
    document.createElement("div").animate({
      opacity: 0
    }, {
      easing: "linear(0, 1)"
    })
  } catch {
    return !1
  }
  return !0
}
  , "linearEasing")
  , hr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , _c = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: hr([0, .65, .55, 1]),
    circOut: hr([.55, 0, 1, .45]),
    backIn: hr([.31, .01, .66, -.59]),
    backOut: hr([.33, 1.53, .69, .99])
  };
function Mp(e, t) {
  if (e)
    return typeof e == "function" ? Np() ? kp(e, t) : "ease-out" : dp(e) ? hr(e) : Array.isArray(e) ? e.map(n => Mp(n, t) || _c.easeOut) : _c[e]
}
function gv(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: l = "easeOut", times: a } = {}, u = void 0) {
  const c = {
    [t]: n
  };
  a && (c.offset = a);
  const f = Mp(l, i);
  Array.isArray(f) && (c.easing = f);
  const d = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  };
  return u && (d.pseudoElement = u),
    e.animate(c, d)
}
function Ap(e) {
  return typeof e == "function" && "applyToOptions" in e
}
function yv({ type: e, ...t }) {
  return Ap(e) && Np() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class vv extends qa {
  constructor(t) {
    if (super(),
      this.finishedTime = null,
      this.isStopped = !1,
      !t)
      return;
    const { element: n, name: r, keyframes: i, pseudoElement: o, allowFlatten: s = !1, finalKeyframe: l, onComplete: a } = t;
    this.isPseudoElement = !!o,
      this.allowFlatten = s,
      this.options = t,
      go(typeof t.type != "string");
    const u = yv(t);
    this.animation = gv(n, r, i, u, o),
      u.autoplay === !1 && this.animation.pause(),
      this.animation.onfinish = () => {
        if (this.finishedTime = this.time,
          !o) {
          const c = Za(i, this.options, l, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : dv(n, r, c),
            this.animation.cancel()
        }
        a == null || a(),
          this.notifyFinished()
      }
  }
  play() {
    this.isStopped || (this.animation.play(),
      this.state === "finished" && this.updateFinished())
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t)
  }
  cancel() {
    try {
      this.animation.cancel()
    } catch { }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel())
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t)
  }
  get duration() {
    var n, r;
    const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
    return Oe(Number(t))
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Oe(t)
  }
  get time() {
    return Oe(Number(this.animation.currentTime) || 0)
  }
  set time(t) {
    this.finishedTime = null,
      this.animation.currentTime = it(t)
  }
  get speed() {
    return this.animation.playbackRate
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null),
      this.animation.playbackRate = t
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState
  }
  get startTime() {
    return Number(this.animation.startTime)
  }
  set startTime(t) {
    this.animation.startTime = t
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
      easing: "linear"
    })),
      this.animation.onfinish = null,
      t && hv() ? (this.animation.timeline = t,
        Be) : n(this)
  }
}
const Vp = {
  anticipate: ap,
  backInOut: lp,
  circInOut: cp
};
function xv(e) {
  return e in Vp
}
function wv(e) {
  typeof e.ease == "string" && xv(e.ease) && (e.ease = Vp[e.ease])
}
const Fc = 10;
class Sv extends vv {
  constructor(t) {
    wv(t),
      Pp(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      this.options = t
  }
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: i, element: o, ...s } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return
    }
    const l = new Ja({
      ...s,
      autoplay: !1
    })
      , a = it(this.finishedTime ?? this.time);
    n.setWithVelocity(l.sample(a - Fc).value, l.sample(a).value, Fc),
      l.stop()
  }
}
const Ic = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ot.test(e) || e === "0") && !e.startsWith("url("));
function kv(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0
}
function Tv(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1]
    , s = Ic(i, t)
    , l = Ic(o, t);
  return !s || !l ? !1 : kv(e) || (n === "spring" || Ap(n)) && r
}
function Rl(e) {
  e.duration = 0,
    e.type = "keyframes"
}
const Pv = new Set(["opacity", "clipPath", "filter", "transform"])
  , Cv = Ua(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ev(e) {
  var c;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: s } = e;
  if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: a, transformTemplate: u } = t.owner.getProps();
  return Cv() && n && Pv.has(n) && (n !== "transform" || !u) && !a && !r && i !== "mirror" && o !== 0 && s !== "inertia"
}
const Nv = 40;
class Mv extends qa {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", keyframes: l, name: a, motionValue: u, element: c, ...f }) {
    var v;
    super(),
      this.stop = () => {
        var x, C;
        this._animation && (this._animation.stop(),
          (x = this.stopTimeline) == null || x.call(this)),
          (C = this.keyframeResolver) == null || C.cancel()
      }
      ,
      this.createdAt = Pe.now();
    const d = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: s,
      name: a,
      motionValue: u,
      element: c,
      ...f
    }
      , g = (c == null ? void 0 : c.KeyframeResolver) || eu;
    this.keyframeResolver = new g(l, (x, C, p) => this.onKeyframesResolved(x, C, d, !p), a, u, c),
      (v = this.keyframeResolver) == null || v.scheduleResolve()
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: s, velocity: l, delay: a, isHandoff: u, onUpdate: c } = r;
    this.resolvedAt = Pe.now(),
      Tv(t, o, s, l) || ((gt.instantAnimations || !a) && (c == null || c(Za(t, r, n))),
        t[0] = t[t.length - 1],
        Rl(r),
        r.repeat = 0);
    const d = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Nv ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }
      , g = !u && Ev(d) ? new Sv({
        ...d,
        element: d.motionValue.owner.current
      }) : new Ja(d);
    g.finished.then(() => this.notifyFinished()).catch(Be),
      this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
      this._animation = g
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished
  }
  then(t, n) {
    return this.finished.finally(t).then(() => { }
    )
  }
  get animation() {
    var t;
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
      cv()),
      this._animation
  }
  get duration() {
    return this.animation.duration
  }
  get iterationDuration() {
    return this.animation.iterationDuration
  }
  get time() {
    return this.animation.time
  }
  set time(t) {
    this.animation.time = t
  }
  get speed() {
    return this.animation.speed
  }
  get state() {
    return this.animation.state
  }
  set speed(t) {
    this.animation.speed = t
  }
  get startTime() {
    return this.animation.startTime
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
      () => this.stop()
  }
  play() {
    this.animation.play()
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    this.animation.complete()
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel()
  }
}
const Av = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Vv(e) {
  const t = Av.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i]
}
function Dp(e, t, n = 1) {
  const [r, i] = Vv(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Jh(s) ? parseFloat(s) : s
  }
  return ba(i) ? Dp(i, t, n + 1) : i
}
function tu(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
}
const Lp = new Set(["width", "height", "top", "left", "right", "bottom", ...Zn])
  , Dv = {
    test: e => e === "auto",
    parse: e => e
  }
  , Rp = e => t => t.test(e)
  , jp = [Xn, D, ot, wt, k0, S0, Dv]
  , Oc = e => jp.find(Rp(e));
function Lv(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || tp(e) : !0
}
const Rv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function jv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Ga) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let o = Rv.has(t) ? 1 : 0;
  return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const _v = /\b([a-z-]*)\(.*?\)/gu
  , jl = {
    ...Ot,
    getAnimatableNone: e => {
      const t = e.match(_v);
      return t ? t.map(jv).join(" ") : e
    }
  }
  , zc = {
    ...Xn,
    transform: Math.round
  }
  , Fv = {
    rotate: wt,
    rotateX: wt,
    rotateY: wt,
    rotateZ: wt,
    scale: Ni,
    scaleX: Ni,
    scaleY: Ni,
    scaleZ: Ni,
    skew: wt,
    skewX: wt,
    skewY: wt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Kr,
    originX: Ec,
    originY: Ec,
    originZ: D
  }
  , nu = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    backgroundPositionX: D,
    backgroundPositionY: D,
    ...Fv,
    zIndex: zc,
    fillOpacity: Kr,
    strokeOpacity: Kr,
    numOctaves: zc
  }
  , Iv = {
    ...nu,
    color: J,
    backgroundColor: J,
    outlineColor: J,
    fill: J,
    stroke: J,
    borderColor: J,
    borderTopColor: J,
    borderRightColor: J,
    borderBottomColor: J,
    borderLeftColor: J,
    filter: jl,
    WebkitFilter: jl
  }
  , _p = e => Iv[e];
function Fp(e, t) {
  let n = _p(e);
  return n !== jl && (n = Ot),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Ov = new Set(["auto", "none", "0"]);
function zv(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i;) {
    const o = e[r];
    typeof o == "string" && !Ov.has(o) && br(o).values.length && (i = e[r]),
      r++
  }
  if (i && n)
    for (const o of t)
      e[o] = Fp(n, i)
}
class Bv extends eu {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0)
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && (u = u.trim(),
        ba(u))) {
        const c = Dp(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u)
      }
    }
    if (this.resolveNoneKeyframes(),
      !Lp.has(r) || t.length !== 2)
      return;
    const [i, o] = t
      , s = Oc(i)
      , l = Oc(o);
    if (s !== l)
      if (jc(s) && jc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u))
        }
      else
        rn[r] && (this.needsMeasurement = !0)
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this
      , r = [];
    for (let i = 0; i < t.length; i++)
      (t[i] === null || Lv(t[i])) && r.push(i);
    r.length && zv(t, r, n)
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      this.measuredOrigin = rn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
      n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1)
  }
  measureEndState() {
    var l;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1
      , s = r[o];
    r[o] = rn[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (l = this.removedTransforms) != null && l.length && this.removedTransforms.forEach(([a, u]) => {
        t.getValue(a).set(u)
      }
      ),
      this.resolveNoneKeyframes()
  }
}
function Uv(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : []
  }
  return Array.from(e)
}
const Ip = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function $v(e) {
  return ep(e) && "offsetHeight" in e
}
const Bc = 30
  , Wv = e => !isNaN(parseFloat(e));
class Hv {
  constructor(t, n = {}) {
    this.canTrackVelocity = null,
      this.events = {},
      this.updateAndNotify = r => {
        var o;
        const i = Pe.now();
        if (this.updatedAt !== i && this.setPrevFrameValue(),
          this.prev = this.current,
          this.setCurrent(r),
          this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
          for (const s of this.dependents)
            s.dirty()
      }
      ,
      this.hasAnimated = !1,
      this.setCurrent(t),
      this.owner = n.owner
  }
  setCurrent(t) {
    this.current = t,
      this.updatedAt = Pe.now(),
      this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Wv(this.current))
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t,
      this.prevUpdatedAt = this.updatedAt
  }
  onChange(t) {
    return this.on("change", t)
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new $a);
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(),
        W.read(() => {
          this.events.change.getSize() || this.stop()
        }
        )
    }
      : r
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear()
  }
  attach(t, n) {
    this.passiveEffect = t,
      this.stopPassiveEffect = n
  }
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      this.prev = void 0,
      this.prevFrameValue = t,
      this.prevUpdatedAt = this.updatedAt - r
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      this.prev = t,
      this.prevUpdatedAt = this.prevFrameValue = void 0,
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current)
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set),
      this.dependents.add(t)
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t)
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const t = Pe.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Bc)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Bc);
    return np(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start(t) {
    return this.stop(),
      new Promise(n => {
        this.hasAnimated = !0,
          this.animation = t(n),
          this.events.animationStart && this.events.animationStart.notify()
      }
      ).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      }
      )
  }
  stop() {
    this.animation && (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function Kn(e, t) {
  return new Hv(e, t)
}
const { schedule: ru, cancel: Jw } = hp(queueMicrotask, !1)
  , Ke = {
    x: !1,
    y: !1
  };
function Op() {
  return Ke.x || Ke.y
}
function Kv(e) {
  return e === "x" || e === "y" ? Ke[e] ? null : (Ke[e] = !0,
    () => {
      Ke[e] = !1
    }
  ) : Ke.x || Ke.y ? null : (Ke.x = Ke.y = !0,
    () => {
      Ke.x = Ke.y = !1
    }
  )
}
function zp(e, t) {
  const n = Uv(e)
    , r = new AbortController
    , i = {
      passive: !0,
      ...t,
      signal: r.signal
    };
  return [n, i, () => r.abort()]
}
function Uc(e) {
  return !(e.pointerType === "touch" || Op())
}
function bv(e, t, n = {}) {
  const [r, i, o] = zp(e, n)
    , s = l => {
      if (!Uc(l))
        return;
      const { target: a } = l
        , u = t(a, l);
      if (typeof u != "function" || !a)
        return;
      const c = f => {
        Uc(f) && (u(f),
          a.removeEventListener("pointerleave", c))
      }
        ;
      a.addEventListener("pointerleave", c, i)
    }
    ;
  return r.forEach(l => {
    l.addEventListener("pointerenter", s, i)
  }
  ),
    o
}
const Bp = (e, t) => t ? e === t ? !0 : Bp(e, t.parentElement) : !1
  , iu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , Gv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Qv(e) {
  return Gv.has(e.tagName) || e.tabIndex !== -1
}
const $i = new WeakSet;
function $c(e) {
  return t => {
    t.key === "Enter" && e(t)
  }
}
function ws(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, {
    isPrimary: !0,
    bubbles: !0
  }))
}
const Yv = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = $c(() => {
    if ($i.has(n))
      return;
    ws(n, "down");
    const i = $c(() => {
      ws(n, "up")
    }
    )
      , o = () => ws(n, "cancel");
    n.addEventListener("keyup", i, t),
      n.addEventListener("blur", o, t)
  }
  );
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
  ;
function Wc(e) {
  return iu(e) && !Op()
}
function Xv(e, t, n = {}) {
  const [r, i, o] = zp(e, n)
    , s = l => {
      const a = l.currentTarget;
      if (!Wc(l))
        return;
      $i.add(a);
      const u = t(a, l)
        , c = (g, v) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            $i.has(a) && $i.delete(a),
            Wc(g) && typeof u == "function" && u(g, {
              success: v
            })
        }
        , f = g => {
          c(g, a === window || a === document || n.useGlobalTarget || Bp(a, g.target))
        }
        , d = g => {
          c(g, !1)
        }
        ;
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i)
    }
    ;
  return r.forEach(l => {
    (n.useGlobalTarget ? window : l).addEventListener("pointerdown", s, i),
      $v(l) && (l.addEventListener("focus", u => Yv(u, i)),
        !Qv(l) && !l.hasAttribute("tabindex") && (l.tabIndex = 0))
  }
  ),
    o
}
function Up(e) {
  return ep(e) && "ownerSVGElement" in e
}
function Zv(e) {
  return Up(e) && e.tagName === "svg"
}
const me = e => !!(e && e.getVelocity)
  , qv = [...jp, J, Ot]
  , Jv = e => qv.find(Rp(e))
  , $p = L.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
  });
function e1(e = !0) {
  const t = L.useContext(Oa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t
    , o = L.useId();
  L.useEffect(() => {
    if (e)
      return i(o)
  }
    , [e]);
  const s = L.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0]
}
const Wp = L.createContext({
  strict: !1
})
  , Hc = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  }
  , bn = {};
for (const e in Hc)
  bn[e] = {
    isEnabled: t => Hc[e].some(n => !!t[n])
  };
function t1(e) {
  for (const t in e)
    bn[t] = {
      ...bn[t],
      ...e[t]
    }
}
const n1 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function wo(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || n1.has(e)
}
let Hp = e => !wo(e);
function r1(e) {
  typeof e == "function" && (Hp = t => t.startsWith("on") ? !wo(t) : e(t))
}
try {
  r1(require("@emotion/is-prop-valid").default)
} catch { }
function i1(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (Hp(i) || n === !0 && wo(i) || !t && !wo(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r
}
const zo = L.createContext({});
function Bo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function"
}
function Gr(e) {
  return typeof e == "string" || Array.isArray(e)
}
const ou = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , su = ["initial", ...ou];
function Uo(e) {
  return Bo(e.animate) || su.some(t => Gr(e[t]))
}
function Kp(e) {
  return !!(Uo(e) || e.variants)
}
function o1(e, t) {
  if (Uo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Gr(n) ? n : void 0,
      animate: Gr(r) ? r : void 0
    }
  }
  return e.inherit !== !1 ? t : {}
}
function s1(e) {
  const { initial: t, animate: n } = o1(e, L.useContext(zo));
  return L.useMemo(() => ({
    initial: t,
    animate: n
  }), [Kc(t), Kc(n)])
}
function Kc(e) {
  return Array.isArray(e) ? e.join(" ") : e
}
const Qr = {};
function l1(e) {
  for (const t in e)
    Qr[t] = e[t],
      Ka(t) && (Qr[t].isCSSVariable = !0)
}
function bp(e, { layout: t, layoutId: n }) {
  return qn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Qr[e] || e === "opacity")
}
const a1 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}
  , u1 = Zn.length;
function c1(e, t, n) {
  let r = ""
    , i = !0;
  for (let o = 0; o < u1; o++) {
    const s = Zn[o]
      , l = e[s];
    if (l === void 0)
      continue;
    let a = !0;
    if (typeof l == "number" ? a = l === (s.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0,
      !a || n) {
      const u = Ip(l, nu[s]);
      if (!a) {
        i = !1;
        const c = a1[s] || s;
        r += `${c}(${u}) `
      }
      n && (t[s] = u)
    }
  }
  return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function lu(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1
    , l = !1;
  for (const a in t) {
    const u = t[a];
    if (qn.has(a)) {
      s = !0;
      continue
    } else if (Ka(a)) {
      i[a] = u;
      continue
    } else {
      const c = Ip(u, nu[a]);
      a.startsWith("origin") ? (l = !0,
        o[a] = c) : r[a] = c
    }
  }
  if (t.transform || (s || n ? r.transform = c1(t, e.transform, n) : r.transform && (r.transform = "none")),
    l) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${a} ${u} ${c}`
  }
}
const au = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Gp(e, t, n) {
  for (const r in t)
    !me(t[r]) && !bp(r, n) && (e[r] = t[r])
}
function f1({ transformTemplate: e }, t) {
  return L.useMemo(() => {
    const n = au();
    return lu(n, t, e),
      Object.assign({}, n.vars, n.style)
  }
    , [t])
}
function d1(e, t) {
  const n = e.style || {}
    , r = {};
  return Gp(r, n, e),
    Object.assign(r, f1(e, t)),
    r
}
function h1(e, t) {
  const n = {}
    , r = d1(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const p1 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}
  , m1 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
function g1(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? p1 : m1;
  e[o.offset] = D.transform(-r);
  const s = D.transform(t)
    , l = D.transform(n);
  e[o.array] = `${s} ${l}`
}
function Qp(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: o = 1, pathOffset: s = 0, ...l }, a, u, c) {
  if (lu(e, l, u),
    a) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return
  }
  e.attrs = e.style,
    e.style = {};
  const { attrs: f, style: d } = e;
  f.transform && (d.transform = f.transform,
    delete f.transform),
    (d.transform || f.transformOrigin) && (d.transformOrigin = f.transformOrigin ?? "50% 50%",
      delete f.transformOrigin),
    d.transform && (d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
      delete f.transformBox),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && g1(f, i, o, s, !1)
}
const Yp = () => ({
  ...au(),
  attrs: {}
})
  , Xp = e => typeof e == "string" && e.toLowerCase() === "svg";
function y1(e, t, n, r) {
  const i = L.useMemo(() => {
    const o = Yp();
    return Qp(o, t, Xp(r), e.transformTemplate, e.style),
    {
      ...o.attrs,
      style: {
        ...o.style
      }
    }
  }
    , [t]);
  if (e.style) {
    const o = {};
    Gp(o, e.style, e),
      i.style = {
        ...o,
        ...i.style
      }
  }
  return i
}
const v1 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function uu(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(v1.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function x1(e, t, n, { latestValues: r }, i, o = !1) {
  const l = (uu(e) ? y1 : h1)(t, r, i, e)
    , a = i1(t, typeof e == "string", o)
    , u = e !== L.Fragment ? {
      ...a,
      ...l,
      ref: n
    } : {}
    , { children: c } = t
    , f = L.useMemo(() => me(c) ? c.get() : c, [c]);
  return L.createElement(e, {
    ...u,
    children: f
  })
}
function bc(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(),
      t[1][r] = n.getVelocity()
  }
  ),
    t
}
function cu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = bc(r);
    t = t(n !== void 0 ? n : e.custom, i, o)
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
    const [i, o] = bc(r);
    t = t(n !== void 0 ? n : e.custom, i, o)
  }
  return t
}
function Wi(e) {
  return me(e) ? e.get() : e
}
function w1({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return {
    latestValues: S1(n, r, i, e),
    renderState: t()
  }
}
function S1(e, t, n, r) {
  const i = {}
    , o = r(e, {});
  for (const d in o)
    i[d] = Wi(o[d]);
  let { initial: s, animate: l } = e;
  const a = Uo(e)
    , u = Kp(e);
  t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  if (f && typeof f != "boolean" && !Bo(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const v = cu(e, d[g]);
      if (v) {
        const { transitionEnd: x, transition: C, ...p } = v;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const w = c ? m.length - 1 : 0;
            m = m[w]
          }
          m !== null && (i[h] = m)
        }
        for (const h in x)
          i[h] = x[h]
      }
    }
  }
  return i
}
const Zp = e => (t, n) => {
  const r = L.useContext(zo)
    , i = L.useContext(Oa)
    , o = () => w1(e, t, r, i);
  return n ? o() : n0(o)
}
  ;
function fu(e, t, n) {
  var o;
  const { style: r } = e
    , i = {};
  for (const s in r)
    (me(r[s]) || t.style && me(t.style[s]) || bp(s, e) || ((o = n == null ? void 0 : n.getValue(s)) == null ? void 0 : o.liveStyle) !== void 0) && (i[s] = r[s]);
  return i
}
const k1 = Zp({
  scrapeMotionValuesFromProps: fu,
  createRenderState: au
});
function qp(e, t, n) {
  const r = fu(e, t, n);
  for (const i in e)
    if (me(e[i]) || me(t[i])) {
      const o = Zn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i]
    }
  return r
}
const T1 = Zp({
  scrapeMotionValuesFromProps: qp,
  createRenderState: Yp
})
  , P1 = Symbol.for("motionComponentSymbol");
function Nn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function C1(e, t, n) {
  return L.useCallback(r => {
    r && e.onMount && e.onMount(r),
      t && (r ? t.mount(r) : t.unmount()),
      n && (typeof n == "function" ? n(r) : Nn(n) && (n.current = r))
  }
    , [t])
}
const du = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , E1 = "framerAppearId"
  , Jp = "data-" + du(E1)
  , em = L.createContext({});
function N1(e, t, n, r, i) {
  var x, C;
  const { visualElement: o } = L.useContext(zo)
    , s = L.useContext(Wp)
    , l = L.useContext(Oa)
    , a = L.useContext($p).reducedMotion
    , u = L.useRef(null);
  r = r || s.renderer,
    !u.current && r && (u.current = r(e, {
      visualState: t,
      parent: o,
      props: n,
      presenceContext: l,
      blockInitialAnimation: l ? l.initial === !1 : !1,
      reducedMotionConfig: a
    }));
  const c = u.current
    , f = L.useContext(em);
  c && !c.projection && i && (c.type === "html" || c.type === "svg") && M1(u.current, n, i, f);
  const d = L.useRef(!1);
  L.useInsertionEffect(() => {
    c && d.current && c.update(n, l)
  }
  );
  const g = n[Jp]
    , v = L.useRef(!!g && !((x = window.MotionHandoffIsComplete) != null && x.call(window, g)) && ((C = window.MotionHasOptimisedAnimation) == null ? void 0 : C.call(window, g)));
  return r0(() => {
    c && (d.current = !0,
      window.MotionIsMounted = !0,
      c.updateFeatures(),
      c.scheduleRenderMicrotask(),
      v.current && c.animationState && c.animationState.animateChanges())
  }
  ),
    L.useEffect(() => {
      c && (!v.current && c.animationState && c.animationState.animateChanges(),
        v.current && (queueMicrotask(() => {
          var p;
          (p = window.MotionHandoffMarkAsComplete) == null || p.call(window, g)
        }
        ),
          v.current = !1),
        c.enteringChildren = void 0)
    }
    ),
    c
}
function M1(e, t, n, r) {
  const { layoutId: i, layout: o, drag: s, dragConstraints: l, layoutScroll: a, layoutRoot: u, layoutCrossfade: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : tm(e.parent)),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || l && Nn(l),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: a,
      layoutRoot: u
    })
}
function tm(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : tm(e.parent)
}
function Ss(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && t1(n);
  const i = uu(e) ? T1 : k1;
  function o(l, a) {
    let u;
    const c = {
      ...L.useContext($p),
      ...l,
      layoutId: A1(l)
    }
      , { isStatic: f } = c
      , d = s1(l)
      , g = i(l, f);
    if (!f && Ia) {
      V1();
      const v = D1(c);
      u = v.MeasureLayout,
        d.visualElement = N1(e, g, c, r, v.ProjectionNode)
    }
    return y.jsxs(zo.Provider, {
      value: d,
      children: [u && d.visualElement ? y.jsx(u, {
        visualElement: d.visualElement,
        ...c
      }) : null, x1(e, l, C1(g, d.visualElement, a), g, f, t)]
    })
  }
  o.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const s = L.forwardRef(o);
  return s[P1] = e,
    s
}
function A1({ layoutId: e }) {
  const t = L.useContext(qh).id;
  return t && e !== void 0 ? t + "-" + e : e
}
function V1(e, t) {
  L.useContext(Wp).strict
}
function D1(e) {
  const { drag: t, layout: n } = bn;
  if (!t && !n)
    return {};
  const r = {
    ...t,
    ...n
  };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  }
}
function L1(e, t) {
  if (typeof Proxy > "u")
    return Ss;
  const n = new Map
    , r = (o, s) => Ss(o, s, e, t)
    , i = (o, s) => r(o, s);
  return new Proxy(i, {
    get: (o, s) => s === "create" ? r : (n.has(s) || n.set(s, Ss(s, void 0, e, t)),
      n.get(s))
  })
}
function nm({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: {
      min: t,
      max: n
    },
    y: {
      min: e,
      max: r
    }
  }
}
function R1({ x: e, y: t }) {
  return {
    top: t.min,
    right: e.max,
    bottom: t.max,
    left: e.min
  }
}
function j1(e, t) {
  if (!t)
    return e;
  const n = t({
    x: e.left,
    y: e.top
  })
    , r = t({
      x: e.right,
      y: e.bottom
    });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  }
}
function ks(e) {
  return e === void 0 || e === 1
}
function _l({ scale: e, scaleX: t, scaleY: n }) {
  return !ks(e) || !ks(t) || !ks(n)
}
function Yt(e) {
  return _l(e) || rm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function rm(e) {
  return Gc(e.x) || Gc(e.y)
}
function Gc(e) {
  return e && e !== "0%"
}
function So(e, t, n) {
  const r = e - n
    , i = t * r;
  return n + i
}
function Qc(e, t, n, r, i) {
  return i !== void 0 && (e = So(e, i, r)),
    So(e, n, r) + t
}
function Fl(e, t = 0, n = 1, r, i) {
  e.min = Qc(e.min, t, n, r, i),
    e.max = Qc(e.max, t, n, r, i)
}
function im(e, { x: t, y: n }) {
  Fl(e.x, t.translate, t.scale, t.originPoint),
    Fl(e.y, n.translate, n.scale, n.originPoint)
}
const Yc = .999999999999
  , Xc = 1.0000000000001;
function _1(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    o = n[l],
      s = o.projectionDelta;
    const { visualElement: a } = o.options;
    a && a.props.style && a.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && An(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }),
      s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        im(e, s)),
      r && Yt(o.latestValues) && An(e, o.latestValues))
  }
  t.x < Xc && t.x > Yc && (t.x = 1),
    t.y < Xc && t.y > Yc && (t.y = 1)
}
function Mn(e, t) {
  e.min = e.min + t,
    e.max = e.max + t
}
function Zc(e, t, n, r, i = .5) {
  const o = b(e.min, e.max, i);
  Fl(e, t, n, o, r)
}
function An(e, t) {
  Zc(e.x, t.x, t.scaleX, t.scale, t.originX),
    Zc(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function om(e, t) {
  return nm(j1(e.getBoundingClientRect(), t))
}
function F1(e, t, n) {
  const r = om(e, n)
    , { scroll: i } = t;
  return i && (Mn(r.x, i.offset.x),
    Mn(r.y, i.offset.y)),
    r
}
const qc = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
})
  , Vn = () => ({
    x: qc(),
    y: qc()
  })
  , Jc = () => ({
    min: 0,
    max: 0
  })
  , te = () => ({
    x: Jc(),
    y: Jc()
  })
  , Il = {
    current: null
  }
  , sm = {
    current: !1
  };
function I1() {
  if (sm.current = !0,
    !!Ia)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)")
        , t = () => Il.current = e.matches;
      e.addEventListener("change", t),
        t()
    } else
      Il.current = !1
}
const O1 = new WeakMap;
function z1(e, t, n) {
  for (const r in t) {
    const i = t[r]
      , o = n[r];
    if (me(i))
      e.addValue(r, i);
    else if (me(o))
      e.addValue(r, Kn(i, {
        owner: e
      }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Kn(s !== void 0 ? s : i, {
          owner: e
        }))
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t
}
const ef = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class B1 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {}
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, l = {}) {
    this.current = null,
      this.children = new Set,
      this.isVariantNode = !1,
      this.isControllingVariants = !1,
      this.shouldReduceMotion = null,
      this.values = new Map,
      this.KeyframeResolver = eu,
      this.features = {},
      this.valueSubscriptions = new Map,
      this.prevMotionValues = {},
      this.events = {},
      this.propEventSubscriptions = {},
      this.notifyUpdate = () => this.notify("Update", this.latestValues),
      this.render = () => {
        this.current && (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }
      ,
      this.renderScheduledAt = 0,
      this.scheduleRender = () => {
        const d = Pe.now();
        this.renderScheduledAt < d && (this.renderScheduledAt = d,
          W.render(this.render, !1, !0))
      }
      ;
    const { latestValues: a, renderState: u } = s;
    this.latestValues = a,
      this.baseTarget = {
        ...a
      },
      this.initialValues = n.initial ? {
        ...a
      } : {},
      this.renderState = u,
      this.parent = t,
      this.props = n,
      this.presenceContext = r,
      this.depth = t ? t.depth + 1 : 0,
      this.reducedMotionConfig = i,
      this.options = l,
      this.blockInitialAnimation = !!o,
      this.isControllingVariants = Uo(n),
      this.isVariantNode = Kp(n),
      this.isVariantNode && (this.variantChildren = new Set),
      this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const g = f[d];
      a[d] !== void 0 && me(g) && g.set(a[d])
    }
  }
  mount(t) {
    var n;
    this.current = t,
      O1.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, i) => this.bindToMotionValue(i, r)),
      sm.current || I1(),
      this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Il.current,
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      It(this.notifyUpdate),
      It(this.render),
      this.valueSubscriptions.forEach(n => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(),
        r.isMounted = !1)
    }
    this.current = null
  }
  addChild(t) {
    this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set),
      this.enteringChildren.add(t)
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t)
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = qn.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", s => {
      this.latestValues[t] = s,
        this.props.onUpdate && W.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender()
    }
    );
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(),
          o && o(),
          n.owner && n.stop()
      }
      )
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
  }
  updateFeatures() {
    let t = "animation";
    for (t in bn) {
      const n = bn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
        this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(),
          o.isMounted = !0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : te()
  }
  getStaticValue(t) {
    return this.latestValues[t]
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      this.prevProps = this.props,
      this.props = t,
      this.prevPresenceContext = this.presenceContext,
      this.presenceContext = n;
    for (let r = 0; r < ef.length; r++) {
      const i = ef[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i
        , s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s))
    }
    this.prevMotionValues = z1(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      this.latestValues[t] = n.get())
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(),
      this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState)
  }
  hasValue(t) {
    return this.values.has(t)
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Kn(n === null ? void 0 : n, {
      owner: this
    }),
      this.addValue(t, r)),
      r
  }
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (Jh(r) || tp(r)) ? r = parseFloat(r) : !Jv(r) && Ot.test(n) && (r = Fp(t, n)),
      this.setBaseTarget(t, me(r) ? r.get() : r)),
      me(r) ? r.get() : r
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n
  }
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = cu(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
      s && (r = s[t])
    }
    if (n && r !== void 0)
      return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !me(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new $a),
      this.events[t].add(n)
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n)
  }
  scheduleRenderMicrotask() {
    ru.render(this.render)
  }
}
class lm extends B1 {
  constructor() {
    super(...arguments),
      this.KeyframeResolver = Bv
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t],
      delete r[t]
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(),
      delete this.childSubscription);
    const { children: t } = this.props;
    me(t) && (this.childSubscription = t.on("change", n => {
      this.current && (this.current.textContent = `${n}`)
    }
    ))
  }
}
function am(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t)
    o[s] = t[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n)
    o.setProperty(s, n[s])
}
function U1(e) {
  return window.getComputedStyle(e)
}
class $1 extends lm {
  constructor() {
    super(...arguments),
      this.type = "html",
      this.renderInstance = am
  }
  readValueFromInstance(t, n) {
    var r;
    if (qn.has(n))
      return (r = this.projection) != null && r.isProjecting ? Ml(n) : ov(t, n);
    {
      const i = U1(t)
        , o = (Ka(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return om(t, n)
  }
  build(t, n, r) {
    lu(t, n, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return fu(t, n, r)
  }
}
const um = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function W1(e, t, n, r) {
  am(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(um.has(i) ? i : du(i), t.attrs[i])
}
class H1 extends lm {
  constructor() {
    super(...arguments),
      this.type = "svg",
      this.isSVGTag = !1,
      this.measureInstanceViewportBox = te
  }
  getBaseTargetFromProps(t, n) {
    return t[n]
  }
  readValueFromInstance(t, n) {
    if (qn.has(n)) {
      const r = _p(n);
      return r && r.default || 0
    }
    return n = um.has(n) ? n : du(n),
      t.getAttribute(n)
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qp(t, n, r)
  }
  build(t, n, r) {
    Qp(t, n, this.isSVGTag, r.transformTemplate, r.style)
  }
  renderInstance(t, n, r, i) {
    W1(t, n, r, i)
  }
  mount(t) {
    this.isSVGTag = Xp(t.tagName),
      super.mount(t)
  }
}
const K1 = (e, t) => uu(e) ? new H1(t) : new $1(t, {
  allowProjection: e !== L.Fragment
});
function In(e, t, n) {
  const r = e.getProps();
  return cu(r, t, n !== void 0 ? n : r.custom, e)
}
const Ol = e => Array.isArray(e);
function b1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Kn(n))
}
function G1(e) {
  return Ol(e) ? e[e.length - 1] || 0 : e
}
function Q1(e, t) {
  const n = In(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = {
    ...o,
    ...r
  };
  for (const s in o) {
    const l = G1(o[s]);
    b1(e, s, l)
  }
}
function Y1(e) {
  return !!(me(e) && e.add)
}
function zl(e, t) {
  const n = e.getValue("willChange");
  if (Y1(n))
    return n.add(t);
  if (!n && gt.WillChange) {
    const r = new gt.WillChange("auto");
    e.addValue("willChange", r),
      r.add(t)
  }
}
function cm(e) {
  return e.props[Jp]
}
const X1 = e => e !== null;
function Z1(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(X1)
    , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r
}
const q1 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}
  , J1 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  })
  , ex = {
    type: "keyframes",
    duration: .8
  }
  , tx = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  }
  , nx = (e, { keyframes: t }) => t.length > 2 ? ex : qn.has(e) ? e.startsWith("scale") ? J1(t[1]) : q1 : tx;
function rx({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: l, from: a, elapsed: u, ...c }) {
  return !!Object.keys(c).length
}
const hu = (e, t, n, r = {}, i, o) => s => {
  const l = tu(r, e) || {}
    , a = l.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - it(a);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -u,
    onUpdate: d => {
      t.set(d),
        l.onUpdate && l.onUpdate(d)
    }
    ,
    onComplete: () => {
      s(),
        l.onComplete && l.onComplete()
    }
    ,
    name: e,
    motionValue: t,
    element: o ? void 0 : i
  };
  rx(l) || Object.assign(c, nx(e, c)),
    c.duration && (c.duration = it(c.duration)),
    c.repeatDelay && (c.repeatDelay = it(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (Rl(c),
    c.delay === 0 && (f = !0)),
    (gt.instantAnimations || gt.skipAnimations) && (f = !0,
      Rl(c),
      c.delay = 0),
    c.allowFlatten = !l.type && !l.ease,
    f && !o && t.get() !== void 0) {
    const d = Z1(c.keyframes, l);
    if (d !== void 0) {
      W.update(() => {
        c.onUpdate(d),
          c.onComplete()
      }
      );
      return
    }
  }
  return l.isSync ? new Ja(c) : new Mv(c)
}
  ;
function ix({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1,
    r
}
function fm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...l } = t;
  r && (o = r);
  const a = []
    , u = i && e.animationState && e.animationState.getState()[i];
  for (const c in l) {
    const f = e.getValue(c, e.latestValues[c] ?? null)
      , d = l[c];
    if (d === void 0 || u && ix(u, c))
      continue;
    const g = {
      delay: n,
      ...tu(o || {}, c)
    }
      , v = f.get();
    if (v !== void 0 && !f.isAnimating && !Array.isArray(d) && d === v && !g.velocity)
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const p = cm(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, c, W);
        h !== null && (g.startTime = h,
          x = !0)
      }
    }
    zl(e, c),
      f.start(hu(c, f, d, e.shouldReduceMotion && Lp.has(c) ? {
        type: !1
      } : g, e, x));
    const C = f.animation;
    C && a.push(C)
  }
  return s && Promise.all(a).then(() => {
    W.update(() => {
      s && Q1(e, s)
    }
    )
  }
  ),
    a
}
function dm(e, t, n, r = 0, i = 1) {
  const o = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t)
    , s = e.size
    , l = (s - 1) * r;
  return typeof n == "function" ? n(o, s) : i === 1 ? o * r : l - o * r
}
function Bl(e, t, n = {}) {
  var a;
  const r = In(e, t, n.type === "exit" ? (a = e.presenceContext) == null ? void 0 : a.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(fm(e, r, n)) : () => Promise.resolve()
    , s = e.variantChildren && e.variantChildren.size ? (u = 0) => {
      const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = i;
      return ox(e, t, u, c, f, d, n)
    }
      : () => Promise.resolve()
    , { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, s] : [s, o];
    return u().then(() => c())
  } else
    return Promise.all([o(), s(n.delay)])
}
function ox(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const l = [];
  for (const a of e.variantChildren)
    a.notify("AnimationStart", t),
      l.push(Bl(a, t, {
        ...s,
        delay: n + (typeof r == "function" ? 0 : r) + dm(e.variantChildren, a, r, i, o)
      }).then(() => a.notify("AnimationComplete", t)));
  return Promise.all(l)
}
function sx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map(o => Bl(e, o, n));
    r = Promise.all(i)
  } else if (typeof t == "string")
    r = Bl(e, t, n);
  else {
    const i = typeof t == "function" ? In(e, t, n.custom) : t;
    r = Promise.all(fm(e, i, n))
  }
  return r.then(() => {
    e.notify("AnimationComplete", t)
  }
  )
}
function hm(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0
}
const lx = su.length;
function pm(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? pm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial),
      n
  }
  const t = {};
  for (let n = 0; n < lx; n++) {
    const r = su[n]
      , i = e.props[r];
    (Gr(i) || i === !1) && (t[r] = i)
  }
  return t
}
const ax = [...ou].reverse()
  , ux = ou.length;
function cx(e) {
  return t => Promise.all(t.map(({ animation: n, options: r }) => sx(e, n, r)))
}
function fx(e) {
  let t = cx(e)
    , n = tf()
    , r = !0;
  const i = a => (u, c) => {
    var d;
    const f = In(e, c, a === "exit" ? (d = e.presenceContext) == null ? void 0 : d.custom : void 0);
    if (f) {
      const { transition: g, transitionEnd: v, ...x } = f;
      u = {
        ...u,
        ...x,
        ...v
      }
    }
    return u
  }
    ;
  function o(a) {
    t = a(e)
  }
  function s(a) {
    const { props: u } = e
      , c = pm(e.parent) || {}
      , f = []
      , d = new Set;
    let g = {}
      , v = 1 / 0;
    for (let C = 0; C < ux; C++) {
      const p = ax[C]
        , h = n[p]
        , m = u[p] !== void 0 ? u[p] : c[p]
        , w = Gr(m)
        , S = p === a ? h.isActive : null;
      S === !1 && (v = C);
      let P = m === c[p] && m !== u[p] && w;
      if (P && r && e.manuallyAnimateOnMount && (P = !1),
        h.protectedKeys = {
          ...g
        },
        !h.isActive && S === null || !m && !h.prevProp || Bo(m) || typeof m == "boolean")
        continue;
      const E = dx(h.prevProp, m);
      let T = E || p === a && h.isActive && !P && w || C > v && w
        , _ = !1;
      const V = Array.isArray(m) ? m : [m];
      let ie = V.reduce(i(p), {});
      S === !1 && (ie = {});
      const { prevResolvedValues: vt = {} } = h
        , Wt = {
          ...vt,
          ...ie
        }
        , Jn = Z => {
          T = !0,
            d.has(Z) && (_ = !0,
              d.delete(Z)),
            h.needsAnimating[Z] = !0;
          const N = e.getValue(Z);
          N && (N.liveStyle = !1)
        }
        ;
      for (const Z in Wt) {
        const N = ie[Z]
          , A = vt[Z];
        if (g.hasOwnProperty(Z))
          continue;
        let R = !1;
        Ol(N) && Ol(A) ? R = !hm(N, A) : R = N !== A,
          R ? N != null ? Jn(Z) : d.add(Z) : N !== void 0 && d.has(Z) ? Jn(Z) : h.protectedKeys[Z] = !0
      }
      h.prevProp = m,
        h.prevResolvedValues = ie,
        h.isActive && (g = {
          ...g,
          ...ie
        }),
        r && e.blockInitialAnimation && (T = !1);
      const oi = P && E;
      T && (!oi || _) && f.push(...V.map(Z => {
        const N = {
          type: p
        };
        if (typeof Z == "string" && r && !oi && e.manuallyAnimateOnMount && e.parent) {
          const { parent: A } = e
            , R = In(A, Z);
          if (A.enteringChildren && R) {
            const { delayChildren: H } = R.transition || {};
            N.delay = dm(A.enteringChildren, e, H)
          }
        }
        return {
          animation: Z,
          options: N
        }
      }
      ))
    }
    if (d.size) {
      const C = {};
      if (typeof u.initial != "boolean") {
        const p = In(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        p && p.transition && (C.transition = p.transition)
      }
      d.forEach(p => {
        const h = e.getBaseTarget(p)
          , m = e.getValue(p);
        m && (m.liveStyle = !0),
          C[p] = h ?? null
      }
      ),
        f.push({
          animation: C
        })
    }
    let x = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1),
      r = !1,
      x ? t(f) : Promise.resolve()
  }
  function l(a, u) {
    var f;
    if (n[a].isActive === u)
      return Promise.resolve();
    (f = e.variantChildren) == null || f.forEach(d => {
      var g;
      return (g = d.animationState) == null ? void 0 : g.setActive(a, u)
    }
    ),
      n[a].isActive = u;
    const c = s(a);
    for (const d in n)
      n[d].protectedKeys = {};
    return c
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = tf()
    }
  }
}
function dx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !hm(t, e) : !1
}
function bt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}
function tf() {
  return {
    animate: bt(!0),
    whileInView: bt(),
    whileHover: bt(),
    whileTap: bt(),
    whileDrag: bt(),
    whileFocus: bt(),
    exit: bt()
  }
}
class $t {
  constructor(t) {
    this.isMounted = !1,
      this.node = t
  }
  update() { }
}
class hx extends $t {
  constructor(t) {
    super(t),
      t.animationState || (t.animationState = fx(t))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Bo(t) && (this.unmountControls = t.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: t } = this.node.getProps()
      , { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this)
  }
}
let px = 0;
class mx extends $t {
  constructor() {
    super(...arguments),
      this.id = px++
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext
      , { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => {
      n(this.id)
    }
    )
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id),
      t && (this.unmount = t(this.id))
  }
  unmount() { }
}
const gx = {
  animation: {
    Feature: hx
  },
  exit: {
    Feature: mx
  }
};
function Yr(e, t, n, r = {
  passive: !0
}) {
  return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function ii(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  }
}
const yx = e => t => iu(t) && e(t, ii(t));
function Cr(e, t, n, r) {
  return Yr(e, t, yx(n), r)
}
const mm = 1e-4
  , vx = 1 - mm
  , xx = 1 + mm
  , gm = .01
  , wx = 0 - gm
  , Sx = 0 + gm;
function ve(e) {
  return e.max - e.min
}
function kx(e, t, n) {
  return Math.abs(e - t) <= n
}
function nf(e, t, n, r = .5) {
  e.origin = r,
    e.originPoint = b(t.min, t.max, e.origin),
    e.scale = ve(n) / ve(t),
    e.translate = b(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= vx && e.scale <= xx || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= wx && e.translate <= Sx || isNaN(e.translate)) && (e.translate = 0)
}
function Er(e, t, n, r) {
  nf(e.x, t.x, n.x, r ? r.originX : void 0),
    nf(e.y, t.y, n.y, r ? r.originY : void 0)
}
function rf(e, t, n) {
  e.min = n.min + t.min,
    e.max = e.min + ve(t)
}
function Tx(e, t, n) {
  rf(e.x, t.x, n.x),
    rf(e.y, t.y, n.y)
}
function of(e, t, n) {
  e.min = t.min - n.min,
    e.max = e.min + ve(t)
}
function ko(e, t, n) {
  of(e.x, t.x, n.x),
    of(e.y, t.y, n.y)
}
function je(e) {
  return [e("x"), e("y")]
}
const ym = ({ current: e }) => e ? e.ownerDocument.defaultView : null
  , sf = (e, t) => Math.abs(e - t);
function Px(e, t) {
  const n = sf(e.x, t.x)
    , r = sf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2)
}
class vm {
  constructor(t, n, { transformPagePoint: r, contextWindow: i = window, dragSnapToOrigin: o = !1, distanceThreshold: s = 3 } = {}) {
    if (this.startEvent = null,
      this.lastMoveEvent = null,
      this.lastMoveEventInfo = null,
      this.handlers = {},
      this.contextWindow = window,
      this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const d = Ps(this.lastMoveEventInfo, this.history)
          , g = this.startEvent !== null
          , v = Px(d.offset, {
            x: 0,
            y: 0
          }) >= this.distanceThreshold;
        if (!g && !v)
          return;
        const { point: x } = d
          , { timestamp: C } = ue;
        this.history.push({
          ...x,
          timestamp: C
        });
        const { onStart: p, onMove: h } = this.handlers;
        g || (p && p(this.lastMoveEvent, d),
          this.startEvent = this.lastMoveEvent),
          h && h(this.lastMoveEvent, d)
      }
      ,
      this.handlePointerMove = (d, g) => {
        this.lastMoveEvent = d,
          this.lastMoveEventInfo = Ts(g, this.transformPagePoint),
          W.update(this.updatePoint, !0)
      }
      ,
      this.handlePointerUp = (d, g) => {
        this.end();
        const { onEnd: v, onSessionEnd: x, resumeAnimation: C } = this.handlers;
        if (this.dragSnapToOrigin && C && C(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const p = Ps(d.type === "pointercancel" ? this.lastMoveEventInfo : Ts(g, this.transformPagePoint), this.history);
        this.startEvent && v && v(d, p),
          x && x(d, p)
      }
      ,
      !iu(t))
      return;
    this.dragSnapToOrigin = o,
      this.handlers = n,
      this.transformPagePoint = r,
      this.distanceThreshold = s,
      this.contextWindow = i || window;
    const l = ii(t)
      , a = Ts(l, this.transformPagePoint)
      , { point: u } = a
      , { timestamp: c } = ue;
    this.history = [{
      ...u,
      timestamp: c
    }];
    const { onSessionStart: f } = n;
    f && f(t, Ps(a, this.history)),
      this.removeListeners = ti(Cr(this.contextWindow, "pointermove", this.handlePointerMove), Cr(this.contextWindow, "pointerup", this.handlePointerUp), Cr(this.contextWindow, "pointercancel", this.handlePointerUp))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(),
      It(this.updatePoint)
  }
}
function Ts(e, t) {
  return t ? {
    point: t(e.point)
  } : e
}
function lf(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  }
}
function Ps({ point: e }, t) {
  return {
    point: e,
    delta: lf(e, xm(t)),
    offset: lf(e, Cx(t)),
    velocity: Ex(t, .1)
  }
}
function Cx(e) {
  return e[0]
}
function xm(e) {
  return e[e.length - 1]
}
function Ex(e, t) {
  if (e.length < 2)
    return {
      x: 0,
      y: 0
    };
  let n = e.length - 1
    , r = null;
  const i = xm(e);
  for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > it(t)));)
    n--;
  if (!r)
    return {
      x: 0,
      y: 0
    };
  const o = Oe(i.timestamp - r.timestamp);
  if (o === 0)
    return {
      x: 0,
      y: 0
    };
  const s = {
    x: (i.x - r.x) / o,
    y: (i.y - r.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function Nx(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? b(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? b(n, e, r.max) : Math.min(e, n)),
    e
}
function af(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  }
}
function Mx(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: af(e.x, n, i),
    y: af(e.y, t, r)
  }
}
function uf(e, t) {
  let n = t.min - e.min
    , r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
  {
    min: n,
    max: r
  }
}
function Ax(e, t) {
  return {
    x: uf(e.x, t.x),
    y: uf(e.y, t.y)
  }
}
function Vx(e, t) {
  let n = .5;
  const r = ve(e)
    , i = ve(t);
  return i > r ? n = Hr(t.min, t.max - r, e.min) : r > i && (n = Hr(e.min, e.max - i, t.min)),
    mt(0, 1, n)
}
function Dx(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Ul = .35;
function Lx(e = Ul) {
  return e === !1 ? e = 0 : e === !0 && (e = Ul),
  {
    x: cf(e, "left", "right"),
    y: cf(e, "top", "bottom")
  }
}
function cf(e, t, n) {
  return {
    min: ff(e, t),
    max: ff(e, n)
  }
}
function ff(e, t) {
  return typeof e == "number" ? e : e[t] || 0
}
const Rx = new WeakMap;
class jx {
  constructor(t) {
    this.openDragLock = null,
      this.isDragging = !1,
      this.currentDirection = null,
      this.originPoint = {
        x: 0,
        y: 0
      },
      this.constraints = !1,
      this.hasMutatedConstraints = !1,
      this.elastic = te(),
      this.latestPointerEvent = null,
      this.latestPanInfo = null,
      this.visualElement = t
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const o = f => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(),
        n && this.snapToCursor(ii(f).point)
    }
      , s = (f, d) => {
        const { drag: g, dragPropagation: v, onDragStart: x } = this.getProps();
        if (g && !v && (this.openDragLock && this.openDragLock(),
          this.openDragLock = Kv(g),
          !this.openDragLock))
          return;
        this.latestPointerEvent = f,
          this.latestPanInfo = d,
          this.isDragging = !0,
          this.currentDirection = null,
          this.resolveConstraints(),
          this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
          je(p => {
            let h = this.getAxisMotionValue(p).get() || 0;
            if (ot.test(h)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const w = m.layout.layoutBox[p];
                w && (h = ve(w) * (parseFloat(h) / 100))
              }
            }
            this.originPoint[p] = h
          }
          ),
          x && W.postRender(() => x(f, d)),
          zl(this.visualElement, "transform");
        const { animationState: C } = this.visualElement;
        C && C.setActive("whileDrag", !0)
      }
      , l = (f, d) => {
        this.latestPointerEvent = f,
          this.latestPanInfo = d;
        const { dragPropagation: g, dragDirectionLock: v, onDirectionLock: x, onDrag: C } = this.getProps();
        if (!g && !this.openDragLock)
          return;
        const { offset: p } = d;
        if (v && this.currentDirection === null) {
          this.currentDirection = _x(p),
            this.currentDirection !== null && x && x(this.currentDirection);
          return
        }
        this.updateAxis("x", d.point, p),
          this.updateAxis("y", d.point, p),
          this.visualElement.render(),
          C && C(f, d)
      }
      , a = (f, d) => {
        this.latestPointerEvent = f,
          this.latestPanInfo = d,
          this.stop(f, d),
          this.latestPointerEvent = null,
          this.latestPanInfo = null
      }
      , u = () => je(f => {
        var d;
        return this.getAnimationState(f) === "paused" && ((d = this.getAxisMotionValue(f).animation) == null ? void 0 : d.play())
      }
      )
      , { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new vm(t, {
      onSessionStart: o,
      onStart: s,
      onMove: l,
      onSessionEnd: a,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: r,
      contextWindow: ym(this.visualElement)
    })
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent
      , i = n || this.latestPanInfo
      , o = this.isDragging;
    if (this.cancel(),
      !o || !i || !r)
      return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: l } = this.getProps();
    l && W.postRender(() => l(r, i))
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(),
      this.openDragLock = null),
      n && n.setActive("whileDrag", !1)
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Mi(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = Nx(s, this.constraints[t], this.elastic[t])),
      o.set(s)
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps()
      , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout
      , i = this.constraints;
    t && Nn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Mx(r.layoutBox, t) : this.constraints = !1,
      this.elastic = Lx(n),
      i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && je(s => {
        this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Dx(r.layoutBox[s], this.constraints[s]))
      }
      )
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Nn(t))
      return !1;
    const r = t.current
      , { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = F1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = Ax(i.layout.layoutBox, o);
    if (n) {
      const l = n(R1(s));
      this.hasMutatedConstraints = !!l,
        l && (s = nm(l))
    }
    return s
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: l } = this.getProps()
      , a = this.constraints || {}
      , u = je(c => {
        if (!Mi(c, n, this.currentDirection))
          return;
        let f = a && a[c] || {};
        s && (f = {
          min: 0,
          max: 0
        });
        const d = i ? 200 : 1e6
          , g = i ? 40 : 1e7
          , v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f
          };
        return this.startAxisValueAnimation(c, v)
      }
      );
    return Promise.all(u).then(l)
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return zl(this.visualElement, t),
      r.start(hu(t, r, 0, n, this.visualElement, !1))
  }
  stopAnimation() {
    je(t => this.getAxisMotionValue(t).stop())
  }
  pauseAnimation() {
    je(t => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
    }
    )
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`
      , r = this.visualElement.getProps()
      , i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    je(n => {
      const { drag: r } = this.getProps();
      if (!Mi(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement
        , o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - b(s, l, .5))
      }
    }
    )
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps()
      , { projection: r } = this.visualElement;
    if (!Nn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = {
      x: 0,
      y: 0
    };
    je(s => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[s] = Vx({
          min: a,
          max: a
        }, this.constraints[s])
      }
    }
    );
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none",
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      je(s => {
        if (!Mi(s, t, null))
          return;
        const l = this.getAxisMotionValue(s)
          , { min: a, max: u } = this.constraints[s];
        l.set(b(a, u, i[s]))
      }
      )
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Rx.set(this.visualElement, this);
    const t = this.visualElement.current
      , n = Cr(t, "pointerdown", a => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a)
      }
      )
      , r = () => {
        const { dragConstraints: a } = this.getProps();
        Nn(a) && a.current && (this.constraints = this.resolveRefConstraints())
      }
      , { projection: i } = this.visualElement
      , o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(),
      i.updateLayout()),
      W.read(r);
    const s = Yr(window, "resize", () => this.scalePositionWithinConstraints())
      , l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: u }) => {
        this.isDragging && u && (je(c => {
          const f = this.getAxisMotionValue(c);
          f && (this.originPoint[c] += a[c].translate,
            f.set(f.get() + a[c].translate))
        }
        ),
          this.visualElement.render())
      }
      );
    return () => {
      s(),
        n(),
        o(),
        l && l()
    }
  }
  getProps() {
    const t = this.visualElement.getProps()
      , { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Ul, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l
    }
  }
}
function Mi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e)
}
function _x(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class Fx extends $t {
  constructor(t) {
    super(t),
      this.removeGroupControls = Be,
      this.removeListeners = Be,
      this.controls = new jx(t)
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      this.removeListeners = this.controls.addListeners() || Be
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners()
  }
}
const df = e => (t, n) => {
  e && W.postRender(() => e(t, n))
}
  ;
class Ix extends $t {
  constructor() {
    super(...arguments),
      this.removePointerDownListener = Be
  }
  onPointerDown(t) {
    this.session = new vm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ym(this.node)
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: df(t),
      onStart: df(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session,
          i && W.postRender(() => i(o, s))
      }
    }
  }
  mount() {
    this.removePointerDownListener = Cr(this.node.current, "pointerdown", t => this.onPointerDown(t))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(),
      this.session && this.session.end()
  }
}
const Hi = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};
function hf(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ar = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (D.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = hf(e, t.target.x)
      , r = hf(e, t.target.y);
    return `${n}% ${r}%`
  }
}
  , Ox = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e
        , i = Ot.parse(e);
      if (i.length > 5)
        return r;
      const o = Ot.createTransformer(e)
        , s = typeof i[0] != "number" ? 1 : 0
        , l = n.x.scale * t.x
        , a = n.y.scale * t.y;
      i[0 + s] /= l,
        i[1 + s] /= a;
      const u = b(l, a, .5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
    }
  };
let Cs = !1;
class zx extends L.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props
      , { projection: o } = t;
    l1(Bx),
      o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        Cs && o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove()
        }
        ),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove()
        })),
      Hi.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props
      , { projection: s } = r;
    return s && (s.isPresent = o,
      Cs = !0,
      i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o ? s.willUpdate() : this.safeToRemove(),
      t.isPresent !== o && (o ? s.promote() : s.relegate() || W.postRender(() => {
        const l = s.getStack();
        (!l || !l.members.length) && this.safeToRemove()
      }
      ))),
      null
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(),
      ru.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove()
      }
      ))
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props
      , { projection: i } = t;
    Cs = !0,
      i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t()
  }
  render() {
    return null
  }
}
function wm(e) {
  const [t, n] = e1()
    , r = L.useContext(qh);
  return y.jsx(zx, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: L.useContext(em),
    isPresent: t,
    safeToRemove: n
  })
}
const Bx = {
  borderRadius: {
    ...ar,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: ar,
  borderTopRightRadius: ar,
  borderBottomLeftRadius: ar,
  borderBottomRightRadius: ar,
  boxShadow: Ox
};
function Ux(e, t, n) {
  const r = me(e) ? e : Kn(e);
  return r.start(hu("", r, t, n)),
    r.animation
}
const $x = (e, t) => e.depth - t.depth;
class Wx {
  constructor() {
    this.children = [],
      this.isDirty = !1
  }
  add(t) {
    za(this.children, t),
      this.isDirty = !0
  }
  remove(t) {
    Ba(this.children, t),
      this.isDirty = !0
  }
  forEach(t) {
    this.isDirty && this.children.sort($x),
      this.isDirty = !1,
      this.children.forEach(t)
  }
}
function Hx(e, t) {
  const n = Pe.now()
    , r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (It(r),
        e(o - t))
    }
    ;
  return W.setup(r, !0),
    () => It(r)
}
const Sm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Kx = Sm.length
  , pf = e => typeof e == "string" ? parseFloat(e) : e
  , mf = e => typeof e == "number" || D.test(e);
function bx(e, t, n, r, i, o) {
  i ? (e.opacity = b(0, n.opacity ?? 1, Gx(r)),
    e.opacityExit = b(t.opacity ?? 1, 0, Qx(r))) : o && (e.opacity = b(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < Kx; s++) {
    const l = `border${Sm[s]}Radius`;
    let a = gf(t, l)
      , u = gf(n, l);
    if (a === void 0 && u === void 0)
      continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || mf(a) === mf(u) ? (e[l] = Math.max(b(pf(a), pf(u), r), 0),
        (ot.test(u) || ot.test(a)) && (e[l] += "%")) : e[l] = u
  }
  (t.rotate || n.rotate) && (e.rotate = b(t.rotate || 0, n.rotate || 0, r))
}
function gf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Gx = km(0, .5, up)
  , Qx = km(.5, .95, Be);
function km(e, t, n) {
  return r => r < e ? 0 : r > t ? 1 : n(Hr(e, t, r))
}
function yf(e, t) {
  e.min = t.min,
    e.max = t.max
}
function He(e, t) {
  yf(e.x, t.x),
    yf(e.y, t.y)
}
function vf(e, t) {
  e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function xf(e, t, n, r, i) {
  return e -= t,
    e = So(e, 1 / n, r),
    i !== void 0 && (e = So(e, 1 / i, r)),
    e
}
function Yx(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
  if (ot.test(t) && (t = parseFloat(t),
    t = b(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
    return;
  let l = b(o.min, o.max, r);
  e === o && (l -= t),
    e.min = xf(e.min, t, n, l, i),
    e.max = xf(e.max, t, n, l, i)
}
function wf(e, t, [n, r, i], o, s) {
  Yx(e, t[n], t[r], t[i], t.scale, o, s)
}
const Xx = ["x", "scaleX", "originX"]
  , Zx = ["y", "scaleY", "originY"];
function Sf(e, t, n, r) {
  wf(e.x, t, Xx, n ? n.x : void 0, r ? r.x : void 0),
    wf(e.y, t, Zx, n ? n.y : void 0, r ? r.y : void 0)
}
function kf(e) {
  return e.translate === 0 && e.scale === 1
}
function Tm(e) {
  return kf(e.x) && kf(e.y)
}
function Tf(e, t) {
  return e.min === t.min && e.max === t.max
}
function qx(e, t) {
  return Tf(e.x, t.x) && Tf(e.y, t.y)
}
function Pf(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function Pm(e, t) {
  return Pf(e.x, t.x) && Pf(e.y, t.y)
}
function Cf(e) {
  return ve(e.x) / ve(e.y)
}
function Ef(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class Jx {
  constructor() {
    this.members = []
  }
  add(t) {
    za(this.members, t),
      t.scheduleRender()
  }
  remove(t) {
    if (Ba(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n)
    }
  }
  relegate(t) {
    const n = this.members.findIndex(i => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break
      }
    }
    return r ? (this.promote(r),
      !0) : !1
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r,
      this.lead = t,
      t.show(),
      r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        t.resumeFrom = r,
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot && (t.snapshot = r.snapshot,
          t.snapshot.latestValues = r.animationValues || r.latestValues),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(t => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete()
    }
    )
  }
  scheduleRender() {
    this.members.forEach(t => {
      t.instance && t.scheduleRender(!1)
    }
    )
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function ew(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x
    , o = e.y.translate / t.y
    , s = (n == null ? void 0 : n.z) || 0;
  if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: g, skewY: v } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      v && (r += `skewY(${v}deg) `)
  }
  const l = e.x.scale * t.x
    , a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`),
    r || "none"
}
const Es = ["", "X", "Y", "Z"]
  , tw = 1e3;
let nw = 0;
function Ns(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function Cm(e) {
  if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = cm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", W, !(i || o))
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Cm(r)
}
function Em({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      this.id = nw++ ,
        this.animationId = 0,
        this.animationCommitId = 0,
        this.children = new Set,
        this.options = {},
        this.isTreeAnimating = !1,
        this.isAnimationBlocked = !1,
        this.isLayoutDirty = !1,
        this.isProjectionDirty = !1,
        this.isSharedProjectionDirty = !1,
        this.isTransformDirty = !1,
        this.updateManuallyBlocked = !1,
        this.updateBlockedByResize = !1,
        this.isUpdating = !1,
        this.isSVG = !1,
        this.needsReset = !1,
        this.shouldResetTransform = !1,
        this.hasCheckedOptimisedAppear = !1,
        this.treeScale = {
          x: 1,
          y: 1
        },
        this.eventHandlers = new Map,
        this.hasTreeAnimated = !1,
        this.layoutVersion = 0,
        this.updateScheduled = !1,
        this.scheduleUpdate = () => this.update(),
        this.projectionUpdateScheduled = !1,
        this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1,
            this.clearAllSnapshots())
        }
        ,
        this.updateProjection = () => {
          this.projectionUpdateScheduled = !1,
            this.nodes.forEach(ow),
            this.nodes.forEach(uw),
            this.nodes.forEach(cw),
            this.nodes.forEach(sw)
        }
        ,
        this.resolvedRelativeTargetAt = 0,
        this.linkedParentVersion = 0,
        this.hasProjected = !1,
        this.isVisible = !0,
        this.animationProgress = 0,
        this.sharedNodes = new Map,
        this.latestValues = s,
        this.root = l ? l.root || l : this,
        this.path = l ? [...l.path, l] : [],
        this.parent = l,
        this.depth = l ? l.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Wx)
    }
    addEventListener(s, l) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new $a),
        this.eventHandlers.get(s).add(l)
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l)
    }
    hasListeners(s) {
      return this.eventHandlers.has(s)
    }
    mount(s) {
      if (this.instance)
        return;
      this.isSVG = Up(s) && !Zv(s),
        this.instance = s;
      const { layoutId: l, layout: a, visualElement: u } = this.options;
      if (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (a || l) && (this.isLayoutDirty = !0),
        e) {
        let c, f = 0;
        const d = () => this.root.updateBlockedByResize = !1;
        W.read(() => {
          f = window.innerWidth
        }
        ),
          e(s, () => {
            const g = window.innerWidth;
            g !== f && (f = g,
              this.root.updateBlockedByResize = !0,
              c && c(),
              c = Hx(d, 250),
              Hi.hasAnimatedSinceResize && (Hi.hasAnimatedSinceResize = !1,
                this.nodes.forEach(Af)))
          }
          )
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 && u && (l || a) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: d, layout: g }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0,
              this.relativeTarget = void 0;
            return
          }
          const v = this.options.transition || u.getDefaultTransition() || mw
            , { onLayoutAnimationStart: x, onLayoutAnimationComplete: C } = u.getProps()
            , p = !this.targetLayout || !Pm(this.targetLayout, g)
            , h = !f && d;
          if (this.options.layoutRoot || this.resumeFrom || h || f && (p || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
              this.resumingFrom.resumingFrom = void 0);
            const m = {
              ...tu(v, "layout"),
              onPlay: x,
              onComplete: C
            };
            (u.shouldReduceMotion || this.options.layoutRoot) && (m.delay = 0,
              m.type = !1),
              this.startAnimation(m),
              this.setAnimationOrigin(c, h)
          } else
            f || Af(this),
              this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = g
        }
        )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        this.instance = void 0,
        this.eventHandlers.clear(),
        It(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0,
        this.nodes && this.nodes.forEach(fw),
        this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0,
        this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Cm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0,
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1)
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate")
    }
    update() {
      if (this.updateScheduled = !1,
        this.isUpdateBlocked()) {
        this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Nf);
        return
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Mf);
        return
      }
      this.animationCommitId = this.animationId,
        this.isUpdating ? (this.isUpdating = !1,
          this.nodes.forEach(aw),
          this.nodes.forEach(rw),
          this.nodes.forEach(iw)) : this.nodes.forEach(Mf),
        this.clearAllSnapshots();
      const l = Pe.now();
      ue.delta = mt(0, 1e3 / 60, l - ue.timestamp),
        ue.timestamp = l,
        ue.isProcessing = !0,
        ms.update.process(ue),
        ms.preRender.process(ue),
        ms.render.process(ue),
        ue.isProcessing = !1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0,
        ru.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(lw),
        this.sharedNodes.forEach(dw)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
        W.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      W.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      }
      )
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(),
        this.snapshot && !ve(this.snapshot.measuredBox.x) && !ve(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++)
          this.path[a].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1),
        this.layoutVersion++ ,
        this.layoutCorrected = te(),
        this.isLayoutDirty = !1,
        this.projectionDelta = void 0,
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1),
        l && this.instance) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a
        }
      }
    }
    resetTransform() {
      if (!i)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
        , l = this.projectionDelta && !Tm(this.projectionDelta)
        , a = this.getTransformTemplate()
        , u = a ? a(this.latestValues, "") : void 0
        , c = u !== this.prevTransformTemplateValue;
      s && this.instance && (l || Yt(this.latestValues) || c) && (i(this.instance, u),
        this.shouldResetTransform = !1,
        this.scheduleRender())
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return s && (a = this.removeTransform(a)),
        gw(a),
      {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: a,
        latestValues: {},
        source: this.id
      }
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s)
        return te();
      const l = s.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(yw))) {
        const { scroll: c } = this.root;
        c && (Mn(l.x, c.offset.x),
          Mn(l.y, c.offset.y))
      }
      return l
    }
    removeElementScroll(s) {
      var a;
      const l = te();
      if (He(l, s),
        (a = this.scroll) != null && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
          , { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && He(l, s),
          Mn(l.x, f.offset.x),
          Mn(l.y, f.offset.y))
      }
      return l
    }
    applyTransform(s, l = !1) {
      const a = te();
      He(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l && c.options.layoutScroll && c.scroll && c !== c.root && An(a, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }),
          Yt(c.latestValues) && An(a, c.latestValues)
      }
      return Yt(this.latestValues) && An(a, this.latestValues),
        a
    }
    removeTransform(s) {
      const l = te();
      He(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Yt(u.latestValues))
          continue;
        _l(u.latestValues) && u.updateSnapshot();
        const c = te()
          , f = u.measurePageBox();
        He(c, f),
          Sf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return Yt(this.latestValues) && Sf(l, this.latestValues),
        l
    }
    setTargetDelta(s) {
      this.targetDelta = s,
        this.root.scheduleUpdateProjection(),
        this.isProjectionDirty = !0
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      }
    }
    clearMeasurements() {
      this.scroll = void 0,
        this.layout = void 0,
        this.snapshot = void 0,
        this.prevTransformTemplateValue = void 0,
        this.targetDelta = void 0,
        this.target = void 0,
        this.isLayoutDirty = !1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp && this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(s = !1) {
      var g;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const a = !!this.resumingFrom || this !== l;
      if (!(s || a && this.isSharedProjectionDirty || this.isProjectionDirty || (g = this.parent) != null && g.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!this.layout || !(c || f))
        return;
      this.resolvedRelativeTargetAt = ue.timestamp;
      const d = this.getClosestProjectingParent();
      d && this.linkedParentVersion !== d.layoutVersion && !d.options.layoutRoot && this.removeRelativeTarget(),
        !this.targetDelta && !this.relativeTarget && (d && d.layout ? this.createRelativeTarget(d, this.layout.layoutBox, d.layout.layoutBox) : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = te(),
          this.targetWithTransforms = te()),
          this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            Tx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : He(this.target, this.layout.layoutBox),
              im(this.target, this.targetDelta)) : He(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? this.createRelativeTarget(d, this.target, d.target) : this.relativeParent = this.relativeTarget = void 0))
    }
    getClosestProjectingParent() {
      if (!(!this.parent || _l(this.parent.latestValues) || rm(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    createRelativeTarget(s, l, a) {
      this.relativeParent = s,
        this.linkedParentVersion = s.layoutVersion,
        this.forceRelativeParentToResolveTarget(),
        this.relativeTarget = te(),
        this.relativeTargetOrigin = te(),
        ko(this.relativeTargetOrigin, l, a),
        He(this.relativeTarget, this.relativeTargetOrigin)
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0
    }
    calcProjection() {
      var v;
      const s = this.getLead()
        , l = !!this.resumingFrom || this !== s;
      let a = !0;
      if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (a = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (a = !1),
        this.resolvedRelativeTargetAt === ue.timestamp && (a = !1),
        a)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
        return;
      He(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x
        , d = this.treeScale.y;
      _1(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox,
          s.targetWithTransforms = te());
      const { target: g } = s;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(),
          this.scheduleRender());
        return
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (vf(this.prevProjectionDelta.x, this.projectionDelta.x),
        vf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Er(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== f || this.treeScale.y !== d || !Ef(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ef(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g))
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(s = !0) {
      var l;
      if ((l = this.options.visualElement) == null || l.scheduleRender(),
        s) {
        const a = this.getStack();
        a && a.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Vn(),
        this.projectionDelta = Vn(),
        this.projectionDeltaWithTransform = Vn()
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot
        , u = a ? a.latestValues : {}
        , c = {
          ...this.latestValues
        }
        , f = Vn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
        this.attemptToResolveRelativeTarget = !l;
      const d = te()
        , g = a ? a.source : void 0
        , v = this.layout ? this.layout.source : void 0
        , x = g !== v
        , C = this.getStack()
        , p = !C || C.members.length <= 1
        , h = !!(x && !p && this.options.crossfade === !0 && !this.path.some(pw));
      this.animationProgress = 0;
      let m;
      this.mixTargetDelta = w => {
        const S = w / 1e3;
        Vf(f.x, s.x, S),
          Vf(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ko(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            hw(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && qx(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = te()),
            He(m, this.relativeTarget)),
          x && (this.animationValues = c,
            bx(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          this.animationProgress = S
      }
        ,
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(s) {
      var l, a, u;
      this.notifyListeners("animationStart"),
        (l = this.currentAnimation) == null || l.stop(),
        (u = (a = this.resumingFrom) == null ? void 0 : a.currentAnimation) == null || u.stop(),
        this.pendingAnimation && (It(this.pendingAnimation),
          this.pendingAnimation = void 0),
        this.pendingAnimation = W.update(() => {
          Hi.hasAnimatedSinceResize = !0,
            this.motionValue || (this.motionValue = Kn(0)),
            this.currentAnimation = Ux(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: c => {
                this.mixTargetDelta(c),
                  s.onUpdate && s.onUpdate(c)
              }
              ,
              onStop: () => { }
              ,
              onComplete: () => {
                s.onComplete && s.onComplete(),
                  this.completeAnimation()
              }
            }),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            this.pendingAnimation = void 0
        }
        )
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
        this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
        this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(tw),
        this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = s;
      if (!(!l || !a || !u)) {
        if (this !== s && this.layout && u && Nm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          a = this.target || te();
          const f = ve(this.layout.layoutBox.x);
          a.x.min = s.target.x.min,
            a.x.max = a.x.min + f;
          const d = ve(this.layout.layoutBox.y);
          a.y.min = s.target.y.min,
            a.y.max = a.y.min + d
        }
        He(l, a),
          An(l, c),
          Er(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Jx),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
      })
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0
    }
    getLead() {
      var l;
      const { layoutId: s } = this.options;
      return s ? ((l = this.getStack()) == null ? void 0 : l.lead) || this : this
    }
    getPrevLead() {
      var l;
      const { layoutId: s } = this.options;
      return s ? (l = this.getStack()) == null ? void 0 : l.prevLead : void 0
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s)
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && (this.projectionDelta = void 0,
          this.needsReset = !0),
        l && this.setOptions({
          transition: l
        })
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let l = !1;
      const { latestValues: a } = s;
      if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0),
        !l)
        return;
      const u = {};
      a.z && Ns("z", s, u, this.animationValues);
      for (let c = 0; c < Es.length; c++)
        Ns(`rotate${Es[c]}`, s, u, this.animationValues),
          Ns(`skew${Es[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender()
    }
    applyProjectionStyles(s, l) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return
      }
      const a = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1,
          s.visibility = "",
          s.opacity = "",
          s.pointerEvents = Wi(l == null ? void 0 : l.pointerEvents) || "",
          s.transform = a ? a(this.latestValues, "") : "none";
        return
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
          s.pointerEvents = Wi(l == null ? void 0 : l.pointerEvents) || ""),
          this.hasProjected && !Yt(this.latestValues) && (s.transform = a ? a({}, "") : "none",
            this.hasProjected = !1);
        return
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = ew(this.projectionDeltaWithTransform, this.treeScale, c);
      a && (f = a(c, f)),
        s.transform = f;
      const { x: d, y: g } = this.projectionDelta;
      s.transformOrigin = `${d.origin * 100}% ${g.origin * 100}% 0`,
        u.animationValues ? s.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : s.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const v in Qr) {
        if (c[v] === void 0)
          continue;
        const { correct: x, applyTo: C, isCSSVariable: p } = Qr[v]
          , h = f === "none" ? c[v] : x(c[v], u);
        if (C) {
          const m = C.length;
          for (let w = 0; w < m; w++)
            s[C[w]] = h
        } else
          p ? this.options.visualElement.renderState.vars[v] = h : s[v] = h
      }
      this.options.layoutId && (s.pointerEvents = u === this ? Wi(l == null ? void 0 : l.pointerEvents) || "" : "none")
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(s => {
        var l;
        return (l = s.currentAnimation) == null ? void 0 : l.stop()
      }
      ),
        this.root.nodes.forEach(Nf),
        this.root.sharedNodes.clear()
    }
  }
}
function rw(e) {
  e.updateLayout()
}
function iw(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout
      , { animationType: o } = e.options
      , s = t.source !== e.layout.source;
    o === "size" ? je(f => {
      const d = s ? t.measuredBox[f] : t.layoutBox[f]
        , g = ve(d);
      d.min = r[f].min,
        d.max = d.min + g
    }
    ) : Nm(o, t.layoutBox, r) && je(f => {
      const d = s ? t.measuredBox[f] : t.layoutBox[f]
        , g = ve(r[f]);
      d.max = d.min + g,
        e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
          e.relativeTarget[f].max = e.relativeTarget[f].min + g)
    }
    );
    const l = Vn();
    Er(l, r, t.layoutBox);
    const a = Vn();
    s ? Er(a, e.applyTransform(i, !0), t.measuredBox) : Er(a, r, t.layoutBox);
    const u = !Tm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const v = te();
          ko(v, t.layoutBox, d.layoutBox);
          const x = te();
          ko(x, r, g.layoutBox),
            Pm(v, x) || (c = !0),
            f.options.layoutRoot && (e.relativeTarget = x,
              e.relativeTargetOrigin = v,
              e.relativeParent = f)
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c
    })
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r()
  }
  e.options.transition = void 0
}
function ow(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function sw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function lw(e) {
  e.clearSnapshot()
}
function Nf(e) {
  e.clearMeasurements()
}
function Mf(e) {
  e.isLayoutDirty = !1
}
function aw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Af(e) {
  e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function uw(e) {
  e.resolveTargetDelta()
}
function cw(e) {
  e.calcProjection()
}
function fw(e) {
  e.resetSkewAndRotation()
}
function dw(e) {
  e.removeLeadSnapshot()
}
function Vf(e, t, n) {
  e.translate = b(t.translate, 0, n),
    e.scale = b(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Df(e, t, n, r) {
  e.min = b(t.min, n.min, r),
    e.max = b(t.max, n.max, r)
}
function hw(e, t, n, r) {
  Df(e.x, t.x, n.x, r),
    Df(e.y, t.y, n.y, r)
}
function pw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const mw = {
  duration: .45,
  ease: [.4, 0, .1, 1]
}
  , Lf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Rf = Lf("applewebkit/") && !Lf("chrome/") ? Math.round : Be;
function jf(e) {
  e.min = Rf(e.min),
    e.max = Rf(e.max)
}
function gw(e) {
  jf(e.x),
    jf(e.y)
}
function Nm(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !kx(Cf(t), Cf(n), .2)
}
function yw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const vw = Em({
  attachResizeListener: (e, t) => Yr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
})
  , Ms = {
    current: void 0
  }
  , Mm = Em({
    measureScroll: e => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!Ms.current) {
        const e = new vw({});
        e.mount(window),
          e.setOptions({
            layoutScroll: !0
          }),
          Ms.current = e
      }
      return Ms.current
    }
    ,
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
  })
  , xw = {
    pan: {
      Feature: Ix
    },
    drag: {
      Feature: Fx,
      ProjectionNode: Mm,
      MeasureLayout: wm
    }
  };
function _f(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n
    , o = r[i];
  o && W.postRender(() => o(t, ii(t)))
}
class ww extends $t {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = bv(t, (n, r) => (_f(this.node, r, "Start"),
      i => _f(this.node, i, "End"))))
  }
  unmount() { }
}
class Sw extends $t {
  constructor() {
    super(...arguments),
      this.isActive = !1
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible")
    } catch {
      t = !0
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
      this.isActive = !0)
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
      this.isActive = !1)
  }
  mount() {
    this.unmount = ti(Yr(this.node.current, "focus", () => this.onFocus()), Yr(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() { }
}
function Ff(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n)
    , o = r[i];
  o && W.postRender(() => o(t, ii(t)))
}
class kw extends $t {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Xv(t, (n, r) => (Ff(this.node, r, "Start"),
      (i, { success: o }) => Ff(this.node, i, o ? "End" : "Cancel")), {
      useGlobalTarget: this.node.props.globalTapTarget
    }))
  }
  unmount() { }
}
const $l = new WeakMap
  , As = new WeakMap
  , Tw = e => {
    const t = $l.get(e.target);
    t && t(e)
  }
  , Pw = e => {
    e.forEach(Tw)
  }
  ;
function Cw({ root: e, ...t }) {
  const n = e || document;
  As.has(n) || As.set(n, {});
  const r = As.get(n)
    , i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Pw, {
    root: e,
    ...t
  })),
    r[i]
}
function Ew(e, t, n) {
  const r = Cw(t);
  return $l.set(e, n),
    r.observe(e),
    () => {
      $l.delete(e),
        r.unobserve(e)
    }
}
const Nw = {
  some: 0,
  all: 1
};
class Mw extends $t {
  constructor() {
    super(...arguments),
      this.hasEnteredView = !1,
      this.isInView = !1
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps()
      , { root: n, margin: r, amount: i = "some", once: o } = t
      , s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Nw[i]
      }
      , l = a => {
        const { isIntersecting: u } = a;
        if (this.isInView === u || (this.isInView = u,
          o && !u && this.hasEnteredView))
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps()
          , d = u ? c : f;
        d && d(a)
      }
      ;
    return Ew(this.node.current, s, l)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Aw(t, n)) && this.startObserver()
  }
  unmount() { }
}
function Aw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return n => e[n] !== t[n]
}
const Vw = {
  inView: {
    Feature: Mw
  },
  tap: {
    Feature: kw
  },
  focus: {
    Feature: Sw
  },
  hover: {
    Feature: ww
  }
}
  , Dw = {
    layout: {
      ProjectionNode: Mm,
      MeasureLayout: wm
    }
  }
  , Lw = {
    ...gx,
    ...Vw,
    ...xw,
    ...Dw
  }
  , U = L1(Lw, K1);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Rw = {
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
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , qe = (e, t) => {
    const n = L.forwardRef(({ color: r = "currentColor", size: i = 24, strokeWidth: o = 2, absoluteStrokeWidth: s, className: l = "", children: a, ...u }, c) => L.createElement("svg", {
      ref: c,
      ...Rw,
      width: i,
      height: i,
      stroke: r,
      strokeWidth: s ? Number(o) * 24 / Number(i) : o,
      className: ["lucide", `lucide-${jw(e)}`, l].join(" "),
      ...u
    }, [...t.map(([f, d]) => L.createElement(f, d)), ...Array.isArray(a) ? a : [a]]));
    return n.displayName = `${e}`,
      n
  }
  ;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _w = qe("Check", [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = qe("ChevronRight", [["path", {
  d: "m9 18 6-6-6-6",
  key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Of = qe("Crosshair", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "22",
  x2: "18",
  y1: "12",
  y2: "12",
  key: "l9bcsi"
}], ["line", {
  x1: "6",
  x2: "2",
  y1: "12",
  y2: "12",
  key: "13hhkx"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "6",
  y2: "2",
  key: "10w3f3"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "18",
  key: "15g9kq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fw = qe("Crown", [["path", {
  d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
  key: "zkxr6b"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iw = qe("Flame", [["path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
  key: "96xj49"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ow = qe("Gauge", [["path", {
  d: "m12 14 4-4",
  key: "9kzdfg"
}], ["path", {
  d: "M3.34 19a10 10 0 1 1 17.32 0",
  key: "19p75a"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zw = qe("Settings", [["path", {
  d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
  key: "1qme2f"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bw = qe("Shield", [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uw = qe("Terminal", [["polyline", {
  points: "4 17 10 11 4 5",
  key: "akl6gq"
}], ["line", {
  x1: "12",
  x2: "20",
  y1: "19",
  y2: "19",
  key: "q2wloq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $w = qe("User", [["path", {
  d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
  key: "975kel"
}], ["circle", {
  cx: "12",
  cy: "7",
  r: "4",
  key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Am = qe("Zap", [["polygon", {
  points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
  key: "45s27k"
}]]);
function Ww() {
  return y.jsxs("section", {
    className: "relative min-h-screen flex items-center justify-center px-4 overflow-hidden",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-black"
    }), y.jsx("div", {
      className: "absolute inset-0 bg-camo-pattern opacity-30"
    }), y.jsxs("div", {
      className: "absolute inset-0",
      children: [y.jsx("div", {
        className: "absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl animate-pulse"
      }), y.jsx("div", {
        className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse",
        style: {
          animationDelay: "1s"
        }
      })]
    }), y.jsxs(U.div, {
      initial: {
        opacity: 0,
        y: 40
      },
      animate: {
        opacity: 1,
        y: 0
      },
      transition: {
        duration: 1,
        ease: "easeOut"
      },
      className: "relative z-10 max-w-5xl mx-auto text-center",
      children: [y.jsxs(U.div, {
        initial: {
          opacity: 0,
          scale: .9
        },
        animate: {
          opacity: 1,
          scale: 1
        },
        transition: {
          delay: .2,
          duration: .8
        },
        className: "inline-flex items-center gap-2 px-4 py-2 bg-void-dark/60 backdrop-blur-xl border border-neon-violet/30 rounded-full mb-8",
        children: [y.jsx(Bw, {
          className: "w-4 h-4 text-neon-green"
        }), y.jsx("span", {
          className: "text-gray-300 text-sm font-semibold",
          children: 'Premium External " Undetected'
        })]
      }), y.jsxs(U.h1, {
        initial: {
          opacity: 0,
          y: 30
        },
        animate: {
          opacity: 1,
          y: 0
        },
        transition: {
          delay: .4,
          duration: .8
        },
        className: "text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight",
        children: [y.jsx("span", {
          className: "text-white",
          children: "BAPE"
        }), y.jsx("br", {}), y.jsx("span", {
          className: "bg-gradient-to-r from-neon-violet via-neon-purple to-neon-violet bg-clip-text text-transparent",
          children: "COLOR AIM"
        })]
      }), y.jsxs(U.p, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        transition: {
          delay: .6,
          duration: .8
        },
        className: "text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed",
        children: ["Premium color-based aim assist with advanced targeting algorithms.", y.jsx("br", {}), y.jsx("span", {
          className: "text-neon-purple font-semibold",
          children: 'Secure " Powerful " Undetectable'
        })]
      }), y.jsxs(U.div, {
        initial: {
          opacity: 0,
          y: 20
        },
        animate: {
          opacity: 1,
          y: 0
        },
        transition: {
          delay: .8,
          duration: .8
        },
        className: "flex flex-col sm:flex-row items-center justify-center gap-4",
        children: [y.jsxs(U.a, {
          whileHover: {
            scale: 1.05,
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
          },
          whileTap: {
            scale: .98
          },
          href: "https://discord.gg/7HswSMQbCS",
          target: "_blank",
          className: "group px-8 py-4 bg-gradient-to-r from-neon-violet via-neon-purple to-neon-violet text-white font-bold rounded-xl shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 flex items-center gap-2",
          children: ["Purchase Now", y.jsx(If, {
            className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
          })]
        }), y.jsx(U.a, {
          whileHover: {
            scale: 1.05
          },
          whileTap: {
            scale: .98
          },
          href: "#features",
          className: "px-8 py-4 bg-void-dark/60 backdrop-blur-xl border-2 border-neon-violet text-white font-bold rounded-xl hover:border-neon-purple hover:bg-void transition-all duration-300",
          children: "View Features"
        })]
      }), y.jsx(U.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        transition: {
          delay: 1,
          duration: .8
        },
        className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",
        children: [{
          value: "10",
          label: "Active Slots"
        }, {
          value: "99.9%",
          label: "Uptime"
        }, {
          value: "24/7",
          label: "Support"
        }, {
          value: "0",
          label: "Detections"
        }].map((e, t) => y.jsxs(U.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            delay: 1 + t * .1,
            duration: .6
          },
          className: "p-4 bg-void-dark/40 backdrop-blur-xl border border-neon-violet/20 rounded-xl",
          children: [y.jsx("div", {
            className: "text-3xl font-black bg-gradient-to-r from-neon-violet to-neon-purple bg-clip-text text-transparent mb-1",
            children: e.value
          }), y.jsx("div", {
            className: "text-gray-400 text-sm",
            children: e.label
          })]
        }, e.label))
      })]
    }), y.jsx(U.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: .3
      },
      transition: {
        delay: 1.2,
        duration: 1
      },
      className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
      children: y.jsx(U.div, {
        animate: {
          y: [0, 10, 0]
        },
        transition: {
          repeat: 1 / 0,
          duration: 2,
          ease: "easeInOut"
        },
        className: "text-gray-500",
        children: y.jsx(If, {
          className: "w-6 h-6 rotate-90"
        })
      })
    })]
  })
}
function Hw() {
  return y.jsxs("section", {
    className: "relative py-20 px-4",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-gradient-to-b from-black via-void-dark/50 to-black"
    }), y.jsxs(U.div, {
      initial: {
        opacity: 0,
        y: 30
      },
      whileInView: {
        opacity: 1,
        y: 0
      },
      viewport: {
        once: !0
      },
      transition: {
        duration: .8
      },
      className: "relative z-10 max-w-4xl mx-auto",
      children: [y.jsxs("div", {
        className: "text-center mb-12",
        children: [y.jsxs(U.div, {
          initial: {
            opacity: 0,
            scale: .9
          },
          whileInView: {
            opacity: 1,
            scale: 1
          },
          viewport: {
            once: !0
          },
          className: "inline-flex items-center gap-2 mb-4",
          children: [y.jsx(Uw, {
            className: "w-6 h-6 text-neon-violet"
          }), y.jsx("h2", {
            className: "text-3xl md:text-4xl font-bold text-white",
            children: "System Requirements"
          })]
        }), y.jsx("p", {
          className: "text-gray-400",
          children: "Optimized for maximum compatibility"
        })]
      }), y.jsxs(U.div, {
        whileHover: {
          scale: 1.01
        },
        transition: {
          type: "spring",
          stiffness: 300
        },
        className: "relative group",
        children: [y.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-r from-neon-violet/20 to-neon-purple/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"
        }), y.jsxs("div", {
          className: "relative bg-void-dark/80 backdrop-blur-xl rounded-2xl border border-neon-violet/30 p-8 overflow-hidden",
          children: [y.jsxs("div", {
            className: "absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-void/80 to-transparent flex items-center px-4 border-b border-neon-violet/20",
            children: [y.jsxs("div", {
              className: "flex gap-2",
              children: [y.jsx("div", {
                className: "w-3 h-3 rounded-full bg-red-500/80"
              }), y.jsx("div", {
                className: "w-3 h-3 rounded-full bg-yellow-500/80"
              }), y.jsx("div", {
                className: "w-3 h-3 rounded-full bg-neon-green/80"
              })]
            }), y.jsx("span", {
              className: "ml-4 text-gray-400 text-sm font-mono",
              children: "system_info.txt"
            })]
          }), y.jsx("pre", {
            className: "mt-8 text-neon-green font-mono text-sm md:text-base leading-relaxed overflow-x-auto",
            children: y.jsx("code", {
              children: `> OS: All Windows 10 and 11 Support
> Hardware: Intel & AMD Compatible, Nvidia & AMD Compatible
> Security: Supports HVCI, Secure Boot, & Virtualization
> Driver: 1-on-1 Custom Driver (Microsoft Signed)
          Limited to 10 Users`
            })
          }), y.jsx("div", {
            className: "mt-6 pt-6 border-t border-neon-violet/20",
            children: y.jsxs("div", {
              className: "flex flex-wrap gap-3",
              children: [y.jsx("span", {
                className: "px-3 py-1 bg-neon-green/10 border border-neon-green/30 rounded text-neon-green text-xs font-semibold",
                children: "✓ HVCI COMPATIBLE"
              }), y.jsx("span", {
                className: "px-3 py-1 bg-neon-purple/10 border border-neon-purple/30 rounded text-neon-purple text-xs font-semibold",
                children: "✓ SECURE BOOT"
              }), y.jsx("span", {
                className: "px-3 py-1 bg-neon-violet/10 border border-neon-violet/30 rounded text-neon-violet text-xs font-semibold",
                children: "✓ VM SUPPORTED"
              })]
            })
          })]
        })]
      })]
    })]
  })
}
const Kw = [{
  icon: Of,
  title: "Targeting",
  description: "Multi-Color Recognition",
  specs: ["Red, Purple, Filtered Purple, Yellow outlines", "Adaptive detection"],
  color: "from-red-500 to-rose-600"
}, {
  icon: Of,
  title: "Aimbot",
  description: "Precision Control",
  specs: ["Adjustable smoothness", "Custom FOV Circle", "Bone selection", "Toggle/Hold modes"],
  color: "from-neon-violet to-neon-purple"
}, {
  icon: Am,
  title: "Triggerbot",
  description: "Instant Reaction",
  specs: ["Customizable delay", "FOV targeting", "Custom keybinds", "Smart activation"],
  color: "from-yellow-500 to-orange-600"
}, {
  icon: Ow,
  title: "RCS",
  description: "Recoil Control System",
  specs: ["Force adjustment", "Step control", "Custom delay", "Speed settings"],
  color: "from-blue-500 to-cyan-600"
}, {
  icon: zw,
  title: "Extras",
  description: "Advanced Features",
  specs: ["SteamMode integration", "Config management", "Sensitivity syncing", "Hotkey system"],
  color: "from-neon-green to-emerald-600"
}];
function bw() {
  return y.jsxs("section", {
    id: "features",
    className: "relative py-20 px-4",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-black"
    }), y.jsxs("div", {
      className: "relative z-10 max-w-7xl mx-auto",
      children: [y.jsxs(U.div, {
        initial: {
          opacity: 0,
          y: 30
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0
        },
        transition: {
          duration: .8
        },
        className: "text-center mb-16",
        children: [y.jsxs("h2", {
          className: "text-3xl md:text-5xl font-bold text-white mb-4",
          children: ["Software ", y.jsx("span", {
            className: "bg-gradient-to-r from-neon-violet to-neon-purple bg-clip-text text-transparent",
            children: "Features"
          })]
        }), y.jsx("p", {
          className: "text-gray-400 text-lg",
          children: "Built for performance, designed for precision"
        })]
      }), y.jsx("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: Kw.map((e, t) => {
          const n = e.icon;
          return y.jsxs(U.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            viewport: {
              once: !0
            },
            transition: {
              delay: t * .1,
              duration: .6
            },
            whileHover: {
              y: -8,
              scale: 1.02
            },
            className: "relative group",
            children: [y.jsx("div", {
              className: `absolute inset-0 bg-gradient-to-r ${e.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300`
            }), y.jsxs("div", {
              className: "relative h-full bg-void-dark/60 backdrop-blur-xl border border-neon-violet/20 group-hover:border-neon-purple/40 rounded-2xl p-6 transition-all duration-300",
              children: [y.jsx("div", {
                className: `inline-flex p-3 bg-gradient-to-br ${e.color} rounded-xl mb-4`,
                children: y.jsx(n, {
                  className: "w-6 h-6 text-white"
                })
              }), y.jsx("h3", {
                className: "text-xl font-bold text-white mb-2",
                children: e.title
              }), y.jsx("p", {
                className: "text-neon-purple text-sm font-semibold mb-4",
                children: e.description
              }), y.jsx("ul", {
                className: "space-y-2",
                children: e.specs.map(r => y.jsxs("li", {
                  className: "flex items-center gap-2 text-gray-400 text-sm",
                  children: [y.jsx("div", {
                    className: "w-1.5 h-1.5 bg-neon-violet rounded-full"
                  }), r]
                }, r))
              })]
            })]
          }, e.title)
        }
        )
      })]
    })]
  })
}
const Gw = [{
  icon: $w,
  name: "Legit",
  description: "Slow and smooth",
  features: ["Lower FOV", "High smoothness", "Natural movement", "Undetectable"],
  color: "from-blue-500 to-cyan-500",
  badge: null
}, {
  icon: Am,
  name: "Medium",
  description: "Fast and smooth",
  features: ["Medium FOV", "Balanced smoothness", "Quick response", "Undetectable"],
  color: "from-neon-violet to-neon-purple",
  badge: "POPULAR"
}, {
  icon: Iw,
  name: "Rage",
  description: "Blatant aimlock",
  features: ["High FOV ", "Aim Lock", "Maximum speed", "Undetectable"],
  color: "from-red-500 to-orange-600",
  badge: null
}];
function Qw() {
  return y.jsxs("section", {
    className: "relative py-20 px-4",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-gradient-to-b from-black via-void-dark/30 to-black"
    }), y.jsxs("div", {
      className: "relative z-10 max-w-6xl mx-auto",
      children: [y.jsxs(U.div, {
        initial: {
          opacity: 0,
          y: 30
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0
        },
        transition: {
          duration: .8
        },
        className: "text-center mb-16",
        children: [y.jsxs("h2", {
          className: "text-3xl md:text-5xl font-bold text-white mb-4",
          children: ["Config ", y.jsx("span", {
            className: "bg-gradient-to-r from-neon-violet to-neon-purple bg-clip-text text-transparent",
            children: "Presets"
          })]
        }), y.jsx("p", {
          className: "text-gray-400 text-lg",
          children: "Choose your playstyle"
        })]
      }), y.jsx("div", {
        className: "grid md:grid-cols-3 gap-6 mb-8",
        children: Gw.map((e, t) => {
          const n = e.icon;
          return y.jsxs(U.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            viewport: {
              once: !0
            },
            transition: {
              delay: t * .15,
              duration: .6
            },
            whileHover: {
              y: -12,
              scale: 1.03
            },
            className: "relative group cursor-pointer",
            children: [y.jsx("div", {
              className: `absolute inset-0 bg-gradient-to-br ${e.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-2xl transition-all duration-500`
            }), y.jsxs("div", {
              className: "relative h-full bg-void-dark/80 backdrop-blur-xl border-2 border-neon-violet/20 group-hover:border-neon-purple/60 rounded-2xl p-8 transition-all duration-300",
              children: [e.badge && y.jsx("div", {
                className: "absolute -top-3 right-6",
                children: y.jsx("span", {
                  className: "px-3 py-1 bg-gradient-to-r from-neon-violet to-neon-purple text-white text-xs font-bold rounded-full shadow-lg",
                  children: e.badge
                })
              }), y.jsx("div", {
                className: `inline-flex p-4 bg-gradient-to-br ${e.color} rounded-2xl mb-6 shadow-lg`,
                children: y.jsx(n, {
                  className: "w-8 h-8 text-white"
                })
              }), y.jsx("h3", {
                className: "text-2xl font-bold text-white mb-2",
                children: e.name
              }), y.jsx("p", {
                className: "text-neon-purple font-semibold mb-6",
                children: e.description
              }), y.jsx("ul", {
                className: "space-y-3",
                children: e.features.map(r => y.jsxs("li", {
                  className: "flex items-start gap-3 text-gray-300",
                  children: [y.jsx("div", {
                    className: `mt-1.5 w-2 h-2 bg-gradient-to-r ${e.color} rounded-full flex-shrink-0`
                  }), y.jsx("span", {
                    className: "text-sm",
                    children: r
                  })]
                }, r))
              })]
            })]
          }, e.name)
        }
        )
      }), y.jsx(U.div, {
        initial: {
          opacity: 0
        },
        whileInView: {
          opacity: 1
        },
        viewport: {
          once: !0
        },
        transition: {
          delay: .5,
          duration: .8
        },
        className: "text-center",
        children: y.jsx("div", {
          className: "inline-block px-6 py-3 bg-void-dark/60 backdrop-blur-xl border border-neon-violet/30 rounded-xl",
          children: y.jsxs("p", {
            className: "text-gray-300",
            children: [y.jsx("span", {
              className: "text-neon-purple font-semibold",
              children: "Fully customizable"
            }), " — modify any preset to fit your playstyle"]
          })
        })
      })]
    })]
  })
}
const Yw = [{
  name: "Weekly Pass",
  price: 30,
  period: "week",
  features: ["Private Discord", "All config presets", "Priority support", "Aimbot", "triggerbot"],
  badge: null,
  highlight: !1
}, {
  name: "Monthly Pass",
  price: 60,
  period: "month",
  features: ["Private Discord", "All config presets", "Priority support", "Aimbot", "triggerbot"],
  badge: "BEST VALUE",
  highlight: !0
}];
function Xw() {
  return y.jsxs("section", {
    className: "relative py-20 px-4",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-black"
    }), y.jsxs("div", {
      className: "relative z-10 max-w-6xl mx-auto",
      children: [y.jsxs(U.div, {
        initial: {
          opacity: 0,
          y: 30
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0
        },
        transition: {
          duration: .8
        },
        className: "text-center mb-16",
        children: [y.jsxs("h2", {
          className: "text-3xl md:text-5xl font-bold text-white mb-4",
          children: ["Choose Your ", y.jsx("span", {
            className: "bg-gradient-to-r from-neon-violet to-neon-purple bg-clip-text text-transparent",
            children: "License"
          })]
        }), y.jsx("p", {
          className: "text-gray-400 text-lg",
          children: "Limited slots available"
        })]
      }), y.jsx("div", {
        className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",
        children: Yw.map((e, t) => y.jsxs(U.div, {
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            delay: t * .2,
            duration: .6
          },
          whileHover: {
            y: -12,
            scale: 1.02
          },
          className: "relative group",
          children: [y.jsx("div", {
            className: `absolute inset-0 ${e.highlight ? "bg-gradient-to-br from-neon-violet via-neon-purple to-neon-violet" : "bg-gradient-to-br from-void to-void-dark"} opacity-0 group-hover:opacity-40 rounded-3xl blur-2xl transition-all duration-500`
          }), y.jsxs("div", {
            className: `relative h-full ${e.highlight ? "bg-gradient-to-br from-void-dark/90 to-void/90 border-2 border-neon-purple" : "bg-void-dark/80 border border-neon-violet/20"} backdrop-blur-xl rounded-3xl p-8 transition-all duration-300`,
            children: [e.badge && y.jsx("div", {
              className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
              children: y.jsxs("div", {
                className: "px-4 py-1.5 bg-gradient-to-r from-neon-violet to-neon-purple text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1",
                children: [y.jsx(Fw, {
                  className: "w-3 h-3"
                }), e.badge]
              })
            }), y.jsxs("div", {
              className: "text-center mb-8",
              children: [y.jsx("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: e.name
              }), y.jsxs("div", {
                className: "flex items-baseline justify-center gap-2",
                children: [y.jsxs("span", {
                  className: "text-5xl font-black bg-gradient-to-r from-neon-violet to-neon-purple bg-clip-text text-transparent",
                  children: ["$", e.price]
                }), y.jsxs("span", {
                  className: "text-gray-400",
                  children: ["/ ", e.period]
                })]
              })]
            }), y.jsx("ul", {
              className: "space-y-4 mb-8",
              children: e.features.map(n => y.jsxs("li", {
                className: "flex items-start gap-3",
                children: [y.jsx("div", {
                  className: `mt-0.5 p-0.5 ${e.highlight ? "bg-gradient-to-r from-neon-violet to-neon-purple" : "bg-neon-violet"} rounded-full flex-shrink-0`,
                  children: y.jsx(_w, {
                    className: "w-4 h-4 text-white"
                  })
                }), y.jsx("span", {
                  className: "text-gray-300",
                  children: n
                })]
              }, n))
            }), y.jsx(U.a, {
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: .98
              },
              href: "https://discord.gg/7HswSMQbCS",
              target: "_blank",
              className: `w-full py-4 flex justify-center items-center ${e.highlight ? "bg-gradient-to-r from-neon-violet via-neon-purple to-neon-violet" : "bg-void border-2 border-neon-violet"} text-white font-bold rounded-xl shadow-lg transition-all duration-300 ${e.highlight ? "hover:shadow-neon-purple/50 hover:shadow-2xl" : "hover:border-neon-purple hover:bg-void-dark"}`,
              children: "Purchase License"
            })]
          })]
        }, e.name))
      }), y.jsx(U.div, {
        initial: {
          opacity: 0
        },
        whileInView: {
          opacity: 1
        },
        viewport: {
          once: !0
        },
        transition: {
          delay: .6,
          duration: .8
        },
        className: "text-center mt-12",
        children: y.jsx("p", {
          className: "text-gray-400",
          children: "All purchases are processed securely. Instant delivery after payment."
        })
      })]
    })]
  })
}
function Zw() {
  return y.jsxs("footer", {
    className: "relative py-12 px-4 border-t border-neon-violet/20",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-black"
    }), y.jsxs(U.div, {
      initial: {
        opacity: 0
      },
      whileInView: {
        opacity: 1
      },
      viewport: {
        once: !0
      },
      transition: {
        duration: .8
      },
      className: "relative z-10 max-w-7xl mx-auto",
      children: [y.jsxs("div", {
        className: "flex flex-col md:flex-row items-center justify-between gap-6",
        children: [y.jsxs("div", {
          className: "text-center md:text-left",
          children: [y.jsx("h3", {
            className: "text-2xl font-bold bg-gradient-to-r from-neon-violet to-neon-purple bg-clip-text text-transparent mb-2",
            children: "BAPE COLOR AIM"
          }), y.jsx("p", {
            className: "text-gray-400 text-sm",
            children: "Premium External Aim Assist"
          })]
        }), y.jsxs("div", {
          className: "flex flex-wrap items-center justify-center gap-6",
          children: [y.jsx("a", {
            href: "#status",
            className: "text-gray-400 hover:text-neon-purple transition-colors duration-300 text-sm"
          }), y.jsx("a", {
            href: "#tos",
            className: "text-gray-400 hover:text-neon-purple transition-colors duration-300 text-sm",
            children: "Terms of Service"
          }), y.jsx("a", {
            href: "#privacy",
            className: "text-gray-400 hover:text-neon-purple transition-colors duration-300 text-sm",
            children: "Privacy"
          })]
        })]
      }), y.jsx("div", {
        className: "mt-8 pt-8 border-t border-neon-violet/10 text-center",
        children: y.jsx("p", {
          className: "text-gray-500 text-sm",
          children: "© 2024 Bape Color Aim. All rights reserved."
        })
      })]
    })]
  })
}
function qw() {
  return y.jsxs("div", {
    className: "min-h-screen bg-black",
    children: [y.jsx(Ww, {}), y.jsx(Hw, {}), y.jsx(bw, {}), y.jsx(Qw, {}), y.jsx(Xw, {}), y.jsx(Zw, {})]
  })
}
Zh(document.getElementById("root")).render(y.jsx(L.StrictMode, {
  children: y.jsx(qw, {})
}));
// Add to your java.js
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-button');
    const menuOverlay = document.getElementById('menu-overlay');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Toggle menu visibility
            if (menuOverlay) {
                menuOverlay.classList.toggle('hidden');
            } else {
                // Redirect to menu page
                window.location.href = 'menu.html';
            }
        });
    }
});