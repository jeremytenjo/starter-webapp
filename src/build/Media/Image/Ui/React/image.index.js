"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));

var _renderingOnVisibility = _interopRequireDefault(require("../../../../Misc-Utils/Rendering/renderingOnVisibility"));

var _image = require("./image.propTypes");
var _image2 = require("./image.styles");

// Entity
var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      _onClick = _ref.onClick,
      definitions = _ref.definitions,
      isLazyLoaded = _ref.isLazyLoaded,
      OnVisibilityProps = _ref.OnVisibilityProps,
      cursor = _ref.cursor,
      size = _ref.size,
      width = _ref.width,
      height = _ref.height,
      round = _ref.round,
      borderColor = _ref.borderColor,
      background = _ref.background,
      name = _ref.name,
      lettersFont = _ref.lettersFont,
      letterColor = _ref.letterColor,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["src", "alt", "onClick", "definitions", "isLazyLoaded", "OnVisibilityProps", "cursor", "size", "width", "height", "round", "borderColor", "background", "name", "lettersFont", "letterColor"]);

  // In case  the src key in not called src in props, expects {src: <propsrcname>}
  if (definitions) {
    for (var key in definitions) {
      key === 'src' && (src = props[definitions[key]]);
    }
  } // create inirials


  var initials = name.split(' ');
  initials = initials.length > 1 ? initials[0].substring(0, 1) + initials[1].substring(0, 1) : initials[0].substring(0, 1);

  var ImageComp = function ImageComp() {
    return _react["default"].createElement(_image2.Wrapper, {
      width: width,
      height: height,
      size: size,
      round: round,
      borderColor: borderColor,
      onClick: function onClick() {
        return _onClick(props);
      },
      cursor: cursor,
      letterColor: letterColor
    }, src && _react["default"].createElement(_image2.InnerImage, {
      alt: alt,
      src: src
    }), background === 'letter' && _react["default"].createElement(_image2.Letters, {
      lettersFont: lettersFont,
      letterColor: letterColor
    }, initials));
  }; // Template


  return _react["default"].createElement(_react["default"].Fragment, null, isLazyLoaded ? _react["default"].createElement(_renderingOnVisibility["default"], OnVisibilityProps, _react["default"].createElement(ImageComp, null)) : _react["default"].createElement(ImageComp, null));
};

Image.defaultProps = _image.defaultProps;
Image.propTypes = _image.propTypes;

var _default = (0, _react.memo)(Image);

exports["default"] = _default;