"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var el = _ref.el,
      show = _ref.show,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'forwards' : _ref$fill,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 200 : _ref$duration;
  var config = {
    fill: fill,
    duration: duration
  };
  el.style.display = 'block';
  var start = {
    opacity: show ? 0 : 1,
    display: 'none'
  };
  var to = {
    opacity: show ? 1 : 0,
    display: 'block'
  };
  var anim = el.animate([start, to], config);

  anim.onfinish = function () {
    if (!show) el.style.display = 'none';
  };
};

exports["default"] = _default;