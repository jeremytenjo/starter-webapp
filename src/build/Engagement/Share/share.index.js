"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ShareInit", {
  enumerable: true,
  get: function get() {
    return _share["default"];
  }
});
Object.defineProperty(exports, "ShareIsSupported", {
  enumerable: true,
  get: function get() {
    return _share2["default"];
  }
});

var _share = _interopRequireDefault(require("./Functions/share.init"));
var _share2 = _interopRequireDefault(require("./Functions/share.isSupported"));