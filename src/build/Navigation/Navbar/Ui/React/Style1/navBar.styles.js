"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainIconCon = exports.IconCon = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].footer.withConfig({
  displayName: "navBarstyles__Wrapper",
  componentId: "wpx7r7-0"
})(["width:100%;display:grid;max-width:900px;grid-template-columns:repeat(auto-fit,minmax(1px,1fr));bottom:0;background-color:transparent;padding-bottom:2px;margin:auto;left:0;right:0;justify-items:center;font-family:", ";position:relative;*{position:relative;}input{cursor:pointer;position:absolute;left:0;right:0;top:0;bottom:0;opacity:0;width:100%;}", ""], function (_ref) {
  var fontFamily = _ref.fontFamily;
  return fontFamily;
}, function (_ref2) {
  var hasMainIcon = _ref2.hasMainIcon;
  return !hasMainIcon && "\n  background-color: white;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);  \n  ";
});

exports.Wrapper = Wrapper;

var IconCon = _styledComponents["default"].div.withConfig({
  displayName: "navBarstyles__IconCon",
  componentId: "wpx7r7-1"
})(["position:relative;width:50px;text-align:center;font-size:10px;display:", ";grid-template-rows:32px 12px;cursor:pointer;box-sizing:border-box;padding-top:", ";padding-bottom:", ";transition:0.2s;border-radius:100px;&:active{background-color:", ";}span{user-select:none;transition:0.1s;color:", ";}svg{width:23px;fill:", ";transition:0.1s;margin:0 auto;height:35px;}"], function (_ref3) {
  var label = _ref3.label;
  return label ? 'grid' : 'block';
}, function (_ref4) {
  var label = _ref4.label;
  return label ? '2px' : '0';
}, function (_ref5) {
  var label = _ref5.label;
  return label ? '5px' : '0';
}, function (_ref6) {
  var backgroundColor = _ref6.backgroundColor;
  return backgroundColor;
}, function (_ref7) {
  var color = _ref7.color;
  return color;
}, function (_ref8) {
  var color = _ref8.color;
  return color;
});

exports.IconCon = IconCon;

var MainIconCon = _styledComponents["default"].div.withConfig({
  displayName: "navBarstyles__MainIconCon",
  componentId: "wpx7r7-2"
})(["background-color:", ";width:50px;border-radius:100px;cursor:pointer;display:grid;align-items:center;justify-content:center;box-shadow:", ";transform:translateY(-15px);"], function (_ref9) {
  var activeColor = _ref9.activeColor;
  return activeColor;
}, function (_ref10) {
  var mainIconShadow = _ref10.mainIconShadow;
  return mainIconShadow;
});

exports.MainIconCon = MainIconCon;