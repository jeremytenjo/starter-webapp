"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));

var _chat = _interopRequireDefault(require("../../Component/chat.index"));

var _chatDefault = _interopRequireDefault(require("./chat.default.mockData"));

// Vendors
var CurrentUserComp = function CurrentUserComp(_ref) {
  var message = _ref.message;
  return _react["default"].createElement("p", null, message);
};

var OtherUserComp = function OtherUserComp(_ref2) {
  var message = _ref2.message;
  return _react["default"].createElement("p", null, message);
};

var LoadingComponent = function LoadingComponent() {
  return _react["default"].createElement("p", null, "Loading....");
};

var Example = function Example() {
  var _useState = (0, _react.useState)(_chatDefault["default"]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var addMessage = function addMessage(message) {
    var newData = data.slice();
    var newMessage = {
      id: Math.random(),
      userId: '1',
      message: message
    };
    newData.push(newMessage);
    setData(newData);
  };

  var addOtherPersonMessage = function addOtherPersonMessage() {
    var newData = data.slice();
    var newMessage = {
      id: Math.random(),
      userId: '2',
      message: 'Hello thewrwe'
    };
    newData.push(newMessage);
    setData(newData);
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("h5", null, "Add Other user message"), _react["default"].createElement("button", {
    onClick: addOtherPersonMessage
  }, "Add other user Message"), _react["default"].createElement("h5", null, "Component"), _react["default"].createElement(_chat["default"], {
    messagesData: data,
    senderIds: ['1'],
    CurrentUserComp: CurrentUserComp,
    OtherUserComp: OtherUserComp,
    onReachedTop: function onReachedTop() {
      return console.log('reachedTop');
    },
    previousMessageData: [],
    LoadingComp: LoadingComponent,
    onSubmit: addMessage
  }));
};

var _default = Example;
exports["default"] = _default;