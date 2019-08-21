"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "liststyles__Wrapper",
  componentId: "gmhvx6-0"
})(["transition:0.2s;-webkit-overflow-scrolling:touch;box-sizing:border-box;display:grid;padding:", ";grid-gap:", ";grid-auto-flow:", ";", " ", " "], function (_ref) {
  var padding = _ref.padding;
  return "var(--spacing-".concat(padding, ")");
}, function (_ref2) {
  var gap = _ref2.gap;
  return "var(--spacing-".concat(gap, ")");
}, function (_ref3) {
  var direction = _ref3.direction;
  return direction;
}, function (_ref4) {
  var overflows = _ref4.overflows,
      dataLength = _ref4.dataLength;
  return overflows && "\n    overflow: auto;\n    overflow-y: hidden;\n    grid-template-columns: repeat(".concat(dataLength > 0 && dataLength, ", auto);\n    grid-template-rows: 100%;\n    justify-content: flex-start;\n  ");
}, function (_ref5) {
  var grid = _ref5.grid,
      repeat = _ref5.repeat,
      minWidth = _ref5.minWidth,
      repeatOnMinWidth = _ref5.repeatOnMinWidth;
  return grid && repeat && "\n      grid-auto-flow: row;\n      align-items: stretch;\n      grid-template-columns: repeat(".concat(repeat, ", minmax(10px, 1fr));\n\n  /* Min Width */\n  @media (min-width: ").concat(minWidth, "px) {\n    grid-template-columns: repeat(").concat(repeatOnMinWidth, ", minmax(10px, 1fr));\n  }   \n    ");
});

exports.Wrapper = Wrapper;