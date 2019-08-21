"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref) {
    var type, params, func, arrayFunc;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = _ref.type, params = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
            func = null;
            _context.t0 = type;
            _context.next = _context.t0 === 'filter' ? 5 : _context.t0 === 'some' ? 7 : _context.t0 === 'indexOf' ? 9 : 11;
            break;

          case 5:
            func = 'func';
            return _context.abrupt("break", 12);

          case 7:
            func = 'func';
            return _context.abrupt("break", 12);

          case 9:
            func = 'func';
            return _context.abrupt("break", 12);

          case 11:
            return _context.abrupt("break", 12);

          case 12:
            _context.next = 14;
            return import("./functions/array.".concat(func));

          case 14:
            arrayFunc = _context.sent;
            return _context.abrupt("return", arrayFunc["default"](params));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;