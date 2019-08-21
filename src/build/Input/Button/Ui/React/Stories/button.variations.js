"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _variationBlock = _interopRequireDefault(require("../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index"));
var _typography = _interopRequireDefault(require("../../../../../Data-Display/Typography/Ui/React/typography.index"));

var Variations = function Variations(_ref) {
  var Button = _ref.Button,
      name = _ref.name;
  return _react["default"].createElement("div", null, _react["default"].createElement(_typography["default"], {
    text: name,
    variant: "h6",
    color: "white",
    fontWeight: "bold",
    paddingLeft: "20px"
  }), _react["default"].createElement(_variationBlock["default"], {
    title: "color - primary"
  }, _react["default"].createElement(Button, {
    color: "primary"
  })), _react["default"].createElement(_variationBlock["default"], {
    title: "alternative color"
  }, _react["default"].createElement(Button, {
    color: "secondary"
  })), _react["default"].createElement(_variationBlock["default"], {
    title: "active"
  }, _react["default"].createElement(Button, {
    active: true
  })), _react["default"].createElement(_variationBlock["default"], {
    title: "disabled"
  }, _react["default"].createElement(Button, {
    disabled: true
  })), _react["default"].createElement(_variationBlock["default"], {
    title: "outlined",
    color: "black"
  }, _react["default"].createElement(Button, {
    outlined: true
  })), _react["default"].createElement(_variationBlock["default"], {
    title: "iconName"
  }, _react["default"].createElement(Button, {
    iconName: "camera/material"
  })), _react["default"].createElement(_variationBlock["default"], {
    title: "FAB"
  }, _react["default"].createElement(Button, {
    iconName: "camera/material",
    type: "FAB"
  })));
};

var _default = Variations;
exports["default"] = _default;