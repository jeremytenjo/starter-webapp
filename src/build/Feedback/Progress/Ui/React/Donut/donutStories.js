"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@storybook/react");

var _donutIndex = _interopRequireDefault(require("./donutIndex"));

(0, _react2.storiesOf)('Feedback|Progress/Ui/React/Donut', module).add('Donut', function () {
  return _react["default"].createElement(_donutIndex["default"], null);
});