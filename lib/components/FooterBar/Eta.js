"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _formatDuration = _interopRequireDefault(require("format-duration"));

var _timed = _interopRequireDefault(require("../../utils/timed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Eta = function Eta(_ref) {
  var className = _ref.className,
      base = _ref.base,
      currentTime = _ref.currentTime,
      endTime = _ref.endTime;
  var currentRemaining = endTime - currentTime;
  return (0, _jsx2.default)("span", {
    className: (0, _classnames.default)('Eta', className)
  }, void 0, (0, _formatDuration.default)(base + currentRemaining));
};

Eta.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  currentTime: _propTypes.default.number.isRequired,
  endTime: _propTypes.default.number,
  base: _propTypes.default.number
} : {};

var _default = (0, _compose.default)((0, _timed.default)(), _pure.default)(Eta); //# sourceMappingURL=Eta.js.map


exports.default = _default;
//# sourceMappingURL=Eta.js.map
