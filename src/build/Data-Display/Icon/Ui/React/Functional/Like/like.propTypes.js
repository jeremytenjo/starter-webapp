"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  liked: null,
  onLike: function onLike() {
    return null;
  },
  onUnlike: function onUnlike() {
    return null;
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  liked: _propTypes.bool,
  onLike: _propTypes.func,
  onUnlike: _propTypes.func
};
exports.propTypes = propTypes;