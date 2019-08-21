"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var post = _ref.post,
      operator = _ref.operator,
      value = _ref.value;

  switch (operator) {
    case '>':
      return post > value;

    case '<':
      return post < value;

    case '>=':
      return post >= value;

    case '<=':
      return post <= value;

    case '===':
      return post === value;

    case '!==':
      return post !== value;

    default:
      return "Options available > , < , >= , <= , === , !== , instead got ".concat(operator);
  }
};

exports["default"] = _default;