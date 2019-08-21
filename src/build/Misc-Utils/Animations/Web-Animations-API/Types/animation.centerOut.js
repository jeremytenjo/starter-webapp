"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Keyframes should be set before used in animate()
var _default = function _default(_ref) {
  var el = _ref.el,
      config = _ref.config,
      show = _ref.show;
  var keyframes = [{
    opacity: show ? 0 : 1,
    transform: show ? 'translateY(-20px)' : 'translateY(0)'
  }, {
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0px)' : 'translateY(-20px)'
  }];
  el.style.display = 'block';
  var anim = el.animate(keyframes, config);

  anim.onfinish = function () {
    if (!show) el.style.display = 'none';
  };
};

exports["default"] = _default;