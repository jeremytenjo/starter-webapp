"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  number: 0,
  isCurrentDay: null,
  isActive: null,
  acceptedColor: 'green',
  pendingColor: 'orange',
  rejectedColor: 'red',
  activeColor: '#00BFA5',
  statuses: [],
  events: [],
  onClick: function onClick() {
    return null;
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  number: _propTypes.number,
  isCurrentDay: _propTypes.bool,
  active: _propTypes.bool,
  acceptedColor: _propTypes.string,
  pendingColor: _propTypes.string,
  rejectedColor: _propTypes.string,
  statuses: _propTypes.array,
  events: _propTypes.array,
  onClick: _propTypes.func
};
exports.propTypes = propTypes;