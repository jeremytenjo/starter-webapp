"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));
var _react = _interopRequireDefault(require("react"));
var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));
var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _tabs = require("./tabs.styles");

var Tabs = function Tabs(_ref) {
  var tabList = _ref.tabList,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var historyRouter = window.historyRouter;
  var tabWidth = 100 / tabList.length;
  var currentUrl = window.location.pathname;
  var currentTabIndex;
  currentTabIndex = tabList.findIndex(function (tab) {
    return tab.link === currentUrl;
  });
  currentTabIndex === -1 && (currentTabIndex = 0); //Template

  return _react["default"].createElement(_tabs.Wrapper, {
    style: (0, _objectSpread2["default"])({}, style),
    color: color
  }, _react["default"].createElement(_Tabs["default"], {
    value: currentTabIndex,
    indicatorColor: color,
    textColor: color,
    variant: "fullWidth"
  }, tabList.map(function (item) {
    return _react["default"].createElement(_Tab["default"], {
      style: {
        width: tabWidth,
        color: "var(--color-".concat(color, ")")
      },
      key: item.label,
      label: item.label,
      onClick: function onClick() {
        return historyRouter.push(item.link);
      }
    });
  })));
};

var _default = Tabs;
exports["default"] = _default;