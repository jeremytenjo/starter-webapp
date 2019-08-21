"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationCon = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "dialogstyle1styles__Wrapper",
  componentId: "sc-1hy98l3-0"
})(["width:fit-content;height:fit-content;border-radius:20px;background-color:var(--color-secondary-darker);border-radius:20px;color:var(--color-white);padding:var(--spacing-s);box-shadow:var(--boxShadow-3);display:grid;grid-gap:var(--spacing-m);"]);

exports.Wrapper = Wrapper;

var ConfirmationCon = _styledComponents["default"].div.withConfig({
  displayName: "dialogstyle1styles__ConfirmationCon",
  componentId: "sc-1hy98l3-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:var(--spacing-m);"]);

exports.ConfirmationCon = ConfirmationCon;