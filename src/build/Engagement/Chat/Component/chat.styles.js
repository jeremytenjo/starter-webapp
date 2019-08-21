"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputCompWrapper = exports.OtherUserCompWrapper = exports.CurrentUserCompWrapper = exports.ChatList = exports.ChatWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

// Vendros
// Styles
var ChatWrapper = _styledComponents["default"].form.withConfig({
  displayName: "chatstyles__ChatWrapper",
  componentId: "sc-1rctxqf-0"
})(["position:relative;height:300px;overflow:hidden;"]);

exports.ChatWrapper = ChatWrapper;

var ChatList = _styledComponents["default"].div.withConfig({
  displayName: "chatstyles__ChatList",
  componentId: "sc-1rctxqf-1"
})(["height:100%;overflow:scroll;padding-bottom:50px;box-sizing:border-box;"]);

exports.ChatList = ChatList;

var CurrentUserCompWrapper = _styledComponents["default"].div.withConfig({
  displayName: "chatstyles__CurrentUserCompWrapper",
  componentId: "sc-1rctxqf-2"
})(["display:flex;justify-content:flex-start;"]);

exports.CurrentUserCompWrapper = CurrentUserCompWrapper;

var OtherUserCompWrapper = _styledComponents["default"].div.withConfig({
  displayName: "chatstyles__OtherUserCompWrapper",
  componentId: "sc-1rctxqf-3"
})(["display:flex;justify-content:flex-end;"]);

exports.OtherUserCompWrapper = OtherUserCompWrapper;

var InputCompWrapper = _styledComponents["default"].div.withConfig({
  displayName: "chatstyles__InputCompWrapper",
  componentId: "sc-1rctxqf-4"
})(["position:absolute;bottom:20px;left:0;right:0;margin:auto;display:flex;justify-content:center;"]);

exports.InputCompWrapper = InputCompWrapper;