"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Desktop = exports.Mobile = void 0;

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mobile = (0, _withProps.default)({
  maxWidth: 767
})(_reactResponsive.default);
exports.Mobile = Mobile;
var Desktop = (0, _withProps.default)({
  minWidth: 768
})(_reactResponsive.default); //# sourceMappingURL=index.js.map

exports.Desktop = Desktop;
//# sourceMappingURL=index.js.map
