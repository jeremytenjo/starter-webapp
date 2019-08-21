"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));

var _animation = _interopRequireDefault(require("./animation.index"));

var config = {
  fill: 'forwards',
  duration: 200,
  direction: 'normal',
  easing: 'ease-out'
};

var Example = function Example(_ref) {
  var type = _ref.type;
  var divRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      show = _useState2[0],
      setshow = _useState2[1];

  (0, _react.useEffect)(function () {
    if (show !== null) (0, _animation["default"])({
      name: type,
      el: divRef.current,
      config: config,
      show: show
    });
  }, [show]);

  var toggleAnimation = function toggleAnimation() {
    return setshow(!show);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    onClick: toggleAnimation
  }, "Toggle"), _react["default"].createElement("div", {
    ref: divRef,
    style: {
      background: 'lightblue',
      marginTop: '20px'
    }
  }, "animate me"));
};

var _default = Example;
exports["default"] = _default;