"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  data: [],
  arrowColor: 'black',
  yearRange: 5,
  defaultValue: null,
  onSelect: function onSelect() {
    return null;
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  data: _propTypes.array,
  arrowColor: _propTypes.string,
  yearRange: _propTypes.number,
  onSelect: _propTypes.func
};
exports.propTypes = propTypes;