"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var disableCursor = {
  cursor: 'none'
};
var enableCursor = {};

var MouseMoveCapture = function MouseMoveCapture(_ref) {
  var active = _ref.active,
      onMouseMove = _ref.onMouseMove;
  return (0, _jsx2.default)("div", {
    className: "Video-overlay Video-capture",
    style: active ? enableCursor : disableCursor,
    onMouseMove: onMouseMove
  });
};

MouseMoveCapture.propTypes = process.env.NODE_ENV !== "production" ? {
  onMouseMove: _propTypes.default.func.isRequired,
  active: _propTypes.default.bool
} : {};
var _default = MouseMoveCapture; //# sourceMappingURL=VideoMouseMoveCapture.js.map

exports.default = _default;
//# sourceMappingURL=VideoMouseMoveCapture.js.map
