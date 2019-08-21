"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = _interopRequireWildcard(require("prop-types"));

var defaultProps = {
  data: [],
  direction: 'column',
  ItemComponent: null,
  minWidth: 600,
  repeat: 3,
  repeatOnMinWidth: 3,
  gap: 's',
  padding: 5,
  overflows: null,
  listItemDefinitions: null,
  onItemClick: function onItemClick() {
    return null;
  },
  autoColumns: null
};
exports.defaultProps = defaultProps;
var propTypes = {
  data: _propTypes.array.isRequired,
  direction: (0, _propTypes.oneOf)(['column', 'row', 'grid']),
  ItemComponent: _propTypes["default"].oneOfType([_propTypes.object, _propTypes.func, _propTypes.element]),
  repeat: _propTypes.number,
  minWidth: _propTypes.number,
  repeatOnMinWidth: _propTypes.number,
  gap: _propTypes.string,
  padding: _propTypes.number,
  overflows: _propTypes.bool,
  listItemDefinitions: _propTypes.object,
  onItemClick: _propTypes.func
};
exports.propTypes = propTypes;