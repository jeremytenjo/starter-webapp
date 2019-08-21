"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "buttonstyles__Wrapper",
  componentId: "g15ppy-0"
})(["background-color:", ";border-radius:100px;cursor:pointer;padding:var(--spacing-s);display:flex;align-items:center;justify-content:center;text-align:center;transition:0.2s ease-in-out;height:40px;border:2px solid ", ";&:active{border:2px solid ", ";}", " ", " ", " ", " ", ""], function (_ref) {
  var color = _ref.color;
  return "var(--color-".concat(color, "-background)");
}, function (_ref2) {
  var color = _ref2.color;
  return "var(--color-".concat(color, "-background)");
}, function (_ref3) {
  var color = _ref3.color;
  return "var(--color-".concat(color, "-darker)");
}, function (_ref4) {
  var active = _ref4.active,
      color = _ref4.color;
  return active && "border: 2px solid var(--color-".concat(color, "-darker);");
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled && "\n  background-color: var(--color-disabled-background);\n  border: 2px solid var(--color-disabled-background);\n  &:active {\n    border: 2px solid var(--color-disabled-background);\n  }";
}, function (_ref6) {
  var outlined = _ref6.outlined;
  return outlined && "background-color: transparent;\n     border: 2px solid var(--color-white);\n     &:active {\n       border: 2px solid var(--color-white);\n    }";
}, function (_ref7) {
  var icon = _ref7.icon,
      color = _ref7.color;
  return icon && "\n  svg {\n    margin-left: 10px;\n    fill: var(--color-".concat(color, "-darker);\n    }\n  ");
}, function (_ref8) {
  var type = _ref8.type,
      color = _ref8.color;
  return type === 'FAB' && "\n    box-shadow: var(--boxShadow-1);\n    background-color: var(--color-".concat(color, ");\n    border: 2px solid var(--color-").concat(color, ");\n     &:active {\n       border: 2px solid var(--color-").concat(color, ");\n    }\n  svg {\n    margin-left: 10px;\n    fill: var(--color-white);\n    }\n  ");
});

exports.Wrapper = Wrapper;