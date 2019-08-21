"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));

var _day = require("./day.propTypes");
var _day2 = require("./day.styles");

var CircleIcon = function CircleIcon(_ref) {
  var circleWidthHeight = _ref.circleWidthHeight,
      cicleCCyx = _ref.cicleCCyx,
      circleRadius = _ref.circleRadius,
      color = _ref.color;
  return _react["default"].createElement("svg", {
    height: circleWidthHeight,
    width: circleWidthHeight
  }, _react["default"].createElement("circle", {
    cx: cicleCCyx,
    cy: cicleCCyx,
    r: circleRadius,
    fill: color
  }));
};

var Day = function Day(_ref2) {
  var statuses = _ref2.statuses,
      events = _ref2.events,
      number = _ref2.number,
      isCurrentDay = _ref2.isCurrentDay,
      activeColor = _ref2.activeColor,
      isActive = _ref2.isActive,
      onClick = _ref2.onClick,
      acceptedColor = _ref2.acceptedColor,
      pendingColor = _ref2.pendingColor,
      rejectedColor = _ref2.rejectedColor,
      grey = _ref2.grey;
  var circleWidthHeight = 12;
  var cicleCCyx = circleWidthHeight / 2;
  var circleRadius = 3;
  var circleDefaultProps = {
    circleWidthHeight: circleWidthHeight,
    cicleCCyx: cicleCCyx,
    circleRadius: circleRadius
  };
  var statusColors = {
    accepted: acceptedColor,
    pending: pendingColor,
    rejected: rejectedColor
  };

  var handleClick = function handleClick() {
    return onClick({
      day: number,
      events: events
    });
  };

  return _react["default"].createElement(_day2.Wrapper, null, _react["default"].createElement(_day2.DayCon, {
    onClick: handleClick,
    isCurrentDay: isCurrentDay,
    isActive: isActive,
    activeColor: activeColor,
    grey: grey
  }, number), _react["default"].createElement(_day2.StatusCon, null, statuses.map(function (item) {
    return _react["default"].createElement(CircleIcon, (0, _extends2["default"])({}, circleDefaultProps, {
      key: item,
      color: statusColors[item]
    }));
  })));
};

Day.defaultProps = _day.defaultProps;
Day.propTypes = _day.propTypes;

var _default = (0, _react.memo)(Day);

exports["default"] = _default;