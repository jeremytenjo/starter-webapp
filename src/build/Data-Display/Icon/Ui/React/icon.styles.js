"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.WrapperIcon = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "iconstyles__Wrapper",
  componentId: "sc-1ilajxe-0"
})(["text-align:center;width:fit-content;display:grid;grid-gap:var(--spacing-xs);user-select:none;font-family:Montserrat;font-weight:bolder;"]);

exports.Wrapper = Wrapper;

var WrapperIcon = _styledComponents["default"].div.withConfig({
  displayName: "iconstyles__WrapperIcon",
  componentId: "sc-1ilajxe-1"
})(["display:flex;transition:0.3s;cursor:pointer;border-radius:100px;animation-timing-function:ease-out;width:", "px;height:", "px;&:active{background-color:", ";}", " ", " ", " svg{fill:", ";display:block;margin:0 auto;align-self:center;width:", "px;}"], function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var color = _ref3.color;
  return color ? "var(--color-".concat(color, "-background)") : 'rgba(0, 0, 0, 0.1)';
}, function (_ref4) {
  var background = _ref4.background,
      size = _ref4.size,
      color = _ref4.color;
  return background && "\n    background-color:".concat(color ? "var(--color-".concat(color, "-background)") : 'rgba(0, 0, 0, 0.1)', ";\n    border: 2px solid ").concat(color ? "var(--color-".concat(color, "-background)") : 'none', ";\n    width: ").concat(size, "px;\n    height: ").concat(size, "px;  \n\n    &:active {\n    border: 2px solid ").concat(color ? "var(--color-".concat(color, "-darker)") : 'none', ";\n    }\n  ");
}, function (_ref5) {
  var background = _ref5.background,
      color = _ref5.color,
      noBackgroundChange = _ref5.noBackgroundChange;
  return background && !noBackgroundChange && "\n    &:active {\n    background-color: ".concat(color ? 'transparent' : 'rgba(97, 97, 97, 0.5)', ";\n    }\n  ");
}, function (_ref6) {
  var noBackground = _ref6.noBackground;
  return noBackground && "    \n    border: none;\n    width:auto;\n    height:auto;\n    &:active {\n    background-color: transparent;\n    border: none;\n    }\n  ";
}, function (_ref7) {
  var color = _ref7.color,
      dark = _ref7.dark;
  return color && !dark ? "var(--color-".concat(color, ")") : color && dark ? "var(--color-".concat(color, "-darker)") : 'var(--color-white)';
}, function (_ref8) {
  var size = _ref8.size;
  return size;
});

exports.WrapperIcon = WrapperIcon;

var Label = _styledComponents["default"].div.withConfig({
  displayName: "iconstyles__Label",
  componentId: "sc-1ilajxe-2"
})(["font-family:Montserrat;font-weight:bold;font-size:14px;text-align:center;"]);

exports.Label = Label;