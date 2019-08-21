"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _dynamicOperator = _interopRequireDefault(require("../../Operator/DynamicOperator/dynamicOperator"));

function _default(func, _ref) {
  var array = _ref.array,
      post = _ref.post,
      condition = _ref.condition,
      value = _ref.value;
  var result = array[func](function (item) {
    var itemPost = post ? item[post] : item;
    return (0, _dynamicOperator["default"])({
      post: itemPost,
      operator: condition,
      value: value
    });
  });
  return result;
}