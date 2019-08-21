"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");

var _textField = _interopRequireDefault(require("../../../Input/Text-Field/Ui/React/textField.index"));

var defaultProps = {
  senderIds: [],
  CurrentUserComp: function CurrentUserComp(_ref) {
    var message = _ref.message;
    return _react["default"].createElement("div", null, message);
  },
  OtherUserComp: function OtherUserComp(_ref2) {
    var message = _ref2.message;
    return _react["default"].createElement("div", null, message);
  },
  onReachedTop: null,
  InputComp: _textField["default"],
  wrapperStyles: {},
  messagesData: [],
  previousMessageData: [],
  fetchingPreviousMessageData: false,
  LoadingComp: function LoadingComp() {
    return _react["default"].createElement("div", null, "Loading...");
  },
  onSubmit: null
};
exports.defaultProps = defaultProps;
var propTypes = {
  senderIds: _propTypes.array,
  CurrentUserComp: _propTypes.func,
  OtherUserComp: _propTypes.func,
  onReachedTop: _propTypes.func,
  InputComp: _propTypes.object,
  wrapperStyles: _propTypes.object,
  messagesData: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    id: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number]),
    userId: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number])
  })).isRequired,
  previousMessageData: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    id: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number]),
    userId: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number])
  })).isRequired,
  fetchingPreviousMessageData: _propTypes.bool,
  LoadingComp: _propTypes.func,
  onSubmit: _propTypes.func
};
exports.propTypes = propTypes;