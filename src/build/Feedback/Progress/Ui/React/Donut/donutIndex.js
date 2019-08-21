"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));

var Donut = function Donut(_ref) {
  var style = _ref.style;
  return _react["default"].createElement(Wrapper, {
    style: style
  });
}; // Style


var donutSpin = (0, _styledComponents.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "donutIndex__Wrapper",
  componentId: "fyptel-0"
})(["display:inline-block;border:4px solid rgba(0,0,0,0.1);border-left-color:#7983ff;border-radius:50%;width:30px;height:30px;animation:", " 0.7s linear infinite;"], donutSpin); // Exports


var _default = (0, _react.memo)(Donut);

exports["default"] = _default;