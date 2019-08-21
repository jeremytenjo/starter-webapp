"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  data: [],
  children: null,
  opacity: '1',
  fontFamily: 'Roboto',
  onMainIconClick: function onMainIconClick() {
    return null;
  },
  onFileSelect: function onFileSelect() {
    return null;
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  data: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    id: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number]).isRequired
  })).isRequired,
  children: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]),
  opacity: _propTypes.string,
  fontFamily: _propTypes.string,
  onMainIconClick: _propTypes.func,
  onFileSelect: _propTypes.func
};
exports.propTypes = propTypes;