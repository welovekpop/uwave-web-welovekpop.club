"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// YouTube icon from the Font-Awesome icon font by Dave Gandy:
// http://fontawesome.io/icon/youtube-play/
// https://github.com/FortAwesome/Font-Awesome

/* eslint-disable max-len */
var _ref =
/*#__PURE__*/
(0, _jsx2.default)("path", {
  d: "M1280 896q0-37-30-54l-512-320q-31-20-65-2-33 18-33 56v640q0 38 33 56 16 8 31 8 20 0 34-10l512-320q30-17 30-54zm512 0q0 96-1 150t-8.5 136.5-22.5 147.5q-16 73-69 123t-124 58q-222 25-671 25t-671-25q-71-8-124.5-58t-69.5-123q-14-65-21.5-147.5t-8.5-136.5-1-150 1-150 8.5-136.5 22.5-147.5q16-73 69-123t124-58q222-25 671-25t671 25q71 8 124.5 58t69.5 123q14 65 21.5 147.5t8.5 136.5 1 150z"
});

var YouTubeIcon = function YouTubeIcon(props) {
  return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
    viewBox: "0 0 1792 1792"
  }, props), _ref);
};
/* eslint-enable max-len */


var _default = YouTubeIcon;
exports.default = _default;
//# sourceMappingURL=YouTube.js.map
