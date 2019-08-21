"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _share = _interopRequireDefault(require("../share.schema"));

var shareFunction =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(data) {
    var dataIsValid, errorMessage_Not_Supported, errorMessage_Web_Share_Fail, errorMessage_Schema_Fail;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dataIsValid = null;
            errorMessage_Not_Supported = 'Fail: Web Share is not supported';
            errorMessage_Web_Share_Fail = 'Fail: Sorry there was an issue with webshare please open big-web-features';
            errorMessage_Schema_Fail = 'Fail: Data has to be object {title, text, url} all strings';

            if (navigator.share) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {
              errorMessage: errorMessage_Not_Supported
            });

          case 6:
            _context.next = 8;
            return (0, _share["default"])(data);

          case 8:
            dataIsValid = _context.sent;

            if (dataIsValid) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              errorMessage: errorMessage_Schema_Fail
            });

          case 11:
            _context.prev = 11;
            _context.next = 14;
            return navigator.share(data);

          case 14:
            return _context.abrupt("return", {
              success: true
            });

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](11);
            return _context.abrupt("return", {
              errorMessage: "".concat(errorMessage_Web_Share_Fail, " : ").concat(_context.t0)
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 17]]);
  }));

  return function shareFunction(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = shareFunction;
exports["default"] = _default;