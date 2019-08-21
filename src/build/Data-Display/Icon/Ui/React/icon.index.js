'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))
var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'))
var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'))
var _react = _interopRequireWildcard(require('react'))

var _icon = require('./icon.styles')
var _icon2 = require('./icon.propTypes')

var Icon = function Icon(_ref) {
  var background = _ref.background,
    name = _ref.name,
    style = _ref.style,
    color = _ref.color,
    onClick = _ref.onClick,
    size = _ref.size,
    label = _ref.label,
    noBackground = _ref.noBackground,
    dark = _ref.dark,
    noBackgroundChange = _ref.noBackgroundChange,
    type = _ref.type

  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
    IconComp = _useState2[0],
    setIconComp = _useState2[1]

  var getModule =
    /*#__PURE__*/
    (function() {
      var _ref2 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/
        _regenerator['default'].mark(function _callee() {
          var module
          return _regenerator['default'].wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  if (!name) {
                    _context.next = 5
                    break
                  }

                  _context.next = 3
                  return import('./'.concat(type, '/').concat(name, '.js'))

                case 3:
                  module = _context.sent
                  setIconComp(module['default']())

                case 5:
                case 'end':
                  return _context.stop()
              }
            }
          }, _callee)
        }),
      )

      return function getModule() {
        return _ref2.apply(this, arguments)
      }
    })()

  ;(0, _react.useEffect)(function() {
    getModule()
  }, [])
  return _react['default'].createElement(
    _icon.Wrapper,
    null,
    _react['default'].createElement(
      _icon.WrapperIcon,
      {
        style: style,
        color: color,
        onClick: onClick,
        background: !!background,
        size: size,
        noBackground: noBackground,
        dark: dark,
        noBackgroundChange: noBackgroundChange,
      },
      IconComp,
    ),
    label && _react['default'].createElement(_icon.Label, null, ' ', label, ' '),
  )
}

Icon.defaultProps = _icon2.defaultProps
Icon.propTypes = _icon2.propTypes

var _default = (0, _react.memo)(Icon)

exports['default'] = _default
