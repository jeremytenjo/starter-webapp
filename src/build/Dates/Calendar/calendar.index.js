"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _get_days_in_month = _interopRequireDefault(require("date-fns/get_days_in_month"));
var _is_same_day = _interopRequireDefault(require("date-fns/is_same_day"));

var _daysList = _interopRequireDefault(require("../Utils/daysList"));
var _monthList = _interopRequireDefault(require("../Utils/monthList"));
var _day = _interopRequireDefault(require("../Day/day.index"));
var _datePicker = _interopRequireDefault(require("../DatePicker/datePicker.index"));

var _calendar = require("./calendar.propTypes");
var _calendar2 = require("./calendar.styles");

var Calendar = function Calendar(_ref) {
  var onDateSelect = _ref.onDateSelect,
      yearRange = _ref.yearRange,
      events = _ref.events;
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth();
  var currentDay = new Date().getDate();
  var currentMonthString = _monthList["default"][currentMonth];

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentMonthDaysArray = _useState2[0],
      setcurrentMonthDaysArray = _useState2[1];

  var _useState3 = (0, _react.useState)(currentDay),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      selectedDay = _useState4[0],
      setSelectedDay = _useState4[1];

  var _useState5 = (0, _react.useState)(currentMonthString),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      selectedMonth = _useState6[0],
      setSelectedMonth = _useState6[1];

  var _useState7 = (0, _react.useState)(currentYear),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      selectedYear = _useState8[0],
      setSelecteYear = _useState8[1];

  (0, _react.useEffect)(function () {
    setMonthDays();
  }, []);
  (0, _react.useEffect)(function () {
    currentMonthDaysArray.length > 0 && setMonthDays();
  }, [selectedMonth, selectedYear]);

  var calcCurrentMonthDays = function calcCurrentMonthDays(date, daystoSkip) {
    var monthDaysAmount = (0, _get_days_in_month["default"])(date);
    var newMonths = [];

    for (var i = 0; i < daystoSkip; i++) {
      newMonths.push(null);
    }

    for (var _i = 0; _i < monthDaysAmount; _i++) {
      newMonths.push(_i + 1);
    }

    setcurrentMonthDaysArray(newMonths);
  };

  var handleDaySelect = function handleDaySelect(_ref2) {
    var day = _ref2.day,
        events = _ref2.events;
    var date = new Date("".concat(selectedMonth, " ").concat(day, ", ").concat(selectedYear));
    setSelectedDay(day);
    onDateSelect({
      date: date,
      events: events
    });
  };

  var handleMonthSelect = function handleMonthSelect(month) {
    setSelectedMonth(month);
    onDateSelect({
      day: selectedDay,
      month: month,
      year: selectedYear
    });
  };

  var handleYearSelect = function handleYearSelect(year) {
    setSelecteYear(year);
    onDateSelect({
      day: selectedDay,
      month: selectedMonth,
      year: year
    });
  };

  var setMonthDays = function setMonthDays() {
    var currentDate = new Date("".concat(selectedMonth, ", ").concat(selectedYear));
    var daystoSkip = currentDate.getDay();
    calcCurrentMonthDays(currentDate, daystoSkip);
  };

  var defineIsCurrentDate = function defineIsCurrentDate(day) {
    var isCurrentYear = currentYear.toString() === selectedYear.toString();
    var isCurrentMonth = currentMonthString === selectedMonth;
    var isCurrentDay = day === currentDay;
    return isCurrentYear && isCurrentMonth && isCurrentDay;
  };

  return _react["default"].createElement(_calendar2.Wrapper, null, _react["default"].createElement(_calendar2.DatePickersCon, null, _react["default"].createElement(_datePicker["default"], {
    type: "month",
    onSelect: handleMonthSelect
  }), _react["default"].createElement(_datePicker["default"], {
    type: "year",
    onSelect: handleYearSelect,
    yearRange: yearRange
  })), _react["default"].createElement(_calendar2.WeekDaysTitles, null, _daysList["default"].map(function (title) {
    return _react["default"].createElement("span", {
      key: title
    }, title);
  })), _react["default"].createElement(_calendar2.DayGrid, null, currentMonthDaysArray.map(function (day) {
    var isCurrentDay = defineIsCurrentDate(day);
    var active = day === selectedDay;
    var dayDate = new Date("".concat(selectedMonth, " ").concat(day, ", ").concat(selectedYear));
    var filterDate = events.filter(function (_ref3) {
      var date = _ref3.date;
      return (0, _is_same_day["default"])(date, dayDate);
    });
    var statuses = (0, _toConsumableArray2["default"])(new Set(filterDate.map(function (_ref4) {
      var status = _ref4.status;
      return status;
    })));
    return day ? _react["default"].createElement(_day["default"], {
      key: day,
      number: day,
      onClick: handleDaySelect,
      isCurrentDay: isCurrentDay,
      isActive: active,
      statuses: statuses,
      events: filterDate
    }) : _react["default"].createElement("div", {
      key: Math.random()
    });
  })));
};

Calendar.defaultProps = _calendar.defaultProps;
Calendar.propTypes = _calendar.propTypes;

var _default = (0, _react.memo)(Calendar);

exports["default"] = _default;