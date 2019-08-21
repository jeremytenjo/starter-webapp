"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _icon = _interopRequireDefault(require("../../../Icon/Ui/React/icon.index"));

var _chip = require("./chip.propTypes");
var _chip2 = require("./chip.styles");

var Chip = function Chip(_ref) {
  var color = _ref.color,
      text = _ref.text,
      onClick = _ref.onClick,
      toRemove = _ref.toRemove;
  return _react["default"].createElement(_chip2.Wrapper, {
    color: color,
    onClick: onClick
  }, toRemove && _react["default"].createElement(_icon["default"], {
    name: "close/round-filled",
    noBackground: true,
    size: 18
  }), _react["default"].createElement("div", null, "#", _react["default"].createElement(_chip2.Text, {
    color: color
  }, text)));
};

Chip.defaultProps = _chip.defaultProps;
Chip.propTypes = _chip.propTypes;
var _default = Chip;
exports["default"] = _default;