"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _overlay = _interopRequireDefault(require("../../../../Misc-Utils/Overlay/overlay.index"));
var _animation = _interopRequireDefault(require("../../../../Misc-Utils/Animations/Web-Animations-API/animation.index"));

var _modal = require("./modal.propTypes");
var _modal2 = require("./modal.styles");

var Modal = function Modal(_ref) {
  var show = _ref.show,
      type = _ref.type,
      children = _ref.children,
      onClose = _ref.onClose,
      animationStyle = _ref.animationStyle;
  var modalRef = (0, _react.useRef)(null);
  var config = {
    fill: 'forwards',
    duration: 200,
    direction: 'normal',
    easing: 'ease-out'
  };
  (0, _react.useEffect)(function () {
    if (show !== null) (0, _animation["default"])({
      name: animationStyle,
      el: modalRef.current,
      config: config,
      show: show
    });
  }, [show]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_modal2.Wrapper, {
    ref: modalRef,
    type: type
  }, children), _react["default"].createElement(_overlay["default"], {
    show: show,
    onClick: onClose,
    zIndex: 1
  }));
};

Modal.defaultProps = _modal.defaultProps;
Modal.propTypes = _modal.propTypes;

var _default = (0, _react.memo)(Modal);

exports["default"] = _default;