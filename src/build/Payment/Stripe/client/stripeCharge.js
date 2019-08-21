"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var create =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(stripe, currency, amount, name) {
    var amountInDollars, _ref2, error, token, res, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            amountInDollars = amount * 100;
            _context.prev = 1;
            _context.next = 4;
            return stripe.createToken({
              name: name
            });

          case 4:
            _ref2 = _context.sent;
            error = _ref2.error;
            token = _ref2.token;

            if (!error) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", {
              type: 'error',
              error: error
            });

          case 9:
            _context.next = 11;
            return fetch("".concat(window.apiURL, "/stripe/charge"), {
              method: 'POST',
              body: JSON.stringify({
                token: token.id,
                amount: amountInDollars,
                currency: currency,
                name: name
              })
            });

          case 11:
            res = _context.sent;
            _context.next = 14;
            return res.json();

          case 14:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", {
              type: 'error',
              error: {
                message: 'Server error, please try again later'
              }
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 18]]);
  }));

  return function create(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;