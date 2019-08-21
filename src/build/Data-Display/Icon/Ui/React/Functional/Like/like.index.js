"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("../../icon.index"));

var _likePropTypes = require("./like.propTypes.js");

var IconLike = function IconLike(_ref) {
  var liked = _ref.liked,
      onLike = _ref.onLike,
      onUnlike = _ref.onUnlike;
  return liked ? _react["default"].createElement(_icon["default"], {
    name: "heart/filled/material",
    onClick: onUnlike,
    background: true,
    color: "red"
  }) : _react["default"].createElement(_icon["default"], {
    name: "heart/outlined/material",
    onClick: onLike,
    background: true,
    color: "none"
  });
};

IconLike.defaultProps = _likePropTypes.defaultProps;
IconLike.propTypes = _likePropTypes.propTypes;

var _default = (0, _react.memo)(IconLike);

exports["default"] = _default;