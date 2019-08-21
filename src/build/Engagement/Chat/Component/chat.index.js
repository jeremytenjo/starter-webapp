"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));

var _chat = require("./chat.propTypes");
var _chat2 = require("./chat.styles");

/* eslint-disable react-hooks/exhaustive-deps */
// Main
var Chat = function Chat(_ref) {
  var senderIds = _ref.senderIds,
      CurrentUserComp = _ref.CurrentUserComp,
      OtherUserComp = _ref.OtherUserComp,
      onReachedTop = _ref.onReachedTop,
      InputComp = _ref.InputComp,
      wrapperStyles = _ref.wrapperStyles,
      messagesData = _ref.messagesData,
      previousMessageData = _ref.previousMessageData,
      fetchingPreviousMessageData = _ref.fetchingPreviousMessageData,
      LoadingComp = _ref.LoadingComp,
      inputCompStyles = _ref.inputCompStyles,
      onSubmit = _ref.onSubmit;
  // Refs
  var ChatList_Ref = (0, _react.useRef)(null);
  var inputRef = (0, _react.useRef)(null); // States

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      inputMessageValue = _useState2[0],
      setInputMessageValue = _useState2[1]; // Effects


  (0, _react.useEffect)(function () {
    scrollToBottom();
    addEventListeners();
    return removeEventListeners();
  }, []); // Scroll to bottom when new messages are sent/reevided

  (0, _react.useEffect)(function () {
    scrollToBottom();
  }, [messagesData]); // Functions

  var addEventListeners = function addEventListeners() {
    if (onReachedTop) {
      ChatList_Ref.current.addEventListener('scroll', handleScroll, true);
    }
  };

  var removeEventListeners = function removeEventListeners() {
    ChatList_Ref.current.removeEventListener('scroll', handleScroll);
  };

  var scrollToBottom = function scrollToBottom() {
    return ChatList_Ref.current.scrollTop = ChatList_Ref.current.scrollHeight;
  };

  var handleScroll = function handleScroll() {
    var reachedTop = ChatList_Ref.current.scrollTop === 0;
    if (reachedTop) onReachedTop();
  };

  var handleOnSubmit = function handleOnSubmit(e) {
    e.preventDefault();
    var submitConditions = inputMessageValue !== '';

    if (submitConditions) {
      onSubmit(inputMessageValue);
      setInputMessageValue('');
      inputRef.current.clearInput();
    }
  };

  var messageInputOnChange = function messageInputOnChange(message) {
    return setInputMessageValue(message);
  };

  var loadMessages = function loadMessages(data) {
    return data.map(function (msg) {
      return senderIds.includes(msg.userId) ? _react["default"].createElement(_chat2.CurrentUserCompWrapper, {
        key: msg.id
      }, _react["default"].createElement(CurrentUserComp, msg)) : _react["default"].createElement(_chat2.OtherUserCompWrapper, {
        key: msg.id
      }, _react["default"].createElement(OtherUserComp, msg));
    });
  }; // Template


  return _react["default"].createElement(_chat2.ChatWrapper, {
    styles: wrapperStyles,
    onSubmit: handleOnSubmit
  }, _react["default"].createElement(_chat2.ChatList, {
    ref: ChatList_Ref
  }, loadMessages(previousMessageData), fetchingPreviousMessageData && _react["default"].createElement(LoadingComp, null), loadMessages(messagesData)), _react["default"].createElement(_chat2.InputCompWrapper, null, _react["default"].createElement(InputComp, {
    ref: inputRef,
    styles: inputCompStyles,
    onChange: messageInputOnChange,
    onFocus: scrollToBottom
  })));
}; // PropTypes


Chat.defaultProps = _chat.defaultProps;
Chat.propTypes = _chat.propTypes; // Exports

var _default = (0, _react.memo)(Chat);

exports["default"] = _default;