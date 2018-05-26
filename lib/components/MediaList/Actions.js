"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dontBubble = function dontBubble(event) {
  return event.stopPropagation();
};
/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */


var Actions = function Actions(_ref) {
  var className = _ref.className,
      makeActions = _ref.makeActions,
      media = _ref.media;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('MediaActions', className),
    onClick: dontBubble
  }, void 0, makeActions(media));
};
/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */


Actions.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  media: _propTypes.default.object,
  makeActions: _propTypes.default.func
} : {};
var _default = Actions;
exports.default = _default;
//# sourceMappingURL=Actions.js.map
