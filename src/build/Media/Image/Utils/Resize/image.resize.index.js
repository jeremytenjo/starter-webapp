"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _imageCompressor = _interopRequireDefault(require("image-compressor.js"));

var _default = function _default(file) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  return new Promise(function (resolve, reject) {
    new _imageCompressor["default"](file, {
      width: width,
      success: function success(result) {
        resolve(result);
      },
      error: function error(e) {
        reject("Resize Failed ".concat(e.message));
      }
    });
  });
};

exports["default"] = _default;