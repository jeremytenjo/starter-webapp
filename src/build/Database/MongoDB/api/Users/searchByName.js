"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var searchByName =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var client, collection, payload, regxName, foundUsers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = req.client;
            collection = req.collection;
            payload = req.payload;
            regxName = new RegExp(payload);
            _context.prev = 4;
            _context.next = 7;
            return collection.find({
              name: {
                $regex: regxName,
                options: 'i'
              }
            }).toArray();

          case 7:
            foundUsers = _context.sent;
            res.json(foundUsers);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            res.status(500).json(_context.t0);

          case 14:
            client.close();

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function searchByName(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Exports


module.exports = searchByName;