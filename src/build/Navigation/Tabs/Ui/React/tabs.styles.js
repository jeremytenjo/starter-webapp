"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "tabsstyles__Wrapper",
  componentId: "sc-1ellit0-0"
})(["background-color:white;.MuiTabs-indicator{background:", ";}"], function (_ref) {
  var color = _ref.color;
  return "var(--color-".concat(color, ")");
});

exports.Wrapper = Wrapper;