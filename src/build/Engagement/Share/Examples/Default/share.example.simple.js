"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));

var _share = _interopRequireDefault(require("../share.mockData"));
var _share2 = _interopRequireDefault(require("../../Functions/share.init"));

var ShareExample = function ShareExample() {
  // State
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      resMsg = _useState2[0],
      setresMsg = _useState2[1]; // Functions


  var useShareFun =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var _ref2, errorMessage, success;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _share2["default"])(_share["default"]);

            case 2:
              _ref2 = _context.sent;
              errorMessage = _ref2.errorMessage;
              success = _ref2.success;
              if (success) setresMsg('Share Successful');
              if (errorMessage) setresMsg(errorMessage);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function useShareFun() {
      return _ref.apply(this, arguments);
    };
  }(); // Template


  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("button", {
    onClick: useShareFun
  }, "Share this"), resMsg);
};

var _default = ShareExample;
exports["default"] = _default;