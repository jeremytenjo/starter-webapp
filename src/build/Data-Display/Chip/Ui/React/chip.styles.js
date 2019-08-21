"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "chipstyles__Wrapper",
  componentId: "nugoth-0"
})(["background-color:", ";color:", ";border-radius:100px;padding:2px 5px;display:grid;align-items:center;justify-contents:center;text-align:center;width:fit-content;grid-gap:var(--spacing-xxs);grid-template-columns:auto auto;user-select:none;cursor:pointer;border:2px solid transparent;transition:0.2s;&:active{border:2px solid ", ";}svg{fill:", ";}"], function (_ref) {
  var color = _ref.color;
  return "var(--color-".concat(color, "-background)");
}, function (_ref2) {
  var color = _ref2.color;
  return "var(--color-".concat(color, "-darker)");
}, function (_ref3) {
  var color = _ref3.color;
  return "var(--color-".concat(color, "-darker)");
}, function (_ref4) {
  var color = _ref4.color;
  return "var(--color-".concat(color, "-darker)");
});

exports.Wrapper = Wrapper;

var Text = _styledComponents["default"].span.withConfig({
  displayName: "chipstyles__Text",
  componentId: "nugoth-1"
})(["color:", ";user-select:none;font-family:Montserrat;font-style:normal;font-weight:bold;font-size:13px;line-height:normal;text-align:center;cursor:pointer;"], function (_ref5) {
  var color = _ref5.color;
  return "var(--color-".concat(color, "-darker)");
});

exports.Text = Text;