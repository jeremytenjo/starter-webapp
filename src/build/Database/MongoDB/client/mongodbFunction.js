"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = function _default(data) {
  var userId = data.userId || false;
  var collection = data.collection || false;
  var fnName = data.fnName || false;
  var payload = data.payload || false;

  if (userId && collection && fnName && payload) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(resolve, reject) {
        var url, dbData, dbDataJson;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = "".concat(window.apiURL, "MongoDB/").concat(collection, "/").concat(fnName);
                _context.next = 4;
                return fetch(url, {
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: 'POST',
                  body: JSON.stringify({
                    userId: userId,
                    payload: payload
                  })
                });

              case 4:
                dbData = _context.sent;
                _context.next = 7;
                return dbData.json();

              case 7:
                dbDataJson = _context.sent;
                resolve(dbDataJson);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                reject(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  } else {
    throw new Error("Missing nesseasry params ".concat({
      userId: userId,
      collection: collection,
      fnName: fnName,
      payload: payload
    }));
  }
};

exports["default"] = _default;