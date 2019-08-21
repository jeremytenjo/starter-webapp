"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _typography = _interopRequireDefault(require("../../../../Data-Display/Typography/Ui/React/typography.index"));

var _button = require("./button.propTypes");

var ButtonIcon = (0, _react.lazy)(function () {
  return import(
  /* webpackChunkName: 'ButtonIcon' */
  '../../../../Data-Display/Icon/Ui/React/icon.index');
});

var Button = function Button(_ref) {
  var Wrapper = _ref.Wrapper,
      type = _ref.type,
      color = _ref.color,
      text = _ref.text,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      active = _ref.active,
      outlined = _ref.outlined,
      style = _ref.style,
      iconName = _ref.iconName;
  var textColor = disabled ? 'disabled-darker' : outlined ? 'white' : type === 'FAB' ? 'white' : "".concat(color, "-darker");
  return _react["default"].createElement(Wrapper, {
    type: type,
    color: color,
    onClick: disabled ? function () {
      return null;
    } : onClick,
    disabled: disabled,
    active: active,
    outlined: outlined,
    icon: iconName,
    style: style
  }, _react["default"].createElement(_typography["default"], {
    text: text,
    variant: "button",
    color: textColor
  }), iconName && _react["default"].createElement(_react.Suspense, {
    fallback: null
  }, _react["default"].createElement(ButtonIcon, {
    name: iconName,
    noBackground: true
  })));
};

Button.defaultProps = _button.defaultProps;
Button.propTypes = _button.propTypes;

var _default = (0, _react.memo)(Button);

exports["default"] = _default;