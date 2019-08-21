"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayGrid = exports.DatePickersCon = exports.WeekDaysTitles = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "calendarstyles__Wrapper",
  componentId: "sc-1baahc5-0"
})(["width:100%;display:grid;grid-auto-flow:row;grid-gap:10px;"]);

exports.Wrapper = Wrapper;

var WeekDaysTitles = _styledComponents["default"].div.withConfig({
  displayName: "calendarstyles__WeekDaysTitles",
  componentId: "sc-1baahc5-1"
})(["display:grid;grid-auto-flow:column;grid-auto-columns:1fr;span{font-family:Roboto;font-style:normal;font-weight:bold;font-size:14px;text-align:center;}"]);

exports.WeekDaysTitles = WeekDaysTitles;

var DatePickersCon = _styledComponents["default"].div.withConfig({
  displayName: "calendarstyles__DatePickersCon",
  componentId: "sc-1baahc5-2"
})(["display:grid;justify-content:space-between;grid-auto-flow:column;"]);

exports.DatePickersCon = DatePickersCon;

var DayGrid = _styledComponents["default"].div.withConfig({
  displayName: "calendarstyles__DayGrid",
  componentId: "sc-1baahc5-3"
})(["display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(5,1fr);grid-gap:10px 1px;"]);

exports.DayGrid = DayGrid;