"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));

var _monthList = _interopRequireDefault(require("../Utils/monthList"));

var _datePicker = require("./datePicker.propTypes");
var _datePicker2 = require("./datePicker.styles");

var ArrowSVG = function ArrowSVG() {
  return _react["default"].createElement("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.4 1.4L6 0L0 6L6 12L7.4 10.6L2.8 6L7.4 1.4Z"
  }));
};

var DatePicker = function DatePicker(_ref) {
  var arrowColor = _ref.arrowColor,
      onSelect = _ref.onSelect,
      color = _ref.color,
      type = _ref.type,
      yearRange = _ref.yearRange;
  var selectRef = (0, _react.useRef)(null);
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth();
  var currentMonthString = _monthList["default"][currentMonth];
  var initData = type === 'month' ? _monthList["default"] : [];
  var initSelectedValue = type === 'month' ? currentMonthString : currentYear;

  var _useState = (0, _react.useState)(initData),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(initSelectedValue),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      selectedValue = _useState4[0],
      setselectedValue = _useState4[1];

  (0, _react.useEffect)(function () {
    type === 'year' && calcYearRange();
  }, []);

  var calcYearRange = function calcYearRange() {
    var years = [];

    for (var i = 0; i < yearRange; i++) {
      years.push(Math.abs(i + 1 - currentYear).toString());
    }

    years.reverse();
    years.push(currentYear.toString());

    for (var _i = 0; _i < yearRange; _i++) {
      years.push(Math.abs(_i + 1 + currentYear).toString());
    }

    setData(years);
  };

  var handleOnSelect = function handleOnSelect(_ref2) {
    var value = _ref2.target.value;
    setselectedValue(value);
    onSelect(value);
  };

  var handlePrev = function handlePrev() {
    var selectedItem = selectRef.current.value;
    var selectedItemIndex = data.findIndex(function (item) {
      return item === selectedItem;
    }) - 1;
    var prevItem = data[selectedItemIndex];
    var returnItem = prevItem || data[data.length - 1];
    setselectedValue(returnItem);
    onSelect(returnItem);
  };

  var handleNext = function handleNext() {
    var selectedItem = selectRef.current.value;
    var selectedItemIndex = data.findIndex(function (item) {
      return item === selectedItem;
    }) + 1;
    var nextItem = data[selectedItemIndex];
    var returnItem = nextItem || data[0];
    setselectedValue(returnItem);
    onSelect(returnItem);
  };

  return _react["default"].createElement(_datePicker2.Wrapper, {
    arrowColor: arrowColor,
    color: color
  }, _react["default"].createElement(_datePicker2.LeftArrow, {
    onClick: handlePrev
  }, _react["default"].createElement(ArrowSVG, null)), data.length > 0 && _react["default"].createElement("select", {
    ref: selectRef,
    onChange: handleOnSelect,
    value: selectedValue
  }, data.map(function (item) {
    return _react["default"].createElement("option", {
      key: item,
      value: item
    }, item);
  })), _react["default"].createElement(_datePicker2.RightArrow, {
    onClick: handleNext
  }, _react["default"].createElement(ArrowSVG, null)));
};

DatePicker.defaultProps = _datePicker.defaultProps;
DatePicker.propTypes = _datePicker.propTypes;

var _default = (0, _react.memo)(DatePicker);

exports["default"] = _default;