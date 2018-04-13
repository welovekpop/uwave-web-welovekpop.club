"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("material-ui/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Twitter icon from the Font-Awesome icon font by Dave Gandy:
// http://fontawesome.io/icon/twitter/
// https://github.com/FortAwesome/Font-Awesome

/* eslint-disable max-len */
var _ref =
/*#__PURE__*/
(0, _jsx2.default)("path", {
  d: "M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"
});

var TwitterIcon = function TwitterIcon(props) {
  return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
    viewBox: "0 0 1792 1792"
  }, props), _ref);
};
/* eslint-enable max-len */


var _default = TwitterIcon; //# sourceMappingURL=Twitter.js.map

exports.default = _default;
//# sourceMappingURL=Twitter.js.map
