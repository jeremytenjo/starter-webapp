"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Letters = exports.InnerImage = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "imagestyles__Wrapper",
  componentId: "sc-1gw749p-0"
})(["min-height:100%;background-repeat:no-repeat;cursor:", ";transition:0.2s;height:0;overflow:hidden;padding-top:591.44px / 1127.34px * 100%;position:relative;background-color:lightgray;tansition:var(--transition-main);display:flex;justify-content:center;align-items:center;background-color:", ";", " ", " ", ""], function (_ref) {
  var cursor = _ref.cursor;
  return cursor;
}, function (_ref2) {
  var letterColor = _ref2.letterColor;
  return "var(--color-".concat(letterColor, "-background)");
}, function (_ref3) {
  var round = _ref3.round;
  return round && _round();
}, function (_ref4) {
  var borderColor = _ref4.borderColor;
  return borderColor && _borderColor(borderColor);
}, function (_ref5) {
  var size = _ref5.size,
      width = _ref5.width,
      height = _ref5.height;
  return _size(size, width, height);
});

exports.Wrapper = Wrapper;

var _size = function _size(size, width, height) {
  return "\nwidth: ".concat(width || size, "px;\nheight: ").concat(height || size, "px;\n");
};

var _round = function _round() {
  return "\nborder-radius: 100px;\n";
};

var _borderColor = function _borderColor(borderColor) {
  return "\nborder: 2px solid transparent;\n&:active {\n  border: 2px solid var(--color-".concat(borderColor, ");\n}\n");
};

var InnerImage = _styledComponents["default"].img.withConfig({
  displayName: "imagestyles__InnerImage",
  componentId: "sc-1gw749p-1"
})(["position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;"]);

exports.InnerImage = InnerImage;

var Letters = _styledComponents["default"].span.withConfig({
  displayName: "imagestyles__Letters",
  componentId: "sc-1gw749p-2"
})(["font-family:", ";text-transform:uppercase;color:", ";font-size:32px;font-weight:bold;user-select:none;"], function (_ref6) {
  var lettersFont = _ref6.lettersFont;
  return "var(--font-".concat(lettersFont, ")");
}, function (_ref7) {
  var letterColor = _ref7.letterColor;
  return "var(--color-".concat(letterColor, ")");
});

exports.Letters = Letters;