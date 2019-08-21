"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@storybook/react");

var _variationBlock = _interopRequireDefault(require("../../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index"));

var _back = _interopRequireDefault(require("./back.index"));

var BackComp = function BackComp() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_variationBlock["default"], {
    title: "back",
    color: "black"
  }, _react["default"].createElement(_back["default"], null)));
};

(0, _react2.storiesOf)('Data-Display|Icon/React/Functional', module).add('Back', function () {
  return _react["default"].createElement(BackComp, null);
});