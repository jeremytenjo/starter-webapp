"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _imageCompressor = _interopRequireDefault(require("image-compressor.js"));

var CompressImage = function CompressImage(file) {
  var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return new Promise(function (resolve, reject) {
    new _imageCompressor["default"](file, {
      quality: quality,
      success: function success(result) {
        resolve(result);
      },
      error: function error(e) {
        reject("Compression Failed ".concat(e.message));
      }
    });
  });
};

var _default = CompressImage;
exports["default"] = _default;