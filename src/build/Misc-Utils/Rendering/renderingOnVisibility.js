"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _reactLazyload = _interopRequireDefault(require("react-lazyload"));

var _default = (0, _react.memo)(function (_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  var isSupported = window.IntersectionObserver || false;
  return isSupported ? _react["default"].createElement(_reactLazyload["default"], props, children) : _react["default"].createElement(_react["default"].Fragment, null, children);
});

exports["default"] = _default;