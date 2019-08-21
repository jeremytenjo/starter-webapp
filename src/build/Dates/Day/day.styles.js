"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusCon = exports.DayCon = exports.Wrapper = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));

var DAY_SIZE = '30px';

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "daystyles__Wrapper",
  componentId: "bwg6ah-0"
})(["display:grid;grid-auto-flow:row;"]);

exports.Wrapper = Wrapper;

var DayCon = _styledComponents["default"].div.withConfig({
  displayName: "daystyles__DayCon",
  componentId: "bwg6ah-1"
})(["width:", ";height:", ";border-radius:50%;display:flex;justify-content:center;align-items:center;color:black;font-size:14px;font-weight:500;justify-self:center;cursor:pointer;user-select:none;font-family:Roboto;transition:.2s;&:active{background-color:", ";}", " ", " ", ""], DAY_SIZE, DAY_SIZE, function (_ref) {
  var activeColor = _ref.activeColor;
  return activeColor ? "var(--color-".concat(activeColor, "-background)") : 'rgba(0, 0, 0, 0.1)';
}, function (_ref2) {
  var activeColor = _ref2.activeColor,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["activeColor"]);
  return isCurrentDay(props, "\n  background: transparent;\n  border: 2px solid ".concat(activeColor, ";\n  color: black;"));
}, function (props) {
  return isGrey(props, "\n  background: transparent;\n  color: grey;");
}, function (_ref3) {
  var activeColor = _ref3.activeColor,
      props = (0, _objectWithoutProperties2["default"])(_ref3, ["activeColor"]);
  return isActive(props, "\n  background-color: ".concat(activeColor, ";\n  color: white;"));
});

exports.DayCon = DayCon;

var StatusCon = _styledComponents["default"].div.withConfig({
  displayName: "daystyles__StatusCon",
  componentId: "bwg6ah-2"
})(["display:flex;justify-content:center;flex-direction:row;width:100%;"]); // Variants


exports.StatusCon = StatusCon;

var isCurrentDay = function isCurrentDay(_ref4, styles) {
  var isCurrentDay = _ref4.isCurrentDay;
  return isCurrentDay && styles;
};

var isGrey = function isGrey(_ref5, styles) {
  var grey = _ref5.grey;
  return grey && styles;
};

var isActive = function isActive(_ref6, styles) {
  var isActive = _ref6.isActive;
  return isActive && styles;
};