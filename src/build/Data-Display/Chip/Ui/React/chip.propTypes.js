"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  color: 'primary',
  text: 'Chip',
  toRemove: null,
  onClick: function onClick() {
    return null;
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  color: _propTypes.string,
  text: _propTypes.string,
  toRemove: _propTypes.bool,
  onClick: _propTypes.func
};
exports.propTypes = propTypes;