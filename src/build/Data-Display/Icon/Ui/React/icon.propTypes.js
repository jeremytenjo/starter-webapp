"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  name: null,
  style: {},
  color: null,
  onClick: function onClick() {
    return null;
  },
  background: null,
  size: 45,
  label: null,
  noBackground: null,
  dark: null,
  noBackgroundChange: null,
  type: 'Icon-Sets'
};
exports.defaultProps = defaultProps;
var propTypes = {
  name: _propTypes.string.isRequired,
  style: _propTypes.object,
  color: _propTypes.string,
  onClick: _propTypes.func,
  background: _propTypes.bool,
  noBackground: _propTypes.bool,
  size: _propTypes.number,
  label: _propTypes.string,
  dark: _propTypes.bool,
  noBackgroundChange: _propTypes.bool
};
exports.propTypes = propTypes;