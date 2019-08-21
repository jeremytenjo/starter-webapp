"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");

// Updates component when scrolled to the bottom
var Watcher = function Watcher(_ref) {
  var _elToWatched = _ref.elToWatched,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 10 : _ref$offset,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? null : _ref$enabled;
  var elToWatched = _elToWatched || document.scrollingElement || document.documentElement; // State

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      reachedEnd = _useState2[0],
      setreachedEnd = _useState2[1];

  var reset = (0, _react.useCallback)(function () {
    return setreachedEnd(false);
  }); //Effects

  (0, _react.useEffect)(function () {
    if (enabled) {
      window.addEventListener('scroll', handleScroll, true);
      return function () {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Reset watcher for continued listening

  (0, _react.useEffect)(function () {
    reset();
  }, [reachedEnd]); // Functions

  var handleScroll = function handleScroll() {
    var reachEnd = elToWatched != null && elToWatched.scrollHeight - offset <= elToWatched.scrollTop + window.innerHeight;
    if (reachEnd) setreachedEnd(true);else setreachedEnd(false);
  };

  return reachedEnd;
};

var _default = Watcher;
exports["default"] = _default;