"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  show: null,
  onClick: function onClick() {
    return null;
  },
  backgroundcolor: 'white',
  noAnimation: null,
  zIndex: 1
};
exports.defaultProps = defaultProps;
var propTypes = {
  show: _propTypes.bool,
  noAnimation: _propTypes.bool,
  onClick: _propTypes.func,
  backgroundcolor: _propTypes.string,
  zIndex: _propTypes.number
};
exports.propTypes = propTypes;