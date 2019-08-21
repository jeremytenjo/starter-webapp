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
    opacity: show ? 0 : 1
  }, {
    opacity: show ? 1 : 0
  }];
  el.style.display = 'grid';
  var anim = el.animate(keyframes, config);

  anim.onfinish = function () {
    if (!show) el.style.display = 'none';
  };
};

exports["default"] = _default;