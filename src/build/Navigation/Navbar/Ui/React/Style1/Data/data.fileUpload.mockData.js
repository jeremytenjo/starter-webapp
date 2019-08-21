"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var data = [{
  id: 1,
  link: 'explore',
  label: 'Explore',
  svg: _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 17",
    style: {
      width: '30px'
    }
  }, _react["default"].createElement("g", {
    id: "Canvas",
    transform: "translate(1247 287)"
  }, _react["default"].createElement("use", {
    xlinkHref: "#path0_fill",
    transform: "translate(-1247 -287)"
  })), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "path0_fill",
    d: "M 24.2199 1.45695L 21.0371 1.45695C 20.0257 0.554883 18.1201 2.61726e-07 15.9998 2.61726e-07C 13.8796 2.61726e-07 11.974 0.554806 10.9625 1.45695L 7.77975 1.45695C 3.49 1.45695 0 4.94319 0 9.22844C 0 13.5136 3.49 17 7.77975 17C 12.0694 17 15.5594 13.5136 15.5594 9.22844C 15.5594 9.17168 15.5588 9.115 15.5575 9.05808L 16.4423 9.05808C 16.441 9.11492 16.4404 9.17168 16.4404 9.22844C 16.4404 13.5136 19.9306 17 24.2203 17C 28.51 17 32 13.5136 32 9.22844C 31.9998 4.94319 28.5097 1.45695 24.2199 1.45695ZM 7.77975 15C 3.5 15 2 11.7711 2 9.22844C 2 6.68573 3.82816 3.84342 7.77975 3.84342C 11.5 3.84342 13.5 6.68573 13.5 9.22844C 13.5 11.7711 12.2582 15 7.77975 15ZM 18.0904 4.46636L 13.9082 4.46636C 13.4118 4.46636 13.0084 4.06234 13.0084 3.56647C 13.0084 3.07069 13.4118 2.66659 13.9082 2.66659L 18.0904 2.66659C 18.5877 2.66659 18.9913 3.07069 18.9913 3.56647C 18.9913 4.06226 18.5877 4.46636 18.0904 4.46636ZM 24.2199 15C 21 15 18.5 11.7711 18.5 9.22844C 18.5 6.68573 20.2606 3.84342 24.2199 3.84342C 28 3.84342 29.6943 6.68573 29.6943 9.22844C 29.6943 11.7711 28 15 24.2199 15Z"
  })))
}, {
  id: 2,
  link: 'schedule',
  label: 'Schedule',
  svg: _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), _react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  }))
}, {
  id: 3,
  link: 'camera',
  label: 'camera',
  fileInput: true,
  mainIcon: true,
  mainIconShadow: '0px 4px 12px rgba(36, 195, 169, 0.5)',
  svg: _react["default"].createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("g", {
    clipPath: "url(#clip0)",
    fill: "#fff"
  }, _react["default"].createElement("path", {
    d: "M23.8333 6.05984H19.3633L17.9605 2.44504C17.7415 2.00368 17.2906 1.72498 16.7979 1.72657H9.20212C8.69569 1.72835 8.23608 2.02293 8.02304 2.48234L6.63647 6.05984H2.16673C0.970596 6.06122 0.00138855 7.03063 0 8.22657V22.0932C0.00138855 23.2894 0.970596 24.2586 2.16673 24.26H23.8333C25.0294 24.2586 25.9986 23.2894 26 22.0932V8.22657C25.9986 7.03063 25.0294 6.06122 23.8333 6.05984V6.05984ZM8.81471 2.83265C8.88771 2.68566 9.03787 2.59283 9.20212 2.59322H16.7979C16.9484 2.59045 17.0895 2.66721 17.1686 2.79555L18.434 6.05984H7.56601L8.81471 2.83265ZM25.1333 22.0932C25.1326 22.8109 24.5509 23.3925 23.8333 23.3933H2.16673C1.44905 23.3925 0.867447 22.8109 0.866653 22.0932V8.22657C0.867447 7.50889 1.44905 6.92728 2.16673 6.92649H23.8333C24.5509 6.92728 25.1326 7.50889 25.1333 8.22657V22.0932Z"
  }), _react["default"].createElement("path", {
    d: "M13 10.8265C10.6067 10.8265 8.66673 12.7667 8.66673 15.16C8.66673 17.5531 10.6067 19.4933 13 19.4933C15.3933 19.4933 17.3333 17.5531 17.3333 15.16C17.3307 12.7677 15.3921 10.8293 13 10.8265V10.8265ZM13 18.6266C11.0854 18.6266 9.53339 17.0744 9.53339 15.16C9.53339 13.2454 11.0854 11.6932 13 11.6932C14.9146 11.6932 16.4666 13.2454 16.4666 15.16C16.4644 17.0736 14.9136 18.6244 13 18.6266Z"
  })), _react["default"].createElement("defs", null, _react["default"].createElement("clipPath", {
    id: "clip0"
  }, _react["default"].createElement("rect", {
    width: "26",
    height: "26",
    fill: "#fff"
  }))))
}, {
  id: 4,
  link: 'chat',
  label: 'Chat',
  svg: _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
  }))
}, {
  id: 5,
  link: 'profile',
  label: 'Profile',
  svg: _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, _react["default"].createElement("path", {
    d: "M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148 C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962 c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216 h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40 c59.551,0,108,48.448,108,108S315.551,256,256,256z"
  }))
}];
var _default = data;
exports["default"] = _default;