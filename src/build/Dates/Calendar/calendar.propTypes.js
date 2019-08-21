"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  events: [],
  yearRange: 5,
  onEventClick: function onEventClick() {
    return null;
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  events: _propTypes.array,
  yearRange: _propTypes.number,
  onEventClick: _propTypes.func
};
exports.propTypes = propTypes;