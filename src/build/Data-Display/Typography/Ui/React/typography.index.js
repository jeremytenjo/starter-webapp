"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));

var _typography = require("./typography.propTypes");

var defineTag = function defineTag(variant) {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;

    case 'body1':
    case 'body2':
      return 'p';

    default:
      return 'span';
  }
};

var Typography = function Typography(_ref) {
  var variant = _ref.variant,
      color = _ref.color,
      text = _ref.text,
      otherStyles = (0, _objectWithoutProperties2["default"])(_ref, ["variant", "color", "text"]);
  var style = (0, _objectSpread2["default"])({
    color: color ? "var(--color-".concat(color, ")") : null
  }, otherStyles);
  var Tag = defineTag(variant);
  return _react["default"].createElement(Tag, {
    style: style,
    variant: variant
  }, text);
};

Typography.defaultProps = _typography.defaultProps;
Typography.propTypes = _typography.propTypes;
var _default = Typography;
exports["default"] = _default;