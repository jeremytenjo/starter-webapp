"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("../../icon.index"));

var IconBack = function IconBack(_ref) {
  var _ref$onGoBack = _ref.onGoBack,
      onGoBack = _ref$onGoBack === void 0 ? function () {
    return null;
  } : _ref$onGoBack,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? null : _ref$to,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? 'arrow/material' : _ref$icon;
  // Local Vars
  var historyRouter = window.historyRouter; // Functions

  var goBack = function goBack() {
    to ? historyRouter.push(to) : historyRouter.goBack();
    onGoBack();
  }; // Template


  return _react["default"].createElement(_icon["default"], {
    name: icon,
    onClick: goBack,
    background: true
  });
};

var _default = (0, _react.memo)(IconBack);

exports["default"] = _default;