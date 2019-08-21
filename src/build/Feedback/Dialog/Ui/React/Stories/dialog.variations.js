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
  var Dialog = _ref.Dialog,
      name = _ref.name;
  return _react["default"].createElement("div", null, _react["default"].createElement(_typography["default"], {
    text: name,
    variant: "h6",
    color: "white",
    fontWeight: "bold",
    paddingLeft: "20px"
  }), _react["default"].createElement(_variationBlock["default"], {
    title: " title & message"
  }, _react["default"].createElement(Dialog, {
    title: "title",
    message: "Message"
  })), _react["default"].createElement(_variationBlock["default"], {
    title: "only message"
  }, _react["default"].createElement(Dialog, {
    message: "Message"
  }, "Hello")), _react["default"].createElement(_variationBlock["default"], {
    title: "only title"
  }, _react["default"].createElement(Dialog, {
    title: "title"
  }, "Hello")));
};

var _default = Variations;
exports["default"] = _default;