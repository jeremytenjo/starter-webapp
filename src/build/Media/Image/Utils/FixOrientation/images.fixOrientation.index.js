"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _imageCompressor = _interopRequireDefault(require("image-compressor.js"));

var ImagesFixRotation = function ImagesFixRotation(file) {
  return new Promise(function (resolve, reject) {
    new _imageCompressor["default"](file, {
      checkOrientation: true,
      success: function success(result) {
        resolve(result);
      },
      error: function error(e) {
        reject("Fix orientaition Failed ".concat(e.message));
      }
    });
  });
};

var _default = ImagesFixRotation;
exports["default"] = _default;