"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));

var _dialog = _interopRequireDefault(require("../../dialog.index"));

var _dialogStyle = require("./dialog.style1.styles");

var _default = function _default(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_dialog["default"], (0, _extends2["default"])({
    Wrapper: _dialogStyle.Wrapper,
    ConfirmationCon: _dialogStyle.ConfirmationCon
  }, props)));
};

exports["default"] = _default;