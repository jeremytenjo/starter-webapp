"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = require("prop-types");

var defaultProps = {
  src: '',
  alt: 'estilistta',
  background: 'none',
  name: '',
  index: null,
  round: null,
  borderColor: null,
  lettersFont: 'Roboto',
  letterColor: 'primary',
  size: 50,
  width: null,
  height: null,
  isLazyLoaded: null,
  onClick: function onClick() {
    return null;
  },
  definitions: null,
  skeleton: null,
  cursor: 'pointer',
  position: 'center',
  OnVisibilityParams: {
    offset: 200,
    once: true
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  src: _propTypes.string,
  alt: _propTypes.string,
  size: _propTypes.number,
  name: _propTypes.string,
  background: _propTypes.string,
  width: _propTypes.number,
  height: _propTypes.number,
  isLazyLoaded: _propTypes.bool,
  cursor: _propTypes.string,
  position: _propTypes.string,
  index: _propTypes.number,
  onClick: _propTypes.func,
  definitions: _propTypes.object,
  skeleton: _propTypes.bool,
  round: _propTypes.bool,
  borderColor: _propTypes.string
};
exports.propTypes = propTypes;