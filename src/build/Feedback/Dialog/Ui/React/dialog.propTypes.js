"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  fullscreen: null,
  loading: null,
  confirmation: null,
  message: '',
  confirmationCancelText: 'Cancel',
  confirmationAcceptText: 'Accept',
  onConfirmationCancel: function onConfirmationCancel() {
    return null;
  },
  onConfirmationAccept: function onConfirmationAccept() {
    return null;
  },
  title: null,
  children: null,
  onClose: function onClose() {
    return null;
  },
  show: null,
  animationStyle: 'centerOut'
};
exports.defaultProps = defaultProps;
var propTypes = {
  fullscreen: _propTypes.bool,
  loading: _propTypes.bool,
  message: _propTypes.string,
  confirmation: _propTypes.bool,
  confirmationCancelText: _propTypes.string,
  confirmationAcceptText: _propTypes.string,
  onConfirmationCancel: _propTypes.func,
  onConfirmationAccept: _propTypes.func,
  title: _propTypes.string,
  children: _propTypes.node,
  onClose: _propTypes.func
};
exports.propTypes = propTypes;