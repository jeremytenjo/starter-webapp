"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireWildcard(require("react"));

var _navBar = _interopRequireDefault(require("./navBar.background"));
var _navBar2 = require("./navBar.styles");
var _navBar3 = require("./navBar.propTypes");

var NavBar = function NavBar(_ref) {
  var data = _ref.data,
      wrapperStyle = _ref.wrapperStyle,
      router = _ref.router,
      defaultColor = _ref.defaultColor,
      activeColor = _ref.activeColor,
      backgroundColor = _ref.backgroundColor,
      labelStyle = _ref.labelStyle,
      onMainIconClick = _ref.onMainIconClick,
      onFileSelect = _ref.onFileSelect,
      fontFamily = _ref.fontFamily;
  var inputRef = (0, _react.useRef)(null);

  var openLink = function openLink(_ref2) {
    var link = _ref2.currentTarget.dataset.link;
    return router("/".concat(link));
  };

  var handleFIleUpload =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(e, file) {
      var selectedFile;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              selectedFile = file || inputRef.current.files[0];
              if ((0, _typeof2["default"])(selectedFile) === 'object') onFileSelect(selectedFile);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFIleUpload(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var hasMainIcon = data.some(function (item) {
    return item.mainIcon === true;
  });
  return _react["default"].createElement(_navBar2.Wrapper, {
    style: wrapperStyle,
    hasMainIcon: hasMainIcon,
    fontFamily: fontFamily
  }, hasMainIcon && _react["default"].createElement(_navBar["default"], null), data.map(function (_ref4) {
    var id = _ref4.id,
        link = _ref4.link,
        svg = _ref4.svg,
        label = _ref4.label,
        _ref4$mainIcon = _ref4.mainIcon,
        mainIcon = _ref4$mainIcon === void 0 ? null : _ref4$mainIcon,
        _ref4$mainIconShadow = _ref4.mainIconShadow,
        mainIconShadow = _ref4$mainIconShadow === void 0 ? null : _ref4$mainIconShadow,
        _ref4$fileInput = _ref4.fileInput,
        fileInput = _ref4$fileInput === void 0 ? null : _ref4$fileInput;
    var isFocused = window.location.pathname;
    isFocused = isFocused.split('/');
    isFocused = isFocused[1];
    isFocused = isFocused === link;
    var color = isFocused ? activeColor : defaultColor;
    return !mainIcon ? _react["default"].createElement(_react.Fragment, {
      key: id
    }, _react["default"].createElement(_navBar2.IconCon, {
      "data-link": link,
      color: color,
      onClick: fileInput ? function () {
        return null;
      } : openLink,
      backgroundColor: backgroundColor,
      label: label
    }, svg, label && _react["default"].createElement("span", {
      style: labelStyle
    }, label), fileInput && _react["default"].createElement("input", {
      ref: inputRef,
      type: "file",
      accept: ".jpg, .jpeg, .png",
      onChange: handleFIleUpload
    }))) : _react["default"].createElement(_navBar2.MainIconCon, {
      activeColor: activeColor,
      mainIconShadow: mainIconShadow,
      onClick: onMainIconClick,
      key: id
    }, svg, fileInput && _react["default"].createElement("input", {
      ref: inputRef,
      type: "file",
      accept: ".jpg, .jpeg, .png",
      onChange: handleFIleUpload
    }));
  }));
};

NavBar.defaultProps = _navBar3.defaultProps;
NavBar.propTypes = _navBar3.propTypes;

var _default = (0, _react.memo)(NavBar);

exports["default"] = _default;