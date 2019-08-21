"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));

var _list = require("./list.styles");
var _list2 = require("./list.propTypes");

var List = function List(_ref) {
  var data = _ref.data,
      children = _ref.children,
      direction = _ref.direction,
      onItemClick = _ref.onItemClick,
      ItemComponent = _ref.ItemComponent,
      listItemDefinitions = _ref.listItemDefinitions,
      repeat = _ref.repeat,
      autoColumns = _ref.autoColumns,
      overflows = _ref.overflows,
      minWidth = _ref.minWidth,
      repeatOnMinWidth = _ref.repeatOnMinWidth,
      styles = (0, _objectWithoutProperties2["default"])(_ref, ["data", "children", "direction", "onItemClick", "ItemComponent", "listItemDefinitions", "repeat", "autoColumns", "overflows", "minWidth", "repeatOnMinWidth"]);
  var dataLength = data.length;

  var loadNoItemComponent = function loadNoItemComponent() {
    return data.map(function (Item, index) {
      return _react["default"].createElement(_react.Fragment, {
        key: index
      }, _react["default"].createElement(Item, null));
    });
  };

  var loadWithItemComponent = function loadWithItemComponent() {
    return data.map(function (item, index) {
      return _react["default"].createElement(ItemComponent, (0, _extends2["default"])({
        item: item,
        key: item._id || item.id || index,
        index: index,
        onClick: function onClick() {
          return onItemClick({
            item: item,
            index: index
          });
        },
        id: item._id || item.id || index,
        definitions: listItemDefinitions
      }, item));
    });
  }; // Template


  return _react["default"].createElement(_list.Wrapper, (0, _extends2["default"])({
    direction: direction,
    dataLength: dataLength,
    repeat: repeat,
    autoColumns: autoColumns,
    overflows: overflows,
    minWidth: minWidth,
    repeatOnMinWidth: repeatOnMinWidth
  }, styles), children && children, !ItemComponent && loadNoItemComponent(), ItemComponent && loadWithItemComponent());
};

List.defaultProps = _list2.defaultProps;
List.propTypes = _list2.propTypes;

var _default = (0, _react.memo)(List);

exports["default"] = _default;