"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  title: null,
  children: null,
  onClose: function onClose() {
    return null;
  },
  show: null,
  type: 'center',
  animationStyle: 'centerOut'
};
exports.defaultProps = defaultProps;
var propTypes = {
  title: _propTypes.string,
  children: _propTypes.node,
  type: _propTypes.string,
  onClose: _propTypes.func,
  show: _propTypes.bool,
  animationStyle: _propTypes.string
};
exports.propTypes = propTypes;