"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _animation = _interopRequireDefault(require("../Animations/Web-Animations-API/animation.index"));

var _overlay = require("./overlay.propTypes");
var _overlay2 = require("./overlay.styles");

var Overlay = function Overlay(_ref) {
  var show = _ref.show,
      onClick = _ref.onClick,
      backgroundcolor = _ref.backgroundcolor,
      noAnimation = _ref.noAnimation,
      zIndex = _ref.zIndex;
  var overlayRef = (0, _react.useRef)(null);
  var config = {
    fill: 'forwards',
    duration: 200,
    direction: 'normal',
    easing: 'ease-out'
  };
  (0, _react.useEffect)(function () {
    if (show !== null && !noAnimation) (0, _animation["default"])({
      name: 'showHide',
      el: overlayRef.current,
      show: !!show,
      config: config
    });
  }, [show]);
  (0, _react.useEffect)(function () {
    window.addEventListener('keydown', handleKeyInput, true);
    return window.removeEventListener('keydown', handleKeyInput);
  }, []);

  var handleKeyInput = function handleKeyInput(_ref2) {
    var key = _ref2.key;
    if (key === 'Escape') onClick();
  };

  return _react["default"].createElement(_overlay2.Wrapper, {
    ref: overlayRef,
    onClick: onClick,
    backgroundcolor: backgroundcolor,
    noAnimation: noAnimation,
    zIndex: zIndex
  });
};

Overlay.defaultProps = _overlay.defaultProps;
Overlay.propTypes = _overlay.propTypes;
var _default = Overlay;
exports["default"] = _default;