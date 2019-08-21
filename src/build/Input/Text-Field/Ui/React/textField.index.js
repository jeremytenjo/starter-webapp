"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));

// Vendors
// Main
var Input = function Input(_ref, ref) {
  var _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {
    return null;
  } : _ref$onChange,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? function () {
    return null;
  } : _ref$onFocus,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$errMsg = _ref.errMsg,
      errMsg = _ref$errMsg === void 0 ? '' : _ref$errMsg,
      _ref$errMesgStyle = _ref.errMesgStyle,
      errMesgStyle = _ref$errMesgStyle === void 0 ? {
    color: 'red'
  } : _ref$errMesgStyle,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["onChange", "onFocus", "type", "errMsg", "errMesgStyle"]);

  // State
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1]; // Shared Functions


  (0, _react.useImperativeHandle)(ref, function () {
    return {
      clearInput: function clearInput() {
        _clearInput();
      },
      getCurrentValue: function getCurrentValue() {
        _getCurrentValue();
      }
    };
  }); // Functions

  var _clearInput = function _clearInput() {
    return setInput('');
  };

  var _getCurrentValue = function _getCurrentValue() {
    return input;
  };

  var handleChange =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(_ref2) {
      var value;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = _ref2.target.value;
              setInput(value);
              onChange(value);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x) {
      return _ref3.apply(this, arguments);
    };
  }(); // Template


  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("input", (0, _extends2["default"])({
    type: type,
    value: input,
    onChange: handleChange,
    onFocus: onFocus
  }, rest)), errMsg !== '' && _react["default"].createElement("p", {
    style: errMesgStyle
  }, errMsg));
}; // Exports


var _default = (0, _react.memo)((0, _react.forwardRef)(Input)); // forwardRef does not support proptypes


exports["default"] = _default;