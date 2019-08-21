"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  variant: 'body1',
  color: null,
  text: ''
};
exports.defaultProps = defaultProps;
var propTypes = {
  variant: (0, _propTypes.oneOf)(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline']),
  color: _propTypes.string,
  text: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number])
};
exports.propTypes = propTypes;