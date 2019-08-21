"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  type: 'default',
  outlined: null,
  active: null,
  iconName: null,
  disabled: null,
  Icon: null,
  color: 'primary',
  style: {},
  textStyle: {},
  text: 'Button',
  onClick: function onClick() {
    return null;
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  type: _propTypes.string,
  iconName: _propTypes.string,
  outlined: _propTypes.bool,
  active: _propTypes.bool,
  disabled: _propTypes.bool,
  Icon: _propTypes.any,
  color: _propTypes.string,
  text: _propTypes.string,
  style: _propTypes.object,
  textStyle: _propTypes.object,
  onClick: _propTypes.func
};
exports.propTypes = propTypes;