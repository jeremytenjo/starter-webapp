"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _linear = require("./linear.propTypes");
var _linear2 = require("./linear.styles");

var Linear = function Linear(_ref) {
  var color = _ref.color;
  return _react["default"].createElement(_linear2.Wrapper, {
    color: color
  }, _react["default"].createElement("progress", {
    className: "pure-material-progress-linear"
  }));
};

Linear.defaultProps = _linear.defaultProps;
Linear.propTypes = _linear.propTypes;

var _default = (0, _react.memo)(Linear);

exports["default"] = _default;