"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "overlaystyles__Wrapper",
  componentId: "sc-1ef3jjq-0"
})(["background-color:", ";display:", ";position:fixed;top:0;right:0;bottom:0;left:0;z-index:", ";"], function (_ref) {
  var backgroundcolor = _ref.backgroundcolor;
  return "var(--color-".concat(backgroundcolor, "-opaque)");
}, function (_ref2) {
  var noAnimation = _ref2.noAnimation;
  return noAnimation ? 'block' : 'none';
}, function (_ref3) {
  var zIndex = _ref3.zIndex;
  return zIndex;
});

exports.Wrapper = Wrapper;