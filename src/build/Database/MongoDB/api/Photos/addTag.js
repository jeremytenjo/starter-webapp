"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var addTag =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req) {
    var payload;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            payload = req.payload; // const client = req.client
            // const collection = req.collection

            console.log(payload); //  collection
            //    .find({ name: data.name })
            //    .toArray()
            //    .then((user) => {
            //      //addTag user if one doesent exist
            //      if (user.length === 0) {
            //        collection
            //          .insertOne(data)
            //          .then((newUser) => {
            //            res.json(newUser.insertedId)
            //          })
            //          .catch((err) => {
            //            res.json(err.message)
            //          })
            //      } else {
            //        res.json('User Already Exists')
            //      }
            //      client.close()
            //    })

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addTag(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = addTag;