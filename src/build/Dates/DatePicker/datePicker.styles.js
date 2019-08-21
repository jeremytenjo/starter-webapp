"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightArrow = exports.LeftArrow = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "datePickerstyles__Wrapper",
  componentId: "sc-12kr4x5-0"
})(["display:inline-grid;grid-auto-flow:column;align-items:center;grid-gap:5px;svg{display:block;box-sizing:content-box;cursor:pointer;padding:10px;fill:", ";border-radius:50%;transition:0.3s;&:active{background-color:", ";}}select{font-size:19px;background:transparent;text-align-last:center;width:100px;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-appearance:none;&:focus{outline:none;}}"], function (_ref) {
  var arrowColor = _ref.arrowColor;
  return "var(--color-".concat(arrowColor, ")");
}, function (_ref2) {
  var color = _ref2.color;
  return color ? "var(--color-".concat(color, "-background)") : 'rgba(0, 0, 0, 0.1)';
});

exports.Wrapper = Wrapper;

var LeftArrow = _styledComponents["default"].div.withConfig({
  displayName: "datePickerstyles__LeftArrow",
  componentId: "sc-12kr4x5-1"
})([""]);

exports.LeftArrow = LeftArrow;

var RightArrow = _styledComponents["default"].div.withConfig({
  displayName: "datePickerstyles__RightArrow",
  componentId: "sc-12kr4x5-2"
})(["transform:rotate(180deg);"]);

exports.RightArrow = RightArrow;