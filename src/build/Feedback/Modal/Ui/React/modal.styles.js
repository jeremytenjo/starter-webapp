"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "modalstyles__Wrapper",
  componentId: "sc-1i1tgoh-0"
})(["display:none;opacity:0;width:fit-content;height:fit-content;position:fixed;top:0;right:0;bottom:0;margin:auto;left:0;z-index:2;"]);

exports.Wrapper = Wrapper;