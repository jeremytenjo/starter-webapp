"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _yup = require("yup");

var validateAgainstshareSchema =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref) {
    var values, shareSchema;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            values = (0, _extends2["default"])({}, _ref);
            shareSchema = (0, _yup.object)().shape({
              title: (0, _yup.string)(),
              text: (0, _yup.string)(),
              url: (0, _yup.string)()
            });
            _context.next = 4;
            return shareSchema.isValid((0, _objectSpread2["default"])({}, values));

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validateAgainstshareSchema(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = validateAgainstshareSchema;
exports["default"] = _default;