"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _buttonStyle = _interopRequireDefault(require("../../../../Input/Button/Ui/React/Styles/Style1/button.style1.index"));
var _typography = _interopRequireDefault(require("../../../../Data-Display/Typography/Ui/React/typography.index"));

var _dialog = require("./dialog.propTypes");

var Dialog = function Dialog(_ref) {
  var Wrapper = _ref.Wrapper,
      ConfirmationCon = _ref.ConfirmationCon,
      title = _ref.title,
      message = _ref.message,
      fullscreen = _ref.fullscreen,
      confirmationCancelText = _ref.confirmationCancelText,
      confirmationAcceptText = _ref.confirmationAcceptText,
      onCancel = _ref.onCancel,
      onAccept = _ref.onAccept;
  var dialogRef = (0, _react.useRef)(null);
  return _react["default"].createElement(Wrapper, {
    ref: dialogRef,
    fullscreen: fullscreen
  }, _react["default"].createElement(_typography["default"], {
    variant: "h5",
    text: title,
    textAlign: "left",
    color: "white"
  }), _react["default"].createElement(_typography["default"], {
    variant: "body1",
    text: message,
    textAlign: "left",
    color: "white"
  }), _react["default"].createElement(ConfirmationCon, null, _react["default"].createElement(_buttonStyle["default"], {
    outlined: true,
    text: confirmationCancelText,
    onClick: onCancel
  }), _react["default"].createElement(_buttonStyle["default"], {
    text: confirmationAcceptText,
    onClick: onAccept
  })));
};

Dialog.defaultProps = _dialog.defaultProps;
Dialog.propTypes = _dialog.propTypes;

var _default = (0, _react.memo)(Dialog);

exports["default"] = _default;